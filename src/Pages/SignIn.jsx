import React from 'react'
import Navbar from '../Components/SignIn/Navbar'
import styled from 'styled-components'
import Bg from '../Img/headerImg.jpg'
import Form from '../Components/SignIn/Form'
import Footer from '../Components/SignIn/Footer'
const SignIn = () => {
  return (
    <>
    <Container>
      <Navbar/>
      <Header>
        <Form/>
      </Header>
      <Footer/>
    </Container>
    </>
  )
}

export default SignIn

const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    background: radial-gradient(circle, rgba(42,41,60,0.0959734235491071) 0%, rgba(60,60,70,0.46011908181241246) 0%, rgba(0,1,1,0.9475140397956058) 100%),${`url(${Bg})`};
    height: 100vh;
    background-position: center;
    background-size: cover;
    @media only screen and (min-width:360px) and (max-width:820px){
      background: black;
    }
    position: relative;

`
const Header = styled.div`
  color: white;
  margin: auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 640px;

`