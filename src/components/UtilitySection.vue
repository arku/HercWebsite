<template>
    <div id="utility-section">
        <div id="content">
            <h1>Utility Resources</h1>
            <hr>
            <div class="columns" id="prvi">
                <!-- <div class="column">

                </div> -->
                <div class="column">
                    <a href="https://github.com/HERCone/herc-edge-login/releases" target="_blank">
                        <button>USE</button>
                    </a>
                </div>
                <div class="column">
                    <a href="https://github.com/HERCone/cold-storage" target="_blank">
                        <button>HODL</button>
                    </a>
                </div>
                <div class="column">
                    <a href="https://etherscan.io/address/0x6251583e7d997df3604bc73b9779196e94a090ce" target="_blank">
                        <button>View</button>
                    </a>
                </div>
                
                <!-- <div class="column">
                    
                </div> -->
            </div>
            <div class="columns">
                <div class="column">

                </div>
                <div class="column">
                    <h2>Wallets</h2>
                    <a href="https://s3.us-east-2.amazonaws.com/hercmedia/app/app-release-rc0.20.apk">
                        <img src="../assets/truswallet.png">
                    </a>
                    <router-link to="/tokeninfo">
                        <img src="../assets/edgeicon.png">
                    </router-link>
                </div>
                <div class="column">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "UtilitySection"
};
</script>

<style scoped>
#utility-section {
  padding: 50px;
  background-color: #fafafa;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  font-size: 30px;
  color: #091141;
}

h2 {
  color: #091141;
  margin-bottom: 5%;
  font-size: 24px;
}

hr {
  margin-bottom: 5%;
}

button {
  background-color: #f3c736;
  border: 2px solid #f3c736;
  border-radius: 5px;
  font-size: 20px;
  text-transform: uppercase;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  color: #091141;
}

button:hover {
  background-color: #091141;
  color: #f3c736;
  border: 2px solid #f3c736;
  cursor: pointer;
  box-shadow: 0px 12px 18px -6px #000;
}

img {
  width: 25%;
  margin: auto;
  margin: 4%;
}

#wallets {
  margin-bottom: 5%;
}

#prvi{
    margin-bottom: 5%;
}
</style>
