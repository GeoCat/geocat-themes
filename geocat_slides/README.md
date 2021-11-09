# GeoCat Slides Theme for Sphinx Hieroglyph

Based on the default [Hieroglyph](https://hieroglyph.readthedocs.io/en/latest/index.html) theme and GeoCat styles.

This slideshow contains all kinds of extra, custom slides. These can be used as (title) pages for an Introduction, Location, Author and as a start for a GeoCat Product overview.

If you haven't installed Hierogplyph yet

```
pip install hieroglyph
```

Hieroglyph needs Python 3

## Custom Slides

Custom slides are defined by their class, for example:

```rst
.. slide:: GeoCat Slides Example
   :level: 1
   :class: slide-intro
```   

A list of the current special slides

| Type | Description | Class | Extra |
| ---- | ----------- | ---------------------- | ----- |
| Introduction | Standard GeoCat introduction (Logo + Text). Title is not used. | `:class: slide-intro` | |
| Author | Page for the Author | `:class: slide-author` | |
| Heart | Adds the t-shirt slogan: Put your Heart in everything you do! | `:class: slide-heart` | |
| GeoCat | Adds the lighter blue background, to be used for a title page, the 'title' is centered, do not use with additional text | `:class: slide-geocat` | Background color: #009BD2 |
| GeoNetwork | To be used for a GeoNetwork Enterprise title page, the 'title' is centered, do not use with additional text | `:class: slide-geonetwork` | Background color: #0099CC |
| GeoServer | To be used for a GeoServer Enterprise title page, the 'title' is centered, do not use with additional text | `:class: slide-geoserver` | Background color: #00AD9F |
| Bridge | Adds the yellow background, to be used for a Bridge title page, the 'title' is centered, do not use with additional text | `:class: slide-bridge` | Background color: #FFD200 |
| Live | Adds the orange background, to be used for a Live title page, the 'title' is centered, do not use with additional text | `:class: slide-live` | Background color: #FF9900 |
| Service | Adds the dark blue background, to be used for a GeoCat Services title page, the 'title' is centered, do not use with additional text | `:class: slide-service` | Background color: #1F1249 |
| Bennekom | Adds a photo of Bennekom as background, do not use with additional text | `:class: slide-bennekom` | |
| Victoria | Adds a photo of Victoria as background, do not use with additional text | `:class: slide-victoria` | |
| Outro | Slide to end your workshop/presentation, the content is positioned at the bottom, designed for a maximum of 2 lines of text | `:class: slide-outro` | |

## Special utilities

### Text size

By adding a class the text of a slide, or just a block can be changed. The available classes are: `text-50`, `text-80` and `text-90`

Usage:
```rst
.. slide:: GeoCat Slides Example
   :level: 1
   :class: text-50
```  

### Containers

Containers in `rst` will be translated to a HTML `<div>`. The text after the `::` will be the class names(s) of the `<div>`, so adding more than 1 term will end up in more than 1 class.

A container can be used to manipulate text size for a small part of the slide for example. However, the text size of the title element is left as-is.

Usage:
```rst
.. slide:: Container example
  :level: 2
  :inline-contents: False

  .. Slide with text on the left and graphic on the right side

  .. container:: col-container

```

### Grids

When you want to display your contents in 2 (or 3) columns you have to use nested containers. The first container gets the class `col-container` and the children get class `col-6` for example. 
Everything is based on a 12 column grid, so the columns should total 12. So you can use 2 columns of `col-6`, or a column of `col-4` and `col-8`.

The following column options are available:

* `col-4` (for 2 or 3 column layouts)
* `col-6`
* `col-8`
* `col-12` (special case for vertically centering texts)
* `col-middle` (alias: `col-center`) - vertically center text/content
* `col-bottom` (alias: `col-end`) - align text/content to the bottom
* `col-left` - align content to the left of the column
* `col-right`  - align content to the right of the column

Usage:
```rst
.. slide:: Exampe with Grid
  :level: 2

  .. Slide with text on the left and graphic on the right side

  .. container:: col-container

    .. container:: col-6 col-middle text-80

       Depending on the view configuration, editors can reorder elements using up and down controls.

    .. container:: col-6

       .. figure:: img/editor-control-updown.png
```

### Vertically aligned text (or content)

Some extra configuration is needed to vertically align text, it's a combination of css flexbox and grid.

The slide itself needs a class `box`, the content needs a container with class `col-container` and a child with the classes `col-12` and `col-middle` or `col-bottom`

Available classes:

* `col-middle` (alias: `col-center`) - vertically center text/content
* `col-bottom` (alias: `col-end`) - align text/content to the bottom

Usage:
```rst
.. slide:: Vertical text example
  :level: 2
  :class: box

  .. Slide with text on the left and graphic on the right side

  .. container:: col-container

     .. container:: col-12 col-middle blue

        Depending on the view configuration, editors can reorder elements using up and down controls.
```

### Custom colours

The base styles have some colouring options, you can use the class directly, or [declare a role](https://docutils.sourceforge.io/docs/ref/rst/directives.html#custom-interpreted-text-roles) and use it inline. The role has to be declared on the same level as a slide.

Available classes (roles):

* `blue`
* `yellow`
* `green`
* `red`
* `black`
* `white`

Example with a `role` and class (`blue`):
```rst
.. role:: green

.. slide:: Re-ordering elements
  :level: 2
  :inline-contents: False
  :class: box

  .. Slide with text on the left and graphic on the right side

  .. container:: col-container

     .. container:: col-12 col-middle blue

        Depending on the view configuration, :green:`editors can` reorder elements using up and down controls.
```