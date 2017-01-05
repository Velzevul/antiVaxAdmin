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

	var _QuestionsList = __webpack_require__(758);

	var _QuestionsList2 = _interopRequireDefault(_QuestionsList);

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
	          'div',
	          { className: _QuestionsList2.default.Wrapper + ' ' + (params.questionId ? _QuestionsList2.default.Wrapper_dimmed : '') },
	          _react2.default.createElement(
	            'div',
	            { className: _QuestionsList2.default.QuestionsList },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsList2.default.Heading },
	              _react2.default.createElement(
	                'div',
	                { className: _QuestionsList2.default.Heading__name },
	                _react2.default.createElement(
	                  'div',
	                  { className: _QuestionsList2.default.Name },
	                  'Question'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _QuestionsList2.default.Heading__timestamp },
	                _react2.default.createElement(
	                  'div',
	                  { className: _QuestionsList2.default.Timestamp },
	                  'Posted on'
	                )
	              )
	            ),
	            items.map(function (i, index) {
	              return _react2.default.createElement(_QuestionsListItem2.default, { key: index,
	                question: i,
	                children: children,
	                currentId: params.questionId });
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _QuestionsListItem = __webpack_require__(757);

	var _QuestionsListItem2 = _interopRequireDefault(_QuestionsListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsListItem = function (_React$Component) {
	  _inherits(QuestionsListItem, _React$Component);

	  function QuestionsListItem(props) {
	    _classCallCheck(this, QuestionsListItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsListItem).call(this, props));

	    _this.navigate = _this.navigate.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionsListItem, [{
	    key: 'navigate',
	    value: function navigate() {
	      var _props = this.props;
	      var question = _props.question;
	      var currentId = _props.currentId;


	      if (!currentId) {
	        _reactRouter.hashHistory.push('/questions/' + question.data._id);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var question = _props2.question;
	      var currentId = _props2.currentId;
	      var children = _props2.children;


	      if (currentId && currentId === question.data._id) {
	        return children;
	      } else {
	        var truncatedText = question.data.question.slice(3, Math.min(question.data.question.length - 4, 70)) + '..';

	        return _react2.default.createElement(
	          'div',
	          { onClick: this.navigate,
	            className: _QuestionsListItem2.default.QuestionsListItem + ' ' + (currentId ? '' : _QuestionsListItem2.default.QuestionsListItem_active) },
	          _react2.default.createElement(
	            'div',
	            { className: _QuestionsListItem2.default.QuestionsListItem__sender },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsListItem2.default.Sender },
	              question.data.posterName
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _QuestionsListItem2.default.QuestionsListItem__message },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsListItem2.default.Message },
	              truncatedText
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _QuestionsListItem2.default.QuestionsListItem__badges },
	            question.data.isSeen ? '' : _react2.default.createElement(
	              'div',
	              { className: _QuestionsListItem2.default.Badge },
	              _react2.default.createElement(_Badge2.default, { label: 'Not Answered', color: 'red' })
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _QuestionsListItem2.default.QuestionsListItem__timestamp },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsListItem2.default.Timestamp },
	              _react2.default.createElement(_reactTime2.default, { value: question.data.createdAt, format: 'h:mm A on MMM Do' })
	            )
	          )
	        );
	      }
	    }
	  }]);

	  return QuestionsListItem;
	}(_react2.default.Component);

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
	module.exports = {"QuestionsListItem":"QuestionsListItem__QuestionsListItem___29rxy","QuestionsListItem__sender":"QuestionsListItem__QuestionsListItem__sender___1gm_J","QuestionsListItem__message":"QuestionsListItem__QuestionsListItem__message___2i7nk","QuestionsListItem__badges":"QuestionsListItem__QuestionsListItem__badges___PLxac","QuestionsListItem__timestamp":"QuestionsListItem__QuestionsListItem__timestamp___raaCd","QuestionsListItem_active":"QuestionsListItem__QuestionsListItem_active___2s595","Sender":"QuestionsListItem__Sender___3JTku","Message":"QuestionsListItem__Message___28a7V","Timestamp":"QuestionsListItem__Timestamp___2L3tQ"};

/***/ },

/***/ 758:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"QuestionsList__Wrapper___1Ighq","Wrapper_dimmed":"QuestionsList__Wrapper_dimmed___1tCSW","QuestionsList":"QuestionsList__QuestionsList___v1msO","Heading":"QuestionsList__Heading___8_nKm","Heading__name":"QuestionsList__Heading__name___21QEK","Heading__timestamp":"QuestionsList__Heading__timestamp___1CNFB","Name":"QuestionsList__Name___37vg-","Timestamp":"QuestionsList__Timestamp___3f4iB"};

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

	var _Layouts = __webpack_require__(616);

	var _UsersList = __webpack_require__(765);

	var _UsersList2 = _interopRequireDefault(_UsersList);

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

	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: _UsersList2.default.Wrapper + ' ' + (params.userId || isNewUserForm ? _UsersList2.default.Wrapper_dimmed : '') },
	          _react2.default.createElement(
	            'div',
	            { className: _UsersList2.default.UsersList },
	            _react2.default.createElement(
	              'div',
	              { className: _UsersList2.default.Heading },
	              _react2.default.createElement(
	                'div',
	                { className: _UsersList2.default.Heading__name },
	                _react2.default.createElement(
	                  _Layouts.ListInline,
	                  null,
	                  _react2.default.createElement(
	                    _Layouts.ListInlineItem,
	                    null,
	                    _react2.default.createElement(
	                      'div',
	                      { className: _UsersList2.default.Name },
	                      'Users'
	                    )
	                  ),
	                  params.userId || isNewUserForm ? '' : _react2.default.createElement(
	                    _Layouts.ListInlineItem,
	                    null,
	                    _react2.default.createElement(
	                      _UI.LinkButton,
	                      { to: '/users/new' },
	                      'add new user'
	                    )
	                  )
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _UsersList2.default.Heading__email },
	                _react2.default.createElement(
	                  'div',
	                  { className: _UsersList2.default.Email },
	                  'email'
	                )
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: _UsersList2.default.Heading__timestamp },
	                _react2.default.createElement(
	                  'div',
	                  { className: _UsersList2.default.Timestamp },
	                  'last log in'
	                )
	              )
	            ),
	            isNewUserForm ? children : '',
	            items.map(function (i, index) {
	              return _react2.default.createElement(_UsersListItem2.default, { key: index,
	                user: i,
	                children: children,
	                currentId: params.userId,
	                isNewUserForm: isNewUserForm });
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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(649);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _UI = __webpack_require__(546);

	var _Layouts = __webpack_require__(616);

	var _Badge = __webpack_require__(755);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _UsersListItem = __webpack_require__(764);

	var _UsersListItem2 = _interopRequireDefault(_UsersListItem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UsersListItem = function (_React$Component) {
	  _inherits(UsersListItem, _React$Component);

	  function UsersListItem() {
	    _classCallCheck(this, UsersListItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(UsersListItem).apply(this, arguments));
	  }

	  _createClass(UsersListItem, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var user = _props.user;
	      var currentId = _props.currentId;
	      var isNewUserForm = _props.isNewUserForm;
	      var children = _props.children;


	      var timestamp = _react2.default.createElement(
	        'div',
	        { className: _UsersListItem2.default.Timestamp },
	        'never logged in'
	      );
	      if (user.data.lastLoggedInAt) {
	        timestamp = _react2.default.createElement(
	          'div',
	          { className: _UsersListItem2.default.Timestamp },
	          _react2.default.createElement(_reactTime2.default, { value: user.data.lastLoggedInAt, format: 'MMM Do h:mm A' })
	        );
	      }

	      if (currentId === user.data._id) {
	        return children;
	      } else {
	        return _react2.default.createElement(
	          'div',
	          { className: '' + _UsersListItem2.default.UsersListItem },
	          _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.UsersListItem__name },
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { className: _UsersListItem2.default.Name },
	                  user.data.name
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  'div',
	                  { className: _UsersListItem2.default.Actions },
	                  currentId || isNewUserForm ? '' : _react2.default.createElement(
	                    _UI.LinkButton,
	                    { to: '/users/' + user.data._id },
	                    'Edit'
	                  )
	                )
	              )
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.UsersListItem__email },
	            _react2.default.createElement(
	              'div',
	              { className: _UsersListItem2.default.Email },
	              '(',
	              user.data.email,
	              ')'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.UsersListItem__badges },
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
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _UsersListItem2.default.UsersListItem__timestamp },
	            timestamp
	          )
	        );
	      }
	    }
	  }]);

	  return UsersListItem;
	}(_react2.default.Component);

		exports.default = UsersListItem;

/***/ },

/***/ 764:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UsersListItem":"UsersListItem__UsersListItem___1joA7","UsersListItem__name":"UsersListItem__UsersListItem__name___1Az27","UsersListItem__email":"UsersListItem__UsersListItem__email___3kbUo","UsersListItem__badges":"UsersListItem__UsersListItem__badges___36ZiO","UsersListItem__timestamp":"UsersListItem__UsersListItem__timestamp___2EbZP","Name":"UsersListItem__Name___2JbEz","Email":"UsersListItem__Email___1rOZ0","Badge":"UsersListItem__Badge___1aEbU","Timestamp":"UsersListItem__Timestamp___iYfJl","Actions":"UsersListItem__Actions___256Cq"};

/***/ },

