Workbook
********

Setting up a half-day training workbook.

.. ifnotslides::
   
   Workbooks are carefully constructed to be used as:
   
   * attendee notes and step-by-step exercises
   * instructor presentation and answer key
   
Workbook structure
------------------

Directory structure:

* :file:`.gitignore` - optional to ignore files such as the build directory
* :file:`README.md` - workbook title and objectives
* :file:`build.xml` - ant build script
* :file:`build.properties` - fill-in-the blank properties for build script
* :file:`target/` - generated output
* :file:`src/` - workbook contents
* :file:`src/config.py` - sphinx build file

Workbook contents
-----------------

Sphinx toctree contents:

* :file:`src/index.rst` - title page and table of contents
* :file:`src/figure/` - diagrams and illustrations
* :file:`src/img/` - common images

Common sections:

* :file:`src/welcome/index.rst` - overview describing workbook objects
* :file:`src/review/index.rst` - optional review for certifications

.. nextslide::

Section contents:

* :file:`src/<section>/index.rst` - section page
* :file:`src/<section>/exercsie.txt` - exercise included in text
* :file:`src/<section>/img` - images and screen snaps
* :file:`src/<section>/files` - files for literal includes and downloads

build.xml
---------

Apache Ant is a cross platform build system similar to the unix :command:`make` command. It defines a series of build targets that can be performed on the command line. Each build target is a small recipe consisting of tasks to be performed. Build targets can depend on each other (so that training material must be generated before being packaged as a zip bundle).

.. nextslide::

To list ant build targets intended for use (those that have a desription):

.. code-block:: bash

    ant -p

.. ifnotslides::

   ::

      % ant -p
      Buildfile: example/build.xml
      Ant script to run sphinx-build.
      Main targets:

       clean       clean up build directory
       instructor  instructor notes
       slides      instructor slides
       workbook    attendee workbook
      Default target: build

README.md
---------

Shown when browsing content in GitHub and GitLab. Markdown used to avoid conflicting with sphinx-build.

.. if notslides::
   
   .. literalinclude:: files/README.md
      :language: markdown
      :linenos:

index.rst
---------

Carefully constructed providing:

* workbook title
* `toctree` for each section with caption for the `rtd` theme
* instructor note linking to slides

.. literalinclude:: /index.rst
   :language: rst
   :linenos:

conf.py
-------

Configuration file for :command:`sphinx-build` and configure builders for `html` and `slide` output.

The :file:`config.py` file is written in python, we have used this to:

* Parse :file:`build.properites`
* Current year, copyright and license information
* Extensions used
* External links
* Configure html builder
* Configure slide builder

.. literalinclude:: /conf.py
   :language: python
   :linenos:
   
build.properties
----------------

.. literalinclude:: /../../build.properties
   :language: properties
   :linenos:
