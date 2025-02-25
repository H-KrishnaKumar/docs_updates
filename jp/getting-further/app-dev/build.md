# 外部コードを使用してバージョンの作成、デプロイ、管理を行う方法

ここでは、Reactアプリケーションをセットアップしてローカルで実行する方法について説明します。  

このガイドを終了すると、アプリケーションを**ローカル**で実行してForePaaSアプリケーションを編集し、アプリケーションをForePaaSのエコシステムに**接続**して、Gitリポジトリを使用して**デプロイ**できるようになります。

---

## 前提条件

始める前に以下を準備しておく必要があります。

- **ForePaaS API**を介して**データ**と**クエリ**を公開する必要があります。  
   まずこの[ガイド](https://docs.forepaas.io/#/jp/getting-started/app-init/index)の内容を完了しておくことをお勧めします。
- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/jp/)
- [yarn](https://yarnpkg.com/)（推奨）または[npm](https://www.npmjs.com/)
- **テキストエディター**。HTML、CSS、JavaScriptを記述します。

---

## アプリケーションのセットアップとForePaaSへの接続

### 既存のテンプレートを利用したアプリケーションの作成

この[リポジトリ](https://github.com/forepaas/getting-started/)を複製して開きます。

```bash
git clone https://github.com/forepaas/getting-started.git
cd getting-started/
```

release/basicブランチに切り替えます。

```bash
git checkout release/basic
```

ノードモジュールをインストールします。

```bash
yarn
```

npxをインストールします（すでにグローバルにインストール済みの場合はこのステップを省略します）。

```bash
yarn global add npx
```

ForePaaSのモジュールをインストールします（最初に[npx](https://www.npmjs.com/package/npx)をインストールしておく必要があります）。

```bash
yarn fppm
```

アプリケーションを実行します。

```bash
yarn start
```

> [localhost:3333](localhost:3333)を開きます。アプリケーションが実行されています。

### ForePaaSプラットフォームへのGitリポジトリの接続（省略可能）

ForePaaSプラットフォームにGitリポジトリを接続する場合は、この[ガイド](/jp/product/app-manager/settings/git-integration)の手順に従ってください。

> アプリケーションを作成および起動する方法について理解できたら、次にアプリケーションアーキテクチャについて学習します。

{アプリケーションアーキテクチャと構成ファイルについて}(/#/jp/getting-further/app-dev/config.md)
