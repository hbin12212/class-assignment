import React, { useState, useEffect } from "react";
//reactstrap
import { Input, FormFeedback, Container, FormGroup, Button } from "reactstrap";
//scss
import "./InputBox.scss";
//regex
import { checkRegex } from "util/regex/regex";

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
    const [state, setState] = useState({
        name: "",
        birthday: "",
    });
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
                            value={state?.birthday}
                            className="input-box-birth"
                            placeholder="ex) 981231"
                            onChange={({ target: { value } }) => setState(value)}
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
                            value={state?.name}
                            className="input-box-name"
                            placeholder="ex) 김희수"
                            onChange={(event) =>
                                setState({
                                    ...state,
                                    name: event.target.value,
                                })
                            }
                        />
                        <FormFeedback tooltip>숫자나 특수문자를 입력할 수 없습니다.</FormFeedback>
                    </FormGroup>
                </div>
                <div className="button-box">
                    <div
                        className={"button " + buttonState === true ? "on" : "off"}
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
