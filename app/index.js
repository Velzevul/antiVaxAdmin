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

	var _Question = __webpack_require__(770);

	var _Question2 = _interopRequireDefault(_Question);

	var _UsersList = __webpack_require__(772);

	var _UsersList2 = _interopRequireDefault(_UsersList);

	var _EditUserForm = __webpack_require__(776);

	var _EditUserForm2 = _interopRequireDefault(_EditUserForm);

	var _NewUserForm = __webpack_require__(778);

	var _NewUserForm2 = _interopRequireDefault(_NewUserForm);

	var _Sections = __webpack_require__(780);

	var _Sections2 = _interopRequireDefault(_Sections);

	var _SectionsList = __webpack_require__(783);

	var _SectionsList2 = _interopRequireDefault(_SectionsList);

	var _NewSectionForm = __webpack_require__(789);

	var _NewSectionForm2 = _interopRequireDefault(_NewSectionForm);

	var _EditSectionForm = __webpack_require__(792);

	var _EditSectionForm2 = _interopRequireDefault(_EditSectionForm);

	var _Section = __webpack_require__(793);

	var _Section2 = _interopRequireDefault(_Section);

	var _NewArticleForm = __webpack_require__(801);

	var _NewArticleForm2 = _interopRequireDefault(_NewArticleForm);

	var _EditArticleForm = __webpack_require__(802);

	var _EditArticleForm2 = _interopRequireDefault(_EditArticleForm);

	var _SearchIndex = __webpack_require__(806);

	var _SearchIndex2 = _interopRequireDefault(_SearchIndex);

	__webpack_require__(808);

	var _store = __webpack_require__(809);

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
	      _react2.default.createElement(_reactRouter.Route, { path: 'search-index', component: _SearchIndex2.default }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: ':metaSectionUrl', component: _Sections2.default },
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
	      )
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
	    label: 'Main Navigation',
	    url: '/main-nav'
	  }, {
	    label: 'Other Navigation',
	    url: '/other-nav'
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

	var _Wrapper = __webpack_require__(766);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(768);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

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

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Badge = __webpack_require__(761);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Icon = __webpack_require__(763);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _QuestionsListItem = __webpack_require__(765);

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

	var _TableRow = __webpack_require__(756);

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

/***/ 756:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableRow":"TableRow__TableRow___2UBN9","TableRow_heading":"TableRow__TableRow_heading___1Z9eQ","TableRow_interactive":"TableRow__TableRow_interactive___i5JrV","TableRow_indented":"TableRow__TableRow_indented___28V76"};

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableColumn = __webpack_require__(758);

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

/***/ 758:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableColumn":"TableColumn__TableColumn___1Tubs"};

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _TableCell = __webpack_require__(760);

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

/***/ 760:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableCell":"TableCell__TableCell___3jCxo","TableCell_title":"TableCell__TableCell_title___OVykt","TableHeadingCell":"TableCell__TableHeadingCell___3CSTD","TableHeadingCell_title":"TableCell__TableHeadingCell_title___yOdW6"};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(762);

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

/***/ 762:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Badge":"Badge__Badge___33eQR","Badge_blue":"Badge__Badge_blue___z33Rl","Badge_red":"Badge__Badge_red___3ZrSl","Badge_green":"Badge__Badge_green___o4HV6"};

/***/ },

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(764);

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

/***/ 764:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Icon":"Icon__Icon___38Epv","Icon_envelope":"Icon__Icon_envelope___2tNQx","Icon_folder":"Icon__Icon_folder___1Y4nT","Icon_fileCode":"Icon__Icon_fileCode___LdmN-","Icon_fileText":"Icon__Icon_fileText___3SbW0","Icon_fileTextDraft":"Icon__Icon_fileTextDraft___3NSnR","Icon_fileBlogpost":"Icon__Icon_fileBlogpost___AsM8g","Icon_fileBlogpostDraft":"Icon__Icon_fileBlogpostDraft___2HSJ0","Icon_user":"Icon__Icon_user___360fJ","Icon_userAdmin":"Icon__Icon_userAdmin___2wgqB","Icon_userDisabled":"Icon__Icon_userDisabled___DcJp9","Icon_plus":"Icon__Icon_plus___10pTv"};

/***/ },

/***/ 765:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"QuestionsListItem":"QuestionsListItem__QuestionsListItem___29rxy"};

/***/ },

/***/ 766:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Wrapper = __webpack_require__(767);

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

/***/ 767:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"Wrapper__Wrapper___1t_G-","Wrapper_dimmed":"Wrapper__Wrapper_dimmed___1iGtc"};

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(769);

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

/***/ 769:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Table":"Table__Table___3vKIR","Table_breadcrumbs":"Table__Table_breadcrumbs___3N73o"};

/***/ },

/***/ 770:
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

	var _Badge = __webpack_require__(761);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Question = __webpack_require__(771);

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

/***/ 771:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Question":"Question__Question___1ibu6","Question__body":"Question__Question__body___2R4pe","Question__footer":"Question__Question__footer___4VWYy","Name":"Question__Name___14bOP","Email":"Question__Email___1D3Op","Timestamp":"Question__Timestamp___2rswh"};

/***/ },

/***/ 772:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _usersActions = __webpack_require__(773);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UsersListItem = __webpack_require__(774);

	var _UsersListItem2 = _interopRequireDefault(_UsersListItem);

	var _UI = __webpack_require__(546);

	var _Wrapper = __webpack_require__(766);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(768);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

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

/***/ 773:
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

/***/ 774:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Badge = __webpack_require__(761);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Icon = __webpack_require__(763);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _UsersListItem = __webpack_require__(775);

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

/***/ 775:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UsersListItem":"UsersListItem__UsersListItem___1joA7","UsersListItem__actions":"UsersListItem__UsersListItem__actions___GeLS1","UsersListItem_interactive":"UsersListItem__UsersListItem_interactive___3UkEf"};

/***/ },

/***/ 776:
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

	var _usersActions = __webpack_require__(773);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _EditUserForm = __webpack_require__(777);

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

/***/ 777:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"EditUserForm":"EditUserForm__EditUserForm___34UyP","EditUserForm__body":"EditUserForm__EditUserForm__body___1Ujl7","EditUserForm__footer":"EditUserForm__EditUserForm__footer___3tJSw"};

/***/ },

/***/ 778:
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

	var _usersActions = __webpack_require__(773);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _NewUserForm = __webpack_require__(779);

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

/***/ 779:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"NewUserForm":"NewUserForm__NewUserForm___HKLQg","NewUserForm__body":"NewUserForm__NewUserForm__body___hYcMF","NewUserForm__footer":"NewUserForm__NewUserForm__footer___1vS6f"};

/***/ },

/***/ 780:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _sectionsActions = __webpack_require__(781);

	var _articleActions = __webpack_require__(782);

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

/***/ 781:
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

/***/ 782:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteArticle = exports.createArticle = exports.updateArticle = exports.fetchArticles = exports.REJECT_DELETE_ARTICLE = exports.CONFIRM_DELETE_ARTICLE = exports.REQUEST_DELETE_ARTICLE = exports.REJECT_CREATE_ARTICLE = exports.CONFIRM_CREATE_ARTICLE = exports.REQUEST_CREATE_ARTICLE = exports.REJECT_UPDATE_ARTICLE = exports.CONFIRM_UPDATE_ARTICLE = exports.REQUEST_UPDATE_ARTICLE = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	__webpack_require__(637);

	var _reactRouter = __webpack_require__(491);

	var _sectionsActions = __webpack_require__(781);

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

	    data = _extends({}, data, {
	      comments: data.comments.filter(function (c) {
	        return !c.isDeleted;
	      }).map(function (c) {
	        return _extends({}, c, {
	          replies: c.replies.filter(function (r) {
	            return !r.isDeleted;
	          })
	        });
	      })
	    });

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

