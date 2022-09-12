/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  RichText,
  InspectorControls,
  ColorPalette,
  MediaUpload
} = wp.blockEditor;
const {
  PanelBody,
  IconButton,
  RangeControl
} = wp.components; // line 1 is destructuring. it can be written as line 3
// const registerBlockType = wp.block.registerBlockType;

registerBlockType("myguten-block/test-block", {
  title: "Call to Action",
  description: "Block to generate a custom Call to Action",
  icon: "thumbs-up",
  attributes: {
    title: {
      type: "string",
      source: "html",
      selector: "h3"
    },
    titleColor: {
      type: "string",
      default: "black"
    },
    body: {
      type: "string",
      source: "html",
      selector: "p"
    },
    backgroundImage: {
      type: "string",
      default: null
    },
    overlayColor: {
      type: 'string',
      default: 'black'
    },
    overlayOpacity: {
      type: 'string',
      default: '0.3'
    }
  },
  category: "common",
  edit: props => {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      title,
      body,
      titleColor,
      backgroundImage,
      overlayColor,
      overlayOpacity
    } = attributes;

    function setTitle(newTitle) {
      setAttributes({
        title: newTitle
      });
    }

    function setBody(newBody) {
      setAttributes({
        body: newBody
      });
    }

    function setTitleColor(newColor) {
      setAttributes({
        titleColor: newColor
      });
    }

    function onSelectImage(newImage) {
      setAttributes({
        backgroundImage: newImage.sizes.full.url
      });
    }

    function onOverlayColorChange(newOverlayColor) {
      setAttributes({
        overlayColor: newOverlayColor
      });
    }

    function onOverlayOpacityChange(newOpacity) {
      console.log({
        newOpacity
      });
      setAttributes({
        overlayOpacity: `${newOpacity}`
      });
    }

    console.log('from edit', overlayOpacity);
    return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Font color setttings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select a title color")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: titleColor,
      onChange: setTitleColor
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Background Image setttings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Select a background image")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectImage,
      allowedTypes: ["image"],
      value: backgroundImage,
      render: _ref => {
        let {
          open
        } = _ref;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          onClick: open,
          icon: "upload",
          className: "editor-media-placeholder__button is-button is-default is-large"
        }, "Select Image");
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        marginTop: '20px',
        marginBottom: '40px'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Overlay Color:")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPalette, {
      value: overlayColor,
      onChange: onOverlayColorChange
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: 'Overlay Opacity',
      value: parseFloat(overlayOpacity),
      onChange: onOverlayOpacityChange,
      min: 0,
      max: 1,
      step: 0.05
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "cta-container",
      style: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: overlayOpacity
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "h3",
      placeholder: "Your CTA Title",
      value: title,
      onChange: setTitle,
      style: {
        color: titleColor
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      key: "editable",
      tagName: "p",
      placeholder: "Your CTA Description",
      value: body,
      onChange: setBody
    }))];
  },
  save: props => {
    const {
      attributes
    } = props;
    const {
      title,
      titleColor,
      body,
      backgroundImage,
      overlayColor,
      overlayOpacity
    } = attributes;
    console.log('from save', overlayOpacity);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      class: "cta-container",
      style: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "cta-overlay",
      style: {
        background: overlayColor,
        opacity: `${overlayOpacity}`
      }
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      style: {
        color: titleColor
      }
    }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: body
    }));
  }
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map