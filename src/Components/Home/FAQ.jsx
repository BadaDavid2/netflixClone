import React from 'react'
import {Container} from './Global'
import styled from 'styled-components'
import {GrFormNext} from 'react-icons/gr'
const FAQ = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <H1>Frequent Asked Questions</H1>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Netflix?
                </button>
              </h2>
              <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                  <br/> <br />
                You can watch as much as you want, whenever you want without a single commercial - all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How much does Netflix cost?
                </button>
              </h2>
              <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Where can I watch?
                </button>
              </h2>
              <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                  <br /> <br />
                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                How do I cancel?
                </button>
              </h2>
              <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingFive">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                What can I watch on Netflix?
                </button>
              </h2>
              <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingSix">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                Is Netflix good for kids?

                </button>
              </h2>
              <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                  <br /><br />
                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see.</div>
              </div>
            </div>
          </div>
          <P>Ready to watch? Enter your email to create or restart your membership.</P>
          <Div>
          <input type="text" placeholder='Email Address' />
          <button>Get Started <span><GrFormNext className='next'/></span></button>
          </Div>
        </Wrapper>
      </Container>
    </>
  )
}

export default FAQ

const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  margin: auto;
  flex-direction: column;
  @media only screen and (min-width:360px) and (max-width:820px){
    width: 80%;
  }
  .Dropdown{
    color: white;
  }
  .accordion-item, .accordion-header, .accordion-button{
    background-color: rgb(48,48,48);
    border: none;
    color: white;
    outline: none !important;
    margin: 8px 0px;
    font-size: 30px;
  }
`

const H1 = styled.h1`
  font-size: 60px;
  font-weight: 500;
  color: white;
  text-align: center;
  @media only screen and (min-width:360px) and (max-width:820px){
    font-size: 40px;
  }
`
const P = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 400;
  margin: 20px 0px;
  text-align: center;
`
const Div = styled.div`
  width: 640px ;
  display: flex;
  align-items: center;
  margin: 30px auto ;
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
  @media only screen and (min-width:360px) and (max-width:500px){
    width: 100%;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      input, button{
        font-size: 16px;
        height: 40px;
      }
      button{
        margin: 20px 0px;
        width: 40%;
        border-radius: 5px;
      }
    }
  @media only screen and (min-width:500px) and (max-width:820px){
    width: 100%;
      justify-content: center;
      flex-direction: column;
      flex-wrap: wrap;
      input, button{
        font-size: 16px;
        height: 40px;
      }
      button{
        margin: 20px 0px;
        width: 40%;
        border-radius: 5px;
      }
    }
`