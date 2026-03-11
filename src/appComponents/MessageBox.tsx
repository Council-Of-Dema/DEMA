import type { Message } from "../App";


export default function MessageBox({ mess }: { mess: Message }) {

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: mess.type === "receiver" ? "start" : "end",

        }}>
            <span style={{
                paddingRight: '2px',
                paddingLeft: '2px',
                backgroundColor: mess.type === "receiver" ? 'indianred' : "black",
                color: mess.type === "receiver" ? "black" : "white"
            }}>
                {mess.text}
            </span>
        </div>
    );
}

