import React from 'react';
import Logo from '../../assets/img/Logo(1).png';
import './Menu.css';
import Button from '../Button';
import {Link} from 'react-router-dom';
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return(
        <nav className = "Menu">
           <Link to="/">
            <img className= "Logo" src={Logo} alt="ZombieClips logo"/>
          </Link>

          <Button as={Link} className="ButtonLink" to="/cadastro/Video">
            Novo video 
          </Button>

        </nav>
    )
}
export default Menu;