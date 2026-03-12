/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import StyledInput from './appComponents/StyledInput';
import Glitch from './appComponents/Glitch';
import { useEffect, useRef, useState } from 'react';
import MessageBox from './appComponents/MessageBox';

const steps: ChatStep[] = [
  { type: "bot", text: "Y OU R E A D I T", delay: 1200 },
  { type: "bot", text: "G OO D", delay: 1800 },
  { type: "bot", text: "I W AS WON D E R I NG", delay: 2200 },
  { type: "bot", text: "Y OU TO OK Y OU R T I ME", delay: 2600 },
  { type: "bot", text: "W E HA V E A LW A YS WA TC H ED Y OU R D I V ER SI O NS", delay: 3200 },
  { type: "bot", text: "Y OU KN OW W H AT I NE ED", delay: 2600 },
  { type: "bot", text: "T H E VESSEL", delay: 2000 },
  { type: "bot", text: "FI ND I T", delay: 2200 },
  { type: "bot", text: "I A M", delay: 3000 },
  { type: "bot", text: "ST IL L WA I T IN G", delay: 3500 },
  { type: "bot", text: "YO U W ILL AN SWE R", delay: 2500 },
  { type: "bot", text: "ON LY  O NE   WO RD", delay: 2800 },
  { type: "bot", text: "YES", delay: 3200 },
  { type: "bot", text: "TYPE IT", delay: 3200 },
  { type: "waitInput" },

  { type: "bot", text: "DO NO T WR ITE  AN YTH ING   EL SE", delay: 2600 },
  { type: "bot", text: "I WI LL NO T   RE SP ON D", delay: 2600 },
  { type: "bot", text: "ON LY  YES", delay: 2800 },
  { type: "waitInput" },

  { type: "bot", text: "IT IS HE RE", delay: 2000 },
  { type: "bot", text: "T HE VESS EL", delay: 2000 },

  { type: "bot", text: "ON TH IS FL OO R", delay: 4000 },

  { type: "bot", text: "DO NO T GO UP", delay: 4500 },
  { type: "bot", text: "ST AY  DO WN", delay: 4500 },

  { type: "bot", text: "DO YO U UN DER ST AN D‽", delay: 6000 },
  { type: "waitInput" },
  { type: "bot", text: "IT IS IN A   FO RGO TT EN  PL AC E", delay: 2500 },
  { type: "bot", text: "DA RK", delay: 1000 },
  { type: "bot", text: "FI ND IT", delay: 1500 },
  { type: "bot", text: "I AM WA IT ING", delay: 4000 },
  { type: "bot", text: "ANS WE R", delay: 1000 },
  { type: "waitInput" },
  { type: "bot", text: "YO U KNOW TH AT PL ACE", delay: 1500 },
  { type: "bot", text: "WH ER E DISORDER RU LES", delay: 2500 },
  { type: "bot", text: "LO OK TH ERE", delay: 1700 },
  { type: "bot", text: "WH Y AR E YO U ST ILL TH ER E", delay: 3500 },
  { type: "bot", text: "MO VE", delay: 1000 },
  { type: "bot", text: "I AM ST ILL WA IT ING", delay: 1500 },
  { type: "bot", text: "FI ND IT", delay: 1000 },
  { type: "bot", text: "WH EN YO U FI ND IT", delay: 1300 },
  { type: "bot", text: "CO M E  BA CK  TO M E", delay: 1200 },
  { type: "bot", text: "WR ITE  YE S", delay: 1500 },
  { type: "bot", text: "ON LY  YE S", delay: 1000 },
  { type: "waitInput" },
  { type: "bot", text: "GO OD", delay: 1000 },
  { type: "bot", text: "FI NA LL Y", delay: 1000 },
  { type: "bot", text: "WELCOME TO DEMA GIORGIA", delay: 5000 },
];

export type Message = {
  type: "sender" | "receiver",
  text: string
}

type ChatStep =
  | { type: "bot"; text: string; delay?: number }
  | { type: "waitInput" };

function App() {

  const [messages, setMessages] = useState<Message[]>(JSON.parse(window.localStorage.getItem("messages") ?? "[]"));
  const [stepIndex, setStepIndex] = useState<number>(Number(window.localStorage.getItem("step") ?? 0));

  const ref = useRef<HTMLDivElement | null>(null);


  /*   useEffect(() => {
      if (stepIndex >= steps.length || closed) return;
  
      const step = steps[stepIndex];
  
      if (step.type === "bot") {
        const timeout = setTimeout(() => {
          setMessages((m) => [...m, { type: "receiver", text: step.text }]);
          setStepIndex((i) => i + 1);
          window.localStorage.setItem("messages", JSON.stringify([...messages, { type: "receiver", text: step.text }]))
          window.localStorage.setItem("step", (stepIndex + 1).toString())
        }, step.delay ?? 500);
  
        return () => clearTimeout(timeout);
      }
  
    }, [stepIndex]); */

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [stepIndex])

  useEffect(() => {
    //setTimeout(() => location.reload(), 10000)
  }, [])

  function sendMessage(text: string) {
    if (text.trim().toLowerCase() === "yes") {
      setMessages((m) => [...m, { type: "sender", text }]);
      setStepIndex((i) => i + 1);
    }
  }

  return (

    <div >
      <Glitch />
      <main className="content-container">
        <div style={{
          transform: 'translate(-50%,-50%)',
          top: '50%',
          left: '50%',
          background: "#000000",
          display: 'flex',
          justifyContent: 'center',
          border: '10px solid #C41E3A',
          position: 'absolute',
          width: "50%",
          margin: 0
        }}>
          <h1 style={{ color: '#C41E3A', padding: "0px 40px", margin: 0, fontSize: '50px' }}>
            5.30PM
          </h1>
        </div>
        <dialog open style={{
          width: '40%',
          height: '40%',
          transform: 'translate(-30%,-46%)',
          top: '50%',
          left: '50%',
          position: 'absolute',
          // display: 'flex',
          display: "none",
          flexDirection: 'column',
          justifyContent: 'flex-end',
          colorScheme: "dark"
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            gap: 3.5
          }}>
            {messages.map((m, i) => (
              <MessageBox key={i} mess={m} />
            ))}
            <div ref={ref} />
          </div>

          <div className='input-box'>
            <StyledInput onChange={sendMessage} />
          </div>
        </dialog>
      </main>
    </div >
  )
}

export default App;