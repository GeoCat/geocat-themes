# Minimal makefile for Sphinx documentation
#

# You can set these variables from the command line.
SPHINXOPTS    = -j auto -W --keep-going -n
SPHINXBUILD   = sphinx-build
SPHINXPROJ    = GeoCatTestSlides
SOURCEDIR     = src/sphinx
BUILDDIR      = target

# Hide internal sphinx warnings
PYTHONWARNINGS=

# Put it first so that "make" without argument is like "make help".
help:
	@echo Generate slides:
	@echo "  slides      to make HTML slides"
	@echo "  html        to make HTML documentation handout"
	@echo "  clean       to clean build directory"
	@echo
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)

.PHONY: help Makefile

# Catch-all target: route all unknown targets to Sphinx using the new
# "make mode" option.  $(O) is meant as a shortcut for $(SPHINXOPTS).
%: Makefile
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)