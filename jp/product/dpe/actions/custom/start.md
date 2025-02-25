# イベント処理のアクションの作成

このページでは、**イベント処理を行うためのアクションを作成**するのに必要なステップ🚶について説明します。これは、ForePaaSプラットフォーム外部のデータを使用してData Processing Engineで定義されたアクションまたはワークフローをトリガーするのに適用できます。

---
## イベント処理テーブル

外部イベントでアクションを呼び出す場合は、イベント呼び出しをデータプラント内に参照用としてアーカイブすることが一般に推奨されます。このページでは、データモデル内の*event_handle*というサンプルテーブルを使用します。

* **テーブル名**：event_handle
* **テーブルの説明**：このテーブルには、イベントの内容を格納する4つの属性が含まれます。

|属性名 | タイプ| サンプル値|
|---------|----------|----------|
|**event_id** | 数値| 38123461|
|**event_name** | 文字列| Rebecca |
|**event_content** | 文字列| 店舗に入店|
|**date** | 日付| 2020-05-21 11:34:23 PM|

!> この例で使用されているテーブルやテーブルの属性の名前、および以下に示す（アクションや関数の）その他のオブジェクト名は、すべて**例**です。オブジェクト名には別の名前を指定することができますが、その場合はこの次にあるコードセクションのオブジェクト名を必要に応じて置き換えてください。

イベント処理を行うカスタムアクションを作成する場合、イベント処理テーブルを使用してトリガーされたすべてのイベントをアーカイブするこのセットアップは、一般的にベストプラクティスとして推奨されます。こうしたテーブルを作成するには、*Data Manager*コンポーネントに移動して、上記の表に示された内容に沿った属性を用いてテーブルを作成します。

