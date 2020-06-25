import React from "react";

import Container from "./styles";
import NavbarButton from "./NavbarButton";
import NavbarDropdown from "./NavbarDropdown";
import PowerOff from "../../assets/img/poweroff.png"

const Navbar: React.FC = () => {
    return (
        <Container>
            <div>
                <h1>IntraTarefas</h1>
                <ul>
                    <NavbarButton to="/" text="Home" />
                    <NavbarDropdown text="Chamados" buttons={[{to: "/newcall", text: "Novo Chamado"},{to: "/calllist", text: "Lista de Chamados"}]} />
                    <NavbarButton to="/graphics" text="Gráficos" />
                </ul>
            </div>
            <div>
                <span>
                    Bruno Henrique Ramos da Silva
                </span>
                <button>
                    <img src={PowerOff} alt="logoff"></img>
                </button>
            </div>
        </Container>
    )
}

export default Navbar;