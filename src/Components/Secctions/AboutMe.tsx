import styled, { keyframes } from 'styled-components';





const AboutMe = () => {
    

    // Animación de desvanecimiento de texto
const fadeIn = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}
`;

// Animación de rebote
const bounce = keyframes`
0% { transform: translateY(0); opacity: 0; }
30% { transform: translateY(-35px); opacity: 1; background-color:rgb(57, 57, 128); }
60% { transform: translateY(-45px); opacity: 1; background-color:rgb(36, 101, 121);}
100% { transform: translateY(0); opacity: 0; }
`;

// Estilo para el contenedor principal
const AboutMeSection = styled.section`
background-color: #f5f5f7; /* Fondo gris claro al estilo Apple */
color: #333;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
text-align: left; /* Justificación del texto a la izquierda */
width: 100%;
`;

// Estilo para el título de la sección
const Title = styled.h2`
font-size: 2rem;
font-weight: 700;
margin: 10px 15px;
color: #333;
letter-spacing: -0.5px;
animation: ${fadeIn} 1s ease-in-out;
font-family: 'SF Pro Display', 'SF UI Display', sans-serif;
`;

// Estilo para la descripción
const Description = styled.p`
font-size: 1.1rem; /* Tamaño más pequeño */
color: #4a4a4a;
max-width: 900px;
margin: 0 auto 40px;
line-height: 1.7;
font-weight: 300;
animation: ${fadeIn} 2s ease-in-out;
letter-spacing: 0.5px;
opacity: 0;
animation: ${fadeIn} 2s ease-in-out forwards;
`;

// Estilo para los skills
const SkillsList = styled.ul`
display: flex;
justify-content: center; /* Alineación de izquierda a derecha */
flex-wrap: wrap;
gap: 15px;
list-style: none;
padding: 0;
animation: ${fadeIn} 1s ease-in-out;
margin-top: 30px;
width: 100%; /* Aprovechamos el 100% del ancho */
`;

// Estilo para cada skill
const SkillItem = styled.li`
background-color: #1d1d1f; /* Fondo oscuro al estilo Apple */
color: white;
padding: 10px 20px; /* Ajustamos el padding */
border-radius: 5px; /* Redondeo menos marcado */
font-size: 1rem; /* Tamaño de fuente reducido */
font-weight: 500;
text-transform: uppercase;
letter-spacing: 1px;
transition: transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

&:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &::after {
      content: "";
      position: absolute;
      bottom: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      background-color: #1d1d1f;
      border-radius: 50%;
      transform: translateX(-50%);
      animation: ${bounce} 0.6s ease-in-out;
      z-index : -2;
    }

}
`;

const Container = styled.div`
  display : flex;
  justify-content : center;
  flex-direction: column;
`
const ContainerSkills = styled.div`
  display : flex;
  justify-content : center;
  flex-direction: column;
  align-items: center;
  
`
  return (
    <AboutMeSection>
        <Container>
            <Title>Sobre Mí</Title>
            <Description>
                Soy un desarrollador web con una pasión inquieta por transformar ideas en experiencias digitales interactivas, funcionales y visualmente atractivas. Actualmente, formo parte del equipo de desarrollo en la Facultad de Ingeniería de la UNAM, donde he tenido la oportunidad de trabajar con tecnologías como JavaScript, React y Node.js, aplicándolas en proyectos que buscan adaptarse a las nuevas necesidades de la comunidad universitaria.
            </Description>
        </Container>
      <Container>
            <Title>Mis habilidades</Title>
            <ContainerSkills>
                <SkillsList>
                    <SkillItem>React</SkillItem>
                    <SkillItem>Next.js</SkillItem>
                    <SkillItem>Node.js</SkillItem>
                    <SkillItem>PHP</SkillItem>
                    <SkillItem >Typescript</SkillItem>
                    <SkillItem>Wordpress</SkillItem>
                </SkillsList>
            </ContainerSkills>
      </Container>
      <Container>
            <Title>Proceso de trabajo</Title>
            <Description>Mi proceso de trabajo para entregar software de calidad comienza con una planificación detallada, donde analizo los requerimientos, defino objetivos y estructuro una estrategia eficiente. Durante el desarrollo, implemento soluciones optimizadas con tecnologías modernas, asegurando un código limpio, escalable y siguiendo buenas prácticas. Finalmente, en la etapa de despliegue, realizo pruebas en distintos entornos para garantizar un funcionamiento óptimo antes de su lanzamiento, asegurando así un producto final estable, intuitivo y de alto impacto.</Description>
            
      </Container>
      
    </AboutMeSection>
  );
};

export default AboutMe;
