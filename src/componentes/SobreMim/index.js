import '../AboutMe/style.css';

export default function Sobre({modoCor}) {
    var modoCores = modoCor === 'escuro' ? 'ContentDark' : 'ContentLight';
    var modoCoresReverso = modoCor === 'escuro' ? 'ContentLight' : 'ContentDark';
    var mudaFoto = modoCor === 'escuro' ? "/assets/fotoPerfilDark.png" : "/assets/fotoPerfilLight.png";
    var mudaIconeMail = modoCor === 'escuro' ? "/assets/iconeMailDark.png" : "/assets/iconeMailLight.png";
    var CorFundo = modoCor === 'escuro' ? "About AboutDark" : "About AboutLight";

    return(
        <section className={CorFundo} id="About">
            <div id='Abouti'>
                <img src={mudaFoto} alt="Foto Perfil" />
                <div id='AboutInfo'>
                    <h1 className={modoCores}>Sobre mim</h1>
                    <div className={modoCores} id='content'>
                        <p id='textAbout'>Recentemente tenho me interessado pela área de Dev, venho aprimorando minhas habilidades e até o momento já desenvolvo em <strong>HTML5,  CSS3,  JS, REACT, NODE.JS</strong>
                        <br /> <br />
                        Espero que você goste  dos meus projetos abaixo.</p>
                        <a href="mailto:victorcozac32@gmail.com" className={modoCoresReverso} id='mail'>
                            <img src={mudaIconeMail} alt="icone" />
                            <p className={modoCores}>Me envie um e-mail</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}