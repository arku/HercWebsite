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
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/AcademicPaper.pdf" target="_blank" class="button">
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
                    <a href="https://github.com/AnthemGold" target="_blank" class="button">
                        <i class="fab fa-github"></i>AnthemGold GitHub
                    </a>
                    <a href="https://github.com/AnthemBunker" target="_blank" class="button">
                        <i class="fab fa-github a-spacer"></i>AnthemBunker GitHub
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

<style scoped>
#dev-sources {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 35px;
  color: #091141;
  font-weight: bold;
  margin-bottom: 5%;
}

h2 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 5%;
  color: #091141;
}

.button {
  font-size: 16px;
  background-color: #f3c736;
  color: #091141;
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
  background-color: #091141;
  border: 1px solid #f3c736;
  color: #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
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