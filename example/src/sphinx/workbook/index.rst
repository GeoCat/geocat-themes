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

build.xml
^^^^^^^^^

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
^^^^^^^^^

Shown when browsing content in GitHub and GitLab. Markdown used to avoid conflicting with sphinx-build.

.. if notslides::
   
   .. literalinclude:: files/README.md
      :language: markdown
      :linenos:

conf.py
^^^^^^^

Configuration file for :command:`sphinx-build` and configure builders for `html` and `slide` output.

The :file:`config.py` file is written in python, we have used this to:

* Parse :file:`build.properites`
* Current year, copyright and license information
* Extensions used
* External links
* Configure html builder
* Configure slide builder

.. ifnotslides::

   .. literalinclude:: /conf.py
      :language: python
      :linenos:
   
build.properties
^^^^^^^^^^^^^^^^

Provide properties to :file:`conf.py`:

.. literalinclude:: /../../build.properties
   :language: properties
   :linenos:

Workbook contents
-----------------

Sphinx toctree contents:

* :file:`src/index.rst` - title page and table of contents
* :file:`src/figure/` - diagrams and illustrations
* :file:`src/img/` - common images

Common sections:

* :file:`src/welcome/index.rst` - overview and objectives
* :file:`src/review/index.rst` - optional review for certifications

.. nextslide::

Section contents:

* :file:`src/<section>/index.rst` - section page
* :file:`src/<section>/exercsie.txt` - exercise included in text
* :file:`src/<section>/img` - images and screen snaps
* :file:`src/<section>/files` - files for literal includes and downloads

index.rst
^^^^^^^^^

Carefully constructed providing:

* Workbook title
* `toctree` for each section with caption for the `rtd` theme
* Instructor note linking to slides

.. ifnotslides::

   .. literalinclude:: /index.rst
      :language: rst
      :linenos:

Slides
^^^^^^

Care is taken to ensure that content generates as slides and workbook.

The general theme is that workbooks are built with `autoslides` so that each heading becomes a new slide.


Slide headings
''''''''''''''

Use three levels of headings to match slide theme.

.. code-block:: rst
   
   Page
   ****
   
   Section
   =======
   
   
   Content
   -------

   Slide content
   
Slides
''''''

Use `nextslide` directive to breakup content into multiple slides.

.. code-block:: rst

   Content
   -------

   Slide content
   
   .. nextslide::
   
   More content
   
   .. nextslide: Update
   
   Also content

.. nextslide:: Slide directive

`slide` directive for additional slides.

... nextslide: Slide classes

Theme provides built-in slide classes.

.. figure:: img/slide-heart.png
  
   Slide-heart class

.. nextslide:: 

.. code-block:: rst

    .. slide:: Free and Open Source Company
       :level: 1
       :class: slide-heart

.. nextslide:: Slide inline-content

Use inline content to include slide text in workbook.

    .. slide:: GeoCat Documentation Example
       :level: 2
       :inline-contents: True
   
       Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.

.. figure:: img/slide-inline-example.png
   
   Sline indline-contents example
   
.. code-block:: rst

.. slide:: GeoCat Documentation Example
   :level: 2
   :inline-contents: True
   
   Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.


Simplicity
''''''''''

Use `ifslides` and `ifnotslides` to control content included in presentation and workbook.

    .. ifslides::
       
       Data directory access required for icons and fonts.
      
    .. ifnotslides::
 
       Access to the GeoServer data directory is required to manage the icons and fonts used for styling.

.. nextslide::

.. code-block:: rst

    .. ifslides::
      
       Data directory access required for icons and fonts.
      
    .. ifnotslides::
 
       Access to the GeoServer data directory is required to manage the icons and fonts used for styling.

.. nextslide:: Workbook references

Some content like references may only be in the workbook.

    .. ifnotslides::

       Reference:
 
       * :geoserver:`WMS reference <services/wms/reference.html>`

.. code-block:: rst
         
   .. ifnotslides::
      
      Reference:
      
      * :geoserver:`WMS reference <services/wms/reference.html>`

Exercises
^^^^^^^^^

Use `admonition` and `ifnotslides` directive to avoid including the full exercises into presentations.

.. code-block:: rst
   
   .. nextslide:: WMS Exercises
   
   .. admonition:: Exercise issue WMS 1.3.0 GetCapabilities request
      
      .. ifnotslides::
      
         .. include:: wms_getcapabilities_exercise.txt

.. nextslide:: Exercise admonitions

.. ifnot slides::
   
   Consistently use:

.. admonition:: Demo

   Instructor demo on screen or online video.
   
.. admonition:: Exercise
   
   Step-by-step exercise required to proceed with workbook.
   
.. admonition:: Explore
   
   Review and apply concepts covered in workbook.
   
.. admonition:: Challenge
   
   Go beyond the workbook with experimentation and research.

.. nextslide:: Exercise Contents

Exercises are written using `txt` extension to avoid being processed by :command:`sphinx-build` until included.

   .. literalinclude:: wms_getcapabilities_exercise.txt
      :language: rst


Instructor notes
^^^^^^^^^^^^^^^^

Use ``only`` directive to include content in the instructor build of the workbook.

.. code-block:: rst
   :linenos:
   
   .. admonition:: Explore

      What is the difference between the ``CRS:84`` and ``EPSG:4326``?

      .. only:: instructor

         .. admonition:: Instructor Notes

            The difference is the strict definition of axis order.
