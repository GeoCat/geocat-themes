Writing Guide
*************

.. slideconf::
   :autoslides: False

.. slide:: Writing Guide
   
   `Workbook <../../guide/index.html>`__ with visual examples alongside cut and paste code-blocks.
   
   :ref:`^<Contents>`

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

.. include:: structure.txt
.. include:: inline.txt
.. include:: block.txt
.. include:: references.txt