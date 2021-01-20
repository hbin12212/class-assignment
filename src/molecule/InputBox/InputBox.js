import React, { useState, useEffect } from "react";
//reactstrap
import { Input, FormFeedback, Container, FormGroup } from "reactstrap";

//scss
import "./InputBox.scss";

const InputBox = () => {
    const [birth, setBirth] = useState("");
    const [name, setName] = useState("");

    return (
        <Container>
            <div className="InputBox">
                <div className="birth-wrapper">
                    <div className="label">
                        <div id="birth-icon">🎂</div>
                        <span> 생년월일 6자리를 입력해주세요</span>
                    </div>
                    <FormGroup className="position-relative">
                        <Input
                            valid
                            value={birth}
                            className="input-box"
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
                        <span> 이름을 입력해주세요</span>
                    </div>
                    <FormGroup className="position-relative">
                        <Input
                            invalid
                            value={name}
                            className="input-box"
                            placeholder="ex) 김희수"
                            onChange={({ target: { value } }) => setName(value)}
                        />
                        <FormFeedback tooltip>Sweet! that name is available</FormFeedback>
                    </FormGroup>
                </div>
            </div>
        </Container>
    );
};

export default InputBox;
