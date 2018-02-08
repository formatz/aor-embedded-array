'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _adminOnRest = require('admin-on-rest');

var isRequired = function isRequired(validate) {
    if (validate === _adminOnRest.required) return true;
    if (Array.isArray(validate)) {
        return validate.includes(_adminOnRest.required);
    }
    return false;
};

exports.default = isRequired;