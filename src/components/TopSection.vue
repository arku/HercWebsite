<template>
    <div id="top-section">
        <div id="content">
            <div>
                <h1>DECENTRALIZED SUPPLY CHAIN<br> MANAGEMENT SOFTWARE</h1>
            </div>
            <div>
                <h3>Leave Your Email to Stay <br> Updated With Latest News!</h3>
              <div class="field">
    <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email" value="">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "TopSection"
};
</script>
<style scoped>
#top-section {
  background-image: url("../assets/cubes.png");
  background-blend-mode: color-burn;
  background-size: initial;
  background-position: bottom left;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 50px;
  padding-right: 50px;
}

#top-section input {
  width: 25%;
  text-align: center;
  background-color: transparent;
  color:#f3c736;
  border-color: #f3c736;
  border-radius: 0;
}

input::placeholder{
  color: #f3c736;
  font-size: 14px;
}

#top-section button{
  font-size: 20px;
  border-radius: 0;
  background-color: transparent;
  color: #f3c736;
  border-color: #f3c736;
}

#top-section button:hover{
  color: white;
  border-color: white;
}

h1 {
  font-size: 45px;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  color: #f3c736;
}

h3 {
  text-transform: uppercase;
  font-weight: 100;
  color: #f3c736;
  font-size: 20px;
  margin-bottom: 50px;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  #top-section input{
    width: 40%;
  }
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    padding-top: 80px;
    padding-bottom: 80px;
    font-size: 40px;
  }

  h3 {
    font-size: 18px;
  }

  #top-section input{
    width: 50%;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
  }

  h3 {
    font-size: 18px;
  }

  #top-section input{
    width: 50%;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 30px;
  }

  #top-section input{
    width: 80%;
  }
}
</style>