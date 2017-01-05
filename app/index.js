webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactRedux = __webpack_require__(469);

	var _reactRouter = __webpack_require__(491);

	var _App = __webpack_require__(544);

	var _App2 = _interopRequireDefault(_App);

	var _QuestionsList = __webpack_require__(646);

	var _QuestionsList2 = _interopRequireDefault(_QuestionsList);

	var _Question = __webpack_require__(759);

	var _Question2 = _interopRequireDefault(_Question);

	var _UsersList = __webpack_require__(761);

	var _UsersList2 = _interopRequireDefault(_UsersList);

	var _EditUserForm = __webpack_require__(766);

	var _EditUserForm2 = _interopRequireDefault(_EditUserForm);

	var _NewUserForm = __webpack_require__(768);

	var _NewUserForm2 = _interopRequireDefault(_NewUserForm);

	var _Sections = __webpack_require__(828);

	var _Sections2 = _interopRequireDefault(_Sections);

	var _SectionsList = __webpack_require__(770);

	var _SectionsList2 = _interopRequireDefault(_SectionsList);

	var _NewSectionForm = __webpack_require__(789);

	var _NewSectionForm2 = _interopRequireDefault(_NewSectionForm);

	var _EditSectionForm = __webpack_require__(792);

	var _EditSectionForm2 = _interopRequireDefault(_EditSectionForm);

	var _Section = __webpack_require__(793);

	var _Section2 = _interopRequireDefault(_Section);

	var _NewArticleForm = __webpack_require__(801);

	var _NewArticleForm2 = _interopRequireDefault(_NewArticleForm);

	var _EditArticleForm = __webpack_require__(803);

	var _EditArticleForm2 = _interopRequireDefault(_EditArticleForm);

	var _SearchIndex = __webpack_require__(804);

	var _SearchIndex2 = _interopRequireDefault(_SearchIndex);

	__webpack_require__(807);

	var _store = __webpack_require__(808);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var store = (0, _store2.default)();
	var Dummy = function Dummy() {
	  return _react2.default.createElement('div', null);
	};

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
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'questions', component: _QuestionsList2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: ':questionId', component: _Question2.default })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'users', component: _UsersList2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _NewUserForm2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':userId', component: _EditUserForm2.default })
	      ),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'sections', component: _Sections2.default },
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { component: _SectionsList2.default },
	          _react2.default.createElement(_reactRouter.IndexRoute, { component: Dummy }),
	          _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _NewSectionForm2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: ':sectionId/edit', component: _EditSectionForm2.default })
	        ),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: ':sectionId', component: _Section2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'articles/new', component: _NewArticleForm2.default }),
	          _react2.default.createElement(_reactRouter.Route, { path: 'articles/:articleId', component: _EditArticleForm2.default })
	        )
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: 'search-index', component: _SearchIndex2.default })
	    )
	  )
		), document.getElementById('app'));

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _FlashMessage = __webpack_require__(545);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Login = __webpack_require__(635);

	var _Login2 = _interopRequireDefault(_Login);

	var _AppHeader = __webpack_require__(639);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	var _authActions = __webpack_require__(636);

	var _App = __webpack_require__(645);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var user = _props.user;
	      var children = _props.children;
	      var attemptingLogin = _props.attemptingLogin;


	      if (attemptingLogin) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        if (user) {
	          return _react2.default.createElement(
	            'div',
	            { className: _App2.default.App },
	            _react2.default.createElement(_AppHeader2.default, null),
	            children,
	            _react2.default.createElement(_FlashMessage2.default, null)
	          );
	        } else {
	          return _react2.default.createElement(
	            'div',
	            null,
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
	    }
	  };
		})(App);

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _UI = __webpack_require__(546);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var FlashMessage = function FlashMessage(_ref) {
	  var message = _ref.message;
	  var type = _ref.type;

	  return _react2.default.createElement(_UI.Alert, { message: message, type: type });
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    message: state.flash.message,
	    type: state.flash.type
	  };
		})(FlashMessage);

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = exports.Editor = exports.Checkbox = exports.Input = exports.ModalWindowFooter = exports.ModalWindowBody = exports.ModalWindowHeader = exports.ModalWindow = exports.Alert = exports.LinkButton = exports.IconButton = exports.Button = exports.Spinner = undefined;

	var _Spinner = __webpack_require__(547);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Button = __webpack_require__(549);

	var _Button2 = _interopRequireDefault(_Button);

	var _IconButton = __webpack_require__(551);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _LinkButton = __webpack_require__(553);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _Alert = __webpack_require__(555);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Input = __webpack_require__(557);

	var _Input2 = _interopRequireDefault(_Input);

	var _Checkbox = __webpack_require__(559);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Editor = __webpack_require__(561);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _Select = __webpack_require__(629);

	var _Select2 = _interopRequireDefault(_Select);

	var _ModalWindow = __webpack_require__(631);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _Spinner2.default;
	exports.Button = _Button2.default;
	exports.IconButton = _IconButton2.default;
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

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(548);

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

/***/ 548:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _Button = __webpack_require__(550);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Button = function Button(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;
	  var _ref$color = _ref.color;
	  var color = _ref$color === undefined ? 'blue' : _ref$color;

	  var className = [_Button2.default.Button];

	  switch (color) {
	    case 'red':
	      className.push(_Button2.default.Button_red);
	      break;
	    case 'green':
	      className.push(_Button2.default.Button_green);
	      break;
	    case 'blue':
	    default:
	      className.push(_Button2.default.Button_blue);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { disabled: disabled, className: className.join(' '), to: to },
	      children
	    );
	  } else if (href) {
	    return _react2.default.createElement(
	      'a',
	      { disabled: disabled, className: className.join(' '), href: href },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'button',
	      { disabled: disabled, className: className.join(' '), onClick: onClick },
	      children
	    );
	  }
	};

	exports.default = Button;

/***/ },

/***/ 550:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___QI7b2","Button_blue":"Button__Button_blue___y-ov2","Button_red":"Button__Button_red___AvQYs","Button_green":"Button__Button_green___y_fe2"};

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _IconButton = __webpack_require__(552);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IconButton = function IconButton(_ref) {
	  var type = _ref.type;
	  var onClick = _ref.onClick;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;

	  var className = [_IconButton2.default.IconButton];

	  switch (type) {
	    case 'delete':
	      className.push(_IconButton2.default.IconButton_delete);
	      break;
	    case 'close':
	      className.push(_IconButton2.default.IconButton_close);
	      break;
	  }

	  if (to) {
	    return _react2.default.createElement(_reactRouter.Link, { disabled: disabled,
	      className: className.join(' '),
	      to: to });
	  } else if (href) {
	    return _react2.default.createElement('a', { disabled: disabled,
	      className: className.join(' '),
	      href: href });
	  } else {
	    return _react2.default.createElement('button', { disabled: disabled,
	      className: className.join(' '),
	      onClick: onClick });
	  }
	};

	exports.default = IconButton;

/***/ },

/***/ 552:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"IconButton":"IconButton__IconButton___GdV7i","IconButton_delete":"IconButton__IconButton_delete___gnNYO","IconButton_close":"IconButton__IconButton_close___29_Ga"};

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _LinkButton = __webpack_require__(554);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LinkButton = function LinkButton(_ref) {
	  var children = _ref.children;
	  var onClick = _ref.onClick;
	  var _ref$disabled = _ref.disabled;
	  var disabled = _ref$disabled === undefined ? false : _ref$disabled;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;
	  var _ref$href = _ref.href;
	  var href = _ref$href === undefined ? null : _ref$href;
	  var _ref$color = _ref.color;
	  var color = _ref$color === undefined ? 'blue' : _ref$color;

	  var classNames = [_LinkButton2.default.LinkButton];

	  switch (color) {
	    case 'red':
	      classNames.push(_LinkButton2.default.LinkButton_red);
	      break;
	    case 'green':
	      classNames.push(_LinkButton2.default.LinkButton_green);
	      break;
	    case 'blue':
	    default:
	      classNames.push(_LinkButton2.default.LinkButton_blue);
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

/***/ 554:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LinkButton":"LinkButton__LinkButton___2Flim","LinkButton_blue":"LinkButton__LinkButton_blue___1W7sl","LinkButton_red":"LinkButton__LinkButton_red___3LuGc","LinkButton_green":"LinkButton__LinkButton_green___3uvrb"};

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(556);

	var _Alert2 = _interopRequireDefault(_Alert);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Alert = function Alert(_ref) {
	  var message = _ref.message;
	  var _ref$type = _ref.type;
	  var type = _ref$type === undefined ? 'log' : _ref$type;

	  var messageClassNames = [_Alert2.default.Alert__message];

	  switch (type) {
	    case 'error':
	      messageClassNames.push(_Alert2.default.Alert__message_error);
	      break;
	    case 'log':
	    default:
	      messageClassNames.push(_Alert2.default.Alert__message_log);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _Alert2.default.Alert },
	    message ? _react2.default.createElement(
	      'div',
	      { className: messageClassNames.join(' ') },
	      message
	    ) : ''
	  );
	};

	exports.default = Alert;

/***/ },

/***/ 556:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_log":"Alert__Alert__message_log___2n5DH","Alert__message_error":"Alert__Alert__message_error___2id4W"};

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(558);

	var _Input2 = _interopRequireDefault(_Input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	      var _props$labelWidth = _props.labelWidth;
	      var labelWidth = _props$labelWidth === undefined ? 8 : _props$labelWidth;
	      var _props$placeholder = _props.placeholder;
	      var placeholder = _props$placeholder === undefined ? '' : _props$placeholder;
	      var _props$type = _props.type;
	      var type = _props$type === undefined ? 'text' : _props$type;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$error = _props.error;
	      var error = _props$error === undefined ? null : _props$error;


	      var errorEl = '';
	      if (error) {
	        errorEl = _react2.default.createElement(
	          'div',
	          { className: _Input2.default.Input__error },
	          error
	        );
	      }

	      return _react2.default.createElement(
	        'label',
	        { className: _Input2.default.Input + ' ' + (error ? _Input2.default.Input_error : '') },
	        label ? _react2.default.createElement(
	          'div',
	          { style: { width: labelWidth + 'rem' }, className: _Input2.default.Input__label },
	          label
	        ) : '',
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

/***/ 558:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___s67N0","Input__label":"Input__Input__label___9JDUu","Input__input":"Input__Input__input___wb1PD","Input__error":"Input__Input__error___fgkCD","Input_error":"Input__Input_error___2JYGy"};

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(560);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	      var label = _props.label;
	      var _props$labelWidth = _props.labelWidth;
	      var labelWidth = _props$labelWidth === undefined ? 8 : _props$labelWidth;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      return _react2.default.createElement(
	        'label',
	        { className: _Checkbox2.default.Checkbox },
	        label ? _react2.default.createElement(
	          'div',
	          { style: { width: labelWidth + 'rem' }, className: _Checkbox2.default.Checkbox__label },
	          label
	        ) : '',
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

/***/ 560:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1JYQg","Checkbox__label":"Checkbox__Checkbox__label___3OBUd","Checkbox__input":"Checkbox__Checkbox__input___1nDMV"};

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _scribeEditor = __webpack_require__(562);

	var _scribeEditor2 = _interopRequireDefault(_scribeEditor);

	var _scribePluginToolbar = __webpack_require__(608);

	var _scribePluginToolbar2 = _interopRequireDefault(_scribePluginToolbar);

	var _scribePluginHeadingCommand = __webpack_require__(609);

	var _scribePluginHeadingCommand2 = _interopRequireDefault(_scribePluginHeadingCommand);

	var _scribePluginLinkPromptCommand = __webpack_require__(610);

	var _scribePluginLinkPromptCommand2 = _interopRequireDefault(_scribePluginLinkPromptCommand);

	var _scribePluginIntelligentUnlinkCommand = __webpack_require__(615);

	var _scribePluginIntelligentUnlinkCommand2 = _interopRequireDefault(_scribePluginIntelligentUnlinkCommand);

	var _Layouts = __webpack_require__(616);

	var _Editor = __webpack_require__(628);

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
	      var label = _props.label;


	      return _react2.default.createElement(
	        'div',
	        { className: _Editor2.default.Editor + ' ' + (error ? _Editor2.default.Editor_error : '') },
	        _react2.default.createElement(
	          'div',
	          { className: '' + _Editor2.default.Editor__label },
	          label
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Editor2.default.Editor__body },
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
	          _react2.default.createElement('div', { className: _Editor2.default.Editor__editor, ref: 'editor' }),
	          _react2.default.createElement(
	            'div',
	            { className: _Editor2.default.Editor__error },
	            error
	          )
	        )
	      );
	    }
	  }]);

	  return Editor;
	}(_react2.default.Component);

		exports.default = Editor;

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(617);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(618);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Wrap = __webpack_require__(619);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _Grid = __webpack_require__(620);

	var _List = __webpack_require__(621);

	var _ListInline = __webpack_require__(623);

	var _Media = __webpack_require__(625);

	var _Page = __webpack_require__(627);

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

/***/ 617:
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

/***/ 618:
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

/***/ 619:
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

/***/ 620:
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

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(622);

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

/***/ 622:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 623:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(624);

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

/***/ 624:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(626);

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

/***/ 626:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 627:
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

/***/ 628:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Editor":"Editor__Editor___3mG0x","Editor__label":"Editor__Editor__label___1hd-U","Editor__body":"Editor__Editor__body___3FufQ","Editor__toolbar":"Editor__Editor__toolbar___2cbgU","Editor__command":"Editor__Editor__command___15KXk","Editor__command_h1":"Editor__Editor__command_h1___2avrE","Editor__command_h2":"Editor__Editor__command_h2___5j-Nt","Editor__command_h3":"Editor__Editor__command_h3___2tAjL","Editor__command_bold":"Editor__Editor__command_bold___3YdJ3","Editor__command_italic":"Editor__Editor__command_italic___1UZA0","Editor__command_ol":"Editor__Editor__command_ol___2RQbn","Editor__command_ul":"Editor__Editor__command_ul___cs9Vd","Editor__command_link":"Editor__Editor__command_link___1_DRv","Editor__command_unlink":"Editor__Editor__command_unlink___3Dw7t","Editor__separator":"Editor__Editor__separator___bf0pe","Editor__editor":"Editor__Editor__editor___1_SxC","Editor__error":"Editor__Editor__error___1nMXd","Editor_error":"Editor__Editor_error___1G66C"};

/***/ },

/***/ 629:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(630);

	var _Select2 = _interopRequireDefault(_Select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	      var _props$labelWidth = _props.labelWidth;
	      var labelWidth = _props$labelWidth === undefined ? 8 : _props$labelWidth;
	      var disabled = _props.disabled;


	      var selectedOption = options.find(function (o) {
	        return o.id === value;
	      });
	      var inputLabel = selectedOption ? selectedOption.label : 'None';

	      return _react2.default.createElement(
	        'div',
	        { className: _Select2.default.Select },
	        label ? _react2.default.createElement(
	          'div',
	          { style: { width: labelWidth + 'rem' }, className: '' + _Select2.default.Select__label },
	          label
	        ) : '',
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
	            options.map(function (o, index) {
	              return _react2.default.createElement(
	                'option',
	                { key: index, value: o.id },
	                o.label
	              );
	            })
	          )
	        )
	      );
	    }
	  }]);

	  return Select;
	}(_react2.default.Component);

		exports.default = Select;

/***/ },

/***/ 630:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__label":"Select__Select__label___1GWvW","Select__wrap":"Select__Select__wrap___wvRax","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7"};

/***/ },

/***/ 631:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(632);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(616);

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

/***/ 632:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(634);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(546);

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

/***/ 634:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 635:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _authActions = __webpack_require__(636);

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

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginWithToken = exports.loginWithCredentials = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(637);

	var _flashActions = __webpack_require__(638);

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

	    fetch(("https://localhost.com") + '/auth/admin/authenticate-credentials', {
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

	    fetch(("https://localhost.com") + '/auth/admin/authenticate-token', {
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

/***/ 638:
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

/***/ 639:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _UserInfo = __webpack_require__(640);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	var _Nav = __webpack_require__(642);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Layouts = __webpack_require__(616);

	var _AppHeader = __webpack_require__(644);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var AppHeader = function AppHeader() {
	  return _react2.default.createElement(
	    'div',
	    { className: _AppHeader2.default.AppHeader },
	    _react2.default.createElement(
	      _Layouts.ListInline,
	      { n: 2 },
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        { n: 2 },
	        _react2.default.createElement(
	          'div',
	          { className: _AppHeader2.default.AppHeader__sitename },
	          'Vaccine Answers Admin'
	        )
	      ),
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        { n: 2 },
	        _react2.default.createElement(_Nav2.default, null)
	      )
	    ),
	    _react2.default.createElement(_UserInfo2.default, null)
	  );
	};

	exports.default = AppHeader;

/***/ },

/***/ 640:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _authActions = __webpack_require__(636);

	var _flashActions = __webpack_require__(638);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _UserInfo = __webpack_require__(641);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UserInfo = function UserInfo(_ref) {
	  var user = _ref.user;
	  var logOut = _ref.logOut;

	  if (user) {
	    return _react2.default.createElement(
	      'div',
	      { className: _UserInfo2.default.UserInfo },
	      _react2.default.createElement(
	        _Layouts.ListInline,
	        null,
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            { n: 0.5 },
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              { n: 0.5 },
	              'Logged in as'
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              { n: 0.5 },
	              _react2.default.createElement(
	                'div',
	                { className: _UserInfo2.default.UserInfo__username },
	                user.name
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.Button,
	            { color: 'red',
	              onClick: logOut },
	            'Log out'
	          )
	        )
	      )
	    );
	  } else {
	    return _react2.default.createElement('div', null);
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.auth.user
	  };
	}, function (dispatch) {
	  return {
	    logOut: function logOut() {
	      dispatch((0, _authActions.logOut)());
	      dispatch((0, _flashActions.flashMessage)('You have been successfully logged out', 'log'));
	    }
	  };
		})(UserInfo);

/***/ },

/***/ 641:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UserInfo":"UserInfo__UserInfo___2SMjJ","UserInfo__username":"UserInfo__UserInfo__username___2zypV"};

/***/ },

/***/ 642:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _Layouts = __webpack_require__(616);

	var _Nav = __webpack_require__(643);

	var _Nav2 = _interopRequireDefault(_Nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Nav = function Nav() {
	  var items = [{
	    label: 'Questions',
	    url: '/questions'
	  }, {
	    label: 'Sections',
	    url: '/sections'
	  }, {
	    label: 'Users',
	    url: '/users'
	  }, {
	    label: 'Search Index',
	    url: '/search-index'
	  }];

	  return _react2.default.createElement(
	    'div',
	    { className: _Nav2.default.Nav },
	    _react2.default.createElement(
	      _Layouts.ListInline,
	      { n: 0.5 },
	      items.map(function (i) {
	        return _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          { n: 0.5, key: i.url },
	          _react2.default.createElement(
	            _reactRouter.Link,
	            { className: _Nav2.default.Nav__item,
	              activeClassName: _Nav2.default.Nav__item_active,
	              to: i.url },
	            i.label
	          )
	        );
	      })
	    )
	  );
	};

	exports.default = Nav;

/***/ },

/***/ 643:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Nav":"Nav__Nav___3Pyye","Nav__item":"Nav__Nav__item___5HbuE","Nav__item_active":"Nav__Nav__item_active___2q4tT"};

/***/ },

/***/ 644:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AppHeader":"AppHeader__AppHeader___2U4KO","AppHeader__sitename":"AppHeader__AppHeader__sitename___3cf-R"};

/***/ },

/***/ 645:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI"};

/***/ },

/***/ 646:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _reactRedux = __webpack_require__(469);

	var _questionsActions = __webpack_require__(647);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _QuestionsListItem = __webpack_require__(648);

	var _QuestionsListItem2 = _interopRequireDefault(_QuestionsListItem);

	var _UI = __webpack_require__(546);

	var _Wrapper = __webpack_require__(785);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(787);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(616);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsList = function (_React$Component) {
	  _inherits(QuestionsList, _React$Component);

	  function QuestionsList() {
	    _classCallCheck(this, QuestionsList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsList).apply(this, arguments));
	  }

	  _createClass(QuestionsList, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var fetchQuestions = this.props.fetchQuestions;


	      fetchQuestions();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var items = _props.items;
	      var isFetching = _props.isFetching;
	      var params = _props.params;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        return _react2.default.createElement(
	          _Wrapper2.default,
	          { dimmed: params.questionId },
	          _react2.default.createElement(
	            _Table2.default,
	            null,
	            _react2.default.createElement(
	              _TableRow2.default,
	              { heading: true },
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { width: 'stretch' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { heading: true, title: true },
	                  'Questions'
	                )
	              ),
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { last: true,
	                  width: '10' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { heading: true },
	                  'posted on'
	                )
	              )
	            ),
	            items.map(function (i, index) {
	              if (i.data._id === params.questionId) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: index },
	                  children
	                );
	              }
	              return _react2.default.createElement(_QuestionsListItem2.default, { key: index,
	                question: i,
	                disableInteraction: params.questionId });
	            })
	          )
	        );
	      }
	    }
	  }]);

	  return QuestionsList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    items: state.questions.items,
	    isFetching: state.questions.isFetching
	  };
	}, function (dispatch) {
	  return {
	    fetchQuestions: function fetchQuestions() {
	      dispatch((0, _questionsActions.fetchQuestions)());
	    }
	  };
		})(QuestionsList);

/***/ },

/***/ 647:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteQuestion = exports.updateQuestion = exports.fetchQuestions = exports.REJECT_DELETE_QUESTION = exports.CONFIRM_DELETE_QUESTION = exports.REQUEST_DELETE_QUESTION = exports.RECEIVE_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = exports.RECEIVE_QUESTIONS = exports.REQUEST_QUESTIONS = undefined;

	__webpack_require__(637);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(638);

	var _authActions = __webpack_require__(636);

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

	    fetch(("https://localhost.com") + '/questions/', {
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

	    fetch(("https://localhost.com") + '/questions/' + id, {
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

	    fetch(("https://localhost.com") + '/questions/' + id, {
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
	        _reactRouter.hashHistory.push('/questions/');
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

/***/ 648:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Icon = __webpack_require__(781);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _QuestionsListItem = __webpack_require__(757);

	var _QuestionsListItem2 = _interopRequireDefault(_QuestionsListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuestionsListItem = function QuestionsListItem(_ref) {
	  var question = _ref.question;
	  var disableInteraction = _ref.disableInteraction;

	  var truncatedText = question.data.question.slice(3, Math.min(question.data.question.length - 3, 70)) + '..';

	  return _react2.default.createElement(
	    _TableRow2.default,
	    { interactive: !disableInteraction },
	    _react2.default.createElement(
	      _TableColumn2.default,
	      null,
	      _react2.default.createElement(_Icon2.default, { type: 'envelope' })
	    ),
	    _react2.default.createElement(
	      _TableColumn2.default,
	      { width: '10' },
	      _react2.default.createElement(
	        _TableCell2.default,
	        { title: true,
	          to: disableInteraction ? null : '/questions/' + question.data._id },
	        question.data.posterName
	      )
	    ),
	    _react2.default.createElement(
	      _TableColumn2.default,
	      { width: 'stretch' },
	      _react2.default.createElement(
	        _TableCell2.default,
	        { to: disableInteraction ? null : '/questions/' + question.data._id },
	        truncatedText
	      )
	    ),
	    _react2.default.createElement(
	      _TableColumn2.default,
	      { width: '10' },
	      question.data.isSeen ? '' : _react2.default.createElement(
	        'div',
	        { className: _QuestionsListItem2.default.Badge },
	        _react2.default.createElement(_Badge2.default, { label: 'Not Answered', color: 'red' })
	      )
	    ),
	    _react2.default.createElement(
	      _TableColumn2.default,
	      { last: true,
	        width: '10' },
	      _react2.default.createElement(
	        _TableCell2.default,
	        null,
	        _react2.default.createElement(_reactTime2.default, { value: question.data.createdAt, format: 'h:mm A on MMM Do' })
	      )
	    )
	  );
	};

	exports.default = QuestionsListItem;

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(756);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Badge = function Badge(_ref) {
	  var label = _ref.label;
	  var _ref$color = _ref.color;
	  var color = _ref$color === undefined ? 'blue' : _ref$color;

	  var classNames = [_Badge2.default.Badge];
	  switch (color) {
	    case 'red':
	      classNames.push(_Badge2.default.Badge_red);
	      break;
	    case 'green':
	      classNames.push(_Badge2.default.Badge_green);
	      break;
	    case 'blue':
	    default:
	      classNames.push(_Badge2.default.Badge_blue);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: classNames.join(' ') },
	    label
	  );
	};

	exports.default = Badge;

/***/ },

/***/ 756:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Badge":"Badge__Badge___33eQR","Badge_blue":"Badge__Badge_blue___z33Rl","Badge_red":"Badge__Badge_red___3ZrSl","Badge_green":"Badge__Badge_green___o4HV6"};

/***/ },

/***/ 757:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"QuestionsListItem":"QuestionsListItem__QuestionsListItem___29rxy"};

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _reactRedux = __webpack_require__(469);

	var _reactRouter = __webpack_require__(491);

	var _questionsActions = __webpack_require__(647);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Question = __webpack_require__(760);

	var _Question2 = _interopRequireDefault(_Question);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Question = function (_React$Component) {
	  _inherits(Question, _React$Component);

	  function Question(props) {
	    _classCallCheck(this, Question);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Question).call(this, props));

	    _this.delete = _this.delete.bind(_this);
	    _this.toggleAnswered = _this.toggleAnswered.bind(_this);
	    return _this;
	  }

	  _createClass(Question, [{
	    key: 'delete',
	    value: function _delete() {
	      var _props = this.props;
	      var deleteQuestion = _props.deleteQuestion;
	      var question = _props.question;


	      deleteQuestion(question.data._id);
	    }
	  }, {
	    key: 'toggleAnswered',
	    value: function toggleAnswered() {
	      var _props2 = this.props;
	      var updateQuestion = _props2.updateQuestion;
	      var question = _props2.question;


	      updateQuestion(question.data._id, {
	        isSeen: !question.data.isSeen
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var question = this.props.question;


	      var actions = _react2.default.createElement(
	        _Layouts.ListInline,
	        null,
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.Button,
	            {
	              disabled: question.data.isUpdating,
	              href: 'mailto:' + question.data.posterEmail + '?subject=Reply to your questions on Vaccine Answers' },
	            'Reply via email'
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { disabled: question.data.isUpdating,
	              onClick: this.toggleAnswered },
	            'Mark as answered'
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { disabled: question.data.isUpdating,
	              to: '/questions' },
	            'Close'
	          )
	        )
	      );
	      if (question.data.isSeen) {
	        actions = _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: question.data.isUpdating,
	                color: 'red',
	                onClick: this.toggleAnswered },
	              'Mark as not answered'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: question.data.isUpdating,
	                to: '/questions' },
	              'Close'
	            )
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { ref: function ref(el) {
	            _this2._element = el;
	          },
	          className: _Question2.default.Question },
	        _react2.default.createElement(
	          'div',
	          { ref: function ref(el) {
	              _this2._body = el;
	            },
	            className: _Question2.default.Question__body },
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(
	              _Layouts.Flex,
	              { justifyContent: 'space-between' },
	              _react2.default.createElement(
	                'div',
	                { className: _Question2.default.Name },
	                question.data.posterName
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInline,
	                null,
	                _react2.default.createElement(
	                  _Layouts.ListInlineItem,
	                  null,
	                  question.data.isSeen ? '' : _react2.default.createElement(_Badge2.default, { label: 'Not Answered', color: 'red' })
	                ),
	                _react2.default.createElement(
	                  _Layouts.ListInlineItem,
	                  null,
	                  _react2.default.createElement(
	                    'div',
	                    { className: _Question2.default.Timestamp },
	                    _react2.default.createElement(_reactTime2.default, { value: question.data.createdAt, format: 'h:mm A on MMM Do' })
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _Question2.default.Email },
	              question.data.posterEmail
	            )
	          ),
	          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: question.data.question } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _Question2.default.Question__footer },
	          actions,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_UI.IconButton, { type: 'delete',
	              disabled: question.data.isUpdating,
	              onClick: this.delete })
	          )
	        )
	      );
	    }
	  }]);

	  return Question;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var questionId = ownProps.params.questionId;


	  return {
	    question: state.questions ? state.questions.items.find(function (i) {
	      return i.data._id === questionId;
	    }) : { data: {} }
	  };
	}, function (dispatch) {
	  return {
	    deleteQuestion: function deleteQuestion(id) {
	      dispatch((0, _questionsActions.deleteQuestion)(id));
	    },
	    updateQuestion: function updateQuestion(id, data) {
	      dispatch((0, _questionsActions.updateQuestion)(id, data));
	    }
	  };
		})(Question);

