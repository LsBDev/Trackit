import styled from "styled-components"
import check from "../../assets/Check.svg"

export default function Task() {
    
  return (
    <ContainerHabitos> 
      <Tarefa>
        <div>
          <img src={check} alt="check" />
        </div>
        <h4>Ler 1 capítulo de livro</h4>
        <p>
          Sequência atual: 3 dias <br/>
          Seu recorde: 5 dias
        </p>
      </Tarefa>     
      </ContainerHabitos> 
  )
}

const ContainerHabitos = styled.div `
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

const Tarefa = styled.div `
  width: 100%;
  height: 94px;
  margin-top: 10px;
  padding: 13px;
  background: white;
  border-radius: 5px;
  h4 {
    font-family: "Lexend Deca";
    font-size: 20px;
    line-height: 25px;
    color: #666666;
  }
  p {
    font-family: "Lexend Deca";
    font-size: 13px;
    line-height: 16px;
    color: #666666;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;
    background: #EBEBEB;
    float: right;
    border-radius: 5px;
    border: 1px solid #E7E7E7;
  }
`
