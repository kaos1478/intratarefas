import React from "react";

import Container from "./styles";

interface Props {
    image: string;
    title: string;
}

const MainButton: React.FC<Props> = ({image, title}: Props) => {
    return (
        <Container>
            <img src={image} alt="imagem"></img>
            <h3>{title}</h3>
            <br />
        </Container>
    )
}

export default MainButton;