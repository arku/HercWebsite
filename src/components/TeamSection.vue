<template>
    <div id="team-section">
        <div id="content">
            <div class="columns">
                
                <div class="column">
                    <div>
                        <h1>Team</h1>
                    </div>
                                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "TeamSection"
};
</script>

<style scoped>
h1 {
  font-size: 45px;
  color: #f3c736;
  text-transform: uppercase;
}

#left-column {
  text-align: right;
}

#left-column span {
  text-align: right;
  width: 100%;
}

#meni {
  text-align: left;
  padding: 40px;
  padding-right: 10px;
}

#meni a {
  color: #f3c736;
  text-transform: uppercase;
  line-height: 5em;
  font-size: 16px;
}

#meni a:hover {
  color: white;
  font-weight: bold;
}

#team-holder {
  padding: 40px;
  color: #091141;
}

#team-holder img {
  border: 3px solid #f3c736;
}

.bold {
  font-weight: bold;
}

.center {
  text-align: center;
}

#right-column {
  background-color: #fafafa;
  text-align: left;
}

#right-column span {
  text-align: left;
  width: 100%;
  color: #091141;
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
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  h1 {
    font-size: 30px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  h1 {
    font-size: 30px;
  }
}
</style>
