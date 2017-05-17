'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function nullPropagation(accessor, defaultValue) {
  try {
    return accessor();
  } catch (error) {
    if (error instanceof TypeError) {
      if (typeof defaultValue !== 'undefined') {
        return defaultValue;
      }
      return;
    }
    throw error;
  }
}

exports.default = nullPropagation;
