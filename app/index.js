webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(469);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(762);

	var _store = __webpack_require__(763);

	var _store2 = _interopRequireDefault(_store);

	var _reactRedux = __webpack_require__(470);

	var _reactRouter = __webpack_require__(604);

	var _ArticleDirectory = __webpack_require__(779);

	var _ArticleDirectory2 = _interopRequireDefault(_ArticleDirectory);

	var _ArticleCreate = __webpack_require__(790);

	var _ArticleCreate2 = _interopRequireDefault(_ArticleCreate);

	var _ArticleEdit = __webpack_require__(793);

	var _ArticleEdit2 = _interopRequireDefault(_ArticleEdit);

	var _UsersDirectory = __webpack_require__(797);

	var _UsersDirectory2 = _interopRequireDefault(_UsersDirectory);

	var _UsersCreate = __webpack_require__(799);

	var _UsersCreate2 = _interopRequireDefault(_UsersCreate);

	var _UsersEdit = __webpack_require__(800);

	var _UsersEdit2 = _interopRequireDefault(_UsersEdit);

	var _QuestionsDirectory = __webpack_require__(801);

	var _QuestionsDirectory2 = _interopRequireDefault(_QuestionsDirectory);

	var _ScheduleBuilder = __webpack_require__(803);

	var _ScheduleBuilder2 = _interopRequireDefault(_ScheduleBuilder);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();

	_reactDom2.default.render(_react2.default.createElement(
	  _reactRedux.Provider,
	  { store: store },
	  _react2.default.createElement(
	    _reactRouter.Router,
	    { history: _reactRouter.hashHistory },
	    _react2.default.createElement(
	      _reactRouter.Route,
	      { path: '/', component: _App2.default },
	      _react2.default.createElement(_reactRouter.IndexRedirect, { to: 'questions' }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'questions', component: _QuestionsDirectory2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'schedule', component: _ScheduleBuilder2.default }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'users', component: _UsersDirectory2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _UsersCreate2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':itemId', component: _UsersEdit2.default })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: ':sectionId', component: _ArticleDirectory2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _ArticleCreate2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':itemId', component: _ArticleEdit2.default })
	      )
	    )
	  )
		), document.getElementById('app'));

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(492);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _App = __webpack_require__(598);

	var _App2 = _interopRequireDefault(_App);

	var _FlashMessage = __webpack_require__(599);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Nav = __webpack_require__(752);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Loading = __webpack_require__(754);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Login = __webpack_require__(756);

	var _Login2 = _interopRequireDefault(_Login);

	var _UI = __webpack_require__(600);

	var _Layouts = __webpack_require__(676);

	var _config = __webpack_require__(760);

	var _authActions = __webpack_require__(757);

	var _flashActions = __webpack_require__(759);

	var _searchIndexActions = __webpack_require__(761);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var App = function (_React$Component) {
	  _inherits(App, _React$Component);

	  function App() {
	    _classCallCheck(this, App);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
	  }

	  _createClass(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var token = localStorage.getItem('antiVax_auth_token');

	      if (token) {
	        this.props.attemptToken(token);
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var fetchIndex = nextProps.fetchIndex;
	      var user = nextProps.user;


	      if (user && !this.props.user) {
	        fetchIndex();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var user = _props.user;
	      var searchIndex = _props.searchIndex;
	      var children = _props.children;
	      var logOut = _props.logOut;
	      var updateIndex = _props.updateIndex;
	      var attemptingLogin = _props.attemptingLogin;


	      if (attemptingLogin) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        if (user) {
	          var navItems = [{
	            id: 'questions',
	            label: 'Questions'
	          }, _config.blogposts, _config.faqs, {
	            id: 'users',
	            label: 'Users'
	          }, {
	            id: 'sections',
	            label: 'Website Sections',
	            heading: true
	          }].concat(_toConsumableArray(_config.sections), [{
	            id: 'attachments',
	            label: 'Attachments',
	            heading: true
	          }], _toConsumableArray(_config.attachments));

	          var indexInfo = '';
	          if (searchIndex.isFetching) {
	            indexInfo = _react2.default.createElement(
	              'div',
	              { className: _App2.default.App__info },
	              'Fetching...'
	            );
	          } else if (searchIndex.isUpdating) {
	            indexInfo = _react2.default.createElement(
	              'div',
	              { className: _App2.default.App__info },
	              'Updating...'
	            );
	          } else {
	            indexInfo = _react2.default.createElement(
	              'div',
	              { className: _App2.default.App__info },
	              'last updated on ',
	              _react2.default.createElement(_reactTime2.default, { value: searchIndex.lastUpdatedOn, format: 'MMMM Do YYYY (h:mm a)' }),
	              ' by ',
	              searchIndex.lastUpdatedBy
	            );
	          }

	          return _react2.default.createElement(
	            'div',
	            { className: _App2.default.App },
	            _react2.default.createElement(
	              'div',
	              { className: _App2.default.App__sidebar },
	              _react2.default.createElement(
	                'div',
	                { className: _App2.default.App__header },
	                _react2.default.createElement(
	                  'h1',
	                  { className: _App2.default.App__title },
	                  'Antivax admin'
	                )
	              ),
	              _react2.default.createElement(_Nav2.default, { items: navItems }),
	              _react2.default.createElement(
	                'div',
	                { className: _App2.default.App__options },
	                _react2.default.createElement(
	                  _Layouts.Block,
	                  { n: 0.5 },
	                  indexInfo
	                ),
	                _react2.default.createElement(
	                  _Layouts.Block,
	                  { n: 0.5 },
	                  _react2.default.createElement(
	                    _UI.Button,
	                    {
	                      inverse: true,
	                      fullWidth: true,
	                      disabled: searchIndex.isUpdating || searchIndex.isFetching,
	                      theme: 'accent1',
	                      onClick: updateIndex },
	                    'Update search index'
	                  )
	                ),
	                _react2.default.createElement(
	                  _Layouts.Block,
	                  { n: 0.5 },
	                  _react2.default.createElement(
	                    'div',
	                    { className: _App2.default.App__info },
	                    'Logged in as ',
	                    user.name
	                  )
	                ),
	                _react2.default.createElement(
	                  _UI.Button,
	                  { fullWidth: true, theme: 'accent1', onClick: logOut },
	                  'Log out'
	                )
	              )
	            ),
	            children,
	            _react2.default.createElement(_FlashMessage2.default, null)
	          );
	        } else {
	          return _react2.default.createElement(
	            'div',
	            { className: _App2.default.App },
	            _react2.default.createElement(_Login2.default, null),
	            _react2.default.createElement(_FlashMessage2.default, null)
	          );
	        }
	      }
	    }
	  }]);

	  return App;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    attemptingLogin: state.auth.isFetching,
	    user: state.auth.user,
	    searchIndex: {
	      isFetching: state.searchIndex.isFetching,
	      isUpdating: state.searchIndex.isUpdating,
	      lastUpdatedOn: state.searchIndex.lastUpdatedOn,
	      lastUpdatedBy: state.searchIndex.lastUpdatedBy
	    }
	  };
	}, function (dispatch) {
	  return {
	    attemptToken: function attemptToken(token) {
	      dispatch((0, _authActions.loginWithToken)(token));
	    },
	    logOut: function logOut() {
	      dispatch((0, _authActions.logOut)());
	      dispatch((0, _flashActions.flashMessage)('You have been successfully logged out', 'log'));
	    },
	    updateIndex: function updateIndex() {
	      dispatch((0, _searchIndexActions.updateSearchIndex)());
	    },
	    fetchIndex: function fetchIndex() {
	      dispatch((0, _searchIndexActions.fetchSearchIndex)());
	    }
	  };
		})(App);

/***/ },

/***/ 598:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI","App__header":"App__App__header___115hU","App__title":"App__App__title___1I0Bh","App__info":"App__App__info___2SITY","App__options":"App__App__options___3jQzL","App__sidebar":"App__App__sidebar___VThbe"};

/***/ },

/***/ 599:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _UI = __webpack_require__(600);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlashMessage = function FlashMessage(_ref) {
	  var message = _ref.message;
	  var type = _ref.type;

	  return _react2.default.createElement(_UI.Alert, { message: message, theme: type });
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    message: state.flash.message,
	    type: state.flash.type
	  };
		})(FlashMessage);

/***/ },

/***/ 600:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = exports.Editor = exports.Checkbox = exports.Input = exports.ModalWindowFooter = exports.ModalWindowBody = exports.ModalWindowHeader = exports.ModalWindow = exports.Alert = exports.LinkButton = exports.Button = exports.Spinner = undefined;

	var _Spinner = __webpack_require__(601);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Button = __webpack_require__(603);

	var _Button2 = _interopRequireDefault(_Button);

	var _LinkButton = __webpack_require__(665);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _Alert = __webpack_require__(667);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Input = __webpack_require__(688);

	var _Input2 = _interopRequireDefault(_Input);

	var _Checkbox = __webpack_require__(690);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Editor = __webpack_require__(692);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _Select = __webpack_require__(748);

	var _Select2 = _interopRequireDefault(_Select);

	var _ModalWindow = __webpack_require__(750);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _Spinner2.default;
	exports.Button = _Button2.default;
	exports.LinkButton = _LinkButton2.default;
	exports.Alert = _Alert2.default;
	exports.ModalWindow = _ModalWindow.ModalWindow;
	exports.ModalWindowHeader = _ModalWindow.ModalWindowHeader;
	exports.ModalWindowBody = _ModalWindow.ModalWindowBody;
	exports.ModalWindowFooter = _ModalWindow.ModalWindowFooter;
	exports.Input = _Input2.default;
	exports.Checkbox = _Checkbox2.default;
	exports.Editor = _Editor2.default;
		exports.Select = _Select2.default;

/***/ },

/***/ 601:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(602);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Spinner = function Spinner(_ref) {
	  var _ref$multipliers = _ref.multipliers;
	  var multipliers = _ref$multipliers === undefined ? {
	    minHeight: 30,
	    __inner: {
	      width: 5,
	      height: 5
	    }
	  } : _ref$multipliers;

	  var style = {
	    minHeight: baseline * multipliers.minHeight + 'rem'
	  };

	  var __innerStyle = {
	    width: baseline * multipliers.__inner.width + 'rem',
	    height: baseline * multipliers.__inner.height + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Spinner2.default.Spinner },
	    _react2.default.createElement(
	      'div',
	      { style: __innerStyle, className: _Spinner2.default.Spinner__inner },
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle1 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle2 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle3 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle4 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle5 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle6 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle7 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle8 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle9 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle10 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle11 }),
	      _react2.default.createElement('div', { className: _Spinner2.default.Spinner__circle + ' ' + _Spinner2.default.Spinner__circle12 })
	    )
	  );
	};

	exports.default = Spinner;

/***/ },

/***/ 602:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 603:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(604);

	var _Button = __webpack_require__(664);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$fullWidth = _ref.fullWidth;
	  var fullWidth = _ref$fullWidth === undefined ? false : _ref$fullWidth;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;
	  var _ref$inverse = _ref.inverse;
	  var inverse = _ref$inverse === undefined ? false : _ref$inverse;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;
	  var extraClassNames = _ref.extraClassNames;

	  var style = {
	    padding: baseline * 0.6 + 'rem ' + baseline * 1.5 + 'rem',
	    lineHeight: 1.5 * baseline + 'rem',
	    fontSize: 1.083 * baseline + 'rem'
	  };

	  if (small) {
	    style = {
	      padding: baseline * 0.3 + 'rem ' + baseline * 1 + 'rem',
	      lineHeight: 1.5 * baseline + 'rem',
	      fontSize: 0.917 * baseline + 'rem'
	    };
	  }

	  if (fullWidth) {
	    style.width = '100%';
	  }

	  var className = [];

	  className.push(inverse ? _Button2.default.InverseButton : _Button2.default.Button);

	  switch (theme) {
	    case 'accent2':
	      className.push(inverse ? _Button2.default.InverseButton_accent2 : _Button2.default.Button_accent2);
	      break;
	    case 'error':
	      className.push(inverse ? _Button2.default.InverseButton_error : _Button2.default.Button_error);
	      break;
	    case 'accent1':
	    default:
	      className.push(inverse ? _Button2.default.InverseButton_accent1 : _Button2.default.Button_accent1);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, to: to },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, href: href },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      { style: style, disabled: disabled, className: className.join(' ') + ' ' + extraClassNames, onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = Button;

/***/ },

/***/ 664:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InverseButton":"Button__InverseButton___3OQXU","InverseButton_accent1":"Button__InverseButton_accent1___aVIWO","InverseButton_accent2":"Button__InverseButton_accent2___3AOm6","InverseButton_error":"Button__InverseButton_error___3idBZ","Button":"Button__Button___QI7b2","Button_accent1":"Button__Button_accent1___1dfhw","Button_accent2":"Button__Button_accent2___Zn8z9","Button_error":"Button__Button_error___3PSUX"};

/***/ },

/***/ 665:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(604);

	var _LinkButton = __webpack_require__(666);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LinkButton = function LinkButton(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'accent1' : _ref$theme;

	  var classNames = [_LinkButton2.default.Link];

	  if (small) {
	    classNames.push(_LinkButton2.default.Link_small);
	  }

	  switch (theme) {
	    case 'accent2':
	      classNames.push(_LinkButton2.default.Link_accent2);
	      break;
	    case 'error':
	      classNames.push(_LinkButton2.default.Link_error);
	      break;
	    case 'accent1':
	    default:
	      classNames.push(_LinkButton2.default.Link_accent1);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { disabled: disabled, className: classNames.join(' '), to: to },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      { disabled: disabled, className: classNames.join(' '), href: href },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      { disabled: disabled, className: classNames.join(' '), onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = LinkButton;

/***/ },

/***/ 666:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Link":"LinkButton__Link___21qPJ","Link_small":"LinkButton__Link_small___3sLRt","Link_accent1":"LinkButton__Link_accent1___U8QOb","Link_accent2":"LinkButton__Link_accent2___1WBE1","Link_error":"LinkButton__Link_error___2PDl7"};

/***/ },

/***/ 667:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(668);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _Alert = __webpack_require__(675);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Layouts = __webpack_require__(676);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Alert = function Alert(_ref) {
	  var message = _ref.message;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'default' : _ref$theme;
	  var _ref$multipliers = _ref.multipliers;
	  var multipliers = _ref$multipliers === undefined ? {
	    padding: {
	      vertical: 1,
	      horizontal: 2
	    }
	  } : _ref$multipliers;

	  var messageStyle = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  var messageClassNames = [_Alert2.default.Alert__message];

	  switch (theme) {
	    case 'error':
	      messageClassNames.push(_Alert2.default.Alert__message_error);
	      break;
	    case 'default':
	    default:
	      messageClassNames.push(_Alert2.default.Alert__message_default);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _Alert2.default.Alert },
	    _react2.default.createElement(
	      _reactAddonsCssTransitionGroup2.default,
	      { transitionName: 'alert', transitionEnterTimeout: 200, transitionLeaveTimeout: 200 },
	      message ? _react2.default.createElement(
	        _Layouts.Block,
	        null,
	        _react2.default.createElement(
	          'div',
	          { style: messageStyle, className: messageClassNames.join(' ') },
	          message
	        )
	      ) : null
	    )
	  );
	};

	exports.default = Alert;

/***/ },

/***/ 675:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(677);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(678);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Wrap = __webpack_require__(679);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _Grid = __webpack_require__(680);

	var _List = __webpack_require__(681);

	var _ListInline = __webpack_require__(683);

	var _Media = __webpack_require__(685);

	var _Page = __webpack_require__(687);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Block = _Block2.default;
	exports.Flex = _Flex2.default;
	exports.Wrap = _Wrap2.default;
	exports.Grid = _Grid.Grid;
	exports.GridItem = _Grid.GridItem;
	exports.List = _List.List;
	exports.ListItem = _List.ListItem;
	exports.ListInline = _ListInline.ListInline;
	exports.ListInlineItem = _ListInline.ListInlineItem;
	exports.Media = _Media.Media;
	exports.MediaBody = _Media.MediaBody;
	exports.MediaFigure = _Media.MediaFigure;
	exports.Page = _Page.Page;
		exports.PageContent = _Page.PageContent;

/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Block = function Block(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Block;

/***/ },

/***/ 678:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Flex = function Flex(_ref) {
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'flex-start' : _ref$justifyContent;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'center' : _ref$alignItems;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var _ref$flexDirection = _ref.flexDirection;
	  var flexDirection = _ref$flexDirection === undefined ? 'row' : _ref$flexDirection;
	  var children = _ref.children;

	  var style = {
	    flexDirection: flexDirection,
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    display: 'flex',
	    width: '100%',
	    height: '100%'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Flex;

/***/ },

/***/ 679:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wrap = function Wrap(_ref) {
	  var _ref$width = _ref.width;
	  var width = _ref$width === undefined ? '90%' : _ref$width;
	  var _ref$maxWidth = _ref.maxWidth;
	  var maxWidth = _ref$maxWidth === undefined ? '80rem' : _ref$maxWidth;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    width: width,
	    maxWidth: maxWidth,
	    marginLeft: 'auto',
	    marginRight: 'auto'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.default = Wrap;

/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.GridItem = exports.Grid = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;

	var Grid = function Grid(_ref) {
	  var _ref$gutter = _ref.gutter;
	  var gutter = _ref$gutter === undefined ? 0 : _ref$gutter;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'stretch' : _ref$alignItems;
	  var _ref$justifyContent = _ref.justifyContent;
	  var justifyContent = _ref$justifyContent === undefined ? 'flex-start' : _ref$justifyContent;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    height: '100%',
	    display: 'flex',
	    alignItems: alignItems,
	    justifyContent: justifyContent,
	    marginLeft: '-' + baseline * gutter / 2 + 'rem',
	    marginRight: '-' + baseline * gutter / 2 + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	var GridItem = function GridItem(_ref2) {
	  var _ref2$span = _ref2.span;
	  var span = _ref2$span === undefined ? 0 : _ref2$span;
	  var _ref2$outOf = _ref2.outOf;
	  var outOf = _ref2$outOf === undefined ? 12 : _ref2$outOf;
	  var _ref2$gutter = _ref2.gutter;
	  var gutter = _ref2$gutter === undefined ? 0 : _ref2$gutter;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    paddingLeft: baseline * gutter / 2 + 'rem',
	    paddingRight: baseline * gutter / 2 + 'rem',
	    flex: '1'
	  };

	  if (span && outOf) {
	    style = _extends({}, style, {
	      flex: '0 0 auto',
	      width: 100 * span / outOf + '%'
	    });
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: extraClassNames },
	    children
	  );
	};

	exports.Grid = Grid;
		exports.GridItem = GridItem;

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(682);

	var _List2 = _interopRequireDefault(_List);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var List = function List(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: '-' + baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'ul',
	    { style: style, className: _List2.default.list + ' ' + extraClassNames },
	    children
	  );
	};

	var ListItem = function ListItem(_ref2) {
	  var _ref2$n = _ref2.n;
	  var n = _ref2$n === undefined ? 1 : _ref2$n;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    marginBottom: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'li',
	    { style: style, className: _List2.default.list__item + ' ' + extraClassNames },
	    children
	  );
	};

	exports.List = List;
		exports.ListItem = ListItem;

/***/ },

/***/ 682:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(684);

	var _ListInline2 = _interopRequireDefault(_ListInline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var ListInline = function ListInline(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'center' : _ref$alignItems;
	  var _ref$justfyContent = _ref.justfyContent;
	  var justfyContent = _ref$justfyContent === undefined ? 'flex-start' : _ref$justfyContent;

	  var style = {
	    marginBottom: '-' + baseline * n + 'rem',
	    marginLeft: '-' + baseline * n + 'rem',
	    alignItems: alignItems,
	    justfyContent: justfyContent
	  };

	  return _react2.default.createElement(
	    'ul',
	    { style: style, className: _ListInline2.default.listInline + ' ' + extraClassNames },
	    children
	  );
	};

	var ListInlineItem = function ListInlineItem(_ref2) {
	  var _ref2$n = _ref2.n;
	  var n = _ref2$n === undefined ? 1 : _ref2$n;
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  var style = {
	    marginBottom: baseline * n + 'rem',
	    marginLeft: baseline * n + 'rem'
	  };

	  return _react2.default.createElement(
	    'li',
	    { style: style, className: _ListInline2.default.listInline__item + ' ' + extraClassNames },
	    children
	  );
	};

	exports.ListInline = ListInline;
		exports.ListInlineItem = ListInlineItem;

/***/ },

/***/ 684:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(686);

	var _Media2 = _interopRequireDefault(_Media);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Media = function Media(_ref) {
	  var _ref$alignItems = _ref.alignItems;
	  var alignItems = _ref$alignItems === undefined ? 'flex-start' : _ref$alignItems;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    alignItems: alignItems
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media + ' ' + extraClassNames },
	    children
	  );
	};

	var MediaBody = function MediaBody(_ref2) {
	  var _ref2$extraClassNames = _ref2.extraClassNames;
	  var extraClassNames = _ref2$extraClassNames === undefined ? '' : _ref2$extraClassNames;
	  var children = _ref2.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Media2.default.media__body + ' ' + extraClassNames },
	    children
	  );
	};

	var MediaFigure = function MediaFigure(_ref3) {
	  var _ref3$n = _ref3.n;
	  var n = _ref3$n === undefined ? 1 : _ref3$n;
	  var _ref3$nl = _ref3.nl;
	  var nl = _ref3$nl === undefined ? 0 : _ref3$nl;
	  var _ref3$extraClassNames = _ref3.extraClassNames;
	  var extraClassNames = _ref3$extraClassNames === undefined ? '' : _ref3$extraClassNames;
	  var children = _ref3.children;

	  var style = {
	    marginRight: baseline * n + 'rem',
	    marginLeft: baseline * nl + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style, className: _Media2.default.media__figure + ' ' + extraClassNames },
	    children
	  );
	};

	exports.Media = Media;
	exports.MediaBody = MediaBody;
		exports.MediaFigure = MediaFigure;

/***/ },

/***/ 686:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Page = function Page(_ref) {
	  var children = _ref.children;

	  var style = {
	    display: 'flex',
	    minHeight: '100vh',
	    flexDirection: 'column'
	  };

	  return _react2.default.createElement(
	    'div',
	    { style: style },
	    children
	  );
	};

	var PageContent = function PageContent(_ref2) {
	  var children = _ref2.children;

	  var style = {
	    flex: '1'
	  };

	  return _react2.default.createElement(
	    'main',
	    { style: style },
	    children
	  );
	};

	exports.Page = Page;
		exports.PageContent = PageContent;

/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(689);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var Input = function (_React$Component) {
	  _inherits(Input, _React$Component);

	  function Input() {
	    _classCallCheck(this, Input);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Input).apply(this, arguments));
	  }

	  _createClass(Input, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var value = _props.value;
	      var _onChange = _props.onChange;
	      var _props$label = _props.label;
	      var label = _props$label === undefined ? null : _props$label;
	      var _props$labelParams = _props.labelParams;
	      var labelParams = _props$labelParams === undefined ? {
	        width: 8,
	        padding: 2
	      } : _props$labelParams;
	      var _props$placeholder = _props.placeholder;
	      var placeholder = _props$placeholder === undefined ? '' : _props$placeholder;
	      var _props$prefix = _props.prefix;
	      var prefix = _props$prefix === undefined ? null : _props$prefix;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'text' : _props$type;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$error = _props.error;
	      var error = _props$error === undefined ? null : _props$error;


	      var labelEl = '';
	      if (label) {
	        var labelStyle = {
	          paddingRight: labelParams.padding * baseline + 'rem'
	        };
	        if (labelParams.width) {
	          labelStyle.width = labelParams.width * baseline + 'rem';
	          labelStyle.textAlign = 'right';
	        }

	        labelEl = _react2.default.createElement(
	          'div',
	          { style: labelStyle, className: '' + _Input2.default.Input__label },
	          label
	        );
	      }

	      var errorEl = '';
	      if (error) {
	        errorEl = _react2.default.createElement(
	          'div',
	          { className: _Input2.default.Input__error },
	          error
	        );
	      }

	      var prefixEl = '';
	      if (prefix) {
	        prefixEl = _react2.default.createElement(
	          'div',
	          { className: _Input2.default.Input__prefix },
	          prefix
	        );
	      }

	      return _react2.default.createElement(
	        'label',
	        { className: _Input2.default.Input + ' ' + (error ? _Input2.default.Input_error : '') },
	        labelEl,
	        prefixEl,
	        _react2.default.createElement('input', { className: _Input2.default.Input__input,
	          type: type,
	          ref: function ref(el) {
	            _this2._element = el;
	          },
	          value: value,
	          disabled: disabled,
	          placeholder: placeholder,
	          onChange: function onChange() {
	            return _onChange(_this2._element.value);
	          } }),
	        errorEl
	      );
	    }
	  }]);

	  return Input;
	}(_react2.default.Component);

		exports.default = Input;

/***/ },

/***/ 689:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___s67N0","Input__input":"Input__Input__input___wb1PD","Input__label":"Input__Input__label___9JDUu","Input__prefix":"Input__Input__prefix___3nvL9","Input__error":"Input__Input__error___fgkCD","Input_error":"Input__Input_error___2JYGy"};

/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(691);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var Checkbox = function (_React$Component) {
	  _inherits(Checkbox, _React$Component);

	  function Checkbox() {
	    _classCallCheck(this, Checkbox);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Checkbox).apply(this, arguments));
	  }

	  _createClass(Checkbox, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var checked = _props.checked;
	      var _onChange = _props.onChange;
	      var _props$label = _props.label;
	      var label = _props$label === undefined ? false : _props$label;
	      var _props$labelParams = _props.labelParams;
	      var labelParams = _props$labelParams === undefined ? {
	        width: 8,
	        padding: 2
	      } : _props$labelParams;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      var labelEl = '';
	      if (label) {
	        var labelStyle = {
	          paddingRight: labelParams.padding * baseline + 'rem'
	        };
	        if (labelParams.width) {
	          labelStyle.width = labelParams.width * baseline + 'rem';
	          labelStyle.textAlign = 'right';
	        }

	        labelEl = _react2.default.createElement(
	          'div',
	          { style: labelStyle, className: '' + _Checkbox2.default.Checkbox__label },
	          label
	        );
	      }

	      return _react2.default.createElement(
	        'label',
	        { className: _Checkbox2.default.Checkbox },
	        labelEl,
	        _react2.default.createElement('input', { className: _Checkbox2.default.Checkbox__input,
	          type: 'checkbox',
	          ref: function ref(el) {
	            _this2._element = el;
	          },
	          checked: checked,
	          disabled: disabled,
	          onChange: function onChange() {
	            return _onChange(_this2._element.checked);
	          } })
	      );
	    }
	  }]);

	  return Checkbox;
	}(_react2.default.Component);

		exports.default = Checkbox;

/***/ },

/***/ 691:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1JYQg","Checkbox__input":"Checkbox__Checkbox__input___1nDMV","Checkbox__label":"Checkbox__Checkbox__label___3OBUd"};

/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _scribeEditor = __webpack_require__(693);

	var _scribeEditor2 = _interopRequireDefault(_scribeEditor);

	var _scribePluginToolbar = __webpack_require__(739);

	var _scribePluginToolbar2 = _interopRequireDefault(_scribePluginToolbar);

	var _scribePluginHeadingCommand = __webpack_require__(740);

	var _scribePluginHeadingCommand2 = _interopRequireDefault(_scribePluginHeadingCommand);

	var _scribePluginLinkPromptCommand = __webpack_require__(741);

	var _scribePluginLinkPromptCommand2 = _interopRequireDefault(_scribePluginLinkPromptCommand);

	var _scribePluginIntelligentUnlinkCommand = __webpack_require__(746);

	var _scribePluginIntelligentUnlinkCommand2 = _interopRequireDefault(_scribePluginIntelligentUnlinkCommand);

	var _Layouts = __webpack_require__(676);

	var _Editor = __webpack_require__(747);

	var _Editor2 = _interopRequireDefault(_Editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var Editor = function (_React$Component) {
	  _inherits(Editor, _React$Component);

	  function Editor(props) {
	    _classCallCheck(this, Editor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Editor).call(this, props));

	    _this.state = {
	      value: _this.props.value
	    };
	    return _this;
	  }

	  _createClass(Editor, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      var editor = (0, _reactDom.findDOMNode)(this.refs.editor);
	      var toolbar = (0, _reactDom.findDOMNode)(this.refs.toolbar);

	      var scribe = new _scribeEditor2.default(editor);
	      scribe.use((0, _scribePluginHeadingCommand2.default)(1));
	      scribe.use((0, _scribePluginHeadingCommand2.default)(2));
	      scribe.use((0, _scribePluginLinkPromptCommand2.default)());
	      scribe.use((0, _scribePluginIntelligentUnlinkCommand2.default)());
	      scribe.use((0, _scribePluginToolbar2.default)(toolbar));

	      scribe.setContent(this.state.value);

	      setTimeout(function () {
	        scribe.on('content-changed', function () {
	          _this2.setState({ value: scribe.getHTML() });
	          _this2.props.onChange(scribe.getHTML());
	        });
	      });

	      this.scribe = scribe;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.value !== this.state.value) {
	        this.scribe.setContent(newProps.value);
	        this.setState({ value: newProps.value });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var error = _props.error;
	      var _props$labelParams = _props.labelParams;
	      var labelParams = _props$labelParams === undefined ? {
	        width: 8,
	        padding: 2
	      } : _props$labelParams;
	      var _props$label = _props.label;
	      var label = _props$label === undefined ? null : _props$label;


	      var labelEl = '';
	      if (label) {
	        var labelStyle = {
	          paddingRight: labelParams.padding * baseline + 'rem'
	        };
	        if (labelParams.width) {
	          labelStyle.width = labelParams.width * baseline + 'rem';
	          labelStyle.textAlign = 'right';
	        }

	        labelEl = _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(
	            'div',
	            { style: labelStyle, className: '' + _Editor2.default.Editor__label },
	            label
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _Editor2.default.Editor + ' ' + (error ? _Editor2.default.Editor_error : '') },
	        labelEl,
	        _react2.default.createElement(
	          'div',
	          { className: _Editor2.default.Editor__toolbar, ref: 'toolbar' },
	          _react2.default.createElement(
	            _Layouts.Flex,
	            null,
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_h1,
	                'data-command-name': 'h1' },
	              'Heading 1'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_h2,
	                'data-command-name': 'h2' },
	              'Heading 1'
	            ),
	            _react2.default.createElement('div', { className: _Editor2.default.Editor__separator }),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_bold,
	                'data-command-name': 'bold' },
	              'bold'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_italic,
	                'data-command-name': 'italic' },
	              'italic'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_ol,
	                'data-command-name': 'insertOrderedList' },
	              'Ol'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_ul,
	                'data-command-name': 'insertUnOrderedList' },
	              'Ul'
	            ),
	            _react2.default.createElement('div', { className: _Editor2.default.Editor__separator }),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_link,
	                'data-command-name': 'linkPrompt' },
	              'Link'
	            ),
	            _react2.default.createElement(
	              'button',
	              { className: _Editor2.default.Editor__command + ' ' + _Editor2.default.Editor__command_unlink,
	                'data-command-name': 'unlink' },
	              'Unlink'
	            )
	          )
	        ),
	        _react2.default.createElement('div', { className: _Editor2.default.Editor__body, ref: 'editor' }),
	        _react2.default.createElement(
	          'div',
	          { className: _Editor2.default.Editor__error },
	          error
	        )
	      );
	    }
	  }]);

	  return Editor;
	}(_react2.default.Component);

		exports.default = Editor;

