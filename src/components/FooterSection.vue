<template>
    <div id="footer-section">
        <div id="content">
            <footer class="footer">
                <div class="columns">
                    <div class="column">
                        <a href="/">
                            <img src="../assets/herc-logo.png">
                        </a>
                        <div>
                            <a href="/policy">Privacy Policy</a>
                        </div>
                        <div>
                            <a href="/terms">Terms of Use</a>
                        </div>
                        <div>
                            <a href="/metamask">Metamask</a>
                        </div>
                        <div>
                            <a href="/faq">F.A.Q</a>
                        </div>
                    </div>
                    <div class="column">
                        <h3>Company</h3>
                        <div>
                            <a href="https://purchase.herc.one/">Buy HERC</a>
                        </div>
                        <div>
                            <a href="/#team-section">Team</a>
                        </div>
                        <div id="desktop">
                            <a href="/#horizontal-roadmap">Roadmap</a>
                        </div>
                        <div id="mobile">
                            <a href="/#roadmap-section">Roadmap</a>
                        </div>
                        <!-- <div>
                            <a href="">Careers</a>
                        </div> -->
                        <div>
                            <!-- <a href="/whitepaper">Whitepaper</a> -->
                            <router-link to="/whitepaper">
                            Whitepaper
                            </router-link>
                        </div>
                        <div>
                            <a href="https://github.com/hercone" target="_blank">GitHub</a>
                        </div>
                    </div>
                    <div class="column">
                        <h3>Connect</h3>
                        <div>
                            <a href="https://www.facebook.com/HERCTOKEN/" target="_blank">Facebook</a>
                        </div>
                        <div>
                            <a href="https://twitter.com/HERC_Hercules" target="_blank">Twitter</a>
                        </div>
                        <div>
                            <a href="https://www.instagram.com/herctoken/" target="_blank">Instagram</a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/company/herctoken/" target="_blank">LinkedIn</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw" target="_blank">YouTube</a>
                        </div>
                    </div>
                    <div class="column">
                        <form v-on:submit.prevent>
                            <h3>Subscribe</h3>
                            <p>Stay updated!</p>
                            <div>
                                <input v-validate="'required|email'" name="email" type="text" id="maintext" placeholder="Email">
                            </div>
                            <div>
                                <p id="thanks">{{message}}</p>
                                <button id="mainButton" @click="submitClick">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p>Copyright © 2018 Hercules SEZC - All Rights Reserved.</p>
            </footer>
        </div>
    </div>
</template>

<script>
var firebaseRef = firebase.database().ref();

export default {
  name: "FooterSection",
  data() {
    return {
      message: ""
    };
  },
  mounted() {
    var maintext = document.getElementById("maintext");
    var mainbtn = document.getElementById("mainButton");
  },
  methods: {
    submitClick() {
      this.$validator.validateAll().then(result => {
        if (result) {
          var email = maintext.value;
          firebaseRef.push().set(email);
          this.message = "Thank you for subscribing!";
          document.getElementById("maintext").style.cssText = "display:none;";
          document.getElementById("mainButton").style.cssText = "display:none;";
          document.getElementById("thanks").style.cssText = "color:green;";
        } else {
          this.message = "Please enter a proper email address";
          document.getElementById("thanks").style.cssText = "color:red;";
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
#footer-section {
  padding-left: 10px;
  padding-right: 10px;
  background-color: $herc-blue;
}

#content {
  max-width: 1080px;
  margin: auto;
}

#footer-section img {
  margin-bottom: 5%;
  width: 30%;
}

#footer-section a {
  color: white;
  font-size: 12px;
  font-weight: bold;
}

#footer-section a:hover {
  color: $herc-gold;
}

h3 {
  color: $herc-gold;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5%;
}

p {
  font-size: 14px;
  color: $herc-gold;
}

button {
  background-color: #f3c736;
  color: $herc-blue;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 5;
  position: relative;
  border-radius: 5px;
  border: 1px solid transparent;
  font-weight: bold;
}

button:hover {
  background-color: transparent;
  border: 1px solid $herc-gold;
  color: $herc-gold;
}

.footer {
  background-color: transparent;
  padding-bottom: 20px;
}

#maintext {
  margin-top: 5%;
  background-color: transparent;
  border: 1px solid $herc-gold;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 5%;
  color: white;
  padding-left: 6px;
}

#thanks {
  margin-bottom: 1%;
  font-size: 12px;
  margin-bottom: 5%;
}

#mobile {
  display: none;
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
  p {
    font-size: 10px;
  }

  #footer-section a {
    font-size: 18px;
    font-weight: normal;
  }

  #footer-section img {
    margin-bottom: 5%;
    width: 50%;
  }

  #mobile {
    display: inherit;
  }

  #desktop {
    display: none;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
