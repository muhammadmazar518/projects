<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top custom-navbar"
  >
    <div class="container">
      <img :src="logo" alt="Khosa Resto & Cafe Logo" class="logo" />
      <router-link to="/" class="navbar-brand"
        >Khosa's Restaurant & Cafe
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navMenu" class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/menu" class="nav-link">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/wishlist" class="nav-link">WishList</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import logo from "../assets/data/logo5.png";
</script>

<style scoped>
.custom-navbar {
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.3);
}
body {
  padding-top: 70px;
}
.logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.nav-link.router-link-exact-active {
  text-decoration: underline;
  font-weight: bold;
}
</style>
