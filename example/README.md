# Example of using the GeoCat theme

This example acts as a visual reference and writing guide for different kinds of documentation.

* user manuals
* training material
* presentations

This is a work in progress, focused on providing real world cut and paste examples.

## Make

```
make help
make clean
make html
```

## Maven and Ant

```
mvn clean
mvn compile
mvn package
```

```
ant -p
ant clean
ant build
```

# GitHub Pages

This project is deployed GitHub pages using the `docs` folder at the root of the project.

```
mvn deploy
git add ../docs
git commit -m "documentation update"
git push
```