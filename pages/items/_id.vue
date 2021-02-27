<template>
  <v-container>
    <v-app>
      <v-card data-aos='fade-up' elevation="1" width="880px" class="v-card-item">
        <h4 class="item">タイトル：{{items.title}}</h4><br>
        <h4 class="item__lgtm">LGTM数：{{items.likes_count}}</h4><br>
        <h4 class="item__user_id">投稿者ユーザID：{{items.user.id}}</h4><br>
        <h4 class="item__created_at">投稿日時：{{items.created_at}}</h4>
      </v-card><br>
      <v-card elevation="1" data-aos='fade-up'>
        <h3 class="item_contents" data-aos='fade-up'>記事内容</h3>
          <div class="item_contents__body" data-aos='fade-up'>{{items.body}}</div>
        <p class="return_top">
          <nuxt-link to="/"><small>トップへ戻る</small></nuxt-link>
        </p>
      </v-card>
    </v-app>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ route, app }) {
    // 記事内容を取得する
    const items = await app.$axios.$get(`https://qiita.com/api/v2/items/${route.params.id}`)
    // itemsを返す
    return { items }
  }
}
</script>

<style lang="scss">
.v-card-item {
  text-align: center;
  margin: 0 auto;
  display: inline;
}

.item {
  margin-top: 20px;

  &__created_at {
    margin-bottom: 10px;
  }

}

.item_title {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
}
// 記事内容-文字
.item_contents {
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;

// 記事本文
  &__body {
    margin-top: 0px;
    margin-left: 30px;
    margin-right: 30px;
  }
}

.return_top {
  text-align: center;
  margin-top: 10px;
}

</style>