/***/ },

/***/ 747:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Editor":"Editor__Editor___3mG0x","Editor__toolbar":"Editor__Editor__toolbar___2cbgU","Editor__command":"Editor__Editor__command___15KXk","Editor__command_h1":"Editor__Editor__command_h1___2avrE","Editor__command_h2":"Editor__Editor__command_h2___5j-Nt","Editor__command_h3":"Editor__Editor__command_h3___2tAjL","Editor__command_bold":"Editor__Editor__command_bold___3YdJ3","Editor__command_italic":"Editor__Editor__command_italic___1UZA0","Editor__command_ol":"Editor__Editor__command_ol___2RQbn","Editor__command_ul":"Editor__Editor__command_ul___cs9Vd","Editor__command_link":"Editor__Editor__command_link___1_DRv","Editor__command_unlink":"Editor__Editor__command_unlink___3Dw7t","Editor__separator":"Editor__Editor__separator___bf0pe","Editor__body":"Editor__Editor__body___3FufQ","Editor__error":"Editor__Editor__error___1nMXd","Editor__label":"Editor__Editor__label___1hd-U","Editor_error":"Editor__Editor_error___1G66C"};

/***/ },

/***/ 748:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(749);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var Select = function (_React$Component) {
	  _inherits(Select, _React$Component);

	  function Select() {
	    _classCallCheck(this, Select);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Select).apply(this, arguments));
	  }

	  _createClass(Select, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var options = _props.options;
	      var _onChange = _props.onChange;
	      var value = _props.value;
	      var label = _props.label;
	      var disabled = _props.disabled;
	      var _props$labelParams = _props.labelParams;
	      var labelParams = _props$labelParams === undefined ? {
	        width: 8,
	        padding: 2
	      } : _props$labelParams;
	      var _props$allowEmpty = _props.allowEmpty;
	      var allowEmpty = _props$allowEmpty === undefined ? true : _props$allowEmpty;


	      var labelEl = '';
	      if (label) {
	        var labelStyle = {
	          paddingRight: labelParams.padding * baseline + 'rem'
	        };
	        if (labelParams.width) {
	          labelStyle.width = labelParams.width * baseline + 'rem';
	          labelStyle.textAlign = 'right';
	        }

	        labelEl = _react2.default.createElement(
	          'div',
	          { style: labelStyle, className: '' + _Select2.default.Select__label },
	          label
	        );
	      }

	      var inputLabel = '';
	      if (value) {
	        inputLabel = options.filter(function (o) {
	          return o.id === value;
	        })[0].label;
	      } else if (allowEmpty) {
	        inputLabel = 'None';
	      } else {
	        inputLabel = options[0].label;
	      }

	      var noneOption = '';
	      if (allowEmpty) {
	        noneOption = _react2.default.createElement(
	          'option',
	          { value: '' },
	          'None'
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _Select2.default.Select },
	        labelEl,
	        _react2.default.createElement(
	          'div',
	          { className: _Select2.default.Select__wrap },
	          _react2.default.createElement(
	            'div',
	            { className: _Select2.default.Select__fake },
	            inputLabel
	          ),
	          _react2.default.createElement(
	            'select',
	            { className: _Select2.default.Select__input,
	              ref: function ref(el) {
	                _this2._element = el;
	              },
	              value: value,
	              disabled: disabled,
	              onChange: function onChange(v) {
	                return _onChange(v.target.value);
	              } },
	            options.map(function (o) {
	              return _react2.default.createElement(
	                'option',
	                { key: o.id, value: o.id },
	                o.label
	              );
	            }),
	            noneOption
	          )
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

		exports.default = Select;

/***/ },

/***/ 749:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__label":"Select__Select__label___1GWvW","Select__wrap":"Select__Select__wrap___wvRax","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7"};

/***/ },

/***/ 750:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(751);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(676);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var ModalWindow = function ModalWindow(_ref) {
	  var children = _ref.children;
	  var _ref$multipliers = _ref.multipliers;
	  var multipliers = _ref$multipliers === undefined ? {
	    width: 40
	  } : _ref$multipliers;

	  var style = {
	    width: multipliers.width * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'div',
	    { className: _ModalWindow2.default.Modal },
	    _react2.default.createElement(
	      _Layouts.Flex,
	      { alignItems: 'center', justifyContent: 'center' },
	      _react2.default.createElement(
	        'section',
	        { style: style, className: _ModalWindow2.default.ModalWindow },
	        children
	      )
	    )
	  );
	};

	var ModalWindowHeader = function ModalWindowHeader(_ref2) {
	  var children = _ref2.children;
	  var _ref2$multipliers = _ref2.multipliers;
	  var multipliers = _ref2$multipliers === undefined ? {
	    padding: {
	      vertical: 2,
	      horizontal: 2
	    }
	  } : _ref2$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'header',
	    { style: style, className: _ModalWindow2.default.ModalWindow__header },
	    children
	  );
	};

	var ModalWindowBody = function ModalWindowBody(_ref3) {
	  var children = _ref3.children;
	  var _ref3$multipliers = _ref3.multipliers;
	  var multipliers = _ref3$multipliers === undefined ? {
	    padding: {
	      vertical: 3,
	      horizontal: 2
	    }
	  } : _ref3$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'main',
	    { style: style, className: _ModalWindow2.default.ModalWindow__body },
	    children
	  );
	};

	var ModalWindowFooter = function ModalWindowFooter(_ref4) {
	  var children = _ref4.children;
	  var _ref4$multipliers = _ref4.multipliers;
	  var multipliers = _ref4$multipliers === undefined ? {
	    padding: {
	      vertical: 1,
	      horizontal: 2
	    }
	  } : _ref4$multipliers;

	  var style = {
	    padding: multipliers.padding.vertical * baseline + 'rem ' + multipliers.padding.horizontal * baseline + 'rem'
	  };

	  return _react2.default.createElement(
	    'footer',
	    { style: style, className: _ModalWindow2.default.ModalWindow__footer },
	    children
	  );
	};

	exports.ModalWindow = ModalWindow;
	exports.ModalWindowBody = ModalWindowBody;
	exports.ModalWindowHeader = ModalWindowHeader;
		exports.ModalWindowFooter = ModalWindowFooter;

/***/ },

/***/ 751:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(604);

	var _Nav = __webpack_require__(753);

	var _Nav2 = _interopRequireDefault(_Nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Nav = function Nav(_ref) {
	  var items = _ref.items;

	  var navItems = items.map(function (i) {
	    if (i.heading) {
	      return _react2.default.createElement(
	        'div',
	        { key: i.id, className: _Nav2.default.Nav__heading },
	        i.label
	      );
	    } else {
	      return _react2.default.createElement(
	        _reactRouter.Link,
	        { key: i.id,
	          className: _Nav2.default.Nav__item,
	          activeClassName: _Nav2.default.Nav__item_active,
	          to: '/' + i.id },
	        i.label
	      );
	    }
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: _Nav2.default.Nav },
	    navItems
	  );
	};

	exports.default = Nav;

/***/ },

/***/ 753:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Nav":"Nav__Nav___3Pyye","Nav__item":"Nav__Nav__item___5HbuE","Nav__item_active":"Nav__Nav__item_active___2q4tT","Nav__heading":"Nav__Nav__heading___19UzK"};

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(755);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(600);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Loading = function Loading() {
	  return _react2.default.createElement(
	    'div',
	    { className: _Loading2.default.Loading },
	    _react2.default.createElement(_UI.Spinner, null)
	  );
	};

	exports.default = Loading;

/***/ },

/***/ 755:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _authActions = __webpack_require__(757);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);

	  function Login(props) {
	    _classCallCheck(this, Login);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

	    _this.submitForm = _this.submitForm.bind(_this);
	    _this.changeEmail = _this.changeEmail.bind(_this);
	    _this.changePassword = _this.changePassword.bind(_this);

	    _this.state = {
	      emailError: '',
	      passwordError: '',
	      email: '',
	      password: ''
	    };
	    return _this;
	  }

	  _createClass(Login, [{
	    key: 'submitForm',
	    value: function submitForm(e) {
	      e.preventDefault();
	      var emailError = '';
	      var passwordError = '';

	      var dispatch = this.props.dispatch;


	      if (this.state.email === '') {
	        emailError = 'email cannot be empty';
	      }

	      if (this.state.password === '') {
	        passwordError = 'password cannot be blank';
	      }

	      if (!emailError && !passwordError) {
	        dispatch((0, _authActions.loginWithCredentials)(this.state.email, this.state.password));
	      } else {
	        this.setState({
	          emailError: emailError,
	          passwordError: passwordError
	        });
	      }
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail(value) {
	      this.setState({
	        email: value,
	        emailError: ''
	      });
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(value) {
	      this.setState({
	        password: value,
	        passwordError: ''
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var isFetching = this.props.isFetching;


	      return _react2.default.createElement(
	        _UI.ModalWindow,
	        null,
	        _react2.default.createElement(
	          'form',
	          { onSubmit: this.submitForm },
	          _react2.default.createElement(
	            _UI.ModalWindowHeader,
	            null,
	            _react2.default.createElement(
	              _Layouts.Flex,
	              { justifyContent: 'center' },
	              'Login'
	            )
	          ),
	          _react2.default.createElement(
	            _UI.ModalWindowBody,
	            null,
	            _react2.default.createElement(
	              _Layouts.List,
	              { n: 1.5 },
	              _react2.default.createElement(
	                _Layouts.ListItem,
	                { n: 1.5 },
	                _react2.default.createElement(_UI.Input, {
	                  value: this.state.email,
	                  label: 'Email:',
	                  placeholder: 'e.g. casey@gmail.com',
	                  error: this.state.emailError,
	                  onChange: this.changeEmail })
	              ),
	              _react2.default.createElement(
	                _Layouts.ListItem,
	                { n: 1.5 },
	                _react2.default.createElement(_UI.Input, {
	                  value: this.state.password,
	                  label: 'Password:',
	                  placeholder: 'e.g. BigSecret',
	                  error: this.state.passwordError,
	                  onChange: this.changePassword,
	                  type: 'password' })
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _UI.ModalWindowFooter,
	            null,
	            _react2.default.createElement(
	              _UI.Button,
	              {
	                disabled: isFetching,
	                label: 'Login' },
	              'Login'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Login;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.auth.isFetching
	  };
		})(Login);

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginWithToken = exports.loginWithCredentials = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(758);

	var _flashActions = __webpack_require__(759);

	var REQUEST_AUTH = exports.REQUEST_AUTH = 'REQUEST_AUTH';
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';

	var requestAuth = function requestAuth() {
	  return {
	    type: REQUEST_AUTH
	  };
	};

	var logOut = exports.logOut = function logOut() {
	  return function (dispatch) {
	    localStorage.removeItem('antiVax_auth_token');
	    dispatch({ type: LOGOUT });
	  };
	};

	var logIn = function logIn(user) {
	  return {
	    type: LOGIN,
	    user: user
	  };
	};

	var loginWithCredentials = exports.loginWithCredentials = function loginWithCredentials(email, password) {
	  return function (dispatch) {
	    dispatch(requestAuth());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/auth/admin/authenticate-credentials', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
	        email: email,
	        password: password
	      })
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        localStorage.setItem('antiVax_auth_token', json.data.token);
	        dispatch(logIn(json.data.user));
	      } else {
	        dispatch(logOut());
	        dispatch((0, _flashActions.flashMessage)(json.data.error, 'error'));
	      }
	    });
	  };
	};

	var loginWithToken = exports.loginWithToken = function loginWithToken(token) {
	  return function (dispatch) {
	    dispatch(requestAuth());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/auth/admin/authenticate-token', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json'
	      },
	      body: JSON.stringify({
	        token: token
	      })
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        localStorage.setItem('antiVax_auth_token', json.data.token);
	        dispatch(logIn(json.data.user));
	      } else {
	        dispatch(logOut());
	        dispatch((0, _flashActions.flashMessage)(json.data.error, 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 759:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var SET_MESSAGE = exports.SET_MESSAGE = 'SET_MESSAGE';
	var UNSET_MESSAGE = exports.UNSET_MESSAGE = 'UNSET_MESSAGE';

	var setMessage = function setMessage(message, messageType, timeoutId) {
	  return {
	    type: SET_MESSAGE,
	    message: message,
	    messageType: messageType,
	    timeoutId: timeoutId
	  };
	};

	var unsetMessage = function unsetMessage(message, messageType) {
	  return {
	    type: UNSET_MESSAGE
	  };
	};

	var flashMessage = exports.flashMessage = function flashMessage(message, messageType) {
	  return function (dispatch) {
	    var t = setTimeout(function () {
	      dispatch(unsetMessage());
	    }, 2000);

	    dispatch(setMessage(message, messageType, t));
	  };
	};

/***/ },

/***/ 760:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var blogposts = exports.blogposts = {
	  id: 'blogposts',
	  label: 'Blogposts'
	};

	var faqs = exports.faqs = {
	  id: 'faqs',
	  label: 'FAQs'
	};

	var sections = exports.sections = [{
	  id: 'about-vaccines',
	  label: 'About Vaccines'
	}, {
	  id: 'vaccine-safety',
	  label: 'Vaccine Safety'
	}, {
	  id: 'vaccination-schedule',
	  label: 'Vaccination Schedule'
	}, {
	  id: 'about-project',
	  label: 'About Project'
	}, {
	  id: 'additional-information',
	  label: 'Additional Information'
	}];

	var attachments = exports.attachments = [{
	  id: 'diseases',
	  label: 'Diseases'
	}, {
	  id: 'vaccines',
	  label: 'Vaccines'
	}, {
	  id: 'ingridients',
	  label: 'Ingridients'
	}, {
	  id: 'schedule',
	  label: 'Vaccination Schedule'
	}];

	var isSection = exports.isSection = function isSection(id) {
	  return sections.map(function (s) {
	    return s.id;
	  }).indexOf(id) !== -1;
	};

	var isBlogpost = exports.isBlogpost = function isBlogpost(id) {
	  return id === blogposts.id;
	};

	var isAttachment = exports.isAttachment = function isAttachment(id) {
	  return attachments.map(function (c) {
	    return c.id;
	  }).indexOf(id) !== -1;
	};

	var isFaq = exports.isFaq = function isFaq(id) {
	  return id === faqs.id;
	};

	var getCurrentSection = exports.getCurrentSection = function getCurrentSection(id) {
	  return [].concat(sections, attachments, [blogposts, faqs]).filter(function (s) {
	    return s.id === id;
	  })[0];
	};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSearchIndex = exports.fetchSearchIndex = exports.CONFIRM_UPDATE_INDEX = exports.REQUEST_UPDATE_INDEX = exports.RECEIVE_INDEX = exports.REQUEST_INDEX = undefined;

	__webpack_require__(758);

	var _flashActions = __webpack_require__(759);

	var _authActions = __webpack_require__(757);

	var REQUEST_INDEX = exports.REQUEST_INDEX = 'REQUEST_INDEX';
	var RECEIVE_INDEX = exports.RECEIVE_INDEX = 'RECEIVE_INDEX';

	var REQUEST_UPDATE_INDEX = exports.REQUEST_UPDATE_INDEX = 'REQUEST_UPDATE_INDEX';
	var CONFIRM_UPDATE_INDEX = exports.CONFIRM_UPDATE_INDEX = 'CONFIRM_UPDATE_INDEX';

	var requestSearchIndex = function requestSearchIndex() {
	  return {
	    type: REQUEST_INDEX
	  };
	};

	var receiveSearchIndex = function receiveSearchIndex(lastUpdatedOn, lastUpdatedBy) {
	  return {
	    type: RECEIVE_INDEX,
	    lastUpdatedOn: lastUpdatedOn,
	    lastUpdatedBy: lastUpdatedBy
	  };
	};

	var fetchSearchIndex = exports.fetchSearchIndex = function fetchSearchIndex() {
	  return function (dispatch, getState) {
	    dispatch(requestSearchIndex());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/searchIndex', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveSearchIndex(json.data.searchIndex.lastUpdatedOn, json.data.searchIndex.lastUpdatedBy));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate() {
	  return {
	    type: REQUEST_UPDATE_INDEX
	  };
	};

	var confirmUpdate = function confirmUpdate(lastUpdatedOn, lastUpdatedBy) {
	  return {
	    type: CONFIRM_UPDATE_INDEX,
	    lastUpdatedOn: lastUpdatedOn,
	    lastUpdatedBy: lastUpdatedBy
	  };
	};

	var updateSearchIndex = exports.updateSearchIndex = function updateSearchIndex() {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/searchIndex', {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmUpdate(json.data.searchIndex.lastUpdatedOn, json.data.searchIndex.lastUpdatedBy));
	        dispatch((0, _flashActions.flashMessage)('Search index updated', 'log'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 762:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _reduxLogger = __webpack_require__(764);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(765);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(766);

	var _rootReducer2 = _interopRequireDefault(_rootReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var middleware = [_reduxThunk2.default];

	if (true) {
	  var logger = (0, _reduxLogger2.default)();
	  middleware.push(logger);
	}

	var configureStore = function configureStore(initialState) {
	  return (0, _redux.createStore)(_rootReducer2.default, initialState, _redux.applyMiddleware.apply(undefined, middleware));
	};

	exports.default = configureStore;

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(477);

	var _authReducer = __webpack_require__(767);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(769);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(770);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(772);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _usersReducer = __webpack_require__(774);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _scheduleReducer = __webpack_require__(776);

	var _scheduleReducer2 = _interopRequireDefault(_scheduleReducer);

	var _searchIndexReducer = __webpack_require__(778);

	var _searchIndexReducer2 = _interopRequireDefault(_searchIndexReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _authReducer2.default,
	  flash: _flashReducer2.default,
	  questions: _questionsReducer2.default,
	  articles: _articleReducer2.default,
	  users: _usersReducer2.default,
	  schedule: _scheduleReducer2.default,
	  searchIndex: _searchIndexReducer2.default
	});

		exports.default = rootReducer;

/***/ },

/***/ 767:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(757);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var auth = function auth() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.auth : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _authActions.REQUEST_AUTH:
	      return _extends({}, _initialState2.default.auth, {
	        isFetching: true
	      });
	    case _authActions.LOGIN:
	      return {
	        isFetching: false,
	        user: action.user
	      };
	    case _authActions.LOGOUT:
	      return {
	        isFetching: false,
	        user: null
	      };
	    default:
	      return state;
	  }
	};

	exports.default = auth;

/***/ },

/***/ 768:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  auth: {
	    isFetching: false,
	    user: null
	  },
	  flash: {
	    message: null,
	    type: null,
	    timeoutId: null
	  },
	  questions: {
	    isFetching: true,
	    items: []
	  },
	  question: {
	    isUpdating: false,
	    data: {}
	  },
	  articles: {
	    isFetching: true,
	    items: [],
	    newArticle: {
	      isUpdating: false,
	      data: {},
	      errors: {}
	    }
	  },
	  article: {
	    isUpdating: false,
	    data: {},
	    errors: {}
	  },
	  blogposts: {
	    isFetching: true,
	    items: [],
	    newBlogpost: {
	      isUpdating: false,
	      data: {},
	      errors: {}
	    }
	  },
	  blogpost: {
	    isUpdating: false,
	    data: {},
	    errors: {}
	  },
	  users: {
	    isFetching: true,
	    items: [],
	    newUser: {
	      isUpdating: false,
	      data: {},
	      errors: {}
	    }
	  },
	  user: {
	    isUpdating: false,
	    data: {},
	    errors: {}
	  },
	  schedule: {
	    isFetching: true,
	    isUpdating: false,
	    items: []
	  },
	  searchIndex: {
	    isFetching: true,
	    isUpdating: false,
	    lastUpdatedOn: null,
	    lastUpdatedBy: null
	  }
		};

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(759);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var flash = function flash() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _extends({}, _initialState2.default.flash) : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _flashActions.SET_MESSAGE:
	      clearTimeout(state.timeoutId);

	      return _extends({}, {
	        message: action.message,
	        type: action.messageType,
	        timeoutId: action.timeoutId
	      });
	    case _flashActions.UNSET_MESSAGE:
	      clearTimeout(state.timeoutId);

	      return _extends({}, _initialState2.default.flash);
	    default:
	      return state;
	  }
	};

	exports.default = flash;

/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(771);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var question = function question() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.question : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _questionsActions.RECEIVE_QUESTIONS:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _questionsActions.REQUEST_QUESTION_UPDATE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _questionsActions.RECEIVE_QUESTION_UPDATE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          data: action.updatedQuestion,
	          isUpdating: false
	        });
	      } else {
	        return state;
	      }
	    case _questionsActions.REQUEST_DELETE_QUESTION:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _questionsActions.REJECT_DELETE_QUESTION:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

	var questions = function questions() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.questions : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _questionsActions.REQUEST_QUESTIONS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _questionsActions.RECEIVE_QUESTIONS:
	      return {
	        isFetching: false,
	        items: action.items.map(function (i) {
	          return question(undefined, {
	            type: action.type,
	            item: i
	          });
	        })
	      };
	    case _questionsActions.REQUEST_QUESTION_UPDATE:
	    case _questionsActions.RECEIVE_QUESTION_UPDATE:
	    case _questionsActions.REQUEST_DELETE_QUESTION:
	    case _questionsActions.REJECT_DELETE_QUESTION:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return question(i, action);
	        })
	      });
	    case _questionsActions.CONFIRM_DELETE_QUESTION:
	      return _extends({}, state, {
	        items: state.items.filter(function (i) {
	          return i.data._id !== action.id;
	        })
	      });
	    default:
	      return state;
	  }
	};

	exports.default = questions;

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteQuestion = exports.updateQuestion = exports.fetchQuestions = exports.REJECT_DELETE_QUESTION = exports.CONFIRM_DELETE_QUESTION = exports.REQUEST_DELETE_QUESTION = exports.RECEIVE_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = exports.RECEIVE_QUESTIONS = exports.REQUEST_QUESTIONS = undefined;

	__webpack_require__(758);

	var _flashActions = __webpack_require__(759);

	var _authActions = __webpack_require__(757);

	var REQUEST_QUESTIONS = exports.REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
	var RECEIVE_QUESTIONS = exports.RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

	var REQUEST_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = 'REQUEST_QUESTION_UPDATE';
	var RECEIVE_QUESTION_UPDATE = exports.RECEIVE_QUESTION_UPDATE = 'RECEIVE_QUESTION_UPDATE';

	var REQUEST_DELETE_QUESTION = exports.REQUEST_DELETE_QUESTION = 'REQUEST_DELETE_QUESTION';
	var CONFIRM_DELETE_QUESTION = exports.CONFIRM_DELETE_QUESTION = 'CONFIRM_DELETE_QUESTION';
	var REJECT_DELETE_QUESTION = exports.REJECT_DELETE_QUESTION = 'REJECT_DELETE_QUESTION';

	var requestQuestions = function requestQuestions() {
	  return {
	    type: REQUEST_QUESTIONS
	  };
	};

	var receiveQuestions = function receiveQuestions(items) {
	  return {
	    type: RECEIVE_QUESTIONS,
	    items: items
	  };
	};

	var fetchQuestions = exports.fetchQuestions = function fetchQuestions() {
	  return function (dispatch, getState) {
	    dispatch(requestQuestions());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/questions/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveQuestions(json.data.questions));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_QUESTION_UPDATE,
	    id: id
	  };
	};

	var receiveUpdate = function receiveUpdate(id, updatedQuestion) {
	  return {
	    type: RECEIVE_QUESTION_UPDATE,
	    id: id,
	    updatedQuestion: updatedQuestion
	  };
	};

	var updateQuestion = exports.updateQuestion = function updateQuestion(id, data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/questions/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        question: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveUpdate(id, json.data.question));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

	var requestDelete = function requestDelete(id) {
	  return {
	    type: REQUEST_DELETE_QUESTION,
	    id: id
	  };
	};

	var confirmDelete = function confirmDelete(id) {
	  return {
	    type: CONFIRM_DELETE_QUESTION,
	    id: id
	  };
	};

	var rejectDelete = function rejectDelete(id) {
	  return {
	    type: REJECT_DELETE_QUESTION,
	    id: id
	  };
	};

	var deleteQuestion = exports.deleteQuestion = function deleteQuestion(id) {
	  return function (dispatch, getState) {
	    dispatch(requestDelete(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/questions/' + id, {
	      method: 'DELETE',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmDelete(id));
	        dispatch((0, _flashActions.flashMessage)('Question was deleted', 'log'));
	      } else {
	        dispatch(rejectDelete(id));
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(773);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var articles = function articles() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.articles : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _articleActions.REQUEST_ARTICLES:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _articleActions.RECEIVE_ARTICLES:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items.map(function (i) {
	          return article(undefined, {
	            type: action.type,
	            item: i
	          });
	        })
	      });
	    case _articleActions.REQUEST_UPDATE_ARTICLE:
	    case _articleActions.CONFIRM_UPDATE_ARTICLE:
	    case _articleActions.REJECT_UPDATE_ARTICLE:
	    case _articleActions.REQUEST_DELETE_ARTICLE:
	    case _articleActions.REJECT_DELETE_ARTICLE:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return article(i, action);
	        })
	      });
	    case _articleActions.REQUEST_CREATE_ARTICLE:
	    case _articleActions.REJECT_CREATE_ARTICLE:
	      return _extends({}, state, {
	        newArticle: newArticle(state.newArticle, action)
	      });
	    case _articleActions.CONFIRM_CREATE_ARTICLE:
	      return _extends({}, state, {
	        newArticle: newArticle(state.newArticle, action),
	        items: [article(null, action)].concat(_toConsumableArray(state.items))
	      });
	    case _articleActions.CONFIRM_DELETE_ARTICLE:
	      return _extends({}, state, {
	        items: state.items.filter(function (i) {
	          return i.data._id !== action.id;
	        })
	      });
	    default:
	      return state;
	  }
	};

	var article = function article() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.article : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _articleActions.RECEIVE_ARTICLES:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _articleActions.CONFIRM_CREATE_ARTICLE:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _articleActions.REQUEST_UPDATE_ARTICLE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _articleActions.CONFIRM_UPDATE_ARTICLE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          data: action.item,
	          isUpdating: false,
	          errors: {}
	        });
	      } else {
	        return state;
	      }
	    case _articleActions.REJECT_UPDATE_ARTICLE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false,
	          errors: action.errors
	        });
	      } else {
	        return state;
	      }
	    case _articleActions.REQUEST_DELETE_ARTICLE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _articleActions.REJECT_DELETE_ARTICLE:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

	var newArticle = function newArticle(state, action) {
	  switch (action.type) {
	    case _articleActions.REQUEST_CREATE_ARTICLE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _articleActions.REJECT_CREATE_ARTICLE:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    case _articleActions.CONFIRM_CREATE_ARTICLE:
	      return _extends({}, _initialState2.default.articles.newArticle);
	    default:
	      return state;
	  }
	};

	exports.default = articles;

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteArticle = exports.createArticle = exports.updateArticle = exports.fetchArticles = exports.REJECT_DELETE_ARTICLE = exports.CONFIRM_DELETE_ARTICLE = exports.REQUEST_DELETE_ARTICLE = exports.REJECT_CREATE_ARTICLE = exports.CONFIRM_CREATE_ARTICLE = exports.REQUEST_CREATE_ARTICLE = exports.REJECT_UPDATE_ARTICLE = exports.CONFIRM_UPDATE_ARTICLE = exports.REQUEST_UPDATE_ARTICLE = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	__webpack_require__(758);

	var _reactRouter = __webpack_require__(604);

	var _flashActions = __webpack_require__(759);

	var _authActions = __webpack_require__(757);

	var REQUEST_ARTICLES = exports.REQUEST_ARTICLES = 'REQUEST_ARTICLES';
	var RECEIVE_ARTICLES = exports.RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

	var REQUEST_UPDATE_ARTICLE = exports.REQUEST_UPDATE_ARTICLE = 'REQUEST_UPDATE_ARTICLE';
	var CONFIRM_UPDATE_ARTICLE = exports.CONFIRM_UPDATE_ARTICLE = 'CONFIRM_UPDATE_ARTICLE';
	var REJECT_UPDATE_ARTICLE = exports.REJECT_UPDATE_ARTICLE = 'REJECT_UPDATE_ARTICLE';

	var REQUEST_CREATE_ARTICLE = exports.REQUEST_CREATE_ARTICLE = 'CREATE_ARTICLE';
	var CONFIRM_CREATE_ARTICLE = exports.CONFIRM_CREATE_ARTICLE = 'CONFIRM_CREATE_ARTICLE';
	var REJECT_CREATE_ARTICLE = exports.REJECT_CREATE_ARTICLE = 'REJECT_CREATE_ARTICLE';

	var REQUEST_DELETE_ARTICLE = exports.REQUEST_DELETE_ARTICLE = 'REQUEST_DELETE_ARTICLE';
	var CONFIRM_DELETE_ARTICLE = exports.CONFIRM_DELETE_ARTICLE = 'CONFIRM_DELETE_ARTICLE';
	var REJECT_DELETE_ARTICLE = exports.REJECT_DELETE_ARTICLE = 'REJECT_DELETE_ARTICLE';

	var requestArticles = function requestArticles() {
	  return {
	    type: REQUEST_ARTICLES
	  };
	};

	var receiveArticles = function receiveArticles(items) {
	  return {
	    type: RECEIVE_ARTICLES,
	    items: items
	  };
	};

	var fetchArticles = exports.fetchArticles = function fetchArticles() {
	  return function (dispatch, getState) {
	    dispatch(requestArticles());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveArticles(json.data.articles));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_UPDATE_ARTICLE,
	    id: id
	  };
	};

	var receiveUpdate = function receiveUpdate(id, item) {
	  return {
	    type: CONFIRM_UPDATE_ARTICLE,
	    id: id,
	    item: item
	  };
	};

	var receiveErrors = function receiveErrors(id, errors) {
	  return {
	    type: REJECT_UPDATE_ARTICLE,
	    id: id,
	    errors: errors
	  };
	};

	var updateArticle = exports.updateArticle = function updateArticle(id, data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        article: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveUpdate(id, json.data.article));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(receiveErrors(id, payload));
	        dispatch((0, _flashActions.flashMessage)('Could not update article due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestCreate = function requestCreate() {
	  return {
	    type: REQUEST_CREATE_ARTICLE
	  };
	};

	var confirmCreate = function confirmCreate(item) {
	  return {
	    type: CONFIRM_CREATE_ARTICLE,
	    item: item
	  };
	};

	var rejectCreate = function rejectCreate(errors) {
	  return {
	    type: REJECT_CREATE_ARTICLE,
	    errors: errors
	  };
	};

	var createArticle = exports.createArticle = function createArticle(data) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        article: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmCreate(json.data.article));
	        dispatch((0, _flashActions.flashMessage)('Article created successfully', 'log'));
	        _reactRouter.hashHistory.push('/' + json.data.article.type.id + '/' + json.data.article._id);
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload));
	        dispatch((0, _flashActions.flashMessage)('Could not create article due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestDelete = function requestDelete(id) {
	  return {
	    type: REQUEST_DELETE_ARTICLE,
	    id: id
	  };
	};

	var confirmDelete = function confirmDelete(id) {
	  return {
	    type: CONFIRM_DELETE_ARTICLE,
	    id: id
	  };
	};

	var rejectDelete = function rejectDelete(id) {
	  return {
	    type: REJECT_DELETE_ARTICLE,
	    id: id
	  };
	};

	var deleteArticle = exports.deleteArticle = function deleteArticle(id) {
	  return function (dispatch, getState) {
	    dispatch(requestDelete(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/articles/' + id, {
	      method: 'DELETE',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmDelete(id));
	        dispatch((0, _flashActions.flashMessage)('Article was deleted', 'log'));
	      } else {
	        dispatch(rejectDelete(id));
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 774:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(775);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var user = function user() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.user : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _usersActions.RECEIVE_USERS:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _usersActions.CONFIRM_CREATE_USER:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _usersActions.REQUEST_UPDATE_USER:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _usersActions.CONFIRM_UPDATE_USER:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          data: action.updatedItem,
	          isUpdating: false,
	          errors: {}
	        });
	      } else {
	        return state;
	      }
	    case _usersActions.REJECT_UPDATE_USER:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false,
	          errors: action.errors
	        });
	      } else {
	        return state;
	      }
	    case _usersActions.REQUEST_DELETE_USER:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _usersActions.REJECT_DELETE_USER:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

	var newUser = function newUser(state, action) {
	  switch (action.type) {
	    case _usersActions.REQUEST_CREATE_USER:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _usersActions.REJECT_CREATE_USER:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    default:
	      return state;
	  }
	};

	var users = function users() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.users : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _usersActions.REQUEST_USERS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _usersActions.RECEIVE_USERS:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items.map(function (i) {
	          return user(undefined, {
	            type: action.type,
	            item: i
	          });
	        })
	      });
	    case _usersActions.REQUEST_UPDATE_USER:
	    case _usersActions.CONFIRM_UPDATE_USER:
	    case _usersActions.REJECT_UPDATE_USER:
	    case _usersActions.REQUEST_DELETE_USER:
	    case _usersActions.REJECT_DELETE_USER:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return user(i, action);
	        })
	      });
	    case _usersActions.REQUEST_CREATE_USER:
	    case _usersActions.REJECT_CREATE_USER:
	      return _extends({}, state, {
	        newUser: newUser(state.newUser, action)
	      });
	    case _usersActions.CONFIRM_CREATE_USER:
	      return _extends({}, state, {
	        newUser: _initialState2.default.users.newUser,
	        items: [user(null, action)].concat(_toConsumableArray(state.items))
	      });
	    case _usersActions.CONFIRM_DELETE_USER:
	      return _extends({}, state, {
	        items: state.items.filter(function (i) {
	          return i.data._id !== action.id;
	        })
	      });
	    default:
	      return state;
	  }
	};

	exports.default = users;

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteUser = exports.createUser = exports.updateUser = exports.fetchUsers = exports.REJECT_DELETE_USER = exports.CONFIRM_DELETE_USER = exports.REQUEST_DELETE_USER = exports.REJECT_CREATE_USER = exports.CONFIRM_CREATE_USER = exports.REQUEST_CREATE_USER = exports.REJECT_UPDATE_USER = exports.CONFIRM_UPDATE_USER = exports.REQUEST_UPDATE_USER = exports.RECEIVE_USERS = exports.REQUEST_USERS = undefined;

	__webpack_require__(758);

	var _reactRouter = __webpack_require__(604);

	var _flashActions = __webpack_require__(759);

	var _authActions = __webpack_require__(757);

	var REQUEST_USERS = exports.REQUEST_USERS = 'REQUEST_USERS';
	var RECEIVE_USERS = exports.RECEIVE_USERS = 'RECEIVE_USERS';

	var REQUEST_UPDATE_USER = exports.REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
	var CONFIRM_UPDATE_USER = exports.CONFIRM_UPDATE_USER = 'CONFIRM_UPDATE_USER';
	var REJECT_UPDATE_USER = exports.REJECT_UPDATE_USER = 'REJECT_UPDATE_USER';

	var REQUEST_CREATE_USER = exports.REQUEST_CREATE_USER = 'CREATE_USER';
	var CONFIRM_CREATE_USER = exports.CONFIRM_CREATE_USER = 'CONFIRM_CREATE_USER';
	var REJECT_CREATE_USER = exports.REJECT_CREATE_USER = 'REJECT_CREATE_USER';

	var REQUEST_DELETE_USER = exports.REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
	var CONFIRM_DELETE_USER = exports.CONFIRM_DELETE_USER = 'CONFIRM_DELETE_USER';
	var REJECT_DELETE_USER = exports.REJECT_DELETE_USER = 'REJECT_DELETE_USER';

	var requestFetch = function requestFetch() {
	  return {
	    type: REQUEST_USERS
	  };
	};

	var receiveFetch = function receiveFetch(items) {
	  return {
	    type: RECEIVE_USERS,
	    items: items
	  };
	};

	var fetchUsers = exports.fetchUsers = function fetchUsers() {
	  return function (dispatch, getState) {
	    dispatch(requestFetch());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/users/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveFetch(json.data.users));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_UPDATE_USER,
	    id: id
	  };
	};

	var confirmUpdate = function confirmUpdate(id, updatedItem) {
	  return {
	    type: CONFIRM_UPDATE_USER,
	    id: id,
	    updatedItem: updatedItem
	  };
	};

	var rejectUpdate = function rejectUpdate(id, errors) {
	  return {
	    type: REJECT_UPDATE_USER,
	    id: id,
	    errors: errors
	  };
	};

	var updateUser = exports.updateUser = function updateUser(id, data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/users/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        user: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmUpdate(id, json.data.user));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectUpdate(id, payload));
	        dispatch((0, _flashActions.flashMessage)('Could not update user due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestCreate = function requestCreate() {
	  return {
	    type: REQUEST_CREATE_USER
	  };
	};

	var confirmCreate = function confirmCreate(item) {
	  return {
	    type: CONFIRM_CREATE_USER,
	    item: item
	  };
	};

	var rejectCreate = function rejectCreate(errors) {
	  return {
	    type: REJECT_CREATE_USER,
	    errors: errors
	  };
	};

	var createUser = exports.createUser = function createUser(data) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/users', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        user: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmCreate(json.data.user));
	        dispatch((0, _flashActions.flashMessage)('User created successfully', 'log'));
	        _reactRouter.hashHistory.push('/users/' + json.data.user._id);
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload));
	        dispatch((0, _flashActions.flashMessage)('Could not create user due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestDelete = function requestDelete(id) {
	  return {
	    type: REQUEST_DELETE_USER,
	    id: id
	  };
	};

	var confirmDelete = function confirmDelete(id) {
	  return {
	    type: CONFIRM_DELETE_USER,
	    id: id
	  };
	};

	var rejectDelete = function rejectDelete(id) {
	  return {
	    type: REJECT_DELETE_USER,
	    id: id
	  };
	};

	var deleteUser = exports.deleteUser = function deleteUser(id) {
	  return function (dispatch, getState) {
	    dispatch(requestDelete(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/users/' + id, {
	      method: 'DELETE',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(confirmDelete(id));
	        dispatch((0, _flashActions.flashMessage)('User was deleted', 'log'));
	      } else {
	        dispatch(rejectDelete(id));
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

/***/ },

/***/ 776:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _scheduleActions = __webpack_require__(777);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var schedule = function schedule() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.schedule : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _scheduleActions.REQUEST_SCHEDULE:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _scheduleActions.RECEIVE_SCHEDULE:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items
	      });
	    case _scheduleActions.REQUEST_UPDATE_SCHEDULE:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _scheduleActions.RECEIVE_UPDATE_SCHEDULE:
	      return _extends({}, state, {
	        isUpdating: false,
	        items: action.items
	      });
	    default:
	      return state;
	  }
	};

	exports.default = schedule;

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSchedule = exports.fetchSchedule = exports.RECEIVE_UPDATE_SCHEDULE = exports.REQUEST_UPDATE_SCHEDULE = exports.RECEIVE_SCHEDULE = exports.REQUEST_SCHEDULE = undefined;

	__webpack_require__(758);

	var _flashActions = __webpack_require__(759);

	var _authActions = __webpack_require__(757);

	var REQUEST_SCHEDULE = exports.REQUEST_SCHEDULE = 'REQUEST_SCHEDULE';
	var RECEIVE_SCHEDULE = exports.RECEIVE_SCHEDULE = 'RECEIVE_SCHEDULE';

	var REQUEST_UPDATE_SCHEDULE = exports.REQUEST_UPDATE_SCHEDULE = 'REQUEST_UPDATE_SCHEDULE';
	var RECEIVE_UPDATE_SCHEDULE = exports.RECEIVE_UPDATE_SCHEDULE = 'RECEIVE_UPDATE_SCHEDULE';

	var requestSchedule = function requestSchedule() {
	  return {
	    type: REQUEST_SCHEDULE
	  };
	};

	var receiveSchedule = function receiveSchedule(items) {
	  return {
	    type: RECEIVE_SCHEDULE,
	    items: items
	  };
	};

	var fetchSchedule = exports.fetchSchedule = function fetchSchedule() {
	  return function (dispatch, getState) {
	    dispatch(requestSchedule());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/schedule', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      }
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveSchedule(json.data.schedule.items));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate() {
	  return {
	    type: REQUEST_UPDATE_SCHEDULE
	  };
	};

	var receiveUpdate = function receiveUpdate(items) {
	  return {
	    type: RECEIVE_UPDATE_SCHEDULE,
	    items: items
	  };
	};

	var updateSchedule = exports.updateSchedule = function updateSchedule(data, successMessage) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/schedule', {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        schedule: data
	      })
	    }).then(function (response) {
	      if (response.status === 401) {
	        dispatch((0, _authActions.logOut)());
	        dispatch((0, _flashActions.flashMessage)('Authorization failed. Please, log in again', 'error'));
	        throw new Error('Unauthorized action');
	      } else {
	        return response;
	      }
	    }).then(function (response) {
	      return response.json();
	    }).then(function (json) {
	      if (json.success) {
	        dispatch(receiveUpdate(json.data.schedule.items));
	        if (successMessage) {
	          dispatch((0, _flashActions.flashMessage)(successMessage, 'log'));
	        }
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchIndexActions = __webpack_require__(761);

	var _initialState = __webpack_require__(768);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var searchIndex = function searchIndex() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.searchIndex : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _searchIndexActions.REQUEST_INDEX:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _searchIndexActions.RECEIVE_INDEX:
	      return _extends({}, state, {
	        isFetching: false,
	        lastUpdatedOn: action.lastUpdatedOn,
	        lastUpdatedBy: action.lastUpdatedBy
	      });
	    case _searchIndexActions.REQUEST_UPDATE_INDEX:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _searchIndexActions.CONFIRM_UPDATE_INDEX:
	      return _extends({}, state, {
	        isUpdating: false,
	        lastUpdatedOn: action.lastUpdatedOn,
	        lastUpdatedBy: action.lastUpdatedBy
	      });
	    default:
	      return state;
	  }
	};

	exports.default = searchIndex;

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _articleActions = __webpack_require__(773);

	var _Directory = __webpack_require__(780);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _ArticleDirectoryItem = __webpack_require__(784);

	var _ArticleDirectoryItem2 = _interopRequireDefault(_ArticleDirectoryItem);

	var _UI = __webpack_require__(600);

	var _Loading = __webpack_require__(754);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _PageNotFound = __webpack_require__(789);

	var _PageNotFound2 = _interopRequireDefault(_PageNotFound);

	var _config = __webpack_require__(760);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleDirectory = function (_React$Component) {
	  _inherits(ArticleDirectory, _React$Component);

	  function ArticleDirectory(props) {
	    _classCallCheck(this, ArticleDirectory);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleDirectory).call(this, props));

	    _this.state = {
	      notFound: false
	    };
	    return _this;
	  }

	  _createClass(ArticleDirectory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var params = _props.params;


	      if ((0, _config.isSection)(params.sectionId) || (0, _config.isAttachment)(params.sectionId) || (0, _config.isBlogpost)(params.sectionId) || (0, _config.isFaq)(params.sectionId)) {
	        this.setState({ notFound: false });
	        dispatch((0, _articleActions.fetchArticles)());
	      } else {
	        this.setState({ notFound: true });
	      }
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var params = newProps.params;


	      if (params.sectionId !== this.props.params.sectionId) {
	        if ((0, _config.isSection)(params.sectionId) || (0, _config.isAttachment)(params.sectionId) || (0, _config.isBlogpost)(params.sectionId) || (0, _config.isFaq)(params.sectionId)) {
	          this.setState({ notFound: false });
	        } else {
	          this.setState({ notFound: true });
	        }
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      if (this.state.notFound) {
	        return _react2.default.createElement(_PageNotFound2.default, null);
	      } else {
	        var _ret = function () {
	          var _props2 = _this2.props;
	          var children = _props2.children;
	          var isFetching = _props2.isFetching;
	          var items = _props2.items;
	          var params = _props2.params;


	          var currentSection = (0, _config.getCurrentSection)(params.sectionId);

	          if (isFetching) {
	            return {
	              v: _react2.default.createElement(_Loading2.default, null)
	            };
	          } else {
	            var articles = items.filter(function (i) {
	              return i.data.type.id === currentSection.id;
	            }).map(function (i) {
	              return _react2.default.createElement(_ArticleDirectoryItem2.default, { key: i.data._id, item: i });
	            });

	            var actions = _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                { med: true,
	                  to: currentSection.id + '/new',
	                  theme: 'accent1' },
	                'Create new'
	              )
	            );

	            return {
	              v: _react2.default.createElement(_Directory2.default, { title: currentSection.label, items: articles, actions: actions, children: children })
	            };
	          }
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }]);

	  return ArticleDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.articles.isFetching,
	    items: state.articles.items
	  };
		})(ArticleDirectory);

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Directory = __webpack_require__(781);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	var _Layouts = __webpack_require__(676);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Directory = function Directory(_ref) {
	  var title = _ref.title;
	  var items = _ref.items;
	  var _ref$actions = _ref.actions;
	  var actions = _ref$actions === undefined ? '' : _ref$actions;
	  var children = _ref.children;

	  if (children) {
	    return children;
	  } else {
	    return _react2.default.createElement(
	      'div',
	      { className: _Directory2.default.Directory },
	      _react2.default.createElement(
	        'div',
	        { className: _Directory2.default.Directory__header },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(_Title2.default, { label: title }),
	          actions
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _Directory2.default.Directory__body },
	        items
	      )
	    );
	  }
	};

	exports.default = Directory;

