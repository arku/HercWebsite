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
                        <a href="/#horizontal-roadmap" class="navbar-item" id="desktop-roadmap">
                            Roadmap
                        </a>
                        <a href="/#roadmap-section" class="navbar-item" id="mobile-roadmap">
                            Roadmap
                        </a>
                        <a href="/#documents-section" class="navbar-item">
                            Documents
                        </a>
                        <!-- <a href="/news" class="navbar-item">
                            News
                        </a> -->
                        <router-link to="/news" class="navbar-item">
                          News
                        </router-link>
                        <b-dropdown hoverable id="droptro">
                          <a class="navbar-item" slot="trigger">
                            <i class="fas fa-angle-down ri"></i> Info
                          </a>
                          <b-dropdown-item>
                            <router-link to="/developer-resources" class="a-reversed">
                              Developer Resources
                            </router-link>
                          </b-dropdown-item>
                          <b-dropdown-item>
                            <router-link to="/tokeninfo" class="a-reversed">
                              Token Info
                            </router-link>
                          </b-dropdown-item>
                          <b-dropdown-item>
                            <router-link to="utilities" class="a-reversed">
                              Utilities
                            </router-link>
                          </b-dropdown-item>
                        </b-dropdown>
                        <a href="/#team-section" class="navbar-item">
                            Team
                        </a>
                        <a href="https://purchase.herc.one" class="navbar-item buy-herc">
                            Buy HERC
                        </a>
                    </div>
                    
                    <div id="social-top">
                      <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                        <i class="fab fa-telegram fa-2x"></i>
                      </a>
                      <a href="https://www.facebook.com/HERCTOKEN/" target="_blank">
                        <i class="fab fa-facebook fa-2x"></i>
                      </a>
                      <a href="https://twitter.com/HERC_Hercules" target="_blank">
                        <i class="fab fa-twitter fa-2x"></i>
                      </a>
                      <a href="https://www.instagram.com/herctoken/" target="_blank">
                        <i class="fab fa-instagram fa-2x"></i>
                      </a>
                      <a href="https://www.facebook.com/HERCTOKEN/" target="_blank">
                        <i class="fab fa-linkedin fa-2x"></i>
                      </a>
                      <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw" target="_blank">
                        <i class="fab fa-youtube fa-2x"></i>
                      </a>
                      <a href="https://medium.com/@herc_token" target="_blank">
                        <i class="fab fa-medium-m fa-2x"></i>
                      </a>
                        
                        
                    </div>

                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="field is-grouped" id="two-buttons">
                                <p class="control" @click="trackTelegram">
                                    <a class="button is-primary dugme-hover" href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                                    <span class="icon">
                                        <i class="fab fa-telegram"></i>
                                    </span>
                                    <span>
                                        Telegram
                                    </span>
                                    </a>
                                </p>
                                <p class="control" @click="trackWhitepaper">
                                    <router-link to="/whitepaper" class="button is-primary dugme-hover">
                                    <span class="icon">
                                        <i class="far fa-file-alt"></i>
                                    </span>
                                    <span>Whitepaper</span>
                                    </router-link>
                                </p>
                                <p class="control" id="util">
                                    <router-link to="/utilities" class="button is-primary dugme-hover">
                                    <span class="icon">
                                        <i class="fas fa-wrench"></i>
                                    </span>
                                    <span>Utilities</span>
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
//Import and declare jQuery for component scoped use

import JQuery from "jquery";
let $ = JQuery;

export default {
  name: "NavBar",
  methods: {
    trackTelegram() {
      this.$ga.event({
        eventCategory: "Navbar",
        eventAction: "Telegram button clicked",
        eventLabel: "NavTelegram"
      });
    },
    trackWhitepaper() {
      this.$ga.event({
        eventCategory: "Navbar",
        eventAction: "Whitepaper button clicked",
        eventLabel: "NavWhitepaper"
      });
    }
  }
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

<style scoped lang="scss">
nav {
  background-color: $herc-blue;
}

#navbar {
  border-bottom: 1px solid $herc-gold;
}

.navbar-item img {
  max-height: 2.6rem;
}

.navbar-burger {
  color: $herc-gold;
}

.navbar-start {
  margin: auto;
}

a {
  color: $herc-gold;
  text-transform: uppercase;
  font-size: 16px;
}

a:hover {
  color: white !important;
}

.a-reversed {
  color: white;
}

.dugme-hover:hover {
  color: $herc-blue !important;
  background-color: white !important;
}

.button.is-primary {
  background-color: $herc-gold;
  color: $herc-blue;
  border-radius: 5px;
}

#social-top {
  padding-top: 15px;
  color: $herc-gold;
}

#social-top i:hover {
  color: white;
}

#social-top i {
  padding-right: 10px;
}

#mobile-roadmap {
  display: none;
}

.buy-herc {
  font-weight: bold;
}

.ri {
  margin-right: 5%;
}

#util {
  display: none;
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
    background-color: $herc-blue;
    border-bottom: 1px solid $herc-gold;
    border-top: 1px solid $herc-gold;
  }

  .navbar-brand {
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

  #droptro {
    display: none;
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
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #two-buttons {
    text-align: center;
    display: inline;
    margin: auto;
  }

  .control {
    text-align: center;
    padding: 5px;
    margin-right: 0px !important;
  }

  #mobile-roadmap {
    display: inherit;
  }

  #desktop-roadmap {
    display: none;
  }

  #util {
    display: inherit;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>