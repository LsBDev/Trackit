import styled from "styled-components";
import logo from "../../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

export default function TelaLogin({setUserData}) {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [dis, setDis] = useState(false)

  function login(event) {
    event.preventDefault()
    setDis(true)
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
    const dados = {email: email, password: password}
    const promise = axios.post(url, dados)
    promise.then((res) => {
      setUserData(res.data)
      setDis(false)
      navigate("/hoje")
      })
    promise.catch((err) => console.log(err.response.data))
  }

  
  return (
    <Login>
        <img src={logo} alt="logo Trackit"/>
        <Form onSubmit={login}>
          <input data-test="email-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" disabled={dis} required/>
          <input data-test="password-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" disabled={dis} required/>
          { dis === true ? <button><PulseLoader color="#ffffff" /></button> : <button data-test="login-btn" type="submit">Entrar</button>}
          
        </Form>
        <Link to="/cadastro" data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>
    </Login>
  )
}

const Login = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0;
  width: 375px;
  img {
    width: 180px;
    height: 180px;
    margin: 0 auto;
  }
  a {
    text-align: center;
    font-family: 'Lexend Deca';
    font-size: 14px;
    line-height: 18px;
    color: #52B6FF;
    margin-top: 6px;
  }
  button {
    margin-top: 10px;
  }
`
const Form = styled.form `
  display: flex;
  flex-direction: column;
  input {
    width: 300px;
    height: 45px;
    margin-top: 6px; 
    border-radius: 5px;
    border: 1px solid #D5D5D5;
    padding: 10px;
    ::placeholder {
      font-family: 'Lexend Deca';
      font-size: 20px;
      line-height: 25px;
      color: #DBDBDB;
    }
  }
  button {
    width: 300px;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    background: #52B6FF;
    border: none;
    font-size: 20px;
    line-height: 25px;
    font-family: 'Lexend Deca';
    color: white;
  }
`