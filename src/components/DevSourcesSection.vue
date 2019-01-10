<template>
    <div id="dev-sources">
        <div id="content">
            <img src="../assets/pillar-only-small.gif">
            <h1>Developer Resources</h1>
            <div class="columns">
                <div class="column">
                    <h2>Whitepaper</h2>
                    <router-link to="/whitepaper/" class="button">
                        <i class="fas fa-file-pdf"></i>Whitepaper
                    </router-link>
                </div>
                <div class="column">
                    <h2>Academic Paper</h2>
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/AcademicPaperQ1_2019.pdf" target="_blank" class="button">
                        <i class="fas fa-file-pdf"></i>Academic Paper
                    </a>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Source Code</h2>
                    <a href="https://github.com/HERCone" target="_blank" class="button">
                        <i class="fab fa-github"></i>Herc GitHub
                    </a>
                    <a href="https://github.com/herchackathon" target="_blank" class="button">
                        <i class="fab fa-github"></i>Herc Hackathon GitHub
                    </a>
                    <a href="https://github.com/AnthemBunker" target="_blank" class="button">
                        <i class="fab fa-github a-spacer"></i>AnthemBunker GitHub
                    </a>
                    <a href="https://github.com/hercone/herc-edge-login/releases" target="_blank" class="button">
                        <i class="fab fa-github a-spacer"></i>HERC dapp
                    </a>
                </div>
                <div class="column">
                    <h2>HERC Token Smart Contract Address</h2>
                    <a href="https://etherscan.io/address/0x6251583e7d997df3604bc73b9779196e94a090ce" target="_blank" class="button">
                        <i class="fab fa-ethereum"></i>View on Etherscan
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "DevSourcesSection"
};
</script>

<style scoped lang="scss">
#dev-sources {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  @include herc-gold-h1;  
  font-size: 35px;
  font-weight: bold;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5%;
  color: $herc-blue;
}

.button {
  font-size: 16px;
  background-color: $herc-gold;
  color: $herc-blue;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 5px;
  border-color: transparent;
}

.button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue; 
}

button {
  background-color: transparent;
  border-color: transparent;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
}

.button {
  margin: 1%;
}

.columns {
  margin-bottom: 5%;
}

i {
  margin-right: 1%;
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