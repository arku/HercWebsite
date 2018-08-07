<template>
    <div id="navbar">
        <div id="content">
            <nav class="navbar is-transparent">
                <div class="navbar-brand">
                    <a class="navbar-item" href="https://herc.one">
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
                        <a class="navbar-item" href="https://bulma.io/">
                            Home
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            GVC Overview
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Etymology
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Roadmap
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
                            Documents
                        </a>
                        <a class="navbar-item" href="https://bulma.io/">
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

#navbar{
border-bottom: 1px solid #111;
}

.navbar{
    padding-left: 50px;
}

.navbar-item img{
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

a:hover{
    color:white !important;
}

.dugme-hover:hover{
    color: #091141 !important;
    background-color: white !important;
}

#navbarExampleTransparentExample{
    padding-left: 50px;
}

.button.is-primary{
    background-color: #f3c736;
    color: #091141;
}
</style>
