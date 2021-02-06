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
    const [classResult, setClassResult] = useState("");
    const { resultModalClick, resultModalToggle } = useContext(ModalContext);

    useEffect(() => {
        if (resultModalClick) {
            var nameFlag = false;
            var birthFlag = false;
            var tongjinData = db.collection("tongjin");
            tongjinData
                .where("name", "==", (userInfo?.name).toUpperCase())
                .get()
                .then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        nameFlag = true; //이름 일치 여부
                        console.log(doc.data());
                        if (doc.data().birth.seconds === getTimeStamp(userInfo?.birthday)) {
                            setClassResult(doc.data().class);
                            birthFlag = true;
                            console.log("일치");
                        } else if (
                            //이름을 일치하지만, 생일은 불일치
                            birthFlag === false &&
                            doc.data().birth.seconds !== getTimeStamp(userInfo?.birthday)
                        ) {
                            setClassResult("다시 입력해주세요.");
                            console.log(nameFlag);
                        }
                    });
                    if (nameFlag === false) {
                        //이름 불일치
                        console.log(nameFlag);
                        setClassResult("다시 입력해주세요.");
                    }
                });
        } else {
            setClassResult("");
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
                        <div className="user-name">{(userInfo?.name).toUpperCase()}님</div>입학을 축하합니다🎉
                    </div>
                    <div className="result-modal-content-wrapper">
                        <div className="result-modal-content">
                            {classResult === "다시 입력해주세요." ? classResult : "1학년 " + classResult}
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
