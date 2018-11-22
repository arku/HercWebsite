<template>
    <div id="calculator-section">
        <div id="content">
            <div class="columns">
                <div class="column">
                    <h1>Herc Protocol Cost Calculator</h1>
                </div>
                <div class="column">
                    <select >
                        <option id="day">Day</option>
                        <option id="month">Month</option>
                        <option id="year">Year</option>
                    </select>
                    <select>
                        <option>KB</option>
                        <option>MB</option>
                        <option>GB</option>
                        <option>TB</option>
                    </select>
                    <select>
                        <option>BTC</option>
                        <option>ETH</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Number of Assets</h2>
                    <input id="asset-num" placeholder="Enter number of assets">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Photo Data Size (kb)</h2>
                    <input id="photo-size" placeholder="Enter photo size">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated Number of Documents</h2>
                    <input id="doc-num" placeholder="Enter number of documents">
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2>Estimated {{period}} Herc Needed:</h2>
                    <input id="herc-needed" disabled value="10">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "CalculatorSection",
  data: {
    computed: {
      period: function() {
        return 5 + 5;
      },
      hercNeeded: function() {
        return 5;
      }
    }
  },
  methods: {
    showCalculatedHerc() {}
  }
};
</script>
<style scoped lang="scss">
#calculator-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
  border: 2px solid $herc-gold;
  border-radius: 5px;
  padding: 50px;
  box-shadow: $herc-shadow;
  background-color: $herc-blue;
}

h1 {
  @include herc-gold-h1;
  font-weight: bold;
}

h2 {
  font-size: 20px;
  color: $herc-gold;
  margin-bottom: 1%;
}

select {
  margin: auto;
  font-size: 20px;
  text-transform: uppercase;
  border-color: $herc-gold;
  border-width: 2px;
  border-radius: 5px;
  margin: 1%;
}

input {
  border: 2px solid $herc-gold;
  border-radius: 5px;
  height: 35px;
}

::placeholder {
  color: gray;
  text-align: center;
}

#herc-needed {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
</style>
