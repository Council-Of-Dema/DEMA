import { useState } from 'react';
import styled from 'styled-components';

interface StyledInputProps {
  onChange: (text: string) => void
}

function StyledInput({ onChange }: StyledInputProps) {

  const [message, setMessage] = useState("");

  const handleSend = () => {
    onChange(message);

    setMessage("");
  };

  return (
    <StyledWrapper>
      <div className="messageBox"
        onKeyUp={(e) => {
          if (e.key === "Enter")
            handleSend()
        }}>
        <input title='' value={message} id="messageInput" type="text" placeholder="Message..." required onChange={(e) => setMessage(e.target.value)} />
        <button id="sendButton" onClick={handleSend}>
          <svg viewBox="0 0 664 663" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" fill="none" />
            <path d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888" stroke="#6c6c6c" strokeWidth="33.67" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .messageBox {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-beetween;
    background-color: #1e1e1e;
    
    border-radius: 10px;
    border: 1px solid rgb(63, 63, 63);
  }
  .messageBox:focus-within {
    border: 1px solid #606060;
  }
  #messageInput {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    padding-left: 10px;
    color: #f5f5f5;
  }
  #messageInput:focus ~ #sendButton svg path,


  #sendButton {
    height: 100%;
    background-color: transparent;
    outline: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0 15px;
    transition: all 0.3s;
  }
  #sendButton svg {
    height: 18px;
    transition: all 0.3s;
  }
  #sendButton svg path {
    transition: all 0.3s;
  }
  #sendButton:hover svg path {
    fill: #3682f4;
    stroke: white;
  }`;

export default StyledInput;
