# ForePaaSデータストアからのアップロードとダウンロード

弊社のデータストアは、**AWS S3**クライアントと完全な互換性があります。
これを操作するには、**ForePaaS Directory**のアカウントで、[Identity Access ManagerでAPIキーとシークレットキーを生成](/jp/product/iam/users/api-secret-key)する必要があります。

* [AWS CLIの使用](/jp/technical/api-reference/datastore/index?id=using-aws-cli)
* [Rcloneの使用](/jp/technical/api-reference/datastore/index?id=using-rclone)
* [NodeJSの使用](/jp/technical/api-reference/datastore/index?id=using-nodejs)
* [Pythonの使用](/jp/technical/api-reference/datastore/index?id=using-python)

---
## AWS CLIの使用

1. https://aws.amazon.com/cli/でAWS CLIクライアントをインストールします。
1. AWS CLIを設定します。[名前付きプロファイル](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html)を使用することをお勧めします。
```bash
$ aws configure --profile mydataplant
AWS Access Key ID [None]: your_access_key
AWS Secret Access Key [None]: your_secret_key
Default region name [None]: forepaas
Default output format [None]:
```
1. MinIOサーバーに対して*AWS Signature Version 4*を有効にします。
```bash
aws configure set s3.signature_version s3v4 --profile mydataplant
```
1. コマンド例： 

```bash
# list your buckets
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 ls

# list contents inside bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 ls s3://mybucket

# make a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 mb s3://mybucket

# add an object to a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 cp my-file.csv s3://mybucket

# delete an object from a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 rm s3://mybucket/my-file.csv

# remove a bucket
aws --profile mydataplant --endpoint-url https://my-dataplant.forepaas.io/datastore s3 rb s3://mybucket

```

