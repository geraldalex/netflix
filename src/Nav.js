import React, {useEffect, useState} from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false)

    useEffect(() => {
       window.addEventListener('scroll', () => {
           if(window.scrollY > 100){
               handleShow(true)
           }else handleShow(false)
       })
       return ()=>{
           window.removeEventListener('scroll')
       }
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png'
                alt='Menflix logo'
            />
            <img
                className='nav_avatar'
                src='https://img.favpng.com/23/20/21/computer-icons-icon-design-person-download-png-favpng-NfUiqmSd4C12cJv3avzSf3enN.jpg'
                alt='avatar'
            />
        </div>
    )
}

export default Nav
