import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import dividePathname from "../../assets/utils/dividePathname";

const Container = styled.div`
    ul {
        list-style: none;
    }
`;

const LiContainer = styled.li`
    display: inline-block;

    & a {
        font-size: 14px;
        text-decoration: none;
        color: #1a191a;
    }

    & a:hover {
        text-decoration: underline;
    }

    &:not(:last-of-type)::after {
        content: " / ";
        margin: 0 5px;
        color: #1a191a;
        font-weight: 600;
    }

    &:last-child a {
        color: #1a191a;
        font-weight: 600;
    }
`;

function BreadCrumbs() {
    let location = useLocation();
    const { pathname } = location;
    const path = dividePathname(pathname); // ['home', 'casa']

    return (
        <div>
            <Container>
                <ul>
                    {path.map((item, index) => (
                        <LiContainer key={index}>
                            <a href="void():javascript">{item}</a>
                        </LiContainer>
                    ))}
                </ul>
            </Container>
        </div>
    );
}

export default BreadCrumbs;
