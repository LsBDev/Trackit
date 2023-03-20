import Header from "../../components/Header"
import Footer from "../../components/Footer"
import styled from "styled-components"


export default function TelaHistorico({userData}) {
  return (
    <Section>
      <Header userData={userData}/>
      <Status>
        <h2>Histórico</h2>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </Status>


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
    color: #666666; 
    margin-top: 17px;
  }
`