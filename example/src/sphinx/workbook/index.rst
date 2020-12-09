Workbook
********

Setting up a half-day training workbook.

.. ifslides::

   :ref:`^<Contents>`

.. ifnotslides::
   
   Workbooks are carefully constructed to be used as:
   
   * attendee notes and step-by-step exercises
   * instructor presentation and answer key
   
Workbook structure
==================

Directory structure:

* :file:`.gitignore` - optional to ignore files such as the build directory
* :file:`README.md` - workbook title and objectives
* :file:`build.xml` - ant build script
* :file:`build.properties` - fill-in-the blank properties for build script
* :file:`target/` - generated output
* :file:`src/` - workbook contents
* :file:`src/config.py` - sphinx build file

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

.. ifnotslides::

   .. literalinclude:: /conf.py
      :language: python
      :linenos:
   
build.properties
----------------

Provide properties to :file:`conf.py`:

.. literalinclude:: /../../build.properties
   :language: properties
   :linenos:

Workbook contents
=================

Sphinx toctree contents:

* :file:`src/index.rst` - title page and table of contents
* :file:`src/figure/` - diagrams and illustrations
* :file:`src/img/` - common images

Common sections:

* :file:`src/welcome/index.rst` - overview and objectives
* :file:`src/review/index.rst` - optional review for certifications

.. nextslide::

Section contents:

* :file:`src/{section}/index.rst` - section page
* :file:`src/{section}/exercsie.txt` - exercise included in text
* :file:`src/{section}/img` - images and screen snaps
* :file:`src/{section}/files` - files for literal includes and downloads

Initial index.rst
-----------------

Carefully constructed providing:

* Workbook title
* `toctree` caption for the `rtd` theme
* Instructor note linking to slides
* placeholder slides as needed

.. ifnotslides::

   .. literalinclude:: /index.rst
      :language: rst
      :linenos:

figure folder
-------------

Used for `svg` and `png` diagrams::

   geoserver_data_directory.svg
   geoserver_data_directory.png

Figures are provided with a caption describing the content (even if that ends up repeating some of the text).

   The GeoServer data directory is the location of the configuration information on disk.

   .. figure:: /figure/geoserver_data_directory.*
   
      GeoServer data directory
 
.. code-block:: rst
   
   The GeoServer data directory is the location of the configuration information on disk.

   .. figure:: /figure/geoserver_data_directory.*
   
      GeoServer data directory

Recommend use of a single shared `figure` folder as shown above with (leading :file:`/` indicates path is relative to the :file:`config.py` file). This makes it easier to manage and update diagrams.

files folder
------------

Used for scripts, configuration files, and sample data such as icons::

   elevation.sld
   place.png
   place.svg

Keep in mind this content is bundled with the workbook content and is not intended for handling large files.

Scripts and configuration files are often presented as a code example using `literalinclude` directive.

      #. Here is an improved :download:`elevation.sld <files/elevation.sld>` SLD showing the elevations:
         
         .. literalinclude:: files/elevation.sld
            :language: xml

.. code-block:: rst

      #. Here is an improved :download:`elevation.sld <files/elevation.sld>` SLD showing the elevations:
         
         .. literalinclude:: files/elevation.sld
            :language: xml

img folder
----------

The root :file:`img` folder is primarily used for branding or common screens such as how to login.::

   gc_geosever_logo_300x300.png

Each section has an :file:`{section}/img` folder used to manage screen snaps for the section.::

   coverage_dem_bands.png
   coverage_parameters.png
   gray_preview.png

Screen snaps are used with the `figure` directive, so we can provide a caption.

    The :guilabel:`SUGGESTED_TILE_SIZE` parameter is set automatically by GeoServer when images use internal tiling (generally this setting is not changed from its default).

    .. figure:: img/coverage_parameters.png

   Coverage parameters

.. code-block::

    The :guilabel:`SUGGESTED_TILE_SIZE` parameter is set automatically by GeoServer when images use internal tiling (generally this setting is not changed from its default).

    .. figure:: img/coverage_parameters.png

       Coverage parameters

Section index.rst
-----------------

Use straight forward writing with three levels of headings:

* Consistency is required as content is generted into both slides and workbooks
* Consistent structure and writing is both profesional and functional helping comprehension and ability to scan and review material.

.. code-block:: rst
   
   Page
   ****
      
   Section
   =======
   
   Content
   -------

   Content
   
We are gradually shifting to numbering `toctree` and providing a heading for exercises to help attendees locate the right section to work on.

.. code-block::

   Exercise
   ^^^^^^^^

Workbook Writing
================

Care is taken to ensure that content generates as slides and workbook.

Workbooks are built with `autoslides`:

* Each page turns into a single presentation. 
* Each heading becomes a new slide.
* Headings are cross linked between workbook and slides

Slide headings
--------------

Use straight forward writing with three levels of headings:

.. code-block:: rst
   
   Page
   ****
   
   Section
   =======
   
   Content
   -------

   Slide content

