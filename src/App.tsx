import styled from 'styled-components';
import './App.css'
import Header from './Components/Header'
import AboutMe from './Components/Secctions/AboutMe';
import Portfolio from './Components/Secctions/Portafolio';
import Contact from './Components/Secctions/Contact';

function App() {

  // const texts = [
  //   '¡Hola, soy un desarrollador web!',
  //   'Me apasiona crear experiencias digitales.',
  //   '¿Quieres trabajar conmigo?',
  //   '¡Hablemos sobre tu proyecto!',
  // ];

  const MainContainer = styled.div`
    width : 100%;

  `
  

  return (
    <MainContainer>
    
      <Header/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      
    </MainContainer>
  )
}

export default App
