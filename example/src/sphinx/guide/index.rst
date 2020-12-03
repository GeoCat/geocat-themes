Writing Guide
*************

.. slideconf::
   :autoslides: False

.. slide:: Writing Guide
   
   Writing guide best viewed as an html document showing visual examples alongside cut and paste code-blocks.

Sphinx writing guide providing cut and paste examples. Each section provides a visual example along with the a `code-block` showing the `rst` directives used. Where the example depends on :file:`config.py` configuration, or page stucture, these will be noted also.

   A visual example linking to :doc:`index`.
  
.. code-block:: rst
   
   A visual example linking to :doc:`index`.

:file:`index.rst`:

.. code-block:: rst
   
   Writing Guide
   =============
   
   Page heading above is as text shown for internal :command:`doc` links.

.. note:: Rich Structured Text is very flexible and and there are often more than one way to define lists, tables, or bold a couple of words in a paragraph. This writing guide only shows one way, and very rarely provides a note on practices to avoid.

References:

* `Style guide for Sphinx-based documentations <https://documentation-style-guide-sphinx.readthedocs.io/en/latest/index.html>`_ (readthedocs)
* `Sphinx Syntax <https://docs.geoserver.org/latest/en/docguide/sphinx.html>`_ and `Style Guidelines <https://docs.geoserver.org/latest/en/docguide/style.html>`_ (GeoServer Documentation Guide)

Document Structure
==================

Table of contents, Pages and Headings
-------------------------------------

Headings are tricky to manage as they need to be consistent across pages, and form a table of contents structure for the document as a whole.

:file:`index.rst`:

.. code-block:: rst
   
   ########
   Document 
   ########
   
   .. toctree::
      :maxdepth: 2
      :caption: Contents:
  
      section/index

:file:`section/index.rst`:

.. code-block:: rst

   *******   
   Section
   *******
   
   .. toctree::
      :maxdepth: 2
      :caption: Contents:
  
      page

:file:`section/page`:

.. code-block:: rst

   Page
   ====
   
   Heading
   -------
   
   Subheading
   ^^^^^^^^^^
   
   subsubheading
   """""""""""""

.. note:: Technically RST defines heading levels based on the order they appear within a page, however sphinx use of multiple pages to form a larger document and tabel of contents structure dictates consistent use of headings as shown above.

   Reference:
   
   * `Headings <https://documentation-style-guide-sphinx.readthedocs.io/en/latest/style-guide.html#headings>`_ (readthedocs.io)

Lists
-----

There are two types of lists, bulleted lists and numbered lists.

Bulleted list
^^^^^^^^^^^^^

Bullet lists are useful for a small number of items, where no order is implied:
   
   Applicable standards:
   
   * iso19139: describing information or resources that have geographic extent
   * iso19110: classification of feature types into a feature catalogue 

.. code-block:: rst

   Applicable standards:
   
   * iso19139: describing information or resources that have geographic extent
   * iso19110: classification of feature types into a feature catalogue 

.. tip:: Bullet  lists should all be of a consistent style, either short sentence fragments, or full sentences. 
   
   Switch to numbered lists when presenting more than five ideas.

Numbered list
^^^^^^^^^^^^^

Numbered lists used to define step-by-step instructions or present a larger number of ideas.

   #. Reproject ``roads`` from WGS84 to Web Mercator:
   
      .. code-block:: sql
         
         ALTER TABLE roads
           ALTER COLUMN geom TYPE geometry(MULTILINESTRING, 4326)
           USING ST_SetSRID(geom,4326);
   
   #. Efficient use of PostGIS depends on having up to date statistics of table contents for the query planner, and cleaning up unused space after table inserts and deletes:
      
      .. code-block:: sql
         
         VACUUM ANALYZE roads;
   
This is accomplished with the following code:

