<template>
    <div id="faq-section">
        <div id="content">
            <h1>Frequently Asked Questions</h1>
            <p id="helper">Click on questions to expand answers</p>
            <section>
                <b-collapse :open="false" id="faq-holder">
                    <!-- <button class="button is-primary" slot="trigger">Click me!</button> -->
                    <div slot="trigger" class="question">
                        <p>What is Hercules (HERC)?</p>
                    </div>
                    <div class="notification answer">
                        <div class="content">
                            <p>Hercules blockchain software tracks physical inventory in a supply chain
                               with a digital source to store and review auditing information. The HERC
                               software access token is designed to erase ongoing problems in centralized
                                supply chain management such as:
                            </p>
                            <ul>
                                <li>
                                    Frequent supply shortages.
                                </li>
                                <li>
                                    Low order-filling and inefficient logistics rates.
                                </li>
                                <li>
                                    Lack of end-to-end visibility and counterfeiting of assets.
                                </li>
                                <li>
                                    Compromise of quality and high operational costs.
                                </li>
                                <li>
                                    Ineffective supply chain risk management.
                                </li>
                                <li>
                                    Lack of collaboration among different entities.
                                </li>
                                <li>
                                    Limited access to data about the state of entire supply chain networks.
                                </li>
                            </ul>
                        </div>
                    </div>
                </b-collapse>
                <b-collapse :open="false" id="faq-holder">
                    <!-- <button class="button is-primary" slot="trigger">Click me!</button> -->
                    <div slot="trigger" class="question">
                        <p>Why Use Blockchain in Supply Chain Management?</p>
                    </div>
                    <div class="notification answer">
                        <div class="content">
                            <p>Blockchains create a permanent and shared record of every transaction associated with an asset to
                               create an unbroken chain of trust. Each record is time-stamped and appended to the event before it.
                               Using Blockchain has the potential to improve tasks such as:
                            </p>
                            <ul>
                                <li>
                                    Tracking purchase orders, receipts, shipment notifications, or other trade-related documents.
                                </li>
                                <li>
                                    Recording the quantity and transfer of assets as they move between supply chain nodes.
                                </li>
                                <li>
                                    Assigning or verifying certifications or certain properties of physical products.
                                </li>
                                <li>
                                    Linking physical goods to serial numbers, barcodes, digital tags like RFID, etc.
                                </li>
                                <li>
                                    Sharing information about manufacturing process, assembly, delivery, and maintenance of products with suppliers and vendors.
                                </li>
                            </ul>
                        </div>
                    </div>
                </b-collapse>
                <b-collapse :open="false" id="faq-holder">
                    <!-- <button class="button is-primary" slot="trigger">Click me!</button> -->
                    <div slot="trigger" class="question">
                        <p>How HERC Works</p>
                    </div>
                    <div class="notification answer">
                        <div class="content">
                            <p>Users can easily insert data modules containing information e.g. photos, scientific data, audit
                               reports, legal opinions, or custom data which is stored on the blockchain. All entities can access
                               this data for independent verification. With Hercules, you can enjoy supply chain management at its best.
                            </p>
                            <p>HERC deliver:</p>
                            <ul>
                                <li>
                                    A coordinated effort which strengthens the market and increases efficiency in supply chain management.
                                </li>
                                <li>
                                    Up-to-date digital data storage.
                                </li>
                                <li>
                                    Better access to cutting-edge supply chain management and trend analysis data for more accurate forecasting.
                                </li>
                                <li>
                                    Identification of issues faster to eliminate fraud and errors.
                                </li>
                                <li>
                                    Increased consumer and partner trust.
                                </li>
                            </ul>
                        </div>
                    </div>
                </b-collapse>
                <b-collapse :open="false" id="faq-holder">
                    <!-- <button class="button is-primary" slot="trigger">Click me!</button> -->
                    <div slot="trigger" class="question">
                        <p>How to Buy HERC</p>
                    </div>
                    <div class="notification answer">
                        <div class="content">
                            <p>HERC Tokens are not currently for sale. Please sign up for our newsletter
                               to receive updates from our HERC team and you will be notified when you can
                               purchase HERC.</p>
                        </div>
                    </div>
                </b-collapse>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: "FAQSection",
  mounted: function() {
    this.$nextTick(function() {
      // Code that will run only after the
      // entire view has been rendered
      // alert("Hello! I am an alert box!!");
    });
  }
};
</script>

<style scoped>
#faq-section {
  padding: 50px;
}

h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
  line-height: 2em;
}

#helper {
  color: white;
  margin-bottom: 5%;
}

#faq-holder {
  margin-bottom: 2%;
}

.question {
  width: 50%;
  margin: auto;
  border: 2px solid white;
  color: #091141;
  text-transform: uppercase;
  background-color: #f3c736;
  font-size: 20px;
  padding: 10px;
  box-shadow: 0px 12px 18px -6px #000;
  font-weight: bold;
}

.answer {
  width: 50%;
  margin: auto;
  border-radius: 0;
  border: 2px solid #f3c736;
  background-color: #fafafa;
  box-shadow: 0px 12px 18px -6px #000;
  text-align: left;
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
    line-height: 1em;
  }

  .question{
      font-size: 18px;
      width: 60%;
  }

  .answer{
      width: 60%;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
    line-height: 1.1em;
  }

  .question{
      font-size: 18px;
      width: 70%;
  }

  .answer{
      width: 70%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
    line-height: 1.2em;
  }

   .question{
      font-size: 18px;
      width: 100%;
  }

  .answer{
      width: 100%;
  }
}
</style>
