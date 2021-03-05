<template>
  <v-container>
    <v-app>
      <v-form>
        <v-text-field
         v-model="item.title"
          label="タイトル"
          color="green"
          required
        ></v-text-field>
      </v-form>

      <v-textarea
        v-model="item.tags.name"
        label="タグ"
        color="green"
        required
      ></v-textarea><br>
      <v-text-field
        v-model="item.tags.versions"
        label="バージョン"
        color="green"
        required
        type="number"
        placeholder="例：1.0.0"
      ></v-text-field><br>

      <mavon-editor
        language="ja"
        v-model="item.body"
        :counter="65535"
        :externalLink="mavonEditor.externalLink"
        :toolbars="mavonEditor.toolbars"
      ></mavon-editor>
      <mavon-editor
        language="ja"
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
  data () {
    return {
      item: {
        body: '',
        title: '',
        tags: {
          name: '',
          versions: ''
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
    postItems () {
      const url = 'https://qiita.com/api/v2/items/'
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
      axios.post(url, params, { headers: { Authorization: `Bearer ${process.env.QIITA_TOKEN}` } })
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
