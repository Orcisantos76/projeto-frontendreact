import styled from "styled-components";


export const Container = styled.section`
    display: flex;
    flex-direction: column;
`

export const Topo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .ordenacao{
        padding: 5px;
        display: flex;
        align-items: center;
        gap: 2px;
    }
    

`
export const Cards=styled.div`
display: flex;
flex-wrap: wrap;

gap: 1vw;

`