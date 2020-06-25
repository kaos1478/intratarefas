import React from "react";
import Container from "./styles";
import NavbarButton from "../NavbarButton";

interface Props {
    text: string;
    buttons: {to: string, text: string}[];
}

const NavbarDropdown: React.FC<Props> = ({text, buttons}) => {
    return (
        <Container>
            <li><span>{text}</span></li>
            <ul>
                {buttons.map(button => <NavbarButton to={button.to} text={button.text} />)}
            </ul>
        </Container>
    );
}

export default NavbarDropdown;