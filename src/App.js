import { Routes, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import TelaHoje from "./pages/TodayPage/TelaHoje";
import TelaLogin from "./pages/LoginPage/TelaLogin";
import TelaCadastro from "./pages/RegisterPage/TelaCadastro"
import TelaHabitos from "./pages/HabitsPage/TelaHabitos";
import { useState } from "react";


export default function App() {
  const [userData, setUserData] = useState({})

  return ( 
    <Container>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<TelaLogin setUserData={setUserData} />}/>
        <Route path="/cadastro" element={<TelaCadastro />}/>
        <Route path="/hoje" element={<TelaHoje userData={userData}/>} />
        <Route path="/habitos" element={<TelaHabitos />}/>
      </Routes>
      </BrowserRouter>
    </Container> 
  );
}

const Container = styled.div `
  width: 375px;
  position: relative;
  margin: 0 auto;
`



