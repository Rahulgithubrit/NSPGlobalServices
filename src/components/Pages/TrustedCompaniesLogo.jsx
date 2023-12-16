import React, { useEffect, useState } from 'react'
import styles from './TrustedCompaniesLogo.module.css'
import Logo1 from '../assets/TrustedCompaniesLogo/1_20231013_223044_0000.png'
import Logo2 from '../assets/TrustedCompaniesLogo/2_20231013_223044_0001.png'
import Logo3 from '../assets/TrustedCompaniesLogo/12_20231017_185043_0002.png'
import Logo4 from '../assets/TrustedCompaniesLogo/13_20231017_185043_0003.png'
import Logo5 from '../assets/TrustedCompaniesLogo/14_20231017_185043_0004.png'
import Logo6 from '../assets/TrustedCompaniesLogo/15_20231017_185043_0005.png'
import Logo7 from '../assets/TrustedCompaniesLogo/16_20231017_185043_0006.png'
import Logo8 from '../assets/TrustedCompaniesLogo/17_20231017_185043_0007.png'
import Logo9 from '../assets/TrustedCompaniesLogo/18_20231017_185043_0008.png'
import Logo10 from '../assets/TrustedCompaniesLogo/19_20231017_185043_0009.png'
import Logo11 from '../assets/TrustedCompaniesLogo/1_20231013_223044_0000.png'
import Logo12 from '../assets/TrustedCompaniesLogo/1_20231016_170215_0000.png'
import Logo13 from '../assets/TrustedCompaniesLogo/21_20231017_185043_0011.png'
import Logo14 from '../assets/TrustedCompaniesLogo/22_20231018_185354_0000.png'
import Logo15 from '../assets/TrustedCompaniesLogo/23_20231018_185354_0001.png'
import Logo16 from '../assets/TrustedCompaniesLogo/24_20231018_185355_0002.png'
import Logo17 from '../assets/TrustedCompaniesLogo/25_20231018_185355_0003.png'
import Logo18 from '../assets/TrustedCompaniesLogo/26_20231018_185355_0004.png'
import Logo19 from '../assets/TrustedCompaniesLogo/27_20231018_185355_0005.png'
import Logo20 from '../assets/TrustedCompaniesLogo/28_20231018_185355_0006.png'
import Logo21 from '../assets/TrustedCompaniesLogo/29_20231018_185355_0007.png'
import Logo22 from '../assets/TrustedCompaniesLogo/2_20231013_223044_0001.png'
import Logo23 from '../assets/TrustedCompaniesLogo/2_20231016_170215_0001.png'
import Logo24 from '../assets/TrustedCompaniesLogo/30_20231018_185355_0008.png'
import Logo25 from '../assets/TrustedCompaniesLogo/31_20231018_185355_0009.png'
import Logo26 from '../assets/TrustedCompaniesLogo/32_20231018_185355_0010.png'
import Logo27 from '../assets/TrustedCompaniesLogo/33_20231018_185355_0011.png'
import Logo28 from '../assets/TrustedCompaniesLogo/34_20231018_185355_0012.png'
import Logo29 from '../assets/TrustedCompaniesLogo/35_20231018_185355_0013.png'
import Logo30 from '../assets/TrustedCompaniesLogo/36_20231018_185355_0014.png'
import Logo31 from '../assets/TrustedCompaniesLogo/37_20231018_185355_0015.png'
import Logo32 from '../assets/TrustedCompaniesLogo/38_20231018_185355_0016.png'
import Logo33 from '../assets/TrustedCompaniesLogo/39_20231018_185355_0017.png'
import Logo34 from '../assets/TrustedCompaniesLogo/3_20231016_170215_0002.png'
import Logo35 from '../assets/TrustedCompaniesLogo/40_20231018_185355_0018.png'
import Logo36 from '../assets/TrustedCompaniesLogo/41_20231018_185355_0019.png'
import Logo37 from '../assets/TrustedCompaniesLogo/4_20231016_170215_0003.png'
import Logo38 from '../assets/TrustedCompaniesLogo/5_20231016_170215_0004.png'
import Logo39 from '../assets/TrustedCompaniesLogo/6_20231016_170215_0005.png'
import Logo40 from '../assets/TrustedCompaniesLogo/7_20231016_170215_0006.png'
import Logo41 from '../assets/TrustedCompaniesLogo/8_20231016_170215_0007.png'
import Logo42 from '../assets/TrustedCompaniesLogo/9_20231016_170215_0008.png'

