import { useEffect, useState } from "react";
import ComputerItem from "./Components/ComputerItem";
import List from "./Components/List";
import { IComputer } from "./Types/Response";
import axios from "axios";

const App = () => {
    
    const [computer, setComputer] = useState<IComputer[]>([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetchComputers()
    }, []);

    async function fetchComputers(){
        try{
            const response = await axios({
                method: 'get',
                url: 'http://10.8.0.6:8080/api/v1/deviceList?offset=0',
                
              });
            setComputer(response.data['content']);
        }catch(e){
            alert(e);
        }
    }

    return(
        <List items={computer} renderItem={(computer: IComputer) => <ComputerItem key={computer.id} item={computer} />}/>
    );
}

export default App;