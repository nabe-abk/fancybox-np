// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();
  var cnt=0;

  $(document).on({
    "onInit.fb": function (e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();

        if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
          return;
        }

        e.preventDefault();
        e.stopPropagation();

        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }

        e = e.originalEvent || e;

        if (currTime - prevTime > 1000) {
          cnt=0;
        }
        cnt++;
        if (currTime - prevTime < 250) {
          return;
        }

        prevTime = currTime;

	const delta = -e.deltaX || -e.deltaY || e.wheelDelta || -e.detail;
        var   scale = current.opts.wheelScale;

        // instance[delta < 0 ? "next" : "previous"]();
        instance._zoomImage(e, undefined, undefined, undefined, delta<0 ? (1/scale)**cnt : scale**cnt);
        cnt=0;
        
      });
    }
  });
})(document, jQuery);