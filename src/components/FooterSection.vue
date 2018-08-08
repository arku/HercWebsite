<template>
    <div id="footer-section">
        <div id="content">
            <footer class="footer">
                <div class="columns">
                    <div class="column">
                        <img src="../assets/herc-logo.png">
                        <div>
                            <a href="">Privacy Policy</a>
                        </div>
                        <div>
                            <a href="">Terms of Use</a>
                        </div>
                        <div>
                            <a href="">Metamask</a>
                        </div>
                        <div>
                            <a href="">F.A.Q</a>
                        </div>
                    </div>
                    <div class="column">
                        <h3>Company</h3>
                        <div>
                            <a href="">Team</a>
                        </div>
                        <div>
                            <a href="">Contact</a>
                        </div>
                        <div>
                            <a href="">Careers</a>
                        </div>
                        <div>
                            <a href="">Whitepaper</a>
                        </div>
                    </div>
                    <div class="column">
                        <h3>Connect</h3>
                        <div>
                            <a href="">Facebook</a>
                        </div>
                        <div>
                            <a href="">Twitter</a>
                        </div>
                        <div>
                            <a href="">Instagram</a>
                        </div>
                        <div>
                            <a href="https://www.youtube.com/channel/UCzIicy2PoslRoskXctJzeGw">YouTube</a>
                        </div>
                    </div>
                    <div class="column">
                        <h3>Stay updated</h3>

                    </div>
                </div>
                <p>Copyright HERC All Rights Reserved</p>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
  name: "FooterSection"
};
</script>

<style scoped>
#footer-section {
  padding-left: 10px;
  padding-right: 10px;
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
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 10%;
}

p {
  font-size: 14px;
  color: #f3c736;
}

.footer {
  background-color: transparent;
  padding-bottom: 20px;
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
}
</style>
