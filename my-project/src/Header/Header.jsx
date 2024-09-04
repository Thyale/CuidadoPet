import { useEffect } from "react";
import ScrollReveal from 'scrollreveal'

export default function Header(){

    useEffect(() => {
        ScrollReveal().reveal('#BtnContact', {
            origin: 'left',
            distance: '50px',
            duration: 500,
            delay: 100,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
            reset: true
        });
    }, []); 

    return(
        <header className="
        flex flex-row items-center justify-around p-2 font-Frist text-Green
        Mobile:flex-col Mobile:gap-4">
            <img className="max-w-14" src="IconBlack.png" alt="Ícone Logo da página" />
            <ul className="flex flex-row items-center gap-4 flex-wrap justify-center">
                <li><a className="hover:font-bold" href="#">Home</a></li>
                <li><a className="hover:font-bold" href="#About">Sobre</a></li>
                <li><a className="hover:font-bold" href="#Services">Serviços</a></li>
                <li><a className="hover:font-bold" href="#Footer">Contato</a></li>
            </ul>
            <button id="BtnContact" className="bg-Green hover:bg-GreenDark p-2 rounded-lg text-white Mobile:hidden"><a target="_Blanck" href="https://wa.me/5511999999999?text=Olá, Gostaria de mais informações!">Entre em Contato</a></button>
        </header>
    )
}