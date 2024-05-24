class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <ul>
                <li><a href="https://www.instagram.com/"><span id="ins-icon"></span></a></li>
                <li><a href="https://www.facebook.com/"><span id="fb-icon"></span></a></li>
                <li><a href="https://www.instagram.com/"><span id="yelp-icon"></span></a></li>
            </ul>
            <nav>
                <a href="../home/index.html">Home</a>
                <a href="../menu/menu.html">Menu</a>
                <a href="about.html">About</a>
                <img src="../../assets/penguin.webp" alt="Penguin Logo" height="64">
                <a href="../catering/catering.html">Catering</a>
                <a href="../merch/merch.html">Merch</a>
                <a href="../career/career.html">Career</a>
            </nav>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            * {
                margin: 0;
                padding: 0;
                font-family: 'MoonBold';
            }

            ul {
                display: flex;
                list-style-type: none;
                padding-left: 3vw;
            }
            
            li {
                padding-left: 1.6vw;
            }
            
            #ins-icon {
                background: url(../../assets/ins-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #fb-icon {
                background: url(../../assets/fb-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #yelp-icon {
                background: no-repeat url(../../assets/yelp-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            nav {
                display: flex;
                align-items: center;
            }
            
            nav a{
                margin-left: 1.4vw;
                margin-right: 1.4vw;
                text-decoration: none;
                color: #4F4B4C;
                font-family: 'Nunito';
            }
            
            nav a:first-of-type {
                padding-left: 30px;
            }
            
            img {
                margin-left: 1.4vw;
                margin-right: 1.4vw;
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

class FooterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <img src="../../assets/logo.png" alt="Boba Bar Logo" height="129"/>
            <div id="footer-content">
                <nav>
                    <a href="../home/index.html">Home</a>
                    <a href="../menu/menu.html">Menu</a>
                    <a href="../about/about.html">About</a>
                    <a href="../catering/catering.html">Catering</a>
                    <a href="../merch/merch.html">Merch</a>
                    <a href="../career/career.html">Career</a>
                </nav>
                <div id="address1">
                    <address>4619 Convoy St, San Diego, CA</address>
                    <p id="time1">Sun - Thu &nbsp&nbsp 11am - 10pm</p>
                    <p id="time2">Fri & Sat &nbsp&nbsp 11am - 10:30pm</p>
                    <p id="phone-num1">(858) 256-0506</p>
                </div>
                <div id="address2">
                    <address>1132 E Plaza Blvd, National City, CA</address>
                    <p id="time3">M - Sat &nbsp&nbsp 11am - 10pm</p>
                    <p id="time4">Sun &nbsp&nbsp 11am - 10:30pm</p>
                    <p id="phone-num2">(619) 717-9560</p>
                </div>
            </div>
            <ul>
                <li><a href="https://www.instagram.com/"><span id="ins-icon"></span></a></li>
                <li><a href="https://www.facebook.com/"><span id="fb-icon"></span></a></li>
                <li><a href="https://www.yelp.com/"><span id="yelp-icon"></span></a></li>
            </ul>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            * {
                margin: 0;
                padding: 0;
                font-family: 'MoonBold';
            }

            img {
                align-self: center;
                margin-left: 5vw;
                height: 129px;
            }
            
            #footer-content {
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: 33px auto;
                grid-template-areas:
                    "nav nav"
                    "address1 address2";
                row-gap: 20px;
                margin-top: 24px;
                padding-left: 30px;
            }
            
            nav {
                grid-area: nav;
                display: flex;
                align-items: center;
            }
            
            nav a{
                margin-left: 18px;
                margin-right: 18px;
                text-decoration: none;
                color: var(--primary-grey, #4F4B4C);
                font-family: 'Nunito';
                font-size: 24px;
            }
            
            p {
                font-family: 'Nunito';
                font-size: 18px;
            }
            
            #address1 {
                grid-area: address1;
            }
            
            #address1 address {
                font-style: normal;
                font-family: 'Nunito';
                font-size: 18px;
                margin-left: 18px;
                margin-bottom: 6px;
            }
            
            #address1 #time1 {
                margin-left: 33px;
            }
            
            #address1 #time2 {
                margin-left: 46px;
            }
            
            #address1 #phone-num1 {
                margin-left: 82px;
                margin-top: 6px;
                text-decoration: underline;
            }
            
            #address2 {
                grid-area: address2;
                text-align: right;
            }
            
            #address2 address {
                font-style: normal;
                font-family: 'Nunito';
                font-size: 18px;
                margin-right: 18px;
                margin-bottom: 6px;
            }
            
            #address2 #time3 {
                margin-right: 85px;
            }
            
            #address2 #time4 {
                margin-right: 59px;
            }
            
            #address2 #phone-num2 {
                margin-right: 101px;
                margin-top: 6px;
                text-decoration: underline;
            }
            
            ul {
                display: flex;
                list-style-type: none;
                margin-top: 24px;
                margin-right: 5vw;
            }
            
            li {
                padding-left: 1.6vw;
            }
            
            li:first-of-type {
                padding-left: 0vw;
            }
            
            #ins-icon {
                background: url(../../assets/ins-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #fb-icon {
                background: url(../../assets/fb-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #yelp-icon {
                background: no-repeat url(../../assets/yelp-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }

            @media screen and (max-width: 1024px) {
                img {
                    margin-left: 2.6vw;
                    height: 111px;
                }
            
                #footer-content {
                    grid-template-rows: 27px auto;
                    row-gap: 13px;
                    margin-top: 16px;
                    padding-left: 0;
                }
            
                nav a {
                    font-size: 20px;
                }
            
                 p {
                    font-size: 16px;
                }
            
                #address1 address {
                    font-size: 16px;
                    margin-bottom: 5px;
                }
            
                #address1 #phone-num1 {
                    margin-top: 5px;
                }
            
                #address2 address {
                    font-size: 16px;
                    margin-bottom: 5px;
                }
            
                #address2 #phone-num2 {
                    margin-top: 5px;
                }
            
                ul {
                    margin-top: 16px;
                    margin-right: 2.6vw;
                }
            
                li {
                    padding-left: 2.3vw;
                }
            }

            @media screen and (max-width: 820px) {
                img {
                    height: 90px;
                }

                nav a {
                    margin-left: 10px;
                    margin-right: 10px;
                }

                p {
                    font-size: 13px;
                }

                #address1 address {
                    font-size: 13px;
                    margin-left: 10px;
                }

                #address1 #time1 {
                    margin-left: 27px;
                }

                #address1 #time2 {
                    margin-left: 36px;
                }

                #address1 #phone-num1 {
                    margin-left: 62px;
                }

                #address2 address {
                    font-size: 13px;
                    margin-right: 10px;
                }

                #address2 #time3 {
                    margin-right: 74px;
                }

                #address2 #time4 {
                    margin-right: 54px;
                }

                #address2 #phone-num2 {
                    margin-right: 80px;
                }

                li {
                    padding-left: 1.5vw;
                }
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

class HamburgerComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <img src="../../assets/penguin.webp" alt="Penguin Logo" height="32"/>
            <nav id="hamburgerMenu">
                <input type="checkbox" aria-hidden="true"/>
                <span></span>
                <span></span>
                <span></span>
                <ul id="menu">
                    <a href="../home/index.html"><li>Home</li></a>
                    <a href="../menu/menu.html"><li>Menu</li></a>
                    <a href="../about/about.html"><li>About</li></a>
                    <a href="../catering/catering.html"><li>Catering</li></a>
                    <a href="../merch/merch.html"><li>Merch</li></a>
                    <a href="../career/career.html"><li>Career</li></a>
                </ul>
            </nav>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            * {
                margin: 0;
                padding: 0;
                font-family: 'MoonBold';
            }

            #hamburgerMenu {
                position: relative;
                z-index: 1;
                -webkit-user-select: none;
                user-select: none;
            }
        
            #hamburgerMenu a {
                text-decoration: none;
                color: var(--primary-grey, #4F4B4C);
                transition: color 0.3s ease;
            }
        
            #hamburgerMenu a:hover {
                color: var(--primary-purple, #938ACB);
            }
        
            #hamburgerMenu input {
                width: 33px;
                height: 22px;
                position: absolute;
                cursor: pointer;
                opacity: 0;
                z-index: 2;
            }
        
            #hamburgerMenu span {
                display: block;
                width: 33px;
                height: 4px;
                margin-bottom: 5px;
                position: relative;
                background: var(--primary-grey, #4F4B4C);
                border-radius: 3px;
                z-index: 1;
                transform-origin: 4px 0px;
                transition: transform 0.3s ease-in-out,
                            opacity 0.3s ease;
            }
        
            #hamburgerMenu span:first-child {
                transform-origin: 0% 0%;
            }
        
            #hamburgerMenu span:nth-last-child(2) {
                transform-origin: 0% 100%;
                margin-bottom: 0;
            }
        
            #hamburgerMenu input:checked ~ span {
                opacity: 1;
                transform: rotate(45deg) translate(-2px, -1px);
            }
        
            #hamburgerMenu input:checked ~ span:nth-last-child(3) {
                opacity: 0;
                transform: rotate(0deg) scale(0.2, 0.2);
            }
        
            #hamburgerMenu input:checked ~ span:nth-last-child(2) {
                transform: rotate(-45deg) translate(0, -1px);
            }
        
            #menu {
                position: absolute;
                width: 300px;
                padding-left: 30px;    
                background: #F3ECFF;
                list-style-type: none;
                transform: translate(-241px, 0);
                visibility: hidden;
                opacity: 0;
                transition: opacity 0.3s ease-in-out;
            }
        
            #menu li {
                padding-top: 10px;
                padding-bottom: 10px;
                font-size: 20px;
                font-family: 'Nunito';
            }
        
            #hamburgerMenu input:checked ~ ul {
                visibility: visible;
                opacity: 1;
            }

            @media screen and (max-width: 720px) {
                #menu {
                    width: 150px;
                    transform: translate(-123px, 0);
                }

                #menu li {
                    font-size: 16px;
                    padding-top: 0;
                    padding-bottom: 8px;
                }
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

class MobileFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });
        shadow.innerHTML = `
            <img src="../../assets/logo.png" alt="Boba Bar Logo"/>
            <nav>
                <a href="../home/index.html">Home</a>
                <a href="../menu/menu.html">Menu</a>
                <a href="../about/about.html">About</a>
                <a href="../catering/catering.html">Catering</a>
                <a href="../merch/merch.html">Merch</a>
                <a href="../career/career.html">Career</a>
            </nav>
            <ul>
                <li><a href="https://www.instagram.com/"><span id="ins-icon"></span></a></li>
                <li><a href="https://www.facebook.com/"><span id="fb-icon"></span></a></li>
                <li><a href="https://www.instagram.com/"><span id="yelp-icon"></span></a></li>
            </ul>
            <div id="address1">
                <address>4619 Convoy St, San Diego,<br/>CA 92111</address>
                <p id="phone-num1">(858) 256-0506</p>
                <p id="time1">Sun - Thu &nbsp&nbsp 11am - 10pm</p>
                <p id="time2">Fri & Sat &nbsp&nbsp 11am - 10:30pm</p>
            </div>
            <div id="address2">
                <address>1132 E Plaza Blvd, National City,<br/>CA 91950</address>
                <p id="phone-num2">(619) 717-9560</p>
                <p id="time3">M - Sat &nbsp&nbsp 11am - 10pm</p>
                <p id="time4">Sun &nbsp&nbsp 11am - 10:30pm</p>
            </div>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            * {
                margin: 0;
                padding: 0;
                font-family: 'MoonBold';
            }

            img {
                width: clamp(75px, 35px + 12.5vw, 125px);
            }
            
            nav {
                display: grid;
                grid-template-rows: auto auto;
                grid-template-columns: auto auto auto;
                row-gap: 8px;
                column-gap: clamp(20px, 4px + 5vw, 40px);
                margin-right: 8px;
            }
            
            nav a{
                text-decoration: none;
                color: var(--primary-grey, #4F4B4C);
                font-family: 'Nunito';
                font-size: clamp(18px, 16.4px + 0.5vw, 20px);
            }
            
            ul {
                display: flex;
                list-style-type: none;
            }
            
            li {
                padding-left: 32px;
            }
            
            li:first-of-type {
                padding-left: 0;
            }
            
            #ins-icon {
                background: url(../../assets/ins-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #fb-icon {
                background: url(../../assets/fb-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #yelp-icon {
                background: no-repeat url(../../assets/yelp-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            address {
                font-style: normal;
                font-family: 'Nunito';
                font-size: 16px;
                text-align: center;
            }
            
            p {
                font-family: 'Nunito';
                font-size: clamp(16px, 14.4px + 0.5vw, 18px);
                text-align: center;
            }
            
            address + p {
                margin-bottom: clamp(16px, 12.8px + 1vw, 20px);
                text-decoration: underline;
            }
            
            #address1 p:nth-child(3) {
                margin-right: clamp(16.5px, 14.9px + 0.5vw, 18.5px);
            }
            
            #address1 p:nth-child(4) {
                margin-left: clamp(16.5px, 14.9px + 0.5vw, 18.5px);
            }
            
            #address2 p:nth-child(3) {
                margin-right: clamp(24.5px, 22.1px + 0.75vw, 27.5px);
            }
            
            #address2 p:nth-child(4) {
                margin-left: clamp(24.5px, 22.1px + 0.75vw, 27.5px);
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

customElements.define('nav-component', NavComponent);
customElements.define('footer-component', FooterComponent);
customElements.define('hamburger-component', HamburgerComponent);
customElements.define('mobile-footer', MobileFooter);