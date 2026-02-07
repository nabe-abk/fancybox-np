#
# Makefile
#
NAME       = fancybox-np
OUT_DIR    = ..

COMPRESSOR = terser
OPTIONS    = -c -m --source-map "includeSources,url='$(NAME).min.js.map'"

MINIFY     = cleancss
M_OPTIONS  =

OUTPUT_JS  = $(OUT_DIR)/$(NAME).min.js
OUTPUT_CSS = $(OUT_DIR)/$(NAME).min.css

JS_FILES = \
	js/core.js		\
	js/media.js		\
	js/guestures.js		\
	js/slideshow.js		\
	js/fullscreen.js	\
	js/thumbs.js		\
	js/hash.js		\
	js/wheel.js

CSS_FILES = css/*.css

all:  $(OUTPUT_JS) $(OUTPUT_CSS)


$(OUTPUT_JS): $(JS_FILES) Makefile
	$(COMPRESSOR) $(JS_FILES) $(OPTIONS) -o $(OUTPUT_JS)

$(OUTPUT_CSS): $(CSS_FILES) Makefile
	$(MINIFY) -o $(OUTPUT_CSS) $(CSS_FILES)

