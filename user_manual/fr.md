# Doc du Gestionnaire de Docs
 
Bonjour, si vous arrivez sur cette page, c'est que vous vous êtes porté volontaire pour la saisie de la documentation. Donc tout d'abord un grand bravo et merci ! L'objectif de cette page est de vous donner tous les éléments nécessaires pour que vous soyez le plus efficace.

* [Outillage](manuel_utilisation?id=outillage) : tout ce dont vous aurez besoin avant de commencer
* [Le format d'écriture](manuel_utilisation?id=langage-mark-down) : la manière de saisir la documentation
* [Conventions](manuel_utilisation?id=conventions) : rappel des conventions d'écriture et bonnes pratiques 

---
 
## Outillage

Pour refaire les captures d'écran, le plus simple est d'utiliser l'outil de capture par défaut Windows ("outil de capture d'écran" dans les applications) et MacOS (raccourci clavier : CMD + SHIFT + 4)

Quelques consignes :
* Enregistrer les éléments en PNG
* Les uploader dans un sous-répertoire "picts" à l'intérieur de chaque répertoire
* Règles de nommage : utiliser des noms signifiants, avec des -, pour qu'on s'y retrouve. Ex : etl-btn-workflow.png

## Langage Mark Down
Pour écrire le contenu, le système de documentation utilise une syntaxe de type "Mark Down" (MD) qui permet d'obtenir simplement des styles sans coder du HTML.

Voici les principaux éléments à connaître.
### URL

Les URLs de base, à partir desquelles sont construites les arborescences sont : 
*  Editeur : https://hq-dev-docs.forepaas.io/editor/#/
*  Visualisation : https://hq-dev-docs.forepaas.io/v1/files/index.html#/

Correspondances entre éditeur et visualisation

|  Page  |  éditeur  |  Visualisation  |
| - |  |  |
| manuel_utilisation | https://hq-dev-docs.forepaas.io/editor/#/manuel_utilisation.md | https://hq-dev-docs.forepaas.io/v1/files/index.html#/manuel_utilisation |
| test/test| https://hq-dev-docs.forepaas.io/editor/#/test/test.md | https://hq-dev-docs.forepaas.io/v1/files/index.html#/test/test |
 
### Titres
Les titres sont obtenus en mettant des # et un espace en début de ligne

```
# Titre 1
## Titre 2
### Titre 3
#### Titre 4
```

### Mise en forme

Mise en forme de *texte italique*  
Mise en forme de **texte gras**  
Mise en forme de ```code : utiliser les apostrophes inversées ALT GR + 7```  

```
Mise en forme de *texte italique*
Mise en forme de **texte gras**  
Mise en forme de ```code : trois apostrophes inversées ALT GR + 7```

Comme en HTML, les retours à la ligne dans le code source ne produisent pas de retour à la ligne dans la restitution.


* 2 espaces en fin de ligne pour provoquer un retour à la ligne simple (```<br />```)  
* 2 retours à la ligne successifs pour créer un saut de paragraphe (```<p>```)


Faire des listes / Sous-listes avec des * et des indentations :  
* Élément
* Élément
    * Sous élément avec au moins quatre espaces devant.

```
* Élément
* Élément
    * Sous élément avec au moins quatre espaces devant.
```


### Tableaux


| Titre 1       |     Titre 2     |        Titre 3 |
| :------------ | :-------------: | -------------: |
| Colonne       |     Colonne     |        Colonne |
| Alignée à     |   Alignée au    |      Alignée à |
| Gauche        |     Centre      |         Droite |

```
| Titre 1       |     Titre 2     |        Titre 3 |
| :------------ | :-------------: | -------------: |
| Colonne       |     Colonne     |        Colonne |
| Alignée à     |   Alignée au    |      Alignée à |
| Gauche        |     Centre      |         Droite |
```
Attention : il faut la deuxième ligne avec au moins un '-' pour que l'outil crée le tableau

### Code

Entourer le code de trois apostrophes inversées (PC : ALTGR+7 ; Mac : ALT+^)


```js
window.$docsify = {
  maxLevel: 4
};
```
```html
<div>test</div>
```

Le code peut être sur une seule ligne ou tout un bloc

`Exemple de code`

\`Exemple de code`


### Pages, images et liens

Créer une page ou une image : bouton "New" en haut à droite, saisir le nom avec chemin depuis la racine de la documentation, **sans le / du début, et en incluant l'extension** (md pour les pages, gif, jpeg ou jpg pour les images). Tout en minuscules

Par exemple : 
* Pour cette page : "manuel_utilisation.md" (page, à la racine)
* Cas générique : "repertoire/sous-repertoire/index.md"

Même chose pour la création d'une image. Il faut d'abord créer la "page" (ex : picts/mon-image.png), puis l'éditer en uploadant l'image 


Pour créer un lien vers une page 
```
[Texte du lien](url de la page)
```  

L'URL commence à la racine de la documentation, et ne contient **que le nom du fichier sans l'extension**  

Par exemple :  
[Description API](description-api/index)  
```
[Description API](description-api/index)
```

Il est possible de faire un lien directement vers une balise de titre à l'intérieur d'une page en ajoutant id=[le nom du titre, en minuscules, espaces remplacés par des - ]  

Exemple : [Lien vers le paragraphe Tableaux](/manuel_utilisation?id=tableaux)
  
```
[Tableaux](/manuel_utilisation?id=tableaux)
```  

Insérer une image  ```![Texte Alternatif](url de l'image)```  
L'URL commence à la racine de la documentation, et **contient l'extension**  

Exemple :  
![Alt](picts/logo_forepaas_small.png ':size=80%')
```
![Alt](picts/logo_forepaas_small.png ':size=80%')
```

### Tabs

Créer des examples de code en différents languages !

<!-- tabs:start -->
#### **Angular**
Angular!

#### **css**
CSS!

#### **dotnet**
Dotnet!

#### **flask**
Flask!

#### **Go**
Go!
<!-- tabs:end -->

<!-- tabs:start -->
#### **HTML**
HTML!

#### **Java**
Java!

#### **JavaScript**
JavaScript!

#### **nodejs**
Node.js!
<!-- tabs:end -->

<!-- tabs:start -->
#### **PHP**
PHP!

#### **Python**
Python!

#### **React**
React!

#### **Ruby**
Ruby!
<!-- tabs:end -->

<!-- tabs:start -->
#### **Scala**
Scala!

#### **Spark**
Spark!

#### **Swiftios**
Swift!

#### **Vue**
Vue!
<!-- tabs:end -->

---

## Youtube video

[https://www.youtube.com/watch?v=8h_hS0d4vqg]

---

## Conventions 
Lors de la création de vos pages de documentation, n'oubliez pas les conventions suivantes:
* Incluez une ligne de séparation entre chaque en-tête de type "Header 1" pour montrer que l'utilisateur passe d'une section à une autre.
* Lorsque vous utilisez des images, assurez-vous qu'elles sont correctement dimensionnées, en particulier pour les icônes, les zooms ou les captures d'écran ciblées.
* Si vous annotez des captures d'écran, utilisez des formes simples au lieu du dessin libre, car cela montre plus de professionnalisme.

---
Si vous atteignez cette section: bravo ! C'est que vous avez lu tout le document... Pas une mince affaire. Si vous avez des questions sur le fonctionnement de l'outil, n'hésitez pas à contacter l'équipe Front-End ou Product. De même, si vous voyez des bugs dans l'affichage ou la syntaxe, faites-le-nous savoir, ne le laissez pas glisser.

> Bonne chance et amusez-vous bien !
