// Components

function Home() {
    return (
        <>
            <main className="l-main">
                <div className='l-topHed'>
                    <h1 className='c-title__topPage'>Seja bem vindo a Poketex!</h1>
                </div>
                <p className="c-text">Este site é completamente voltado a estudos de react. Não reivindico nenhum direito por imagens ou ícones utilizados na construção das páginas registradas.</p>
                <p className="c-text">Essa pokedex personalizada está em processo de construção, e é feita com base no consumo de uma API conhecida como PokeAPI. Para críticas e sugestões, ou caso queira conferir o código fonte deste site, considere passar no meu GitHub.</p>
                <p className="c-text">Acesso a PokeAPI: <a href="https://pokeapi.co/" > PokeAPI </a> </p>
                <p className="c-text">Acesso ao meu GitHub: <a href="https://github.com/MateusPratu" > @MateusPratu </a> </p>
                <p className="c-text">Projeção no Figma: <a href="https://www.figma.com/file/yB7LoUwnJal4be1ohQsT88/Pokedex?node-id=0%3A1&t=wMUJ7FDylzTLi4LT-0" > Figma </a> </p>
            </main>
        </>
    );
}

export default Home;