.. nextslide:: Autoslides Presentations


Manage long pages using `include` directive.

.. code-block:: rst
   
   Basics
   ******

   .. include:: admin.txt
   .. include:: workspace.txt
   .. include:: datastore.txt
   .. include:: layer.txt
   .. include:: group.txt
   .. include:: style.txt

ifslides and ifnotslides
------------------------

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
      
   ..
      
      Reference:

      * :geoserver:`WMS reference <services/wms/reference.html>`

.. code-block:: rst
         
   .. ifnotslides::
      
      Reference:
      
      * :geoserver:`WMS reference <services/wms/reference.html>`

Slide directive
---------------

`slide` directive for additional slides.

.. code-block:: rst

   .. slide:: GeoCat Introduction
      :level: 1
      :class: slide-intro

      .. figure:: /img/geocat_logo_text.*

      Spatial data publication and discovery with products, services and philosophy following the free and open source source software.
   
      Software development company based in Bennekom, with developers in the Netherlands, Spain and Canada.

.. nextslide:: Slide classes

Theme provides built-in slide classes:

.. figure:: img/slide-heart.png

   Slide-heart class

.. nextslide:: 

.. code-block:: rst

    .. slide:: Free and Open Source Company
       :level: 1
       :class: slide-heart

.. nextslide:: Ending a presentation

Theme `slide-outro` is a nice way to end a presentation:

.. figure:: img/slide_questions.png
  
  Use of `slide-outro` to end presentation.

Note `doc` link to return to top-level:

.. code-block:: rst

   .. slide:: Questions and Review
     :level: 2
     :class: slide-outro

     :doc:`/index`

.. nextslide:: Slide directive inline-contents

.. ifnotslides::

   Slide `inline-contents` used to generate a slide, and include the text in the workbook.
   
      Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.

.. figure:: img/slide-inline-example.png
   
   Slide inline-contents example

.. nextslide::

.. code-block:: rst

   .. slide:: GeoCat Documentation Example
      :level: 2
      :inline-contents: True
  
      Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.

Instructor notes
----------------

Use ``only`` directive to include content in the instructor build of the workbook.

    .. admonition:: Explore

       What is the difference between the ``CRS:84`` and ``EPSG:4326``?

       .. admonition:: Instructor Notes

          The difference is the strict definition of axis order.

.. code-block:: rst
   :linenos:
   
   .. admonition:: Explore

      What is the difference between the ``CRS:84`` and ``EPSG:4326``?

      .. only:: instructor

         .. admonition:: Instructor Notes

            The difference is the strict definition of axis order.

Writing Exercises
=================

Avoid including exercise in slides
----------------------------------

Use `admonition` and `ifnotslides` directive to avoid including the full exercises into presentations.
      
.. admonition:: Exercise issue WMS 1.3.0 GetCapabilities request
   
   .. ifnotslides::
   
      .. include:: wms_getcapabilities_exercise.txt

.. code-block:: rst

   .. nextslide:: WMS Exercises
   
   .. admonition:: Exercise issue WMS 1.3.0 GetCapabilities request
      
      .. ifnotslides::
      
         .. include:: wms_getcapabilities_exercise.txt

Use admonition block-directives
-------------------------------

.. ifnotslides:: 
   
   Consistently use `admonition` to clearly indicate the type of exercise.

.. admonition:: Demo

   Instructor demo on screen or online video.

.. admonition:: Exercise

   Step-by-step exercise required to proceed with workbook.

.. admonition:: Explore

   Review and apply concepts covered in workbook.

.. admonition:: Challenge

   Go beyond the workbook with experimentation and research.

Manage long exercises in separate txt file
------------------------------------------

Manage long pages as a `txt` file using `include` directive.

.. code-block:: rst

   .. literalinclude:: wms_getcapabilities_exercise.txt
      :language: rst

.. ifnotslides:: 
   
   Exercises are written using `txt` extension to avoid being processed by :command:`sphinx-build` until included.
  
Step-by-step instructions
-------------------------

Writing step-by-step insteuctions:

* Step should clearly state what is being performed
* Include a screen snap attendee can use to check their work before hitting :guilabel:`OK`.
* Show the result of the action as a new numbered step with a screen snap.


Sphinx rst tips for step-by-step instructions:

* Use ``#.`` to number steps, so new steps can be added over time.
* Use directives ``kbd``, ``gui-label``, ``command``, ``menu-selection`` consistently to allow theme designer to improve workbook appearance over time.
* Use ``figure`` directive to provide caption for each screen snap
* 

.. nextslide::

Do not complicate step-by-step instructions with description or discussion. Or introduce new concepts, these should be covered in the presentation content.
  
If you really need to take a break for discussion, perhaps in an instructor demo. Make a clearly numbered step that is just discussion.

.. slide:: Questions and Review
  :level: 2
  :class: slide-outro
  
  :ref:`^<contents>`