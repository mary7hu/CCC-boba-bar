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
                <img src="assets/penguin-logo.webp" alt="Penguin Logo" height="64">
                <a href="catering.html">Catering</a>
                <a href="Merch">Merch</a>
                <a href="Career">Career</a>
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
            
            img {
                margin-left: 1.4vw;
                margin-right: 1.4vw;
            }
        `)
        shadow.adoptedStyleSheets = [sheet];
    }
}

customElements.define('nav-component', NavComponent);