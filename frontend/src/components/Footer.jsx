import React from "react";
//import './Footer.css'; // Caso queira incluir estilos adicionais

function Footer() {
  return (
    <>
      {/* Rodapé fixado ao fundo da página */}
      <div className="row fixed-bottom" style={{ backgroundColor: "rgba(217,217,217,0.5)" }}>
        <div className="col text-center">
          {/* Alinhamento vertical com flexbox */}
          <p className="mb-2 text-center">Oferecimento</p>
          <div className="d-flex justify-content-around align-items-center mb-2">
            
            <img 
              src="/logo_pet.png" 
              alt="LogoPET" 
              style={{ height: '70px' }}
            />
            <img 
              src="/logo_icomp.png" 
              alt="LogoICOMP" 
              style={{ height: '70px', marginRight: '5px' }}
            />
            <img 
              src="/logo_ufam.png" 
              alt="LogoUFAM" 
              style={{ height: '70px' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
