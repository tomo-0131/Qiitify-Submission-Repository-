# Qiitify
  - URL：
  https://qiitify.netlify.app
  
  [Qiita API v2](https://qiita.com/api/v2/docs)を利用し、記事を検索することができるWebサービスです。
  主にNuxt.js,Vue.jsを利用し、Netlifyにデプロイしています。
  
  モダンなUIと軽快な動作も特徴です。
  
# 使用技術
  - Nuxt.js  v2.15.2
  - Vue.js   v2.6.12
  - Vuetify  v2.4.5
  - JavaScript 
  - HTML,CSS(SCSS)
  - ESLint(コードフォーマッター)
  - lodash
  - Netlify
  - 外部API (Qiita API v2)

# 機能説明
### トップページ
  1. インプット内にユーザIDを入力します(Enterキー入力は必要ありません)
  2. 下部のカードに、Qiitaからaxiosにより取得(GET)した記事が表示されます
  3. 記事をクリックすると、記事IDを動的に取得し、/items/:item.idに飛びます
  4. 記事を見ることができます

### 私の投稿(tomoyuki_kt)ページ
  - 私が投稿した記事をQiita APIにより取得してaxiosにより表示します
  - 削除と編集が可能(DELETE,PATCHメソッド)
  - 記事名をクリックすると、Qiitaで見ることができます
  - 中身を確認できるように、本文初めより150文字を表示させています

### 投稿・編集ページ
  - Qiita APIのPOST,PATCHメソッドを利用し、Qiitaをブラウジングせずに記事投稿・編集が可能です(id:tomoyuki_ktのみ) 
  - mavon-editorライブラリを利用しており、マークダウン形式で記事を書くことができます
  - タイトル・タグ・本文は入力必須です
 
### ユーザページ
  - ユーザIDを押下すると、動的にuser.idを取得してユーザページに飛びます
  - プロフィール画像や自己紹介文・投稿記事なども取得して表示させました
