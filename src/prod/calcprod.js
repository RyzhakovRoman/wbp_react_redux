var calcprod =
webpackJsonp_name_([0],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(233);

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(65);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(17);

var _redux = __webpack_require__(34);

var _index = __webpack_require__(235);

var _index2 = _interopRequireDefault(_index);

var _calc = __webpack_require__(240);

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default);

store.dispatch({
    type: 'ADD_ARRAY_COUNTRIES',
    countries: ['Таиланд', 'Турция', 'Египет', 'Чехия', 'США', 'ОАЭ', 'Алжир', 'Армения', 'Бельгия', 'Бразилия', 'Болгария', 'Вьетнам', 'Гаити', 'Германия', 'Грузия', 'Дания', 'Индия', 'Ирландия', 'Италия', 'Кипр', 'Казахстан']
});

_reactDom2.default.render(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_calc2.default, null)
), document.getElementById('calc'));

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(234);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(57)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(56)(undefined);
// imports


// module
exports.push([module.i, ".ul {\r\n    width: 130px;\r\n    height: 100px;\r\n    overflow: auto;\r\n}\r\n.ul > li {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(34);

var _countriesReducer = __webpack_require__(236);

var _countriesReducer2 = _interopRequireDefault(_countriesReducer);

var _countryFilterTextReducer = __webpack_require__(237);

var _countryFilterTextReducer2 = _interopRequireDefault(_countryFilterTextReducer);

var _dataReducer = __webpack_require__(238);

var _dataReducer2 = _interopRequireDefault(_dataReducer);

var _costReducer = __webpack_require__(239);

var _costReducer2 = _interopRequireDefault(_costReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    countries: _countriesReducer2.default,
    countryFilterText: _countryFilterTextReducer2.default,
    data: _dataReducer2.default,
    cost: _costReducer2.default
    // downloadCountries: downloadCountriesReducer
});
// import downloadCountriesReducer from './downloadCountriesReducer';

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case 'ADD_ARRAY_COUNTRIES':
            return prevState.concat(action.countries);
        default:
            return prevState;
    }
};

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var stateCountryFilterText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var action = arguments[1];

    switch (action.type) {
        case 'CHANGE_FILTER_TEXT':
            return action.text;
        default:
            return stateCountryFilterText;
    }
};

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_DATA_COUNTRY':
            newState.country = action.country;
            return newState;
        case 'CHANGE_DATA_DATE_OF_BIRTH':
            newState.dateOfBirth = action.dateOfBirth;
            return newState;
        case 'CHANGE_DATA_START_DATE':
            newState.startDate = action.startDate;
            return newState;
        case 'CHANGE_DATA_END_DATE':
            newState.endDate = action.endDate;
            return newState;
        default:
            return prevState;
    }
};

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { value: 0, requestState: 'notRequested' };
    var action = arguments[1];

    var newState = Object.assign({}, prevState);
    switch (action.type) {
        case 'CHANGE_TO_SUCCESS':
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_TO_ERROR':
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_TO_LOADED':
            newState.requestState = action.requestState;
            return newState;
        case 'CHANGE_COST_VALUE':
            newState.value = action.value;
            return newState;
        default:
            return prevState;
    }
};

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _countrySelectionBar = __webpack_require__(241);

var _countrySelectionBar2 = _interopRequireDefault(_countrySelectionBar);

var _selectionDatesOfTravel = __webpack_require__(246);

var _selectionDatesOfTravel2 = _interopRequireDefault(_selectionDatesOfTravel);

var _selectionDateOfBirth = __webpack_require__(248);

var _selectionDateOfBirth2 = _interopRequireDefault(_selectionDateOfBirth);

var _cost = __webpack_require__(250);

var _cost2 = _interopRequireDefault(_cost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calc = function (_React$Component) {
    _inherits(Calc, _React$Component);

    function Calc() {
        _classCallCheck(this, Calc);

        return _possibleConstructorReturn(this, (Calc.__proto__ || Object.getPrototypeOf(Calc)).apply(this, arguments));
    }

    _createClass(Calc, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_countrySelectionBar2.default, null),
                _react2.default.createElement(_selectionDatesOfTravel2.default, null),
                _react2.default.createElement(_selectionDateOfBirth2.default, null),
                _react2.default.createElement(_cost2.default, null)
            );
        }
    }]);

    return Calc;
}(_react2.default.Component);

exports.default = Calc;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(17);

var _countrySelectionBar = __webpack_require__(242);

var _countrySelectionBar2 = _interopRequireDefault(_countrySelectionBar);

var _countryFilterTextActions = __webpack_require__(245);

var _countriesActions = __webpack_require__(253);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getListOfEligibleCountries(countries) {
    var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    text = text.toLowerCase();

    return countries.filter(function (country) {
        var i = country.toLowerCase().indexOf(text);
        if (!i) {
            return country;
        }
    });
}

