import os
from paver.easy import *
import paver.doctools

'''
Generate GeoServer Enterprise documentation.
'''
options(
    setup=dict(
        name='GeoCat ExampleDocumentation',
        version='0.1.0',
        description='Documentation example for GeoCat',
        author='Jody Garnett',
        author_email='jody.garnett@geocat.net',
   ),
    sphinx=Bunch(
       sourcedir='src',
       docroot='.',
       builder='html',
       doctrees='build/doctrees',
       builddir='build',
       apidir = None
    )
)

@task
@needs('paver.doctools.html')
def builddocs():
    '''
    Create html docs and install into build/html
    '''