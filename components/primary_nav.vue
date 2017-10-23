<template>
  <ul class="nav primary">
    <router-link tag="li" to="/dashboard" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-dashboard section-icon" aria-hidden="true"></span> Dashboard</a>
    </router-link>
    <router-link tag="li" to="/jobs" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-jobs section-icon" aria-hidden="true"></span> Jobs</a>
    </router-link>
    <router-link tag="li" to="/sources" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-equalizer section-icon" aria-hidden="true"></span> Manage Sources</a>
    </router-link>
  </ul>
</template>
