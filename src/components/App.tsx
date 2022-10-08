import { CardsList } from './CardContainer';
import { RegForm } from './RegForm/RegForm'
import { useState} from 'react'

function App() {
  const [isLinkTo, setLinkTo] = useState(0)
  return (
    <div className="bg-gray-100 h-screen">

      {isLinkTo === 1 ?

        <RegForm />
        : isLinkTo === 2 ?
          <CardsList />
          :
          <div className='h-screen grid'>
            <div className='place-self-center flex gap-x-5'>
            <button className='underline text-secondary hover:text-primary' onClick={() => setLinkTo(1)}> Register</button>
            <button className='underline text-secondary hover:text-primary' onClick={() => setLinkTo(2)}>Pagination</button>
            </div>
            </div>}
            {isLinkTo !==0 ?
          <div className='mt-20 flex justify-center'>
            <button className='px-5 text-primary hover:text-secondary rounded-md mt-5 underline ' onClick={() => setLinkTo(0)}> Go Back</button>
            </div>
            :null}
    </div>
  );
}

export default App;
