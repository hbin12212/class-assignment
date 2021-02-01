import React, { useState, useEffect, useContext } from "react";
//reactstrap
import { Input, FormFeedback, Container, FormGroup } from "reactstrap";
//scss
import "./InputBox.scss";
//regex
import { checkRegex } from "util/regex/regex";
//store
import { ModalContext } from "store/ModalStore";
//modal
import ResultModal from "molecule/ResultModal/ResultModal";
//img
import school_logo from "img/school_logo.png";

const BirthInputBox = ({ state, setState, buttonState, setButtonState }) => {
    const [warnString, setWarnString] = useState("");

    useEffect(() => {
        var warn = checkRegex("생년월일에는", ["special", "number", "space"], state?.birthday);
        setWarnString(warn[0]);
        setButtonState({ ...buttonState, birthday: false });
        if (warn?.length < 1) {
            if (state?.birthday?.length === 6) {
                setButtonState({ ...buttonState, birthday: true });
                setWarnString("올바른 값을 입력했습니다.");
            } else {
                setWarnString("올바른 값을 입력해주세요.");
            }
        }
    }, [state?.birthday]);

    return (
        <FormGroup className="position-relative">
            <Input
                value={state?.birthday}
                className={buttonState?.birthday ? "is-valid" : "is-invalid"}
                placeholder="ex) 081231"
                onChange={({ target: { value } }) =>
                    setState({
                        ...state,
                        birthday: value,
                    })
                }
            />
            <FormFeedback
                className={buttonState?.birthday ? "valid-tooltip" : "invalid-tooltip"}
                style={{ fontSize: "12px" }}
            >
                {warnString}
            </FormFeedback>
        </FormGroup>
    );
};

const NameInputBox = ({ state, setState, buttonState, setButtonState }) => {
    const [warnString, setWarnString] = useState("");

    useEffect(() => {
        var warn = checkRegex("이름에는", ["special", "space"], state?.name);
        setWarnString(warn[0]);
        setButtonState({ ...buttonState, name: false });
        if (warn?.length < 1) {
            if (state?.name?.length >= 2) {
                setButtonState({ ...buttonState, name: true });
                setWarnString("올바른 값을 입력했습니다.");
            } else {
                setWarnString("올바른 값을 입력해주세요.");
            }
        }
    }, [state?.name]);

    return (
        <FormGroup className="position-relative">
            <Input
                value={state?.name}
                className={buttonState?.name ? "is-valid" : "is-invalid"}
                placeholder="ex) 김희수"
                style={{ fontSize: "15px;" }}
                onChange={({ target: { value } }) =>
                    setState({
                        ...state,
                        name: value,
                    })
                }
            />
            <FormFeedback
                className={buttonState?.name ? "valid-tooltip" : "invalid-tooltip"}
                style={{ fontSize: "12px" }}
            >
                {warnString}
            </FormFeedback>
        </FormGroup>
    );
};

const InputBox = () => {
    const [state, setState] = useState({
        name: "",
        birthday: "",
    });
    const [buttonState, setButtonState] = useState({
        name: false,
        birthday: false,
    });
    const [isButtonOn, setIsButtonOn] = useState(false);

    useEffect(() => {
        setIsButtonOn(false);
        if (buttonState?.name && buttonState?.birthday) {
            setIsButtonOn(true);
        }
    }, [buttonState]);
    //context
    const { resultModalToggle } = useContext(ModalContext);

    const ClickableBtn = () => {
        return (
            <>
                <div
                    onClick={() => {
                        resultModalToggle();
                    }}
                >
                    확인하기
                </div>
            </>
        );
    };

    return (
        <Container>
            <div className="InputBox">
                <div className="mobile-logo">
                    <img
                        src={school_logo}
                        onClick={() => {
                            {
                                window.open("http://www.tongjin.ms.kr/wah/main/index.htm");
                            }
                        }}
                    ></img>
                </div>
                <div className="title">반 확인하기</div>
                <div className="birth-wrapper">
                    <div className="label">
                        <div id="birth-icon">🎂</div>
                        <span>생년월일 6자리를 입력해주세요</span>
                    </div>
                    <BirthInputBox
                        state={state}
                        setState={setState}
                        buttonState={buttonState}
                        setButtonState={setButtonState}
                    />
                </div>
                <br />
                <div className="name-wrapper">
                    <div className="label">
                        <div id="name-icon">📚</div>
                        <span>이름을 입력해주세요</span>
                    </div>
                    <NameInputBox
                        state={state}
                        setState={setState}
                        buttonState={buttonState}
                        setButtonState={setButtonState}
                    />
                </div>
                <div className="button-box">
                    <div className={isButtonOn ? "on" : "off"}>
                        {isButtonOn ? <ClickableBtn /> : <div>확인하기</div>}
                    </div>
                </div>
            </div>
            <ResultModal userInfo={state} />
        </Container>
    );
};

export default InputBox;
