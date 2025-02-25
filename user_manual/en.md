# Documentation of the Documentation Tool

Hi, if you reach this page it's because you've volunteered to help with writing the documentation for ForePaaS. So, to begin with: thanks a lot! Below you will find instructions & examples on how to use all the elements required to build your documentation pages along with their syntax on how to use them.

This document contains 3 main sections:
* [Tooling](user_manual_en?id=tooling) : What you'll need to have before you start working
* [Syntax](user_manual_en?id=syntax) : What you'll need to know in order to build your pages
* [Conventions](user_manual_en?id=conventions) : Best practices & reminders on documentation

---

## Tooling
### Screen Captures & Images
In order to do screen captures, the easiest way is to use the default tools of your computer. On **Windows** search for the 'Snipping Tool' in your applications and in **MacOS** use the keyboard shortcut CMD + SHIFT + 4.

Simple instructions below:
* Save all captures in PNG format
* Load all pictures under a "picts" folder inside of the folder where your documentation page is hosted
* Use comment naming conventions (ex: etl-workflow-tutorial-1)
 * Use meaningful names (by the page sections, or picture number)
 * Use simple separators like '-' or '_'
 * Use consistent names (think of the people proof reading!)

If you are using a MacBook, use the following color for your arrows/squares/circles when editing an image:

![color](/picts/color.png)

### Videos
In order to have videos referenced in the documentation, you will have to load them on ForePaaS' YouTube account. As you upload the videos make sure to mark them as 'unlisted' if you don't want to appear publicly on ForePaaS' YouTube account.

### Referencing Page Sections
You can reference pages and sections within pages in the documentation tool. All URLs are built from the same reference:
* In the **Editor** mode: https://hq-dev-docs.forepaas.io/editor/#/
* In the final **Display** mode: https://hq-dev-docs.forepaas.io/v1/files/index.html#/

Correspondances entre éditeur et visualisation

|  Page  |  Editor  |  Display  |
| - |  |  |
| EN_user_guide | https://hq-dev-docs.forepaas.io/editor/#/_EN_user_manual.md | https://hq-dev-docs.forepaas.io/index.html?uid=32789#/_EN_user_manual |

---

## Syntax

In order to write content and use specific formatting, the documentation system uses a "Mark Down" (MD) type syntax which lets users define simple styles without having to directly use some HTML code.

Please find below the main elements to know and there associated syntax.

### Titles
Titles are defined by using # signs and a space at the beginning of the line.

```
# Main Title
## Header 1
### Header 2
#### Header 3
```

### Formatting
You can format simple text in *italique*, **bold** or using a `highlighting block`. Please find below the syntax for each option:

```
Text in italic *my text*
Text in bold **my text**
Text in highlighted block `my text`
```

Similarly to HTML code, forced line break don't generate line breaks in the published page. To generate line or paragraph breaks use the following syntax:
* 2 successive spaces at the end of a line to generate a line break (in HTML code `<br/>`)
* 2 successive backspaces to generate a paragraph break (in HTML code `<p>`)

### Bullet Points
Generate bullet points and indexations using * and spaces. For instance:
* First Bullet Point Element
  * Second Bullet Point Element
    * Third Bullet Point Element

There are no hard rules to the number of spaces between each bullet points but make sure to indexed them in the order you want them to display. Similarly for numbered bullet points:

1. First Bullet Point Element
  1. Second Bullet Point Element
    1. Third Bullet Point Element

Syntax in code for the previous examples:

```
# List
* First Bullet Point Element
  * Second Bullet Point Element
    * Third Bullet Point Element

# Numbered List
1. First Bullet Point Element
  1. Second Bullet Point Element
    1. Third Bullet Point Element
```

### Links
#### Simple Links
You can easily include links by simple adding a URL in the text such as http://example.com/. However if you want to generate an inline link (or hyperlink) from a specific word like [this](http://example.com/ "Title") use the following syntax:

```
[this](http://example.com/ "Title")
```

Note that for the sake of clarity you can always define your links outside of your main content body and reference them directly for instance this [link 1][1] and this [link 2][2] are defined below using this syntax:

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"

```
... this [link 1][1] and [link 2][2] are defined...

[1]: http://example.com/ "Title"
[2]: http://example.org/ "Title"
```

To create links inside the documentation system reference the path of the page directly. For instance: [Description API](description-api/index) is given by:

```
[Description API](description-api/index)
```
Same goes with creating links directly to certain sections in pages of the documentation system. You simply need to add the following text at the end of the path "id=[title_name, in lower caps, spaces replaced by -]. 

For instance: [Link to the Tables section below](/user_manual_en?id=tables) is given by:

```
[Tableaux](/manuel_utilisation?id=tableaux)
```  
#### Highlighted Links
You can highlight important links as below:

