import {React,useState} from 'react'
import { MenuItemsss } from './DesignandDevelopmentService';
import './Dropdown.css';
import { Link } from 'react-router-dom';

export default function Dropdown() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
  return (
    <>
  
    <div
      onClick={handleClick}
      className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
    >
      {MenuItemsss.map((item, index) => {
        return (
          <div key={index} className='container_nav_li'>
            <Link
              className={item.cName}
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </div>
        );
      })}
    </div>
  </>
  )
}
