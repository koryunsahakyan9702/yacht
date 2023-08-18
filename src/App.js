import './App.scss';
import Header from './Components/Header';
import { Route,Routes } from 'react-router-dom';
import Homepage from './Components/Homepage';
import About from './Components/About';
import { useEffect, useRef,useState } from 'react';

function App() {
  const Contref=useRef()
  const Trainref=useRef()
  const regRef=useRef()
  const [auth,setAuth]=useState(false)
  const logRef=useRef()

  function scrollDown(elref){
    elref.current?.scrollIntoView({behaivor:"smooth"})

  }
  
  
  
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={<Header 
          scrollDown={scrollDown} 
          Contref={Contref} 
          regRef={regRef}
          auth={auth}
          logRef={logRef}
          Trainref={Trainref}

          />}>
            <Route index element={<Homepage 
            Contref={Contref} 
            regRef={regRef} 
            auth={auth}
            setAuth={setAuth}
            logRef={logRef}
            />}/>
            <Route path='about' element={<About Trainref={Trainref}/>}/>
            <Route/>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
