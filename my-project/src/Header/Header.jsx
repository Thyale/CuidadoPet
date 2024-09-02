export default function Header(){
    return(
        <header className="
        flex flex-row items-center justify-around p-2 font-Frist text-Green
        Mobile:flex-col Mobile:gap-4">
            <img className="max-w-14" src="IconBlack.png" alt="Ícone Logo da página" />
            <ul className="flex flex-row items-center gap-4 flex-wrap justify-center">
                <li><a className="hover:font-bold" href="#">Home</a></li>
                <li><a className="hover:font-bold" href="#">Sobre</a></li>
                <li><a className="hover:font-bold" href="#">Serviços</a></li>
                <li><a className="hover:font-bold" href="#">Galeria</a></li>
                <li><a className="hover:font-bold" href="#">Notícias</a></li>
                <li><a className="hover:font-bold" href="#">Contato</a></li>
            </ul>
            <button className="bg-Green hover:bg-GreenDark p-2 rounded-lg text-white Mobile:hidden">Entre em Contato</button>
        </header>
    )
}