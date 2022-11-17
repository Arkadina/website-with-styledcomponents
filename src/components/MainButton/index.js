import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    button {
        background-color: ${(props) =>
            props.theme === "light" ? "#fff" : "#1a191a"};
        padding: 5px 10px;
        font-size: 14px;
        border-radius: 4px;
        border: none;
    }

    .link {
        text-decoration: none;
        color: ${(props) => (props.theme === "light" ? "#1a191a" : "#fff")};
    }
`;

function MainButton(props) {
    const { t } = useTranslation();

    const text = props.text ? props.text : "See more";

    return (
        <Container theme={props.theme}>
            <button>
                <Link className="link" to={props.link ? props.link : "/"}>
                    {t(text)}
                </Link>
            </button>
        </Container>
    );
}

export default MainButton;
