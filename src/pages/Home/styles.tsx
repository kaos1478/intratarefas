import styled from "styled-components";

interface Props {
    bgImage: string;
}

const Container = styled.div`
    background-image: url(${(props: Props) => props.bgImage});
    background-size: cover;
    min-height: 90vh;

    display: flex;
    flex-direction: row;
    justify-content: space-around ;
    align-items: center;
`

export default Container;