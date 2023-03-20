import styled from "styled-components"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Task from "./Task"
import axios from "axios"
import { useEffect, useState } from "react"

export default function TelaHoje({userData}) {
  const [myHabits, setMyHabits] = useState()
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`
    },
  };

  console.log(userData)
  console.log(myHabits) // fazer um map para renderizar os hábitos na tela.

  useEffect(() => {
    const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
    const promise = axios.get(url, config)
    promise.then(res => setMyHabits(res.data))
    promise.catch(erro => console.log(erro.response.data))

  }, [])

  return (
    <Section>
      <Header userData={userData}/>
      <Status>
        <h2>Segunda, 17/05</h2>
        <h3>Nenhum hábito concluído ainda</h3>
      </Status>

      <Task/>
      <Task/>
      <Task/>
      <Task/>

      <Footer/>
    </Section>


  )
}

const Section = styled.section `
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
  margin-top: 54px;
  margin-bottom: 54px;
  p {
    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 20px;
    color: #666666;
  }
`
const Status = styled.div `
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 70px;
  h2 {
    font-family: "Lexend Deca";
    font-size: 23px;
    line-height: 28px;
    color: #126BA5;
  }
  h3 {
    font-family:  "Lexend Deca";
    font-size: 18px;
    line-height: 22px;
    color: #BABABA; // cor e texto mudam!
  }
`