function mapStateToProps(state) {
    console.log('C MapS To P', state);
    return {
        countries: getListOfEligibleCountries(state.countries, state.countryFilterText),
        state: state,
        activeCountry: state.data.country
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendFilterTextAndTextToState: function sendFilterTextAndTextToState(text) {
            console.log('send');
            dispatch((0, _countryFilterTextActions.changeCountryFilterText)(text));
            dispatch((0, _countriesActions.changeCountry)(text));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_countrySelectionBar2.default);

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _country = __webpack_require__(243);

var _country2 = _interopRequireDefault(_country);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var countrySelectionBar = function (_React$Component) {
    _inherits(countrySelectionBar, _React$Component);

    function countrySelectionBar() {
        _classCallCheck(this, countrySelectionBar);

        return _possibleConstructorReturn(this, (countrySelectionBar.__proto__ || Object.getPrototypeOf(countrySelectionBar)).apply(this, arguments));
    }

    _createClass(countrySelectionBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('countrySelectionBar', this.props);

            var tagListOfCountries = this.props.countries.map(function (country, i) {
                return _react2.default.createElement(_country2.default, { key: i, nameCountry: country });
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { type: 'text', ref: 'country', onChange: function onChange() {
                        _this2.props.sendFilterTextAndTextToState(_this2.refs.country.value);
                    }, value: this.props.activeCountry }),
                _react2.default.createElement(
                    'ul',
                    { className: 'ul' },
                    tagListOfCountries
                )
            );
        }
    }]);

    return countrySelectionBar;
}(_react2.default.Component);

exports.default = countrySelectionBar;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(17);

var _country = __webpack_require__(244);

var _country2 = _interopRequireDefault(_country);

var _dataActions = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {};
}

function mapDispatchToState(dispatch) {
    return {
        sendCountryToStateData: function sendCountryToStateData(country) {
            dispatch((0, _dataActions.changeCountry)(country));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToState)(_country2.default);

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Country = function (_React$Component) {
    _inherits(Country, _React$Component);

    function Country() {
        _classCallCheck(this, Country);

        return _possibleConstructorReturn(this, (Country.__proto__ || Object.getPrototypeOf(Country)).apply(this, arguments));
    }

    _createClass(Country, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'li',
                { onClick: function onClick() {
                        _this2.props.sendCountryToStateData(_this2.props.nameCountry);
                    } },
                this.props.nameCountry
            );
        }
    }]);

    return Country;
}(_react2.default.Component);

exports.default = Country;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeCountryFilterText = changeCountryFilterText;
function changeCountryFilterText(text) {
    return {
        type: 'CHANGE_FILTER_TEXT',
        text: text
    };
}

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(17);

var _selectionDatesOfTravel = __webpack_require__(247);

var _selectionDatesOfTravel2 = _interopRequireDefault(_selectionDatesOfTravel);

var _dataActions = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// function checkDate(date) {
//     if (date.length != 10){
//         return
//     }
// }

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        sendStartDateToStateData: function sendStartDateToStateData(date) {
            if (date.length !== 10) {
                return;
            }
            dispatch((0, _dataActions.changeStartDate)(date));
        },
        sendEndDateToStateData: function sendEndDateToStateData(date) {
            if (date.length !== 10) {
                return;
            }
            dispatch((0, _dataActions.changeEndDate)(date));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_selectionDatesOfTravel2.default);

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectionDatesOfTravel = function (_React$Component) {
    _inherits(SelectionDatesOfTravel, _React$Component);

    function SelectionDatesOfTravel() {
        _classCallCheck(this, SelectionDatesOfTravel);

        return _possibleConstructorReturn(this, (SelectionDatesOfTravel.__proto__ || Object.getPrototypeOf(SelectionDatesOfTravel)).apply(this, arguments));
    }

    _createClass(SelectionDatesOfTravel, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('SelectionDatesOfTravel', this.props);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u0434\u0430\u0442\u0430\u0445 \u043F\u043E\u0435\u0437\u0434\u043A\u0438'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'label',
                    null,
                    'C',
                    _react2.default.createElement('input', { onChange: function onChange() {
                            _this2.props.sendStartDateToStateData(_this2.refs.startDate.value);
                        }, ref: 'startDate', type: 'text', placeholder: '00.00.0000' })
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'label',
                    null,
                    '\u041F\u043E',
                    _react2.default.createElement('input', { onChange: function onChange() {
                            _this2.props.sendEndDateToStateData(_this2.refs.endDate.value);
                        }, ref: 'endDate', type: 'text', placeholder: '00.00.0000' })
                )
            );
        }
    }]);

    return SelectionDatesOfTravel;
}(_react2.default.Component);

exports.default = SelectionDatesOfTravel;

/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(17);

var _selectionDateOfBirth = __webpack_require__(249);

var _selectionDateOfBirth2 = _interopRequireDefault(_selectionDateOfBirth);