function TrustedCompaniesLogo() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 8340 && window.scrollY < 8828) {
                setScroll((window.scrollY - 8340) * 4);
            }
        })
    })


    return (
        <>
            <div className={styles.container} style={{ transform: `translateX(${scroll}px)` }}  >
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <img src={Logo1} className={styles.logo} alt="logo1" />
                    <img src={Logo2} className={styles.logo} alt="logo2" />
                    <img src={Logo3} className={styles.logo} alt="logo1" />
                    <img src={Logo4} className={styles.logo} alt="logo2" />
                    <img src={Logo5} className={styles.logo} alt="logo1" />
                    <img src={Logo6} className={styles.logo} alt="logo2" />
                    <img src={Logo7} className={styles.logo} alt="logo1" />
                    <img src={Logo8} className={styles.logo} alt="logo2" />
                    <img src={Logo9} className={styles.logo} alt="logo2" />
                    <img src={Logo10} className={styles.logo} alt="logo1" />
                    <img src={Logo11} className={styles.logo} alt="logo2" />
                    <img src={Logo12} className={styles.logo} alt="logo1" />
                    <img src={Logo13} className={styles.logo} alt="logo2" />
                    <img src={Logo14} className={styles.logo} alt="logo1" />
                    <img src={Logo15} className={styles.logo} alt="logo2" />
                    <img src={Logo16} className={styles.logo} alt="logo1" />
                    <img src={Logo17} className={styles.logo} alt="logo2" />
                    <img src={Logo18} className={styles.logo} alt="logo1" />
                    <img src={Logo19} className={styles.logo} alt="logo2" />
                    <img src={Logo20} className={styles.logo} alt="logo1" />
                    <img src={Logo21} className={styles.logo} alt="logo2" />
                </div>
            </div>
            <div className={styles.container1} style={{ transform: `translateX(-${scroll}px)` }}>
                <div style={{ display: 'flex', flexDirection: 'row' }} >
                    <img src={Logo22} className={styles.logo} alt="logo1" />
                    <img src={Logo23} className={styles.logo} alt="logo2" />
                    <img src={Logo24} className={styles.logo} alt="logo1" />
                    <img src={Logo25} className={styles.logo} alt="logo2" />
                    <img src={Logo26} className={styles.logo} alt="logo1" />
                    <img src={Logo27} className={styles.logo} alt="logo2" />
                    <img src={Logo28} className={styles.logo} alt="logo1" />
                    <img src={Logo29} className={styles.logo} alt="logo2" />
                    <img src={Logo30} className={styles.logo} alt="logo1" />
                    <img src={Logo31} className={styles.logo} alt="logo2" />
                    <img src={Logo32} className={styles.logo} alt="logo2" />
                    <img src={Logo33} className={styles.logo} alt="logo1" />
                    <img src={Logo34} className={styles.logo} alt="logo2" />
                    <img src={Logo35} className={styles.logo} alt="logo1" />
                    <img src={Logo36} className={styles.logo} alt="logo2" />
                    <img src={Logo37} className={styles.logo} alt="logo1" />
                    <img src={Logo38} className={styles.logo} alt="logo2" />
                    <img src={Logo39} className={styles.logo} alt="logo1" />
                    <img src={Logo40} className={styles.logo} alt="logo2" />
                    <img src={Logo41} className={styles.logo} alt="logo1" />
                    <img src={Logo42} className={styles.logo} alt="logo2" />
                </div>
            </div>
        </>
    )
}

export default TrustedCompaniesLogo;
