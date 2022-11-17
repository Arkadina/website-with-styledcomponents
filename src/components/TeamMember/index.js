import React from "react";
import styled from "styled-components";

const Container = styled.div`
    img {
        width: 250px;
        height: 250px;
        /* object-fit: cover;
        margin-bottom: 10px; */
        background-color: #ccc;
        border-radius: 8px;
    }

    p {
        font-style: italic;
        margin-bottom: 40px;
        font-size: 14px;
    }
`;

function index({ alt, img, name, func }) {
    return (
        <Container>
            <img alt={alt} />
            <h3>{name}</h3>
            <p>{func}</p>
        </Container>
    );
}

export default index;