var _dataActions = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        sendDateOfBirthToStateData: function sendDateOfBirthToStateData(date) {
            if (date.length !== 10) {
                return;
            }
            dispatch((0, _dataActions.changeDateOfBirth)(date));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_selectionDateOfBirth2.default);

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectionDateOfBirth = function (_React$Component) {
    _inherits(SelectionDateOfBirth, _React$Component);

    function SelectionDateOfBirth() {
        _classCallCheck(this, SelectionDateOfBirth);

        return _possibleConstructorReturn(this, (SelectionDateOfBirth.__proto__ || Object.getPrototypeOf(SelectionDateOfBirth)).apply(this, arguments));
    }

    _createClass(SelectionDateOfBirth, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('SelectionDateOfBirth', this.props);
            return _react2.default.createElement(
                'label',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F'
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement('input', { onChange: function onChange() {
                        _this2.props.sendDateOfBirthToStateData(_this2.refs.dateOfBirth.value);
                    }, ref: 'dateOfBirth', type: 'text', placeholder: '00.00.0000' })
            );
        }
    }]);

    return SelectionDateOfBirth;
}(_react2.default.Component);

exports.default = SelectionDateOfBirth;

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(17);

var _cost = __webpack_require__(251);

var _cost2 = _interopRequireDefault(_cost);

var _costActions = __webpack_require__(252);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function checkDataForCalculation(data) {
    return !!(data.country && data.dateOfBirth && data.startDate && data.endDate);
}

function calculateCost(dispatch, data) {
    if (checkDataForCalculation(data)) {
        dispatch((0, _costActions.changeRequestStateToLoaded)());

        var promise = fetch('/webpack/php/calc.php');
        promise.then(function (response) {
            var prms = response.text();
            prms.then(function (resp) {
                console.log('стоимость расчитана', JSON.parse(resp));
                var cost = JSON.parse(resp).cost;
                dispatch((0, _costActions.changeRequestStateToSuccess)());
                dispatch((0, _costActions.changeCostValue)(cost));
            });
        });
    }
}

function mapStateToProps(state) {
    return {
        cost: state.cost.value,
        costRequestStatus: state.cost.requestState,
        data: state.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sendRequestForCostCalculation: function sendRequestForCostCalculation(data) {
            console.log('sent');
            calculateCost(dispatch, data);
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_cost2.default);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cost = function (_React$Component) {
    _inherits(Cost, _React$Component);

    function Cost() {
        _classCallCheck(this, Cost);

        return _possibleConstructorReturn(this, (Cost.__proto__ || Object.getPrototypeOf(Cost)).apply(this, arguments));
    }

    _createClass(Cost, [{
        key: 'getRequestState',
        value: function getRequestState() {
            return this.props.costRequestStatus == 'success' ? 'Цена усешно расчитана' : this.props.costRequestStatus == 'error' ? 'Ошибка расчета' : this.props.costRequestStatus == 'loaded' ? 'Цена расчитывается' : 'Цена не запрашивалась';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            console.log('Cost', this.props);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'span',
                    null,
                    this.getRequestState()
                ),
                _react2.default.createElement('br', null),
                _react2.default.createElement(
                    'span',
                    null,
                    this.props.cost,
                    ' \u0440\u0443\u0431.'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: function onClick() {
                            _this2.props.sendRequestForCostCalculation(_this2.props.data);
                        } },
                    '\u0420\u0430\u0441\u0447\u0438\u0442\u0430\u0442\u044C'
                )
            );
        }
    }]);

    return Cost;
}(_react2.default.Component);

exports.default = Cost;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeRequestStateToSuccess = changeRequestStateToSuccess;
exports.changeRequestStateToError = changeRequestStateToError;
exports.changeRequestStateToLoaded = changeRequestStateToLoaded;
exports.changeCostValue = changeCostValue;
function changeRequestStateToSuccess() {
    return {
        type: 'CHANGE_TO_SUCCESS',
        requestState: 'success'
    };
}

function changeRequestStateToError() {
    return {
        type: 'CHANGE_TO_ERROR',
        requestState: 'error'
    };
}

function changeRequestStateToLoaded() {
    return {
        type: 'CHANGE_TO_LOADED',
        requestState: 'loaded'
    };
}

function changeCostValue(cost) {
    return {
        type: 'CHANGE_COST_VALUE',
        value: cost
    };
}

// export function calculateCost() {
//    
// }

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeCountry = changeCountry;
function changeCountry(country) {
    return {
        type: 'CHANGE_DATA_COUNTRY',
        country: country

    };
}

// export function addArrayCountries(arrayCountries) {
//     return {
//         type: 'ADD_ARRAY_COUNTRIES',
//         countries: arrayCountries
//     }
// }

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeStartDate = changeStartDate;
exports.changeEndDate = changeEndDate;
exports.changeCountry = changeCountry;
exports.changeDateOfBirth = changeDateOfBirth;
function changeStartDate(date) {
    return {
        type: 'CHANGE_DATA_START_DATE',
        startDate: date
    };
}
function changeEndDate(date) {
    return {
        type: 'CHANGE_DATA_END_DATE',
        endDate: date
    };
}
function changeCountry(country) {
    return {
        type: 'CHANGE_DATA_COUNTRY',
        country: country

    };
}
function changeDateOfBirth(date) {
    return {
        type: 'CHANGE_DATA_DATE_OF_BIRTH',
        dateOfBirth: date
    };
}

/***/ })

},[232]);