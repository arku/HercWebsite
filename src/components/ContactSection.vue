<template>
    <div id="contact-section">
        <div id="content">
            <div>
                <h1>Get in Touch With Us</h1>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Social Network</h2>
                    <span class="icon">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                    <span class="icon">
                        <i class="fab fa-linkedin fa-2x"></i>
                    </span>
                </div>
                <div class="column">

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
}

i{
    color: #f3c736;
}

i:hover{
    color: white;
    box-shadow: 0px 12px 18px -6px #000;
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

  h2{
      font-size: 20px;
  }
}
</style>
