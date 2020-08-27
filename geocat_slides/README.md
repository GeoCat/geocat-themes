# GeoCat Slides Theme for Sphinx Hieroglyph

Based on the default Hieroglyph theme and GeoCat styles.

This slideshow contains all kinds of extra, custom slides. These can be used as (title) pages for an Introduction, Location, Author and as a start for a GeoCat Product overview.

## Custom Slides

Custom slides are defined by their class, for example:

```
.. slide:: GeoCat Slides Example
   :level: 1
   :class: slide-intro
```   

A list of the current special slides

| Type | Description | Class | Extra |
| ---- | ----------- | ----- | ----- |
| Introduction | Standard GeoCat introduction (Logo + Text). Title is not used. | `:class: slide-intro` | |
| Author |   | `:class: slide-author` | |
| Heart | Adds the t-shirt slogan: Put your Heart in everything you do! | `:class: slide-heart` | |
| GeoCat | Adds the lighter blue background, to be used for a GeoNetwork Enterprise title page, the 'title' is centered, do not use with additional text | `:class: slide-geocat` | Background color: #009BD2 |
| GeoServer | To be used for a GeoNetwork Enterprise title page, the 'title' is centered, do not use with additional text | `:class: slide-geoserver` | Background color: #00AD9F |
| Bridge | Adds the yellow background, to be used for a Bridge title page, the 'title' is centered, do not use with additional text | `:class: slide-bridge` | Background color: #FFD200 |
| Live | Adds the orange background, to be used for a Live title page, the 'title' is centered, do not use with additional text | `:class: slide-live` | Background color: #FF9900 |
| Service | Adds the dark blue background, to be used for a GeoCat Services title page, the 'title' is centered, do not use with additional text | `:class: slide-service` | Background color: #1F1249 |
| Bennekom | Adds a photo of Bennekom as background, do not use with additional text | `:class: slide-bennekom` | |
| Victoria | Adds a photo of Victoria as background, do not use with additional text | `:class: slide-victoria` | |