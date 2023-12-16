import { React,useState} from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import PPCDropdown from './PPCDropdown'
import {MdKeyboardArrowDown} from 'react-icons/md'
import DesignandDevelopmentDropdown from './DesignandDevelopmentDropdown'
import IndustryDropdown from './IndustryDropdown'
import ContentMarketingServices from '../Servicepages/ContentMarketingServices';
import ContentMarketingDropdown from './ContentMarketingDropdown';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [ppcservice, setPpcservice] = useState(false);
  const [design, setDesign] = useState(false);
  const [industry, setIndustry] = useState(false);
  const [content, setContent] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setPpcservice(false);
    } else {
      setPpcservice(true);
    }
  };
  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDesign(false);
    } else {
      setDesign(true);
    }
  };
  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setIndustry(false);
    } else {
      setIndustry(true);
    }
  };
  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setContent(false);
    } else {
      setContent(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setPpcservice(false);
    } else {
      setPpcservice(false);
    }
  };
  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDesign(false);
    } else {
      setDesign(false);
    }
  };
  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setIndustry(false);
    } else {
      setIndustry(false);
    }
  };
  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setContent(false);
    } else {
      setContent(false);
    }
  };
  return (
    <>
  <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             About
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/seoservice'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            <div className='dropdown'> SEO Services <MdKeyboardArrowDown className='dropdownicon' size={25} style={{top:'7px',position:'relative'}} /></div>
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/ppcservice'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             PPC Services <MdKeyboardArrowDown className='dropdownicon' size={25} style={{top:'7px',position:'relative'}} />
            </Link>
            {ppcservice && <PPCDropdown /> }
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/service'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Design & Development <MdKeyboardArrowDown className='dropdownicon' size={25} style={{top:'7px',position:'relative'}} />
            </Link>
            {design && <DesignandDevelopmentDropdown/> }
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link
              to='/contentmarketingservices'
              className='nav-links'
              onClick={closeMobileMenu}
            >
           Content Marketing <MdKeyboardArrowDown className='dropdownicon' size={25} style={{top:'7px',position:'relative'}} />
            </Link>
            {content && <ContentMarketingDropdown/> }
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/industry'
              className='nav-links'
              onClick={closeMobileMenu}
            >
           Industry <MdKeyboardArrowDown className='dropdownicon' size={25} style={{top:'7px',position:'relative'}} />
            </Link>
            {industry && <IndustryDropdown/> }
          </li>
        </ul>
      </nav>
    </>
  )
}