{Link to another important section}(#/manuel_utilisation?id=tableaux)

These links can either open in the same window or to a separate one depending on the following syntax:
```
Current window: {Link to another important section}(mylink)
New window: {Link to another important section}(mylink)_
```
By default if no text is provided between the {} then the reference link will be displayed.

### Tables
Find below an example table and the associated syntax:

| Title 1       |     Title 2     |        Title 3 |
| :------------ | :-------------: | -------------: |
| Column       |     Column     |        Column |
| Aligned     |   Aligned    |      Aligned |
| Left        |     Center      |         Right |

```
| Title 1      |    Title 2    |       Title 3 |
| :----------- | :------------: | -----------: |
| Column       |     Column     |        Column|
| Aligned      |     Aligned    |       Aligned|
| Left         |     Center     |         Right|
```
Note that you need at least the second with a'-' sign to generate the table.

### Code
In order to add code blocks you need to include 3 inverse apostrophe. Generate the sign using the following shortcuts: on Windows ALTGR + 7, on Max ALT + ^ 

```js
window.$docsify = {
  maxLevel: 4
};
```

```html
<div> 
   test 
</div>
```

Note that you can adjusts the code's color formatting by specifying which language it is right next the first inverse apostrophe as follows:

```
```html
```js
```

### Tabs

Create code examples in different languages!

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

### Notes
You can always highlight your text as to display a notes, quote or other important content using this following:
> This is an important related note. 

!> This is a crucial note or danger.

?> This on the other hand is a bonus tip or info.

Make sure to end this section with a line break otherwise the note formatting will drag until the next line break. Both examples are obtained by using the following syntax:

```
> This is an important related note. 
!> This is a crucial note or danger.
?> This on the other hand is a bonus tip or info.
```

### Folders, Pages & Images
Create a new image or page by right-clicking on a root folder to the left and selecting "New Files" or "Import Files". When you enter the files name make to input the path ** without the first / and including the file extension**. In other words use .md for pages, .gif, .jpeg, .jpg or .png for images. Make sure to use lower cap only. Note that by adding a path name with an additional subfolder it will create the folder structure accordingly.

For example:
* For a page at the root folder: "user_manual_en.md"
* For a generic page: "folder/subfolder/user_manual_en.md"

Note that you can edit images once you have created the "page". In other words that by creating a new "page" such as picts/my_image.png and then click on it to load the image.

#### Inserting Images
Generally speaking to insert an image you use the following syntax:

```
![Description](Image URL)
```  

The URL can either be public link (make sure it is for the image to be displayed) or it needs to reference the right path in the documentation system. For instance the ForePaaS logo below is stored in the "picts" folder:

![Logo ForePaaS](picts/logo_forepaas_small.png) 
![Logo ForePaaS](picts/logo_forepaas_small.png ':size=100x40')
![Logo ForePaaS](picts/logo_forepaas_small.png ':size=20%')

It is referenced using the following syntax:
```
![Logo ForePaaS](/picts/logo_forepaas_small.png)
![Logo ForePaaS](/picts/logo_forepaas_small.png ':size=100x40')
![Logo ForePaaS](/picts/logo_forepaas_small.png ':size=20%')
<!-- It supports percentage resizing -->
```

Images in a block

?> ![Alt](picts/logo_forepaas_small.png) 

#### Inline, Referenced & Linked Images
Images can be integrated directly in the main content such as:

* Inline Images: ![Alt](picts/logo_forepaas_small.png ':size=50%')
* Referenced Images: ![Alt][3]
* Linked Images: [![Alt text](picts/logo_forepaas_small.png ':size=50%')](https://www.forepaas.com/)

[3]: picts/logo_forepaas_small.png ':size=50%'

This was built using the following syntax:
````
* Inline Images: ![Alt](picts/logo_forepaas_small.png ':size=50%')
* Referenced Images: ![Alt][3]
* Linked Images: [![alt text](picts/logo_forepaas_small.png ':size=50%')](https://www.forepaas.com/)

[3]: picts/logo_forepaas_small.png ':size=50%'
````
### Videos
Insert Youtube videos by referencing the link between square brackets. Note that when a user clicks on the video it will be redirected to YouTube. You might consider creating an image placeholder with a redirection link for a nicer visual effect.

[https://www.youtube.com/watch?v=8h_hS0d4vqg]

The video above was inserted using the following syntax:

````
[Video URL]
```

---

## Conventions 
As you go about building your documentation pages, please keep in mind the following conventions:
* Include a division line between each Header 1 to show that the user is going from one section to another.
* When using pictures, make sure they are properly sized especially for icons, zooms or focused screenshots.
* If you are annotating screenshots, please use simple shapes instead of freeform drawing as it shows more professionalism.

---
If you're reaching this section: thanks! You've read the whole document through: kudos for that. If you have any questions about how the tool works feel free to reach out the Front-End or Product team. Similarly if you're seeing any bugs in the display or the markdown syntax, let us know, don't let it slide.

> Good luck and have fun!