.. code-block:: rst

   #. Reproject ``roads`` from WGS84 to Web Mercator:
   
      .. code-block:: sql
         
         ALTER TABLE roads
           ALTER COLUMN geom TYPE geometry(MULTILINESTRING, 4326)
           USING ST_SetSRID(geom,4326);
   
   #. Efficient use of PostGIS depends on having up to date statistics of table contents for the query planner, and cleaning up unused space after table inserts and deletes:
      
      .. code-block:: sql
         
         VACUUM ANALYZE roads;

.. warning:: Use of `#.` to automatically number steps make it easy to add/remove steps and notice if an indentation mistaken accidentally restarts numbering. Numbering lists using `1.` `2.` and `3.` is not recommended. 

Nested lists
^^^^^^^^^^^^

Numbered and bulleted lists may be nested:

   #. Choice of spatial reference system for ``SRID``:
      
      * ``4326``: WGS84 popular with geographic professionals and the scientific community used for GPS data.
      * ``3857``: Web mercator using a simplified, spherical, model of the world for performance.

.. code-block::

   #. Choice of spatial reference system for ``SRID``:
      
      * ``4326``: WGS84 popular with geographic professionals and the scientific community used for GPS data.
      * ``3857``: Web mercator using a simplified, spherical, model of the world for performance.

Inline directives
=================

.. note:: Avoid basic markup
   
   .. list-table::
      :widths: 30 40 30

      * - **Format**
        - **Syntax**
        - **Output**
      * - Emphasis, single asterisk
        - :kbd:`*italics*`
        - *italics*
      * - Strong Emphasis, double asterisk
        - :kbd:`**bold**`
        - **bold**
      * - Inline literal, double back quote
        - :kbd:`\`\`monspace\`\``
        - ``monspace``

   Use of basic markup for **bold**, *italic*, and ``monospace`` is not not recommended. Please resist the temptation, and make use of the inline directives described below.

Keyboard input
--------------

Keyboard input, intended to be typed, using the :command:`kbd` directive:

  Select all text using :kbd:`Control-a`.

.. code-block:: rst
   
   Select all text using :kbd:`Control-a`.


Buttons, links or controls used for interaction
-----------------------------------------------

Use :command:`guilabel` to describe user interface elements such as buttons or links requiring interaction. 

   Press :guilabel:`OK` to change the security settings.
  
   Click :guilabel:`more details` to view settings.

   Use :guilabel:`Legal restrictions` to select ``Creative Commons Level 0`` from the list of licenses.

   Use the :guilabel:`Name` field to input :kbd:`Population`.
   
.. code-block::

   Press :guilabel:`OK` to change the security settings.
  
   Click :guilabel:`more details` to view settings.
   
   Use :guilabel:`Legal restrictions` to select ``Creative Commons Level 0`` from the list of licenses.
   
   Use the :guilabel:`Name` field to input :kbd:`Population`.

.. note:: Consistently use the words press for button interaction, and click for link interaction.
   
   Where possible start with the action to be performed and complete the sentence to describe the consequence. This is an example of directive language, rather than passive language, making instructions easier to follow.

Menu or page navigation
-----------------------

Use :command:`menuselection:` to describe navigating a menubar, toolbar, context menu, tree control, or web application pages.
   
   Select :menuselection:`Start --> Control Panel --> System` to open :command:`Windows System configuration` control panel. Click on :guilabel:`Advanced system settings` to open the :guilabel:`System Properties` dialog.
   
   Navigate to the :menuselection:`Data --> Layer Groups` page showing published basemaps.

   In the :command:`pgAdmin` object browser select :menuselection:`Server Groups --> PostGIS --> Databases`. Use the context menu to select :menuselection:`Databases --> New Database` opening the :guilabel:`New Database` dialog.
   
