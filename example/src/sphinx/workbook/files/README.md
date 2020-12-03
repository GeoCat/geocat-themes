# Data Publishing

Use GeoServer to publish data and introduces the key concepts workspaces, stores and layers.

## Skills Learned

* Creating a workspace
* Connecting to a shapefile and publishing as a vector layer
* Connecting a a GeoTiff and publishing as a raster layer
* Creating a LayerGroup

## Building

A makefile is provided, but it does not do everything, for now:

```
sphinx-build src target/html
sphinx-build src target/instructor -t instructor
sphinx-build src target/instructor/slides -b slides
```