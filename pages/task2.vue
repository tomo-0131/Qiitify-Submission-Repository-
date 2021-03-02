<template>
  <div id="app">
    <v-app>
      <v-card data-aos='fade-up'>
      <h2 class="task2">私の投稿記事</h2>
        <div class="task2__list">
          <ul>
            <li v-for="item in itemAll" :key="item.id" v-cloak>
              記事ID：{{ item.id }}<br>
              <a :href="item.url" target="_blank">
              タイトル：{{ item.title }}
              </a><br>
              <h5>投稿日時：{{ item.created_at }}</h5><br>
              <h5>本文：{{item.body.slice(0, 150)}}……</h5>
              <div class="buttons">
                <v-btn dark depressed color="primary">編集</v-btn>
                <v-btn v-on:click="deleteItems" dark depressed color="error">削除</v-btn>
              </div>
            <v-divider /><br>
            </li><br>
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
      items: '',
      message: ''
    }
  },
  methods: {
    getAPIs () {
      axios.get('https://qiita.com/api/v2/users/tomoyuki_kt/items', { headers: { Authorization: 'Bearer 5e64526bf290713125443ba2a6d69bbb80073fa7' } })
        .then((response) => {
          this.itemAll = response.data
        })
        .catch((error) => {
          this.message = 'エラー' + error
        })
    },
    deleteItems () {
      axios.delete('https://qiita.com/api/v2/items/db114ca264cb110b2cb0', { headers: { Authorization: 'Bearer 5e64526bf290713125443ba2a6d69bbb80073fa7' } })
        .then((response) => {
          const result = confirm('削除しますか')
          if (result) {
            alert('記事を削除しました！')
            location.reload()
          } else {
            alert('削除を中断しました')
          }
        })
        .catch((error) => {
          this.message = 'エラー！' + error
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
