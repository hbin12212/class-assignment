import React, { useState, useEffect } from "react";
//reactstrap
import { Form, FormGroup, Label, Input, FormFeedback, FormText } from "reactstrap";

const InputBox = () => {
    return (
        <div className="InputBox">
            <FormGroup className="position-relative">
                <Input valid />
                <FormFeedback valid tooltip>
                    Sweet! that name is available
                </FormFeedback>
            </FormGroup>
            <br />
            <FormGroup className="position-relative">
                <Input invalid />
                <FormFeedback tooltip>6자리의 숫자만 입력 가능합니다.</FormFeedback>
            </FormGroup>
        </div>
    );
};

export default InputBox;
