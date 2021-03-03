<template>
  <v-container>
    <v-app>
      <v-form>
        <v-text-field
         v-model="setTitle"
          label="タイトル"
          color="green"
          required
        ></v-text-field>
      </v-form>
      <v-text-field
        v-model="setTags"
        label="タグ"
        color="green"
        required
      ></v-text-field><br>

      <mavon-editor
        language="ja"
        v-model="setBody"
        :counter="65535"
        :externalLink="mavonEditor.externalLink"
        :toolbars="mavonEditor.toolbars"
      ></mavon-editor>
      <mavon-editor
        language="ja"
        v-model="setBody"
        :externalLink="mavonEditor.externalLink"
        :subfield="false"
        :editable="false"
        :toolbarsFlag="false"
        :boxShadow="true"
        defaultOpen="preview"
        previewBackground="#fff"
      ></mavon-editor>

      <v-btn v-on:click="postItems" color="primary">投稿する</v-btn>

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
  name: 'postForm',
  data () {
    return {
      item: {
        body: '',
        title: '',
        tag: []
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
    postItems () {
      // const url = 'https://qiita.com/api/v2/items/'
      axios.post({ headers: { Authorization: 'Bearer 5e64526bf290713125443ba2a6d69bbb80073fa7' } })
        .then((response) => {
          alert('記事を投稿しました！')
          location.reload()
        })
        .catch((error) => {
          this.message = 'エラー' + error
        })
    }
  }
}
</script>