.. code-block:: rst

   Select :menuselection:`Start --> Control Panel --> System` to open :command:`Windows System configuration` control panel. Click on :guilabel:`Advanced system settings` to open the :guilabel:`System Properties` dialog.
   
   Navigate to the :menuselection:`Data --> Layer Groups` page showing published basemaps.
   
   In the :command:`pgAdmin` object browser select :menuselection:`Server Groups --> PostGIS --> Databases`. Use the context menu to select :menuselection:`Databases --> New Database` opening the :guilabel:`New Database` dialog.
   
.. note:: Use the word :kbd:`select` or :kbd:`selection` in conjunction with menu, tree, or page navigation.

   To make instructions easier to understand start with the navigation performed and describe the window, dialog or screen shown.

Naming tables, columns, and list items
--------------------------------------

Use inline literals to reference names of tables, columns and list items.

   Locate the ``admin_1_states_provinces`` layer and click the :guilabel:`OpenLayers` link to open a map preview in a new window.
   
   Use :guilabel:`Legal restrictions` to select ``Creative Commons Level 0`` from the list of licenses.

.. code-block:: rst

   Locate the ``admin_1_states_provinces`` layer and click the :guilabel:`OpenLayers` link to open a map preview in a new window.
   
   Use :guilabel:`Legal restrictions` to select ``Creative Commons Level 0`` from the list of licenses.

Naming terms and standards
--------------------------

Avoid repeatedly defining terms such as metadata or WFS, a :command:`glossary` can be used if needed:

  :command:`GeoServer` is a popular web service implementing the :term:`WFS` standard used to publish features using GML and :term:`json <GeoJSON>`.
  
  The OGC :term:`Web Feature Service <WFS>` standard is an example of a open web service making use of `GetCapabilities` to describe published data products and operations.

.. code-block:: rst

  :command:`GeoServer` is a popular web service implementing the :term:`WFS` standard used to publish features using :term:`GML` and :term:`json <GeoJSON>`.
  
  The OGC :term:`Web Feature Service` standard is an example of a open web service making use of `GetCapabilities` operation to describe published data products and operations to web and desktop clients.

:file:`config.py`:

:file:`index.rst`:

.. code-block:: rst
   
   ########
   Document 
   ########
   
   .. toctree::
      :maxdepth: 2
      :caption: Contents:
  
      section/index

   .. toctree::
      :maxdepth: 1
      :caption: Reference
  
      glossary

:file:`glossary.rst`:

.. code-block:: rst
   
   ********
   Glossary
   ********
   
   .. glossary::
      
      GeoJSON
        GeoJSON is used as a JSON interchange format for spatial features. Intially a community led development GeoJSON is now formally recognized as a W3C standard.
      
      WFS : OGC
      Web Feature Service : OGC
        Web Feature Services is a web service standard used to publish features. WFS is defined by the Open Geospatial Consortium as an Open Document standard for publishing FeatureTypes. FeatureType content is accessed using operations such as `GetFeature` and `DescribeFeatureType`.

Applications, commands and executables
--------------------------------------

Use :command:`command` directive to reference running executables such as GeoServer, Tomcat, and psql.

  Use :command:`psql` to connect to the ``ne`` database:

  .. code-block:: bat

     psql -U postgres ne

.. code-block:: rst

   Use :command:`psql` to connect to the ``ne`` database:

   .. code-block:: bat

      psql -U postgres ne

Filenames, file extensions and paths
------------------------------------

Use the :command:`file` directive when working with filenames, file extensions or paths.

  Check the configuration :file:`geoserver.xml` configuration file.

  Open the :file:`pdf` file.
  
  Setting used to check `GEOSERVER_DATA_DIR` location :file:`C:\\ProgramData\\GeoServer\\Data` directory for :file:`global.xml`.
  
  This setting is saved in your workspace :file:`workspaces/{workspace}/namespace.xml` configuration file.

.. code-block:: rst

   Check the configuration :file:`geoserver.xml` configuration file.

   Open the :file:`pdf` file.
 
   Setting used to check `GEOSERVER_DATA_DIR` location :file:`C:\\ProgramData\\GeoServer\\Data` directory for :file:`global.xml`.

   This setting is saved in your workspace :file:`workspaces/{workspace}/namespace.xml` configuration file.
   
