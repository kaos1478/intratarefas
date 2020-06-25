import styled from "styled-components";

const Container = styled.li`

    .navbar-link {
        text-decoration: none;
        color: black;
        margin-left: 10px;
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
    }

    &:hover{
        .navbar-link:hover {
            color: white;
        }
    }

`

export default Container;