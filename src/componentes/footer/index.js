import './style.css';

export default function Footer({modoCor}){
    var BackFoot = modoCor === 'escuro' ? 'BackFootDark' : 'BackFootLight';

    return(
        <footer className={BackFoot}>
            <p>&copy;Development by Cozacs</p>
        </footer>
    );
}