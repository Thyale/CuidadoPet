export default function SecondSection(){
    return(
        <section className=" flex flex-col gap-4 p-6 font-Frist">
            <h1 className="font-bold text-center text-3xl uppercase">O que oferecemos</h1>

            <div className="flex flex-row items-center justify-center gap-3 my-4 Mobile:flex-col">

                <div className=" flex flex-col gap-2 items-end Mobile:items-center">

                    <div className=" flex flex-row-reverse items-center gap-4 text-right w-7/12 Mobile:w-full Mobile:flex-row Mobile:text-left">
                        <div className="bg-Green text-white px-6 py-3 rounded-full text-2xl">1</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Treinamento em Grupo</h2>
                            <p className="text-BlackTransparent text-sm">Participe de sessões de treinamento em grupo para socializar e educar seu cão ao mesmo tempo.</p>
                        </div>
                    </div>

                    <div className=" flex flex-row-reverse items-center gap-4 text-right w-7/12 Mobile:w-full Mobile:flex-row Mobile:text-left">
                        <div className="bg-Yellow text-white px-5 py-3 rounded-full text-2xl">2</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Treinamento Individual</h2>
                            <p className="text-BlackTransparent text-sm">Obtenha atenção personalizada com sessões individuais para atender às necessidades específicas do seu cão.</p>
                        </div>
                    </div>

                    <div className=" flex flex-row-reverse items-center gap-4 text-right w-7/12 Mobile:w-full Mobile:flex-row Mobile:text-left">
                        <div className="bg-Green text-white px-5 py-3 rounded-full text-2xl">3</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Treinamento Virtual</h2>
                            <p className="text-BlackTransparent text-sm">Treine seu cão no conforto da sua casa com sessões online conduzidas por nossos especialistas.</p>
                        </div>
                    </div>

                </div>

                <img className="w-4/12 max-w-72 Mobile:w-full" src="ImgBase.png" alt="Img de gato e cachorro juntos" />

                <div className=" flex flex-col gap-2 items-start">
                    <div className=" flex flex-row items-center gap-4 text-left w-7/12 Mobile:w-full" >
                        <div className="bg-Yellow text-white px-5 py-3 rounded-full text-2xl">4</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Treinamento para Filhotes</h2>
                            <p className="text-BlackTransparent text-sm">Dê ao seu filhote o melhor começo com nosso programa especializado em comportamento para cães jovens.</p>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center gap-4 text-left w-7/12 Mobile:w-full">
                        <div className="bg-Green text-white px-5 py-3 rounded-full text-2xl">5</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Programa Especializado</h2>
                            <p className="text-BlackTransparent text-sm">Participe de nossos programas avançados para necessidades comportamentais específicas.</p>
                        </div>
                    </div>
                    <div className=" flex flex-row items-center gap-4 text-left w-7/12 Mobile:w-full">
                        <div className="bg-Yellow text-white px-5 py-3 rounded-full text-2xl">6</div>
                        <div>
                            <h2 className="text-GreenDark font-bold text-lg">Programa de Segurança</h2>
                            <p className="text-BlackTransparent text-sm">Melhore a segurança do seu cão com treinamento focado em comportamento protetor e obediente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}