/***/ },

/***/ 760:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Question":"Question__Question___1ibu6","Question__body":"Question__Question__body___2R4pe","Question__footer":"Question__Question__footer___4VWYy","Name":"Question__Name___14bOP","Email":"Question__Email___1D3Op","Timestamp":"Question__Timestamp___2rswh"};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _usersActions = __webpack_require__(762);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UsersListItem = __webpack_require__(763);

	var _UsersListItem2 = _interopRequireDefault(_UsersListItem);

	var _UI = __webpack_require__(546);

	var _Wrapper = __webpack_require__(785);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(787);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(616);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersList = function (_React$Component) {
	  _inherits(UsersList, _React$Component);

	  function UsersList() {
	    _classCallCheck(this, UsersList);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UsersList).apply(this, arguments));
	  }

	  _createClass(UsersList, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var fetchUsers = this.props.fetchUsers;


	      fetchUsers();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var children = _props.children;
	      var items = _props.items;
	      var isFetching = _props.isFetching;
	      var params = _props.params;
	      var location = _props.location;

	      var isNewUserForm = location.pathname === '/users/new';
	      var disableInteraction = isNewUserForm || params.userId;

	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        return _react2.default.createElement(
	          _Wrapper2.default,
	          { dimmed: disableInteraction },
	          _react2.default.createElement(
	            _Table2.default,
	            null,
	            _react2.default.createElement(
	              _TableRow2.default,
	              { heading: true },
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { width: 'stretch' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { heading: true, title: true },
	                  'Users'
	                )
	              ),
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { width: '25' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { heading: true },
	                  'last seen'
	                )
	              ),
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { last: true, width: '10' },
	                disableInteraction ? '' : _react2.default.createElement(
	                  _Layouts.Flex,
	                  { justifyContent: 'flex-end' },
	                  _react2.default.createElement(
	                    _UI.LinkButton,
	                    { to: '/users/new' },
	                    'add new user'
	                  )
	                )
	              )
	            ),
	            isNewUserForm ? children : '',
	            items.map(function (u, index) {
	              if (u.data._id === params.userId) {
	                return _react2.default.createElement(
	                  'div',
	                  { key: index },
	                  children
	                );
	              } else {
	                return _react2.default.createElement(_UsersListItem2.default, { key: index,
	                  user: u,
	                  disableInteraction: disableInteraction });
	              }
	            })
	          )
	        );
	      }
	    }
	  }]);

	  return UsersList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    items: state.users.items,
	    isFetching: state.users.isFetching
	  };
	}, function (dispatch) {
	  return {
	    fetchUsers: function fetchUsers() {
	      dispatch((0, _usersActions.fetchUsers)());
	    }
	  };
		})(UsersList);

/***/ },

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteUser = exports.createUser = exports.updateUser = exports.fetchUsers = exports.REJECT_DELETE_USER = exports.CONFIRM_DELETE_USER = exports.REQUEST_DELETE_USER = exports.REJECT_CREATE_USER = exports.CONFIRM_CREATE_USER = exports.REQUEST_CREATE_USER = exports.REJECT_UPDATE_USER = exports.CONFIRM_UPDATE_USER = exports.REQUEST_UPDATE_USER = exports.RECEIVE_USERS = exports.REQUEST_USERS = undefined;

	__webpack_require__(637);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(638);

	var _authActions = __webpack_require__(636);

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

	    fetch(("https://localhost.com") + '/users/', {
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

	var updateUser = exports.updateUser = function updateUser(id, data) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://localhost.com") + '/users/' + id, {
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
	        _reactRouter.hashHistory.push('/users/');
	        dispatch(confirmUpdate(id, json.data.user));
	        dispatch((0, _flashActions.flashMessage)('User updated successfully', 'log'));
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

	    fetch(("https://localhost.com") + '/users', {
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
	        _reactRouter.hashHistory.push('/users/');
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

	    fetch(("https://localhost.com") + '/users/' + id, {
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
	        _reactRouter.hashHistory.push('/users/');
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

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Icon = __webpack_require__(781);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _UsersListItem = __webpack_require__(764);

	var _UsersListItem2 = _interopRequireDefault(_UsersListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var UsersListItem = function UsersListItem(_ref) {
	  var user = _ref.user;
	  var disableInteraction = _ref.disableInteraction;

	  var icon = null;
	  if (user.data.isEnabled) {
	    if (user.data.admin) {
	      icon = 'user-admin';
	    } else {
	      icon = 'user';
	    }
	  } else {
	    icon = 'user-disabled';
	  }

	  var timestamp = '';
	  if (user.data.lastLoggedInAt) {
	    timestamp = _react2.default.createElement(_reactTime2.default, { value: user.data.lastLoggedInAt, format: 'MMM Do h:mm A' });
	  } else {
	    timestamp = 'never logged in';
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _UsersListItem2.default.UsersListItem + '\n      ' + (disableInteraction ? '' : _UsersListItem2.default.UsersListItem_interactive) },
	    _react2.default.createElement(
	      _TableRow2.default,
	      { interactive: !disableInteraction },
	      _react2.default.createElement(
	        _TableColumn2.default,
	        null,
	        _react2.default.createElement(_Icon2.default, { type: icon })
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: 'stretch' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          { title: true },
	          user.data.name
	        ),
	        _react2.default.createElement(
	          _TableCell2.default,
	          null,
	          '(',
	          user.data.email,
	          ')'
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '15' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          null,
	          timestamp
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '15' },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          null,
	          user.data.admin ? _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.Badge },
	            _react2.default.createElement(_Badge2.default, { label: 'Admin', color: 'green' })
	          ) : '',
	          !user.data.isEnabled ? _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.Badge },
	            _react2.default.createElement(_Badge2.default, { label: 'Disabled', color: 'red' })
	          ) : ''
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { last: true,
	          width: '5' },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          disableInteraction ? '' : _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.UsersListItem__actions },
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { to: '/users/' + user.data._id },
	              'edit'
	            )
	          )
	        )
	      )
	    )
	  );
	};

	exports.default = UsersListItem;

/***/ },

/***/ 764:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UsersListItem":"UsersListItem__UsersListItem___1joA7","UsersListItem__actions":"UsersListItem__UsersListItem__actions___GeLS1","UsersListItem_interactive":"UsersListItem__UsersListItem_interactive___3UkEf"};

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _usersActions = __webpack_require__(762);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _EditUserForm = __webpack_require__(767);

	var _EditUserForm2 = _interopRequireDefault(_EditUserForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditUserForm = function (_React$Component) {
	  _inherits(EditUserForm, _React$Component);

	  function EditUserForm(props) {
	    _classCallCheck(this, EditUserForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditUserForm).call(this, props));

	    _this.delete = _this.delete.bind(_this);
	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);
	    _this.cancel = _this.cancel.bind(_this);

	    _this.state = {
	      isDirty: false,
	      data: _extends({}, props.user.data, {
	        password: ''
	      }),
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(EditUserForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$user = newProps.user;
	      var errors = _newProps$user.errors;
	      var data = _newProps$user.data;
	      var isUpdating = _newProps$user.isUpdating;


	      if (!isUpdating) {
	        var newState = {};

	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          newState = {
	            isDirty: false,
	            data: _extends({}, data, {
	              password: ''
	            }),
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
	      var _props = this.props;
	      var id = _props.user.data._id;
	      var updateUser = _props.updateUser;

	      var payload = _extends(this.state.data);

	      if (!payload.password) {
	        delete payload.password;
	      }

	      updateUser(id, payload);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      var user = this.props.user.data;


	      this.setState({
	        isDirty: false,
	        data: _extends({}, user, {
	          password: ''
	        }),
	        errors: {}
	      });
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
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var deleteUser = _props2.deleteUser;
	      var id = _props2.user.data._id;


	      deleteUser(id);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var isUpdating = this.props.user.isUpdating;


	      var actions = _react2.default.createElement(
	        _Layouts.ListInline,
	        null,
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.Button,
	            { disabled: true },
	            'All Saved'
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { disabled: isUpdating,
	              color: 'blue',
	              to: '/users/' },
	            'Close'
	          )
	        )
	      );
	      if (this.state.isDirty) {
	        actions = _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.Button,
	              { disabled: isUpdating,
	                onClick: this.save },
	              'Save Changes'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: isUpdating,
	                color: 'red',
	                to: '/users/' },
	              'Discard Changes'
	            )
	          )
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _EditUserForm2.default.EditUserForm },
	        _react2.default.createElement(
	          'div',
	          { className: _EditUserForm2.default.EditUserForm__body },
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
	          _react2.default.createElement(_UI.Checkbox, { label: 'Admin',
	            checked: this.state.data.admin,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('admin', value);
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _EditUserForm2.default.EditUserForm__footer },
	          actions,
	          _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(_UI.IconButton, { type: 'delete',
	              disabled: isUpdating,
	              onClick: this.delete })
	          )
	        )
	      );
	    }
	  }]);

	  return EditUserForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var userId = ownProps.params.userId;


	  return {
	    user: state.users ? state.users.items.find(function (i) {
	      return i.data._id === userId;
	    }) : { data: {}, isUpdating: true }
	  };
	}, function (dispatch) {
	  return {
	    deleteUser: function deleteUser(id) {
	      dispatch((0, _usersActions.deleteUser)(id));
	    },
	    updateUser: function updateUser(id, data) {
	      dispatch((0, _usersActions.updateUser)(id, data));
	    }
	  };
		})(EditUserForm);

/***/ },

/***/ 767:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"EditUserForm":"EditUserForm__EditUserForm___34UyP","EditUserForm__body":"EditUserForm__EditUserForm__body___1Ujl7","EditUserForm__footer":"EditUserForm__EditUserForm__footer___3tJSw"};

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _usersActions = __webpack_require__(762);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _NewUserForm = __webpack_require__(769);

	var _NewUserForm2 = _interopRequireDefault(_NewUserForm);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewUserForm = function (_React$Component) {
	  _inherits(NewUserForm, _React$Component);

	  function NewUserForm(props) {
	    _classCallCheck(this, NewUserForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewUserForm).call(this, props));

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

	  _createClass(NewUserForm, [{
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
	      var createUser = this.props.createUser;


	      createUser(this.state.data);
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
	        'div',
	        { className: _NewUserForm2.default.NewUserForm },
	        _react2.default.createElement(
	          'div',
	          { className: _NewUserForm2.default.NewUserForm__body },
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
	          _react2.default.createElement(_UI.Checkbox, { label: 'Admin',
	            checked: this.state.data.admin,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('admin', value);
	            } })
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _NewUserForm2.default.NewUserForm__footer },
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                { disabled: isUpdating,
	                  onClick: this.save },
	                'Create'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.LinkButton,
	                { disabled: isUpdating,
	                  color: 'red',
	                  to: '/users/' },
	                'Cancel'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NewUserForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    item: state.users ? state.users.newUser : { data: {}, isUpdating: true, errors: {} }
	  };
	}, function (dispatch) {
	  return {
	    createUser: function createUser(id, data) {
	      dispatch((0, _usersActions.createUser)(id, data));
	    }
	  };
		})(NewUserForm);

/***/ },

/***/ 769:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"NewUserForm":"NewUserForm__NewUserForm___HKLQg","NewUserForm__body":"NewUserForm__NewUserForm__body___hYcMF","NewUserForm__footer":"NewUserForm__NewUserForm__footer___1vS6f"};

/***/ },

/***/ 770:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _reactSortable = __webpack_require__(771);

	var _sectionsActions = __webpack_require__(773);

	var _SectionsListItem = __webpack_require__(774);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	var _UI = __webpack_require__(546);

	var _SubSectionsList = __webpack_require__(784);

	var _SubSectionsList2 = _interopRequireDefault(_SubSectionsList);

	var _Wrapper = __webpack_require__(785);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(787);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(616);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SortableListItem = (0, _reactSortable.sortable)(function (props) {
	  return _react2.default.createElement(
	    'div',
	    props,
	    props.children
	  );
	});

	var SectionsList = function (_React$Component) {
	  _inherits(SectionsList, _React$Component);

	  function SectionsList(props) {
	    _classCallCheck(this, SectionsList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SectionsList).call(this, props));

	    _this.updateState = _this.updateState.bind(_this);

	    _this.state = {
	      draggingIndex: null,
	      data: {
	        items: props.metaSection.data.children
	      }
	    };
	    return _this;
	  }

	  _createClass(SectionsList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState({
	        data: {
	          items: newProps.metaSection.data.children
	        }
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(obj) {
	      if (obj.draggingIndex === null) {
	        var _props = this.props;
	        var metaSection = _props.metaSection;
	        var _updateSection = _props.updateSection;


	        _updateSection(metaSection.data._id, {
	          children: this.state.data.items
	        });
	      }

	      this.setState(obj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var children = _props2.children;
	      var metaSection = _props2.metaSection;
	      var sections = _props2.sections;
	      var location = _props2.location;
	      var params = _props2.params;


	      var isNewSectionRoute = location.pathname === '/sections/new';
	      var isEditSectionRoute = location.pathname === '/sections/' + params.sectionId + '/edit';
	      var disableInteraction = isNewSectionRoute || isEditSectionRoute;

	      return _react2.default.createElement(
	        _Wrapper2.default,
	        { dimmed: disableInteraction },
	        _react2.default.createElement(
	          _Table2.default,
	          null,
	          _react2.default.createElement(
	            _TableRow2.default,
	            { heading: true },
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { width: 'stretch' },
	              _react2.default.createElement(
	                _TableCell2.default,
	                { heading: true, title: true },
	                metaSection.data.title
	              )
	            ),
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { width: '20' },
	              _react2.default.createElement(
	                _TableCell2.default,
	                { heading: true },
	                'url'
	              )
	            ),
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { last: true,
	                width: '15' },
	              disableInteraction ? '' : _react2.default.createElement(
	                _Layouts.Flex,
	                { justifyContent: 'flex-end' },
	                _react2.default.createElement(
	                  _UI.LinkButton,
	                  { to: '/sections/new?parentId=' + metaSection.data._id },
	                  'add new section'
	                )
	              )
	            )
	          ),
	          isNewSectionRoute && location.query.parentId === metaSection.data._id ? children : '',
	          this.state.data.items.map(function (sectionId, i) {
	            if (isEditSectionRoute && sectionId === params.sectionId) {
	              return _react2.default.createElement(
	                'div',
	                { key: i },
	                children
	              );
	            } else {
	              var _ret = function () {
	                var section = sections.find(function (s) {
	                  return s.data._id === sectionId;
	                });
	                var subsections = sections.filter(function (s) {
	                  return section.data.children.indexOf(s.data._id) !== -1;
	                });

	                var subsectionsList = _react2.default.createElement(_SubSectionsList2.default, { section: section,
	                  subsections: subsections,
	                  children: children,
	                  params: params,
	                  location: location });

	                if (disableInteraction) {
	                  return {
	                    v: _react2.default.createElement(
	                      'div',
	                      { key: i },
	                      _react2.default.createElement(_SectionsListItem2.default, {
	                        section: section,
	                        parent: metaSection,
	                        disableInteraction: disableInteraction || _this2.state.draggingIndex !== null }),
	                      subsectionsList
	                    )
	                  };
	                } else {
	                  return {
	                    v: _react2.default.createElement(
	                      SortableListItem,
	                      { key: i,
	                        updateState: _this2.updateState,
	                        items: _this2.state.data.items,
	                        draggingIndex: _this2.state.draggingIndex,
	                        sortId: i,
	                        outline: 'list' },
	                      _react2.default.createElement(_SectionsListItem2.default, { section: section,
	                        parent: metaSection,
	                        disableInteraction: disableInteraction || _this2.state.draggingIndex !== null }),
	                      subsectionsList
	                    )
	                  };
	                }
	              }();

	              if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return SectionsList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var metaSection = state.sections.items.find(function (s) {
	    return s.data.url === 'main-nav' && s.data.sectionType === 'meta';
	  });

	  return {
	    sections: state.sections.items,
	    metaSection: metaSection
	  };
	}, function (dispatch) {
	  return {
	    updateSection: function updateSection(id, data) {
	      dispatch((0, _sectionsActions.updateSection)(id, data));
	    }
	  };
		})(SectionsList);

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteSection = exports.createSection = exports.updateSection = exports.fetchSections = exports.REJECT_DELETE_SECTION = exports.CONFIRM_DELETE_SECTION = exports.REQUEST_DELETE_SECTION = exports.REJECT_CREATE_SECTION = exports.CONFIRM_CREATE_SECTION = exports.REQUEST_CREATE_SECTION = exports.REJECT_UPDATE_SECTION = exports.CONFIRM_UPDATE_SECTION = exports.REQUEST_UPDATE_SECTION = exports.RECEIVE_SECTIONS = exports.REQUEST_SECTIONS = undefined;

	__webpack_require__(637);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(638);

	var _authActions = __webpack_require__(636);

	var REQUEST_SECTIONS = exports.REQUEST_SECTIONS = 'REQUEST_SECTIONS';
	var RECEIVE_SECTIONS = exports.RECEIVE_SECTIONS = 'RECEIVE_SECTIONS';

	var REQUEST_UPDATE_SECTION = exports.REQUEST_UPDATE_SECTION = 'REQUEST_UPDATE_SECTION';
	var CONFIRM_UPDATE_SECTION = exports.CONFIRM_UPDATE_SECTION = 'CONFIRM_UPDATE_SECTION';
	var REJECT_UPDATE_SECTION = exports.REJECT_UPDATE_SECTION = 'REJECT_UPDATE_SECTION';

	var REQUEST_CREATE_SECTION = exports.REQUEST_CREATE_SECTION = 'CREATE_SECTION';
	var CONFIRM_CREATE_SECTION = exports.CONFIRM_CREATE_SECTION = 'CONFIRM_CREATE_SECTION';
	var REJECT_CREATE_SECTION = exports.REJECT_CREATE_SECTION = 'REJECT_CREATE_SECTION';

	var REQUEST_DELETE_SECTION = exports.REQUEST_DELETE_SECTION = 'REQUEST_DELETE_SECTION';
	var CONFIRM_DELETE_SECTION = exports.CONFIRM_DELETE_SECTION = 'CONFIRM_DELETE_SECTION';
	var REJECT_DELETE_SECTION = exports.REJECT_DELETE_SECTION = 'REJECT_DELETE_SECTION';

	var requestSections = function requestSections() {
	  return {
	    type: REQUEST_SECTIONS
	  };
	};

	var receiveSections = function receiveSections(items) {
	  return {
	    type: RECEIVE_SECTIONS,
	    items: items
	  };
	};

	var fetchSections = exports.fetchSections = function fetchSections() {
	  return function (dispatch, getState) {
	    dispatch(requestSections());

	    fetch(("https://localhost.com") + '/sections/', {
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
	        dispatch(receiveSections(json.data.items));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_UPDATE_SECTION,
	    id: id
	  };
	};

	var receiveUpdate = function receiveUpdate(id, item) {
	  return {
	    type: CONFIRM_UPDATE_SECTION,
	    id: id,
	    item: item
	  };
	};

	var receiveErrors = function receiveErrors(id, errors) {
	  return {
	    type: REJECT_UPDATE_SECTION,
	    id: id,
	    errors: errors
	  };
	};

	var updateSection = exports.updateSection = function updateSection(id, data, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://localhost.com") + '/sections/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        section: data
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
	        dispatch(receiveUpdate(id, json.data.section));
	        dispatch((0, _flashActions.flashMessage)('Section was successfully updated', 'log'));
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
	        }
	      } else if (json.data.name === 'ValidationError') {
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(receiveErrors(id, payload));
	        dispatch((0, _flashActions.flashMessage)('Could not update section due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestCreate = function requestCreate() {
	  return {
	    type: REQUEST_CREATE_SECTION
	  };
	};

	var confirmCreate = function confirmCreate(item) {
	  return {
	    type: CONFIRM_CREATE_SECTION,
	    item: item
	  };
	};

	var rejectCreate = function rejectCreate(errors) {
	  return {
	    type: REJECT_CREATE_SECTION,
	    errors: errors
	  };
	};

	var createSection = exports.createSection = function createSection(data, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate());

	    fetch(("https://localhost.com") + '/sections/', {
	      method: 'POST',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': localStorage.getItem('antiVax_auth_token')
	      },
	      body: JSON.stringify({
	        section: data
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
	        dispatch(confirmCreate(json.data.section));
	        dispatch(receiveUpdate(json.data.parent._id, json.data.parent));
	        dispatch((0, _flashActions.flashMessage)('Section created successfully', 'log'));
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
	        }
	      } else if (json.data.name === 'ValidationError') {
	        // TODO: test validation errors
	        var payload = {};

	        for (var prop in json.data.errors) {
	          payload[prop] = json.data.errors[prop].message;
	        }

	        dispatch(rejectCreate(payload));
	        dispatch((0, _flashActions.flashMessage)('Could not create section due to errors', 'error'));
	      } else {
	        console.error(json.data);
	        dispatch((0, _flashActions.flashMessage)('Oops, something went wrong :()', 'error'));
	      }
	    });
	  };
	};

	var requestDelete = function requestDelete(id) {
	  return {
	    type: REQUEST_DELETE_SECTION,
	    id: id
	  };
	};

	var confirmDelete = function confirmDelete(id) {
	  return {
	    type: CONFIRM_DELETE_SECTION,
	    id: id
	  };
	};

	var rejectDelete = function rejectDelete(id) {
	  return {
	    type: REJECT_DELETE_SECTION,
	    id: id
	  };
	};

	var deleteSection = exports.deleteSection = function deleteSection(id, children, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestDelete(id));

	    fetch(("https://localhost.com") + '/sections/' + id, {
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
	        dispatch(receiveUpdate(json.data.parent._id, json.data.parent));
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
	        }
	        dispatch(confirmDelete(id));
	        children.map(function (c) {
	          return confirmDelete(c);
	        });
	        dispatch((0, _flashActions.flashMessage)('Section was deleted', 'log'));
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

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Icon = __webpack_require__(781);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _SectionsListItem = __webpack_require__(783);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SectionsListItem = function SectionsListItem(_ref) {
	  var section = _ref.section;
	  var parent = _ref.parent;
	  var disableInteraction = _ref.disableInteraction;

	  var icon = null;
	  if (section.data.sectionType === 'parent') {
	    icon = 'folder';
	  } else if (section.data.sectionType === 'custom') {
	    icon = 'file-code';
	  } else if (section.data.sectionType === 'articles') {
	    icon = 'file-text';
	  } else if (section.data.sectionType === 'blogposts') {
	    icon = 'file-blogpost';
	  }

	  var url = '';
	  if (parent.data.sectionType === 'meta') {
	    url = '/' + section.data.url;
	  } else {
	    url = '/' + parent.data.url + '/' + section.data.url;
	  }

	  var actions = '';
	  if (!disableInteraction) {
	    if (section.data.sectionType === 'parent') {
	      actions = _react2.default.createElement(
	        'div',
	        { className: _SectionsListItem2.default.SectionsListItem__actions },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/new?parentId=' + section.data._id },
	            'add new sub-section'
	          ),
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/' + section.data._id + '/edit' },
	            'edit'
	          )
	        )
	      );
	    } else {
	      actions = _react2.default.createElement(
	        'div',
	        { className: _SectionsListItem2.default.SectionsListItem__actions },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/' + section.data._id + '/edit' },
	            'edit'
	          )
	        )
	      );
	    }
	  }

	  var sectionLink = '';
	  if (!disableInteraction && section.data.sectionType !== 'parent') {
	    sectionLink = '/sections/' + section.data._id;
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _SectionsListItem2.default.SectionsListItem + '\n      ' + (disableInteraction ? '' : _SectionsListItem2.default.SectionsListItem_interactive) },
	    _react2.default.createElement(
	      _TableRow2.default,
	      { interactive: !disableInteraction,
	        indented: parent.data.sectionType !== 'meta' },
	      _react2.default.createElement(
	        _TableColumn2.default,
	        null,
	        _react2.default.createElement(_Icon2.default, { type: icon })
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: 'stretch' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          { title: true,
	            to: sectionLink },
	          section.data.title
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '20' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          null,
	          url
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '15',
	          last: true },
	        actions
	      )
	    )
	  );
	};

	exports.default = SectionsListItem;

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(776);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableRow = function TableRow(_ref) {
	  var children = _ref.children;
	  var _ref$interactive = _ref.interactive;
	  var interactive = _ref$interactive === undefined ? false : _ref$interactive;
	  var _ref$heading = _ref.heading;
	  var heading = _ref$heading === undefined ? false : _ref$heading;
	  var _ref$indented = _ref.indented;
	  var indented = _ref$indented === undefined ? false : _ref$indented;

	  var classNames = [_TableRow2.default.TableRow];
	  if (heading) {
	    classNames.push(_TableRow2.default.TableRow_heading);
	  }
	  if (interactive) {
	    classNames.push(_TableRow2.default.TableRow_interactive);
	  }
	  if (indented) {
	    classNames.push(_TableRow2.default.TableRow_indented);
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: classNames.join(' ') },
	    children
	  );
	};

	exports.default = TableRow;

