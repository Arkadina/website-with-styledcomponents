import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ChangeLanguage from "../../components/ChangeLanguage";

const colorBackground = "#1B2021";

const Container = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    padding: 0 80px;
    color: ${colorBackground};

    span {
        display: flex;
        font-size: 16px;
    }
`;

const ListComponent = styled.li`
    & {
        display: inline-block;
        margin: 0 10px;
    }

    .footer-link {
        color: #000;
        font-size: 14px;
        text-decoration: none;
    }

    .footer-link:hover {
        font-weight: 600;
    }
`;

function Footer() {
    const { t } = useTranslation();
    return (
        <Container>
            <h3>Lorem</h3>
            <div>
                <nav>
                    <ul>
                        <ListComponent>
                            <NavLink className="footer-link" to="/privacy">
                                {t("Privacy")}
                            </NavLink>
                        </ListComponent>
                        <ListComponent>
                            <NavLink
                                className="footer-link"
                                to="/termsandconditions"
                            >
                                {t("Terms and conditions")}
                            </NavLink>
                        </ListComponent>
                        <ListComponent>
                            <NavLink className="footer-link" to="/about">
                                {t("About")}
                            </NavLink>
                        </ListComponent>
                    </ul>
                </nav>
            </div>
            <span>
                All rights reserved.
                <ChangeLanguage />
            </span>
        </Container>
    );
}

export default Footer;
