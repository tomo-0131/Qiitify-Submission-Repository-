<template>
  <div id="app">
    <v-app>
      <v-card data-aos='fade-up'>
      <h2 class="task2">私の投稿記事</h2>
        <div class="task2__list">
          <ul>
            <li v-for="item in itemAll" :key="item.id" v-cloak>
              記事ID：{{ item.id }}<br>
              <br>
              <nuxt-link :to="`items/${item.id}`">
                <h4>{{ item.title }}</h4>
              </nuxt-link><br>
              <a :href="item.url" target="_blank">
              Qiitaリンク<br>
              </a><br>
              <h5>投稿日時：{{ item.created_at }}</h5><br>
              <h5>本文：{{item.body.slice(0, 150)}}……</h5>
              <div class="buttons">
                <nuxt-link :to="`drafts/${item.id}`">
                  <v-btn v-on:click="editItems(item.id)" dark depressed color="primary">
                    編集
                  </v-btn>
                </nuxt-link>
                <v-btn v-on:click="deleteItems(item.id)" dark depressed color="error">削除</v-btn>
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
    // APIにより記事一覧を取得
    getAPIs () {
      axios.get('https://qiita.com/api/v2/users/tomoyuki_kt/items', { headers: { Authorization: `Bearer ${process.env.QIITA_TOKEN}` } })
        .then((response) => {
          this.itemAll = response.data
        })
        .catch((error) => {
          this.message = 'エラー' + error
        })
    },
    deleteItems (itemId) {
      const result = confirm('削除しますか？')
      if (result) {
        const url = `https://qiita.com/api/v2/items/${itemId}`
        axios.delete(url, { headers: { Authorization: `Bearer ${process.env.QIITA_TOKEN}` } })
          .then((response) => {
            alert('記事を削除しました！')
            location.reload()
          })
          .catch((error) => {
            alert('削除に失敗しました！')
            this.message = 'エラー！' + error
          })
      } else {
        alert('削除を中断しました！')
      }
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
