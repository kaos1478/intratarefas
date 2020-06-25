import React from "react";

import Container from "./styles";
import BackgroundImg from "../../assets/img/background.jpg";

import MainButton from "../../components/MainButton"

import FormImg from "../../assets/img/form.png";
import ChartImg from "../../assets/img/chart.png";
import ListImg from "../../assets/img/list.png";

const Home: React.FC = () => {
    return (
        <Container bgImage={BackgroundImg}>
            <MainButton image={FormImg} title="Novo Chamado"/>
            <MainButton image={ListImg} title="Lista de Chamados"/>
            <MainButton image={ChartImg} title="Gráficos"/>
        </Container>
    )
}

export default Home;