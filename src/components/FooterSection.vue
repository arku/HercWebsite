<template>
    <div id="footer-section">
        <div id="content">
            <footer class="footer">
                <div class="columns">
                    <div class="column">
                        <img src="../assets/herc-logo.png">
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
                            <a href="/#team-section">Team</a>
                        </div>
                        <div>
                            <a href="/#contact-section">Contact</a>
                        </div>
                        <!-- <div>
                            <a href="">Careers</a>
                        </div> -->
                        <div>
                            <a href="/whitepaper">Whitepaper</a>
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
                            <a href="" target="_blank">Instagram</a>
                        </div>
                        <div>
                            <a href="" target="_blank">LinkedIn</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw" target="_blank">YouTube</a>
                        </div>
                    </div>
                    <div class="column">
                        <form>
                            <h3>Subscribe</h3>
                            <p>Stay updated!</p>
                            <div>
                                <input type="email" id="maintext">
                            </div>
                            <div>
                                <p id="thanks">Thank you for subscribing!</p>
                                <button id="mainButton" @click="submitClick">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
                <p>Copyright HERC All Rights Reserved</p>
            </footer>
        </div>
    </div>
</template>

<script>
var firebaseRef = firebase.database().ref();

export default {
  name: "FooterSection",
  mounted() {
    var maintext = document.getElementById("maintext");
    var mainbtn = document.getElementById("mainButton");
  },
  methods: {
    submitClick() {
      var email = maintext.value;
      firebaseRef.push().set(email);
      document.getElementById("thanks").style.cssText = "display:inherit;";
    }
  }
};
</script>

<style scoped>
#footer-section {
  padding-left: 10px;
  padding-right: 10px;
  background-color: #091141;
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
  color: #f3c736;
}

h3 {
  color: #f3c736;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5%;
}

p {
  font-size: 14px;
  color: #f3c736;
}

button {
  background-color: #f3c736;
  color: #091141;
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
  border: 1px solid #f3c736;
  color: #f3c736;
}

.footer {
  background-color: transparent;
  padding-bottom: 20px;
}

#maintext {
  margin-top: 5%;
  background-color: transparent;
  border: 1px solid #f3c736;
  border-radius: 5px;
  height: 40px;
  margin-bottom: 5%;
  color: white;
}

#thanks {
  margin-bottom: 1%;
  font-size: 12px;
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
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