.. note:: Take special care to use :kbd:`\\` as a seperator when documenting windows paths.

   It is tricky to describe user supplied locations in a path, consider using ``{`` and ``}`` characters as shown above.

URL and External links
----------------------

URLs links are included in generated output, links can also be added to text by reference, anonymous reference, or as an external link defined in :file:`config.py`.
   
   The running application is now available at http://localhost:8080/geonetwork .
   
   For more information visit the `GeoNetwork <https://geonetwork-opensource.org>`_ website.
   
   The optional GeoServer :geoserver:`WPS Extension <services/wps/index.html>` can be used to process your published layers, providing additional flexibility for web client applications.
   
   For more information on `SLD Standard`_ vist the OGC website.
   
   .. _SLD Standard: https://www.ogc.org/standards/sld


.. code-block:: rst

   The running application is now available at http://localhost:8080/geonetwork .
   
   For more information visit the `GeoNetwork <https://geonetwork-opensource.org>`_ website.
   
   The optional GeoServer :geoserver:`WPS Extension <services/wps/index.html>` can be used to process your published layers, providing additional flexibility for web client applications.
   
   For more information on `SLD Standard`_ vist the OGC website.
   
   .. _SLD Standard: https://www.ogc.org/standards/sld


:file:`config.py`:

.. code-block:: python
   
   extensions = [
     'sphinx.ext.extlinks',
   ]

   extlinks = { 
       'geoserver': ('http://docs.geoserver.org/latest/en/user/%s',''),
   }

.. _references_and_links:

References and internal links
-----------------------------

Linking to individual pages, headings and anchors:

  See details on :ref:`references_and_links`, on page :doc:`index`.
  
  Return to :doc:`home page </index>`.
  
.. code-block:: rst

   See details on :ref:`references_and_links`, on page :doc:`index`.
 
   Return to :doc:`home page </index>`.
  
:file:`index.rst`:

.. code-block:: rst
   
   Writing Guide
   =============
   
   Page heading above is as text shown for internal :command:`doc` links.
   
   .. _references_and_links::
   
   References and internal links
   -----------------------------
   
   Heading text is shown as label for internal command:`ref` links.

.. note:: GeoNetwork and GeoServer manuals use references extensively to link to headings even if the content changes location within the manual over time.

Block Directives
================

Block directives 

Comments
--------

Comments can be added at any point

   .. this is a comment
   
   .. code-block 
      
      This is a code-block directive that was commented out removing the `::`

.. code-block:: rst

   .. this is a comment
   
   .. code-block 
      
      This is a code-block directive that was commented out removing the `::`

List-tables
-----------

Bulleted lists can sometimes be cumbersome and hard to follow.  When dealing with a long list of items, use list-tables.  For example, to talk about a list of options, create a table that looks like this:

.. list-table::
   :widths: 30 70
   :stub-columns: 1
   
   * - Show All
     - check box selected
   * - Name
     - :kbd:`basemap`
    
This is done with the following code:

.. code-block:: rst

  .. list-table::
     :widths: 30 70
     :stub-columns: 1
 
     * - Show All
       - check box selected
     * - Name
       - :kbd:`basemap`

.. note:: RST provides a number of other table formatting ideas, :command:`list-table` above is recommended as the easiest to maintain.

Notes and warnings
------------------

.. Attention:: Directives at large.

.. Caution:: Don't take any wooden nickels.

.. DANGER:: Mad scientist at work!

.. Error:: Does not compute.

.. Hint:: It's bigger than a bread box.

.. Important:: Wash behind your ears.

.. Note:: This is a note.
   Equations within a note:
   :math:`G_{\mu\nu} = 8 \pi G (T_{\mu\nu}  + \rho_\Lambda g_{\mu\nu})`.

.. Tip:: 15% if the service is good.

    +---------+---------+---------+
    | Example | Example | Example |
    +=========+=========+=========+
    | Thing1  | Thing1  | Thing1  |
    +---------+---------+---------+
    | Thing2  | Thing2  | Thing2  |
    +---------+---------+---------+
    | Thing3  | Thing3  | Thing3  |
    +---------+---------+---------+
    
    .. the above kind of table is not recommended as it is hard to maintain
       please use list-table instead

.. WARNING:: Strong prose may provoke extreme mental exertion.
   Reader discretion is strongly advised.

Images & Figures
----------------

Images
^^^^^^

An image example:

.. image:: img/example.jpg

Figures
^^^^^^^

.. figure:: img/example.jpg
   :alt: reStructuredText, the markup syntax

   A figure is an image with a caption and/or a legend:

Literal Blocks
--------------

Literal blocks are indicated with a double-colon ("::") at the end of
the preceding paragraph, with the indenting to indicate the literal contents.

Example:

.. code-block:: rst
   
   Command:
   
   .. code-block:: bash
   
      % ls --help
   
   Output::

     usage: ls [-@ABCFGHLOPRSTUWabcdefghiklmnopqrstuwx1%] [file ...]

.. tip::
   
   Command: 
   
   .. code-block:: bash
  
      % ls --help
  
   Output::

     usage: ls [-@ABCFGHLOPRSTUWabcdefghiklmnopqrstuwx1%] [file ...]

Literal blocks do not offer syntax highlighting and are almost exclusively used for command output as shown in the example above.

Code Block
----------

Strongly prefer the use of ``code-block`` so syntax highlighting is available.

Example:

.. code-block:: rst

   .. code-block:: python

      if literal_block:
          text = 'is left as-is'
          spaces_and_linebreaks = 'are preserved'
          markup_processing = None

.. tip::

   .. code-block:: python

      if literal_block:
          text = 'is left as-is'
          spaces_and_linebreaks = 'are preserved'
          markup_processing = None

Block quote
-----------

Block quotes:
   
.. code-block:: rst

   >> Great idea!
   >
   > Why didn't I think of that?

.. tip::


   >> Great idea!
   >
   > Why didn't I think of that?

Line Blocks
-----------

You can use line blocks, but block quotes are easier.

.. code-block:: rst

   | This is a line block. It ends with a blank line.
   |     Each new line begins with a vertical bar ("|").
   |     Line breaks and initial indents are preserved.
   | Continuation lines are wrapped portions of long lines;
     they begin with a space in place of the vertical bar.
   |     The left edge of a continuation line need not be aligned with
     the left edge of the text above it.

   | This is a second line block.
   |
   | Blank lines are permitted internally, but they must begin with a "|".

.. tip::

   | This is a line block. It ends with a blank line.
   |     Each new line begins with a vertical bar ("|").
   |     Line breaks and initial indents are preserved.
   | Continuation lines are wrapped portions of long lines;
     they begin with a space in place of the vertical bar.
   |     The left edge of a continuation line need not be aligned with
     the left edge of the text above it.

   | This is a second line block.
   |
   | Blank lines are permitted internally, but they must begin with a "|".

Block Quotes (Indentation)
--------------------------

Block quotes consist of indented body elements:

    My theory by A. Elk.  Brackets Miss, brackets.  This theory goes
    as follows and begins now.  All brontosauruses are thin at one
    end, much much thicker in the middle and then thin again at the
    far end.  That is my theory, it is mine, and belongs to me and I
    own it, and what it is too.

    -- Anne Elk (Miss)

Accidentially getting indentation wrong and 


Code Blocks
^^^^^^^^^^^

.. parsed-literal::

    # parsed-literal test
    curl -O http://someurl/release-|version|.tar-gz


