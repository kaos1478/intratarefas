import styled from "styled-components";

const Container = styled.nav`

    width: 100vw;
    min-height: 10vh;
    background: #00995D;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div > ul {
        margin-left: 10px;
        list-style: none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    div > button {
        margin-left: 10px;
        background: none;
        border: none;
    }

    h1 {
        color: #162D16;
        letter-spacing: 2px;
    }

`

export default Container;