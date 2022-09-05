import { useContext, useState } from 'react';
import { GlobalContext } from '../global.context';
import './Menu.css';

const Menu = () =>{
    
    let {datos, setDatos} = useContext(GlobalContext);
    let {menu_inf, menu_sup, menu_x} = datos;

    const [dato, setDato] = useState(-1);
    const [valImg, setValImg] = useState(-1);

    const setActiveSub =(value)=>{
        console.log('holi' + value);
        if(dato === value){
            setDato(-1);
        } else {
            setDato(value);
        }
    }

    const setActiveImg = (value) =>{
        setValImg(value);
    }
    
    return(

        <div className={`Menu ${ menu_x && 'Menu-active'}`}>
            <div className={`Menus-wrapper ${ menu_x && 'Menu-wrapper-active'}`}>
                <div className="Menu-sup-wrapper">
                    <div className="Menu-sup">
                        {
                            menu_sup.map((menu, i)=>
                                <ul className={`Menu-sup-ul `} key={menu.id} onClick={()=> setActiveSub(i)}>
                                    <li className={`Menu-sup-li `} >
                                        <button className={``}  onClick={()=> setActiveSub(i)}>{menu.name}</button>
                                    </li>
                                    <ul className={`Sub-menu ${dato === i && 'activeMenu'}`}>
                                        {
                                            menu.sub_menu.map((sub) =>
                                                <li key={sub.id} onClick={ ()=> setActiveImg(sub.id) } >{sub.name}</li>
                                            )
                                        }
                                    </ul>
                                </ul>
                            )
                        }
                    </div>
                    <div className="Menu-img">
                        {
                            menu_sup.map(menu =>
                                menu.sub_menu.map(sub =>
                                    <img key={sub.id} src={sub.img} alt={sub.alt} className={`Img ${valImg === sub.id && 'activeImg'}`}/>
                                )
                            )
                        }
                    </div>
                </div>

                <div className="Menu-inf">
                    {
                        menu_inf.map(menu=>
                            <ul className='Menu-inf-ul' key={menu.id}>
                                <li className='Menu-inf-li' ><a href={menu.href}>{menu.name}</a></li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </div>

    )
}

export default Menu;