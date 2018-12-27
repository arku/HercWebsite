<template>
  <div id="disclaimer-web-section">
    <div id="content">
      <div id="attention-section">
        <h1>Attention!</h1>
      </div>
      <div id="text-content">
        <p>Hercules is a decentralized blockchain protocol for supply chain management. HERC is the software access key that powers the user’s use of and interaction with the Hercules protocol. Hercules is open source software and a set of smart contracts that can be deployed to the Ethereum blockchain (the “Hercules Protocol”). Before using the Hercules Protocol, please review the FAQs and documentation (the “Documentation”) for a detailed explanation on how the Hercules Protocol works.</p>
        <p>Hercules SEZC currently owns the Hercules Protocol, but also supports and develops the Hercules Protocol to eventually create a completely public, open source decentralized protocol. The Hercules Protocol is provided “AS IS”, “WITH ALL FAULTS” and “AT YOUR OWN RISK”. Hercules SEZC will not be liable for any liability or damages whatsoever associated with your use, inability to use, or your interaction with other users of, the Hercules Protocol, including any direct, indirect, incidental, special, exemplary or consequential damages, loss of profits, or any cryptocurrencies or data.</p>
        <p>Your use of the Hercules Protocol involves various risks, including, but not limited to losing tokens/cryptocurrencies due to invalidation. You should carefully consider the amount of HERCs you stake and trade using the Hercules Protocol with full understanding that any staking and trading could be subject to total loss. You assume any and all risk associated with your use of the Hercules Protocol.</p>
        <p>Hercules SEZC is aware that HERC has been listed on certain exchanges and in the future it may be delisted on these exchanges and/or listed on others. Hercules SEZC disavows any obligation with respect to the listing of HERC on exchanges and it disavows any responsibility with respect to the value or trading of HERC on exchanges. Persons trading HERC or otherwise engaged in activities involving HERC on exchanges assume any and all risk, including that of total loss, associated with such activities.</p>
        <p>You are solely responsible for compliance with all laws that may apply to your particular use of the Hercules Protocol. Cryptocurrencies and blockchain technologies have been the subject of scrutiny by various regulatory bodies around the world. Hercules SEZC makes no representation regarding the application of any laws, including but by no means limited to those relating to gaming, options, derivatives or securities, to your use of the Hercules Protocol. Indeed, depending on the jurisdiction and the contemplated use of the Hercules Protocol (whether yours or another’s), that use may be considered illegal. You agree that Hercules SEZC is not responsible for determining whether or which laws may apply to your use of the Hercules Protocol. You may modify the Hercules Protocol under the terms to effectuate your compliance with any applicable laws.</p>
        <a
          href="https://wallet.herc.one"
          target="_blank"
          class="get-started-btn"
        >I Agree and Accept The Above</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DisclaimerWebSection"
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