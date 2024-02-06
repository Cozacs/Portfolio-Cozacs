import '../AboutMe/style.css';
import { useState, useRef, useEffect } from 'react';

export default function Sobre({modoCor}) {
    var modoCores = modoCor === 'escuro' ? 'ContentDark' : 'ContentLight';
    var modoCoresReverso = modoCor === 'escuro' ? 'ContentLight' : 'ContentDark';
    var mudaFoto = modoCor === 'escuro' ? "/assets/fotoPerfilDark.png" : "/assets/fotoPerfilLight.png";
    var mudaIconeMail = modoCor === 'escuro' ? "/assets/iconeMailDark.png" : "/assets/iconeMailLight.png";
    var CorFundo = modoCor === 'escuro' ? "About AboutDark" : "About AboutLight";
    const [naTela, setNaTela] = useState();
    const ReferenciaSobre = useRef();
    useEffect(() => {
        const observador = new IntersectionObserver((entradas) => {
            const entrada = entradas[0];
            setNaTela(entrada.isIntersecting);
        });
        observador.observe(ReferenciaSobre.current);
    }, [naTela]);
    var entraDireita = naTela ? 'ApresentadoDireita' : 'naoApresentadoDireita';

    return(
        <section className={CorFundo} id="About">
            <div id='Abouti' ref={ReferenciaSobre}>
                <img src={mudaFoto} alt="Foto Perfil" title='Foto do desenvolvedor Fullstack' className={entraDireita} />
                <div id='AboutInfo'>
                    <h2 className={`${modoCores} ${entraDireita}`}>Sobre mim</h2>
                    <div className={`${modoCores} ${entraDireita}`} id='content'>
                        <p id='textAbout'>Recentemente tenho me interessado pela área de Desenvolvimento e desde entao venho aprimorando minhas habilidades para me tornar um desenvolver melhor a cada dia, eu já estou utilizando as tecnologias abaixo para desenvolver sites para os meus clientes <strong>HTML5, CSS3, JavaScript, REACT, NODE.JS, API:Rest e MySQL</strong>
                        voce pode ver alguns projetos na próxima seção.
                        <br /> <br />
                        Espero que você goste  dos meus projetos abaixo.</p>
                        <a href="mailto:portfolio@cozacdev.com.br" className={modoCoresReverso} id='mail' target='_blank' rel='noreferrer'>
                            <img src={mudaIconeMail} alt="icone" />
                            <p className={`${modoCores} ${entraDireita}`} id='arredonda'>Contato e-mail</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}