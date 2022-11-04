import React from 'react'
import styled from 'styled-components'
import tv from '../../Img/tv.png'
import {Container, Wrapper, Text} from './Global'
const Enjoy = ()=>{
    return(
        <>
            <Container style={{borderTop:'10px rgb(34,34,34) solid'}}>
                <Wrapper>
                    <Text>
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </Text>
                    <Image>
                        <img src={tv} alt="" className="image" />
                        <div>
                        <video class="our-story-card-video" data-uia="our-story-card-video" autoplay="" playsinline="" muted="" loop="">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                        </video>
                        </div>
                    </Image>
                </Wrapper>
            </Container>
        </>
    )
}

export default Enjoy


const Image = styled.div`
    flex: 1;
    position: relative;
    .image{
        width: 100%;
        z-index: 100 !important;
    }
    div{
    height: 100%;
    left: 50%;
    max-height: 54%;
    max-width: 73%;
    position: absolute;
    top: 46%;
    transform: translate(-50%,-50%);
    width: 100%;
    right: -125px;
        video{
            width: 380px;
        }
    }
    @media only screen and (max-width: 349px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 600px){
    div{
        video{
            width: 200px;
            z-index: -20;
        }
    }
    @media only screen and (min-width: 600px) and (max-width:850){
        div{
            color: red !important;
        video{
            width: 300px;
            z-index: -20;
        }
    }
    }
}
`
