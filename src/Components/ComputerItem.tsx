import { FC } from "react";
import { IComputer } from "../Types/Response";
import Card from "./Card";
import './ComputerItem.css'

interface ComputerItemProps {
    item: IComputer;
}

const ComputerItem: FC<ComputerItemProps> = (props) => {
    return(
        <Card>
            <div className="bar">
                <div className="status">
                    <div className="status-title">
                        Connected
                    </div>
                </div>
                <div className="info">
                    <div className="info-title">
                        {props.item.name}
                    </div>
                    <div className="info-description">
                        {props.item.description ?? "No info"}
                    </div>
                </div>
            </div>
            
            
        </Card>
    );
}

export default ComputerItem;