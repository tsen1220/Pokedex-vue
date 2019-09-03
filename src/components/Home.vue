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
      msg: `精靈寶可夢遊戲是覆蓋多種掌機，家機平台的電子遊戲，所有遊戲都基於寶可夢這一虛擬物種，遊戲的大部分系統都有或多或少的傳承與更新。
遊戲一般劃分為“精靈寶可夢”系列，旁支系列遊戲和其他遊戲，其中又以“精靈寶可夢”系列遊戲更廣為人知，大部分衍生作品都是基於“精靈寶可夢”系列遊戲創作的。其相關衍生產品涵蓋了動畫，漫畫，卡片遊戲，實體產品等多個方面，現在已經成為了全球流行的遊戲系列。
因為遊戲數量過多而被劃分為不同的世代，主要以其涵蓋的寶可夢數量，遊戲平台和發布時間來決定。`
    };
  }
};
</script>

<style>
.HelloPokemon {
  background: url(https://s1.52poke.wiki/wiki/4/4b/Wikilogo.png);
  background-repeat: no-repeat;
  background-position-x: 0px;
  background-position-y: 200px;
  position: absolute;
  top: 130px;
  left: 500px;
  width: 700px;
  height: 500px;
}
</style>
