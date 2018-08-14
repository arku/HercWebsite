<template>
    <div id="video-section">
        <div id="content">
            <div>
                <h1>How it Works</h1>
            </div>
            <iframe width="80%" height="515" src="https://www.youtube.com/embed/177Ub1YUdgQ?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        </div>
    </div>
</template>

<script>
export default {
  name: "VideoSection"
};
</script>

<style scoped>
#video-section {
  padding: 150px;
  padding-top: 50px;
  padding-bottom: 50px;
}

h1 {
  font-size: 45px;
  text-align: center;
  color: #f3c736;
  text-transform: uppercase;
  margin-bottom: 50px;
}

iframe {
  border: 1px solid #f3c736;
  box-shadow: 0px 12px 18px -6px #000;
}

/*** Responsive Styles Large Desktop And Above ***/
@media all and (min-width: 1405px) {
  iframe {
    height: 600px;
  }
}

/*** Responsive Styles Standard Desktop Only ***/
@media all and (min-width: 1100px) and (max-width: 1405px) {
  iframe {
    height: 500px;
  }

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Tablet And Below ***/
@media all and (max-width: 980px) {
  iframe {
    height: 400px;
  }

  #video-section {
    padding: 100px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Tablet Only ***/
@media all and (min-width: 768px) and (max-width: 980px) {
  h1 {
    font-size: 40px;
  }

  iframe {
    height: 350px;
  }

  #video-section {
    padding: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }

  iframe {
    height: 300px;
  }

  #video-section {
    padding: 50px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }

  iframe {
    height: 180px;
  }
}
</style>