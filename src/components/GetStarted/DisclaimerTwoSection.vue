<template>
  <div id="disclaimer-two-section">
    <div id="content">
      <div id="attention-section">
        <h1>Redirect Notice</h1>
      </div>
      <div id="text-content">
        <p>You are now leaving Augur.net and entering a website with no affiliation, support, or relationship to the Forecast Foundation.</p>
        <p>The Forecast Foundation does not endorse this website, its sponsor, or any policies, activities, products, or services offered on the site by any any advertiser or service provider on this site. The Forecast Foundation cannot attest to the accuracy of the information provided by this link. You will be subject to the destination site's privacy policy when you follow the link. Services offered when following the link have no affiliation to the Forecast Foundation, and the Forecast Foundation makes no claims in relation to the following link.</p>
        <p>
          <b>You will be automatically redirected in 6 seconds.</b>
        </p>
        <!-- <router-link to="/disclaimer-one" class="get-started-btn">I Agree and Accept The Above</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisclaimerTwoSection",
  // mounted() {
  //   setTimeout(() => {
  //     window.location.href = "https://google.com";
  //   }, 10000);
  // }
};
</script>

<style scoped lang="scss">
#attention-section {
  background-color: $herc-blue;
  padding: 50px;
}

#text-content {
  background-color: white;
  padding: 50px;
}

h1 {
  @include herc-gold-h1;
  color: white;
  margin-bottom: 0;
}

.get-started-btn {
  color: white;
  background-color: $herc-blue;
  border-radius: 4px;
  text-transform: uppercase;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10%;
}

.get-started-btn:hover {
  background-color: $herc-gold;
  color: $herc-blue;
  box-shadow: $herc-shadow;
  font-weight: bold;
}

p {
  max-width: 1080px;
  margin: auto;
  margin-bottom: 2%;
  font-size: 18px;
  color: $herc-blue;
}
</style>
