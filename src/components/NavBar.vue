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
                            About
                        </a>
                        <a href="/#horizontal-roadmap" class="navbar-item">
                            Roadmap
                        </a>
                        <a href="/#documents-section" class="navbar-item">
                            Documents
                        </a>
                        <a href="/#team-section" class="navbar-item">
                            Team
                        </a>
                    </div>
                    
                    <div id="social-top">
                        <i class="fab fa-telegram fa-2x"></i>
                        <i class="fab fa-facebook fa-2x"></i>
                        <i class="fab fa-twitter fa-2x"></i>
                        <i class="fab fa-instagram fa-2x"></i>
                        <i class="fab fa-linkedin fa-2x"></i>
                        <i class="fab fa-youtube fa-2x"></i>
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped" id="two-buttons">
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
                                    <!-- <a class="button is-primary dugme-hover" href="https://demo.herc.one/">
                                    <span class="icon">
                                        <i class="far fa-file-alt"></i>
                                    </span>
                                    <span>Whitepaper</span>
                                    </a> -->
                                    <router-link to="/whitepaper/" class="button is-primary dugme-hover">
                                    <span class="icon">
                                        <i class="far fa-file-alt"></i>
                                    </span>
                                    <span>Whitepaper</span>
                                    </router-link>
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
import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "NavBar"
};

$(document).ready(function() {
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
});
</script>

<style scoped>
nav {
  background-color: #091141;
}

#navbar {
  border-bottom: 1px solid #111;
  /* position: fixed;
  width: 100%;
  z-index: 999; */
}

.navbar-item img {
  max-height: 2.6rem;
}

.navbar-burger {
  color: #f3c736;
}

.navbar-start {
  margin: auto;
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
}

.button.is-primary {
  background-color: #f3c736;
  color: #091141;
  border-radius: 0px;
}

#social-top {
  padding-top: 15px;
  color: #f3c736;
}

#social-top i:hover {
  color: white;
}

#social-top i {
  padding-right: 10px;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  #social-top {
    display: none;
  }
}

@media all and (max-width: 1099px) {
  #navbarExampleTransparentExample {
    background-color: #091141;
    border-bottom: 1px solid #f3c736;
    border-top: 1px solid #f3c736;
  }

  .navbar-brand {
    /* margin: auto; */
    float: none;
    text-align: center;
    margin-left: 0;
  }

  .navbar-item {
    margin: auto;
  }

  .navbar-burger {
    margin-left: -3.25rem;
  }

  #two-buttons {
    margin: auto;
    width: 30%;
  }
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  .field .is-grouped {
    width: 30%;
    margin: auto;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  #two-buttons {
    margin: auto;
    width: 40%;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #two-buttons {
    margin: auto;
    width: 43%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #two-buttons {
    margin: auto;
    width: 77%;
  }
}
</style>