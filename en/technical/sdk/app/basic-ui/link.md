# Link

Allows you to add a link to another dashboard.

## Add Link
Select Basic UI -> Link.

![Exemple Panel](picts/link-selection.png)

## Configure Link
### Simplified configuration

This configuration allows you to configure the link in a simple and intuitive way.

![Exemple Panel](picts/link-config-example.png)

![Exemple Panel](picts/link-config-simple.png)

### Advanced configuration

Below is the JSON configuration for an **Image** as created above :

```json
{
  "type": "link",
  "style": {
    "color": "blue"
  },
  "text": "My link",
  "url": "/table",
  "icon": "fa fa-table"
}
```

## Result

![Exemple Panel](picts/link.png)