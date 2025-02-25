/**
 * Copyright (c) 2018, Travis Clarke (https://www.travismclarke.com/)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):e.ImageMap=t(e.$)}(this,function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}function o(e){return i(e)||a(e)||u()}function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}}function a(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(e,t){return new s(e,t)}e=e&&e.hasOwnProperty("default")?e.default:e;var d="resize",f="load",l="complete",s=function(){function e(n,r){t(this,e),this.selector=n instanceof Array?n:o(document.querySelectorAll(n)),document.readyState!==l?window.addEventListener(f,this.update.bind(this)):this.update(),window.addEventListener(d,this.debounce(this.update,r).bind(this))}return r(e,[{key:"update",value:function(){var e=this;this.selector.forEach(function(t){if(void 0!==t.getAttribute("usemap")){t.cloneNode().addEventListener(f,e.handleImageLoad(t.offsetWidth,t.offsetHeight))}})}},{key:"debounce",value:function(e){var t,n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];window.clearTimeout(t),t=window.setTimeout(function(t){return e.apply(t,i)},r,n)}}},{key:"handleImageLoad",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(r){var i=r.target.width,a=r.target.height,u=t/100,c=n/100,d=r.target.getAttribute("usemap").replace(/^#/,"")
  ;o(document.querySelectorAll(e.genAreaSelector(d))).forEach(function(e){var t=e.dataset.coords=e.dataset.coords||e.getAttribute("coords"),n=t.split(",");e.setAttribute("coords",""+n.map(function(e,t){return t%2==0?+(n[t]/i*100*u):+(n[t]/a*100*c)}))})}}}],[{key:"genAreaSelector",value:function(e){return'map[name="'.concat(e,'"] area')}}]),e}();return void 0!==e&&e.fn&&(e.fn.imageMap=function(e){return new s(this.toArray(),e)}),c.VERSION="1.1.5",c});

// Docsify plugin
(function () {

  function handleMouseEvents(mapId, newImage, areaDescriptionTitle, areaDescriptionContent, areaDescriptionContainer, mouseEvent) {
    if (mouseEvent.type == 'mouseover') {
      var images = document.querySelectorAll(`#${mapId} .hover-image`);
      images.forEach(function (im) {
        im.style.display = null;
      });

      newImage.style.display = "block";
      var areaTitle = mouseEvent.target.getAttribute('title');
      var areaDescription = mouseEvent.target.getAttribute('description');
      if (areaTitle) {
        areaDescriptionTitle.innerHTML = areaTitle;
        areaDescriptionContent.innerHTML = areaDescription;
        areaDescriptionContainer.style.display = 'block';
      } else {
        areaDescriptionContainer.style.display = 'none';
      }
    } else if (mouseEvent.type == 'mouseout') {
      newImage.style.display = "none";
      areaDescriptionContainer.style.display = 'none';
    } else if (mouseEvent.type == 'click') {
      var areaLink = mouseEvent.target.getAttribute('link');
      if (areaLink) {
        window.location.href = areaLink;
      }
    }
  }

  function activateDot(id) {
    var dotNode = document.querySelector(`#${id}`)
    if (dotNode) {
      dotNode.classList.add('active');
    }
  }

  function imageMapping(hook, vm) {
    hook.doneEach(function () {
      // OPTIMIZE
      // Can't find any other solution. Contributions to remove this timeout is more than welcome.
      // Otherwise it won't detect usemaps when the first page isn't the one which contains
      // the maps
      setTimeout(function() {
        var hasImageMap = ImageMap('img[usemap]');
        // HACK
        // Little hack to let Safari detecting swipes
        document.addEventListener('touchstart', function(event) {});

        if (hasImageMap.selector && hasImageMap.selector[0]) {
          var mapId = hasImageMap.selector[0].getAttribute('usemap').slice(1);
          var imageContainer = document.getElementById(mapId);

          // Prevents creating the elements more than once if the user access
          // the webpage multiple times
          if (!imageContainer.classList.contains('map-ready')) {
            var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
            var mapContainer = document.getElementsByName(mapId);
            var areas = document.querySelectorAll(`map[name='${mapId}'] area`);

            var areaDescriptionContainer = document.createElement('div');
            areaDescriptionContainer.className = 'area-description-container';
            areaDescriptionContainer.id = `${mapId}-description-container`;
            imageContainer.appendChild(areaDescriptionContainer);
            var areaDescriptionTitle = document.createElement('p');
            areaDescriptionTitle.className = 'area-description-container-title';
            var areaDescriptionContent = document.createElement('p');
            areaDescriptionContent.className = 'area-description-container-description';
            areaDescriptionContainer.appendChild(areaDescriptionTitle);
            areaDescriptionContainer.appendChild(areaDescriptionContent);

            var mobileScrollingDotsContainer = document.createElement('div');
            mobileScrollingDotsContainer.className = 'area-mobile-scrolling-container';
            mobileScrollingDotsContainer.id = `${mapId}-mobile-scrolling-container`;
            imageContainer.appendChild(mobileScrollingDotsContainer);

            areas.forEach(function (area, areaIdx) {
              var newImage = document.createElement('img');
              newImage.src = area.getAttribute('src');
              newImage.className = 'hover-image';
              newImage.id = `${mapId}_image_${areaIdx}`;
              newImage.setAttribute('data-no-zoom', '');
              imageContainer.appendChild(newImage);

              if (!supportsTouch) {
                area.addEventListener('mouseover', handleMouseEvents.bind(this, mapId, newImage, areaDescriptionTitle, areaDescriptionContent, areaDescriptionContainer));
                area.addEventListener('mouseout', handleMouseEvents.bind(this, null, newImage, null, null, areaDescriptionContainer));
                area.addEventListener('click', handleMouseEvents.bind(this, null, null, null, null, null));
              } else {
                var dot = document.createElement('div');
                dot.className = 'dot';
                dot.id = `${mapId}-dot-${areaIdx}`;
                mobileScrollingDotsContainer.appendChild(dot);

                var prevArea = document.getElementById(`${mapId}_image_0`);
                prevArea.style.display = "block";
                activateDot(`${mapId}-dot-0`);
                var areaTitle = areas[0].getAttribute('title');
                var areaDescription = areas[0].getAttribute('description');
                if (areaTitle) {
                  areaDescriptionTitle.innerHTML = areaTitle;
                  areaDescriptionContent.innerHTML = areaDescription;
                  areaDescriptionContainer.style.display = 'block';
                }
                mobileScrollingDotsContainer.style.top = `calc(100% + ${areaDescriptionContainer.clientHeight}px)`;
                imageContainer.style['margin-bottom'] = `${areaDescriptionContainer.clientHeight + 20}px`;
              }
            })
            if (supportsTouch) {
              imageContainer.classList.add('mobile-mode');

              var touchStartX = 0;
              var touchEndX = 0;
              var touchDiff = 0;
              var scrollDirection = null;
              var currentArea = 0;
              var areaCount = areas.length;

              imageContainer.addEventListener('touchstart', function(event) {
                event.preventDefault();
                touchStartX = event.changedTouches[0].screenX;
              });
              imageContainer.addEventListener('touchend', function(event) {
                event.preventDefault();
                touchEndX = event.changedTouches[0].screenX;
                if (touchEndX < touchStartX) {
                  scrollDirection = 0; // left
                  touchDiff = touchStartX - touchEndX;
                } else {
                  scrollDirection = 1; // right
                  touchDiff = touchEndX - touchStartX;
                }
                if (touchDiff > 50) {
                  // Resets default
                  var images = document.querySelectorAll(`#${mapId} .hover-image`);
                  var activeDot = document.querySelector(`#${mapId}-mobile-scrolling-container .dot.active`)
                  images.forEach(function (im) {
                    im.style.display = null;
                  });
                  if (activeDot) {
                    activeDot.classList.remove('active')
                  }

                  // Swipe to left
                  if (scrollDirection == 0) {
                    currentArea++;
                    if ((areaCount) > currentArea) {
                      var nextArea = document.getElementById(`${mapId}_image_${currentArea}`);
                      nextArea.style.display = "block";
                      activateDot(`${mapId}-dot-${currentArea}`);
                    } else {
                      currentArea = 0;
                      var nextArea = document.getElementById(`${mapId}_image_0`);
                      nextArea.style.display = "block";
                      activateDot(`${mapId}-dot-0`);
                    }

                    var areaTitle = areas[currentArea].getAttribute('title');
                    var areaDescription = areas[currentArea].getAttribute('description');
                    if (areaTitle) {
                      areaDescriptionTitle.innerHTML = areaTitle;
                      areaDescriptionContent.innerHTML = areaDescription;
                      areaDescriptionContainer.style.display = 'block';
                    } else {
                      areaDescriptionContainer.style.display = 'none';
                    }
                    // Swipe to right
                  } else {
                    currentArea--;
                    if (currentArea < 0) {
                      currentArea = areaCount - 1;
                    }
                    var prevArea = document.getElementById(`${mapId}_image_${currentArea}`);
                    prevArea.style.display = "block";
                    activateDot(`${mapId}-dot-${currentArea}`);

                    var areaTitle = areas[currentArea].getAttribute('title');
                    var areaDescription = areas[currentArea].getAttribute('description');
                    if (areaTitle) {
                      areaDescriptionTitle.innerHTML = areaTitle;
                      areaDescriptionContent.innerHTML = areaDescription;
                      areaDescriptionContainer.style.display = 'block';
                    } else {
                      areaDescriptionContainer.style.display = 'none';
                    }
                  }
                  mobileScrollingDotsContainer.style.top = `calc(100% + ${areaDescriptionContainer.clientHeight}px)`;
                  imageContainer.style['margin-bottom'] = `${areaDescriptionContainer.clientHeight + 20}px`;
                }
              });
            }
            imageContainer.classList.add('map-ready');
          }
        }
      }, 1000)
    })
  }

  var install = function (hook, vm) {
    imageMapping(hook, vm);
  }

  $docsify.plugins = [].concat(install, $docsify.plugins)
}())
