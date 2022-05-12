import * as React from "react"
import * as footer from "./footer.module.scss"
import * as cls from "../pages/common.module.scss"

const Footer = () => (
  <footer className={footer.footer}>
    <div className={footer.footerInner}>
      <div className={footer.content}>
        <a href="" className={footer.footerLogo}>
          <p className={footer.footerLogo__name}>S.KAWAZOE's</p>
          <figure className={footer.footerLogo__char}>
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              x="0px" y="0px" viewBox="0 0 356.7 150.8"
            >
              <defs></defs>
              <desc>portfolio</desc>
              <path className={footer.st4} d="M34.3,54.9c0.8-2.5,7.1-11.4,13.6-13.7c22-7.7-28.8,112.8-45.5,103.6c-8-4.4,39.7-73.1,43.1-78
                c9.2-13.5,21.5-29,31.2-27.5c22.2,3.3-16.2,49.5-24.9,37.8c-8.1-10.9,57-40.7,66.1-23.6c3.6,6.7-1.5,24.3-19.2,29.2
                c-9.9,2.7-14.2-5.5-12.6-12.9c2.6-11.2,9.8-18.8,20.5-20.9c6.9-1.3,12.4,3.7,18.7,3.1c3.8-0.3,8.4-3.6,5.4-7.6
                c-4-5.3-9.8-0.6-9.3,2.9c0.9,5.9,12.7,8.2,23.8,0.6c13.1-9,12.8-1,5,3.7c-16.8,10-28.3,28.3-22,30.7c11.3,4.1,64.6-38.2,51.4-34.8
                c-4.5,1.1-36.7,31.4-17.1,34.2C206.2,88,283.3-8.1,251.6,2.3c-23.7,7.8-111.1,131.1-97.3,145.6c12.5,13.1,44.3-70.9,29.1-81.3
                c54.4,9.8,63.2-7.7,59.2-9.2c-2.7-1-11.9,3.8-17.6,11.9c-5.6,8.2-2.4,12.8,5,12.6c13.6-0.4,26.3-14.5,24-21.8
                c-3.1-10.2-19.5,8.1-5.5,8.7c19.4,0.8,50.3-37.4,45.5-41.4c-6.7-5.5-41,47.2-34.4,53.2c7.1,6.4,31.8-25.2,29.4-25.3
                c-2.7,0-11.9,16.5-5.3,23.8c7.5,8.3,58.1-13.6,44.9-21.6c-10-6-28.4,18.4-13.2,23.7c7.2,2.5,12.1-0.5,15.6-4.3
                c8-8.5,2.8-18.9-3.9-19.7c-7-0.9-9.3,2.4-11.1,5.6c-1.5,2.6-2.3,10.6,7.4,13.7c8,2.6,33.4-4.6,31.7-15.2c-2.7-17.2-35-18.8-44.5-18
                c-10.5,0.8-22.1,5.2-17.2,7.9c8.1,4.6,26.8-20.4,4.4-33.8c-17.1-10.3-76.7-14.5-130.5,7.1C111,47.1,161.7,66,189.2,51.6"/>
            </svg>
          </figure>
        </a>
      </div>
      {/*
      <ul className={footer.sns}>
        <li>
          <a href="https://twitter.com/">
            <i className={footer.fab,footer.faTwitter} />
            <span className={footer.srOnly}>Twitter</span>
          </a>
        </li>
        <li>
          <a href="https://facebook.com/">
            <i className={footer.fab,footer.faFacebookSquare} />
            <span className={footer.srOnly}>Facebook</span>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/">
            <i className={footer.fab,footer.faInstagram} />
            <span className={footer.srOnly}>Instagram</span>
          </a>
        </li>
      </ul>
      */}
    </div>
  </footer>
)

export default Footer 
