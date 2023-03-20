import styled from "styled-components";
import logo from "../../assets/Logo.png"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import PulseLoader from "react-spinners/PulseLoader";

export default function TelaCadastro() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [password, setPassword] = useState()
  const [dis, setDis] = useState(false)


  function register(event) {
    event.preventDefault()
    setDis(true)
    const url = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up'
    const dados = { email: email, name: name, image: image, password: password }
    // const teste = { email: "Jimo@gmail.com", name: "Jimo", image: "https://dedetizadorapragfim.com.br/wp-content/uploads/2020/06/descupinizacao.jpg.webp", password: "12345678" }
    const promise = axios.post(url, dados)
    promise.then(() => {
      setDis(false)
      navigate("/")
    })
    promise.catch(err => alert(err.response.data))
  }

  return (
    <Main>
        <img src={logo} alt="logo Trackit"/>
        <Form onSubmit={register}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email" disabled={dis}  required data-test="email-input"/>
          <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder="senha" required disabled={dis}  data-test="password-input"/>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="nome" required  disabled={dis} data-test="user-name-input"/>
          <input type="url" value={image} onChange={e => setImage(e.target.value)} placeholder="foto" required disabled={dis} data-test="user-image-input"/>
          { dis === true ? <button><PulseLoader color="#ffffff" /></button> : <button data-test="signup-btn" type="submit">Entrar</button>}
        </Form>
        <Link to="/" data-test="login-link">Já tem uma conta? Faça login!</Link>
    </Main>
  )  
}

const Main = styled.main `
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