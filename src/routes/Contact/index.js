import { t } from "i18next";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 89vh;
    .map {
        width: 45%;

        iframe {
            width: 100%;
            border: none;
            border-radius: 20px;
            height: 450px;
        }
    }

    .form {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 450px;
        text-align: center;

        form {
            padding: 20px;
            flex-direction: column;
            align-items: flex-start;
            width: 500px;

            label {
                float: left;
                display: block;
                margin: 5px 0;
            }

            input,
            textarea {
                display: block;
                border: none;
                background-color: #ccc;
                padding: 10px 15px;
                min-width: 100%;
                height: 35px;
                outline: none;
                border-radius: 8px;
                font-family: "Poppins", sans-serif;
                color: #1a191a;
            }

            textarea {
                height: 200px !important;
            }
        }
    }
`;

function index() {
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <Container>
            <div className="map">
                <iframe
                    title="google-map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d174611.7756799138!2d-71.48499777834778!3d46.85729128951386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8968a05db8893%3A0x8fc52d63f0e83a03!2zUXVlYmVjLCBDYW5hZMOh!5e0!3m2!1spt-BR!2sbr!4v1668698489199!5m2!1spt-BR!2sbr"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="form">
                <form onSubmit={handleOnSubmit}>
                    <h1>{t("Contact")}</h1>
                    <label htmlFor="name">{t("Your name")}</label>
                    <input type="text" required id="name" />
                    <label htmlFor="email">{t("Your email")}</label>
                    <input type="text" required id="email" />
                    <label htmlFor="content">{t("Text")}</label>
                    <textarea required cols="40" rows="5" id="content" />
                </form>
            </div>
        </Container>
    );
}

export default index;
