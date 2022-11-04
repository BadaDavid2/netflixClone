import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <div><a href="">Questions? Contact us.</a></div>
            <DIV>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Investor Relations</a></li>
                    <li><a href="">Privacy</a></li>
                    <li><a href="">Speed Test</a></li>
                </ul>
                <ul>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Jobs</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                    <li><a href="">Legal Notices</a></li>
                </ul>
                <ul>
                    <li><a href="">Account</a></li>
                    <li><a href="">Ways to Watch</a></li>
                    <li><a href="">Corporate Information</a></li>
                    <li><a href="">Only on Netflix</a></li>
                </ul>
                <ul>
                    <li><a href="">Media Center</a></li>
                    <li><a href="">Terms of Use</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </DIV>
            <div>Netflix Nigeria</div>
        </Wrapper>
      </Container>
    </>
  )
}

export default Footer
const Container = styled.div`
        width: 100%;
    background-color: black;
    min-height: 30vh;
    /* height: 100vh; */
    max-height: fit-content;
    border-bottom: 10px rgb(34,34,34) solid;
    padding: 20px 0px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    max-width: 900px;
    margin: auto;
    @media only screen and (min-width:360px) and (max-width:500px){
        width: 90%;
        margin: auto;
    }
    div{
        color: #303030;
    }
    a{
        color: #303030;
        text-decoration: none;
    }
    li{
        list-style: none;
    }
`
const DIV = styled.div`
    display: flex;
    width: 100%;
    margin: 30px 0px;
    justify-content: space-between;
    @media only screen and (min-width:360px) and (max-width:500px){
        width: 90%;
        margin: auto;
        flex-wrap: wrap;
    }

`