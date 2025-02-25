# ストレージエンジンの管理

ストレージエンジンには、データプラントの**データを「物理的」に保管**する役割があります。ストレージエンジンは、データの読み取りや書き込みを行う際に、データプラントのモジュール（[Data Manager](/jp/product/data-manager/index)や[Data Processing Engine](/jp/product/dpe/index)など）がやり取りを行う技術的な仕組みです。

すべてのデータプラントは、少なくとも1つのストレージエンジンにリンクされています。同じデータプラントで複数のストレージエンジンを使用することが可能であり、Data Managerで[データベースレベルごとに](/jp/product/query-builder/dataset)異なるストレージエンジンをリンクできます。また、複数のデータプラントで同じストレージエンジンを使用することもできます。ストレージエンジンは、データプラントを管理するのと同様に、[組織の設定](/jp/product/account-setup/organization-settings)メニューで管理できます。

> ストレージエンジンの管理（作成、データプラントへのリンク、削除）を行うには、**ストレージエンジンの権限**が必要です。これらの権限は、[組織の設定](/jp/product/account-setup/organization-invite-user?id=access-control-acl-rules)でユーザーレベルで設定します。ユーザーにストレージエンジンに対する権限がない場合でも、ユーザーはデータプラント内でストレージエンジンを使用し、ストレージエンジン内のデータにアクセスできます。制限されるのはエンジンの管理だけです。

![se](/picts/storage-engine-menu.png)

ストレージエンジンは、稼働する際に[FPU](/jp/product/billing/resources/index)（ForePaaS Unit）を消費します。ストレージエンジンのサイズ（FPU単位）は、[作成](jp/product/dataplant/storage-engine/index.md?id=create-a-storage-engine)する際に選択できます。また、その後いつでも[編集](jp/product/dataplant/storage-engine/index.md?id=edit-a-storage-engine)することが可能です。

* [ストレージエンジンの作成](jp/product/dataplant/storage-engine/index.md?id=create-a-storage-engine)
* [ストレージエンジンのデータプラントへのリンク](jp/product/dataplant/storage-engine/index.md?id=link-a-storage-engine-to-a-dataplant)
* [ストレージエンジンの編集](jp/product/dataplant/storage-engine/index.md?id=edit-a-storage-engine)

---
## ストレージエンジンの作成
新しいストレージエンジンは、****[**組織の設定**](/jp/product/account-setup/organization-settings)で作成するか、****[**新しいデータプラントの作成時**](/jp/product/dataplant/create-dataplant)に作成できます。

いずれの場合も、以下の内容を指定する必要があります。

#### エンジンのタイプの選択

ForePaaSプラットフォームでは、2つのエンジンから選択できます。

* **PostgreSQL**:[PostgreSQL](https://www.postgresql.org/)は、主要なビジネスアプリケーションやモバイルアプリケーションに利用されているオープンソースのリレーショナルデータベースです。PostgreSQLは、コストパフォーマンスに優れた購入しやすい価格のデータウェアハウス・ソリューションとしても高い人気があります。現在、PostgreSQLは、*Google Cloud Platform*、*Microsoft Azure*、および*Amazon Web Services*のみで利用できます。
* **Snowflake**:[Snowflake](https://www.snowflake.com/)は、クラウドベースのデータストレージおよび分析サービスです。Snowflakeはクラウド向けに設計されたアーキテクチャで、クラウドのスケーラビリティとパフォーマンスを最大限に活用できます。現在、Snowflakeは、*Google Cloud Platform*のみで利用できます。

![se](/picts/choose-type.png)

#### クラウドプロバイダーとリージョンの選択

次の中からストレージエンジンのクラウドプロバイダーと場所を選択できます。
- *Google Cloud Platform*：SnowflakeおよびPostgreSQLが利用可能
- *Microsoft Azure*：PostgreSQLが利用可能
- *Amazon Web Services*：PostgreSQLが利用可能

![se](/picts/choose-provider.png)

!> ストレージエンジンには、データプラント用に選択したのと同じクラウドプロバイダーと場所を使用することをお勧めします。ストレージエンジンが別のリージョンやクラウドプロバイダーに存在する場合、パブリックネットワーク上で暗号化された通信が行われることになります。

#### ストレージエンジンのサイズの選択

ストレージエンジンは、稼働する際に[FPU](/jp/product/billing/resources/index)（ForePaaS Unit）を消費します。ストレージエンジンのサイズ（FPU単位）を選択することができ、このサイズによってデータベースでのデータの読み取りや書き込みに割り当てられる処理能力が決まります。 

PostgreSQLの場合、選択可能な最小サイズは2 FPU（*Google Cloud Platform*）または4 FPU（*Microsoft Azure*および*Amazon Web Services*）です。Snowflakeの場合、選択可能な最小サイズは16 FPU（*Google Cloud Platform*）です。

![se](/picts/choose-size.png)


#### デフォルト構成の指定

[Data Manager](/jp/product/data-manager/index)には、複数の[データベースレベル](/jp/product/query-builder/dataset)（Primテーブル、Martテーブル、MLテーブル）が存在します。これらのデータベースレベルごとに、異なるストレージエンジンを選択できます。ForePaaSでは、**デフォルト構成**を指定できます。デフォルト構成を使用すると、特定のストレージエンジンの設定を使用して新しいデータプラントを素早く作成できます。新しいストレージエンジンを作成する際には、作成するストレージエンジンをいずれかのデータベースレベルのデフォルトとして設定できます。

![se](/picts/choose-default-config.png)

その後、デフォルト構成はストレージエンジンのメインページで管理できます。

![se](/picts/manage-default-config.png)

> 新しいストレージエンジンの作成には、利用可能なハードウェアに応じて5～10分程度かかります。ストレージエンジンをデータプラントにリンクする際には、前もってストレージエンジンが正しく作成され、アクティブ✅になっていることを確認してください。

---
## ストレージエンジンのデータプラントへのリンク
新しいデータプラントを作成する際には、使用するストレージエンジンを選択する必要があります。 

#### サンドボックス

各データプラントでは、無償の**サンドボックス**インスタンスが利用できます。サンドボックスは、お使いのデータプラントのデータセンター内にあるストレージエンジンで、このデータセンターの他のユーザーと共有します。ここでの共有とは、パフォーマンスを共有するという意味であり、データは常に保護されています。

!> サンドボックスインスタンスは、概念実証（POC）、開発、またはテスト用です。パフォーマンスが安定しない場合があるため、運用環境での使用には対応していません。

?> 現在、サンドボックスは[Snowflake](https://www.snowflake.com/)テクノロジーに基づいています。このため、サンドボックスのストレージエンジンを使用する場合は、データプラント内で使用するSQL式がSnowflakeに準拠している必要があります。

#### 専用のストレージエンジン

無償のサンドボックスインスタンスの代わりに、組織内で**すでに所有しているストレージエンジンを選択**するか、**新しいストレージエンジンを作成**することができます。データプラントでは任意のストレージエンジンを使用できますが、ストレージエンジンが別のリージョンやクラウドプロバイダーに存在する場合、パブリックネットワーク上で暗号化された通信が行われることになります。

[データベースレベルごと](/jp/product/query-builder/dataset)（Primテーブル、Martテーブル、MLテーブルなど）に異なるストレージエンジンをリンクする場合は、適切に構成された「*Default（デフォルト）*」オプションを使用できます。このデフォルト構成は、組織の設定で編集できます。 

![se](/picts/dp-default-config.png)

!> データプラントの作成後に、データプラントのストレージエンジンを変更することはできません。弊社のエンジニアリングチームはこの機能の早期実現に向けて取り組んでいます。

---
## ストレージエンジンの編集
ストレージエンジンの特性は、ストレージエンジンの**ペン**🖊️アイコンをクリックして、[組織の設定](/jp/product/account-setup/organization-settings)で編集することができます。

![se](/picts/edit-storage.png)

ストレージエンジンの**名前、説明、タグ、****サイズ**を編集できます。

![se](/picts/edit-storage2.png)

---
##  サポートが必要な場合🆘

データプラントやストレージエンジンについてのサポートが必要な場合は、プラットフォームの「*Support（サポート）*」タブから直接依頼を送信することができます。また、support@forepaas.com宛にメールを送付することもできます。