/***/ },

/***/ 776:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableRow":"TableRow__TableRow___2UBN9","TableRow_heading":"TableRow__TableRow_heading___1Z9eQ","TableRow_interactive":"TableRow__TableRow_interactive___i5JrV","TableRow_indented":"TableRow__TableRow_indented___28V76"};

/***/ },

/***/ 777:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableColumn = __webpack_require__(778);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableColumn = function TableColumn(_ref) {
	  var children = _ref.children;
	  var width = _ref.width;
	  var _ref$last = _ref.last;
	  var last = _ref$last === undefined ? false : _ref$last;

	  var style = {
	    paddingRight: last ? 0 : '1.5rem'
	  };
	  if (width === 'stretch') {
	    style.flex = 1;
	  } else {
	    style.width = width + 'rem';
	  }

	  return _react2.default.createElement(
	    'div',
	    { style: style,
	      className: _TableColumn2.default.TableColumn },
	    children
	  );
	};

	exports.default = TableColumn;

/***/ },

/***/ 778:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableColumn":"TableColumn__TableColumn___1Tubs"};

/***/ },

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _TableCell = __webpack_require__(780);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TableCell = function TableCell(_ref) {
	  var children = _ref.children;
	  var _ref$title = _ref.title;
	  var title = _ref$title === undefined ? false : _ref$title;
	  var _ref$heading = _ref.heading;
	  var heading = _ref$heading === undefined ? false : _ref$heading;
	  var _ref$to = _ref.to;
	  var to = _ref$to === undefined ? null : _ref$to;

	  var classNames = [];

	  if (heading) {
	    classNames.push(_TableCell2.default.TableHeadingCell);

	    if (title) {
	      classNames.push(_TableCell2.default.TableHeadingCell_title);
	    }
	  } else {
	    classNames.push(_TableCell2.default.TableCell);

	    if (title) {
	      classNames.push(_TableCell2.default.TableCell_title);
	    }
	  }

	  if (to) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { to: to,
	        className: classNames.join(' ') },
	      children
	    );
	  } else {
	    return _react2.default.createElement(
	      'div',
	      { className: classNames.join(' ') },
	      children
	    );
	  }
	};

	exports.default = TableCell;

/***/ },

/***/ 780:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableCell":"TableCell__TableCell___3jCxo","TableCell_title":"TableCell__TableCell_title___OVykt","TableHeadingCell":"TableCell__TableHeadingCell___3CSTD","TableHeadingCell_title":"TableCell__TableHeadingCell_title___yOdW6"};

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(782);

	var _Icon2 = _interopRequireDefault(_Icon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Icon = function Icon(_ref) {
	  var type = _ref.type;

	  var classNames = [_Icon2.default.Icon];

	  switch (type) {
	    case 'envelope':
	      classNames.push(_Icon2.default.Icon_envelope);
	      break;
	    case 'folder':
	      classNames.push(_Icon2.default.Icon_folder);
	      break;
	    case 'file-code':
	      classNames.push(_Icon2.default.Icon_fileCode);
	      break;
	    case 'file-text':
	      classNames.push(_Icon2.default.Icon_fileText);
	      break;
	    case 'file-text-draft':
	      classNames.push(_Icon2.default.Icon_fileTextDraft);
	      break;
	    case 'file-blogpost':
	      classNames.push(_Icon2.default.Icon_fileBlogpost);
	      break;
	    case 'file-blogpost-draft':
	      classNames.push(_Icon2.default.Icon_fileBlogpostDraft);
	      break;
	    case 'user':
	      classNames.push(_Icon2.default.Icon_user);
	      break;
	    case 'user-admin':
	      classNames.push(_Icon2.default.Icon_userAdmin);
	      break;
	    case 'user-disabled':
	      classNames.push(_Icon2.default.Icon_userDisabled);
	      break;
	    case 'plus':
	      classNames.push(_Icon2.default.Icon_plus);
	      break;
	  }

	  return _react2.default.createElement('div', { className: classNames.join(' ') });
	};

	exports.default = Icon;

/***/ },

/***/ 782:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Icon":"Icon__Icon___38Epv","Icon_envelope":"Icon__Icon_envelope___2tNQx","Icon_folder":"Icon__Icon_folder___1Y4nT","Icon_fileCode":"Icon__Icon_fileCode___LdmN-","Icon_fileText":"Icon__Icon_fileText___3SbW0","Icon_fileTextDraft":"Icon__Icon_fileTextDraft___3NSnR","Icon_fileBlogpost":"Icon__Icon_fileBlogpost___AsM8g","Icon_fileBlogpostDraft":"Icon__Icon_fileBlogpostDraft___2HSJ0","Icon_user":"Icon__Icon_user___360fJ","Icon_userAdmin":"Icon__Icon_userAdmin___2wgqB","Icon_userDisabled":"Icon__Icon_userDisabled___DcJp9","Icon_plus":"Icon__Icon_plus___10pTv"};

/***/ },

/***/ 783:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionsListItem":"SectionsListItem__SectionsListItem___1KZEQ","SectionsListItem__actions":"SectionsListItem__SectionsListItem__actions___xiBIG","SectionsListItem_interactive":"SectionsListItem__SectionsListItem_interactive___iEJJ_"};

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

	var _reactRedux = __webpack_require__(469);

	var _reactSortable = __webpack_require__(771);

	var _sectionsActions = __webpack_require__(773);

	var _SectionsListItem = __webpack_require__(774);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SortableListItem = (0, _reactSortable.sortable)(function (props) {
	  return _react2.default.createElement(
	    'div',
	    props,
	    props.children
	  );
	});

	var SubSectionsList = function (_React$Component) {
	  _inherits(SubSectionsList, _React$Component);

	  function SubSectionsList(props) {
	    _classCallCheck(this, SubSectionsList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SubSectionsList).call(this, props));

	    _this.updateState = _this.updateState.bind(_this);

	    _this.state = {
	      draggingIndex: null,
	      data: {
	        items: props.section.data.children
	      }
	    };
	    return _this;
	  }

	  _createClass(SubSectionsList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState({
	        data: {
	          items: newProps.section.data.children
	        }
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(obj) {
	      if (obj.draggingIndex === null) {
	        var _props = this.props;
	        var section = _props.section;
	        var _updateSection = _props.updateSection;


	        _updateSection(section.data._id, {
	          children: this.state.data.items
	        });
	      }

	      this.setState(obj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props;
	      var section = _props2.section;
	      var subsections = _props2.subsections;
	      var children = _props2.children;
	      var location = _props2.location;
	      var params = _props2.params;

	      var isNewSectionRoute = location.pathname === '/sections/new';
	      var isEditSectionRoute = location.pathname === '/sections/' + params.sectionId + '/edit';
	      var disableInteraction = isNewSectionRoute || isEditSectionRoute;

	      return _react2.default.createElement(
	        'div',
	        null,
	        isNewSectionRoute && location.query.parentId === section.data._id ? children : '',
	        section.data.children.map(function (subsectionId, i) {
	          var subsection = subsections.find(function (sub) {
	            return sub.data._id === subsectionId;
	          });

	          if (isEditSectionRoute && subsectionId === params.sectionId) {
	            return _react2.default.createElement(
	              'div',
	              { key: i },
	              children
	            );
	          } else {
	            if (disableInteraction) {
	              return _react2.default.createElement(_SectionsListItem2.default, { key: i,
	                section: subsection,
	                parent: section,
	                disableInteraction: disableInteraction || _this2.state.draggingIndex !== null });
	            } else {
	              return _react2.default.createElement(
	                SortableListItem,
	                { key: i,
	                  updateState: _this2.updateState,
	                  items: _this2.state.data.items,
	                  draggingIndex: _this2.state.draggingIndex,
	                  sortId: i,
	                  outline: 'list' },
	                _react2.default.createElement(_SectionsListItem2.default, { section: subsection,
	                  parent: section,
	                  disableInteraction: disableInteraction || _this2.state.draggingIndex !== null })
	              );
	            }
	          }
	        })
	      );
	    }
	  }]);

	  return SubSectionsList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
	  return {
	    updateSection: function updateSection(id, data) {
	      dispatch((0, _sectionsActions.updateSection)(id, data));
	    }
	  };
		})(SubSectionsList);

/***/ },

/***/ 785:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Wrapper = __webpack_require__(786);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Wrapper = function Wrapper(_ref) {
	  var dimmed = _ref.dimmed;
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Wrapper2.default.Wrapper + '\n      ' + (dimmed ? _Wrapper2.default.Wrapper_dimmed : '') },
	    children
	  );
	};

	exports.default = Wrapper;

/***/ },

/***/ 786:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"Wrapper__Wrapper___1t_G-","Wrapper_dimmed":"Wrapper__Wrapper_dimmed___1iGtc"};

/***/ },

/***/ 787:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(788);

	var _Table2 = _interopRequireDefault(_Table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Table = function Table(_ref) {
	  var children = _ref.children;
	  var _ref$breadcrumbs = _ref.breadcrumbs;
	  var breadcrumbs = _ref$breadcrumbs === undefined ? false : _ref$breadcrumbs;

	  return _react2.default.createElement(
	    'div',
	    { className: _Table2.default.Table + ' ' + (breadcrumbs ? _Table2.default.Table_breadcrumbs : '') },
	    children
	  );
	};

	exports.default = Table;

/***/ },

/***/ 788:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Table":"Table__Table___3vKIR","Table_breadcrumbs":"Table__Table_breadcrumbs___3N73o"};

/***/ },

/***/ 789:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _sectionsActions = __webpack_require__(773);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Form = __webpack_require__(790);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewSectionForm = function (_React$Component) {
	  _inherits(NewSectionForm, _React$Component);

	  function NewSectionForm(props) {
	    _classCallCheck(this, NewSectionForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewSectionForm).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    _this.state = {
	      data: {
	        title: '',
	        url: '',
	        sectionType: 'articles',
	        parent: props.parentSection.data._id
	      },
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(NewSectionForm, [{
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
	      var createSection = this.props.createSection;


	      createSection(this.state.data);
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

	      var _props = this.props;
	      var isUpdating = _props.item.isUpdating;
	      var parentSection = _props.parentSection;


	      var sectionTypes = [];
	      if (parentSection.data.sectionType === 'meta') {
	        sectionTypes = [{
	          id: 'articles',
	          label: 'List of articles'
	        }, {
	          id: 'parent',
	          label: 'Parent'
	        }, {
	          id: 'custom',
	          label: 'Custom page'
	        }, {
	          id: 'blogposts',
	          label: 'List of blog posts'
	        }];
	      } else {
	        sectionTypes = [{
	          id: 'articles',
	          label: 'List of articles'
	        }, {
	          id: 'blogposts',
	          label: 'list of blog posts'
	        }];
	      }

	      return _react2.default.createElement(
	        _Form.Form,
	        null,
	        _react2.default.createElement(
	          _Form.FormHeader,
	          null,
	          'Add new section'
	        ),
	        _react2.default.createElement(
	          _Form.FormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Title',
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
	            _react2.default.createElement(_UI.Input, { label: 'url',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ),
	          _react2.default.createElement(_UI.Select, { label: 'Type',
	            value: this.state.data.sectionType,
	            options: sectionTypes,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('sectionType', value);
	            } })
	        ),
	        _react2.default.createElement(
	          _Form.FormFooter,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                { disabled: isUpdating,
	                  onClick: this.save },
	                'Create'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.LinkButton,
	                { disabled: isUpdating,
	                  color: 'red',
	                  to: '/sections/' },
	                'Cancel'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NewSectionForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var parentId = ownProps.location.query.parentId;

	  var parentSection = state.sections.items.find(function (s) {
	    return s.data._id === parentId;
	  });

	  return {
	    item: state.sections.newSection,
	    parentSection: parentSection
	  };
	}, function (dispatch) {
	  return {
	    createSection: function createSection(data) {
	      dispatch((0, _sectionsActions.createSection)(data, '/sections/'));
	    }
	  };
		})(NewSectionForm);

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FormFooter = exports.FormBody = exports.FormHeader = exports.Form = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Form = __webpack_require__(791);

	var _Form2 = _interopRequireDefault(_Form);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Form = function Form(_ref) {
	  var children = _ref.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Form2.default.Form },
	    children
	  );
	};

	var FormHeader = function FormHeader(_ref2) {
	  var children = _ref2.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Form2.default.Form__header },
	    children
	  );
	};

	var FormBody = function FormBody(_ref3) {
	  var children = _ref3.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Form2.default.Form__body },
	    children
	  );
	};

	var FormFooter = function FormFooter(_ref4) {
	  var children = _ref4.children;

	  return _react2.default.createElement(
	    'div',
	    { className: _Form2.default.Form__footer },
	    children
	  );
	};

	exports.Form = Form;
	exports.FormHeader = FormHeader;
	exports.FormBody = FormBody;
		exports.FormFooter = FormFooter;

/***/ },

/***/ 791:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Form":"Form__Form___2zwZf","Form__header":"Form__Form__header___Llkaf","Form__body":"Form__Form__body___v6Ya2","Form__footer":"Form__Form__footer___UiRNW"};

/***/ },

/***/ 792:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _sectionsActions = __webpack_require__(773);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Form = __webpack_require__(790);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditSectionForm = function (_React$Component) {
	  _inherits(EditSectionForm, _React$Component);

	  function EditSectionForm(props) {
	    _classCallCheck(this, EditSectionForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditSectionForm).call(this, props));

	    _this.delete = _this.delete.bind(_this);
	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    _this.state = {
	      isDirty: false,
	      data: _extends({}, props.section.data),
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(EditSectionForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$section = newProps.section;
	      var errors = _newProps$section.errors;
	      var data = _newProps$section.data;
	      var isUpdating = _newProps$section.isUpdating;


	      if (!isUpdating) {
	        var newState = {};

	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          newState = {
	            isDirty: false,
	            data: _extends({}, data),
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
	      var _props = this.props;
	      var id = _props.section.data._id;
	      var updateSection = _props.updateSection;

	      var payload = _extends(this.state.data);

	      updateSection(id, payload);
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
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var deleteSection = _props2.deleteSection;
	      var section = _props2.section;


	      deleteSection(section.data._id, section.data.children);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var section = _props3.section;
	      var parentSection = _props3.parentSection;


	      var actions = _react2.default.createElement(
	        _Layouts.ListInline,
	        null,
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.Button,
	            { disabled: true },
	            'All Saved'
	          )
	        ),
	        _react2.default.createElement(
	          _Layouts.ListInlineItem,
	          null,
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { disabled: section.isUpdating,
	              to: '/sections' },
	            'Close'
	          )
	        )
	      );
	      if (this.state.isDirty) {
	        actions = _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.Button,
	              { disabled: section.isUpdating,
	                onClick: this.save },
	              'Save Changes'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: section.isUpdating,
	                color: 'red',
	                to: '/sections' },
	              'Discard Changes'
	            )
	          )
	        );
	      }

	      return _react2.default.createElement(
	        _Form.Form,
	        null,
	        _react2.default.createElement(
	          _Form.FormHeader,
	          null,
	          'Edit section'
	        ),
	        _react2.default.createElement(
	          _Form.FormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 1 },
	            _react2.default.createElement(_UI.Input, { label: 'Title',
	              value: this.state.data.title,
	              error: this.state.errors.title,
	              disabled: section.isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('title', value);
	              } })
	          ),
	          _react2.default.createElement(_UI.Input, { label: 'url',
	            value: this.state.data.url,
	            error: this.state.errors.url,
	            disabled: section.isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('url', value);
	            } })
	        ),
	        _react2.default.createElement(
	          _Form.FormFooter,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            actions,
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_UI.IconButton, { type: 'delete',
	                disabled: section.isUpdating,
	                onClick: this.delete })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return EditSectionForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var sectionId = ownProps.params.sectionId;

	  var section = state.sections.items.find(function (s) {
	    return s.data._id === sectionId;
	  });
	  var parentSection = state.sections.items.find(function (s) {
	    return s.data._id === section.data.parent;
	  });

	  return {
	    section: section,
	    parentSection: parentSection
	  };
	}, function (dispatch) {
	  var backlink = '/sections';

	  return {
	    deleteSection: function deleteSection(id, children) {
	      dispatch((0, _sectionsActions.deleteSection)(id, children, backlink));
	    },
	    updateSection: function updateSection(id, data) {
	      dispatch((0, _sectionsActions.updateSection)(id, data, backlink));
	    }
	  };
		})(EditSectionForm);

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _ArticlesList = __webpack_require__(794);

	var _ArticlesList2 = _interopRequireDefault(_ArticlesList);

	var _CustomPageHome = __webpack_require__(797);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	var _CustomPageAbout = __webpack_require__(799);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Section = function Section(_ref) {
	  var section = _ref.section;
	  var parent = _ref.parent;
	  var location = _ref.location;
	  var params = _ref.params;
	  var children = _ref.children;

	  switch (section.data.sectionType) {
	    case 'articles':
	    case 'blogposts':
	      return _react2.default.createElement(_ArticlesList2.default, { section: section,
	        parent: parent,
	        params: params,
	        location: location,
	        children: children });
	    case 'custom':
	      switch (section.data.customId) {
	        case 'home':
	          return _react2.default.createElement(_CustomPageHome2.default, null);
	        case 'about':
	          return _react2.default.createElement(_CustomPageAbout2.default, null);
	        default:
	          console.error('unexpected custom page ' + section.data.customId);
	      }
	      break;
	    default:
	      console.error('unexpected section type ' + section.data.sectionType);
	  }
	};

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;

	  var section = state.sections.items.find(function (s) {
	    return s.data._id === params.sectionId;
	  });
	  var parent = state.sections.items.find(function (s) {
	    return s.data._id === section.data.parent;
	  });

	  return {
	    section: section,
	    parent: parent
	  };
		})(Section);

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _reactSortable = __webpack_require__(771);

	var _sectionsActions = __webpack_require__(773);

	var _ArticlesListItem = __webpack_require__(795);

	var _ArticlesListItem2 = _interopRequireDefault(_ArticlesListItem);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Wrapper = __webpack_require__(785);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(787);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SortableListItem = (0, _reactSortable.sortable)(function (props) {
	  return _react2.default.createElement(
	    'div',
	    props,
	    props.children
	  );
	});

	var ArticlesList = function (_React$Component) {
	  _inherits(ArticlesList, _React$Component);

	  function ArticlesList(props) {
	    _classCallCheck(this, ArticlesList);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ArticlesList).call(this, props));

	    _this.updateState = _this.updateState.bind(_this);

	    _this.state = {
	      draggingIndex: null,
	      data: {
	        items: props.section.data.articles
	      }
	    };
	    return _this;
	  }

	  _createClass(ArticlesList, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      this.setState({
	        data: {
	          items: newProps.section.data.articles
	        }
	      });
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(obj) {
	      if (obj.draggingIndex === null) {
	        var _updateSection = this.props.updateSection;


	        _updateSection({
	          articles: this.state.data.items
	        });
	      }

	      this.setState(obj);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var articles = _props.articles;
	      var section = _props.section;
	      var children = _props.children;
	      var params = _props.params;
	      var location = _props.location;

	      var isNewArticleRoute = location.pathname === '/sections/' + params.sectionId + '/articles/new';
	      var isEditArticleRoute = location.pathname === '/sections/' + params.sectionId + '/articles/' + params.articleId;
	      var disableInteraction = isNewArticleRoute || isEditArticleRoute;

	      var actions = '';
	      if (section.data.sectionType === 'articles') {
	        actions = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/' + params.sectionId + '/articles/new' },
	            'add new article'
	          ),
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/' + params.sectionId + '/articles/new?type=heading' },
	            'add new heading'
	          )
	        );
	      } else if (section.data.sectionType === 'blogposts') {
	        actions = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/sections/' + params.sectionId + '/articles/new' },
	            'add new blog post'
	          )
	        );
	      }

	      return _react2.default.createElement(
	        _Wrapper2.default,
	        { dimmed: disableInteraction },
	        _react2.default.createElement(
	          _Table2.default,
	          null,
	          _react2.default.createElement(
	            _TableRow2.default,
	            { heading: true },
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { width: 'stretch' },
	              _react2.default.createElement(
	                _TableCell2.default,
	                { title: true, heading: true },
	                section.data.title
	              )
	            ),
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { width: '20' },
	              _react2.default.createElement(
	                _TableCell2.default,
	                { heading: true },
	                'url'
	              )
	            ),
	            _react2.default.createElement(
	              _TableColumn2.default,
	              { last: true,
	                width: '15' },
	              disableInteraction ? '' : actions
	            )
	          ),
	          isNewArticleRoute ? children : '',
	          this.state.data.items.map(function (articleId, i) {
	            if (isEditArticleRoute && params.articleId === articleId) {
	              return _react2.default.createElement(
	                'div',
	                { key: i },
	                children
	              );
	            } else {
	              var article = articles.find(function (a) {
	                return a.data._id === articleId;
	              });

	              if (disableInteraction) {
	                return _react2.default.createElement(_ArticlesListItem2.default, { key: i,
	                  article: article,
	                  section: section,
	                  disableInteraction: disableInteraction || _this2.state.draggingIndex !== null });
	              } else {
	                return _react2.default.createElement(
	                  SortableListItem,
	                  { key: i,
	                    updateState: _this2.updateState,
	                    items: _this2.state.data.items,
	                    draggingIndex: _this2.state.draggingIndex,
	                    sortId: i,
	                    outline: 'list' },
	                  _react2.default.createElement(_ArticlesListItem2.default, { key: i,
	                    article: article,
	                    section: section,
	                    disableInteraction: disableInteraction || _this2.state.draggingIndex !== null })
	                );
	              }
	            }
	          })
	        )
	      );
	    }
	  }]);

	  return ArticlesList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;

	  var section = state.sections.items.find(function (s) {
	    return s.data._id === params.sectionId;
	  });
	  var articles = state.articles.items.filter(function (a) {
	    return section.data.articles.indexOf(a.data._id) !== -1;
	  });

	  return {
	    section: section,
	    articles: articles
	  };
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;


	  return {
	    updateSection: function updateSection(data) {
	      dispatch((0, _sectionsActions.updateSection)(params.sectionId, data));
	    }
	  };
		})(ArticlesList);

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Icon = __webpack_require__(781);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _ArticlesListItem = __webpack_require__(796);

	var _ArticlesListItem2 = _interopRequireDefault(_ArticlesListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticlesListItem = function ArticlesListItem(_ref) {
	  var article = _ref.article;
	  var section = _ref.section;
	  var disableInteraction = _ref.disableInteraction;

	  var icon = null;
	  switch (article.data.articleType) {
	    case 'article':
	      icon = article.data.isPublished ? 'file-text' : 'file-text-draft';
	      break;
	    case 'blogpost':
	      icon = article.data.isPublished ? 'file-blogpost' : 'file-blogpost-draft';
	      break;
	    case 'heading':
	    default:
	      icon = null;
	  }

	  var url = '/' + article.data.url;
	  if (article.data.articleType === 'heading') {
	    url = '';
	  }

	  var actions = '';
	  if (!disableInteraction) {
	    actions = _react2.default.createElement(
	      'div',
	      { className: _ArticlesListItem2.default.ArticlesListItem__actions },
	      _react2.default.createElement(
	        _UI.LinkButton,
	        { to: '/sections/' + section.data._id + '/articles/' + article.data._id },
	        'edit'
	      )
	    );
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _ArticlesListItem2.default.ArticlesListItem + '\n      ' + (disableInteraction ? '' : _ArticlesListItem2.default.ArticlesListItem_interactive) + '\n      ' + (article.data.articleType === 'heading' ? _ArticlesListItem2.default.ArticlesListItem_heading : '') },
	    _react2.default.createElement(
	      _TableRow2.default,
	      { interactive: !disableInteraction },
	      icon ? _react2.default.createElement(
	        _TableColumn2.default,
	        null,
	        _react2.default.createElement(_Icon2.default, { type: icon })
	      ) : '',
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: 'stretch' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          { title: true },
	          article.data.title
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '25' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          null,
	          url
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '3' },
	        article.data.isPublished ? '' : _react2.default.createElement(_Badge2.default, { label: 'Draft', color: 'red' })
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '7',
	          last: true },
	        _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          actions
	        )
	      )
	    )
	  );
	};

	exports.default = ArticlesListItem;

/***/ },

/***/ 796:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ArticlesListItem":"ArticlesListItem__ArticlesListItem___3qQzB","ArticlesListItem__actions":"ArticlesListItem__ArticlesListItem__actions___rshua","ArticlesListItem_interactive":"ArticlesListItem__ArticlesListItem_interactive___2EniE","ArticlesListItem_heading":"ArticlesListItem__ArticlesListItem_heading___1JNKb"};

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPageHome = __webpack_require__(798);

	var _CustomPageHome2 = _interopRequireDefault(_CustomPageHome);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomPageHome = function CustomPageHome() {
	  return _react2.default.createElement(
	    'div',
	    { className: _CustomPageHome2.default.CustomPageHome },
	    'I am CustomPageHome component!'
	  );
	};

	exports.default = CustomPageHome;

