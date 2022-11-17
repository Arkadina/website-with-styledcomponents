import React from "react";
import styled from "styled-components";
import MainButton from "../../components/MainButton";

const Container = styled.div`
    padding: 40px 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-height: 89vh;

    .left-side {
        padding-right: 10px;
        width: 50%;

        p {
            margin: 10px 0;
        }
    }

    .right-side {
        padding: 10px;
        width: 50%;
        height: 100%;

        div {
            width: 100%;
            background-color: #1a191a;
            border-radius: 8px;
            height: 350px;
            margin-bottom: 20px;
        }
    }
`;

function index() {
    return (
        <Container>
            <div className="left-side">
                <h1>Lorem Ipsum</h1>
                <p>
                    Vestibulum mi tortor, scelerisque eu sollicitudin eget,
                    molestie a ante. Ut rhoncus hendrerit lectus eu elementum.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Fusce tempor congue
                    volutpat. Aenean at magna id metus varius efficitur.
                    Pellentesque eu mauris sed justo scelerisque lobortis id vel
                    turpis. Fusce eu quam mattis sem maximus vehicula. Sed a
                    euismod est. Proin gravida justo ante, sed varius ante
                    tempor nec. Morbi commodo euismod cursus. Curabitur feugiat
                    massa id sem accumsan condimentum. Curabitur fringilla,
                    neque vel posuere aliquet, ipsum ex fringilla elit, ac
                    commodo arcu odio a mauris. Cras vitae eros id dolor
                    venenatis volutpat. Nam nibh massa, sollicitudin et cursus
                    vitae, facilisis a tellus. Aliquam lacinia lacus non magna
                    mattis, ut ultricies metus cursus.
                </p>
                <p>
                    Vestibulum mi tortor, scelerisque eu sollicitudin eget,
                    molestie a ante. Ut rhoncus hendrerit lectus eu elementum.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Fusce tempor congue
                    volutpat. Aenean at magna id metus varius efficitur.
                    Pellentesque eu mauris sed justo scelerisque lobortis id vel
                    turpis. Fusce eu quam mattis sem maximus vehicula. Sed a
                    euismod est. Proin gravida justo ante, sed varius ante
                    tempor nec. Morbi commodo euismod cursus. Curabitur feugiat
                    massa id sem accumsan condimentum. Curabitur fringilla,
                    neque vel posuere aliquet, ipsum ex fringilla elit, ac
                    commodo arcu odio a mauris. Cras vitae eros id dolor
                    venenatis volutpat. Nam nibh massa, sollicitudin et cursus
                    vitae, facilisis a tellus. Aliquam lacinia lacus non magna
                    mattis, ut ultricies metus cursus.
                </p>
                <p>
                    Vestibulum mi tortor, scelerisque eu sollicitudin eget,
                    molestie a ante. Ut rhoncus hendrerit lectus eu elementum.
                    Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Fusce tempor congue
                    volutpat. Aenean at magna id metus varius efficitur.
                    Pellentesque eu mauris sed justo scelerisque lobortis id vel
                    turpis. Fusce eu quam mattis sem maximus vehicula. Sed a
                    euismod est. Proin gravida justo ante, sed varius ante
                    tempor nec. Morbi commodo euismod cursus. Curabitur feugiat
                    massa id sem accumsan condimentum. Curabitur fringilla,
                    neque vel posuere aliquet, ipsum ex fringilla elit, ac
                    commodo arcu odio a mauris. Cras vitae eros id dolor
                    venenatis volutpat. Nam nibh massa, sollicitudin et cursus
                    vitae, facilisis a tellus. Aliquam lacinia lacus non magna
                    mattis, ut ultricies metus cursus.
                </p>
                <MainButton text="Contact" link="/contact" />
            </div>
            <div className="right-side">
                <div></div>
                <div></div>
            </div>
        </Container>
    );
}

export default index;
