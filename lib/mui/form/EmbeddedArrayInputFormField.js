'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxForm = require('redux-form');

var _adminOnRest = require('admin-on-rest');

var _isRequired = require('./isRequired');

var _isRequired2 = _interopRequireDefault(_isRequired);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A helper Input component for EmbeddedArrayInput
 *
 * It's an alternative to FormField that provides the ability to prefix the source/name
 * with a string you provide
 *
 * @example
 * <EmbeddedArrayInputFormField input={input} prefix={my_prefix} />
 */
var EmbeddedArrayInputFormField = function EmbeddedArrayInputFormField(_ref) {
    var input = _ref.input,
        prefix = _ref.prefix,
        rest = (0, _objectWithoutProperties3.default)(_ref, ['input', 'prefix']);

    var name = input.props.source ? prefix + '.' + input.props.source : prefix;
    var source = name;

    if (input.props.addField) {
        if (input.props.addLabel) {
            return _react2.default.createElement(
                _reduxForm.Field,
                (0, _extends3.default)({}, rest, input.props, {
                    name: name,
                    source: source,
                    component: _adminOnRest.Labeled,
                    isRequired: (0, _isRequired2.default)(input.props.validate)
                }),
                input
            );
        }
        return _react2.default.createElement(_reduxForm.Field, (0, _extends3.default)({}, rest, input.props, {
            name: name,
            source: source,
            component: input.type,
            isRequired: (0, _isRequired2.default)(input.props.validate)
        }));
    }
    if (input.props.addLabel) {
        return _react2.default.createElement(
            _adminOnRest.Labeled,
            (0, _extends3.default)({}, rest, { source: source, isRequired: (0, _isRequired2.default)(input.props.validate) }),
            input
        );
    }
    return typeof input.type === 'string' ? input : _react2.default.cloneElement(input, (0, _extends3.default)({}, rest, {
        source: name
    }));
};

exports.default = EmbeddedArrayInputFormField;