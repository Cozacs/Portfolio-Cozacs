import './style.css';
import { useState, useRef, useEffect } from 'react';
import DadosDeProjetos from '../../dados/dados';

export default function Projects({modoCor, idioma}) {
    var defineCor = modoCor === 'escuro' ? 'Light' : 'Dark';
    var defineCorInvertido = modoCor === 'escuro' ? 'Dark' : 'Light';
    var defineIdioma = idioma === 'en' ? 'Open Project' : 'Abrir o Projeto';
    var defineBackground = modoCor === 'escuro' ? 'FundoDark' : 'FundoLight';
    var defineBackgroundInvertido = modoCor === 'escuro' ? 'FundoLight' : 'FundoDark';
    const [projetoExibido, setProjetoExibido] = useState(0);
    const [entrouNaTela, setEntrouNaTela] = useState();
    const referencia = useRef();
    useEffect(() => {
        const observador = new IntersectionObserver((entries) => {
            const entrada = entries[0];
            setEntrouNaTela(entrada.isIntersecting);
        });
        observador.observe(referencia.current);
    }, [entrouNaTela]);
    var entraEsquerda = entrouNaTela ? 'apresentado' : 'naoApresentado';
    var entraSobe = entrouNaTela ? 'botaoProjeto apresentadoCima' : 'botaoProjeto naoApresentadoCima';
    
    function voltaPJ() {
        if (projetoExibido > 0){
            setProjetoExibido(projetoExibido-1);
        }else if (projetoExibido === 0){
            setProjetoExibido(DadosDeProjetos.length-1);
        };
    };

    function avancaPJ() {
        if (projetoExibido < DadosDeProjetos.length-1){
            setProjetoExibido(projetoExibido+1);
        } else if (projetoExibido === DadosDeProjetos.length-1){
            setProjetoExibido(0);
        };
    };

    function js(){
        if (naTela.JS === true){
           return (<img src={modoCor === 'escuro' ? 'assets/iconeJSDark.png' : 'assets/iconeJSLight.png' } alt="imagem JS"  title='JavaScript'/>);
        }
        return null;
    };

    function css(){
        if (naTela.CSS === true){
           return (<img src={modoCor === 'escuro' ? 'assets/iconeCSSDark.png' : 'assets/iconeCSSLight.png' } alt="imagem CSS" title='CSS' />);
        }
        return null;
    };

    function html(){
        if (naTela.HTML === true){
           return (<img src={modoCor === 'escuro' ? 'assets/iconeHTMLDark.png' : 'assets/iconeHTMLLight.png' } alt="imagem HTML" title='HTML'/>);
        }
        return null;
    };

    function react(){
        if (naTela.REACT === true){
           return (<img src={modoCor === 'escuro' ? 'assets/iconeReactDark.png' : 'assets/iconeReactLight.png' } alt="imagem REACT" title='React' />);
        }
        return null;
    };

    var naTela = DadosDeProjetos[projetoExibido];
    
    var defineTitulo = idioma === 'en' ? naTela.tituloEn : naTela.tituloPT ;
    var defineTexto = idioma === 'en' ? naTela.TextoEn : naTela.TextoPT ;

    return(
        <section id='Projetos'>
            <div id='ProjetoNaTela'>
                <h1 className={`letra${defineCor} ${defineBackground} ${entraEsquerda}`}>{defineTitulo}</h1>
                <div className={`${defineBackground} ${entraEsquerda}`} id='conteudoProjeto'>
                    <p className={`letra${defineCor}  ${defineBackground}`}>{defineTexto}</p>
                    <div id='icones'>
                        {js()}
                        {css()} 
                        {html()}
                        {react()}
                    </div>
                    <a className={`letra${defineCorInvertido}  ${defineBackgroundInvertido}`} id='abrirProjeto' href={naTela.Link} target='_blank' rel='noreferrer'>{defineIdioma}</a>
                </div>
            </div>
            <div  id='mostraprojeto' ref={referencia} >
                <img src={`assets/iconeLeftLight.png`} alt="Botao esquerdo" className={entraSobe} onClick={voltaPJ}/>

                <img src={`assets/Projeto${naTela.foto}.png`} alt="Imagem do Projeto em execução" className={entrouNaTela ? 'apresentado' : 'naoApresentado'}/>

                <img src={`assets/iconeRightLight.png`} alt="Botao direito" className={entraSobe} onClick={avancaPJ}/>
            </div>
        </section>
    );
}