/***/ },

/***/ 781:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Directory":"Directory__Directory___3ZXQu","Directory__header":"Directory__Directory__header___1mJxL","Directory__body":"Directory__Directory__body___2uWhM"};

/***/ },

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Title = __webpack_require__(783);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Title = function Title(_ref) {
	  var label = _ref.label;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'default' : _ref$theme;

	  var classNames = [_Title2.default.Title];

	  switch (theme) {
	    case 'success':
	      classNames.push(_Title2.default.Title_success);
	      break;
	    case 'error':
	      classNames.push(_Title2.default.Title_error);
	      break;
	    case 'default':
	    default:
	      classNames.push(_Title2.default.Title_default);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: classNames.join(' ') },
	    label
	  );
	};

	exports.default = Title;

/***/ },

/***/ 783:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Title":"Title__Title___17BuK","Title_default":"Title__Title_default___3EBMd","Title_success":"Title__Title_success___2uRxK","Title_error":"Title__Title_error___1YSuV"};

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(492);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Badge = __webpack_require__(785);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _DirectoryItem = __webpack_require__(787);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _articleActions = __webpack_require__(773);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleDirectoryItem = function (_React$Component) {
	  _inherits(ArticleDirectoryItem, _React$Component);

	  function ArticleDirectoryItem(props) {
	    _classCallCheck(this, ArticleDirectoryItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleDirectoryItem).call(this, props));

	    _this.publish = _this.publish.bind(_this);
	    _this.delete = _this.delete.bind(_this);
	    return _this;
	  }

	  _createClass(ArticleDirectoryItem, [{
	    key: 'publish',
	    value: function publish() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var item = _props.item;

	      var payload = {
	        isPublished: !item.data.isPublished
	      };

	      dispatch((0, _articleActions.updateArticle)(item.data._id, payload));
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var item = _props2.item;


	      dispatch((0, _articleActions.deleteArticle)(item.data._id));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var item = this.props.item;


	      return _react2.default.createElement(
	        _DirectoryItem.DirectoryItem,
	        null,
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 0.5 },
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between', alignItems: 'center' },
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(_Badge2.default, { label: item.data.isPublished ? 'Published' : 'Draft',
	                  theme: item.data.isPublished ? 'success' : 'error' })
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _DirectoryItem.DirectoryItemInfo,
	                  null,
	                  'Last modified by ',
	                  item.data.lastModifiedBy,
	                  ' on ',
	                  _react2.default.createElement(_reactTime2.default, { value: item.data.lastModifiedAt, format: 'MMMM Do YYYY (h:mm a)' })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating,
	                    inverse: true,
	                    theme: item.data.isPublished ? 'error' : 'accent1',
	                    onClick: this.publish },
	                  item.data.isPublished ? 'Unpublish' : 'Publish'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating || item.data.isPublished,
	                    inverse: true,
	                    theme: 'error',
	                    onClick: this.delete },
	                  'Delete'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _DirectoryItem.DirectoryItemTitle,
	          { to: item.data.type.id + '/' + item.data._id },
	          item.data.title
	        )
	      );
	    }
	  }]);

	  return ArticleDirectoryItem;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(ArticleDirectoryItem);

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(786);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Badge = function Badge(_ref) {
	  var label = _ref.label;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'default' : _ref$theme;

	  var classNames = [_Badge2.default.Badge];
	  switch (theme) {
	    case 'accent1':
	      classNames.push(_Badge2.default.Badge_accent1);
	      break;
	    case 'accent2':
	      classNames.push(_Badge2.default.Badge_accent2);
	      break;
	    case 'error':
	      classNames.push(_Badge2.default.Badge_error);
	      break;
	    case 'success':
	      classNames.push(_Badge2.default.Badge_success);
	      break;
	    case 'default':
	    default:
	      classNames.push(_Badge2.default.Badge_default);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: classNames.join(' ') },
	    label
	  );
	};

	exports.default = Badge;

/***/ },

/***/ 786:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Badge":"Badge__Badge___33eQR","Badge_default":"Badge__Badge_default___xOU8r","Badge_accent1":"Badge__Badge_accent1___3fv6w","Badge_accent2":"Badge__Badge_accent2___2K_gl","Badge_error":"Badge__Badge_error___baxoF","Badge_success":"Badge__Badge_success___1K0zf"};

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DirectoryItemInfo = exports.DirectoryItemTitle = exports.DirectoryItem = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(604);

	var _DirectoryItem = __webpack_require__(788);

	var _DirectoryItem2 = _interopRequireDefault(_DirectoryItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DirectoryItem = function DirectoryItem(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _DirectoryItem2.default.DirectoryItem },
	    children
	  );
	};

	var DirectoryItemTitle = function DirectoryItemTitle(_ref2) {
	  var children = _ref2.children;
	  var _ref2$to = _ref2.to;
	  var to = _ref2$to === undefined ? null : _ref2$to;

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: to, className: _DirectoryItem2.default.DirectoryItem__title + ' ' + _DirectoryItem2.default.DirectoryItem__title_link },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'div',
	      { className: _DirectoryItem2.default.DirectoryItem__title },
	      children
	    );
	  }
	};

	var DirectoryItemInfo = function DirectoryItemInfo(_ref3) {
	  var children = _ref3.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _DirectoryItem2.default.DirectoryItem__info },
	    children
	  );
	};

	exports.DirectoryItem = DirectoryItem;
	exports.DirectoryItemTitle = DirectoryItemTitle;
		exports.DirectoryItemInfo = DirectoryItemInfo;

/***/ },

/***/ 788:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"DirectoryItem":"DirectoryItem__DirectoryItem___1Ns4D","DirectoryItem__title":"DirectoryItem__DirectoryItem__title___6_4Jv","DirectoryItem__title_link":"DirectoryItem__DirectoryItem__title_link___3aJXW","DirectoryItem__info":"DirectoryItem__DirectoryItem__info___3JI-u"};

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var PageNotFound = function PageNotFound() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    '404: Page Not Found'
	  );
	};

	exports.default = PageNotFound;

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ItemForm = __webpack_require__(791);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _articleActions = __webpack_require__(773);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	var _config = __webpack_require__(760);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleCreate = function (_React$Component) {
	  _inherits(ArticleCreate, _React$Component);

	  function ArticleCreate(props) {
	    _classCallCheck(this, ArticleCreate);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleCreate).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);
	    _this.currentSection = (0, _config.getCurrentSection)(_this.props.params.sectionId);

	    _this.state = {
	      data: {
	        title: '',
	        url: '',
	        snippet: '',
	        content: '',
	        isPublished: false,
	        attachment: ''
	      },
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(ArticleCreate, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var errors = newProps.item.errors;


	      this.setState({
	        errors: _extends({}, errors)
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var dispatch = this.props.dispatch;

	      var payload = _extends({}, this.state.data, {
	        type: this.currentSection
	      });

	      dispatch((0, _articleActions.createArticle)(payload));
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _defineProperty({}, prop, value);
	      var newErrors = _defineProperty({}, prop, null);

	      this.setState({
	        data: _extends({}, this.state.data, newData),
	        errors: _extends({}, this.state.errors, newErrors)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.item.isUpdating;


	      var attachmentSelect = '';
	      if ((0, _config.isSection)(this.currentSection.id)) {
	        attachmentSelect = _react2.default.createElement(_UI.Select, {
	          options: _config.attachments,
	          onChange: function onChange(v) {
	            return _this2.change('attachment', v);
	          },
	          value: this.state.data.attachment,
	          label: 'Attachment:' });
	      }

	      var snippetForm = '';
	      if ((0, _config.isBlogpost)(this.currentSection.id)) {
	        snippetForm = _react2.default.createElement(
	          _Layouts.Block,
	          { n: 1 },
	          _react2.default.createElement(_UI.Editor, {
	            label: 'Preview:',
	            value: this.state.data.snippet,
	            error: this.state.errors.snippet,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('snippet', value);
	            } })
	        );
	      }

	      return _react2.default.createElement(
	        _ItemForm.ItemForm,
	        null,
	        _react2.default.createElement(
	          _ItemForm.ItemFormHeader,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(_Title2.default, { label: 'New ' + this.currentSection.label + ' page' }),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    onClick: this.save },
	                  'Save'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    inverse: true,
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    to: this.currentSection.id },
	                  'Cancel'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _ItemForm.ItemFormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Title:',
	              value: this.state.data.title,
	              error: this.state.errors.title,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('title', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'URL:',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Published:',
	              checked: this.state.data.isPublished,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isPublished', value);
	              } })
	          ),
	          snippetForm,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: attachmentSelect ? 3 : 0 },
	            _react2.default.createElement(_UI.Editor, {
	              label: 'Content:',
	              value: this.state.data.content,
	              error: this.state.errors.content,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('content', value);
	              } })
	          ),
	          attachmentSelect
	        )
	      );
	    }
	  }]);

	  return ArticleCreate;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    item: state.articles.newArticle
	  };
		})(ArticleCreate);

/***/ },

/***/ 791:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ItemFormBody = exports.ItemFormHeader = exports.ItemForm = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ItemForm = __webpack_require__(792);

	var _ItemForm2 = _interopRequireDefault(_ItemForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ItemForm = function ItemForm(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _ItemForm2.default.ItemForm },
	    children
	  );
	};

	var ItemFormHeader = function ItemFormHeader(_ref2) {
	  var children = _ref2.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _ItemForm2.default.ItemForm__header },
	    children
	  );
	};

	var ItemFormBody = function ItemFormBody(_ref3) {
	  var children = _ref3.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _ItemForm2.default.ItemForm__body },
	    children
	  );
	};

	exports.ItemForm = ItemForm;
	exports.ItemFormHeader = ItemFormHeader;
		exports.ItemFormBody = ItemFormBody;

/***/ },

