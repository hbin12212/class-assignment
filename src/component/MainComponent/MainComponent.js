import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";

//scss
import "./MainComponent.scss";

const MainComponent = () => {
    return (
        <>
            <div className="MainComponent">
                <Container>
                    <div className="school-name">통진중학교</div>
                    <div className="information">
                        <div id="info-header">정보입력</div>

                        <div id="info-content">본인의 생년월일과 이름을 입력해주세요.</div>
                    </div>
                    <div className="input-box"></div>
                </Container>
            </div>
        </>
    );
};

export default MainComponent;
