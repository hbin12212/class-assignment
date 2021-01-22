import React, { useState, useEffect } from "react";
//reactstrap
import { Input, FormFeedback, Container, FormGroup, Button } from "reactstrap";

//scss
import "./InputBox.scss";

const GuideBox = () => {
    return (
        <div className="GuideBox">
            <div className="guide-box">
                <div></div>
            </div>
        </div>
    );
};

const InputBox = () => {
    const [birth, setBirth] = useState("");
    const [name, setName] = useState("");
    const [buttonState, setButtonState] = useState(false);

    return (
        <Container>
            <div className="InputBox">
                <div className="title">반 확인하기</div>
                <div className="birth-wrapper">
                    <div className="label">
                        <div id="birth-icon">🎂</div>
                        <span>생년월일 6자리를 입력해주세요</span>
                    </div>
                    <FormGroup className="position-relative">
                        <Input
                            valid
                            value={birth}
                            className="input-box-birth"
                            placeholder="ex) 981231"
                            onChange={({ target: { value } }) => setBirth(value)}
                        />
                        <FormFeedback valid tooltip>
                            6자리의 숫자만 입력 가능합니다.
                        </FormFeedback>
                    </FormGroup>
                </div>
                <br />
                <div className="name-wrapper">
                    <div className="label">
                        <div id="name-icon">📚</div>
                        <span>이름을 입력해주세요</span>
                    </div>
                    <FormGroup className="position-relative">
                        <Input
                            invalid
                            value={name}
                            className="input-box-name"
                            placeholder="ex) 김희수"
                            onChange={({ target: { value } }) => setName(value)}
                        />
                        <FormFeedback tooltip>Sweet! that name is available</FormFeedback>
                    </FormGroup>
                </div>
                <div className="button-box">
                    <div
                        className={buttonState ? "button-on" : "button-off"}
                        onClick={() => {
                            alert("클릭");
                        }}
                    >
                        확인하기
                    </div>
                </div>
            </div>
            <GuideBox />
        </Container>
    );
};

export default InputBox;
