import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Header({userData}) {
  return(
      <ContainerHeader >
        <Link to="/"><h1>Trackit</h1></Link>
        <img src={userData.image} alt="foto do usuário" />
      </ContainerHeader>
  )
}

const ContainerHeader = styled.header `
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 18px;
  width: 375px;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 4;
  background: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  a {
    text-decoration: none;
  }
  h1 {
    font-family: 'playball';
    font-size: 40px;
    line-height: 50px;
    color: white;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background: #000;
  }
`