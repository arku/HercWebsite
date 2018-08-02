<template>
    <div id="team-section">
        <div id="content">
            <div>
                <h1>Team</h1>
            </div>
            <div class="columns">
                <div class="column">
                    
                </div>
                <div class="column">
                    
                </div>
                <div class="column">
                    
                </div>
                <div class="column">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TeamSection"
};
</script>

<style scoped>
h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
}

.bold {
  font-weight: bold;
}

.center {
  text-align: center;
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
