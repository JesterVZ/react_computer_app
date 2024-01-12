import { FC } from 'react';
import loading from '../Img/loading.gif';

interface LoadingProps{
    width: string,
    height: string
}

const Loading:FC<LoadingProps> = ({width, height}) => {
    return(
        <div style={{width, height}}>
            <img width={width} height={height} src={loading} alt="загрузка" />
        </div>
    );
}

export default Loading;