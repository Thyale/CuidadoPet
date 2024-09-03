export default function FourthSection(){
    return(
        <section id="Services" className=" flex flex-col gap-4 p-6 font-Frist">
            <h1 className="font-bold text-center text-3xl uppercase text-GreenDark">Nossos serviços</h1>
            <div className="flex flex-row items-center justify-center gap-3 my-4 Mobile:flex-col">
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img src="PetGrooming.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Grooming</h2>
                    <p className="text-center text-BlackTransparent">Cuide da higiene do seu pet com nossos serviços especializados de grooming.</p>
                    <button className="bg-Green text-white hover:bg-GreenDark px-6 py-2 rounded-xl">Saiba Mais</button>
                </div>
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img src="PetPhotography.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Photography</h2>
                    <p className="text-center text-BlackTransparent">Capture momentos especiais com fotos profissionais do seu pet.</p>
                    <button className="bg-Green text-white hover:bg-GreenDark px-6 py-2 rounded-xl">Saiba Mais</button>
                </div>
                <div className="flex flex-col items-center max-w-96 gap-2 p-2">
                    <img src="PetSocialEvents.jpg" alt="Imagem de Pet Grooming" />
                    <h2 className="text-Yellow font-Second text-3xl font-semibold">Pet Social Events</h2>
                    <p className="text-center text-BlackTransparent">Promova a socialização do seu pet em nossos eventos exclusivos.</p>
                    <button className="bg-Green text-white hover:bg-GreenDark px-6 py-2 rounded-xl">Saiba Mais</button>
                </div>
            </div>
        </section>
    )
}