/***/ 792:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ItemForm":"ItemForm__ItemForm___2L4UU","ItemForm__header":"ItemForm__ItemForm__header___1s_fV","ItemForm__body":"ItemForm__ItemForm__body___3zeWT"};

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _articleActions = __webpack_require__(773);

	var _ItemForm = __webpack_require__(791);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	var _config = __webpack_require__(760);

	var _Comments = __webpack_require__(794);

	var _Comments2 = _interopRequireDefault(_Comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ArticleEdit = function (_React$Component) {
	  _inherits(ArticleEdit, _React$Component);

	  function ArticleEdit(props) {
	    _classCallCheck(this, ArticleEdit);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticleEdit).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);
	    _this.deleteComment = _this.deleteComment.bind(_this);
	    _this.deleteReply = _this.deleteReply.bind(_this);
	    _this.currentSection = props.item.data.type;

	    _this.state = {
	      isDirty: false,
	      data: _extends({}, props.item.data),
	      errors: _extends({}, props.item.errors)
	    };
	    return _this;
	  }

	  _createClass(ArticleEdit, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$item = newProps.item;
	      var errors = _newProps$item.errors;
	      var data = _newProps$item.data;
	      var isUpdating = _newProps$item.isUpdating;


	      if (!isUpdating) {
	        var newState = {};

	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          newState = {
	            isDirty: false,
	            data: data,
	            errors: {}
	          };
	        } else {
	          newState = {
	            errors: _extends({}, errors)
	          };
	        }

	        this.setState(newState);
	      }
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _articleActions.updateArticle)(this.props.item.data._id, this.state.data));
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _defineProperty({}, prop, value);
	      var newErrors = _defineProperty({}, prop, null);

	      this.setState({
	        isDirty: true,
	        data: _extends({}, this.state.data, newData),
	        errors: _extends({}, this.state.errors, newErrors)
	      });
	    }
	  }, {
	    key: 'deleteComment',
	    value: function deleteComment(id) {
	      var newComments = this.state.data.comments.map(function (c) {
	        if (c._id === id) {
	          return _extends({}, c, {
	            isDeleted: !c.isDeleted
	          });
	        } else {
	          return c;
	        }
	      });

	      this.setState({
	        isDirty: true,
	        data: _extends({}, this.state.data, {
	          comments: newComments
	        })
	      });
	    }
	  }, {
	    key: 'deleteReply',
	    value: function deleteReply(id, commentId) {
	      var comment = this.state.data.comments.filter(function (c) {
	        return c._id === commentId;
	      })[0];
	      var newReplies = comment.replies.map(function (r) {
	        if (r._id === id) {
	          return _extends({}, r, {
	            isDeleted: !r.isDeleted
	          });
	        } else {
	          return r;
	        }
	      });

	      this.setState({
	        isDirty: true,
	        data: _extends({}, this.state.data, {
	          comments: this.state.data.comments.map(function (c) {
	            if (c._id === commentId) {
	              return _extends({}, c, {
	                replies: newReplies
	              });
	            } else {
	              return c;
	            }
	          })
	        })
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.item.isUpdating;


	      var attachmentSelect = '';
	      if ((0, _config.isSection)(this.currentSection.id)) {
	        attachmentSelect = _react2.default.createElement(_UI.Select, {
	          options: _config.attachments,
	          onChange: function onChange(v) {
	            return _this2.change('attachment', v);
	          },
	          value: this.state.data.attachment,
	          label: 'Attachment:' });
	      }

	      var snippetForm = '';
	      if ((0, _config.isBlogpost)(this.currentSection.id)) {
	        snippetForm = _react2.default.createElement(
	          _Layouts.Block,
	          { n: 1 },
	          _react2.default.createElement(_UI.Editor, {
	            label: 'Preview:',
	            value: this.state.data.snippet,
	            error: this.state.errors.snippet,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('snippet', value);
	            } })
	        );
	      }

	      var commentsForm = '';
	      if ((0, _config.isBlogpost)(this.currentSection.id) && this.state.data.comments.length > 0) {
	        commentsForm = _react2.default.createElement(_Comments2.default, { items: this.state.data.comments, onDeleteComment: this.deleteComment, onDeleteReply: this.deleteReply });
	      }

	      var header = '';
	      if (this.state.isDirty) {
	        header = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(_Title2.default, { label: 'Unsaved Changes', theme: 'error' }),
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  theme: 'accent1',
	                  disabled: isUpdating,
	                  onClick: this.save },
	                'Save'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  inverse: true,
	                  theme: 'accent1',
	                  disabled: isUpdating,
	                  to: this.props.item.data.type.id },
	                'Cancel'
	              )
	            )
	          )
	        );
	      } else {
	        header = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(_Title2.default, { label: 'All Saved', theme: 'success' }),
	          _react2.default.createElement(
	            _UI.Button,
	            {
	              inverse: true,
	              theme: 'accent1',
	              disabled: isUpdating,
	              to: this.props.item.data.type.id },
	            'Close'
	          )
	        );
	      }

	      return _react2.default.createElement(
	        _ItemForm.ItemForm,
	        null,
	        _react2.default.createElement(
	          _ItemForm.ItemFormHeader,
	          null,
	          header
	        ),
	        _react2.default.createElement(
	          _ItemForm.ItemFormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Title:',
	              value: this.state.data.title,
	              error: this.state.errors.title,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('title', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'URL:',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Published:',
	              checked: this.state.data.isPublished,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isPublished', value);
	              } })
	          ),
	          snippetForm,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: attachmentSelect || commentsForm ? 3 : 0 },
	            _react2.default.createElement(_UI.Editor, {
	              label: 'Content:',
	              value: this.state.data.content,
	              error: this.state.errors.content,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('content', value);
	              } })
	          ),
	          attachmentSelect,
	          commentsForm
	        )
	      );
	    }
	  }]);

	  return ArticleEdit;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var itemId = ownProps.params.itemId;

	  return {
	    item: state.articles.items ? state.articles.items.filter(function (i) {
	      return i.data._id === itemId;
	    })[0] : { data: {}, errors: {} }
	  };
		})(ArticleEdit);

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Comment = __webpack_require__(795);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _Layouts = __webpack_require__(676);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Comments = function Comments(_ref) {
	  var items = _ref.items;
	  var onDeleteComment = _ref.onDeleteComment;
	  var onDeleteReply = _ref.onDeleteReply;

	  var sortedComments = items.sort(function (a, b) {
	    if (a.createdAt > b.createdAt) {
	      return -1;
	    } else if (a.createdAt < b.createdAt) {
	      return 1;
	    } else {
	      return 0;
	    }
	  });

	  var comments = sortedComments.map(function (i) {
	    return _react2.default.createElement(_Comment2.default, { key: i._id, item: i, onDeleteComment: onDeleteComment, onDeleteReply: onDeleteReply });
	  });

	  return _react2.default.createElement(
	    'div',
	    null,
	    _react2.default.createElement(
	      _Layouts.Block,
	      null,
	      _react2.default.createElement(_Title2.default, { label: 'Comments' })
	    ),
	    comments
	  );
	};

	exports.default = Comments;

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(492);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Comment = __webpack_require__(796);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Reply = function Reply(_ref) {
	  var item = _ref.item;
	  var onDeleteReply = _ref.onDeleteReply;
	  var commentId = _ref.commentId;
	  var commentIsDeleted = _ref.commentIsDeleted;

	  var actions = '';
	  if (item.isDeleted) {
	    actions = _react2.default.createElement(
	      _Layouts.ListInline,
	      null,
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _Comment2.default.Reply__deleteInfo },
	          'reply will be deleted on save'
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          _UI.Button,
	          { small: true,
	            inverse: true,
	            theme: 'accent1',
	            disabled: commentIsDeleted,
	            onClick: function onClick() {
	              return onDeleteReply(item._id, commentId);
	            } },
	          'Put back'
	        )
	      )
	    );
	  } else {
	    actions = _react2.default.createElement(
	      _UI.Button,
	      { small: true,
	        inverse: true,
	        theme: 'error',
	        disabled: commentIsDeleted,
	        onClick: function onClick() {
	          return onDeleteReply(item._id, commentId);
	        } },
	      'Delete'
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _Comment2.default.Reply + ' ' + (item.isDeleted ? _Comment2.default.Reply_deleted : '') },
	    _react2.default.createElement(
	      _Layouts.Block,
	      { n: 0.5 },
	      _react2.default.createElement(
	        _Layouts.Flex,
	        { justifyContent: 'space-between' },
	        _react2.default.createElement(
	          'div',
	          { className: _Comment2.default.Reply__info },
	          'Posted by ',
	          item.lastModifiedBy,
	          ' on ',
	          _react2.default.createElement(_reactTime2.default, { value: item.createdAt, format: 'MMMM Do YYYY (h:mm a)' })
	        ),
	        actions
	      )
	    ),
	    _react2.default.createElement('div', {
	      className: _Comment2.default.Reply__body,
	      dangerouslySetInnerHTML: { __html: item.content } })
	  );
	};

	var Comment = function Comment(_ref2) {
	  var item = _ref2.item;
	  var onDeleteComment = _ref2.onDeleteComment;
	  var onDeleteReply = _ref2.onDeleteReply;

	  var sortedReplies = item.replies.sort(function (a, b) {
	    if (a.createdAt > b.createdAt) {
	      return -1;
	    } else if (a.createdAt < b.createdAt) {
	      return 1;
	    } else {
	      return 0;
	    }
	  });

	  var replies = sortedReplies.map(function (r) {
	    return _react2.default.createElement(Reply, { key: r._id, commentId: item._id, item: r, onDeleteReply: onDeleteReply, commentIsDeleted: item.isDeleted });
	  });

	  var actions = '';
	  if (item.isDeleted) {
	    actions = _react2.default.createElement(
	      _Layouts.ListInline,
	      null,
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _Comment2.default.Comment__deleteInfo },
	          'comment will be deleted on save'
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          _UI.Button,
	          { small: true,
	            inverse: true,
	            theme: 'accent1',
	            onClick: function onClick() {
	              return onDeleteComment(item._id);
	            } },
	          'Put back'
	        )
	      )
	    );
	  } else {
	    actions = _react2.default.createElement(
	      _UI.Button,
	      { small: true,
	        inverse: true,
	        theme: 'error',
	        onClick: function onClick() {
	          return onDeleteComment(item._id);
	        } },
	      'Delete'
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _Comment2.default.Comment + ' ' + (item.isDeleted ? _Comment2.default.Comment_deleted : '') },
	    _react2.default.createElement(
	      'div',
	      { className: _Comment2.default.Comment__comment },
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 0.5 },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(
	            'div',
	            { className: _Comment2.default.Comment__info },
	            'Posted by ',
	            item.lastModifiedBy,
	            ' on ',
	            _react2.default.createElement(_reactTime2.default, { value: item.createdAt, format: 'MMMM Do YYYY (h:mm a)' })
	          ),
	          actions
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 1 },
	        _react2.default.createElement('div', {
	          className: _Comment2.default.Comment__body,
	          dangerouslySetInnerHTML: { __html: item.content } })
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: _Comment2.default.Comment__replies },
	        replies
	      )
	    )
	  );
	};

	exports.default = Comment;

/***/ },

/***/ 796:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__deleteInfo":"Comment__Comment__deleteInfo___1xQWE","Comment__info":"Comment__Comment__info___1rool","Comment__comment":"Comment__Comment__comment___PQT67","Comment__body":"Comment__Comment__body___1S5F6","Comment__replies":"Comment__Comment__replies___PXLXR","Comment_deleted":"Comment__Comment_deleted___2nkYX","Reply":"Comment__Reply___1J5JO","Reply__deleteInfo":"Comment__Reply__deleteInfo___2OAbX","Reply__info":"Comment__Reply__info___30jI2","Reply__body":"Comment__Reply__body___1qhpn","Reply_deleted":"Comment__Reply_deleted___1kOVQ"};

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _usersActions = __webpack_require__(775);

	var _Directory = __webpack_require__(780);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _UsersDirectoryItem = __webpack_require__(798);

	var _UsersDirectoryItem2 = _interopRequireDefault(_UsersDirectoryItem);

	var _UI = __webpack_require__(600);

	var _Loading = __webpack_require__(754);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersDirectory = function (_React$Component) {
	  _inherits(UsersDirectory, _React$Component);

	  function UsersDirectory() {
	    _classCallCheck(this, UsersDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UsersDirectory).apply(this, arguments));
	  }

	  _createClass(UsersDirectory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _usersActions.fetchUsers)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var isFetching = _props.isFetching;
	      var items = _props.items;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        var users = items.map(function (i) {
	          return _react2.default.createElement(_UsersDirectoryItem2.default, { key: i.data._id, item: i });
	        });

	        var actions = _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _UI.Button,
	            {
	              to: '/users/new',
	              theme: 'accent1' },
	            'Create new'
	          )
	        );

	        return _react2.default.createElement(_Directory2.default, { title: 'Users', items: users, actions: actions, children: children });
	      }
	    }
	  }]);

	  return UsersDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.users.isFetching,
	    items: state.users.items
	  };
		})(UsersDirectory);

/***/ },

/***/ 798:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(492);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Badge = __webpack_require__(785);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _DirectoryItem = __webpack_require__(787);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _usersActions = __webpack_require__(775);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersDirectoryItem = function (_React$Component) {
	  _inherits(UsersDirectoryItem, _React$Component);

	  function UsersDirectoryItem(props) {
	    _classCallCheck(this, UsersDirectoryItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UsersDirectoryItem).call(this, props));

	    _this.disable = _this.disable.bind(_this);
	    _this.delete = _this.delete.bind(_this);
	    return _this;
	  }

	  _createClass(UsersDirectoryItem, [{
	    key: 'disable',
	    value: function disable() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var item = _props.item;

	      var payload = {
	        isEnabled: !item.data.isEnabled
	      };

	      dispatch((0, _usersActions.updateUser)(item.data._id, payload));
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var item = _props2.item;


	      dispatch((0, _usersActions.deleteUser)(item.data._id));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var item = this.props.item;


	      var lastLoggedIn = '';
	      if (item.data.lastLoggedInAt) {
	        lastLoggedIn = _react2.default.createElement(
	          _DirectoryItem.DirectoryItemInfo,
	          null,
	          'Last log in on ',
	          _react2.default.createElement(_reactTime2.default, { value: item.data.lastLoggedInAt, format: 'MMMM Do YYYY (h:mm a)' })
	        );
	      } else {
	        lastLoggedIn = _react2.default.createElement(
	          _DirectoryItem.DirectoryItemInfo,
	          null,
	          'Never logged in'
	        );
	      }

	      return _react2.default.createElement(
	        _DirectoryItem.DirectoryItem,
	        { draft: !item.data.isEnabled },
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 0.5 },
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between', alignItems: 'center' },
	            lastLoggedIn,
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.disable,
	                    inverse: true,
	                    theme: item.data.isEnabled ? 'error' : 'accent1',
	                    onClick: this.disable },
	                  item.data.isEnabled ? 'Disable' : 'Enable'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating || item.data.isEnabled,
	                    inverse: true,
	                    theme: 'error',
	                    onClick: this.delete },
	                  'Delete'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _DirectoryItem.DirectoryItemTitle,
	              { to: 'users/' + item.data._id },
	              item.data.name,
	              ' (',
	              item.data.email,
	              ')'
	            )
	          ),
	          item.data.isEnabled ? '' : _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(_Badge2.default, { label: 'Disabled', theme: 'error' })
	          ),
	          item.data.admin ? _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(_Badge2.default, { label: 'Admin', theme: 'success' })
	          ) : ''
	        )
	      );
	    }
	  }]);

	  return UsersDirectoryItem;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(UsersDirectoryItem);

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ItemForm = __webpack_require__(791);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _usersActions = __webpack_require__(775);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersCreate = function (_React$Component) {
	  _inherits(UsersCreate, _React$Component);

	  function UsersCreate(props) {
	    _classCallCheck(this, UsersCreate);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UsersCreate).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    _this.state = {
	      data: {
	        name: '',
	        email: '',
	        password: '',
	        admin: '',
	        isEnabled: false
	      },
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(UsersCreate, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var errors = newProps.item.errors;


	      this.setState({
	        errors: _extends({}, errors)
	      });
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _usersActions.createUser)(this.state.data));
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _defineProperty({}, prop, value);
	      var newErrors = _defineProperty({}, prop, null);

	      this.setState({
	        data: _extends({}, this.state.data, newData),
	        errors: _extends({}, this.state.errors, newErrors)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.item.isUpdating;


	      return _react2.default.createElement(
	        _ItemForm.ItemForm,
	        null,
	        _react2.default.createElement(
	          _ItemForm.ItemFormHeader,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(_Title2.default, { label: 'Create User' }),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    onClick: this.save },
	                  'Save'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    inverse: true,
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    to: 'users' },
	                  'Cancel'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _ItemForm.ItemFormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Full Name',
	              value: this.state.data.name,
	              error: this.state.errors.name,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('name', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Email',
	              value: this.state.data.email,
	              error: this.state.errors.email,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('email', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Password',
	              value: this.state.data.password,
	              error: this.state.errors.password,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('password', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Enabled',
	              checked: this.state.data.isEnabled,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isEnabled', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Admin',
	              checked: this.state.data.admin,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('admin', value);
	              } })
	          )
	        )
	      );
	    }
	  }]);

	  return UsersCreate;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    item: state.users.newUser
	  };
		})(UsersCreate);

/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ItemForm = __webpack_require__(791);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _usersActions = __webpack_require__(775);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersEdit = function (_React$Component) {
	  _inherits(UsersEdit, _React$Component);

	  function UsersEdit(props) {
	    _classCallCheck(this, UsersEdit);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UsersEdit).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    _this.state = {
	      isDirty: false,
	      data: _extends({}, props.item.data),
	      errors: _extends({}, props.item.errors)
	    };
	    return _this;
	  }

	  _createClass(UsersEdit, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$item = newProps.item;
	      var errors = _newProps$item.errors;
	      var data = _newProps$item.data;
	      var isUpdating = _newProps$item.isUpdating;


	      if (!isUpdating) {
	        var newState = {};

	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          newState = {
	            isDirty: false,
	            data: data,
	            errors: {}
	          };
	        } else {
	          newState = {
	            errors: _extends({}, errors)
	          };
	        }

	        this.setState(newState);
	      }
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _usersActions.updateUser)(this.props.item.data._id, this.state.data));
	    }
	  }, {
	    key: 'change',
	    value: function change(prop, value) {
	      var newData = _defineProperty({}, prop, value);
	      var newErrors = _defineProperty({}, prop, null);

	      this.setState({
	        isDirty: true,
	        data: _extends({}, this.state.data, newData),
	        errors: _extends({}, this.state.errors, newErrors)
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.item.isUpdating;


	      var header = '';

	      if (this.state.isDirty) {
	        header = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(_Title2.default, { label: 'Unsaved Changes', theme: 'error' }),
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  theme: 'accent1',
	                  disabled: isUpdating,
	                  onClick: this.save },
	                'Save'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  inverse: true,
	                  theme: 'accent1',
	                  disabled: isUpdating,
	                  to: 'users' },
	                'Cancel'
	              )
	            )
	          )
	        );
	      } else {
	        header = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'space-between' },
	          _react2.default.createElement(_Title2.default, { label: 'All Saved', theme: 'success' }),
	          _react2.default.createElement(
	            _UI.Button,
	            { small: true,
	              inverse: true,
	              theme: 'accent1',
	              disabled: isUpdating,
	              to: 'users' },
	            'Close'
	          )
	        );
	      }

	      return _react2.default.createElement(
	        _ItemForm.ItemForm,
	        null,
	        _react2.default.createElement(
	          _ItemForm.ItemFormHeader,
	          null,
	          header
	        ),
	        _react2.default.createElement(
	          _ItemForm.ItemFormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Full Name',
	              value: this.state.data.name,
	              error: this.state.errors.name,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('name', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Email',
	              value: this.state.data.email,
	              error: this.state.errors.email,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('email', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Enabled',
	              checked: this.state.data.isEnabled,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isEnabled', value);
	              } })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Checkbox, { label: 'Admin',
	              checked: this.state.data.admin,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('admin', value);
	              } })
	          )
	        )
	      );
	    }
	  }]);

	  return UsersEdit;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var itemId = ownProps.params.itemId;

	  return {
	    item: state.users.items ? state.users.items.filter(function (i) {
	      return i.data._id === itemId;
	    })[0] : { data: {}, errors: {} }
	  };
		})(UsersEdit);

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _questionsActions = __webpack_require__(771);

	var _Directory = __webpack_require__(780);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _QuestionsDirectoryItem = __webpack_require__(802);

	var _QuestionsDirectoryItem2 = _interopRequireDefault(_QuestionsDirectoryItem);

	var _Loading = __webpack_require__(754);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsDirectory = function (_React$Component) {
	  _inherits(QuestionsDirectory, _React$Component);

	  function QuestionsDirectory() {
	    _classCallCheck(this, QuestionsDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsDirectory).apply(this, arguments));
	  }

	  _createClass(QuestionsDirectory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _questionsActions.fetchQuestions)());
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var isFetching = _props.isFetching;
	      var items = _props.items;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        var questions = items.map(function (i) {
	          return _react2.default.createElement(_QuestionsDirectoryItem2.default, { key: i.data._id, item: i });
	        });

	        return _react2.default.createElement(_Directory2.default, { title: 'Questions', items: questions, children: children });
	      }
	    }
	  }]);

	  return QuestionsDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.questions.isFetching,
	    items: state.questions.items
	  };
		})(QuestionsDirectory);

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _reactTime = __webpack_require__(492);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Badge = __webpack_require__(785);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _DirectoryItem = __webpack_require__(787);

	var _Layouts = __webpack_require__(676);

	var _UI = __webpack_require__(600);

	var _questionsActions = __webpack_require__(771);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsDirectoryItem = function (_React$Component) {
	  _inherits(QuestionsDirectoryItem, _React$Component);

	  function QuestionsDirectoryItem(props) {
	    _classCallCheck(this, QuestionsDirectoryItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsDirectoryItem).call(this, props));

	    _this.markSeen = _this.markSeen.bind(_this);
	    _this.delete = _this.delete.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionsDirectoryItem, [{
	    key: 'markSeen',
	    value: function markSeen() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var item = _props.item;

	      var payload = {
	        isSeen: !item.data.isSeen
	      };

	      dispatch((0, _questionsActions.updateQuestion)(item.data._id, payload));
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var item = _props2.item;


	      dispatch((0, _questionsActions.deleteQuestion)(item.data._id));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var item = this.props.item;


	      return _react2.default.createElement(
	        _DirectoryItem.DirectoryItem,
	        { draft: !item.data.isSeen },
	        _react2.default.createElement(
	          _Layouts.Block,
	          { n: 0.5 },
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between', alignItems: 'center' },
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(_Badge2.default, { label: item.data.isSeen ? 'Seen' : 'New',
	                  theme: item.data.isSeen ? 'default' : 'accent2' })
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _DirectoryItem.DirectoryItemInfo,
	                  null,
	                  'Posted by ',
	                  item.data.posterName,
	                  ' (',
	                  item.data.posterEmail,
	                  ') on ',
	                  _react2.default.createElement(_reactTime2.default, { value: item.data.createdAt, format: 'MMMM Do YYYY (h:mm a)' })
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              item.data.isSeen ? '' : _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating,
	                    theme: 'accent1',
	                    href: 'mailto:' + item.data.posterEmail + '?subject=Reply to your questions on antivax&body=Reply to your question:\n ' + item.data.question },
	                  'respond via email'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating,
	                    inverse: true,
	                    theme: 'accent1',
	                    onClick: this.markSeen },
	                  item.data.isSeen ? 'mark as new' : 'mark as seen'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: item.isUpdating || item.data.isPublished,
	                    inverse: true,
	                    theme: 'error',
	                    onClick: this.delete },
	                  'Delete'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _DirectoryItem.DirectoryItemTitle,
	          null,
	          item.data.question
	        )
	      );
	    }
	  }]);

	  return QuestionsDirectoryItem;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(QuestionsDirectoryItem);

/***/ },

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(470);

	var _ScheduleBuilderItem = __webpack_require__(804);

	var _ScheduleBuilderItem2 = _interopRequireDefault(_ScheduleBuilderItem);

	var _ItemForm = __webpack_require__(791);

	var _UI = __webpack_require__(600);

	var _Layouts = __webpack_require__(676);

	var _scheduleActions = __webpack_require__(777);

	var _articleActions = __webpack_require__(773);

	var _Loading = __webpack_require__(754);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Title = __webpack_require__(782);

	var _Title2 = _interopRequireDefault(_Title);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScheduleBuilder = function (_React$Component) {
	  _inherits(ScheduleBuilder, _React$Component);

	  function ScheduleBuilder(props) {
	    _classCallCheck(this, ScheduleBuilder);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScheduleBuilder).call(this, props));

	    _this.discard = _this.discard.bind(_this);
	    _this.changeItem = _this.changeItem.bind(_this);
	    _this.insertItem = _this.insertItem.bind(_this);

	    _this.state = {
	      isDirty: false,
	      items: _this.props.items
	    };
	    return _this;
	  }

	  _createClass(ScheduleBuilder, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var fetchData = this.props.fetchData;


	      fetchData();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var items = newProps.items;
	      var isFetchingVaccines = newProps.isFetchingVaccines;
	      var isFetchingSchedule = newProps.isFetchingSchedule;
	      var isUpdating = newProps.isUpdating;


	      if (!isUpdating && !isFetchingVaccines && !isFetchingSchedule) {
	        var newState = {
	          isDirty: false,
	          items: items
	        };

	        this.setState(newState);
	      }
	    }
	  }, {
	    key: 'discard',
	    value: function discard() {
	      var items = this.props.items;


	      this.setState({
	        isDirty: false,
	        items: items
	      });
	    }
	  }, {
	    key: 'changeItem',
	    value: function changeItem(prop, value, index) {
	      var targetItem = this.state.items[index];

	      this.setState({
	        isDirty: true,
	        items: [].concat(_toConsumableArray(this.state.items.slice(0, index)), [_extends({}, targetItem, _defineProperty({}, prop, value))], _toConsumableArray(this.state.items.slice(index + 1)))
	      });
	    }
	  }, {
	    key: 'insertItem',
	    value: function insertItem() {
	      var vaccines = this.props.vaccines;


	      this.setState({
	        isDirty: true,
	        items: [].concat(_toConsumableArray(this.state.items), [{
	          age: '',
	          vaccines: [{
	            url: vaccines[0].data.url,
	            title: vaccines[0].data.title
	          }],
	          isDeleted: false
	        }])
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var isFetchingVaccines = _props.isFetchingVaccines;
	      var isFetchingSchedule = _props.isFetchingSchedule;
	      var isUpdating = _props.isUpdating;
	      var vaccines = _props.vaccines;
	      var save = _props.save;


	      if (isFetchingVaccines || isFetchingSchedule) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        var schedule = this.state.items.map(function (item, index) {
	          return _react2.default.createElement(
	            _Layouts.ListItem,
	            { n: 2, key: index },
	            _react2.default.createElement(_ScheduleBuilderItem2.default, {
	              item: item,
	              vaccines: vaccines,
	              isUpdating: isUpdating,
	              onChange: function onChange(prop, v) {
	                return _this2.changeItem(prop, v, index);
	              } })
	          );
	        });

	        var header = '';
	        if (this.state.isDirty) {
	          header = _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(_Title2.default, { label: 'Unsaved Changes', theme: 'error' }),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    onClick: function onClick() {
	                      return save({
	                        items: _this2.state.items
	                      });
	                    } },
	                  'Save'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    inverse: true,
	                    theme: 'accent1',
	                    disabled: isUpdating,
	                    onClick: this.discard },
	                  'Discard'
	                )
	              )
	            )
	          );
	        } else {
	          header = _react2.default.createElement(_Title2.default, { label: 'All Saved', theme: 'success' });
	        }

	        return _react2.default.createElement(
	          _ItemForm.ItemForm,
	          null,
	          _react2.default.createElement(
	            _ItemForm.ItemFormHeader,
	            null,
	            header
	          ),
	          _react2.default.createElement(
	            _ItemForm.ItemFormBody,
	            null,
	            _react2.default.createElement(
	              _Layouts.Block,
	              { n: 3 },
	              _react2.default.createElement(
	                _Layouts.List,
	                { n: 2 },
	                schedule
	              ),
	              _react2.default.createElement(
	                _UI.Button,
	                {
	                  small: true,
	                  inverse: true,
	                  disabled: isUpdating,
	                  theme: 'accent1',
	                  onClick: function onClick() {
	                    return _this2.insertItem();
	                  } },
	                'Insert new item'
	              )
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return ScheduleBuilder;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetchingVaccines: state.articles.isFetching,
	    isFetchingSchedule: state.schedule.isFetching,
	    vaccines: state.articles.items.filter(function (a) {
	      return a.data.type.id === 'vaccines';
	    }),
	    isUpdating: state.schedule.isUpdating,
	    items: state.schedule.items.map(function (i) {
	      return _extends({}, i);
	    })
	  };
	}, function (dispatch) {
	  return {
	    save: function save(data) {
	      dispatch((0, _scheduleActions.updateSchedule)(data));
	    },
	    fetchData: function fetchData() {
	      dispatch((0, _articleActions.fetchArticles)());
	      dispatch((0, _scheduleActions.fetchSchedule)());
	    }
	  };
		})(ScheduleBuilder);

