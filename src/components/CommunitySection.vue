<template>
    <div id="community-section">
        <div id="content">
            <h2>Become a part of HERC Community</h2>
            <p>Get in discussion with about HERC</p>
            <div class="columns">
                <div class="column">
                    <a class="hvr-pulse-shrink" href="https://t.me/joinchat/E_FZdg4HNKlqnxKXEEeYxw"><i class="fab fa-telegram"></i>Join Telegram</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "CommunitySection"
};
</script>
<style scoped>
#community-section {
  padding: 50px;
  background-color: #fafafa;
}

h2 {
  font-weight: bold;
  font-size: 24px;
  color: #091141;
}

p {
  margin-bottom: 3%;
}

a {
  background-color: #f3c736;
  color: #091141;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 10px;
  font-weight: bold;
  text-transform: uppercase;
}

a:hover {
  background-color: transparent;
  border: 1px solid #f3c736;
}

i {
  margin-right: 1%;
}
</style>