import './App.css'
import  Header  from './Header/Header'
import  Page  from './Page/Page'
import {info, GlobalContext} from './global.context'
import { useState } from 'react'
import Menu from './Menu/Menu'

const App =()=> {

  const [datos, setDatos] = useState(info);

  return (
    <GlobalContext.Provider value= {{
      datos,
      setDatos
    }}>
      <div className="App">

        <Menu/>
        <Page   /> 
        <Header />
        
      </div>

    </GlobalContext.Provider>
  )
}

export default App;

