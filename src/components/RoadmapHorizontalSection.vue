<template>
    <div id="horizontal-roadmap">
        <div id="content">
          <div>
            <h1>Process</h1>
          </div>
          <article id="slider">
<input checked type='radio' name='slider' id='slide1'/>
<input type='radio' name='slider' id='slide2'/>
<input type='radio' name='slider' id='slide3'/>
<input type='radio' name='slider' id='slide4'/>
<input type='radio' name='slider' id='slide5'/>
<div id="slides">
	<div id="container">
		<div class="inner">
			<article>
        <div class="columns placeholder">
          <div class="column">
            <div>
              <h2>January 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Bug Bounty<br>&<br>Test Net</h3>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>February 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Test Net <br class="hide">&<br>Security Audits</h3>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>March 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br><br class="hide">
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
        </div>
			</article>
			<article>
        <div class="columns placeholder">
          <div class="column">
            <div>
              <h2>April 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>May 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>June 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
        </div>
			</article>
			<article>
        <div class="columns placeholder">
          <div class="column">
            <div>
              <h2>July 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>August 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
          <div class="column">
            <div>
              <h2>September 2018</h2>
            </div>
            <div class="gold-border">
              <h3>Private Presale</h3><br>
              <img src="../assets/check-icon-golden.png" class="image is-64x64">  
            </div>
          </div>
        </div>
			</article>
			<!-- <article>
			
			<img src="https://0.s3.envato.com/files/84450220/img/Dummy3-942X400.jpg"/>
			</article>
			<article>
			
			<img src="https://0.s3.envato.com/files/84450220/img/Dummy4-942X400.jpg"/>
			</article> -->
		</div>
	</div>
</div>
<div id="commands">
	<label for='slide1' id="first-arrow"></label>
	<label for='slide2' id="second-arrow"></label>
	<label for='slide3' id="third-arrow"></label>
	<!-- <label for='slide4'></label>
	<label for='slide5'></label> -->
</div>
<div id="active">
	<label for='slide1'></label>
	<label for='slide2'></label>
	<label for='slide3'></label>
	<!-- <label for='slide4'></label>
	<label for='slide5'></label> -->
</div>
</article>
        </div>
    </div>
</template>

<script>
export default {
  name: "HorizontalRoadmapSection"
};
</script>

<style scoped>
#horizontal-roadmap {
  padding-top: 50px;
  padding-bottom: 50px;
}
h1 {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  font-weight: bold;
}

h2 {
  font-size: 24px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 5%;
}

h3 {
  font-size: 20px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 10%;
}

.placeholder {
  padding: 100px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.gold-border {
  border: 1px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
  padding: 20px;
  height: 220px;
}

img {
  position: relative;
  bottom: 1px;
}

.hide {
  display: inherit;
}

#first-arrow,
#second-arrow,
#third-arrow {
  margin-top: 100px !important;
}

ol,
ul {
  list-style: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
caption,
th,
td {
  text-align: left;
  font-weight: normal;
  vertical-align: middle;
}
q,
blockquote {
  quotes: none;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
  content: none;
}

article {
  display: block;
}

span {
  margin: 35px 0 5px;
  font-size: 26px;
  font-weight: normal;
  color: #fff;
}
#slider {
  text-align: center;
}

