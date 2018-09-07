<template>
    <div id="careers-section">
        <div id="content">
            <h1>Current Opened Positions</h1>
            <div id="job-listing">
                <div class="columns">
                    <div class="column left">
                        <h2>Engineering</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Community Engineer</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a @click="isCardModalActive = true">Apply</a>
                        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                            <div class="card">
                                <div>
                                    <div>
                                        <h3 class="text-center">Community Engineer</h3>
                                    </div>
                                    <div class="modal-text">
                                        <p><b>We seek an extraordinary Community Engineer to help
                                             lay the foundation for a more resilient and secure, decentralized version of the web.
                                        </b></p>
                                        <h5>Community Engineering at HERC</h5>
                                        <p>
                                            Engineering at HERC is not just about writing world-class code. We create software
                                             systems that tackle significant challenges. In re-decentralizing the web, we work on hundreds
                                              of open source projects pursuing everything from research to end-user products. Community
                                               Engineering at HERC is focused on growing and nurturing the community around those
                                                projects and the broader decentralized web movement. Community engineers at HERC
                                                 engage both with the technical pieces that make up our systems, and the communities that
                                                  make them run!
                                        </p>
                                        <h5>As a community engineer at HERC, you will...</h5>
                                        <ul>
                                            <li>
                                                Affect the lives of countless people you help bring into this community.
                                            </li>
                                            <li>
                                                Work directly with Project Engineers to grow the community around projects like IPFS and libp2p.
                                            </li>
                                            <li>
                                                Help create a friendly and supportive environment on IRC and other project forums.
                                            </li>
                                            <li>
                                                Take on early issue triage in order to encourage new contributors and flag issues easily tackled by new contributors.
                                            </li>
                                            <li>
                                                Onboard new contributors.
                                            </li>
                                            <li>
                                                Ensure project documentation for APIs and governance stay in line with project practices.
                                            </li>
                                            <li>
                                                Identify and implement bots and automation, augmenting our interactions with the community.
                                            </li>
                                            <li>
                                                Build new dashboards and micro-sites.
                                            </li>
                                        </ul>
                                        <h5>You may be a fit for this role if you have...</h5>
                                        <ul>
                                            <li>
                                                Experience building community in open source projects.
                                            </li>
                                            <li>
                                                Experience developing Open Source Software.
                                            </li>
                                            <li>
                                                Familiarity with peer-to-peer technologies.
                                            </li>
                                            <li>
                                                A level of comfort speaking at conferences and developer summits.
                                            </li>
                                            <li>
                                                Strong written communication skills in short form, medium form, and long form.
                                            </li>
                                            <li>
                                                Experience with JavaScript.
                                            </li>
                                        </ul>
                                        <h5>Bonus Points...</h5>
                                        <ul>
                                            <li>
                                                Familiarity with concepts like merkle trees and CRDT’s.
                                            </li>
                                            <li>
                                                Experience with Go.
                                            </li>
                                            <li>
                                                Experience with octokit.
                                            </li>
                                            <li>
                                                Experience with GitHub’s GraphQL API.
                                            </li>
                                            <li>
                                                Experience running events.
                                            </li>
                                        </ul>
                                        <p class="spacer"><b>What’s it like to work at HERC?</b></p>
                                        <p class="spacer-bottom">
                                            HERC's mission is to improve humanity’s most important technology, the Internet. 
                                            We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                                             store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.<br>
                                            As a distributed team, we hire anywhere in the world, and at different levels of experience
                                             (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
                                        </p>
                                        <div class="text-center">
                                            <a href="mailto:daxdax89@msn.com" class="modal-apply">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Infrastructure Engineer</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a @click="isCardModalActive = true">Apply</a>
                        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                            <div class="card">
                                <div>
                                    <div>
                                        <h3 class="text-center">Infrastructure Engineer</h3>
                                    </div>
                                    <div class="modal-text">
                                        <p><b>We seek an outstanding Infrastructure Engineer to help lay
                                             the foundation for a more resilient, more secure, decentralized version of the web.
                                        </b></p>
                                        <h5>Engineering at HERC</h5>
                                        <p>
                                            Engineering at HERC is not just about writing world-class code. We create software systems
                                             that tackle significant challenges. We aim to solve those challenges with new technology
                                              breakthroughs and great user experience design.  We believe in an open-source approach
                                               to creation. We strike a balance between pragmatism (put it on a ship ⛴), deeply
                                                informed protocol design, and strict application of strong engineering principles.
                                                 All of this happens in an environment defined by curiosity, passion, and a love for open source.
                                        </p>
                                        <h5>As a Infrastructure Engineer at HERC, you will...</h5>
                                        <ul>
                                            <li>
                                                Develop tools and best practices for operating, debugging, and monitoring cutting edge Internet protocols such as IPFS and libp2p
                                            </li>
                                            <li>
                                                Enable cross-functional product and project teams to serve their own deployment needs
                                            </li>
                                            <li>
                                                Build and maintain CI/CD infrastructure for our open source projects
                                            </li>
                                            <li>
                                                Work within the IPFS and Filecoin teams and communities to store Petabytes of data
                                            </li>
                                            <li>
                                                Maintain the public HTTP-to-IPFS gateway, serving millions of requests per day
                                            </li>
                                            <li>
                                                Manage our IP networks (we’re AS40680) and DNS
                                            </li>
                                            <li>
                                                Come up with creative ways of interoperating with existing Internet infrastructure at all layers of the stack
                                            </li>
                                        </ul>
                                        <h5>You may be a fit for this role if you have...</h5>
                                        <ul>
                                            <li>
                                                Knowledge of core Internet protocols (BGP, IP, TCP, DNS, TLS, HTTP)
                                            </li>
                                            <li>
                                                Experience managing fleets of Linux machines
                                            </li>
                                            <li>
                                                Experience with container and cluster management tools (Nomad, Kubernetes, Docker)
                                            </li>
                                            <li>
                                                Experience collaborating closely with software engineers, from design to development to production support
                                            </li>
                                            <li>
                                                A hands-on, playful, proactive approach to your work
                                            </li>
                                        </ul>
                                        <h5>Bonus Points...</h5>
                                        <ul>
                                            <li>
                                                Experience contributing to or leading open source projects
                                            </li>
                                            <li>
                                                Published about your work (code, presentations, papers, blog, etc)
                                            </li>
                                            <li>
                                                Excellent written and verbal communication skills
                                            </li>
                                        </ul>
                                        <p class="spacer"><b>What’s it like to work at HERC?</b></p>
                                        <p class="spacer-bottom">
                                            HERC's mission is to improve humanity’s most important technology, the Internet. 
                                            We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                                             store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.<br>
                                            As a distributed team, we hire anywhere in the world, and at different levels of experience
                                             (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
                                        </p>
                                        <div class="text-center">
                                            <a href="mailto:daxdax89@msn.com" class="modal-apply">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Software Engineer, Blockchain</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a @click="isCardModalActive = true">Apply</a>
                        <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
                            <div class="card">
                                <div>
                                    <div>
                                        <h3 class="text-center">Software Engineer, Blockchain</h3>
                                    </div>
                                    <div class="modal-text">
                                        <p><b>We seek an outstanding Software Engineer to help us build the next generation of blockchain technology.
                                        </b></p>
                                        <h5>Engineering at HERC</h5>
                                        <p>
                                            Engineering at HERC is not just about writing world-class code. We create software systems
                                             that tackle significant challenges. We aim to solve those challenges with new technology
                                              breakthroughs and great user experience design.  We believe in an open-source approach
                                               to creation. We strike a balance between pragmatism (put it on a ship ⛴), deeply
                                                informed protocol design, and strict application of strong engineering principles.
                                                 All of this happens in an environment defined by curiosity, passion, and a love for open source.
                                        </p>
                                        <h5>As a Software Engineer (Blockchain) at HERC, you might...</h5>
                                        <ul>
                                            <li>
                                                Build the next generation of blockchain technology, developing projects like Filecoin
                                            </li>
                                            <li>
                                                Participate in the design of performant and resilient applications
                                            </li>
                                            <li>
                                                Integrate research results into real programs
                                            </li>
                                            <li>
                                                Work alongside a cross-functional team including engineering, design, community, product, and business
                                            </li>
                                            <li>
                                                Engage and educate the community, from users to contributors
                                            </li>
                                        </ul>
                                        <h5>You may be a fit for this role if you have...</h5>
                                        <ul>
                                            <li>
                                                Leadership experience building and maintaining large-scale distributed systems in production
                                            </li>
                                            <li>
                                                Significant experience building applications using Go, Rust, or similar languages
                                            </li>
                                            <li>
                                                Excellent understanding of blockchain technology
                                            </li>
                                            <li>
                                                Deep understanding of network protocols
                                            </li>
                                            <li>
                                                Experience working and contributing to Open Source projects
                                            </li>
                                            <li>
                                                Excellent written and verbal communication skills
                                            </li>
                                            <li>
                                                Experience leading and guiding Open Source projects (preferred)
                                            </li>
                                            <li>
                                                Experience with 1 or more of the following: Smart Contracts, storage platforms, VMs (preferred)
                                            </li>
                                        </ul>
                                        <p class="spacer"><b>What’s it like to work at HERC?</b></p>
                                        <p class="spacer-bottom">
                                            HERC's mission is to improve humanity’s most important technology, the Internet. 
                                            We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                                             store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.<br>
                                            As a distributed team, we hire anywhere in the world, and at different levels of experience
                                             (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
                                        </p>
                                        <div class="text-center">
                                            <a href="mailto:daxdax89@msn.com" class="modal-apply">Apply</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Software Engineer, Cryptography</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Software Engineer, Distributed Systems</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Software Engineer, IPFS Cluster</h3>
                        <h4><span>Remote</span><span>Engineering</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>Events</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Events Director</h3>
                        <h4><span>Remote</span><span>Events</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Logistics & Events Assistant</h3>
                        <h4><span>Remote</span><span>Events</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>Finance</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Investor Relations Manager</h3>
                        <h4><span>Remote</span><span>Finance</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>General</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Don't see your role here?</h3>
                        <h4><span>Remote</span><span>General</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>Operations</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Business Operations Specialist</h3>
                        <h4><span>Remote</span><span>Operations</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Community Manager</h3>
                        <h4><span>Remote</span><span>Operations</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>People</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Recruiting Leader</h3>
                        <h4><span>Remote</span><span>People</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>Product</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Open Source Product Manager</h3>
                        <h4><span>Remote</span><span>Product</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Product Manager</h3>
                        <h4><span>Remote</span><span>Product</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns top-space">
                    <div class="column left">
                        <h2>Research</h2>
                        <hr>
                    </div>
                    <div class="column">
                        
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Research Program Manager</h3>
                        <h4><span>Remote</span><span>Research</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Research Scientist, Cryptography</h3>
                        <h4><span>Remote</span><span>Research</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Research Scientist, Distributed Systems</h3>
                        <h4><span>Remote</span><span>Research</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
                <div class="columns">
                    <div class="column left">
                        <h3>Research Scientist, Networking</h3>
                        <h4><span>Remote</span><span>Research</span><span>Full-time</span></h4>
                    </div>
                    <div class="column right">
                        <a href="mailto:daxdax89@msn.com">Apply</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "CareersSection",
  data() {
    return {
      isCardModalActive: false
    };
  }
};
</script>
<style scoped>
#careers-section {
  padding: 50px;
  background-color: #fafafa;
}

h1 {
  font-size: 40px;
  text-align: center;
  color: #091141;
  text-transform: uppercase;
  margin-bottom: 5%;
  line-height: 1em;
}

h2 {
  font-size: 24px;
  color: #808080;
  font-weight: 700;
  text-transform: uppercase;
}

h3 {
  color: #091141;
  font-size: 24px;
}

h4 {
  color: #808080;
  font-size: 12px;
  text-transform: uppercase;
}

h5 {
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  margin-top: 5%;
}

hr {
  width: 30%;
}

ul {
  list-style-type: disc;
}

a,
button {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 20px;
  border-radius: 0;
  background-color: #091141;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  margin: auto;
}

a:hover,
button:hover {
  color: #f3c736;
}

span {
  margin-right: 15px;
}

.left {
  text-align: left;
}

.right {
  text-align: right;
}

#job-listing {
  padding: 50px;
  padding-left: 150px;
  padding-right: 150px;
  margin: auto;
}

.top-space {
  margin-top: 5%;
}

/* .sirina{
    width: 80%;
} */

.text-center {
  text-align: center;
  font-weight: bold;
}

.card {
  padding-top: 20px;
}

.modal-text {
  background-color: #fafafa;
  margin-top: 5%;
  padding: 40px;
  text-align: left;
}

.spacer {
  margin-top: 5%;
}

.spacer-bottom {
  margin-bottom: 5%;
}

.modal-apply {
  margin: auto;
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
  #job-listing {
    padding: 50px;
  }

  .right {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  a {
    font-size: 14px;
  }

  hr {
    margin: auto;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
}
</style>
