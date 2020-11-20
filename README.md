# geocat-themes

GeoCat documentation themes for Sphinx, Hieroglyph, DocBook, Jekyll and more!

*example*: document used to test `geocat_rtd` theme

* Provides a handy writing guide for GeoCat products, training and presentations.
* Covers guidence for contributing sphinx documentation to GeoNetwork and GeoServer communities.
* Published as GitHub pages: https://geocat.github.io/geocat-themes/ 

example_slides: slide example testing `geocat_slides` theme

## sphinx-build environment

Tested with:

* [python](https://www.python.org) 3.9.0
* [sphinx-build](https://www.sphinx-doc.org/)
* [hieroglyph](https://github.com/nyergler/hieroglyph) 2.1

macOS:
```
brew install python
brew install sphinx-doc
pip install hieroglyph
```

windows:
```
pip install -U sphinx
pip install hieroglyph
```

## update github pages

```
cd example
mvn clean deploy
git add ../docs
git commit -m "update docs"
git push
```
