import { useState } from "react";
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
    const [firstOperand, setFirstOperand] = useState<string | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecond, setWaitingForSecond] = useState(false);

    const buttons: ButtonConfig[] = [
        
        { text: "7", type: "number" },
        { text: "8", type: "number" },
        { text: "9", type: "number" },
        { text: "÷", type: "operator" },
        { text: "4", type: "number" },
        { text: "5", type: "number" },
        { text: "6", type: "number" },
        { text: "×", type: "operator" },
        
        { text: "1", type: "number" },
        { text: "2", type: "number" },
        { text: "3", type: "number" },
        { text: "-", type: "operator" },
        { text: "=", type: "primary" },
        { text: "0", type: "number"},
        { text: ".", type: "number" },
        { text: "+", type: "operator" },
        
    ];

    const calculate = (a: number, b: number): number => {
        switch (operator) {
            case "+": return a + b;
            case "-": return a - b;
            case "×": return a * b;
            case "÷": return b !== 0 ? a / b : NaN;
            default: return b;
        }
    };

    const handleClick = (text: string) => {

    };

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
            </div>
        </div>
    );
}
