import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export default function Comments(){

    useEffect(() => {
        ScrollReveal().reveal('#Coments', {
            origin: 'bottom',
            distance: '50px',
            duration: 700,
            delay: 100,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
            reset: true
        });
    }, []); 

    return(
        <section className=" flex flex-col gap-4 p-6 font-Frist">
            <h1 className="font-bold text-center text-3xl uppercase text-GreenDark">Comentários</h1>
            <div className="flex flex-row flex-wrap justify-center gap-3 my-4">
                <div id="Coments" className="w-full max-w-96 shadow-2xl flex flex-col items-center p-3 ">
                    <img className="w-full max-w-40 rounded-full" src="/ImgPerfilMulher.jpg" alt="Imagem de perfil de Ana Silva" />
                    <h2 className="text-Yellow font-Second text-3xl mt-2">Ana Silva</h2>
                    <p className="text-Black mb-4">Diretora de Marketing</p>
                    <p className="text-center text-BlackTransparent">"A atenção aos detalhes e a capacidade de entender nossas necessidades foram essenciais para o sucesso da nossa campanha. Estou muito satisfeita com os resultados!"</p>
                </div>
                <div id="Coments" className="w-full max-w-96 shadow-2xl flex flex-col items-center p-3">
                    <img className="w-full max-w-40 rounded-full" src="/ImgPerfilHomem.jpg" alt="Imagem de perfil de Carlos Mendes" />
                    <h2 className="text-Yellow font-Second text-3xl mt-2">Carlos Mendes</h2>
                    <p className="text-Black mb-4">CEO</p>
                    <p className="text-center text-BlackTransparent">"A colaboração foi impecável. A equipe superou nossas expectativas em todos os aspectos, entregando um trabalho de alta qualidade no prazo estipulado."</p>
                </div>
                <div id="Coments" className="w-full max-w-96 shadow-2xl flex flex-col items-center p-3">
                    <img className="w-full max-w-40 rounded-full" src="/ImgPerfilHomem.2.jpg" alt="Imagem de perfil de Ana Silva" />
                    <h2 className="text-Yellow font-Second text-3xl mt-2">Jhon Doe</h2>
                    <p className="text-Black mb-4">Gerente</p>
                    <p className="text-center text-BlackTransparent">"Trabalhar com esta equipe foi uma experiência incrível. A dedicação e o profissionalismo deles realmente fizeram a diferença em nosso projeto. Recomendo fortemente!"</p>
                </div>
            </div>
        </section>
    )
}