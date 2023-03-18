import styled from "styled-components"

export default function MeusHabitos() {
  return (
    <Section>
      <ContainerHabitos>
        <Habito>
          <input type="text" placeholder="nome do hábito"/>
          <Days>
            <Day>D</Day>
            <Day>S</Day>
            <Day>T</Day>
            <Day>Q</Day>
            <Day>Q</Day>
            <Day>S</Day>
            <Day>S</Day>
          </Days>
        </Habito>
        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
      </ContainerHabitos>    
    </Section>
  
  )
}
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
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-size: 20px;
  color: #DBDBDB;

`
