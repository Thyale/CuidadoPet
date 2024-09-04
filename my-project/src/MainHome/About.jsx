import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export default function About(){

    useEffect(() => {
        ScrollReveal().reveal('#DivAbout', {
            origin: 'bottom',
            distance: '50px',
            duration: 800,
            delay: 200,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
            reset: true
        });
    }, []); 


    return(
        <section id="About" className="w-full font-Frist my-6">
            <div id="DivAbout" className="shadow-2xl w-11/12 m-auto p-6 bg-[url('/ImgBgAbout.png')] bg-cover bg-no-repeat bg-center rounded-2xl ">
                <div className="text-center Mobile:w-full w-10/12 m-auto"> 
                    <h1 className="font-bold mb-4 text-3xl uppercase text-Yellow font-Second">Sobre Nós</h1>
                    <p className="text-lg text-Green">Somos apaixonados por animais e comprometidos com o bem-estar e o desenvolvimento de cada um deles. Nossa missão é proporcionar o melhor cuidado e treinamento para cães e gatos, ajudando os donos a criar uma conexão mais forte e saudável com seus pets</p>
                    <p className="text-base mt-2 text-GreenDark">Acreditamos que cada pet é único e merece um cuidado personalizado. Por isso, nossos serviços vão além do treinamento convencional, incluindo programas especializados e focados em segurança, para garantir que seu animal de estimação viva de maneira equilibrada e feliz.</p>
                    <div className="mt-4 flex flex-row gap-3 justify-center">
                       <i class="fab fa-facebook-f text-3xl text-GreenDark cursor-pointer hover:text-LigthGreen"></i>
                       <i class="fab fa-instagram text-3xl text-GreenDark cursor-pointer hover:text-LigthGreen"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}