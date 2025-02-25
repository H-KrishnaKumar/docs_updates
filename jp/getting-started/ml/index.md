# ForePaaSでのAIモデルの新規作成

人工知能（AI）を利用してビジネス上の判断を適切に行う方法や、保有しているデータをインテリジェントに活用することに関心をお持ちの方には、このチュートリアルが役立ちます。 

このチュートリアルでは、Machine Learning Managerの基本事項について学習し、最初の機械学習モデルの作成、トレーニング、デプロイを**30分程度**で行います。

⛳️このチュートリアルの目標は、ForePaaS上で機械学習がどのように動作するのかを理解し、AIの速やかな導入を導くことです。 

📥このチュートリアルで使用するデータやモデルはあらかじめ用意されているため、すぐに学習を始めることができます。 

?> ForePaaSを初めて利用する方は、入門編ガイドの最初の2つのパートを参照し、[Data Manager](jp/getting-started/app-init/data-manager)と[Data Processing Engine](jp/getting-started/app-init/dpe)の仕組みを理解しておくことをお勧めします。

---

## AIを導入するための5つのステップ

一般に、機械学習モデルの作成とデプロイは、次の5つの主要なステップに沿って行われます。

<div class="project-step">
   <div class="step">1</div>
   <a class="landing-link" href="#/jp/getting-started/ml/dataset.md">
      <img data-no-zoom src="en/product/ml/picts/dataset-icon.png" alt="Dataset" style="width:100px;height:auto;"/>
      <div class="text">
         <h2>データの準備</h2>
         <p>学習用およびテスト用のデータセットを指定します。</p>
      </div>
   </a>
</div>
<div class="project-step">
   <div class="step">2</div>
   <a class="landing-link" href="#/jp/getting-started/ml/training.md">
      <img data-no-zoom src="en/product/ml/picts/training-icon.png" alt="Training" style="width:100px;height:auto;"/>
      <div class="text">
         <h2>学習プロシージャ</h2>
         <p>モデルの核となるアルゴリズムを選択します。</p>
      </div>
   </a>
</div>
<div class="project-step">
   <div class="step">3</div>
   <a class="landing-link" href="#/jp/getting-started/ml/tuning.md">
      <img data-no-zoom src="en/product/ml/picts/tuning-icon.png" alt="Tuning" style="width:100px;height:auto;"/>
      <div class="text">
         <h2>ハイパーパラメータの調整</h2>
         <p>優れた調整機能を利用して推定器のハイパーパラメータを微調整します。</p>
      </div>
   </a>
</div>
<div class="project-step">
   <div class="step">4</div>
   <a class="landing-link" href="#/jp/getting-started/ml/validation.md">
      <img data-no-zoom src="en/product/ml/picts/validation-icon.png" alt="Validation" style="width:100px;height:auto;"/>
      <div class="text">
         <h2>モデルの選択</h2>
         <p>学習済みモデルを比較してニーズに適したモデルを選択します。</p>
      </div>
   </a>
</div>
<div class="project-step">
   <div class="step">5</div>
   <a class="landing-link" href="#/jp/getting-started/ml/deployment.md">
      <img data-no-zoom src="en/product/ml/picts/deployment-icon.png" alt="Deployment" style="width:100px;height:auto;"/>
      <div class="text">
         <h2>デプロイの設定</h2>
         <p>実運用に対応した推論サービスの設定を指定します。</p>
      </div>
   </a>
</div>

?>💡 **グッドニュース！**   
ForePaaSプラットフォームのすべての機能について言えることですが、Machine Learning Managerでは、構成、デプロイ、拡張などで可能な限りの自動化が図られています。このため、ユーザーは周辺環境の運用に時間をとられることなく、AIモデルのロジックに専念できます。 
