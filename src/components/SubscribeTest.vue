<template>
    <div id="subscribe-test">
        <div id="mlb2-1055182" class="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1055182">
  <div class="ml-form-align-center ">
    <div class="ml-form-embedWrapper embedForm">
      <div class="ml-form-embedBody ml-form-embedBodyDefault row-form">
        <div class="ml-form-embedContent">
          <h4>Newsletter</h4>
          <p>Signup for news and special offers!</p>
        </div>
        <form class="ml-block-form" action="https://app.mailerlite.com/webforms/submit/b6u0z8" data-code="b6u0z8" method="post" target="_blank">
          <div aria-label="Please leave the following field empty" class="ml_message_wrapper">
            <input type="text" name="ml_message" tabindex="-1" value="" placeholder="Message" autocomplete="off" title="message">
            <input type="text" name="ml_email" tabindex="-1" value="" placeholder="Email" autocomplete="off" title="email">
            <input type="text" name="ml_name" tabindex="-1" value="" placeholder="Name" autocomplete="off" title="name">
          </div>
          <div class="ml-form-formContent">
            <div class="ml-form-fieldRow ml-last-item">
              <div class="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                <input type="email" class="form-control" data-inputmask="" name="fields[email]" value="" placeholder="Email">
              </div>
            </div>
          </div>
          <input type="hidden" name="ml-submit" value="1">
          <div class="ml-form-embedSubmit">
            <button type="submit" class="primary">Subscribe</button>
            <button disabled="disabled" style="display: none;" type="button" class="loading btn btn-block">

                  <div class="ml-form-embedSubmitLoad"><div></div><div></div><div></div><div></div></div>

                </button>
          </div>
        </form>
      </div>
      <div class="ml-form-successBody row-success" style="display: none">
        <div class="ml-form-successContent">
          <h4>Thank you!</h4>
          <p>You have successfully joined our subscriber list.</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
</template>

<script>
export default {
  name: "SubscribeTest"
};

function ml_webform_success_1055182() {
  var $ = ml_jQuery || jQuery;
  $(".ml-subscribe-form-1055182 .row-success").show();
  $(".ml-subscribe-form-1055182 .row-form").hide();
}
</script>

<style scoped>
#subscribe-test {
  padding: 50px;
}

.ml_message_wrapper {
  position: absolute !important;
  left: -9999px !important;
}
</style>
