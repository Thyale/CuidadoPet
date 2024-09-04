import { useEffect } from 'react';
import Swal from 'sweetalert2';
import ScrollReveal from 'scrollreveal';

export default function OurServices(){

    useEffect(() => {
        ScrollReveal().reveal('#BtnMoreInfos', {
            origin: 'left',
            distance: '50px',
            duration: 800,
            delay: 200,
            easing: 'ease-in-out',
            opacity: 0,
            scale: 0.9,
            reset: true
        });
    }, []); 

    function MoreInfor(x){

        let nameInforServices = '';
        let moreInforServices = '';
    
        if (x === 1) {
          nameInforServices = 'Pet Grooming';
          moreInforServices = 'Nosso serviço de grooming inclui banho, tosa, corte de unhas e limpeza de ouvidos, proporcionando um cuidado completo para o seu pet. Nossa equipe experiente usa produtos de alta qualidade para garantir que seu animal de estimação receba o melhor tratamento, deixando-o limpo, saudável e feliz.';
        } else if (x === 2) {
          nameInforServices = 'Pet Photography';
          moreInforServices = 'Oferecemos sessões de fotografia personalizadas para capturar a personalidade única do seu pet. Seja em estúdio ou ao ar livre, nossos fotógrafos especializados garantem fotos de alta qualidade, que serão lembranças preciosas por toda a vida. Deixe-nos capturar a essência do seu animal de estimação com imagens incríveis.';
        } else if (x === 3) {
          nameInforServices = 'Pet Social Events';
          moreInforServices = 'Nossos eventos sociais para pets são perfeitos para animais de estimação e seus donos se conectarem com outros entusiastas. Oferecemos uma variedade de atividades, desde piqueniques a encontros de brincadeiras, proporcionando um ambiente seguro e divertido onde os pets podem interagir e se socializar enquanto você conhece outros donos de pets.';
        }
    
        Swal.fire({
          title: nameInforServices,
          text: moreInforServices,
          confirmButtonText: 'OK'
        });
    };
    

    return(
        <section id="Services" className=" flex flex-col gap-4 p-6 font-Frist">
            <h1 className="font-bold text-center text-3xl uppercase text-GreenDark">Nossos serviços</h1>
            <div className="flex flex-row items-center justify-center gap-3 my-4 Mobile:flex-col">
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img className="w-full max-w-72 rounded-lg" src="/PetGrooming.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Grooming</h2>
                    <p className="text-center text-BlackTransparent">Cuide da higiene do seu pet com nossos serviços especializados de grooming.</p>
                    <button id='BtnMoreInfos' onClick={()=>MoreInfor(1)} className="bg-Green text-white hover:bg-GreenDark p-2 w-8/12 rounded-xl">Saiba Mais</button>
                </div>
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img className="w-full max-w-72 rounded-lg" src="/PetPhotography.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Photography</h2>
                    <p className="text-center text-BlackTransparent">Capture momentos especiais com fotos profissionais do seu pet.</p>
                    <button id='BtnMoreInfos' onClick={()=>MoreInfor(2)} className="bg-Green text-white hover:bg-GreenDark p-2 w-8/12 rounded-xl">Saiba Mais</button>
                </div>
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img className="w-full max-w-72 rounded-lg" src="/PetSocialEvents.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Social Events</h2>
                    <p className="text-center text-BlackTransparent">Promova a socialização do seu pet em nossos eventos exclusivos.</p>
                    <button id='BtnMoreInfos' onClick={()=>MoreInfor(3)} className="bg-Green text-white hover:bg-GreenDark p-2 w-8/12 rounded-xl">Saiba Mais</button>
                </div>
            </div>
        </section>
    )
}