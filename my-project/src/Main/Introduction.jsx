export default function Introduction(){
    return(
        <section className="flex flex-row justify-center gap-10 items-center p-9 font-Frist">
            <div>
                <p className="text-2xl font-Second text-Yellow">Centro de Cuidado e Higiene para Animais Confiável</p>
                <h1 className="text-7xl font-bold text-Green">Cuidamos do</h1>
                <h1 className="text-7xl font-bold text-Yellow">Seu Pet</h1>
                <div className="mt-5 flex flex-row items-center gap-3 font-Frist">
                    <a target="_Blanck" href="https://wa.me/5511999999999?text=Olá, Gostaria de agendar um treinamento!"><button className="bg-Green hover:bg-GreenDark p-2 rounded-lg text-white">Agendar Treinamento</button></a>
                    <a href="#Offer"><button className="hover:bg-Gray200 text-Green border-Green border p-2 rounded-lg">Mais Detalhes</button></a>
                </div>
            </div>
            <img className="w-6/12 max-w-md Mobile:hidden" src="ImgBase.png" alt="Imagem Principal de um gato com um cachorro" />
        </section>
    )
}