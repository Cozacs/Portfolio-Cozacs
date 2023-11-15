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
                    <img src={corGit} alt="GitHub" />
                    <a href="https://github.com/Cozacs" target='_blank' rel='noreferrer' className='opacidade'>GitHub</a>
                </div>
                <div className={defineAcess}>
                    <img src={corLinked} alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/victor-hugo-cozac-54703213a/" target='_blank' rel='noreferrer' className='opacidade'>LinkedIn</a>
                </div>
                <div className={defineAcess}>
                    <img src={corModoCor} alt="Cor da Pagina" />
                    <p onClick={mudaModo} className='opacidade'>{textoModo}</p>
                </div>
                <div className={defineAcess}>
                    <img src={corLang} alt="Cor da Pagina" />
                    <p onClick={() => setIdioma('en')} className='opacidade'>English</p>
                </div>
                <div className={defineAcess}>
                    <img src={corAboutIcon} alt="Cor da Pagina" />
                    <a href="#about" className='opacidade'>Sobre mim</a>
                </div>
                <div className={defineAcess}>
                    <img src={corProjectIcon} alt="Cor da Pagina" />
                    <a href="#Projetos" className='opacidade'>Projetos</a>
                </div>
            </div>
        </section>
    );
}