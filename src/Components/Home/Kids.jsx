import React from 'react'
import styled from 'styled-components'
import {Container, Wrapper, Text} from './Global'
import kid from '../../Img/kid.png'
const Kids = () => {
  return (
    <>
    <Container>
        <Wrapper>
        <Image>
                <img src={kid} alt="" className="image" />
            </Image>
            <Text>
                <h1>Create profiles for kids.</h1>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </Text>
        </Wrapper>
    </Container>
    </>
  )
}

export default Kids

const Image = styled.div`
    flex: 1;
    img{
        width: 100%;
    }
`