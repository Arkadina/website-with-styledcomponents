import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 50px;

    .circle-img {
        width: 180px;
        height: 180px;
        background-color: #ccc;
        border-radius: 50%;
    }

    h4 {
        margin: 5px 0;
    }
`;

function index() {
    return (
        <Container>
            <div class="circle-img"></div>
            <h4>Lorem Ipsum</h4>
            <p>Lorem Ipsum dolor sit.</p>
        </Container>
    );
}

export default index;
