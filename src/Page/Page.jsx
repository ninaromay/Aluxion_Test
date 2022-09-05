import { useContext } from 'react';
import { useState } from 'react';
import { GlobalContext, info } from '../global.context';
import './Page.css'

const Page = ()=>{

    let {datos, setDatos} = useContext(GlobalContext);
    let {texto, btn, menu_x} = datos

    let lim = 2;

    function setPosition(){
        return `translateY(-${(100/lim)*btn}%)`;
    }

    function setBtnEvent(e){
        console.log(e);
        if(e.deltaY > 0){
            if(btn > 0){
                setDatos({...datos, btn : btn -1});
            } else {
                setDatos({...datos, btn : 0});
            }
        } else if (e.deltaY < 0){
            if(btn < texto.length - 1){
                setDatos({...datos, btn : btn + 1});
            } else {
                setDatos({...datos, btn : texto.length - 1});
            }
        }
    }

    const setX = ()=>{
        console.log(menu_x);
        setDatos({...datos, menu_x : !menu_x});
    }

    return (
        <div className="Page" onWheel={(e)=> setBtnEvent(e)}>
                <div className="Page-mater-wrapper">
                    <h2 className={`Page-mater ${menu_x && 'X-active'}`}>mater</h2>
                    <button className="Page-square" onClick={()=> setX()}>
                        <div className={`${!menu_x && 'Square-line top'}  ${menu_x && 'X-xactive x-top'}`}></div>
                        <div className={`${!menu_x && 'Square-line middle'}  ${menu_x && 'X-xactive x-middle'}`}></div>
                        <div className={`${!menu_x && 'Square-line bottom'}  ${menu_x && 'X-xactive x-bottom'}`}></div>
                    </button>

                </div>
            <div className="Page-test">
                <div className="Page-wrapper">
                    <div className="Page-texto-wrapper" style={{transform: setPosition()}}>
                        { 
                            texto.map((info)=>
                                <div key={info.id} className={`Page-texto Page-move ${btn === info.id && 'isActive'}`} >
                                    <h3>{info.creator}</h3>
                                    <h2 className='Page-title'>{info.name}</h2>
                                    <p> {info.description} </p>
                                </div>

                            )
                        }
                    </div>
                    <div className="Page-img-wrapper" style={{transform: setPosition()}}>
                    {
                        texto.map((info)=>
                        <div key={info.id} className={`Page-img Page-move ${btn === info.id && 'isActive'}`} >
                            <img src={info.src} alt={info.alt} />
                        </div>

                        )
                    }
                    </div>
                </div>
                <button className='Page-btn'>Product Details</button>
            </div>
        </div>
    )
}

export default Page;