{Data Managerでのデータモデルの作成}(#/jp/product/data-manager/organize.md)

---
## イベント処理アクションのセットアップ

カスタムアクションを作成するには、*Data Processing Engine*コンポーネントに移動し、新しいカスタムアクションを作成して、**アクション名**に*Event handle*と入力します。以下に記載されたPythonコードの例は、プラットフォーム外で（通常APIエンドポイントを介して）アクションがトリガーされた場合に、イベントのbodyを管理する方法を示しています。

カスタムアクションの設定で、**関数名**を*event_handle*に変更します（この関数名でどのPython関数が実行するmain関数であるかを指定します）。最後に、以下のコードサンプルをカスタムコードエディターにコピーして貼り付け💾ます。

```python
import logging
import pandas as pd
from datetime import datetime
from forepaas.worker.connector import bulk_insert
from forepaas.worker.connect import connect

logger = logging.getLogger(__name__)

def event_handle(event):
    logger.info(f"Start inserting event to data_prim/event_handle")
    logger.info(f"event_type = {event.type}, number of rows = {len(event.content)}")
    if type(event.content) is not list:
        raise Exception("When playing this action you need to send rows")

    # Create dataframe
    df = pd.DataFrame(event.content)
    df["date"] = datetime.now().strftime("%Y-%m-%d")

    # Connect to destination database and insert dataframe to table
    destination = connect("dwh/data_prim/")
    stats, error = bulk_insert(destination, "event_handle", df)

    logger.info(f"End insert of event: stats={stats}, error={error}")

```
> IDEに似たインターフェースの方が使いやすい場合は、ページの上部にある「*Advanced（詳細）*」モードをクリックすると、オンラインコードエディターに切り替わります。Pythonスクリプトでアクションの未処理（生）のソースコードを編集し、JSONファイルですべての設定を更新できるようになります。

---
## アクションおよびワークフローの起動

アクションが外部でトリガーされたときに受け取ったイベント情報を処理する方法に続いて、トリガーイベントをセットアップする方法を確認しましょう。この方法により、アクションやワークフローのジョブをプログラムで起動できるようになります。

### 必要なパラメータ

**ジョブを起動するのに必要なパラメータは3つ存在します。これらは、それぞれの環境設定に合わせて設定する必要があります**。これらのパラメータは、コードサンプルの中で{subdomain}のような波括弧{}付きで記載されています。

|パラメータ名 | 値 | 例|
---------|----------|----------
|subdomain | データプラントのサブドメイン | test |
|action_id | アクションの固有の参照 | 5eaf0db7f6f51d5255974217|
|token | 認証トークン | xxxxx|

#### データプラントのサブドメイン

データプラントのサブドメインを取得するには、データプラントのURLを参照します。例えば、DPEコンポーネントを開いた状態でURLをコピーして貼り付けた場合、URLは次のようになります。
```
https://{dataplant_subdomain}.forepaas.io/dpe/hq/#/
```
サブドメインは、**データプラントのURLのパスで最初に参照される部分**です。

#### アクションIDまたはワークフローID

開始するアクションのアクションIDを取得する場合、アクションの編集時にアクションのURL内でも確認できます。これを行うには、トリガーするアクションの「*edit（編集）*」をクリックします。URLは次のようになります。
```
# Action's URL
https://{dataplant_subdomain}.forepaas.io/dpe/hq/#/action/{action_id}

# Workflow's URL
https://{dataplant_subdomain}.forepaas.io/dpe/hq/#/workflow/{workflow_id}
```

#### 認証トークン

認証トークンを生成するには、最初に*Identity Access Manager*コンポーネントでAPIキーとシークレットキーを作成する必要があります。これを行う方法については、次のページを参照してください。

{APIキー／シークレットキーの作成}(#/jp/product/iam/users/api-secret-key.md)

### コードサンプル

<!-- tabs:start -->
#### **cURL**
```cURL
curl --request POST \
  --url 'https://{subdomain}.forepaas.io/dpe/v3/actions/{action_id}/start?app_id=55c1423560702d6426490f38&type=cam&token={token}' \
  --header 'content-type: application/json' \
  --data '[
	{
		"event_name": "Rebecca",
		"event_id": 1,
		"event_content": "imperdiet ornare."
	},
	{
		"event_name": "Veronica",
		"event_id": 2,
		"event_content": "Nullam ut nisi a odio"
	},
	{
		"event_name": "Aurelia",
		"event_id": 3,
		"event_content": "amet"
	},
	{
		"event_name": "Yardley",
		"event_id": 4,
		"event_content": "ornare placerat, orci lacus vestibulum"
	},
	{
		"event_name": "Dakota",
		"event_id": 5,
		"event_content": "nulla. Cras eu tellus eu"
	}
]'
```

#### **Python 3+**
```python
import requests

url = "https://{subdomain}.forepaas.io/dpe/v3/actions/{action_id}/start"
querystring = {
  "app_id":"55c1423560702d6426490f38",
  "type":"cam",
  "token":"{token}"
}
payload = [
  {
    "event_name": "Rebecca",
    "event_id": 1,
    "event_content": "imperdiet ornare."
  },
  {
    "event_name": "Veronica",
    "event_id": 2,
    "event_content": "Nullam ut nisi a odio"
  },
  {
    "event_name": "Aurelia",
    "event_id": 3,
    "event_content": "amet"
  },
  {
    "event_name": "Yardley",
    "event_id": 4,
    "event_content": "ornare placerat, orci lacus vestibulum"
  },
  {
    "event_name": "Dakota",
    "event_id": 5,
    "event_content": "nulla. Cras eu tellus eu"
  }
]

response = requests.request("POST", url, params=querystring, json=payload) 
print(response.text)
```
<!-- tabs:end -->

> **ワークフローとアクションは同じプロセスを使用して同じようにトリガーできます**。呼び出しの一部として送信されたデータを使用するには、ワークフローにイベント処理のアクションが含まれている必要があります。また、必ず**正しいワークフローのURLを使用**するようにします（アクションIDまたはワークフローIDのセクションを参照）。

---

このページはお役に立ちましたか。疑問点や改善提案がある場合は、弊社までご連絡ください。

{サポートに連絡する👌}(https://support.forepaas.com/)