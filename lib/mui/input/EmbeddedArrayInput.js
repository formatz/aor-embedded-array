'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmbeddedArrayInput = undefined;

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

var _reduxForm = require('redux-form');

var _inflection = require('inflection');

var _inflection2 = _interopRequireDefault(_inflection);

var _FlatButton = require('material-ui/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _TextFieldLabel = require('material-ui/TextField/TextFieldLabel');

var _TextFieldLabel2 = _interopRequireDefault(_TextFieldLabel);

var _create = require('material-ui/svg-icons/content/create');

var _create2 = _interopRequireDefault(_create);

var _delete = require('material-ui/svg-icons/action/delete');

var _delete2 = _interopRequireDefault(_delete);

var _Divider = require('material-ui/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _adminOnRest = require('admin-on-rest');

var _EmbeddedArrayInputFormField = require('../form/EmbeddedArrayInputFormField');

var _EmbeddedArrayInputFormField2 = _interopRequireDefault(_EmbeddedArrayInputFormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    container: {
        position: 'relative'
    },
    innerContainer: {
        padding: '0 1em 1em 1em',
        width: '90%',
        display: 'inline-block'
    },
    labelContainer: {
        padding: '1.2em 1em 0 0',
        width: '90%',
        display: 'inline-block'
    },
    label: {
        top: 0,
        position: 'relative',
        textTransform: 'capitalize'
    },
    removeButton: {
        clear: 'both',
        margin: '1em',
        display: 'block',
        textAlign: 'right',
        position: 'absolute',
        right: 0,
        top: 0
    }
};

/**
 * An Input component for generating/editing an embedded array
 *
 *
 * Use it with any set of input components as children, like `<TextInput>`,
 * `<SelectInput>`, `<RadioButtonGroupInput>`, etc.
 *
 * You must define the targeted field for each child or only use one child for primitive arrays.
 *
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *              <EmbeddedArrayInput source="links">
 *                  <TextInput source="url" />
 *                  <TextInput source="context"/>
 *                  <ReferenceInput resource="tags" reference="tags" source="tag_id" >
 *                      <SelectInput optionText="name" />
 *                  </ReferenceInput>
 *               </EmbeddedArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 * @example
 * export const CommentEdit = (props) => (
 *     <Edit {...props}>
 *         <SimpleForm>
 *              <EmbeddedArrayInput source="links">
 *                  <TextInput />
 *               </EmbeddedArrayInput>
 *         </SimpleForm>
 *     </Edit>
 * );
 */

var EmbeddedArrayInput = exports.EmbeddedArrayInput = function (_Component) {
    (0, _inherits3.default)(EmbeddedArrayInput, _Component);

    function EmbeddedArrayInput() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, EmbeddedArrayInput);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = EmbeddedArrayInput.__proto__ || Object.getPrototypeOf(EmbeddedArrayInput)).call.apply(_ref, [this].concat(args))), _this), _this.renderListItem = function (_ref2) {
            var allowRemove = _ref2.allowRemove,
                items = _ref2.items,
                inputs = _ref2.inputs,
                member = _ref2.member,
                index = _ref2.index,
                translate = _ref2.translate,
                labelRemove = _ref2.labelRemove,
                readOnly = _ref2.readOnly,
                disabled = _ref2.disabled;

            var removeItem = function removeItem() {
                return items.remove(index);
            };
            var passedProps = {
                resource: _this.props.resource,
                basePath: _this.props.basePath,
                record: _this.props.record
            };

            return _react2.default.createElement(
                'div',
                { className: 'EmbeddedArrayInputItemContainer', style: styles.container },
                _react2.default.createElement(
                    'div',
                    { style: styles.innerContainer },
                    _react2.default.Children.map(inputs, function (input) {
                        return input && _react2.default.createElement(
                            'div',
                            {
                                key: input.props.source,
                                className: 'aor-input-' + member + '.' + input.props.source,
                                style: input.props.style
                            },
                            _react2.default.createElement(_EmbeddedArrayInputFormField2.default, (0, _extends3.default)({ input: input, prefix: member }, passedProps))
                        );
                    })
                ),
                allowRemove && !readOnly && !disabled && _react2.default.createElement(
                    'div',
                    { style: styles.removeButton },
                    _react2.default.createElement(_FlatButton2.default, {
                        secondary: true,
                        label: translate(labelRemove, { _: 'Remove' }),
                        icon: _react2.default.createElement(_delete2.default, null),
                        onClick: removeItem
                    })
                )
            );
        }, _this.renderList = function (_ref3) {
            var items = _ref3.fields;
            var _this$props = _this.props,
                children = _this$props.children,
                style = _this$props.style,
                translate = _this$props.translate,
                labelRemove = _this$props.labelRemove,
                labelAdd = _this$props.labelAdd,
                allowAdd = _this$props.allowAdd,
                allowRemove = _this$props.allowRemove,
                readOnly = _this$props.readOnly,
                disabled = _this$props.disabled;

            var createItem = function createItem() {
                return items.push();
            };

            return _react2.default.createElement(
                'div',
                { className: 'EmbeddedArrayInputContainer', style: style },
                _react2.default.createElement(
                    'div',
                    null,
                    items.map(function (member, index) {
                        return _react2.default.createElement(
                            'div',
                            { key: index },
                            _this.renderListItem({
                                items: items,
                                inputs: children,
                                member: member,
                                index: index,
                                translate: translate,
                                labelRemove: labelRemove,
                                allowRemove: allowRemove,
                                readOnly: readOnly,
                                disabled: disabled
                            }),
                            index < items.length - 1 && _react2.default.createElement(_Divider2.default, null)
                        );
                    })
                ),
                _react2.default.createElement('br', null),
                allowAdd && !readOnly && !disabled && _react2.default.createElement(_FlatButton2.default, {
                    primary: true,
                    icon: _react2.default.createElement(_create2.default, null),
                    label: translate(labelAdd, { _: 'Add' }),
                    onClick: createItem
                })
            );
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(EmbeddedArrayInput, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                source = _props.source,
                label = _props.label,
                addLabel = _props.addLabel,
                translate = _props.translate,
                resource = _props.resource;

            var labelStyle = Object.assign(styles.label, {
                color: this.context.muiTheme ? this.context.muiTheme.textField.focusColor : ''
            });

            var minimizedLabel = typeof label !== 'undefined' ? translate(label, { _: label }) : translate('resources.' + resource + '.fields.' + source.replace(/\./g, '.fields.').replace(/\[\d+\]/g, '') + '.name', {
                _: _inflection2.default.humanize(source.split('.').pop())
            });

            var labelElement = !addLabel && _react2.default.createElement(
                'div',
                { style: styles.labelContainer },
                _react2.default.createElement(
                    _TextFieldLabel2.default,
                    { muiTheme: this.context.muiTheme, style: labelStyle, shrink: false },
                    minimizedLabel
                )
            );

            return _react2.default.createElement(
                'div',
                null,
                labelElement,
                _react2.default.createElement(_reduxForm.FieldArray, { name: source, component: this.renderList, props: this.props })
            );
        }
    }]);
    return EmbeddedArrayInput;
}(_react.Component);

