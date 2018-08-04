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
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                    <span class="icon is-large">
                        <i class="fab fa-twitter fa-2x"></i>
                    </span>
                    <span class="icon is-large">
                        <i class="fab fa-instagram fa-2x"></i>
                    </span>
                    <span class="icon is-large">
                        <i class="fab fa-youtube fa-2x"></i>
                    </span>
                </div>
            </div>
            <div class="columns">
                    <div class="column">
                        <h2>Chat With Us</h2>
                        <div>
                            <a href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw" target="_blank">
                                <img src="../assets/telegram.png" class="image is-64x64">
                            </a>
                            <a href="https://discordapp.com/invite/BDvg2xg" target="_blank">
                                <img src="../assets/discord.png" class="image is-64x64">
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

<style scoped>
#contact-section {
  padding: 50px;
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

#social {
  margin-bottom: 5%;
}

h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 5%;
}

h2 {
  font-size: 26px;
  text-transform: uppercase;
  color: #f3c736;
  margin-bottom: 2%;
}

i {
  color: #f3c736;
  margin-bottom: 5%;
  transition: transform 0.2s;
}

i:hover {
  color: white;
  box-shadow: 0px 12px 18px -6px #000;
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
  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 20px;
  }
}
</style>
