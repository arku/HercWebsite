<template>
    <div id="subscribe-test">
        <div class="email-octopus-form-wrapper">
    <h2 class="email-octopus-heading">Sign up for PRESALE!</h2>
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
</style>