/***/ 765:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"UsersList__Wrapper___1bVYX","Wrapper_dimmed":"UsersList__Wrapper_dimmed___1ILl9","UsersList":"UsersList__UsersList___3207V","Heading":"UsersList__Heading___1aN8k","Heading__name":"UsersList__Heading__name___2MpQ7","Heading__email":"UsersList__Heading__email___3a0XK","Heading__timestamp":"UsersList__Heading__timestamp___1M4UY","Name":"UsersList__Name___XcDaq","Email":"UsersList__Email___lsO-f","Timestamp":"UsersList__Timestamp___1wTeQ"};

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
	    paddingRight: last ? 0 : '0.750rem'
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

	var _SearchIndex = __webpack_require__(806);

	var _SearchIndex2 = _interopRequireDefault(_SearchIndex);

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
	          'div',
	          { className: _SearchIndex2.default.SearchIndex },
	          _react2.default.createElement(
	            'div',
	            { className: _SearchIndex2.default.Heading },
	            _react2.default.createElement(
	              'div',
	              { className: _SearchIndex2.default.Name },
	              'Search Index'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: _SearchIndex2.default.SearchIndex__body },
	            _react2.default.createElement(
	              'div',
	              null,
	              'Last updated on ',
	              _react2.default.createElement(_reactTime2.default, { value: lastUpdatedOn, format: 'h:mm A on MMM Do' }),
	              ' by ',
	              lastUpdatedBy
	            ),
	            _react2.default.createElement(
	              _UI.Button,
	              { disabled: isUpdating,
	                onClick: this.update },
	              'Update'
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

/***/ 806:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchIndex":"SearchIndex__SearchIndex___PkDYb","SearchIndex__body":"SearchIndex__SearchIndex__body___3Rf_K","Heading":"SearchIndex__Heading___1qFG7","Name":"SearchIndex__Name___8JU4H"};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9VSS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Vc2VySW5mby5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CYWRnZS9CYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RJdGVtL1F1ZXN0aW9uc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3RJdGVtL1VzZXJzTGlzdEl0ZW0uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdC9Vc2Vyc0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3VXNlckZvcm0vTmV3VXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnNMaXN0L1NlY3Rpb25zTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWN0aW9uc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlUm93L1RhYmxlUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlQ29sdW1uL1RhYmxlQ29sdW1uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlQ2VsbC9UYWJsZUNlbGwuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlQ2VsbC9UYWJsZUNlbGwuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnNMaXN0SXRlbS9TZWN0aW9uc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU3ViU2VjdGlvbnNMaXN0L1N1YlNlY3Rpb25zTGlzdC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3U2VjdGlvbkZvcm0vTmV3U2VjdGlvbkZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0VkaXRTZWN0aW9uRm9ybS9FZGl0U2VjdGlvbkZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3QvQXJ0aWNsZXNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0SXRlbS9BcnRpY2xlc0xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3RJdGVtL0FydGljbGVzTGlzdEl0ZW0uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUhvbWUvQ3VzdG9tUGFnZUhvbWUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DdXN0b21QYWdlQWJvdXQvQ3VzdG9tUGFnZUFib3V0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3QXJ0aWNsZUZvcm0vTmV3QXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvc3RvcmUvYXJ0aWNsZUFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0VkaXRBcnRpY2xlRm9ybS9FZGl0QXJ0aWNsZUZvcm0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWFyY2hJbmRleC9TZWFyY2hJbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9zZWFyY2hJbmRleEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hcnRpY2xlUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlY3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEluZGV4UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbnMvU2VjdGlvbnMuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0NvbW1lbnQvQ29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2JhYmVsLXBvbHlmaWxsJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIEluZGV4Um91dGUsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBRdWVzdGlvbnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0J1xuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbidcblxuaW1wb3J0IFVzZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVXNlcnNMaXN0J1xuaW1wb3J0IEVkaXRVc2VyRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtJ1xuaW1wb3J0IE5ld1VzZXJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdVc2VyRm9ybSdcblxuaW1wb3J0IFNlY3Rpb25zIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9ucydcbmltcG9ydCBTZWN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zTGlzdCdcbmltcG9ydCBOZXdTZWN0aW9uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmV3U2VjdGlvbkZvcm0nXG5pbXBvcnQgRWRpdFNlY3Rpb25Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0nXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9TZWN0aW9uJ1xuaW1wb3J0IE5ld0FydGljbGVGb3JtIGZyb20gJy4vY29tcG9uZW50cy9OZXdBcnRpY2xlRm9ybSdcbmltcG9ydCBFZGl0QXJ0aWNsZUZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRBcnRpY2xlRm9ybSdcblxuaW1wb3J0IFNlYXJjaEluZGV4IGZyb20gJy4vY29tcG9uZW50cy9TZWFyY2hJbmRleCdcblxuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuY29uc3QgRHVtbXkgPSAoKSA9PiA8ZGl2IC8+XG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxuICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz1cInF1ZXN0aW9uc1wiIC8+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJxdWVzdGlvbnNcIiBjb21wb25lbnQ9e1F1ZXN0aW9uc0xpc3R9PlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnF1ZXN0aW9uSWRcIiBjb21wb25lbnQ9e1F1ZXN0aW9ufSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwidXNlcnNcIiBjb21wb25lbnQ9e1VzZXJzTGlzdH0+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJuZXdcIiBjb21wb25lbnQ9e05ld1VzZXJGb3JtfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnVzZXJJZFwiIGNvbXBvbmVudD17RWRpdFVzZXJGb3JtfSAvPlxuICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgIDxSb3V0ZSBwYXRoPVwic2VjdGlvbnNcIiBjb21wb25lbnQ9e1NlY3Rpb25zfT5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtTZWN0aW9uc0xpc3R9PlxuICAgICAgICAgICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtEdW1teX0gLz5cblxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCJuZXdcIiBjb21wb25lbnQ9e05ld1NlY3Rpb25Gb3JtfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkL2VkaXRcIiBjb21wb25lbnQ9e0VkaXRTZWN0aW9uRm9ybX0gLz5cbiAgICAgICAgICA8L1JvdXRlPlxuXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkXCIgY29tcG9uZW50PXtTZWN0aW9ufT5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvbmV3XCIgY29tcG9uZW50PXtOZXdBcnRpY2xlRm9ybX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVJZFwiIGNvbXBvbmVudD17RWRpdEFydGljbGVGb3JtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJzZWFyY2gtaW5kZXhcIiBjb21wb25lbnQ9e1NlYXJjaEluZGV4fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgQXBwSGVhZGVyIGZyb20gJy4uL0FwcEhlYWRlcidcbmltcG9ydCB7bG9naW5XaXRoVG9rZW59IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwLmNzcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICB0aGlzLnByb3BzLmF0dGVtcHRUb2tlbih0b2tlbilcbiAgICB9XG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHVzZXIsXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGF0dGVtcHRpbmdMb2dpblxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoYXR0ZW1wdGluZ0xvZ2luKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TG9hZGluZyAvPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgICAgIDxBcHBIZWFkZXIgLz5cblxuICAgICAgICAgICAge2NoaWxkcmVufVxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxMb2dpbiAvPlxuXG4gICAgICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlbXB0aW5nTG9naW46IHN0YXRlLmF1dGguaXNGZXRjaGluZyxcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlcixcbiAgICAgIHNlYXJjaEluZGV4OiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzRmV0Y2hpbmcsXG4gICAgICAgIGlzVXBkYXRpbmc6IHN0YXRlLnNlYXJjaEluZGV4LmlzVXBkYXRpbmcsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sXG4gICAgICAgIGxhc3RVcGRhdGVkQnk6IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkQnlcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgYXR0ZW1wdFRva2VuOiAodG9rZW4pID0+IHtcbiAgICAgICAgZGlzcGF0Y2gobG9naW5XaXRoVG9rZW4odG9rZW4pKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcHApXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7QWxlcnR9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBGbGFzaE1lc3NhZ2UgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEFsZXJ0IG1lc3NhZ2U9e21lc3NhZ2V9IHR5cGU9e3R5cGV9IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBtZXNzYWdlOiBzdGF0ZS5mbGFzaC5tZXNzYWdlLFxuICAgICAgdHlwZTogc3RhdGUuZmxhc2gudHlwZVxuICAgIH1cbiAgfVxuKShGbGFzaE1lc3NhZ2UpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UvRmxhc2hNZXNzYWdlLmpzeFxuICoqLyIsImltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL0xpbmtCdXR0b24nXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0Zvb3RlcixcbiAgSW5wdXQsIENoZWNrYm94LCBFZGl0b3IsIFNlbGVjdH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoe1xuICBtdWx0aXBsaWVycyA9IHtcbiAgICBtaW5IZWlnaHQ6IDMwLFxuICAgIF9faW5uZXI6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgaGVpZ2h0OiA1XG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1pbkhlaWdodDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5taW5IZWlnaHR9cmVtYFxuICB9XG5cbiAgY29uc3QgX19pbm5lclN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLl9faW5uZXIud2lkdGh9cmVtYCxcbiAgICBoZWlnaHQ6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMuX19pbm5lci5oZWlnaHR9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IHN0eWxlPXtfX2lubmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBjb2xvciA9ICdibHVlJ1xufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gW3N0eWxlcy5CdXR0b25dXG5cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkJ1dHRvbl9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5CdXR0b25fYmx1ZSlcbiAgICAgIGJyZWFrXG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2JsdWVcIjpcIkJ1dHRvbl9fQnV0dG9uX2JsdWVfX195LW92MlwiLFwiQnV0dG9uX3JlZFwiOlwiQnV0dG9uX19CdXR0b25fcmVkX19fQXZRWXNcIixcIkJ1dHRvbl9ncmVlblwiOlwiQnV0dG9uX19CdXR0b25fZ3JlZW5fX195X2ZlMlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbkJ1dHRvbi5jc3MnXG5cbmNvbnN0IEljb25CdXR0b24gPSAoe1xuICB0eXBlLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWUgPSBbc3R5bGVzLkljb25CdXR0b25dXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5JY29uQnV0dG9uX2RlbGV0ZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnY2xvc2UnOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkljb25CdXR0b25fY2xvc2UpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICB0bz17dG99IC8+XG4gICAgKVxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9XG4gICAgICAgIGhyZWY9e2hyZWZ9IC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSWNvbkJ1dHRvblwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9fX0dkVjdpXCIsXCJJY29uQnV0dG9uX2RlbGV0ZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9kZWxldGVfX19nbk5ZT1wiLFwiSWNvbkJ1dHRvbl9jbG9zZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9jbG9zZV9fXzI5X0dhXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmtCdXR0b24uY3NzJ1xuXG5jb25zdCBMaW5rQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRvID0gbnVsbCxcbiAgaHJlZiA9IG51bGwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5MaW5rQnV0dG9uXVxuXG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2dyZWVuKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdibHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2JsdWUpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rQnV0dG9uXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX19fMkZsaW1cIixcIkxpbmtCdXR0b25fYmx1ZVwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9ibHVlX19fMVc3c2xcIixcIkxpbmtCdXR0b25fcmVkXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX3JlZF9fXzNMdUdjXCIsXCJMaW5rQnV0dG9uX2dyZWVuXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX2dyZWVuX19fM3V2cmJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcblxuY29uc3QgQWxlcnQgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlID0gJ2xvZydcbn0pID0+IHtcbiAgY29uc3QgbWVzc2FnZUNsYXNzTmFtZXMgPSBbc3R5bGVzLkFsZXJ0X19tZXNzYWdlXVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsb2cnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9sb2cpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWxlcnR9PlxuICAgICAge21lc3NhZ2VcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzTmFtZXMuam9pbignICcpfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBbGVydFwiOlwiQWxlcnRfX0FsZXJ0X19fMzdfUUNcIixcIkFsZXJ0X19tZXNzYWdlXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfX18yd0NaRlwiLFwiQWxlcnRfX21lc3NhZ2VfbG9nXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfbG9nX19fMm41REhcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dC5jc3MnXG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgbGFiZWwgPSBudWxsLFxuICAgICAgbGFiZWxXaWR0aCA9IDgsXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgdHlwZSA9ICd0ZXh0JyxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBlcnJvciA9IG51bGxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGVycm9yRWwgPSAnJ1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JFbCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0fSAke2Vycm9yID8gc3R5bGVzLklucHV0X2Vycm9yIDogJyd9YH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtsYWJlbFdpZHRofXJlbWB9fSBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2lucHV0fVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKX0gLz5cblxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fczY3TjBcIixcIklucHV0X19sYWJlbFwiOlwiSW5wdXRfX0lucHV0X19sYWJlbF9fXzlKRFV1XCIsXCJJbnB1dF9faW5wdXRcIjpcIklucHV0X19JbnB1dF9faW5wdXRfX193YjFQRFwiLFwiSW5wdXRfX2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfX2Vycm9yX19fZmdrQ0RcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18ySllHeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94X19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveF9faW5wdXR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQuY2hlY2tlZCl9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQ2hlY2tib3gvQ2hlY2tib3guanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ2hlY2tib3hcIjpcIkNoZWNrYm94X19DaGVja2JveF9fXzFKWVFnXCIsXCJDaGVja2JveF9fbGFiZWxcIjpcIkNoZWNrYm94X19DaGVja2JveF9fbGFiZWxfX18zT0JVZFwiLFwiQ2hlY2tib3hfX2lucHV0XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2lucHV0X19fMW5ETVZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgU2NyaWJlIGZyb20gJ3NjcmliZS1lZGl0b3InXG5pbXBvcnQgVG9vbGJhciBmcm9tICdzY3JpYmUtcGx1Z2luLXRvb2xiYXInXG5pbXBvcnQgSGVhZGluZ0NtZCBmcm9tICdzY3JpYmUtcGx1Z2luLWhlYWRpbmctY29tbWFuZCdcbmltcG9ydCBMaW5rUHJvbXB0Q21kIGZyb20gJ3NjcmliZS1wbHVnaW4tbGluay1wcm9tcHQtY29tbWFuZCdcbmltcG9ydCBVbmxpbmtDbWQgZnJvbSAnc2NyaWJlLXBsdWdpbi1pbnRlbGxpZ2VudC11bmxpbmstY29tbWFuZCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHtGbGV4LCBCbG9ja30gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRvci5jc3MnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGVkaXRvciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy5lZGl0b3IpXG4gICAgY29uc3QgdG9vbGJhciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy50b29sYmFyKVxuXG4gICAgY29uc3Qgc2NyaWJlID0gbmV3IFNjcmliZShlZGl0b3IpXG4gICAgc2NyaWJlLnVzZShIZWFkaW5nQ21kKDEpKVxuICAgIHNjcmliZS51c2UoSGVhZGluZ0NtZCgyKSlcbiAgICBzY3JpYmUudXNlKExpbmtQcm9tcHRDbWQoKSlcbiAgICBzY3JpYmUudXNlKFVubGlua0NtZCgpKVxuICAgIHNjcmliZS51c2UoVG9vbGJhcih0b29sYmFyKSlcblxuICAgIHNjcmliZS5zZXRDb250ZW50KHRoaXMuc3RhdGUudmFsdWUpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcmliZS5vbignY29udGVudC1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogc2NyaWJlLmdldEhUTUwoKX0pXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaWJlLmdldEhUTUwoKSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc2NyaWJlID0gc2NyaWJlXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5zY3JpYmUuc2V0Q29udGVudChuZXdQcm9wcy52YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBuZXdQcm9wcy52YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7ZXJyb3IsIGxhYmVsfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcn0gJHtlcnJvciA/IHN0eWxlcy5FZGl0b3JfZXJyb3IgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fYm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX3Rvb2xiYXJ9IHJlZj1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gxfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMVwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gyfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfYm9sZH1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9pdGFsaWN9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cIml0YWxpY1wiPlxuICAgICAgICAgICAgICAgIGl0YWxpY1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX29sfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJpbnNlcnRPcmRlcmVkTGlzdFwiPlxuICAgICAgICAgICAgICAgIE9sXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfdWx9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImluc2VydFVuT3JkZXJlZExpc3RcIj5cbiAgICAgICAgICAgICAgICBVbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfbGlua31gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwibGlua1Byb21wdFwiPlxuICAgICAgICAgICAgICAgIExpbmtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF91bmxpbmt9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cInVubGlua1wiPlxuICAgICAgICAgICAgICAgIFVubGlua1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdG9yX19lZGl0b3J9IHJlZj1cImVkaXRvclwiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmpzeFxuICoqLyIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4J1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi9HcmlkJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi9MaXN0SW5saW5lJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX0gZnJvbSAnLi9NZWRpYSdcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4vUGFnZSdcblxuZXhwb3J0IHtCbG9jaywgRmxleCwgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sXG4gIExpc3QsIExpc3RJdGVtLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSxcbiAgTWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmUsXG4gIFBhZ2UsIFBhZ2VDb250ZW50XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXAgPSAoe1xuICB3aWR0aCA9ICc5MCUnLFxuICBtYXhXaWR0aCA9ICc4MHJlbScsIC8vIDEyODBweCBwcm92aWRlZCAxZW0gPT09IDE2cHhcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEdyaWQgPSAoe1xuICBndXR0ZXIgPSAwLFxuICBhbGlnbkl0ZW1zID0gJ3N0cmV0Y2gnLFxuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIG1hcmdpbkxlZnQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogYC0ke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgR3JpZEl0ZW0gPSAoe1xuICBzcGFuID0gMCxcbiAgb3V0T2YgPSAxMixcbiAgZ3V0dGVyID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nTGVmdDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2Z9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW4sXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAganVzdGZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0J1xufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0ZnlDb250ZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYV9fYm9keX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fXzNtRzB4XCIsXCJFZGl0b3JfX2xhYmVsXCI6XCJFZGl0b3JfX0VkaXRvcl9fbGFiZWxfX18xaGQtVVwiLFwiRWRpdG9yX19ib2R5XCI6XCJFZGl0b3JfX0VkaXRvcl9fYm9keV9fXzNGdWZRXCIsXCJFZGl0b3JfX3Rvb2xiYXJcIjpcIkVkaXRvcl9fRWRpdG9yX190b29sYmFyX19fMmNiZ1VcIixcIkVkaXRvcl9fY29tbWFuZFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfX18xNUtYa1wiLFwiRWRpdG9yX19jb21tYW5kX2gxXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9oMV9fXzJhdnJFXCIsXCJFZGl0b3JfX2NvbW1hbmRfaDJcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2gyX19fNWotTnRcIixcIkVkaXRvcl9fY29tbWFuZF9oM1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaDNfX18ydEFqTFwiLFwiRWRpdG9yX19jb21tYW5kX2JvbGRcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2JvbGRfX18zWWRKM1wiLFwiRWRpdG9yX19jb21tYW5kX2l0YWxpY1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaXRhbGljX19fMVVaQTBcIixcIkVkaXRvcl9fY29tbWFuZF9vbFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfb2xfX18yUlFiblwiLFwiRWRpdG9yX19jb21tYW5kX3VsXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bF9fX2NzOVZkXCIsXCJFZGl0b3JfX2NvbW1hbmRfbGlua1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfbGlua19fXzFfRFJ2XCIsXCJFZGl0b3JfX2NvbW1hbmRfdW5saW5rXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bmxpbmtfX18zRHc3dFwiLFwiRWRpdG9yX19zZXBhcmF0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19zZXBhcmF0b3JfX19iZjBwZVwiLFwiRWRpdG9yX19lZGl0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19lZGl0b3JfX18xX1N4Q1wiLFwiRWRpdG9yX19lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfX2Vycm9yX19fMW5NWGRcIixcIkVkaXRvcl9lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfZXJyb3JfX18xRzY2Q1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5jc3MnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQobyA9PiBvLmlkID09PSB2YWx1ZSlcbiAgICBjb25zdCBpbnB1dExhYmVsID0gc2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICdOb25lJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlbGVjdF9fbGFiZWx9YH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X193cmFwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9faW5wdXR9XG4gICAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHYudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvLmlkfT57by5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWxlY3RcIjpcIlNlbGVjdF9fU2VsZWN0X19fMXJQYkxcIixcIlNlbGVjdF9fbGFiZWxcIjpcIlNlbGVjdF9fU2VsZWN0X19sYWJlbF9fXzFHV3ZXXCIsXCJTZWxlY3RfX3dyYXBcIjpcIlNlbGVjdF9fU2VsZWN0X193cmFwX19fd3ZSYXhcIixcIlNlbGVjdF9fZmFrZVwiOlwiU2VsZWN0X19TZWxlY3RfX2Zha2VfX18zd2tkZFwiLFwiU2VsZWN0X19pbnB1dFwiOlwiU2VsZWN0X19TZWxlY3RfX2lucHV0X19fcjdleTdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Mb2FkaW5nLmNzcydcbmltcG9ydCB7U3Bpbm5lcn0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IExvYWRpbmcgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkaW5nfT5cbiAgICAgIDxTcGlubmVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkxvYWRpbmdcIjpcIkxvYWRpbmdfX0xvYWRpbmdfX18zcHljelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBJbnB1dCwgQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7bG9naW5XaXRoQ3JlZGVudGlhbHN9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gdGhpcy5jaGFuZ2VFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGVtYWlsRXJyb3IgPSAnJ1xuICAgIGxldCBwYXNzd29yZEVycm9yID0gJydcblxuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PT0gJycpIHtcbiAgICAgIGVtYWlsRXJyb3IgPSAnZW1haWwgY2Fubm90IGJlIGVtcHR5J1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09PSAnJykge1xuICAgICAgcGFzc3dvcmRFcnJvciA9ICdwYXNzd29yZCBjYW5ub3QgYmUgYmxhbmsnXG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbEVycm9yICYmICFwYXNzd29yZEVycm9yKSB7XG4gICAgICBkaXNwYXRjaChsb2dpbldpdGhDcmVkZW50aWFscyh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsRXJyb3IsXG4gICAgICAgIHBhc3N3b3JkRXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRW1haWwgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogdmFsdWUsXG4gICAgICBlbWFpbEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmd9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFdpbmRvdz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5Mb2dpbjwvRmxleD5cbiAgICAgICAgICA8L01vZGFsV2luZG93SGVhZGVyPlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgIDxMaXN0IG49ezEuNX0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEJpZ1NlY3JldFwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbFdpbmRvdz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVR9KVxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aENyZWRlbnRpYWxzID0gKFxuICBlbWFpbCxcbiAgcGFzc3dvcmRcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2F1dGgvYWRtaW4vYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hdXRoL2FkbWluL2F1dGhlbnRpY2F0ZS10b2tlbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gJ1NFVF9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFVOU0VUX01FU1NBR0UgPSAnVU5TRVRfTUVTU0FHRSdcblxuY29uc3Qgc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGUsXG4gIHRpbWVvdXRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX01FU1NBR0UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICB0aW1lb3V0SWRcbiAgfVxufVxuXG5jb25zdCB1bnNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVTlNFVF9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXNoTWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVuc2V0TWVzc2FnZSgpKVxuICAgIH0sIDIwMDApXG5cbiAgICBkaXNwYXRjaChzZXRNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCB0KSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFVzZXJJbmZvIGZyb20gJy4uL1VzZXJJbmZvJ1xuaW1wb3J0IE5hdiBmcm9tICcuLi9OYXYnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXBwSGVhZGVyLmNzcydcblxuY29uc3QgQXBwSGVhZGVyID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyfT5cbiAgICAgIDxMaXN0SW5saW5lIG49ezJ9PlxuICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBIZWFkZXJfX3NpdGVuYW1lfT5WYWNjaW5lIEFuc3dlcnMgQWRtaW48L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17Mn0+XG4gICAgICAgICAgPE5hdiAvPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuXG4gICAgICA8VXNlckluZm8gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBIZWFkZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VySW5mby5jc3MnXG5cbmNvbnN0IFVzZXJJbmZvID0gKHtcbiAgdXNlcixcbiAgbG9nT3V0XG59KSA9PiB7XG4gIGlmICh1c2VyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm99PlxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlzdElubGluZSBuPXswLjV9PlxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17MC41fT5Mb2dnZWQgaW4gYXM8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbSBuPXswLjV9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlckluZm9fX3VzZXJuYW1lfT57dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgb25DbGljaz17bG9nT3V0fT5Mb2cgb3V0PC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiA8ZGl2IC8+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1c2VyOiBzdGF0ZS5hdXRoLnVzZXJcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbG9nT3V0OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1lvdSBoYXZlIGJlZW4gc3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQnLCAnbG9nJykpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFVzZXJJbmZvKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVXNlckluZm8vVXNlckluZm8uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVXNlckluZm9cIjpcIlVzZXJJbmZvX19Vc2VySW5mb19fXzJTTWpKXCIsXCJVc2VySW5mb19fdXNlcm5hbWVcIjpcIlVzZXJJbmZvX19Vc2VySW5mb19fdXNlcm5hbWVfX18yenlwVlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8vVXNlckluZm8uY3NzXG4gKiogbW9kdWxlIGlkID0gNjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdi5jc3MnXG5cbmNvbnN0IE5hdiA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgbGFiZWw6ICdRdWVzdGlvbnMnLFxuICAgICAgdXJsOiAnL3F1ZXN0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnU2VjdGlvbnMnLFxuICAgICAgdXJsOiAnL3NlY3Rpb25zJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdVc2VycycsXG4gICAgICB1cmw6ICcvdXNlcnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NlYXJjaCBJbmRleCcsXG4gICAgICB1cmw6ICcvc2VhcmNoLWluZGV4J1xuICAgIH1cbiAgXVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYXZ9PlxuICAgICAgPExpc3RJbmxpbmUgbj17MC41fT5cbiAgICAgICAge2l0ZW1zLm1hcChpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezAuNX0ga2V5PXtpLnVybH0+XG4gICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLk5hdl9faXRlbX1cbiAgICAgICAgICAgICAgICBhY3RpdmVDbGFzc05hbWU9e3N0eWxlcy5OYXZfX2l0ZW1fYWN0aXZlfVxuICAgICAgICAgICAgICAgIHRvPXtpLnVybH0+e2kubGFiZWx9PC9MaW5rPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmF2L05hdi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJOYXZcIjpcIk5hdl9fTmF2X19fM1B5eWVcIixcIk5hdl9faXRlbVwiOlwiTmF2X19OYXZfX2l0ZW1fX181SGJ1RVwiLFwiTmF2X19pdGVtX2FjdGl2ZVwiOlwiTmF2X19OYXZfX2l0ZW1fYWN0aXZlX19fMnE0dFRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzXG4gKiogbW9kdWxlIGlkID0gNjQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBcHBIZWFkZXJcIjpcIkFwcEhlYWRlcl9fQXBwSGVhZGVyX19fMlU0S09cIixcIkFwcEhlYWRlcl9fc2l0ZW5hbWVcIjpcIkFwcEhlYWRlcl9fQXBwSGVhZGVyX19zaXRlbmFtZV9fXzNjZi1SXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHBIZWFkZXIvQXBwSGVhZGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXBwXCI6XCJBcHBfX0FwcF9fX2xCRVhJXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDY0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaFF1ZXN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgUXVlc3Rpb25zTGlzdEl0ZW0gZnJvbSAnLi4vUXVlc3Rpb25zTGlzdEl0ZW0nXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNMaXN0LmNzcydcblxuY2xhc3MgUXVlc3Rpb25zTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2ZldGNoUXVlc3Rpb25zfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoUXVlc3Rpb25zKClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBpdGVtcywgaXNGZXRjaGluZywgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5XcmFwcGVyfSAke3BhcmFtcy5xdWVzdGlvbklkID8gc3R5bGVzLldyYXBwZXJfZGltbWVkIDogJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbnNMaXN0fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ19fbmFtZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT5RdWVzdGlvbjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdfX3RpbWVzdGFtcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lc3RhbXB9PlBvc3RlZCBvbjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxRdWVzdGlvbnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb249e2l9XG4gICAgICAgICAgICAgICAgICBjaGlsZHJlbj17Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICBjdXJyZW50SWQ9e3BhcmFtcy5xdWVzdGlvbklkfSAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbXM6IHN0YXRlLnF1ZXN0aW9ucy5pdGVtcyxcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnF1ZXN0aW9ucy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoUXVlc3Rpb25zOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoUXVlc3Rpb25zKCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFF1ZXN0aW9uc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1FVRVNUSU9OUyA9ICdSRVFVRVNUX1FVRVNUSU9OUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1FVRVNUSU9OUyA9ICdSRUNFSVZFX1FVRVNUSU9OUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFID0gJ1JFUVVFU1RfUVVFU1RJT05fVVBEQVRFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFID0gJ1JFQ0VJVkVfUVVFU1RJT05fVVBEQVRFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04gPSAnUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfUVVFU1RJT04gPSAnQ09ORklSTV9ERUxFVEVfUVVFU1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9RVUVTVElPTiA9ICdSRUpFQ1RfREVMRVRFX1FVRVNUSU9OJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVRdWVzdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1FVRVNUSU9OUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFF1ZXN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0UXVlc3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVF1ZXN0aW9ucyhqc29uLmRhdGEucXVlc3Rpb25zKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoaWQpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1FVRVNUSU9OX1VQREFURSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICB1cGRhdGVkUXVlc3Rpb25cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRRdWVzdGlvblxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVRdWVzdGlvbiA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIHN1Y2Nlc3NNZXNzYWdlXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5xdWVzdGlvbikpXG4gICAgICAgICAgaWYgKHN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2Uoc3VjY2Vzc01lc3NhZ2UsICdsb2cnKSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0RFTEVURV9RVUVTVElPTixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVRdWVzdGlvbiA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3REZWxldGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9xdWVzdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy9xdWVzdGlvbnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1F1ZXN0aW9uIHdhcyBkZWxldGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdERlbGV0ZShpZCkpXG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNMaXN0SXRlbS5jc3MnXG5cbmNsYXNzIFF1ZXN0aW9uc0xpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm5hdmlnYXRlID0gdGhpcy5uYXZpZ2F0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBuYXZpZ2F0ZSAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9uLCBjdXJyZW50SWR9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKCFjdXJyZW50SWQpIHtcbiAgICAgIGhhc2hIaXN0b3J5LnB1c2goYC9xdWVzdGlvbnMvJHtxdWVzdGlvbi5kYXRhLl9pZH1gKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9uLCBjdXJyZW50SWQsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChjdXJyZW50SWQgJiYgY3VycmVudElkID09PSBxdWVzdGlvbi5kYXRhLl9pZCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRydW5jYXRlZFRleHQgPSBgJHtxdWVzdGlvbi5kYXRhLnF1ZXN0aW9uLnNsaWNlKDMsIE1hdGgubWluKHF1ZXN0aW9uLmRhdGEucXVlc3Rpb24ubGVuZ3RoIC0gNCwgNzApKX0uLmBcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtfSAke2N1cnJlbnRJZCA/ICcnIDogc3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX2FjdGl2ZX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19zZW5kZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZW5kZXJ9PntxdWVzdGlvbi5kYXRhLnBvc3Rlck5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19tZXNzYWdlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZX0+e3RydW5jYXRlZFRleHR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19iYWRnZXN9PlxuICAgICAgICAgICAge3F1ZXN0aW9uLmRhdGEuaXNTZWVuXG4gICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJOb3QgQW5zd2VyZWRcIiBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25zTGlzdEl0ZW1fX3RpbWVzdGFtcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpbWVzdGFtcH0+XG4gICAgICAgICAgICAgIDxUaW1lIHZhbHVlPXtxdWVzdGlvbi5kYXRhLmNyZWF0ZWRBdH0gZm9ybWF0PVwiaDptbSBBIG9uIE1NTSBEb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uc0xpc3RJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0SXRlbS9RdWVzdGlvbnNMaXN0SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWRnZS5jc3MnXG5cbmNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5CYWRnZV1cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfYmx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT57bGFiZWx9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJhZGdlXCI6XCJCYWRnZV9fQmFkZ2VfX18zM2VRUlwiLFwiQmFkZ2VfYmx1ZVwiOlwiQmFkZ2VfX0JhZGdlX2JsdWVfX196MzNSbFwiLFwiQmFkZ2VfcmVkXCI6XCJCYWRnZV9fQmFkZ2VfcmVkX19fM1pyU2xcIixcIkJhZGdlX2dyZWVuXCI6XCJCYWRnZV9fQmFkZ2VfZ3JlZW5fX19vNEhWNlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNzU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJRdWVzdGlvbnNMaXN0SXRlbVwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX19fMjlyeHlcIixcIlF1ZXN0aW9uc0xpc3RJdGVtX19zZW5kZXJcIjpcIlF1ZXN0aW9uc0xpc3RJdGVtX19RdWVzdGlvbnNMaXN0SXRlbV9fc2VuZGVyX19fMWdtX0pcIixcIlF1ZXN0aW9uc0xpc3RJdGVtX19tZXNzYWdlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fUXVlc3Rpb25zTGlzdEl0ZW1fX21lc3NhZ2VfX18yaTdua1wiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fX2JhZGdlc1wiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX19iYWRnZXNfX19QTHhhY1wiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fX3RpbWVzdGFtcFwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX190aW1lc3RhbXBfX19yYWFDZFwiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fYWN0aXZlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fUXVlc3Rpb25zTGlzdEl0ZW1fYWN0aXZlX19fMnM1OTVcIixcIlNlbmRlclwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1NlbmRlcl9fXzNKVGt1XCIsXCJNZXNzYWdlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fTWVzc2FnZV9fXzI4YTdWXCIsXCJUaW1lc3RhbXBcIjpcIlF1ZXN0aW9uc0xpc3RJdGVtX19UaW1lc3RhbXBfX18yTDN0UVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJXcmFwcGVyXCI6XCJRdWVzdGlvbnNMaXN0X19XcmFwcGVyX19fMUlnaHFcIixcIldyYXBwZXJfZGltbWVkXCI6XCJRdWVzdGlvbnNMaXN0X19XcmFwcGVyX2RpbW1lZF9fXzF0Q1NXXCIsXCJRdWVzdGlvbnNMaXN0XCI6XCJRdWVzdGlvbnNMaXN0X19RdWVzdGlvbnNMaXN0X19fdjFtc09cIixcIkhlYWRpbmdcIjpcIlF1ZXN0aW9uc0xpc3RfX0hlYWRpbmdfX184X25LbVwiLFwiSGVhZGluZ19fbmFtZVwiOlwiUXVlc3Rpb25zTGlzdF9fSGVhZGluZ19fbmFtZV9fXzIxUUVLXCIsXCJIZWFkaW5nX190aW1lc3RhbXBcIjpcIlF1ZXN0aW9uc0xpc3RfX0hlYWRpbmdfX3RpbWVzdGFtcF9fXzFDTkZCXCIsXCJOYW1lXCI6XCJRdWVzdGlvbnNMaXN0X19OYW1lX19fMzd2Zy1cIixcIlRpbWVzdGFtcFwiOlwiUXVlc3Rpb25zTGlzdF9fVGltZXN0YW1wX19fM2Y0aUJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3QvUXVlc3Rpb25zTGlzdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge3VwZGF0ZVF1ZXN0aW9uLCBkZWxldGVRdWVzdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCB7RmxleCwgQmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b24sIExpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUXVlc3Rpb24uY3NzJ1xuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy50b2dnbGVBbnN3ZXJlZCA9IHRoaXMudG9nZ2xlQW5zd2VyZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlUXVlc3Rpb24sIHF1ZXN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uLmRhdGEuX2lkKVxuICB9XG5cbiAgdG9nZ2xlQW5zd2VyZWQgKCkge1xuICAgIGNvbnN0IHt1cGRhdGVRdWVzdGlvbiwgcXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlUXVlc3Rpb24ocXVlc3Rpb24uZGF0YS5faWQsIHtcbiAgICAgIGlzU2VlbjogIXF1ZXN0aW9uLmRhdGEuaXNTZWVuXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3F1ZXN0aW9uLmRhdGEucG9zdGVyRW1haWx9P3N1YmplY3Q9UmVwbHkgdG8geW91ciBxdWVzdGlvbnMgb24gVmFjY2luZSBBbnN3ZXJzYH0+UmVwbHkgdmlhIGVtYWlsPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFuc3dlcmVkfT5NYXJrIGFzIGFuc3dlcmVkPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgdG89XCIvcXVlc3Rpb25zXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICAgIGlmIChxdWVzdGlvbi5kYXRhLmlzU2Vlbikge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFuc3dlcmVkfT5NYXJrIGFzIG5vdCBhbnN3ZXJlZDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgdG89XCIvcXVlc3Rpb25zXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8ZGl2IHJlZj17ZWwgPT4geyB0aGlzLl9ib2R5ID0gZWwgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbl9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmFtZX0+e3F1ZXN0aW9uLmRhdGEucG9zdGVyTmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGF0YS5pc1NlZW4gPyAnJyA6IDxCYWRnZSBsYWJlbD1cIk5vdCBBbnN3ZXJlZFwiIGNvbG9yPVwicmVkXCIgLz59XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGltZXN0YW1wfT5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWUgdmFsdWU9e3F1ZXN0aW9uLmRhdGEuY3JlYXRlZEF0fSBmb3JtYXQ9XCJoOm1tIEEgb24gTU1NIERvXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbWFpbH0+e3F1ZXN0aW9uLmRhdGEucG9zdGVyRW1haWx9PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHF1ZXN0aW9uLmRhdGEucXVlc3Rpb259fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uX19mb290ZXJ9PlxuICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtxdWVzdGlvbklkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvbnNcbiAgICAgICAgPyBzdGF0ZS5xdWVzdGlvbnMuaXRlbXMuZmluZChpID0+IGkuZGF0YS5faWQgPT09IHF1ZXN0aW9uSWQpXG4gICAgICAgIDoge2RhdGE6IHt9fVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVRdWVzdGlvbjogKGlkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVF1ZXN0aW9uKGlkKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVRdWVzdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVF1ZXN0aW9uKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJRdWVzdGlvblwiOlwiUXVlc3Rpb25fX1F1ZXN0aW9uX19fMWlidTZcIixcIlF1ZXN0aW9uX19ib2R5XCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX2JvZHlfX18yUjRwZVwiLFwiUXVlc3Rpb25fX2Zvb3RlclwiOlwiUXVlc3Rpb25fX1F1ZXN0aW9uX19mb290ZXJfX180VldZeVwiLFwiTmFtZVwiOlwiUXVlc3Rpb25fX05hbWVfX18xNGJPUFwiLFwiRW1haWxcIjpcIlF1ZXN0aW9uX19FbWFpbF9fXzFEM09wXCIsXCJUaW1lc3RhbXBcIjpcIlF1ZXN0aW9uX19UaW1lc3RhbXBfX18ycnN3aFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uY3NzXG4gKiogbW9kdWxlIGlkID0gNzYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2ZldGNoVXNlcnN9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJzQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgVXNlcnNMaXN0SXRlbSBmcm9tICcuLi9Vc2Vyc0xpc3RJdGVtJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2Vyc0xpc3QuY3NzJ1xuXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtmZXRjaFVzZXJzfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc05ld1VzZXJGb3JtID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdXNlcnMvbmV3J1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyYXBwZXJ9ICR7cGFyYW1zLnVzZXJJZCB8fCBpc05ld1VzZXJGb3JtID8gc3R5bGVzLldyYXBwZXJfZGltbWVkIDogJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nX19uYW1lfT5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT5Vc2VyczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgICAge3BhcmFtcy51c2VySWQgfHwgaXNOZXdVc2VyRm9ybVxuICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPVwiL3VzZXJzL25ld1wiPmFkZCBuZXcgdXNlcjwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdfX2VtYWlsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsfT5lbWFpbDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdfX3RpbWVzdGFtcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lc3RhbXB9Pmxhc3QgbG9nIGluPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc05ld1VzZXJGb3JtID8gY2hpbGRyZW4gOiAnJ31cblxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VXNlcnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgdXNlcj17aX1cbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17cGFyYW1zLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgIGlzTmV3VXNlckZvcm09e2lzTmV3VXNlckZvcm19IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUudXNlcnMuaXRlbXMsXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS51c2Vycy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoVXNlcnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2Vyc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSUyA9ICdSRVFVRVNUX1VTRVJTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfVVNFUlMgPSAnUkVDRUlWRV9VU0VSUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1VTRVIgPSAnQ1JFQVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfVVNFUiA9ICdDT05GSVJNX0NSRUFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfVVNFUiA9ICdSRUpFQ1RfQ1JFQVRFX1VTRVInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9VU0VSID0gJ1JFUVVFU1RfREVMRVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfVVNFUiA9ICdDT05GSVJNX0RFTEVURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfVVNFUiA9ICdSRUpFQ1RfREVMRVRFX1VTRVInXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0RmV0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VU0VSU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVGZXRjaCA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfVVNFUlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmV0Y2goKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlRmV0Y2goanNvbi5kYXRhLnVzZXJzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy91c2Vycy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0VXBkYXRlKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX1VTRVJcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9VU0VSLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9VU0VSLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHVzZXIgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2Vyc0xpc3RJdGVtLmNzcydcblxuY2xhc3MgVXNlcnNMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3VzZXIsIGN1cnJlbnRJZCwgaXNOZXdVc2VyRm9ybSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHRpbWVzdGFtcCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGltZXN0YW1wfT5cbiAgICAgICAgbmV2ZXIgbG9nZ2VkIGluXG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgaWYgKHVzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdCkge1xuICAgICAgdGltZXN0YW1wID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpbWVzdGFtcH0+XG4gICAgICAgICAgPFRpbWUgdmFsdWU9e3VzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdH0gZm9ybWF0PVwiTU1NIERvIGg6bW0gQVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50SWQgPT09IHVzZXIuZGF0YS5faWQpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlVzZXJzTGlzdEl0ZW19YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX19uYW1lfT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT57dXNlci5kYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVudElkIHx8IGlzTmV3VXNlckZvcm0gPyAnJyA6IDxMaW5rQnV0dG9uIHRvPXtgL3VzZXJzLyR7dXNlci5kYXRhLl9pZH1gfT5FZGl0PC9MaW5rQnV0dG9uPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlcnNMaXN0SXRlbV9fZW1haWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbWFpbH0+KHt1c2VyLmRhdGEuZW1haWx9KTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX19iYWRnZXN9PlxuICAgICAgICAgICAge3VzZXIuZGF0YS5hZG1pblxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFkZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJBZG1pblwiIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyF1c2VyLmRhdGEuaXNFbmFibGVkXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBsYWJlbD1cIkRpc2FibGVkXCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX190aW1lc3RhbXB9PlxuICAgICAgICAgICAge3RpbWVzdGFtcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzTGlzdEl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJVc2Vyc0xpc3RJdGVtXCI6XCJVc2Vyc0xpc3RJdGVtX19Vc2Vyc0xpc3RJdGVtX19fMWpvQTdcIixcIlVzZXJzTGlzdEl0ZW1fX25hbWVcIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX25hbWVfX18xQXoyN1wiLFwiVXNlcnNMaXN0SXRlbV9fZW1haWxcIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX2VtYWlsX19fM2tiVW9cIixcIlVzZXJzTGlzdEl0ZW1fX2JhZGdlc1wiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fYmFkZ2VzX19fMzZaaU9cIixcIlVzZXJzTGlzdEl0ZW1fX3RpbWVzdGFtcFwiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fdGltZXN0YW1wX19fMkViWlBcIixcIk5hbWVcIjpcIlVzZXJzTGlzdEl0ZW1fX05hbWVfX18ySmJFelwiLFwiRW1haWxcIjpcIlVzZXJzTGlzdEl0ZW1fX0VtYWlsX19fMXJPWjBcIixcIkJhZGdlXCI6XCJVc2Vyc0xpc3RJdGVtX19CYWRnZV9fXzFhRWJVXCIsXCJUaW1lc3RhbXBcIjpcIlVzZXJzTGlzdEl0ZW1fX1RpbWVzdGFtcF9fX2lZZkpsXCIsXCJBY3Rpb25zXCI6XCJVc2Vyc0xpc3RJdGVtX19BY3Rpb25zX19fMjU2Q3FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIldyYXBwZXJcIjpcIlVzZXJzTGlzdF9fV3JhcHBlcl9fXzFiVllYXCIsXCJXcmFwcGVyX2RpbW1lZFwiOlwiVXNlcnNMaXN0X19XcmFwcGVyX2RpbW1lZF9fXzFJTGw5XCIsXCJVc2Vyc0xpc3RcIjpcIlVzZXJzTGlzdF9fVXNlcnNMaXN0X19fMzIwN1ZcIixcIkhlYWRpbmdcIjpcIlVzZXJzTGlzdF9fSGVhZGluZ19fXzFhTjhrXCIsXCJIZWFkaW5nX19uYW1lXCI6XCJVc2Vyc0xpc3RfX0hlYWRpbmdfX25hbWVfX18yTXBRN1wiLFwiSGVhZGluZ19fZW1haWxcIjpcIlVzZXJzTGlzdF9fSGVhZGluZ19fZW1haWxfX18zYTBYS1wiLFwiSGVhZGluZ19fdGltZXN0YW1wXCI6XCJVc2Vyc0xpc3RfX0hlYWRpbmdfX3RpbWVzdGFtcF9fXzFNNFVZXCIsXCJOYW1lXCI6XCJVc2Vyc0xpc3RfX05hbWVfX19YY0RhcVwiLFwiRW1haWxcIjpcIlVzZXJzTGlzdF9fRW1haWxfX19sc08tZlwiLFwiVGltZXN0YW1wXCI6XCJVc2Vyc0xpc3RfX1RpbWVzdGFtcF9fXzF3VGVRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVVc2VyLCBkZWxldGVVc2VyfSBmcm9tICcuLi8uLi9zdG9yZS91c2Vyc0FjdGlvbnMnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgQ2hlY2tib3h9IGZyb20gJy4uL1VJJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRWRpdFVzZXJGb3JtLmNzcydcblxuY2xhc3MgRWRpdFVzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMudXNlci5kYXRhLCB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBkYXRhLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnVzZXJcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7dXNlcjoge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZVVzZXJ9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIGlmICghcGF5bG9hZC5wYXNzd29yZCkge1xuICAgICAgZGVsZXRlIHBheWxvYWQucGFzc3dvcmRcbiAgICB9XG5cbiAgICB1cGRhdGVVc2VyKGlkLCBwYXlsb2FkKVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICBjb25zdCB7dXNlcjoge2RhdGE6IHVzZXJ9fSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB1c2VyLCB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkZWxldGVVc2VyLCB1c2VyOiB7ZGF0YToge19pZDogaWR9fX0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVVc2VyKGlkKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLnVzZXJcblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFsbCBTYXZlZDwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICB0bz1cIi91c2Vycy9cIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+RGlzY2FyZCBDaGFuZ2VzPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRVc2VyRm9ybV9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnbmFtZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2VtYWlsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkVuYWJsZWRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNFbmFibGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0VuYWJsZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkFkbWluXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5hZG1pbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdhZG1pbicsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm1fX2Zvb3Rlcn0+XG4gICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHt1c2VySWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUudXNlcnNcbiAgICAgICAgPyBzdGF0ZS51c2Vycy5pdGVtcy5maW5kKGkgPT4gaS5kYXRhLl9pZCA9PT0gdXNlcklkKVxuICAgICAgICA6IHtkYXRhOiB7fSwgaXNVcGRhdGluZzogdHJ1ZX1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlVXNlcjogKGlkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXIoaWQpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVVzZXI6IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdFVzZXJGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFZGl0VXNlckZvcm1cIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19fMzRVeVBcIixcIkVkaXRVc2VyRm9ybV9fYm9keVwiOlwiRWRpdFVzZXJGb3JtX19FZGl0VXNlckZvcm1fX2JvZHlfX18xVWpsN1wiLFwiRWRpdFVzZXJGb3JtX19mb290ZXJcIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19mb290ZXJfX18zdEpTd1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y3JlYXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94fSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld1VzZXJGb3JtLmNzcydcblxuY2xhc3MgTmV3VXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGFkbWluOiAnJyxcbiAgICAgICAgaXNFbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZVVzZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlVXNlcih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc1VwZGF0aW5nfSA9IHRoaXMucHJvcHMuaXRlbVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmV3VXNlckZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5uYW1lfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCduYW1lJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZW1haWx9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnZW1haWwnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdwYXNzd29yZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRW5hYmxlZFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0VuYWJsZWR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRW5hYmxlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiQWRtaW5cIlxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmFkbWlufVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2FkbWluJywgdmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtX19mb290ZXJ9PlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUudXNlcnNcbiAgICAgICAgPyBzdGF0ZS51c2Vycy5uZXdVc2VyXG4gICAgICAgIDoge2RhdGE6IHt9LCBpc1VwZGF0aW5nOiB0cnVlLCBlcnJvcnM6IHt9fVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVVc2VyOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlVXNlcihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKE5ld1VzZXJGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmV3VXNlckZvcm0vTmV3VXNlckZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmV3VXNlckZvcm1cIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fX0hLTFFnXCIsXCJOZXdVc2VyRm9ybV9fYm9keVwiOlwiTmV3VXNlckZvcm1fX05ld1VzZXJGb3JtX19ib2R5X19faFljTUZcIixcIk5ld1VzZXJGb3JtX19mb290ZXJcIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fZm9vdGVyX19fMXZTNmZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c29ydGFibGV9IGZyb20gJ3JlYWN0LXNvcnRhYmxlJ1xuXG5pbXBvcnQge3VwZGF0ZVNlY3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCBTZWN0aW9uc0xpc3RJdGVtIGZyb20gJy4uL1NlY3Rpb25zTGlzdEl0ZW0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IFN1YlNlY3Rpb25zTGlzdCBmcm9tICcuLi9TdWJTZWN0aW9uc0xpc3QnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9XcmFwcGVyJ1xuaW1wb3J0IFRhYmxlIGZyb20gJy4uL1RhYmxlJ1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5cbmNvbnN0IFNvcnRhYmxlTGlzdEl0ZW0gPSBzb3J0YWJsZSgocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IHsuLi5wcm9wc30+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICApXG59KVxuXG5jbGFzcyBTZWN0aW9uc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudXBkYXRlU3RhdGUgPSB0aGlzLnVwZGF0ZVN0YXRlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkcmFnZ2luZ0luZGV4OiBudWxsLFxuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogcHJvcHMubWV0YVNlY3Rpb24uZGF0YS5jaGlsZHJlblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBuZXdQcm9wcy5tZXRhU2VjdGlvbi5kYXRhLmNoaWxkcmVuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlIChvYmopIHtcbiAgICBpZiAob2JqLmRyYWdnaW5nSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHttZXRhU2VjdGlvbiwgdXBkYXRlU2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICAgIHVwZGF0ZVNlY3Rpb24obWV0YVNlY3Rpb24uZGF0YS5faWQsIHtcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuc3RhdGUuZGF0YS5pdGVtc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG9iailcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBtZXRhU2VjdGlvbiwgc2VjdGlvbnMsIGxvY2F0aW9uLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaXNOZXdTZWN0aW9uUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zZWN0aW9ucy9uZXcnXG4gICAgY29uc3QgaXNFZGl0U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3U2VjdGlvblJvdXRlIHx8IGlzRWRpdFNlY3Rpb25Sb3V0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGRpbW1lZD17ZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZVJvdyBoZWFkaW5nPlxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmcgdGl0bGU+e21ldGFTZWN0aW9uLmRhdGEudGl0bGV9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCIyMFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIGhlYWRpbmc+dXJsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdFxuICAgICAgICAgICAgICB3aWR0aD1cIjE1XCI+XG4gICAgICAgICAgICAgIHtkaXNhYmxlSW50ZXJhY3Rpb25cbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zL25ldz9wYXJlbnRJZD0ke21ldGFTZWN0aW9uLmRhdGEuX2lkfWB9PmFkZCBuZXcgc2VjdGlvbjwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICAgICAgPC9UYWJsZVJvdz5cblxuICAgICAgICAgIHtpc05ld1NlY3Rpb25Sb3V0ZSAmJiBsb2NhdGlvbi5xdWVyeS5wYXJlbnRJZCA9PT0gbWV0YVNlY3Rpb24uZGF0YS5faWRcbiAgICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLml0ZW1zLm1hcCgoc2VjdGlvbklkLCBpKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNFZGl0U2VjdGlvblJvdXRlICYmIHNlY3Rpb25JZCA9PT0gcGFyYW1zLnNlY3Rpb25JZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBzZWN0aW9uSWQpXG4gICAgICAgICAgICAgIGNvbnN0IHN1YnNlY3Rpb25zID0gc2VjdGlvbnMuZmlsdGVyKHMgPT4gc2VjdGlvbi5kYXRhLmNoaWxkcmVuLmluZGV4T2Yocy5kYXRhLl9pZCkgIT09IC0xKVxuXG4gICAgICAgICAgICAgIGxldCBzdWJzZWN0aW9uc0xpc3QgPSAoXG4gICAgICAgICAgICAgICAgPFN1YlNlY3Rpb25zTGlzdCBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgc3Vic2VjdGlvbnM9e3N1YnNlY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259IC8+XG4gICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICBpZiAoZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17bWV0YVNlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdWJzZWN0aW9uc0xpc3R9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlU3RhdGU9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuaXRlbXN9XG4gICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nSW5kZXg9e3RoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgc29ydElkPXtpfVxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbnNMaXN0SXRlbSBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHBhcmVudD17bWV0YVNlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzdWJzZWN0aW9uc0xpc3R9XG4gICAgICAgICAgICAgICAgICA8L1NvcnRhYmxlTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBtZXRhU2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEudXJsID09PSAnbWFpbi1uYXYnICYmIHMuZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ21ldGEnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlY3Rpb25zOiBzdGF0ZS5zZWN0aW9ucy5pdGVtcyxcbiAgICAgIG1ldGFTZWN0aW9uXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZVNlY3Rpb246IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWN0aW9uKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoU2VjdGlvbnNMaXN0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VjdGlvbnNMaXN0L1NlY3Rpb25zTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfU0VDVElPTlMgPSAnUkVRVUVTVF9TRUNUSU9OUydcbmV4cG9ydCBjb25zdCBSRUNFSVZFX1NFQ1RJT05TID0gJ1JFQ0VJVkVfU0VDVElPTlMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX1VQREFURV9TRUNUSU9OID0gJ1JFUVVFU1RfVVBEQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9VUERBVEVfU0VDVElPTiA9ICdDT05GSVJNX1VQREFURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9VUERBVEVfU0VDVElPTiA9ICdSRUpFQ1RfVVBEQVRFX1NFQ1RJT04nXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0NSRUFURV9TRUNUSU9OID0gJ0NSRUFURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fQ1JFQVRFX1NFQ1RJT04gPSAnQ09ORklSTV9DUkVBVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04gPSAnUkVKRUNUX0NSRUFURV9TRUNUSU9OJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9ERUxFVEVfU0VDVElPTiA9ICdSRVFVRVNUX0RFTEVURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fREVMRVRFX1NFQ1RJT04gPSAnQ09ORklSTV9ERUxFVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfREVMRVRFX1NFQ1RJT04gPSAnUkVKRUNUX0RFTEVURV9TRUNUSU9OJ1xuXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcblxuY29uc3QgcmVxdWVzdFNlY3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfU0VDVElPTlNcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlU2VjdGlvbnMgPSAoXG4gIGl0ZW1zXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1NFQ1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoU2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFNlY3Rpb25zKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlY3Rpb25zL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlY3Rpb25zKGpzb24uZGF0YS5pdGVtcykpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX1VQREFURV9TRUNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVVwZGF0ZSA9IChcbiAgaWQsXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sXG4gICAgaWQsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVFcnJvcnMgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfU0VDVElPTixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlU2VjdGlvbiA9IChcbiAgaWQsXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNlY3Rpb246IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGlkLCBqc29uLmRhdGEuc2VjdGlvbikpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdTZWN0aW9uIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVFcnJvcnMoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSBzZWN0aW9uIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DUkVBVEVfU0VDVElPTlxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ1JFQVRFX1NFQ1RJT04sXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04sXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVNlY3Rpb24gPSAoXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlY3Rpb25zL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHNlY3Rpb246IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5zZWN0aW9uKSlcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGpzb24uZGF0YS5wYXJlbnQuX2lkLCBqc29uLmRhdGEucGFyZW50KSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlY3Rpb24gY3JlYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgICAgaWYgKGJhY2tsaW5rKSB7XG4gICAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKGJhY2tsaW5rKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICAvLyBUT0RPOiB0ZXN0IHZhbGlkYXRpb24gZXJyb3JzXG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBzZWN0aW9uIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0RFTEVURV9TRUNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlU2VjdGlvbiA9IChcbiAgaWQsXG4gIGNoaWxkcmVuLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3NlY3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGpzb24uZGF0YS5wYXJlbnQuX2lkLCBqc29uLmRhdGEucGFyZW50KSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGNoaWxkcmVuLm1hcChjID0+IGNvbmZpcm1EZWxldGUoYykpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdTZWN0aW9uIHdhcyBkZWxldGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHJlamVjdERlbGV0ZShpZCkpXG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3NlY3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb25zTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBTZWN0aW9uc0xpc3RJdGVtID0gKHtcbiAgc2VjdGlvbixcbiAgcGFyZW50LFxuICBkaXNhYmxlSW50ZXJhY3Rpb25cbn0pID0+IHtcbiAgbGV0IGljb24gPSBudWxsXG4gIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgaWNvbiA9ICdmb2xkZXInXG4gIH0gZWxzZSBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAnY3VzdG9tJykge1xuICAgIGljb24gPSAnZmlsZS1jb2RlJ1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2FydGljbGVzJykge1xuICAgIGljb24gPSAnZmlsZS10ZXh0J1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2Jsb2dwb3N0cycpIHtcbiAgICBpY29uID0gJ2ZpbGUtYmxvZ3Bvc3QnXG4gIH1cblxuICBsZXQgdXJsID0gJydcbiAgaWYgKHBhcmVudC5kYXRhLnNlY3Rpb25UeXBlID09PSAnbWV0YScpIHtcbiAgICB1cmwgPSBgLyR7c2VjdGlvbi5kYXRhLnVybH1gXG4gIH0gZWxzZSB7XG4gICAgdXJsID0gYC8ke3BhcmVudC5kYXRhLnVybH0vJHtzZWN0aW9uLmRhdGEudXJsfWBcbiAgfVxuXG4gIGxldCBhY3Rpb25zID0gJydcbiAgaWYgKCFkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy9uZXc/cGFyZW50SWQ9JHtzZWN0aW9uLmRhdGEuX2lkfWB9PmFkZCBuZXcgc3ViLXNlY3Rpb248L0xpbmtCdXR0b24+XG5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7c2VjdGlvbi5kYXRhLl9pZH0vZWRpdGB9PmVkaXQ8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3NlY3Rpb24uZGF0YS5faWR9L2VkaXRgfT5lZGl0PC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IHNlY3Rpb25MaW5rID0gJydcbiAgaWYgKCFkaXNhYmxlSW50ZXJhY3Rpb24gJiYgc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlICE9PSAncGFyZW50Jykge1xuICAgIHNlY3Rpb25MaW5rID0gYC9zZWN0aW9ucy8ke3NlY3Rpb24uZGF0YS5faWR9YFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlY3Rpb25zTGlzdEl0ZW19XG4gICAgICAke2Rpc2FibGVJbnRlcmFjdGlvbiA/ICcnIDogc3R5bGVzLlNlY3Rpb25zTGlzdEl0ZW1faW50ZXJhY3RpdmV9YH0+XG4gICAgICA8VGFibGVSb3cgaW50ZXJhY3RpdmU9eyFkaXNhYmxlSW50ZXJhY3Rpb259XG4gICAgICAgIGluZGVudGVkPXtwYXJlbnQuZGF0YS5zZWN0aW9uVHlwZSAhPT0gJ21ldGEnfT5cbiAgICAgICAgPFRhYmxlQ29sdW1uPlxuICAgICAgICAgIDxJY29uIHR5cGU9e2ljb259IC8+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgIDxUYWJsZUNlbGwgdGl0bGVcbiAgICAgICAgICAgIHRvPXtzZWN0aW9uTGlua30+XG4gICAgICAgICAgICB7c2VjdGlvbi5kYXRhLnRpdGxlfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjIwXCI+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dXJsfTwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjE1XCJcbiAgICAgICAgICBsYXN0PlxuICAgICAgICAgIHthY3Rpb25zfVxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uc0xpc3RJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVSb3cuY3NzJ1xuXG5jb25zdCBUYWJsZVJvdyA9ICh7XG4gIGNoaWxkcmVuLFxuICBpbnRlcmFjdGl2ZSA9IGZhbHNlLFxuICBoZWFkaW5nID0gZmFsc2UsXG4gIGluZGVudGVkID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLlRhYmxlUm93XVxuICBpZiAoaGVhZGluZykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVSb3dfaGVhZGluZylcbiAgfVxuICBpZiAoaW50ZXJhY3RpdmUpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlUm93X2ludGVyYWN0aXZlKVxuICB9XG4gIGlmIChpbmRlbnRlZCkge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVSb3dfaW5kZW50ZWQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVSb3dcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlUm93L1RhYmxlUm93LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlUm93XCI6XCJUYWJsZVJvd19fVGFibGVSb3dfX18yVUJOOVwiLFwiVGFibGVSb3dfaGVhZGluZ1wiOlwiVGFibGVSb3dfX1RhYmxlUm93X2hlYWRpbmdfX18xWjllUVwiLFwiVGFibGVSb3dfaW50ZXJhY3RpdmVcIjpcIlRhYmxlUm93X19UYWJsZVJvd19pbnRlcmFjdGl2ZV9fX2k1SnJWXCIsXCJUYWJsZVJvd19pbmRlbnRlZFwiOlwiVGFibGVSb3dfX1RhYmxlUm93X2luZGVudGVkX19fMjhWNzZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlUm93L1RhYmxlUm93LmNzc1xuICoqIG1vZHVsZSBpZCA9IDc3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVDb2x1bW4uY3NzJ1xuXG5jb25zdCBUYWJsZUNvbHVtbiA9ICh7XG4gIGNoaWxkcmVuLFxuICB3aWR0aCxcbiAgbGFzdCA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nUmlnaHQ6IGxhc3QgPyAwIDogJzAuNzUwcmVtJ1xuICB9XG4gIGlmICh3aWR0aCA9PT0gJ3N0cmV0Y2gnKSB7XG4gICAgc3R5bGUuZmxleCA9IDFcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS53aWR0aCA9IGAke3dpZHRofXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5UYWJsZUNvbHVtbn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb2x1bW5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlQ29sdW1uL1RhYmxlQ29sdW1uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlQ29sdW1uXCI6XCJUYWJsZUNvbHVtbl9fVGFibGVDb2x1bW5fX18xVHVic1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uY3NzXG4gKiogbW9kdWxlIGlkID0gNzc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RhYmxlQ2VsbC5jc3MnXG5cbmNvbnN0IFRhYmxlQ2VsbCA9ICh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZSA9IGZhbHNlLFxuICBoZWFkaW5nID0gZmFsc2UsXG4gIHRvID0gbnVsbFxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtdXG5cbiAgaWYgKGhlYWRpbmcpIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlSGVhZGluZ0NlbGwpXG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVIZWFkaW5nQ2VsbF90aXRsZSlcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUNlbGwpXG5cbiAgICBpZiAodGl0bGUpIHtcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVDZWxsX3RpdGxlKVxuICAgIH1cbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TGluayB0bz17dG99XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0xpbms+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcy5qb2luKCcgJyl9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDZWxsXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlQ2VsbFwiOlwiVGFibGVDZWxsX19UYWJsZUNlbGxfX18zakN4b1wiLFwiVGFibGVDZWxsX3RpdGxlXCI6XCJUYWJsZUNlbGxfX1RhYmxlQ2VsbF90aXRsZV9fX09WeWt0XCIsXCJUYWJsZUhlYWRpbmdDZWxsXCI6XCJUYWJsZUNlbGxfX1RhYmxlSGVhZGluZ0NlbGxfX18zQ1NURFwiLFwiVGFibGVIZWFkaW5nQ2VsbF90aXRsZVwiOlwiVGFibGVDZWxsX19UYWJsZUhlYWRpbmdDZWxsX3RpdGxlX19feU9kVzZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1RhYmxlQ2VsbC9UYWJsZUNlbGwuY3NzXG4gKiogbW9kdWxlIGlkID0gNzgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JY29uLmNzcydcblxuY29uc3QgSWNvbiA9ICh7XG4gIHR5cGVcbn0pID0+IHtcbiAgbGV0IGNsYXNzTmFtZXMgPSBbc3R5bGVzLkljb25dXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZW52ZWxvcGUnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2VudmVsb3BlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmb2xkZXInOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZvbGRlcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS1jb2RlJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9maWxlQ29kZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS10ZXh0JzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9maWxlVGV4dClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS10ZXh0LWRyYWZ0JzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9maWxlVGV4dERyYWZ0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLWJsb2dwb3N0JzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9maWxlQmxvZ3Bvc3QpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtYmxvZ3Bvc3QtZHJhZnQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVCbG9ncG9zdERyYWZ0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1c2VyJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl91c2VyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICd1c2VyLWFkbWluJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl91c2VyQWRtaW4pXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VzZXItZGlzYWJsZWQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3VzZXJEaXNhYmxlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAncGx1cyc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fcGx1cylcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9JY29uL0ljb24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSWNvblwiOlwiSWNvbl9fSWNvbl9fXzM4RXB2XCIsXCJJY29uX2VudmVsb3BlXCI6XCJJY29uX19JY29uX2VudmVsb3BlX19fMnROUXhcIixcIkljb25fZm9sZGVyXCI6XCJJY29uX19JY29uX2ZvbGRlcl9fXzFZNG5UXCIsXCJJY29uX2ZpbGVDb2RlXCI6XCJJY29uX19JY29uX2ZpbGVDb2RlX19fTGRtTi1cIixcIkljb25fZmlsZVRleHRcIjpcIkljb25fX0ljb25fZmlsZVRleHRfX18zU2JXMFwiLFwiSWNvbl9maWxlVGV4dERyYWZ0XCI6XCJJY29uX19JY29uX2ZpbGVUZXh0RHJhZnRfX18zTlNuUlwiLFwiSWNvbl9maWxlQmxvZ3Bvc3RcIjpcIkljb25fX0ljb25fZmlsZUJsb2dwb3N0X19fQXNNOGdcIixcIkljb25fZmlsZUJsb2dwb3N0RHJhZnRcIjpcIkljb25fX0ljb25fZmlsZUJsb2dwb3N0RHJhZnRfX18ySFNKMFwiLFwiSWNvbl91c2VyXCI6XCJJY29uX19JY29uX3VzZXJfX18zNjBmSlwiLFwiSWNvbl91c2VyQWRtaW5cIjpcIkljb25fX0ljb25fdXNlckFkbWluX19fMndncUJcIixcIkljb25fdXNlckRpc2FibGVkXCI6XCJJY29uX19JY29uX3VzZXJEaXNhYmxlZF9fX0RjSnA5XCIsXCJJY29uX3BsdXNcIjpcIkljb25fX0ljb25fcGx1c19fXzEwcFR2XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uY3NzXG4gKiogbW9kdWxlIGlkID0gNzgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWN0aW9uc0xpc3RJdGVtXCI6XCJTZWN0aW9uc0xpc3RJdGVtX19TZWN0aW9uc0xpc3RJdGVtX19fMUtaRVFcIixcIlNlY3Rpb25zTGlzdEl0ZW1fX2FjdGlvbnNcIjpcIlNlY3Rpb25zTGlzdEl0ZW1fX1NlY3Rpb25zTGlzdEl0ZW1fX2FjdGlvbnNfX194aUJJR1wiLFwiU2VjdGlvbnNMaXN0SXRlbV9pbnRlcmFjdGl2ZVwiOlwiU2VjdGlvbnNMaXN0SXRlbV9fU2VjdGlvbnNMaXN0SXRlbV9pbnRlcmFjdGl2ZV9fX2lFSkpfXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzb3J0YWJsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IFNlY3Rpb25zTGlzdEl0ZW0gZnJvbSAnLi4vU2VjdGlvbnNMaXN0SXRlbSdcblxuY29uc3QgU29ydGFibGVMaXN0SXRlbSA9IHNvcnRhYmxlKChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gIClcbn0pXG5cbmNsYXNzIFN1YlNlY3Rpb25zTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nSW5kZXg6IG51bGwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBwcm9wcy5zZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogbmV3UHJvcHMuc2VjdGlvbi5kYXRhLmNoaWxkcmVuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlIChvYmopIHtcbiAgICBpZiAob2JqLmRyYWdnaW5nSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHtzZWN0aW9uLCB1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgICAgdXBkYXRlU2VjdGlvbihzZWN0aW9uLmRhdGEuX2lkLCB7XG4gICAgICAgIGNoaWxkcmVuOiB0aGlzLnN0YXRlLmRhdGEuaXRlbXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShvYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtzZWN0aW9uLCBzdWJzZWN0aW9ucywgY2hpbGRyZW4sIGxvY2F0aW9uLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlzTmV3U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2VjdGlvbnMvbmV3J1xuICAgIGNvbnN0IGlzRWRpdFNlY3Rpb25Sb3V0ZSA9IGxvY2F0aW9uLnBhdGhuYW1lID09PSBgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH0vZWRpdGBcbiAgICBjb25zdCBkaXNhYmxlSW50ZXJhY3Rpb24gPSBpc05ld1NlY3Rpb25Sb3V0ZSB8fCBpc0VkaXRTZWN0aW9uUm91dGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICB7aXNOZXdTZWN0aW9uUm91dGUgJiYgbG9jYXRpb24ucXVlcnkucGFyZW50SWQgPT09IHNlY3Rpb24uZGF0YS5faWRcbiAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAge3NlY3Rpb24uZGF0YS5jaGlsZHJlbi5tYXAoKHN1YnNlY3Rpb25JZCwgaSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YnNlY3Rpb24gPSBzdWJzZWN0aW9ucy5maW5kKHN1YiA9PiBzdWIuZGF0YS5faWQgPT09IHN1YnNlY3Rpb25JZClcblxuICAgICAgICAgIGlmIChpc0VkaXRTZWN0aW9uUm91dGUgJiYgc3Vic2VjdGlvbklkID09PSBwYXJhbXMuc2VjdGlvbklkKSB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRpc2FibGVJbnRlcmFjdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxTZWN0aW9uc0xpc3RJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3N1YnNlY3Rpb259XG4gICAgICAgICAgICAgICAgICBwYXJlbnQ9e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNvcnRhYmxlTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgdXBkYXRlU3RhdGU9e3RoaXMudXBkYXRlU3RhdGV9XG4gICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5kYXRhLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgZHJhZ2dpbmdJbmRleD17dGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4fVxuICAgICAgICAgICAgICAgICAgc29ydElkPXtpfVxuICAgICAgICAgICAgICAgICAgb3V0bGluZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgIDxTZWN0aW9uc0xpc3RJdGVtIHNlY3Rpb249e3N1YnNlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudD17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvU29ydGFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbnVsbCxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVTZWN0aW9uOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2godXBkYXRlU2VjdGlvbihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFN1YlNlY3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1N1YlNlY3Rpb25zTGlzdC9TdWJTZWN0aW9uc0xpc3QuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV3JhcHBlci5jc3MnXG5cbmNvbnN0IFdyYXBwZXIgPSAoe1xuICBkaW1tZWQsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5XcmFwcGVyfVxuICAgICAgJHtkaW1tZWQgPyBzdHlsZXMuV3JhcHBlcl9kaW1tZWQgOiAnJ31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiV3JhcHBlclwiOlwiV3JhcHBlcl9fV3JhcHBlcl9fXzF0X0ctXCIsXCJXcmFwcGVyX2RpbW1lZFwiOlwiV3JhcHBlcl9fV3JhcHBlcl9kaW1tZWRfX18xaUd0Y1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvV3JhcHBlci9XcmFwcGVyLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGUuY3NzJ1xuXG5jb25zdCBUYWJsZSA9ICh7XG4gIGNoaWxkcmVuLFxuICBicmVhZGNydW1icyA9IGZhbHNlXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5UYWJsZX0gJHticmVhZGNydW1icyA/IHN0eWxlcy5UYWJsZV9icmVhZGNydW1icyA6ICcnfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUYWJsZVwiOlwiVGFibGVfX1RhYmxlX19fM3ZLSVJcIixcIlRhYmxlX2JyZWFkY3J1bWJzXCI6XCJUYWJsZV9fVGFibGVfYnJlYWRjcnVtYnNfX18zTjczb1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGUvVGFibGUuY3NzXG4gKiogbW9kdWxlIGlkID0gNzg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NyZWF0ZVNlY3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIExpbmtCdXR0b24sIElucHV0LCBTZWxlY3R9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGb3JtLCBGb3JtQm9keSwgRm9ybUhlYWRlciwgRm9ybUZvb3Rlcn0gZnJvbSAnLi4vRm9ybSdcblxuY2xhc3MgTmV3U2VjdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHNlY3Rpb25UeXBlOiAnYXJ0aWNsZXMnLFxuICAgICAgICBwYXJlbnQ6IHByb3BzLnBhcmVudFNlY3Rpb24uZGF0YS5faWRcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzfSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHNhdmUgKCkge1xuICAgIGNvbnN0IHtjcmVhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGNyZWF0ZVNlY3Rpb24odGhpcy5zdGF0ZS5kYXRhKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXRlbToge2lzVXBkYXRpbmd9LCBwYXJlbnRTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBzZWN0aW9uVHlwZXMgPSBbXVxuICAgIGlmIChwYXJlbnRTZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdtZXRhJykge1xuICAgICAgc2VjdGlvblR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdhcnRpY2xlcycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGFydGljbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdwYXJlbnQnLFxuICAgICAgICAgIGxhYmVsOiAnUGFyZW50J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdjdXN0b20nLFxuICAgICAgICAgIGxhYmVsOiAnQ3VzdG9tIHBhZ2UnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2Jsb2dwb3N0cycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGJsb2cgcG9zdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9IGVsc2Uge1xuICAgICAgc2VjdGlvblR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdhcnRpY2xlcycsXG4gICAgICAgICAgbGFiZWw6ICdMaXN0IG9mIGFydGljbGVzJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6ICdibG9ncG9zdHMnLFxuICAgICAgICAgIGxhYmVsOiAnbGlzdCBvZiBibG9nIHBvc3RzJ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybUhlYWRlcj5BZGQgbmV3IHNlY3Rpb248L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPFNlbGVjdCBsYWJlbD1cIlR5cGVcIlxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5zZWN0aW9uVHlwZX1cbiAgICAgICAgICAgIG9wdGlvbnM9e3NlY3Rpb25UeXBlc31cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdzZWN0aW9uVHlwZScsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9Gb3JtQm9keT5cblxuICAgICAgICA8Rm9ybUZvb3Rlcj5cbiAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICAgIHRvPXtgL3NlY3Rpb25zL2B9PkNhbmNlbDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7bG9jYXRpb246IHtxdWVyeToge3BhcmVudElkfX19ID0gb3duUHJvcHNcbiAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHBhcmVudElkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLnNlY3Rpb25zLm5ld1NlY3Rpb24sXG4gICAgICBwYXJlbnRTZWN0aW9uXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZVNlY3Rpb246IChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZVNlY3Rpb24oZGF0YSwgYC9zZWN0aW9ucy9gKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoTmV3U2VjdGlvbkZvcm0pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9OZXdTZWN0aW9uRm9ybS9OZXdTZWN0aW9uRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb3JtLmNzcydcblxuY29uc3QgRm9ybSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtSGVhZGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm1fX2hlYWRlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybUJvZHkgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9ybV9fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgRm9ybUZvb3RlciA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtX19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7Rm9ybSwgRm9ybUhlYWRlciwgRm9ybUJvZHksIEZvcm1Gb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRm9ybVwiOlwiRm9ybV9fRm9ybV9fXzJ6d1pmXCIsXCJGb3JtX19oZWFkZXJcIjpcIkZvcm1fX0Zvcm1fX2hlYWRlcl9fX0xsa2FmXCIsXCJGb3JtX19ib2R5XCI6XCJGb3JtX19Gb3JtX19ib2R5X19fdjZZYTJcIixcIkZvcm1fX2Zvb3RlclwiOlwiRm9ybV9fRm9ybV9fZm9vdGVyX19fVWlSTldcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbiwgZGVsZXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIFNlbGVjdH0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuXG5jbGFzcyBFZGl0U2VjdGlvbkZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuZGVsZXRlID0gdGhpcy5kZWxldGUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5zZWN0aW9uLmRhdGEpLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge3NlY3Rpb246IHtlcnJvcnMsIGRhdGEsIGlzVXBkYXRpbmd9fSA9IG5ld1Byb3BzXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb246IHtkYXRhOiB7X2lkOiBpZH19LCB1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmRhdGEpXG5cbiAgICB1cGRhdGVTZWN0aW9uKGlkLCBwYXlsb2FkKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwgbmV3RGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCBuZXdFcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSAoKSB7XG4gICAgY29uc3Qge2RlbGV0ZVNlY3Rpb24sIHNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlU2VjdGlvbihzZWN0aW9uLmRhdGEuX2lkLCBzZWN0aW9uLmRhdGEuY2hpbGRyZW4pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtzZWN0aW9uLCBwYXJlbnRTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFsbCBTYXZlZDwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgdG89XCIvc2VjdGlvbnNcIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIHRvPVwiL3NlY3Rpb25zXCI+RGlzY2FyZCBDaGFuZ2VzPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtSGVhZGVyPkVkaXQgc2VjdGlvbjwvRm9ybUhlYWRlcj5cblxuICAgICAgICA8Rm9ybUJvZHk+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxJbnB1dCBsYWJlbD1cInVybFwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd1cmwnLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7YWN0aW9uc31cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlY3Rpb24uaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Gb3JtRm9vdGVyPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZH19ID0gb3duUHJvcHNcbiAgICBjb25zdCBzZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb25JZClcbiAgICBjb25zdCBwYXJlbnRTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS5faWQgPT09IHNlY3Rpb24uZGF0YS5wYXJlbnQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc2VjdGlvbixcbiAgICAgIHBhcmVudFNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCBiYWNrbGluayA9ICcvc2VjdGlvbnMnXG5cbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlU2VjdGlvbjogKGlkLCBjaGlsZHJlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVTZWN0aW9uKGlkLCBjaGlsZHJlbiwgYmFja2xpbmspKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVNlY3Rpb246IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWN0aW9uKGlkLCBkYXRhLCBiYWNrbGluaykpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEVkaXRTZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0VkaXRTZWN0aW9uRm9ybS9FZGl0U2VjdGlvbkZvcm0uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IEFydGljbGVzTGlzdCBmcm9tICcuLi9BcnRpY2xlc0xpc3QnXG5pbXBvcnQgQ3VzdG9tUGFnZUhvbWUgZnJvbSAnLi4vQ3VzdG9tUGFnZUhvbWUnXG5pbXBvcnQgQ3VzdG9tUGFnZUFib3V0IGZyb20gJy4uL0N1c3RvbVBhZ2VBYm91dCdcblxuY29uc3QgU2VjdGlvbiA9ICh7XG4gIHNlY3Rpb24sXG4gIHBhcmVudCxcbiAgbG9jYXRpb24sXG4gIHBhcmFtcyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgc3dpdGNoIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUpIHtcbiAgICBjYXNlICdhcnRpY2xlcyc6XG4gICAgY2FzZSAnYmxvZ3Bvc3RzJzpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxBcnRpY2xlc0xpc3Qgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICBwYXJlbnQ9e3BhcmVudH1cbiAgICAgICAgICBwYXJhbXM9e3BhcmFtc31cbiAgICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XG4gICAgICAgICAgY2hpbGRyZW49e2NoaWxkcmVufSAvPlxuICAgICAgKVxuICAgIGNhc2UgJ2N1c3RvbSc6XG4gICAgICBzd2l0Y2ggKHNlY3Rpb24uZGF0YS5jdXN0b21JZCkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEN1c3RvbVBhZ2VIb21lIC8+XG4gICAgICAgICAgKVxuICAgICAgICBjYXNlICdhYm91dCc6XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxDdXN0b21QYWdlQWJvdXQgLz5cbiAgICAgICAgICApXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBjdXN0b20gcGFnZSAke3NlY3Rpb24uZGF0YS5jdXN0b21JZH1gKVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5lcnJvcihgdW5leHBlY3RlZCBzZWN0aW9uIHR5cGUgJHtzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGV9YClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gcGFyYW1zLnNlY3Rpb25JZClcbiAgICBjb25zdCBwYXJlbnQgPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbi5kYXRhLnBhcmVudClcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uLFxuICAgICAgcGFyZW50XG4gICAgfVxuICB9XG4pKFNlY3Rpb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7c29ydGFibGV9IGZyb20gJ3JlYWN0LXNvcnRhYmxlJ1xuXG5pbXBvcnQge3VwZGF0ZVNlY3Rpb259IGZyb20gJy4uLy4uL3N0b3JlL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCBBcnRpY2xlc0xpc3RJdGVtIGZyb20gJy4uL0FydGljbGVzTGlzdEl0ZW0nXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4uL1dyYXBwZXInXG5pbXBvcnQgVGFibGUgZnJvbSAnLi4vVGFibGUnXG5pbXBvcnQgVGFibGVSb3cgZnJvbSAnLi4vVGFibGVSb3cnXG5pbXBvcnQgVGFibGVDb2x1bW4gZnJvbSAnLi4vVGFibGVDb2x1bW4nXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gJy4uL1RhYmxlQ2VsbCdcblxuY29uc3QgU29ydGFibGVMaXN0SXRlbSA9IHNvcnRhYmxlKChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgey4uLnByb3BzfT57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gIClcbn0pXG5cbmNsYXNzIEFydGljbGVzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRyYWdnaW5nSW5kZXg6IG51bGwsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBwcm9wcy5zZWN0aW9uLmRhdGEuYXJ0aWNsZXNcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBpdGVtczogbmV3UHJvcHMuc2VjdGlvbi5kYXRhLmFydGljbGVzXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlIChvYmopIHtcbiAgICBpZiAob2JqLmRyYWdnaW5nSW5kZXggPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHt1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgICAgdXBkYXRlU2VjdGlvbih7XG4gICAgICAgIGFydGljbGVzOiB0aGlzLnN0YXRlLmRhdGEuaXRlbXNcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZShvYmopXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHthcnRpY2xlcywgc2VjdGlvbiwgY2hpbGRyZW4sIHBhcmFtcywgbG9jYXRpb259ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGlzTmV3QXJ0aWNsZVJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy9uZXdgXG4gICAgY29uc3QgaXNFZGl0QXJ0aWNsZVJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy8ke3BhcmFtcy5hcnRpY2xlSWR9YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3QXJ0aWNsZVJvdXRlIHx8IGlzRWRpdEFydGljbGVSb3V0ZVxuXG4gICAgbGV0IGFjdGlvbnMgPSAnJ1xuICAgIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdhcnRpY2xlcycpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ld2B9PmFkZCBuZXcgYXJ0aWNsZTwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ldz90eXBlPWhlYWRpbmdgfT5hZGQgbmV3IGhlYWRpbmc8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2Jsb2dwb3N0cycpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL25ld2B9PmFkZCBuZXcgYmxvZyBwb3N0PC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxXcmFwcGVyIGRpbW1lZD17ZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZVJvdyBoZWFkaW5nPlxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsIHRpdGxlIGhlYWRpbmc+e3NlY3Rpb24uZGF0YS50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjIwXCI+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZz51cmw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgICAgIDxUYWJsZUNvbHVtbiBsYXN0XG4gICAgICAgICAgICAgIHdpZHRoPVwiMTVcIj5cbiAgICAgICAgICAgICAge2Rpc2FibGVJbnRlcmFjdGlvblxuICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICA6IGFjdGlvbnNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICA8L1RhYmxlUm93PlxuXG4gICAgICAgICAge2lzTmV3QXJ0aWNsZVJvdXRlXG4gICAgICAgICAgICA/IGNoaWxkcmVuXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5pdGVtcy5tYXAoKGFydGljbGVJZCwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzRWRpdEFydGljbGVSb3V0ZSAmJiBwYXJhbXMuYXJ0aWNsZUlkID09PSBhcnRpY2xlSWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnN0IGFydGljbGUgPSBhcnRpY2xlcy5maW5kKGEgPT4gYS5kYXRhLl9pZCA9PT0gYXJ0aWNsZUlkKVxuXG4gICAgICAgICAgICAgIGlmIChkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEFydGljbGVzTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICBhcnRpY2xlPXthcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlPXt0aGlzLnVwZGF0ZVN0YXRlfVxuICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5kYXRhLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2luZ0luZGV4PXt0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIHNvcnRJZD17aX1cbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPEFydGljbGVzTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgIGFydGljbGU9e2FydGljbGV9XG4gICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgICA8L1NvcnRhYmxlTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1dyYXBwZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3Qgc2VjdGlvbiA9IHN0YXRlLnNlY3Rpb25zLml0ZW1zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBwYXJhbXMuc2VjdGlvbklkKVxuICAgIGNvbnN0IGFydGljbGVzID0gc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmlsdGVyKGEgPT4gc2VjdGlvbi5kYXRhLmFydGljbGVzLmluZGV4T2YoYS5kYXRhLl9pZCkgIT09IC0xKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNlY3Rpb24sXG4gICAgICBhcnRpY2xlc1xuICAgIH1cbiAgfSxcbiAgKGRpc3BhdGNoLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGVTZWN0aW9uOiAoZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWN0aW9uKHBhcmFtcy5zZWN0aW9uSWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShBcnRpY2xlc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcnRpY2xlc0xpc3QvQXJ0aWNsZXNMaXN0LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJ1xuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FydGljbGVzTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBBcnRpY2xlc0xpc3RJdGVtID0gKHtcbiAgYXJ0aWNsZSxcbiAgc2VjdGlvbixcbiAgZGlzYWJsZUludGVyYWN0aW9uXG59KSA9PiB7XG4gIGxldCBpY29uID0gbnVsbFxuICBzd2l0Y2ggKGFydGljbGUuZGF0YS5hcnRpY2xlVHlwZSkge1xuICAgIGNhc2UgJ2FydGljbGUnOlxuICAgICAgaWNvbiA9IGFydGljbGUuZGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgICA/ICdmaWxlLXRleHQnXG4gICAgICAgIDogJ2ZpbGUtdGV4dC1kcmFmdCdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmxvZ3Bvc3QnOlxuICAgICAgaWNvbiA9IGFydGljbGUuZGF0YS5pc1B1Ymxpc2hlZFxuICAgICAgICA/ICdmaWxlLWJsb2dwb3N0J1xuICAgICAgICA6ICdmaWxlLWJsb2dwb3N0LWRyYWZ0J1xuICAgICAgYnJlYWtcbiAgICBjYXNlICdoZWFkaW5nJzpcbiAgICBkZWZhdWx0OlxuICAgICAgaWNvbiA9IG51bGxcbiAgfVxuXG4gIGxldCB1cmwgPSBgLyR7YXJ0aWNsZS5kYXRhLnVybH1gXG4gIGlmIChhcnRpY2xlLmRhdGEuYXJ0aWNsZVR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgIHVybCA9ICcnXG4gIH1cblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmICghZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgYWN0aW9ucyA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXJ0aWNsZXNMaXN0SXRlbV9fYWN0aW9uc30+XG4gICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7c2VjdGlvbi5kYXRhLl9pZH0vYXJ0aWNsZXMvJHthcnRpY2xlLmRhdGEuX2lkfWB9PmVkaXQ8L0xpbmtCdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQXJ0aWNsZXNMaXN0SXRlbX1cbiAgICAgICR7ZGlzYWJsZUludGVyYWN0aW9uID8gJycgOiBzdHlsZXMuQXJ0aWNsZXNMaXN0SXRlbV9pbnRlcmFjdGl2ZX1cbiAgICAgICR7YXJ0aWNsZS5kYXRhLmFydGljbGVUeXBlID09PSAnaGVhZGluZycgPyBzdHlsZXMuQXJ0aWNsZXNMaXN0SXRlbV9oZWFkaW5nIDogJyd9YH0+XG4gICAgICA8VGFibGVSb3cgaW50ZXJhY3RpdmU9eyFkaXNhYmxlSW50ZXJhY3Rpb259PlxuICAgICAgICB7aWNvblxuICAgICAgICAgID8gKFxuICAgICAgICAgICAgPFRhYmxlQ29sdW1uPlxuICAgICAgICAgICAgICA8SWNvbiB0eXBlPXtpY29ufSAvPlxuICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICApXG4gICAgICAgICAgOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgIDxUYWJsZUNlbGwgdGl0bGU+XG4gICAgICAgICAgICB7YXJ0aWNsZS5kYXRhLnRpdGxlfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjI1XCI+XG4gICAgICAgICAgPFRhYmxlQ2VsbD57dXJsfTwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cIjNcIj5cbiAgICAgICAgICB7YXJ0aWNsZS5kYXRhLmlzUHVibGlzaGVkXG4gICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICA6IDxCYWRnZSBsYWJlbD1cIkRyYWZ0XCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCI3XCJcbiAgICAgICAgICBsYXN0PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgIHthY3Rpb25zfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgIDwvVGFibGVSb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZXNMaXN0SXRlbVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQXJ0aWNsZXNMaXN0SXRlbS9BcnRpY2xlc0xpc3RJdGVtLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFydGljbGVzTGlzdEl0ZW1cIjpcIkFydGljbGVzTGlzdEl0ZW1fX0FydGljbGVzTGlzdEl0ZW1fX18zcVF6QlwiLFwiQXJ0aWNsZXNMaXN0SXRlbV9fYWN0aW9uc1wiOlwiQXJ0aWNsZXNMaXN0SXRlbV9fQXJ0aWNsZXNMaXN0SXRlbV9fYWN0aW9uc19fX3JzaHVhXCIsXCJBcnRpY2xlc0xpc3RJdGVtX2ludGVyYWN0aXZlXCI6XCJBcnRpY2xlc0xpc3RJdGVtX19BcnRpY2xlc0xpc3RJdGVtX2ludGVyYWN0aXZlX19fMkVuaUVcIixcIkFydGljbGVzTGlzdEl0ZW1faGVhZGluZ1wiOlwiQXJ0aWNsZXNMaXN0SXRlbV9fQXJ0aWNsZXNMaXN0SXRlbV9oZWFkaW5nX19fMUpOS2JcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0FydGljbGVzTGlzdEl0ZW0vQXJ0aWNsZXNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1c3RvbVBhZ2VIb21lLmNzcydcblxuY29uc3QgQ3VzdG9tUGFnZUhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXN0b21QYWdlSG9tZX0+XG4gICAgICBJIGFtIEN1c3RvbVBhZ2VIb21lIGNvbXBvbmVudCFcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWdlSG9tZVxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9DdXN0b21QYWdlSG9tZS9DdXN0b21QYWdlSG9tZS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDdXN0b21QYWdlSG9tZVwiOlwiQ3VzdG9tUGFnZUhvbWVfX0N1c3RvbVBhZ2VIb21lX19fMnR2UnNcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VIb21lL0N1c3RvbVBhZ2VIb21lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3VzdG9tUGFnZUFib3V0LmNzcydcblxuY29uc3QgQ3VzdG9tUGFnZUFib3V0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ3VzdG9tUGFnZUFib3V0fT5cbiAgICAgIEkgYW0gQ3VzdG9tUGFnZUFib3V0IGNvbXBvbmVudCFcbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21QYWdlQWJvdXRcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VzdG9tUGFnZUFib3V0L0N1c3RvbVBhZ2VBYm91dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJDdXN0b21QYWdlQWJvdXRcIjpcIkN1c3RvbVBhZ2VBYm91dF9fQ3VzdG9tUGFnZUFib3V0X19fMjlNb3JcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0N1c3RvbVBhZ2VBYm91dC9DdXN0b21QYWdlQWJvdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gODAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NyZWF0ZUFydGljbGV9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94LCBFZGl0b3J9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGb3JtLCBGb3JtQm9keSwgRm9ybUhlYWRlciwgRm9ybUZvb3Rlcn0gZnJvbSAnLi4vRm9ybSdcblxuY2xhc3MgTmV3QXJ0aWNsZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHNuaXBwZXQ6ICcnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgYXJ0aWNsZVR5cGU6ICcnLFxuICAgICAgICBpc1B1Ymxpc2hlZDogZmFsc2UsXG4gICAgICAgIGlzRnJlcXVlbnQ6IGZhbHNlLFxuICAgICAgICBwYXJlbnQ6IHByb3BzLnBhcmFtcy5zZWN0aW9uSWRcbiAgICAgIH0sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLnNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2Jsb2dwb3N0cycpIHtcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9ICdibG9ncG9zdCdcbiAgICB9IGVsc2UgaWYgKHByb3BzLmxvY2F0aW9uLnF1ZXJ5LnR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgdGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID0gJ2hlYWRpbmcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9ICdhcnRpY2xlJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2Vycm9yc30gPSBuZXdQcm9wcy5pdGVtXG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7Y3JlYXRlQXJ0aWNsZX0gPSB0aGlzLnByb3BzXG5cbiAgICBjcmVhdGVBcnRpY2xlKHRoaXMuc3RhdGUuZGF0YSlcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwgbmV3RGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCBuZXdFcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2l0ZW06IHtpc1VwZGF0aW5nfSwgcGFyYW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB0aXRsZSA9ICcnXG4gICAgc3dpdGNoICh0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUpIHtcbiAgICAgIGNhc2UgJ2FydGljbGUnOlxuICAgICAgICB0aXRsZSA9ICdhcnRpY2xlJ1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnYmxvZ3Bvc3QnOlxuICAgICAgICB0aXRsZSA9ICdibG9nIHBvc3QnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdoZWFkaW5nJzpcbiAgICAgICAgdGl0bGUgPSAnaGVhZGluZydcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYHVuZXhwZWN0ZWQgYXJ0aWNsZSB0eXBlICR7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlfWApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtPlxuICAgICAgICA8Rm9ybUhlYWRlcj5BZGQgbmV3IHt0aXRsZX08L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cInVybFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIlB1Ymxpc2hlZDpcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNQdWJsaXNoZWR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzUHVibGlzaGVkJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLmFydGljbGVUeXBlID09PSAnYXJ0aWNsZSdcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRmVhdHVyZWQ6XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0ZyZXF1ZW50fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRnJlcXVlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2Jsb2dwb3N0J1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlByZXZpZXc6XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5zbmlwcGV0fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NuaXBwZXQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSAhPT0gJ2hlYWRpbmcnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udGVudDpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuY29udGVudH1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89e2Avc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfWB9PkNhbmNlbDwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbklkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLmFydGljbGVzLm5ld0FydGljbGUsXG4gICAgICBzZWN0aW9uXG4gICAgfVxuICB9LFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUFydGljbGU6IChkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGNyZWF0ZUFydGljbGUoZGF0YSwgYC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9YCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKE5ld0FydGljbGVGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmV3QXJ0aWNsZUZvcm0vTmV3QXJ0aWNsZUZvcm0uanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7Q09ORklSTV9VUERBVEVfU0VDVElPTn0gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfQVJUSUNMRSA9ICdSRVFVRVNUX1VQREFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX0FSVElDTEUgPSAnQ09ORklSTV9VUERBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX0FSVElDTEUgPSAnUkVKRUNUX1VQREFURV9BUlRJQ0xFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRSA9ICdDUkVBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NSRUFURV9BUlRJQ0xFID0gJ0NPTkZJUk1fQ1JFQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0NSRUFURV9BUlRJQ0xFID0gJ1JFSkVDVF9DUkVBVEVfQVJUSUNMRSdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfREVMRVRFX0FSVElDTEUgPSAnUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9BUlRJQ0xFID0gJ0NPTkZJUk1fREVMRVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9BUlRJQ0xFID0gJ1JFSkVDVF9ERUxFVEVfQVJUSUNMRSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FSVElDTEVTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUFydGljbGVzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9BUlRJQ0xFUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBcnRpY2xlcygpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9BUlRJQ0xFLFxuICAgIGlkLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWNlaXZlRXJyb3JzID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX0FSVElDTEUsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFydGljbGUgPSAoXG4gIGlkLFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhcnRpY2xlOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLmFydGljbGUpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSBoYXMgYmVlbiBzYXZlZCcsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVFcnJvcnMoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DUkVBVEVfQVJUSUNMRVxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ1JFQVRFX0FSVElDTEUsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFydGljbGUgPSAoXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFydGljbGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5hcnRpY2xlKSlcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDT05GSVJNX1VQREFURV9TRUNUSU9OLFxuICAgICAgICAgICAgaWQ6IGpzb24uZGF0YS5wYXJlbnQuX2lkLFxuICAgICAgICAgICAgaXRlbToganNvbi5kYXRhLnBhcmVudFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBcnRpY2xlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJ0aWNsZSA9IChcbiAgaWQsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sXG4gICAgICAgICAgICBpZDoganNvbi5kYXRhLnBhcmVudC5faWQsXG4gICAgICAgICAgICBpdGVtOiBqc29uLmRhdGEucGFyZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSB3YXMgZGVsZXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3REZWxldGUoaWQpKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlQXJ0aWNsZSwgZGVsZXRlQXJ0aWNsZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgQ2hlY2tib3gsIEVkaXRvcn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL0NvbW1lbnRzJ1xuXG5jbGFzcyBFZGl0QXJ0aWNsZUZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuZGVsZXRlID0gdGhpcy5kZWxldGUuYmluZCh0aGlzKVxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5kZWxldGVDb21tZW50ID0gdGhpcy5kZWxldGVDb21tZW50LmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZVJlcGx5ID0gdGhpcy5kZWxldGVSZXBseS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBwcm9wcy5hcnRpY2xlLmRhdGEpLFxuICAgICAgZXJyb3JzOiB7fVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgY29uc3Qge2FydGljbGU6IHtlcnJvcnMsIGRhdGEsIGlzVXBkYXRpbmd9fSA9IG5ld1Byb3BzXG5cbiAgICBpZiAoIWlzVXBkYXRpbmcpIHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9XG5cbiAgICAgIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBlcnJvcnMuY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCBkYXRhKSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgZXJyb3JzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2FydGljbGU6IHtkYXRhOiB7X2lkOiBpZH19LCB1cGRhdGVBcnRpY2xlfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLmRhdGEpXG5cbiAgICB1cGRhdGVBcnRpY2xlKGlkLCBwYXlsb2FkKVxuICB9XG5cbiAgY2hhbmdlIChwcm9wLCB2YWx1ZSkge1xuICAgIGNvbnN0IG5ld0RhdGEgPSB7XG4gICAgICBbcHJvcF06IHZhbHVlXG4gICAgfVxuICAgIGNvbnN0IG5ld0Vycm9ycyA9IHtcbiAgICAgIFtwcm9wXTogbnVsbFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwgbmV3RGF0YSksXG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZXJyb3JzLCBuZXdFcnJvcnMpXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZSAoKSB7XG4gICAgY29uc3Qge2RlbGV0ZUFydGljbGUsIGFydGljbGV9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGVsZXRlQXJ0aWNsZShhcnRpY2xlLmRhdGEuX2lkKVxuICB9XG5cbiAgZGVsZXRlQ29tbWVudCAoaWQpIHtcbiAgICBjb25zdCBuZXdDb21tZW50cyA9IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5tYXAoYyA9PiB7XG4gICAgICBpZiAoYy5faWQgPT09IGlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBjLCB7XG4gICAgICAgICAgaXNEZWxldGVkOiAhYy5pc0RlbGV0ZWRcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogdHJ1ZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZGF0YSwge1xuICAgICAgICBjb21tZW50czogbmV3Q29tbWVudHNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZVJlcGx5IChpZCwgY29tbWVudElkKSB7XG4gICAgY29uc3QgY29tbWVudCA9IHRoaXMuc3RhdGUuZGF0YS5jb21tZW50cy5maW5kKGMgPT4gYy5faWQgPT09IGNvbW1lbnRJZClcbiAgICBjb25zdCBuZXdSZXBsaWVzID0gY29tbWVudC5yZXBsaWVzLm1hcChyID0+IHtcbiAgICAgIGlmIChyLl9pZCA9PT0gaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHIsIHtcbiAgICAgICAgICBpc0RlbGV0ZWQ6ICFyLmlzRGVsZXRlZFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCB7XG4gICAgICAgIGNvbW1lbnRzOiB0aGlzLnN0YXRlLmRhdGEuY29tbWVudHMubWFwKGMgPT4ge1xuICAgICAgICAgIGlmIChjLl9pZCA9PT0gY29tbWVudElkKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYywge1xuICAgICAgICAgICAgICByZXBsaWVzOiBuZXdSZXBsaWVzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gY1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3BhcmFtczoge2lzVXBkYXRpbmd9LCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAnJ1xuICAgIGlmICh0aGlzLnN0YXRlLmlzRGlydHkpIHtcbiAgICAgIGFjdGlvbnMgPSAoXG4gICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIHRvPXtgL3NlY3Rpb25zLyR7cGFyYW1zLnNlY3Rpb25JZH1gfT5EaXNjYXJkIENoYW5nZXM8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFsbCBTYXZlZDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgdG89e2Avc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfWB9PkNsb3NlPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgZm9ybVRpdGxlID0gJydcbiAgICBzd2l0Y2ggKHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSkge1xuICAgICAgY2FzZSAnYXJ0aWNsZSc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEFydGljbGUnXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdibG9ncG9zdCc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEJsb2dwb3N0J1xuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnaGVhZGluZyc6XG4gICAgICAgIGZvcm1UaXRsZSA9ICdFZGl0IEhlYWRpbmcnXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjb25zb2xlLmVycm9yKGB1bmV4cGVjdGVkIGFydGljbGUgdHlwZSAke3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZX1gKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+XG4gICAgICAgICAge2Zvcm1UaXRsZX1cbiAgICAgICAgPC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgIT09ICdoZWFkaW5nJ1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudXJsfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8Q2hlY2tib3ggbGFiZWw9XCJQdWJsaXNoZWQ6XCJcbiAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmlzUHVibGlzaGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc1B1Ymxpc2hlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2FydGljbGUnXG4gICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkZlYXR1cmVkOlwiXG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNGcmVxdWVudH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0ZyZXF1ZW50JywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgPT09ICdibG9ncG9zdCdcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmV2aWV3OlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdzbmlwcGV0JywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuYXJ0aWNsZVR5cGUgIT09ICdoZWFkaW5nJ1xuICAgICAgICAgICAgPyAoXG4gICAgICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRlbnQ6XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPENvbW1lbnRzIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuY29tbWVudHN9IG9uRGVsZXRlQ29tbWVudD17dGhpcy5kZWxldGVDb21tZW50fSBvbkRlbGV0ZVJlcGx5PXt0aGlzLmRlbGV0ZVJlcGx5fSAvPlxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgYXJ0aWNsZTogc3RhdGUuYXJ0aWNsZXMuaXRlbXMuZmluZChhID0+IGEuZGF0YS5faWQgPT09IHBhcmFtcy5hcnRpY2xlSWQpXG4gICAgfVxuICB9LFxuICAoZGlzcGF0Y2gsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtc30gPSBvd25Qcm9wc1xuICAgIGNvbnN0IGJhY2tsaW5rID0gYC9zZWN0aW9ucy8ke3BhcmFtcy5zZWN0aW9uSWR9YFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZUFydGljbGU6IChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVBcnRpY2xlKGlkLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlQXJ0aWNsZTogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUFydGljbGUoaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdEFydGljbGVGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdEFydGljbGVGb3JtL0VkaXRBcnRpY2xlRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtmZXRjaFNlYXJjaEluZGV4LCB1cGRhdGVTZWFyY2hJbmRleH0gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEluZGV4LmNzcydcblxuY2xhc3MgU2VhcmNoSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCB7dXBkYXRlSW5kZXh9ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlSW5kZXgoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hJbmRleH0gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaEluZGV4KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmcsIGlzVXBkYXRpbmcsIGxhc3RVcGRhdGVkT24sIGxhc3RVcGRhdGVkQnl9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaEluZGV4fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT5TZWFyY2ggSW5kZXg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoSW5kZXhfX2JvZHl9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgTGFzdCB1cGRhdGVkIG9uIDxUaW1lIHZhbHVlPXtsYXN0VXBkYXRlZE9ufSBmb3JtYXQ9XCJoOm1tIEEgb24gTU1NIERvXCIgLz4gYnkge2xhc3RVcGRhdGVkQnl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGV9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5zZWFyY2hJbmRleC5pc0ZldGNoaW5nLFxuICAgICAgaXNVcGRhdGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNVcGRhdGluZyxcbiAgICAgIGxhc3RVcGRhdGVkT246IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sXG4gICAgICBsYXN0VXBkYXRlZEJ5OiBzdGF0ZS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoSW5kZXg6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hJbmRleCgpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZUluZGV4OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlYXJjaEluZGV4KCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaEluZGV4KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9JTkRFWCA9ICdSRVFVRVNUX0lOREVYJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfSU5ERVggPSAnUkVDRUlWRV9JTkRFWCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX0lOREVYID0gJ1JFUVVFU1RfVVBEQVRFX0lOREVYJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX0lOREVYID0gJ0NPTkZJUk1fVVBEQVRFX0lOREVYJ1xuXG5jb25zdCByZXF1ZXN0U2VhcmNoSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9JTkRFWFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWFyY2hJbmRleCA9IChcbiAgbGFzdFVwZGF0ZWRPbixcbiAgbGFzdFVwZGF0ZWRCeVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9JTkRFWCxcbiAgICBsYXN0VXBkYXRlZE9uLFxuICAgIGxhc3RVcGRhdGVkQnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VhcmNoSW5kZXgoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VhcmNoSW5kZXhgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaEluZGV4KGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLCBqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX0lOREVYXG4gIH1cbn1cblxuY29uc3QgY29uZmlybVVwZGF0ZSA9IChcbiAgbGFzdFVwZGF0ZWRPbixcbiAgbGFzdFVwZGF0ZWRCeVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfSU5ERVgsXG4gICAgbGFzdFVwZGF0ZWRPbixcbiAgICBsYXN0VXBkYXRlZEJ5XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlYXJjaEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VhcmNoSW5kZXhgLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoanNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sIGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5KSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlYXJjaCBpbmRleCB1cGRhdGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hJbmRleEFjdGlvbnMuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hJbmRleFwiOlwiU2VhcmNoSW5kZXhfX1NlYXJjaEluZGV4X19fUGtEWWJcIixcIlNlYXJjaEluZGV4X19ib2R5XCI6XCJTZWFyY2hJbmRleF9fU2VhcmNoSW5kZXhfX2JvZHlfX18zUmZfS1wiLFwiSGVhZGluZ1wiOlwiU2VhcmNoSW5kZXhfX0hlYWRpbmdfX18xcUZHN1wiLFwiTmFtZVwiOlwiU2VhcmNoSW5kZXhfX05hbWVfX184SlU0SFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gODA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua01pZGRsZXdhcmVdXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3N0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGZsYXNoIGZyb20gJy4vZmxhc2hSZWR1Y2VyJ1xuaW1wb3J0IHF1ZXN0aW9ucyBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi9hcnRpY2xlUmVkdWNlcidcbmltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzUmVkdWNlcidcbmltcG9ydCBzZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zUmVkdWNlcidcbmltcG9ydCBzZWFyY2hJbmRleCBmcm9tICcuL3NlYXJjaEluZGV4UmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb25zLFxuICBhcnRpY2xlcyxcbiAgdXNlcnMsXG4gIHNlY3Rpb25zLFxuICBzZWFyY2hJbmRleFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9yb290UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BVVRILCBMT0dJTiwgTE9HT1VUfSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXV0aCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXV0aCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BVVRIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hdXRoLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBMT0dJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgICAgfVxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhSZWR1Y2VyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgdXNlcjogbnVsbFxuICB9LFxuICBmbGFzaDoge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0aW1lb3V0SWQ6IG51bGxcbiAgfSxcbiAgcXVlc3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgcXVlc3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fVxuICB9LFxuICBhcnRpY2xlczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld0FydGljbGU6IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICBhcnRpY2xlOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWN0aW9uczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld1NlY3Rpb246IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICB1c2Vyczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld1VzZXI6IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICB1c2VyOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWFyY2hJbmRleDoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWRPbjogbnVsbCxcbiAgICBsYXN0VXBkYXRlZEJ5OiBudWxsXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OUywgUkVDRUlWRV9RVUVTVElPTlMsXG4gIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLCBSRUNFSVZFX1FVRVNUSU9OX1VQREFURSxcbiAgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04sIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLCBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OfSBmcm9tICcuL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBxdWVzdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUucXVlc3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRRdWVzdGlvbixcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcXVlc3Rpb25zID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHF1ZXN0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OX1VQREFURTpcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT046XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTLFxuICBSRVFVRVNUX1VQREFURV9BUlRJQ0xFLCBDT05GSVJNX1VQREFURV9BUlRJQ0xFLCBSRUpFQ1RfVVBEQVRFX0FSVElDTEUsXG4gIFJFUVVFU1RfQ1JFQVRFX0FSVElDTEUsIENPTkZJUk1fQ1JFQVRFX0FSVElDTEUsIFJFSkVDVF9DUkVBVEVfQVJUSUNMRSxcbiAgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSwgQ09ORklSTV9ERUxFVEVfQVJUSUNMRSwgUkVKRUNUX0RFTEVURV9BUlRJQ0xFfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXJ0aWNsZXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGVzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IGFydGljbGUodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9BUlRJQ0xFOlxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IGFydGljbGUoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld0FydGljbGU6IG5ld0FydGljbGUoc3RhdGUubmV3QXJ0aWNsZSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3QXJ0aWNsZTogbmV3QXJ0aWNsZShzdGF0ZS5uZXdBcnRpY2xlLCBhY3Rpb24pLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIGFydGljbGUobnVsbCwgYWN0aW9uKSxcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLl9pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYXJ0aWNsZSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXJ0aWNsZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLml0ZW0sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBuZXdBcnRpY2xlID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hcnRpY2xlcy5uZXdBcnRpY2xlKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1VTRVJTLCBSRUNFSVZFX1VTRVJTLFxuICBSRVFVRVNUX1VQREFURV9VU0VSLCBDT05GSVJNX1VQREFURV9VU0VSLCBSRUpFQ1RfVVBEQVRFX1VTRVIsXG4gIFJFUVVFU1RfQ1JFQVRFX1VTRVIsIENPTkZJUk1fQ1JFQVRFX1VTRVIsIFJFSkVDVF9DUkVBVEVfVVNFUixcbiAgUkVRVUVTVF9ERUxFVEVfVVNFUiwgQ09ORklSTV9ERUxFVEVfVVNFUiwgUkVKRUNUX0RFTEVURV9VU0VSfSBmcm9tICcuL3VzZXJzQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHVzZXIgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXIsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi51cGRhdGVkSXRlbSxcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1VzZXIgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgdXNlcnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXJzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1VTRVJTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1VTRVJTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHVzZXIodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1VTRVI6XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IHVzZXIoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9VU0VSOlxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld1VzZXI6IG5ld1VzZXIoc3RhdGUubmV3VXNlciwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3VXNlcjogaW5pdGlhbFN0YXRlLnVzZXJzLm5ld1VzZXIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgdXNlcihudWxsLCBhY3Rpb24pLFxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0RFTEVURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2Vyc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TRUNUSU9OUywgUkVDRUlWRV9TRUNUSU9OUyxcbiAgUkVRVUVTVF9VUERBVEVfU0VDVElPTiwgQ09ORklSTV9VUERBVEVfU0VDVElPTiwgUkVKRUNUX1VQREFURV9TRUNUSU9OLFxuICBSRVFVRVNUX0NSRUFURV9TRUNUSU9OLCBDT05GSVJNX0NSRUFURV9TRUNUSU9OLCBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04sXG4gIFJFUVVFU1RfREVMRVRFX1NFQ1RJT04sIENPTkZJUk1fREVMRVRFX1NFQ1RJT04sIFJFSkVDVF9ERUxFVEVfU0VDVElPTn0gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWN0aW9ucyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VjdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gc2VjdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1NFQ1RJT046XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gc2VjdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3U2VjdGlvbjogbmV3U2VjdGlvbihzdGF0ZS5uZXdTZWN0aW9uLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdTZWN0aW9uOiBuZXdTZWN0aW9uKHN0YXRlLm5ld1NlY3Rpb24sIGFjdGlvbiksXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXMsXG4gICAgICAgICAgc2VjdGlvbih1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHNlY3Rpb24gPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlY3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfU0VDVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1NlY3Rpb24gPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLnNlY3Rpb25zLm5ld1NlY3Rpb24pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0lOREVYLCBSRUNFSVZFX0lOREVYLFxuICBSRVFVRVNUX1VQREFURV9JTkRFWCwgQ09ORklSTV9VUERBVEVfSU5ERVh9IGZyb20gJy4vc2VhcmNoSW5kZXhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2VhcmNoSW5kZXggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlYXJjaEluZGV4LFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0VXBkYXRlZE9uOiBhY3Rpb24ubGFzdFVwZGF0ZWRPbixcbiAgICAgICAgbGFzdFVwZGF0ZWRCeTogYWN0aW9uLmxhc3RVcGRhdGVkQnlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IGFjdGlvbi5sYXN0VXBkYXRlZE9uLFxuICAgICAgICBsYXN0VXBkYXRlZEJ5OiBhY3Rpb24ubGFzdFVwZGF0ZWRCeVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoSW5kZXhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hJbmRleFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2ZldGNoU2VjdGlvbnN9IGZyb20gJy4uLy4uL3N0b3JlL3NlY3Rpb25zQWN0aW9ucydcbmltcG9ydCB7ZmV0Y2hBcnRpY2xlc30gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuXG5jbGFzcyBTZWN0aW9ucyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCAoKSB7XG4gICAgY29uc3Qge2ZldGNoU2VjdGlvbnMsIGZldGNoQXJ0aWNsZXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgZmV0Y2hTZWN0aW9ucygpXG4gICAgZmV0Y2hBcnRpY2xlcygpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0ZldGNoaW5nLCBjaGlsZHJlbn0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjaGlsZHJlblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLnNlY3Rpb25zLmlzRmV0Y2hpbmcgfHwgc3RhdGUuYXJ0aWNsZXMuaXNGZXRjaGluZ1xuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBmZXRjaFNlY3Rpb25zOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoU2VjdGlvbnMoKSlcbiAgICAgIH0sXG4gICAgICBmZXRjaEFydGljbGVzOiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGZldGNoQXJ0aWNsZXMoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoU2VjdGlvbnMpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9ucy9TZWN0aW9ucy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBDb21tZW50IGZyb20gJy4uL0NvbW1lbnQnXG5pbXBvcnQge0Jsb2NrfSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBDb21tZW50cyA9ICh7XG4gIGl0ZW1zLFxuICBvbkRlbGV0ZUNvbW1lbnQsXG4gIG9uRGVsZXRlUmVwbHlcbn0pID0+IHtcbiAgY29uc3Qgc29ydGVkQ29tbWVudHMgPSBpdGVtcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuY3JlYXRlZEF0ID4gYi5jcmVhdGVkQXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgY29tbWVudHMgPSBzb3J0ZWRDb21tZW50cy5tYXAoaSA9PlxuICAgIDxDb21tZW50IGtleT17aS5faWR9IGl0ZW09e2l9IG9uRGVsZXRlQ29tbWVudD17b25EZWxldGVDb21tZW50fSBvbkRlbGV0ZVJlcGx5PXtvbkRlbGV0ZVJlcGx5fSAvPlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge2NvbW1lbnRzfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50cy9Db21tZW50cy5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tbWVudC5jc3MnXG5pbXBvcnQge0Jsb2NrLCBGbGV4LCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuY29uc3QgUmVwbHkgPSAoe1xuICBpdGVtLFxuICBvbkRlbGV0ZVJlcGx5LFxuICBjb21tZW50SWQsXG4gIGNvbW1lbnRJc0RlbGV0ZWRcbn0pID0+IHtcbiAgbGV0IGFjdGlvbnMgPSAnJ1xuICBpZiAoaXRlbS5pc0RlbGV0ZWQpIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlJlcGx5X19kZWxldGVJbmZvfT5cbiAgICAgICAgICAgIHJlcGx5IHdpbGwgYmUgZGVsZXRlZCBvbiBzYXZlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICBkaXNhYmxlZD17Y29tbWVudElzRGVsZXRlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlUmVwbHkoaXRlbS5faWQsIGNvbW1lbnRJZCl9PlB1dCBiYWNrPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgIGludmVyc2VcbiAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgIGRpc2FibGVkPXtjb21tZW50SXNEZWxldGVkfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZVJlcGx5KGl0ZW0uX2lkLCBjb21tZW50SWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuUmVwbHl9ICR7aXRlbS5pc0RlbGV0ZWQgPyBzdHlsZXMuUmVwbHlfZGVsZXRlZCA6ICcnfWB9PlxuICAgICAgPEJsb2NrIG49ezAuNX0+XG4gICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUmVwbHlfX2luZm99PlBvc3RlZCBieSB7aXRlbS5sYXN0TW9kaWZpZWRCeX0gb24gPFRpbWUgdmFsdWU9e2l0ZW0uY3JlYXRlZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPjwvZGl2PlxuXG4gICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvQmxvY2s+XG5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUmVwbHlfX2JvZHl9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpdGVtLmNvbnRlbnR9fSAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IENvbW1lbnQgPSAoe1xuICBpdGVtLFxuICBvbkRlbGV0ZUNvbW1lbnQsXG4gIG9uRGVsZXRlUmVwbHlcbn0pID0+IHtcbiAgY29uc3Qgc29ydGVkUmVwbGllcyA9IGl0ZW0ucmVwbGllcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgaWYgKGEuY3JlYXRlZEF0ID4gYi5jcmVhdGVkQXQpIHtcbiAgICAgIHJldHVybiAtMVxuICAgIH0gZWxzZSBpZiAoYS5jcmVhdGVkQXQgPCBiLmNyZWF0ZWRBdCkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVwbGllcyA9IHNvcnRlZFJlcGxpZXMubWFwKHIgPT5cbiAgICA8UmVwbHkga2V5PXtyLl9pZH0gY29tbWVudElkPXtpdGVtLl9pZH0gaXRlbT17cn0gb25EZWxldGVSZXBseT17b25EZWxldGVSZXBseX0gY29tbWVudElzRGVsZXRlZD17aXRlbS5pc0RlbGV0ZWR9IC8+XG4gIClcblxuICBsZXQgYWN0aW9ucyA9ICcnXG4gIGlmIChpdGVtLmlzRGVsZXRlZCkge1xuICAgIGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fZGVsZXRlSW5mb30+XG4gICAgICAgICAgICBjb21tZW50IHdpbGwgYmUgZGVsZXRlZCBvbiBzYXZlXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUNvbW1lbnQoaXRlbS5faWQpfT5QdXQgYmFjazwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICBhY3Rpb25zID0gKFxuICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICBpbnZlcnNlXG4gICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZUNvbW1lbnQoaXRlbS5faWQpfT5EZWxldGU8L0J1dHRvbj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQ29tbWVudH0gJHtpdGVtLmlzRGVsZXRlZCA/IHN0eWxlcy5Db21tZW50X2RlbGV0ZWQgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tbWVudF9fY29tbWVudH0+XG4gICAgICAgIDxCbG9jayBuPXswLjV9PlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19pbmZvfT5Qb3N0ZWQgYnkge2l0ZW0ubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtpdGVtLmNyZWF0ZWRBdH0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz48L2Rpdj5cblxuICAgICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19ib2R5fVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGl0ZW0uY29udGVudH19IC8+XG4gICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21tZW50X19yZXBsaWVzfT5cbiAgICAgICAgICB7cmVwbGllc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Db21tZW50L0NvbW1lbnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fX0NMUzJ3XCIsXCJDb21tZW50X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19Db21tZW50X19kZWxldGVJbmZvX19fMXhRV0VcIixcIkNvbW1lbnRfX2luZm9cIjpcIkNvbW1lbnRfX0NvbW1lbnRfX2luZm9fX18xcm9vbFwiLFwiQ29tbWVudF9fY29tbWVudFwiOlwiQ29tbWVudF9fQ29tbWVudF9fY29tbWVudF9fX1BRVDY3XCIsXCJDb21tZW50X19ib2R5XCI6XCJDb21tZW50X19Db21tZW50X19ib2R5X19fMVM1RjZcIixcIkNvbW1lbnRfX3JlcGxpZXNcIjpcIkNvbW1lbnRfX0NvbW1lbnRfX3JlcGxpZXNfX19QWExYUlwiLFwiQ29tbWVudF9kZWxldGVkXCI6XCJDb21tZW50X19Db21tZW50X2RlbGV0ZWRfX18ybmtZWFwiLFwiUmVwbHlcIjpcIkNvbW1lbnRfX1JlcGx5X19fMUo1Sk9cIixcIlJlcGx5X19kZWxldGVJbmZvXCI6XCJDb21tZW50X19SZXBseV9fZGVsZXRlSW5mb19fXzJPQWJYXCIsXCJSZXBseV9faW5mb1wiOlwiQ29tbWVudF9fUmVwbHlfX2luZm9fX18zMGpJMlwiLFwiUmVwbHlfX2JvZHlcIjpcIkNvbW1lbnRfX1JlcGx5X19ib2R5X19fMXFocG5cIixcIlJlcGx5X2RlbGV0ZWRcIjpcIkNvbW1lbnRfX1JlcGx5X2RlbGV0ZWRfX18xa09WUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ29tbWVudC9Db21tZW50LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUkE7QUFjQTtBQTFCQTtBQURBO0FBREE7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7O0FBekNBO0FBQ0E7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7Ozs7Ozs7O0FDNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFkQTtBQWlCQTs7OztBQXRDQTtBQUNBO0FBd0NBOzs7Ozs7O0FDN0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQWNBOzs7O0FBekJBO0FBQ0E7QUEyQkE7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBeENBO0FBREE7QUFnREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkRBO0FBSEE7QUEwREE7Ozs7QUFyR0E7QUFDQTtBQXVHQTs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQUhBO0FBTkE7QUFxQkE7Ozs7QUFwQ0E7QUFDQTtBQXNDQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFhQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBNUJBO0FBREE7QUFxQ0E7Ozs7QUFoR0E7QUFDQTtBQWtHQTtBQUVBO0FBQ0E7QUFEQTtBQUdBOzs7Ozs7Ozs7Ozs7OztBQy9HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFOQTtBQVdBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFOQTtBQVVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQVhBO0FBY0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBWEE7QUFEQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7O0FDckRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFUQTtBQURBO0FBY0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBbEJBO0FBREE7QUF1QkE7QUFDQTs7OztBQXRDQTtBQUNBO0FBd0NBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUFBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0xBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQXJCQTtBQTRCQTtBQUNBOzs7O0FBckRBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBQ0E7QUFXQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFaQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTEE7QUFIQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBb0JBO0FBdEJBO0FBeUJBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQTNCQTtBQXNDQTs7OztBQXBHQTtBQUNBO0FBc0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7O0FDdElBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBaUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQXRCQTtBQTJCQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBdENBO0FBREE7QUEyQ0E7QUFDQTs7OztBQTNEQTtBQUNBO0FBNkRBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUN0RkE7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzVSQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFMQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBWEE7QUFtQkE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQXRDQTtBQTJDQTtBQUNBOzs7O0FBakVBO0FBQ0E7QUFtRUE7Ozs7Ozs7QUM3RUE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQVJBO0FBZUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQUxBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQW5DQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUF2Q0E7QUFrREE7Ozs7QUE1S0E7QUFDQTtBQThLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7OztBQzNNQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFSQTtBQU5BO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQW5DQTtBQXNDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBdkNBO0FBeURBOzs7O0FBNUdBO0FBQ0E7QUE4R0E7QUFFQTtBQUNBO0FBREE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7OztBQ3RJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTEE7QUFXQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQVRBO0FBc0JBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBREE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVkE7QUFEQTtBQWNBO0FBdENBO0FBQ0E7QUFEQTtBQXVDQTtBQUNBO0FBM0VBO0FBREE7QUFnRkE7Ozs7QUExSEE7QUFDQTtBQTRIQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7QUNqS0E7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxU0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBakJBO0FBRkE7QUEwQkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxRkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDM0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqQ0E7QUFDQTtBQW1DQTtBQUdBO0FBQ0E7Ozs7Ozs7O0FDakRBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQUNBO0FBQ0E7QUF0Q0E7QUF5Q0E7Ozs7QUFsRkE7QUFDQTtBQW9GQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ2RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBUEE7QUFOQTtBQWVBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQXJCQTtBQXdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBM0JBO0FBNkNBOzs7O0FBaElBO0FBQ0E7QUFrSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQzNKQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUM1Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQVBBO0FBWUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBYkE7QUFnQkE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUFuQkE7QUFnQ0E7Ozs7QUFwSUE7QUFDQTtBQXNJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7O0FDcktBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFMQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBOzs7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVRBO0FBa0JBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFZQTtBQUNBO0FBQ0E7QUF6REE7QUFEQTtBQThEQTs7OztBQXZIQTtBQUNBO0FBeUhBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7Ozs7Ozs7Ozs7OztBQ2pLQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFGQTtBQTNCQTtBQUhBO0FBdUNBO0FBQ0E7Ozs7Ozs7O0FDekZBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBMkJBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTtBQUNBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBVUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQU5BO0FBWUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQTlEQTtBQW9FQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFSQTtBQURBO0FBdkVBO0FBeUZBOzs7O0FBdEtBO0FBQ0E7QUF3S0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7OztBQ25NQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqVEE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBVEE7QUFjQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFGQTtBQWNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQVJBO0FBZUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUxBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFVQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQXJFQTtBQXdFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQTdFQTtBQTBGQTs7OztBQWhRQTtBQUNBO0FBa1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7OztBQ2hTQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUxBO0FBTEE7QUFlQTtBQUNBOzs7O0FBMUNBO0FBQ0E7QUE0Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzVHQTtBQUNBOzs7Ozs7O0FDREE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFDQTtBQVNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBNURBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBZ0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBekJBO0FBMkJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRkE7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBdkNBO0FBeUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJEQTtBQXVEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdElBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBWEE7QUFhQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcElBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUNBO0FBZ0RBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBdEJBO0FBd0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQWhCQTtBQUNBO0FBa0JBO0FBRUE7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQUFBO0FBREE7QUFQQTtBQWdCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVhBO0FBY0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBREE7QUFQQTtBQWVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSEE7QUFEQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWZBO0FBREE7QUFzQkE7QUFDQTs7Ozs7Ozs7QUNqSUE7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=