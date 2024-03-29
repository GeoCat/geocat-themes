Workbook
********

Setting up a half-day training workbook.

.. ifslides::

   :ref:`^<contents>`

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
      GeoCat Theme Example Writing guidelines
      ant script to run sphinx-build:
        ant clean
        ant workbook
        ant workbook -Dopen=true
        
      Main targets:

       build       build documentation (requires sphinx-build)
       bundle      Package instructor workbook and slides
       clean       clean up build directory
       instructor  instructor notes
       package     Package workbook for attendees
       slides      instructor slides
       workbook    attendee workbook
      Default target: build

.. nextslide:: post-processing

Examples are written using `http://localhost:8080...`, to override:

.. code-block:: bash

   ant clean build -Dhost=https://training.geocat.live/

An override perform a search and replace the generated output.

.. nextslide:: postprocessing

Postprocessing is used to handle ``http://localhost:8080/geoserver`` links in sample data and generated html:

   .. literalinclude:: files/example.json
     :language: json
     :linenos:

.. code-block:: rst

   .. literalinclude:: files/example.json
      :language: json
      :linenos:

See also :doc:`../example` .

README.md
---------

Shown when browsing content in GitHub and GitLab.

.. if notslides::
   
   .. literalinclude:: files/README.md
      :language: markdown
      :linenos:

Note :command:`sphinx-build` can process markdown files, however an ``exclude_pattern`` has been configured to avoid processing :file:`README.md` file.
 
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

Files folder
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

IMG folder
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

Page index.rst
--------------

Use straight forward writing with three levels of headings:

* Consistency is required as content is generated into both slides and workbooks
* Consistent structure and writing is both profesional and functional helping comprehension and ability to scan and review material.

.. code-block:: rst
   
   Page
   ****
      
   Section
   =======
   
   Content
   -------

   Content

   Exercise
   ^^^^^^^^
   
   Step-by-step instructions.
   
We are shifting to numbering ``toctree`` directives and providing a heading for exercises to help attendees quickly locate the right section to work on.

Workbook Writing
================

Care is taken to ensure that content generates as slides and workbook.

Workbooks are built with `autoslides`:

* Each page turns into a single presentation. 
* Each heading becomes a new slide.
* Headings are cross linked between workbook and slides

Headings
--------

Pages use straight forward writing with three levels of headings:

.. code-block:: rst
   
   Page
   ****
   
   Section
   =======
   
   Content
   -------

   Slide content

.. nextslide::

A forth level of headings is used for exercises:

.. code-block:: rst
   
   Exercise: WMS GetCapabilities
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   
   .. ifslides::
      
      .. admonition:: Exercise
      
         Show the WMS GetCapabilities
   
   .. ifnotslides::
   
      .. include:: wms_getcapabilities_exercise.txt

Distinct numbered heading helps class members locate exercise quickly.

.. nextslide:: Section include

Manage long pages using `include` directive for sections:

.. code-block:: rst
   
   Basics
   ******

   .. include:: admin.txt
   .. include:: workspace.txt
   .. include:: datastore.txt
   .. include:: layer.txt
   .. include:: group.txt
   .. include:: style.txt

.. nextslide:: Section break

Slide breaks are available for sections:

.. code-block:: rst
   
   .. rst-class:: slide-geoserver

   GeoServer Enterprise
   ====================
   
   .. ifnotslides::
      
      GeoServer Enterprise is a commercial distribution of GeoServer for GeoCat customers.

.. nextslide::

List of section-breaks provided by *geocat_slides* theme:

* ``slide-geocat`` - geonetwork enterprise branding
* ``slide-geoserver`` - geoserver enterprise branding
* ``slide-bridge``
* ``slide-service``
* ``slide-bennekom``
* ``slide-victoria``
* ``slide-outro``

ifslides and ifnotslides directives
-----------------------------------

Use `ifslides` and `ifnotslides` to control content included in presentation and workbook.

.. admonition:: Example

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

