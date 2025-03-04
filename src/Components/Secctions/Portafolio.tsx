import styled from "styled-components";
import webDekids from './../../assets/img/webDekids.png'

// Contenedor general del Portafolio
const PortfolioSection = styled.section`
  width: 100%;
  display : flex;
  flex-direction : column;
  background: #121212;
  color: white;
  text-align: center;
`;

// Grid estilo mozaico tipo Pinterest
const MosaicGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

// Contenedor de la Card
const CardContainer = styled.div`
  perspective: 1000px; /* Da efecto 3D */
  width: 100%;
`;

// Tarjeta que gira en hover
const Card = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;

  &:hover {
    transform: rotateY(180deg);
    cursor : pointer;
  }
`;

// Frente de la tarjeta (imagen)
const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  border-radius: 10px;
  backface-visibility: hidden;
`;

// Parte trasera (descripción del proyecto)
const CardBack = styled.div`
    display : flex;
    flex-direction : column;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(36, 101, 121);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    border-radius: 10px;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    padding: 5px;
`;

const ATag = styled.a`
    color : white;
    text-underline : none;
    transition : 200ms;
    &:hover {
        font-size: 18px;
        color: rgb(206, 255, 255);
    }
`

// Componente del Proyecto en el mozaico
const ProjectCard = ({ title, description , link }: { title: string; description: string; link :any }) => (
  <CardContainer>
    <Card>
      <CardFront>{title}</CardFront>
      <CardBack>
        {description}
        {link ? <ATag href={link} target="_blank">Ir a la web</ATag> : <></>}
      </CardBack>
    </Card>
  </CardContainer>
);

// Sección del Portafolio con los proyectos
const Portfolio = () => {
  const projects = [
    { title: "Web Dekids", description: "Construí el sitío web de Dekids usando Wordpress y su tienda en linea con Woocommerce" , link : "https://dekids.com.mx/" , img : '' },
    { title: "App Dekids", description: "Desarrollé un MVP de e-learning para Dekids" , link : "https://app.dekids.com.mx/"},
    { title: "Web CLS", description: "Actualicé y dí mantenimineto el sitio web de la Comisión Local de Seguridad" ,link : "http://www.administracion.ingenieria.unam.mx/CLS/" },
    { title: "Web Secretaria Administrativa", description: "Actualicé y dí mantenimineto el sitio web de la Secretaria Administrativa de la Facultad de Ingeniería" , link : "http://www.administracion.ingenieria.unam.mx/"},
    { title: "App SICAE", description: "Desarrollé el frontend de la aplicación institucional de control de estacionamientos de la Facultad de Ingeniería" , link : "http://www.administracion.ingenieria.unam.mx/SICAE/"}
  ];

  return (
    <PortfolioSection>
      <h2>Mi Portafolio</h2>
      <MosaicGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} link={project.link} />
        ))}
      </MosaicGrid>
    </PortfolioSection>
  );
};

export default Portfolio;
