import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext, info } from '../global.context';
import './Header.css'

const Header = () =>{

    let {datos, setDatos} = useContext(GlobalContext);
    let {texto, btn} = datos;


    return (
        <div className="Header">
            <div className="Header-wrapper">
                {
                    texto.map((img) =>
                        <div key={img.id} className={`Texto ${btn === img.id && 'active'}`} onClick={()=> setDatos( {...datos, btn : img.id} )} >
                            <span>{img.num}</span>
                            <span className='Texto-bold'>{img.name}</span>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Header;