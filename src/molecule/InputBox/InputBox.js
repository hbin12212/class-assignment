import React, { useState, useEffect } from "react";
//reactstrap
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";
//icon
import CakeRoundedIcon from "@material-ui/icons/CakeRounded";

const InputBox = () => {
    const [birth, setBirth] = useState("940107");
    const [name, setName] = useState("이정환");

    return (
        <div className="InputBox">
            <div className="birth-wrapper">
                <CakeRoundedIcon />
                <Input valid /> <FormFeedback tooltip>6자리의 숫자만 입력 가능합니다.</FormFeedback>
            </div>
            <br />
            <div className="name-wrapper">
                <Input invalid />
                <FormFeedback valid tooltip>
                    Sweet! that name is available
                </FormFeedback>
            </div>
        </div>
    );
};

export default InputBox;
