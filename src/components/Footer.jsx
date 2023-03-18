import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Footer() {
  return(
      <ContainerFooter >
        <Link to="/habitos">Hábitos</Link>
          <div></div>
        <Link to="/historico">Histórico</Link>  
      </ContainerFooter>

  )
}
const ContainerFooter = styled.footer `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  height: 70px;
  position: fixed;
  bottom: 0;
  background: white;
  a {
    font-family: 'Lexend Deca';
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    text-decoration: none;
    color: #52B6FF;
  }
  div {
    width: 78px;
    height: 80px;
    background: #52B6FF;
    border-radius: 50%;
    margin-bottom: 25px;
  }
`


      
 