/***/ },

/***/ 798:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CustomPageHome":"CustomPageHome__CustomPageHome___2tvRs"};

/***/ },

/***/ 799:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _CustomPageAbout = __webpack_require__(800);

	var _CustomPageAbout2 = _interopRequireDefault(_CustomPageAbout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CustomPageAbout = function CustomPageAbout() {
	  return _react2.default.createElement(
	    'div',
	    { className: _CustomPageAbout2.default.CustomPageAbout },
	    'I am CustomPageAbout component!'
	  );
	};

	exports.default = CustomPageAbout;

/***/ },

/***/ 800:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CustomPageAbout":"CustomPageAbout__CustomPageAbout___29Mor"};

/***/ },

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _articleActions = __webpack_require__(802);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Form = __webpack_require__(790);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NewArticleForm = function (_React$Component) {
	  _inherits(NewArticleForm, _React$Component);

	  function NewArticleForm(props) {
	    _classCallCheck(this, NewArticleForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewArticleForm).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    _this.state = {
	      data: {
	        title: '',
	        url: '',
	        snippet: '',
	        content: '',
	        articleType: '',
	        isPublished: false,
	        isFrequent: false,
	        parent: props.params.sectionId
	      },
	      errors: {}
	    };

	    if (props.section.data.sectionType === 'blogposts') {
	      _this.state.data.articleType = 'blogpost';
	    } else if (props.location.query.type === 'heading') {
	      _this.state.data.articleType = 'heading';
	    } else {
	      _this.state.data.articleType = 'article';
	    }
	    return _this;
	  }

	  _createClass(NewArticleForm, [{
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
	      var createArticle = this.props.createArticle;


	      createArticle(this.state.data);
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

	      var _props = this.props;
	      var isUpdating = _props.item.isUpdating;
	      var params = _props.params;


	      var title = '';
	      switch (this.state.data.articleType) {
	        case 'article':
	          title = 'article';
	          break;
	        case 'blogpost':
	          title = 'blog post';
	          break;
	        case 'heading':
	          title = 'heading';
	          break;
	        default:
	          console.error('unexpected article type ' + this.state.data.articleType);
	      }

	      return _react2.default.createElement(
	        _Form.Form,
	        null,
	        _react2.default.createElement(
	          _Form.FormHeader,
	          null,
	          'Add new ',
	          title
	        ),
	        _react2.default.createElement(
	          _Form.FormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'Title',
	              value: this.state.data.title,
	              error: this.state.errors.title,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('title', value);
	              } })
	          ),
	          this.state.data.articleType !== 'heading' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'url',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ) : '',
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Published:',
	              checked: this.state.data.isPublished,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isPublished', value);
	              } })
	          ),
	          this.state.data.articleType === 'article' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Featured:',
	              checked: this.state.data.isFrequent,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isFrequent', value);
	              } })
	          ) : '',
	          this.state.data.articleType === 'blogpost' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Editor, {
	              label: 'Preview:',
	              value: this.state.data.snippet,
	              error: this.state.errors.snippet,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('snippet', value);
	              } })
	          ) : '',
	          this.state.data.articleType !== 'heading' ? _react2.default.createElement(_UI.Editor, {
	            label: 'Content:',
	            value: this.state.data.content,
	            error: this.state.errors.content,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('content', value);
	            } }) : ''
	        ),
	        _react2.default.createElement(
	          _Form.FormFooter,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInline,
	            null,
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.Button,
	                { disabled: isUpdating,
	                  onClick: this.save },
	                'Create'
	              )
	            ),
	            _react2.default.createElement(
	              _Layouts.ListInlineItem,
	              null,
	              _react2.default.createElement(
	                _UI.LinkButton,
	                { disabled: isUpdating,
	                  color: 'red',
	                  to: '/sections/' + params.sectionId },
	                'Cancel'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return NewArticleForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var sectionId = ownProps.params.sectionId;

	  var section = state.sections.items.find(function (s) {
	    return s.data._id === sectionId;
	  });

	  return {
	    item: state.articles.newArticle,
	    section: section
	  };
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;


	  return {
	    createArticle: function createArticle(data) {
	      dispatch((0, _articleActions.createArticle)(data, '/sections/' + params.sectionId));
	    }
	  };
		})(NewArticleForm);

/***/ },

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteArticle = exports.createArticle = exports.updateArticle = exports.fetchArticles = exports.REJECT_DELETE_ARTICLE = exports.CONFIRM_DELETE_ARTICLE = exports.REQUEST_DELETE_ARTICLE = exports.REJECT_CREATE_ARTICLE = exports.CONFIRM_CREATE_ARTICLE = exports.REQUEST_CREATE_ARTICLE = exports.REJECT_UPDATE_ARTICLE = exports.CONFIRM_UPDATE_ARTICLE = exports.REQUEST_UPDATE_ARTICLE = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	__webpack_require__(637);

	var _reactRouter = __webpack_require__(491);

	var _sectionsActions = __webpack_require__(773);

	var _flashActions = __webpack_require__(638);

	var _authActions = __webpack_require__(636);

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

	    fetch(("https://localhost.com") + '/articles/', {
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

	var updateArticle = exports.updateArticle = function updateArticle(id, data, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://localhost.com") + '/articles/' + id, {
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
	        dispatch((0, _flashActions.flashMessage)('Article has been saved', 'log'));
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
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

	var createArticle = exports.createArticle = function createArticle(data, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestCreate());

	    fetch(("https://localhost.com") + '/articles/', {
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
	        dispatch({
	          type: _sectionsActions.CONFIRM_UPDATE_SECTION,
	          id: json.data.parent._id,
	          item: json.data.parent
	        });
	        dispatch((0, _flashActions.flashMessage)('Article created successfully', 'log'));
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
	        }
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

	var deleteArticle = exports.deleteArticle = function deleteArticle(id, backlink) {
	  return function (dispatch, getState) {
	    dispatch(requestDelete(id));

	    fetch(("https://localhost.com") + '/articles/' + id, {
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
	        dispatch({
	          type: _sectionsActions.CONFIRM_UPDATE_SECTION,
	          id: json.data.parent._id,
	          item: json.data.parent
	        });
	        if (backlink) {
	          _reactRouter.hashHistory.push(backlink);
	        }
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

	var _reactRedux = __webpack_require__(469);

	var _articleActions = __webpack_require__(802);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Form = __webpack_require__(790);

	var _Comments = __webpack_require__(829);

	var _Comments2 = _interopRequireDefault(_Comments);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var EditArticleForm = function (_React$Component) {
	  _inherits(EditArticleForm, _React$Component);

	  function EditArticleForm(props) {
	    _classCallCheck(this, EditArticleForm);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EditArticleForm).call(this, props));

	    _this.delete = _this.delete.bind(_this);
	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);
	    _this.deleteComment = _this.deleteComment.bind(_this);
	    _this.deleteReply = _this.deleteReply.bind(_this);

	    _this.state = {
	      isDirty: false,
	      data: _extends({}, props.article.data),
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(EditArticleForm, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$article = newProps.article;
	      var errors = _newProps$article.errors;
	      var data = _newProps$article.data;
	      var isUpdating = _newProps$article.isUpdating;


	      if (!isUpdating) {
	        var newState = {};

	        if (Object.keys(errors).length === 0 && errors.constructor === Object) {
	          newState = {
	            isDirty: false,
	            data: _extends({}, data),
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
	      var _props = this.props;
	      var id = _props.article.data._id;
	      var updateArticle = _props.updateArticle;

	      var payload = _extends(this.state.data);

	      updateArticle(id, payload);
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
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var deleteArticle = _props2.deleteArticle;
	      var article = _props2.article;


	      deleteArticle(article.data._id);
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
	      var comment = this.state.data.comments.find(function (c) {
	        return c._id === commentId;
	      });
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

	      var _props3 = this.props;
	      var isUpdating = _props3.params.isUpdating;
	      var params = _props3.params;


	      var actions = '';
	      if (this.state.isDirty) {
	        actions = _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.Button,
	              { disabled: isUpdating,
	                onClick: this.save },
	              'Save Changes'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: isUpdating,
	                color: 'red',
	                to: '/sections/' + params.sectionId },
	              'Discard Changes'
	            )
	          )
	        );
	      } else {
	        actions = _react2.default.createElement(
	          _Layouts.ListInline,
	          null,
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.Button,
	              { disabled: true },
	              'All Saved'
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListInlineItem,
	            null,
	            _react2.default.createElement(
	              _UI.LinkButton,
	              { disabled: isUpdating,
	                to: '/sections/' + params.sectionId },
	              'Close'
	            )
	          )
	        );
	      }

	      var formTitle = '';
	      switch (this.state.data.articleType) {
	        case 'article':
	          formTitle = 'Edit Article';
	          break;
	        case 'blogpost':
	          formTitle = 'Edit Blogpost';
	          break;
	        case 'heading':
	          formTitle = 'Edit Heading';
	          break;
	        default:
	          console.error('unexpected article type ' + this.state.data.articleType);
	      }

	      return _react2.default.createElement(
	        _Form.Form,
	        null,
	        _react2.default.createElement(
	          _Form.FormHeader,
	          null,
	          formTitle
	        ),
	        _react2.default.createElement(
	          _Form.FormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'Title',
	              value: this.state.data.title,
	              error: this.state.errors.title,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('title', value);
	              } })
	          ),
	          this.state.data.articleType !== 'heading' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'url',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ) : '',
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Published:',
	              checked: this.state.data.isPublished,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isPublished', value);
	              } })
	          ),
	          this.state.data.articleType === 'article' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Featured:',
	              checked: this.state.data.isFrequent,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isFrequent', value);
	              } })
	          ) : '',
	          this.state.data.articleType === 'blogpost' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Editor, {
	              label: 'Preview:',
	              value: this.state.data.snippet,
	              error: this.state.errors.snippet,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('snippet', value);
	              } })
	          ) : '',
	          this.state.data.articleType !== 'heading' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Editor, {
	              label: 'Content:',
	              value: this.state.data.content,
	              error: this.state.errors.content,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('content', value);
	              } })
	          ) : '',
	          _react2.default.createElement(_Comments2.default, { items: this.state.data.comments, onDeleteComment: this.deleteComment, onDeleteReply: this.deleteReply })
	        ),
	        _react2.default.createElement(
	          _Form.FormFooter,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            actions,
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement(_UI.IconButton, { type: 'delete',
	                disabled: isUpdating,
	                onClick: this.delete })
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return EditArticleForm;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var params = ownProps.params;


	  return {
	    article: state.articles.items.find(function (a) {
	      return a.data._id === params.articleId;
	    })
	  };
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;

	  var backlink = '/sections/' + params.sectionId;

	  return {
	    deleteArticle: function deleteArticle(id) {
	      dispatch((0, _articleActions.deleteArticle)(id, backlink));
	    },
	    updateArticle: function updateArticle(id, data) {
	      dispatch((0, _articleActions.updateArticle)(id, data, backlink));
	    }
	  };
		})(EditArticleForm);

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

	var _reactRedux = __webpack_require__(469);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _searchIndexActions = __webpack_require__(805);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Wrapper = __webpack_require__(785);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(787);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(775);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(777);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(779);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SearchIndex = function (_React$Component) {
	  _inherits(SearchIndex, _React$Component);

	  function SearchIndex(props) {
	    _classCallCheck(this, SearchIndex);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchIndex).call(this, props));

	    _this.update = _this.update.bind(_this);
	    return _this;
	  }

	  _createClass(SearchIndex, [{
	    key: 'update',
	    value: function update() {
	      var updateIndex = this.props.updateIndex;


	      updateIndex();
	    }
	  }, {
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var fetchIndex = this.props.fetchIndex;


	      fetchIndex();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var isFetching = _props.isFetching;
	      var isUpdating = _props.isUpdating;
	      var lastUpdatedOn = _props.lastUpdatedOn;
	      var lastUpdatedBy = _props.lastUpdatedBy;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        return _react2.default.createElement(
	          _Wrapper2.default,
	          null,
	          _react2.default.createElement(
	            _Table2.default,
	            null,
	            _react2.default.createElement(
	              _TableRow2.default,
	              { heading: true },
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { width: 'stretch' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { heading: true, title: true },
	                  'Search Index'
	                )
	              ),
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { heading: true,
	                  last: true,
	                  width: '15' },
	                _react2.default.createElement(
	                  _Layouts.Flex,
	                  { justifyContent: 'flex-end' },
	                  _react2.default.createElement(
	                    _UI.LinkButton,
	                    { disabled: isUpdating,
	                      onClick: this.update },
	                    'Update index'
	                  )
	                )
	              )
	            ),
	            _react2.default.createElement(
	              _TableRow2.default,
	              null,
	              _react2.default.createElement(
	                _TableColumn2.default,
	                { width: 'stretch' },
	                _react2.default.createElement(
	                  _TableCell2.default,
	                  { title: true },
	                  'Last updated on ',
	                  _react2.default.createElement(_reactTime2.default, { value: lastUpdatedOn, format: 'h:mm A on MMM Do' }),
	                  ' by ',
	                  lastUpdatedBy
	                )
	              )
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return SearchIndex;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.searchIndex.isFetching,
	    isUpdating: state.searchIndex.isUpdating,
	    lastUpdatedOn: state.searchIndex.lastUpdatedOn,
	    lastUpdatedBy: state.searchIndex.lastUpdatedBy
	  };
	}, function (dispatch) {
	  return {
	    fetchIndex: function fetchIndex() {
	      dispatch((0, _searchIndexActions.fetchSearchIndex)());
	    },
	    updateIndex: function updateIndex() {
	      dispatch((0, _searchIndexActions.updateSearchIndex)());
	    }
	  };
		})(SearchIndex);

/***/ },

/***/ 805:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSearchIndex = exports.fetchSearchIndex = exports.CONFIRM_UPDATE_INDEX = exports.REQUEST_UPDATE_INDEX = exports.RECEIVE_INDEX = exports.REQUEST_INDEX = undefined;

	__webpack_require__(637);

	var _flashActions = __webpack_require__(638);

	var _authActions = __webpack_require__(636);

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

	    fetch(("https://localhost.com") + '/searchIndex', {
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

	    fetch(("https://localhost.com") + '/searchIndex', {
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

/***/ 807:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 808:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _reduxLogger = __webpack_require__(809);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(810);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(811);

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

/***/ 811:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _authReducer = __webpack_require__(812);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(814);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(815);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(816);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _usersReducer = __webpack_require__(817);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _sectionsReducer = __webpack_require__(818);

	var _sectionsReducer2 = _interopRequireDefault(_sectionsReducer);

	var _searchIndexReducer = __webpack_require__(819);

	var _searchIndexReducer2 = _interopRequireDefault(_searchIndexReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _authReducer2.default,
	  flash: _flashReducer2.default,
	  questions: _questionsReducer2.default,
	  articles: _articleReducer2.default,
	  users: _usersReducer2.default,
	  sections: _sectionsReducer2.default,
	  searchIndex: _searchIndexReducer2.default
	});

		exports.default = rootReducer;

/***/ },

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(636);

	var _initialState = __webpack_require__(813);

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

/***/ 813:
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
	  sections: {
	    isFetching: true,
	    items: [],
	    newSection: {
	      isUpdating: false,
	      data: {},
	      errors: {}
	    }
	  },
	  section: {
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
	  searchIndex: {
	    isFetching: true,
	    isUpdating: false,
	    lastUpdatedOn: null,
	    lastUpdatedBy: null
	  }
		};

/***/ },

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(638);

	var _initialState = __webpack_require__(813);

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

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(647);

	var _initialState = __webpack_require__(813);

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

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(802);

	var _initialState = __webpack_require__(813);

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

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(762);

	var _initialState = __webpack_require__(813);

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

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sectionsActions = __webpack_require__(773);

	var _initialState = __webpack_require__(813);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	var sections = function sections() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.sections : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _sectionsActions.REQUEST_SECTIONS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _sectionsActions.RECEIVE_SECTIONS:
	      return _extends({}, state, {
	        isFetching: false,
	        items: action.items.map(function (i) {
	          return section(undefined, {
	            type: action.type,
	            item: i
	          });
	        })
	      });
	    case _sectionsActions.REQUEST_UPDATE_SECTION:
	    case _sectionsActions.CONFIRM_UPDATE_SECTION:
	    case _sectionsActions.REJECT_UPDATE_SECTION:
	    case _sectionsActions.REQUEST_DELETE_SECTION:
	    case _sectionsActions.REJECT_DELETE_SECTION:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return section(i, action);
	        })
	      });
	    case _sectionsActions.REQUEST_CREATE_SECTION:
	    case _sectionsActions.REJECT_CREATE_SECTION:
	      return _extends({}, state, {
	        newSection: newSection(state.newSection, action)
	      });
	    case _sectionsActions.CONFIRM_CREATE_SECTION:
	      return _extends({}, state, {
	        newSection: newSection(state.newSection, action),
	        items: [].concat(_toConsumableArray(state.items), [section(undefined, action)])
	      });
	    case _sectionsActions.CONFIRM_DELETE_SECTION:
	      return _extends({}, state, {
	        items: state.items.filter(function (i) {
	          return i.data._id !== action.id;
	        })
	      });
	    default:
	      return state;
	  }
	};

	var section = function section() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.section : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _sectionsActions.RECEIVE_SECTIONS:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _sectionsActions.CONFIRM_CREATE_SECTION:
	      return _extends({}, state, {
	        data: action.item
	      });
	    case _sectionsActions.REQUEST_UPDATE_SECTION:
	    case _sectionsActions.REQUEST_DELETE_SECTION:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _sectionsActions.CONFIRM_UPDATE_SECTION:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          data: action.item,
	          isUpdating: false,
	          errors: {}
	        });
	      } else {
	        return state;
	      }
	    case _sectionsActions.REJECT_UPDATE_SECTION:
	      if (state.data._id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false,
	          errors: action.errors
	        });
	      } else {
	        return state;
	      }
	    case _sectionsActions.REJECT_DELETE_SECTION:
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

	var newSection = function newSection(state, action) {
	  switch (action.type) {
	    case _sectionsActions.REQUEST_CREATE_SECTION:
	      return _extends({}, state, {
	        isUpdating: true
	      });
	    case _sectionsActions.REJECT_CREATE_SECTION:
	      return _extends({}, state, {
	        isUpdating: false,
	        errors: action.errors
	      });
	    case _sectionsActions.CONFIRM_CREATE_SECTION:
	      return _extends({}, _initialState2.default.sections.newSection);
	    default:
	      return state;
	  }
	};

	exports.default = sections;

/***/ },

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchIndexActions = __webpack_require__(805);

	var _initialState = __webpack_require__(813);

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

/***/ 828:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _sectionsActions = __webpack_require__(773);

	var _articleActions = __webpack_require__(802);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Sections = function (_React$Component) {
	  _inherits(Sections, _React$Component);

	  function Sections() {
	    _classCallCheck(this, Sections);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Sections).apply(this, arguments));
	  }

	  _createClass(Sections, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var fetchSections = _props.fetchSections;
	      var fetchArticles = _props.fetchArticles;


	      fetchSections();
	      fetchArticles();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var isFetching = _props2.isFetching;
	      var children = _props2.children;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        return children;
	      }
	    }
	  }]);

	  return Sections;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.sections.isFetching || state.articles.isFetching
	  };
	}, function (dispatch) {
	  return {
	    fetchSections: function fetchSections() {
	      dispatch((0, _sectionsActions.fetchSections)());
	    },
	    fetchArticles: function fetchArticles() {
	      dispatch((0, _articleActions.fetchArticles)());
	    }
	  };
		})(Sections);

/***/ },

/***/ 829:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Comment = __webpack_require__(830);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _Layouts = __webpack_require__(616);

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
	    comments
	  );
	};

	exports.default = Comments;

/***/ },

/***/ 830:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Comment = __webpack_require__(831);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

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

