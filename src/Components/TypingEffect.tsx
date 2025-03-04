import styled , {keyframes} from 'styled-components';


// Componente de efecto de tipeo
const TypingEffect = ({ text }: { text: string }) => {

    const stringSize = text.length;
    console.log(stringSize);
  // Animación para el tipeo
  const typingAnimation = keyframes`
     
      from {
        width: 0;
      }
    
  `;

  // Animación para el parpadeo del cursor
  const blinkAnimation = keyframes`
    
      50% {
        border-color: transparent;
      }
      100% {
        border-color: black;
      }
    
  `;

  // Estilo del Span
  const Span = styled.span`
    text-align:center;
    font-size: 1.5rem;
    color:white;
    display: block;
    font-family: monospace;
    white-space: nowrap;
    border-right: 4px solid ;
    width: ${stringSize}ch;
    animation: ${typingAnimation} 2s steps(${stringSize}), ${blinkAnimation} 0.7s step-end infinite;
    overflow : hidden;
  `;

  return (
    <>
      {/* Aplicamos el estilo y mostramos el texto */}
      <Span>{text}</Span>
    </>
  );
};

export default TypingEffect;
