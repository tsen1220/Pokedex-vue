# 寶可夢圖鑑/Pokedex

---

此為 Vue 做成的 SPA 頁面。

並串接 Pokemon 的 Restful API。

使用者可以藉由輸入寶可夢編號，取得寶可夢的樣子與基本資料。

請先安裝 modules 來使用。

This is a SPA developed by Vue.

Concatenate Pokemon's Restful API.

Users can enter the Pokemon index to get the pokemon info.

First, you need to install the modules.

```
$ npm install
```

# 寶可夢查詢(圖鑑版本)/Pokedex

---

<img src='https://raw.githubusercontent.com/tsen1220/pokedex-vue/master/src/assets/introduction.jpg' alt=''>

# 寶可夢查詢/PokeDictionary

---

<img src='https://raw.githubusercontent.com/tsen1220/pokedex-vue/master/src/assets/introduction1.jpg' alt=''>

下為 router 設定。

```
Vue router setting:

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Pokedex",
      name: "Pokedex",
      component: Pokedex
    },
    {
      path: "/PokeDict",
      name: "PokeDict",
      component: PokeDict
    }
  ]


```
