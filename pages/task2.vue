<template>
  <div id="app">
    <v-app>
      <v-card data-aos='fade-up'>
      <h2 class="task2">私の投稿記事</h2>
        <div class="task2__list">
          <ul>
            <li v-for="item in itemAll" :key="item.id" v-cloak>
              <a :href="item.url" target="_blank">
              タイトル：{{ item.title }}
              </a><br>
              <h5>投稿日時：{{ item.created_at }}</h5><br>
              <h5>本文：{{item.body.slice(0, 150)}}……</h5>
              <div class="buttons">
                <v-btn dark depressed color="primary">編集</v-btn>
                <v-btn dark depressed color="error">削除</v-btn>
              </div>
            <v-divider />
            <br>
            </li>
            <br>
          </ul>
        </div>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      itemAll: null,
      message: ''
    }
  },
  methods: {
    getAPIs () {
      axios.get('https://qiita.com/api/v2/users/tomoyuki_kt/items', { headers: { Authorization: 'Bearer 5e64526bf290713125443ba2a6d69bbb80073fa7' } })
        .then((response) => {
          this.itemAll = response.data
          console.log(this.itemAll)
        })
        .catch((error) => {
          this.message = error
        })
    }
  },
  created () {
    this.getAPIs()
  }
}
</script>

<style lang="scss">
  [v-cloak] {
    display: none;
  }

  .task2 {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    &__list {
      text-align: center;
    }
    &__list li {
      text-align: left;
      list-style: none;
    }
  }

  .buttons {
    margin-top: 10px;
    margin-bottom: 20px;
    display: inline-block;
  }

</style>
