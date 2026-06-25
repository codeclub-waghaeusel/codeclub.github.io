// ── NAVIGATION ──
class SiteNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class="nav-l">
            <a href="index.html">
                <img src="images/codewithus.webp" alt="Code Club Waghäusel Logo" class="nav-logo">
            </a>
            <span class="nav-title">Code <em>Club</em> Waghäusel</span>
            </div>
            <div class="nav-links">
            <a href="ueber.html">Über uns</a>
            <a href="eltern.html">Eltern</a>
            <a href="mentoren.html">Mentoren</a>
            <a href="medien/Code_Club_Termine.pdf">Termine</a>
            <a href="mailto:codewithus@codeclub-jph.rocks?subject=Ich%20m%C3%B6chte%20beim%20Code%20Club%20Wagh%C3%A4usel%20dabei%20sein">Mitmachen</a>
            </div>
        </nav>`;
        const links = this.querySelectorAll(".nav-links a");
        links.forEach((a) => {
            if (a.href === window.location.href) {
                a.style.color = "var(--yellow)";
            }
        });
    }
}

// ── PAGE TITLE ──
class PageTitle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="hero-small">
                <div class="floats" aria-hidden="true">
                    <span class="f">{}</span><span class="f">if()</span><span class="f">01</span
                    ><span class="f">&lt;/&gt;</span> <span class="f">λ</span><span class="f">=&gt;</span
                    ><span class="f">🤖</span><span class="f">⚡</span> <span class="f">🐍</span><span class="f">🎮</span
                    ><span class="f">def</span><span class="f">##</span>
                </div>
                <div class="hero-inner">
                    <img
                        src="images/Logo_196x196.webp"
                        alt="Code Club Waghäusel Logo"
                        class="hero-logo"
                        style="object-fit: contain"
                    />
                </div>
            </div>`;
    }
}

// ── CONTACT ──
class Contact extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <h2 class="stitle">Mitmachen!</h2>
                <p class="c-lead">
                    Neugierig geworden? Schreib uns einfach eine E-Mail! Vorkenntnisse brauchst du keine – Spaß
                    am Tüfteln reicht völlig aus.
                </p>
                <a class="email-btn" href="mailto:codewithus@codeclub-jph.rocks?subject=Ich%20m%C3%B6chte%20beim%20Code%20Club%20Wagh%C3%A4usel%20dabei%20sein">
                    <span>✉️</span><span>codewithus@codeclub-jph.rocks</span>
                </a>
                <div class="xlinks">
                    <a class="xl" href="https://codeclub.org" target="_blank">🌐 codeclub.org</a>
                    <a class="xl" href="https://www.raspberrypi.org" target="_blank">🍓 raspberrypi.org</a>
                    <a class="xl" href="https://scratch.mit.edu" target="_blank">🐱 scratch.mit.edu</a>
                </div>
            </div>`;
    }
}

// ── FOOTER ──
class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <footer>
        <p>© 2025 CodeClub Waghäusel &nbsp;·&nbsp;
           <a href="mailto:codewithus@codeclub-jph.rocks">
             codewithus@codeclub-jph.rocks
           </a> &nbsp;·&nbsp;
           Teil des weltweiten 
           <a href="https://codeclub.org" target="_blank">Code Club</a>-Netzwerks 
           der <a href="https://www.raspberrypi.org" target="_blank">
             Raspberry Pi Foundation
           </a>
        </p>
      </footer>`;
    }
}

// ── HAPPYTOHAVEYOU ──
class Happytohaveyou extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="c-visual">
                <img
                    src="images/logo_196x196.png"
                    alt="Code Club Waghäusel Logo"
                    class="c-logo"
                    style="object-fit: contain"
                />
                <p>Wir freuen uns auf dich! 🎉</p>
                <div class="cv-tags">
                    <span class="cv-tag yt">🐱 Scratch</span>
                    <span class="cv-tag yt">🐍 Python</span>
                    <span class="cv-tag yt">🤖 Robotik</span>
                    <span class="cv-tag yt">💡 Arduino</span>
                    <span class="cv-tag yt">🏗️ Fischertechnik</span>
                </div>
            </div>`;
    }
}

// ── Komponenten registrieren ──
customElements.define("site-nav", SiteNav);
customElements.define("page-title", PageTitle);
customElements.define("site-footer", SiteFooter);
customElements.define("happy-element", Happytohaveyou);
customElements.define("contact-element", Contact);
