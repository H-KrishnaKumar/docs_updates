# APIリファレンス：IAM

IAMのURLは、常に次のようになります。
```
https://`%dataplant_url%/cam
```

## 応答形式
使用されるデータ形式は[JSON](http://www.json.org)で、文字コードはUTF-8です。  
空でない応答は次のヘッダー付きで送信されます：
Content-Type: application/json; charset=utf-8


## HTTP応答コード
||||
| :------------ | :-------------: | -------------: |
200 | OK | 成功したGETまたはPOST要求に対するデフォルトの応答で、コンテンツが空でない場合
400 | 無効な要求 | GETまたはPOSTパラメータの値が無効
401 | 権限なし | 資格情報または権限が無効
403 | 禁止 | 認証エラー
500 | 内部サーバーエラー | サーバー側のエラーが発生


## エラーの管理
クライアント側のエラー（HTTPステータスコード400番台）またはサーバー側のエラー（HTTPステータスコード500番台）が発生した場合は、応答の本文にエラーを示すJSONオブジェクトを含めることができます。

```json
{
  "error": "Unauthorized",
  "success": false,
  "status": 401,
  "duration": 0
}
```

## トークンベースの認証
APIではトークンベースの認証プロセスを使用します。トークンはログインステップの後に取得し、他のすべてのAPI呼び出しに対して送付する必要があります。
トークンの有効期限は任意のタイミングで設定できます。この場合、新規ログインで新しいトークンを生成する必要があります。
- 1時間使用されなかったトークンは期限切れとして拒否（IAMで設定可能）
- 作成後1日で自動的に期限切れとなるトークン


## ログインエンドポイント
### ForePaaS ID
この認証モードでは、IAMに保存されたログイン／パスワードで接続できます。
///

要求の例：

```
curl -X POST \
  https://mydataplant.forepaas.io/cam/login \
  -H 'Content-Type: application/json' \
  -d '{
	"login":"LOGIN",
	"password":"****",
	"app_id":"APPID",
	"auth_mode":"forepaas_id_resource_owner"
}'
```
:::
応答の例：

```json
{
"uid": "John Doe", // The unique id of the logged-in user
"user": "M. John Doe", // The full name of the logged-in user
"firstname": "John", // The first name of the logged-in user
"lastname": "Doe", // The last name of the logged-in user
"civility": "M. ", // The civility of the logged-in user
"login": "john.doe", // The login of the logged-in user
"password_renew": false, // flag to know if the has to change his password "password_expiration": "2020-02-28T17:17:10.274Z ", // password expiration
date
"token": "f54e34a56b897"
}
```
///

設定：

||||
| :------------ | :-------------: | -------------: |
| login | 文字列 | ユーザーのログイン（登録電子メールで受信） |
| password | 文字列 | ユーザーのパスワード（登録電子メールで受信） |
| app_id | 文字列 | アプリケーションID |
| auth_mode | 文字列 | 使用する認証モード。この値は必ず「forepaas_id_resource_owner」に設定 |


### APIキー資格情報
サードパーティのアプリケーションは、データにアクセスするためのAPIキーとシークレットキーを取得します。
こうしたAPIキーは、ユーザーの編集メニューで生成します。
その後、従来のログインと同様、それらを使用してトークンを取得します。

///

要求の例：

```
curl -X POST \
  https://mydataplant.forepaas.io/cam/login \
  -H 'Content-Type: application/json' \
  -d '{
	"apikey":"APIKEY",
	"secretkey":"****",
	"app_id":"APPID",
	"auth_mode":"apikey"
}'
```
:::
応答の例：

```json
{
"uid": "John Doe", // The unique id of the logged-in user
"user": "M. John Doe", // The full name of the logged-in user
"firstname": "John", // The first name of the logged-in user
"lastname": "Doe", // The last name of the logged-in user
"civility": "M. ", // The civility of the logged-in user
"login": "john.doe", // The login of the logged-in user
"password_renew": false, // flag to know if the has to change his password "password_expiration": "2020-02-28T17:17:10.274Z ", // password expiration
date
"token": "f54e34a56b897"
}
```
///

||||
| :------------ | :-------------: | -------------: |
| apikey | 文字列 [A-Za-z0- 9\-] | 新しいデバイス登録によって提供されるAPIキー |
| secretkey | 文字列 [A-Za-z0- 9\-] | 新しいデバイス登録によって提供されるシークレットキー |
| app_id | 文字列 | アプリケーションID |
| auth_mode | 文字列 | 使用する認証モード。この値は必ず「apikey」に設定 |
 

## ログアウト
トークンを削除するには、ログアウトエンドポイントを呼び出します。

///

要求の例：

```
curl -X DELETE \
  https://mydataplant.forepaas.io/cam/logout?app_id=*****&token=***** \
  -H 'Content-Type: application/json'
```
:::
応答の例：

```json
{
  "success": true,
  "status": 200,
  "duration": 0.02
}

```
///


## 基本設定
このエンドポイントを呼び出すと、アプリケーションの構成情報を取得できます。 

///

要求の例：

```
curl -X GET \
  https://mydataplant.forepaas.io/cam/application/preferences?app_id=***** \
  -H 'Content-Type: application/json'
```
:::
応答の例：

```json
{
  "appid": "1234", // The unique id of the application
  "name": "My Application", // The name of the application
  "version": "2.5.1", // The version of the application
  "url": "https://my-app.forepaas.io", // The url of the application,
  "logo": "data:image/png:base64,...",// The base64 encoded application logo
  "password_policies": { // Password policies for password renew
    "active": true, // Password policies active or not
    "nb_cchar": "1", // number of capital characters
    "nb_char ": "6", // number of characters
    "nb_int": "1", // number of integer
    "nb_schar": "0", // number of special characters
    "password_expire": "180" // number of day for password validity
  },
  "auth_mode": {[ // Array of available authentication mode
    "_id": "1234", // the auth_mode_id
    "name": "ForePaaS ", // the auth_mode
    "provider": "forepaas", // the provider
    "subtype": "forepaas_id_resource_owner",
    "color": "#fff", // color for the text button
    "icon": "...", // icon of the button (base64 encoded)
    "text": "Sign in with ForePaaS ID", // text of the button
    "type": "password " // text of the button
  ]}
}
```
///


