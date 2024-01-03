import React,{useState} from 'react';
import ReactDOM from 'react-dom';


import Header from './Header.jsx';
import Activities from './components/Activities.jsx';

const App = () => {
  const  [doing, setdoing] = useState()
  return (
    <div className='container'>
      <Header/>
      <div className="container-view">Some activities should be here</div>
      <Activities/>
    </div>
  );
};



export default App;
