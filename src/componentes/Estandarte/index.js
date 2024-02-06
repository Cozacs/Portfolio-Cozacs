import '../Banner/style.css';
import { useRef, useEffect, useState } from 'react';

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
        <section className={defineBack}  ref={referenciaBotao} id='Topo' fetchpriority='high'>
            <h1>Desenvolvedor Full-Stack</h1>
            <h3>Cozacs</h3>
            <div className={defineShortcuts}>
                <div className={defineAcess}>
                    <a href="https://github.com/Cozacs" target='_blank' rel='noreferrer' >
                        <img src={corGit} alt="GitHub" title='Icone do Github'  />
                        <p className='opacidade'>GitHub</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <a href="https://www.linkedin.com/in/cozacvictor" target='_blank' rel='noreferrer'>
                        <img src={corLinked} alt="LinkedIn" title='Icone do Linkedin' />
                        <p className='opacidade'>LinkedIn</p>
                    </a>
                </div>
                <div className={defineAcess}>
                    <p onClick={mudaModo} href="#">
                        <img src={corModoCor} alt="Cor da Pagina" title='Icone do tema da pagina' />
                        <span className='opacidade'>{textoModo}</span>
                    </p>
                </div>
                <div className={defineAcess}>
                <p onClick={() => setIdioma('en')} href="#">
                        <img src={corLang} alt="Idioma da Pagina" title='Icone da lingua da pagina' />
                        <span className='opacidade'>English</span>
                    </p>
                </div>
                <div className={defineAcess}>
                    <a href="#About">
                        <img src={corAboutIcon} alt="Seção sobre mim da Pagina" title='Icone da seção sobre mim' />
                        <p className='opacidade'>Sobre mim</p>
                    </a>
                </div>
                <div className={defineAcess}>
                <a href="#Projetos">
                        <img src={corProjectIcon} alt="Seção projetos da Pagina" title='Icone da seção projetos' />
                        <p className='opacidade'>Projetos</p>
                    </a>
                </div>
            </div>
            <a href="#Topo" id="fixoNoCanto" className={botaoLigado}>
                <img src={`assets/${botaoCor}`} alt="Botao de Voltar pro Topo" title='Icone de redirecionamento pro topo' id='botaoVoltar'/>
            </a>
        </section>
    );
}