import { FC } from "react";
import './ErrorText.css';

interface ErrorTextProps{
    text: string;
}

const ErrorText:FC<ErrorTextProps> = (props) => {
    return(
        <div className="error">
            {props.text}
        </div>
    );
}

export default ErrorText;