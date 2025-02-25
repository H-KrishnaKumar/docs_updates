# 最初のAPIのデプロイ

このチュートリアルでは、ForePaaSストアからAPIをデプロイする方法について学習します。
![Dataplant home](picts/api_home.png)
データプラントのメインページで、「APIの作成」を選択します。

![Dataplant home](picts/api_store.PNG)
次の2つの選択肢があります。
* __ストアから作成__：ストアから新規プロジェクトを作成
* __インポート__：既存のプロジェクトをインポート

{マーケットプレイスの詳細を確認する}(#/jp/product/dataplant/marketplace)

![Dataplant home](picts/api_store2.PNG)
さまざまなテーマのAPIが利用できます。このデモでは、「API NodeJS」を選択します。

![Dataplant home](picts/api_settings.PNG)
APIの名前を指定し、自動ビルドを有効にします。 

![Dataplant home](picts/api_creation.PNG)
APIの作成には少し時間がかかります。

![Dataplant home](picts/api_created.PNG)
バックアップとAPIのアップロードが完了したら、この場所で待機するか、「Go to application（アプリケーションに移動）」をクリックしてデプロイをモニタリングできます。

![Dataplant home](picts/api_building1.PNG)
APIコンポーネントのホームページに移動します。
APIコンポーネントのホームページは、次の3つの部分に分かれています。
* __Monitoring（モニタリング）__：デプロイ後のAPIのステータス
* __Active（アクティブ）__：「アクティブ」バージョン（現在作業中のバージョン）のステータス
* __Versions（バージョン）__：APIで利用可能なすべてのバージョン（タグともいう）のリスト

![Dataplant home](picts/api_building.PNG)
右側にある矢印を使用して、作成したバージョンの詳細を確認できます。

![Dataplant home](picts/api_buildinglogs.PNG)
「Open Console（コンソールを開く）」をクリックして、アクティビティログを確認します。APIの作成時に自動ビルドを有効にしているため、すでにビルドが開始されています。 

![Dataplant home](picts/api_logs.PNG)
完了すると、ログの最後に「EndBuild success」と表示されます。

![Dataplant home](picts/api_dpl.PNG)
デプロイを開始するには、「Deploy（デプロイ）」をクリックしてださい。

![Dataplant home](picts/api_deploying.PNG)
デプロイが開始されます。これには数分かかります。

![Dataplant home](picts/api_deployed.PNG)
デプロイが完了すると、「Open（開く）」ボタンが表示されます。

![Dataplant home](picts/open.png)
APIを開くと、この画面が表示されます。

APIにアクセスするには、アプリケーションをインストールしてAPIに接続します。APIのエンドポイントをそのまま使用することもできます。