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