.. code-block:: json
    :caption: Code Blocks can have captions.

    {
    "windows": [
        {
        "panes": [
            {
            "shell_command": [
                "echo 'did you know'",
                "echo 'you can inline'"
            ]
            },
            {
            "shell_command": "echo 'single commands'"
            },
            "echo 'for panes'"
        ],
        "window_name": "long form"
        }
    ],
    "session_name": "shorthands"
    }

CSS code also looks good

.. code-block:: CSS

    /* sidebar in content */
    .rst-content .sidebar .sidebar-title {
      display: block;
      font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 700;
      background: #f6f8fa;
      padding: 12px 24px 0 24px;
      margin: -24px -24px 24px;
      font-size: 100%;
    }
    .rst-content .sidebar {
      float: right;
      width: 40%;
      display: block;
      margin: 0 0 24px 24px;
      padding: 24px;
      background: #f6f8fa;
      border: 0;
      border-radius: 3px;
    }

Emphasized lines with line numbers
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. code-block:: python
   :linenos:
   :emphasize-lines: 3,5

   def some_function():
       interesting = False
       print 'This line is highlighted.'
       print 'This one is not...'
       print '...but this one is.'

This is done with the following code::

   .. code-block:: python
      :linenos:
      :emphasize-lines: 3,5

      def some_function():
         interesting = False
         print 'This line is highlighted.'
         print 'This one is not...'
         print '...but this one is.'

Sidebar
-------

.. sidebar:: Sidebar title

    The first hexagram is made up of six unbroken lines. These unbroken lines stand for the primal power.

    .. image:: img/example.jpg

The first hexagram is made up of six unbroken lines. These unbroken lines stand for the primal power,
which is light-giving, active, strong, and of the spirit. The hexagram is consistently strong in character,
and since it is without weakness, its essence is power or energy. Its image is heaven.
Its energy is represented as unrestricted by any fixed conditions in space and is therefore conceived of as motion.
Time is regarded as the basis of this motion.
Thus the hexagram includes also the power of time and the power of persisting in time, that is, duration.

The power represented by the hexagram is to be interpreted in a dual sense in terms of its action
on the universe and of its action on the world of men. In relation to the universe, the hexagram expresses the strong,
creative action of the Deity. In relation to the human world, it denotes the creative action of the holy man or sage,
of the ruler or leader of men, who through his power awakens and develops their higher nature.

References
----------

Footnotes
^^^^^^^^^

.. [1] A footnote contains body elements, consistently indented by at
   least 3 spaces.

   This is the footnote's second paragraph.

.. [#label] Footnotes may be numbered, either manually (as in [1]_) or
   automatically using a "#"-prefixed label.  This footnote has a
   label so it can be referred to from multiple places, both as a
   footnote reference ([#label]_) and as a hyperlink reference
   (label_).

.. [#] This footnote is numbered automatically and anonymously using a
   label of "#" only.

.. [*] Footnotes may also use symbols, specified with a "*" label.
   Here's a reference to the next footnote: [*]_.

.. [*] This footnote shows the next symbol in the sequence.

Citations
^^^^^^^^^

.. [11] This is the citation I made, let's make this extremely long so that we can tell that it doesn't follow the normal responsive table stuff.

.. [12] This citation has some ``code blocks`` in it, maybe some **bold** and
       *italics* too. Heck, lets put a link to a meta citation [13]_ too.

.. [13] This citation will have two backlinks.


Here's a reference to the above, [11]_, [12]_ and [13]_ citations.

Here is another type of citation: `citation`


Targets
^^^^^^^

.. _example:

This paragraph is pointed to by the explicit "example" target.
A reference can be found under Inline Markup, above. Inline
hyperlink targets are also possible.

Section headers are implicit targets, referred to by name. See
Targets_, which is a subsection of Body Elements.

Explicit external targets are interpolated into references such as "Python_".

.. _Python: http://www.python.org/

Targets may be indirect and anonymous.  Thus this phrase may also
refer to the Targets_ section.

Targets

Here's a hyperlink reference without a target, which generates an error.
