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
                <a href="home.html">Home</a>
                <a href="menu.html">Menu</a>
                <a href="about.html">About</a>
                <img src="assets/penguin.webp" alt="Penguin Logo" height="64">
                <a href="catering.html">Catering</a>
                <a href="merch.html">Merch</a>
                <a href="career.html">Career</a>
            </nav>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            ul {
                display: flex;
                list-style-type: none;
                padding-left: 3vw;
            }
            
            li {
                padding-left: 1.6vw;
            }
            
            #ins-icon {
                background: url(assets/ins-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #fb-icon {
                background: url(assets/fb-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #yelp-icon {
                background: no-repeat url(assets/yelp-icon.svg);
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
            <img src="assets/logo.png" alt="Boba Bar Logo" height="129"/>
            <div id="footer-content">
                <nav>
                    <a href="home.html">Home</a>
                    <a href="menu.html">Menu</a>
                    <a href="about.html">About</a>
                    <a href="catering.html">Catering</a>
                    <a href="merch.html">Merch</a>
                    <a href="career.html">Career</a>
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
                <li><a href="https://www.instagram.com/"><span id="yelp-icon"></span></a></li>
            </ul>
        `;
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(`
            img {
                margin-top: 41.5px;
                margin-left: 5vw;
            }
            
            #footer-content {
                display: grid;
                grid-template-columns: 50% 50%;
                grid-template-rows: 33px auto;
                grid-template-areas:
                    "nav nav"
                    "address1 address2";
                row-gap: 19px;
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
                margin: 0;
            }
            
            #address1 {
                grid-area: address1;
            }
            
            #address1 address {
                font-style: normal;
                font-family: 'Nunito';
                font-size: 18px;
                margin-left: 6px;
                margin-bottom: 6px;
            }
            
            #address1 #time1 {
                margin-left: 21px;
            }
            
            #address1 #time2 {
                margin-left: 32px;
            }
            
            #address1 #phone-num1 {
                margin-left: 70px;
                margin-top: 6px;
                text-decoration: underline;
            }
            
            #address2 {
                grid-area: address2;
            }
            
            #address2 #time3 {
                margin-left: 58px;
            }
            
            #address2 #time4 {
                margin-left: 87px;
            }
            
            #address2 #phone-num2 {
                margin-left: 100px;
                margin-top: 6px;
                text-decoration: underline;
            }
            
            #address2 address {
                font-style: normal;
                font-family: 'Nunito';
                font-size: 18px;
                margin-left: 16px;
                margin-bottom: 6px;
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
                background: url(assets/ins-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #fb-icon {
                background: url(assets/fb-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
            
            #yelp-icon {
                background: no-repeat url(assets/yelp-icon.svg);
                height: 28px;
                width: 28px;
                display: flex;
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

customElements.define('nav-component', NavComponent);
customElements.define('footer-component', FooterComponent);