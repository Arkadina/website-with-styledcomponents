import { Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import Contact from "./routes/Contact";

import About from "./routes/About";
import Images from "./routes/Images";
import Team from "./routes/Team";
import TermsAndConditions from "./routes/TermsAndConditions";
import Privacy from "./routes/Privacy";

import "./App.css";
import "./i18n/index";

import GlobalStyles from "./globalStyles";
import styled from "styled-components";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;

function App() {
    const { i18n } = useTranslation();

    useEffect(() => {
        getIdiom();
        // eslint-disable-next-line
    }, []);

    async function getIdiom() {
        const idiom = await localStorage.getItem("idiom");
        if (idiom) {
            i18n.changeLanguage(idiom);
            return;
        }
    }

    return (
        <div className="App">
            <GlobalStyles />
            <HomeContainer>
                <Header />
                <Routes>
                    <Route path="/" index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/images" element={<Images />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/privacy" element={<Privacy />} />
                    <Route
                        path="/termsandconditions"
                        element={<TermsAndConditions />}
                    />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </HomeContainer>
        </div>
    );
}

export default App;