.. admonition:: Example
      
   Reference:

   * :geoserver:`WMS reference <services/wms/reference.html>`

.. code-block:: rst
         
   .. ifnotslides::
      
      Reference:
      
      * :geoserver:`WMS reference <services/wms/reference.html>`

Slide directive
---------------

Use `slide` directive for additional slides.

.. code-block:: rst

   .. slide:: GeoCat Introduction
      :level: 2
      :class: slide-intro

      .. figure:: /img/geocat_logo_text.*

      Spatial data publication and discovery with products, services and philosophy following the free and open source source software.
   
      Software development company based in Bennekom, with developers in the Netherlands, Spain and Canada.

.. nextslide:: Slide classes

Theme provides built-in slide classes:

.. admonition:: Example

   .. figure:: img/slide-heart.png

      Slide-heart class

.. nextslide:: 

.. code-block:: rst

    .. slide:: Free and Open Source Company
       :level: 1
       :class: slide-heart

.. nextslide:: Ending a presentation

Theme `slide-outro` is a nice way to end a presentation:

.. admonition:: Example

   .. figure:: img/slide_questions.png
 
     Use of `slide-outro` to end presentation.

Note `ref` link to return to top-level ``.. _contents:`` anchor:

.. code-block:: rst

   .. slide:: Questions and Review
     :level: 2
     :class: slide-outro

     :ref:`^ </contents>`

.. nextslide:: Slide directive inline-contents

Special Themes
++++++++++++++

.. list-table:: A list of the current special slides
   :widths: 20 40 20 20
   :header-rows: 1

   * - Type
     - Description
     - Class
     - Extra
   * - Introduction
     - Standard GeoCat introduction (Logo + Text). Title is not used.
     - `:class: slide-intro`
     -
   * - Author
     - Page for the Author
     - `:class: slide-author`
     -
   * - Heart
     - Adds the t-shirt slogan: Put your Heart in everything you do!
     - `:class: slide-heart`
     -
   * - GeoCat
     - Adds the lighter blue background, to be used for a title page, the 'title' is centered, do not use with additional text
     - `:class: slide-geocat`
     - Background color: #009BD2
   * - GeoNetwork
     - To be used for a GeoNetwork Enterprise title page, the 'title' is centered, do not use with additional text
     - `:class: slide-geonetwork`
     - Background color: #0099CC
   * - GeoServer
     - To be used for a GeoServer Enterprise title page, the 'title' is centered, do not use with additional text
     - `:class: slide-geoserver`
     - Background color: #00AD9F
   * - Bridge
     - Adds the yellow background, to be used for a Bridge title page, the 'title' is centered, do not use with additional text
     - `:class: slide-bridge`
     - Background color: #FFD200
   * - Live
     - Adds the orange background, to be used for a Live title page, the 'title' is centered, do not use with additional text
     - `:class: slide-live`
     - Background color: #FF9900
   * - Service
     - Adds the dark blue background, to be used for a GeoCat Services title page, the 'title' is centered, do not use with additional text
     - `:class: slide-service`
     - Background color: #1F1249
   * - Bennekom
     - Adds a photo of Bennekom as background, do not use with additional text
     - `:class: slide-bennekom`
     -
   * - Victoria
     - Adds a photo of Victoria as background, do not use with additional text
     - `:class: slide-victoria`
     -
   * - Outro
     - Slide to end your workshop/presentation, the content is positioned at the bottom, designed for a maximum of 2 lines of text
     - `:class: slide-outro`
     -

.. ifnotslides::
   
Slide directive inline-contents
+++++++++++++++++++++++++++++++

.. admonition:: Example

   Slide `inline-contents` used to generate a slide, and include the text in the workbook.
   
      Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.

.. nextslide::

.. admonition:: Example

   .. figure:: img/slide-inline-example.png
  
      Slide inline-contents example

.. nextslide::

.. code-block:: rst

   .. slide:: GeoCat Documentation Example
      :level: 2
      :inline-contents: True
  
      Writing guide with cut-and-paste examples for your own documentation, user manuals, and training materials.

