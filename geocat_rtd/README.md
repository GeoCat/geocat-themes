# GeoCat Read the Docs Theme

An extension of [sphinx_rtd_theme](https://github.com/rtfd/sphinx_rtd_theme) with GeoCat branding.

* `show_sphinx` defaults to false
* `show_home` defaults to true, used to home icons to https://www.geocat.net/docs in header
* `is_prerelease` defaults to false, used to indicate `SNAPSHOT` versions
* `display_version` defaults to true
* [sphinx_rtd_theme](https://sphinx-rtd-theme.readthedocs.io/en/stable/configuring.html) configuration options

Theme defaults to `tango` pygments style.

Updates:

- sphinx_rtd_theme 3.0.2 removes the `display_version` in favor of a version and language chooser.
  
  The `display_version` option has been added directly to geocat_rtd as part of `searchbox.html` cutomization.