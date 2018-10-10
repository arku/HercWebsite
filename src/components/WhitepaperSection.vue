<template>
    <div id="whitepaper-section">
        <div id="content">
            <div>
                <h1>Whitepaper</h1>
                <!-- <p>Please click on your preferred language. Languages are ordered alphabetically.</p> -->
            </div>
            <div class="columns">
                <!-- <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Herc_whitepaper_Dutch_x1.pdf">
                    <img src="../assets/flags/dutch.png"></a>
                    <h2>Dutch</h2>
                </div> -->
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/herc_2018_whitepaper_x3.pdf">
                    <img src="../assets/flags/english.png"></a>
                    <h2>English</h2>
                </div>
                <!-- <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Herc_whitepaper_Estonian_x1.pdf">
                    <img src="../assets/flags/estonia.png"></a>
                    <h2>Estonian</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/french-whitepaper.pdf">
                    <img src="../assets/flags/france.png"></a>
                    <h2>French</h2>
                </div> -->
            </div>
            <!-- <div class="columns">
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Hercules-Whitepaper-German.pdf">
                    <img src="../assets/flags/germany.png"></a>
                    <h2>German</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/japanese-whitepaper.pdf">
                    <img src="../assets/flags/japan.png"></a>
                    <h2>Japanese</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/korean-whitepaper.pdf">
                    <img src="../assets/flags/south-korea.png"></a>
                    <h2>Korean</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Hercules-Whitepaper_Cantonese.pdf">
                    <img src="../assets/flags/china.png"></a>
                    <h2>Mandarin</h2>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Hercules-Whitepaper-Portuguese.pdf">
                    <img src="../assets/flags/portugal.png"></a>
                    <h2>Portuguese</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Hercules-Whitepaper-Russian.pdf">
                    <img src="../assets/flags/russia.png"></a>
                    <h2>Russian</h2>
                </div>
                <div class="column">
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/Hercules_Whitepaper_Spanish.pdf">
                    <img src="../assets/flags/spain.png"></a>
                    <h2>Spanish</h2>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  name: "WhitepaperSection"
};
</script>

<style scoped>
#whitepaper-section {
  padding: 100px;
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #091141;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
  line-height: 2em;
  font-weight: bold;
  text-align: center;
}

h2 {
  color: #f3c736;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 24px;
}

h2:hover {
  color: white;
}

p {
  color: white;
  font-weight: bold;
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
  h1 {
    font-size: 40px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>
