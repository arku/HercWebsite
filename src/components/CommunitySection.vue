<template>
    <div id="community-section">
        <div id="content"  class="cornered--bottom telegram-back">
            <h2>Become a part of HERC Community</h2>
            <p>Get in discussion with us about HERC</p>
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
  background-color: #091141;
}

#content {
  padding: 100px;
}

h2 {
  font-weight: bold;
  font-size: 24px;
  color: #f3c736;
}

p {
  margin-bottom: 5%;
  color: white;
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
  z-index: 5;
  position: relative;
}

a:hover {
  background-color: transparent;
  border: 1px solid #f3c736;
  color: #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

i {
  margin-right: 1%;
}

.cornered--bottom {
  position: relative;
  z-index: 1;
}

.cornered--bottom:after {
  bottom: 0;
}

.cornered--bottom:after {
  background: url(../assets/gradient-clip.svg);
  background-size: calc(100vw + 20px);
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: -10px 103%;
  pointer-events: none;
  content: "";
  display: block;
  width: 100vw;
  height: 10vw;
  position: absolute;
  right: 0;
  z-index: -1;
}

.telegram-back::before {
  position: absolute;
  content: "";
  z-index: 0;
  width: 50%;
  height: 75%;
  bottom: 50px;
  left: 170px;
  background-image: url(../assets/telegram-icon-white.svg);
  background-repeat: no-repeat;
  background-attachment: absolute;
  background-position: center left;
  background-size: contain;
  opacity: 0.6;
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
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #content {
    padding: 50px;
  }

  .telegram-back::before {
    bottom: 100px;
    left: 0px;
    background-image: none;
  }

  .cornered--bottom:after{
    background-image: none;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>