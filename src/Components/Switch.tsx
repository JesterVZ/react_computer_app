import { FC } from "react";
import './Switch.css'

interface SwitchProps{
    onChanged: () => void;
    checked: boolean;
}

const Switch: FC<SwitchProps> = (props) => {
    return(
        <label className="switch">
            <input type="checkbox" onChange={props.onChanged} checked={props.checked}/>
            <span className="slider round"></span>
        </label>
    );
}

export default Switch;