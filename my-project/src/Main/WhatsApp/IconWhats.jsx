import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function IconWhats(){

    useEffect(() => {
        ScrollReveal().reveal('#Whats', {
          origin: 'bottom',
          distance: '20px',
          duration: 1000,
        });
    }, []); 

    return(
        <div id="Whats" className="bg-Green text-white px-5 py-4 rounded-full fixed bottom-2 right-2 cursor-pointer hover:bg-GreenDark">
            <a target="_Blanck" href="https://wa.me/5511999999999?text=Olá, Gostaria de mais informações!"><i className="fab fa-whatsapp text-4xl"></i></a>
        </div>
    )
}