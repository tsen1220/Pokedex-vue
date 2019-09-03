<template>
  <div id="app">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link :class="routers" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link :class="routers" to="Pokedex">Pokedex</router-link>
      </li>
      <li class="nav-item">
        <router-link :class="routers" to="PokeDict">PokeDict</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      routers: "route"
    };
  }
};
</script>

<style lang="css">
body {
  background: url(https://wallpapercave.com/wp/VHH1EMf.jpg);
  background-size: cover;
}
.row {
  background: red;
}
.route {
  font-size: 30px;
}

.route:hover {
  text-decoration: none;
}
</style>
