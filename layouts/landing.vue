<template>
  <div class="landing">
    <header class="main-header">
      <div class="pattern">
        <div class="inner">
          <div class="container">
            <div class="main-nav">
              <logo/>
              <!--
              <nav>
                <router-link to="/dashboard">
                  <span class="link-icon icon-login"></span> <span class="link-text">Sign in with GitHub</span>
                </router-link>
              </nav>
              -->
            </div>

            <div class="content">
              <h1>{{ title }}</h1>
              <p>
                {{ tagline }}
              </p>
              <router-link v-if="ctaLink" :to="ctaLink" class="cta btn">
                {{ ctaText }}
                <p class="sub-text">
                  <span class="link-icon icon-github"></span> <span class="link-text">{{ ctaSubText }}</span>
                </p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="main-content">
      <main class="container">
        <nuxt/>
      </main>
      <router-link v-if="ctaLink" :to="ctaLink" class="cta btn">
        {{ ctaText }}
        <p class="sub-text">
          <span class="link-icon icon-github"></span> <span class="link-text">{{ ctaSubText }}</span>
        </p>
      </router-link>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  computed: {
    title () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.pageTitle : r.components.default.pageTitle)
      })[0]
    },
    tagline () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.pageTag : r.components.default.pageTag)
      })[0]
    },
    ctaText () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.ctaText : r.components.default.ctaText)
      })[0]
    },
    ctaSubText () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.ctaSubText : r.components.default.ctaSubText)
      })[0]
    },
    ctaLink () {
      return this.$route.matched.map((r) => {
        return (r.components.default.options ? r.components.default.options.ctaLink : r.components.default.ctaLink)
      })[0]
    }
  }
}
</script>
