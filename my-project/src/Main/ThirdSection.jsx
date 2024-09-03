import ScrollReveal from 'scrollreveal';
import { useEffect} from 'react';

export default function ThirdSection(){

    useEffect(() => {
        ScrollReveal().reveal('#Detalhes', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
            reset: true
        });
    }, []); 

    return(
        <section className="bg-[url('ImgFundoSectionThird.png')] bg-cover bg-no-repeat bg-center font-Frist">
            <div className="flex flex-row gap-3 flex-wrap px-6 py-16 justify-around">
                <div id='Detalhes' className="flex flex-col gap-2 items-center p-2">
                    <i class="fas fa-smile text-white text-5xl"></i>
                    <p className="text-Yellow text-4xl">5000</p>
                    <p className="text-whiteTransparent">Clientes Satisfeitos</p>
                </div>
                <div id='Detalhes' className="flex flex-col gap-2 items-center p-2">
                    <i class="fas fa-paw  text-white text-5xl"></i>
                    <p className="text-Yellow text-4xl">3200</p>
                    <p className="text-whiteTransparent">Animais Amados</p>
                </div>
                <div id='Detalhes' className="flex flex-col gap-2 items-center p-2">
                    <i class="fas fa-stethoscope  text-white text-5xl"></i>
                    <p className="text-Yellow text-4xl">4500</p>
                    <p className="text-whiteTransparent">Atendimento Veterinário</p>
                </div>
                <div id='Detalhes' className="flex flex-col gap-2 items-center p-2">
                    <i class="fas fa-award  text-white text-5xl"></i>
                    <p className="text-Yellow text-4xl">3800</p>
                    <p className="text-whiteTransparent">Reconhecimento</p>
                </div>
            </div>
        </section>
    )
}