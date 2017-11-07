<template>
  <ul class="nav primary">
    <router-link tag="li" to="/dashboard" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-dashboard section-icon" aria-hidden="true"></span> <span class="text">Dashboard</span></a>
    </router-link>
    <router-link tag="li" to="/jobs" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-jobs section-icon" aria-hidden="true"></span> <span class="text">Jobs</span></a>
    </router-link>
    <router-link tag="li" to="/sources" exact-active-class="active" active-class="active-parent">
      <a><span class="icon-keyboard_arrow_left back-icon" aria-hidden="true"></span><span class="icon-equalizer section-icon" aria-hidden="true"></span> <span class="text">Manage Sources</span></a>
    </router-link>
  </ul>
</template>
