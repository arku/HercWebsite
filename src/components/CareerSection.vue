<template>
  <div id="career-section">
    <div id="content">
      <div class="accordian-holder">
        <h1>Current Opened Positions</h1>
        <h2>Engineering</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Community Engineer</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div>
              <p class="small-spacer">
                <b>
                  We seek an extraordinary Community Engineer to help
                  lay the foundation for a more resilient and secure, decentralized version of the web.
                </b>
              </p>
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
                <li>Affect the lives of countless people you help bring into this community.</li>
                <li>Work directly with Project Engineers to grow the community around projects like IPFS and libp2p.</li>
                <li>Help create a friendly and supportive environment on IRC and other project forums.</li>
                <li>Take on early issue triage in order to encourage new contributors and flag issues easily tackled by new contributors.</li>
                <li>Onboard new contributors.</li>
                <li>Ensure project documentation for APIs and governance stay in line with project practices.</li>
                <li>Identify and implement bots and automation, augmenting our interactions with the community.</li>
                <li>Build new dashboards and micro-sites.</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>Experience building community in open source projects.</li>
                <li>Experience developing Open Source Software.</li>
                <li>Familiarity with peer-to-peer technologies.</li>
                <li>A level of comfort speaking at conferences and developer summits.</li>
                <li>Strong written communication skills in short form, medium form, and long form.</li>
                <li>Experience with JavaScript.</li>
              </ul>
              <h5>Bonus Points...</h5>
              <ul>
                <li>Familiarity with concepts like merkle trees and CRDT’s.</li>
                <li>Experience with Go.</li>
                <li>Experience with octokit.</li>
                <li>Experience with GitHub’s GraphQL API.</li>
                <li>Experience running events.</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Infrastructure Engineer</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div>
              <p>
                <b>
                  We seek an outstanding Infrastructure Engineer to help lay
                  the foundation for a more resilient, more secure, decentralized version of the web.
                </b>
              </p>
              <h5>Engineering at HERC</h5>
              <p>
                Engineering at HERC is not just about writing world-class code. We create software systems
                that tackle significant challenges. We aim to solve those challenges with new technology
                breakthroughs and great user experience design. We believe in an open-source approach
                to creation. We strike a balance between pragmatism (put it on a ship ⛴), deeply
                informed protocol design, and strict application of strong engineering principles.
                All of this happens in an environment defined by curiosity, passion, and a love for open source.
              </p>
              <h5>As a Infrastructure Engineer at HERC, you will...</h5>
              <ul>
                <li>Develop tools and best practices for operating, debugging, and monitoring cutting edge Internet protocols such as IPFS and libp2p</li>
                <li>Enable cross-functional product and project teams to serve their own deployment needs</li>
                <li>Build and maintain CI/CD infrastructure for our open source projects</li>
                <li>Work within the IPFS and Filecoin teams and communities to store Petabytes of data</li>
                <li>Maintain the public HTTP-to-IPFS gateway, serving millions of requests per day</li>
                <li>Manage our IP networks (we’re AS40680) and DNS</li>
                <li>Come up with creative ways of interoperating with existing Internet infrastructure at all layers of the stack</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>Knowledge of core Internet protocols (BGP, IP, TCP, DNS, TLS, HTTP)</li>
                <li>Experience managing fleets of Linux machines</li>
                <li>Experience with container and cluster management tools (Nomad, Kubernetes, Docker)</li>
                <li>Experience collaborating closely with software engineers, from design to development to production support</li>
                <li>A hands-on, playful, proactive approach to your work</li>
              </ul>
              <h5>Bonus Points...</h5>
              <ul>
                <li>Experience contributing to or leading open source projects</li>
                <li>Published about your work (code, presentations, papers, blog, etc)</li>
                <li>Excellent written and verbal communication skills</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Software Engineer, Blockchain</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="popup">
              <p>
                <b>We seek an outstanding Software Engineer to help us build the next generation of blockchain technology.</b>
              </p>
              <h5>Engineering at HERC</h5>
              <p>
                Engineering at HERC is not just about writing world-class code. We create software systems
                that tackle significant challenges. We aim to solve those challenges with new technology
                breakthroughs and great user experience design. We believe in an open-source approach
                to creation. We strike a balance between pragmatism (put it on a ship ⛴), deeply
                informed protocol design, and strict application of strong engineering principles.
                All of this happens in an environment defined by curiosity, passion, and a love for open source.
              </p>
              <h5>As a Software Engineer (Blockchain) at HERC, you might...</h5>
              <ul>
                <li>Build the next generation of blockchain technology, developing projects like Filecoin</li>
                <li>Participate in the design of performant and resilient applications</li>
                <li>Integrate research results into real programs</li>
                <li>Work alongside a cross-functional team including engineering, design, community, product, and business</li>
                <li>Engage and educate the community, from users to contributors</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>Leadership experience building and maintaining large-scale distributed systems in production</li>
                <li>Significant experience building applications using Go, Rust, or similar languages</li>
                <li>Excellent understanding of blockchain technology</li>
                <li>Deep understanding of network protocols</li>
                <li>Experience working and contributing to Open Source projects</li>
                <li>Excellent written and verbal communication skills</li>
                <li>Experience leading and guiding Open Source projects (preferred)</li>
                <li>Experience with 1 or more of the following: Smart Contracts, storage platforms, VMs (preferred)</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Software Engineer, Cryptography</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="popup">
              <p>
                <b>Seeking a seasoned software engineer with a specialization in cryptography to help shape the next generation of network protocols.</b>
              </p>
              <h5>Engineering at HERC</h5>
              <p>
                Engineering at HERC is not just about writing world-class code. We create software systems
                that tackle significant challenges. We aim to solve those challenges with new technology
                breakthroughs and great user experience design. We believe in an open-source approach
                to creation. We strike a balance between pragmatism (put it on a ship ⛴), deeply
                informed protocol design, and strict application of strong engineering principles.
                All of this happens in an environment defined by curiosity, passion, and a love for open source.
              </p>
              <h5>As a Software Engineer (Cryptography) at HERC, you might...</h5>
              <ul>
                <li>Build the next generation of peer-to-peer software, working on projects like libp2p, IPFS and Filecoin</li>
                <li>Participate in the design of applications integrating new cryptographic primitives</li>
                <li>Integrate research results into real programs</li>
                <li>Work alongside a cross-functional team including engineering, design, community, product, and business</li>
                <li>Educate the team on how to design and build systems with security first</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>MS degree in Computer Science, Mathematics, or a related field</li>
                <li>Demonstrated the ability to implement cryptographic primitives</li>
                <li>Experience programming in one or more of the following: Go, Rust, C, C++, Haskell, Ocaml</li>
                <li>Significant experience building secure applications</li>
                <li>In-depth knowledge of authentication protocols and applied cryptography</li>
                <li>Knowledge of the latest attack trends, tools and the threat landscape</li>
                <li>Proven track record of independently driving projects in a fast-paced environment</li>
                <li>Excellent communication skills on both technical and non-technical issues</li>
              </ul>
              <h5>Bonus Points...</h5>
              <ul>
                <li>Experience working and contributing to Open Source projects</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Software Engineer, Distributed Systems</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="popup">
              <p>
                <b>Define and build elegant, performant, and resilient systems for tomorrow's web.</b>
              </p>
              <p>
                We are hiring Distributed Systems Engineers to work on the JavaScript and Go
                implementations of protocols like IPFS, Filecoin and libp2p.
              </p>
              <p>
                Enthusiasm about the decentralized web and blockchains has brought an influx of people
                who want to _use_ distributed systems but who don't know _how to build_ the necessary
                infrastructure. We are building that infrastructure. To continue that work, we're looking
                for people who thoroughly understand the principles of distributed systems and who will
                lean into the challenges of applying those principles in open-source code that will be
                deployed worldwide.
              </p>
              <h5>Distributed Systems Engineering at HERC</h5>
              <p>
                Distributed systems engineering lies at the center of many projects at HERC. With IPFS, libp2p,
                Filecoin and other related projects we are laying the foundation for a more resilient, more secure,
                distributed version of the web. This requires rigorous engineering from protocol design through
                all the phases of implementation. We strike a balance between pragmatism (put it on a ship ⛴),
                deeply informed protocol design, and strict application of strong engineering principles. All
                of this happens in an environment defined by curiosity, passion, and a love for open source.
              </p>
              <h5>As a Distributed Systems Software Engineer at Protocol Labs you might …</h5>
              <ul>
                <li>Create elegant, reusable open-source solutions to hard distributed systems problems</li>
                <li>Contribute to steering and maintenance of the JavaScript or Go implementations of IPFS, Filecoin, libp2p and similar open source projects</li>
                <li>Participate in the design of performant and resilient applications</li>
                <li>Integrate research results into real programs</li>
                <li>Provide code reviews, guidance, and encouragement for open source contributors around the world</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>Significant experience building applications using Go, Universal JavaScript, or related languages (required)</li>
                <li>Solid understanding of distributed systems principles (required)</li>
                <li>A good understanding of the Web's application model (required)</li>
                <li>Literacy with cryptographic principles and practices</li>
                <li>Experience Implementing distributed software systems and applications that overcome the challenges of p2p networking</li>
                <li>A fiery passion for busting through NATs</li>
                <li>Experience leading and guiding Open Source projects (preferred)</li>
                <li>Experience Implementing DHTs, consensus (Raft/PAXOS) and/or blockchain-based protocols (preferred)</li>
                <li>Experience with 1 or more of the following: Smart Contracts, storage platforms, UNIX file systems, VMs (preferred)</li>
                <li>Proficiency at tuning network applications for high and low bandwidth settings (preferred)</li>
              </ul>
              <h5>Bonus Points...</h5>
              <ul>
                <li>Experience working and contributing to Open Source projects</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Software Engineer, IPFS Cluster</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="popup">
              <p>
                <b>We seek a software engineer to work on the IPFS Cluster project.</b>
              </p>
              <h5>Engineering at HERC</h5>
              <p>
                Engineering at Protocol Labs is not just about writing world-class code. We create software
                systems that tackle significant challenges. We aim to solve those challenges with new technology
                breakthroughs and great user experience design. We believe in an open-source approach to creation.
                We strike a balance between pragmatism, deeply informed protocol design, and strict application of
                strong engineering principles. All of this happens in an environment defined by curiosity,
                passion, and a love for open source.
              </p>
              <h5>As a Software-Engineer working with Protocol Labs on the ipfs-cluster project you will...</h5>
              <ul>
                <li>Use ipfs-cluster to harness the power of a swarm of ipfs nodes, enabling the distribution and replication of datasets among them</li>
                <li>Learn and contribute to the libp2p stack, working on RPC and consensus protocols on top of libp2p.</li>
                <li>Build and transform merkle trees so that ipfs-cluster can efficiently work with very large datasets.</li>
                <li>Scale, improve and implement features that will be key to the storage market powered by filecoin</li>
                <li>Work on data replication and advanced fault tolerance strategies on ipfs</li>
                <li>Support users with real-life use cases, writing open-source code that will run in many different environments</li>
                <li>Plan your own time and focus, working in a loosely coordinated team advancing open-source technologies</li>
              </ul>
              <h5>You may be a fit for this role if you have...</h5>
              <ul>
                <li>Experience programming in Go</li>
                <li>Experience working in cluster-software and distributed software (software running in many different machines).</li>
                <li>Experience working in open-source and using standard open-source tooling (Github…)</li>
                <li>Automation of infrastructure and related technologies (i.e. terraform, packer, ansible...)</li>
              </ul>
              <h5>Bonus Points...</h5>
              <ul>
                <li>Experience with file systems and data replication (bonus: distributed data replication)</li>
                <li>Extensive knowledge/experience working on consensus algorithms</li>
                <li>Experience working with libp2p and/or parts of the IPFS ecosystem (including IPLD)</li>
                <li>Experience working remotely and self-managing your time</li>
              </ul>
              <p class="spacer">
                <b>What’s it like to work at HERC?</b>
              </p>
              <p class="spacer-bottom">
                HERC's mission is to improve humanity’s most important technology, the Internet.
                We build protocols, systems, and tools to improve how it works. Today, we are focused on how we
                store, locate, and move information. Our projects include IPFS, Filecoin, libp2p, and more.
                <br>As a distributed team, we hire anywhere in the world, and at different levels of experience
                (entry, senior, staff). We look for people with unique perspectives and diverse backgrounds.
              </p>
              <div class="center-element">
                <button>
                  <a href="mailto:social@herc.one">Apply</a>
                </button>
              </div>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>Events</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Events Director</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Logistics & Events Assistant</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>Finance</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Investor Relations Manager</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>General</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Don't see your role here?</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>Operations</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Business Operations Specialist</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Community Manager</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>People</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Recruiting Leader</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>Product</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Open Source Product Manager</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Product Manager</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <h2>Research</h2>
        <hr>
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Research Program Manager</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Research Scientist, Cryptography</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Research Scientist, Distributed Systems</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>

      <div class="accordian-holder">
        <b-collapse :open="false" id="job-holder">
          <div slot="trigger" class="question">
            <h3>Research Scientist, Networking</h3>
            <h4>
              <span>Remote</span> |
              <span>Research</span> |
              <span>Full-time</span>
            </h4>
          </div>
          <div class="notification answer">
            <div class="center-element">
              <button>
                <a href="mailto:social@herc.one">Apply</a>
              </button>
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CareerSection"
};
</script>

