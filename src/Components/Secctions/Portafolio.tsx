import styled from "styled-components";
import webDekids from './../../assets/img/webDekids.png';
import appDekids from './../../assets/img/appDekids.png';
import webCls from './../../assets/img/webCLS.png';
import webSA from './../../assets/img/webSA.png';
import appSicae from './../../assets/img/appSICAE.png';

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


const CardBack = styled.div`
    display : flex;
    flex-direction : column;
    position: absolute;
    width: 100%;
    height: 100%;
    background:rgb(59, 151, 139);
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

// Parte trasera (descripción del proyecto)

const CardFront = ({children, img} : any)=>{

    const Front = styled.div`
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url('${img}');
        background-size: cover;
        background
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        border-radius: 10px;
        backface-visibility: hidden;
        
        `;
    
    return <Front>{children}</Front>
}


const ATag = styled.a`
    color : white;
    text-underline : none;
    transition : 200ms;
    &:hover {
        font-size: 18px;
        color: rgb(206, 255, 255);
    }
`
const Title = styled.h3`
    color : white;
    font-weight: bolder;
    background : rgb(16, 21, 22);
    width : 100%

`
const Blur = styled.div`
    background :rgba(36, 101, 121, 0.35);
    width : 100%;
    height : 100%;
    border-radius: 10px;
    display:flex;
    align-items:center;
    justify-content:center;
`

// Componente del Proyecto en el mozaico
const ProjectCard = ({ title, description , link , img  }: { title: string; description: string; link :any , img: any }) => (
  <CardContainer>
    <Card>
    <CardFront img={img}><Blur><Title>{title}</Title></Blur></CardFront>
      <CardBack>
        {description}
        {link ? <ATag href={link} target="_blank">Ver proyecto</ATag> : <></>}
      </CardBack>
    </Card>
  </CardContainer>
);

// Sección del Portafolio con los proyectos
const Portfolio = () => {
  const projects = [
    { title: "Web Dekids", description: "Construí el sitio web y la tienda en línea de Dekids utilizando Wordpress, optimizando la experiencia de compra con un sistema seguro y escalable. Implementé pasarelas de pago y gestión de inventario para mejorar la operatividad del negocio." , link : "https://dekids.com.mx/" , img : `${webDekids}` },
    { title: "App Dekids", description: "Desarrollé una plataforma de e-learning enfocada en niños, proporcionando un entorno interactivo y accesible para el aprendizaje en línea. Construida con PHP y Laravel, la app permite la gestión de cursos, usuarios y contenido educativo. Optimizando recursos, desplegué la aplicación en el mismo hosting que su sitio web, pero en un subdominio. " , link : "https://app.dekids.com.mx/" , img : `${appDekids}`},
    { title: "Web CLS", description: "Desarrollé el sitio web de la Comisión de Local de Seguridad (CLS) de la FI UNAM, un sitio en HTML, JS y CSS que centraliza una amplia colección de imágenes y archivos PDF. Funciona como una biblioteca de recursos de protección civil." ,link : "http://www.administracion.ingenieria.unam.mx/CLS/" , img : `${webCls}` },
    { title: "Web Secretaría Administrativa", description: "Actualicé y realicé mantenimiento al sitio web de la Secretaría Administrativa de la Facultad de Ingeniería de la UNAM, optimizando su rendimiento y asegurando la accesibilidad de la información clave para estudiantes y personal administrativo." , link : "http://www.administracion.ingenieria.unam.mx/" , img : `${webSA}`},
    { title: "App SICAE", description: "Desarrollé la App SICAE, un sistema de control de estacionamientos para la Facultad de Ingeniería de la UNAM, utilizando React. Me encargué tanto del diseño de la interfaz como de su desarrollo, creando una plataforma intuitiva que facilita la gestión y control de los espacios de estacionamiento en tiempo real." , link : "http://www.administracion.ingenieria.unam.mx/SICAE/" , img : `${appSicae}`}
  ];

  return (
    <PortfolioSection>
      <h2>Mi Portafolio</h2>
      <MosaicGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} title={project.title} description={project.description} link={project.link} img={project.img} />
        ))}
      </MosaicGrid>
    </PortfolioSection>
  );
};

export default Portfolio;
