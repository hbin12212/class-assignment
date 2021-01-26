import React, { useState, useContext } from "react";
//reactstrap
import { Modal, Button } from "reactstrap";
//store
import { ModalContext } from "store/ModalStore";
//scss
import "./ResultModal.scss";

const ResultModal = ({ userName }) => {
    const backdrop = "static";
    const { resultModalClick, resultModalToggle } = useContext(ModalContext);

    return (
        <div className="ResultModal">
            <Modal
                className="ResultModal"
                size="lg"
                isOpen={resultModalClick}
                toggle={resultModalToggle}
                backdrop={backdrop}
            >
                <div className="result-modal">
                    <div className="result-modal-title">{userName} 님의 반 </div>
                    <div className="result-modal-content-wrapper">
                        <div className="result-modal-content">
                            3학년 4반
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
