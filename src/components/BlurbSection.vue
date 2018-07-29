<template>
    <div id="blurb-section">
        <div id="content">
            <div class="columns">
                <div class="column blurb is-3">
                    <div class="image is-128x128 blurb-image">
                        <img src="../assets/blurb/blockchain.png">
                    </div>
                    <p class="blurb-title">A new era in supply<br> chain ecosystems</p>
                </div>
                <div class="column is-3 is-one-third">
                    <p>test</p>
                </div>
                <div class="column is-3">
                    <p>test</p>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <p>test</p>
                </div>
                <div class="column">
                    <p>test</p>
                </div>
                <div class="column">
                    <p>test</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "BlurbSection"
};
</script>
<style>
    .blurb{
        background-color: #fafafa;
        padding: 5%;
        width: 50%;

    }

    .blurb-image{
        width: 100%;
        margin: auto;
        margin-bottom: 2%;
    }

    .blurb-title{
        text-transform: uppercase;
        text-align: center;
        color: #091141;
        font-weight: bold;
        line-height: 1.2em;
    }

    .blurb-text{
        color: #091141;
        text-align: center;
        text-transform: uppercase;
        line-height: 1.2em;
    }
</style>

