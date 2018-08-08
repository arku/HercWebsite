<template>
    <div id="navbar">
        <div id="content">
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a href="/" class="navbar-item">
                        <img src="../assets/herc-logo.png" alt="Herc: Decentralized supply chain management software">
                    </a>
                    <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
                </div>

                <div id="navbarExampleTransparentExample" class="navbar-menu">
                    <div class="navbar-start">
                        <a href="/" class="navbar-item">
                            Home
                        </a>
                        <a href="/#blurb-section" class="navbar-item">
                            GVC Overview
                        </a>
                        <a href="/#etymology-section" class="navbar-item">
                            Etymology
                        </a>
                        <a href="/#roadmap-section" class="navbar-item">
                            Roadmap
                        </a>
                        <a href="/#documents-section" class="navbar-item">
                            Documents
                        </a>
                        <a href="/#team-section" class="navbar-item">
                            Team
                        </a>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped">
                                <p class="control">
                                    <a class="button is-primary dugme-hover" href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                                    <span class="icon">
                                        <i class="fab fa-telegram"></i>
                                    </span>
                                    <span>
                                        Telegram
                                    </span>
                                    </a>
                                </p>
                                <p class="control">
                                    <a class="button is-primary dugme-hover" href="/whitepaper">
                                    <span class="icon">
                                        <i class="far fa-file-alt"></i>
                                    </span>
                                    <span>Whitepaper</span>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
nav {
  background-color: transparent;
}

#navbar {
  border-bottom: 1px solid #111;
}

.navbar {
  padding-left: 50px;
}

.navbar-item img {
  max-height: 2.6rem;
}

.navbar-burger {
  color: #f3c736;
}

a {
  color: #f3c736;
  text-transform: uppercase;
  font-size: 16px;
}

a:hover {
  color: white !important;
}

.dugme-hover:hover {
  color: #091141 !important;
  background-color: white !important;
  box-shadow: 0px 12px 18px -6px #000;
}

#navbarExampleTransparentExample {
  padding-left: 50px;
}

.button.is-primary {
  background-color: #f3c736;
  color: #091141;
  border-radius: 0px;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
    /* img{
        margin: auto;
    }

    .navbar{
        padding: 0;
        text-align: center;
    }

    .navbar-item{
        margin: auto;
        width: 100%;

    } */
}
</style>