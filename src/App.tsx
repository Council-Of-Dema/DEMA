import './App.css'
import StyledInput from './appComponents/StyledInput';
import Glitch from './appComponents/Glitch';

function App() {

  //const [appare, setAppare] = useState(false)

  /*   useEffect(() => {
      const enableFullscreen = () => {
        const elem = document.documentElement; // Seleziona l'intera pagina
  
        // Funzione per gestire i vari browser
        const requestFS =
          elem.requestFullscreen
  
        if (requestFS) {
          requestFS.call(elem)
            .then(() => {
              console.log("Fullscreen attivato con successo!");
            })
            .catch((err) => {
              console.error(`Errore nel tentativo di attivare il fullscreen: ${err.message}`);
            });
        }
  
        // IMPORTANTE: Rimuoviamo il listener subito dopo il primo click
        document.removeEventListener('click', enableFullscreen);
      };
  
      // Aggiungiamo il listener globale
      document.addEventListener('click', enableFullscreen);
  
      // Pulizia se il componente viene smontato
      return () => document.removeEventListener('click', enableFullscreen);
    }, []); */

  return (

    <div >
      <Glitch />
      <main className="content-container">
        <dialog open style={{
          width: '40%',
          height: '40%',
          transform: 'translate(-30%,-46%)',
          top: '50%',
          left: '50%',
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end'
        }}>
          <div>
            <span>
              ciao
            </span>
          </div>
          <div className='input-box'>
            <StyledInput />
          </div>
        </dialog>
      </main>
    </div >
  )
}

export default App;