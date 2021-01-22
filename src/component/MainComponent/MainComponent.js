import React, { useState, useEffect } from "react";
//reactstrap
import { Container } from "reactstrap";
//molecule
import InputBox from "molecule/InputBox/InputBox";
//scss
import "./MainComponent.scss";
//img
import school_logo from "img/school_logo.png";

const MainComponent = () => {
    return (
        <>
            <div className="MainComponent">
                <Container>
                    <div className="main-wrapper">
                        <div className="left-wrapper">
                            <img src={school_logo}></img>
                            <div
                                className="homepage-button"
                                onClick={() => {
                                    {
                                        window.open("http://www.tongjin.ms.kr/wah/main/index.htm");
                                    }
                                }}
                            >
                                <div className="school-name"> 통진중학교</div>
                                <div className="button-name">홈페이지 바로가기</div>
                            </div>
                        </div>
                        <div className="right-wrapper">
                            <InputBox />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default MainComponent;
