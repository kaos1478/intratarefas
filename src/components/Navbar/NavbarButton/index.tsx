import React from "react";
import {Link} from "react-router-dom";
import Container from "./styles";

interface Props {
    children?: React.ReactNode;
    to: string;
    text: string;
}

const NavbarButton: React.FC<Props> = ({to, text}) => {
    return (
        <Container><Link className="navbar-link" to={to}>{text}</Link></Container>
    )
}

export default NavbarButton;