<template>
    <div id="subscribe-test">
       <div class="email-octopus-form-wrapper">
    <h2 class="email-octopus-heading">Subscribe to HERC Website Widgets</h2>
    <p class="email-octopus-success-message"></p>
    <p class="email-octopus-error-message"></p>

    <form method="post"
      action="https://emailoctopus.com/lists/a1d42650-bcfd-11e8-a3c9-06b79b628af2/members/embedded/1.3s/add"
      class="email-octopus-form"
      data-sitekey="6LdYsmsUAAAAAPXVTt-ovRsPIJ_IVhvYBBhGvRV6"
    >
        
        <div class="email-octopus-form-row">
            <label for="field_0">Email address</label>
            <input id="field_0" name="field_0" type="email" placeholder="">
        </div>


        

        <div class="email-octopus-form-row-hp" aria-hidden="true">
            <!-- Do not remove this field, otherwise you risk bot sign-ups -->
            <input type="text" name="hpa1d42650-bcfd-11e8-a3c9-06b79b628af2"
               tabindex="-1"
               autocomplete="nope">
        </div>

        <div class="email-octopus-form-row-subscribe">
            <input type="hidden"
               name="successRedirectUrl"
               value="">
            <button type="submit">Subscribe</button>
        </div>
    </form>

    
    <div class="email-octopus-rewards">
        Powered by <a href="https://emailoctopus.com/?urli=x287p&amp;utm_medium=user_referral&amp;utm_source=builder" target="_blank">EmailOctopus</a>
    </div>

</div>

    </div>
</template>

<script>
export default {
  name: "SubscribeTest"
};
</script>

<style scoped>
#subscribe-test {
  padding: 50px;
}

.email-octopus-form-wrapper h2 {
  font-size: 20px;
  margin: 0 0 25px 0;
}
.email-octopus-form-row {
  margin-bottom: 15px;
}
.email-octopus-form-row label {
  display: block;
}
.email-octopus-form-row input {
  width: 100%;
  max-width: 400px;
  padding: 8px;
  height: 32px;
  border: 1px solid #ccc;
}
.email-octopus-form-row-consent {
  margin-top: 20px;
}
.email-octopus-form-row-consent label {
  vertical-align: top;
}
.email-octopus-form-row-subscribe {
  margin-top: 20px;
}
.email-octopus-form-row-subscribe button {
  background-color: #e0e0e0;
  padding: 6px 12px;
  border: 0;
  font-weight: bold;
}
.email-octopus-form-row-hp {
  position: absolute;
  left: -5000px;
}
.email-octopus-error-message {
  color: #e74c3c;
}
.email-octopus-referral,
.email-octopus-rewards {
  margin-top: 20px;
}
</style>
