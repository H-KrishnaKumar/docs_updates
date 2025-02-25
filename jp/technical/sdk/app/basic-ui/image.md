# Image

Allows you to add an image to your dashboard.

## Add Image
Select Basic UI -> Image.

![Exemple Panel](picts/image-selection.png)

## Configure Image
### Simple configuration

This configuration allows you to configure the image in a simple and intuitive way.

![Exemple Panel](picts/image-config-example.png)

![Exemple Panel](picts/image-config-simple.png)

### Advanced configuration

Below is the equivalent JSON configuration :

```json
{
  "type": "image",
  "style": {},
  "alt": "my image",
  "onClick": "console.info('click')",
  "width": "50",
  "height": "42"
}
```

## Result

![Exemple Panel](picts/image.png)