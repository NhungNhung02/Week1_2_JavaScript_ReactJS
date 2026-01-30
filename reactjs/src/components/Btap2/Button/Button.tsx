import "./Button.css";

type ButtonType = "primary" | "danger" | "success";

interface ButtonProps {
    type: ButtonType;
    text: string;
}

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button className={`btn btn-${type}`}>
            {text}
        </button>
    );
};

export default Button;
