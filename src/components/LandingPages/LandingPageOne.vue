<template>
    <div id="landing-one">
        <div id="content">
            <div class="columns">
              <div class="column">
                <h1>Play HIPR &<br> earn HERC tokens for verifying supply<br> chain data</h1>
                <img src="../../assets/herc-logo.png" id="logo">
                <h1>A blockchain<br> supply chain solution</h1>
                <div>
                  <div id="buttons-lol">
                    <button class="left-button">Join Token Sale</button>
                    <button class="right-button">Read Whitepaper</button>
                  </div>
                  <div id="countdown">
                      <countdown date="2018-10-15 00:00:00"></countdown>
                      <div id="countdown-template">            
                        <div class="countdown">
                          <div class="block">
                            <p class="digit">{{ days | two_digits }}</p>
                            <p class="text">Days</p>
                          </div>
                          <div class="block">
                            <p class="digit">{{ hours | two_digits }}</p>
                            <p class="text">Hours</p>
                          </div>
                          <div class="block">
                            <p class="digit">{{ minutes | two_digits }}</p>
                            <p class="text">Minutes</p>
                          </div>
                          <div class="block">
                            <p class="digit">{{ seconds | two_digits }}</p>
                            <p class="text">Seconds</p>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
              <div class="column">
                <img src="../../assets/people-group.png">
                <h2>About HERC</h2>
                <p>Hercules, a Special Economic Zone Company (SEZC) develops supply chain
                  management software that utlizes public blockchains.
                </p>
                <p>The Hercules platform is decentralized and powered by HERC tokens which
                  are required to record and validate the supply chain data
                </p>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LandingPageOne"
};

Vue.component("countdown", {
  template: "#countdown-template",
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000)
    };
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000);
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
});

Vue.filter("two_digits", value => {
  if (value < 0) {
    return "00";
  }
  if (value.toString().length <= 1) {
    return `0${value}`;
  }
  return value;
});

var app = new Vue({
  el: "#countdown"
});
</script>

<style scoped lang="scss">
#landing-one {
  padding: 100px;
  background-color: #091141;
}

h1 {
  color: #f3c736;
  font-size: 40px;
  /* font-weight: bold; */
  text-transform: uppercase;
  line-height: 1.2em;
  margin-bottom: 5%;
}

h2 {
  font-size: 20px;
  font-weight: bold;
  color: white;
  text-align: left;
  margin-bottom: 5%;
}

p {
  color: white;
  text-align: left;
  margin-bottom: 5%;
}

img {
  margin: auto;
  margin-bottom: 5%;
  width: 80%;
}

button {
  background-color: #f3c736;
  border: 2px solid #f3c736;
  font-size: 20px;
  text-transform: uppercase;
  padding-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 20px;
  font-weight: bold;
  color: #091141;
}

button:hover {
  background-color: transparent;
  color: #f3c736;
  border: 2px solid #f3c736;
}

#logo {
  width: 40%;
}

.left-button {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.right-button {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
</style>
