'use client';
import { PacmanLoader } from 'react-spinners';

type Props = {

};

const Loader = (props: Props) => {
  return (
    <div className='h-[70vh] flex flex-col justify-center items-center'>
        <PacmanLoader size={70} color='green'/>
    </div>
  )
}

export default Loader;