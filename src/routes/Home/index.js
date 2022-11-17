import React from "react";

import styled from "styled-components";

import HeroImage from "../../assets/svg/hero-home.svg";
import MainButton from "../../components/MainButton";
import CircleShow from "../../components/CircleShow";

const HeroContainer = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    width: 100%;
    height: 400px;
    padding: 30px 100px;

    .hero-text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
    }

    .hero-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    h3 {
        font-size: 30px;
    }

    p {
        font-size: 14px;
        margin: 12px 0px;
    }

    img {
        width: 350px;
        height: 350px;
        object-fit: cover;
    }
`;

const ImagesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0;
    margin: 50px 0;
    background-color: #e3e3e3;
    width: 100%;
    height: 450px;

    h2 {
        margin: 15px 0;
        font-size: 25px;
    }

    .circle-div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }

    .circle-show {
        margin: 5px;
    }
`;

const SecondContainer = styled.div`
    padding: 0 40px;
    margin: 50px 0;
    height: 500px;
    display: flex;
    width: 100%;

    .large-image-container {
        width: 50%;
        border: 40px solid #fff;
        background-color: #e3e3e3;
    }

    .medium-image-container {
        width: 50%;
        border: 40px solid #fff;
    }

    .medium-image-top {
        background-color: #e3e3e3;
        height: 50%;
    }

    .medium-image-bottom {
        margin-top: 20px;
    }

    .medium-image-bottom p {
        margin: 10px 0;
    }
`;

function Home() {
    return (
        <div>
            <HeroContainer>
                <div className="hero-text">
                    <h3>Lorem ipsum</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta ratione facere natus quia tempora deserunt eaque
                        sed error perspiciatis labore iusto quas qui possimus
                        animi earum sequi adipisci, fuga id.
                    </p>
                    <MainButton />
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="" />
                </div>
            </HeroContainer>
            <ImagesContainer>
                <h2>Lorem Ipsum dolor</h2>
                <div className="circle-div">
                    <CircleShow className="circle-show" />
                    <CircleShow className="circle-show" />
                    <CircleShow className="circle-show" />
                </div>
            </ImagesContainer>
            <SecondContainer>
                <div className="large-image-container"></div>
                <div className="medium-image-container">
                    <div className="medium-image-top"></div>
                    <div className="medium-image-bottom">
                        <h3>Lorem ipsum</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus tortor purus, rhoncus vel tellus in,
                            dapibus ullamcorper orci. Proin consectetur orci
                            metus, nec blandit urna facilisis nec. Phasellus
                            semper luctus nunc eget aliquet. Vestibulum et
                            turpis a augue iaculis interdum at id tellus. Donec
                            congue nisl vitae nisl rhoncus, et pellentesque
                            magna gravida. Ut at sapien elementum, venenatis
                            nunc eget, imperdiet tortor. Morbi vel mattis orci.
                        </p>
                        <MainButton />
                    </div>
                </div>
            </SecondContainer>
        </div>
    );
}

export default Home;
