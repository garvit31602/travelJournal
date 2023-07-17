import React from 'react';
import ReactDOM from 'react-dom/client';

import Navbar from './Navbar';
import Card from './Card';
import data from './data';

function App(){
  const cardElement=data.map(item=>
    {
      return <Card
          {...item}
          />
    })
  return(
    <div>
      <Navbar/>
      {cardElement}
    </div>
  )
}

export default App;

