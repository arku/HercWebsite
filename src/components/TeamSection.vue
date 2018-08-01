<template>
    <div id="team-section">
        <div id="content">
            <!-- <span>The Team</span> -->
            <div class="columns">
                <div id="left-column" class="column is-one-fifth">
                    <div>
                        <span>Herc</span>
                    </div>
                    <div id="meni">
                        <div>
                            <a href="">All</a>
                        </div>
                        <div>
                            <a href="">Advisors</a>
                        </div>
                        <div>
                            <a href="">Board of Directors</a>
                        </div>
                        <div>
                            <a href="">Developers</a>
                        </div>
                        <div>
                            <a href="">Directors</a>
                        </div>
                        <div>
                            <a href="">Key Management</a>
                        </div>
                        <div>
                            <a href="">Technical Advisors</a>
                        </div>
                    </div>
                </div>
                <div id="right-column" class="column">
                    <div>
                        <span>Team</span>
                    </div>
                    <div id="team-holder">
                        <div class="columns">
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/cynthia.jpg">
                                <p class="bold">Cynthia Blanchard</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/peter-buckley.png">
                                <p class="bold">Peter Buckley</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/cynthia.jpg">
                                <p class="bold">Cynthia Blanchard</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/peter-buckley.png">
                                <p class="bold">Peter Buckley</p>
                                <p>President</p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/cynthia.jpg">
                                <p class="bold">Cynthia Blanchard</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/peter-buckley.png">
                                <p class="bold">Peter Buckley</p>
                                <p>President</p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/cynthia.jpg">
                                <p class="bold">Cynthia Blanchard</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/peter-buckley.png">
                                <p class="bold">Peter Buckley</p>
                                <p>President</p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column center">
                                <img src="../assets/team/anthem.jpg">
                                <p class="bold">Anthem Blanchard</p>
                                <p>CEO</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/cynthia.jpg">
                                <p class="bold">Cynthia Blanchard</p>
                                <p>President</p>
                            </div>
                            <div class="column center">
                                <img src="../assets/team/peter-buckley.png">
                                <p class="bold">Peter Buckley</p>
                                <p>President</p>
                            </div>
                        </div>
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
#team-section {
}

span {
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
  height {
    font-size: 40px;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  span {
    font-size: 30px;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  font-size: 30px;
}
</style>
