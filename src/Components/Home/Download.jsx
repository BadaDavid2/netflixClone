import React from 'react'
import styled from 'styled-components'
import {Container, Wrapper, Text} from './Global'
import mobile from '../../Img/mobile-0819.jpg'
import boxshot from '../../Img/boxshot.png'
import gif from '../../Img/gif.gif'
const Download = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Image>
              <img src={mobile} alt="" className='mobile' />
              <div>
                <img src={boxshot} alt="" />
                <p>Stranger Things <span>Downloading...</span></p>
                <img src={gif} alt="" />
              </div>
            </Image>
            <Text>
              <h1>Download your shows to watch offline.</h1>
              <p>Save your favorites easily and always have something to watch.</p>
            </Text>
        </Wrapper>
      </Container>
    </>
  )
}

export default Download
const Image = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 10px;
  .mobile{
    min-width: 500px ;
    max-width: 100%;
  }
  div{
    display: flex;
    align-items: center;
    z-index: 3;
    position: absolute;
    bottom: 0;
    background-color: black;
    border: 2px solid rgb(64,64,64);
    border-radius: 10px;
    justify-content: space-around;
    min-width: 15em;
    left: 20%;
    width: 60%;
    img{
      height: 3em;
    }
  }
  @media only screen and (max-width: 349px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px){
    div{
    margin: -8% 0 0;
    margin-bottom: 20px;
}
  }

  p{
    color: white;
    font-size: .9em;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    span{
      color: #0071eb;
    font-size: .75em;
    font-weight: 400;
    }
  }
`
