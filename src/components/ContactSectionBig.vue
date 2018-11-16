<template>
    <div id="contact-section-big">
        <div id="content">
            <div>
                <h1>Get in Touch With Us</h1>
            </div>
            <div class="columns">
                <div class="column" id="social">
                    <h2>Social Networks</h2>
                    <span class="icon is-large">
                      <a href="https://www.facebook.com/HERCTOKEN/" target="_blank">
                        <i class="fab fa-facebook fa-5x"></i>
                      </a>
                    </span>
                    <span class="icon is-large">
                      <a href="https://twitter.com/HERC_Hercules" target="_blank">
                        <i class="fab fa-twitter fa-5x"></i>
                      </a>
                    </span>
                    <span class="icon is-large">
                      <a href="https://www.instagram.com/herctoken/" target="_blank">
                        <i class="fab fa-instagram fa-5x"></i>
                      </a>
                    </span>
                    <span class="icon is-large">
                      <a href="https://www.linkedin.com/company/herctoken/" target="_blank">
                        <i class="fab fa-linkedin fa-5x"></i>
                      </a>
                    </span>
                    <span class="icon is-large">
                      <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw" target="_blank">
                        <i class="fab fa-youtube fa-5x"></i>
                      </a>
                    </span>
                    <span class="icon is-large">
                      <a href="https://medium.com/@herc_token" target="_blank">
                        <i class="fab fa-medium-m fa-5x"></i>
                      </a>
                    </span>
                </div>
            </div>
            <div class="columns">
                <div class="column spacer">
                    <h2>Chat With Us</h2>
                    <div>
                        <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                            <i class="fab fa-telegram fa-5x"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Email Us</h2>
                    <div>
                        <a href="mailto:social@herc.one" target="_blank">
                            <i class="fas fa-at fa-5x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ContactSectionBig"
};
</script>

<style scoped lang="scss">
#contact-section-big {
  padding: 50px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

img {
  margin: auto;
  transition: transform 0.2s;
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}

img:hover {
  transform: scale(1.2);
}

h1 {
  font-size: 35px;
  color: $herc-gold;
  text-transform: uppercase;
  margin-bottom: 5%;
  font-weight: bold;
  line-height: 1.2em;
}

h2 {
  font-size: 26px;
  text-transform: uppercase;
  color: white;
  line-height: 1.2em;
  margin-bottom: 2%;
}

i {
  color: $herc-gold;
  transition: transform 0.2s;
}

i:hover {
  color: white;
  transform: scale(1.2);
}

.icon {
  margin: 2%;
  margin-bottom: 5%;
}

.spacer {
  margin-bottom: 5%;
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
  h2 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h2 {
    font-size: 20px;
  }

  .icon {
    margin: 10%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #contact-section-big {
    padding: 50px;
  }

  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 20px;
    margin-bottom: 2%;
  }
}
</style>