EmbeddedArrayInput.propTypes = {
    addLabel: _propTypes2.default.bool.isRequired,
    addField: _propTypes2.default.bool.isRequired,
    allowEmpty: _propTypes2.default.bool.isRequired,
    allowAdd: _propTypes2.default.bool.isRequired,
    allowRemove: _propTypes2.default.bool.isRequired,
    arrayElStyle: _propTypes2.default.object,
    basePath: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired,
    disabled: _propTypes2.default.bool,
    elStyle: _propTypes2.default.object,
    input: _propTypes2.default.object,
    label: _propTypes2.default.string,
    labelAdd: _propTypes2.default.string.isRequired,
    labelRemove: _propTypes2.default.string.isRequired,
    meta: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    resource: _propTypes2.default.string,
    readOnly: _propTypes2.default.bool,
    record: _propTypes2.default.object,
    source: _propTypes2.default.string
};
EmbeddedArrayInput.defaultProps = {
    addLabel: false,
    addField: false,
    allowEmpty: true,
    allowAdd: true,
    allowRemove: true,
    labelAdd: 'aor.input.embedded_array.add',
    labelRemove: 'aor.input.embedded_array.remove'
};
EmbeddedArrayInput.contextTypes = {
    muiTheme: _propTypes2.default.object.isRequired
};
exports.default = (0, _adminOnRest.translate)(EmbeddedArrayInput);