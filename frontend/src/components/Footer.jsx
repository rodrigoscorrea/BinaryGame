import React from "react";

function Footer(){
    return(
        <>
            {/* Rodapé com agradecimentos */}
            <div className="row mt-5" style={{backgroundColor: "rgba(217,217,217,0.5)"}}>
                <div className="col text-center">
                <p className="mt-1 text-center">Oferecimento</p>
                <div className="mb-3 d-flex justify-content-around">
                    <img 
                    src="/logo_icomp.png" 
                    alt="LogoICOMP" 
                    style={{ height: '70px' }}
                    />
                    <img 
                    src="/logo_pet.png" 
                    alt="LogoPET" 
                    style={{ height: '70px' }}
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
    )
}

export default Footer;