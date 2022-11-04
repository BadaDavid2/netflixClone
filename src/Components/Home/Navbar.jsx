import React from 'react'
import styled from 'styled-components'
import logo from '../../Img/logo.png'
const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Logo><img src={logo} alt="" /></Logo>
          <SignIn>Sign In</SignIn>
        </Wrapper>
      </Container>
    </>
  )
}

export default Navbar

const Container = styled.div`
  width: 100vw;
  height: 10vh;
  z-index: 20;
  min-width: 330px;
`
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  padding: 18px 0px;
`
const Logo = styled.div`
  width: 200px;
  margin-left: 30px;
  img{
    width: 100%;
  }
  min-width: 50px;
`
const SignIn = styled.div`
  background-color: red;
  height: 35px;
  width: 80px;
  font-size: 15px;
  border-radius: 3px;
  margin-right: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-top: 18px;
`
