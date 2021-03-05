<template>
  <v-container>
    <v-app>
      <v-form v-cloak>
        <v-text-field
         v-model="item.title"
          label="タイトル"
          color="green"
          required
          v-cloak
        ></v-text-field>
      </v-form>
      <v-layout wrap>
        <v-flex xs12>
          <v-combobox
            v-model="item.tags.name"
            label="タグ"
            append-icon
            chips
            deletable-chips
            class="tag-input"
            :search-input.sync="search"
            @keyup.tab="updateTags"
            @paste="updateTags">
          </v-combobox>
        </v-flex>
      </v-layout>
      <v-text-field
        v-model="item.tags.versions"
        label="バージョン"
        color="green"
        required
        type="number"
        placeholder="例：1.0.0"
        v-cloak
      ></v-text-field><br>
      <mavon-editor
        language="ja"
        v-model="item.body"
        :counter="65535"
        :externalLink="mavonEditor.externalLink"
        :toolbars="mavonEditor.toolbars"
        v-cloak
      ></mavon-editor>
      <mavon-editor
        language="ja"
        v-model="item.body"
        :externalLink="mavonEditor.externalLink"
        :subfield="false"
        :editable="false"
        :toolbarsFlag="false"
        :boxShadow="false"
        defaultOpen="preview"
        previewBackground="#fff"
      ></mavon-editor>

      <v-btn v-on:click="patchItems" color="primary">編集を投稿する</v-btn>

    </v-app>
  </v-container>
</template>

<script>
import axios from 'axios'
// マークダウン形式フォームを導入する
import mavonEditor from 'mavon-editor'
import Vue from 'vue'
import 'mavon-editor/dist/css/index.css'
import 'mavon-editor/dist/markdown/github-markdown.min.css'
import 'mavon-editor/dist/highlightjs/highlight.min.js'
import 'mavon-editor/dist/katex/katex.min.css'
import 'mavon-editor/dist/katex/katex.min.js'

Vue.use(mavonEditor)

export default {
  async asyncData ({ route, app }) {
    const item = await app.$axios.$get(`https://qiita.com/api/v2/items/${route.params.id}`)
    return { item }
  },
  data () {
    return {
      item: {
        id: '',
        body: '',
        title: '',
        tags: {
          name: '',
          versions: '1.0.0'
        }
      },
      mavonEditor: {
        externalLink: {
          markdown_css () {
            return '/static/css/markdown/github-markdown.min.css'
          },
          hljs_js () {
            return '/static/js/highlightjs/highlight.min.js'
          },
          katex_css () {
            return '/static/css/katex/katex.min.css'
          },
          katex_js () {
            return '/static/js/katex/katex.min.js'
          }
        },
        // ツールバーにどのボタンを追加するか
        toolbars: {
          bold: true,
          italic: true,
          header: true,
          underline: true,
          strikethrough: true,
          mark: true,
          superscript: true,
          subscript: true,
          quote: true,
          ol: true,
          ul: true,
          link: true,
          code: true,
          table: true,
          fullscreen: true,
          readmodel: true,
          htmlcode: true,
          help: true,
          undo: true,
          redo: true,
          navigation: true,
          alignleft: true,
          aligncenter: true,
          alignright: true,
          subfield: true,
          preview: true
        }
      }
    }
  },
  methods: {
    updateTags () {
      this.$nextTick(() => {
        this.item.tags.name.push(...this.search.split(','))
        this.$nextTick(() => {
          this.search = ''
        })
      })
    },
    patchItems () {
      const url = `https://qiita.com/api/v2/items/${this.item.id}`
      const params = {
        body: this.item.body,
        coediting: false,
        group_url_name: null,
        private: false,
        tags: [
          {
            name: this.item.tags.name,
            versions: [this.item.tags.versions]
          }
        ],
        title: this.item.title,
        tweet: false
      }
      axios.patch(url, params, { headers: { Authorization: `Bearer ${process.env.QIITA_TOKEN}` } })
        .then((response) => {
          alert('記事を編集しました！')
          location.reload()
          location.href = '/task2'
        })
        .catch((error) => {
          this.message = 'エラー' + error
        })
    },
    getAPIs () {
      axios.get(`https://qiita.com/api/v2/items/${this.$route.params.id}`, { headers: { Authorization: `Bearer ${process.env.QIITA_TOKEN}` } })
        .then((response) => {
          console.log(response)
          this.item = response.data
          this.item.tags.name = response.data.tags[0].name
          this.item.tags.versions = response.data.tags[0].versions
        })
        .catch((error) => {
          this.message = 'エラー' + error
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
</style>
