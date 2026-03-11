import './App.css'
import StyledInput from './appComponents/StyledInput';
import Glitch from './appComponents/Glitch';

function App() {


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
          justifyContent: 'flex-end',
          colorScheme: "dark"
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