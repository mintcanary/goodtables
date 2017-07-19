<template>
  <div class="landing">
    <header class="main-header">
      <div class="pattern">
        <div class="inner">
          <div class="container">
            <div class="main-nav">
              <div class="container">
                <logo/>
                <nav>
                  <a href="#"><span class="link-icon icon-login"></span> <span class="link-text">Sign in with GitHub</span></a>
                </nav>
              </div>
            </div>

            <div class="content">
              <div class="source-item panel panel-success">
                <div>
                  <span class="source">
                    <span class="label label-success">
                      <span class="icon-checkmark">
                        <i>Valid</i>
                      </span>
                    </span>
                    <p class="panel-title">
                      repository/my-data
                    </p>
                  </span>
                  <span class="job">
                    <span class="icon-clock"></span>
                    <span class="time"> a minute ago</span>
                  </span>
                </div>
              </div>

              <a class="next" href="#features" v-scroll-to="'#features'">
                <h1>meet <strong>goodtables</strong><small>.io</small></h1>
                <span class="icon-keyboard_arrow_down">
                  <i>Learn more</i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="features" id="features">
      <div class="container">
        <h2>the web service for the continuous validation of data quality</h2>
        <div class="content">
          <div class="inner">
            <ul class="feature-list">
              <li class="check">
                <span class="wrapper">
                  <span class="icon-goodtables"></span>
                </span>
                <p>Automatically check data is good on every update.</p>
              </li>
              <li class="validate">
                <span class="wrapper">
                  <span class="icon-mouse-pointer"></span>
                </span>
                <p>Validate data with a minimum of clicks.</p>
              </li>
              <li class="trust">
                <span class="wrapper">
                  <span class="icon-shield"></span>
                </span>
                <p>Trust in the validity and usefulness of your data.</p>
              </li>
              <li class="connect">
                <span class="icon-github"></span>
                <p>Connect directly to your data repository.</p>
              </li>
              <li class="quality">
                <span class="wrapper">
                  <span class="icon-checkmark"></span>
                  <span class="icon-checkmark"></span>
                </span>
                <p>Prove that your data is of consistent good quality.</p>
              </li>
              <li class="errors">
                <span class="icon-clock"></span>
                <p>Catch and identify errors early.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <a class="next" href="#about" v-scroll-to="'#about'">
        <span class="icon-keyboard_arrow_down">
          <i>More</i>
        </span>
      </a>
    </section>
    <section class="text" id="about">
      <div class="container">
        <div class="content">
          <nuxt/>
        </div>
        <div class="cta">
          <div class="inner">
            <a class="btn btn-primary" href="#">Sign in with GitHub</a>
            <h2>Try it yourself. It's Free!*</h2>
            <small>* While the basic service of goodtables.io will always remain free, there will be additional features for paid plans in the future. Watch this space!</small>
          </div>
        </div>
      </div>
    </section>
    <my-footer/>
  </div>
</template>

<script>
import Logo from '~components/Logo.vue'

import MyFooter from '~components/Footer.vue'

// var Vue = require('vue')
// var VueScrollTo = require('vue-scrollto')

// Vue.use(VueScrollTo)

export default {
  components: {
    MyFooter,
    Logo
  }
}
</script>
