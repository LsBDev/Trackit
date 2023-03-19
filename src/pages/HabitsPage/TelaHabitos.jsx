import { useState } from "react"
import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function  TelaHabitos({userData}) {
  const arrDay = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  const [selec, setSelec] = useState([])



  function selected(d, i) {
    const arr = [... selec]
    if (arr.includes(i)) {
      setSelec(arr.filter((item) => item !== i))
    } else {
      setSelec([...arr, i])
    }
  }

  return (
    <Container>
      <Header userData={userData}/>

      <AddHabitos>
        <p>Meus hábitos</p>
        <button>+</button>
      </AddHabitos>

      {/* CRIAR HABITOS */}
      <Section>
        <ContainerHabitos>
          <Habito>
            <input type="text" placeholder="nome do hábito"/>
            <Days>
              {arrDay.map((day, index) => <Day selec={selec} day={day} index={index} onClick={() => selected(day, index)} key={index}>{day[0]}</Day>)}
            </Days>
            <Action>
              <p>Cancelar</p>
              <button>Salvar</button>
            </Action>
          </Habito>
          <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
          {/* ternário para definir isso */}
        </ContainerHabitos>
      </Section>

      <Footer/>
    </Container>    
  )
}
const Container = styled.section `
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

//-------------Meus hábitos---------------//
const Section = styled.section `
  background: #e5e5e5;
  width: 100%;
  height: 100vh;
  padding: 0 20px;
  p {
    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 20px;
    margin-top: 30px;
    color: #666666;
  }
`
const ContainerHabitos = styled.div `
  display: flex;
  flex-direction: column;
`
const Habito = styled.div `
  width: 340px;
  height: 180px;
  background: #FFFFFF;
  border-radius: 5px;
  input {
    width: 303px;
    height: 45px;
    margin: 20px 20px 10px 20px;
    padding: 10px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    ::placeholder {
      font-family: 'Lexend Deca';
      font-size: 20px;
      line-height: 20px;
      color:  #DBDBDB;
    }
  }
`
const Days = styled.div `
  width: 240px;
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
`
const Day = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${props => props.selec.includes(props.index) ? "#CFCFCF" :  "#FFFFFF"};
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-size: 20px;
  color: ${props => props.selec.includes(props.index) ? "#FFFFFF" :  "#DBDBDB"} ;
`
const Action = styled.div `
  display: flex;
  justify-content: end;
  align-items: center;
  padding: auto;
  p {
    font-family: 'Lexend Deca';
    font-size: 16px;
    line-height: 20px;
    color: #52B6FF;
    margin-bottom: 20px;
  }
  button {
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Lexend Deca';
    color: #FFFFFF;
    border: none;
    margin: 20px 15px 10px 20px;
  }
`
