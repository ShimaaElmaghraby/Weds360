import style from './footer.module.css';
import styled from "styled-components";
function Footer() {

    const MainFooter = styled.div`
        background-color: black;
        border-top-left-radius: 45px;
        border-top-right-radius: 45px;
        text-align: center;
    `
    return (
        <MainFooter>
            <footer className={style.footer}>                
                <section className={style.textSection}>
                    <div>
                        <p>
                            Plan your wedding wherever and 
                            whenever you want on the Weds360 App
                        </p>
                    </div>
                    <ul style={{display: "flex",listStyle: "none"}}>
                        <li>
                            <a href="https://apps.apple.com/us/app/weds360/id1437100880" title="App Store">
                                <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge-1.png" alt="Apple Store" />
                            </a>
                        </li>

                        <li>
                            <a href="https://play.google.com/store/apps/details?id=com.plus360.weds360" title="Google Play" >
                                <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-g4036.png" alt="Google Play"/>
                            </a>
                        </li>

                        <li>
                            <a href="https://appgallery.huawei.com/app/C105048519" title="huawei">
                                <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Badge.png" alt="Huawei Store"/>
                            </a>
                        </li>
                    </ul>
                </section>

                <section className={style.supportSection}>
                    <p className={style.footerHeadSection}>
                        Support
                    </p>
                    <ul>
                        <li className={style.footerlink}>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li className={style.footerlink}>
                            <a href="/s">Terms and Conditions</a>
                        </li>
                    </ul>
                </section>

                <section className={style.contactSection} style={{display:"flex"}}>
                    <div>
                        <p className={style.footerHeadSection}>Contact Us</p>
                        <ul>
                            <li className={style.footerlink}>
                                <a href="/">
                                    <span className={style.contactInfo}>Email:  </span>
                                    <span className={style.contactInfoValue}> &nbsp;lovetohelp@weds360.com</span>
                                </a>
                            </li>
                            <li className={style.footerlink}>
                                <a href="/" target="">
                                    <span className={style.contactInfo}> Address:  </span>
                                    <span className={style.contactInfoValue}> &nbsp;6B, 12 Aswan Square, Al Agouzah, Giza Governorate 12651</span>
                                </a>
                            </li>
                            <li className={style.footerlink}>
                                <a href="/" >
                                    <span className={style.contactInfo}>Phone: </span>
                                    <span className={style.contactInfoValue}> &nbsp;+201066776677</span>
                                </a>
                            </li>
                        </ul>
                        <ul className={style.socialMedia}>
                            <li>
                                <a href="https://www.facebook.com/Weds360/" title="Facebook" target="">
                                    <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Facebook.png" alt="Facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/weds360/" title="Instagram" target="">
                                    <img src="https://weds360-production.s3.eu-west-1.amazonaws.com/new-weds360-preprod/PHOTOS/1644512613-Instagram%20%28filled%29.png" alt="Instagram" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </footer>
        </MainFooter>
    );
}

export default Footer;