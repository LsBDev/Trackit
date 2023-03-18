import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import MeusHabitos from "./MeusHabitos"

export default function  TelaHabitos() {
  return (
    <Section>
      <Header/>
      <AddHabitos>
        <p>Meus hábitos</p>
        <button>+</button>
      </AddHabitos>
      <MeusHabitos />
      <Footer/>
    </Section>    
  )
}

const Section = styled.section `
  margin-top: 54px;
  margin-bottom: 54px;
`
const AddHabitos = styled.div `
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 70px;
  background:  #E5E5E5;
  p {
    font-family: 'Lexend Deca';
    font-size: 23px;
    line-height: 28px;
    color: #126BA5;
  }
  button {
    text-align: center;
    width: 40px;
    height: 35px;
    font-family: 'Lexend Deca';
    background: #52B6FF;
    color: white;
    border: none;
    border-radius: 5px;
  }
`

