import React from "react";
import styled from "styled-components";

const divHeight = 1500;

const Container = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    .all-divs {
        height: ${divHeight}px;
    }
`;

const FirstColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
const SecondColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 20px 10px;
`;
const ThridColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Image = styled.img`
    width: 355px;
    height: ${(props) => props.height};
    background-color: #ccc;
    margin: 20px;
`;

function Index() {
    function generateHeight() {
        let height = Math.floor(
            divHeight > 1500
                ? Math.random() * (800 - 800 / 3) + 800 / 2
                : Math.random() * (divHeight - divHeight / 3) + divHeight / 2
        );
        return height;
    }

    return (
        <Container>
            <FirstColumn className="all-divs">
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
            </FirstColumn>
            <SecondColumn className="all-divs">
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
            </SecondColumn>
            <ThridColumn className="all-divs">
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
                <Image height={generateHeight()} />
            </ThridColumn>
        </Container>
    );
}

export default Index;
