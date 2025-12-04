import { useState } from "react";
import { evaluate } from "mathjs";
import Button from "../../atoms/Button/Button";
import Display from "../../atoms/Display/Display";
import './Calculator.css';

type ButtonConfig = {
    text: string;
    type: "operator" | "number" | "primary";
    wide?: boolean;
}

export default function Calculator() {
    const [display, setDisplay] = useState("0");


    const buttons: ButtonConfig[] = [

        { text: "7", type: "number" },
        { text: "8", type: "number" },
        { text: "9", type: "number" },
        { text: "/", type: "operator" },
        { text: "4", type: "number" },
        { text: "5", type: "number" },
        { text: "6", type: "number" },
        { text: "*", type: "operator" },

        { text: "1", type: "number" },
        { text: "2", type: "number" },
        { text: "3", type: "number" },
        { text: "-", type: "operator" },
        { text: "=", type: "primary" },
        { text: "0", type: "number" },
        { text: ".", type: "number" },
        { text: "+", type: "operator" },

    ];



    const handleClick = (text: string) => {
        if (text !== '=') {
            setDisplay(prev => prev + text)
        }
        else {
            console.log(display, evaluate(display))
            setDisplay(evaluate(display));

        }

    };

    const resetDisplay = () => setDisplay('')

    return (
        <div className="calculator">
            <Display value={display} />
            <div className="buttons-grid">
                {buttons.map((b, i) => (
                    <Button
                        onClick={() => { handleClick(b.text); return null; }}
                        text={b.text}
                        type={b.type}
                        key={i}
                    />
                ))}
                <Button onClick={() => { resetDisplay(); return null }}
                    text='C'
                    type='primary'></Button>
            </div>
        </div>
    );
}
