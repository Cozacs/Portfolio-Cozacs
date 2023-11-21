import './style.css';
import { useState, useRef, useEffect } from 'react';

export default function Banner({modoCor, setModoCor, setIdioma}) {
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
    var botaoCor = modoCor === 'escuro' ? 'buttonBackLight.png' : 'buttonBackDark.png';

    const [botaoAparece, setBotaoAparece] = useState();
    const referenciaBotao = useRef();

    useEffect(() => {
        const ObservadorBotao = new IntersectionObserver((dados) => {
            const dado = dados[0];
            setBotaoAparece(dado.isIntersecting);
            console.log(botaoAparece);
        });
        ObservadorBotao.observe(referenciaBotao.current);
    }, [botaoAparece]);

    const mudaModo = () => {
        modoCor === 'escuro' ? setModoCor('claro') : setModoCor('escuro');
    }

    var botaoLigado = botaoAparece ? 'On': 'Off';

    return(
        <section className={`${defineBack}`} ref={referenciaBotao} id='Topo'>
            <h1>Cozacs Developer</h1>
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
                    <p onClick={mudaModo}>
                        <img src={corModoCor} alt="Cor da Pagina" />
                        <span className='opacidade'>{textoModo}</span>
                    </p>
                </div>
                <div className={defineAcess}>
                    <p onClick={() => setIdioma('pt')} >
                        <img src={corLang} alt="Cor da Pagina" />
                        <span className='opacidade'>Português</span>
                    </p>
                </div>
                <div className={defineAcess}>
                    <a href="#About">
                        <img src={corAboutIcon} alt="Cor da Pagina" />
                        <p className='opacidade'>About me</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <a href="#Projetos">
                        <img src={corProjectIcon} alt="Cor da Pagina" />
                        <p className='opacidade'>Projects</p>
                    </a>
                </div>
            </div>
            <a href="#Topo" id="fixoNoCanto" className={botaoLigado}>
                <img src={`assets/${botaoCor}`} alt="Botao de Voltar pro Topo" id='botaoVoltar'/>
            </a>
        </section>
    );
}