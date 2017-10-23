<template>
  <ul class="nav primary">
    <router-link tag="li" to="/dashboard" exact-active-class="active">
      <a><span class="icon-dashboard" aria-hidden="true"></span> Dashboard</a>
    </router-link>
    <router-link tag="li" to="/sources" exact-active-class="active">
      <a><span class="icon-equalizer" aria-hidden="true"></span> Manage Sources</a>
    </router-link>
  </ul>
</template>
