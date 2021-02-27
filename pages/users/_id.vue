<template>
  <v-container>
    <div>
      <h2>{{user.id}}のマイページ</h2>
      <br>
      <img :src="user.profile_image_url" width="120" alt="">
      <br>
      <p>{{ user.description || 'No description' }}</p><br>
      <h4>{{ user.id }} の投稿一覧</h4>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h5><span>{{item.title}}</span></h5>
          <h5><span>{{item.created_at}}</span></h5>
          <div>{{item.body.slice(0, 130)}}……</div>
        </li>
      </ul>
      <br>
      <p class="text-center">
        <nuxt-link to="/"><small>トップへ戻る</small></nuxt-link>
      </p>
    </div>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ route, app }) {
    const user = await app.$axios.$get(`https://qiita.com/api/v2/users/${route.params.id}`)
    const items =
      await app.$axios.$get(`https://qiita.com/api/v2/items?query=user:${route.params.id}`)
    return { user, items }
  }
}
</script>
