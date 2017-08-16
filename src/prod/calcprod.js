var calcprod =
webpackJsonp_name_([0],{

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(62);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(52);

var _redux = __webpack_require__(33);

var _index = __webpack_require__(232);

var _index2 = _interopRequireDefault(_index);

var _calc = __webpack_require__(234);

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default);

store.dispatch({
    type: 'ADD_ARRAY_COUNTRIES',
    countries: ['Таиланд', 'Турция', 'Египет', 'Чехия', 'Бразилия', 'США', 'ОАЭ']
});

console.log(store.getState());

// ReactDOM.render(
//     <Provider store={store}>
//         <Calc/>
//     </Provider>,
//     document.getElementById('calc')
// );


var promise = fetch('./../php/calc.php');
promise.then(function (response) {
    alert('ee');
});
console.dir(promise);

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(33);

var _countriesReducer = __webpack_require__(233);

var _countriesReducer2 = _interopRequireDefault(_countriesReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    countries: _countriesReducer2.default
});

/***/ }),

/***/ 233:
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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _countrySelectionBar = __webpack_require__(235);

var _countrySelectionBar2 = _interopRequireDefault(_countrySelectionBar);

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
                _react2.default.createElement(_countrySelectionBar2.default, null)
            );
        }
    }]);

    return Calc;
}(_react2.default.Component);

exports.default = Calc;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRedux = __webpack_require__(52);

var _countrySelectionBar = __webpack_require__(236);

var _countrySelectionBar2 = _interopRequireDefault(_countrySelectionBar);

var _countriesActions = __webpack_require__(237);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mapStateToProps(state) {
    return {
        countries: state.countries
    };
}
function mapDispatchToProps(dispatch) {
    return {
        sendActionToAddArrayOfCountries: function sendActionToAddArrayOfCountries(arrayCountries) {
            dispatch((0, _countriesActions.addArrayCountries)(arrayCountries));
        }
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_countrySelectionBar2.default);

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

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
        key: "render",
        value: function render() {
            console.log(this.props);
            return _react2.default.createElement(
                "select",
                null,
                _react2.default.createElement(
                    "option",
                    { value: "1" },
                    "11"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "2" },
                    "22"
                ),
                _react2.default.createElement(
                    "option",
                    { value: "3" },
                    "33"
                )
            );
        }
    }]);

    return countrySelectionBar;
}(_react2.default.Component);

exports.default = countrySelectionBar;

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.addArrayCountries = addArrayCountries;
function addArrayCountries(arrayCountries) {
    return {
        type: 'ADD_ARRAY_COUNTRIES',
        countries: arrayCountries
    };
}

/***/ })

},[231]);