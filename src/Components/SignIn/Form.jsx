import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const Form = () => {
  return (
    <>
        <Container>
            <DaForm>
                <h1>Sign In</h1>
                <input type="text" placeholder='Email or phone number' />
                <input type="password" placeholder='Password' />
                <button>sign in</button>
                <span>
                    <div>
                        <input type="checkbox" name="" id="check"/>
                        <label htmlFor="check">Remeber me</label>
                    </div>
                    <div><a href="">Need help?</a></div>
                </span>
                <New>
                    <div >
                        <span className='p'>New to Netflix?</span>
                        <Link className='link' to='/'>Sign up now.</Link>
                    </div>
                    <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">Learn more.</a></p>
                </New>
            </DaForm>
        </Container>
    </>
  )
}

export default Form

const Container = styled.div`
    @media only screen and (min-width:360px) and (max-width:820px){
      margin-top: -50px;
    }
    background-color: rgba(0, 0, 0, 0.725);
    width: 420px;
    border-radius: 5px;
    height: 81vh;
`
const DaForm = styled.form`
    width: 100%;
    height: 100%;
    padding: 40px 50px;
    h1{
        font-size: 32px;
        color: white;
        font-weight: 400;
        margin-bottom: 30px;
    }
    input[type= 'text'], input[type= 'password']{
        width: 100%;
        border-radius: 5px;
        outline: none;
        margin: 10px 0px;
        background-color: rgb(51,51,51);
        height: 50px;
        padding: 0px 15px;
        border: none;
        transition: 0.3s all;
        :focus{
            background-color: rgb(232,240,254);
        }
        
    }
    button{
        width: 100%;
        margin-top: 30px;
        height: 50px;
        text-transform: capitalize;
        border-radius: 5px;
        background-color: rgb(229,9,20);
        color: white;
        border: none;
        outline: none;
    }
    span{
        display: flex;
        margin-top: 10px;
        align-items: center;
        justify-content: space-between;
        color: #626262;
        font-size: 15px;
        font-weight: 500;
        input{
            margin-right: 5px;
            :checked{
                color: rgb(51,51,51);
            }
        }
        a{
            color: #626262;
        }
    }
`
const New = styled.div`
    div{
        display: flex;
        align-items: center !important;
        width: 100%;
        .p{
            color: #626262;
            font-size: 14px;
            display: inline-flex;
            margin-right: 8px;
        }
        .link{
            color: white;
            font-weight: 600;
            font-size: 14px;
            margin-top: 7px;
            text-decoration: none;
        }
    }
    p{
        font-size: 10px;
        margin-top: 30px;
    }
`