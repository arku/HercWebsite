<template>
    <div id="buy-section">
        <div id="content">
            <h1>Buy <span>HERC</span> now!</h1>
            <a href="https://purchase.herc.one">
                <img src="../../assets/pillar-only-small.gif">
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: "BuySection"
};
</script>

<style scoped>
#buy-section {
  padding: 50px;
  background-color: #091141;
  background-image: url("../../assets/HERC_BKG_v2_blue.png");
  background-size: cover;
  background-position: center;
  border-top: 5px solid #091141;
  border-bottom: 5px solid #f3c736;
}

#content {
  max-width: 1080px;
  margin: auto;
}

h1 {
  color: white;
  font-size: 30px;
  margin-bottom: 5%;
  text-shadow: 1px 1px black;
}

span {
  color: #f3c736;
  font-weight: bold;
}
</style>
