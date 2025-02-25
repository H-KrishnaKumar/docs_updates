# Data Processing EngineのSDK 

ForePaaSでは、Python SDKを利用してプラットフォームのコンポーネントやサービスを操作できます。 

このSDKは、[データラボ](/jp/product/data-lab/index)とDPEの[カスタムアクション](/jp/product/dpe/actions/custom/index)の両方のコンテキストで使用できます。

---
## 1. SDKについて 

次の3つのシンプルなユースケースを使用して、SDKのモジュールと関数について説明します。 

* [A. Data Managerの使用](/jp/technical/sdk/dpe/1A.dwh-crud)  
Data Managerのテーブルからデータを抽出し、データを変換して別のテーブルに追加し直す必要があります。 
* [B. データストアの使用](/jp/technical/sdk/dpe/1B.datastore-crud)  
特定のファイル形式からデータを抽出し、データを線形化して、Data Managerのテーブルにデータをロードする必要があります。
* [C. リモートストレージの使用](/jp/technical/sdk/dpe/1C.source-get)  
離れた場所のサーバーからデータプラントのデータストアにファイルを取得する必要があります。

---
## 2. 接続モジュールについて

`connect`モジュールは、ほとんどの場合、データプラントを操作するための主要なエントリポイントです。  
返されるオブジェクトは、使用中の`source`のタイプと場所に左右されます。

### A. Data Managerのテーブル

```python
from forepaas.worker.connect import connect

prim = connect("dwh/data_prim/")```
{More on Data Manager's connector}(#/jp/technical/sdk/dpe/2A.connect-dwh)_

### B. データストア

```python 
datastore = connect("data_store")
bucket = connect("data_store/bucket_name")
```
{データストアのコネクターの詳細}(#/jp/technical/sdk/dpe/2B.connect-datastore)_


### C. ソースプロトコル（ファイルサーバー）

```python 
my_sftp = connect("dwh/source_mysftp/")```
{Protocols Technical Documentation}(https://forepaas-sdk.readthedocs.io/jp/latest/packages/protocol.html)_

---
## 3. Advanced use cases

Feeling confident 💪? Here are a few more specific use cases: 

* [A. Custom parameters](/jp/technical/sdk/dpe/3A.parameter)
* [B. Segmentation and perimeter usage](/jp/technical/sdk/dpe/3B.segmentation)
* [C. Override load action](/jp/technical/sdk/dpe/3C.load-override)
* [D. Using custom Python modules](/jp/technical/sdk/dpe/3D.git)

---
## 4. Technical documentation 

You may also check out the [Technical Documentation](https://forepaas-sdk.readthedocs.io/jp/latest/) for a complete technical description of the SDK.
* [Connect](https://forepaas-sdk.readthedocs.io/jp/latest/packages/connect.html)
* [Data Store](https://forepaas-sdk.readthedocs.io/jp/latest/packages/datastore.html)
* [Protocols](https://forepaas-sdk.readthedocs.io/jp/latest/packages/protocol.html)

---
## Need help? 🆘

At any step of the way, **don't hesitate to ask for support by sending us a request**. You can access our support portal directly from the platform by clicking on the top right menu bar on the question mark ❓icon and then choosing *Support*. You can also send us an email on support@forepaas.com.

{Send your questions to support 🤔}(https://support.forepaas.com/hc/en-us/requests)

