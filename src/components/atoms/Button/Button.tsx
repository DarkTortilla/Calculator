import './Button.css'


export type ButtonProps = {
  onClick: ()=> null;
  type: "operator" | "number" | "primary";
  text: string;
}

export default function Button({onClick, type, text}: ButtonProps) {
  return (
    <div onClick={onClick} className={`button  ${type}`}>
      {text}
    </div>
  )
}
