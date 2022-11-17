import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import "/node_modules/flag-icons/css/flag-icons.min.css";

const Container = styled.div`
    display: flex;
    margin: 0 5px;
    span {
        cursor: pointer;
        width: 25px;
        height: 25px;
        margin: 0 5px;
    }
`;

function ChangeLanguage() {
    const { i18n } = useTranslation();

    function changeLanguage(lng) {
        localStorage.setItem("idiom", `${lng}`);
        i18n.changeLanguage(lng);
    }
    return (
        <Container>
            <span
                className="fi fi-br"
                onClick={() => changeLanguage("pt-BR")}
            ></span>
            <span
                className="fi fi-us"
                onClick={() => changeLanguage("en-US")}
            ></span>
        </Container>
    );
}

export default ChangeLanguage;
