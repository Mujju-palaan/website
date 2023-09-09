import React from 'react'; 
import styles from '../../styles/footer.module.css'
import { FaFacebookF, FaTwitter,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { MdLocationOn } from 'react-icons/md';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    const style = {
        fontFamily: 'ui-sans-serif'
      }; 
    return (
        <>

            <footer className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.top}>
                        <div className={styles['logo-details']}>
                            {/*<i className={styles.fab fa-slack]></i>*/}
                            <span className={styles.logo_name}>SEHAT</span>
                        </div>
                        <div className={styles[`media-icons`]}>
                            <Link href="https://www.facebook.com" target="_blank"><i > <FaFacebookF/> </i></Link>
                            <Link href="https://www.twitter.com" target="_blank"><i > <FaTwitter/> </i> </Link>
                            <Link href="https://www.instagram.com/sehat_nutrition_/" target="_blank"><i > <FaInstagram/>  </i></Link>
                            <Link href="https://www.linkedin.com" target="_blank"><i > <FaLinkedinIn /> </i></Link>
                            <Link href="https://www.youtube.com" target="_blank"><i > <FaYoutube />  </i></Link>
                        </div>
                    </div>
                    <div className={styles['link-boxes']}>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Company</li>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/contactus">Contact Us</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/faqs">Faq's</Link></li>
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Our Services</li>
                            <li><Link href="/WeightLossPrograms">Weight Loss</Link></li>
                            <li><Link href="/WeightGainPrograms">Weight Gain</Link></li>
                            <li><Link href="/KidsNutrition">Kid's Nutrition</Link></li>
                            <li><Link href="/FitnessPerformance">Fitness Performance</Link></li>
                            <li><Link href="/DiabetesDeitProgram">Diabetes Deit</Link></li>
                            <li><Link href="/MenopauseDeitProgram">Menopause Deit</Link></li>
                            <li><Link href="/PCOD">PCOD</Link></li>
                            <li><Link href="/WeddingDeitProgram">Wedding Deit</Link></li>
                        </ul>
                        
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Policy</li>
                            <li><Link href="/termscondition">Terms & Condition</Link></li>
                            <li><Link href="/cancellationRefund">Cancellation & Refund</Link></li>
                            <li><Link href="/privacypolicy">Privacy & Policy</Link></li>
                            {/* <li><a href="#">Photoshop</a></li> */}
                        </ul>
                        <ul className={styles.box}>
                            <li className={styles.link_name}>Contact Us</li>
                            <li> 
                                <MdLocationOn style={{color:'whitesmoke', marginRight:'1rem'}}/>
                                <a href="#">Address</a></li>                            
                            <li>
                                <AiFillPhone style={{color:'whitesmoke', marginRight:'1rem'}}/> 
                            <a href="#">+1 MObile No.</a></li>
                            <li>
                                <AiOutlineMail style={{color:'whitesmoke', marginRight:'1rem'}}/>
                                <a href="#">Support@sehatdiets.com</a></li>
                        </ul>
                        <ul className={`${styles.box} ${styles['input-box']}`}>
                            <li className={styles.link_name}>Subscribe</li>
                            <li><input type="text" placeholder="Enter your email" /></li>
                            <li><input type="button" value="Subscribe" /></li>
                        </ul>
                        
                    </div>
                </div>
                <div className={styles['bottom-details']}>
                    <div className={styles.bottom_text}>
                        <span className={styles.copyright_text}> Copyright © 2023
                            <Link href="/>"> 
                                SEHAT
                            </Link> All rights reserved </span>
                        {/* <span className={footerStyles.policy_terms}>
                          <Link href="/">Privacy policy</Link>
                          <Link href="/">Terms & condition</Link>
                        </span> */}
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;