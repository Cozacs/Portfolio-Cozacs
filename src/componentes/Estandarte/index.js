import '../Banner/style.css';

export default function Estandarte({modoCor, setModoCor, setIdioma}) {
    var defineBack = modoCor === 'escuro' ? 'back backDark' : 'back backLight';
    var defineShortcuts = modoCor === 'escuro' ? 'Shortcuts ShortDark' : 'Shortcuts ShortLight';
    var defineAcess = modoCor === 'escuro' ? 'Acess AcessDark' : 'Acess AcessLight';
    var corGit = modoCor === 'escuro' ? '/assets/iconeGitDark.png' : '/assets/iconeGitLight.png';
    var corLinked = modoCor === 'escuro' ? '/assets/iconeLinkedDark.png' : '/assets/iconeLinkedLight.png';
    var corModoCor = modoCor === 'escuro' ? '/assets/iconeModoDark.png' : '/assets/iconeModoLight.png';
    var corLang = modoCor === 'escuro' ? '/assets/iconeLangDark.png' : '/assets/iconeLangLight.png';
    var corAboutIcon = modoCor === 'escuro' ? '/assets/iconeAboutDark.png' : '/assets/iconeAboutLight.png';
    var corProjectIcon = modoCor === 'escuro' ? '/assets/iconeProjectDark.png' : '/assets/iconeProjectLight.png';
    var textoModo = modoCor === 'escuro' ? 'Light Mode' : 'Dark Mode';

    const mudaModo = () => {
        modoCor === 'escuro' ? setModoCor('claro') : setModoCor('escuro');
    }

    return(
        <section className={defineBack}>
            <h1>Desenvolvedor Cozacs</h1>
            <h3>FULLSTACK</h3>
            <div className={defineShortcuts}>
                <div className={defineAcess}>
                    <a href="https://github.com/Cozacs" target='_blank' rel='noreferrer' >
                        <img src={corGit} alt="GitHub" />
                        <p className='opacidade'>GitHub</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <a href="https://www.linkedin.com/in/victor-hugo-cozac-54703213a/" target='_blank' rel='noreferrer'>
                        <img src={corLinked} alt="LinkedIn" />
                        <p className='opacidade'>LinkedIn</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <a onClick={mudaModo} >
                        <img src={corModoCor} alt="Cor da Pagina" />
                        <p className='opacidade'>{textoModo}</p>
                    </a>
                </div>
                <div className={defineAcess}>
                <a onClick={() => setIdioma('en')}>
                        <img src={corLang} alt="Cor da Pagina" />
                        <p className='opacidade'>English</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <a href="#About">
                        <img src={corAboutIcon} alt="Cor da Pagina" />
                        <p className='opacidade'>Sobre mim</p>
                    </a>
                </div>
                <div className={defineAcess}>
                <a href="#Projetos">
                        <img src={corProjectIcon} alt="Cor da Pagina" />
                        <p className='opacidade'>Projetos</p>
                    </a>
                </div>
            </div>
        </section>
    );
}