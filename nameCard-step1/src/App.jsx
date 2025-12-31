import { Routes, Route } from "react-router";
import styled from "styled-components";
const AppDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8E7E6;
` 
const App = () => {
  //선언부
  return (
    <>
      <AppDiv>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/maker" element={<Maker />} />
        </Routes>
      </AppDiv>
    </>
  );
}
export default App;