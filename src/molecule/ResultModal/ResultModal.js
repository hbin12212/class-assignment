import React, { useState, useContext, useEffect } from "react";
//reactstrap
import { Modal, Button } from "reactstrap";
//store
import { ModalContext } from "store/ModalStore";
//scss
import "./ResultModal.scss";
//firebase
import firebase from "firebase";
import "firebase/firestore";
//util
import { getTimeStamp } from "util/timestamp/timestamp";
import { firebaseConfig } from "firebaseConfig";
//img
import celebrate from "img/celebrate.png";

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ResultModal = ({ userInfo }) => {
    const backdrop = "static";
    const [classResult, setClassResult] = useState("다시 시도해주세요.");
    const { resultModalClick, resultModalToggle } = useContext(ModalContext);

    useEffect(() => {
        if (resultModalClick) {
            var tongjinData = db.collection("tongjin");
            tongjinData
                .where("name", "==", userInfo?.name)
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if (doc.data().birth.seconds === getTimeStamp(userInfo?.birthday)) {
                            setClassResult(doc.data().class);
                        } else {
                            setClassResult("다시 시도해주세요.");
                        }
                    });
                })
                .catch(function (error) {
                    setClassResult("다시 시도해주세요.");
                });
        }
    }, [resultModalClick]);

    return (
        <div className="ResultModal">
            <Modal
                className="ResultModal"
                centered={true}
                isOpen={resultModalClick}
                toggle={resultModalToggle}
                backdrop={backdrop}
            >
                <div className="result-modal">
                    <img src={celebrate}></img>
                    <div className="result-modal-title">
                        <div className="user-name">{userInfo?.name}님</div>입학을 축하합니다🎉
                    </div>
                    <div className="result-modal-content-wrapper">
                        <div className="result-modal-content">
                            {classResult === "다시 시도해주세요." ? classResult : "1학년 " + classResult}
                            <br />
                        </div>
                    </div>
                    <div className="subimt-row">
                        <Button color="warning" onClick={() => resultModalToggle()}>
                            확인
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default ResultModal;
