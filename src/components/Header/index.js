import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import MainButton from "../MainButton";

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    padding: 0 80px;
    background-color: #1a191a;
    color: #fff;

    .header-logo {
        text-decoration: none;
        color: #fff;
    }
`;

const ListHeader = styled.li`
    display: inline-block;
    list-style: none;
    margin: 0 10px;

    .header-link {
        color: #fff;
        text-decoration: none;
        font-size: 12px;
    }

    .header-link:hover {
        font-weight: 600;
    }
`;

function Header() {
    const { t } = useTranslation();
    return (
        <Container>
            <span>
                <h3>
                    <NavLink className="header-logo" to="/">
                        Logo
                    </NavLink>
                </h3>
            </span>
            <nav>
                <ul>
                    <ListHeader>
                        <NavLink className="header-link" to="/about">
                            {t("About")}
                        </NavLink>
                    </ListHeader>
                    <ListHeader>
                        <NavLink className="header-link" to="/images">
                            {t("Images")}
                        </NavLink>
                    </ListHeader>
                    <ListHeader>
                        <NavLink className="header-link" to="/team">
                            {t("Team")}
                        </NavLink>
                    </ListHeader>

                    <ListHeader>
                        <NavLink className="header-link" to="/contact">
                            {t("Contact")}
                        </NavLink>
                    </ListHeader>
                </ul>
            </nav>
            <div>
                <MainButton theme="light" />
            </div>
        </Container>
    );
}

export default Header;