label,
#active,
img {
  margin: auto;
}
.catch {
  display: block;
  height: 0;
  overflow: hidden;
}
#slider {
  margin: 0 auto;
}
input {
  display: none;
}
#slide1:checked ~ #slides .inner {
  margin-left: 0;
}
#slide2:checked ~ #slides .inner {
  margin-left: -100%;
}
#slide3:checked ~ #slides .inner {
  margin-left: -200%;
}
#slide4:checked ~ #slides .inner {
  margin-left: -300%;
}
#slide5:checked ~ #slides .inner {
  margin-left: -400%;
}
#container {
  width: 100%;
  overflow: hidden;
}
article img {
  width: 100%;
}
#slides .inner {
  width: 500%;
}
#slides article {
  width: 20%;
  float: left;
}
#commands {
  margin: -25% 0 0 0;
  width: 100%;
  height: 90px;
}
#commands label {
  display: none;
  width: 80px;
  height: 80px;
  opacity: 0.5;
}
#commands label:hover {
  opacity: 0.8;
}
#active {
  position: relative;
  z-index: 5;
  margin: 16% 0 0;
  text-align: center;
}
#active label {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #f3c736;
}
#active label:hover {
  background: #333;
  border-color: #777 !important;
}
#slide1:checked ~ #commands label:nth-child(2),
#slide2:checked ~ #commands label:nth-child(3),
#slide3:checked ~ #commands label:nth-child(4),
#slide4:checked ~ #commands label:nth-child(5),
#slide5:checked ~ #commands label:nth-child(1) {
  background: url("https://0.s3.envato.com/files/84450220/img/next.png")
    no-repeat;
  float: right;
  margin: 0 0px 0 0;
  display: block;
}
#slide1:checked ~ #commands label:nth-child(5),
#slide2:checked ~ #commands label:nth-child(1),
#slide3:checked ~ #commands label:nth-child(2),
#slide4:checked ~ #commands label:nth-child(3),
#slide5:checked ~ #commands label:nth-child(4) {
  background: url("https://0.s3.envato.com/files/84450220/img/previous.png")
    no-repeat;
  float: left;
  margin: 0 0 0 -20px;
  display: block;
}
#slide1:checked ~ #active label:nth-child(1),
#slide2:checked ~ #active label:nth-child(2),
#slide3:checked ~ #active label:nth-child(3),
#slide4:checked ~ #active label:nth-child(4),
#slide5:checked ~ #active label:nth-child(5) {
  background: #000;
  opacity: 0.6;
  border-color: #fff !important;
  border: 2px solid #fff;
}
.caption {
  line-height: 20px;
  margin: 0 0 -150%;
  position: absolute;
  padding: 320px 12px;
  opacity: 0;
  color: #fff;
  text-transform: none;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
  text-align: left;
  font-size: 18px;
}
.caption bar {
  display: inline-block;
  padding: 10px;
  background: #000;
  border-radius: 3px 3px 3px 3px;
  -moz-border-radius: 3px 3px 3px 3px;
  -webkit-border-radius: 3px 3px 3px 3px;
  opacity: 0.7;
  filter: progid:DXImageTransform.Microsoft.Alpha(opacity=70);
}
#slides {
  position: relative;
  padding: 2px;
  margin: 45px 0 0;
}
#slides .inner {
  -webkit-transform: translateZ(0);
  -webkit-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  -webkit-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -moz-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -ms-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  -o-transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
  transition-timing-function: cubic-bezier(0.77, 0, 0.175, 1);
}
#slider {
  -webkit-transform: translateZ(0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
#commands label {
  -webkit-transform: translateZ(0);
  -webkit-transition: opacity 0.2s ease-out;
  -moz-transition: opacity 0.2s ease-out;
  -o-transition: opacity 0.2s ease-out;
  transition: opacity 0.2s ease-out;
}
#slide1:checked ~ #slides article:nth-child(1) .caption,
#slide2:checked ~ #slides article:nth-child(2) .caption,
#slide3:checked ~ #slides article:nth-child(3) .caption,
#slide4:checked ~ #slides article:nth-child(4) .caption,
#slide5:checked ~ #slides article:nth-child(5) .caption {
  opacity: 1;
  -webkit-transition: all 1s ease-out 0.6s;
  -moz-transition: all 1s ease-out 0.6s;
  -o-transition: all 1s ease-out 0.6s;
  transition: all 1s ease-out 0.6s;
}
#commands,
#commands label,
#slides,
#active,
#active label {
  -webkit-transform: translateZ(0);
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  -o-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
#slider {
  max-width: 960px;
}
@media only screen and (max-width: 850px) and (min-width: 450px) {
  #slider #commands {
    margin: -25% 0 0 5%;
    width: 90%;
    height: 90px;
  }
  #slider #commands label {
    -moz-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    -o-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  #slider #slides .caption {
    padding: 280px 12px;
  }
  #slider #slides {
    padding: 2px 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  #slider #active {
    margin: 15% 0 0;
  }
}
@media only screen and (max-width: 450px) {
  #slider #commands {
    margin: -28% 0 0 1%;
    width: 100%;
    height: 70px;
  }
  #slider #active {
    margin: 12% 0 0;
  }
  #slider #slides {
    padding: 2px 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    border-radius: 0;
  }
  #slider #slides .caption {
    opacity: 0 !important;
  }
  #slider #commands label {
    -moz-transform: scale(0.7);
    -webkit-transform: scale(0.7);
    -o-transform: scale(0.7);
    -ms-transform: scale(0.7);
    transform: scale(0.7);
  }
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
}
/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
}
/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 18px;
  }

  .hide {
    display: none;
  }
}
/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  .hide {
    display: none;
  }

  #first-arrow,
  #second-arrow,
  #third-arrow {
    margin-top: 60px !important;
  }

  h2 {
    font-size: 18px;
  }

  h3{
    font-size: 16px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  #horizontal-roadmap {
    display: none;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  #horizontal-roadmap {
    display: none;
  }
}
</style>