/***/ 783:
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

	var _reactSortable = __webpack_require__(784);

	var _sectionsActions = __webpack_require__(781);

	var _SectionsListItem = __webpack_require__(786);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	var _UI = __webpack_require__(546);

	var _SubSectionsList = __webpack_require__(788);

	var _SubSectionsList2 = _interopRequireDefault(_SubSectionsList);

	var _Wrapper = __webpack_require__(766);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(768);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

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


	      var isNewSectionRoute = location.pathname === '/' + params.metaSectionUrl + '/new';
	      var isEditSectionRoute = location.pathname === '/' + params.metaSectionUrl + '/' + params.sectionId + '/edit';
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
	            _react2.default.createElement(_TableColumn2.default, { last: true,
	              width: '15' })
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
	                        params: params,
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
	                      _react2.default.createElement(_SectionsListItem2.default, {
	                        params: params,
	                        section: section,
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
	  var params = ownProps.params;

	  var metaSection = state.sections.items.find(function (s) {
	    return s.data.url === params.metaSectionUrl && s.data.meta;
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

/***/ 786:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Icon = __webpack_require__(763);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _SectionsListItem = __webpack_require__(787);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SectionsListItem = function SectionsListItem(_ref) {
	  var params = _ref.params;
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
	  if (parent.data.meta) {
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
	            { to: '/' + params.metaSectionUrl + '/new?parentId=' + section.data._id },
	            'add new sub-section'
	          ),
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/' + params.metaSectionUrl + '/' + section.data._id + '/edit' },
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
	            { to: '/' + params.metaSectionUrl + '/' + section.data._id + '/edit' },
	            'edit'
	          )
	        )
	      );
	    }
	  }

	  var sectionLink = '';
	  if (!disableInteraction && section.data.sectionType !== 'parent' && section.data.sectionType !== 'custom') {
	    sectionLink = '/' + params.metaSectionUrl + '/' + section.data._id;
	  }

	  return _react2.default.createElement(
	    'div',
	    { className: _SectionsListItem2.default.SectionsListItem + '\n      ' + (disableInteraction ? '' : _SectionsListItem2.default.SectionsListItem_interactive) },
	    _react2.default.createElement(
	      _TableRow2.default,
	      { interactive: !disableInteraction,
	        indented: !parent.data.meta },
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

/***/ 787:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionsListItem":"SectionsListItem__SectionsListItem___1KZEQ","SectionsListItem__actions":"SectionsListItem__SectionsListItem__actions___xiBIG","SectionsListItem_interactive":"SectionsListItem__SectionsListItem_interactive___iEJJ_"};

/***/ },

/***/ 788:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _reactSortable = __webpack_require__(784);

	var _sectionsActions = __webpack_require__(781);

	var _SectionsListItem = __webpack_require__(786);

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

	      var isNewSectionRoute = location.pathname === '/' + params.metaSectionUrl + '/new';
	      var isEditSectionRoute = location.pathname === '/' + params.metaSectionUrl + '/' + params.sectionId + '/edit';
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
	              return _react2.default.createElement(_SectionsListItem2.default, {
	                key: i,
	                params: params,
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
	                _react2.default.createElement(_SectionsListItem2.default, {
	                  params: params,
	                  section: subsection,
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

	var _sectionsActions = __webpack_require__(781);

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
	      var params = _props.params;


	      var sectionTypes = [];
	      if (parentSection.data.meta) {
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
	          _react2.default.createElement(_UI.Input, { label: 'url',
	            value: this.state.data.url,
	            error: this.state.errors.url,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('url', value);
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
	                  to: '/' + params.metaSectionUrl + '/' },
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
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;


	  return {
	    createSection: function createSection(data) {
	      dispatch((0, _sectionsActions.createSection)(data, '/' + params.metaSectionUrl));
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

	var _sectionsActions = __webpack_require__(781);

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
	      var params = _props3.params;


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
	              to: '/' + params.metaSectionUrl },
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
	                to: '/' + params.metaSectionUrl },
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
	              parentSection.data.meta ? '' : _react2.default.createElement(_UI.IconButton, { type: 'delete',
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
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;

	  var backlink = '/' + params.metaSectionUrl;

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

	var _reactSortable = __webpack_require__(784);

	var _sectionsActions = __webpack_require__(781);

	var _ArticlesListItem = __webpack_require__(795);

	var _ArticlesListItem2 = _interopRequireDefault(_ArticlesListItem);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Wrapper = __webpack_require__(766);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(768);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

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

	      var isNewArticleRoute = location.pathname === '/' + params.metaSectionUrl + '/' + params.sectionId + '/articles/new';
	      var isEditArticleRoute = location.pathname === '/' + params.metaSectionUrl + '/' + params.sectionId + '/articles/' + params.articleId;
	      var disableInteraction = isNewArticleRoute || isEditArticleRoute;

	      var actions = '';
	      if (section.data.sectionType === 'articles') {
	        actions = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/' + params.metaSectionUrl + '/' + params.sectionId + '/articles/new' },
	            'add new article'
	          ),
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/' + params.metaSectionUrl + '/' + params.sectionId + '/articles/new?type=heading' },
	            'add new heading'
	          )
	        );
	      } else if (section.data.sectionType === 'blogposts') {
	        actions = _react2.default.createElement(
	          _Layouts.Flex,
	          { justifyContent: 'flex-end' },
	          _react2.default.createElement(
	            _UI.LinkButton,
	            { to: '/' + params.metaSectionUrl + '/' + params.sectionId + '/articles/new' },
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
	                  params: params,
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
	                    params: params,
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

	var _Badge = __webpack_require__(761);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Icon = __webpack_require__(763);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _ArticlesListItem = __webpack_require__(796);

	var _ArticlesListItem2 = _interopRequireDefault(_ArticlesListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ArticlesListItem = function ArticlesListItem(_ref) {
	  var article = _ref.article;
	  var section = _ref.section;
	  var disableInteraction = _ref.disableInteraction;
	  var params = _ref.params;

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
	        { to: '/' + params.metaSectionUrl + '/' + section.data._id + '/articles/' + article.data._id },
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

	var _articleActions = __webpack_require__(782);

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
	                  to: '/' + params.metaSectionUrl + '/' + params.sectionId },
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
	      dispatch((0, _articleActions.createArticle)(data, '/' + params.metaSectionUrl + '/' + params.sectionId));
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

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _articleActions = __webpack_require__(782);

	var _Layouts = __webpack_require__(616);

	var _UI = __webpack_require__(546);

	var _Form = __webpack_require__(790);

	var _Comments = __webpack_require__(803);

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
	                to: '/' + params.metaSectionUrl + '/' + params.sectionId },
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
	                to: '/' + params.metaSectionUrl + '/' + params.sectionId },
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

	  var backlink = '/' + params.metaSectionUrl + '/' + params.sectionId;

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

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Comment = __webpack_require__(804);

	var _Comment2 = _interopRequireDefault(_Comment);

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

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Comment = __webpack_require__(805);

	var _Comment2 = _interopRequireDefault(_Comment);

	var _Layouts = __webpack_require__(616);

	var _LinkButton = __webpack_require__(553);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

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
	          _LinkButton2.default,
	          { small: true,
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
	      _LinkButton2.default,
	      { small: true,
	        color: 'red',
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
	          _LinkButton2.default,
	          { onClick: function onClick() {
	              return onDeleteComment(item._id);
	            } },
	          'Put back'
	        )
	      )
	    );
	  } else {
	    actions = _react2.default.createElement(
	      _LinkButton2.default,
	      {
	        color: 'red',
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

/***/ 805:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Comment":"Comment__Comment___CLS2w","Comment__deleteInfo":"Comment__Comment__deleteInfo___1xQWE","Comment__info":"Comment__Comment__info___1rool","Comment__comment":"Comment__Comment__comment___PQT67","Comment__body":"Comment__Comment__body___1S5F6","Comment__replies":"Comment__Comment__replies___PXLXR","Comment_deleted":"Comment__Comment_deleted___2nkYX","Reply":"Comment__Reply___1J5JO","Reply__deleteInfo":"Comment__Reply__deleteInfo___2OAbX","Reply__info":"Comment__Reply__info___30jI2","Reply__body":"Comment__Reply__body___1qhpn","Reply_deleted":"Comment__Reply_deleted___1kOVQ"};

/***/ },

/***/ 806:
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

	var _searchIndexActions = __webpack_require__(807);

	var _Loading = __webpack_require__(633);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Wrapper = __webpack_require__(766);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(768);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(755);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(757);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(759);

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

/***/ 807:
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

/***/ 808:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 809:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _reduxLogger = __webpack_require__(810);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(811);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(812);

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

/***/ 812:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _authReducer = __webpack_require__(813);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(815);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(816);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(817);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _usersReducer = __webpack_require__(818);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _sectionsReducer = __webpack_require__(819);

	var _sectionsReducer2 = _interopRequireDefault(_sectionsReducer);

	var _searchIndexReducer = __webpack_require__(820);

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

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(636);

	var _initialState = __webpack_require__(814);

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

/***/ 814:
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

/***/ 815:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(638);

	var _initialState = __webpack_require__(814);

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

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(647);

	var _initialState = __webpack_require__(814);

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

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(782);

	var _initialState = __webpack_require__(814);

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

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(773);

	var _initialState = __webpack_require__(814);

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

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sectionsActions = __webpack_require__(781);

	var _initialState = __webpack_require__(814);

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

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchIndexActions = __webpack_require__(807);

	var _initialState = __webpack_require__(814);

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

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9VSS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Vc2VySW5mby5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVSb3cvVGFibGVSb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RJdGVtL1F1ZXN0aW9uc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3RJdGVtL1VzZXJzTGlzdEl0ZW0uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3VXNlckZvcm0vTmV3VXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvU2VjdGlvbnMuanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdC9TZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N1YlNlY3Rpb25zTGlzdC9TdWJTZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9OZXdTZWN0aW9uRm9ybS9OZXdTZWN0aW9uRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRWRpdFNlY3Rpb25Gb3JtL0VkaXRTZWN0aW9uRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdC9BcnRpY2xlc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3RJdGVtL0FydGljbGVzTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdEl0ZW0vQXJ0aWNsZXNMaXN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybS9OZXdBcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0VkaXRBcnRpY2xlRm9ybS9FZGl0QXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0J1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbidcblxuaW1wb3J0IFVzZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVXNlcnNMaXN0J1xuaW1wb3J0IEVkaXRVc2VyRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtJ1xuaW1wb3J0IE5ld1VzZXJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdVc2VyRm9ybSdcblxuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucydcbmltcG9ydCBTZWN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zTGlzdCdcbmltcG9ydCBOZXdTZWN0aW9uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmV3U2VjdGlvbkZvcm0nXG5pbXBvcnQgRWRpdFNlY3Rpb25Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0nXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uJ1xuaW1wb3J0IE5ld0FydGljbGVGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybSdcbmltcG9ydCBFZGl0QXJ0aWNsZUZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRBcnRpY2xlRm9ybSdcblxuaW1wb3J0IFNlYXJjaEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hJbmRleCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuY29uc3QgRHVtbXkgPSAoKSA9PiA8ZGl2IC8+XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cInF1ZXN0aW9uc1wiIC8+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJxdWVzdGlvbnNcIiBjb21wb25lbnQ9e1F1ZXN0aW9uc0xpc3R9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnF1ZXN0aW9uSWRcIiBjb21wb25lbnQ9e1F1ZXN0aW9ufSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzTGlzdH0+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJuZXdcIiBjb21wb25lbnQ9e05ld1VzZXJGb3JtfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnVzZXJJZFwiIGNvbXBvbmVudD17RWRpdFVzZXJGb3JtfSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwic2VhcmNoLWluZGV4XCIgY29tcG9uZW50PXtTZWFyY2hJbmRleH0gLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cIjptZXRhU2VjdGlvblVybFwiIGNvbXBvbmVudD17U2VjdGlvbnN9PlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e1NlY3Rpb25zTGlzdH0+XG4gICAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0R1bW15fSAvPlxuXG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIm5ld1wiIGNvbXBvbmVudD17TmV3U2VjdGlvbkZvcm19IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIjpzZWN0aW9uSWQvZWRpdFwiIGNvbXBvbmVudD17RWRpdFNlY3Rpb25Gb3JtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIjpzZWN0aW9uSWRcIiBjb21wb25lbnQ9e1NlY3Rpb259PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJhcnRpY2xlcy9uZXdcIiBjb21wb25lbnQ9e05ld0FydGljbGVGb3JtfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJhcnRpY2xlcy86YXJ0aWNsZUlkXCIgY29tcG9uZW50PXtFZGl0QXJ0aWNsZUZvcm19IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuLi9GbGFzaE1lc3NhZ2UnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luJ1xuaW1wb3J0IEFwcEhlYWRlciBmcm9tICcuLi9BcHBIZWFkZXInXG5pbXBvcnQge2xvZ2luV2l0aFRva2VufSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgdGhpcy5wcm9wcy5hdHRlbXB0VG9rZW4odG9rZW4pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB1c2VyLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhdHRlbXB0aW5nTG9naW5cbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGF0dGVtcHRpbmdMb2dpbikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExvYWRpbmcgLz5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcH0+XG4gICAgICAgICAgICA8QXBwSGVhZGVyIC8+XG5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8TG9naW4gLz5cblxuICAgICAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZW1wdGluZ0xvZ2luOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmcsXG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXIsXG4gICAgICBzZWFyY2hJbmRleDoge1xuICAgICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5zZWFyY2hJbmRleC5pc0ZldGNoaW5nLFxuICAgICAgICBpc1VwZGF0aW5nOiBzdGF0ZS5zZWFyY2hJbmRleC5pc1VwZGF0aW5nLFxuICAgICAgICBsYXN0VXBkYXRlZE9uOiBzdGF0ZS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLFxuICAgICAgICBsYXN0VXBkYXRlZEJ5OiBzdGF0ZS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dGVtcHRUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ2luV2l0aFRva2VuKHRva2VuKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQXBwKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi9VSSdcblxuY29uc3QgRmxhc2hNZXNzYWdlID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0eXBlPXt0eXBlfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWVzc2FnZTogc3RhdGUuZmxhc2gubWVzc2FnZSxcbiAgICAgIHR5cGU6IHN0YXRlLmZsYXNoLnR5cGVcbiAgICB9XG4gIH1cbikoRmxhc2hNZXNzYWdlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3hcbiAqKi8iLCJpbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4vQnV0dG9uJ1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnLi9JY29uQnV0dG9uJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi9MaW5rQnV0dG9uJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcidcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0Zvb3Rlcn0gZnJvbSAnLi9Nb2RhbFdpbmRvdydcblxuZXhwb3J0IHtTcGlubmVyLCBCdXR0b24sIEljb25CdXR0b24sIExpbmtCdXR0b24sIEFsZXJ0LFxuICBNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dGb290ZXIsXG4gIElucHV0LCBDaGVja2JveCwgRWRpdG9yLCBTZWxlY3R9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9VSS5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NwaW5uZXIuY3NzJ1xuXG5jb25zdCBTcGlubmVyID0gKHtcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgbWluSGVpZ2h0OiAzMCxcbiAgICBfX2lubmVyOiB7XG4gICAgICB3aWR0aDogNSxcbiAgICAgIGhlaWdodDogNVxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtaW5IZWlnaHQ6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMubWluSGVpZ2h0fXJlbWBcbiAgfVxuXG4gIGNvbnN0IF9faW5uZXJTdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5fX2lubmVyLndpZHRofXJlbWAsXG4gICAgaGVpZ2h0OiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLl9faW5uZXIuaGVpZ2h0fXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJ9PlxuICAgICAgPGRpdiBzdHlsZT17X19pbm5lclN0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5TcGlubmVyX19pbm5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTN9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU0fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTZ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU3fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTl9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTExfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTJ9YH0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTcGlubmVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU3Bpbm5lclwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fXzFmaXlrXCIsXCJTcGlubmVyX19pbm5lclwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9faW5uZXJfX181OHZjVFwiLFwiU3Bpbm5lcl9fY2lyY2xlXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGVfX18yWnVnT1wiLFwic2stY2lyY2xlRmFkZURlbGF5XCI6XCJTcGlubmVyX19zay1jaXJjbGVGYWRlRGVsYXlfX18xRXRuOFwiLFwiU3Bpbm5lcl9fY2lyY2xlMVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMV9fX0JPRDduXCIsXCJTcGlubmVyX19jaXJjbGUyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUyX19fMmFCdHJcIixcIlNwaW5uZXJfX2NpcmNsZTNcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTNfX18xQmFaZlwiLFwiU3Bpbm5lcl9fY2lyY2xlNFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNF9fXzNWNXI3XCIsXCJTcGlubmVyX19jaXJjbGU1XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU1X19fM0RKNVhcIixcIlNwaW5uZXJfX2NpcmNsZTZcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTZfX19acFU1bVwiLFwiU3Bpbm5lcl9fY2lyY2xlN1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlN19fX1hwbks1XCIsXCJTcGlubmVyX19jaXJjbGU4XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU4X19fMV9SUlhcIixcIlNwaW5uZXJfX2NpcmNsZTlcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTlfX19mTzBPR1wiLFwiU3Bpbm5lcl9fY2lyY2xlMTBcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTEwX19fbmkzNUFcIixcIlNwaW5uZXJfX2NpcmNsZTExXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMV9fXzFoYXY5XCIsXCJTcGlubmVyX19jaXJjbGUxMlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTJfX18yaXB6VFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24uY3NzJ1xuXG5jb25zdCBCdXR0b24gPSAoe1xuICBjaGlsZHJlbixcbiAgb25DbGljayxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbCxcbiAgY29sb3IgPSAnYmx1ZSdcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZSA9IFtzdHlsZXMuQnV0dG9uXVxuXG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkJ1dHRvbl9yZWQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5CdXR0b25fZ3JlZW4pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JsdWUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuQnV0dG9uX2JsdWUpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfSB0bz17dG99PntjaGlsZHJlbn08L0xpbms+XG4gICAgKVxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCdXR0b25cIjpcIkJ1dHRvbl9fQnV0dG9uX19fUUk3YjJcIixcIkJ1dHRvbl9ibHVlXCI6XCJCdXR0b25fX0J1dHRvbl9ibHVlX19feS1vdjJcIixcIkJ1dHRvbl9yZWRcIjpcIkJ1dHRvbl9fQnV0dG9uX3JlZF9fX0F2UVlzXCIsXCJCdXR0b25fZ3JlZW5cIjpcIkJ1dHRvbl9fQnV0dG9uX2dyZWVuX19feV9mZTJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb25CdXR0b24uY3NzJ1xuXG5jb25zdCBJY29uQnV0dG9uID0gKHtcbiAgdHlwZSxcbiAgb25DbGljayxcbiAgZGlzYWJsZWQgPSBmYWxzZSxcbiAgdG8gPSBudWxsLFxuICBocmVmID0gbnVsbFxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gW3N0eWxlcy5JY29uQnV0dG9uXVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2RlbGV0ZSc6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuSWNvbkJ1dHRvbl9kZWxldGUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2Nsb3NlJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5JY29uQnV0dG9uX2Nsb3NlKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oJyAnKX1cbiAgICAgICAgdG89e3RvfSAvPlxuICAgIClcbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICBocmVmPXtocmVmfSAvPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oJyAnKX1cbiAgICAgICAgb25DbGljaz17b25DbGlja30gLz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvbkJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkljb25CdXR0b25cIjpcIkljb25CdXR0b25fX0ljb25CdXR0b25fX19HZFY3aVwiLFwiSWNvbkJ1dHRvbl9kZWxldGVcIjpcIkljb25CdXR0b25fX0ljb25CdXR0b25fZGVsZXRlX19fZ25OWU9cIixcIkljb25CdXR0b25fY2xvc2VcIjpcIkljb25CdXR0b25fX0ljb25CdXR0b25fY2xvc2VfX18yOV9HYVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaW5rQnV0dG9uLmNzcydcblxuY29uc3QgTGlua0J1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBjb2xvciA9ICdibHVlJ1xufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuTGlua0J1dHRvbl1cblxuICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgY2FzZSAncmVkJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuTGlua0J1dHRvbl9yZWQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuTGlua0J1dHRvbl9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuTGlua0J1dHRvbl9ibHVlKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IGhyZWY9e2hyZWZ9PntjaGlsZHJlbn08L2E+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gb25DbGljaz17b25DbGlja30+e2NoaWxkcmVufTwvYnV0dG9uPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTGlua0J1dHRvblwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9fXzJGbGltXCIsXCJMaW5rQnV0dG9uX2JsdWVcIjpcIkxpbmtCdXR0b25fX0xpbmtCdXR0b25fYmx1ZV9fXzFXN3NsXCIsXCJMaW5rQnV0dG9uX3JlZFwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9yZWRfX18zTHVHY1wiLFwiTGlua0J1dHRvbl9ncmVlblwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9ncmVlbl9fXzN1dnJiXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BbGVydC5jc3MnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZSA9ICdsb2cnXG59KSA9PiB7XG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnbG9nJzpcbiAgICBkZWZhdWx0OlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfbG9nKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIHttZXNzYWdlXG4gICAgICAgID8gPGRpdiBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc05hbWVzLmpvaW4oJyAnKX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgIDogJydcbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2xvZ1wiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2xvZ19fXzJuNURIXCIsXCJBbGVydF9fbWVzc2FnZV9lcnJvclwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX2Vycm9yX19fMmlkNFdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSW5wdXQuY3NzJ1xuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGxhYmVsID0gbnVsbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgcGxhY2Vob2xkZXIgPSAnJyxcbiAgICAgIHR5cGUgPSAndGV4dCcsXG4gICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZXJyb3IgPSBudWxsXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBlcnJvckVsID0gJydcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yRWwgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2Vycm9yfT57ZXJyb3J9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlcy5JbnB1dH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dF9lcnJvciA6ICcnfWB9PlxuICAgICAgICB7bGFiZWxcbiAgICAgICAgICA/IDxkaXYgc3R5bGU9e3t3aWR0aDogYCR7bGFiZWxXaWR0aH1yZW1gfX0gY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2xhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLklucHV0X19pbnB1dH1cbiAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgIHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gb25DaGFuZ2UodGhpcy5fZWxlbWVudC52YWx1ZSl9IC8+XG5cbiAgICAgICAge2Vycm9yRWx9XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW5wdXRcIjpcIklucHV0X19JbnB1dF9fX3M2N04wXCIsXCJJbnB1dF9fbGFiZWxcIjpcIklucHV0X19JbnB1dF9fbGFiZWxfX185SkRVdVwiLFwiSW5wdXRfX2lucHV0XCI6XCJJbnB1dF9fSW5wdXRfX2lucHV0X19fd2IxUERcIixcIklucHV0X19lcnJvclwiOlwiSW5wdXRfX0lucHV0X19lcnJvcl9fX2Zna0NEXCIsXCJJbnB1dF9lcnJvclwiOlwiSW5wdXRfX0lucHV0X2Vycm9yX19fMkpZR3lcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hlY2tib3guY3NzJ1xuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbFdpZHRoID0gOCxcbiAgICAgIGRpc2FibGVkID0gZmFsc2VcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtsYWJlbFdpZHRofXJlbWB9fSBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuQ2hlY2tib3hfX2lucHV0fVxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLl9lbGVtZW50LmNoZWNrZWQpfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNoZWNrYm94XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX18xSllRZ1wiLFwiQ2hlY2tib3hfX2xhYmVsXCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2xhYmVsX19fM09CVWRcIixcIkNoZWNrYm94X19pbnB1dFwiOlwiQ2hlY2tib3hfX0NoZWNrYm94X19pbnB1dF9fXzFuRE1WXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZpbmRET01Ob2RlIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IFNjcmliZSBmcm9tICdzY3JpYmUtZWRpdG9yJ1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnc2NyaWJlLXBsdWdpbi10b29sYmFyJ1xuaW1wb3J0IEhlYWRpbmdDbWQgZnJvbSAnc2NyaWJlLXBsdWdpbi1oZWFkaW5nLWNvbW1hbmQnXG5pbXBvcnQgTGlua1Byb21wdENtZCBmcm9tICdzY3JpYmUtcGx1Z2luLWxpbmstcHJvbXB0LWNvbW1hbmQnXG5pbXBvcnQgVW5saW5rQ21kIGZyb20gJ3NjcmliZS1wbHVnaW4taW50ZWxsaWdlbnQtdW5saW5rLWNvbW1hbmQnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCB7RmxleCwgQmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9FZGl0b3IuY3NzJ1xuXG5jbGFzcyBFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy52YWx1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBjb25zdCBlZGl0b3IgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZnMuZWRpdG9yKVxuICAgIGNvbnN0IHRvb2xiYXIgPSBmaW5kRE9NTm9kZSh0aGlzLnJlZnMudG9vbGJhcilcblxuICAgIGNvbnN0IHNjcmliZSA9IG5ldyBTY3JpYmUoZWRpdG9yKVxuICAgIHNjcmliZS51c2UoSGVhZGluZ0NtZCgxKSlcbiAgICBzY3JpYmUudXNlKEhlYWRpbmdDbWQoMikpXG4gICAgc2NyaWJlLnVzZShMaW5rUHJvbXB0Q21kKCkpXG4gICAgc2NyaWJlLnVzZShVbmxpbmtDbWQoKSlcbiAgICBzY3JpYmUudXNlKFRvb2xiYXIodG9vbGJhcikpXG5cbiAgICBzY3JpYmUuc2V0Q29udGVudCh0aGlzLnN0YXRlLnZhbHVlKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzY3JpYmUub24oJ2NvbnRlbnQtY2hhbmdlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsdWU6IHNjcmliZS5nZXRIVE1MKCl9KVxuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHNjcmliZS5nZXRIVE1MKCkpXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLnNjcmliZSA9IHNjcmliZVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBpZiAobmV3UHJvcHMudmFsdWUgIT09IHRoaXMuc3RhdGUudmFsdWUpIHtcbiAgICAgIHRoaXMuc2NyaWJlLnNldENvbnRlbnQobmV3UHJvcHMudmFsdWUpXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogbmV3UHJvcHMudmFsdWV9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2Vycm9yLCBsYWJlbH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3J9ICR7ZXJyb3IgPyBzdHlsZXMuRWRpdG9yX2Vycm9yIDogJyd9YH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19sYWJlbH1gfT57bGFiZWx9PC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX2JvZHl9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdG9yX190b29sYmFyfSByZWY9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9oMX1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiaDFcIj5cbiAgICAgICAgICAgICAgICBIZWFkaW5nIDFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9oMn1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiaDJcIj5cbiAgICAgICAgICAgICAgICBIZWFkaW5nIDFcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX3NlcGFyYXRvcn0gLz5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2JvbGR9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImJvbGRcIj5cbiAgICAgICAgICAgICAgICBib2xkXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfaXRhbGljfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJpdGFsaWNcIj5cbiAgICAgICAgICAgICAgICBpdGFsaWNcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9vbH1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiaW5zZXJ0T3JkZXJlZExpc3RcIj5cbiAgICAgICAgICAgICAgICBPbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX3VsfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJpbnNlcnRVbk9yZGVyZWRMaXN0XCI+XG4gICAgICAgICAgICAgICAgVWxcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX3NlcGFyYXRvcn0gLz5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2xpbmt9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImxpbmtQcm9tcHRcIj5cbiAgICAgICAgICAgICAgICBMaW5rXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfdW5saW5rfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJ1bmxpbmtcIj5cbiAgICAgICAgICAgICAgICBVbmxpbmtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fZWRpdG9yfSByZWY9XCJlZGl0b3JcIiAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX2Vycm9yfT57ZXJyb3J9PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRvclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5qc3hcbiAqKi8iLCJpbXBvcnQgQmxvY2sgZnJvbSAnLi9CbG9jaydcbmltcG9ydCBGbGV4IGZyb20gJy4vRmxleCdcbmltcG9ydCBXcmFwIGZyb20gJy4vV3JhcCdcbmltcG9ydCB7R3JpZCwgR3JpZEl0ZW19IGZyb20gJy4vR3JpZCdcbmltcG9ydCB7TGlzdCwgTGlzdEl0ZW19IGZyb20gJy4vTGlzdCdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4vTGlzdElubGluZSdcbmltcG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9IGZyb20gJy4vTWVkaWEnXG5pbXBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fSBmcm9tICcuL1BhZ2UnXG5cbmV4cG9ydCB7QmxvY2ssIEZsZXgsIFdyYXAsIEdyaWQsIEdyaWRJdGVtLFxuICBMaXN0LCBMaXN0SXRlbSwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sXG4gIE1lZGlhLCBNZWRpYUJvZHksIE1lZGlhRmlndXJlLFxuICBQYWdlLCBQYWdlQ29udGVudFxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEJsb2NrID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvY2tcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBGbGV4ID0gKHtcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGZsZXhEaXJlY3Rpb24gPSAncm93JyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZmxleERpcmVjdGlvbixcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICB3aWR0aDogJzEwMCUnLFxuICAgIGhlaWdodDogJzEwMCUnXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxleFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBXcmFwID0gKHtcbiAgd2lkdGggPSAnOTAlJyxcbiAgbWF4V2lkdGggPSAnODByZW0nLCAvLyAxMjgwcHggcHJvdmlkZWQgMWVtID09PSAxNnB4XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aCxcbiAgICBtYXhXaWR0aCxcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgbWFyZ2luUmlnaHQ6ICdhdXRvJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuXG5jb25zdCBHcmlkID0gKHtcbiAgZ3V0dGVyID0gMCxcbiAgYWxpZ25JdGVtcyA9ICdzdHJldGNoJyxcbiAganVzdGlmeUNvbnRlbnQgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0aWZ5Q29udGVudCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgbWFyZ2luUmlnaHQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEdyaWRJdGVtID0gKHtcbiAgc3BhbiA9IDAsXG4gIG91dE9mID0gMTIsXG4gIGd1dHRlciA9IDAsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBsZXQgc3R5bGUgPSB7XG4gICAgcGFkZGluZ0xlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIHBhZGRpbmdSaWdodDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgZmxleDogJzEnXG4gIH1cblxuICBpZiAoc3BhbiAmJiBvdXRPZikge1xuICAgIHN0eWxlID0gT2JqZWN0LmFzc2lnbih7fSwgc3R5bGUsIHtcbiAgICAgIGZsZXg6ICcwIDAgYXV0bycsXG4gICAgICB3aWR0aDogYCR7MTAwICogc3BhbiAvIG91dE9mfSVgXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQge0dyaWQsIEdyaWRJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdC5jc3MnXG5cbmNvbnN0IExpc3QgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3R9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdEl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdF9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3QsIExpc3RJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdFwiOlwiTGlzdF9fbGlzdF9fXzJrQlVkXCIsXCJsaXN0X19pdGVtXCI6XCJMaXN0X19saXN0X19pdGVtX19fMUQyVkZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlzdElubGluZS5jc3MnXG5cbmNvbnN0IExpc3RJbmxpbmUgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuLFxuICBhbGlnbkl0ZW1zID0gJ2NlbnRlcicsXG4gIGp1c3RmeUNvbnRlbnQgPSAnZmxleC1zdGFydCdcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGZ5Q29udGVudFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0SW5saW5lfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3VsPlxuICApXG59XG5cbmNvbnN0IExpc3RJbmxpbmVJdGVtID0gKHtcbiAgbiA9IDEsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxsaSBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmVfX2l0ZW19ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbGk+XG4gIClcbn1cblxuZXhwb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcImxpc3RJbmxpbmVcIjpcIkxpc3RJbmxpbmVfX2xpc3RJbmxpbmVfX18zR2podVwiLFwibGlzdElubGluZV9faXRlbVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9faXRlbV9fXzJLMWtRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lZGlhLmNzcydcblxuY29uc3QgTWVkaWEgPSAoe1xuICBhbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgYWxpZ25JdGVtc1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWF9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhQm9keSA9ICh7XG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2JvZHl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1lZGlhRmlndXJlID0gKHtcbiAgbiA9IDEsXG4gIG5sID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgJHtiYXNlbGluZSAqIG5sfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLm1lZGlhX19maWd1cmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7TWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmV9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIm1lZGlhXCI6XCJNZWRpYV9fbWVkaWFfX18zYTAwR1wiLFwibWVkaWFfX2ZpZ3VyZVwiOlwiTWVkaWFfX21lZGlhX19maWd1cmVfX18yNFp3QVwiLFwibWVkaWFfX2JvZHlcIjpcIk1lZGlhX19tZWRpYV9fYm9keV9fXzNWZDItXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBQYWdlID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIG1pbkhlaWdodDogJzEwMHZoJyxcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgUGFnZUNvbnRlbnQgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuZXhwb3J0IHtQYWdlLCBQYWdlQ29udGVudH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkVkaXRvclwiOlwiRWRpdG9yX19FZGl0b3JfX18zbUcweFwiLFwiRWRpdG9yX19sYWJlbFwiOlwiRWRpdG9yX19FZGl0b3JfX2xhYmVsX19fMWhkLVVcIixcIkVkaXRvcl9fYm9keVwiOlwiRWRpdG9yX19FZGl0b3JfX2JvZHlfX18zRnVmUVwiLFwiRWRpdG9yX190b29sYmFyXCI6XCJFZGl0b3JfX0VkaXRvcl9fdG9vbGJhcl9fXzJjYmdVXCIsXCJFZGl0b3JfX2NvbW1hbmRcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX19fMTVLWGtcIixcIkVkaXRvcl9fY29tbWFuZF9oMVwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaDFfX18yYXZyRVwiLFwiRWRpdG9yX19jb21tYW5kX2gyXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9oMl9fXzVqLU50XCIsXCJFZGl0b3JfX2NvbW1hbmRfaDNcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2gzX19fMnRBakxcIixcIkVkaXRvcl9fY29tbWFuZF9ib2xkXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9ib2xkX19fM1lkSjNcIixcIkVkaXRvcl9fY29tbWFuZF9pdGFsaWNcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2l0YWxpY19fXzFVWkEwXCIsXCJFZGl0b3JfX2NvbW1hbmRfb2xcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX29sX19fMlJRYm5cIixcIkVkaXRvcl9fY29tbWFuZF91bFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfdWxfX19jczlWZFwiLFwiRWRpdG9yX19jb21tYW5kX2xpbmtcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2xpbmtfX18xX0RSdlwiLFwiRWRpdG9yX19jb21tYW5kX3VubGlua1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfdW5saW5rX19fM0R3N3RcIixcIkVkaXRvcl9fc2VwYXJhdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fc2VwYXJhdG9yX19fYmYwcGVcIixcIkVkaXRvcl9fZWRpdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fZWRpdG9yX19fMV9TeENcIixcIkVkaXRvcl9fZXJyb3JcIjpcIkVkaXRvcl9fRWRpdG9yX19lcnJvcl9fXzFuTVhkXCIsXCJFZGl0b3JfZXJyb3JcIjpcIkVkaXRvcl9fRWRpdG9yX2Vycm9yX19fMUc2NkNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QuY3NzJ1xuXG5jbGFzcyBTZWxlY3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgbGFiZWwsXG4gICAgICBsYWJlbFdpZHRoID0gOCxcbiAgICAgIGRpc2FibGVkXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gb3B0aW9ucy5maW5kKG8gPT4gby5pZCA9PT0gdmFsdWUpXG4gICAgY29uc3QgaW5wdXRMYWJlbCA9IHNlbGVjdGVkT3B0aW9uID8gc2VsZWN0ZWRPcHRpb24ubGFiZWwgOiAnTm9uZSdcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtsYWJlbFdpZHRofXJlbWB9fSBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWxlY3RfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fd3JhcH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX2Zha2V9PntpbnB1dExhYmVsfTwvZGl2PlxuXG4gICAgICAgICAgPHNlbGVjdCBjbGFzc05hbWU9e3N0eWxlcy5TZWxlY3RfX2lucHV0fVxuICAgICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyh2KSA9PiBvbkNoYW5nZSh2LnRhcmdldC52YWx1ZSl9PlxuICAgICAgICAgICAge29wdGlvbnMubWFwKChvLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17by5pZH0+e28ubGFiZWx9PC9vcHRpb24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VsZWN0XCI6XCJTZWxlY3RfX1NlbGVjdF9fXzFyUGJMXCIsXCJTZWxlY3RfX2xhYmVsXCI6XCJTZWxlY3RfX1NlbGVjdF9fbGFiZWxfX18xR1d2V1wiLFwiU2VsZWN0X193cmFwXCI6XCJTZWxlY3RfX1NlbGVjdF9fd3JhcF9fX3d2UmF4XCIsXCJTZWxlY3RfX2Zha2VcIjpcIlNlbGVjdF9fU2VsZWN0X19mYWtlX19fM3drZGRcIixcIlNlbGVjdF9faW5wdXRcIjpcIlNlbGVjdF9fU2VsZWN0X19pbnB1dF9fX3I3ZXk3XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9kYWxXaW5kb3cuY3NzJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi8uLi9MYXlvdXRzJ1xuXG5jb25zdCBNb2RhbFdpbmRvdyA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICB3aWR0aDogNDBcbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICB3aWR0aDogYCR7bXVsdGlwbGllcnMud2lkdGggKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWx9PlxuICAgICAgPEZsZXggYWxpZ25JdGVtcz1cImNlbnRlclwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3d9PlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9GbGV4PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93SGVhZGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAyLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2hlYWRlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dCb2R5ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAzLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L21haW4+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dGb290ZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDEsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fZm9vdGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Zvb3Rlcj5cbiAgKVxufVxuXG5leHBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk1vZGFsXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxfX18ya2xjZ1wiLFwiTW9kYWxXaW5kb3dcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fXzJ0VnlaXCIsXCJNb2RhbFdpbmRvd19faGVhZGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2hlYWRlcl9fXzFRcldIXCIsXCJNb2RhbFdpbmRvd19fYm9keVwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19ib2R5X19fM1F1UWhcIixcIk1vZGFsV2luZG93X19mb290ZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fZm9vdGVyX19fMkkwVEZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5jc3MnXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9hZGluZ30+XG4gICAgICA8U3Bpbm5lciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2FkaW5nXCI6XCJMb2FkaW5nX19Mb2FkaW5nX19fM3B5Y3pcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7RmxleCwgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge01vZGFsV2luZG93LCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0Zvb3RlciwgSW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge2xvZ2luV2l0aENyZWRlbnRpYWxzfSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3VibWl0Rm9ybSA9IHRoaXMuc3VibWl0Rm9ybS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VFbWFpbCA9IHRoaXMuY2hhbmdlRW1haWwuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlbWFpbEVycm9yOiAnJyxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfVxuICB9XG5cbiAgc3VibWl0Rm9ybSAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIGxldCBlbWFpbEVycm9yID0gJydcbiAgICBsZXQgcGFzc3dvcmRFcnJvciA9ICcnXG5cbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuZW1haWwgPT09ICcnKSB7XG4gICAgICBlbWFpbEVycm9yID0gJ2VtYWlsIGNhbm5vdCBiZSBlbXB0eSdcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5wYXNzd29yZCA9PT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRXJyb3IgPSAncGFzc3dvcmQgY2Fubm90IGJlIGJsYW5rJ1xuICAgIH1cblxuICAgIGlmICghZW1haWxFcnJvciAmJiAhcGFzc3dvcmRFcnJvcikge1xuICAgICAgZGlzcGF0Y2gobG9naW5XaXRoQ3JlZGVudGlhbHModGhpcy5zdGF0ZS5lbWFpbCwgdGhpcy5zdGF0ZS5wYXNzd29yZCkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBlbWFpbEVycm9yLFxuICAgICAgICBwYXNzd29yZEVycm9yXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZUVtYWlsICh2YWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZW1haWw6IHZhbHVlLFxuICAgICAgZW1haWxFcnJvcjogJydcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwYXNzd29yZDogdmFsdWUsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0ZldGNoaW5nfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWxXaW5kb3c+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnN1Ym1pdEZvcm19PlxuICAgICAgICAgIDxNb2RhbFdpbmRvd0hlYWRlcj5cbiAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCI+TG9naW48L0ZsZXg+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0hlYWRlcj5cblxuICAgICAgICAgIDxNb2RhbFdpbmRvd0JvZHk+XG4gICAgICAgICAgICA8TGlzdCBuPXsxLjV9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbDpcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lbWFpbEVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezEuNX0+XG4gICAgICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmQ6XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBCaWdTZWNyZXRcIlxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUucGFzc3dvcmRFcnJvcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICA8L01vZGFsV2luZG93Qm9keT5cblxuICAgICAgICAgIDxNb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRmV0Y2hpbmd9XG4gICAgICAgICAgICAgIGxhYmVsPVwiTG9naW5cIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvTW9kYWxXaW5kb3c+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuYXV0aC5pc0ZldGNoaW5nXG4gICAgfVxuICB9XG4pKExvZ2luKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9naW4vTG9naW4uanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQVVUSCA9ICdSRVFVRVNUX0FVVEgnXG5leHBvcnQgY29uc3QgTE9HSU4gPSAnTE9HSU4nXG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCdcblxuY29uc3QgcmVxdWVzdEF1dGggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9BVVRIXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ091dCA9ICgpID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICBkaXNwYXRjaCh7dHlwZTogTE9HT1VUfSlcbiAgfVxufVxuXG5jb25zdCBsb2dJbiA9IChcbiAgdXNlclxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HSU4sXG4gICAgdXNlclxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbldpdGhDcmVkZW50aWFscyA9IChcbiAgZW1haWwsXG4gIHBhc3N3b3JkXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hdXRoL2FkbWluL2F1dGhlbnRpY2F0ZS1jcmVkZW50aWFsc2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aFRva2VuID0gKFxuICB0b2tlblxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXV0aC9hZG1pbi9hdXRoZW50aWNhdGUtdG9rZW5gLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdG9rZW5cbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicsIGpzb24uZGF0YS50b2tlbilcbiAgICAgICAgICBkaXNwYXRjaChsb2dJbihqc29uLmRhdGEudXNlcikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24uZGF0YS5lcnJvciwgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBTRVRfTUVTU0FHRSA9ICdTRVRfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBVTlNFVF9NRVNTQUdFID0gJ1VOU0VUX01FU1NBR0UnXG5cbmNvbnN0IHNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlLFxuICB0aW1lb3V0SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NRVNTQUdFLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgdGltZW91dElkXG4gIH1cbn1cblxuY29uc3QgdW5zZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVU5TRVRfTUVTU0FHRVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmbGFzaE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1bnNldE1lc3NhZ2UoKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgZGlzcGF0Y2goc2V0TWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlVHlwZSwgdCkpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9Vc2VySW5mbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcEhlYWRlci5jc3MnXG5cbmNvbnN0IEFwcEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XG4gICAgICA8TGlzdElubGluZSBuPXsyfT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyX19zaXRlbmFtZX0+VmFjY2luZSBBbnN3ZXJzIEFkbWluPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cblxuICAgICAgPFVzZXJJbmZvIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHBIZWFkZXIvQXBwSGVhZGVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuLi8uLi9zdG9yZS9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXNlckluZm8uY3NzJ1xuXG5jb25zdCBVc2VySW5mbyA9ICh7XG4gIHVzZXIsXG4gIGxvZ091dFxufSkgPT4ge1xuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvfT5cbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpc3RJbmxpbmUgbj17MC41fT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezAuNX0+TG9nZ2VkIGluIGFzPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17MC41fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvX191c2VybmFtZX0+e3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH0+TG9nIG91dDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGRpdiAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ091dDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0JywgJ2xvZycpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2VySW5mbylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlVzZXJJbmZvXCI6XCJVc2VySW5mb19fVXNlckluZm9fX18yU01qSlwiLFwiVXNlckluZm9fX3VzZXJuYW1lXCI6XCJVc2VySW5mb19fVXNlckluZm9fX3VzZXJuYW1lX19fMnp5cFZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXYuY3NzJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUXVlc3Rpb25zJyxcbiAgICAgIHVybDogJy9xdWVzdGlvbnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ01haW4gTmF2aWdhdGlvbicsXG4gICAgICB1cmw6ICcvbWFpbi1uYXYnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ090aGVyIE5hdmlnYXRpb24nLFxuICAgICAgdXJsOiAnL290aGVyLW5hdidcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVXNlcnMnLFxuICAgICAgdXJsOiAnL3VzZXJzJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdTZWFyY2ggSW5kZXgnLFxuICAgICAgdXJsOiAnL3NlYXJjaC1pbmRleCdcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cbiAgICAgIDxMaXN0SW5saW5lIG49ezAuNX0+XG4gICAgICAgIHtpdGVtcy5tYXAoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbSBuPXswLjV9IGtleT17aS51cmx9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5OYXZfX2l0ZW19XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuTmF2X19pdGVtX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICB0bz17aS51cmx9PntpLmxhYmVsfTwvTGluaz5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05hdi9OYXYuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmF2XCI6XCJOYXZfX05hdl9fXzNQeXllXCIsXCJOYXZfX2l0ZW1cIjpcIk5hdl9fTmF2X19pdGVtX19fNUhidUVcIixcIk5hdl9faXRlbV9hY3RpdmVcIjpcIk5hdl9fTmF2X19pdGVtX2FjdGl2ZV9fXzJxNHRUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXBwSGVhZGVyXCI6XCJBcHBIZWFkZXJfX0FwcEhlYWRlcl9fXzJVNEtPXCIsXCJBcHBIZWFkZXJfX3NpdGVuYW1lXCI6XCJBcHBIZWFkZXJfX0FwcEhlYWRlcl9fc2l0ZW5hbWVfX18zY2YtUlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFwcFwiOlwiQXBwX19BcHBfX19sQkVYSVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2NDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hRdWVzdGlvbnN9IGZyb20gJy4uLy4uL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IFF1ZXN0aW9uc0xpc3RJdGVtIGZyb20gJy4uL1F1ZXN0aW9uc0xpc3RJdGVtJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL1dyYXBwZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGUnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcblxuY2xhc3MgUXVlc3Rpb25zTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2ZldGNoUXVlc3Rpb25zfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoUXVlc3Rpb25zKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBpdGVtcywgaXNGZXRjaGluZywgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFdyYXBwZXIgZGltbWVkPXtwYXJhbXMucXVlc3Rpb25JZH0+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlUm93IGhlYWRpbmc+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmcgdGl0bGU+UXVlc3Rpb25zPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIGxhc3RcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBoZWFkaW5nPnBvc3RlZCBvbjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cblxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGkuZGF0YS5faWQgPT09IHBhcmFtcy5xdWVzdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e2l9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e3BhcmFtcy5xdWVzdGlvbklkfSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHN0YXRlLnF1ZXN0aW9ucy5pdGVtcyxcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnF1ZXN0aW9ucy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoUXVlc3Rpb25zOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUXVlc3Rpb25zKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFF1ZXN0aW9uc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OUyA9ICdSRVFVRVNUX1FVRVNUSU9OUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1FVRVNUSU9OUyA9ICdSRUNFSVZFX1FVRVNUSU9OUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFID0gJ1JFUVVFU1RfUVVFU1RJT05fVVBEQVRFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFID0gJ1JFQ0VJVkVfUVVFU1RJT05fVVBEQVRFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04gPSAnUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfUVVFU1RJT04gPSAnQ09ORklSTV9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9RVUVTVElPTiA9ICdSRUpFQ1RfREVMRVRFX1FVRVNUSU9OJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVRdWVzdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1FVRVNUSU9OUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0UXVlc3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVF1ZXN0aW9ucyhqc29uLmRhdGEucXVlc3Rpb25zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OX1VQREFURSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICB1cGRhdGVkUXVlc3Rpb25cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRRdWVzdGlvblxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5xdWVzdGlvbikpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0RFTEVURV9RVUVTVElPTixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdWVzdGlvbiA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3REZWxldGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9xdWVzdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy9xdWVzdGlvbnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1F1ZXN0aW9uIHdhcyBkZWxldGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdERlbGV0ZShpZCkpXG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUXVlc3Rpb25zTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBRdWVzdGlvbnNMaXN0SXRlbSA9ICh7XG4gIHF1ZXN0aW9uLFxuICBkaXNhYmxlSW50ZXJhY3Rpb25cbn0pID0+IHtcbiAgY29uc3QgdHJ1bmNhdGVkVGV4dCA9IGAke3F1ZXN0aW9uLmRhdGEucXVlc3Rpb24uc2xpY2UoMywgTWF0aC5taW4ocXVlc3Rpb24uZGF0YS5xdWVzdGlvbi5sZW5ndGggLSAzLCA3MCkpfS4uYFxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93IGludGVyYWN0aXZlPXshZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgIDxUYWJsZUNvbHVtbj5cbiAgICAgICAgPEljb24gdHlwZT1cImVudmVsb3BlXCIgLz5cbiAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjEwXCI+XG4gICAgICAgIDxUYWJsZUNlbGwgdGl0bGVcbiAgICAgICAgICB0bz17ZGlzYWJsZUludGVyYWN0aW9uID8gbnVsbCA6IGAvcXVlc3Rpb25zLyR7cXVlc3Rpb24uZGF0YS5faWR9YH0+XG4gICAgICAgICAge3F1ZXN0aW9uLmRhdGEucG9zdGVyTmFtZX1cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgIDxUYWJsZUNlbGwgdG89e2Rpc2FibGVJbnRlcmFjdGlvbiA/IG51bGwgOiBgL3F1ZXN0aW9ucy8ke3F1ZXN0aW9uLmRhdGEuX2lkfWB9PlxuICAgICAgICAgIHt0cnVuY2F0ZWRUZXh0fVxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjEwXCI+XG4gICAgICAgIHtxdWVzdGlvbi5kYXRhLmlzU2VlblxuICAgICAgICAgID8gJydcbiAgICAgICAgICA6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFkZ2V9PlxuICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJOb3QgQW5zd2VyZWRcIiBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgIDxUYWJsZUNvbHVtbiBsYXN0XG4gICAgICAgIHdpZHRoPVwiMTBcIj5cbiAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICA8VGltZSB2YWx1ZT17cXVlc3Rpb24uZGF0YS5jcmVhdGVkQXR9IGZvcm1hdD1cImg6bW0gQSBvbiBNTU0gRG9cIiAvPlxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgPC9UYWJsZVJvdz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWVzdGlvbnNMaXN0SXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVSb3cuY3NzJ1xuXG5jb25zdCBUYWJsZVJvdyA9ICh7XG4gIGNoaWxkcmVuLFxuICBpbnRlcmFjdGl2ZSA9IGZhbHNlLFxuICBoZWFkaW5nID0gZmFsc2UsXG4gIGluZGVudGVkID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLlRhYmxlUm93XVxuICBpZiAoaGVhZGluZykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVSb3dfaGVhZGluZylcbiAgfVxuICBpZiAoaW50ZXJhY3RpdmUpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlUm93X2ludGVyYWN0aXZlKVxuICB9XG4gIGlmIChpbmRlbnRlZCkge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVSb3dfaW5kZW50ZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3dcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlUm93L1RhYmxlUm93LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlUm93XCI6XCJUYWJsZVJvd19fVGFibGVSb3dfX18yVUJOOVwiLFwiVGFibGVSb3dfaGVhZGluZ1wiOlwiVGFibGVSb3dfX1RhYmxlUm93X2hlYWRpbmdfX18xWjllUVwiLFwiVGFibGVSb3dfaW50ZXJhY3RpdmVcIjpcIlRhYmxlUm93X19UYWJsZVJvd19pbnRlcmFjdGl2ZV9fX2k1SnJWXCIsXCJUYWJsZVJvd19pbmRlbnRlZFwiOlwiVGFibGVSb3dfX1RhYmxlUm93X2luZGVudGVkX19fMjhWNzZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlUm93L1RhYmxlUm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVDb2x1bW4uY3NzJ1xuXG5jb25zdCBUYWJsZUNvbHVtbiA9ICh7XG4gIGNoaWxkcmVuLFxuICB3aWR0aCxcbiAgbGFzdCA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nUmlnaHQ6IGxhc3QgPyAwIDogJzEuNXJlbSdcbiAgfVxuICBpZiAod2lkdGggPT09ICdzdHJldGNoJykge1xuICAgIHN0eWxlLmZsZXggPSAxXG4gIH0gZWxzZSB7XG4gICAgc3R5bGUud2lkdGggPSBgJHt3aWR0aH1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfVxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuVGFibGVDb2x1bW59PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ29sdW1uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUYWJsZUNvbHVtblwiOlwiVGFibGVDb2x1bW5fX1RhYmxlQ29sdW1uX19fMVR1YnNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlQ29sdW1uL1RhYmxlQ29sdW1uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZUNlbGwuY3NzJ1xuXG5jb25zdCBUYWJsZUNlbGwgPSAoe1xuICBjaGlsZHJlbixcbiAgdGl0bGUgPSBmYWxzZSxcbiAgaGVhZGluZyA9IGZhbHNlLFxuICB0byA9IG51bGxcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbXVxuXG4gIGlmIChoZWFkaW5nKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUhlYWRpbmdDZWxsKVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlSGVhZGluZ0NlbGxfdGl0bGUpXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVDZWxsKVxuXG4gICAgaWYgKHRpdGxlKSB7XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlQ2VsbF90aXRsZSlcbiAgICB9XG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgdG89e3RvfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlQ2VsbFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGVDZWxsL1RhYmxlQ2VsbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUYWJsZUNlbGxcIjpcIlRhYmxlQ2VsbF9fVGFibGVDZWxsX19fM2pDeG9cIixcIlRhYmxlQ2VsbF90aXRsZVwiOlwiVGFibGVDZWxsX19UYWJsZUNlbGxfdGl0bGVfX19PVnlrdFwiLFwiVGFibGVIZWFkaW5nQ2VsbFwiOlwiVGFibGVDZWxsX19UYWJsZUhlYWRpbmdDZWxsX19fM0NTVERcIixcIlRhYmxlSGVhZGluZ0NlbGxfdGl0bGVcIjpcIlRhYmxlQ2VsbF9fVGFibGVIZWFkaW5nQ2VsbF90aXRsZV9fX3lPZFc2XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmFkZ2UuY3NzJ1xuXG5jb25zdCBCYWRnZSA9ICh7XG4gIGxhYmVsLFxuICBjb2xvciA9ICdibHVlJ1xufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuQmFkZ2VdXG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9yZWQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2dyZWVuJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfZ3JlZW4pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2JsdWUnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX2JsdWUpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+e2xhYmVsfTwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhZGdlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9CYWRnZS9CYWRnZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJCYWRnZVwiOlwiQmFkZ2VfX0JhZGdlX19fMzNlUVJcIixcIkJhZGdlX2JsdWVcIjpcIkJhZGdlX19CYWRnZV9ibHVlX19fejMzUmxcIixcIkJhZGdlX3JlZFwiOlwiQmFkZ2VfX0JhZGdlX3JlZF9fXzNaclNsXCIsXCJCYWRnZV9ncmVlblwiOlwiQmFkZ2VfX0JhZGdlX2dyZWVuX19fbzRIVjZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbi5jc3MnXG5cbmNvbnN0IEljb24gPSAoe1xuICB0eXBlXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5JY29uXVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2VudmVsb3BlJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9lbnZlbG9wZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZm9sZGVyJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9mb2xkZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtY29kZSc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZUNvZGUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtdGV4dCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZVRleHQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtdGV4dC1kcmFmdCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZVRleHREcmFmdClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS1ibG9ncG9zdCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZUJsb2dwb3N0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLWJsb2dwb3N0LWRyYWZ0JzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9maWxlQmxvZ3Bvc3REcmFmdClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXNlcic6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fdXNlcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXNlci1hZG1pbic6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fdXNlckFkbWluKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1c2VyLWRpc2FibGVkJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl91c2VyRGlzYWJsZWQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3BsdXMnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3BsdXMpXG4gICAgICBicmVha1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkljb25cIjpcIkljb25fX0ljb25fX18zOEVwdlwiLFwiSWNvbl9lbnZlbG9wZVwiOlwiSWNvbl9fSWNvbl9lbnZlbG9wZV9fXzJ0TlF4XCIsXCJJY29uX2ZvbGRlclwiOlwiSWNvbl9fSWNvbl9mb2xkZXJfX18xWTRuVFwiLFwiSWNvbl9maWxlQ29kZVwiOlwiSWNvbl9fSWNvbl9maWxlQ29kZV9fX0xkbU4tXCIsXCJJY29uX2ZpbGVUZXh0XCI6XCJJY29uX19JY29uX2ZpbGVUZXh0X19fM1NiVzBcIixcIkljb25fZmlsZVRleHREcmFmdFwiOlwiSWNvbl9fSWNvbl9maWxlVGV4dERyYWZ0X19fM05TblJcIixcIkljb25fZmlsZUJsb2dwb3N0XCI6XCJJY29uX19JY29uX2ZpbGVCbG9ncG9zdF9fX0FzTThnXCIsXCJJY29uX2ZpbGVCbG9ncG9zdERyYWZ0XCI6XCJJY29uX19JY29uX2ZpbGVCbG9ncG9zdERyYWZ0X19fMkhTSjBcIixcIkljb25fdXNlclwiOlwiSWNvbl9fSWNvbl91c2VyX19fMzYwZkpcIixcIkljb25fdXNlckFkbWluXCI6XCJJY29uX19JY29uX3VzZXJBZG1pbl9fXzJ3Z3FCXCIsXCJJY29uX3VzZXJEaXNhYmxlZFwiOlwiSWNvbl9fSWNvbl91c2VyRGlzYWJsZWRfX19EY0pwOVwiLFwiSWNvbl9wbHVzXCI6XCJJY29uX19JY29uX3BsdXNfX18xMHBUdlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUXVlc3Rpb25zTGlzdEl0ZW1cIjpcIlF1ZXN0aW9uc0xpc3RJdGVtX19RdWVzdGlvbnNMaXN0SXRlbV9fXzI5cnh5XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0SXRlbS9RdWVzdGlvbnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1dyYXBwZXIuY3NzJ1xuXG5jb25zdCBXcmFwcGVyID0gKHtcbiAgZGltbWVkLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuV3JhcHBlcn1cbiAgICAgICR7ZGltbWVkID8gc3R5bGVzLldyYXBwZXJfZGltbWVkIDogJyd9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIldyYXBwZXJcIjpcIldyYXBwZXJfX1dyYXBwZXJfX18xdF9HLVwiLFwiV3JhcHBlcl9kaW1tZWRcIjpcIldyYXBwZXJfX1dyYXBwZXJfZGltbWVkX19fMWlHdGNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlLmNzcydcblxuY29uc3QgVGFibGUgPSAoe1xuICBjaGlsZHJlbixcbiAgYnJlYWRjcnVtYnMgPSBmYWxzZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVGFibGV9ICR7YnJlYWRjcnVtYnMgPyBzdHlsZXMuVGFibGVfYnJlYWRjcnVtYnMgOiAnJ31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVcIjpcIlRhYmxlX19UYWJsZV9fXzN2S0lSXCIsXCJUYWJsZV9icmVhZGNydW1ic1wiOlwiVGFibGVfX1RhYmxlX2JyZWFkY3J1bWJzX19fM043M29cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7dXBkYXRlUXVlc3Rpb24sIGRlbGV0ZVF1ZXN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtGbGV4LCBCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbi5jc3MnXG5cbmNsYXNzIFF1ZXN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnRvZ2dsZUFuc3dlcmVkID0gdGhpcy50b2dnbGVBbnN3ZXJlZC5iaW5kKHRoaXMpXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkZWxldGVRdWVzdGlvbiwgcXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlUXVlc3Rpb24ocXVlc3Rpb24uZGF0YS5faWQpXG4gIH1cblxuICB0b2dnbGVBbnN3ZXJlZCAoKSB7XG4gICAgY29uc3Qge3VwZGF0ZVF1ZXN0aW9uLCBxdWVzdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICB1cGRhdGVRdWVzdGlvbihxdWVzdGlvbi5kYXRhLl9pZCwge1xuICAgICAgaXNTZWVuOiAhcXVlc3Rpb24uZGF0YS5pc1NlZW5cbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7cXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBocmVmPXtgbWFpbHRvOiR7cXVlc3Rpb24uZGF0YS5wb3N0ZXJFbWFpbH0/c3ViamVjdD1SZXBseSB0byB5b3VyIHF1ZXN0aW9ucyBvbiBWYWNjaW5lIEFuc3dlcnNgfT5SZXBseSB2aWEgZW1haWw8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQW5zd2VyZWR9Pk1hcmsgYXMgYW5zd2VyZWQ8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICB0bz1cIi9xdWVzdGlvbnNcIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHF1ZXN0aW9uLmRhdGEuaXNTZWVuKSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQW5zd2VyZWR9Pk1hcmsgYXMgbm90IGFuc3dlcmVkPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICB0bz1cIi9xdWVzdGlvbnNcIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbn0+XG4gICAgICAgIDxkaXYgcmVmPXtlbCA9PiB7IHRoaXMuX2JvZHkgPSBlbCB9fVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT57cXVlc3Rpb24uZGF0YS5wb3N0ZXJOYW1lfTwvZGl2PlxuXG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbi5kYXRhLmlzU2VlbiA/ICcnIDogPEJhZGdlIGxhYmVsPVwiTm90IEFuc3dlcmVkXCIgY29sb3I9XCJyZWRcIiAvPn1cbiAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lc3RhbXB9PlxuICAgICAgICAgICAgICAgICAgICA8VGltZSB2YWx1ZT17cXVlc3Rpb24uZGF0YS5jcmVhdGVkQXR9IGZvcm1hdD1cImg6bW0gQSBvbiBNTU0gRG9cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgICAgPC9GbGV4PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsfT57cXVlc3Rpb24uZGF0YS5wb3N0ZXJFbWFpbH08L2Rpdj5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcXVlc3Rpb24uZGF0YS5xdWVzdGlvbn19IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25fX2Zvb3Rlcn0+XG4gICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3F1ZXN0aW9uSWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgcXVlc3Rpb246IHN0YXRlLnF1ZXN0aW9uc1xuICAgICAgICA/IHN0YXRlLnF1ZXN0aW9ucy5pdGVtcy5maW5kKGkgPT4gaS5kYXRhLl9pZCA9PT0gcXVlc3Rpb25JZClcbiAgICAgICAgOiB7ZGF0YToge319XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZVF1ZXN0aW9uOiAoaWQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZGVsZXRlUXVlc3Rpb24oaWQpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVF1ZXN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlUXVlc3Rpb24oaWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShRdWVzdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uL1F1ZXN0aW9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlF1ZXN0aW9uXCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX18xaWJ1NlwiLFwiUXVlc3Rpb25fX2JvZHlcIjpcIlF1ZXN0aW9uX19RdWVzdGlvbl9fYm9keV9fXzJSNHBlXCIsXCJRdWVzdGlvbl9fZm9vdGVyXCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX2Zvb3Rlcl9fXzRWV1l5XCIsXCJOYW1lXCI6XCJRdWVzdGlvbl9fTmFtZV9fXzE0Yk9QXCIsXCJFbWFpbFwiOlwiUXVlc3Rpb25fX0VtYWlsX19fMUQzT3BcIixcIlRpbWVzdGFtcFwiOlwiUXVlc3Rpb25fX1RpbWVzdGFtcF9fXzJyc3doXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hVc2Vyc30gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBVc2Vyc0xpc3RJdGVtIGZyb20gJy4uL1VzZXJzTGlzdEl0ZW0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtmZXRjaFVzZXJzfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc05ld1VzZXJGb3JtID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdXNlcnMvbmV3J1xuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3VXNlckZvcm0gfHwgcGFyYW1zLnVzZXJJZFxuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciBkaW1tZWQ9e2Rpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlUm93IGhlYWRpbmc+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmcgdGl0bGU+VXNlcnM8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyNVwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZz5sYXN0IHNlZW48L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdCB3aWR0aD1cIjEwXCI+XG4gICAgICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz1cIi91c2Vycy9uZXdcIj5hZGQgbmV3IHVzZXI8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICB7aXNOZXdVc2VyRm9ybVxuICAgICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAge2l0ZW1zLm1hcCgodSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHUuZGF0YS5faWQgPT09IHBhcmFtcy51c2VySWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8VXNlcnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICB1c2VyPXt1fVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUudXNlcnMuaXRlbXMsXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS51c2Vycy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoVXNlcnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2Vyc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSUyA9ICdSRVFVRVNUX1VTRVJTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfVVNFUlMgPSAnUkVDRUlWRV9VU0VSUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1VTRVIgPSAnQ1JFQVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfVVNFUiA9ICdDT05GSVJNX0NSRUFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfVVNFUiA9ICdSRUpFQ1RfQ1JFQVRFX1VTRVInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9VU0VSID0gJ1JFUVVFU1RfREVMRVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfVVNFUiA9ICdDT05GSVJNX0RFTEVURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfVVNFUiA9ICdSRUpFQ1RfREVMRVRFX1VTRVInXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0RmV0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VU0VSU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVGZXRjaCA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfVVNFUlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmV0Y2goKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlRmV0Y2goanNvbi5kYXRhLnVzZXJzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy91c2Vycy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0VXBkYXRlKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX1VTRVJcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9VU0VSLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9VU0VSLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHVzZXIgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VzZXJzTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBVc2Vyc0xpc3RJdGVtID0gKHtcbiAgdXNlcixcbiAgZGlzYWJsZUludGVyYWN0aW9uXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBpZiAodXNlci5kYXRhLmlzRW5hYmxlZCkge1xuICAgIGlmICh1c2VyLmRhdGEuYWRtaW4pIHtcbiAgICAgIGljb24gPSAndXNlci1hZG1pbidcbiAgICB9IGVsc2Uge1xuICAgICAgaWNvbiA9ICd1c2VyJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpY29uID0gJ3VzZXItZGlzYWJsZWQnXG4gIH1cblxuICBsZXQgdGltZXN0YW1wID0gJydcbiAgaWYgKHVzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdCkge1xuICAgIHRpbWVzdGFtcCA9IDxUaW1lIHZhbHVlPXt1c2VyLmRhdGEubGFzdExvZ2dlZEluQXR9IGZvcm1hdD1cIk1NTSBEbyBoOm1tIEFcIiAvPlxuICB9IGVsc2Uge1xuICAgIHRpbWVzdGFtcCA9ICduZXZlciBsb2dnZWQgaW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuVXNlcnNMaXN0SXRlbX1cbiAgICAgICR7ZGlzYWJsZUludGVyYWN0aW9uID8gJycgOiBzdHlsZXMuVXNlcnNMaXN0SXRlbV9pbnRlcmFjdGl2ZX1gfT5cbiAgICAgIDxUYWJsZVJvdyBpbnRlcmFjdGl2ZT17IWRpc2FibGVJbnRlcmFjdGlvbn0+XG4gICAgICAgIDxUYWJsZUNvbHVtbj5cbiAgICAgICAgICA8SWNvbiB0eXBlPXtpY29ufSAvPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlPlxuICAgICAgICAgICAge3VzZXIuZGF0YS5uYW1lfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuXG4gICAgICAgICAgPFRhYmxlQ2VsbD5cbiAgICAgICAgICAgICh7dXNlci5kYXRhLmVtYWlsfSlcbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIxNVwiPlxuICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICB7dGltZXN0YW1wfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjE1XCI+XG4gICAgICAgICAgPEZsZXg+XG4gICAgICAgICAgICB7dXNlci5kYXRhLmFkbWluXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFkZ2V9PlxuICAgICAgICAgICAgICAgICAgPEJhZGdlIGxhYmVsPVwiQWRtaW5cIiBjb2xvcj1cImdyZWVuXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IXVzZXIuZGF0YS5pc0VuYWJsZWRcbiAgICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJEaXNhYmxlZFwiIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiBsYXN0XG4gICAgICAgICAgd2lkdGg9XCI1XCI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlcnNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC91c2Vycy8ke3VzZXIuZGF0YS5faWR9YH0+ZWRpdDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlcnNMaXN0SXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlVzZXJzTGlzdEl0ZW1cIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX18xam9BN1wiLFwiVXNlcnNMaXN0SXRlbV9fYWN0aW9uc1wiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fYWN0aW9uc19fX0dlTFMxXCIsXCJVc2Vyc0xpc3RJdGVtX2ludGVyYWN0aXZlXCI6XCJVc2Vyc0xpc3RJdGVtX19Vc2Vyc0xpc3RJdGVtX2ludGVyYWN0aXZlX19fM1VrRWZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlVXNlciwgZGVsZXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94fSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRVc2VyRm9ybS5jc3MnXG5cbmNsYXNzIEVkaXRVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmNhbmNlbCA9IHRoaXMuY2FuY2VsLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnVzZXIuZGF0YSwge1xuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0pLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ30gPSBuZXdQcm9wcy51c2VyXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge3VzZXI6IHtkYXRhOiB7X2lkOiBpZH19LCB1cGRhdGVVc2VyfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmRhdGEpXG5cbiAgICBpZiAoIXBheWxvYWQucGFzc3dvcmQpIHtcbiAgICAgIGRlbGV0ZSBwYXlsb2FkLnBhc3N3b3JkXG4gICAgfVxuXG4gICAgdXBkYXRlVXNlcihpZCwgcGF5bG9hZClcbiAgfVxuXG4gIGNhbmNlbCAoKSB7XG4gICAgY29uc3Qge3VzZXI6IHtkYXRhOiB1c2VyfX0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdXNlciwge1xuICAgICAgICBwYXNzd29yZDogJydcbiAgICAgIH0pLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlVXNlciwgdXNlcjoge2RhdGE6IHtfaWQ6IGlkfX19ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlVXNlcihpZClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzVXBkYXRpbmd9ID0gdGhpcy5wcm9wcy51c2VyXG5cbiAgICBsZXQgYWN0aW9ucyA9IChcbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD5BbGwgU2F2ZWQ8L0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICAgIGlmICh0aGlzLnN0YXRlLmlzRGlydHkpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIHRvPVwiL3VzZXJzL1wiPkRpc2NhcmQgQ2hhbmdlczwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdFVzZXJGb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm1fX2JvZHl9PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkZ1bGwgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEubmFtZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLm5hbWV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ25hbWUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5lbWFpbH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdlbWFpbCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3Bhc3N3b3JkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJFbmFibGVkXCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzRW5hYmxlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNFbmFibGVkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJBZG1pblwiXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuYWRtaW59XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnYWRtaW4nLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdFVzZXJGb3JtX19mb290ZXJ9PlxuICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7dXNlcklkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLnVzZXJzXG4gICAgICAgID8gc3RhdGUudXNlcnMuaXRlbXMuZmluZChpID0+IGkuZGF0YS5faWQgPT09IHVzZXJJZClcbiAgICAgICAgOiB7ZGF0YToge30sIGlzVXBkYXRpbmc6IHRydWV9XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZVVzZXI6IChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVVc2VyKGlkKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVVc2VyOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlVXNlcihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEVkaXRVc2VyRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0VkaXRVc2VyRm9ybS9FZGl0VXNlckZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdFVzZXJGb3JtXCI6XCJFZGl0VXNlckZvcm1fX0VkaXRVc2VyRm9ybV9fXzM0VXlQXCIsXCJFZGl0VXNlckZvcm1fX2JvZHlcIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19ib2R5X19fMVVqbDdcIixcIkVkaXRVc2VyRm9ybV9fZm9vdGVyXCI6XCJFZGl0VXNlckZvcm1fX0VkaXRVc2VyRm9ybV9fZm9vdGVyX19fM3RKU3dcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0VkaXRVc2VyRm9ybS9FZGl0VXNlckZvcm0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NyZWF0ZVVzZXJ9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJzQWN0aW9ucydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW0sIEJsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIExpbmtCdXR0b24sIElucHV0LCBDaGVja2JveH0gZnJvbSAnLi4vVUknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OZXdVc2VyRm9ybS5jc3MnXG5cbmNsYXNzIE5ld1VzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICBhZG1pbjogJycsXG4gICAgICAgIGlzRW5hYmxlZDogZmFsc2VcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVVc2VyfSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZVVzZXIodGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLml0ZW1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OZXdVc2VyRm9ybV9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnbmFtZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2VtYWlsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkVuYWJsZWRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNFbmFibGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0VuYWJsZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkFkbWluXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5hZG1pbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdhZG1pbicsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OZXdVc2VyRm9ybV9fZm9vdGVyfT5cbiAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHRvPVwiL3VzZXJzL1wiPkNhbmNlbDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLnVzZXJzXG4gICAgICAgID8gc3RhdGUudXNlcnMubmV3VXNlclxuICAgICAgICA6IHtkYXRhOiB7fSwgaXNVcGRhdGluZzogdHJ1ZSwgZXJyb3JzOiB7fX1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlVXNlcjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVVzZXIoaWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShOZXdVc2VyRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIk5ld1VzZXJGb3JtXCI6XCJOZXdVc2VyRm9ybV9fTmV3VXNlckZvcm1fX19IS0xRZ1wiLFwiTmV3VXNlckZvcm1fX2JvZHlcIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fYm9keV9fX2hZY01GXCIsXCJOZXdVc2VyRm9ybV9fZm9vdGVyXCI6XCJOZXdVc2VyRm9ybV9fTmV3VXNlckZvcm1fX2Zvb3Rlcl9fXzF2UzZmXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OZXdVc2VyRm9ybS9OZXdVc2VyRm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hTZWN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaEFydGljbGVzfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFNlY3Rpb25zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hTZWN0aW9ucywgZmV0Y2hBcnRpY2xlc30gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaFNlY3Rpb25zKClcbiAgICBmZXRjaEFydGljbGVzKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmcsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VjdGlvbnMuaXNGZXRjaGluZyB8fCBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoU2VjdGlvbnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWN0aW9ucygpKVxuICAgICAgfSxcbiAgICAgIGZldGNoQXJ0aWNsZXM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hBcnRpY2xlcygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWN0aW9ucylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zL1NlY3Rpb25zLmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TRUNUSU9OUyA9ICdSRVFVRVNUX1NFQ1RJT05TJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfU0VDVElPTlMgPSAnUkVDRUlWRV9TRUNUSU9OUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1NFQ1RJT04gPSAnUkVRVUVTVF9VUERBVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9TRUNUSU9OID0gJ0NPTkZJUk1fVVBEQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9TRUNUSU9OID0gJ1JFSkVDVF9VUERBVEVfU0VDVElPTidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT04gPSAnQ1JFQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfU0VDVElPTiA9ICdDT05GSVJNX0NSRUFURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfU0VDVElPTiA9ICdSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04nXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9TRUNUSU9OID0gJ1JFUVVFU1RfREVMRVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfU0VDVElPTiA9ICdDT05GSVJNX0RFTEVURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfU0VDVElPTiA9ICdSRUpFQ1RfREVMRVRFX1NFQ1RJT04nXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0U2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0VDVElPTlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VjdGlvbnMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlU2VjdGlvbnMoanNvbi5kYXRhLml0ZW1zKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlVXBkYXRlID0gKFxuICBpZCxcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfU0VDVElPTixcbiAgICBpZCxcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUVycm9ycyA9IChcbiAgaWQsXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1VQREFURV9TRUNUSU9OLFxuICAgIGlkLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZWN0aW9uID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWN0aW9ucy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VjdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5zZWN0aW9uKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlY3Rpb24gd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUVycm9ycyhpZCwgcGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgdXBkYXRlIHNlY3Rpb24gZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0NSRUFURV9TRUNUSU9OXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9DUkVBVEVfU0VDVElPTixcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9DUkVBVEVfU0VDVElPTixcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChcbiAgZGF0YSxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VjdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnNlY3Rpb24pKVxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoanNvbi5kYXRhLnBhcmVudC5faWQsIGpzb24uZGF0YS5wYXJlbnQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnU2VjdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIC8vIFRPRE86IHRlc3QgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHNlY3Rpb24gZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTZWN0aW9uID0gKFxuICBpZCxcbiAgY2hpbGRyZW4sXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoanNvbi5kYXRhLnBhcmVudC5faWQsIGpzb24uZGF0YS5wYXJlbnQpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybURlbGV0ZShpZCkpXG4gICAgICAgICAgY2hpbGRyZW4ubWFwKGMgPT4gY29uZmlybURlbGV0ZShjKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlY3Rpb24gd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7Q09ORklSTV9VUERBVEVfU0VDVElPTn0gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfQVJUSUNMRSA9ICdSRVFVRVNUX1VQREFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX0FSVElDTEUgPSAnQ09ORklSTV9VUERBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX0FSVElDTEUgPSAnUkVKRUNUX1VQREFURV9BUlRJQ0xFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRSA9ICdDUkVBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NSRUFURV9BUlRJQ0xFID0gJ0NPTkZJUk1fQ1JFQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0NSRUFURV9BUlRJQ0xFID0gJ1JFSkVDVF9DUkVBVEVfQVJUSUNMRSdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfREVMRVRFX0FSVElDTEUgPSAnUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9BUlRJQ0xFID0gJ0NPTkZJUk1fREVMRVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9BUlRJQ0xFID0gJ1JFSkVDVF9ERUxFVEVfQVJUSUNMRSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FSVElDTEVTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUFydGljbGVzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9BUlRJQ0xFUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBcnRpY2xlcygpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9BUlRJQ0xFLFxuICAgIGlkLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWNlaXZlRXJyb3JzID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX0FSVElDTEUsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFydGljbGUgPSAoXG4gIGlkLFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBkYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgY29tbWVudHM6IGRhdGEuY29tbWVudHNcbiAgICAgICAgLmZpbHRlcihjID0+ICFjLmlzRGVsZXRlZClcbiAgICAgICAgLm1hcChjID0+IHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYywge1xuICAgICAgICAgICAgcmVwbGllczogYy5yZXBsaWVzLmZpbHRlcihyID0+ICFyLmlzRGVsZXRlZClcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhcnRpY2xlOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLmFydGljbGUpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSBoYXMgYmVlbiBzYXZlZCcsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVFcnJvcnMoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DUkVBVEVfQVJUSUNMRVxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ1JFQVRFX0FSVElDTEUsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFydGljbGUgPSAoXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFydGljbGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5hcnRpY2xlKSlcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDT05GSVJNX1VQREFURV9TRUNUSU9OLFxuICAgICAgICAgICAgaWQ6IGpzb24uZGF0YS5wYXJlbnQuX2lkLFxuICAgICAgICAgICAgaXRlbToganNvbi5kYXRhLnBhcmVudFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBcnRpY2xlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJ0aWNsZSA9IChcbiAgaWQsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sXG4gICAgICAgICAgICBpZDoganNvbi5kYXRhLnBhcmVudC5faWQsXG4gICAgICAgICAgICBpdGVtOiBqc29uLmRhdGEucGFyZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSB3YXMgZGVsZXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3REZWxldGUoaWQpKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NvcnRhYmxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZSdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgU2VjdGlvbnNMaXN0SXRlbSBmcm9tICcuLi9TZWN0aW9uc0xpc3RJdGVtJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBTdWJTZWN0aW9uc0xpc3QgZnJvbSAnLi4vU3ViU2VjdGlvbnNMaXN0J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgU2VjdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLm1ldGFTZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogbmV3UHJvcHMubWV0YVNlY3Rpb24uZGF0YS5jaGlsZHJlblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTdGF0ZSAob2JqKSB7XG4gICAgaWYgKG9iai5kcmFnZ2luZ0luZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB7bWV0YVNlY3Rpb24sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgICB1cGRhdGVTZWN0aW9uKG1ldGFTZWN0aW9uLmRhdGEuX2lkLCB7XG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnN0YXRlLmRhdGEuaXRlbXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShvYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgbWV0YVNlY3Rpb24sIHNlY3Rpb25zLCBsb2NhdGlvbiwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IGlzTmV3U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9L25ld2BcbiAgICBjb25zdCBpc0VkaXRTZWN0aW9uUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3U2VjdGlvblJvdXRlIHx8IGlzRWRpdFNlY3Rpb25Sb3V0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGRpbW1lZD17ZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZVJvdyBoZWFkaW5nPlxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmcgdGl0bGU+e21ldGFTZWN0aW9uLmRhdGEudGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmc+dXJsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdFxuICAgICAgICAgICAgICB3aWR0aD1cIjE1XCIgLz5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAge2lzTmV3U2VjdGlvblJvdXRlICYmIGxvY2F0aW9uLnF1ZXJ5LnBhcmVudElkID09PSBtZXRhU2VjdGlvbi5kYXRhLl9pZFxuICAgICAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuaXRlbXMubWFwKChzZWN0aW9uSWQsIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChpc0VkaXRTZWN0aW9uUm91dGUgJiYgc2VjdGlvbklkID09PSBwYXJhbXMuc2VjdGlvbklkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uID0gc2VjdGlvbnMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb25JZClcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIocyA9PiBzZWN0aW9uLmRhdGEuY2hpbGRyZW4uaW5kZXhPZihzLmRhdGEuX2lkKSAhPT0gLTEpXG5cbiAgICAgICAgICAgICAgbGV0IHN1YnNlY3Rpb25zTGlzdCA9IChcbiAgICAgICAgICAgICAgICA8U3ViU2VjdGlvbnNMaXN0IHNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICBzdWJzZWN0aW9ucz17c3Vic2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgIGlmIChkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbnNMaXN0SXRlbVxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgcGFyZW50PXttZXRhU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAge3N1YnNlY3Rpb25zTGlzdH1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuZGF0YS5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdJbmRleD17dGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uc0xpc3RJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e21ldGFTZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7c3Vic2VjdGlvbnNMaXN0fVxuICAgICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuICAgIGNvbnN0IG1ldGFTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS51cmwgPT09IHBhcmFtcy5tZXRhU2VjdGlvblVybCAmJiBzLmRhdGEubWV0YSlcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uczogc3RhdGUuc2VjdGlvbnMuaXRlbXMsXG4gICAgICBtZXRhU2VjdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVTZWN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VjdGlvbihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlY3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdC9TZWN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQgSWNvbiBmcm9tICcuLi9JY29uJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VjdGlvbnNMaXN0SXRlbS5jc3MnXG5cbmNvbnN0IFNlY3Rpb25zTGlzdEl0ZW0gPSAoe1xuICBwYXJhbXMsXG4gIHNlY3Rpb24sXG4gIHBhcmVudCxcbiAgZGlzYWJsZUludGVyYWN0aW9uXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgIGljb24gPSAnZm9sZGVyJ1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2N1c3RvbScpIHtcbiAgICBpY29uID0gJ2ZpbGUtY29kZSdcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICBpY29uID0gJ2ZpbGUtdGV4dCdcbiAgfSBlbHNlIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdibG9ncG9zdHMnKSB7XG4gICAgaWNvbiA9ICdmaWxlLWJsb2dwb3N0J1xuICB9XG5cbiAgbGV0IHVybCA9ICcnXG4gIGlmIChwYXJlbnQuZGF0YS5tZXRhKSB7XG4gICAgdXJsID0gYC8ke3NlY3Rpb24uZGF0YS51cmx9YFxuICB9IGVsc2Uge1xuICAgIHVybCA9IGAvJHtwYXJlbnQuZGF0YS51cmx9LyR7c2VjdGlvbi5kYXRhLnVybH1gXG4gIH1cblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ3BhcmVudCcpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gdG89e2AvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9L25ldz9wYXJlbnRJZD0ke3NlY3Rpb24uZGF0YS5faWR9YH0+YWRkIG5ldyBzdWItc2VjdGlvbjwvTGlua0J1dHRvbj5cblxuICAgICAgICAgICAgPExpbmtCdXR0b24gdG89e2AvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9LyR7c2VjdGlvbi5kYXRhLl9pZH0vZWRpdGB9PmVkaXQ8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtzZWN0aW9uLmRhdGEuX2lkfS9lZGl0YH0+ZWRpdDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBzZWN0aW9uTGluayA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uICYmIHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSAhPT0gJ3BhcmVudCcgJiYgc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlICE9PSAnY3VzdG9tJykge1xuICAgIHNlY3Rpb25MaW5rID0gYC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtzZWN0aW9uLmRhdGEuX2lkfWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtfVxuICAgICAgJHtkaXNhYmxlSW50ZXJhY3Rpb24gPyAnJyA6IHN0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlfWB9PlxuICAgICAgPFRhYmxlUm93IGludGVyYWN0aXZlPXshZGlzYWJsZUludGVyYWN0aW9ufVxuICAgICAgICBpbmRlbnRlZD17IXBhcmVudC5kYXRhLm1ldGF9PlxuICAgICAgICA8VGFibGVDb2x1bW4+XG4gICAgICAgICAgPEljb24gdHlwZT17aWNvbn0gLz5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgPFRhYmxlQ2VsbCB0aXRsZVxuICAgICAgICAgICAgdG89e3NlY3Rpb25MaW5rfT5cbiAgICAgICAgICAgIHtzZWN0aW9uLmRhdGEudGl0bGV9XG4gICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMjBcIj5cbiAgICAgICAgICA8VGFibGVDZWxsPnt1cmx9PC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMTVcIlxuICAgICAgICAgIGxhc3Q+XG4gICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zTGlzdEl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWN0aW9uc0xpc3RJdGVtXCI6XCJTZWN0aW9uc0xpc3RJdGVtX19TZWN0aW9uc0xpc3RJdGVtX19fMUtaRVFcIixcIlNlY3Rpb25zTGlzdEl0ZW1fX2FjdGlvbnNcIjpcIlNlY3Rpb25zTGlzdEl0ZW1fX1NlY3Rpb25zTGlzdEl0ZW1fX2FjdGlvbnNfX194aUJJR1wiLFwiU2VjdGlvbnNMaXN0SXRlbV9pbnRlcmFjdGl2ZVwiOlwiU2VjdGlvbnNMaXN0SXRlbV9fU2VjdGlvbnNMaXN0SXRlbV9pbnRlcmFjdGl2ZV9fX2lFSkpfXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzb3J0YWJsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IFNlY3Rpb25zTGlzdEl0ZW0gZnJvbSAnLi4vU2VjdGlvbnNMaXN0SXRlbSdcblxuY29uc3QgU29ydGFibGVMaXN0SXRlbSA9IHNvcnRhYmxlKChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gIClcbn0pXG5cbmNsYXNzIFN1YlNlY3Rpb25zTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nSW5kZXg6IG51bGwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBwcm9wcy5zZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogbmV3UHJvcHMuc2VjdGlvbi5kYXRhLmNoaWxkcmVuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlIChvYmopIHtcbiAgICBpZiAob2JqLmRyYWdnaW5nSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHtzZWN0aW9uLCB1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgICAgdXBkYXRlU2VjdGlvbihzZWN0aW9uLmRhdGEuX2lkLCB7XG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnN0YXRlLmRhdGEuaXRlbXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShvYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtzZWN0aW9uLCBzdWJzZWN0aW9ucywgY2hpbGRyZW4sIGxvY2F0aW9uLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlzTmV3U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9L25ld2BcbiAgICBjb25zdCBpc0VkaXRTZWN0aW9uUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3U2VjdGlvblJvdXRlIHx8IGlzRWRpdFNlY3Rpb25Sb3V0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtpc05ld1NlY3Rpb25Sb3V0ZSAmJiBsb2NhdGlvbi5xdWVyeS5wYXJlbnRJZCA9PT0gc2VjdGlvbi5kYXRhLl9pZFxuICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB7c2VjdGlvbi5kYXRhLmNoaWxkcmVuLm1hcCgoc3Vic2VjdGlvbklkLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbiA9IHN1YnNlY3Rpb25zLmZpbmQoc3ViID0+IHN1Yi5kYXRhLl9pZCA9PT0gc3Vic2VjdGlvbklkKVxuXG4gICAgICAgICAgaWYgKGlzRWRpdFNlY3Rpb25Sb3V0ZSAmJiBzdWJzZWN0aW9uSWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c3Vic2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHBhcmVudD17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuaXRlbXN9XG4gICAgICAgICAgICAgICAgICBkcmFnZ2luZ0luZGV4PXt0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3N1YnNlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudD17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvU29ydGFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVTZWN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VjdGlvbihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFN1YlNlY3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1N1YlNlY3Rpb25zTGlzdC9TdWJTZWN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtjcmVhdGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge0Jsb2NrLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgU2VsZWN0fSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5cbmNsYXNzIE5ld1NlY3Rpb25Gb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBzZWN0aW9uVHlwZTogJ2FydGljbGVzJyxcbiAgICAgICAgcGFyZW50OiBwcm9wcy5wYXJlbnRTZWN0aW9uLmRhdGEuX2lkXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9yc30gPSBuZXdQcm9wcy5pdGVtXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlU2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVTZWN0aW9uKHRoaXMuc3RhdGUuZGF0YSlcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwgbmV3RGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCBuZXdFcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW06IHtpc1VwZGF0aW5nfSwgcGFyZW50U2VjdGlvbiwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzZWN0aW9uVHlwZXMgPSBbXVxuICAgIGlmIChwYXJlbnRTZWN0aW9uLmRhdGEubWV0YSkge1xuICAgICAgc2VjdGlvblR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdhcnRpY2xlcycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGFydGljbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdwYXJlbnQnLFxuICAgICAgICAgIGxhYmVsOiAnUGFyZW50J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdjdXN0b20nLFxuICAgICAgICAgIGxhYmVsOiAnQ3VzdG9tIHBhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2Jsb2dwb3N0cycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGJsb2cgcG9zdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvblR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdhcnRpY2xlcycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGFydGljbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdibG9ncG9zdHMnLFxuICAgICAgICAgIGxhYmVsOiAnbGlzdCBvZiBibG9nIHBvc3RzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybUhlYWRlcj5BZGQgbmV3IHNlY3Rpb248L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudXJsfVxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd1cmwnLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vYH0+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtsb2NhdGlvbjoge3F1ZXJ5OiB7cGFyZW50SWR9fX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gcGFyZW50SWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUuc2VjdGlvbnMubmV3U2VjdGlvbixcbiAgICAgIHBhcmVudFNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlU2VjdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlU2VjdGlvbihkYXRhLCBgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfWApKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShOZXdTZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05ld1NlY3Rpb25Gb3JtL05ld1NlY3Rpb25Gb3JtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm0uY3NzJ1xuXG5jb25zdCBGb3JtID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm1IZWFkZXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9ybV9faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtQm9keSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtX19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtRm9vdGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm1fX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtGb3JtLCBGb3JtSGVhZGVyLCBGb3JtQm9keSwgRm9ybUZvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJGb3JtXCI6XCJGb3JtX19Gb3JtX19fMnp3WmZcIixcIkZvcm1fX2hlYWRlclwiOlwiRm9ybV9fRm9ybV9faGVhZGVyX19fTGxrYWZcIixcIkZvcm1fX2JvZHlcIjpcIkZvcm1fX0Zvcm1fX2JvZHlfX192NllhMlwiLFwiRm9ybV9fZm9vdGVyXCI6XCJGb3JtX19Gb3JtX19mb290ZXJfX19VaVJOV1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9uLCBkZWxldGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dH0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuXG5jbGFzcyBFZGl0U2VjdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuZGVsZXRlID0gdGhpcy5kZWxldGUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zZWN0aW9uLmRhdGEpLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3NlY3Rpb246IHtlcnJvcnMsIGRhdGEsIGlzVXBkYXRpbmd9fSA9IG5ld1Byb3BzXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb246IHtkYXRhOiB7X2lkOiBpZH19LCB1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmRhdGEpXG5cbiAgICB1cGRhdGVTZWN0aW9uKGlkLCBwYXlsb2FkKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwgbmV3RGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCBuZXdFcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSAoKSB7XG4gICAgY29uc3Qge2RlbGV0ZVNlY3Rpb24sIHNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlU2VjdGlvbihzZWN0aW9uLmRhdGEuX2lkLCBzZWN0aW9uLmRhdGEuY2hpbGRyZW4pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtzZWN0aW9uLCBwYXJlbnRTZWN0aW9uLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+QWxsIFNhdmVkPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH1gfT5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIHRvPXtgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfWB9PkRpc2NhcmQgQ2hhbmdlczwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybUhlYWRlcj5FZGl0IHNlY3Rpb248L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3RpdGxlJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudXJsfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3NlY3Rpb24uaXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtwYXJlbnRTZWN0aW9uLmRhdGEubWV0YVxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6ICggICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Gb3JtRm9vdGVyPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZH19ID0gb3duUHJvcHNcbiAgICBjb25zdCBzZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb25JZClcbiAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb24uZGF0YS5wYXJlbnQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbixcbiAgICAgIHBhcmVudFNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgYmFja2xpbmsgPSBgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfWBcblxuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVTZWN0aW9uOiAoaWQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNlY3Rpb24oaWQsIGNoaWxkcmVuLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlU2VjdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlY3Rpb24oaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdFNlY3Rpb25Gb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdFNlY3Rpb25Gb3JtL0VkaXRTZWN0aW9uRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgQXJ0aWNsZXNMaXN0IGZyb20gJy4uL0FydGljbGVzTGlzdCdcbmltcG9ydCBDdXN0b21QYWdlSG9tZSBmcm9tICcuLi9DdXN0b21QYWdlSG9tZSdcbmltcG9ydCBDdXN0b21QYWdlQWJvdXQgZnJvbSAnLi4vQ3VzdG9tUGFnZUFib3V0J1xuXG5jb25zdCBTZWN0aW9uID0gKHtcbiAgc2VjdGlvbixcbiAgcGFyZW50LFxuICBsb2NhdGlvbixcbiAgcGFyYW1zLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBzd2l0Y2ggKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSkge1xuICAgIGNhc2UgJ2FydGljbGVzJzpcbiAgICBjYXNlICdibG9ncG9zdHMnOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFydGljbGVzTGlzdCBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgIHBhcmVudD17cGFyZW50fVxuICAgICAgICAgIHBhcmFtcz17cGFyYW1zfVxuICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cbiAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICApXG4gICAgY2FzZSAnY3VzdG9tJzpcbiAgICAgIHN3aXRjaCAoc2VjdGlvbi5kYXRhLmN1c3RvbUlkKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q3VzdG9tUGFnZUhvbWUgLz5cbiAgICAgICAgICApXG4gICAgICAgIGNhc2UgJ2Fib3V0JzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEN1c3RvbVBhZ2VBYm91dCAvPlxuICAgICAgICAgIClcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGN1c3RvbSBwYWdlICR7c2VjdGlvbi5kYXRhLmN1c3RvbUlkfWApXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIGRlZmF1bHQ6XG4gICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIHNlY3Rpb24gdHlwZSAke3NlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZX1gKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBwYXJhbXMuc2VjdGlvbklkKVxuICAgIGNvbnN0IHBhcmVudCA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBzZWN0aW9uLmRhdGEucGFyZW50KVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlY3Rpb24sXG4gICAgICBwYXJlbnRcbiAgICB9XG4gIH1cbikoU2VjdGlvbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzb3J0YWJsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IEFydGljbGVzTGlzdEl0ZW0gZnJvbSAnLi4vQXJ0aWNsZXNMaXN0SXRlbSdcbmltcG9ydCB7TGlua0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9XcmFwcGVyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL1RhYmxlJ1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5cbmNvbnN0IFNvcnRhYmxlTGlzdEl0ZW0gPSBzb3J0YWJsZSgocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICApXG59KVxuXG5jbGFzcyBBcnRpY2xlc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcmFnZ2luZ0luZGV4OiBudWxsLFxuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogcHJvcHMuc2VjdGlvbi5kYXRhLmFydGljbGVzXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IG5ld1Byb3BzLnNlY3Rpb24uZGF0YS5hcnRpY2xlc1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1cGRhdGVTdGF0ZSAob2JqKSB7XG4gICAgaWYgKG9iai5kcmFnZ2luZ0luZGV4ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB7dXBkYXRlU2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICAgIHVwZGF0ZVNlY3Rpb24oe1xuICAgICAgICBhcnRpY2xlczogdGhpcy5zdGF0ZS5kYXRhLml0ZW1zXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUob2JqKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7YXJ0aWNsZXMsIHNlY3Rpb24sIGNoaWxkcmVuLCBwYXJhbXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc05ld0FydGljbGVSb3V0ZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfS8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ld2BcbiAgICBjb25zdCBpc0VkaXRBcnRpY2xlUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gYC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy8ke3BhcmFtcy5hcnRpY2xlSWR9YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3QXJ0aWNsZVJvdXRlIHx8IGlzRWRpdEFydGljbGVSb3V0ZVxuXG4gICAgbGV0IGFjdGlvbnMgPSAnJ1xuICAgIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy9uZXdgfT5hZGQgbmV3IGFydGljbGU8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPExpbmtCdXR0b24gdG89e2AvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9LyR7cGFyYW1zLnNlY3Rpb25JZH0vYXJ0aWNsZXMvbmV3P3R5cGU9aGVhZGluZ2B9PmFkZCBuZXcgaGVhZGluZzwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfS8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ld2B9PmFkZCBuZXcgYmxvZyBwb3N0PC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGRpbW1lZD17ZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZVJvdyBoZWFkaW5nPlxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlIGhlYWRpbmc+e3NlY3Rpb24uZGF0YS50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjIwXCI+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZz51cmw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBsYXN0XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVcIj5cbiAgICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGFjdGlvbnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAge2lzTmV3QXJ0aWNsZVJvdXRlXG4gICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5pdGVtcy5tYXAoKGFydGljbGVJZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRWRpdEFydGljbGVSb3V0ZSAmJiBwYXJhbXMuYXJ0aWNsZUlkID09PSBhcnRpY2xlSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlcy5maW5kKGEgPT4gYS5kYXRhLl9pZCA9PT0gYXJ0aWNsZUlkKVxuXG4gICAgICAgICAgICAgIGlmIChkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEFydGljbGVzTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZT17YXJ0aWNsZX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoaXMuc3RhdGUuZGF0YS5pdGVtc31cbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdJbmRleD17dGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxBcnRpY2xlc0xpc3RJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuICAgICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9XcmFwcGVyPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gcGFyYW1zLnNlY3Rpb25JZClcbiAgICBjb25zdCBhcnRpY2xlcyA9IHN0YXRlLmFydGljbGVzLml0ZW1zLmZpbHRlcihhID0+IHNlY3Rpb24uZGF0YS5hcnRpY2xlcy5pbmRleE9mKGEuZGF0YS5faWQpICE9PSAtMSlcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uLFxuICAgICAgYXJ0aWNsZXNcbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlU2VjdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VjdGlvbihwYXJhbXMuc2VjdGlvbklkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoQXJ0aWNsZXNMaXN0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0L0FydGljbGVzTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBCYWRnZSBmcm9tICcuLi9CYWRnZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBJY29uIGZyb20gJy4uL0ljb24nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcnRpY2xlc0xpc3RJdGVtLmNzcydcblxuY29uc3QgQXJ0aWNsZXNMaXN0SXRlbSA9ICh7XG4gIGFydGljbGUsXG4gIHNlY3Rpb24sXG4gIGRpc2FibGVJbnRlcmFjdGlvbixcbiAgcGFyYW1zXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBzd2l0Y2ggKGFydGljbGUuZGF0YS5hcnRpY2xlVHlwZSkge1xuICAgIGNhc2UgJ2FydGljbGUnOlxuICAgICAgaWNvbiA9IGFydGljbGUuZGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgICA/ICdmaWxlLXRleHQnXG4gICAgICAgIDogJ2ZpbGUtdGV4dC1kcmFmdCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmxvZ3Bvc3QnOlxuICAgICAgaWNvbiA9IGFydGljbGUuZGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgICA/ICdmaWxlLWJsb2dwb3N0J1xuICAgICAgICA6ICdmaWxlLWJsb2dwb3N0LWRyYWZ0J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZWFkaW5nJzpcbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbiA9IG51bGxcbiAgfVxuXG4gIGxldCB1cmwgPSBgLyR7YXJ0aWNsZS5kYXRhLnVybH1gXG4gIGlmIChhcnRpY2xlLmRhdGEuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgIHVybCA9ICcnXG4gIH1cblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgYWN0aW9ucyA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXJ0aWNsZXNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfS8ke3NlY3Rpb24uZGF0YS5faWR9L2FydGljbGVzLyR7YXJ0aWNsZS5kYXRhLl9pZH1gfT5lZGl0PC9MaW5rQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkFydGljbGVzTGlzdEl0ZW19XG4gICAgICAke2Rpc2FibGVJbnRlcmFjdGlvbiA/ICcnIDogc3R5bGVzLkFydGljbGVzTGlzdEl0ZW1faW50ZXJhY3RpdmV9XG4gICAgICAke2FydGljbGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2hlYWRpbmcnID8gc3R5bGVzLkFydGljbGVzTGlzdEl0ZW1faGVhZGluZyA6ICcnfWB9PlxuICAgICAgPFRhYmxlUm93IGludGVyYWN0aXZlPXshZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAge2ljb25cbiAgICAgICAgICA/IChcbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbj5cbiAgICAgICAgICAgICAgPEljb24gdHlwZT17aWNvbn0gLz5cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgKVxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlPlxuICAgICAgICAgICAge2FydGljbGUuZGF0YS50aXRsZX1cbiAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyNVwiPlxuICAgICAgICAgIDxUYWJsZUNlbGw+e3VybH08L1RhYmxlQ2VsbD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIzXCI+XG4gICAgICAgICAge2FydGljbGUuZGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgOiA8QmFkZ2UgbGFiZWw9XCJEcmFmdFwiIGNvbG9yPVwicmVkXCIgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiN1wiXG4gICAgICAgICAgbGFzdD5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFydGljbGVzTGlzdEl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdEl0ZW0vQXJ0aWNsZXNMaXN0SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBcnRpY2xlc0xpc3RJdGVtXCI6XCJBcnRpY2xlc0xpc3RJdGVtX19BcnRpY2xlc0xpc3RJdGVtX19fM3FRekJcIixcIkFydGljbGVzTGlzdEl0ZW1fX2FjdGlvbnNcIjpcIkFydGljbGVzTGlzdEl0ZW1fX0FydGljbGVzTGlzdEl0ZW1fX2FjdGlvbnNfX19yc2h1YVwiLFwiQXJ0aWNsZXNMaXN0SXRlbV9pbnRlcmFjdGl2ZVwiOlwiQXJ0aWNsZXNMaXN0SXRlbV9fQXJ0aWNsZXNMaXN0SXRlbV9pbnRlcmFjdGl2ZV9fXzJFbmlFXCIsXCJBcnRpY2xlc0xpc3RJdGVtX2hlYWRpbmdcIjpcIkFydGljbGVzTGlzdEl0ZW1fX0FydGljbGVzTGlzdEl0ZW1faGVhZGluZ19fXzFKTktiXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3RJdGVtL0FydGljbGVzTGlzdEl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DdXN0b21QYWdlSG9tZS5jc3MnXG5cbmNvbnN0IEN1c3RvbVBhZ2VIb21lID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VzdG9tUGFnZUhvbWV9PlxuICAgICAgSSBhbSBDdXN0b21QYWdlSG9tZSBjb21wb25lbnQhXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFnZUhvbWVcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ3VzdG9tUGFnZUhvbWVcIjpcIkN1c3RvbVBhZ2VIb21lX19DdXN0b21QYWdlSG9tZV9fXzJ0dlJzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1c3RvbVBhZ2VBYm91dC5jc3MnXG5cbmNvbnN0IEN1c3RvbVBhZ2VBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkN1c3RvbVBhZ2VBYm91dH0+XG4gICAgICBJIGFtIEN1c3RvbVBhZ2VBYm91dCBjb21wb25lbnQhXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tUGFnZUFib3V0XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ3VzdG9tUGFnZUFib3V0XCI6XCJDdXN0b21QYWdlQWJvdXRfX0N1c3RvbVBhZ2VBYm91dF9fXzI5TW9yXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtjcmVhdGVBcnRpY2xlfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIExpbmtCdXR0b24sIElucHV0LCBDaGVja2JveCwgRWRpdG9yfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5cbmNsYXNzIE5ld0FydGljbGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICB1cmw6ICcnLFxuICAgICAgICBzbmlwcGV0OiAnJyxcbiAgICAgICAgY29udGVudDogJycsXG4gICAgICAgIGFydGljbGVUeXBlOiAnJyxcbiAgICAgICAgaXNQdWJsaXNoZWQ6IGZhbHNlLFxuICAgICAgICBpc0ZyZXF1ZW50OiBmYWxzZSxcbiAgICAgICAgcGFyZW50OiBwcm9wcy5wYXJhbXMuc2VjdGlvbklkXG4gICAgICB9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cblxuICAgIGlmIChwcm9wcy5zZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdibG9ncG9zdHMnKSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgPSAnYmxvZ3Bvc3QnXG4gICAgfSBlbHNlIGlmIChwcm9wcy5sb2NhdGlvbi5xdWVyeS50eXBlID09PSAnaGVhZGluZycpIHtcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9ICdoZWFkaW5nJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgPSAnYXJ0aWNsZSdcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZUFydGljbGV9ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlQXJ0aWNsZSh0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtOiB7aXNVcGRhdGluZ30sIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdGl0bGUgPSAnJ1xuICAgIHN3aXRjaCAodGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlKSB7XG4gICAgICBjYXNlICdhcnRpY2xlJzpcbiAgICAgICAgdGl0bGUgPSAnYXJ0aWNsZSdcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ2Jsb2dwb3N0JzpcbiAgICAgICAgdGl0bGUgPSAnYmxvZyBwb3N0J1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGVhZGluZyc6XG4gICAgICAgIHRpdGxlID0gJ2hlYWRpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZX1gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+QWRkIG5ldyB7dGl0bGV9PC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgIT09ICdoZWFkaW5nJ1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudXJsfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJQdWJsaXNoZWQ6XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzUHVibGlzaGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc1B1Ymxpc2hlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpZXc6XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NuaXBwZXQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGVudDpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89e2AvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9LyR7cGFyYW1zLnNlY3Rpb25JZH1gfT5DYW5jZWw8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgPC9Gb3JtRm9vdGVyPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZH19ID0gb3duUHJvcHNcbiAgICBjb25zdCBzZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb25JZClcblxuICAgIHJldHVybiB7XG4gICAgICBpdGVtOiBzdGF0ZS5hcnRpY2xlcy5uZXdBcnRpY2xlLFxuICAgICAgc2VjdGlvblxuICAgIH1cbiAgfSxcbiAgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVBcnRpY2xlOiAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChjcmVhdGVBcnRpY2xlKGRhdGEsIGAvJHtwYXJhbXMubWV0YVNlY3Rpb25Vcmx9LyR7cGFyYW1zLnNlY3Rpb25JZH1gKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoTmV3QXJ0aWNsZUZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybS9OZXdBcnRpY2xlRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge3VwZGF0ZUFydGljbGUsIGRlbGV0ZUFydGljbGV9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94LCBFZGl0b3J9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGb3JtLCBGb3JtQm9keSwgRm9ybUhlYWRlciwgRm9ybUZvb3Rlcn0gZnJvbSAnLi4vRm9ybSdcbmltcG9ydCBDb21tZW50cyBmcm9tICcuLi9Db21tZW50cydcblxuY2xhc3MgRWRpdEFydGljbGVGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuZGVsZXRlQ29tbWVudCA9IHRoaXMuZGVsZXRlQ29tbWVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGVSZXBseSA9IHRoaXMuZGVsZXRlUmVwbHkuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMuYXJ0aWNsZS5kYXRhKSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHthcnRpY2xlOiB7ZXJyb3JzLCBkYXRhLCBpc1VwZGF0aW5nfX0gPSBuZXdQcm9wc1xuXG4gICAgaWYgKCFpc1VwZGF0aW5nKSB7XG4gICAgICBsZXQgbmV3U3RhdGUgPSB7fVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPT09IDAgJiYgZXJyb3JzLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgZGF0YSksXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFN0YXRlKG5ld1N0YXRlKVxuICAgIH1cbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHthcnRpY2xlOiB7ZGF0YToge19pZDogaWR9fSwgdXBkYXRlQXJ0aWNsZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGF5bG9hZCA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZS5kYXRhKVxuXG4gICAgdXBkYXRlQXJ0aWNsZShpZCwgcGF5bG9hZClcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkZWxldGVBcnRpY2xlLCBhcnRpY2xlfSA9IHRoaXMucHJvcHNcblxuICAgIGRlbGV0ZUFydGljbGUoYXJ0aWNsZS5kYXRhLl9pZClcbiAgfVxuXG4gIGRlbGV0ZUNvbW1lbnQgKGlkKSB7XG4gICAgY29uc3QgbmV3Q29tbWVudHMgPSB0aGlzLnN0YXRlLmRhdGEuY29tbWVudHMubWFwKGMgPT4ge1xuICAgICAgaWYgKGMuX2lkID09PSBpZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYywge1xuICAgICAgICAgIGlzRGVsZXRlZDogIWMuaXNEZWxldGVkXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY1xuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIHtcbiAgICAgICAgY29tbWVudHM6IG5ld0NvbW1lbnRzXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICBkZWxldGVSZXBseSAoaWQsIGNvbW1lbnRJZCkge1xuICAgIGNvbnN0IGNvbW1lbnQgPSB0aGlzLnN0YXRlLmRhdGEuY29tbWVudHMuZmluZChjID0+IGMuX2lkID09PSBjb21tZW50SWQpXG4gICAgY29uc3QgbmV3UmVwbGllcyA9IGNvbW1lbnQucmVwbGllcy5tYXAociA9PiB7XG4gICAgICBpZiAoci5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCByLCB7XG4gICAgICAgICAgaXNEZWxldGVkOiAhci5pc0RlbGV0ZWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgICBjb21tZW50czogdGhpcy5zdGF0ZS5kYXRhLmNvbW1lbnRzLm1hcChjID0+IHtcbiAgICAgICAgICBpZiAoYy5faWQgPT09IGNvbW1lbnRJZCkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGMsIHtcbiAgICAgICAgICAgICAgcmVwbGllczogbmV3UmVwbGllc1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtpc1VwZGF0aW5nfSwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBhY3Rpb25zID0gJydcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfWB9PkRpc2NhcmQgQ2hhbmdlczwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+QWxsIFNhdmVkPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICB0bz17YC8ke3BhcmFtcy5tZXRhU2VjdGlvblVybH0vJHtwYXJhbXMuc2VjdGlvbklkfWB9PkNsb3NlPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gJydcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSkge1xuICAgICAgY2FzZSAnYXJ0aWNsZSc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEFydGljbGUnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdibG9ncG9zdCc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEJsb2dwb3N0J1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGVhZGluZyc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEhlYWRpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZX1gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+XG4gICAgICAgICAge2Zvcm1UaXRsZX1cbiAgICAgICAgPC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgIT09ICdoZWFkaW5nJ1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudXJsfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJQdWJsaXNoZWQ6XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzUHVibGlzaGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc1B1Ymxpc2hlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpZXc6XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NuaXBwZXQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxFZGl0b3JcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGVudDpcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8Q29tbWVudHMgaXRlbXM9e3RoaXMuc3RhdGUuZGF0YS5jb21tZW50c30gb25EZWxldGVDb21tZW50PXt0aGlzLmRlbGV0ZUNvbW1lbnR9IG9uRGVsZXRlUmVwbHk9e3RoaXMuZGVsZXRlUmVwbHl9IC8+XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7YWN0aW9uc31cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maW5kKGEgPT4gYS5kYXRhLl9pZCA9PT0gcGFyYW1zLmFydGljbGVJZClcbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgYmFja2xpbmsgPSBgLyR7cGFyYW1zLm1ldGFTZWN0aW9uVXJsfS8ke3BhcmFtcy5zZWN0aW9uSWR9YFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZUFydGljbGU6IChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVBcnRpY2xlKGlkLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlQXJ0aWNsZTogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUFydGljbGUoaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdEFydGljbGVGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdEFydGljbGVGb3JtL0VkaXRBcnRpY2xlRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL0NvbW1lbnQnXG5cbmNvbnN0IENvbW1lbnRzID0gKHtcbiAgaXRlbXMsXG4gIG9uRGVsZXRlQ29tbWVudCxcbiAgb25EZWxldGVSZXBseVxufSkgPT4ge1xuICBjb25zdCBzb3J0ZWRDb21tZW50cyA9IGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0KSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBjb21tZW50cyA9IHNvcnRlZENvbW1lbnRzLm1hcChpID0+XG4gICAgPENvbW1lbnQga2V5PXtpLl9pZH0gaXRlbT17aX0gb25EZWxldGVDb21tZW50PXtvbkRlbGV0ZUNvbW1lbnR9IG9uRGVsZXRlUmVwbHk9e29uRGVsZXRlUmVwbHl9IC8+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7Y29tbWVudHN9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0NvbW1lbnRzL0NvbW1lbnRzLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50LmNzcydcbmltcG9ydCB7QmxvY2ssIEZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IExpbmtCdXR0b24gZnJvbSAnLi4vVUkvTGlua0J1dHRvbidcblxuY29uc3QgUmVwbHkgPSAoe1xuICBpdGVtLFxuICBvbkRlbGV0ZVJlcGx5LFxuICBjb21tZW50SWQsXG4gIGNvbW1lbnRJc0RlbGV0ZWRcbn0pID0+IHtcbiAgbGV0IGFjdGlvbnMgPSAnJ1xuICBpZiAoaXRlbS5pc0RlbGV0ZWQpIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJlcGx5X19kZWxldGVJbmZvfT5cbiAgICAgICAgICAgIHJlcGx5IHdpbGwgYmUgZGVsZXRlZCBvbiBzYXZlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIHNtYWxsXG4gICAgICAgICAgICBkaXNhYmxlZD17Y29tbWVudElzRGVsZXRlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUmVwbHkoaXRlbS5faWQsIGNvbW1lbnRJZCl9PlB1dCBiYWNrPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPExpbmtCdXR0b24gc21hbGxcbiAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICBkaXNhYmxlZD17Y29tbWVudElzRGVsZXRlZH1cbiAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVSZXBseShpdGVtLl9pZCwgY29tbWVudElkKX0+RGVsZXRlPC9MaW5rQnV0dG9uPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5SZXBseX0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5SZXBseV9kZWxldGVkIDogJyd9YH0+XG4gICAgICA8QmxvY2sgbj17MC41fT5cbiAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5SZXBseV9faW5mb30+UG9zdGVkIGJ5IHtpdGVtLmxhc3RNb2RpZmllZEJ5fSBvbiA8VGltZSB2YWx1ZT17aXRlbS5jcmVhdGVkQXR9IGZvcm1hdD1cIk1NTU0gRG8gWVlZWSAoaDptbSBhKVwiIC8+PC9kaXY+XG5cbiAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgPC9GbGV4PlxuICAgICAgPC9CbG9jaz5cblxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5SZXBseV9fYm9keX1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgQ29tbWVudCA9ICh7XG4gIGl0ZW0sXG4gIG9uRGVsZXRlQ29tbWVudCxcbiAgb25EZWxldGVSZXBseVxufSkgPT4ge1xuICBjb25zdCBzb3J0ZWRSZXBsaWVzID0gaXRlbS5yZXBsaWVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICBpZiAoYS5jcmVhdGVkQXQgPiBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfSBlbHNlIGlmIChhLmNyZWF0ZWRBdCA8IGIuY3JlYXRlZEF0KSB7XG4gICAgICByZXR1cm4gMVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMFxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXBsaWVzID0gc29ydGVkUmVwbGllcy5tYXAociA9PlxuICAgIDxSZXBseSBrZXk9e3IuX2lkfSBjb21tZW50SWQ9e2l0ZW0uX2lkfSBpdGVtPXtyfSBvbkRlbGV0ZVJlcGx5PXtvbkRlbGV0ZVJlcGx5fSBjb21tZW50SXNEZWxldGVkPXtpdGVtLmlzRGVsZXRlZH0gLz5cbiAgKVxuXG4gIGxldCBhY3Rpb25zID0gJydcbiAgaWYgKGl0ZW0uaXNEZWxldGVkKSB7XG4gICAgYWN0aW9ucyA9IChcbiAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19kZWxldGVJbmZvfT5cbiAgICAgICAgICAgIGNvbW1lbnQgd2lsbCBiZSBkZWxldGVkIG9uIHNhdmVcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPExpbmtCdXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGVDb21tZW50KGl0ZW0uX2lkKX0+UHV0IGJhY2s8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8TGlua0J1dHRvblxuICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlQ29tbWVudChpdGVtLl9pZCl9PkRlbGV0ZTwvTGlua0J1dHRvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQ29tbWVudH0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5Db21tZW50X2RlbGV0ZWQgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fY29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19pbmZvfT5Qb3N0ZWQgYnkge2l0ZW0ubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtpdGVtLmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz48L2Rpdj5cblxuICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19ib2R5fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19yZXBsaWVzfT5cbiAgICAgICAgICB7cmVwbGllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fX0NMUzJ3XCIsXCJDb21tZW50X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19Db21tZW50X19kZWxldGVJbmZvX19fMXhRV0VcIixcIkNvbW1lbnRfX2luZm9cIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2luZm9fX18xcm9vbFwiLFwiQ29tbWVudF9fY29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fY29tbWVudF9fX1BRVDY3XCIsXCJDb21tZW50X19ib2R5XCI6XCJDb21tZW50X19Db21tZW50X19ib2R5X19fMVM1RjZcIixcIkNvbW1lbnRfX3JlcGxpZXNcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX3JlcGxpZXNfX19QWExYUlwiLFwiQ29tbWVudF9kZWxldGVkXCI6XCJDb21tZW50X19Db21tZW50X2RlbGV0ZWRfX18ybmtZWFwiLFwiUmVwbHlcIjpcIkNvbW1lbnRfX1JlcGx5X19fMUo1Sk9cIixcIlJlcGx5X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19SZXBseV9fZGVsZXRlSW5mb19fXzJPQWJYXCIsXCJSZXBseV9faW5mb1wiOlwiQ29tbWVudF9fUmVwbHlfX2luZm9fX18zMGpJMlwiLFwiUmVwbHlfX2JvZHlcIjpcIkNvbW1lbnRfX1JlcGx5X19ib2R5X19fMXFocG5cIixcIlJlcGx5X2RlbGV0ZWRcIjpcIkNvbW1lbnRfX1JlcGx5X2RlbGV0ZWRfX18xa09WUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCB7ZmV0Y2hTZWFyY2hJbmRleCwgdXBkYXRlU2VhcmNoSW5kZXh9IGZyb20gJy4uLy4uL3N0b3JlL3NlYXJjaEluZGV4QWN0aW9ucy5qcydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuXG5jbGFzcyBTZWFyY2hJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICB1cGRhdGUgKCkge1xuICAgIGNvbnN0IHt1cGRhdGVJbmRleH0gPSB0aGlzLnByb3BzXG5cbiAgICB1cGRhdGVJbmRleCgpXG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtmZXRjaEluZGV4fSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoSW5kZXgoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNGZXRjaGluZywgaXNVcGRhdGluZywgbGFzdFVwZGF0ZWRPbiwgbGFzdFVwZGF0ZWRCeX0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyPlxuICAgICAgICAgIDxUYWJsZT5cbiAgICAgICAgICAgIDxUYWJsZVJvdyBoZWFkaW5nPlxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBoZWFkaW5nIHRpdGxlPlNlYXJjaCBJbmRleDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBoZWFkaW5nXG4gICAgICAgICAgICAgICAgbGFzdFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIj5cbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGV9PlVwZGF0ZSBpbmRleDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAgICA8VGFibGVSb3c+XG4gICAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlPkxhc3QgdXBkYXRlZCBvbiA8VGltZSB2YWx1ZT17bGFzdFVwZGF0ZWRPbn0gZm9ybWF0PVwiaDptbSBBIG9uIE1NTSBEb1wiIC8+IGJ5IHtsYXN0VXBkYXRlZEJ5fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNGZXRjaGluZyxcbiAgICAgIGlzVXBkYXRpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzVXBkYXRpbmcsXG4gICAgICBsYXN0VXBkYXRlZE9uOiBzdGF0ZS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLFxuICAgICAgbGFzdFVwZGF0ZWRCeTogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmZXRjaEluZGV4OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VhcmNoSW5kZXgoKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVJbmRleDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWFyY2hJbmRleCgpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWFyY2hJbmRleClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlYXJjaEluZGV4L1NlYXJjaEluZGV4LmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfSU5ERVggPSAnUkVRVUVTVF9JTkRFWCdcbmV4cG9ydCBjb25zdCBSRUNFSVZFX0lOREVYID0gJ1JFQ0VJVkVfSU5ERVgnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VQREFURV9JTkRFWCA9ICdSRVFVRVNUX1VQREFURV9JTkRFWCdcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9JTkRFWCA9ICdDT05GSVJNX1VQREFURV9JTkRFWCdcblxuY29uc3QgcmVxdWVzdFNlYXJjaEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfSU5ERVhcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VhcmNoSW5kZXggPSAoXG4gIGxhc3RVcGRhdGVkT24sXG4gIGxhc3RVcGRhdGVkQnlcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfSU5ERVgsXG4gICAgbGFzdFVwZGF0ZWRPbixcbiAgICBsYXN0VXBkYXRlZEJ5XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VhcmNoSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlYXJjaEluZGV4KCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlYXJjaEluZGV4YCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVTZWFyY2hJbmRleChqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbiwganNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnkpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9JTkRFWFxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1VcGRhdGUgPSAoXG4gIGxhc3RVcGRhdGVkT24sXG4gIGxhc3RVcGRhdGVkQnlcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX0lOREVYLFxuICAgIGxhc3RVcGRhdGVkT24sXG4gICAgbGFzdFVwZGF0ZWRCeVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlYXJjaEluZGV4YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtVXBkYXRlKGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLCBqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeSkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdTZWFyY2ggaW5kZXggdXBkYXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXG4gKiogbW9kdWxlIGlkID0gODA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmV9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGNyZWF0ZUxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInXG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcm9vdFJlZHVjZXInXG5cbmNvbnN0IG1pZGRsZXdhcmUgPSBbdGh1bmtNaWRkbGV3YXJlXVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKClcbiAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcilcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoaW5pdGlhbFN0YXRlKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByb290UmVkdWNlcixcbiAgICBpbml0aWFsU3RhdGUsXG4gICAgYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zdG9yZS5qc1xuICoqLyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IGF1dGggZnJvbSAnLi9hdXRoUmVkdWNlcidcbmltcG9ydCBmbGFzaCBmcm9tICcuL2ZsYXNoUmVkdWNlcidcbmltcG9ydCBxdWVzdGlvbnMgZnJvbSAnLi9xdWVzdGlvbnNSZWR1Y2VyJ1xuaW1wb3J0IGFydGljbGVzIGZyb20gJy4vYXJ0aWNsZVJlZHVjZXInXG5pbXBvcnQgdXNlcnMgZnJvbSAnLi91c2Vyc1JlZHVjZXInXG5pbXBvcnQgc2VjdGlvbnMgZnJvbSAnLi9zZWN0aW9uc1JlZHVjZXInXG5pbXBvcnQgc2VhcmNoSW5kZXggZnJvbSAnLi9zZWFyY2hJbmRleFJlZHVjZXInXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgYXV0aCxcbiAgZmxhc2gsXG4gIHF1ZXN0aW9ucyxcbiAgYXJ0aWNsZXMsXG4gIHVzZXJzLFxuICBzZWN0aW9ucyxcbiAgc2VhcmNoSW5kZXhcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGF1dGhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hdXRoUmVkdWNlci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcbiAgYXV0aDoge1xuICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgIHVzZXI6IG51bGxcbiAgfSxcbiAgZmxhc2g6IHtcbiAgICBtZXNzYWdlOiBudWxsLFxuICAgIHR5cGU6IG51bGwsXG4gICAgdGltZW91dElkOiBudWxsXG4gIH0sXG4gIHF1ZXN0aW9uczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdXG4gIH0sXG4gIHF1ZXN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge31cbiAgfSxcbiAgYXJ0aWNsZXM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBuZXdBcnRpY2xlOiB7XG4gICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfSxcbiAgYXJ0aWNsZToge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2VjdGlvbnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBuZXdTZWN0aW9uOiB7XG4gICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfSxcbiAgc2VjdGlvbjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgdXNlcnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXSxcbiAgICBuZXdVc2VyOiB7XG4gICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9LFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfSxcbiAgdXNlcjoge1xuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgc2VhcmNoSW5kZXg6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgIGxhc3RVcGRhdGVkT246IG51bGwsXG4gICAgbGFzdFVwZGF0ZWRCeTogbnVsbFxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvaW5pdGlhbFN0YXRlLmpzXG4gKiovIiwiaW1wb3J0IHtTRVRfTUVTU0FHRSwgVU5TRVRfTUVTU0FHRX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBmbGFzaCA9IChcbiAgc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB7XG4gICAgICAgIG1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICB0eXBlOiBhY3Rpb24ubWVzc2FnZVR5cGUsXG4gICAgICAgIHRpbWVvdXRJZDogYWN0aW9uLnRpbWVvdXRJZFxuICAgICAgfSlcbiAgICBjYXNlIFVOU0VUX01FU1NBR0U6XG4gICAgICBjbGVhclRpbWVvdXQoc3RhdGUudGltZW91dElkKVxuXG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLmZsYXNoKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmbGFzaFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9RVUVTVElPTlMsIFJFQ0VJVkVfUVVFU1RJT05TLFxuICBSRVFVRVNUX1FVRVNUSU9OX1VQREFURSwgUkVDRUlWRV9RVUVTVElPTl9VUERBVEUsXG4gIFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OLCBDT05GSVJNX0RFTEVURV9RVUVTVElPTiwgUkVKRUNUX0RFTEVURV9RVUVTVElPTn0gZnJvbSAnLi9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgcXVlc3Rpb24gPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnF1ZXN0aW9uLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OX1VQREFURTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi51cGRhdGVkUXVlc3Rpb24sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfUVVFU1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHF1ZXN0aW9ucyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUucXVlc3Rpb25zLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9RVUVTVElPTlM6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9VUERBVEU6XG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OX1VQREFURTpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OOlxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gcXVlc3Rpb24oaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLl9pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BUlRJQ0xFUywgUkVDRUlWRV9BUlRJQ0xFUyxcbiAgUkVRVUVTVF9VUERBVEVfQVJUSUNMRSwgQ09ORklSTV9VUERBVEVfQVJUSUNMRSwgUkVKRUNUX1VQREFURV9BUlRJQ0xFLFxuICBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFLCBDT05GSVJNX0NSRUFURV9BUlRJQ0xFLCBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUsXG4gIFJFUVVFU1RfREVMRVRFX0FSVElDTEUsIENPTkZJUk1fREVMRVRFX0FSVElDTEUsIFJFSkVDVF9ERUxFVEVfQVJUSUNMRX0gZnJvbSAnLi9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGFydGljbGVzID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5hcnRpY2xlcyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBhcnRpY2xlKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdBcnRpY2xlOiBuZXdBcnRpY2xlKHN0YXRlLm5ld0FydGljbGUsIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld0FydGljbGU6IG5ld0FydGljbGUoc3RhdGUubmV3QXJ0aWNsZSwgYWN0aW9uKSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICBhcnRpY2xlKG51bGwsIGFjdGlvbiksXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXNcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGFydGljbGUgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfQVJUSUNMRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtLFxuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgbmV3QXJ0aWNsZSA9IChcbiAgc3RhdGUsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3JzOiBhY3Rpb24uZXJyb3JzXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXJ0aWNsZXMubmV3QXJ0aWNsZSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJ0aWNsZXNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hcnRpY2xlUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9VU0VSUywgUkVDRUlWRV9VU0VSUyxcbiAgUkVRVUVTVF9VUERBVEVfVVNFUiwgQ09ORklSTV9VUERBVEVfVVNFUiwgUkVKRUNUX1VQREFURV9VU0VSLFxuICBSRVFVRVNUX0NSRUFURV9VU0VSLCBDT05GSVJNX0NSRUFURV9VU0VSLCBSRUpFQ1RfQ1JFQVRFX1VTRVIsXG4gIFJFUVVFU1RfREVMRVRFX1VTRVIsIENPTkZJUk1fREVMRVRFX1VTRVIsIFJFSkVDVF9ERUxFVEVfVVNFUn0gZnJvbSAnLi91c2Vyc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCB1c2VyID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VyLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFX1VTRVJTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24udXBkYXRlZEl0ZW0sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBuZXdVc2VyID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHVzZXJzID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS51c2VycyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9VU0VSUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9VU0VSUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcy5tYXAoaSA9PiB1c2VyKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfVVNFUjpcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1VTRVI6XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1VTRVI6XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9VU0VSOlxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiB1c2VyKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfVVNFUjpcbiAgICBjYXNlIFJFSkVDVF9DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdVc2VyOiBuZXdVc2VyKHN0YXRlLm5ld1VzZXIsIGFjdGlvbilcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld1VzZXI6IGluaXRpYWxTdGF0ZS51c2Vycy5uZXdVc2VyLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHVzZXIobnVsbCwgYWN0aW9uKSxcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9ERUxFVEVfVVNFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLl9pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlcnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS91c2Vyc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfU0VDVElPTlMsIFJFQ0VJVkVfU0VDVElPTlMsXG4gIFJFUVVFU1RfVVBEQVRFX1NFQ1RJT04sIENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sIFJFSkVDVF9VUERBVEVfU0VDVElPTixcbiAgUkVRVUVTVF9DUkVBVEVfU0VDVElPTiwgQ09ORklSTV9DUkVBVEVfU0VDVElPTiwgUkVKRUNUX0NSRUFURV9TRUNUSU9OLFxuICBSRVFVRVNUX0RFTEVURV9TRUNUSU9OLCBDT05GSVJNX0RFTEVURV9TRUNUSU9OLCBSRUpFQ1RfREVMRVRFX1NFQ1RJT059IGZyb20gJy4vc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2VjdGlvbnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlY3Rpb25zLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1NFQ1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1NFQ1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHNlY3Rpb24odW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IHNlY3Rpb24oaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld1NlY3Rpb246IG5ld1NlY3Rpb24oc3RhdGUubmV3U2VjdGlvbiwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3U2VjdGlvbjogbmV3U2VjdGlvbihzdGF0ZS5uZXdTZWN0aW9uLCBhY3Rpb24pLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxuICAgICAgICAgIHNlY3Rpb24odW5kZWZpbmVkLCBhY3Rpb24pXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0RFTEVURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBzZWN0aW9uID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWN0aW9uLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFX1NFQ1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9TRUNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9TRUNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLml0ZW0sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9TRUNUSU9OOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBuZXdTZWN0aW9uID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5zZWN0aW9ucy5uZXdTZWN0aW9uKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWN0aW9uc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9JTkRFWCwgUkVDRUlWRV9JTkRFWCxcbiAgUkVRVUVTVF9VUERBVEVfSU5ERVgsIENPTkZJUk1fVVBEQVRFX0lOREVYfSBmcm9tICcuL3NlYXJjaEluZGV4QWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHNlYXJjaEluZGV4ID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5zZWFyY2hJbmRleCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdFVwZGF0ZWRPbjogYWN0aW9uLmxhc3RVcGRhdGVkT24sXG4gICAgICAgIGxhc3RVcGRhdGVkQnk6IGFjdGlvbi5sYXN0VXBkYXRlZEJ5XG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0VXBkYXRlZE9uOiBhY3Rpb24ubGFzdFVwZGF0ZWRPbixcbiAgICAgICAgbGFzdFVwZGF0ZWRCeTogYWN0aW9uLmxhc3RVcGRhdGVkQnlcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlYXJjaEluZGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VhcmNoSW5kZXhSZWR1Y2VyLmpzXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWRBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7Ozs7QUF6Q0E7QUFDQTtBQTJDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUhBO0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBT0E7QUFDQTs7Ozs7Ozs7QUM1QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQWRBO0FBaUJBOzs7O0FBdENBO0FBQ0E7QUF3Q0E7Ozs7Ozs7QUM3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQVhBO0FBY0E7Ozs7QUF6QkE7QUFDQTtBQTJCQTs7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBSkE7QUFDQTtBQUlBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUF4Q0E7QUFEQTtBQWdEQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFuREE7QUFIQTtBQTBEQTs7OztBQXJHQTtBQUNBO0FBdUdBOzs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTs7Ozs7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNyQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7QUNsREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBSEE7QUFOQTtBQXFCQTs7OztBQXBDQTtBQUNBO0FBc0NBOzs7Ozs7O0FDM0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBSEE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFGQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBTEE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7O0FDdkZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQU5BO0FBV0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBWEE7QUFjQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFIQTtBQURBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFYQTtBQURBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7Ozs7Ozs7QUNyREE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBREE7QUFNQTtBQVRBO0FBREE7QUFjQTtBQUNBOzs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBekJBO0FBREE7QUE4QkE7QUFDQTs7OztBQTdDQTtBQUNBO0FBK0NBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBN0JBO0FBcUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQzNCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBOzs7Ozs7OztBQ3pCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQUNBO0FBbUNBO0FBR0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQVpBO0FBa0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBUEE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFMQTtBQUhBO0FBZ0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQkE7QUFvQkE7QUF0QkE7QUF5QkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBM0JBO0FBc0NBOzs7O0FBcEdBO0FBQ0E7QUFzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7QUN0SUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSkE7QUFUQTtBQXFCQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBekNBO0FBREE7QUE4Q0E7QUFDQTs7OztBQS9EQTtBQUNBO0FBaUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1UkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBVUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFYQTtBQURBO0FBcUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSkE7QUFGQTtBQTFDQTtBQUZBO0FBNERBO0FBQ0E7Ozs7Ozs7O0FDakdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVJBO0FBZUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQW5DQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUF2Q0E7QUFrREE7Ozs7QUE1S0E7QUFDQTtBQThLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7OztBQzNNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQU5BO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQW5DQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBdkNBO0FBeURBOzs7O0FBNUdBO0FBQ0E7QUE4R0E7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ3RJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBaEJBO0FBQ0E7QUFrQkE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxU0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM1RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTEE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQVZBO0FBYUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFQQTtBQURBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFaQTtBQURBO0FBZ0JBO0FBekNBO0FBQ0E7QUFEQTtBQTBDQTtBQUNBO0FBckVBO0FBREE7QUEwRUE7Ozs7QUFwSEE7QUFDQTtBQXNIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7QUM1SkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFGQTtBQTBCQTtBQUNBOzs7Ozs7OztBQzNGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQWFBO0FBQ0E7QUFDQTtBQTFDQTtBQTZDQTs7OztBQXRGQTtBQUNBO0FBd0ZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQTtBQU5BO0FBZUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQVJBO0FBREE7QUFuQkE7QUFxQ0E7Ozs7QUF4SEE7QUFDQTtBQTBIQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDckpBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQzVDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBTkE7QUFIQTtBQURBO0FBbkJBO0FBcUNBOzs7O0FBeklBO0FBQ0E7QUEySUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUMzS0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQVZBO0FBWUE7QUFDQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUxBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFrQkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUEzREE7QUFEQTtBQWdFQTs7OztBQXpIQTtBQUNBO0FBMkhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7OztBQ25LQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBQ0E7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUZBO0FBM0JBO0FBSEE7QUF1Q0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQkE7QUEyQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBWUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQWxEQTtBQXdEQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBM0RBO0FBNkVBOzs7O0FBMUpBO0FBQ0E7QUE0SkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFUQTtBQWNBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUZBO0FBY0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQXpEQTtBQTREQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQWpFQTtBQThFQTs7OztBQXBQQTtBQUNBO0FBc1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUNwUkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBREE7QUFQQTtBQWNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUhBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFmQTtBQURBO0FBc0JBO0FBQ0E7Ozs7Ozs7O0FDMUhBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBSEE7QUFMQTtBQWVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBaEJBO0FBREE7QUF5QkE7QUFDQTs7OztBQXBEQTtBQUNBO0FBc0RBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1R0E7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBNURBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBdEJBO0FBd0JBO0FBQ0E7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==