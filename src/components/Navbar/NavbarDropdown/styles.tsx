import styled from "styled-components";

const Container = styled.ul`

    list-style: none;

    .navbar-link {
        width: 100%;
        border: none;
    }

    span {
        text-decoration: none;
        color: black;
        margin-left: 10px;
        padding: 10px;
        cursor: pointer;
        border-radius: 10px;
    }

    ul {
        position:absolute; 
        display:none; 
        background: #00834F;
        list-style: none;
        border: 1px solid darkgreen;
        border-radius: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    ul li {
        padding: 10px;
    }

    &:hover {
        span {
            color: white;
        }
        ul {
            display: flex;
            flex-direction: column;
            -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
            -moz-animation: fadein 0.5s; /* Firefox < 16 */
            -ms-animation: fadein 0.5s; /* Internet Explorer */
            -o-animation: fadein 0.5s; /* Opera < 12.1 */
            animation: fadein 0.5s;
        }
    }

`

export default Container;