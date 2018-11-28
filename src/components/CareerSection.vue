<template>
  <div id="career-section">
    <div id="content">
        <b-collapse :open="false" id="job-holder">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerSection"
};
</script>

<style>
#career-section {
  padding: 50px;
}

#content {
  max-width: 1080px;
  margin: auto;
}
</style>
