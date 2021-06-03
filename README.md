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
* [recommonmark](https://github.com/readthedocs/recommonmark)
* [sphinx-copybutton](https://pypi.org/project//)
* [sphinx-rtd-theme](https://sphinx-rtd-theme.readthedocs.io/) - included in repository

macOS:
```
brew install python
brew install sphinx-doc
pip install hieroglyph recommonmark sphinx-copybutton
```

windows:
```
pip install -U sphinx
pip install hieroglyph recommonmark sphinx-copybutton
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

Grab the latest tag:
```
cd sphinx_rtd_theme
rm -rf *
git checkout LICENSE
wget https://github.com/readthedocs/sphinx_rtd_theme/archive/refs/tags/0.5.2.zip
unzip 0.5.2.zip 'sphinx_rtd_theme-0.5.2/sphinx_rtd_theme/*' -d .
mv sphinx_rtd_theme-0.5.2/sphinx_rtd_theme/* .
rm -r *.zip sphinx_rtd_theme* 
```

Have a look at the changed files using `git status`, and double check if any fixes need to be applied to `geocat_rtd` theme.

Updated:
```
cd ../
git add .
git commit -m "Update sphinx_rtd_theme to 0.5.2"
```

Test using `example`:
```
cd ../example
ant clean
ant
```