/***/ },

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ScheduleBuilderItem = __webpack_require__(805);

	var _ScheduleBuilderItem2 = _interopRequireDefault(_ScheduleBuilderItem);

	var _UI = __webpack_require__(600);

	var _Layouts = __webpack_require__(676);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ScheduleBuilderItem = function (_React$Component) {
	  _inherits(ScheduleBuilderItem, _React$Component);

	  function ScheduleBuilderItem(props) {
	    _classCallCheck(this, ScheduleBuilderItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScheduleBuilderItem).call(this, props));

	    _this.addVaccine = _this.addVaccine.bind(_this);
	    _this.changeVaccine = _this.changeVaccine.bind(_this);
	    _this.deleteVaccine = _this.deleteVaccine.bind(_this);
	    return _this;
	  }

	  _createClass(ScheduleBuilderItem, [{
	    key: 'addVaccine',
	    value: function addVaccine() {
	      var _props = this.props;
	      var item = _props.item;
	      var vaccines = _props.vaccines;
	      var onChange = _props.onChange;

	      var newVaccines = [].concat(_toConsumableArray(item.vaccines), [{
	        title: vaccines.length > 0 ? vaccines[0].data.title : '',
	        url: vaccines.length > 0 ? vaccines[0].data.url : ''
	      }]);

	      onChange('vaccines', newVaccines);
	    }
	  }, {
	    key: 'changeVaccine',
	    value: function changeVaccine(index, value) {
	      var _props2 = this.props;
	      var item = _props2.item;
	      var vaccines = _props2.vaccines;
	      var onChange = _props2.onChange;


	      var selectedVaccine = vaccines.filter(function (v) {
	        return v.data.url === value;
	      })[0];

	      var newVaccines = [].concat(_toConsumableArray(item.vaccines.slice(0, index)), [{
	        title: selectedVaccine.data.title,
	        url: selectedVaccine.data.url
	      }], _toConsumableArray(item.vaccines.slice(index + 1)));

	      onChange('vaccines', newVaccines);
	    }
	  }, {
	    key: 'deleteVaccine',
	    value: function deleteVaccine(index) {
	      var _props3 = this.props;
	      var item = _props3.item;
	      var onChange = _props3.onChange;


	      var newVaccines = [].concat(_toConsumableArray(item.vaccines.slice(0, index)), _toConsumableArray(item.vaccines.slice(index + 1)));

	      onChange('vaccines', newVaccines);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props4 = this.props;
	      var item = _props4.item;
	      var vaccines = _props4.vaccines;
	      var isUpdating = _props4.isUpdating;
	      var _onChange = _props4.onChange;


	      var vaccineList = item.vaccines.map(function (v, index) {
	        return _react2.default.createElement(
	          _Layouts.Block,
	          { key: index },
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(_UI.Select, {
	                label: 'Vaccine:',
	                labelParams: {
	                  width: 0,
	                  padding: 2
	                },
	                value: v.url,
	                disabled: isUpdating || item.isDeleted,
	                allowEmpty: false,
	                options: vaccines.map(function (v) {
	                  return {
	                    id: v.data.url,
	                    label: v.data.title
	                  };
	                }),
	                onChange: function onChange(v) {
	                  return _this2.changeVaccine(index, v);
	                } })
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.LinkButton,
	                {
	                  small: true,
	                  theme: 'error',
	                  disabled: isUpdating || item.isDeleted,
	                  onClick: function onClick() {
	                    return _this2.deleteVaccine(index);
	                  } },
	                'Delete'
	              )
	            )
	          )
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { className: _ScheduleBuilderItem2.default.Item + ' ' + (item.isDeleted ? _ScheduleBuilderItem2.default.Item_deleted : '') },
	        _react2.default.createElement(
	          _Layouts.Media,
	          null,
	          _react2.default.createElement(
	            _Layouts.MediaBody,
	            null,
	            _react2.default.createElement(
	              'div',
	              { className: _ScheduleBuilderItem2.default.Item__body },
	              _react2.default.createElement(
	                _Layouts.Media,
	                null,
	                _react2.default.createElement(
	                  _Layouts.MediaFigure,
	                  { n: 2 },
	                  _react2.default.createElement(_UI.Input, {
	                    label: 'Age:',
	                    labelParams: { width: 0, padding: 2 },
	                    value: item.age,
	                    disabled: isUpdating || item.isDeleted,
	                    onChange: function onChange(value) {
	                      return _onChange('age', value);
	                    } })
	                ),
	                _react2.default.createElement(
	                  _Layouts.MediaBody,
	                  null,
	                  vaccineList,
	                  _react2.default.createElement(
	                    _UI.LinkButton,
	                    {
	                      small: true,
	                      disabled: isUpdating || item.isDeleted,
	                      onClick: this.addVaccine },
	                    'Add vaccine'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.MediaFigure,
	            { n: 0, nl: 2 },
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              item.isDeleted ? _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { className: _ScheduleBuilderItem2.default.Item__deletedInfo },
	                  'will be deleted on save'
	                )
	              ) : null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  {
	                    small: true,
	                    inverse: true,
	                    theme: item.isDeleted ? 'accent1' : 'error',
	                    onClick: function onClick() {
	                      return _onChange('isDeleted', !item.isDeleted);
	                    } },
	                  item.isDeleted ? 'Put Back' : 'Delete'
	                )
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return ScheduleBuilderItem;
	}(_react2.default.Component);

		exports.default = ScheduleBuilderItem;

/***/ },

/***/ 805:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Item":"ScheduleBuilderItem__Item___1E_ei","Item__deletedInfo":"ScheduleBuilderItem__Item__deletedInfo___4SrnY","Item_deleted":"ScheduleBuilderItem__Item_deleted___3LLpX","Item__body":"ScheduleBuilderItem__Item__body___3DBu2"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9VSS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvQ2hlY2tib3gvQ2hlY2tib3guY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvZmxhc2hBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvY29uZmlnLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NjaGVkdWxlQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZURpcmVjdG9yeS9BcnRpY2xlRGlyZWN0b3J5LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5L0RpcmVjdG9yeS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5L0RpcmVjdG9yeS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RpdGxlL1RpdGxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UaXRsZS9UaXRsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVEaXJlY3RvcnlJdGVtL0FydGljbGVEaXJlY3RvcnlJdGVtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5SXRlbS9EaXJlY3RvcnlJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EaXJlY3RvcnlJdGVtL0RpcmVjdG9yeUl0ZW0uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9QYWdlTm90Rm91bmQvUGFnZU5vdEZvdW5kLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUNyZWF0ZS9BcnRpY2xlQ3JlYXRlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSXRlbUZvcm0vSXRlbUZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0l0ZW1Gb3JtL0l0ZW1Gb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUVkaXQvQXJ0aWNsZUVkaXQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNEaXJlY3RvcnkvVXNlcnNEaXJlY3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Vc2Vyc0RpcmVjdG9yeUl0ZW0vVXNlcnNEaXJlY3RvcnlJdGVtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNDcmVhdGUvVXNlcnNDcmVhdGUuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Vc2Vyc0VkaXQvVXNlcnNFZGl0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zRGlyZWN0b3J5L1F1ZXN0aW9uc0RpcmVjdG9yeS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0RpcmVjdG9yeUl0ZW0vUXVlc3Rpb25zRGlyZWN0b3J5SXRlbS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NjaGVkdWxlQnVpbGRlci9TY2hlZHVsZUJ1aWxkZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TY2hlZHVsZUJ1aWxkZXJJdGVtL1NjaGVkdWxlQnVpbGRlckl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NjaGVkdWxlQnVpbGRlckl0ZW0vU2NoZWR1bGVCdWlsZGVySXRlbS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBBcnRpY2xlRGlyZWN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9BcnRpY2xlRGlyZWN0b3J5J1xuaW1wb3J0IEFydGljbGVDcmVhdGUgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVDcmVhdGUnXG5pbXBvcnQgQXJ0aWNsZUVkaXQgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVFZGl0J1xuXG5pbXBvcnQgVXNlcnNEaXJlY3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzRGlyZWN0b3J5J1xuaW1wb3J0IFVzZXJzQ3JlYXRlIGZyb20gJy4vY29tcG9uZW50cy9Vc2Vyc0NyZWF0ZSdcbmltcG9ydCBVc2Vyc0VkaXQgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzRWRpdCdcblxuaW1wb3J0IFF1ZXN0aW9uc0RpcmVjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvUXVlc3Rpb25zRGlyZWN0b3J5J1xuXG5pbXBvcnQgU2NoZWR1bGVCdWlsZGVyIGZyb20gJy4vY29tcG9uZW50cy9TY2hlZHVsZUJ1aWxkZXInXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG5SZWFjdERPTS5yZW5kZXIoKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICAgIDxSb3V0ZSBwYXRoPXsnLyd9IGNvbXBvbmVudD17QXBwfT5cbiAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89XCJxdWVzdGlvbnNcIiAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwicXVlc3Rpb25zXCIgY29tcG9uZW50PXtRdWVzdGlvbnNEaXJlY3Rvcnl9IC8+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJzY2hlZHVsZVwiIGNvbXBvbmVudD17U2NoZWR1bGVCdWlsZGVyfSAvPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzRGlyZWN0b3J5fT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIm5ld1wiIGNvbXBvbmVudD17VXNlcnNDcmVhdGV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aXRlbUlkXCIgY29tcG9uZW50PXtVc2Vyc0VkaXR9IC8+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkXCIgY29tcG9uZW50PXtBcnRpY2xlRGlyZWN0b3J5fT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIm5ld1wiIGNvbXBvbmVudD17QXJ0aWNsZUNyZWF0ZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIjppdGVtSWRcIiBjb21wb25lbnQ9e0FydGljbGVFZGl0fSAvPlxuICAgICAgICA8L1JvdXRlPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge2F0dGFjaG1lbnRzLCBzZWN0aW9ucywgYmxvZ3Bvc3RzLCBmYXFzfSBmcm9tICcuLi8uLi9jb25maWcnXG5pbXBvcnQge2xvZ091dCwgbG9naW5XaXRoVG9rZW59IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hTZWFyY2hJbmRleCwgdXBkYXRlU2VhcmNoSW5kZXh9IGZyb20gJy4uLy4uL3N0b3JlL3NlYXJjaEluZGV4QWN0aW9ucydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7ZmV0Y2hJbmRleCwgdXNlcn0gPSBuZXh0UHJvcHNcblxuICAgIGlmICh1c2VyICYmICF0aGlzLnByb3BzLnVzZXIpIHtcbiAgICAgIGZldGNoSW5kZXgoKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcixcbiAgICAgIHNlYXJjaEluZGV4LFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBsb2dPdXQsXG4gICAgICB1cGRhdGVJbmRleCxcbiAgICAgIGF0dGVtcHRpbmdMb2dpblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoYXR0ZW1wdGluZ0xvZ2luKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ3F1ZXN0aW9ucycsXG4gICAgICAgICAgICBsYWJlbDogJ1F1ZXN0aW9ucydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJsb2dwb3N0cyxcbiAgICAgICAgICBmYXFzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAndXNlcnMnLFxuICAgICAgICAgICAgbGFiZWw6ICdVc2VycydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnc2VjdGlvbnMnLFxuICAgICAgICAgICAgbGFiZWw6ICdXZWJzaXRlIFNlY3Rpb25zJyxcbiAgICAgICAgICAgIGhlYWRpbmc6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIC4uLnNlY3Rpb25zLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAnYXR0YWNobWVudHMnLFxuICAgICAgICAgICAgbGFiZWw6ICdBdHRhY2htZW50cycsXG4gICAgICAgICAgICBoZWFkaW5nOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICAuLi5hdHRhY2htZW50c1xuICAgICAgICBdXG5cbiAgICAgICAgbGV0IGluZGV4SW5mbyA9ICcnXG4gICAgICAgIGlmIChzZWFyY2hJbmRleC5pc0ZldGNoaW5nKSB7XG4gICAgICAgICAgaW5kZXhJbmZvID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX2luZm99PkZldGNoaW5nLi4uPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2UgaWYgKHNlYXJjaEluZGV4LmlzVXBkYXRpbmcpIHtcbiAgICAgICAgICBpbmRleEluZm8gPSAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcF9faW5mb30+VXBkYXRpbmcuLi48L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5kZXhJbmZvID0gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX2luZm99Pmxhc3QgdXBkYXRlZCBvbiA8VGltZSB2YWx1ZT17c2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbn0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz4gYnkge3NlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnl9PC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcF9fc2lkZWJhcn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwX19oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX3RpdGxlfT5BbnRpdmF4IGFkbWluPC9oMT5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPE5hdiBpdGVtcz17bmF2SXRlbXN9IC8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX29wdGlvbnN9PlxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgICAgICAge2luZGV4SW5mb31cbiAgICAgICAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZWFyY2hJbmRleC5pc1VwZGF0aW5nIHx8IHNlYXJjaEluZGV4LmlzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwZGF0ZUluZGV4fT5VcGRhdGUgc2VhcmNoIGluZGV4PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX2luZm99PkxvZ2dlZCBpbiBhcyB7dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB0aGVtZT1cImFjY2VudDFcIiBvbkNsaWNrPXtsb2dPdXR9PkxvZyBvdXQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICAgICAgPExvZ2luIC8+XG5cbiAgICAgICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dGVtcHRpbmdMb2dpbjogc3RhdGUuYXV0aC5pc0ZldGNoaW5nLFxuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgICAgc2VhcmNoSW5kZXg6IHtcbiAgICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNGZXRjaGluZyxcbiAgICAgICAgaXNVcGRhdGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNVcGRhdGluZyxcbiAgICAgICAgbGFzdFVwZGF0ZWRPbjogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbixcbiAgICAgICAgbGFzdFVwZGF0ZWRCeTogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlbXB0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dpbldpdGhUb2tlbih0b2tlbikpXG4gICAgICB9LFxuICAgICAgbG9nT3V0OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQnLCAnbG9nJykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlSW5kZXg6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VhcmNoSW5kZXgoKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaEluZGV4OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoSW5kZXgoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQXBwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBcHBcIjpcIkFwcF9fQXBwX19fbEJFWElcIixcIkFwcF9faGVhZGVyXCI6XCJBcHBfX0FwcF9faGVhZGVyX19fMTE1aFVcIixcIkFwcF9fdGl0bGVcIjpcIkFwcF9fQXBwX190aXRsZV9fXzFJMEJoXCIsXCJBcHBfX2luZm9cIjpcIkFwcF9fQXBwX19pbmZvX19fMlNJVFlcIixcIkFwcF9fb3B0aW9uc1wiOlwiQXBwX19BcHBfX29wdGlvbnNfX18zalF6TFwiLFwiQXBwX19zaWRlYmFyXCI6XCJBcHBfX0FwcF9fc2lkZWJhcl9fX1ZUaGJlXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IEZsYXNoTWVzc2FnZSA9ICh7XG4gIG1lc3NhZ2UsXG4gIHR5cGVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgbWVzc2FnZT17bWVzc2FnZX0gdGhlbWU9e3R5cGV9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBzdGF0ZS5mbGFzaC5tZXNzYWdlLFxuICAgICAgdHlwZTogc3RhdGUuZmxhc2gudHlwZVxuICAgIH1cbiAgfVxuKShGbGFzaE1lc3NhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeFxuICoqLyIsImltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL0xpbmtCdXR0b24nXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgTGlua0J1dHRvbiwgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0Zvb3RlcixcbiAgSW5wdXQsIENoZWNrYm94LCBFZGl0b3IsIFNlbGVjdH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoe1xuICBtdWx0aXBsaWVycyA9IHtcbiAgICBtaW5IZWlnaHQ6IDMwLFxuICAgIF9faW5uZXI6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgaGVpZ2h0OiA1XG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1pbkhlaWdodDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5taW5IZWlnaHR9cmVtYFxuICB9XG5cbiAgY29uc3QgX19pbm5lclN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLl9faW5uZXIud2lkdGh9cmVtYCxcbiAgICBoZWlnaHQ6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMuX19pbm5lci5oZWlnaHR9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IHN0eWxlPXtfX2lubmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBmdWxsV2lkdGggPSBmYWxzZSxcbiAgc21hbGwgPSBmYWxzZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbCxcbiAgaW52ZXJzZSA9IGZhbHNlLFxuICB0aGVtZSA9ICdhY2NlbnQxJyxcbiAgZXh0cmFDbGFzc05hbWVzXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuNn1yZW0gJHtiYXNlbGluZSAqIDEuNX1yZW1gLFxuICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgZm9udFNpemU6IGAkezEuMDgzICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuM31yZW0gJHtiYXNlbGluZSAqIDF9cmVtYCxcbiAgICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgICBmb250U2l6ZTogYCR7MC45MTcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxXaWR0aCkge1xuICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cblxuICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b24gOiBzdHlsZXMuQnV0dG9uKVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdhY2NlbnQyJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGludmVyc2UgPyBzdHlsZXMuSW52ZXJzZUJ1dHRvbl9hY2NlbnQyIDogc3R5bGVzLkJ1dHRvbl9hY2NlbnQyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fZXJyb3IgOiBzdHlsZXMuQnV0dG9uX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQxJzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lLnB1c2goaW52ZXJzZSA/IHN0eWxlcy5JbnZlcnNlQnV0dG9uX2FjY2VudDEgOiBzdHlsZXMuQnV0dG9uX2FjY2VudDEpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHN0eWxlPXtzdHlsZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnZlcnNlQnV0dG9uXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fX18zT1FYVVwiLFwiSW52ZXJzZUJ1dHRvbl9hY2NlbnQxXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fYWNjZW50MV9fX2FWSVdPXCIsXCJJbnZlcnNlQnV0dG9uX2FjY2VudDJcIjpcIkJ1dHRvbl9fSW52ZXJzZUJ1dHRvbl9hY2NlbnQyX19fM0FPbTZcIixcIkludmVyc2VCdXR0b25fZXJyb3JcIjpcIkJ1dHRvbl9fSW52ZXJzZUJ1dHRvbl9lcnJvcl9fXzNpZEJaXCIsXCJCdXR0b25cIjpcIkJ1dHRvbl9fQnV0dG9uX19fUUk3YjJcIixcIkJ1dHRvbl9hY2NlbnQxXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQxX19fMWRmaHdcIixcIkJ1dHRvbl9hY2NlbnQyXCI6XCJCdXR0b25fX0J1dHRvbl9hY2NlbnQyX19fWm44ejlcIixcIkJ1dHRvbl9lcnJvclwiOlwiQnV0dG9uX19CdXR0b25fZXJyb3JfX18zUFNVWFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlua0J1dHRvbi5jc3MnXG5cbmNvbnN0IExpbmtCdXR0b24gPSAoe1xuICBjaGlsZHJlbixcbiAgb25DbGljayxcbiAgc21hbGwgPSBmYWxzZSxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbCxcbiAgdGhlbWUgPSAnYWNjZW50MSdcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLkxpbmtdXG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rX3NtYWxsKVxuICB9XG5cbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2FjY2VudDInOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rX2FjY2VudDIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuTGlua19lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYWNjZW50MSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuTGlua19hY2NlbnQxKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGlua1wiOlwiTGlua0J1dHRvbl9fTGlua19fXzIxcVBKXCIsXCJMaW5rX3NtYWxsXCI6XCJMaW5rQnV0dG9uX19MaW5rX3NtYWxsX19fM3NMUnRcIixcIkxpbmtfYWNjZW50MVwiOlwiTGlua0J1dHRvbl9fTGlua19hY2NlbnQxX19fVThRT2JcIixcIkxpbmtfYWNjZW50MlwiOlwiTGlua0J1dHRvbl9fTGlua19hY2NlbnQyX19fMVdCRTFcIixcIkxpbmtfZXJyb3JcIjpcIkxpbmtCdXR0b25fX0xpbmtfZXJyb3JfX18yUERsN1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTGlua0J1dHRvbi9MaW5rQnV0dG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdGhlbWUgPSAnZGVmYXVsdCcsXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBtZXNzYWdlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9kZWZhdWx0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB0cmFuc2l0aW9uTmFtZT1cImFsZXJ0XCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MjAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsyMDB9PlxuICAgICAgICB7bWVzc2FnZVxuICAgICAgICAgID8gPEJsb2NrPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVzc2FnZVN0eWxlfSBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc05hbWVzLmpvaW4oJyAnKX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2RlZmF1bHRcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9kZWZhdWx0X19fbl9SOUNcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wiLFwiYWxlcnQtZW50ZXJcIjpcIkFsZXJ0X19hbGVydC1lbnRlcl9fX0s2SmRMXCIsXCJhbGVydC1lbnRlci1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1lbnRlci1hY3RpdmVfX18zdmxDd1wiLFwiYWxlcnQtbGVhdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZV9fXzJQcFlUXCIsXCJhbGVydC1sZWF2ZS1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZS1hY3RpdmVfX18yaGFfUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4vRmxleCdcbmltcG9ydCBXcmFwIGZyb20gJy4vV3JhcCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4vR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4vTGlzdCdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4vTGlzdElubGluZSdcbmltcG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9IGZyb20gJy4vTWVkaWEnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuL1BhZ2UnXG5cbmV4cG9ydCB7QmxvY2ssIEZsZXgsIFdyYXAsIEdyaWQsIEdyaWRJdGVtLFxuICBMaXN0LCBMaXN0SXRlbSwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sXG4gIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLFxuICBQYWdlLCBQYWdlQ29udGVudFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEJsb2NrID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGbGV4ID0gKHtcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGZsZXhEaXJlY3Rpb24gPSAncm93JyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZmxleERpcmVjdGlvbixcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXcmFwID0gKHtcbiAgd2lkdGggPSAnOTAlJyxcbiAgbWF4V2lkdGggPSAnODByZW0nLCAvLyAxMjgwcHggcHJvdmlkZWQgMWVtID09PSAxNnB4XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBHcmlkID0gKHtcbiAgZ3V0dGVyID0gMCxcbiAgYWxpZ25JdGVtcyA9ICdzdHJldGNoJyxcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDAsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgZmxleDogJzEnXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogYCR7MTAwICogc3BhbiAvIG91dE9mfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2ODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2JvZHl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lZGlhX19maWd1cmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0LmNzcydcblxuY2xhc3MgSW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhbHVlLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBsYWJlbCA9IG51bGwsXG4gICAgICBsYWJlbFBhcmFtcyA9IHtcbiAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgIHBhZGRpbmc6IDJcbiAgICAgIH0sXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgcHJlZml4ID0gbnVsbCxcbiAgICAgIHR5cGUgPSAndGV4dCcsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZXJyb3IgPSBudWxsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBsYWJlbEVsID0gJydcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGxldCBsYWJlbFN0eWxlID0ge1xuICAgICAgICBwYWRkaW5nUmlnaHQ6IGAke2xhYmVsUGFyYW1zLnBhZGRpbmcgKiBiYXNlbGluZX1yZW1gXG4gICAgICB9XG4gICAgICBpZiAobGFiZWxQYXJhbXMud2lkdGgpIHtcbiAgICAgICAgbGFiZWxTdHlsZS53aWR0aCA9IGAke2xhYmVsUGFyYW1zLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICAgICAgICBsYWJlbFN0eWxlLnRleHRBbGlnbiA9ICdyaWdodCdcbiAgICAgIH1cblxuICAgICAgbGFiZWxFbCA9IChcbiAgICAgICAgPGRpdiBzdHlsZT17bGFiZWxTdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgZXJyb3JFbCA9ICcnXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvckVsID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0X19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBwcmVmaXhFbCA9ICcnXG4gICAgaWYgKHByZWZpeCkge1xuICAgICAgcHJlZml4RWwgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX3ByZWZpeH0+e3ByZWZpeH08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0fSAke2Vycm9yID8gc3R5bGVzLklucHV0X2Vycm9yIDogJyd9YH0+XG4gICAgICAgIHtsYWJlbEVsfVxuICAgICAgICB7cHJlZml4RWx9XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9faW5wdXR9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQudmFsdWUpfSAvPlxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fczY3TjBcIixcIklucHV0X19pbnB1dFwiOlwiSW5wdXRfX0lucHV0X19pbnB1dF9fX3diMVBEXCIsXCJJbnB1dF9fbGFiZWxcIjpcIklucHV0X19JbnB1dF9fbGFiZWxfX185SkRVdVwiLFwiSW5wdXRfX3ByZWZpeFwiOlwiSW5wdXRfX0lucHV0X19wcmVmaXhfX18zbnZMOVwiLFwiSW5wdXRfX2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfX2Vycm9yX19fZmdrQ0RcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18ySllHeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNjg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBsYWJlbCA9IGZhbHNlLFxuICAgICAgbGFiZWxQYXJhbXMgPSB7XG4gICAgICAgIHdpZHRoOiA4LFxuICAgICAgICBwYWRkaW5nOiAyXG4gICAgICB9LFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgbGFiZWxFbCA9ICcnXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBsZXQgbGFiZWxTdHlsZSA9IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiBgJHtsYWJlbFBhcmFtcy5wYWRkaW5nICogYmFzZWxpbmV9cmVtYFxuICAgICAgfVxuICAgICAgaWYgKGxhYmVsUGFyYW1zLndpZHRoKSB7XG4gICAgICAgIGxhYmVsU3R5bGUud2lkdGggPSBgJHtsYWJlbFBhcmFtcy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgICAgICAgbGFiZWxTdHlsZS50ZXh0QWxpZ24gPSAncmlnaHQnXG4gICAgICB9XG5cbiAgICAgIGxhYmVsRWwgPSAoXG4gICAgICAgIDxkaXYgc3R5bGU9e2xhYmVsU3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLkNoZWNrYm94X19sYWJlbH1gfT57bGFiZWx9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveH0+XG4gICAgICAgIHtsYWJlbEVsfVxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuQ2hlY2tib3hfX2lucHV0fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLl9lbGVtZW50LmNoZWNrZWQpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNoZWNrYm94XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX18xSllRZ1wiLFwiQ2hlY2tib3hfX2lucHV0XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2lucHV0X19fMW5ETVZcIixcIkNoZWNrYm94X19sYWJlbFwiOlwiQ2hlY2tib3hfX0NoZWNrYm94X19sYWJlbF9fXzNPQlVkXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2OTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFNjcmliZSBmcm9tICdzY3JpYmUtZWRpdG9yJ1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnc2NyaWJlLXBsdWdpbi10b29sYmFyJ1xuaW1wb3J0IEhlYWRpbmdDbWQgZnJvbSAnc2NyaWJlLXBsdWdpbi1oZWFkaW5nLWNvbW1hbmQnXG5pbXBvcnQgTGlua1Byb21wdENtZCBmcm9tICdzY3JpYmUtcGx1Z2luLWxpbmstcHJvbXB0LWNvbW1hbmQnXG5pbXBvcnQgVW5saW5rQ21kIGZyb20gJ3NjcmliZS1wbHVnaW4taW50ZWxsaWdlbnQtdW5saW5rLWNvbW1hbmQnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCB7RmxleCwgQmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FZGl0b3IuY3NzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBlZGl0b3IgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZnMuZWRpdG9yKVxuICAgIGNvbnN0IHRvb2xiYXIgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZnMudG9vbGJhcilcblxuICAgIGNvbnN0IHNjcmliZSA9IG5ldyBTY3JpYmUoZWRpdG9yKVxuICAgIHNjcmliZS51c2UoSGVhZGluZ0NtZCgxKSlcbiAgICBzY3JpYmUudXNlKEhlYWRpbmdDbWQoMikpXG4gICAgc2NyaWJlLnVzZShMaW5rUHJvbXB0Q21kKCkpXG4gICAgc2NyaWJlLnVzZShVbmxpbmtDbWQoKSlcbiAgICBzY3JpYmUudXNlKFRvb2xiYXIodG9vbGJhcikpXG5cbiAgICBzY3JpYmUuc2V0Q29udGVudCh0aGlzLnN0YXRlLnZhbHVlKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JpYmUub24oJ2NvbnRlbnQtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHNjcmliZS5nZXRIVE1MKCl9KVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNjcmliZS5nZXRIVE1MKCkpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLnNjcmliZSA9IHNjcmliZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMuc2NyaWJlLnNldENvbnRlbnQobmV3UHJvcHMudmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogbmV3UHJvcHMudmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZXJyb3IsXG4gICAgICBsYWJlbFBhcmFtcyA9IHtcbiAgICAgICAgd2lkdGg6IDgsXG4gICAgICAgIHBhZGRpbmc6IDJcbiAgICAgIH0sXG4gICAgICBsYWJlbCA9IG51bGxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGxhYmVsRWwgPSAnJ1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgbGV0IGxhYmVsU3R5bGUgPSB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogYCR7bGFiZWxQYXJhbXMucGFkZGluZyAqIGJhc2VsaW5lfXJlbWBcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbFBhcmFtcy53aWR0aCkge1xuICAgICAgICBsYWJlbFN0eWxlLndpZHRoID0gYCR7bGFiZWxQYXJhbXMud2lkdGggKiBiYXNlbGluZX1yZW1gXG4gICAgICAgIGxhYmVsU3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgfVxuXG4gICAgICBsYWJlbEVsID0gKFxuICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgPGRpdiBzdHlsZT17bGFiZWxTdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19sYWJlbH1gfT57bGFiZWx9PC9kaXY+XG4gICAgICAgIDwvQmxvY2s+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yfSAke2Vycm9yID8gc3R5bGVzLkVkaXRvcl9lcnJvciA6ICcnfWB9PlxuICAgICAgICB7bGFiZWxFbH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fdG9vbGJhcn0gcmVmPVwidG9vbGJhclwiPlxuICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9oMX1gfVxuICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImgxXCI+XG4gICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfaDJ9YH1cbiAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICBIZWFkaW5nIDFcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2JvbGR9YH1cbiAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJib2xkXCI+XG4gICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2l0YWxpY31gfVxuICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cIml0YWxpY1wiPlxuICAgICAgICAgICAgICBpdGFsaWNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX29sfWB9XG4gICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiaW5zZXJ0T3JkZXJlZExpc3RcIj5cbiAgICAgICAgICAgICAgT2xcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX3VsfWB9XG4gICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiaW5zZXJ0VW5PcmRlcmVkTGlzdFwiPlxuICAgICAgICAgICAgICBVbFxuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdG9yX19zZXBhcmF0b3J9IC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfbGlua31gfVxuICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImxpbmtQcm9tcHRcIj5cbiAgICAgICAgICAgICAgTGlua1xuICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfdW5saW5rfWB9XG4gICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwidW5saW5rXCI+XG4gICAgICAgICAgICAgIFVubGlua1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fYm9keX0gcmVmPVwiZWRpdG9yXCIgLz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0b3JcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fXzNtRzB4XCIsXCJFZGl0b3JfX3Rvb2xiYXJcIjpcIkVkaXRvcl9fRWRpdG9yX190b29sYmFyX19fMmNiZ1VcIixcIkVkaXRvcl9fY29tbWFuZFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfX18xNUtYa1wiLFwiRWRpdG9yX19jb21tYW5kX2gxXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9oMV9fXzJhdnJFXCIsXCJFZGl0b3JfX2NvbW1hbmRfaDJcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2gyX19fNWotTnRcIixcIkVkaXRvcl9fY29tbWFuZF9oM1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaDNfX18ydEFqTFwiLFwiRWRpdG9yX19jb21tYW5kX2JvbGRcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2JvbGRfX18zWWRKM1wiLFwiRWRpdG9yX19jb21tYW5kX2l0YWxpY1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaXRhbGljX19fMVVaQTBcIixcIkVkaXRvcl9fY29tbWFuZF9vbFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfb2xfX18yUlFiblwiLFwiRWRpdG9yX19jb21tYW5kX3VsXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bF9fX2NzOVZkXCIsXCJFZGl0b3JfX2NvbW1hbmRfbGlua1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfbGlua19fXzFfRFJ2XCIsXCJFZGl0b3JfX2NvbW1hbmRfdW5saW5rXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bmxpbmtfX18zRHc3dFwiLFwiRWRpdG9yX19zZXBhcmF0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19zZXBhcmF0b3JfX19iZjBwZVwiLFwiRWRpdG9yX19ib2R5XCI6XCJFZGl0b3JfX0VkaXRvcl9fYm9keV9fXzNGdWZRXCIsXCJFZGl0b3JfX2Vycm9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fZXJyb3JfX18xbk1YZFwiLFwiRWRpdG9yX19sYWJlbFwiOlwiRWRpdG9yX19FZGl0b3JfX2xhYmVsX19fMWhkLVVcIixcIkVkaXRvcl9lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfZXJyb3JfX18xRzY2Q1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5jc3MnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgbGFiZWxQYXJhbXMgPSB7XG4gICAgICAgIHdpZHRoOiA4LFxuICAgICAgICBwYWRkaW5nOiAyXG4gICAgICB9LFxuICAgICAgYWxsb3dFbXB0eSA9IHRydWVcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGxhYmVsRWwgPSAnJ1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgbGV0IGxhYmVsU3R5bGUgPSB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogYCR7bGFiZWxQYXJhbXMucGFkZGluZyAqIGJhc2VsaW5lfXJlbWBcbiAgICAgIH1cbiAgICAgIGlmIChsYWJlbFBhcmFtcy53aWR0aCkge1xuICAgICAgICBsYWJlbFN0eWxlLndpZHRoID0gYCR7bGFiZWxQYXJhbXMud2lkdGggKiBiYXNlbGluZX1yZW1gXG4gICAgICAgIGxhYmVsU3R5bGUudGV4dEFsaWduID0gJ3JpZ2h0J1xuICAgICAgfVxuXG4gICAgICBsYWJlbEVsID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtsYWJlbFN0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWxlY3RfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgaW5wdXRMYWJlbCA9ICcnXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpbnB1dExhYmVsID0gb3B0aW9ucy5maWx0ZXIobyA9PiBvLmlkID09PSB2YWx1ZSlbMF0ubGFiZWxcbiAgICB9IGVsc2UgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIGlucHV0TGFiZWwgPSAnTm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRMYWJlbCA9IG9wdGlvbnNbMF0ubGFiZWxcbiAgICB9XG5cbiAgICBsZXQgbm9uZU9wdGlvbiA9ICcnXG4gICAgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIG5vbmVPcHRpb24gPSAoXG4gICAgICAgIDxvcHRpb24gdmFsdWU9eycnfT5Ob25lPC9vcHRpb24+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0fT5cbiAgICAgICAge2xhYmVsRWx9XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX3dyYXB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X19mYWtlfT57aW5wdXRMYWJlbH08L2Rpdj5cblxuICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X19pbnB1dH1cbiAgICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsodikgPT4gb25DaGFuZ2Uodi50YXJnZXQudmFsdWUpfT5cbiAgICAgICAgICAgIHtvcHRpb25zLm1hcChvID0+XG4gICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvLmlkfSB2YWx1ZT17by5pZH0+e28ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge25vbmVPcHRpb259XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWxlY3RcIjpcIlNlbGVjdF9fU2VsZWN0X19fMXJQYkxcIixcIlNlbGVjdF9fbGFiZWxcIjpcIlNlbGVjdF9fU2VsZWN0X19sYWJlbF9fXzFHV3ZXXCIsXCJTZWxlY3RfX3dyYXBcIjpcIlNlbGVjdF9fU2VsZWN0X193cmFwX19fd3ZSYXhcIixcIlNlbGVjdF9fZmFrZVwiOlwiU2VsZWN0X19TZWxlY3RfX2Zha2VfX18zd2tkZFwiLFwiU2VsZWN0X19pbnB1dFwiOlwiU2VsZWN0X19TZWxlY3RfX2lucHV0X19fcjdleTdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNzQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNzUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXYuY3NzJ1xuXG5jb25zdCBOYXYgPSAoe1xuICBpdGVtc1xufSkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IGl0ZW1zLm1hcChpID0+IHtcbiAgICBpZiAoaS5oZWFkaW5nKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGtleT17aS5pZH0gY2xhc3NOYW1lPXtzdHlsZXMuTmF2X19oZWFkaW5nfT57aS5sYWJlbH08L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsga2V5PXtpLmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdl9faXRlbX1cbiAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5OYXZfX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgIHRvPXtgLyR7aS5pZH1gfT57aS5sYWJlbH08L0xpbms+XG4gICAgICApXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxuICAgICAge25hdkl0ZW1zfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmF2L05hdi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOYXZcIjpcIk5hdl9fTmF2X19fM1B5eWVcIixcIk5hdl9faXRlbVwiOlwiTmF2X19OYXZfX2l0ZW1fX181SGJ1RVwiLFwiTmF2X19pdGVtX2FjdGl2ZVwiOlwiTmF2X19OYXZfX2l0ZW1fYWN0aXZlX19fMnE0dFRcIixcIk5hdl9faGVhZGluZ1wiOlwiTmF2X19OYXZfX2hlYWRpbmdfX18xOVV6S1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTmF2L05hdi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRpbmcuY3NzJ1xuaW1wb3J0IHtTcGlubmVyfSBmcm9tICcuLi9VSSdcblxuY29uc3QgTG9hZGluZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvYWRpbmd9PlxuICAgICAgPFNwaW5uZXIgLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkaW5nXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTG9hZGluZ1wiOlwiTG9hZGluZ19fTG9hZGluZ19fXzNweWN6XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzXG4gKiogbW9kdWxlIGlkID0gNzU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0ZsZXgsIExpc3QsIExpc3RJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXIsIElucHV0LCBCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtsb2dpbldpdGhDcmVkZW50aWFsc30gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aENyZWRlbnRpYWxzKHRoaXMuc3RhdGUuZW1haWwsIHRoaXMuc3RhdGUucGFzc3dvcmQpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZW1haWxFcnJvcixcbiAgICAgICAgcGFzc3dvcmRFcnJvclxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VFbWFpbCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgIGVtYWlsRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGFzc3dvcmQ6IHZhbHVlLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZ30gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsV2luZG93PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5zdWJtaXRGb3JtfT5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dIZWFkZXI+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPkxvZ2luPC9GbGV4PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dIZWFkZXI+XG5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dCb2R5PlxuICAgICAgICAgICAgPExpc3Qgbj17MS41fT5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRW1haWw6XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBjYXNleUBnbWFpbC5jb21cIlxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZW1haWxFcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUVtYWlsfSAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQmlnU2VjcmV0XCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnBhc3N3b3JkRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0JvZHk+XG5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc0ZldGNoaW5nfVxuICAgICAgICAgICAgICBsYWJlbD1cIkxvZ2luXCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L01vZGFsV2luZG93PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLmF1dGguaXNGZXRjaGluZ1xuICAgIH1cbiAgfVxuKShMb2dpbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FVVEggPSAnUkVRVUVTVF9BVVRIJ1xuZXhwb3J0IGNvbnN0IExPR0lOID0gJ0xPR0lOJ1xuZXhwb3J0IGNvbnN0IExPR09VVCA9ICdMT0dPVVQnXG5cbmNvbnN0IHJlcXVlc3RBdXRoID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVVUSFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgZGlzcGF0Y2goe3R5cGU6IExPR09VVH0pXG4gIH1cbn1cblxuY29uc3QgbG9nSW4gPSAoXG4gIHVzZXJcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR0lOLFxuICAgIHVzZXJcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoQ3JlZGVudGlhbHMgPSAoXG4gIGVtYWlsLFxuICBwYXNzd29yZFxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXV0aC9hZG1pbi9hdXRoZW50aWNhdGUtY3JlZGVudGlhbHNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhUb2tlbiA9IChcbiAgdG9rZW5cbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2F1dGgvYWRtaW4vYXV0aGVudGljYXRlLXRva2VuYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHRva2VuXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nLCBqc29uLmRhdGEudG9rZW4pXG4gICAgICAgICAgZGlzcGF0Y2gobG9nSW4oanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLmRhdGEuZXJyb3IsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aEFjdGlvbnMuanNcbiAqKi8iLCJleHBvcnQgY29uc3QgU0VUX01FU1NBR0UgPSAnU0VUX01FU1NBR0UnXG5leHBvcnQgY29uc3QgVU5TRVRfTUVTU0FHRSA9ICdVTlNFVF9NRVNTQUdFJ1xuXG5jb25zdCBzZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZSxcbiAgdGltZW91dElkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTUVTU0FHRSxcbiAgICBtZXNzYWdlLFxuICAgIG1lc3NhZ2VUeXBlLFxuICAgIHRpbWVvdXRJZFxuICB9XG59XG5cbmNvbnN0IHVuc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFVOU0VUX01FU1NBR0VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmxhc2hNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgY29uc3QgdCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlzcGF0Y2godW5zZXRNZXNzYWdlKCkpXG4gICAgfSwgMjAwMClcblxuICAgIGRpc3BhdGNoKHNldE1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZVR5cGUsIHQpKVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IGJsb2dwb3N0cyA9IHtcbiAgaWQ6ICdibG9ncG9zdHMnLFxuICBsYWJlbDogJ0Jsb2dwb3N0cydcbn1cblxuZXhwb3J0IGNvbnN0IGZhcXMgPSB7XG4gIGlkOiAnZmFxcycsXG4gIGxhYmVsOiAnRkFRcydcbn1cblxuZXhwb3J0IGNvbnN0IHNlY3Rpb25zID0gW1xuICB7XG4gICAgaWQ6ICdhYm91dC12YWNjaW5lcycsXG4gICAgbGFiZWw6ICdBYm91dCBWYWNjaW5lcydcbiAgfSxcbiAge1xuICAgIGlkOiAndmFjY2luZS1zYWZldHknLFxuICAgIGxhYmVsOiAnVmFjY2luZSBTYWZldHknXG4gIH0sXG4gIHtcbiAgICBpZDogJ3ZhY2NpbmF0aW9uLXNjaGVkdWxlJyxcbiAgICBsYWJlbDogJ1ZhY2NpbmF0aW9uIFNjaGVkdWxlJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdhYm91dC1wcm9qZWN0JyxcbiAgICBsYWJlbDogJ0Fib3V0IFByb2plY3QnXG4gIH0sXG4gIHtcbiAgICBpZDogJ2FkZGl0aW9uYWwtaW5mb3JtYXRpb24nLFxuICAgIGxhYmVsOiAnQWRkaXRpb25hbCBJbmZvcm1hdGlvbidcbiAgfVxuXVxuXG5leHBvcnQgY29uc3QgYXR0YWNobWVudHMgPSBbXG4gIHtcbiAgICBpZDogJ2Rpc2Vhc2VzJyxcbiAgICBsYWJlbDogJ0Rpc2Vhc2VzJ1xuICB9LFxuICB7XG4gICAgaWQ6ICd2YWNjaW5lcycsXG4gICAgbGFiZWw6ICdWYWNjaW5lcydcbiAgfSxcbiAge1xuICAgIGlkOiAnaW5ncmlkaWVudHMnLFxuICAgIGxhYmVsOiAnSW5ncmlkaWVudHMnXG4gIH0sXG4gIHtcbiAgICBpZDogJ3NjaGVkdWxlJyxcbiAgICBsYWJlbDogJ1ZhY2NpbmF0aW9uIFNjaGVkdWxlJ1xuICB9XG5dXG5cbmV4cG9ydCBjb25zdCBpc1NlY3Rpb24gPSAoaWQpID0+IHtcbiAgcmV0dXJuIHNlY3Rpb25zLm1hcChzID0+IHMuaWQpLmluZGV4T2YoaWQpICE9PSAtMVxufVxuXG5leHBvcnQgY29uc3QgaXNCbG9ncG9zdCA9IChpZCkgPT4ge1xuICByZXR1cm4gaWQgPT09IGJsb2dwb3N0cy5pZFxufVxuXG5leHBvcnQgY29uc3QgaXNBdHRhY2htZW50ID0gKGlkKSA9PiB7XG4gIHJldHVybiBhdHRhY2htZW50cy5tYXAoYyA9PiBjLmlkKS5pbmRleE9mKGlkKSAhPT0gLTFcbn1cblxuZXhwb3J0IGNvbnN0IGlzRmFxID0gKGlkKSA9PiB7XG4gIHJldHVybiBpZCA9PT0gZmFxcy5pZFxufVxuXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFNlY3Rpb24gPSAoaWQpID0+IHtcbiAgcmV0dXJuIFtcbiAgICAuLi5zZWN0aW9ucyxcbiAgICAuLi5hdHRhY2htZW50cyxcbiAgICBibG9ncG9zdHMsXG4gICAgZmFxc1xuICBdLmZpbHRlcihzID0+IHMuaWQgPT09IGlkKVswXVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbmZpZy5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfSU5ERVggPSAnUkVRVUVTVF9JTkRFWCdcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0lOREVYID0gJ1JFQ0VJVkVfSU5ERVgnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VQREFURV9JTkRFWCA9ICdSRVFVRVNUX1VQREFURV9JTkRFWCdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9JTkRFWCA9ICdDT05GSVJNX1VQREFURV9JTkRFWCdcblxuY29uc3QgcmVxdWVzdFNlYXJjaEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfSU5ERVhcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VhcmNoSW5kZXggPSAoXG4gIGxhc3RVcGRhdGVkT24sXG4gIGxhc3RVcGRhdGVkQnlcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfSU5ERVgsXG4gICAgbGFzdFVwZGF0ZWRPbixcbiAgICBsYXN0VXBkYXRlZEJ5XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlYXJjaEluZGV4KCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlYXJjaEluZGV4YCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWFyY2hJbmRleChqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbiwganNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9JTkRFWFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1VcGRhdGUgPSAoXG4gIGxhc3RVcGRhdGVkT24sXG4gIGxhc3RVcGRhdGVkQnlcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX0lOREVYLFxuICAgIGxhc3RVcGRhdGVkT24sXG4gICAgbGFzdFVwZGF0ZWRCeVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlYXJjaEluZGV4YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtVXBkYXRlKGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLCBqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeSkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdTZWFyY2ggaW5kZXggdXBkYXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNzYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtNaWRkbGV3YXJlXVxuXG5pZiAoTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcilcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zdG9yZS5qc1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoUmVkdWNlcidcbmltcG9ydCBmbGFzaCBmcm9tICcuL2ZsYXNoUmVkdWNlcidcbmltcG9ydCBxdWVzdGlvbnMgZnJvbSAnLi9xdWVzdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4vYXJ0aWNsZVJlZHVjZXInXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vyc1JlZHVjZXInXG5pbXBvcnQgc2NoZWR1bGUgZnJvbSAnLi9zY2hlZHVsZVJlZHVjZXInXG5pbXBvcnQgc2VhcmNoSW5kZXggZnJvbSAnLi9zZWFyY2hJbmRleFJlZHVjZXInXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgZmxhc2gsXG4gIHF1ZXN0aW9ucyxcbiAgYXJ0aWNsZXMsXG4gIHVzZXJzLFxuICBzY2hlZHVsZSxcbiAgc2VhcmNoSW5kZXhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoUmVkdWNlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIHVzZXI6IG51bGxcbiAgfSxcbiAgZmxhc2g6IHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdGltZW91dElkOiBudWxsXG4gIH0sXG4gIHF1ZXN0aW9uczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIHF1ZXN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge31cbiAgfSxcbiAgYXJ0aWNsZXM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBuZXdBcnRpY2xlOiB7XG4gICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfSxcbiAgYXJ0aWNsZToge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgYmxvZ3Bvc3RzOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW10sXG4gICAgbmV3QmxvZ3Bvc3Q6IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICBibG9ncG9zdDoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBuZXdVc2VyOiB7XG4gICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfSxcbiAgdXNlcjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2NoZWR1bGU6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBzZWFyY2hJbmRleDoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWRPbjogbnVsbCxcbiAgICBsYXN0VXBkYXRlZEJ5OiBudWxsXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OUywgUkVDRUlWRV9RVUVTVElPTlMsXG4gIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLCBSRUNFSVZFX1FVRVNUSU9OX1VQREFURSxcbiAgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04sIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLCBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OfSBmcm9tICcuL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBxdWVzdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUucXVlc3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRRdWVzdGlvbixcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcXVlc3Rpb25zID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHF1ZXN0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OX1VQREFURTpcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT046XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OUyA9ICdSRVFVRVNUX1FVRVNUSU9OUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1FVRVNUSU9OUyA9ICdSRUNFSVZFX1FVRVNUSU9OUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFID0gJ1JFUVVFU1RfUVVFU1RJT05fVVBEQVRFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFID0gJ1JFQ0VJVkVfUVVFU1RJT05fVVBEQVRFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04gPSAnUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfUVVFU1RJT04gPSAnQ09ORklSTV9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9RVUVTVElPTiA9ICdSRUpFQ1RfREVMRVRFX1FVRVNUSU9OJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVRdWVzdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1FVRVNUSU9OUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0UXVlc3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVF1ZXN0aW9ucyhqc29uLmRhdGEucXVlc3Rpb25zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OX1VQREFURSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICB1cGRhdGVkUXVlc3Rpb25cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRRdWVzdGlvblxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5xdWVzdGlvbikpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0RFTEVURV9RVUVTVElPTixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdWVzdGlvbiA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3REZWxldGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9xdWVzdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnUXVlc3Rpb24gd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BUlRJQ0xFUywgUkVDRUlWRV9BUlRJQ0xFUyxcbiAgUkVRVUVTVF9VUERBVEVfQVJUSUNMRSwgQ09ORklSTV9VUERBVEVfQVJUSUNMRSwgUkVKRUNUX1VQREFURV9BUlRJQ0xFLFxuICBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFLCBDT05GSVJNX0NSRUFURV9BUlRJQ0xFLCBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUsXG4gIFJFUVVFU1RfREVMRVRFX0FSVElDTEUsIENPTkZJUk1fREVMRVRFX0FSVElDTEUsIFJFSkVDVF9ERUxFVEVfQVJUSUNMRX0gZnJvbSAnLi9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGFydGljbGVzID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hcnRpY2xlcyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdBcnRpY2xlOiBuZXdBcnRpY2xlKHN0YXRlLm5ld0FydGljbGUsIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld0FydGljbGU6IG5ld0FydGljbGUoc3RhdGUubmV3QXJ0aWNsZSwgYWN0aW9uKSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICBhcnRpY2xlKG51bGwsIGFjdGlvbiksXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXNcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGUgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3QXJ0aWNsZSA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXJ0aWNsZXMubmV3QXJ0aWNsZSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hcnRpY2xlUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BUlRJQ0xFUyA9ICdSRVFVRVNUX0FSVElDTEVTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfQVJUSUNMRVMgPSAnUkVDRUlWRV9BUlRJQ0xFUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX0FSVElDTEUgPSAnUkVRVUVTVF9VUERBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9BUlRJQ0xFID0gJ0NPTkZJUk1fVVBEQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9BUlRJQ0xFID0gJ1JFSkVDVF9VUERBVEVfQVJUSUNMRSdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX0FSVElDTEUgPSAnQ1JFQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfQVJUSUNMRSA9ICdDT05GSVJNX0NSRUFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfQVJUSUNMRSA9ICdSRUpFQ1RfQ1JFQVRFX0FSVElDTEUnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFID0gJ1JFUVVFU1RfREVMRVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfQVJUSUNMRSA9ICdDT05GSVJNX0RFTEVURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfQVJUSUNMRSA9ICdSRUpFQ1RfREVMRVRFX0FSVElDTEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0QXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BUlRJQ0xFU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVBcnRpY2xlcyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfQVJUSUNMRVMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXJ0aWNsZXMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlQXJ0aWNsZXMoanNvbi5kYXRhLmFydGljbGVzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlVXBkYXRlID0gKFxuICBpZCxcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfQVJUSUNMRSxcbiAgICBpZCxcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUVycm9ycyA9IChcbiAgaWQsXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1VQREFURV9BUlRJQ0xFLFxuICAgIGlkLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBcnRpY2xlID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hcnRpY2xlcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXJ0aWNsZTogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5hcnRpY2xlKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlRXJyb3JzKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgYXJ0aWNsZSBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX0FSVElDTEVcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9BUlRJQ0xFLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9BUlRJQ0xFLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVBcnRpY2xlID0gKFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFydGljbGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5hcnRpY2xlKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0FydGljbGUgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChgLyR7anNvbi5kYXRhLmFydGljbGUudHlwZS5pZH0vJHtqc29uLmRhdGEuYXJ0aWNsZS5faWR9YClcbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIGFydGljbGUgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcnRpY2xlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0FydGljbGUgd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfVVNFUlMsIFJFQ0VJVkVfVVNFUlMsXG4gIFJFUVVFU1RfVVBEQVRFX1VTRVIsIENPTkZJUk1fVVBEQVRFX1VTRVIsIFJFSkVDVF9VUERBVEVfVVNFUixcbiAgUkVRVUVTVF9DUkVBVEVfVVNFUiwgQ09ORklSTV9DUkVBVEVfVVNFUiwgUkVKRUNUX0NSRUFURV9VU0VSLFxuICBSRVFVRVNUX0RFTEVURV9VU0VSLCBDT05GSVJNX0RFTEVURV9VU0VSLCBSRUpFQ1RfREVMRVRFX1VTRVJ9IGZyb20gJy4vdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgdXNlciA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlcixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9VU0VSUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRJdGVtLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3VXNlciA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCB1c2VycyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlcnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gdXNlcih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1VTRVI6XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9VU0VSOlxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9VU0VSOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfVVNFUjpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gdXNlcihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1VTRVI6XG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3VXNlcjogbmV3VXNlcihzdGF0ZS5uZXdVc2VyLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdVc2VyOiBpbml0aWFsU3RhdGUudXNlcnMubmV3VXNlcixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB1c2VyKG51bGwsIGFjdGlvbiksXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXNcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VTRVJTID0gJ1JFUVVFU1RfVVNFUlMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9VU0VSUyA9ICdSRUNFSVZFX1VTRVJTJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfVVNFUiA9ICdSRVFVRVNUX1VQREFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX1VTRVIgPSAnQ09ORklSTV9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX1VTRVIgPSAnUkVKRUNUX1VQREFURV9VU0VSJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9DUkVBVEVfVVNFUiA9ICdDUkVBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NSRUFURV9VU0VSID0gJ0NPTkZJUk1fQ1JFQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX0NSRUFURV9VU0VSID0gJ1JFSkVDVF9DUkVBVEVfVVNFUidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfREVMRVRFX1VTRVIgPSAnUkVRVUVTVF9ERUxFVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9VU0VSID0gJ0NPTkZJUk1fREVMRVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9VU0VSID0gJ1JFSkVDVF9ERUxFVEVfVVNFUidcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RGZXRjaCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VTRVJTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUZldGNoID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9VU0VSUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFVzZXJzID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RGZXRjaCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVGZXRjaChqc29uLmRhdGEudXNlcnMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1VcGRhdGUgPSAoXG4gIGlkLFxuICB1cGRhdGVkSXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICB1cGRhdGVkSXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdFVwZGF0ZSA9IChcbiAgaWQsXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1VQREFURV9VU0VSLFxuICAgIGlkLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RVcGRhdGUoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSB1c2VyIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DUkVBVEVfVVNFUlxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ1JFQVRFX1VTRVIsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ1JFQVRFX1VTRVIsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVzZXIgPSAoXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB1c2VyOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybUNyZWF0ZShqc29uLmRhdGEudXNlcikpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdVc2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYC91c2Vycy8ke2pzb24uZGF0YS51c2VyLl9pZH1gKVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdENyZWF0ZShwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1EZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0RFTEVURV9VU0VSLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0RFTEVURV9VU0VSLFxuICAgIGlkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnVXNlciB3YXMgZGVsZXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3REZWxldGUoaWQpKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91c2Vyc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0NIRURVTEUsIFJFQ0VJVkVfU0NIRURVTEUsXG4gIFJFUVVFU1RfVVBEQVRFX1NDSEVEVUxFLCBSRUNFSVZFX1VQREFURV9TQ0hFRFVMRX0gZnJvbSAnLi9zY2hlZHVsZUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzY2hlZHVsZSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2NoZWR1bGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0NIRURVTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0NIRURVTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9TQ0hFRFVMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9VUERBVEVfU0NIRURVTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNjaGVkdWxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2NoZWR1bGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NDSEVEVUxFID0gJ1JFUVVFU1RfU0NIRURVTEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TQ0hFRFVMRSA9ICdSRUNFSVZFX1NDSEVEVUxFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfU0NIRURVTEUgPSAnUkVRVUVTVF9VUERBVEVfU0NIRURVTEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9VUERBVEVfU0NIRURVTEUgPSAnUkVDRUlWRV9VUERBVEVfU0NIRURVTEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0U2NoZWR1bGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TQ0hFRFVMRVxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTY2hlZHVsZSA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0NIRURVTEUsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTY2hlZHVsZSA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2NoZWR1bGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2NoZWR1bGVgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNjaGVkdWxlKGpzb24uZGF0YS5zY2hlZHVsZS5pdGVtcykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1NDSEVEVUxFXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVVwZGF0ZSA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfVVBEQVRFX1NDSEVEVUxFLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNjaGVkdWxlID0gKFxuICBkYXRhLFxuICBzdWNjZXNzTWVzc2FnZVxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZSgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zY2hlZHVsZWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2NoZWR1bGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGpzb24uZGF0YS5zY2hlZHVsZS5pdGVtcykpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zY2hlZHVsZUFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfSU5ERVgsIFJFQ0VJVkVfSU5ERVgsXG4gIFJFUVVFU1RfVVBEQVRFX0lOREVYLCBDT05GSVJNX1VQREFURV9JTkRFWH0gZnJvbSAnLi9zZWFyY2hJbmRleEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWFyY2hJbmRleCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VhcmNoSW5kZXgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IGFjdGlvbi5sYXN0VXBkYXRlZE9uLFxuICAgICAgICBsYXN0VXBkYXRlZEJ5OiBhY3Rpb24ubGFzdFVwZGF0ZWRCeVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFVwZGF0ZWRPbjogYWN0aW9uLmxhc3RVcGRhdGVkT24sXG4gICAgICAgIGxhc3RVcGRhdGVkQnk6IGFjdGlvbi5sYXN0VXBkYXRlZEJ5XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hJbmRleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hBcnRpY2xlc30gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJy4uL0RpcmVjdG9yeSdcbmltcG9ydCBBcnRpY2xlRGlyZWN0b3J5SXRlbSBmcm9tICcuLi9BcnRpY2xlRGlyZWN0b3J5SXRlbSdcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgUGFnZU5vdEZvdW5kIGZyb20gJy4uL1BhZ2VOb3RGb3VuZCdcbmltcG9ydCB7Z2V0Q3VycmVudFNlY3Rpb24sIGlzU2VjdGlvbiwgaXNBdHRhY2htZW50LCBpc0Jsb2dwb3N0LCBpc0ZhcX0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuXG5jbGFzcyBBcnRpY2xlRGlyZWN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbm90Rm91bmQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNTZWN0aW9uKHBhcmFtcy5zZWN0aW9uSWQpIHx8IGlzQXR0YWNobWVudChwYXJhbXMuc2VjdGlvbklkKSB8fCBpc0Jsb2dwb3N0KHBhcmFtcy5zZWN0aW9uSWQpIHx8IGlzRmFxKHBhcmFtcy5zZWN0aW9uSWQpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbm90Rm91bmQ6IGZhbHNlIH0pXG4gICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzKCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBub3RGb3VuZDogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBuZXdQcm9wc1xuXG4gICAgaWYgKHBhcmFtcy5zZWN0aW9uSWQgIT09IHRoaXMucHJvcHMucGFyYW1zLnNlY3Rpb25JZCkge1xuICAgICAgaWYgKGlzU2VjdGlvbihwYXJhbXMuc2VjdGlvbklkKSB8fCBpc0F0dGFjaG1lbnQocGFyYW1zLnNlY3Rpb25JZCkgfHwgaXNCbG9ncG9zdChwYXJhbXMuc2VjdGlvbklkKSB8fCBpc0ZhcShwYXJhbXMuc2VjdGlvbklkKSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbm90Rm91bmQ6IGZhbHNlIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgbm90Rm91bmQ6IHRydWUgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLm5vdEZvdW5kKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZU5vdEZvdW5kIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHtjaGlsZHJlbiwgaXNGZXRjaGluZywgaXRlbXMsIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICAgIGNvbnN0IGN1cnJlbnRTZWN0aW9uID0gZ2V0Q3VycmVudFNlY3Rpb24ocGFyYW1zLnNlY3Rpb25JZClcblxuICAgICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBhcnRpY2xlcyA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS50eXBlLmlkID09PSBjdXJyZW50U2VjdGlvbi5pZCkubWFwKGkgPT5cbiAgICAgICAgICA8QXJ0aWNsZURpcmVjdG9yeUl0ZW0ga2V5PXtpLmRhdGEuX2lkfSBpdGVtPXtpfSAvPlxuICAgICAgICApXG5cbiAgICAgICAgY29uc3QgYWN0aW9ucyA9IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEJ1dHRvbiBtZWRcbiAgICAgICAgICAgICAgdG89e2Ake2N1cnJlbnRTZWN0aW9uLmlkfS9uZXdgfVxuICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIj5DcmVhdGUgbmV3PC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9e2N1cnJlbnRTZWN0aW9uLmxhYmVsfSBpdGVtcz17YXJ0aWNsZXN9IGFjdGlvbnM9e2FjdGlvbnN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLmFydGljbGVzLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUuYXJ0aWNsZXMuaXRlbXNcbiAgICB9XG4gIH1cbikoQXJ0aWNsZURpcmVjdG9yeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVEaXJlY3RvcnkvQXJ0aWNsZURpcmVjdG9yeS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EaXJlY3RvcnkuY3NzJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBEaXJlY3RvcnkgPSAoe1xuICB0aXRsZSxcbiAgaXRlbXMsXG4gIGFjdGlvbnMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgaWYgKGNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIGNoaWxkcmVuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRGlyZWN0b3J5fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5EaXJlY3RvcnlfX2hlYWRlcn0+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8VGl0bGUgbGFiZWw9e3RpdGxlfSAvPlxuXG4gICAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRGlyZWN0b3J5X19ib2R5fT5cbiAgICAgICAgICB7aXRlbXN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdG9yeVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5L0RpcmVjdG9yeS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJEaXJlY3RvcnlcIjpcIkRpcmVjdG9yeV9fRGlyZWN0b3J5X19fM1pYUXVcIixcIkRpcmVjdG9yeV9faGVhZGVyXCI6XCJEaXJlY3RvcnlfX0RpcmVjdG9yeV9faGVhZGVyX19fMW1KeExcIixcIkRpcmVjdG9yeV9fYm9keVwiOlwiRGlyZWN0b3J5X19EaXJlY3RvcnlfX2JvZHlfX18ydVdoTVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRGlyZWN0b3J5L0RpcmVjdG9yeS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RpdGxlLmNzcydcblxuY29uc3QgVGl0bGUgPSAoe1xuICBsYWJlbCxcbiAgdGhlbWUgPSAnZGVmYXVsdCdcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLlRpdGxlXVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGl0bGVfc3VjY2VzcylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UaXRsZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZGVmYXVsdCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGl0bGVfZGVmYXVsdClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT57bGFiZWx9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RpdGxlL1RpdGxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRpdGxlXCI6XCJUaXRsZV9fVGl0bGVfX18xN0J1S1wiLFwiVGl0bGVfZGVmYXVsdFwiOlwiVGl0bGVfX1RpdGxlX2RlZmF1bHRfX18zRUJNZFwiLFwiVGl0bGVfc3VjY2Vzc1wiOlwiVGl0bGVfX1RpdGxlX3N1Y2Nlc3NfX18ydVJ4S1wiLFwiVGl0bGVfZXJyb3JcIjpcIlRpdGxlX19UaXRsZV9lcnJvcl9fXzFZU3VWXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UaXRsZS9UaXRsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5pbXBvcnQge0RpcmVjdG9yeUl0ZW0sIERpcmVjdG9yeUl0ZW1UaXRsZSwgRGlyZWN0b3J5SXRlbUluZm99IGZyb20gJy4uL0RpcmVjdG9yeUl0ZW0nXG5pbXBvcnQge0Jsb2NrLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgRmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7dXBkYXRlQXJ0aWNsZSwgZGVsZXRlQXJ0aWNsZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5cbmNsYXNzIEFydGljbGVEaXJlY3RvcnlJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnB1Ymxpc2ggPSB0aGlzLnB1Ymxpc2guYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlID0gdGhpcy5kZWxldGUuYmluZCh0aGlzKVxuICB9XG5cbiAgcHVibGlzaCAoKSB7XG4gICAgY29uc3Qge2Rpc3BhdGNoLCBpdGVtfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgaXNQdWJsaXNoZWQ6ICFpdGVtLmRhdGEuaXNQdWJsaXNoZWRcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVBcnRpY2xlKGl0ZW0uZGF0YS5faWQsIHBheWxvYWQpKVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIGl0ZW19ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2goZGVsZXRlQXJ0aWNsZShpdGVtLmRhdGEuX2lkKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaXJlY3RvcnlJdGVtPlxuICAgICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCYWRnZSBsYWJlbD17aXRlbS5kYXRhLmlzUHVibGlzaGVkID8gJ1B1Ymxpc2hlZCcgOiAnRHJhZnQnfVxuICAgICAgICAgICAgICAgICAgdGhlbWU9e2l0ZW0uZGF0YS5pc1B1Ymxpc2hlZCA/ICdzdWNjZXNzJyA6ICdlcnJvcid9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxEaXJlY3RvcnlJdGVtSW5mbz5MYXN0IG1vZGlmaWVkIGJ5IHtpdGVtLmRhdGEubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtpdGVtLmRhdGEubGFzdE1vZGlmaWVkQXR9IGZvcm1hdD1cIk1NTU0gRG8gWVlZWSAoaDptbSBhKVwiIC8+PC9EaXJlY3RvcnlJdGVtSW5mbz5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXRlbS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdGhlbWU9e2l0ZW0uZGF0YS5pc1B1Ymxpc2hlZCA/ICdlcnJvcicgOiAnYWNjZW50MSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnB1Ymxpc2h9PntpdGVtLmRhdGEuaXNQdWJsaXNoZWQgPyAnVW5wdWJsaXNoJyA6ICdQdWJsaXNoJ308L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uaXNVcGRhdGluZyB8fCBpdGVtLmRhdGEuaXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImVycm9yXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPERpcmVjdG9yeUl0ZW1UaXRsZSB0bz17YCR7aXRlbS5kYXRhLnR5cGUuaWR9LyR7aXRlbS5kYXRhLl9pZH1gfT57aXRlbS5kYXRhLnRpdGxlfTwvRGlyZWN0b3J5SXRlbVRpdGxlPlxuICAgICAgPC9EaXJlY3RvcnlJdGVtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoQXJ0aWNsZURpcmVjdG9yeUl0ZW0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlRGlyZWN0b3J5SXRlbS9BcnRpY2xlRGlyZWN0b3J5SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWRnZS5jc3MnXG5cbmNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIHRoZW1lID0gJ2RlZmF1bHQnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5CYWRnZV1cbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2FjY2VudDEnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9hY2NlbnQxKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQyJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfYWNjZW50MilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX3N1Y2Nlc3MpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX2RlZmF1bHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+e2xhYmVsfTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9CYWRnZS9CYWRnZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCYWRnZVwiOlwiQmFkZ2VfX0JhZGdlX19fMzNlUVJcIixcIkJhZGdlX2RlZmF1bHRcIjpcIkJhZGdlX19CYWRnZV9kZWZhdWx0X19feE9VOHJcIixcIkJhZGdlX2FjY2VudDFcIjpcIkJhZGdlX19CYWRnZV9hY2NlbnQxX19fM2Z2NndcIixcIkJhZGdlX2FjY2VudDJcIjpcIkJhZGdlX19CYWRnZV9hY2NlbnQyX19fMktfZ2xcIixcIkJhZGdlX2Vycm9yXCI6XCJCYWRnZV9fQmFkZ2VfZXJyb3JfX19iYXhvRlwiLFwiQmFkZ2Vfc3VjY2Vzc1wiOlwiQmFkZ2VfX0JhZGdlX3N1Y2Nlc3NfX18xSzB6ZlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNzg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RpcmVjdG9yeUl0ZW0uY3NzJ1xuXG5jb25zdCBEaXJlY3RvcnlJdGVtID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkRpcmVjdG9yeUl0ZW19PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBEaXJlY3RvcnlJdGVtVGl0bGUgPSAoe1xuICBjaGlsZHJlbixcbiAgdG8gPSBudWxsXG59KSA9PiB7XG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17dG99IGNsYXNzTmFtZT17YCR7c3R5bGVzLkRpcmVjdG9yeUl0ZW1fX3RpdGxlfSAke3N0eWxlcy5EaXJlY3RvcnlJdGVtX190aXRsZV9saW5rfWB9PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkRpcmVjdG9yeUl0ZW1fX3RpdGxlfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IERpcmVjdG9yeUl0ZW1JbmZvID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkRpcmVjdG9yeUl0ZW1fX2luZm99PntjaGlsZHJlbn08L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0RpcmVjdG9yeUl0ZW0sIERpcmVjdG9yeUl0ZW1UaXRsZSwgRGlyZWN0b3J5SXRlbUluZm99XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9EaXJlY3RvcnlJdGVtL0RpcmVjdG9yeUl0ZW0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRGlyZWN0b3J5SXRlbVwiOlwiRGlyZWN0b3J5SXRlbV9fRGlyZWN0b3J5SXRlbV9fXzFOczREXCIsXCJEaXJlY3RvcnlJdGVtX190aXRsZVwiOlwiRGlyZWN0b3J5SXRlbV9fRGlyZWN0b3J5SXRlbV9fdGl0bGVfX182XzRKdlwiLFwiRGlyZWN0b3J5SXRlbV9fdGl0bGVfbGlua1wiOlwiRGlyZWN0b3J5SXRlbV9fRGlyZWN0b3J5SXRlbV9fdGl0bGVfbGlua19fXzNhSlhXXCIsXCJEaXJlY3RvcnlJdGVtX19pbmZvXCI6XCJEaXJlY3RvcnlJdGVtX19EaXJlY3RvcnlJdGVtX19pbmZvX19fM0pJLXVcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeUl0ZW0vRGlyZWN0b3J5SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgUGFnZU5vdEZvdW5kID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+NDA0OiBQYWdlIE5vdCBGb3VuZDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VOb3RGb3VuZFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUGFnZU5vdEZvdW5kL1BhZ2VOb3RGb3VuZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0l0ZW1Gb3JtLCBJdGVtRm9ybUJvZHksIEl0ZW1Gb3JtSGVhZGVyfSBmcm9tICcuLi9JdGVtRm9ybSdcbmltcG9ydCB7QmxvY2ssIEZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIElucHV0LCBDaGVja2JveCwgRWRpdG9yLCBTZWxlY3R9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtjcmVhdGVBcnRpY2xlfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSdcbmltcG9ydCB7YXR0YWNobWVudHMsIGlzU2VjdGlvbiwgaXNCbG9ncG9zdCwgZ2V0Q3VycmVudFNlY3Rpb259IGZyb20gJy4uLy4uL2NvbmZpZydcblxuY2xhc3MgQXJ0aWNsZUNyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmN1cnJlbnRTZWN0aW9uID0gZ2V0Q3VycmVudFNlY3Rpb24odGhpcy5wcm9wcy5wYXJhbXMuc2VjdGlvbklkKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBzbmlwcGV0OiAnJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGlzUHVibGlzaGVkOiBmYWxzZSxcbiAgICAgICAgYXR0YWNobWVudDogJydcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgdHlwZTogdGhpcy5jdXJyZW50U2VjdGlvblxuICAgIH0pXG5cbiAgICBkaXNwYXRjaChjcmVhdGVBcnRpY2xlKHBheWxvYWQpKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLml0ZW1cblxuICAgIGxldCBhdHRhY2htZW50U2VsZWN0ID0gJydcbiAgICBpZiAoaXNTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24uaWQpKSB7XG4gICAgICBhdHRhY2htZW50U2VsZWN0ID0gKFxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17YXR0YWNobWVudHN9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB0aGlzLmNoYW5nZSgnYXR0YWNobWVudCcsIHYpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuYXR0YWNobWVudH1cbiAgICAgICAgICBsYWJlbD1cIkF0dGFjaG1lbnQ6XCIgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgc25pcHBldEZvcm0gPSAnJ1xuICAgIGlmIChpc0Jsb2dwb3N0KHRoaXMuY3VycmVudFNlY3Rpb24uaWQpKSB7XG4gICAgICBzbmlwcGV0Rm9ybSA9IChcbiAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGxhYmVsPVwiUHJldmlldzpcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zbmlwcGV0fVxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnNuaXBwZXR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnc25pcHBldCcsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEl0ZW1Gb3JtPlxuICAgICAgICA8SXRlbUZvcm1IZWFkZXI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8VGl0bGUgbGFiZWw9e2BOZXcgJHt0aGlzLmN1cnJlbnRTZWN0aW9uLmxhYmVsfSBwYWdlYH0gLz5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgdG89e3RoaXMuY3VycmVudFNlY3Rpb24uaWR9PkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9JdGVtRm9ybUhlYWRlcj5cblxuICAgICAgICA8SXRlbUZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlOlwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlVSTDpcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJQdWJsaXNoZWQ6XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzUHVibGlzaGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc1B1Ymxpc2hlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3NuaXBwZXRGb3JtfVxuXG4gICAgICAgICAgPEJsb2NrIG49e2F0dGFjaG1lbnRTZWxlY3QgPyAzIDogMH0+XG4gICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29udGVudDpcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmNvbnRlbnR9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdjb250ZW50JywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICB7YXR0YWNobWVudFNlbGVjdH1cbiAgICAgICAgPC9JdGVtRm9ybUJvZHk+XG4gICAgICA8L0l0ZW1Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLmFydGljbGVzLm5ld0FydGljbGVcbiAgICB9XG4gIH1cbikoQXJ0aWNsZUNyZWF0ZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVDcmVhdGUvQXJ0aWNsZUNyZWF0ZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JdGVtRm9ybS5jc3MnXG5cbmNvbnN0IEl0ZW1Gb3JtID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkl0ZW1Gb3JtfT57Y2hpbGRyZW59PC9kaXY+XG4gIClcbn1cblxuY29uc3QgSXRlbUZvcm1IZWFkZXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSXRlbUZvcm1fX2hlYWRlcn0+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cbmNvbnN0IEl0ZW1Gb3JtQm9keSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JdGVtRm9ybV9fYm9keX0+e2NoaWxkcmVufTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7SXRlbUZvcm0sIEl0ZW1Gb3JtSGVhZGVyLCBJdGVtRm9ybUJvZHl9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9JdGVtRm9ybS9JdGVtRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJdGVtRm9ybVwiOlwiSXRlbUZvcm1fX0l0ZW1Gb3JtX19fMkw0VVVcIixcIkl0ZW1Gb3JtX19oZWFkZXJcIjpcIkl0ZW1Gb3JtX19JdGVtRm9ybV9faGVhZGVyX19fMXNfZlZcIixcIkl0ZW1Gb3JtX19ib2R5XCI6XCJJdGVtRm9ybV9fSXRlbUZvcm1fX2JvZHlfX18zemVXVFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSXRlbUZvcm0vSXRlbUZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0Jsb2NrLCBGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJbnB1dCwgQ2hlY2tib3gsIEVkaXRvciwgU2VsZWN0fSBmcm9tICcuLi9VSSdcbmltcG9ydCB7dXBkYXRlQXJ0aWNsZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge0l0ZW1Gb3JtLCBJdGVtRm9ybUhlYWRlciwgSXRlbUZvcm1Cb2R5fSBmcm9tICcuLi9JdGVtRm9ybSdcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSdcbmltcG9ydCB7YXR0YWNobWVudHMsIGlzU2VjdGlvbiwgaXNCbG9ncG9zdH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL0NvbW1lbnRzJ1xuXG5jbGFzcyBBcnRpY2xlRWRpdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZUNvbW1lbnQgPSB0aGlzLmRlbGV0ZUNvbW1lbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlUmVwbHkgPSB0aGlzLmRlbGV0ZVJlcGx5LmJpbmQodGhpcylcbiAgICB0aGlzLmN1cnJlbnRTZWN0aW9uID0gcHJvcHMuaXRlbS5kYXRhLnR5cGVcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLml0ZW0uZGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLml0ZW0uZXJyb3JzKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy5pdGVtXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2godXBkYXRlQXJ0aWNsZSh0aGlzLnByb3BzLml0ZW0uZGF0YS5faWQsIHRoaXMuc3RhdGUuZGF0YSkpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlQ29tbWVudCAoaWQpIHtcbiAgICBjb25zdCBuZXdDb21tZW50cyA9IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5tYXAoYyA9PiB7XG4gICAgICBpZiAoYy5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjLCB7XG4gICAgICAgICAgaXNEZWxldGVkOiAhYy5pc0RlbGV0ZWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgICBjb21tZW50czogbmV3Q29tbWVudHNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZVJlcGx5IChpZCwgY29tbWVudElkKSB7XG4gICAgY29uc3QgY29tbWVudCA9IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5maWx0ZXIoYyA9PiBjLl9pZCA9PT0gY29tbWVudElkKVswXVxuICAgIGNvbnN0IG5ld1JlcGxpZXMgPSBjb21tZW50LnJlcGxpZXMubWFwKHIgPT4ge1xuICAgICAgaWYgKHIuX2lkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIGlzRGVsZXRlZDogIXIuaXNEZWxldGVkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gclxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgICAgY29tbWVudHM6IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5tYXAoYyA9PiB7XG4gICAgICAgICAgaWYgKGMuX2lkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjLCB7XG4gICAgICAgICAgICAgIHJlcGxpZXM6IG5ld1JlcGxpZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLml0ZW1cblxuICAgIGxldCBhdHRhY2htZW50U2VsZWN0ID0gJydcbiAgICBpZiAoaXNTZWN0aW9uKHRoaXMuY3VycmVudFNlY3Rpb24uaWQpKSB7XG4gICAgICBhdHRhY2htZW50U2VsZWN0ID0gKFxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgb3B0aW9ucz17YXR0YWNobWVudHN9XG4gICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiB0aGlzLmNoYW5nZSgnYXR0YWNobWVudCcsIHYpfVxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuYXR0YWNobWVudH1cbiAgICAgICAgICBsYWJlbD1cIkF0dGFjaG1lbnQ6XCIgLz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgc25pcHBldEZvcm0gPSAnJ1xuICAgIGlmIChpc0Jsb2dwb3N0KHRoaXMuY3VycmVudFNlY3Rpb24uaWQpKSB7XG4gICAgICBzbmlwcGV0Rm9ybSA9IChcbiAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgIGxhYmVsPVwiUHJldmlldzpcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zbmlwcGV0fVxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnNuaXBwZXR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnc25pcHBldCcsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9CbG9jaz5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgY29tbWVudHNGb3JtID0gJydcbiAgICBpZiAoaXNCbG9ncG9zdCh0aGlzLmN1cnJlbnRTZWN0aW9uLmlkKSAmJiB0aGlzLnN0YXRlLmRhdGEuY29tbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgY29tbWVudHNGb3JtID0gKFxuICAgICAgICA8Q29tbWVudHMgaXRlbXM9e3RoaXMuc3RhdGUuZGF0YS5jb21tZW50c30gb25EZWxldGVDb21tZW50PXt0aGlzLmRlbGV0ZUNvbW1lbnR9IG9uRGVsZXRlUmVwbHk9e3RoaXMuZGVsZXRlUmVwbHl9IC8+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGhlYWRlciA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgaGVhZGVyID0gKFxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8VGl0bGUgbGFiZWw9XCJVbnNhdmVkIENoYW5nZXNcIiB0aGVtZT1cImVycm9yXCIgLz5cblxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIHRvPXt0aGlzLnByb3BzLml0ZW0uZGF0YS50eXBlLmlkfT5DYW5jZWw8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWRlciA9IChcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPFRpdGxlIGxhYmVsPVwiQWxsIFNhdmVkXCIgdGhlbWU9XCJzdWNjZXNzXCIgLz5cblxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIHRvPXt0aGlzLnByb3BzLml0ZW0uZGF0YS50eXBlLmlkfT5DbG9zZTwvQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxJdGVtRm9ybT5cbiAgICAgICAgPEl0ZW1Gb3JtSGVhZGVyPlxuICAgICAgICAgIHtoZWFkZXJ9XG4gICAgICAgIDwvSXRlbUZvcm1IZWFkZXI+XG5cbiAgICAgICAgPEl0ZW1Gb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZTpcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3RpdGxlJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJVUkw6XCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiUHVibGlzaGVkOlwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNQdWJsaXNoZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHtzbmlwcGV0Rm9ybX1cblxuICAgICAgICAgIDxCbG9jayBuPXthdHRhY2htZW50U2VsZWN0IHx8IGNvbW1lbnRzRm9ybSA/IDMgOiAwfT5cbiAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgbGFiZWw9XCJDb250ZW50OlwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHthdHRhY2htZW50U2VsZWN0fVxuICAgICAgICAgIHtjb21tZW50c0Zvcm19XG4gICAgICAgIDwvSXRlbUZvcm1Cb2R5PlxuICAgICAgPC9JdGVtRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGl0ZW1JZCA9IG93blByb3BzLnBhcmFtcy5pdGVtSWRcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcyA/IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgPT09IGl0ZW1JZClbMF0gOiB7ZGF0YToge30sIGVycm9yczoge319XG4gICAgfVxuICB9XG4pKEFydGljbGVFZGl0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUVkaXQvQXJ0aWNsZUVkaXQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQ29tbWVudCBmcm9tICcuLi9Db21tZW50J1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSdcblxuY29uc3QgQ29tbWVudHMgPSAoe1xuICBpdGVtcyxcbiAgb25EZWxldGVDb21tZW50LFxuICBvbkRlbGV0ZVJlcGx5XG59KSA9PiB7XG4gIGNvbnN0IHNvcnRlZENvbW1lbnRzID0gaXRlbXMuc29ydCgoYSwgYikgPT4ge1xuICAgIGlmIChhLmNyZWF0ZWRBdCA+IGIuY3JlYXRlZEF0KSB7XG4gICAgICByZXR1cm4gLTFcbiAgICB9IGVsc2UgaWYgKGEuY3JlYXRlZEF0IDwgYi5jcmVhdGVkQXQpIHtcbiAgICAgIHJldHVybiAxXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAwXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGNvbW1lbnRzID0gc29ydGVkQ29tbWVudHMubWFwKGkgPT5cbiAgICA8Q29tbWVudCBrZXk9e2kuX2lkfSBpdGVtPXtpfSBvbkRlbGV0ZUNvbW1lbnQ9e29uRGVsZXRlQ29tbWVudH0gb25EZWxldGVSZXBseT17b25EZWxldGVSZXBseX0gLz5cbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCbG9jaz5cbiAgICAgICAgPFRpdGxlIGxhYmVsPVwiQ29tbWVudHNcIiAvPlxuICAgICAgPC9CbG9jaz5cblxuICAgICAge2NvbW1lbnRzfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbWVudC5jc3MnXG5pbXBvcnQge0Jsb2NrLCBGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuY29uc3QgUmVwbHkgPSAoe1xuICBpdGVtLFxuICBvbkRlbGV0ZVJlcGx5LFxuICBjb21tZW50SWQsXG4gIGNvbW1lbnRJc0RlbGV0ZWRcbn0pID0+IHtcbiAgbGV0IGFjdGlvbnMgPSAnJ1xuICBpZiAoaXRlbS5pc0RlbGV0ZWQpIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJlcGx5X19kZWxldGVJbmZvfT5cbiAgICAgICAgICAgIHJlcGx5IHdpbGwgYmUgZGVsZXRlZCBvbiBzYXZlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17Y29tbWVudElzRGVsZXRlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUmVwbHkoaXRlbS5faWQsIGNvbW1lbnRJZCl9PlB1dCBiYWNrPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgIGludmVyc2VcbiAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgIGRpc2FibGVkPXtjb21tZW50SXNEZWxldGVkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZVJlcGx5KGl0ZW0uX2lkLCBjb21tZW50SWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuUmVwbHl9ICR7aXRlbS5pc0RlbGV0ZWQgPyBzdHlsZXMuUmVwbHlfZGVsZXRlZCA6ICcnfWB9PlxuICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUmVwbHlfX2luZm99PlBvc3RlZCBieSB7aXRlbS5sYXN0TW9kaWZpZWRCeX0gb24gPFRpbWUgdmFsdWU9e2l0ZW0uY3JlYXRlZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPjwvZGl2PlxuXG4gICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUmVwbHlfX2JvZHl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmNvbnRlbnR9fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENvbW1lbnQgPSAoe1xuICBpdGVtLFxuICBvbkRlbGV0ZUNvbW1lbnQsXG4gIG9uRGVsZXRlUmVwbHlcbn0pID0+IHtcbiAgY29uc3Qgc29ydGVkUmVwbGllcyA9IGl0ZW0ucmVwbGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuY3JlYXRlZEF0ID4gYi5jcmVhdGVkQXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVwbGllcyA9IHNvcnRlZFJlcGxpZXMubWFwKHIgPT5cbiAgICA8UmVwbHkga2V5PXtyLl9pZH0gY29tbWVudElkPXtpdGVtLl9pZH0gaXRlbT17cn0gb25EZWxldGVSZXBseT17b25EZWxldGVSZXBseX0gY29tbWVudElzRGVsZXRlZD17aXRlbS5pc0RlbGV0ZWR9IC8+XG4gIClcblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmIChpdGVtLmlzRGVsZXRlZCkge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fZGVsZXRlSW5mb30+XG4gICAgICAgICAgICBjb21tZW50IHdpbGwgYmUgZGVsZXRlZCBvbiBzYXZlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUNvbW1lbnQoaXRlbS5faWQpfT5QdXQgYmFjazwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICBpbnZlcnNlXG4gICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUNvbW1lbnQoaXRlbS5faWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQ29tbWVudH0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5Db21tZW50X2RlbGV0ZWQgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fY29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19pbmZvfT5Qb3N0ZWQgYnkge2l0ZW0ubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtpdGVtLmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz48L2Rpdj5cblxuICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19ib2R5fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19yZXBsaWVzfT5cbiAgICAgICAgICB7cmVwbGllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fX0NMUzJ3XCIsXCJDb21tZW50X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19Db21tZW50X19kZWxldGVJbmZvX19fMXhRV0VcIixcIkNvbW1lbnRfX2luZm9cIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2luZm9fX18xcm9vbFwiLFwiQ29tbWVudF9fY29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fY29tbWVudF9fX1BRVDY3XCIsXCJDb21tZW50X19ib2R5XCI6XCJDb21tZW50X19Db21tZW50X19ib2R5X19fMVM1RjZcIixcIkNvbW1lbnRfX3JlcGxpZXNcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX3JlcGxpZXNfX19QWExYUlwiLFwiQ29tbWVudF9kZWxldGVkXCI6XCJDb21tZW50X19Db21tZW50X2RlbGV0ZWRfX18ybmtZWFwiLFwiUmVwbHlcIjpcIkNvbW1lbnRfX1JlcGx5X19fMUo1Sk9cIixcIlJlcGx5X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19SZXBseV9fZGVsZXRlSW5mb19fXzJPQWJYXCIsXCJSZXBseV9faW5mb1wiOlwiQ29tbWVudF9fUmVwbHlfX2luZm9fX18zMGpJMlwiLFwiUmVwbHlfX2JvZHlcIjpcIkNvbW1lbnRfX1JlcGx5X19ib2R5X19fMXFocG5cIixcIlJlcGx5X2RlbGV0ZWRcIjpcIkNvbW1lbnRfX1JlcGx5X2RlbGV0ZWRfX18xa09WUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaFVzZXJzfSBmcm9tICcuLi8uLi9zdG9yZS91c2Vyc0FjdGlvbnMnXG5pbXBvcnQgRGlyZWN0b3J5IGZyb20gJy4uL0RpcmVjdG9yeSdcbmltcG9ydCBVc2Vyc0RpcmVjdG9yeUl0ZW0gZnJvbSAnLi4vVXNlcnNEaXJlY3RvcnlJdGVtJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcblxuY2xhc3MgVXNlcnNEaXJlY3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaChmZXRjaFVzZXJzKCkpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgaXNGZXRjaGluZywgaXRlbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB1c2VycyA9IGl0ZW1zLm1hcChpID0+XG4gICAgICAgIDxVc2Vyc0RpcmVjdG9yeUl0ZW0ga2V5PXtpLmRhdGEuX2lkfSBpdGVtPXtpfSAvPlxuICAgICAgKVxuXG4gICAgICBjb25zdCBhY3Rpb25zID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHRvPVwiL3VzZXJzL25ld1wiXG4gICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIj5DcmVhdGUgbmV3PC9CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RGlyZWN0b3J5IHRpdGxlPVwiVXNlcnNcIiBpdGVtcz17dXNlcnN9IGFjdGlvbnM9e2FjdGlvbnN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS51c2Vycy5pc0ZldGNoaW5nLFxuICAgICAgaXRlbXM6IHN0YXRlLnVzZXJzLml0ZW1zXG4gICAgfVxuICB9XG4pKFVzZXJzRGlyZWN0b3J5KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVXNlcnNEaXJlY3RvcnkvVXNlcnNEaXJlY3RvcnkuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBCYWRnZSBmcm9tICcuLi9CYWRnZSdcbmltcG9ydCB7RGlyZWN0b3J5SXRlbSwgRGlyZWN0b3J5SXRlbVRpdGxlLCBEaXJlY3RvcnlJdGVtSW5mb30gZnJvbSAnLi4vRGlyZWN0b3J5SXRlbSdcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHt1cGRhdGVVc2VyLCBkZWxldGVVc2VyfSBmcm9tICcuLi8uLi9zdG9yZS91c2Vyc0FjdGlvbnMnXG5cbmNsYXNzIFVzZXJzRGlyZWN0b3J5SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kaXNhYmxlID0gdGhpcy5kaXNhYmxlLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIGRpc2FibGUgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaCwgaXRlbX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIGlzRW5hYmxlZDogIWl0ZW0uZGF0YS5pc0VuYWJsZWRcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKGl0ZW0uZGF0YS5faWQsIHBheWxvYWQpKVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIGl0ZW19ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2goZGVsZXRlVXNlcihpdGVtLmRhdGEuX2lkKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGxhc3RMb2dnZWRJbiA9ICcnXG4gICAgaWYgKGl0ZW0uZGF0YS5sYXN0TG9nZ2VkSW5BdCkge1xuICAgICAgbGFzdExvZ2dlZEluID0gKFxuICAgICAgICA8RGlyZWN0b3J5SXRlbUluZm8+TGFzdCBsb2cgaW4gb24gPFRpbWUgdmFsdWU9e2l0ZW0uZGF0YS5sYXN0TG9nZ2VkSW5BdH0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz48L0RpcmVjdG9yeUl0ZW1JbmZvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBsYXN0TG9nZ2VkSW4gPSAoXG4gICAgICAgIDxEaXJlY3RvcnlJdGVtSW5mbz5OZXZlciBsb2dnZWQgaW48L0RpcmVjdG9yeUl0ZW1JbmZvPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RGlyZWN0b3J5SXRlbSBkcmFmdD17IWl0ZW0uZGF0YS5pc0VuYWJsZWR9PlxuICAgICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7bGFzdExvZ2dlZElufVxuXG4gICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLmRpc2FibGV9XG4gICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICB0aGVtZT17aXRlbS5kYXRhLmlzRW5hYmxlZCA/ICdlcnJvcicgOiAnYWNjZW50MSd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRpc2FibGV9PntpdGVtLmRhdGEuaXNFbmFibGVkID8gJ0Rpc2FibGUnIDogJ0VuYWJsZSd9PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLmlzVXBkYXRpbmcgfHwgaXRlbS5kYXRhLmlzRW5hYmxlZH1cbiAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9PkRlbGV0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8RGlyZWN0b3J5SXRlbVRpdGxlIHRvPXtgdXNlcnMvJHtpdGVtLmRhdGEuX2lkfWB9PntpdGVtLmRhdGEubmFtZX0gKHtpdGVtLmRhdGEuZW1haWx9KTwvRGlyZWN0b3J5SXRlbVRpdGxlPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICB7aXRlbS5kYXRhLmlzRW5hYmxlZFxuICAgICAgICAgID8gJydcbiAgICAgICAgICA6IDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCYWRnZSBsYWJlbD1cIkRpc2FibGVkXCIgdGhlbWU9XCJlcnJvclwiIC8+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT59XG5cbiAgICAgICAgICB7aXRlbS5kYXRhLmFkbWluXG4gICAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJBZG1pblwiIHRoZW1lPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA6ICcnfVxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICA8L0RpcmVjdG9yeUl0ZW0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoKShVc2Vyc0RpcmVjdG9yeUl0ZW0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0RpcmVjdG9yeUl0ZW0vVXNlcnNEaXJlY3RvcnlJdGVtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7SXRlbUZvcm0sIEl0ZW1Gb3JtQm9keSwgSXRlbUZvcm1IZWFkZXJ9IGZyb20gJy4uL0l0ZW1Gb3JtJ1xuaW1wb3J0IHtCbG9jaywgRmxleCwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSW5wdXQsIENoZWNrYm94fSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Y3JlYXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IFRpdGxlIGZyb20gJy4uL1RpdGxlJ1xuXG5jbGFzcyBVc2Vyc0NyZWF0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBlbWFpbDogJycsXG4gICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgYWRtaW46ICcnLFxuICAgICAgICBpc0VuYWJsZWQ6IGZhbHNlXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9yc30gPSBuZXdQcm9wcy5pdGVtXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2goY3JlYXRlVXNlcih0aGlzLnN0YXRlLmRhdGEpKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLml0ZW1cblxuICAgIHJldHVybiAoXG4gICAgICA8SXRlbUZvcm0+XG4gICAgICAgIDxJdGVtRm9ybUhlYWRlcj5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxUaXRsZSBsYWJlbD1cIkNyZWF0ZSBVc2VyXCIgLz5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgdG89XCJ1c2Vyc1wiPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9JdGVtRm9ybUhlYWRlcj5cblxuICAgICAgICA8SXRlbUZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ25hbWUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdlbWFpbCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3Bhc3N3b3JkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJFbmFibGVkXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzRW5hYmxlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNFbmFibGVkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJBZG1pblwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5hZG1pbn1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnYWRtaW4nLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgPC9JdGVtRm9ybUJvZHk+XG4gICAgICA8L0l0ZW1Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLnVzZXJzLm5ld1VzZXJcbiAgICB9XG4gIH1cbikoVXNlcnNDcmVhdGUpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0NyZWF0ZS9Vc2Vyc0NyZWF0ZS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0l0ZW1Gb3JtLCBJdGVtRm9ybUJvZHksIEl0ZW1Gb3JtSGVhZGVyfSBmcm9tICcuLi9JdGVtRm9ybSdcbmltcG9ydCB7QmxvY2ssIEZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIElucHV0LCBDaGVja2JveH0gZnJvbSAnLi4vVUknXG5pbXBvcnQge3VwZGF0ZVVzZXJ9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJzQWN0aW9ucydcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSdcblxuY2xhc3MgVXNlcnNFZGl0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuaXRlbS5kYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuaXRlbS5lcnJvcnMpXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBkYXRhLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKHRoaXMucHJvcHMuaXRlbS5kYXRhLl9pZCwgdGhpcy5zdGF0ZS5kYXRhKSlcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc1VwZGF0aW5nfSA9IHRoaXMucHJvcHMuaXRlbVxuXG4gICAgbGV0IGhlYWRlciA9ICcnXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICBoZWFkZXIgPSAoXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxUaXRsZSBsYWJlbD1cIlVuc2F2ZWQgQ2hhbmdlc1wiIHRoZW1lPVwiZXJyb3JcIiAvPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgdG89XCJ1c2Vyc1wiPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaGVhZGVyID0gKFxuICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICA8VGl0bGUgbGFiZWw9XCJBbGwgU2F2ZWRcIiB0aGVtZT1cInN1Y2Nlc3NcIiAvPlxuXG4gICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgdG89XCJ1c2Vyc1wiPkNsb3NlPC9CdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEl0ZW1Gb3JtPlxuICAgICAgICA8SXRlbUZvcm1IZWFkZXI+XG4gICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgPC9JdGVtRm9ybUhlYWRlcj5cblxuICAgICAgICA8SXRlbUZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ25hbWUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdlbWFpbCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRW5hYmxlZFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0VuYWJsZWR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRW5hYmxlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiQWRtaW5cIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuYWRtaW59XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2FkbWluJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgIDwvSXRlbUZvcm1Cb2R5PlxuICAgICAgPC9JdGVtRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IGl0ZW1JZCA9IG93blByb3BzLnBhcmFtcy5pdGVtSWRcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBzdGF0ZS51c2Vycy5pdGVtcyA/IHN0YXRlLnVzZXJzLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgPT09IGl0ZW1JZClbMF0gOiB7ZGF0YToge30sIGVycm9yczoge319XG4gICAgfVxuICB9XG4pKFVzZXJzRWRpdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VzZXJzRWRpdC9Vc2Vyc0VkaXQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaFF1ZXN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi4vRGlyZWN0b3J5J1xuaW1wb3J0IFF1ZXN0aW9uc0RpcmVjdG9yeUl0ZW0gZnJvbSAnLi4vUXVlc3Rpb25zRGlyZWN0b3J5SXRlbSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFF1ZXN0aW9uc0RpcmVjdG9yeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGRpc3BhdGNoKGZldGNoUXVlc3Rpb25zKCkpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgaXNGZXRjaGluZywgaXRlbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBxdWVzdGlvbnMgPSBpdGVtcy5tYXAoaSA9PlxuICAgICAgICA8UXVlc3Rpb25zRGlyZWN0b3J5SXRlbSBrZXk9e2kuZGF0YS5faWR9IGl0ZW09e2l9IC8+XG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJRdWVzdGlvbnNcIiBpdGVtcz17cXVlc3Rpb25zfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUucXVlc3Rpb25zLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUucXVlc3Rpb25zLml0ZW1zXG4gICAgfVxuICB9XG4pKFF1ZXN0aW9uc0RpcmVjdG9yeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0RpcmVjdG9yeS9RdWVzdGlvbnNEaXJlY3RvcnkuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBCYWRnZSBmcm9tICcuLi9CYWRnZSdcbmltcG9ydCB7RGlyZWN0b3J5SXRlbSwgRGlyZWN0b3J5SXRlbVRpdGxlLCBEaXJlY3RvcnlJdGVtSW5mb30gZnJvbSAnLi4vRGlyZWN0b3J5SXRlbSdcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHt1cGRhdGVRdWVzdGlvbiwgZGVsZXRlUXVlc3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMnXG5cbmNsYXNzIFF1ZXN0aW9uc0RpcmVjdG9yeUl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMubWFya1NlZW4gPSB0aGlzLm1hcmtTZWVuLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIG1hcmtTZWVuICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIGl0ZW19ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBpc1NlZW46ICFpdGVtLmRhdGEuaXNTZWVuXG4gICAgfVxuXG4gICAgZGlzcGF0Y2godXBkYXRlUXVlc3Rpb24oaXRlbS5kYXRhLl9pZCwgcGF5bG9hZCkpXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaCwgaXRlbX0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaChkZWxldGVRdWVzdGlvbihpdGVtLmRhdGEuX2lkKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW19ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaXJlY3RvcnlJdGVtIGRyYWZ0PXshaXRlbS5kYXRhLmlzU2Vlbn0+XG4gICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJhZGdlIGxhYmVsPXtpdGVtLmRhdGEuaXNTZWVuID8gJ1NlZW4nIDogJ05ldyd9XG4gICAgICAgICAgICAgICAgICB0aGVtZT17aXRlbS5kYXRhLmlzU2VlbiA/ICdkZWZhdWx0JyA6ICdhY2NlbnQyJ30gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPERpcmVjdG9yeUl0ZW1JbmZvPlBvc3RlZCBieSB7aXRlbS5kYXRhLnBvc3Rlck5hbWV9ICh7aXRlbS5kYXRhLnBvc3RlckVtYWlsfSkgb24gPFRpbWUgdmFsdWU9e2l0ZW0uZGF0YS5jcmVhdGVkQXR9IGZvcm1hdD1cIk1NTU0gRG8gWVlZWSAoaDptbSBhKVwiIC8+PC9EaXJlY3RvcnlJdGVtSW5mbz5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgIHtpdGVtLmRhdGEuaXNTZWVuXG4gICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgOiA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2l0ZW0uaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7aXRlbS5kYXRhLnBvc3RlckVtYWlsfT9zdWJqZWN0PVJlcGx5IHRvIHlvdXIgcXVlc3Rpb25zIG9uIGFudGl2YXgmYm9keT1SZXBseSB0byB5b3VyIHF1ZXN0aW9uOlxcbiAke2l0ZW0uZGF0YS5xdWVzdGlvbn1gfT5yZXNwb25kIHZpYSBlbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5tYXJrU2Vlbn0+e2l0ZW0uZGF0YS5pc1NlZW4gPyAnbWFyayBhcyBuZXcnIDogJ21hcmsgYXMgc2Vlbid9PC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpdGVtLmlzVXBkYXRpbmcgfHwgaXRlbS5kYXRhLmlzUHVibGlzaGVkfVxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxEaXJlY3RvcnlJdGVtVGl0bGU+e2l0ZW0uZGF0YS5xdWVzdGlvbn08L0RpcmVjdG9yeUl0ZW1UaXRsZT5cbiAgICAgIDwvRGlyZWN0b3J5SXRlbT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKFF1ZXN0aW9uc0RpcmVjdG9yeUl0ZW0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNEaXJlY3RvcnlJdGVtL1F1ZXN0aW9uc0RpcmVjdG9yeUl0ZW0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IFNjaGVkdWxlQnVpbGRlckl0ZW0gZnJvbSAnLi4vU2NoZWR1bGVCdWlsZGVySXRlbSdcbmltcG9ydCB7SXRlbUZvcm0sIEl0ZW1Gb3JtSGVhZGVyLCBJdGVtRm9ybUJvZHl9IGZyb20gJy4uL0l0ZW1Gb3JtJ1xuaW1wb3J0IHtFZGl0b3IsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0ZsZXgsIEJsb2NrLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge2ZldGNoU2NoZWR1bGUsIHVwZGF0ZVNjaGVkdWxlfSBmcm9tICcuLi8uLi9zdG9yZS9zY2hlZHVsZUFjdGlvbnMnXG5pbXBvcnQge2ZldGNoQXJ0aWNsZXN9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9UaXRsZSdcblxuY2xhc3MgU2NoZWR1bGVCdWlsZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRpc2NhcmQgPSB0aGlzLmRpc2NhcmQuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlSXRlbSA9IHRoaXMuY2hhbmdlSXRlbS5iaW5kKHRoaXMpXG4gICAgdGhpcy5pbnNlcnRJdGVtID0gdGhpcy5pbnNlcnRJdGVtLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGl0ZW1zOiB0aGlzLnByb3BzLml0ZW1zXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hEYXRhfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoRGF0YSgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtpdGVtcywgaXNGZXRjaGluZ1ZhY2NpbmVzLCBpc0ZldGNoaW5nU2NoZWR1bGUsIGlzVXBkYXRpbmd9ID0gbmV3UHJvcHNcblxuICAgIGlmICghaXNVcGRhdGluZyAmJiAhaXNGZXRjaGluZ1ZhY2NpbmVzICYmICFpc0ZldGNoaW5nU2NoZWR1bGUpIHtcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0ge1xuICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgaXRlbXNcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBkaXNjYXJkICgpIHtcbiAgICBjb25zdCB7aXRlbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGl0ZW1zXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUl0ZW0gKHByb3AsIHZhbHVlLCBpbmRleCkge1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLnN0YXRlLml0ZW1zW2luZGV4XVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgLi4udGhpcy5zdGF0ZS5pdGVtcy5zbGljZSgwLCBpbmRleCksXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHRhcmdldEl0ZW0sIHtcbiAgICAgICAgICBbcHJvcF06IHZhbHVlXG4gICAgICAgIH0pLFxuICAgICAgICAuLi50aGlzLnN0YXRlLml0ZW1zLnNsaWNlKGluZGV4ICsgMSlcbiAgICAgIF1cbiAgICB9KVxuICB9XG5cbiAgaW5zZXJ0SXRlbSAoKSB7XG4gICAgY29uc3Qge3ZhY2NpbmVzfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIC4uLnRoaXMuc3RhdGUuaXRlbXMsXG4gICAgICAgIHtcbiAgICAgICAgICBhZ2U6ICcnLFxuICAgICAgICAgIHZhY2NpbmVzOiBbe1xuICAgICAgICAgICAgdXJsOiB2YWNjaW5lc1swXS5kYXRhLnVybCxcbiAgICAgICAgICAgIHRpdGxlOiB2YWNjaW5lc1swXS5kYXRhLnRpdGxlXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgaXNEZWxldGVkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmdWYWNjaW5lcywgaXNGZXRjaGluZ1NjaGVkdWxlLCBpc1VwZGF0aW5nLCB2YWNjaW5lcywgc2F2ZX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZ1ZhY2NpbmVzIHx8IGlzRmV0Y2hpbmdTY2hlZHVsZSkge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBzY2hlZHVsZSA9IHRoaXMuc3RhdGUuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAgPExpc3RJdGVtIG49ezJ9IGtleT17aW5kZXh9PlxuICAgICAgICAgIDxTY2hlZHVsZUJ1aWxkZXJJdGVtXG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgdmFjY2luZXM9e3ZhY2NpbmVzfVxuICAgICAgICAgICAgaXNVcGRhdGluZz17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsocHJvcCwgdikgPT4gdGhpcy5jaGFuZ2VJdGVtKHByb3AsIHYsIGluZGV4KX0gLz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgIClcblxuICAgICAgbGV0IGhlYWRlciA9ICcnXG4gICAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICAgIGhlYWRlciA9IChcbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxUaXRsZSBsYWJlbD1cIlVuc2F2ZWQgQ2hhbmdlc1wiIHRoZW1lPVwiZXJyb3JcIiAvPlxuXG4gICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNhdmUoe1xuICAgICAgICAgICAgICAgICAgICBpdGVtczogdGhpcy5zdGF0ZS5pdGVtc1xuICAgICAgICAgICAgICAgICAgfSl9PlNhdmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kaXNjYXJkfT5EaXNjYXJkPC9CdXR0b24+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXIgPSAoXG4gICAgICAgICAgPFRpdGxlIGxhYmVsPVwiQWxsIFNhdmVkXCIgdGhlbWU9XCJzdWNjZXNzXCIgLz5cbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8SXRlbUZvcm0+XG4gICAgICAgICAgPEl0ZW1Gb3JtSGVhZGVyPlxuICAgICAgICAgICAge2hlYWRlcn1cbiAgICAgICAgICA8L0l0ZW1Gb3JtSGVhZGVyPlxuXG4gICAgICAgICAgPEl0ZW1Gb3JtQm9keT5cbiAgICAgICAgICAgIDxCbG9jayBuPXszfT5cbiAgICAgICAgICAgICAgPExpc3Qgbj17Mn0+XG4gICAgICAgICAgICAgICAge3NjaGVkdWxlfVxuICAgICAgICAgICAgICA8L0xpc3Q+XG5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5pbnNlcnRJdGVtKCl9Pkluc2VydCBuZXcgaXRlbTwvQnV0dG9uPlxuICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICA8L0l0ZW1Gb3JtQm9keT5cbiAgICAgICAgPC9JdGVtRm9ybT5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nVmFjY2luZXM6IHN0YXRlLmFydGljbGVzLmlzRmV0Y2hpbmcsXG4gICAgICBpc0ZldGNoaW5nU2NoZWR1bGU6IHN0YXRlLnNjaGVkdWxlLmlzRmV0Y2hpbmcsXG4gICAgICB2YWNjaW5lczogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gYS5kYXRhLnR5cGUuaWQgPT09ICd2YWNjaW5lcycpLFxuICAgICAgaXNVcGRhdGluZzogc3RhdGUuc2NoZWR1bGUuaXNVcGRhdGluZyxcbiAgICAgIGl0ZW1zOiBzdGF0ZS5zY2hlZHVsZS5pdGVtcy5tYXAoaSA9PiBPYmplY3QuYXNzaWduKHt9LCBpKSlcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgc2F2ZTogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2NoZWR1bGUoZGF0YSkpXG4gICAgICB9LFxuICAgICAgZmV0Y2hEYXRhOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSlcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTY2hlZHVsZSgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTY2hlZHVsZUJ1aWxkZXIpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TY2hlZHVsZUJ1aWxkZXIvU2NoZWR1bGVCdWlsZGVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NjaGVkdWxlQnVpbGRlckl0ZW0uY3NzJ1xuaW1wb3J0IHtJbnB1dCwgU2VsZWN0LCBCdXR0b24sIExpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZSwgQmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jbGFzcyBTY2hlZHVsZUJ1aWxkZXJJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmFkZFZhY2NpbmUgPSB0aGlzLmFkZFZhY2NpbmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlVmFjY2luZSA9IHRoaXMuY2hhbmdlVmFjY2luZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGVWYWNjaW5lID0gdGhpcy5kZWxldGVWYWNjaW5lLmJpbmQodGhpcylcbiAgfVxuXG4gIGFkZFZhY2NpbmUgKCkge1xuICAgIGNvbnN0IHtpdGVtLCB2YWNjaW5lcywgb25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IG5ld1ZhY2NpbmVzID0gW1xuICAgICAgLi4uaXRlbS52YWNjaW5lcyxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6IHZhY2NpbmVzLmxlbmd0aCA+IDAgPyB2YWNjaW5lc1swXS5kYXRhLnRpdGxlIDogJycsXG4gICAgICAgIHVybDogdmFjY2luZXMubGVuZ3RoID4gMCA/IHZhY2NpbmVzWzBdLmRhdGEudXJsIDogJydcbiAgICAgIH1cbiAgICBdXG5cbiAgICBvbkNoYW5nZSgndmFjY2luZXMnLCBuZXdWYWNjaW5lcylcbiAgfVxuXG4gIGNoYW5nZVZhY2NpbmUgKGluZGV4LCB2YWx1ZSkge1xuICAgIGNvbnN0IHtpdGVtLCB2YWNjaW5lcywgb25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRWYWNjaW5lID0gdmFjY2luZXMuZmlsdGVyKHYgPT4gdi5kYXRhLnVybCA9PT0gdmFsdWUpWzBdXG5cbiAgICBjb25zdCBuZXdWYWNjaW5lcyA9IFtcbiAgICAgIC4uLml0ZW0udmFjY2luZXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAge1xuICAgICAgICB0aXRsZTogc2VsZWN0ZWRWYWNjaW5lLmRhdGEudGl0bGUsXG4gICAgICAgIHVybDogc2VsZWN0ZWRWYWNjaW5lLmRhdGEudXJsXG4gICAgICB9LFxuICAgICAgLi4uaXRlbS52YWNjaW5lcy5zbGljZShpbmRleCArIDEpXG4gICAgXVxuXG4gICAgb25DaGFuZ2UoJ3ZhY2NpbmVzJywgbmV3VmFjY2luZXMpXG4gIH1cblxuICBkZWxldGVWYWNjaW5lIChpbmRleCkge1xuICAgIGNvbnN0IHtpdGVtLCBvbkNoYW5nZX0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBuZXdWYWNjaW5lcyA9IFtcbiAgICAgIC4uLml0ZW0udmFjY2luZXMuc2xpY2UoMCwgaW5kZXgpLFxuICAgICAgLi4uaXRlbS52YWNjaW5lcy5zbGljZShpbmRleCArIDEpXG4gICAgXVxuXG4gICAgb25DaGFuZ2UoJ3ZhY2NpbmVzJywgbmV3VmFjY2luZXMpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtLCB2YWNjaW5lcywgaXNVcGRhdGluZywgb25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdmFjY2luZUxpc3QgPSBpdGVtLnZhY2NpbmVzLm1hcCgodiwgaW5kZXgpID0+XG4gICAgICA8QmxvY2sga2V5PXtpbmRleH0+XG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxTZWxlY3RcbiAgICAgICAgICAgICAgbGFiZWw9XCJWYWNjaW5lOlwiXG4gICAgICAgICAgICAgIGxhYmVsUGFyYW1zPXt7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB2YWx1ZT17di51cmx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nIHx8IGl0ZW0uaXNEZWxldGVkfVxuICAgICAgICAgICAgICBhbGxvd0VtcHR5PXtmYWxzZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17dmFjY2luZXMubWFwKHYgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBpZDogdi5kYXRhLnVybCxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiB2LmRhdGEudGl0bGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IHRoaXMuY2hhbmdlVmFjY2luZShpbmRleCwgdil9IC8+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uXG4gICAgICAgICAgICAgIHNtYWxsXG4gICAgICAgICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZyB8fCBpdGVtLmlzRGVsZXRlZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5kZWxldGVWYWNjaW5lKGluZGV4KX0+RGVsZXRlPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIDwvQmxvY2s+XG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSXRlbX0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5JdGVtX2RlbGV0ZWQgOiAnJ31gfT5cbiAgICAgICAgPE1lZGlhPlxuICAgICAgICAgIDxNZWRpYUJvZHk+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkl0ZW1fX2JvZHl9PlxuICAgICAgICAgICAgICA8TWVkaWE+XG4gICAgICAgICAgICAgICAgPE1lZGlhRmlndXJlIG49ezJ9PlxuICAgICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQWdlOlwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUGFyYW1zPXt7d2lkdGg6IDAsIHBhZGRpbmc6IDJ9fVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aXRlbS5hZ2V9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nIHx8IGl0ZW0uaXNEZWxldGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBvbkNoYW5nZSgnYWdlJywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG5cbiAgICAgICAgICAgICAgICA8TWVkaWFCb2R5PlxuICAgICAgICAgICAgICAgICAge3ZhY2NpbmVMaXN0fVxuXG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvblxuICAgICAgICAgICAgICAgICAgICBzbWFsbFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZyB8fCBpdGVtLmlzRGVsZXRlZH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5hZGRWYWNjaW5lfT5BZGQgdmFjY2luZTwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01lZGlhQm9keT5cbiAgICAgICAgICAgICAgPC9NZWRpYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWVkaWFCb2R5PlxuXG4gICAgICAgICAgPE1lZGlhRmlndXJlIG49ezB9IG5sPXsyfT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICB7aXRlbS5pc0RlbGV0ZWRcbiAgICAgICAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JdGVtX19kZWxldGVkSW5mb30+d2lsbCBiZSBkZWxldGVkIG9uIHNhdmU8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgc21hbGxcbiAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgIHRoZW1lPXtpdGVtLmlzRGVsZXRlZCA/ICdhY2NlbnQxJyA6ICdlcnJvcid9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNoYW5nZSgnaXNEZWxldGVkJywgIWl0ZW0uaXNEZWxldGVkKX0+e2l0ZW0uaXNEZWxldGVkID8gJ1B1dCBCYWNrJyA6ICdEZWxldGUnfTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvTWVkaWFGaWd1cmU+XG4gICAgICAgIDwvTWVkaWE+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGVCdWlsZGVySXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2NoZWR1bGVCdWlsZGVySXRlbS9TY2hlZHVsZUJ1aWxkZXJJdGVtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkl0ZW1cIjpcIlNjaGVkdWxlQnVpbGRlckl0ZW1fX0l0ZW1fX18xRV9laVwiLFwiSXRlbV9fZGVsZXRlZEluZm9cIjpcIlNjaGVkdWxlQnVpbGRlckl0ZW1fX0l0ZW1fX2RlbGV0ZWRJbmZvX19fNFNybllcIixcIkl0ZW1fZGVsZXRlZFwiOlwiU2NoZWR1bGVCdWlsZGVySXRlbV9fSXRlbV9kZWxldGVkX19fM0xMcFhcIixcIkl0ZW1fX2JvZHlcIjpcIlNjaGVkdWxlQnVpbGRlckl0ZW1fX0l0ZW1fX2JvZHlfX18zREJ1MlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2NoZWR1bGVCdWlsZGVySXRlbS9TY2hlZHVsZUJ1aWxkZXJJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVpBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQUE7QUFEQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxCQTtBQVBBO0FBNkJBO0FBRUE7QUFoQ0E7QUFtQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF2SEE7QUFDQTtBQXlIQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTs7Ozs7OztBQ3ZLQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQ25FQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkE7QUFEQTtBQVdBO0FBQ0E7Ozs7Ozs7O0FDN0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBRkE7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVZBO0FBYUE7Ozs7QUE1REE7QUFDQTtBQThEQTs7Ozs7OztBQ3BFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQUxBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFQQTtBQVVBOzs7O0FBdkNBO0FBQ0E7QUF5Q0E7Ozs7Ozs7QUMvQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBRkE7QUFIQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXhDQTtBQURBO0FBZ0RBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJEQTtBQXdEQTs7OztBQTNIQTtBQUNBO0FBNkhBOzs7Ozs7O0FDM0lBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FBRkE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBRkE7QUFQQTtBQUFBO0FBQ0E7QUFDQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFSQTtBQUhBO0FBSEE7QUFtQkE7Ozs7QUFsRUE7QUFDQTtBQW9FQTs7Ozs7OztBQzFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVZBO0FBREE7QUF1QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQTVCQTtBQURBO0FBcUNBOzs7O0FBaEdBO0FBQ0E7QUFrR0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1R0E7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWpFQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0xBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBQ0E7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3UkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBQUE7QUFDQTtBQWdCQTtBQUNBO0FBQUE7QUFDQTtBQWpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN1JBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXRCQTtBQXdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUdBO0FBdkJBO0FBQ0E7QUFEQTtBQXdCQTtBQUNBOzs7O0FBOURBO0FBQ0E7QUFnRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBVEE7QUFjQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBVEE7QUFaQTtBQURBO0FBaUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFsQ0E7QUFxQ0E7Ozs7QUFoRUE7QUFDQTtBQWtFQTs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZkE7QUFDQTtBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUMvQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTs7Ozs7OztBQ3BDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBVEE7QUFQQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQVJBO0FBSEE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQW5DQTtBQXhCQTtBQStEQTs7OztBQWhKQTtBQUNBO0FBa0pBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDbEtBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBY0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBRkE7QUFjQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBUkE7QUFIQTtBQXFCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVNBO0FBQ0E7QUFwQ0E7QUFMQTtBQTZDQTs7OztBQWxPQTtBQUNBO0FBb09BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQ3ZQQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBREE7QUFQQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBREE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWZBO0FBREE7QUFzQkE7QUFDQTs7Ozs7Ozs7QUNqSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBQ0E7QUFNQTtBQUdBO0FBQ0E7Ozs7QUE3QkE7QUFDQTtBQStCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBVEE7QUFIQTtBQURBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBWkE7QUF6QkE7QUE0Q0E7Ozs7QUFsRkE7QUFDQTtBQW9GQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQU5BO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBUkE7QUFIQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFoQ0E7QUF4QkE7QUFpRUE7Ozs7QUFwSEE7QUFDQTtBQXNIQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVdBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBUkE7QUFIQTtBQXFCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBSEE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQXhCQTtBQUxBO0FBc0NBOzs7O0FBMUlBO0FBQ0E7QUE0SUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM3SkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTs7OztBQXJCQTtBQUNBO0FBdUJBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU5BO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUpBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQW5CQTtBQVpBO0FBREE7QUEyQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVDQTtBQStDQTs7OztBQTFFQTtBQUNBO0FBNEVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVdBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFVQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFOQTtBQUpBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFIQTtBQUFBO0FBREE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQVZBO0FBSEE7QUF1QkE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFBQTtBQUxBO0FBREE7QUFMQTtBQXFCQTtBQUNBOzs7O0FBbkpBO0FBQ0E7QUFxSkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FDdExBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBQ0E7QUFNQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQWhCQTtBQW1CQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBREE7QUFwQkE7QUFEQTtBQURBO0FBQ0E7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBSEE7QUFWQTtBQURBO0FBREE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQURBO0FBUkE7QUFEQTtBQXpCQTtBQURBO0FBK0NBOzs7O0FBdElBO0FBQ0E7QUF3SUE7Ozs7Ozs7QUMvSUE7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=