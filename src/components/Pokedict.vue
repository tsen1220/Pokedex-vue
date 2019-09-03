<template>
  <div>
    <div class="find">
      <div style="font-size:30px;font-weight:bold">寶可夢圖鑑</div>
      <input type="text" v-model="id" />
      <button v-on:click="findpokemon(id);Tenpoke(id)">Search</button>
    </div>
    <table class="table table-dark table-hover table-one">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Types</th>
          <th scope="col">Forms</th>
          <th scope="col">Abilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{pkid}}</td>
          <td>{{name}}</td>
          <td>
            <div :key="type.name" v-for="type in types">{{type.type.name}}</div>
          </td>
          <td>
            <img :src="img" />
          </td>
          <td>
            <div :key="abi.name" v-for="abi in abilities">{{abi.ability.name}}</div>
          </td>
        </tr>
      </tbody>
    </table>

    <table class="table table-dark table-hover table-ten">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Forms</th>
        </tr>
      </thead>
      <tbody :key="ten.name" v-for="(ten) in tenpoke">
        <tr>
          <td>{{ten.pkid}}</td>
          <td>
            <span>{{ten.name}}</span>
          </td>
          <td>
            <img :src="ten.img" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "PokeDict",
  data() {
    return {
      pokedata: {},
      id: null,
      img: "",
      pkid: "",
      name: "",
      abilities: "",
      types: "",
      tenpoke: []
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
    },
    Tenpoke(id) {
      var pid = parseInt(id);
      this.tenpoke = [];
      setTimeout(() => {
        if (pid > 5 && pid < 788) {
          for (let i = pid - 5; i < pid + 5; i++) {
            fetch("https://pokeapi.co/api/v2/pokemon/" + i, {
              method: "GET"
            })
              .then(res => res.json())
              .then(data => {
                this.tenpoke.push({
                  pkid: data.id,
                  name: data.name,
                  img: data.sprites.front_default
                });
              });
          }
        }
      }, 500);
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
.table-ten {
  width: 500px;
  height: 130px;
  position: absolute;
  left: 1030px;
  top: 0px;
  opacity: 0.8;
  text-align: center;
  vertical-align: center;
}

.table-one {
  width: 600px;
  height: 130px;
  position: absolute;
  left: 250px;
  top: 300px;
  opacity: 1;
  text-align: center;
  vertical-align: center;
}

.find {
  position: absolute;
  left: 250px;
  top: 200px;
  z-index: 2;
}
</style>
