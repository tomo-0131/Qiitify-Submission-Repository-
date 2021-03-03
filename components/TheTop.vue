<template>
  <div id="app">
    <v-app>
      <v-container>
       <v-img
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-bottom"
          class="img1"
          v-bind:src="require('@/assets/images/top.png')"
          height="250px"
        ><br>
        <v-card class="top-img-card" max-width="670px" data-aos="zoom-in-up">
          <p class="task1">画面１</p>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="userId"
                label="ユーザIDを入力してください"
                loading
                color="green"
                required
                hide-details="auto"
              ></v-text-field>
            </v-form>
          </v-card-text>
        </v-card>
      </v-img>

        <nuxt-link to="/task2">
          <div class="text-center"  data-aos="zoom-in-up">
            <v-btn
              color="green"
              elevation="4"
              dark
              > 私の投稿
            </v-btn>
          </div>
        </nuxt-link>
      <br>
      <p class="text-center" v-cloak>{{ message }}</p>
        <v-card elevation="1" width="1200px"><br>
          <ul  class="top-list">
            <li v-for="item in items" :key="item.id" data-aos='fade-up' dulation='1500' v-cloak>
              <nuxt-link :to="`items/${item.id}`">
                <h4>{{ item.title }}</h4>
              </nuxt-link>
              <nuxt-link :to="`users/${item.user.id}`">
                ユーザID：{{ item.user.id }}
              </nuxt-link>
            <v-divider /><br>
            </li>
          </ul>
          <br>
        </v-card>
      </v-container>
    </v-app>
  </div>
</template>

<script>
/* eslint-disable */
import lodash from 'lodash'
import axios from 'axios'

export default {
  data () {
    return {
      items: null,
      userId: '',
      message: ''
    }
  },
  // 監視プロパティ インプット内の文字変化を監視する-文字入力がされている間発火する
  watch: {
    // 第一引数(変化後), 第二引数(変化前)
    userId (newKeyword, oldKeyword) {
      this.message = '検索中...'
      // lodashを利用。文字入力がされている間発火し続けるとAPIリクエストが多大になる為、lodashにより入力時間を遅延させる
      this.debouncedGetAnswer()
    }
  },

  created () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1200)
  },

  methods: {
    getAnswer () {
      if (this.userId === '') {
        this.items = null
        this.message = ''
        return
      }
      this.message = 'Loading...'

      const vm = this
      const params = { page: 1, per_page: 20, query: this.userId}
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function (response) {
          vm.items = response.data
        })
        .catch(function (error) {
          vm.message = 'Error!' + error
        })
        .finally(function () {
          vm.message = ''
        })

    }
  }
}
</script>

<style lang="scss">
  [v-cloak] {
    display: none;
  }

  .img1 {
    margin-bottom: 20px;
  }

  .task1 {
    text-align: center;
    margin-top: 10px;
    padding-bottom: -50px;
  }

  .task2_button {
    margin-top: 10px;
  }

  .top-img-card {
    margin: 0 auto;
    margin-top: 28px;
    padding: 10px;
  }

  .top-list {
    list-style: none;
  }


</style>
