'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmbeddedArrayField = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _adminOnRest = require('admin-on-rest');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A container component that shows embedded array elements as a list of input sets
 *
 * You must define the fields and pass them as children or only use one field for primitive arrays.
 *
 * @example Display all the items of an order
 * // order = {
 * //   id: 123,
 * //   items: [
 * //       { qty: 1, price: 10 },
 * //       { qty: 3, price: 15 },
 * //   ],
 * // }
 * <EmbeddedArrayField source="items">
 *      <NumberField source="qty" />
 *      <NumberField source="price" options={{ style: 'currency', currency: 'USD' }} />
 * </EmbeddedArrayField>
 * @example Display all the tags of a product
 * // product = {
 * //   id: 123,
 * //   tags: [
 * //       'relaxation',
 * //       'chair',
 * //   ],
 * // }
 * <EmbeddedArrayField source="tags">
 *      <ChipField />
 * </EmbeddedArrayField>
 */
var EmbeddedArrayField = exports.EmbeddedArrayField = function (_Component) {
    (0, _inherits3.default)(EmbeddedArrayField, _Component);

    function EmbeddedArrayField() {
        (0, _classCallCheck3.default)(this, EmbeddedArrayField);
        return (0, _possibleConstructorReturn3.default)(this, (EmbeddedArrayField.__proto__ || Object.getPrototypeOf(EmbeddedArrayField)).apply(this, arguments));
    }

    (0, _createClass3.default)(EmbeddedArrayField, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                resource = _props.resource,
                children = _props.children,
                source = _props.source,
                record = _props.record;

            var layoutProps = { resource: resource, basePath: '/', record: record };
            var elements = (0, _lodash2.default)(record, source) || [];
            return _react2.default.createElement(
                'div',
                null,
                elements.map(function (element, i) {
                    return _react2.default.createElement(
                        _adminOnRest.SimpleShowLayout,
                        (0, _extends3.default)({}, layoutProps, { key: i }),
                        _react2.default.Children.map(children, function (child) {
                            return _react2.default.cloneElement(child, {
                                source: child.props.source ? source + '[' + i + '].' + child.props.source : source + '[' + i + ']'
                            });
                        })
                    );
                }, this)
            );
        }
    }]);
    return EmbeddedArrayField;
}(_react.Component);

EmbeddedArrayField.propTypes = {
    addLabel: _propTypes2.default.bool,
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired,
    data: _propTypes2.default.object,
    label: _propTypes2.default.string,
    record: _propTypes2.default.object,
    resource: _propTypes2.default.string,
    source: _propTypes2.default.string.isRequired
};

EmbeddedArrayField.defaultProps = {
    addLabel: true
};

exports.default = EmbeddedArrayField;