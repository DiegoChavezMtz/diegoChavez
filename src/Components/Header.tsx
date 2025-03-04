import styled from 'styled-components';
import video from './../assets/video/city.mp4'
import TypingEffect from './TypingEffect';


const Header = () => {

  const heigth = window.innerHeight;

  // Estilos con Styled Components
const Title = styled.h1`
font-size: 3rem;
margin-bottom: 1rem;
color:white;
`;


const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 1;
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
`;

const HeaderWrapper = styled.header`
  
  width: 100%;
  height: ${heigth}px;
  overflow: hidden;
`;

const TypingContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items: center;
`


  return (
    <HeaderWrapper>
      <VideoContainer>
          <video src={video} autoPlay muted loop></video>
        </VideoContainer>
        
        <HeaderContent>
          <Title>¡Hola, soy Diego!</Title>
          <TypingContainer>
            <TypingEffect text={'Desarrollador Web'}/>
          </TypingContainer>
          
        </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
