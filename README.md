# ソロプロジェクトAPP開発

このリポジトリはCode Chrysalisの生徒であるときに作成しました。

## アプリの概要

名前： Mood tracker (気分トラッカー）

毎日いつでも自分の気分をpostしてトラッキングできるアプリです🤗

どんな状況や行動が、自分のメンタルにどのように影響しているか気になったことはありませんか？
自分を知ることはきっと人生を楽しむ上でとても重要だと私は考えています。
毎日気分や出来事の記録をすることで、振り返った時、色々なパターンや可能性が見えてくるでしょう！
ぜひ活用してください✨

今は、最低限の仕様ですが。この先、もっと便利な機能を追加していきたいです。

## 今後足したい機能

・気分を数値化してグラフで可視化できる機能

・気分や出来事のキーワードで検索できる機能

・期間を指定できる機能

・朝、午後、夜の時間帯で、気分をソートして確認できる機能

などなど

## 使い方

1. このリポジトリをクローンする
2. npm install
3. npm i -D express nodemon
4. psqlでcreate database tracking
5. .env.localで DB_NAME="tracking" と　DB_USER="あなたのユーザ名"を設定
6. npm run dev もしくは npm run start (自動でrun migrateとrun seedがされて、データベースにデータが挿入されます。）
7. serverが起動している状態で、npm run client
8. これでappを使用できます。


