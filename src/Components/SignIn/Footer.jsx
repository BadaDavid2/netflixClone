import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <div><a className='impo' href="">Questions? Contact us.</a></div>
            <DIV>
                <ul>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                </ul>
                <ul>
                    <li><a href="">Help Center</a></li>
                    <li><a href="">Cookie Preferences</a></li>
                </ul>
                <ul>
                    <li><a href="">Terms of Use</a></li>
                </ul>
                <ul>
                    <li><a href="">Privacy</a></li>
                </ul>
            </DIV>
        </Wrapper>
      </Container>
    </>
  )
}

export default Footer

const Container = styled.div`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.723);
    min-height: 20vh;
    max-height: fit-content;
    margin-top: 20px;
    padding: 20px 0px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 600;
    max-width: 900px;
    margin: auto;
    @media only screen and (min-width:360px) and (max-width:820px){
      border-top: 2px solid #444444;
      .impo{
        margin-left: 50px;
      }
    }
    div{
        color: #444444;
    }
    a{
        color: #444444;
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
        margin: 30px auto;
        flex-wrap: wrap;
    }

`