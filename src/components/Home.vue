<template>
  <div class="wrapper">
    <div class="pokedex">
      <div class="screen">
        <img class="default" v-bind:src="img" />
      </div>
      <input class="searchbox" v-model="id" />
      <button class="search" v-on:click="findpokemon(id)">Search</button>
      <ul class="pokedata">
        <li>ID:{{pkid}}</li>
        <li>Name:{{name}}</li>

        <li>
          Ability:
          <br />
          <!--eslint-disable-next-line-->
          <span class="abi" v-for="abi in abilities">{{abi.ability.name}}/</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data () {
    return {
      pokedata: {},
      id: null,
      img: "",
      pkid: "",
      name: "",
      abilities: ""
    };
  },
  methods: {
    findpokemon (id) {
      if (id < 803 && id > 0) {
        this.id = id;
        fetch("https://pokeapi.co/api/v2/pokemon/" + id, {
          method: "GET"
        })
          .then(res => res.json())
          .then(data => {
            this.pokedata = data;
            this.img = data.sprites.front_default;
            this.pkid = data.id;
            this.name = data.name;
            this.abilities = data.abilities;
          });
      } else {
        this.pokedata = "NODATA";
        this.img = null;
        this.pkid = "NODATA";
        this.name = null;
        this.abilities = null;
      }
    }
  },

  mounted () {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => {
        this.pokedata = data;
      });
  }
};
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pokedex {
  position: relative;
  width: 786px;
  height: 577px;
  background: url("http://brezomadrid.es/Codepen-resources/img/pokedex.png")
    no-repeat;
  align-items: center;
}
.screen {
  width: 237px;
  height: 158px;
  background: #ffffff;
  position: absolute;
  top: 169px;
  left: 73px;
  border-radius: 10px;
  align-items: center;
  text-align: center;
}
.searchbox {
  width: 112px;
  height: 40px;
  position: absolute;
  bottom: 13%;
  left: 57%;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
}
.pokedata {
  background: #000000;
  color: #ffffff;
  position: relative;
  top: 28%;
  left: 55%;
  width: 235px;
  height: 100px;
  border-radius: 3px;
  text-align: justify;
  z-index: 2;
  list-style: none;
}
.search {
  width: 120px;
  height: 50px;
  position: absolute;
  bottom: 12%;
  left: 74%;
  border-radius: 10px;
  color: #ffffff;
  background: #000000;
  font-size: 30px;
}
.default {
  position: relative;
  top: 20%;
  width: 50%;
}

#sp {
  font-size: 50px;
  position: relative;
  top: 20%;
}
</style>
