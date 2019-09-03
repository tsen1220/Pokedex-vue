<template>
  <div class="HelloPokemon">
    <span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg:
        "這是一個寶可夢圖鑑，會隨時間不斷地更新，藉由寶可夢的編號，在這裡您可以查詢到寶可夢的基本資料。"
    };
  }
};
</script>

<style lang="css" scope>
</style>