<style scoped lang="scss">
#career-section {
  padding: 50px;
  background-color: #fafafa;
}

h1 {
  @include herc-blue-h1;
  font-weight: bold;
  margin: 0;
}
h2 {
  font-size: 24px;
  color: #808080;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 5%;
}
h3 {
  color: $herc-gold;
  font-size: 24px;
}
h4 {
  color: #fafafa;
  font-size: 12px;
  text-transform: uppercase;
}

h5 {
  font-weight: bold;
}

p {
  margin-bottom: 1%;
}

#job-holder {
  margin-bottom: 2%;
}

.center-element {
  text-align: center;
}

.question {
  width: 80%;
  margin: auto;
  border: 1px solid $herc-gold;
  color: $herc-gold;
  text-transform: uppercase;
  background-color: $herc-blue;
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  box-shadow: $herc-shadow;
  border-radius: 5px;
}
.answer {
  width: 80%;
  margin: auto;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid $herc-gold;
  background-color: #fafafa;
  text-align: left;
  color: $herc-blue;
  box-shadow: $herc-shadow;
}

.accordian-holder {
  margin: auto;
}

#content {
  max-width: 1080px;
  margin: auto;
}

.small-spacer {
  margin-bottom: 2%;
}

.big-spacer {
  margin-bottom: 5%;
}

button {
  @include herc-gold-button;
  margin: 5%;
  border-radius: 5px;
  border: 1px solid $herc-blue;
  font-size: 20px;
}

button:hover {
  @include herc-gold-button-hover;
  background-color: $herc-blue;
}

a {
  text-decoration: none !important;
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
  .question {
    font-size: 18px;
    width: 90%;
  }

  .answer {
    width: 90%;
  }
}
/*** Responsive Styles Smartphone Only ***/
@media all and (max-width: 767px) {
  .question {
    font-size: 18px;
    width: 90%;
  }

  .answer {
    width: 90%;
  }
}
/*** Responsive Styles Smartphone Portrait ***/
@media all and (max-width: 479px) {
  .question {
    font-size: 18px;
    width: 100%;
  }

  .answer {
    width: 100%;
  }
}
</style>