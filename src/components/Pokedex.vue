<template>
  <div class="wrapper">
    <div class="pokedex">
      <div class="screen">
        <img class="default" v-bind:src="img" />
      </div>
      <input class="searchbox" v-model.trim="id" />
      <button class="search" v-on:click="findpokemon(id)">Search</button>
      <ul class="pokedata">
        <li>ID:{{pkid}}</li>
        <li>Name:{{name}}</li>

        <li>
          Ability:
          <!--eslint-disable-next-line-->
          <span class="abi" :key="abi.name" v-for="abi in abilities">{{abi.ability.name}}/</span>
        </li>
        <li>
          Types:
          <!--eslint-disable-next-line-->
          <span class="type" :key="type.name" v-for="type in types">{{type.type.name}}/</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Pokedex",
  data() {
    return {
      pokedata: {},
      id: null,
      img: "",
      pkid: "",
      name: "",
      abilities: "",
      types: ""
    };
  },
  methods: {
    findpokemon(id) {
      if (id < 803 && id > 0) {
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
            this.types = data.types;
          });
      } else {
        this.pokedata = "NODATA";
        this.img = null;
        this.pkid = "NODATA";
        this.name = null;
        this.abilities = null;
        this.types = null;
      }
    }
  },

  mounted() {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(data => {
        this.pokedata = data;
      });
  }
};
</script>

<style lang="css">
.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.pokedex {
  position: relative;
  width: 786px;
  height: 577px;
  background: url("../assets/pokedex.png") no-repeat;
  -webkit-box-align: center;
  -ms-flex-align: center;
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
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: center;
}

.searchbox {
  width: 112px;
  height: 40px;
  position: absolute;
  bottom: 76px;
  left: 452px;
  border-radius: 10px;
  font-size: 30px;
  text-align: center;
}

.pokedata {
  background: #000000;
  display: block;
  color: #ffffff;
  position: relative;
  top: 160px;
  left: 441px;
  width: 275px;
  height: 120px;
  border-radius: 3px;
  text-align: justify;
  z-index: 2;
  list-style: none;
}

.search {
  position: absolute;
  height: 32px;
  width: 100px;
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
  line-height: 15px;
  cursor: pointer;
  outline: none;
  right: 95px;
  bottom: 83px;
}

.default {
  position: relative;
  top: 20%;
  width: 50%;
}
</style>
