import React from 'react'
import Dropdown from './Dropdown';
import PPCDropdown from './PPCDropdown'
import DesignandDevelopmentDropdown from './DesignandDevelopmentDropdown'
import ContentMarketingDropdown from './ContentMarketingDropdown';

export default function ServicesDropdown() {
    return (
        <><div style={{display:'flex',flexDirection:'column',top:'400px',position:'relative',zIndex:'3',width:'1000px'}}> 
            <div>ServicesDropdown</div>
            <h2>SEO Services</h2>
            {<Dropdown />}
            <h2>PPC Services</h2>
            {<PPCDropdown/>}
            <h2>Design & Development</h2>
            {<DesignandDevelopmentDropdown/>}
            <h2>Content Marketing</h2>
            {<ContentMarketingDropdown/>}
            </div>
        </>
    )
}