> 名前付きプロファイル内のエントリポイントURLを管理するには、[プロファイルごとのエントリポイントURLの設定](https://github.com/wbingli/awscli-plugin-endpoint)のドキュメントページを参照します。

---
## Rcloneの使用

1. https://rclone.org/downloads/で[rclone](https://rclone.org/)をインストールします。
1. rcloneを設定します（`my-dataplant`を[データプラントのサブドメイン](/jp/product/dataplant/config-ids?id=dataplant-subdomain)に置き換えます）。
```bash
rclone config create my-dataplant s3 provider Minio region forepaas env_auth false
rclone config update my-dataplant endpoint https://my-dataplant.forepaas.io/datastore
rclone config update my-dataplant access_key_id YOUR_ACCESS_KEY
rclone config update my-dataplant secret_access_key YOUR_SECRET_KEY
```
1. 必要に応じて、rcloneの構成ファイルの場所を確認します。
```bash
rclone config file
```
1. 設定を確認します。
```bash
rclone config show my-dataplant
[my-dataplant]
type = s3
provider = Minio
region = forepaas
env_auth = false
endpoint = https://my-datplant.forepaas.io/datastore
access_key_id = YOUR_ACCESS_KEY
secret_access_key = YOUR_SECRET_KEY
```
1. 簡単なコマンド例（詳細については、rcloneのドキュメントを参照してください）

```bash
# listing buckets
rclone lsd my-dataplant:

# create a bucket
rclone mkdir my-dataplant:test-rclone

# generate a local docs for test purpuse
rclone gendocs docs

# copy ./docs/ to test-rclone
rclone copy docs my-dataplant:test-rclone/docs
# what is the size of a bucket or a path ?
rclone size my-dataplant:test-rclone
Total objects: 69
Total size: 239.570 kBytes (245320 Bytes)

# displays a tree
rclone tree my-dataplant:test-rclone
# move files in bucket
rclone move my-dataplant:test-rclone/docs/commands my-dataplant:test-rclone/commands

# syncing source to destination
rclone sync --dry-run docs my-dataplant:test-rclone/docs

# listing files in a human redable way
rclone lsl my-dataplant:test-rclone
# listing files with format options
rclone lsf  --format "tsp" --recursive my-dataplant:test-rclone

# deleting files greater than 1k
rclone --min-size 1k lsl my-dataplant:test-rclone/commands
rclone --dry-run --min-size 1k delete my-dataplant:test-rclone/commands
rclone --min-size 1k delete my-dataplant:test-rclone/commands
# copy files in ./commands
rclone copy my-dataplant:test-rclone/commands commands
# delete an entire path
rclone delete my-dataplant:test-rclone/commands/
```




---
## NodeJSの使用

```sh
# Add aws-sdk to your application with the following command
yarn add aws-sdk
# Or
npm i -s aws-sdk
```
```js
const AWS = require('aws-sdk')
const fs = require('fs')

// Modify those values for your environment
let accessKey = '[ACCESS_KEY]'
let secretKey = '[SECRET_KEY]'
let endpoint = 'https://[DATAPLANT_NAME].forepaas.io'
let bucket = '[BUCKET_NAME]'
let region = 'forepaas'

// Constructs a service object. This object has one method for each API operation.
const dataStoreClient = new AWS.S3({
  accessKeyId: accessKey,
  secretAccessKey: secretKey,
  endpoint: `${endpoint}/datastore`,
  region: region,
  signatureVersion: 'v4',
  s3ForcePathStyle: true
})


////////////////////////////////
// Adds an object to a bucket //
////////////////////////////////
let uploadStream = fs.createReadStream('./file.csv')
dataStoreClient.putObject({
  Bucket: bucket,
  Key: 'file.csv',
  Body: uploadStream
}, (err) => {
  if (err) console.error(err)
  else console.info('File uploaded')
})


/////////////////////////////////////
// Retrieves objects from a bucket //
/////////////////////////////////////
let downloadStream = fs.createWriteStream('./file_downloaded.csv')
dataStoreClient.getObject({
    Bucket: bucket,
    Key: 'file.csv'
  })
  .createReadStream()
  .on('error', (err) => {
    console.error(err)
  })
  .pipe(downloadStream)
  .on('close', () => {
    console.info('File downloaded')
  })


/////////////////////////////////////
// Returns some or all (up to 1000) of the objects in a bucket.
/////////////////////////////////////
dataStoreClient.listObjects({
  Bucket: bucket
}, (err, data) => {
  if (data && data.Contents) {
    data.Contents.forEach(file => {
      console.info(`${file.Key} (${file.Size} bytes)`)
    })
  }
})
```


---
## Pythonの使用


```sh
# Install boto3 with the following command:
pip install boto3
```

```python
import boto3
from botocore.client import Config

# Modify those values for your environment
dataplant_url = 'https://[DATAPLANT_NAME].forepaas.io'
access_key = '[ACCESS_KEY]'
secret_key = '[SECRET_KEY]'
bucket = '[BUCKET_NAME]'
region = 'forepaas'

# Constructs a service object. This object has one method for each API operation.
datastore = boto3.client(
  's3',
  endpoint_url='{dataplant}/datastore'.format(dataplant=dataplant_url),
  aws_access_key_id=access_key,
  aws_secret_access_key=secret_key,
  config=Config(signature_version='s3v4'),
  region_name=region
)

# Adds an object to a bucket
datastore.upload_file(
  Bucket=bucket,
  Filename='./file.csv',
  Key='file.csv')

# Retrieves objects from a bucket
datastore.download_file(
  Bucket=bucket,
  Filename='./file_downloaded.csv',
  Key='file.csv')

# Returns some or all (up to 1000) of the objects in a bucket.
# You can use the request parameters as selection criteria to return a subset of the objects in a bucket.
if datastore.list_objects(Bucket=bucket):
  for file in datastore.list_objects(Bucket=bucket)['Contents']:
    print('{name} ({size} bytes)'.format(name=file['Key'], size=file['Size']))
```