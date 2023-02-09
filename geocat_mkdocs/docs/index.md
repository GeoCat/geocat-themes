# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

* `mkdocs new [dir-name]` - Create a new project.
* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

## Sub 01

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

## Sub 02

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
massa, nec semper lorem quam in massa.

## Literal Include

For a literal include use `snippets`.

**Full** include:

```html
--8<-- "openlayers_osm.html"
```

...and only **include** a couple of lines

```html
--8<-- "openlayers_osm.html:7:12"
```

...or **highlight** a couple of lines and add **line numbers**

```html hl_lines="7-12" linenums="1"
--8<-- "openlayers_osm.html"
```

...or **use** sections

The example in `Sphinx`:
```rst
.. literalinclude:: /../../../../src/pom.xml
   :language: xml
   :start-at: <artifactId>maven-pmd-plugin</artifactId>
   :end-before: </plugin>
   :dedent: 12
```

The usage in `MkDocs`:

```html hl_lines="7-12" linenums="1"
--8<-- "openlayers_osm.html"
```

