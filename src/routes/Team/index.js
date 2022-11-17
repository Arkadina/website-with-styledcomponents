import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

import TeamMember from "../../components/TeamMember";

const people = [
    {
        name: "Denver",

        func: "Software engineering",
    },
    {
        name: "Sara",
        func: "Designer",
    },
    {
        name: "Louise",
        func: "Finances",
    },
    {
        name: "Cassandra",
        func: "Software engineering",
    },
    {
        name: "Misha",
        func: "Software engineering",
    },
    {
        name: "Laura",
        func: "Quality Assurance",
    },
    {
        name: "Misha",
        func: "Quality Assurance",
    },
    {
        name: "Louise",
        func: "Finances",
    },
    {
        name: "Yara",
        func: "Marketing",
    },
    {
        name: "Laura",
        func: "Quality Assurance",
    },
    {
        name: "Misha",
        func: "Quality Assurance",
    },
    {
        name: "Louise",
        func: "Finances",
    },
    {
        name: "Yara",
        func: "Marketing",
    },
];

const Container = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-direction: column;

    .down-container {
        padding: 40px;
        display: flex;
        column-gap: 100px;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
`;
function Index() {
    const { t } = useTranslation();
    return (
        <Container>
            <div className="upper-container">
                <h2>
                    {t(
                        `Meet our team of creators, designers, and world-class problem solvers`
                    )}
                </h2>
                <p>
                    {t(
                        `To be the company our customers want us to be, it takes an eclectic group of passionate operators. Get to know the people leading the way.`
                    )}
                </p>
            </div>
            <div className="down-container">
                {people.map((item, index) => (
                    <TeamMember
                        img={item.img}
                        func={item.func}
                        name={item.name}
                        key={index}
                    />
                ))}
            </div>
        </Container>
    );
}

export default Index;
