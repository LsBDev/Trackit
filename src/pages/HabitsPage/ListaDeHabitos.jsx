import styled from "styled-components"


export default function ListaDeHabitos({habitList}) {
  const days = ["D","S", "T", "Q", "Q", "S", "S"]
  // const habitDays = habitList.map((h) => h.days)
  // const habitName = habitList.map((h) => h.name)
  // console.log(habitDays)
  // console.log(habitList)

  // return (
  //   {habitList.map((habito) => (
  //     <HabitoListado>
  //       <p>{habito.name}</p>
  //     <Days>
  //       {days.map((day, index) => <Day key={index}>{day}</Day>)}
  //     </Days>
  //   </HabitoListado>)
  //   )}
    
  // )
}


const HabitoListado = styled.div `
  width: 340px;
  height: 91px;
  margin-top: 10px;
  background: #FFFFFF;
  border-radius: 5px;
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
  background: #CFCFCF ;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  font-family: 'Lexend Deca';
  font-size: 20px;
  color: #FFFFFF; 
`
