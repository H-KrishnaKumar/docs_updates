# Auto Form

🚧 Work in progress!

Auto form goal is to convert a json object in a form.
It will be use for generate store module form, to be easy to configure in UI when you create your own

## Sample of form

```json
{
  "title": {
    "type": "object",
    "label": "title",
    "options": {
      "text": {
        "type": "text",
        "label": "My primarytitle"
      },
      "subtext": {
        "type": "text",
        "label": "My subtitle"
      }
    }
  },
  "colors": {
    "type": "array",
    "label": "colors",
    "options": {
      "type": "color-picker",
      "default": "#000000"
    }
  },
  "position": {
    "type": "select",
    "label": "Position",
    "multiple": false,
    "options": [
      {
        "label": "Top",
        "value": "top"
      },
      {
        "label": "Middle",
        "value": "middle"
      },
      {
        "label": "Bottom",
        "value": "bottom"
      }
    ]
  }
}
```

## Sample of object generated
```json
{
  "title": {
    "title":"My Title",
    "subtitle":"My Subtitle"
  },
  "colors":["#000000","#bbbbbb"]
}
```

## Elements definition

### Common parameters
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| type | String | Component type, it refer to the list in the section Inputs |
| label | String | Will display a label for the input, it will use the i18n configuration (not documented) |
| hidden | Boolean | Will hide the element, default value will be set, but the user will not be able to change it |

### Inputs
#### Array
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| options | Any | A sub-element |
Example with an array of color
```json
{
  "colors": {
    "type": "array",
    "label": "colors",
    "options": {
      "type": "color-picker",
      "default": "#000000"
    }
  }
}
```

#### Number
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| default | Number | Default value for the input |
Example
```json
{
  "color": {
    "type": "number",
    "default": 0.4
  }
}
```

#### Object
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| options | Object | A set of sub-element |
Example with an object with 2 sub-element
```json
{
  "title": {
    "type": "object",
    "label": "title",
    "options": {
      "text": {
        "type": "text",
        "label": "My primarytitle"
      },
      "subtext": {
        "type": "text",
        "label": "My subtitle"
      }
    }
  }
}
```

#### Select
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| default | Any | Default value for the input |
| multiple | Boolean | If set to true, it will generate an array instead of a simple value, and will ask user multiple choice |
| options | Array | A set of value, it will be show to the user in the select list |
| options[].label | String | Display text for the item in selectbox |
| options[].value | Any | Real value to put inside the generated object if the item is selected |
Example
```json
{
    "type": "select",
    "label": "Position",
    "multiple": false,
    "options": [
      {
        "label": "Top",
        "value": "top"
      },
      {
        "label": "Middle",
        "value": "middle"
      },
      {
        "label": "Bottom",
        "value": "bottom"
      }
    ]
  }
```

#### Text
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| default | String | Default value for the input |
Example
```json
{
  "type": "text",
  "label": "An input text"
}
```

#### Toggle
| Parameter | Type | Value |
| :------------ | :-------------: | -------------: |
| default | Boolean | Default value for the input |
Example
```json
{
  "type": "toggle",
  "default": false
}
```
