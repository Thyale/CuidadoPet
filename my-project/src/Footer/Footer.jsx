export default function Footer(){
    return(
        <footer id="Footer" className="bg-Green flex flex-row items-center text-white font-Frist justify-around p-6 Mobile:flex-col gap-6 Mobile:items-start">
            <img className="w-32" src="/IconWhite.png" alt="Ícone" />
            <div className="flex flex-row items-start gap-2 Mobile:flex-col Mobile:gap-6 ">
               <div className="flex flex-col gap-2 max-w-96">
                <h2 className="text-xl">Horário de Funcionamento</h2>
                <p className="text-whiteTransparent">Nosso suporte está disponível para ajudar você 24 horas por dia. Nós oferecemos o nosso melhor.</p>
                <div className="text-whiteTransparent">
                   <p>Seg - Sex: 08:00 - 20:00</p>
                   <p>Sábado: 09:00 - 20:00</p>
                   <p>Domingo: Estamos Fechados</p>
                </div>
               </div>
               <div className="flex flex-col gap-2 max-w-96">
                <h2 className="text-xl">Informações de Contato</h2>
                <p className="text-whiteTransparent">Entre em contato conosco para saber mais sobre nossos serviços e como podemos ajudar você a alcançar seus objetivos.</p>
                <div className="text-whiteTransparent">
                   <p>📍 000-000-000</p>
                   <p>📧 0000@exampmle.com</p>
                </div>
               </div>
            </div>
        </footer>
    )
}