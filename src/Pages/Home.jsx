import React from 'react'
import Navbar from '../Components/Home/Navbar'
import Bg from '../Img/headerImg.jpg'
import styled from 'styled-components'
import {GrFormNext} from 'react-icons/gr'
import Enjoy from '../Components/Home/Enjoy'
import Download from '../Components/Home/Download'
import Everywhere from '../Components/Home/Everywhere'
import Kids from '../Components/Home/Kids'
import FAQ from '../Components/Home/FAQ'
import Footer from '../Components/Home/Footer'
const Home = () => {
  return (
    <All>
    <Container>
      <Navbar/>
      <Header>
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h5>Watch anywhere. Cancel anytime.</h5>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div>
          <input type="text" placeholder='Email Address' />
          <button>Get Started <span><GrFormNext className='next'/></span></button>
        </div>
      </Header>
    </Container>
    <Enjoy/>
    <Download/>
    <Everywhere/>
    <Kids/>
    <FAQ/>
    <Footer/>
    </All>
  )
}

export default Home
const All = styled.div`
  overflow-x: hidden;
`
const Container = styled.div`
    width: 100%;
    overflow-x: hidden;
    background: radial-gradient(circle, rgba(42,41,60,0.0959734235491071) 0%, rgba(60,60,70,0.46011908181241246) 0%, rgba(0,1,1,0.9475140397956058) 100%),${`url(${Bg})`};
    height: 96vh;
    background-position: center;
    background-size: cover;
    @media only screen and (min-width:360px) and (max-width:820px){
      height:66vh;
    }
    position: relative;
`
const Header = styled.div`
  color: white;
  margin: auto;
  margin-top: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 640px;
  h1{
    font-size: 60px;
  }
  h5{
    font-size: 28px;
    font-weight: 400;
    margin: 20px 0px;
  }
  p{
    font-size: 17px;
    /* margin-top: -10px; */
  }
  div{
    width: 100%;
    display: flex;
    align-items: center;
  }
  input{
    width: 70%;
    height: 68px;
    border: 0px !important;
    padding: 0px 10px;
    border-radius: 2px 0px 0px 2px;
    outline: none;
    font-size: 20px;
    ::placeholder{
      font-weight: 500;
    }
  }
  button{
    width:30%;
    height: 70px;
    border: 1px solid black;
    border-radius:0px 2px 2px 0px ;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: white;
    font-size: 24px;
    justify-content: center;
    span{
      .next{
        fill: white !important;
        font-size: 30px;
      }
    }
    background-color: rgb(220,6,17);
    :hover{
      background-color: rgb(233, 4, 15);
    }
  }

  @media only screen and (min-width:360px) and (max-width:820px){
    padding: 0px 15px;
    h1{
      font-size: 30px;
    }
    h5{
      font-size: 18px;
      margin-top: 5px;
      font-weight: 700;
    }
    div{
      justify-content: center;
      flex-wrap: wrap;
      input, button{
        font-size: 16px;
        height: 40px;
      }
      button{
        margin: 20px 0px;
        width: 45%;
        border-radius: 5px;
      }
    }
    }

`