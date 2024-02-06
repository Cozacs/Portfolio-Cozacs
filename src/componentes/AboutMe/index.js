import './style.css';
import { useState, useRef, useEffect } from 'react';

export default function About({modoCor}) {
    var modoCores = modoCor === 'escuro' ? 'ContentDark' : 'ContentLight';
    var modoCoresReverso = modoCor === 'escuro' ? 'ContentLight' : 'ContentDark';
    var mudaFoto = modoCor === 'escuro' ? "/assets/fotoPerfilDark.png" : "/assets/fotoPerfilLight.png";
    var mudaIconeMail = modoCor === 'escuro' ? "/assets/iconeMailDark.png" : "/assets/iconeMailLight.png";
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
        <section id='About'>
            <div id='Abouti' ref={ReferenciaSobre}>
                <img src={mudaFoto} alt="Foto Perfil" title='Foto do desenvolvedor Fullstack' className={entraDireita} />
                <div id='AboutInfo'>
                    <h2 className={`${modoCores} ${entraDireita}`}>About me</h2>
                    <div className={`${modoCores} ${entraDireita}`} id='content'>
                        <p id='textAbout'>Recently i have been interested about Development and since then upgrading my hard skills to be a better developer, i'm using this technologies below to develop web sites for my clients <strong>HTML5, CSS3, JavaScript, REACT, NODE.JS, API:Rest and MySQL</strong> you can see some projects in the next section.
                        <br /> <br />
                        I hope you enjoy my projects below</p>
                        <a href="mailto:portfolio@cozacdev.com.br" className={modoCoresReverso} id='mail' target='_blank' rel='noreferrer'>
                            <img src={mudaIconeMail} alt="Icone de e-mail" title='Icone de e-mail' />
                            <p className={`${modoCores} ${entraDireita}`} id='arredonda'>Send me a e-mail</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}