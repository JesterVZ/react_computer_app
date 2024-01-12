import { FC, useState } from "react";
import { IComputer } from "../Types/Response";
import Card from "./Card";
import './ComputerItem.css'
import Switch from "./Switch";
import axios from "axios";
import Loading from "./Loading";

interface ComputerItemProps {
    item: IComputer;
}

const ComputerItem: FC<ComputerItemProps> = (props) => {
    const[loading, setLoading] = useState<boolean>(false);

    async function activateDevice(computerId: number){
        try{
            const params = {
                id: computerId
            }
            await axios({
                method: 'post',
                url: 'http://10.8.0.6:8080/api/v1/activateDevice',
                params: params
              });
        }catch(e){
            alert(e);
        }
        setLoading(false);
    }
    
    return(
        <Card>
            <div className="bar">
                <div className="status">
                    <div className="status-title">
                        Connected
                    </div>
                    {loading ? <Loading width='20px' height='20px' /> : <Switch onChanged = {() => {setLoading(true); activateDevice(props.item.id!)}} checked={props.item.inProcess} />}
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