<template>
  <div id="contact-section">
    <div id="content">
      <div>
        <h1>Get in Touch With Us</h1>
      </div>
      <div class="columns">
        <div class="column" id="social">
          <h2>Social Networks</h2>
          <span class="icon is-large">
            <a href="https://www.facebook.com/HERCTOKEN/" target="_blank">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://twitter.com/HERC_Hercules" target="_blank">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.instagram.com/herctoken/" target="_blank">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.linkedin.com/company/herctoken/" target="_blank">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw" target="_blank">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
          </span>
          <span class="icon is-large">
            <a href="https://medium.com/@herc_token" target="_blank">
              <i class="fab fa-medium-m fa-2x"></i>
            </a>
          </span>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h2>Chat With Us</h2>
          <div>
            <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
              <i class="fab fa-telegram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection"
};
</script>

<style scoped lang="scss">
#contact-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#contact-section img {
  margin: auto;
  transition: transform 0.2s;
  display: inline-block;
  margin-left: 1%;
  margin-right: 1%;
}

#contact-section img:hover {
  transform: scale(1.2);
}

h1 {
  @include herc-gold-h1;
  margin-bottom: 2%;
  font-weight: bold;
}

h2 {
  font-size: 26px;
  text-transform: uppercase;
  color: $herc-blue;
  line-height: 1.7em;
}

i {
  color: $herc-gold;
  transition: transform 0.2s;
}

i:hover {
  color: $herc-blue;
  transform: scale(1.2);
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #contact-section {
    padding: 10px;
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
