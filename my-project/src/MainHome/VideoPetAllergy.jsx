import { useEffect } from "react"
import ScrollReveal from "scrollreveal"

export default function VideoPetAllergy(){

    useEffect(() => {
        ScrollReveal().reveal('#Allergies', {
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
        <section className="bg-[url('/ImgPetAllergies.jpg')] bg-cover bg-no-repeat bg-center p-6 flex fle-row justify-center gap-6 font-Frist py-16 flex-wrap items-center">
            <div id="Allergies" className="flex flex-col gap-6 DeskTop:w-6/12">
                <h1 className="text-LigthGreen text-5xl">Animais de estimação tem alergias?</h1>
                <p className="text-white text-lg">Sim, animais de estimação também podem ter alergias. Assim como os humanos, eles podem reagir a uma variedade de substâncias, como alimentos, pólen, poeira, ácaros e produtos químicos. Os sintomas em animais de estimação podem incluir coceira excessiva, problemas de pele, espirros, secreção nasal, e até problemas gastrointestinais. </p>
                <p className="text-white text-2xl">É importante que os tutores estejam atentos a esses sinais e consultem um veterinário para um diagnóstico preciso e tratamento adequado. O manejo das alergias pode envolver mudanças na dieta, uso de medicamentos e ajustes no ambiente para melhorar o bem-estar do pet.</p>
            </div>
            <iframe id="Allergies" width="560" height="315" src="https://www.youtube.com/embed/UaS6xOyg26w?si=3paNRP3REdt9Txzm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
    )
}