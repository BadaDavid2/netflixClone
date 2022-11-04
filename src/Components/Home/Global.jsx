import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: black;
    min-height: 60vh;
    /* height: 100vh; */
    max-height: fit-content;
    border-bottom: 10px rgb(34,34,34) solid;
    padding: 20px 0px;
`
export const Wrapper = styled.div`
width: 70%;
height: 100%;
margin: auto;
display: flex;
align-items: center;
@media only screen and (min-width:360px) and (max-width:820px){
  flex-direction: column;
  text-align: center;
}
`
export const Text = styled.div`
color: white;
flex: 1;
`