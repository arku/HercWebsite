<template>
    <div id="whitepaper-section">
        <div id="content">
            <div>
                <h1>Whitepaper</h1>
                <p>Please click on your preferred language. Languages are ordered alphabetically.</p>
            </div>
            <div class="columns">
                <div column>
                    <a href="../assets/whitepapers/Herc_whitepaper_Dutch_x1.pdf"><img src="../assets/flags/dutch.png"></a>
                    <h2>Dutch</h2>
                </div>
                <div column>

                </div>
                <div column>

                </div>
                <div column>

                </div>
            </div>
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
}

h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
  line-height: 2em;
}

h2{
    color: #f3c736;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 24px;
}

p{
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
