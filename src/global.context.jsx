import { createContext } from "react";

export const info = {
    texto: [
        {id: 0, num: '01', name: 'Shell Dinning Chair',     creator: 'Michael W.Dreeben', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consequuntur fugit laborum quas adipisci illo incidunt libero dolores officia est cupiditate numquam pariatur, possimus, dolore repellat accusantium assumenda repudiandae autem.', src: '/assets/silla_negra.png',  alt: 'silla_negra'},
        {id: 1, num: '02', name: 'Dunes Anthrazite Black',  creator: 'Jeaper K.Thomas',   description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab consequuntur fugit laborum quas adipisci illo incidunt libero dolores officia est cupiditate numquam pariatur, possimus, dolore repellat accusantium assumenda repudiandae autem.', src: '/assets/mesa_negra.png',   alt: 'mesa_negra'}
    ],
    btn: 0,
    menu_sup: [
        {id: 0, name: 'Collection',     href: '#', sub_menu: [
            {id: 0, name: 'Furniture',      img: '/assets/sofa_blanco.png', alt: 'sofa_blanco'},
            {id: 1, name: 'Lightning',      img: '/assets/mesa_negra.png', alt: 'sofa_blanco'},
            {id: 2, name: 'Accessories',    img: '/assets/silla_negra.png', alt: 'sofa_blanco'}
        ] },
        {id: 1, name: 'Design',         href: '#', sub_menu: [
            {id: 3, name: 'Furniture',      img: '/assets/sofa_azul.png', alt: 'sofa_blanco'},
            {id: 4, name: 'Lightning',      img: '/assets/mesa_despacho.png', alt: 'sofa_blanco'},
            {id: 5, name: 'Accessories',    img: '/assets/silla_tela.png', alt: 'sofa_blanco'}
        ] },
        {id: 2, name: 'Craftmanship',   href: '#', sub_menu: [
            {id: 6, name: 'One',      img: '/assets/sofa_beige.png', alt: 'sofa_blanco'},
            {id: 7, name: 'Two',      img: '/assets/mesa_transparente.png', alt: 'sofa_blanco'},
            {id: 8, name: 'Three',    img: '/assets/silla_combo.png', alt: 'sofa_blanco'}
        ] },
        {id: 3, name: 'Ethics',         href: '#', sub_menu: [
            {id: 9, name: 'Blah',       img: '/assets/sofa_blanco.png', alt: 'sofa_blanco'},
            {id: 10, name: 'Bleh',       img: '/assets/mesa_negra.png', alt: 'sofa_blanco'},
            {id: 11, name: 'Bloh',       img: '/assets/silla_negra.png', alt: 'sofa_blanco'}
        ] }
    ],
    menu_inf: [
        {id: 0, name: 'About',      href: '#'}, 
        {id: 1, name: 'Contact',    href: '#'},
        {id: 2, name: 'Dealers',    href: '#'},
        {id: 3, name: 'News',       href: '#'},
        {id: 4, name: 'Care',       href: '#'},
        {id: 5, name: 'Press',      href: '#'}
    ],
    menu_x : false
}

export const GlobalContext = createContext(info)