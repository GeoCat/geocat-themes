# geocat-themes

GeoCat documentation themes for Sphinx, Hieroglyph, DocBook, Jekyll and more!

*example*: document used to test `geocat_rtd` theme

* Provides a handy writing guide for GeoCat products, training and presentations.
* Covers guidence for contributing sphinx documentation to GeoNetwork and GeoServer communities.
* Published as GitHub pages: https://geocat.github.io/geocat-themes/ 

example_slides: slide example testing `geocat_slides` theme

## sphinx-build environment

Tested with the following managed by ``requirements.txt``:

* [python](https://www.python.org) 3.11.2
* [sphinx-build](https://www.sphinx-doc.org/)
* [hieroglyph](https://github.com/nyergler/hieroglyph) 2.1
* [myst-parser](https://github.com/executablebooks/MyST-Parser)
* [sphinx-copybutton](https://pypi.org/project//)
* [sphinx-rtd-theme](https://sphinx-rtd-theme.readthedocs.io/)

macOS:
```
brew install python
pip3 install -r requirements.txt
```

windows:
```
pip3 install -r requirements.txt
```

jenkins:

* [Dockerfile](https://github.com/GeoCat/jenkins-docker-agent-docs/blob/master/Dockerfile)

## update github pages

```
cd example
mvn clean deploy
git add ../docs
git commit -m "update docs"
git push
```

## update sphinx_rtd_theme

The ``geocat_rtd`` theme extends ``sphinx_rtd_theme``.

With each ``sphinx_rtd_theme`` update some testing may be required. Have a look at the [changelog](https://sphinx-rtd-theme.readthedocs.io/en/stable/changelog.html), and double check if any fixes need to be applied to `geocat_rtd` theme. Comparing files changed between [tags](https://github.com/readthedocs/sphinx_rtd_theme/tags) helps:

* [breadcrumbs.html](https://github.com/readthedocs/sphinx_rtd_theme/blob/master/sphinx_rtd_theme/breadcrumbs.html)
  
  The GeoCat theme is a copy with ``<!-- link to GeoCat docs home -->`` section added
  
* [footer.html](https://github.com/readthedocs/sphinx_rtd_theme/blob/master/sphinx_rtd_theme/footer.html)
  
  GeoCat theme is a clean extension forcing show_sphinx false.

Test using `example`:
```
cd example
ant clean
ant
```