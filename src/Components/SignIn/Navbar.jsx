import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../Img/logo.png'
import styled from 'styled-components'
const Navbar = () => {
  return (
    <>
    <Container>
        <Wrapper>
          <Logo to='/'><img src={logo} alt="" /></Logo>
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
const Logo = styled(NavLink)`
  width: 200px;
  margin-left: 30px;
  img{
    width: 100%;
  }
  min-width: 20px;
  @media only screen and (min-width:360px) and (max-width:820px){
      width: 100px;
    }
  
`

