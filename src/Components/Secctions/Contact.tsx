import styled from "styled-components";

// 🎯 Contenedor principal de la sección
const ContactSection = styled.section`
  width: 100%;
  padding: 50px 20px;
  background: #121212;
  color: white;
  text-align: center;
`;

// 📞 Contenedor de cada dato de contacto
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin: 15px 0;
  gap: 10px;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #0071e3;
  }
`;

// ✨ Icono estilizado
const Icon = styled.span`
  font-size: 1.5rem;
`;

// 📌 Función para copiar al portapapeles
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  alert(`📋 Copiado: ${text}`);
};

// 📜 Sección de Contacto
const Contact = () => {
  return (
    <ContactSection>
      <h2>📩 Contáctame</h2>
      <ContactItem onClick={() => copyToClipboard("5539685822")}>
        <Icon>📞</Icon> 553 968 5822
      </ContactItem>
      <ContactItem onClick={() => copyToClipboard("diego.chav.mart@gmail.com")}>
        <Icon>✉️</Icon> diego.chav.mart@gmail.com
      </ContactItem>
    </ContactSection>
  );
};

export default Contact;
