import { FC } from "react";
import './Switch.css'

interface SwitchProps{
    onChanged: (value: boolean) => void;
}

const Switch: FC<SwitchProps> = (props) => {
    return(
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider round"></span>
        </label>
    );
}

export default Switch;