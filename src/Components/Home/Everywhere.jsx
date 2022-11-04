import React from 'react'
import styled from 'styled-components'
import {Wrapper, Text} from './Global'
const Everywhere = () => {
  return (
    <>
      <Container>
        <Wrapper>
            <Text>
                <h1>Watch everywhere.</h1>
                <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </Text>
        </Wrapper>
      </Container>
    </>
  )
}

export default Everywhere

const Container = styled.div`
    width: 100%;
    background-color: black;
    min-height: 30vh;
    /* height: 100vh; */
    max-height: fit-content;
    border-bottom: 10px rgb(34,34,34) solid;
    padding: 20px 0px;
`