Special Markup
--------------

Text size
+++++++++

By adding a class the text of a slide, or just a block can be changed. The available classes are: ``text-50``, ``text-60``, ``text-70``, ``text-80`` and ``text-90``

Usage:

.. code-block:: rst
   :linenos:

   .. slide:: GeoCat Slides Example
      :level: 1
      :class: text-50

Containers
++++++++++

Containers in ``rst`` will be translated to a HTML ``<div>``. The text after the ``::`` will be the class names(s) of the ``<div>``, so adding more than 1 term will end up in more than 1 class.

A container can be used to manipulate text size for a small part of the slide for example. However, the text size of the title element is left as-is.

Usage:

.. code-block:: rst
   :linenos:

   .. slide:: Container example
      :level: 2
      :inline-contents: False

      .. container:: col-container


Grids
+++++

When you want to display your contents in 2 (or 3) columns you have to use nested containers. The first container gets the class ``col-container`` and the children get class ``col-6`` for example.
Everything is based on a 12 column grid, so the columns should total 12. So you can use 2 columns of ``col-6``, or a column of ``col-4`` and ``col-8``.

The following column options are available:

* ``col-4`` - `for 2 or 3 column layouts`
* ``col-6``
* ``col-8``
* ``col-12`` - `special case for vertically centering texts`
* ``col-middle`` (alias: ``col-center``) - `vertically center text/content`
* ``col-bottom`` (alias: ``col-end``) - `align text/content to the bottom`
* ``col-left`` - `align content to the left of the column`
* ``col-right``  - `align content to the right of the column`

Usage:

.. code-block:: rst
   :linenos:

   .. slide:: Example with Grid
      :level: 2

      .. container:: col-container

         .. container:: col-6 col-middle text-80

            Depending on the view configuration, editors can reorder elements using up and down controls.

         .. container:: col-6

            .. figure:: img/editor-control-updown.png

Vertically aligned text (or content)
++++++++++++++++++++++++++++++++++++

Some extra configuration is needed to vertically align text, it's a combination of css flexbox and grid.

The slide itself needs a class ``box``, the content needs a container with class ``col-container`` and a child with the classes ``col-12`` and ``col-middle`` or ``col-bottom``

Available classes:

* ``col-middle`` (alias: ``col-center``) - vertically center text/content
* ``col-bottom`` (alias: ``col-end``) - align text/content to the bottom

Usage:

.. code-block:: rst
   :linenos:

   .. slide:: Vertical text example
      :level: 2
      :class: box

      .. container:: col-container

         .. container:: col-12 col-middle blue

            Depending on the view configuration, editors can reorder elements using up and down controls.

Custom colours
++++++++++++++

