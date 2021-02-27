<template>
  <v-container>
    <v-app>
      <v-card elevation="1" width="1200px" class="text-center">
        <h3 class="item_title">タイトル：{{items.title}}</h3><br>
        <h4 class="text-center">LGTM数：{{items.likes_count}}</h4><br>
        <h4 class="text-center">投稿者ユーザID：{{items.user.id}}</h4><br>
        <h4 class="text-center">投稿日時：{{items.created_at}}</h4>
        <h3 class="item_contents">記事内容</h3>
          <div class="item_contents__body">{{items.body}}</div>
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
.item_title {
  margin-top: 20px;
  margin-left: 30px;
  margin-right: 30px;
}
// 記事内容-文字
.item_contents {
  text-align: left;
  margin-top: 10px;
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
  margin-top: 10px;
}

</style>
