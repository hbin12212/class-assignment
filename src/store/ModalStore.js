import React, { useState, useEffect, useContext } from "react";
import { getTimeStamp } from "util/timestamp/timestamp";

const ModalContext = React.createContext(null);

const ModalProvider = ({ id, children }) => {
    const [resultModalClick, setResultModalClick] = useState(false);
    const resultModalToggle = () => {
        setResultModalClick(!resultModalClick);
    };
    const store = { resultModalClick, setResultModalClick, resultModalToggle };
    return <ModalContext.Provider value={store}>{children}</ModalContext.Provider>;
};
export { ModalProvider, ModalContext };