The base styles have some colouring options, you can use the class directly, or [declare a role](https://docutils.sourceforge.io/docs/ref/rst/directives.html#custom-interpreted-text-roles) and use it inline. The role has to be declared on the same level as a slide.

Available classes (roles):

* ``blue``
* ``yellow``
* ``green``
* ``red``
* ``black``
* ``white``

Example with a ``role`` and class (``blue``):

.. code-block:: rst
   :linenos:

   .. role:: green

   .. slide:: Re-ordering elements
      :level: 2
      :inline-contents: False
      :class: box

      .. container:: col-container

         .. container:: col-12 col-middle blue

            Depending on the view configuration, :green:``editors can`` reorder elements using up and down controls.


Instructor notes
----------------

Use ``only`` directive to include content in the instructor build of the workbook.

.. admonition:: Example

   .. note:: *Instructor*: What is the difference between the ``CRS:84`` and ``EPSG:4326``?

      .. admonition:: Instructor Notes

         The difference is the strict definition of axis order.

.. nextslide:: 

.. code-block:: rst
   :linenos:
   
   .. note:: *Instructor*: What is the difference between the ``CRS:84`` and ``EPSG:4326``?

      .. only:: instructor

         .. admonition:: Instructor Notes

            The difference is the strict definition of axis order.

Writing Exercises
=================

Avoid including exercise in slides
----------------------------------

Use `admonition` and `ifnotslides` directive to avoid including the full exercises into presentations.

.. admonition:: Example
   
   **WMS 1.3.0 GetCapabilities request**
  
   .. admonition:: Exercise
      
      Show the WMS GetCapabilities
   
.. admonition:: Example
   
   **WMS 1.3.0 GetCapabilities request**
   
   .. include:: wms_getcapabilities_exercise.txt

.. code-block:: rst

   WMS 1.3.0 GetCapabilities request
   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   
   .. ifslides::
      
      .. admonition:: Exercise
         
         Show the WMS GetCapabilities
   
   .. ifnotslides::
   
      .. include:: wms_getcapabilities_exercise.txt

.. nextslide:: 

Exercises are written using :file:`txt` extension to avoid being processed by :command:`sphinx-build` until included.

:file:`wms_getcapabilities_exercise.txt`:

.. literalinclude:: wms_getcapabilities_exercise.txt
   :language: rst

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

.. nextslide:: Admonition and topic sentence

.. ifnotslides:: 
   
   Use combination of `admonition` to state type of exercise, and a topic sentence to introduce the step-by-step instructions:

.. admonition:: Example
      
   .. admonition:: Exercise

      Examine the styles of our newly imported layers, and compare two layers with the same geometries:

      #. Click :guilabel:`Layer Preview`.
         
.. code-block:: rst

   .. admonition:: Exercise

      Examine the styles of our newly imported layers, and compare two layers with the same geometries:

      #. Click :guilabel:`Layer Preview`.
   
Step-by-step instructions
-------------------------

Writing step-by-step instructions:

* Step clearly state what is being performed
* Any data entry or form input captured as ``list-table`` directive for cut-and-paste into application
* Include screen snap attendee can use to check their work (before hitting :guilabel:`OK`)
* Show the result of the action as a new numbered step with a screen snap.
* Use ``figure`` directive for screen snap, with caption naming what is on screen, adjusting size with ``figwidth`` as needed

.. next slide:: Instructions: Reference example

.. code-block:: rst

   #. Log in as the GeoServer administrator.
     
      .. list-table:: 
         :widths: 30 70
         :width: 100%
         :stub-columns: 1

         * - User:
           - :kbd:`admin`
         * - Password:
           - :kbd:`geoserver`
         * - Remember me
           - Unchecked

      .. figure:: img/server_geoserver_login.png

         GeoServer Welcome page

.. nextslide::

.. admonition:: Example

   #. Log in as the GeoServer administrator.

      .. list-table:: 
         :widths: 30 70
         :width: 100%
         :stub-columns: 1

         * - User:
           - :kbd:`admin`
         * - Password:
           - :kbd:`geoserver`
         * - Remember me
           - Unchecked

      .. figure:: img/server_geoserver_login.png

         GeoServer Welcome page

.. nextslide:: Instructions: rst tips

Sphinx rst tips for step-by-step instructions:

* Use ``#.`` to number steps, so new steps can be added over time.
* Use directives ``kbd``, ``gui-label``, ``command``, ``menu-selection`` consistently to allow theme designer to improve workbook appearance over time.
* Use ``figure`` directive to provide caption for each screen snap

.. nextslide:: Instructions: Audience respect

Do not complicate step-by-step instructions with description or discussion. Or introduce new concepts, these should be covered in the presentation content.

* Discussion, alternatives and decisions are off-topic and confusing if attendee is stressed
* Do not use "simple" or "easy" as this is discouraging if attendee is frustrated
  (Common response is to blame themselves or blame the software and walk away).

If you really need to take a break for discussion, perhaps in an instructor demo. Make a clearly numbered step that is just discussion.

.. slide:: Questions and Review
  :level: 2
  :class: slide-outro
  
  :ref:`^<contents>`
