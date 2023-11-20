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
        console.log("Valor de naTela", naTela);
    }, [naTela]);
    var entraDireita = naTela ? 'ApresentadoDireita' : 'naoApresentadoDireita';
    

    return(
        <section id='About'>
            <div id='Abouti' ref={ReferenciaSobre}>
                <img src={mudaFoto} alt="Foto Perfil" className={entraDireita} />
                <div id='AboutInfo'>
                    <h1 className={`${modoCores} ${entraDireita}`}>About me</h1>
                    <div className={`${modoCores} ${entraDireita}`} id='content'>
                        <p id='textAbout'>Recently i have been interested about Development, and since then upgrading my hard skills and i can already Develop using <strong>HTML5, CSS3, JS, REACT, NODE.JS.</strong>
                        <br /> <br />
                        I hope u enjoy my projects below</p>
                        <a href="mailto:victorcozac32@gmail.com" className={modoCoresReverso} id='mail'>
                            <img src={mudaIconeMail} alt="icone" />
                            <p className={`${modoCores} ${entraDireita}`} id='arredonda'>Send me a e-mail</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}