/***/ 831:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__deleteInfo":"Comment__Comment__deleteInfo___1xQWE","Comment__info":"Comment__Comment__info___1rool","Comment__comment":"Comment__Comment__comment___PQT67","Comment__body":"Comment__Comment__body___1S5F6","Comment__replies":"Comment__Comment__replies___PXLXR","Comment_deleted":"Comment__Comment_deleted___2nkYX","Reply":"Comment__Reply___1J5JO","Reply__deleteInfo":"Comment__Reply__deleteInfo___2OAbX","Reply__info":"Comment__Reply__info___30jI2","Reply__body":"Comment__Reply__body___1qhpn","Reply_deleted":"Comment__Reply_deleted___1kOVQ"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9VSS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Vc2VySW5mby5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CYWRnZS9CYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RJdGVtL1F1ZXN0aW9uc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0L1VzZXJzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS91c2Vyc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9OZXdVc2VyRm9ybS9OZXdVc2VyRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdC9TZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVSb3cvVGFibGVSb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N1YlNlY3Rpb25zTGlzdC9TdWJTZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05ld1NlY3Rpb25Gb3JtL05ld1NlY3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm0uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0vRWRpdFNlY3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0L0FydGljbGVzTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdEl0ZW0vQXJ0aWNsZXNMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0SXRlbS9BcnRpY2xlc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05ld0FydGljbGVGb3JtL05ld0FydGljbGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0QXJ0aWNsZUZvcm0vRWRpdEFydGljbGVGb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvU2VjdGlvbnMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0J1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbidcblxuaW1wb3J0IFVzZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVXNlcnNMaXN0J1xuaW1wb3J0IEVkaXRVc2VyRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtJ1xuaW1wb3J0IE5ld1VzZXJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdVc2VyRm9ybSdcblxuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucydcbmltcG9ydCBTZWN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zTGlzdCdcbmltcG9ydCBOZXdTZWN0aW9uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmV3U2VjdGlvbkZvcm0nXG5pbXBvcnQgRWRpdFNlY3Rpb25Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0nXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uJ1xuaW1wb3J0IE5ld0FydGljbGVGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybSdcbmltcG9ydCBFZGl0QXJ0aWNsZUZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRBcnRpY2xlRm9ybSdcblxuaW1wb3J0IFNlYXJjaEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hJbmRleCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuY29uc3QgRHVtbXkgPSAoKSA9PiA8ZGl2IC8+XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cInF1ZXN0aW9uc1wiIC8+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJxdWVzdGlvbnNcIiBjb21wb25lbnQ9e1F1ZXN0aW9uc0xpc3R9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnF1ZXN0aW9uSWRcIiBjb21wb25lbnQ9e1F1ZXN0aW9ufSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzTGlzdH0+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJuZXdcIiBjb21wb25lbnQ9e05ld1VzZXJGb3JtfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnVzZXJJZFwiIGNvbXBvbmVudD17RWRpdFVzZXJGb3JtfSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwic2VjdGlvbnNcIiBjb21wb25lbnQ9e1NlY3Rpb25zfT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTZWN0aW9uc0xpc3R9PlxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtEdW1teX0gLz5cblxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJuZXdcIiBjb21wb25lbnQ9e05ld1NlY3Rpb25Gb3JtfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkL2VkaXRcIiBjb21wb25lbnQ9e0VkaXRTZWN0aW9uRm9ybX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkXCIgY29tcG9uZW50PXtTZWN0aW9ufT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvbmV3XCIgY29tcG9uZW50PXtOZXdBcnRpY2xlRm9ybX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVJZFwiIGNvbXBvbmVudD17RWRpdEFydGljbGVGb3JtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJzZWFyY2gtaW5kZXhcIiBjb21wb25lbnQ9e1NlYXJjaEluZGV4fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4uL0FwcEhlYWRlcidcbmltcG9ydCB7bG9naW5XaXRoVG9rZW59IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLmNzcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXIsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGF0dGVtcHRpbmdMb2dpblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoYXR0ZW1wdGluZ0xvZ2luKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgICAgIDxBcHBIZWFkZXIgLz5cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2dpbiAvPlxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlbXB0aW5nTG9naW46IHN0YXRlLmF1dGguaXNGZXRjaGluZyxcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICAgIHNlYXJjaEluZGV4OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzRmV0Y2hpbmcsXG4gICAgICAgIGlzVXBkYXRpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzVXBkYXRpbmcsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sXG4gICAgICAgIGxhc3RVcGRhdGVkQnk6IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZW1wdFRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5XaXRoVG9rZW4odG9rZW4pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcHApXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBGbGFzaE1lc3NhZ2UgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IG1lc3NhZ2U9e21lc3NhZ2V9IHR5cGU9e3R5cGV9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBzdGF0ZS5mbGFzaC5tZXNzYWdlLFxuICAgICAgdHlwZTogc3RhdGUuZmxhc2gudHlwZVxuICAgIH1cbiAgfVxuKShGbGFzaE1lc3NhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeFxuICoqLyIsImltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL0xpbmtCdXR0b24nXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0Zvb3RlcixcbiAgSW5wdXQsIENoZWNrYm94LCBFZGl0b3IsIFNlbGVjdH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoe1xuICBtdWx0aXBsaWVycyA9IHtcbiAgICBtaW5IZWlnaHQ6IDMwLFxuICAgIF9faW5uZXI6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgaGVpZ2h0OiA1XG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1pbkhlaWdodDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5taW5IZWlnaHR9cmVtYFxuICB9XG5cbiAgY29uc3QgX19pbm5lclN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLl9faW5uZXIud2lkdGh9cmVtYCxcbiAgICBoZWlnaHQ6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMuX19pbm5lci5oZWlnaHR9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IHN0eWxlPXtfX2lubmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBjb2xvciA9ICdibHVlJ1xufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gW3N0eWxlcy5CdXR0b25dXG5cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkJ1dHRvbl9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5CdXR0b25fYmx1ZSlcbiAgICAgIGJyZWFrXG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2JsdWVcIjpcIkJ1dHRvbl9fQnV0dG9uX2JsdWVfX195LW92MlwiLFwiQnV0dG9uX3JlZFwiOlwiQnV0dG9uX19CdXR0b25fcmVkX19fQXZRWXNcIixcIkJ1dHRvbl9ncmVlblwiOlwiQnV0dG9uX19CdXR0b25fZ3JlZW5fX195X2ZlMlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbkJ1dHRvbi5jc3MnXG5cbmNvbnN0IEljb25CdXR0b24gPSAoe1xuICB0eXBlLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWUgPSBbc3R5bGVzLkljb25CdXR0b25dXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5JY29uQnV0dG9uX2RlbGV0ZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnY2xvc2UnOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkljb25CdXR0b25fY2xvc2UpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICB0bz17dG99IC8+XG4gICAgKVxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9XG4gICAgICAgIGhyZWY9e2hyZWZ9IC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSWNvbkJ1dHRvblwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9fX0dkVjdpXCIsXCJJY29uQnV0dG9uX2RlbGV0ZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9kZWxldGVfX19nbk5ZT1wiLFwiSWNvbkJ1dHRvbl9jbG9zZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9jbG9zZV9fXzI5X0dhXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmtCdXR0b24uY3NzJ1xuXG5jb25zdCBMaW5rQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRvID0gbnVsbCxcbiAgaHJlZiA9IG51bGwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5MaW5rQnV0dG9uXVxuXG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2dyZWVuKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdibHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2JsdWUpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rQnV0dG9uXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX19fMkZsaW1cIixcIkxpbmtCdXR0b25fYmx1ZVwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9ibHVlX19fMVc3c2xcIixcIkxpbmtCdXR0b25fcmVkXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX3JlZF9fXzNMdUdjXCIsXCJMaW5rQnV0dG9uX2dyZWVuXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX2dyZWVuX19fM3V2cmJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcblxuY29uc3QgQWxlcnQgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlID0gJ2xvZydcbn0pID0+IHtcbiAgY29uc3QgbWVzc2FnZUNsYXNzTmFtZXMgPSBbc3R5bGVzLkFsZXJ0X19tZXNzYWdlXVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsb2cnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9sb2cpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWxlcnR9PlxuICAgICAge21lc3NhZ2VcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzTmFtZXMuam9pbignICcpfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBbGVydFwiOlwiQWxlcnRfX0FsZXJ0X19fMzdfUUNcIixcIkFsZXJ0X19tZXNzYWdlXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfX18yd0NaRlwiLFwiQWxlcnRfX21lc3NhZ2VfbG9nXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfbG9nX19fMm41REhcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dC5jc3MnXG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgbGFiZWwgPSBudWxsLFxuICAgICAgbGFiZWxXaWR0aCA9IDgsXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgdHlwZSA9ICd0ZXh0JyxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBlcnJvciA9IG51bGxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGVycm9yRWwgPSAnJ1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JFbCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0fSAke2Vycm9yID8gc3R5bGVzLklucHV0X2Vycm9yIDogJyd9YH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtsYWJlbFdpZHRofXJlbWB9fSBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2lucHV0fVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKX0gLz5cblxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fczY3TjBcIixcIklucHV0X19sYWJlbFwiOlwiSW5wdXRfX0lucHV0X19sYWJlbF9fXzlKRFV1XCIsXCJJbnB1dF9faW5wdXRcIjpcIklucHV0X19JbnB1dF9faW5wdXRfX193YjFQRFwiLFwiSW5wdXRfX2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfX2Vycm9yX19fZmdrQ0RcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18ySllHeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94X19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveF9faW5wdXR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQuY2hlY2tlZCl9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQ2hlY2tib3gvQ2hlY2tib3guanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ2hlY2tib3hcIjpcIkNoZWNrYm94X19DaGVja2JveF9fXzFKWVFnXCIsXCJDaGVja2JveF9fbGFiZWxcIjpcIkNoZWNrYm94X19DaGVja2JveF9fbGFiZWxfX18zT0JVZFwiLFwiQ2hlY2tib3hfX2lucHV0XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2lucHV0X19fMW5ETVZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgU2NyaWJlIGZyb20gJ3NjcmliZS1lZGl0b3InXG5pbXBvcnQgVG9vbGJhciBmcm9tICdzY3JpYmUtcGx1Z2luLXRvb2xiYXInXG5pbXBvcnQgSGVhZGluZ0NtZCBmcm9tICdzY3JpYmUtcGx1Z2luLWhlYWRpbmctY29tbWFuZCdcbmltcG9ydCBMaW5rUHJvbXB0Q21kIGZyb20gJ3NjcmliZS1wbHVnaW4tbGluay1wcm9tcHQtY29tbWFuZCdcbmltcG9ydCBVbmxpbmtDbWQgZnJvbSAnc2NyaWJlLXBsdWdpbi1pbnRlbGxpZ2VudC11bmxpbmstY29tbWFuZCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHtGbGV4LCBCbG9ja30gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRvci5jc3MnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGVkaXRvciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy5lZGl0b3IpXG4gICAgY29uc3QgdG9vbGJhciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy50b29sYmFyKVxuXG4gICAgY29uc3Qgc2NyaWJlID0gbmV3IFNjcmliZShlZGl0b3IpXG4gICAgc2NyaWJlLnVzZShIZWFkaW5nQ21kKDEpKVxuICAgIHNjcmliZS51c2UoSGVhZGluZ0NtZCgyKSlcbiAgICBzY3JpYmUudXNlKExpbmtQcm9tcHRDbWQoKSlcbiAgICBzY3JpYmUudXNlKFVubGlua0NtZCgpKVxuICAgIHNjcmliZS51c2UoVG9vbGJhcih0b29sYmFyKSlcblxuICAgIHNjcmliZS5zZXRDb250ZW50KHRoaXMuc3RhdGUudmFsdWUpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcmliZS5vbignY29udGVudC1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogc2NyaWJlLmdldEhUTUwoKX0pXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaWJlLmdldEhUTUwoKSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc2NyaWJlID0gc2NyaWJlXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5zY3JpYmUuc2V0Q29udGVudChuZXdQcm9wcy52YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBuZXdQcm9wcy52YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7ZXJyb3IsIGxhYmVsfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcn0gJHtlcnJvciA/IHN0eWxlcy5FZGl0b3JfZXJyb3IgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fYm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX3Rvb2xiYXJ9IHJlZj1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gxfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMVwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gyfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfYm9sZH1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9pdGFsaWN9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cIml0YWxpY1wiPlxuICAgICAgICAgICAgICAgIGl0YWxpY1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX29sfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJpbnNlcnRPcmRlcmVkTGlzdFwiPlxuICAgICAgICAgICAgICAgIE9sXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfdWx9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImluc2VydFVuT3JkZXJlZExpc3RcIj5cbiAgICAgICAgICAgICAgICBVbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfbGlua31gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwibGlua1Byb21wdFwiPlxuICAgICAgICAgICAgICAgIExpbmtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF91bmxpbmt9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cInVubGlua1wiPlxuICAgICAgICAgICAgICAgIFVubGlua1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdG9yX19lZGl0b3J9IHJlZj1cImVkaXRvclwiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmpzeFxuICoqLyIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4J1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi9HcmlkJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi9MaXN0SW5saW5lJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX0gZnJvbSAnLi9NZWRpYSdcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4vUGFnZSdcblxuZXhwb3J0IHtCbG9jaywgRmxleCwgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sXG4gIExpc3QsIExpc3RJdGVtLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSxcbiAgTWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmUsXG4gIFBhZ2UsIFBhZ2VDb250ZW50XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXAgPSAoe1xuICB3aWR0aCA9ICc5MCUnLFxuICBtYXhXaWR0aCA9ICc4MHJlbScsIC8vIDEyODBweCBwcm92aWRlZCAxZW0gPT09IDE2cHhcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEdyaWQgPSAoe1xuICBndXR0ZXIgPSAwLFxuICBhbGlnbkl0ZW1zID0gJ3N0cmV0Y2gnLFxuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIG1hcmdpbkxlZnQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogYC0ke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgR3JpZEl0ZW0gPSAoe1xuICBzcGFuID0gMCxcbiAgb3V0T2YgPSAxMixcbiAgZ3V0dGVyID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nTGVmdDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2Z9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW4sXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAganVzdGZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0J1xufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0ZnlDb250ZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYV9fYm9keX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fXzNtRzB4XCIsXCJFZGl0b3JfX2xhYmVsXCI6XCJFZGl0b3JfX0VkaXRvcl9fbGFiZWxfX18xaGQtVVwiLFwiRWRpdG9yX19ib2R5XCI6XCJFZGl0b3JfX0VkaXRvcl9fYm9keV9fXzNGdWZRXCIsXCJFZGl0b3JfX3Rvb2xiYXJcIjpcIkVkaXRvcl9fRWRpdG9yX190b29sYmFyX19fMmNiZ1VcIixcIkVkaXRvcl9fY29tbWFuZFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfX18xNUtYa1wiLFwiRWRpdG9yX19jb21tYW5kX2gxXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9oMV9fXzJhdnJFXCIsXCJFZGl0b3JfX2NvbW1hbmRfaDJcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2gyX19fNWotTnRcIixcIkVkaXRvcl9fY29tbWFuZF9oM1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaDNfX18ydEFqTFwiLFwiRWRpdG9yX19jb21tYW5kX2JvbGRcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2JvbGRfX18zWWRKM1wiLFwiRWRpdG9yX19jb21tYW5kX2l0YWxpY1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaXRhbGljX19fMVVaQTBcIixcIkVkaXRvcl9fY29tbWFuZF9vbFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfb2xfX18yUlFiblwiLFwiRWRpdG9yX19jb21tYW5kX3VsXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bF9fX2NzOVZkXCIsXCJFZGl0b3JfX2NvbW1hbmRfbGlua1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfbGlua19fXzFfRFJ2XCIsXCJFZGl0b3JfX2NvbW1hbmRfdW5saW5rXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bmxpbmtfX18zRHc3dFwiLFwiRWRpdG9yX19zZXBhcmF0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19zZXBhcmF0b3JfX19iZjBwZVwiLFwiRWRpdG9yX19lZGl0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19lZGl0b3JfX18xX1N4Q1wiLFwiRWRpdG9yX19lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfX2Vycm9yX19fMW5NWGRcIixcIkVkaXRvcl9lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfZXJyb3JfX18xRzY2Q1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5jc3MnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQobyA9PiBvLmlkID09PSB2YWx1ZSlcbiAgICBjb25zdCBpbnB1dExhYmVsID0gc2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICdOb25lJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlbGVjdF9fbGFiZWx9YH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X193cmFwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9faW5wdXR9XG4gICAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHYudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvLmlkfT57by5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWxlY3RcIjpcIlNlbGVjdF9fU2VsZWN0X19fMXJQYkxcIixcIlNlbGVjdF9fbGFiZWxcIjpcIlNlbGVjdF9fU2VsZWN0X19sYWJlbF9fXzFHV3ZXXCIsXCJTZWxlY3RfX3dyYXBcIjpcIlNlbGVjdF9fU2VsZWN0X193cmFwX19fd3ZSYXhcIixcIlNlbGVjdF9fZmFrZVwiOlwiU2VsZWN0X19TZWxlY3RfX2Zha2VfX18zd2tkZFwiLFwiU2VsZWN0X19pbnB1dFwiOlwiU2VsZWN0X19TZWxlY3RfX2lucHV0X19fcjdleTdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLmNzcydcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkaW5nfT5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvYWRpbmdcIjpcIkxvYWRpbmdfX0xvYWRpbmdfX18zcHljelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBJbnB1dCwgQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7bG9naW5XaXRoQ3JlZGVudGlhbHN9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gdGhpcy5jaGFuZ2VFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGVtYWlsRXJyb3IgPSAnJ1xuICAgIGxldCBwYXNzd29yZEVycm9yID0gJydcblxuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PT0gJycpIHtcbiAgICAgIGVtYWlsRXJyb3IgPSAnZW1haWwgY2Fubm90IGJlIGVtcHR5J1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09PSAnJykge1xuICAgICAgcGFzc3dvcmRFcnJvciA9ICdwYXNzd29yZCBjYW5ub3QgYmUgYmxhbmsnXG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbEVycm9yICYmICFwYXNzd29yZEVycm9yKSB7XG4gICAgICBkaXNwYXRjaChsb2dpbldpdGhDcmVkZW50aWFscyh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsRXJyb3IsXG4gICAgICAgIHBhc3N3b3JkRXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRW1haWwgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogdmFsdWUsXG4gICAgICBlbWFpbEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmd9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFdpbmRvdz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5Mb2dpbjwvRmxleD5cbiAgICAgICAgICA8L01vZGFsV2luZG93SGVhZGVyPlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgIDxMaXN0IG49ezEuNX0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEJpZ1NlY3JldFwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbFdpbmRvdz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVR9KVxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aENyZWRlbnRpYWxzID0gKFxuICBlbWFpbCxcbiAgcGFzc3dvcmRcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2F1dGgvYWRtaW4vYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hdXRoL2FkbWluL2F1dGhlbnRpY2F0ZS10b2tlbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gJ1NFVF9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFVOU0VUX01FU1NBR0UgPSAnVU5TRVRfTUVTU0FHRSdcblxuY29uc3Qgc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGUsXG4gIHRpbWVvdXRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX01FU1NBR0UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICB0aW1lb3V0SWRcbiAgfVxufVxuXG5jb25zdCB1bnNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVTlNFVF9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXNoTWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVuc2V0TWVzc2FnZSgpKVxuICAgIH0sIDIwMDApXG5cbiAgICBkaXNwYXRjaChzZXRNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCB0KSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL1VzZXJJbmZvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9OYXYnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwSGVhZGVyLmNzcydcblxuY29uc3QgQXBwSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyfT5cbiAgICAgIDxMaXN0SW5saW5lIG49ezJ9PlxuICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBIZWFkZXJfX3NpdGVuYW1lfT5WYWNjaW5lIEFuc3dlcnMgQWRtaW48L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuXG4gICAgICA8VXNlckluZm8gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBIZWFkZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VySW5mby5jc3MnXG5cbmNvbnN0IFVzZXJJbmZvID0gKHtcbiAgdXNlcixcbiAgbG9nT3V0XG59KSA9PiB7XG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm99PlxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlzdElubGluZSBuPXswLjV9PlxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17MC41fT5Mb2dnZWQgaW4gYXM8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbSBuPXswLjV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm9fX3VzZXJuYW1lfT57dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9nT3V0fT5Mb2cgb3V0PC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiA8ZGl2IC8+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nT3V0OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQnLCAnbG9nJykpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFVzZXJJbmZvKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVXNlckluZm8vVXNlckluZm8uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVXNlckluZm9cIjpcIlVzZXJJbmZvX19Vc2VySW5mb19fXzJTTWpKXCIsXCJVc2VySW5mb19fdXNlcm5hbWVcIjpcIlVzZXJJbmZvX19Vc2VySW5mb19fdXNlcm5hbWVfX18yenlwVlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8vVXNlckluZm8uY3NzXG4gKiogbW9kdWxlIGlkID0gNjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdi5jc3MnXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdRdWVzdGlvbnMnLFxuICAgICAgdXJsOiAnL3F1ZXN0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnU2VjdGlvbnMnLFxuICAgICAgdXJsOiAnL3NlY3Rpb25zJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdVc2VycycsXG4gICAgICB1cmw6ICcvdXNlcnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NlYXJjaCBJbmRleCcsXG4gICAgICB1cmw6ICcvc2VhcmNoLWluZGV4J1xuICAgIH1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxuICAgICAgPExpc3RJbmxpbmUgbj17MC41fT5cbiAgICAgICAge2l0ZW1zLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezAuNX0ga2V5PXtpLnVybH0+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLk5hdl9faXRlbX1cbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5OYXZfX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgICAgICAgIHRvPXtpLnVybH0+e2kubGFiZWx9PC9MaW5rPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmF2L05hdi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOYXZcIjpcIk5hdl9fTmF2X19fM1B5eWVcIixcIk5hdl9faXRlbVwiOlwiTmF2X19OYXZfX2l0ZW1fX181SGJ1RVwiLFwiTmF2X19pdGVtX2FjdGl2ZVwiOlwiTmF2X19OYXZfX2l0ZW1fYWN0aXZlX19fMnE0dFRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBcHBIZWFkZXJcIjpcIkFwcEhlYWRlcl9fQXBwSGVhZGVyX19fMlU0S09cIixcIkFwcEhlYWRlcl9fc2l0ZW5hbWVcIjpcIkFwcEhlYWRlcl9fQXBwSGVhZGVyX19zaXRlbmFtZV9fXzNjZi1SXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXIvQXBwSGVhZGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXBwXCI6XCJBcHBfX0FwcF9fX2xCRVhJXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaFF1ZXN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgUXVlc3Rpb25zTGlzdEl0ZW0gZnJvbSAnLi4vUXVlc3Rpb25zTGlzdEl0ZW0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jbGFzcyBRdWVzdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hRdWVzdGlvbnN9ID0gdGhpcy5wcm9wc1xuXG4gICAgZmV0Y2hRdWVzdGlvbnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciBkaW1tZWQ9e3BhcmFtcy5xdWVzdGlvbklkfT5cbiAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICA8VGFibGVSb3cgaGVhZGluZz5cbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZyB0aXRsZT5RdWVzdGlvbnM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTBcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmc+cG9zdGVkIG9uPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaS5kYXRhLl9pZCA9PT0gcGFyYW1zLnF1ZXN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uc0xpc3RJdGVtIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbj17aX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17cGFyYW1zLnF1ZXN0aW9uSWR9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUucXVlc3Rpb25zLml0ZW1zLFxuICAgICAgaXNGZXRjaGluZzogc3RhdGUucXVlc3Rpb25zLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmV0Y2hRdWVzdGlvbnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hRdWVzdGlvbnMoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3QvUXVlc3Rpb25zTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05TID0gJ1JFUVVFU1RfUVVFU1RJT05TJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUVVFU1RJT05TID0gJ1JFQ0VJVkVfUVVFU1RJT05TJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTl9VUERBVEUgPSAnUkVRVUVTVF9RVUVTVElPTl9VUERBVEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9RVUVTVElPTl9VUERBVEUgPSAnUkVDRUlWRV9RVUVTVElPTl9VUERBVEUnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9RVUVTVElPTiA9ICdSRVFVRVNUX0RFTEVURV9RVUVTVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9RVUVTVElPTiA9ICdDT05GSVJNX0RFTEVURV9RVUVTVElPTidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OID0gJ1JFSkVDVF9ERUxFVEVfUVVFU1RJT04nXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0UXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05TXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVF1ZXN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RRdWVzdGlvbnMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlUXVlc3Rpb25zKGpzb24uZGF0YS5xdWVzdGlvbnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVVwZGF0ZSA9IChcbiAgaWQsXG4gIHVwZGF0ZWRRdWVzdGlvblxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9RVUVTVElPTl9VUERBVEUsXG4gICAgaWQsXG4gICAgdXBkYXRlZFF1ZXN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9xdWVzdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXN0aW9uOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLnF1ZXN0aW9uKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfUVVFU1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVF1ZXN0aW9uID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL3F1ZXN0aW9ucy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnUXVlc3Rpb24gd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBCYWRnZSBmcm9tICcuLi9CYWRnZSdcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNMaXN0SXRlbS5jc3MnXG5cbmNvbnN0IFF1ZXN0aW9uc0xpc3RJdGVtID0gKHtcbiAgcXVlc3Rpb24sXG4gIGRpc2FibGVJbnRlcmFjdGlvblxufSkgPT4ge1xuICBjb25zdCB0cnVuY2F0ZWRUZXh0ID0gYCR7cXVlc3Rpb24uZGF0YS5xdWVzdGlvbi5zbGljZSgzLCBNYXRoLm1pbihxdWVzdGlvbi5kYXRhLnF1ZXN0aW9uLmxlbmd0aCAtIDMsIDcwKSl9Li5gXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3cgaW50ZXJhY3RpdmU9eyFkaXNhYmxlSW50ZXJhY3Rpb259PlxuICAgICAgPFRhYmxlQ29sdW1uPlxuICAgICAgICA8SWNvbiB0eXBlPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMTBcIj5cbiAgICAgICAgPFRhYmxlQ2VsbCB0aXRsZVxuICAgICAgICAgIHRvPXtkaXNhYmxlSW50ZXJhY3Rpb24gPyBudWxsIDogYC9xdWVzdGlvbnMvJHtxdWVzdGlvbi5kYXRhLl9pZH1gfT5cbiAgICAgICAgICB7cXVlc3Rpb24uZGF0YS5wb3N0ZXJOYW1lfVxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgPFRhYmxlQ2VsbCB0bz17ZGlzYWJsZUludGVyYWN0aW9uID8gbnVsbCA6IGAvcXVlc3Rpb25zLyR7cXVlc3Rpb24uZGF0YS5faWR9YH0+XG4gICAgICAgICAge3RydW5jYXRlZFRleHR9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMTBcIj5cbiAgICAgICAge3F1ZXN0aW9uLmRhdGEuaXNTZWVuXG4gICAgICAgICAgPyAnJ1xuICAgICAgICAgIDogKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgIDxCYWRnZSBsYWJlbD1cIk5vdCBBbnN3ZXJlZFwiIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgPFRhYmxlQ29sdW1uIGxhc3RcbiAgICAgICAgd2lkdGg9XCIxMFwiPlxuICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgIDxUaW1lIHZhbHVlPXtxdWVzdGlvbi5kYXRhLmNyZWF0ZWRBdH0gZm9ybWF0PVwiaDptbSBBIG9uIE1NTSBEb1wiIC8+XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICA8L1RhYmxlUm93PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uc0xpc3RJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0SXRlbS9RdWVzdGlvbnNMaXN0SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWRnZS5jc3MnXG5cbmNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5CYWRnZV1cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfYmx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT57bGFiZWx9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJhZGdlXCI6XCJCYWRnZV9fQmFkZ2VfX18zM2VRUlwiLFwiQmFkZ2VfYmx1ZVwiOlwiQmFkZ2VfX0JhZGdlX2JsdWVfX196MzNSbFwiLFwiQmFkZ2VfcmVkXCI6XCJCYWRnZV9fQmFkZ2VfcmVkX19fM1pyU2xcIixcIkJhZGdlX2dyZWVuXCI6XCJCYWRnZV9fQmFkZ2VfZ3JlZW5fX19vNEhWNlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNzU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJRdWVzdGlvbnNMaXN0SXRlbVwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX19fMjlyeHlcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RJdGVtL1F1ZXN0aW9uc0xpc3RJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7dXBkYXRlUXVlc3Rpb24sIGRlbGV0ZVF1ZXN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtGbGV4LCBCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbi5jc3MnXG5cbmNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnRvZ2dsZUFuc3dlcmVkID0gdGhpcy50b2dnbGVBbnN3ZXJlZC5iaW5kKHRoaXMpXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkZWxldGVRdWVzdGlvbiwgcXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb24uZGF0YS5faWQpXG4gIH1cblxuICB0b2dnbGVBbnN3ZXJlZCAoKSB7XG4gICAgY29uc3Qge3VwZGF0ZVF1ZXN0aW9uLCBxdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICB1cGRhdGVRdWVzdGlvbihxdWVzdGlvbi5kYXRhLl9pZCwge1xuICAgICAgaXNTZWVuOiAhcXVlc3Rpb24uZGF0YS5pc1NlZW5cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7cXVlc3Rpb24uZGF0YS5wb3N0ZXJFbWFpbH0/c3ViamVjdD1SZXBseSB0byB5b3VyIHF1ZXN0aW9ucyBvbiBWYWNjaW5lIEFuc3dlcnNgfT5SZXBseSB2aWEgZW1haWw8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQW5zd2VyZWR9Pk1hcmsgYXMgYW5zd2VyZWQ8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICB0bz1cIi9xdWVzdGlvbnNcIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHF1ZXN0aW9uLmRhdGEuaXNTZWVuKSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQW5zd2VyZWR9Pk1hcmsgYXMgbm90IGFuc3dlcmVkPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICB0bz1cIi9xdWVzdGlvbnNcIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxkaXYgcmVmPXtlbCA9PiB7IHRoaXMuX2JvZHkgPSBlbCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT57cXVlc3Rpb24uZGF0YS5wb3N0ZXJOYW1lfTwvZGl2PlxuXG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kYXRhLmlzU2VlbiA/ICcnIDogPEJhZGdlIGxhYmVsPVwiTm90IEFuc3dlcmVkXCIgY29sb3I9XCJyZWRcIiAvPn1cbiAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lc3RhbXB9PlxuICAgICAgICAgICAgICAgICAgICA8VGltZSB2YWx1ZT17cXVlc3Rpb24uZGF0YS5jcmVhdGVkQXR9IGZvcm1hdD1cImg6bW0gQSBvbiBNTU0gRG9cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsfT57cXVlc3Rpb24uZGF0YS5wb3N0ZXJFbWFpbH08L2Rpdj5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcXVlc3Rpb24uZGF0YS5xdWVzdGlvbn19IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25fX2Zvb3Rlcn0+XG4gICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3F1ZXN0aW9uSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uc1xuICAgICAgICA/IHN0YXRlLnF1ZXN0aW9ucy5pdGVtcy5maW5kKGkgPT4gaS5kYXRhLl9pZCA9PT0gcXVlc3Rpb25JZClcbiAgICAgICAgOiB7ZGF0YToge319XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZVF1ZXN0aW9uOiAoaWQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZGVsZXRlUXVlc3Rpb24oaWQpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVF1ZXN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlUXVlc3Rpb24oaWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShRdWVzdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlF1ZXN0aW9uXCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX18xaWJ1NlwiLFwiUXVlc3Rpb25fX2JvZHlcIjpcIlF1ZXN0aW9uX19RdWVzdGlvbl9fYm9keV9fXzJSNHBlXCIsXCJRdWVzdGlvbl9fZm9vdGVyXCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX2Zvb3Rlcl9fXzRWV1l5XCIsXCJOYW1lXCI6XCJRdWVzdGlvbl9fTmFtZV9fXzE0Yk9QXCIsXCJFbWFpbFwiOlwiUXVlc3Rpb25fX0VtYWlsX19fMUQzT3BcIixcIlRpbWVzdGFtcFwiOlwiUXVlc3Rpb25fX1RpbWVzdGFtcF9fXzJyc3doXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hVc2Vyc30gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBVc2Vyc0xpc3RJdGVtIGZyb20gJy4uL1VzZXJzTGlzdEl0ZW0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtmZXRjaFVzZXJzfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc05ld1VzZXJGb3JtID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdXNlcnMvbmV3J1xuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3VXNlckZvcm0gfHwgcGFyYW1zLnVzZXJJZFxuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciBkaW1tZWQ9e2Rpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlUm93IGhlYWRpbmc+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmcgdGl0bGU+VXNlcnM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyNVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZz5sYXN0IHNlZW48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdCB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz1cIi91c2Vycy9uZXdcIj5hZGQgbmV3IHVzZXI8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICB7aXNOZXdVc2VyRm9ybVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge2l0ZW1zLm1hcCgodSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHUuZGF0YS5faWQgPT09IHBhcmFtcy51c2VySWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8VXNlcnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICB1c2VyPXt1fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUudXNlcnMuaXRlbXMsXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS51c2Vycy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoVXNlcnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2Vyc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSUyA9ICdSRVFVRVNUX1VTRVJTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfVVNFUlMgPSAnUkVDRUlWRV9VU0VSUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1VTRVIgPSAnQ1JFQVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfVVNFUiA9ICdDT05GSVJNX0NSRUFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfVVNFUiA9ICdSRUpFQ1RfQ1JFQVRFX1VTRVInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9VU0VSID0gJ1JFUVVFU1RfREVMRVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfVVNFUiA9ICdDT05GSVJNX0RFTEVURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfVVNFUiA9ICdSRUpFQ1RfREVMRVRFX1VTRVInXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0RmV0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VU0VSU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVGZXRjaCA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfVVNFUlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmV0Y2goKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlRmV0Y2goanNvbi5kYXRhLnVzZXJzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy91c2Vycy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0VXBkYXRlKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX1VTRVJcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9VU0VSLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9VU0VSLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHVzZXIgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VzZXJzTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBVc2Vyc0xpc3RJdGVtID0gKHtcbiAgdXNlcixcbiAgZGlzYWJsZUludGVyYWN0aW9uXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBpZiAodXNlci5kYXRhLmlzRW5hYmxlZCkge1xuICAgIGlmICh1c2VyLmRhdGEuYWRtaW4pIHtcbiAgICAgIGljb24gPSAndXNlci1hZG1pbidcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbiA9ICd1c2VyJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpY29uID0gJ3VzZXItZGlzYWJsZWQnXG4gIH1cblxuICBsZXQgdGltZXN0YW1wID0gJydcbiAgaWYgKHVzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdCkge1xuICAgIHRpbWVzdGFtcCA9IDxUaW1lIHZhbHVlPXt1c2VyLmRhdGEubGFzdExvZ2dlZEluQXR9IGZvcm1hdD1cIk1NTSBEbyBoOm1tIEFcIiAvPlxuICB9IGVsc2Uge1xuICAgIHRpbWVzdGFtcCA9ICduZXZlciBsb2dnZWQgaW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVXNlcnNMaXN0SXRlbX1cbiAgICAgICR7ZGlzYWJsZUludGVyYWN0aW9uID8gJycgOiBzdHlsZXMuVXNlcnNMaXN0SXRlbV9pbnRlcmFjdGl2ZX1gfT5cbiAgICAgIDxUYWJsZVJvdyBpbnRlcmFjdGl2ZT17IWRpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgIDxUYWJsZUNvbHVtbj5cbiAgICAgICAgICA8SWNvbiB0eXBlPXtpY29ufSAvPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlPlxuICAgICAgICAgICAge3VzZXIuZGF0YS5uYW1lfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICh7dXNlci5kYXRhLmVtYWlsfSlcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIxNVwiPlxuICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICB7dGltZXN0YW1wfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjE1XCI+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICB7dXNlci5kYXRhLmFkbWluXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFkZ2V9PlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGxhYmVsPVwiQWRtaW5cIiBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IXVzZXIuZGF0YS5pc0VuYWJsZWRcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJEaXNhYmxlZFwiIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiBsYXN0XG4gICAgICAgICAgd2lkdGg9XCI1XCI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlcnNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC91c2Vycy8ke3VzZXIuZGF0YS5faWR9YH0+ZWRpdDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNMaXN0SXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlVzZXJzTGlzdEl0ZW1cIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX18xam9BN1wiLFwiVXNlcnNMaXN0SXRlbV9fYWN0aW9uc1wiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fYWN0aW9uc19fX0dlTFMxXCIsXCJVc2Vyc0xpc3RJdGVtX2ludGVyYWN0aXZlXCI6XCJVc2Vyc0xpc3RJdGVtX19Vc2Vyc0xpc3RJdGVtX2ludGVyYWN0aXZlX19fM1VrRWZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlVXNlciwgZGVsZXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94fSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRVc2VyRm9ybS5jc3MnXG5cbmNsYXNzIEVkaXRVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnVzZXIuZGF0YSwge1xuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0pLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy51c2VyXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge3VzZXI6IHtkYXRhOiB7X2lkOiBpZH19LCB1cGRhdGVVc2VyfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmRhdGEpXG5cbiAgICBpZiAoIXBheWxvYWQucGFzc3dvcmQpIHtcbiAgICAgIGRlbGV0ZSBwYXlsb2FkLnBhc3N3b3JkXG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihpZCwgcGF5bG9hZClcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgY29uc3Qge3VzZXI6IHtkYXRhOiB1c2VyfX0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdXNlciwge1xuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0pLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlVXNlciwgdXNlcjoge2RhdGE6IHtfaWQ6IGlkfX19ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlVXNlcihpZClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzVXBkYXRpbmd9ID0gdGhpcy5wcm9wcy51c2VyXG5cbiAgICBsZXQgYWN0aW9ucyA9IChcbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD5BbGwgU2F2ZWQ8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICAgIGlmICh0aGlzLnN0YXRlLmlzRGlydHkpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIHRvPVwiL3VzZXJzL1wiPkRpc2NhcmQgQ2hhbmdlczwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdFVzZXJGb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm1fX2JvZHl9PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ25hbWUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdlbWFpbCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3Bhc3N3b3JkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJFbmFibGVkXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzRW5hYmxlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNFbmFibGVkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJBZG1pblwiXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuYWRtaW59XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnYWRtaW4nLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdFVzZXJGb3JtX19mb290ZXJ9PlxuICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7dXNlcklkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXJzXG4gICAgICAgID8gc3RhdGUudXNlcnMuaXRlbXMuZmluZChpID0+IGkuZGF0YS5faWQgPT09IHVzZXJJZClcbiAgICAgICAgOiB7ZGF0YToge30sIGlzVXBkYXRpbmc6IHRydWV9XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZVVzZXI6IChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVVc2VyKGlkKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVVc2VyOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlVXNlcihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEVkaXRVc2VyRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0VkaXRVc2VyRm9ybS9FZGl0VXNlckZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdFVzZXJGb3JtXCI6XCJFZGl0VXNlckZvcm1fX0VkaXRVc2VyRm9ybV9fXzM0VXlQXCIsXCJFZGl0VXNlckZvcm1fX2JvZHlcIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19ib2R5X19fMVVqbDdcIixcIkVkaXRVc2VyRm9ybV9fZm9vdGVyXCI6XCJFZGl0VXNlckZvcm1fX0VkaXRVc2VyRm9ybV9fZm9vdGVyX19fM3RKU3dcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0VkaXRVc2VyRm9ybS9FZGl0VXNlckZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NyZWF0ZVVzZXJ9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJzQWN0aW9ucydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sIEJsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIExpbmtCdXR0b24sIElucHV0LCBDaGVja2JveH0gZnJvbSAnLi4vVUknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdVc2VyRm9ybS5jc3MnXG5cbmNsYXNzIE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBhZG1pbjogJycsXG4gICAgICAgIGlzRW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVVc2VyfSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZVVzZXIodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLml0ZW1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OZXdVc2VyRm9ybV9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnbmFtZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2VtYWlsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkVuYWJsZWRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNFbmFibGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0VuYWJsZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkFkbWluXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5hZG1pbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdhZG1pbicsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OZXdVc2VyRm9ybV9fZm9vdGVyfT5cbiAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHRvPVwiL3VzZXJzL1wiPkNhbmNlbDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLnVzZXJzXG4gICAgICAgID8gc3RhdGUudXNlcnMubmV3VXNlclxuICAgICAgICA6IHtkYXRhOiB7fSwgaXNVcGRhdGluZzogdHJ1ZSwgZXJyb3JzOiB7fX1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlVXNlcjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVVzZXIoaWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShOZXdVc2VyRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5ld1VzZXJGb3JtXCI6XCJOZXdVc2VyRm9ybV9fTmV3VXNlckZvcm1fX19IS0xRZ1wiLFwiTmV3VXNlckZvcm1fX2JvZHlcIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fYm9keV9fX2hZY01GXCIsXCJOZXdVc2VyRm9ybV9fZm9vdGVyXCI6XCJOZXdVc2VyRm9ybV9fTmV3VXNlckZvcm1fX2Zvb3Rlcl9fXzF2UzZmXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OZXdVc2VyRm9ybS9OZXdVc2VyRm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NvcnRhYmxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZSdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgU2VjdGlvbnNMaXN0SXRlbSBmcm9tICcuLi9TZWN0aW9uc0xpc3RJdGVtJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBTdWJTZWN0aW9uc0xpc3QgZnJvbSAnLi4vU3ViU2VjdGlvbnNMaXN0J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgU2VjdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLm1ldGFTZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogbmV3UHJvcHMubWV0YVNlY3Rpb24uZGF0YS5jaGlsZHJlblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTdGF0ZSAob2JqKSB7XG4gICAgaWYgKG9iai5kcmFnZ2luZ0luZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB7bWV0YVNlY3Rpb24sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgICB1cGRhdGVTZWN0aW9uKG1ldGFTZWN0aW9uLmRhdGEuX2lkLCB7XG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnN0YXRlLmRhdGEuaXRlbXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShvYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgbWV0YVNlY3Rpb24sIHNlY3Rpb25zLCBsb2NhdGlvbiwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGlzTmV3U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2VjdGlvbnMvbmV3J1xuICAgIGNvbnN0IGlzRWRpdFNlY3Rpb25Sb3V0ZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH0vZWRpdGBcbiAgICBjb25zdCBkaXNhYmxlSW50ZXJhY3Rpb24gPSBpc05ld1NlY3Rpb25Sb3V0ZSB8fCBpc0VkaXRTZWN0aW9uUm91dGVcblxuICAgIHJldHVybiAoXG4gICAgICA8V3JhcHBlciBkaW1tZWQ9e2Rpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgIDxUYWJsZT5cbiAgICAgICAgICA8VGFibGVSb3cgaGVhZGluZz5cbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBoZWFkaW5nIHRpdGxlPnttZXRhU2VjdGlvbi5kYXRhLnRpdGxlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMjBcIj5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBoZWFkaW5nPnVybDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGxhc3RcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiPlxuICAgICAgICAgICAgICB7ZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy9uZXc/cGFyZW50SWQ9JHttZXRhU2VjdGlvbi5kYXRhLl9pZH1gfT5hZGQgbmV3IHNlY3Rpb248L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG5cbiAgICAgICAgICB7aXNOZXdTZWN0aW9uUm91dGUgJiYgbG9jYXRpb24ucXVlcnkucGFyZW50SWQgPT09IG1ldGFTZWN0aW9uLmRhdGEuX2lkXG4gICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5pdGVtcy5tYXAoKHNlY3Rpb25JZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRWRpdFNlY3Rpb25Sb3V0ZSAmJiBzZWN0aW9uSWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb24gPSBzZWN0aW9ucy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbklkKVxuICAgICAgICAgICAgICBjb25zdCBzdWJzZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcihzID0+IHNlY3Rpb24uZGF0YS5jaGlsZHJlbi5pbmRleE9mKHMuZGF0YS5faWQpICE9PSAtMSlcblxuICAgICAgICAgICAgICBsZXQgc3Vic2VjdGlvbnNMaXN0ID0gKFxuICAgICAgICAgICAgICAgIDxTdWJTZWN0aW9uc0xpc3Qgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHN1YnNlY3Rpb25zPXtzdWJzZWN0aW9uc31cbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICAgICAgbG9jYXRpb249e2xvY2F0aW9ufSAvPlxuICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgaWYgKGRpc2FibGVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uc0xpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e21ldGFTZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7c3Vic2VjdGlvbnNMaXN0fVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5kYXRhLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZ0luZGV4PXt0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHNvcnRJZD17aX1cbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW0gc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e21ldGFTZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7c3Vic2VjdGlvbnNMaXN0fVxuICAgICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3QgbWV0YVNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLnVybCA9PT0gJ21haW4tbmF2JyAmJiBzLmRhdGEuc2VjdGlvblR5cGUgPT09ICdtZXRhJylcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uczogc3RhdGUuc2VjdGlvbnMuaXRlbXMsXG4gICAgICBtZXRhU2VjdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVTZWN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VjdGlvbihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlY3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdC9TZWN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NFQ1RJT05TID0gJ1JFUVVFU1RfU0VDVElPTlMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9TRUNUSU9OUyA9ICdSRUNFSVZFX1NFQ1RJT05TJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfU0VDVElPTiA9ICdSRVFVRVNUX1VQREFURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04gPSAnQ09ORklSTV9VUERBVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX1NFQ1RJT04gPSAnUkVKRUNUX1VQREFURV9TRUNUSU9OJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9DUkVBVEVfU0VDVElPTiA9ICdDUkVBVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NSRUFURV9TRUNUSU9OID0gJ0NPTkZJUk1fQ1JFQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX0NSRUFURV9TRUNUSU9OID0gJ1JFSkVDVF9DUkVBVEVfU0VDVElPTidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfREVMRVRFX1NFQ1RJT04gPSAnUkVRVUVTVF9ERUxFVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9TRUNUSU9OID0gJ0NPTkZJUk1fREVMRVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9TRUNUSU9OID0gJ1JFSkVDVF9ERUxFVEVfU0VDVElPTidcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RTZWN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1NFQ1RJT05TXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlY3Rpb25zID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9TRUNUSU9OUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlY3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RTZWN0aW9ucygpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWN0aW9ucyhqc29uLmRhdGEuaXRlbXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9TRUNUSU9OLFxuICAgIGlkLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWNlaXZlRXJyb3JzID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX1NFQ1RJT04sXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlY3Rpb24gPSAoXG4gIGlkLFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlY3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzZWN0aW9uOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLnNlY3Rpb24pKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnU2VjdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnbG9nJykpXG4gICAgICAgICAgaWYgKGJhY2tsaW5rKSB7XG4gICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGJhY2tsaW5rKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlRXJyb3JzKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgc2VjdGlvbiBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT05cbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9TRUNUSU9OLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9TRUNUSU9OLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTZWN0aW9uID0gKFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdENyZWF0ZSgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWN0aW9ucy9gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBzZWN0aW9uOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybUNyZWF0ZShqc29uLmRhdGEuc2VjdGlvbikpXG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShqc29uLmRhdGEucGFyZW50Ll9pZCwganNvbi5kYXRhLnBhcmVudCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdTZWN0aW9uIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgLy8gVE9ETzogdGVzdCB2YWxpZGF0aW9uIGVycm9yc1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdENyZWF0ZShwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCBjcmVhdGUgc2VjdGlvbiBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9ERUxFVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1EZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0RFTEVURV9TRUNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0RFTEVURV9TRUNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNlY3Rpb24gPSAoXG4gIGlkLFxuICBjaGlsZHJlbixcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3REZWxldGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWN0aW9ucy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShqc29uLmRhdGEucGFyZW50Ll9pZCwganNvbi5kYXRhLnBhcmVudCkpXG4gICAgICAgICAgaWYgKGJhY2tsaW5rKSB7XG4gICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGJhY2tsaW5rKVxuICAgICAgICAgIH1cbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBjaGlsZHJlbi5tYXAoYyA9PiBjb25maXJtRGVsZXRlKGMpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnU2VjdGlvbiB3YXMgZGVsZXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3REZWxldGUoaWQpKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWN0aW9uc0xpc3RJdGVtLmNzcydcblxuY29uc3QgU2VjdGlvbnNMaXN0SXRlbSA9ICh7XG4gIHNlY3Rpb24sXG4gIHBhcmVudCxcbiAgZGlzYWJsZUludGVyYWN0aW9uXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgIGljb24gPSAnZm9sZGVyJ1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBpY29uID0gJ2ZpbGUtY29kZSdcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICBpY29uID0gJ2ZpbGUtdGV4dCdcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdibG9ncG9zdHMnKSB7XG4gICAgaWNvbiA9ICdmaWxlLWJsb2dwb3N0J1xuICB9XG5cbiAgbGV0IHVybCA9ICcnXG4gIGlmIChwYXJlbnQuZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ21ldGEnKSB7XG4gICAgdXJsID0gYC8ke3NlY3Rpb24uZGF0YS51cmx9YFxuICB9IGVsc2Uge1xuICAgIHVybCA9IGAvJHtwYXJlbnQuZGF0YS51cmx9LyR7c2VjdGlvbi5kYXRhLnVybH1gXG4gIH1cblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gdG89e2Avc2VjdGlvbnMvbmV3P3BhcmVudElkPSR7c2VjdGlvbi5kYXRhLl9pZH1gfT5hZGQgbmV3IHN1Yi1zZWN0aW9uPC9MaW5rQnV0dG9uPlxuXG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3NlY3Rpb24uZGF0YS5faWR9L2VkaXRgfT5lZGl0PC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gdG89e2Avc2VjdGlvbnMvJHtzZWN0aW9uLmRhdGEuX2lkfS9lZGl0YH0+ZWRpdDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBzZWN0aW9uTGluayA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uICYmIHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSAhPT0gJ3BhcmVudCcpIHtcbiAgICBzZWN0aW9uTGluayA9IGAvc2VjdGlvbnMvJHtzZWN0aW9uLmRhdGEuX2lkfWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtfVxuICAgICAgJHtkaXNhYmxlSW50ZXJhY3Rpb24gPyAnJyA6IHN0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlfWB9PlxuICAgICAgPFRhYmxlUm93IGludGVyYWN0aXZlPXshZGlzYWJsZUludGVyYWN0aW9ufVxuICAgICAgICBpbmRlbnRlZD17cGFyZW50LmRhdGEuc2VjdGlvblR5cGUgIT09ICdtZXRhJ30+XG4gICAgICAgIDxUYWJsZUNvbHVtbj5cbiAgICAgICAgICA8SWNvbiB0eXBlPXtpY29ufSAvPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlXG4gICAgICAgICAgICB0bz17c2VjdGlvbkxpbmt9PlxuICAgICAgICAgICAge3NlY3Rpb24uZGF0YS50aXRsZX1cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyMFwiPlxuICAgICAgICAgIDxUYWJsZUNlbGw+e3VybH08L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIxNVwiXG4gICAgICAgICAgbGFzdD5cbiAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbnNMaXN0SXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VjdGlvbnNMaXN0SXRlbS9TZWN0aW9uc0xpc3RJdGVtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlUm93LmNzcydcblxuY29uc3QgVGFibGVSb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgaW50ZXJhY3RpdmUgPSBmYWxzZSxcbiAgaGVhZGluZyA9IGZhbHNlLFxuICBpbmRlbnRlZCA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5UYWJsZVJvd11cbiAgaWYgKGhlYWRpbmcpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlUm93X2hlYWRpbmcpXG4gIH1cbiAgaWYgKGludGVyYWN0aXZlKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZVJvd19pbnRlcmFjdGl2ZSlcbiAgfVxuICBpZiAoaW5kZW50ZWQpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlUm93X2luZGVudGVkKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlUm93XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUYWJsZVJvd1wiOlwiVGFibGVSb3dfX1RhYmxlUm93X19fMlVCTjlcIixcIlRhYmxlUm93X2hlYWRpbmdcIjpcIlRhYmxlUm93X19UYWJsZVJvd19oZWFkaW5nX19fMVo5ZVFcIixcIlRhYmxlUm93X2ludGVyYWN0aXZlXCI6XCJUYWJsZVJvd19fVGFibGVSb3dfaW50ZXJhY3RpdmVfX19pNUpyVlwiLFwiVGFibGVSb3dfaW5kZW50ZWRcIjpcIlRhYmxlUm93X19UYWJsZVJvd19pbmRlbnRlZF9fXzI4Vjc2XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlQ29sdW1uLmNzcydcblxuY29uc3QgVGFibGVDb2x1bW4gPSAoe1xuICBjaGlsZHJlbixcbiAgd2lkdGgsXG4gIGxhc3QgPSBmYWxzZVxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ1JpZ2h0OiBsYXN0ID8gMCA6ICcxLjVyZW0nXG4gIH1cbiAgaWYgKHdpZHRoID09PSAnc3RyZXRjaCcpIHtcbiAgICBzdHlsZS5mbGV4ID0gMVxuICB9IGVsc2Uge1xuICAgIHN0eWxlLndpZHRoID0gYCR7d2lkdGh9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29sdW1ufT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbHVtblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVDb2x1bW5cIjpcIlRhYmxlQ29sdW1uX19UYWJsZUNvbHVtbl9fXzFUdWJzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVDZWxsLmNzcydcblxuY29uc3QgVGFibGVDZWxsID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gZmFsc2UsXG4gIGhlYWRpbmcgPSBmYWxzZSxcbiAgdG8gPSBudWxsXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW11cblxuICBpZiAoaGVhZGluZykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVIZWFkaW5nQ2VsbClcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUhlYWRpbmdDZWxsX3RpdGxlKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlQ2VsbClcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUNlbGxfdGl0bGUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXt0b31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNlbGxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlQ2VsbC9UYWJsZUNlbGwuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVDZWxsXCI6XCJUYWJsZUNlbGxfX1RhYmxlQ2VsbF9fXzNqQ3hvXCIsXCJUYWJsZUNlbGxfdGl0bGVcIjpcIlRhYmxlQ2VsbF9fVGFibGVDZWxsX3RpdGxlX19fT1Z5a3RcIixcIlRhYmxlSGVhZGluZ0NlbGxcIjpcIlRhYmxlQ2VsbF9fVGFibGVIZWFkaW5nQ2VsbF9fXzNDU1REXCIsXCJUYWJsZUhlYWRpbmdDZWxsX3RpdGxlXCI6XCJUYWJsZUNlbGxfX1RhYmxlSGVhZGluZ0NlbGxfdGl0bGVfX195T2RXNlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGVDZWxsL1RhYmxlQ2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24uY3NzJ1xuXG5jb25zdCBJY29uID0gKHtcbiAgdHlwZVxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuSWNvbl1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdlbnZlbG9wZSc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZW52ZWxvcGUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZvbGRlcic6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZm9sZGVyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLWNvZGUnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVDb2RlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLXRleHQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVUZXh0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLXRleHQtZHJhZnQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVUZXh0RHJhZnQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtYmxvZ3Bvc3QnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVCbG9ncG9zdClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS1ibG9ncG9zdC1kcmFmdCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZUJsb2dwb3N0RHJhZnQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VzZXInOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3VzZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VzZXItYWRtaW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3VzZXJBZG1pbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXNlci1kaXNhYmxlZCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fdXNlckRpc2FibGVkKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwbHVzJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9wbHVzKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ljb24vSWNvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJY29uXCI6XCJJY29uX19JY29uX19fMzhFcHZcIixcIkljb25fZW52ZWxvcGVcIjpcIkljb25fX0ljb25fZW52ZWxvcGVfX18ydE5ReFwiLFwiSWNvbl9mb2xkZXJcIjpcIkljb25fX0ljb25fZm9sZGVyX19fMVk0blRcIixcIkljb25fZmlsZUNvZGVcIjpcIkljb25fX0ljb25fZmlsZUNvZGVfX19MZG1OLVwiLFwiSWNvbl9maWxlVGV4dFwiOlwiSWNvbl9fSWNvbl9maWxlVGV4dF9fXzNTYlcwXCIsXCJJY29uX2ZpbGVUZXh0RHJhZnRcIjpcIkljb25fX0ljb25fZmlsZVRleHREcmFmdF9fXzNOU25SXCIsXCJJY29uX2ZpbGVCbG9ncG9zdFwiOlwiSWNvbl9fSWNvbl9maWxlQmxvZ3Bvc3RfX19Bc004Z1wiLFwiSWNvbl9maWxlQmxvZ3Bvc3REcmFmdFwiOlwiSWNvbl9fSWNvbl9maWxlQmxvZ3Bvc3REcmFmdF9fXzJIU0owXCIsXCJJY29uX3VzZXJcIjpcIkljb25fX0ljb25fdXNlcl9fXzM2MGZKXCIsXCJJY29uX3VzZXJBZG1pblwiOlwiSWNvbl9fSWNvbl91c2VyQWRtaW5fX18yd2dxQlwiLFwiSWNvbl91c2VyRGlzYWJsZWRcIjpcIkljb25fX0ljb25fdXNlckRpc2FibGVkX19fRGNKcDlcIixcIkljb25fcGx1c1wiOlwiSWNvbl9fSWNvbl9wbHVzX19fMTBwVHZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlY3Rpb25zTGlzdEl0ZW1cIjpcIlNlY3Rpb25zTGlzdEl0ZW1fX1NlY3Rpb25zTGlzdEl0ZW1fX18xS1pFUVwiLFwiU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc1wiOlwiU2VjdGlvbnNMaXN0SXRlbV9fU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc19fX3hpQklHXCIsXCJTZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlXCI6XCJTZWN0aW9uc0xpc3RJdGVtX19TZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlX19faUVKSl9cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NvcnRhYmxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZSdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgU2VjdGlvbnNMaXN0SXRlbSBmcm9tICcuLi9TZWN0aW9uc0xpc3RJdGVtJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgU3ViU2VjdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLnNlY3Rpb24uZGF0YS5jaGlsZHJlblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBuZXdQcm9wcy5zZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU3RhdGUgKG9iaikge1xuICAgIGlmIChvYmouZHJhZ2dpbmdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qge3NlY3Rpb24sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgICB1cGRhdGVTZWN0aW9uKHNlY3Rpb24uZGF0YS5faWQsIHtcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuc3RhdGUuZGF0YS5pdGVtc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG9iailcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb24sIHN1YnNlY3Rpb25zLCBjaGlsZHJlbiwgbG9jYXRpb24sIHBhcmFtc30gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNOZXdTZWN0aW9uUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zZWN0aW9ucy9uZXcnXG4gICAgY29uc3QgaXNFZGl0U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3U2VjdGlvblJvdXRlIHx8IGlzRWRpdFNlY3Rpb25Sb3V0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtpc05ld1NlY3Rpb25Sb3V0ZSAmJiBsb2NhdGlvbi5xdWVyeS5wYXJlbnRJZCA9PT0gc2VjdGlvbi5kYXRhLl9pZFxuICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB7c2VjdGlvbi5kYXRhLmNoaWxkcmVuLm1hcCgoc3Vic2VjdGlvbklkLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbiA9IHN1YnNlY3Rpb25zLmZpbmQoc3ViID0+IHN1Yi5kYXRhLl9pZCA9PT0gc3Vic2VjdGlvbklkKVxuXG4gICAgICAgICAgaWYgKGlzRWRpdFNlY3Rpb25Sb3V0ZSAmJiBzdWJzZWN0aW9uSWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c3Vic2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHBhcmVudD17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuaXRlbXN9XG4gICAgICAgICAgICAgICAgICBkcmFnZ2luZ0luZGV4PXt0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW0gc2VjdGlvbj17c3Vic2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50PXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZVNlY3Rpb246IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWN0aW9uKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoU3ViU2VjdGlvbnNMaXN0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU3ViU2VjdGlvbnNMaXN0L1N1YlNlY3Rpb25zTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XcmFwcGVyLmNzcydcblxuY29uc3QgV3JhcHBlciA9ICh7XG4gIGRpbW1lZCxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyYXBwZXJ9XG4gICAgICAke2RpbW1lZCA/IHN0eWxlcy5XcmFwcGVyX2RpbW1lZCA6ICcnfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJXcmFwcGVyXCI6XCJXcmFwcGVyX19XcmFwcGVyX19fMXRfRy1cIixcIldyYXBwZXJfZGltbWVkXCI6XCJXcmFwcGVyX19XcmFwcGVyX2RpbW1lZF9fXzFpR3RjXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNzg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZS5jc3MnXG5cbmNvbnN0IFRhYmxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGJyZWFkY3J1bWJzID0gZmFsc2Vcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlRhYmxlfSAke2JyZWFkY3J1bWJzID8gc3R5bGVzLlRhYmxlX2JyZWFkY3J1bWJzIDogJyd9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlXCI6XCJUYWJsZV9fVGFibGVfX18zdktJUlwiLFwiVGFibGVfYnJlYWRjcnVtYnNcIjpcIlRhYmxlX19UYWJsZV9icmVhZGNydW1ic19fXzNONzNvXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y3JlYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIFNlbGVjdH0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuXG5jbGFzcyBOZXdTZWN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgc2VjdGlvblR5cGU6ICdhcnRpY2xlcycsXG4gICAgICAgIHBhcmVudDogcHJvcHMucGFyZW50U2VjdGlvbi5kYXRhLl9pZFxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlU2VjdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtOiB7aXNVcGRhdGluZ30sIHBhcmVudFNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHNlY3Rpb25UeXBlcyA9IFtdXG4gICAgaWYgKHBhcmVudFNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ21ldGEnKSB7XG4gICAgICBzZWN0aW9uVHlwZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2FydGljbGVzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYXJ0aWNsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3BhcmVudCcsXG4gICAgICAgICAgbGFiZWw6ICdQYXJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2N1c3RvbScsXG4gICAgICAgICAgbGFiZWw6ICdDdXN0b20gcGFnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnYmxvZ3Bvc3RzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYmxvZyBwb3N0cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uVHlwZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2FydGljbGVzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYXJ0aWNsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2Jsb2dwb3N0cycsXG4gICAgICAgICAgbGFiZWw6ICdsaXN0IG9mIGJsb2cgcG9zdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtSGVhZGVyPkFkZCBuZXcgc2VjdGlvbjwvRm9ybUhlYWRlcj5cblxuICAgICAgICA8Rm9ybUJvZHk+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3RpdGxlJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8U2VsZWN0IGxhYmVsPVwiVHlwZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNlY3Rpb25UeXBlfVxuICAgICAgICAgICAgb3B0aW9ucz17c2VjdGlvblR5cGVzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NlY3Rpb25UeXBlJywgdmFsdWUpfSAvPlxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89e2Avc2VjdGlvbnMvYH0+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtsb2NhdGlvbjoge3F1ZXJ5OiB7cGFyZW50SWR9fX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gcGFyZW50SWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUuc2VjdGlvbnMubmV3U2VjdGlvbixcbiAgICAgIHBhcmVudFNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlU2VjdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlU2VjdGlvbihkYXRhLCBgL3NlY3Rpb25zL2ApKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShOZXdTZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05ld1NlY3Rpb25Gb3JtL05ld1NlY3Rpb25Gb3JtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm0uY3NzJ1xuXG5jb25zdCBGb3JtID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm1IZWFkZXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9ybV9faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtQm9keSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtX19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtRm9vdGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm1fX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtGb3JtLCBGb3JtSGVhZGVyLCBGb3JtQm9keSwgRm9ybUZvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJGb3JtXCI6XCJGb3JtX19Gb3JtX19fMnp3WmZcIixcIkZvcm1fX2hlYWRlclwiOlwiRm9ybV9fRm9ybV9faGVhZGVyX19fTGxrYWZcIixcIkZvcm1fX2JvZHlcIjpcIkZvcm1fX0Zvcm1fX2JvZHlfX192NllhMlwiLFwiRm9ybV9fZm9vdGVyXCI6XCJGb3JtX19Gb3JtX19mb290ZXJfX19VaVJOV1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9uLCBkZWxldGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgU2VsZWN0fSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5cbmNsYXNzIEVkaXRTZWN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnNlY3Rpb24uZGF0YSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7c2VjdGlvbjoge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ319ID0gbmV3UHJvcHNcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7c2VjdGlvbjoge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIHVwZGF0ZVNlY3Rpb24oaWQsIHBheWxvYWQpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlU2VjdGlvbiwgc2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVTZWN0aW9uKHNlY3Rpb24uZGF0YS5faWQsIHNlY3Rpb24uZGF0YS5jaGlsZHJlbilcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb24sIHBhcmVudFNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+QWxsIFNhdmVkPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICB0bz1cIi9zZWN0aW9uc1wiPkNsb3NlPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgdG89XCIvc2VjdGlvbnNcIj5EaXNjYXJkIENoYW5nZXM8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+RWRpdCBzZWN0aW9uPC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlY3Rpb24uaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudXJsfVxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9Gb3JtQm9keT5cblxuICAgICAgICA8Rm9ybUZvb3Rlcj5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbklkKVxuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbi5kYXRhLnBhcmVudClcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uLFxuICAgICAgcGFyZW50U2VjdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IGJhY2tsaW5rID0gJy9zZWN0aW9ucydcblxuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVTZWN0aW9uOiAoaWQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNlY3Rpb24oaWQsIGNoaWxkcmVuLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlU2VjdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlY3Rpb24oaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdFNlY3Rpb25Gb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdFNlY3Rpb25Gb3JtL0VkaXRTZWN0aW9uRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQXJ0aWNsZXNMaXN0IGZyb20gJy4uL0FydGljbGVzTGlzdCdcbmltcG9ydCBDdXN0b21QYWdlSG9tZSBmcm9tICcuLi9DdXN0b21QYWdlSG9tZSdcbmltcG9ydCBDdXN0b21QYWdlQWJvdXQgZnJvbSAnLi4vQ3VzdG9tUGFnZUFib3V0J1xuXG5jb25zdCBTZWN0aW9uID0gKHtcbiAgc2VjdGlvbixcbiAgcGFyZW50LFxuICBsb2NhdGlvbixcbiAgcGFyYW1zLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBzd2l0Y2ggKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSkge1xuICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICBjYXNlICdibG9ncG9zdHMnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFydGljbGVzTGlzdCBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgIHBhcmVudD17cGFyZW50fVxuICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICApXG4gICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgIHN3aXRjaCAoc2VjdGlvbi5kYXRhLmN1c3RvbUlkKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q3VzdG9tUGFnZUhvbWUgLz5cbiAgICAgICAgICApXG4gICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEN1c3RvbVBhZ2VBYm91dCAvPlxuICAgICAgICAgIClcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGN1c3RvbSBwYWdlICR7c2VjdGlvbi5kYXRhLmN1c3RvbUlkfWApXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIHNlY3Rpb24gdHlwZSAke3NlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZX1gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBwYXJhbXMuc2VjdGlvbklkKVxuICAgIGNvbnN0IHBhcmVudCA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBzZWN0aW9uLmRhdGEucGFyZW50KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlY3Rpb24sXG4gICAgICBwYXJlbnRcbiAgICB9XG4gIH1cbikoU2VjdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzb3J0YWJsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IEFydGljbGVzTGlzdEl0ZW0gZnJvbSAnLi4vQXJ0aWNsZXNMaXN0SXRlbSdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgQXJ0aWNsZXNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLnNlY3Rpb24uZGF0YS5hcnRpY2xlc1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBuZXdQcm9wcy5zZWN0aW9uLmRhdGEuYXJ0aWNsZXNcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU3RhdGUgKG9iaikge1xuICAgIGlmIChvYmouZHJhZ2dpbmdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qge3VwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgICB1cGRhdGVTZWN0aW9uKHtcbiAgICAgICAgYXJ0aWNsZXM6IHRoaXMuc3RhdGUuZGF0YS5pdGVtc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG9iailcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2FydGljbGVzLCBzZWN0aW9uLCBjaGlsZHJlbiwgcGFyYW1zLCBsb2NhdGlvbn0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNOZXdBcnRpY2xlUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ld2BcbiAgICBjb25zdCBpc0VkaXRBcnRpY2xlUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzLyR7cGFyYW1zLmFydGljbGVJZH1gXG4gICAgY29uc3QgZGlzYWJsZUludGVyYWN0aW9uID0gaXNOZXdBcnRpY2xlUm91dGUgfHwgaXNFZGl0QXJ0aWNsZVJvdXRlXG5cbiAgICBsZXQgYWN0aW9ucyA9ICcnXG4gICAgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2FydGljbGVzJykge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH0vYXJ0aWNsZXMvbmV3YH0+YWRkIG5ldyBhcnRpY2xlPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH0vYXJ0aWNsZXMvbmV3P3R5cGU9aGVhZGluZ2B9PmFkZCBuZXcgaGVhZGluZzwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH0vYXJ0aWNsZXMvbmV3YH0+YWRkIG5ldyBibG9nIHBvc3Q8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFdyYXBwZXIgZGltbWVkPXtkaXNhYmxlSW50ZXJhY3Rpb259PlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPFRhYmxlUm93IGhlYWRpbmc+XG4gICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgdGl0bGUgaGVhZGluZz57c2VjdGlvbi5kYXRhLnRpdGxlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMjBcIj5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBoZWFkaW5nPnVybDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGxhc3RcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiPlxuICAgICAgICAgICAgICB7ZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYWN0aW9uc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgIDwvVGFibGVSb3c+XG5cbiAgICAgICAgICB7aXNOZXdBcnRpY2xlUm91dGVcbiAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLml0ZW1zLm1hcCgoYXJ0aWNsZUlkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFZGl0QXJ0aWNsZVJvdXRlICYmIHBhcmFtcy5hcnRpY2xlSWQgPT09IGFydGljbGVJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgYXJ0aWNsZSA9IGFydGljbGVzLmZpbmQoYSA9PiBhLmRhdGEuX2lkID09PSBhcnRpY2xlSWQpXG5cbiAgICAgICAgICAgICAgaWYgKGRpc2FibGVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8QXJ0aWNsZXNMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3RhdGU9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nSW5kZXg9e3RoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc29ydElkPXtpfVxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8QXJ0aWNsZXNMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT17YXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvU29ydGFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcbiAgICBjb25zdCBzZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpXG4gICAgY29uc3QgYXJ0aWNsZXMgPSBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maWx0ZXIoYSA9PiBzZWN0aW9uLmRhdGEuYXJ0aWNsZXMuaW5kZXhPZihhLmRhdGEuX2lkKSAhPT0gLTEpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbixcbiAgICAgIGFydGljbGVzXG4gICAgfVxuICB9LFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZVNlY3Rpb246IChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlY3Rpb24ocGFyYW1zLnNlY3Rpb25JZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEFydGljbGVzTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdC9BcnRpY2xlc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXJ0aWNsZXNMaXN0SXRlbS5jc3MnXG5cbmNvbnN0IEFydGljbGVzTGlzdEl0ZW0gPSAoe1xuICBhcnRpY2xlLFxuICBzZWN0aW9uLFxuICBkaXNhYmxlSW50ZXJhY3Rpb25cbn0pID0+IHtcbiAgbGV0IGljb24gPSBudWxsXG4gIHN3aXRjaCAoYXJ0aWNsZS5kYXRhLmFydGljbGVUeXBlKSB7XG4gICAgY2FzZSAnYXJ0aWNsZSc6XG4gICAgICBpY29uID0gYXJ0aWNsZS5kYXRhLmlzUHVibGlzaGVkXG4gICAgICAgID8gJ2ZpbGUtdGV4dCdcbiAgICAgICAgOiAnZmlsZS10ZXh0LWRyYWZ0J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdibG9ncG9zdCc6XG4gICAgICBpY29uID0gYXJ0aWNsZS5kYXRhLmlzUHVibGlzaGVkXG4gICAgICAgID8gJ2ZpbGUtYmxvZ3Bvc3QnXG4gICAgICAgIDogJ2ZpbGUtYmxvZ3Bvc3QtZHJhZnQnXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2hlYWRpbmcnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBpY29uID0gbnVsbFxuICB9XG5cbiAgbGV0IHVybCA9IGAvJHthcnRpY2xlLmRhdGEudXJsfWBcbiAgaWYgKGFydGljbGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgdXJsID0gJydcbiAgfVxuXG4gIGxldCBhY3Rpb25zID0gJydcbiAgaWYgKCFkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcnRpY2xlc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgPExpbmtCdXR0b24gdG89e2Avc2VjdGlvbnMvJHtzZWN0aW9uLmRhdGEuX2lkfS9hcnRpY2xlcy8ke2FydGljbGUuZGF0YS5faWR9YH0+ZWRpdDwvTGlua0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5BcnRpY2xlc0xpc3RJdGVtfVxuICAgICAgJHtkaXNhYmxlSW50ZXJhY3Rpb24gPyAnJyA6IHN0eWxlcy5BcnRpY2xlc0xpc3RJdGVtX2ludGVyYWN0aXZlfVxuICAgICAgJHthcnRpY2xlLmRhdGEuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJyA/IHN0eWxlcy5BcnRpY2xlc0xpc3RJdGVtX2hlYWRpbmcgOiAnJ31gfT5cbiAgICAgIDxUYWJsZVJvdyBpbnRlcmFjdGl2ZT17IWRpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgIHtpY29uXG4gICAgICAgICAgPyAoXG4gICAgICAgICAgICA8VGFibGVDb2x1bW4+XG4gICAgICAgICAgICAgIDxJY29uIHR5cGU9e2ljb259IC8+XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgIClcbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgPFRhYmxlQ2VsbCB0aXRsZT5cbiAgICAgICAgICAgIHthcnRpY2xlLmRhdGEudGl0bGV9XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMjVcIj5cbiAgICAgICAgICA8VGFibGVDZWxsPnt1cmx9PC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiM1wiPlxuICAgICAgICAgIHthcnRpY2xlLmRhdGEuaXNQdWJsaXNoZWRcbiAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgIDogPEJhZGdlIGxhYmVsPVwiRHJhZnRcIiBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjdcIlxuICAgICAgICAgIGxhc3Q+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlc0xpc3RJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3RJdGVtL0FydGljbGVzTGlzdEl0ZW0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXJ0aWNsZXNMaXN0SXRlbVwiOlwiQXJ0aWNsZXNMaXN0SXRlbV9fQXJ0aWNsZXNMaXN0SXRlbV9fXzNxUXpCXCIsXCJBcnRpY2xlc0xpc3RJdGVtX19hY3Rpb25zXCI6XCJBcnRpY2xlc0xpc3RJdGVtX19BcnRpY2xlc0xpc3RJdGVtX19hY3Rpb25zX19fcnNodWFcIixcIkFydGljbGVzTGlzdEl0ZW1faW50ZXJhY3RpdmVcIjpcIkFydGljbGVzTGlzdEl0ZW1fX0FydGljbGVzTGlzdEl0ZW1faW50ZXJhY3RpdmVfX18yRW5pRVwiLFwiQXJ0aWNsZXNMaXN0SXRlbV9oZWFkaW5nXCI6XCJBcnRpY2xlc0xpc3RJdGVtX19BcnRpY2xlc0xpc3RJdGVtX2hlYWRpbmdfX18xSk5LYlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0SXRlbS9BcnRpY2xlc0xpc3RJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VzdG9tUGFnZUhvbWUuY3NzJ1xuXG5jb25zdCBDdXN0b21QYWdlSG9tZSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1c3RvbVBhZ2VIb21lfT5cbiAgICAgIEkgYW0gQ3VzdG9tUGFnZUhvbWUgY29tcG9uZW50IVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVBhZ2VIb21lXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkN1c3RvbVBhZ2VIb21lXCI6XCJDdXN0b21QYWdlSG9tZV9fQ3VzdG9tUGFnZUhvbWVfX18ydHZSc1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuY3NzXG4gKiogbW9kdWxlIGlkID0gNzk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXN0b21QYWdlQWJvdXQuY3NzJ1xuXG5jb25zdCBDdXN0b21QYWdlQWJvdXQgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXN0b21QYWdlQWJvdXR9PlxuICAgICAgSSBhbSBDdXN0b21QYWdlQWJvdXQgY29tcG9uZW50IVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbVBhZ2VBYm91dFxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkN1c3RvbVBhZ2VBYm91dFwiOlwiQ3VzdG9tUGFnZUFib3V0X19DdXN0b21QYWdlQWJvdXRfX18yOU1vclwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y3JlYXRlQXJ0aWNsZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge0Jsb2NrLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgQ2hlY2tib3gsIEVkaXRvcn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuXG5jbGFzcyBOZXdBcnRpY2xlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgc25pcHBldDogJycsXG4gICAgICAgIGNvbnRlbnQ6ICcnLFxuICAgICAgICBhcnRpY2xlVHlwZTogJycsXG4gICAgICAgIGlzUHVibGlzaGVkOiBmYWxzZSxcbiAgICAgICAgaXNGcmVxdWVudDogZmFsc2UsXG4gICAgICAgIHBhcmVudDogcHJvcHMucGFyYW1zLnNlY3Rpb25JZFxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG5cbiAgICBpZiAocHJvcHMuc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID0gJ2Jsb2dwb3N0J1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb24ucXVlcnkudHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgPSAnaGVhZGluZydcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID0gJ2FydGljbGUnXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVBcnRpY2xlfSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZUFydGljbGUodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXRlbToge2lzVXBkYXRpbmd9LCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHRpdGxlID0gJydcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSkge1xuICAgICAgY2FzZSAnYXJ0aWNsZSc6XG4gICAgICAgIHRpdGxlID0gJ2FydGljbGUnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdibG9ncG9zdCc6XG4gICAgICAgIHRpdGxlID0gJ2Jsb2cgcG9zdCdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2hlYWRpbmcnOlxuICAgICAgICB0aXRsZSA9ICdoZWFkaW5nJ1xuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBhcnRpY2xlIHR5cGUgJHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGV9YClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtSGVhZGVyPkFkZCBuZXcge3RpdGxlfTwvRm9ybUhlYWRlcj5cblxuICAgICAgICA8Rm9ybUJvZHk+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3RpdGxlJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlICE9PSAnaGVhZGluZydcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudXJsfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd1cmwnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiUHVibGlzaGVkOlwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNQdWJsaXNoZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgPT09ICdhcnRpY2xlJ1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJGZWF0dXJlZDpcIlxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzRnJlcXVlbnR9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNGcmVxdWVudCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID09PSAnYmxvZ3Bvc3QnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJldmlldzpcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnc25pcHBldCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlICE9PSAnaGVhZGluZydcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250ZW50OlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9YH0+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtzZWN0aW9uSWR9fSA9IG93blByb3BzXG4gICAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBzZWN0aW9uSWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUuYXJ0aWNsZXMubmV3QXJ0aWNsZSxcbiAgICAgIHNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlQXJ0aWNsZTogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlQXJ0aWNsZShkYXRhLCBgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH1gKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoTmV3QXJ0aWNsZUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybS9OZXdBcnRpY2xlRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtDT05GSVJNX1VQREFURV9TRUNUSU9OfSBmcm9tICcuL3NlY3Rpb25zQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVJUSUNMRVMgPSAnUkVRVUVTVF9BUlRJQ0xFUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0FSVElDTEVTID0gJ1JFQ0VJVkVfQVJUSUNMRVMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VQREFURV9BUlRJQ0xFID0gJ1JFUVVFU1RfVVBEQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgQ09ORklSTV9VUERBVEVfQVJUSUNMRSA9ICdDT05GSVJNX1VQREFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9VUERBVEVfQVJUSUNMRSA9ICdSRUpFQ1RfVVBEQVRFX0FSVElDTEUnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFID0gJ0NSRUFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fQ1JFQVRFX0FSVElDTEUgPSAnQ09ORklSTV9DUkVBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUgPSAnUkVKRUNUX0NSRUFURV9BUlRJQ0xFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSA9ICdSRVFVRVNUX0RFTEVURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fREVMRVRFX0FSVElDTEUgPSAnQ09ORklSTV9ERUxFVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfREVMRVRFX0FSVElDTEUgPSAnUkVKRUNUX0RFTEVURV9BUlRJQ0xFJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQVJUSUNMRVNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlQXJ0aWNsZXMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0FSVElDTEVTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoQXJ0aWNsZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEFydGljbGVzKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUFydGljbGVzKGpzb24uZGF0YS5hcnRpY2xlcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9BUlRJQ0xFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVVwZGF0ZSA9IChcbiAgaWQsXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX0FSVElDTEUsXG4gICAgaWQsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVFcnJvcnMgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfQVJUSUNMRSxcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlQXJ0aWNsZSA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFydGljbGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGlkLCBqc29uLmRhdGEuYXJ0aWNsZSkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBcnRpY2xlIGhhcyBiZWVuIHNhdmVkJywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUVycm9ycyhpZCwgcGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgdXBkYXRlIGFydGljbGUgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9DUkVBVEVfQVJUSUNMRSxcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9DUkVBVEVfQVJUSUNMRSxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQXJ0aWNsZSA9IChcbiAgZGF0YSxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgYXJ0aWNsZTogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLmFydGljbGUpKVxuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sXG4gICAgICAgICAgICBpZDoganNvbi5kYXRhLnBhcmVudC5faWQsXG4gICAgICAgICAgICBpdGVtOiBqc29uLmRhdGEucGFyZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0FydGljbGUgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgICAgaWYgKGJhY2tsaW5rKSB7XG4gICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGJhY2tsaW5rKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIGFydGljbGUgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBcnRpY2xlID0gKFxuICBpZCxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3REZWxldGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hcnRpY2xlcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogQ09ORklSTV9VUERBVEVfU0VDVElPTixcbiAgICAgICAgICAgIGlkOiBqc29uLmRhdGEucGFyZW50Ll9pZCxcbiAgICAgICAgICAgIGl0ZW06IGpzb24uZGF0YS5wYXJlbnRcbiAgICAgICAgICB9KVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybURlbGV0ZShpZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBcnRpY2xlIHdhcyBkZWxldGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdERlbGV0ZShpZCkpXG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVBcnRpY2xlLCBkZWxldGVBcnRpY2xlfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCB7RmxleCwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sIEJsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b24sIExpbmtCdXR0b24sIElucHV0LCBDaGVja2JveCwgRWRpdG9yfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vQ29tbWVudHMnXG5cbmNsYXNzIEVkaXRBcnRpY2xlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZUNvbW1lbnQgPSB0aGlzLmRlbGV0ZUNvbW1lbnQuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlUmVwbHkgPSB0aGlzLmRlbGV0ZVJlcGx5LmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmFydGljbGUuZGF0YSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ319ID0gbmV3UHJvcHNcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZUFydGljbGV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIHVwZGF0ZUFydGljbGUoaWQsIHBheWxvYWQpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlQXJ0aWNsZSwgYXJ0aWNsZX0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVBcnRpY2xlKGFydGljbGUuZGF0YS5faWQpXG4gIH1cblxuICBkZWxldGVDb21tZW50IChpZCkge1xuICAgIGNvbnN0IG5ld0NvbW1lbnRzID0gdGhpcy5zdGF0ZS5kYXRhLmNvbW1lbnRzLm1hcChjID0+IHtcbiAgICAgIGlmIChjLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGMsIHtcbiAgICAgICAgICBpc0RlbGV0ZWQ6ICFjLmlzRGVsZXRlZFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICAgIGNvbW1lbnRzOiBuZXdDb21tZW50c1xuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlUmVwbHkgKGlkLCBjb21tZW50SWQpIHtcbiAgICBjb25zdCBjb21tZW50ID0gdGhpcy5zdGF0ZS5kYXRhLmNvbW1lbnRzLmZpbmQoYyA9PiBjLl9pZCA9PT0gY29tbWVudElkKVxuICAgIGNvbnN0IG5ld1JlcGxpZXMgPSBjb21tZW50LnJlcGxpZXMubWFwKHIgPT4ge1xuICAgICAgaWYgKHIuX2lkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIGlzRGVsZXRlZDogIXIuaXNEZWxldGVkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gclxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgICAgY29tbWVudHM6IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5tYXAoYyA9PiB7XG4gICAgICAgICAgaWYgKGMuX2lkID09PSBjb21tZW50SWQpIHtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjLCB7XG4gICAgICAgICAgICAgIHJlcGxpZXM6IG5ld1JlcGxpZXNcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBjXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cGFyYW1zOiB7aXNVcGRhdGluZ30sIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgYWN0aW9ucyA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgdG89e2Avc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfWB9PkRpc2NhcmQgQ2hhbmdlczwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+QWxsIFNhdmVkPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9YH0+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBmb3JtVGl0bGUgPSAnJ1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlKSB7XG4gICAgICBjYXNlICdhcnRpY2xlJzpcbiAgICAgICAgZm9ybVRpdGxlID0gJ0VkaXQgQXJ0aWNsZSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jsb2dwb3N0JzpcbiAgICAgICAgZm9ybVRpdGxlID0gJ0VkaXQgQmxvZ3Bvc3QnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgICAgZm9ybVRpdGxlID0gJ0VkaXQgSGVhZGluZydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgYXJ0aWNsZSB0eXBlICR7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybUhlYWRlcj5cbiAgICAgICAgICB7Zm9ybVRpdGxlfVxuICAgICAgICA8L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cInVybFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIlB1Ymxpc2hlZDpcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzUHVibGlzaGVkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZSdcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRmVhdHVyZWQ6XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0ZyZXF1ZW50fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRnJlcXVlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpZXc6XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NuaXBwZXQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGVudDpcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8Q29tbWVudHMgaXRlbXM9e3RoaXMuc3RhdGUuZGF0YS5jb21tZW50c30gb25EZWxldGVDb21tZW50PXt0aGlzLmRlbGV0ZUNvbW1lbnR9IG9uRGVsZXRlUmVwbHk9e3RoaXMuZGVsZXRlUmVwbHl9IC8+XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7YWN0aW9uc31cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maW5kKGEgPT4gYS5kYXRhLl9pZCA9PT0gcGFyYW1zLmFydGljbGVJZClcbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgYmFja2xpbmsgPSBgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH1gXG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlQXJ0aWNsZTogKGlkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZUFydGljbGUoaWQsIGJhY2tsaW5rKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVBcnRpY2xlOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlQXJ0aWNsZShpZCwgZGF0YSwgYmFja2xpbmspKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShFZGl0QXJ0aWNsZUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9FZGl0QXJ0aWNsZUZvcm0vRWRpdEFydGljbGVGb3JtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQge2ZldGNoU2VhcmNoSW5kZXgsIHVwZGF0ZVNlYXJjaEluZGV4fSBmcm9tICcuLi8uLi9zdG9yZS9zZWFyY2hJbmRleEFjdGlvbnMuanMnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL1dyYXBwZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGUnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcblxuY2xhc3MgU2VhcmNoSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCB7dXBkYXRlSW5kZXh9ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlSW5kZXgoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hJbmRleH0gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaEluZGV4KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmcsIGlzVXBkYXRpbmcsIGxhc3RVcGRhdGVkT24sIGxhc3RVcGRhdGVkQnl9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlcj5cbiAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICA8VGFibGVSb3cgaGVhZGluZz5cbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZyB0aXRsZT5TZWFyY2ggSW5kZXg8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gaGVhZGluZ1xuICAgICAgICAgICAgICAgIGxhc3RcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjE1XCI+XG4gICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlfT5VcGRhdGUgaW5kZXg8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cblxuICAgICAgICAgICAgPFRhYmxlUm93PlxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCB0aXRsZT5MYXN0IHVwZGF0ZWQgb24gPFRpbWUgdmFsdWU9e2xhc3RVcGRhdGVkT259IGZvcm1hdD1cImg6bW0gQSBvbiBNTU0gRG9cIiAvPiBieSB7bGFzdFVwZGF0ZWRCeX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzRmV0Y2hpbmcsXG4gICAgICBpc1VwZGF0aW5nOiBzdGF0ZS5zZWFyY2hJbmRleC5pc1VwZGF0aW5nLFxuICAgICAgbGFzdFVwZGF0ZWRPbjogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbixcbiAgICAgIGxhc3RVcGRhdGVkQnk6IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnlcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmV0Y2hJbmRleDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlYXJjaEluZGV4KCkpXG4gICAgICB9LFxuICAgICAgdXBkYXRlSW5kZXg6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VhcmNoSW5kZXgoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoU2VhcmNoSW5kZXgpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWFyY2hJbmRleC9TZWFyY2hJbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0lOREVYID0gJ1JFUVVFU1RfSU5ERVgnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9JTkRFWCA9ICdSRUNFSVZFX0lOREVYJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfSU5ERVggPSAnUkVRVUVTVF9VUERBVEVfSU5ERVgnXG5leHBvcnQgY29uc3QgQ09ORklSTV9VUERBVEVfSU5ERVggPSAnQ09ORklSTV9VUERBVEVfSU5ERVgnXG5cbmNvbnN0IHJlcXVlc3RTZWFyY2hJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0lOREVYXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVNlYXJjaEluZGV4ID0gKFxuICBsYXN0VXBkYXRlZE9uLFxuICBsYXN0VXBkYXRlZEJ5XG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0lOREVYLFxuICAgIGxhc3RVcGRhdGVkT24sXG4gICAgbGFzdFVwZGF0ZWRCeVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFNlYXJjaEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RTZWFyY2hJbmRleCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWFyY2hJbmRleGAsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlU2VhcmNoSW5kZXgoanNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sIGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5KSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfSU5ERVhcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBsYXN0VXBkYXRlZE9uLFxuICBsYXN0VXBkYXRlZEJ5XG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9JTkRFWCxcbiAgICBsYXN0VXBkYXRlZE9uLFxuICAgIGxhc3RVcGRhdGVkQnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZSgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWFyY2hJbmRleGAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybVVwZGF0ZShqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbiwganNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnkpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnU2VhcmNoIGluZGV4IHVwZGF0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEluZGV4QWN0aW9ucy5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCdcbmltcG9ydCBjcmVhdGVMb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuaydcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3Jvb3RSZWR1Y2VyJ1xuXG5jb25zdCBtaWRkbGV3YXJlID0gW3RodW5rTWlkZGxld2FyZV1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcigpXG4gIG1pZGRsZXdhcmUucHVzaChsb2dnZXIpXG59XG5cbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKGluaXRpYWxTdGF0ZSkgPT4ge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlKVxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZ3VyZVN0b3JlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc3RvcmUuanNcbiAqKi8iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcbmltcG9ydCBhdXRoIGZyb20gJy4vYXV0aFJlZHVjZXInXG5pbXBvcnQgZmxhc2ggZnJvbSAnLi9mbGFzaFJlZHVjZXInXG5pbXBvcnQgcXVlc3Rpb25zIGZyb20gJy4vcXVlc3Rpb25zUmVkdWNlcidcbmltcG9ydCBhcnRpY2xlcyBmcm9tICcuL2FydGljbGVSZWR1Y2VyJ1xuaW1wb3J0IHVzZXJzIGZyb20gJy4vdXNlcnNSZWR1Y2VyJ1xuaW1wb3J0IHNlY3Rpb25zIGZyb20gJy4vc2VjdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IHNlYXJjaEluZGV4IGZyb20gJy4vc2VhcmNoSW5kZXhSZWR1Y2VyJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGF1dGgsXG4gIGZsYXNoLFxuICBxdWVzdGlvbnMsXG4gIGFydGljbGVzLFxuICB1c2VycyxcbiAgc2VjdGlvbnMsXG4gIHNlYXJjaEluZGV4XG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3Jvb3RSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FVVEgsIExPR0lOLCBMT0dPVVR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBhdXRoID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hdXRoLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FVVEg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmF1dGgsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIExPR0lOOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IGFjdGlvbi51c2VyXG4gICAgICB9XG4gICAgY2FzZSBMT0dPVVQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogbnVsbFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aFJlZHVjZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGg6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsXG4gIH0sXG4gIGZsYXNoOiB7XG4gICAgbWVzc2FnZTogbnVsbCxcbiAgICB0eXBlOiBudWxsLFxuICAgIHRpbWVvdXRJZDogbnVsbFxuICB9LFxuICBxdWVzdGlvbnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBxdWVzdGlvbjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9XG4gIH0sXG4gIGFydGljbGVzOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW10sXG4gICAgbmV3QXJ0aWNsZToge1xuICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH0sXG4gIGFydGljbGU6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlY3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW10sXG4gICAgbmV3U2VjdGlvbjoge1xuICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH0sXG4gIHNlY3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHVzZXJzOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW10sXG4gICAgbmV3VXNlcjoge1xuICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICBkYXRhOiB7fSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH0sXG4gIHVzZXI6IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fSxcbiAgICBlcnJvcnM6IHt9XG4gIH0sXG4gIHNlYXJjaEluZGV4OiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBsYXN0VXBkYXRlZE9uOiBudWxsLFxuICAgIGxhc3RVcGRhdGVkQnk6IG51bGxcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qc1xuICoqLyIsImltcG9ydCB7U0VUX01FU1NBR0UsIFVOU0VUX01FU1NBR0V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgZmxhc2ggPSAoXG4gIHN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmZsYXNoKSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01FU1NBR0U6XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dElkKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwge1xuICAgICAgICBtZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgdHlwZTogYWN0aW9uLm1lc3NhZ2VUeXBlLFxuICAgICAgICB0aW1lb3V0SWQ6IGFjdGlvbi50aW1lb3V0SWRcbiAgICAgIH0pXG4gICAgY2FzZSBVTlNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaClcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZmxhc2hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfUVVFU1RJT05TLCBSRUNFSVZFX1FVRVNUSU9OUyxcbiAgUkVRVUVTVF9RVUVTVElPTl9VUERBVEUsIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFLFxuICBSRVFVRVNUX0RFTEVURV9RVUVTVElPTiwgQ09ORklSTV9ERUxFVEVfUVVFU1RJT04sIFJFSkVDVF9ERUxFVEVfUVVFU1RJT059IGZyb20gJy4vcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHF1ZXN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9RVUVTVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OX1VQREFURTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVDRUlWRV9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24udXBkYXRlZFF1ZXN0aW9uLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBxdWVzdGlvbnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnF1ZXN0aW9ucyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gcXVlc3Rpb24odW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFOlxuICAgIGNhc2UgUkVDRUlWRV9RVUVTVElPTl9VUERBVEU6XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9RVUVTVElPTjpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfUVVFU1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IHF1ZXN0aW9uKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9ERUxFVEVfUVVFU1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXN0aW9uc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVJUSUNMRVMsIFJFQ0VJVkVfQVJUSUNMRVMsXG4gIFJFUVVFU1RfVVBEQVRFX0FSVElDTEUsIENPTkZJUk1fVVBEQVRFX0FSVElDTEUsIFJFSkVDVF9VUERBVEVfQVJUSUNMRSxcbiAgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRSwgQ09ORklSTV9DUkVBVEVfQVJUSUNMRSwgUkVKRUNUX0NSRUFURV9BUlRJQ0xFLFxuICBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFLCBDT05GSVJNX0RFTEVURV9BUlRJQ0xFLCBSRUpFQ1RfREVMRVRFX0FSVElDTEV9IGZyb20gJy4vYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBhcnRpY2xlcyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXJ0aWNsZXMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gYXJ0aWNsZSh1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX0FSVElDTEU6XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gYXJ0aWNsZShpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3QXJ0aWNsZTogbmV3QXJ0aWNsZShzdGF0ZS5uZXdBcnRpY2xlLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdBcnRpY2xlOiBuZXdBcnRpY2xlKHN0YXRlLm5ld0FydGljbGUsIGFjdGlvbiksXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgYXJ0aWNsZShudWxsLCBhY3Rpb24pLFxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBhcnRpY2xlID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hcnRpY2xlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld0FydGljbGUgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmFydGljbGVzLm5ld0FydGljbGUpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFydGljbGVzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXJ0aWNsZVJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfVVNFUlMsIFJFQ0VJVkVfVVNFUlMsXG4gIFJFUVVFU1RfVVBEQVRFX1VTRVIsIENPTkZJUk1fVVBEQVRFX1VTRVIsIFJFSkVDVF9VUERBVEVfVVNFUixcbiAgUkVRVUVTVF9DUkVBVEVfVVNFUiwgQ09ORklSTV9DUkVBVEVfVVNFUiwgUkVKRUNUX0NSRUFURV9VU0VSLFxuICBSRVFVRVNUX0RFTEVURV9VU0VSLCBDT05GSVJNX0RFTEVURV9VU0VSLCBSRUpFQ1RfREVMRVRFX1VTRVJ9IGZyb20gJy4vdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgdXNlciA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlcixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9VU0VSUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRJdGVtLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3VXNlciA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCB1c2VycyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUudXNlcnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gdXNlcih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1VTRVI6XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9VU0VSOlxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9VU0VSOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfVVNFUjpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gdXNlcihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1VTRVI6XG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3VXNlcjogbmV3VXNlcihzdGF0ZS5uZXdVc2VyLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdVc2VyOiBpbml0aWFsU3RhdGUudXNlcnMubmV3VXNlcixcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB1c2VyKG51bGwsIGFjdGlvbiksXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXNcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1NFQ1RJT05TLCBSRUNFSVZFX1NFQ1RJT05TLFxuICBSRVFVRVNUX1VQREFURV9TRUNUSU9OLCBDT05GSVJNX1VQREFURV9TRUNUSU9OLCBSRUpFQ1RfVVBEQVRFX1NFQ1RJT04sXG4gIFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT04sIENPTkZJUk1fQ1JFQVRFX1NFQ1RJT04sIFJFSkVDVF9DUkVBVEVfU0VDVElPTixcbiAgUkVRVUVTVF9ERUxFVEVfU0VDVElPTiwgQ09ORklSTV9ERUxFVEVfU0VDVElPTiwgUkVKRUNUX0RFTEVURV9TRUNUSU9OfSBmcm9tICcuL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlY3Rpb25zID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWN0aW9ucyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9TRUNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9TRUNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBzZWN0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfU0VDVElPTjpcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBzZWN0aW9uKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdTZWN0aW9uOiBuZXdTZWN0aW9uKHN0YXRlLm5ld1NlY3Rpb24sIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld1NlY3Rpb246IG5ld1NlY3Rpb24oc3RhdGUubmV3U2VjdGlvbiwgYWN0aW9uKSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcbiAgICAgICAgICBzZWN0aW9uKHVuZGVmaW5lZCwgYWN0aW9uKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9ERUxFVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLl9pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3Qgc2VjdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VjdGlvbixcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9TRUNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfU0VDVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfU0VDVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9TRUNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfU0VDVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3U2VjdGlvbiA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuc2VjdGlvbnMubmV3U2VjdGlvbilcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VjdGlvbnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWN0aW9uc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfSU5ERVgsIFJFQ0VJVkVfSU5ERVgsXG4gIFJFUVVFU1RfVVBEQVRFX0lOREVYLCBDT05GSVJNX1VQREFURV9JTkRFWH0gZnJvbSAnLi9zZWFyY2hJbmRleEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWFyY2hJbmRleCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VhcmNoSW5kZXgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IGFjdGlvbi5sYXN0VXBkYXRlZE9uLFxuICAgICAgICBsYXN0VXBkYXRlZEJ5OiBhY3Rpb24ubGFzdFVwZGF0ZWRCeVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFVwZGF0ZWRPbjogYWN0aW9uLmxhc3RVcGRhdGVkT24sXG4gICAgICAgIGxhc3RVcGRhdGVkQnk6IGFjdGlvbi5sYXN0VXBkYXRlZEJ5XG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hJbmRleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hTZWN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaEFydGljbGVzfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hTZWN0aW9ucywgZmV0Y2hBcnRpY2xlc30gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaFNlY3Rpb25zKClcbiAgICBmZXRjaEFydGljbGVzKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmcsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VjdGlvbnMuaXNGZXRjaGluZyB8fCBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoU2VjdGlvbnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWN0aW9ucygpKVxuICAgICAgfSxcbiAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWN0aW9ucylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zL1NlY3Rpb25zLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IENvbW1lbnQgZnJvbSAnLi4vQ29tbWVudCdcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IENvbW1lbnRzID0gKHtcbiAgaXRlbXMsXG4gIG9uRGVsZXRlQ29tbWVudCxcbiAgb25EZWxldGVSZXBseVxufSkgPT4ge1xuICBjb25zdCBzb3J0ZWRDb21tZW50cyA9IGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0KSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb21tZW50cyA9IHNvcnRlZENvbW1lbnRzLm1hcChpID0+XG4gICAgPENvbW1lbnQga2V5PXtpLl9pZH0gaXRlbT17aX0gb25EZWxldGVDb21tZW50PXtvbkRlbGV0ZUNvbW1lbnR9IG9uRGVsZXRlUmVwbHk9e29uRGVsZXRlUmVwbHl9IC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Y29tbWVudHN9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50LmNzcydcbmltcG9ydCB7QmxvY2ssIEZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBSZXBseSA9ICh7XG4gIGl0ZW0sXG4gIG9uRGVsZXRlUmVwbHksXG4gIGNvbW1lbnRJZCxcbiAgY29tbWVudElzRGVsZXRlZFxufSkgPT4ge1xuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmIChpdGVtLmlzRGVsZXRlZCkge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUmVwbHlfX2RlbGV0ZUluZm99PlxuICAgICAgICAgICAgcmVwbHkgd2lsbCBiZSBkZWxldGVkIG9uIHNhdmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXtjb21tZW50SXNEZWxldGVkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVSZXBseShpdGVtLl9pZCwgY29tbWVudElkKX0+UHV0IGJhY2s8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgYWN0aW9ucyA9IChcbiAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgaW52ZXJzZVxuICAgICAgICB0aGVtZT1cImVycm9yXCJcbiAgICAgICAgZGlzYWJsZWQ9e2NvbW1lbnRJc0RlbGV0ZWR9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUmVwbHkoaXRlbS5faWQsIGNvbW1lbnRJZCl9PkRlbGV0ZTwvQnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5SZXBseX0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5SZXBseV9kZWxldGVkIDogJyd9YH0+XG4gICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5SZXBseV9faW5mb30+UG9zdGVkIGJ5IHtpdGVtLmxhc3RNb2RpZmllZEJ5fSBvbiA8VGltZSB2YWx1ZT17aXRlbS5jcmVhdGVkQXR9IGZvcm1hdD1cIk1NTU0gRG8gWVlZWSAoaDptbSBhKVwiIC8+PC9kaXY+XG5cbiAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5SZXBseV9fYm9keX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ29tbWVudCA9ICh7XG4gIGl0ZW0sXG4gIG9uRGVsZXRlQ29tbWVudCxcbiAgb25EZWxldGVSZXBseVxufSkgPT4ge1xuICBjb25zdCBzb3J0ZWRSZXBsaWVzID0gaXRlbS5yZXBsaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0KSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBsaWVzID0gc29ydGVkUmVwbGllcy5tYXAociA9PlxuICAgIDxSZXBseSBrZXk9e3IuX2lkfSBjb21tZW50SWQ9e2l0ZW0uX2lkfSBpdGVtPXtyfSBvbkRlbGV0ZVJlcGx5PXtvbkRlbGV0ZVJlcGx5fSBjb21tZW50SXNEZWxldGVkPXtpdGVtLmlzRGVsZXRlZH0gLz5cbiAgKVxuXG4gIGxldCBhY3Rpb25zID0gJydcbiAgaWYgKGl0ZW0uaXNEZWxldGVkKSB7XG4gICAgYWN0aW9ucyA9IChcbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19kZWxldGVJbmZvfT5cbiAgICAgICAgICAgIGNvbW1lbnQgd2lsbCBiZSBkZWxldGVkIG9uIHNhdmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlQ29tbWVudChpdGVtLl9pZCl9PlB1dCBiYWNrPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgIGludmVyc2VcbiAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlQ29tbWVudChpdGVtLl9pZCl9PkRlbGV0ZTwvQnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5Db21tZW50fSAke2l0ZW0uaXNEZWxldGVkID8gc3R5bGVzLkNvbW1lbnRfZGVsZXRlZCA6ICcnfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19jb21tZW50fT5cbiAgICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX2luZm99PlBvc3RlZCBieSB7aXRlbS5sYXN0TW9kaWZpZWRCeX0gb24gPFRpbWUgdmFsdWU9e2l0ZW0uY3JlYXRlZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPjwvZGl2PlxuXG4gICAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX2JvZHl9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogaXRlbS5jb250ZW50fX0gLz5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbW1lbnRfX3JlcGxpZXN9PlxuICAgICAgICAgIHtyZXBsaWVzfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDb21tZW50XCI6XCJDb21tZW50X19Db21tZW50X19fQ0xTMndcIixcIkNvbW1lbnRfX2RlbGV0ZUluZm9cIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2RlbGV0ZUluZm9fX18xeFFXRVwiLFwiQ29tbWVudF9faW5mb1wiOlwiQ29tbWVudF9fQ29tbWVudF9faW5mb19fXzFyb29sXCIsXCJDb21tZW50X19jb21tZW50XCI6XCJDb21tZW50X19Db21tZW50X19jb21tZW50X19fUFFUNjdcIixcIkNvbW1lbnRfX2JvZHlcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2JvZHlfX18xUzVGNlwiLFwiQ29tbWVudF9fcmVwbGllc1wiOlwiQ29tbWVudF9fQ29tbWVudF9fcmVwbGllc19fX1BYTFhSXCIsXCJDb21tZW50X2RlbGV0ZWRcIjpcIkNvbW1lbnRfX0NvbW1lbnRfZGVsZXRlZF9fXzJua1lYXCIsXCJSZXBseVwiOlwiQ29tbWVudF9fUmVwbHlfX18xSjVKT1wiLFwiUmVwbHlfX2RlbGV0ZUluZm9cIjpcIkNvbW1lbnRfX1JlcGx5X19kZWxldGVJbmZvX19fMk9BYlhcIixcIlJlcGx5X19pbmZvXCI6XCJDb21tZW50X19SZXBseV9faW5mb19fXzMwakkyXCIsXCJSZXBseV9fYm9keVwiOlwiQ29tbWVudF9fUmVwbHlfX2JvZHlfX18xcWhwblwiLFwiUmVwbHlfZGVsZXRlZFwiOlwiQ29tbWVudF9fUmVwbHlfZGVsZXRlZF9fXzFrT1ZRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuY3NzXG4gKiogbW9kdWxlIGlkID0gODMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWNBO0FBMUJBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF6Q0E7QUFDQTtBQTJDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQWRBO0FBaUJBOzs7O0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7QUM3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVhBO0FBY0E7Ozs7QUF6QkE7QUFDQTtBQTJCQTs7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF4Q0E7QUFEQTtBQWdEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuREE7QUFIQTtBQTBEQTs7OztBQXJHQTtBQUNBO0FBdUdBOzs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QUNsREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBSEE7QUFOQTtBQXFCQTs7OztBQXBDQTtBQUNBO0FBc0NBOzs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBWEE7QUFjQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFYQTtBQURBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7QUNyREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFNQTtBQVRBO0FBREE7QUFjQTtBQUNBOzs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBekJBO0FBREE7QUE4QkE7QUFDQTs7OztBQTdDQTtBQUNBO0FBK0NBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBN0JBO0FBcUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFaQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFIQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBb0JBO0FBdEJBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQTNCQTtBQXNDQTs7OztBQXBHQTtBQUNBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7O0FDdElBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBVEE7QUFxQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQXpDQTtBQURBO0FBOENBO0FBQ0E7Ozs7QUEvREE7QUFDQTtBQWlFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQ0E7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNVJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFEQTtBQXFCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUpBO0FBRkE7QUExQ0E7QUFGQTtBQTREQTtBQUNBOzs7Ozs7OztBQ2pHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFSQTtBQWVBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFuQ0E7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBdkNBO0FBa0RBOzs7O0FBNUtBO0FBQ0E7QUE4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7QUMzTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFOQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFuQ0E7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFEQTtBQXZDQTtBQXlEQTs7OztBQTVHQTtBQUNBO0FBOEdBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUN0SUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUxBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFUQTtBQXNCQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQURBO0FBVUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVZBO0FBREE7QUFjQTtBQXRDQTtBQUNBO0FBREE7QUF1Q0E7QUFDQTtBQTNFQTtBQURBO0FBZ0ZBOzs7O0FBMUhBO0FBQ0E7QUE0SEE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDaktBO0FBQ0E7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMVNBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQWpCQTtBQUZBO0FBMEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakNBO0FBQ0E7QUFtQ0E7QUFHQTtBQUNBOzs7Ozs7OztBQ2pEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTEE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBO0FBdENBO0FBeUNBOzs7O0FBbEZBO0FBQ0E7QUFvRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUMxR0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBRkE7QUFLQTtBQUNBOzs7Ozs7OztBQ2ZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQVBBO0FBTkE7QUFlQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFyQkE7QUF3QkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFEQTtBQTNCQTtBQTZDQTs7OztBQWhJQTtBQUNBO0FBa0lBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUMzSkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDNUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQVlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQURBO0FBbkJBO0FBZ0NBOzs7O0FBcElBO0FBQ0E7QUFzSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7OztBQ3JLQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTEE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFUQTtBQWtCQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBekRBO0FBREE7QUE4REE7Ozs7QUF2SEE7QUFDQTtBQXlIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRkE7QUEzQkE7QUFIQTtBQXVDQTtBQUNBOzs7Ozs7OztBQ3pGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFVQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTJCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQVVBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQVlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUE5REE7QUFvRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFEQTtBQXZFQTtBQXlGQTs7OztBQXRLQTtBQUNBO0FBd0tBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUNuTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDalRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVRBO0FBY0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBRkE7QUFjQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBWUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBWUE7QUFyRUE7QUF3RUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUE3RUE7QUEwRkE7Ozs7QUFoUUE7QUFDQTtBQWtRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7QUNoU0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFIQTtBQUxBO0FBZUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFoQkE7QUFEQTtBQXlCQTtBQUNBOzs7O0FBcERBO0FBQ0E7QUFzREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVHQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUNBO0FBU0E7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUE1REE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFnQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF6QkE7QUEyQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBR0E7QUFDQTs7Ozs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBdURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SUE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFYQTtBQWFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5Q0E7QUFnREE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9IQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUF0QkE7QUF3QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFEQTtBQVBBO0FBZ0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBWEE7QUFjQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFEQTtBQVBBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFIQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBZkE7QUFEQTtBQXNCQTtBQUNBOzs7Ozs7OztBQ2pJQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==