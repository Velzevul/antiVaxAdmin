webpackJsonp([0,2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _App = __webpack_require__(467);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(601);

	var _store = __webpack_require__(602);

	var _store2 = _interopRequireDefault(_store);

	var _reactRedux = __webpack_require__(468);

	var _reactRouter = __webpack_require__(508);

	var _QuestionsSection = __webpack_require__(613);

	var _QuestionsSection2 = _interopRequireDefault(_QuestionsSection);

	var _QuestionsInboxDirectory = __webpack_require__(616);

	var _QuestionsInboxDirectory2 = _interopRequireDefault(_QuestionsInboxDirectory);

	var _QuestionsFrequentDirectory = __webpack_require__(729);

	var _QuestionsFrequentDirectory2 = _interopRequireDefault(_QuestionsFrequentDirectory);

	var _QuestionsFrequentItem = __webpack_require__(732);

	var _QuestionsFrequentItem2 = _interopRequireDefault(_QuestionsFrequentItem);

	var _TrashSection = __webpack_require__(733);

	var _TrashSection2 = _interopRequireDefault(_TrashSection);

	var _TrashQuestionsDirectory = __webpack_require__(734);

	var _TrashQuestionsDirectory2 = _interopRequireDefault(_TrashQuestionsDirectory);

	var _TrashFrequentDirectory = __webpack_require__(737);

	var _TrashFrequentDirectory2 = _interopRequireDefault(_TrashFrequentDirectory);

	var _Dummy = __webpack_require__(740);

	var _Dummy2 = _interopRequireDefault(_Dummy);

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
	      { path: ("") + '/', component: _App2.default },
	      _react2.default.createElement(_reactRouter.IndexRedirect, { to: ("") + '/questions' }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'questions', component: _QuestionsSection2.default },
	        _react2.default.createElement(_reactRouter.IndexRedirect, { to: ("") + '/questions/inbox' }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'inbox', component: _QuestionsInboxDirectory2.default }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: 'frequent', component: _QuestionsFrequentDirectory2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: ':itemId', component: _QuestionsFrequentItem2.default })
	        )
	      ),
	      _react2.default.createElement(_reactRouter.Route, { path: 'blog', component: _Dummy2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'content', component: _Dummy2.default }),
	      _react2.default.createElement(_reactRouter.Route, { path: 'users', component: _Dummy2.default }),
	      _react2.default.createElement(
	        _reactRouter.Route,
	        { path: 'trash', components: _TrashSection2.default },
	        _react2.default.createElement(_reactRouter.IndexRedirect, { to: ("") + '/trash/questions' }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'questions', component: _TrashQuestionsDirectory2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'frequent', component: _TrashFrequentDirectory2.default })
	      )
	    )
	  )
		), document.getElementById('app'));

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _App = __webpack_require__(490);

	var _App2 = _interopRequireDefault(_App);

	var _Login = __webpack_require__(491);

	var _Login2 = _interopRequireDefault(_Login);

	var _FlashMessage = __webpack_require__(595);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Nav = __webpack_require__(596);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _CurrentUser = __webpack_require__(598);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	var _Layouts = __webpack_require__(492);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var App = function App(_ref) {
	  var user = _ref.user;
	  var children = _ref.children;

	  if (user) {
	    var navItems = [{
	      id: 'questions',
	      label: 'Questions'
	    }, {
	      id: 'blog',
	      label: 'Blog'
	    }, {
	      id: 'content',
	      label: 'Content'
	    }, {
	      id: 'users',
	      label: 'Users'
	    }, {
	      id: 'trash',
	      label: 'Trash'
	    }];

	    return _react2.default.createElement(
	      'div',
	      { className: _App2.default.App },
	      _react2.default.createElement(
	        'div',
	        { className: _App2.default.App__sidebar },
	        _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            { n: 2 },
	            _react2.default.createElement(
	              'h1',
	              { className: _App2.default.App__title },
	              'Antivax admin'
	            )
	          ),
	          _react2.default.createElement(_Nav2.default, { items: navItems })
	        ),
	        _react2.default.createElement(_CurrentUser2.default, null)
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
	};

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.auth.user
	  };
		})(App);

/***/ },

/***/ 490:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI","App__title":"App__App__title___1I0Bh","App__sidebar":"App__App__sidebar___VThbe"};

/***/ },

/***/ 491:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _authActions = __webpack_require__(593);

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
	        dispatch((0, _authActions.authenticate)(this.state.email, this.state.password));
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


	      var inputStyle = {
	        width: '20rem'
	      };

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
	              { n: 0.5 },
	              _react2.default.createElement(
	                _Layouts.ListItem,
	                { n: 0.5 },
	                _react2.default.createElement(_UI.TextInput, { style: inputStyle,
	                  value: this.state.email,
	                  label: 'email',
	                  placeholder: 'e.g. casey@gmail.com',
	                  error: this.state.emailError,
	                  onChange: this.changeEmail })
	              ),
	              _react2.default.createElement(
	                _Layouts.ListItem,
	                { n: 0.5 },
	                _react2.default.createElement(_UI.TextInput, { style: inputStyle,
	                  value: this.state.password,
	                  label: 'password',
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
	              { disabled: isFetching, theme: 'primary', label: 'Login' },
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

/***/ 492:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(493);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(494);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Wrap = __webpack_require__(495);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _Grid = __webpack_require__(496);

	var _List = __webpack_require__(497);

	var _ListInline = __webpack_require__(499);

	var _Media = __webpack_require__(501);

	var _Page = __webpack_require__(503);

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

/***/ 493:
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

/***/ 494:
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

/***/ 495:
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

/***/ 496:
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
	    width: '100%',
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
	    marginLeft: baseline * gutter / 2 + 'rem',
	    marginRight: baseline * gutter / 2 + 'rem',
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

/***/ 497:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(498);

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

/***/ 498:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 499:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(500);

	var _ListInline2 = _interopRequireDefault(_ListInline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var ListInline = function ListInline(_ref) {
	  var _ref$n = _ref.n;
	  var n = _ref$n === undefined ? 1 : _ref$n;
	  var _ref$extraClassNames = _ref.extraClassNames;
	  var extraClassNames = _ref$extraClassNames === undefined ? '' : _ref$extraClassNames;
	  var children = _ref.children;

	  var style = {
	    marginBottom: '-' + baseline * n + 'rem',
	    marginLeft: '-' + baseline * n + 'rem'
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

/***/ 500:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 501:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(502);

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

/***/ 502:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 503:
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

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Editor = exports.Checkbox = exports.Input = exports.ModalWindowFooter = exports.ModalWindowBody = exports.ModalWindowHeader = exports.ModalWindow = exports.Badge = exports.Alert = exports.TextArea = exports.TextInput = exports.Button = exports.Spinner = undefined;

	var _Spinner = __webpack_require__(505);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Button = __webpack_require__(507);

	var _Button2 = _interopRequireDefault(_Button);

	var _Badge = __webpack_require__(569);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _TextInput = __webpack_require__(571);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	var _TextArea = __webpack_require__(575);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	var _Alert = __webpack_require__(577);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Input = __webpack_require__(586);

	var _Input2 = _interopRequireDefault(_Input);

	var _Checkbox = __webpack_require__(588);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Editor = __webpack_require__(590);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _ModalWindow = __webpack_require__(591);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Spinner = _Spinner2.default;
	exports.Button = _Button2.default;
	exports.TextInput = _TextInput2.default;
	exports.TextArea = _TextArea2.default;
	exports.Alert = _Alert2.default;
	exports.Badge = _Badge2.default;
	exports.ModalWindow = _ModalWindow.ModalWindow;
	exports.ModalWindowHeader = _ModalWindow.ModalWindowHeader;
	exports.ModalWindowBody = _ModalWindow.ModalWindowBody;
	exports.ModalWindowFooter = _ModalWindow.ModalWindowFooter;
	exports.Input = _Input2.default;
	exports.Checkbox = _Checkbox2.default;
		exports.Editor = _Editor2.default;

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(506);

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

/***/ 506:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(508);

	var _Button = __webpack_require__(568);

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
	    padding: baseline * 0.75 + 'rem ' + baseline * 1.5 + 'rem',
	    lineHeight: 1.5 * baseline + 'rem',
	    fontSize: 1.083 * baseline + 'rem'
	  };

	  if (small) {
	    style = {
	      padding: baseline * 0.5 + 'rem ' + baseline * 1 + 'rem',
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

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.createMemoryHistory = exports.hashHistory = exports.browserHistory = exports.applyRouterMiddleware = exports.formatPattern = exports.useRouterHistory = exports.match = exports.routerShape = exports.locationShape = exports.PropTypes = exports.RoutingContext = exports.RouterContext = exports.createRoutes = exports.useRoutes = exports.RouteContext = exports.Lifecycle = exports.History = exports.Route = exports.Redirect = exports.IndexRoute = exports.IndexRedirect = exports.withRouter = exports.IndexLink = exports.Link = exports.Router = undefined;

	var _RouteUtils = __webpack_require__(509);

	Object.defineProperty(exports, 'createRoutes', {
	  enumerable: true,
	  get: function get() {
	    return _RouteUtils.createRoutes;
	  }
	});

	var _PropTypes2 = __webpack_require__(510);

	Object.defineProperty(exports, 'locationShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.locationShape;
	  }
	});
	Object.defineProperty(exports, 'routerShape', {
	  enumerable: true,
	  get: function get() {
	    return _PropTypes2.routerShape;
	  }
	});

	var _PatternUtils = __webpack_require__(515);

	Object.defineProperty(exports, 'formatPattern', {
	  enumerable: true,
	  get: function get() {
	    return _PatternUtils.formatPattern;
	  }
	});

	var _Router2 = __webpack_require__(516);

	var _Router3 = _interopRequireDefault(_Router2);

	var _Link2 = __webpack_require__(546);

	var _Link3 = _interopRequireDefault(_Link2);

	var _IndexLink2 = __webpack_require__(547);

	var _IndexLink3 = _interopRequireDefault(_IndexLink2);

	var _withRouter2 = __webpack_require__(548);

	var _withRouter3 = _interopRequireDefault(_withRouter2);

	var _IndexRedirect2 = __webpack_require__(549);

	var _IndexRedirect3 = _interopRequireDefault(_IndexRedirect2);

	var _IndexRoute2 = __webpack_require__(551);

	var _IndexRoute3 = _interopRequireDefault(_IndexRoute2);

	var _Redirect2 = __webpack_require__(550);

	var _Redirect3 = _interopRequireDefault(_Redirect2);

	var _Route2 = __webpack_require__(552);

	var _Route3 = _interopRequireDefault(_Route2);

	var _History2 = __webpack_require__(553);

	var _History3 = _interopRequireDefault(_History2);

	var _Lifecycle2 = __webpack_require__(554);

	var _Lifecycle3 = _interopRequireDefault(_Lifecycle2);

	var _RouteContext2 = __webpack_require__(555);

	var _RouteContext3 = _interopRequireDefault(_RouteContext2);

	var _useRoutes2 = __webpack_require__(556);

	var _useRoutes3 = _interopRequireDefault(_useRoutes2);

	var _RouterContext2 = __webpack_require__(543);

	var _RouterContext3 = _interopRequireDefault(_RouterContext2);

	var _RoutingContext2 = __webpack_require__(557);

	var _RoutingContext3 = _interopRequireDefault(_RoutingContext2);

	var _PropTypes3 = _interopRequireDefault(_PropTypes2);

	var _match2 = __webpack_require__(558);

	var _match3 = _interopRequireDefault(_match2);

	var _useRouterHistory2 = __webpack_require__(562);

	var _useRouterHistory3 = _interopRequireDefault(_useRouterHistory2);

	var _applyRouterMiddleware2 = __webpack_require__(563);

	var _applyRouterMiddleware3 = _interopRequireDefault(_applyRouterMiddleware2);

	var _browserHistory2 = __webpack_require__(564);

	var _browserHistory3 = _interopRequireDefault(_browserHistory2);

	var _hashHistory2 = __webpack_require__(567);

	var _hashHistory3 = _interopRequireDefault(_hashHistory2);

	var _createMemoryHistory2 = __webpack_require__(559);

	var _createMemoryHistory3 = _interopRequireDefault(_createMemoryHistory2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Router = _Router3.default; /* components */

	exports.Link = _Link3.default;
	exports.IndexLink = _IndexLink3.default;
	exports.withRouter = _withRouter3.default;

	/* components (configuration) */

	exports.IndexRedirect = _IndexRedirect3.default;
	exports.IndexRoute = _IndexRoute3.default;
	exports.Redirect = _Redirect3.default;
	exports.Route = _Route3.default;

	/* mixins */

	exports.History = _History3.default;
	exports.Lifecycle = _Lifecycle3.default;
	exports.RouteContext = _RouteContext3.default;

	/* utils */

	exports.useRoutes = _useRoutes3.default;
	exports.RouterContext = _RouterContext3.default;
	exports.RoutingContext = _RoutingContext3.default;
	exports.PropTypes = _PropTypes3.default;
	exports.match = _match3.default;
	exports.useRouterHistory = _useRouterHistory3.default;
	exports.applyRouterMiddleware = _applyRouterMiddleware3.default;

	/* histories */

	exports.browserHistory = _browserHistory3.default;
	exports.hashHistory = _hashHistory3.default;
	exports.createMemoryHistory = _createMemoryHistory3.default;

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.isReactChildren = isReactChildren;
	exports.createRouteFromReactElement = createRouteFromReactElement;
	exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
	exports.createRoutes = createRoutes;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isValidChild(object) {
	  return object == null || _react2.default.isValidElement(object);
	}

	function isReactChildren(object) {
	  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
	}

	function createRoute(defaultProps, props) {
	  return _extends({}, defaultProps, props);
	}

	function createRouteFromReactElement(element) {
	  var type = element.type;
	  var route = createRoute(type.defaultProps, element.props);

	  if (route.children) {
	    var childRoutes = createRoutesFromReactChildren(route.children, route);

	    if (childRoutes.length) route.childRoutes = childRoutes;

	    delete route.children;
	  }

	  return route;
	}

	/**
	 * Creates and returns a routes object from the given ReactChildren. JSX
	 * provides a convenient way to visualize how routes in the hierarchy are
	 * nested.
	 *
	 *   import { Route, createRoutesFromReactChildren } from 'react-router'
	 *
	 *   const routes = createRoutesFromReactChildren(
	 *     <Route component={App}>
	 *       <Route path="home" component={Dashboard}/>
	 *       <Route path="news" component={NewsFeed}/>
	 *     </Route>
	 *   )
	 *
	 * Note: This method is automatically used when you provide <Route> children
	 * to a <Router> component.
	 */
	function createRoutesFromReactChildren(children, parentRoute) {
	  var routes = [];

	  _react2.default.Children.forEach(children, function (element) {
	    if (_react2.default.isValidElement(element)) {
	      // Component classes may have a static create* method.
	      if (element.type.createRouteFromReactElement) {
	        var route = element.type.createRouteFromReactElement(element, parentRoute);

	        if (route) routes.push(route);
	      } else {
	        routes.push(createRouteFromReactElement(element));
	      }
	    }
	  });

	  return routes;
	}

	/**
	 * Creates and returns an array of routes from the given object which
	 * may be a JSX route, a plain object route, or an array of either.
	 */
	function createRoutes(routes) {
	  if (isReactChildren(routes)) {
	    routes = createRoutesFromReactChildren(routes);
	  } else if (routes && !Array.isArray(routes)) {
	    routes = [routes];
	  }

	  return routes;
	}

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.router = exports.routes = exports.route = exports.components = exports.component = exports.location = exports.history = exports.falsy = exports.locationShape = exports.routerShape = undefined;

	var _react = __webpack_require__(299);

	var _deprecateObjectProperties = __webpack_require__(511);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _InternalPropTypes = __webpack_require__(514);

	var InternalPropTypes = _interopRequireWildcard(_InternalPropTypes);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	var routerShape = exports.routerShape = shape({
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired,
	  setRouteLeaveHook: func.isRequired,
	  isActive: func.isRequired
	});

	var locationShape = exports.locationShape = shape({
	  pathname: string.isRequired,
	  search: string.isRequired,
	  state: object,
	  action: string.isRequired,
	  key: string
	});

	// Deprecated stuff below:

	var falsy = exports.falsy = InternalPropTypes.falsy;
	var history = exports.history = InternalPropTypes.history;
	var location = exports.location = locationShape;
	var component = exports.component = InternalPropTypes.component;
	var components = exports.components = InternalPropTypes.components;
	var route = exports.route = InternalPropTypes.route;
	var routes = exports.routes = InternalPropTypes.routes;
	var router = exports.router = routerShape;

	if (process.env.NODE_ENV !== 'production') {
	  (function () {
	    var deprecatePropType = function deprecatePropType(propType, message) {
	      return function () {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	        return propType.apply(undefined, arguments);
	      };
	    };

	    var deprecateInternalPropType = function deprecateInternalPropType(propType) {
	      return deprecatePropType(propType, 'This prop type is not intended for external use, and was previously exported by mistake. These internal prop types are deprecated for external use, and will be removed in a later version.');
	    };

	    var deprecateRenamedPropType = function deprecateRenamedPropType(propType, name) {
	      return deprecatePropType(propType, 'The `' + name + '` prop type is now exported as `' + name + 'Shape` to avoid name conflicts. This export is deprecated and will be removed in a later version.');
	    };

	    exports.falsy = falsy = deprecateInternalPropType(falsy);
	    exports.history = history = deprecateInternalPropType(history);
	    exports.component = component = deprecateInternalPropType(component);
	    exports.components = components = deprecateInternalPropType(components);
	    exports.route = route = deprecateInternalPropType(route);
	    exports.routes = routes = deprecateInternalPropType(routes);

	    exports.location = location = deprecateRenamedPropType(location, 'location');
	    exports.router = router = deprecateRenamedPropType(router, 'router');
	  })();
	}

	var defaultExport = {
	  falsy: falsy,
	  history: history,
	  location: location,
	  component: component,
	  components: components,
	  route: route,
	  // For some reason, routes was never here.
	  router: router
	};

	if (process.env.NODE_ENV !== 'production') {
	  defaultExport = (0, _deprecateObjectProperties2.default)(defaultExport, 'The default export from `react-router/lib/PropTypes` is deprecated. Please use the named exports instead.');
	}

	exports.default = defaultExport;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.canUseMembrane = undefined;

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseMembrane = exports.canUseMembrane = false;

	// No-op by default.
	var deprecateObjectProperties = function deprecateObjectProperties(object) {
	  return object;
	};

	if (process.env.NODE_ENV !== 'production') {
	  try {
	    if (Object.defineProperty({}, 'x', {
	      get: function get() {
	        return true;
	      }
	    }).x) {
	      exports.canUseMembrane = canUseMembrane = true;
	    }
	    /* eslint-disable no-empty */
	  } catch (e) {}
	  /* eslint-enable no-empty */

	  if (canUseMembrane) {
	    deprecateObjectProperties = function deprecateObjectProperties(object, message) {
	      // Wrap the deprecated object in a membrane to warn on property access.
	      var membrane = {};

	      var _loop = function _loop(prop) {
	        if (!Object.prototype.hasOwnProperty.call(object, prop)) {
	          return 'continue';
	        }

	        if (typeof object[prop] === 'function') {
	          // Can't use fat arrow here because of use of arguments below.
	          membrane[prop] = function () {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop].apply(object, arguments);
	          };
	          return 'continue';
	        }

	        // These properties are non-enumerable to prevent React dev tools from
	        // seeing them and causing spurious warnings when accessing them. In
	        // principle this could be done with a proxy, but support for the
	        // ownKeys trap on proxies is not universal, even among browsers that
	        // otherwise support proxies.
	        Object.defineProperty(membrane, prop, {
	          get: function get() {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, message) : void 0;
	            return object[prop];
	          }
	        });
	      };

	      for (var prop in object) {
	        var _ret = _loop(prop);

	        if (_ret === 'continue') continue;
	      }

	      return membrane;
	    };
	  }
	}

	exports.default = deprecateObjectProperties;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = routerWarning;
	exports._resetWarned = _resetWarned;

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var warned = {};

	function routerWarning(falseToWarn, message) {
	  // Only issue deprecation warnings once.
	  if (message.indexOf('deprecated') !== -1) {
	    if (warned[message]) {
	      return;
	    }

	    warned[message] = true;
	  }

	  message = '[react-router] ' + message;

	  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	    args[_key - 2] = arguments[_key];
	  }

	  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
	}

	function _resetWarned() {
	  warned = {};
	}

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = function() {};

	if (process.env.NODE_ENV !== 'production') {
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	        '`warning(condition, format, ...args)` requires a warning ' +
	        'message argument'
	      );
	    }

	    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
	      throw new Error(
	        'The warning format should be able to uniquely identify this ' +
	        'warning. Please, use a more descriptive format than: ' + format
	      );
	    }

	    if (!condition) {
	      var argIndex = 0;
	      var message = 'Warning: ' +
	        format.replace(/%s/g, function() {
	          return args[argIndex++];
	        });
	      if (typeof console !== 'undefined') {
	        console.error(message);
	      }
	      try {
	        // This error was thrown as a convenience so that you can use this stack
	        // to find the callsite that caused this warning to fire.
	        throw new Error(message);
	      } catch(x) {}
	    }
	  };
	}

	module.exports = warning;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
	exports.falsy = falsy;

	var _react = __webpack_require__(299);

	var func = _react.PropTypes.func;
	var object = _react.PropTypes.object;
	var arrayOf = _react.PropTypes.arrayOf;
	var oneOfType = _react.PropTypes.oneOfType;
	var element = _react.PropTypes.element;
	var shape = _react.PropTypes.shape;
	var string = _react.PropTypes.string;
	function falsy(props, propName, componentName) {
	  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
	}

	var history = exports.history = shape({
	  listen: func.isRequired,
	  push: func.isRequired,
	  replace: func.isRequired,
	  go: func.isRequired,
	  goBack: func.isRequired,
	  goForward: func.isRequired
	});

	var component = exports.component = oneOfType([func, string]);
	var components = exports.components = oneOfType([component, object]);
	var route = exports.route = oneOfType([object, element]);
	var routes = exports.routes = oneOfType([route, arrayOf(route)]);

/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.compilePattern = compilePattern;
	exports.matchPattern = matchPattern;
	exports.getParamNames = getParamNames;
	exports.getParams = getParams;
	exports.formatPattern = formatPattern;

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function escapeRegExp(string) {
	  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function _compilePattern(pattern) {
	  var regexpSource = '';
	  var paramNames = [];
	  var tokens = [];

	  var match = void 0,
	      lastIndex = 0,
	      matcher = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g;
	  while (match = matcher.exec(pattern)) {
	    if (match.index !== lastIndex) {
	      tokens.push(pattern.slice(lastIndex, match.index));
	      regexpSource += escapeRegExp(pattern.slice(lastIndex, match.index));
	    }

	    if (match[1]) {
	      regexpSource += '([^/]+)';
	      paramNames.push(match[1]);
	    } else if (match[0] === '**') {
	      regexpSource += '(.*)';
	      paramNames.push('splat');
	    } else if (match[0] === '*') {
	      regexpSource += '(.*?)';
	      paramNames.push('splat');
	    } else if (match[0] === '(') {
	      regexpSource += '(?:';
	    } else if (match[0] === ')') {
	      regexpSource += ')?';
	    }

	    tokens.push(match[0]);

	    lastIndex = matcher.lastIndex;
	  }

	  if (lastIndex !== pattern.length) {
	    tokens.push(pattern.slice(lastIndex, pattern.length));
	    regexpSource += escapeRegExp(pattern.slice(lastIndex, pattern.length));
	  }

	  return {
	    pattern: pattern,
	    regexpSource: regexpSource,
	    paramNames: paramNames,
	    tokens: tokens
	  };
	}

	var CompiledPatternsCache = {};

	function compilePattern(pattern) {
	  if (!(pattern in CompiledPatternsCache)) CompiledPatternsCache[pattern] = _compilePattern(pattern);

	  return CompiledPatternsCache[pattern];
	}

	/**
	 * Attempts to match a pattern on the given pathname. Patterns may use
	 * the following special characters:
	 *
	 * - :paramName     Matches a URL segment up to the next /, ?, or #. The
	 *                  captured string is considered a "param"
	 * - ()             Wraps a segment of the URL that is optional
	 * - *              Consumes (non-greedy) all characters up to the next
	 *                  character in the pattern, or to the end of the URL if
	 *                  there is none
	 * - **             Consumes (greedy) all characters up to the next character
	 *                  in the pattern, or to the end of the URL if there is none
	 *
	 *  The function calls callback(error, matched) when finished.
	 * The return value is an object with the following properties:
	 *
	 * - remainingPathname
	 * - paramNames
	 * - paramValues
	 */
	function matchPattern(pattern, pathname) {
	  // Ensure pattern starts with leading slash for consistency with pathname.
	  if (pattern.charAt(0) !== '/') {
	    pattern = '/' + pattern;
	  }

	  var _compilePattern2 = compilePattern(pattern);

	  var regexpSource = _compilePattern2.regexpSource;
	  var paramNames = _compilePattern2.paramNames;
	  var tokens = _compilePattern2.tokens;


	  if (pattern.charAt(pattern.length - 1) !== '/') {
	    regexpSource += '/?'; // Allow optional path separator at end.
	  }

	  // Special-case patterns like '*' for catch-all routes.
	  if (tokens[tokens.length - 1] === '*') {
	    regexpSource += '$';
	  }

	  var match = pathname.match(new RegExp('^' + regexpSource, 'i'));
	  if (match == null) {
	    return null;
	  }

	  var matchedPath = match[0];
	  var remainingPathname = pathname.substr(matchedPath.length);

	  if (remainingPathname) {
	    // Require that the match ends at a path separator, if we didn't match
	    // the full path, so any remaining pathname is a new path segment.
	    if (matchedPath.charAt(matchedPath.length - 1) !== '/') {
	      return null;
	    }

	    // If there is a remaining pathname, treat the path separator as part of
	    // the remaining pathname for properly continuing the match.
	    remainingPathname = '/' + remainingPathname;
	  }

	  return {
	    remainingPathname: remainingPathname,
	    paramNames: paramNames,
	    paramValues: match.slice(1).map(function (v) {
	      return v && decodeURIComponent(v);
	    })
	  };
	}

	function getParamNames(pattern) {
	  return compilePattern(pattern).paramNames;
	}

	function getParams(pattern, pathname) {
	  var match = matchPattern(pattern, pathname);
	  if (!match) {
	    return null;
	  }

	  var paramNames = match.paramNames;
	  var paramValues = match.paramValues;

	  var params = {};

	  paramNames.forEach(function (paramName, index) {
	    params[paramName] = paramValues[index];
	  });

	  return params;
	}

	/**
	 * Returns a version of the given pattern with params interpolated. Throws
	 * if there is a dynamic segment of the pattern for which there is no param.
	 */
	function formatPattern(pattern, params) {
	  params = params || {};

	  var _compilePattern3 = compilePattern(pattern);

	  var tokens = _compilePattern3.tokens;

	  var parenCount = 0,
	      pathname = '',
	      splatIndex = 0;

	  var token = void 0,
	      paramName = void 0,
	      paramValue = void 0;
	  for (var i = 0, len = tokens.length; i < len; ++i) {
	    token = tokens[i];

	    if (token === '*' || token === '**') {
	      paramValue = Array.isArray(params.splat) ? params.splat[splatIndex++] : params.splat;

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing splat #%s for path "%s"', splatIndex, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURI(paramValue);
	    } else if (token === '(') {
	      parenCount += 1;
	    } else if (token === ')') {
	      parenCount -= 1;
	    } else if (token.charAt(0) === ':') {
	      paramName = token.substring(1);
	      paramValue = params[paramName];

	      !(paramValue != null || parenCount > 0) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'Missing "%s" parameter for path "%s"', paramName, pattern) : (0, _invariant2.default)(false) : void 0;

	      if (paramValue != null) pathname += encodeURIComponent(paramValue);
	    } else {
	      pathname += token;
	    }
	  }

	  return pathname.replace(/\/+/g, '/');
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createHashHistory = __webpack_require__(517);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _useQueries = __webpack_require__(532);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _createTransitionManager = __webpack_require__(535);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _InternalPropTypes = __webpack_require__(514);

	var _RouterContext = __webpack_require__(543);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _RouteUtils = __webpack_require__(509);

	var _RouterUtils = __webpack_require__(545);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function isDeprecatedHistory(history) {
	  return !history || !history.__v2_compatible__;
	}

	/* istanbul ignore next: sanity check */
	function isUnsupportedHistory(history) {
	  // v3 histories expose getCurrentLocation, but aren't currently supported.
	  return history && history.getCurrentLocation;
	}

	var _React$PropTypes = _react2.default.PropTypes;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <Router> is a high-level API for automatically setting up
	 * a router that renders a <RouterContext> with all the props
	 * it needs each time the URL changes.
	 */

	var Router = _react2.default.createClass({
	  displayName: 'Router',


	  propTypes: {
	    history: object,
	    children: _InternalPropTypes.routes,
	    routes: _InternalPropTypes.routes, // alias for children
	    render: func,
	    createElement: func,
	    onError: func,
	    onUpdate: func,

	    // PRIVATE: For client-side rehydration of server match.
	    matchContext: object
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      render: function render(props) {
	        return _react2.default.createElement(_RouterContext2.default, props);
	      }
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      location: null,
	      routes: null,
	      params: null,
	      components: null
	    };
	  },
	  handleError: function handleError(error) {
	    if (this.props.onError) {
	      this.props.onError.call(this, error);
	    } else {
	      // Throw errors by default so we don't silently swallow them!
	      throw error; // This error probably occurred in getChildRoutes or getComponents.
	    }
	  },
	  componentWillMount: function componentWillMount() {
	    var _this = this;

	    var _props = this.props;
	    var parseQueryString = _props.parseQueryString;
	    var stringifyQuery = _props.stringifyQuery;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(parseQueryString || stringifyQuery), '`parseQueryString` and `stringifyQuery` are deprecated. Please create a custom history. http://tiny.cc/router-customquerystring') : void 0;

	    var _createRouterObjects = this.createRouterObjects();

	    var history = _createRouterObjects.history;
	    var transitionManager = _createRouterObjects.transitionManager;
	    var router = _createRouterObjects.router;


	    this._unlisten = transitionManager.listen(function (error, state) {
	      if (error) {
	        _this.handleError(error);
	      } else {
	        _this.setState(state, _this.props.onUpdate);
	      }
	    });

	    this.history = history;
	    this.router = router;
	  },
	  createRouterObjects: function createRouterObjects() {
	    var matchContext = this.props.matchContext;

	    if (matchContext) {
	      return matchContext;
	    }

	    var history = this.props.history;
	    var _props2 = this.props;
	    var routes = _props2.routes;
	    var children = _props2.children;


	    !!isUnsupportedHistory(history) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'You have provided a history object created with history v3.x. ' + 'This version of React Router is not compatible with v3 history ' + 'objects. Please use history v2.x instead.') : (0, _invariant2.default)(false) : void 0;

	    if (isDeprecatedHistory(history)) {
	      history = this.wrapDeprecatedHistory(history);
	    }

	    var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes || children));
	    var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	    var routingHistory = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	    return { history: routingHistory, transitionManager: transitionManager, router: router };
	  },
	  wrapDeprecatedHistory: function wrapDeprecatedHistory(history) {
	    var _props3 = this.props;
	    var parseQueryString = _props3.parseQueryString;
	    var stringifyQuery = _props3.stringifyQuery;


	    var createHistory = void 0;
	    if (history) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'It appears you have provided a deprecated history object to `<Router/>`, please use a history provided by ' + 'React Router with `import { browserHistory } from \'react-router\'` or `import { hashHistory } from \'react-router\'`. ' + 'If you are using a custom history please create it with `useRouterHistory`, see http://tiny.cc/router-usinghistory for details.') : void 0;
	      createHistory = function createHistory() {
	        return history;
	      };
	    } else {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`Router` no longer defaults the history prop to hash history. Please use the `hashHistory` singleton instead. http://tiny.cc/router-defaulthistory') : void 0;
	      createHistory = _createHashHistory2.default;
	    }

	    return (0, _useQueries2.default)(createHistory)({ parseQueryString: parseQueryString, stringifyQuery: stringifyQuery });
	  },


	  /* istanbul ignore next: sanity check */
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(nextProps.history === this.props.history, 'You cannot change <Router history>; it will be ignored') : void 0;

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)((nextProps.routes || nextProps.children) === (this.props.routes || this.props.children), 'You cannot change <Router routes>; it will be ignored') : void 0;
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlisten) this._unlisten();
	  },
	  render: function render() {
	    var _state = this.state;
	    var location = _state.location;
	    var routes = _state.routes;
	    var params = _state.params;
	    var components = _state.components;
	    var _props4 = this.props;
	    var createElement = _props4.createElement;
	    var render = _props4.render;

	    var props = _objectWithoutProperties(_props4, ['createElement', 'render']);

	    if (location == null) return null; // Async match

	    // Only forward non-Router-specific props to routing context, as those are
	    // the only ones that might be custom routing context props.
	    Object.keys(Router.propTypes).forEach(function (propType) {
	      return delete props[propType];
	    });

	    return render(_extends({}, props, {
	      history: this.history,
	      router: this.router,
	      location: location,
	      routes: routes,
	      params: params,
	      components: components,
	      createElement: createElement
	    }));
	  }
	});

	exports.default = Router;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(518);

	var _PathUtils = __webpack_require__(519);

	var _ExecutionEnvironment = __webpack_require__(520);

	var _DOMUtils = __webpack_require__(521);

	var _DOMStateStorage = __webpack_require__(522);

	var _createDOMHistory = __webpack_require__(523);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	function isAbsolutePath(path) {
	  return typeof path === 'string' && path.charAt(0) === '/';
	}

	function ensureSlash() {
	  var path = _DOMUtils.getHashPath();

	  if (isAbsolutePath(path)) return true;

	  _DOMUtils.replaceHashPath('/' + path);

	  return false;
	}

	function addQueryStringValueToPath(path, key, value) {
	  return path + (path.indexOf('?') === -1 ? '?' : '&') + (key + '=' + value);
	}

	function stripQueryStringValueFromPath(path, key) {
	  return path.replace(new RegExp('[?&]?' + key + '=[a-zA-Z0-9]+'), '');
	}

	function getQueryStringValueFromPath(path, key) {
	  var match = path.match(new RegExp('\\?.*?\\b' + key + '=(.+?)\\b'));
	  return match && match[1];
	}

	var DefaultQueryKey = '_k';

	function createHashHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Hash history needs a DOM') : _invariant2['default'](false) : undefined;

	  var queryKey = options.queryKey;

	  if (queryKey === undefined || !!queryKey) queryKey = typeof queryKey === 'string' ? queryKey : DefaultQueryKey;

	  function getCurrentLocation() {
	    var path = _DOMUtils.getHashPath();

	    var key = undefined,
	        state = undefined;
	    if (queryKey) {
	      key = getQueryStringValueFromPath(path, queryKey);
	      path = stripQueryStringValueFromPath(path, queryKey);

	      if (key) {
	        state = _DOMStateStorage.readState(key);
	      } else {
	        state = null;
	        key = history.createKey();
	        _DOMUtils.replaceHashPath(addQueryStringValueToPath(path, queryKey, key));
	      }
	    } else {
	      key = state = null;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startHashChangeListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function hashChangeListener() {
	      if (!ensureSlash()) return; // Always make sure hashes are preceeded with a /.

	      transitionTo(getCurrentLocation());
	    }

	    ensureSlash();
	    _DOMUtils.addEventListener(window, 'hashchange', hashChangeListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'hashchange', hashChangeListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    var path = (basename || '') + pathname + search;

	    if (queryKey) {
	      path = addQueryStringValueToPath(path, queryKey, key);
	      _DOMStateStorage.saveState(key, state);
	    } else {
	      // Drop key and state.
	      location.key = location.state = null;
	    }

	    var currentHash = _DOMUtils.getHashPath();

	    if (action === _Actions.PUSH) {
	      if (currentHash !== path) {
	        window.location.hash = path;
	      } else {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'You cannot PUSH the same path using hash history') : undefined;
	      }
	    } else if (currentHash !== path) {
	      // REPLACE
	      _DOMUtils.replaceHashPath(path);
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopHashChangeListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopHashChangeListener();
	    };
	  }

	  function push(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.push(location);
	  }

	  function replace(location) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || location.state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replace(location);
	  }

	  var goIsSupportedWithoutReload = _DOMUtils.supportsGoWithoutReloadUsingHash();

	  function go(n) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](goIsSupportedWithoutReload, 'Hash history go(n) causes a full page reload in this browser') : undefined;

	    history.go(n);
	  }

	  function createHref(path) {
	    return '#' + history.createHref(path);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopHashChangeListener = startHashChangeListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopHashChangeListener();
	  }

	  // deprecated
	  function pushState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.pushState(state, path);
	  }

	  // deprecated
	  function replaceState(state, path) {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](queryKey || state == null, 'You cannot use state without a queryKey it will be dropped') : undefined;

	    history.replaceState(state, path);
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    push: push,
	    replace: replace,
	    go: go,
	    createHref: createHref,

	    registerTransitionHook: registerTransitionHook, // deprecated - warning is in createHistory
	    unregisterTransitionHook: unregisterTransitionHook, // deprecated - warning is in createHistory
	    pushState: pushState, // deprecated - warning is in createHistory
	    replaceState: replaceState // deprecated - warning is in createHistory
	  });
	}

	exports['default'] = createHashHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 518:
/***/ function(module, exports) {

	/**
	 * Indicates that navigation was caused by a call to history.push.
	 */
	'use strict';

	exports.__esModule = true;
	var PUSH = 'PUSH';

	exports.PUSH = PUSH;
	/**
	 * Indicates that navigation was caused by a call to history.replace.
	 */
	var REPLACE = 'REPLACE';

	exports.REPLACE = REPLACE;
	/**
	 * Indicates that navigation was caused by some other action such
	 * as using a browser's back/forward buttons and/or manually manipulating
	 * the URL in a browser's location bar. This is the default.
	 *
	 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
	 * for more information.
	 */
	var POP = 'POP';

	exports.POP = POP;
	exports['default'] = {
	  PUSH: PUSH,
	  REPLACE: REPLACE,
	  POP: POP
	};

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.extractPath = extractPath;
	exports.parsePath = parsePath;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	function extractPath(string) {
	  var match = string.match(/^https?:\/\/[^\/]*/);

	  if (match == null) return string;

	  return string.substring(match[0].length);
	}

	function parsePath(path) {
	  var pathname = extractPath(path);
	  var search = '';
	  var hash = '';

	  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

	  var hashIndex = pathname.indexOf('#');
	  if (hashIndex !== -1) {
	    hash = pathname.substring(hashIndex);
	    pathname = pathname.substring(0, hashIndex);
	  }

	  var searchIndex = pathname.indexOf('?');
	  if (searchIndex !== -1) {
	    search = pathname.substring(searchIndex);
	    pathname = pathname.substring(0, searchIndex);
	  }

	  if (pathname === '') pathname = '/';

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash
	  };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 520:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	exports.canUseDOM = canUseDOM;

/***/ },

/***/ 521:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.addEventListener = addEventListener;
	exports.removeEventListener = removeEventListener;
	exports.getHashPath = getHashPath;
	exports.replaceHashPath = replaceHashPath;
	exports.getWindowPath = getWindowPath;
	exports.go = go;
	exports.getUserConfirmation = getUserConfirmation;
	exports.supportsHistory = supportsHistory;
	exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

	function addEventListener(node, event, listener) {
	  if (node.addEventListener) {
	    node.addEventListener(event, listener, false);
	  } else {
	    node.attachEvent('on' + event, listener);
	  }
	}

	function removeEventListener(node, event, listener) {
	  if (node.removeEventListener) {
	    node.removeEventListener(event, listener, false);
	  } else {
	    node.detachEvent('on' + event, listener);
	  }
	}

	function getHashPath() {
	  // We can't use window.location.hash here because it's not
	  // consistent across browsers - Firefox will pre-decode it!
	  return window.location.href.split('#')[1] || '';
	}

	function replaceHashPath(path) {
	  window.location.replace(window.location.pathname + window.location.search + '#' + path);
	}

	function getWindowPath() {
	  return window.location.pathname + window.location.search + window.location.hash;
	}

	function go(n) {
	  if (n) window.history.go(n);
	}

	function getUserConfirmation(message, callback) {
	  callback(window.confirm(message));
	}

	/**
	 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
	 *
	 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
	 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
	 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
	 */

	function supportsHistory() {
	  var ua = navigator.userAgent;
	  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
	    return false;
	  }
	  return window.history && 'pushState' in window.history;
	}

	/**
	 * Returns false if using go(n) with hash history causes a full page reload.
	 */

	function supportsGoWithoutReloadUsingHash() {
	  var ua = navigator.userAgent;
	  return ua.indexOf('Firefox') === -1;
	}

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*eslint-disable no-empty */
	'use strict';

	exports.__esModule = true;
	exports.saveState = saveState;
	exports.readState = readState;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var KeyPrefix = '@@History/';
	var QuotaExceededErrors = ['QuotaExceededError', 'QUOTA_EXCEEDED_ERR'];

	var SecurityError = 'SecurityError';

	function createKey(key) {
	  return KeyPrefix + key;
	}

	function saveState(key, state) {
	  try {
	    if (state == null) {
	      window.sessionStorage.removeItem(createKey(key));
	    } else {
	      window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
	    }
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

	      return;
	    }

	    if (QuotaExceededErrors.indexOf(error.name) >= 0 && window.sessionStorage.length === 0) {
	      // Safari "private mode" throws QuotaExceededError.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

	      return;
	    }

	    throw error;
	  }
	}

	function readState(key) {
	  var json = undefined;
	  try {
	    json = window.sessionStorage.getItem(createKey(key));
	  } catch (error) {
	    if (error.name === SecurityError) {
	      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
	      // attempt to access window.sessionStorage.
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

	      return null;
	    }
	  }

	  if (json) {
	    try {
	      return JSON.parse(json);
	    } catch (error) {
	      // Ignore invalid JSON.
	    }
	  }

	  return null;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _ExecutionEnvironment = __webpack_require__(520);

	var _DOMUtils = __webpack_require__(521);

	var _createHistory = __webpack_require__(524);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createDOMHistory(options) {
	  var history = _createHistory2['default'](_extends({
	    getUserConfirmation: _DOMUtils.getUserConfirmation
	  }, options, {
	    go: _DOMUtils.go
	  }));

	  function listen(listener) {
	    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

	    return history.listen(listener);
	  }

	  return _extends({}, history, {
	    listen: listen
	  });
	}

	exports['default'] = createDOMHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _deepEqual = __webpack_require__(525);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _PathUtils = __webpack_require__(519);

	var _AsyncUtils = __webpack_require__(528);

	var _Actions = __webpack_require__(518);

	var _createLocation2 = __webpack_require__(529);

	var _createLocation3 = _interopRequireDefault(_createLocation2);

	var _runTransitionHook = __webpack_require__(530);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(531);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function createRandomKey(length) {
	  return Math.random().toString(36).substr(2, length);
	}

	function locationsAreEqual(a, b) {
	  return a.pathname === b.pathname && a.search === b.search &&
	  //a.action === b.action && // Different action !== location change.
	  a.key === b.key && _deepEqual2['default'](a.state, b.state);
	}

	var DefaultKeyLength = 6;

	function createHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	  var getCurrentLocation = options.getCurrentLocation;
	  var finishTransition = options.finishTransition;
	  var saveState = options.saveState;
	  var go = options.go;
	  var getUserConfirmation = options.getUserConfirmation;
	  var keyLength = options.keyLength;

	  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

	  var transitionHooks = [];

	  function listenBefore(hook) {
	    transitionHooks.push(hook);

	    return function () {
	      transitionHooks = transitionHooks.filter(function (item) {
	        return item !== hook;
	      });
	    };
	  }

	  var allKeys = [];
	  var changeListeners = [];
	  var location = undefined;

	  function getCurrent() {
	    if (pendingLocation && pendingLocation.action === _Actions.POP) {
	      return allKeys.indexOf(pendingLocation.key);
	    } else if (location) {
	      return allKeys.indexOf(location.key);
	    } else {
	      return -1;
	    }
	  }

	  function updateLocation(newLocation) {
	    var current = getCurrent();

	    location = newLocation;

	    if (location.action === _Actions.PUSH) {
	      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
	    } else if (location.action === _Actions.REPLACE) {
	      allKeys[current] = location.key;
	    }

	    changeListeners.forEach(function (listener) {
	      listener(location);
	    });
	  }

	  function listen(listener) {
	    changeListeners.push(listener);

	    if (location) {
	      listener(location);
	    } else {
	      var _location = getCurrentLocation();
	      allKeys = [_location.key];
	      updateLocation(_location);
	    }

	    return function () {
	      changeListeners = changeListeners.filter(function (item) {
	        return item !== listener;
	      });
	    };
	  }

	  function confirmTransitionTo(location, callback) {
	    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
	      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
	        if (result != null) {
	          done(result);
	        } else {
	          next();
	        }
	      });
	    }, function (message) {
	      if (getUserConfirmation && typeof message === 'string') {
	        getUserConfirmation(message, function (ok) {
	          callback(ok !== false);
	        });
	      } else {
	        callback(message !== false);
	      }
	    });
	  }

	  var pendingLocation = undefined;

	  function transitionTo(nextLocation) {
	    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

	    pendingLocation = nextLocation;

	    confirmTransitionTo(nextLocation, function (ok) {
	      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

	      if (ok) {
	        // treat PUSH to current path like REPLACE to be consistent with browsers
	        if (nextLocation.action === _Actions.PUSH) {
	          var prevPath = createPath(location);
	          var nextPath = createPath(nextLocation);

	          if (nextPath === prevPath && _deepEqual2['default'](location.state, nextLocation.state)) nextLocation.action = _Actions.REPLACE;
	        }

	        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
	      } else if (location && nextLocation.action === _Actions.POP) {
	        var prevIndex = allKeys.indexOf(location.key);
	        var nextIndex = allKeys.indexOf(nextLocation.key);

	        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
	      }
	    });
	  }

	  function push(location) {
	    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
	  }

	  function replace(location) {
	    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
	  }

	  function goBack() {
	    go(-1);
	  }

	  function goForward() {
	    go(1);
	  }

	  function createKey() {
	    return createRandomKey(keyLength);
	  }

	  function createPath(location) {
	    if (location == null || typeof location === 'string') return location;

	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;

	    var result = pathname;

	    if (search) result += search;

	    if (hash) result += hash;

	    return result;
	  }

	  function createHref(location) {
	    return createPath(location);
	  }

	  function createLocation(location, action) {
	    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

	    if (typeof action === 'object') {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to history.createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      location = _extends({}, location, { state: action });

	      action = key;
	      key = arguments[3] || createKey();
	    }

	    return _createLocation3['default'](location, action, key);
	  }

	  // deprecated
	  function setState(state) {
	    if (location) {
	      updateLocationState(location, state);
	      updateLocation(location);
	    } else {
	      updateLocationState(getCurrentLocation(), state);
	    }
	  }

	  function updateLocationState(location, state) {
	    location.state = _extends({}, location.state, state);
	    saveState(location.key, location.state);
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    transitionHooks = transitionHooks.filter(function (item) {
	      return item !== hook;
	    });
	  }

	  // deprecated
	  function pushState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    push(_extends({ state: state }, path));
	  }

	  // deprecated
	  function replaceState(state, path) {
	    if (typeof path === 'string') path = _PathUtils.parsePath(path);

	    replace(_extends({ state: state }, path));
	  }

	  return {
	    listenBefore: listenBefore,
	    listen: listen,
	    transitionTo: transitionTo,
	    push: push,
	    replace: replace,
	    go: go,
	    goBack: goBack,
	    goForward: goForward,
	    createKey: createKey,
	    createPath: createPath,
	    createHref: createHref,
	    createLocation: createLocation,

	    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
	    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
	    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
	    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	  };
	}

	exports['default'] = createHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(526);
	var isArguments = __webpack_require__(527);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairs, including Array objects, equivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call), the same set of keys
	  // (although not necessarily the same order), equivalent values for every
	  // corresponding key, and an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actual, expected, opts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },

/***/ 526:
/***/ function(module, exports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },

/***/ 527:
/***/ function(module, exports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object, 'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
	    false;
	};


/***/ },

/***/ 528:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	var _slice = Array.prototype.slice;
	exports.loopAsync = loopAsync;

	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = undefined;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(_slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

/***/ },

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _Actions = __webpack_require__(518);

	var _PathUtils = __webpack_require__(519);

	function createLocation() {
	  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
	  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
	  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

	  if (typeof location === 'string') location = _PathUtils.parsePath(location);

	  if (typeof action === 'object') {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'The state (2nd) argument to createLocation is deprecated; use a ' + 'location descriptor instead') : undefined;

	    location = _extends({}, location, { state: action });

	    action = key || _Actions.POP;
	    key = _fourthArg;
	  }

	  var pathname = location.pathname || '/';
	  var search = location.search || '';
	  var hash = location.hash || '';
	  var state = location.state || null;

	  return {
	    pathname: pathname,
	    search: search,
	    hash: hash,
	    state: state,
	    action: action,
	    key: key
	  };
	}

	exports['default'] = createLocation;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 530:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	function runTransitionHook(hook, location, callback) {
	  var result = hook(location, callback);

	  if (hook.length < 2) {
	    // Assume the hook runs synchronously and automatically
	    // call the callback with the return value.
	    callback(result);
	  } else {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
	  }
	}

	exports['default'] = runTransitionHook;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 531:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	function deprecate(fn, message) {
	  return function () {
	    process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] ' + message) : undefined;
	    return fn.apply(this, arguments);
	  };
	}

	exports['default'] = deprecate;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 532:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _queryString = __webpack_require__(533);

	var _runTransitionHook = __webpack_require__(530);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _PathUtils = __webpack_require__(519);

	var _deprecate = __webpack_require__(531);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	var SEARCH_BASE_KEY = '$searchBase';

	function defaultStringifyQuery(query) {
	  return _queryString.stringify(query).replace(/%20/g, '+');
	}

	var defaultParseQueryString = _queryString.parse;

	function isNestedObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p) && typeof object[p] === 'object' && !Array.isArray(object[p]) && object[p] !== null) return true;
	  }return false;
	}

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know how to handle URL queries.
	 */
	function useQueries(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var stringifyQuery = options.stringifyQuery;
	    var parseQueryString = options.parseQueryString;

	    if (typeof stringifyQuery !== 'function') stringifyQuery = defaultStringifyQuery;

	    if (typeof parseQueryString !== 'function') parseQueryString = defaultParseQueryString;

	    function addQuery(location) {
	      if (location.query == null) {
	        var search = location.search;

	        location.query = parseQueryString(search.substring(1));
	        location[SEARCH_BASE_KEY] = { search: search, searchBase: '' };
	      }

	      // TODO: Instead of all the book-keeping here, this should just strip the
	      // stringified query from the search.

	      return location;
	    }

	    function appendQuery(location, query) {
	      var _extends2;

	      var searchBaseSpec = location[SEARCH_BASE_KEY];
	      var queryString = query ? stringifyQuery(query) : '';
	      if (!searchBaseSpec && !queryString) {
	        return location;
	      }

	      process.env.NODE_ENV !== 'production' ? _warning2['default'](stringifyQuery !== defaultStringifyQuery || !isNestedObject(query), 'useQueries does not stringify nested query objects by default; ' + 'use a custom stringifyQuery function') : undefined;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var searchBase = undefined;
	      if (searchBaseSpec && location.search === searchBaseSpec.search) {
	        searchBase = searchBaseSpec.searchBase;
	      } else {
	        searchBase = location.search || '';
	      }

	      var search = searchBase;
	      if (queryString) {
	        search += (search ? '&' : '?') + queryString;
	      }

	      return _extends({}, location, (_extends2 = {
	        search: search
	      }, _extends2[SEARCH_BASE_KEY] = { search: search, searchBase: searchBase }, _extends2));
	    }

	    // Override all read methods with query-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addQuery(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addQuery(location));
	      });
	    }

	    // Override all write methods with query-aware versions.
	    function push(location) {
	      history.push(appendQuery(location, location.query));
	    }

	    function replace(location) {
	      history.replace(appendQuery(location, location.query));
	    }

	    function createPath(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createPath is deprecated; use a location descriptor instead') : undefined;

	      return history.createPath(appendQuery(location, query || location.query));
	    }

	    function createHref(location, query) {
	      process.env.NODE_ENV !== 'production' ? _warning2['default'](!query, 'the query argument to createHref is deprecated; use a location descriptor instead') : undefined;

	      return history.createHref(appendQuery(location, query || location.query));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      var fullLocation = history.createLocation.apply(history, [appendQuery(location, location.query)].concat(args));
	      if (location.query) {
	        fullLocation.query = location.query;
	      }
	      return addQuery(fullLocation);
	    }

	    // deprecated
	    function pushState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path, { query: query }));
	    }

	    // deprecated
	    function replaceState(state, path, query) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path, { query: query }));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useQueries;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 533:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(534);

	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};

	exports.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#|&)/, '');

		if (!str) {
			return {};
		}

		return str.split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;

			key = decodeURIComponent(key);

			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	exports.stringify = function (obj) {
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];

			if (val === undefined) {
				return '';
			}

			if (val === null) {
				return key;
			}

			if (Array.isArray(val)) {
				return val.slice().sort().map(function (val2) {
					return strictUriEncode(key) + '=' + strictUriEncode(val2);
				}).join('&');
			}

			return strictUriEncode(key) + '=' + strictUriEncode(val);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },

/***/ 534:
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },

/***/ 535:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = createTransitionManager;

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _Actions = __webpack_require__(518);

	var _computeChangedRoutes2 = __webpack_require__(536);

	var _computeChangedRoutes3 = _interopRequireDefault(_computeChangedRoutes2);

	var _TransitionUtils = __webpack_require__(537);

	var _isActive2 = __webpack_require__(539);

	var _isActive3 = _interopRequireDefault(_isActive2);

	var _getComponents = __webpack_require__(540);

	var _getComponents2 = _interopRequireDefault(_getComponents);

	var _matchRoutes = __webpack_require__(542);

	var _matchRoutes2 = _interopRequireDefault(_matchRoutes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function hasAnyProperties(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return true;
	  }return false;
	}

	function createTransitionManager(history, routes) {
	  var state = {};

	  // Signature should be (location, indexOnly), but needs to support (path,
	  // query, indexOnly)
	  function isActive(location) {
	    var indexOnlyOrDeprecatedQuery = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	    var deprecatedIndexOnly = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

	    var indexOnly = void 0;
	    if (indexOnlyOrDeprecatedQuery && indexOnlyOrDeprecatedQuery !== true || deprecatedIndexOnly !== null) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`isActive(pathname, query, indexOnly) is deprecated; use `isActive(location, indexOnly)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      location = { pathname: location, query: indexOnlyOrDeprecatedQuery };
	      indexOnly = deprecatedIndexOnly || false;
	    } else {
	      location = history.createLocation(location);
	      indexOnly = indexOnlyOrDeprecatedQuery;
	    }

	    return (0, _isActive3.default)(location, indexOnly, state.location, state.routes, state.params);
	  }

	  function createLocationFromRedirectInfo(location) {
	    return history.createLocation(location, _Actions.REPLACE);
	  }

	  var partialNextState = void 0;

	  function match(location, callback) {
	    if (partialNextState && partialNextState.location === location) {
	      // Continue from where we left off.
	      finishMatch(partialNextState, callback);
	    } else {
	      (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	        if (error) {
	          callback(error);
	        } else if (nextState) {
	          finishMatch(_extends({}, nextState, { location: location }), callback);
	        } else {
	          callback();
	        }
	      });
	    }
	  }

	  function finishMatch(nextState, callback) {
	    var _computeChangedRoutes = (0, _computeChangedRoutes3.default)(state, nextState);

	    var leaveRoutes = _computeChangedRoutes.leaveRoutes;
	    var changeRoutes = _computeChangedRoutes.changeRoutes;
	    var enterRoutes = _computeChangedRoutes.enterRoutes;


	    (0, _TransitionUtils.runLeaveHooks)(leaveRoutes);

	    // Tear down confirmation hooks for left routes
	    leaveRoutes.filter(function (route) {
	      return enterRoutes.indexOf(route) === -1;
	    }).forEach(removeListenBeforeHooksForRoute);

	    // change and enter hooks are run in series
	    (0, _TransitionUtils.runChangeHooks)(changeRoutes, state, nextState, function (error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      (0, _TransitionUtils.runEnterHooks)(enterRoutes, nextState, finishEnterHooks);
	    });

	    function finishEnterHooks(error, redirectInfo) {
	      if (error || redirectInfo) return handleErrorOrRedirect(error, redirectInfo);

	      // TODO: Fetch components after state is updated.
	      (0, _getComponents2.default)(nextState, function (error, components) {
	        if (error) {
	          callback(error);
	        } else {
	          // TODO: Make match a pure function and have some other API
	          // for "match and update state".
	          callback(null, null, state = _extends({}, nextState, { components: components }));
	        }
	      });
	    }

	    function handleErrorOrRedirect(error, redirectInfo) {
	      if (error) callback(error);else callback(null, createLocationFromRedirectInfo(redirectInfo));
	    }
	  }

	  var RouteGuid = 1;

	  function getRouteID(route) {
	    var create = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	    return route.__id__ || create && (route.__id__ = RouteGuid++);
	  }

	  var RouteHooks = Object.create(null);

	  function getRouteHooksForRoutes(routes) {
	    return routes.reduce(function (hooks, route) {
	      hooks.push.apply(hooks, RouteHooks[getRouteID(route)]);
	      return hooks;
	    }, []);
	  }

	  function transitionHook(location, callback) {
	    (0, _matchRoutes2.default)(routes, location, function (error, nextState) {
	      if (nextState == null) {
	        // TODO: We didn't actually match anything, but hang
	        // onto error/nextState so we don't have to matchRoutes
	        // again in the listen callback.
	        callback();
	        return;
	      }

	      // Cache some state here so we don't have to
	      // matchRoutes() again in the listen callback.
	      partialNextState = _extends({}, nextState, { location: location });

	      var hooks = getRouteHooksForRoutes((0, _computeChangedRoutes3.default)(state, partialNextState).leaveRoutes);

	      var result = void 0;
	      for (var i = 0, len = hooks.length; result == null && i < len; ++i) {
	        // Passing the location arg here indicates to
	        // the user that this is a transition hook.
	        result = hooks[i](location);
	      }

	      callback(result);
	    });
	  }

	  /* istanbul ignore next: untestable with Karma */
	  function beforeUnloadHook() {
	    // Synchronously check to see if any route hooks want
	    // to prevent the current window/tab from closing.
	    if (state.routes) {
	      var hooks = getRouteHooksForRoutes(state.routes);

	      var message = void 0;
	      for (var i = 0, len = hooks.length; typeof message !== 'string' && i < len; ++i) {
	        // Passing no args indicates to the user that this is a
	        // beforeunload hook. We don't know the next location.
	        message = hooks[i]();
	      }

	      return message;
	    }
	  }

	  var unlistenBefore = void 0,
	      unlistenBeforeUnload = void 0;

	  function removeListenBeforeHooksForRoute(route) {
	    var routeID = getRouteID(route, false);
	    if (!routeID) {
	      return;
	    }

	    delete RouteHooks[routeID];

	    if (!hasAnyProperties(RouteHooks)) {
	      // teardown transition & beforeunload hooks
	      if (unlistenBefore) {
	        unlistenBefore();
	        unlistenBefore = null;
	      }

	      if (unlistenBeforeUnload) {
	        unlistenBeforeUnload();
	        unlistenBeforeUnload = null;
	      }
	    }
	  }

	  /**
	   * Registers the given hook function to run before leaving the given route.
	   *
	   * During a normal transition, the hook function receives the next location
	   * as its only argument and can return either a prompt message (string) to show the user,
	   * to make sure they want to leave the page; or `false`, to prevent the transition.
	   * Any other return value will have no effect.
	   *
	   * During the beforeunload event (in browsers) the hook receives no arguments.
	   * In this case it must return a prompt message to prevent the transition.
	   *
	   * Returns a function that may be used to unbind the listener.
	   */
	  function listenBeforeLeavingRoute(route, hook) {
	    // TODO: Warn if they register for a route that isn't currently
	    // active. They're probably doing something wrong, like re-creating
	    // route objects on every location change.
	    var routeID = getRouteID(route);
	    var hooks = RouteHooks[routeID];

	    if (!hooks) {
	      var thereWereNoRouteHooks = !hasAnyProperties(RouteHooks);

	      RouteHooks[routeID] = [hook];

	      if (thereWereNoRouteHooks) {
	        // setup transition & beforeunload hooks
	        unlistenBefore = history.listenBefore(transitionHook);

	        if (history.listenBeforeUnload) unlistenBeforeUnload = history.listenBeforeUnload(beforeUnloadHook);
	      }
	    } else {
	      if (hooks.indexOf(hook) === -1) {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'adding multiple leave hooks for the same route is deprecated; manage multiple confirmations in your own code instead') : void 0;

	        hooks.push(hook);
	      }
	    }

	    return function () {
	      var hooks = RouteHooks[routeID];

	      if (hooks) {
	        var newHooks = hooks.filter(function (item) {
	          return item !== hook;
	        });

	        if (newHooks.length === 0) {
	          removeListenBeforeHooksForRoute(route);
	        } else {
	          RouteHooks[routeID] = newHooks;
	        }
	      }
	    };
	  }

	  /**
	   * This is the API for stateful environments. As the location
	   * changes, we update state and call the listener. We can also
	   * gracefully handle errors and redirects.
	   */
	  function listen(listener) {
	    // TODO: Only use a single history listener. Otherwise we'll
	    // end up with multiple concurrent calls to match.
	    return history.listen(function (location) {
	      if (state.location === location) {
	        listener(null, state);
	      } else {
	        match(location, function (error, redirectLocation, nextState) {
	          if (error) {
	            listener(error);
	          } else if (redirectLocation) {
	            history.transitionTo(redirectLocation);
	          } else if (nextState) {
	            listener(null, nextState);
	          } else {
	            process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Location "%s" did not match any routes', location.pathname + location.search + location.hash) : void 0;
	          }
	        });
	      }
	    });
	  }

	  return {
	    isActive: isActive,
	    match: match,
	    listenBeforeLeavingRoute: listenBeforeLeavingRoute,
	    listen: listen
	  };
	}

	//export default useRoutes
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(515);

	function routeParamsChanged(route, prevState, nextState) {
	  if (!route.path) return false;

	  var paramNames = (0, _PatternUtils.getParamNames)(route.path);

	  return paramNames.some(function (paramName) {
	    return prevState.params[paramName] !== nextState.params[paramName];
	  });
	}

	/**
	 * Returns an object of { leaveRoutes, changeRoutes, enterRoutes } determined by
	 * the change from prevState to nextState. We leave routes if either
	 * 1) they are not in the next state or 2) they are in the next state
	 * but their params have changed (i.e. /users/123 => /users/456).
	 *
	 * leaveRoutes are ordered starting at the leaf route of the tree
	 * we're leaving up to the common parent route. enterRoutes are ordered
	 * from the top of the tree we're entering down to the leaf route.
	 *
	 * changeRoutes are any routes that didn't leave or enter during
	 * the transition.
	 */
	function computeChangedRoutes(prevState, nextState) {
	  var prevRoutes = prevState && prevState.routes;
	  var nextRoutes = nextState.routes;

	  var leaveRoutes = void 0,
	      changeRoutes = void 0,
	      enterRoutes = void 0;
	  if (prevRoutes) {
	    (function () {
	      var parentIsLeaving = false;
	      leaveRoutes = prevRoutes.filter(function (route) {
	        if (parentIsLeaving) {
	          return true;
	        } else {
	          var isLeaving = nextRoutes.indexOf(route) === -1 || routeParamsChanged(route, prevState, nextState);
	          if (isLeaving) parentIsLeaving = true;
	          return isLeaving;
	        }
	      });

	      // onLeave hooks start at the leaf route.
	      leaveRoutes.reverse();

	      enterRoutes = [];
	      changeRoutes = [];

	      nextRoutes.forEach(function (route) {
	        var isNew = prevRoutes.indexOf(route) === -1;
	        var paramsChanged = leaveRoutes.indexOf(route) !== -1;

	        if (isNew || paramsChanged) enterRoutes.push(route);else changeRoutes.push(route);
	      });
	    })();
	  } else {
	    leaveRoutes = [];
	    changeRoutes = [];
	    enterRoutes = nextRoutes;
	  }

	  return {
	    leaveRoutes: leaveRoutes,
	    changeRoutes: changeRoutes,
	    enterRoutes: enterRoutes
	  };
	}

	exports.default = computeChangedRoutes;
	module.exports = exports['default'];

/***/ },

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;
	exports.runEnterHooks = runEnterHooks;
	exports.runChangeHooks = runChangeHooks;
	exports.runLeaveHooks = runLeaveHooks;

	var _AsyncUtils = __webpack_require__(538);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createTransitionHook(hook, route, asyncArity) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    hook.apply(route, args);

	    if (hook.length < asyncArity) {
	      var callback = args[args.length - 1];
	      // Assume hook executes synchronously and
	      // automatically call the callback.
	      callback();
	    }
	  };
	}

	function getEnterHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onEnter) hooks.push(createTransitionHook(route.onEnter, route, 3));

	    return hooks;
	  }, []);
	}

	function getChangeHooks(routes) {
	  return routes.reduce(function (hooks, route) {
	    if (route.onChange) hooks.push(createTransitionHook(route.onChange, route, 4));
	    return hooks;
	  }, []);
	}

	function runTransitionHooks(length, iter, callback) {
	  if (!length) {
	    callback();
	    return;
	  }

	  var redirectInfo = void 0;
	  function replace(location, deprecatedPathname, deprecatedQuery) {
	    if (deprecatedPathname) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`replaceState(state, pathname, query) is deprecated; use `replace(location)` with a location descriptor instead. http://tiny.cc/router-isActivedeprecated') : void 0;
	      redirectInfo = {
	        pathname: deprecatedPathname,
	        query: deprecatedQuery,
	        state: location
	      };

	      return;
	    }

	    redirectInfo = location;
	  }

	  (0, _AsyncUtils.loopAsync)(length, function (index, next, done) {
	    iter(index, replace, function (error) {
	      if (error || redirectInfo) {
	        done(error, redirectInfo); // No need to continue.
	      } else {
	          next();
	        }
	    });
	  }, callback);
	}

	/**
	 * Runs all onEnter hooks in the given array of routes in order
	 * with onEnter(nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runEnterHooks(routes, nextState, callback) {
	  var hooks = getEnterHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onChange hooks in the given array of routes in order
	 * with onChange(prevState, nextState, replace, callback) and calls
	 * callback(error, redirectInfo) when finished. The first hook
	 * to use replace short-circuits the loop.
	 *
	 * If a hook needs to run asynchronously, it may use the callback
	 * function. However, doing so will cause the transition to pause,
	 * which could lead to a non-responsive UI if the hook is slow.
	 */
	function runChangeHooks(routes, state, nextState, callback) {
	  var hooks = getChangeHooks(routes);
	  return runTransitionHooks(hooks.length, function (index, replace, next) {
	    hooks[index](state, nextState, replace, next);
	  }, callback);
	}

	/**
	 * Runs all onLeave hooks in the given array of routes in order.
	 */
	function runLeaveHooks(routes) {
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    if (routes[i].onLeave) routes[i].onLeave.call(routes[i]);
	  }
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 538:
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.loopAsync = loopAsync;
	exports.mapAsync = mapAsync;
	function loopAsync(turns, work, callback) {
	  var currentTurn = 0,
	      isDone = false;
	  var sync = false,
	      hasNext = false,
	      doneArgs = void 0;

	  function done() {
	    isDone = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      doneArgs = [].concat(Array.prototype.slice.call(arguments));
	      return;
	    }

	    callback.apply(this, arguments);
	  }

	  function next() {
	    if (isDone) {
	      return;
	    }

	    hasNext = true;
	    if (sync) {
	      // Iterate instead of recursing if possible.
	      return;
	    }

	    sync = true;

	    while (!isDone && currentTurn < turns && hasNext) {
	      hasNext = false;
	      work.call(this, currentTurn++, next, done);
	    }

	    sync = false;

	    if (isDone) {
	      // This means the loop finished synchronously.
	      callback.apply(this, doneArgs);
	      return;
	    }

	    if (currentTurn >= turns && hasNext) {
	      isDone = true;
	      callback();
	    }
	  }

	  next();
	}

	function mapAsync(array, work, callback) {
	  var length = array.length;
	  var values = [];

	  if (length === 0) return callback(null, values);

	  var isDone = false,
	      doneCount = 0;

	  function done(index, error, value) {
	    if (isDone) return;

	    if (error) {
	      isDone = true;
	      callback(error);
	    } else {
	      values[index] = value;

	      isDone = ++doneCount === length;

	      if (isDone) callback(null, values);
	    }
	  }

	  array.forEach(function (item, index) {
	    work(item, index, function (error, value) {
	      done(index, error, value);
	    });
	  });
	}

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isActive;

	var _PatternUtils = __webpack_require__(515);

	function deepEqual(a, b) {
	  if (a == b) return true;

	  if (a == null || b == null) return false;

	  if (Array.isArray(a)) {
	    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
	      return deepEqual(item, b[index]);
	    });
	  }

	  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
	    for (var p in a) {
	      if (!Object.prototype.hasOwnProperty.call(a, p)) {
	        continue;
	      }

	      if (a[p] === undefined) {
	        if (b[p] !== undefined) {
	          return false;
	        }
	      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
	        return false;
	      } else if (!deepEqual(a[p], b[p])) {
	        return false;
	      }
	    }

	    return true;
	  }

	  return String(a) === String(b);
	}

	/**
	 * Returns true if the current pathname matches the supplied one, net of
	 * leading and trailing slash normalization. This is sufficient for an
	 * indexOnly route match.
	 */
	function pathIsActive(pathname, currentPathname) {
	  // Normalize leading slash for consistency. Leading slash on pathname has
	  // already been normalized in isActive. See caveat there.
	  if (currentPathname.charAt(0) !== '/') {
	    currentPathname = '/' + currentPathname;
	  }

	  // Normalize the end of both path names too. Maybe `/foo/` shouldn't show
	  // `/foo` as active, but in this case, we would already have failed the
	  // match.
	  if (pathname.charAt(pathname.length - 1) !== '/') {
	    pathname += '/';
	  }
	  if (currentPathname.charAt(currentPathname.length - 1) !== '/') {
	    currentPathname += '/';
	  }

	  return currentPathname === pathname;
	}

	/**
	 * Returns true if the given pathname matches the active routes and params.
	 */
	function routeIsActive(pathname, routes, params) {
	  var remainingPathname = pathname,
	      paramNames = [],
	      paramValues = [];

	  // for...of would work here but it's probably slower post-transpilation.
	  for (var i = 0, len = routes.length; i < len; ++i) {
	    var route = routes[i];
	    var pattern = route.path || '';

	    if (pattern.charAt(0) === '/') {
	      remainingPathname = pathname;
	      paramNames = [];
	      paramValues = [];
	    }

	    if (remainingPathname !== null && pattern) {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }

	      if (remainingPathname === '') {
	        // We have an exact match on the route. Just check that all the params
	        // match.
	        // FIXME: This doesn't work on repeated params.
	        return paramNames.every(function (paramName, index) {
	          return String(paramValues[index]) === String(params[paramName]);
	        });
	      }
	    }
	  }

	  return false;
	}

	/**
	 * Returns true if all key/value pairs in the given query are
	 * currently active.
	 */
	function queryIsActive(query, activeQuery) {
	  if (activeQuery == null) return query == null;

	  if (query == null) return true;

	  return deepEqual(query, activeQuery);
	}

	/**
	 * Returns true if a <Link> to the given pathname/query combination is
	 * currently active.
	 */
	function isActive(_ref, indexOnly, currentLocation, routes, params) {
	  var pathname = _ref.pathname;
	  var query = _ref.query;

	  if (currentLocation == null) return false;

	  // TODO: This is a bit ugly. It keeps around support for treating pathnames
	  // without preceding slashes as absolute paths, but possibly also works
	  // around the same quirks with basenames as in matchRoutes.
	  if (pathname.charAt(0) !== '/') {
	    pathname = '/' + pathname;
	  }

	  if (!pathIsActive(pathname, currentLocation.pathname)) {
	    // The path check is necessary and sufficient for indexOnly, but otherwise
	    // we still need to check the routes.
	    if (indexOnly || !routeIsActive(pathname, routes, params)) {
	      return false;
	    }
	  }

	  return queryIsActive(query, currentLocation.query);
	}
	module.exports = exports['default'];

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _AsyncUtils = __webpack_require__(538);

	var _makeStateWithLocation = __webpack_require__(541);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getComponentsForRoute(nextState, route, callback) {
	  if (route.component || route.components) {
	    callback(null, route.component || route.components);
	    return;
	  }

	  var getComponent = route.getComponent || route.getComponents;
	  if (!getComponent) {
	    callback();
	    return;
	  }

	  var location = nextState.location;

	  var nextStateWithLocation = (0, _makeStateWithLocation2.default)(nextState, location);

	  getComponent.call(route, nextStateWithLocation, callback);
	}

	/**
	 * Asynchronously fetches all components needed for the given router
	 * state and calls callback(error, components) when finished.
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getComponents method.
	 */
	function getComponents(nextState, callback) {
	  (0, _AsyncUtils.mapAsync)(nextState.routes, function (route, index, callback) {
	    getComponentsForRoute(nextState, route, callback);
	  }, callback);
	}

	exports.default = getComponents;
	module.exports = exports['default'];

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = makeStateWithLocation;

	var _deprecateObjectProperties = __webpack_require__(511);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function makeStateWithLocation(state, location) {
	  if (process.env.NODE_ENV !== 'production' && _deprecateObjectProperties.canUseMembrane) {
	    var stateWithLocation = _extends({}, state);

	    // I don't use deprecateObjectProperties here because I want to keep the
	    // same code path between development and production, in that we just
	    // assign extra properties to the copy of the state object in both cases.

	    var _loop = function _loop(prop) {
	      if (!Object.prototype.hasOwnProperty.call(location, prop)) {
	        return 'continue';
	      }

	      Object.defineProperty(stateWithLocation, prop, {
	        get: function get() {
	          process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'Accessing location properties directly from the first argument to `getComponent`, `getComponents`, `getChildRoutes`, and `getIndexRoute` is deprecated. That argument is now the router state (`nextState` or `partialNextState`) rather than the location. To access the location, use `nextState.location` or `partialNextState.location`.') : void 0;
	          return location[prop];
	        }
	      });
	    };

	    for (var prop in location) {
	      var _ret = _loop(prop);

	      if (_ret === 'continue') continue;
	    }

	    return stateWithLocation;
	  }

	  return _extends({}, state, location);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = matchRoutes;

	var _AsyncUtils = __webpack_require__(538);

	var _makeStateWithLocation = __webpack_require__(541);

	var _makeStateWithLocation2 = _interopRequireDefault(_makeStateWithLocation);

	var _PatternUtils = __webpack_require__(515);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _RouteUtils = __webpack_require__(509);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getChildRoutes(route, location, paramNames, paramValues, callback) {
	  if (route.childRoutes) {
	    return [null, route.childRoutes];
	  }
	  if (!route.getChildRoutes) {
	    return [];
	  }

	  var sync = true,
	      result = void 0;

	  var partialNextState = {
	    location: location,
	    params: createParams(paramNames, paramValues)
	  };

	  var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	  route.getChildRoutes(partialNextStateWithLocation, function (error, childRoutes) {
	    childRoutes = !error && (0, _RouteUtils.createRoutes)(childRoutes);
	    if (sync) {
	      result = [error, childRoutes];
	      return;
	    }

	    callback(error, childRoutes);
	  });

	  sync = false;
	  return result; // Might be undefined.
	}

	function getIndexRoute(route, location, paramNames, paramValues, callback) {
	  if (route.indexRoute) {
	    callback(null, route.indexRoute);
	  } else if (route.getIndexRoute) {
	    var partialNextState = {
	      location: location,
	      params: createParams(paramNames, paramValues)
	    };

	    var partialNextStateWithLocation = (0, _makeStateWithLocation2.default)(partialNextState, location);

	    route.getIndexRoute(partialNextStateWithLocation, function (error, indexRoute) {
	      callback(error, !error && (0, _RouteUtils.createRoutes)(indexRoute)[0]);
	    });
	  } else if (route.childRoutes) {
	    (function () {
	      var pathless = route.childRoutes.filter(function (childRoute) {
	        return !childRoute.path;
	      });

	      (0, _AsyncUtils.loopAsync)(pathless.length, function (index, next, done) {
	        getIndexRoute(pathless[index], location, paramNames, paramValues, function (error, indexRoute) {
	          if (error || indexRoute) {
	            var routes = [pathless[index]].concat(Array.isArray(indexRoute) ? indexRoute : [indexRoute]);
	            done(error, routes);
	          } else {
	            next();
	          }
	        });
	      }, function (err, routes) {
	        callback(null, routes);
	      });
	    })();
	  } else {
	    callback();
	  }
	}

	function assignParams(params, paramNames, paramValues) {
	  return paramNames.reduce(function (params, paramName, index) {
	    var paramValue = paramValues && paramValues[index];

	    if (Array.isArray(params[paramName])) {
	      params[paramName].push(paramValue);
	    } else if (paramName in params) {
	      params[paramName] = [params[paramName], paramValue];
	    } else {
	      params[paramName] = paramValue;
	    }

	    return params;
	  }, params);
	}

	function createParams(paramNames, paramValues) {
	  return assignParams({}, paramNames, paramValues);
	}

	function matchRouteDeep(route, location, remainingPathname, paramNames, paramValues, callback) {
	  var pattern = route.path || '';

	  if (pattern.charAt(0) === '/') {
	    remainingPathname = location.pathname;
	    paramNames = [];
	    paramValues = [];
	  }

	  // Only try to match the path if the route actually has a pattern, and if
	  // we're not just searching for potential nested absolute paths.
	  if (remainingPathname !== null && pattern) {
	    try {
	      var matched = (0, _PatternUtils.matchPattern)(pattern, remainingPathname);
	      if (matched) {
	        remainingPathname = matched.remainingPathname;
	        paramNames = [].concat(paramNames, matched.paramNames);
	        paramValues = [].concat(paramValues, matched.paramValues);
	      } else {
	        remainingPathname = null;
	      }
	    } catch (error) {
	      callback(error);
	    }

	    // By assumption, pattern is non-empty here, which is the prerequisite for
	    // actually terminating a match.
	    if (remainingPathname === '') {
	      var _ret2 = function () {
	        var match = {
	          routes: [route],
	          params: createParams(paramNames, paramValues)
	        };

	        getIndexRoute(route, location, paramNames, paramValues, function (error, indexRoute) {
	          if (error) {
	            callback(error);
	          } else {
	            if (Array.isArray(indexRoute)) {
	              var _match$routes;

	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(indexRoute.every(function (route) {
	                return !route.path;
	              }), 'Index routes should not have paths') : void 0;
	              (_match$routes = match.routes).push.apply(_match$routes, indexRoute);
	            } else if (indexRoute) {
	              process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!indexRoute.path, 'Index routes should not have paths') : void 0;
	              match.routes.push(indexRoute);
	            }

	            callback(null, match);
	          }
	        });

	        return {
	          v: void 0
	        };
	      }();

	      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	    }
	  }

	  if (remainingPathname != null || route.childRoutes) {
	    // Either a) this route matched at least some of the path or b)
	    // we don't have to load this route's children asynchronously. In
	    // either case continue checking for matches in the subtree.
	    var onChildRoutes = function onChildRoutes(error, childRoutes) {
	      if (error) {
	        callback(error);
	      } else if (childRoutes) {
	        // Check the child routes to see if any of them match.
	        matchRoutes(childRoutes, location, function (error, match) {
	          if (error) {
	            callback(error);
	          } else if (match) {
	            // A child route matched! Augment the match and pass it up the stack.
	            match.routes.unshift(route);
	            callback(null, match);
	          } else {
	            callback();
	          }
	        }, remainingPathname, paramNames, paramValues);
	      } else {
	        callback();
	      }
	    };

	    var result = getChildRoutes(route, location, paramNames, paramValues, onChildRoutes);
	    if (result) {
	      onChildRoutes.apply(undefined, result);
	    }
	  } else {
	    callback();
	  }
	}

	/**
	 * Asynchronously matches the given location to a set of routes and calls
	 * callback(error, state) when finished. The state object will have the
	 * following properties:
	 *
	 * - routes       An array of routes that matched, in hierarchical order
	 * - params       An object of URL parameters
	 *
	 * Note: This operation may finish synchronously if no routes have an
	 * asynchronous getChildRoutes method.
	 */
	function matchRoutes(routes, location, callback, remainingPathname) {
	  var paramNames = arguments.length <= 4 || arguments[4] === undefined ? [] : arguments[4];
	  var paramValues = arguments.length <= 5 || arguments[5] === undefined ? [] : arguments[5];

	  if (remainingPathname === undefined) {
	    // TODO: This is a little bit ugly, but it works around a quirk in history
	    // that strips the leading slash from pathnames when using basenames with
	    // trailing slashes.
	    if (location.pathname.charAt(0) !== '/') {
	      location = _extends({}, location, {
	        pathname: '/' + location.pathname
	      });
	    }
	    remainingPathname = location.pathname;
	  }

	  (0, _AsyncUtils.loopAsync)(routes.length, function (index, next, done) {
	    matchRouteDeep(routes[index], location, remainingPathname, paramNames, paramValues, function (error, match) {
	      if (error || match) {
	        done(error, match);
	      } else {
	        next();
	      }
	    });
	  }, callback);
	}
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _deprecateObjectProperties = __webpack_require__(511);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	var _getRouteParams = __webpack_require__(544);

	var _getRouteParams2 = _interopRequireDefault(_getRouteParams);

	var _RouteUtils = __webpack_require__(509);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var array = _React$PropTypes.array;
	var func = _React$PropTypes.func;
	var object = _React$PropTypes.object;

	/**
	 * A <RouterContext> renders the component tree for a given router state
	 * and sets the history object and the current location in context.
	 */

	var RouterContext = _react2.default.createClass({
	  displayName: 'RouterContext',


	  propTypes: {
	    history: object,
	    router: object.isRequired,
	    location: object.isRequired,
	    routes: array.isRequired,
	    params: object.isRequired,
	    components: array.isRequired,
	    createElement: func.isRequired
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      createElement: _react2.default.createElement
	    };
	  },


	  childContextTypes: {
	    history: object,
	    location: object.isRequired,
	    router: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    var _props = this.props;
	    var router = _props.router;
	    var history = _props.history;
	    var location = _props.location;

	    if (!router) {
	      process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`<RouterContext>` expects a `router` rather than a `history`') : void 0;

	      router = _extends({}, history, {
	        setRouteLeaveHook: history.listenBeforeLeavingRoute
	      });
	      delete router.listenBeforeLeavingRoute;
	    }

	    if (process.env.NODE_ENV !== 'production') {
	      location = (0, _deprecateObjectProperties2.default)(location, '`context.location` is deprecated, please use a route component\'s `props.location` instead. http://tiny.cc/router-accessinglocation');
	    }

	    return { history: history, location: location, router: router };
	  },
	  createElement: function createElement(component, props) {
	    return component == null ? null : this.props.createElement(component, props);
	  },
	  render: function render() {
	    var _this = this;

	    var _props2 = this.props;
	    var history = _props2.history;
	    var location = _props2.location;
	    var routes = _props2.routes;
	    var params = _props2.params;
	    var components = _props2.components;

	    var element = null;

	    if (components) {
	      element = components.reduceRight(function (element, components, index) {
	        if (components == null) return element; // Don't create new children; use the grandchildren.

	        var route = routes[index];
	        var routeParams = (0, _getRouteParams2.default)(route, params);
	        var props = {
	          history: history,
	          location: location,
	          params: params,
	          route: route,
	          routeParams: routeParams,
	          routes: routes
	        };

	        if ((0, _RouteUtils.isReactChildren)(element)) {
	          props.children = element;
	        } else if (element) {
	          for (var prop in element) {
	            if (Object.prototype.hasOwnProperty.call(element, prop)) props[prop] = element[prop];
	          }
	        }

	        if ((typeof components === 'undefined' ? 'undefined' : _typeof(components)) === 'object') {
	          var elements = {};

	          for (var key in components) {
	            if (Object.prototype.hasOwnProperty.call(components, key)) {
	              // Pass through the key as a prop to createElement to allow
	              // custom createElement functions to know which named component
	              // they're rendering, for e.g. matching up to fetched data.
	              elements[key] = _this.createElement(components[key], _extends({
	                key: key }, props));
	            }
	          }

	          return elements;
	        }

	        return _this.createElement(components, props);
	      }, element);
	    }

	    !(element === null || element === false || _react2.default.isValidElement(element)) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The root route must render a single element') : (0, _invariant2.default)(false) : void 0;

	    return element;
	  }
	});

	exports.default = RouterContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _PatternUtils = __webpack_require__(515);

	/**
	 * Extracts an object of params the given route cares about from
	 * the given params object.
	 */
	function getRouteParams(route, params) {
	  var routeParams = {};

	  if (!route.path) return routeParams;

	  (0, _PatternUtils.getParamNames)(route.path).forEach(function (p) {
	    if (Object.prototype.hasOwnProperty.call(params, p)) {
	      routeParams[p] = params[p];
	    }
	  });

	  return routeParams;
	}

	exports.default = getRouteParams;
	module.exports = exports['default'];

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.createRouterObject = createRouterObject;
	exports.createRoutingHistory = createRoutingHistory;

	var _deprecateObjectProperties = __webpack_require__(511);

	var _deprecateObjectProperties2 = _interopRequireDefault(_deprecateObjectProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createRouterObject(history, transitionManager) {
	  return _extends({}, history, {
	    setRouteLeaveHook: transitionManager.listenBeforeLeavingRoute,
	    isActive: transitionManager.isActive
	  });
	}

	// deprecated
	function createRoutingHistory(history, transitionManager) {
	  history = _extends({}, history, transitionManager);

	  if (process.env.NODE_ENV !== 'production') {
	    history = (0, _deprecateObjectProperties2.default)(history, '`props.history` and `context.history` are deprecated. Please use `context.router`. http://tiny.cc/router-contextchanges');
	  }

	  return history;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PropTypes = __webpack_require__(510);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var _React$PropTypes = _react2.default.PropTypes;
	var bool = _React$PropTypes.bool;
	var object = _React$PropTypes.object;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;
	var oneOfType = _React$PropTypes.oneOfType;


	function isLeftClickEvent(event) {
	  return event.button === 0;
	}

	function isModifiedEvent(event) {
	  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
	}

	// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
	function isEmptyObject(object) {
	  for (var p in object) {
	    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
	  }return true;
	}

	function createLocationDescriptor(to, _ref) {
	  var query = _ref.query;
	  var hash = _ref.hash;
	  var state = _ref.state;

	  if (query || hash || state) {
	    return { pathname: to, query: query, hash: hash, state: state };
	  }

	  return to;
	}

	/**
	 * A <Link> is used to create an <a> element that links to a route.
	 * When that route is active, the link gets the value of its
	 * activeClassName prop.
	 *
	 * For example, assuming you have the following route:
	 *
	 *   <Route path="/posts/:postID" component={Post} />
	 *
	 * You could use the following component to link to that route:
	 *
	 *   <Link to={`/posts/${post.id}`} />
	 *
	 * Links may pass along location state and/or query string parameters
	 * in the state/query props, respectively.
	 *
	 *   <Link ... query={{ show: true }} state={{ the: 'state' }} />
	 */
	var Link = _react2.default.createClass({
	  displayName: 'Link',


	  contextTypes: {
	    router: _PropTypes.routerShape
	  },

	  propTypes: {
	    to: oneOfType([string, object]).isRequired,
	    query: object,
	    hash: string,
	    state: object,
	    activeStyle: object,
	    activeClassName: string,
	    onlyActiveOnIndex: bool.isRequired,
	    onClick: func,
	    target: string
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      onlyActiveOnIndex: false,
	      style: {}
	    };
	  },
	  handleClick: function handleClick(event) {
	    !this.context.router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot handle clicks.') : (0, _invariant2.default)(false) : void 0;

	    var allowTransition = true;

	    if (this.props.onClick) this.props.onClick(event);

	    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

	    if (event.defaultPrevented === true) allowTransition = false;

	    // If target prop is set (e.g. to "_blank") let browser handle link.
	    /* istanbul ignore if: untestable with Karma */
	    if (this.props.target) {
	      if (!allowTransition) event.preventDefault();

	      return;
	    }

	    event.preventDefault();

	    if (allowTransition) {
	      var _props = this.props;
	      var to = _props.to;
	      var query = _props.query;
	      var hash = _props.hash;
	      var state = _props.state;

	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });

	      this.context.router.push(location);
	    }
	  },
	  render: function render() {
	    var _props2 = this.props;
	    var to = _props2.to;
	    var query = _props2.query;
	    var hash = _props2.hash;
	    var state = _props2.state;
	    var activeClassName = _props2.activeClassName;
	    var activeStyle = _props2.activeStyle;
	    var onlyActiveOnIndex = _props2.onlyActiveOnIndex;

	    var props = _objectWithoutProperties(_props2, ['to', 'query', 'hash', 'state', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(!(query || hash || state), 'the `query`, `hash`, and `state` props on `<Link>` are deprecated, use `<Link to={{ pathname, query, hash, state }}/>. http://tiny.cc/router-isActivedeprecated') : void 0;

	    // Ignore if rendered outside the context of router, simplifies unit testing.
	    var router = this.context.router;


	    if (router) {
	      var location = createLocationDescriptor(to, { query: query, hash: hash, state: state });
	      props.href = router.createHref(location);

	      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
	        if (router.isActive(location, onlyActiveOnIndex)) {
	          if (activeClassName) {
	            if (props.className) {
	              props.className += ' ' + activeClassName;
	            } else {
	              props.className = activeClassName;
	            }
	          }

	          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
	        }
	      }
	    }

	    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
	  }
	});

	exports.default = Link;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Link = __webpack_require__(546);

	var _Link2 = _interopRequireDefault(_Link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * An <IndexLink> is used to link to an <IndexRoute>.
	 */
	var IndexLink = _react2.default.createClass({
	  displayName: 'IndexLink',
	  render: function render() {
	    return _react2.default.createElement(_Link2.default, _extends({}, this.props, { onlyActiveOnIndex: true }));
	  }
	});

	exports.default = IndexLink;
	module.exports = exports['default'];

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = withRouter;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _hoistNonReactStatics = __webpack_require__(488);

	var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

	var _PropTypes = __webpack_require__(510);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	}

	function withRouter(WrappedComponent) {
	  var WithRouter = _react2.default.createClass({
	    displayName: 'WithRouter',

	    contextTypes: { router: _PropTypes.routerShape },
	    render: function render() {
	      return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { router: this.context.router }));
	    }
	  });

	  WithRouter.displayName = 'withRouter(' + getDisplayName(WrappedComponent) + ')';
	  WithRouter.WrappedComponent = WrappedComponent;

	  return (0, _hoistNonReactStatics2.default)(WithRouter, WrappedComponent);
	}
	module.exports = exports['default'];

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Redirect = __webpack_require__(550);

	var _Redirect2 = _interopRequireDefault(_Redirect);

	var _InternalPropTypes = __webpack_require__(514);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * An <IndexRedirect> is used to redirect from an indexRoute.
	 */

	var IndexRedirect = _react2.default.createClass({
	  displayName: 'IndexRedirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = _Redirect2.default.createRouteFromReactElement(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRedirect> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRedirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRedirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(509);

	var _PatternUtils = __webpack_require__(515);

	var _InternalPropTypes = __webpack_require__(514);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var object = _React$PropTypes.object;

	/**
	 * A <Redirect> is used to declare another URL path a client should
	 * be sent to when they request a given URL.
	 *
	 * Redirects are placed alongside routes in the route configuration
	 * and are traversed in the same manner.
	 */

	var Redirect = _react2.default.createClass({
	  displayName: 'Redirect',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element) {
	      var route = (0, _RouteUtils.createRouteFromReactElement)(element);

	      if (route.from) route.path = route.from;

	      route.onEnter = function (nextState, replace) {
	        var location = nextState.location;
	        var params = nextState.params;


	        var pathname = void 0;
	        if (route.to.charAt(0) === '/') {
	          pathname = (0, _PatternUtils.formatPattern)(route.to, params);
	        } else if (!route.to) {
	          pathname = location.pathname;
	        } else {
	          var routeIndex = nextState.routes.indexOf(route);
	          var parentPattern = Redirect.getRoutePattern(nextState.routes, routeIndex - 1);
	          var pattern = parentPattern.replace(/\/*$/, '/') + route.to;
	          pathname = (0, _PatternUtils.formatPattern)(pattern, params);
	        }

	        replace({
	          pathname: pathname,
	          query: route.query || location.query,
	          state: route.state || location.state
	        });
	      };

	      return route;
	    },
	    getRoutePattern: function getRoutePattern(routes, routeIndex) {
	      var parentPattern = '';

	      for (var i = routeIndex; i >= 0; i--) {
	        var route = routes[i];
	        var pattern = route.path || '';

	        parentPattern = pattern.replace(/\/*$/, '/') + parentPattern;

	        if (pattern.indexOf('/') === 0) break;
	      }

	      return '/' + parentPattern;
	    }
	  },

	  propTypes: {
	    path: string,
	    from: string, // Alias for path
	    to: string.isRequired,
	    query: object,
	    state: object,
	    onEnter: _InternalPropTypes.falsy,
	    children: _InternalPropTypes.falsy
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Redirect> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Redirect;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(509);

	var _InternalPropTypes = __webpack_require__(514);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var func = _react2.default.PropTypes.func;

	/**
	 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
	 * a JSX route config.
	 */

	var IndexRoute = _react2.default.createClass({
	  displayName: 'IndexRoute',


	  statics: {
	    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
	      /* istanbul ignore else: sanity check */
	      if (parentRoute) {
	        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
	      } else {
	        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
	      }
	    }
	  },

	  propTypes: {
	    path: _InternalPropTypes.falsy,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = IndexRoute;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _RouteUtils = __webpack_require__(509);

	var _InternalPropTypes = __webpack_require__(514);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _React$PropTypes = _react2.default.PropTypes;
	var string = _React$PropTypes.string;
	var func = _React$PropTypes.func;

	/**
	 * A <Route> is used to declare which components are rendered to the
	 * page when the URL matches a given pattern.
	 *
	 * Routes are arranged in a nested tree structure. When a new URL is
	 * requested, the tree is searched depth-first to find a route whose
	 * path matches the URL.  When one is found, all routes in the tree
	 * that lead to it are considered "active" and their components are
	 * rendered into the DOM, nested in the same order as in the tree.
	 */

	var Route = _react2.default.createClass({
	  displayName: 'Route',


	  statics: {
	    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
	  },

	  propTypes: {
	    path: string,
	    component: _InternalPropTypes.component,
	    components: _InternalPropTypes.components,
	    getComponent: func,
	    getComponents: func
	  },

	  /* istanbul ignore next: sanity check */
	  render: function render() {
	     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
	  }
	});

	exports.default = Route;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _InternalPropTypes = __webpack_require__(514);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * A mixin that adds the "history" instance variable to components.
	 */
	var History = {

	  contextTypes: {
	    history: _InternalPropTypes.history
	  },

	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `History` mixin is deprecated, please access `context.router` with your own `contextTypes`. http://tiny.cc/router-historymixin') : void 0;
	    this.history = this.context.history;
	  }
	};

	exports.default = History;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The Lifecycle mixin adds the routerWillLeave lifecycle method to a
	 * component that may be used to cancel a transition or prompt the user
	 * for confirmation.
	 *
	 * On standard transitions, routerWillLeave receives a single argument: the
	 * location we're transitioning to. To cancel the transition, return false.
	 * To prompt the user for confirmation, return a prompt message (string).
	 *
	 * During the beforeunload event (assuming you're using the useBeforeUnload
	 * history enhancer), routerWillLeave does not receive a location object
	 * because it isn't possible for us to know the location we're transitioning
	 * to. In this case routerWillLeave must return a prompt message to prevent
	 * the user from closing the window/tab.
	 */

	var Lifecycle = {

	  contextTypes: {
	    history: object.isRequired,
	    // Nested children receive the route as context, either
	    // set by the route component using the RouteContext mixin
	    // or by some other ancestor.
	    route: object
	  },

	  propTypes: {
	    // Route components receive the route object as a prop.
	    route: object
	  },

	  componentDidMount: function componentDidMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'the `Lifecycle` mixin is deprecated, please use `context.router.setRouteLeaveHook(route, hook)`. http://tiny.cc/router-lifecyclemixin') : void 0;
	    !this.routerWillLeave ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin requires you to define a routerWillLeave method') : (0, _invariant2.default)(false) : void 0;

	    var route = this.props.route || this.context.route;

	    !route ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'The Lifecycle mixin must be used on either a) a <Route component> or ' + 'b) a descendant of a <Route component> that uses the RouteContext mixin') : (0, _invariant2.default)(false) : void 0;

	    this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(route, this.routerWillLeave);
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    if (this._unlistenBeforeLeavingRoute) this._unlistenBeforeLeavingRoute();
	  }
	};

	exports.default = Lifecycle;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var object = _react2.default.PropTypes.object;

	/**
	 * The RouteContext mixin provides a convenient way for route
	 * components to set the route in context. This is needed for
	 * routes that render elements that want to use the Lifecycle
	 * mixin to prevent transitions.
	 */

	var RouteContext = {

	  propTypes: {
	    route: object.isRequired
	  },

	  childContextTypes: {
	    route: object.isRequired
	  },

	  getChildContext: function getChildContext() {
	    return {
	      route: this.props.route
	    };
	  },
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'The `RouteContext` mixin is deprecated. You can provide `this.props.route` on context with your own `contextTypes`. http://tiny.cc/router-routecontextmixin') : void 0;
	  }
	};

	exports.default = RouteContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _useQueries = __webpack_require__(532);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _createTransitionManager = __webpack_require__(535);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * Returns a new createHistory function that may be used to create
	 * history objects that know about routing.
	 *
	 * Enhances history objects with the following methods:
	 *
	 * - listen((error, nextState) => {})
	 * - listenBeforeLeavingRoute(route, (nextLocation) => {})
	 * - match(location, (error, redirectLocation, nextState) => {})
	 * - isActive(pathname, query, indexOnly=false)
	 */
	function useRoutes(createHistory) {
	  process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`useRoutes` is deprecated. Please use `createTransitionManager` instead.') : void 0;

	  return function () {
	    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var routes = _ref.routes;

	    var options = _objectWithoutProperties(_ref, ['routes']);

	    var history = (0, _useQueries2.default)(createHistory)(options);
	    var transitionManager = (0, _createTransitionManager2.default)(history, routes);
	    return _extends({}, history, transitionManager);
	  };
	}

	exports.default = useRoutes;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(543);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	var _routerWarning = __webpack_require__(512);

	var _routerWarning2 = _interopRequireDefault(_routerWarning);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RoutingContext = _react2.default.createClass({
	  displayName: 'RoutingContext',
	  componentWillMount: function componentWillMount() {
	    process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, '`RoutingContext` has been renamed to `RouterContext`. Please use `import { RouterContext } from \'react-router\'`. http://tiny.cc/router-routercontext') : void 0;
	  },
	  render: function render() {
	    return _react2.default.createElement(_RouterContext2.default, this.props);
	  }
	});

	exports.default = RoutingContext;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _createMemoryHistory = __webpack_require__(559);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	var _createTransitionManager = __webpack_require__(535);

	var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

	var _RouteUtils = __webpack_require__(509);

	var _RouterUtils = __webpack_require__(545);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	/**
	 * A high-level API to be used for server-side rendering.
	 *
	 * This function matches a location to a set of routes and calls
	 * callback(error, redirectLocation, renderProps) when finished.
	 *
	 * Note: You probably don't want to use this in a browser unless you're using
	 * server-side rendering with async routes.
	 */
	function match(_ref, callback) {
	  var history = _ref.history;
	  var routes = _ref.routes;
	  var location = _ref.location;

	  var options = _objectWithoutProperties(_ref, ['history', 'routes', 'location']);

	  !(history || location) ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, 'match needs a history or a location') : (0, _invariant2.default)(false) : void 0;

	  history = history ? history : (0, _createMemoryHistory2.default)(options);
	  var transitionManager = (0, _createTransitionManager2.default)(history, (0, _RouteUtils.createRoutes)(routes));

	  var unlisten = void 0;

	  if (location) {
	    // Allow match({ location: '/the/path', ... })
	    location = history.createLocation(location);
	  } else {
	    // Pick up the location from the history via synchronous history.listen
	    // call if needed.
	    unlisten = history.listen(function (historyLocation) {
	      location = historyLocation;
	    });
	  }

	  var router = (0, _RouterUtils.createRouterObject)(history, transitionManager);
	  history = (0, _RouterUtils.createRoutingHistory)(history, transitionManager);

	  transitionManager.match(location, function (error, redirectLocation, nextState) {
	    callback(error, redirectLocation, nextState && _extends({}, nextState, {
	      history: history,
	      router: router,
	      matchContext: { history: history, transitionManager: transitionManager, router: router }
	    }));

	    // Defer removing the listener to here to prevent DOM histories from having
	    // to unwind DOM event listeners unnecessarily, in case callback renders a
	    // <Router> and attaches another history listener.
	    if (unlisten) {
	      unlisten();
	    }
	  });
	}

	exports.default = match;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = createMemoryHistory;

	var _useQueries = __webpack_require__(532);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(560);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	var _createMemoryHistory = __webpack_require__(561);

	var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createMemoryHistory(options) {
	  // signatures and type checking differ between `useRoutes` and
	  // `createMemoryHistory`, have to create `memoryHistory` first because
	  // `useQueries` doesn't understand the signature
	  var memoryHistory = (0, _createMemoryHistory2.default)(options);
	  var createHistory = function createHistory() {
	    return memoryHistory;
	  };
	  var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	  history.__v2_compatible__ = true;
	  return history;
	}
	module.exports = exports['default'];

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _ExecutionEnvironment = __webpack_require__(520);

	var _PathUtils = __webpack_require__(519);

	var _runTransitionHook = __webpack_require__(530);

	var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

	var _deprecate = __webpack_require__(531);

	var _deprecate2 = _interopRequireDefault(_deprecate);

	function useBasename(createHistory) {
	  return function () {
	    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	    var history = createHistory(options);

	    var basename = options.basename;

	    var checkedBaseHref = false;

	    function checkBaseHref() {
	      if (checkedBaseHref) {
	        return;
	      }

	      // Automatically use the value of <base href> in HTML
	      // documents as basename if it's not explicitly given.
	      if (basename == null && _ExecutionEnvironment.canUseDOM) {
	        var base = document.getElementsByTagName('base')[0];
	        var baseHref = base && base.getAttribute('href');

	        if (baseHref != null) {
	          basename = baseHref;

	          process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Automatically setting basename using <base href> is deprecated and will ' + 'be removed in the next major release. The semantics of <base href> are ' + 'subtly different from basename. Please pass the basename explicitly in ' + 'the options to createHistory') : undefined;
	        }
	      }

	      checkedBaseHref = true;
	    }

	    function addBasename(location) {
	      checkBaseHref();

	      if (basename && location.basename == null) {
	        if (location.pathname.indexOf(basename) === 0) {
	          location.pathname = location.pathname.substring(basename.length);
	          location.basename = basename;

	          if (location.pathname === '') location.pathname = '/';
	        } else {
	          location.basename = '';
	        }
	      }

	      return location;
	    }

	    function prependBasename(location) {
	      checkBaseHref();

	      if (!basename) return location;

	      if (typeof location === 'string') location = _PathUtils.parsePath(location);

	      var pname = location.pathname;
	      var normalizedBasename = basename.slice(-1) === '/' ? basename : basename + '/';
	      var normalizedPathname = pname.charAt(0) === '/' ? pname.slice(1) : pname;
	      var pathname = normalizedBasename + normalizedPathname;

	      return _extends({}, location, {
	        pathname: pathname
	      });
	    }

	    // Override all read methods with basename-aware versions.
	    function listenBefore(hook) {
	      return history.listenBefore(function (location, callback) {
	        _runTransitionHook2['default'](hook, addBasename(location), callback);
	      });
	    }

	    function listen(listener) {
	      return history.listen(function (location) {
	        listener(addBasename(location));
	      });
	    }

	    // Override all write methods with basename-aware versions.
	    function push(location) {
	      history.push(prependBasename(location));
	    }

	    function replace(location) {
	      history.replace(prependBasename(location));
	    }

	    function createPath(location) {
	      return history.createPath(prependBasename(location));
	    }

	    function createHref(location) {
	      return history.createHref(prependBasename(location));
	    }

	    function createLocation(location) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      return addBasename(history.createLocation.apply(history, [prependBasename(location)].concat(args)));
	    }

	    // deprecated
	    function pushState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      push(_extends({ state: state }, path));
	    }

	    // deprecated
	    function replaceState(state, path) {
	      if (typeof path === 'string') path = _PathUtils.parsePath(path);

	      replace(_extends({ state: state }, path));
	    }

	    return _extends({}, history, {
	      listenBefore: listenBefore,
	      listen: listen,
	      push: push,
	      replace: replace,
	      createPath: createPath,
	      createHref: createHref,
	      createLocation: createLocation,

	      pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
	      replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
	    });
	  };
	}

	exports['default'] = useBasename;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _warning = __webpack_require__(513);

	var _warning2 = _interopRequireDefault(_warning);

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _PathUtils = __webpack_require__(519);

	var _Actions = __webpack_require__(518);

	var _createHistory = __webpack_require__(524);

	var _createHistory2 = _interopRequireDefault(_createHistory);

	function createStateStorage(entries) {
	  return entries.filter(function (entry) {
	    return entry.state;
	  }).reduce(function (memo, entry) {
	    memo[entry.key] = entry.state;
	    return memo;
	  }, {});
	}

	function createMemoryHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  if (Array.isArray(options)) {
	    options = { entries: options };
	  } else if (typeof options === 'string') {
	    options = { entries: [options] };
	  }

	  var history = _createHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: saveState,
	    go: go
	  }));

	  var _options = options;
	  var entries = _options.entries;
	  var current = _options.current;

	  if (typeof entries === 'string') {
	    entries = [entries];
	  } else if (!Array.isArray(entries)) {
	    entries = ['/'];
	  }

	  entries = entries.map(function (entry) {
	    var key = history.createKey();

	    if (typeof entry === 'string') return { pathname: entry, key: key };

	    if (typeof entry === 'object' && entry) return _extends({}, entry, { key: key });

	     true ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Unable to create history entry from %s', entry) : _invariant2['default'](false) : undefined;
	  });

	  if (current == null) {
	    current = entries.length - 1;
	  } else {
	    !(current >= 0 && current < entries.length) ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Current index must be >= 0 and < %s, was %s', entries.length, current) : _invariant2['default'](false) : undefined;
	  }

	  var storage = createStateStorage(entries);

	  function saveState(key, state) {
	    storage[key] = state;
	  }

	  function readState(key) {
	    return storage[key];
	  }

	  function getCurrentLocation() {
	    var entry = entries[current];
	    var basename = entry.basename;
	    var pathname = entry.pathname;
	    var search = entry.search;

	    var path = (basename || '') + pathname + (search || '');

	    var key = undefined,
	        state = undefined;
	    if (entry.key) {
	      key = entry.key;
	      state = readState(key);
	    } else {
	      key = history.createKey();
	      state = null;
	      entry.key = key;
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function canGo(n) {
	    var index = current + n;
	    return index >= 0 && index < entries.length;
	  }

	  function go(n) {
	    if (n) {
	      if (!canGo(n)) {
	        process.env.NODE_ENV !== 'production' ? _warning2['default'](false, 'Cannot go(%s) there is not enough history', n) : undefined;
	        return;
	      }

	      current += n;

	      var currentLocation = getCurrentLocation();

	      // change action to POP
	      history.transitionTo(_extends({}, currentLocation, { action: _Actions.POP }));
	    }
	  }

	  function finishTransition(location) {
	    switch (location.action) {
	      case _Actions.PUSH:
	        current += 1;

	        // if we are not on the top of stack
	        // remove rest and push new
	        if (current < entries.length) entries.splice(current);

	        entries.push(location);
	        saveState(location.key, location.state);
	        break;
	      case _Actions.REPLACE:
	        entries[current] = location;
	        saveState(location.key, location.state);
	        break;
	    }
	  }

	  return history;
	}

	exports['default'] = createMemoryHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = useRouterHistory;

	var _useQueries = __webpack_require__(532);

	var _useQueries2 = _interopRequireDefault(_useQueries);

	var _useBasename = __webpack_require__(560);

	var _useBasename2 = _interopRequireDefault(_useBasename);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function useRouterHistory(createHistory) {
	  return function (options) {
	    var history = (0, _useQueries2.default)((0, _useBasename2.default)(createHistory))(options);
	    history.__v2_compatible__ = true;
	    return history;
	  };
	}
	module.exports = exports['default'];

/***/ },

/***/ 563:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _RouterContext = __webpack_require__(543);

	var _RouterContext2 = _interopRequireDefault(_RouterContext);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
	    middlewares[_key] = arguments[_key];
	  }

	  var withContext = middlewares.map(function (m) {
	    return m.renderRouterContext;
	  }).filter(function (f) {
	    return f;
	  });
	  var withComponent = middlewares.map(function (m) {
	    return m.renderRouteComponent;
	  }).filter(function (f) {
	    return f;
	  });
	  var makeCreateElement = function makeCreateElement() {
	    var baseCreateElement = arguments.length <= 0 || arguments[0] === undefined ? _react.createElement : arguments[0];
	    return function (Component, props) {
	      return withComponent.reduceRight(function (previous, renderRouteComponent) {
	        return renderRouteComponent(previous, props);
	      }, baseCreateElement(Component, props));
	    };
	  };

	  return function (renderProps) {
	    return withContext.reduceRight(function (previous, renderRouterContext) {
	      return renderRouterContext(previous, renderProps);
	    }, _react2.default.createElement(_RouterContext2.default, _extends({}, renderProps, {
	      createElement: makeCreateElement(renderProps.createElement)
	    })));
	  };
	};

	module.exports = exports['default'];

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createBrowserHistory = __webpack_require__(565);

	var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

	var _createRouterHistory = __webpack_require__(566);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createBrowserHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 565:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _invariant = __webpack_require__(489);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _Actions = __webpack_require__(518);

	var _PathUtils = __webpack_require__(519);

	var _ExecutionEnvironment = __webpack_require__(520);

	var _DOMUtils = __webpack_require__(521);

	var _DOMStateStorage = __webpack_require__(522);

	var _createDOMHistory = __webpack_require__(523);

	var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

	/**
	 * Creates and returns a history object that uses HTML5's history API
	 * (pushState, replaceState, and the popstate event) to manage history.
	 * This is the recommended method of managing history in browsers because
	 * it provides the cleanest URLs.
	 *
	 * Note: In browsers that do not support the HTML5 history API full
	 * page reloads will be used to preserve URLs.
	 */
	function createBrowserHistory() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

	  var forceRefresh = options.forceRefresh;

	  var isSupported = _DOMUtils.supportsHistory();
	  var useRefresh = !isSupported || forceRefresh;

	  function getCurrentLocation(historyState) {
	    try {
	      historyState = historyState || window.history.state || {};
	    } catch (e) {
	      historyState = {};
	    }

	    var path = _DOMUtils.getWindowPath();
	    var _historyState = historyState;
	    var key = _historyState.key;

	    var state = undefined;
	    if (key) {
	      state = _DOMStateStorage.readState(key);
	    } else {
	      state = null;
	      key = history.createKey();

	      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null);
	    }

	    var location = _PathUtils.parsePath(path);

	    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
	  }

	  function startPopStateListener(_ref) {
	    var transitionTo = _ref.transitionTo;

	    function popStateListener(event) {
	      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

	      transitionTo(getCurrentLocation(event.state));
	    }

	    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

	    return function () {
	      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
	    };
	  }

	  function finishTransition(location) {
	    var basename = location.basename;
	    var pathname = location.pathname;
	    var search = location.search;
	    var hash = location.hash;
	    var state = location.state;
	    var action = location.action;
	    var key = location.key;

	    if (action === _Actions.POP) return; // Nothing to do.

	    _DOMStateStorage.saveState(key, state);

	    var path = (basename || '') + pathname + search + hash;
	    var historyState = {
	      key: key
	    };

	    if (action === _Actions.PUSH) {
	      if (useRefresh) {
	        window.location.href = path;
	        return false; // Prevent location update.
	      } else {
	          window.history.pushState(historyState, null, path);
	        }
	    } else {
	      // REPLACE
	      if (useRefresh) {
	        window.location.replace(path);
	        return false; // Prevent location update.
	      } else {
	          window.history.replaceState(historyState, null, path);
	        }
	    }
	  }

	  var history = _createDOMHistory2['default'](_extends({}, options, {
	    getCurrentLocation: getCurrentLocation,
	    finishTransition: finishTransition,
	    saveState: _DOMStateStorage.saveState
	  }));

	  var listenerCount = 0,
	      stopPopStateListener = undefined;

	  function listenBefore(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listenBefore(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  function listen(listener) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    var unlisten = history.listen(listener);

	    return function () {
	      unlisten();

	      if (--listenerCount === 0) stopPopStateListener();
	    };
	  }

	  // deprecated
	  function registerTransitionHook(hook) {
	    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

	    history.registerTransitionHook(hook);
	  }

	  // deprecated
	  function unregisterTransitionHook(hook) {
	    history.unregisterTransitionHook(hook);

	    if (--listenerCount === 0) stopPopStateListener();
	  }

	  return _extends({}, history, {
	    listenBefore: listenBefore,
	    listen: listen,
	    registerTransitionHook: registerTransitionHook,
	    unregisterTransitionHook: unregisterTransitionHook
	  });
	}

	exports['default'] = createBrowserHistory;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(295)))

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (createHistory) {
	  var history = void 0;
	  if (canUseDOM) history = (0, _useRouterHistory2.default)(createHistory)();
	  return history;
	};

	var _useRouterHistory = __webpack_require__(562);

	var _useRouterHistory2 = _interopRequireDefault(_useRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

	module.exports = exports['default'];

/***/ },

/***/ 567:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createHashHistory = __webpack_require__(517);

	var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

	var _createRouterHistory = __webpack_require__(566);

	var _createRouterHistory2 = _interopRequireDefault(_createRouterHistory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createRouterHistory2.default)(_createHashHistory2.default);
	module.exports = exports['default'];

/***/ },

/***/ 568:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InverseButton":"Button__InverseButton___3OQXU","InverseButton_accent1":"Button__InverseButton_accent1___aVIWO","InverseButton_accent2":"Button__InverseButton_accent2___3AOm6","InverseButton_error":"Button__InverseButton_error___3idBZ","Button":"Button__Button___QI7b2","Button_accent1":"Button__Button_accent1___1dfhw","Button_accent2":"Button__Button_accent2___Zn8z9","Button_error":"Button__Button_error___3PSUX"};

/***/ },

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(570);

	var _Badge2 = _interopRequireDefault(_Badge);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var baseline = 0.750;


	var Badge = function Badge(_ref) {
	  var label = _ref.label;
	  var _ref$theme = _ref.theme;
	  var theme = _ref$theme === undefined ? 'default' : _ref$theme;
	  var _ref$small = _ref.small;
	  var small = _ref$small === undefined ? false : _ref$small;

	  var style = {
	    lineHeight: 3 * baseline + 'rem'
	  };

	  if (small) {
	    style.lineHeight = 2.5 * baseline + 'rem';
	  }

	  var classNames = [_Badge2.default.Badge];

	  switch (theme) {
	    case 'accent1':
	      classNames.push(_Badge2.default.Badge_accent1);
	      break;
	    case 'accent2':
	      classNames.push(_Badge2.default.Badge_accent2);
	      break;
	    case 'accent3':
	      classNames.push(_Badge2.default.Badge_accent3);
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
	    { style: style, className: classNames.join(' ') },
	    label
	  );
	};

	exports.default = Badge;

/***/ },

/***/ 570:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Badge":"Badge__Badge___Mrw9n","Badge_default":"Badge__Badge_default___1Pb_i","Badge_accent1":"Badge__Badge_accent1___3010l","Badge_accent2":"Badge__Badge_accent2___1sHHc","Badge_error":"Badge__Badge_error___xLOxa","Badge_success":"Badge__Badge_success___3_w9D"};

/***/ },

/***/ 571:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(572);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextInput = __webpack_require__(574);

	var _TextInput2 = _interopRequireDefault(_TextInput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var TextInput = function (_React$Component) {
	  _inherits(TextInput, _React$Component);

	  function TextInput(props) {
	    _classCallCheck(this, TextInput);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextInput).call(this, props));

	    _this.changeCallback = _this.changeCallback.bind(_this);
	    return _this;
	  }

	  _createClass(TextInput, [{
	    key: 'changeCallback',
	    value: function changeCallback() {
	      var value = this._element.value;
	      var onChange = this.props.onChange;


	      onChange(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var label = _props.label;
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var type = _props.type;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$multipliers = this.props.multipliers;
	      var multipliers = _props$multipliers === undefined ? {
	        padding: {
	          vertical: 1,
	          horizontal: 2
	        }
	      } : _props$multipliers;


	      var style = {
	        padding: baseline * multipliers.padding.vertical + 'rem ' + baseline * multipliers.padding.horizontal + 'rem'
	      };

	      return _react2.default.createElement(
	        'label',
	        { className: _TextInput2.default.TextInput },
	        label ? _react2.default.createElement(_InputLabel2.default, { label: label, error: error }) : null,
	        _react2.default.createElement('input', { style: style,
	          ref: function ref(el) {
	            _this2._element = el;
	          },
	          type: type,
	          value: value,
	          className: _TextInput2.default.TextInput__input + ' ' + (error ? _TextInput2.default.TextInput__input_error : null),
	          disabled: disabled,
	          onChange: this.changeCallback,
	          placeholder: placeholder })
	      );
	    }
	  }]);

	  return TextInput;
	}(_react2.default.Component);

		exports.default = TextInput;

/***/ },

/***/ 572:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(573);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _Layouts = __webpack_require__(492);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var InputLabel = function InputLabel(_ref) {
	  var label = _ref.label;
	  var error = _ref.error;

	  return _react2.default.createElement(
	    'div',
	    { className: _InputLabel2.default.InputLabel + ' ' + (error ? _InputLabel2.default.InputLabel_error : '') },
	    _react2.default.createElement(
	      _Layouts.ListInline,
	      null,
	      _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _InputLabel2.default.InputLabel__label },
	          label
	        )
	      ),
	      error ? _react2.default.createElement(
	        _Layouts.ListInlineItem,
	        null,
	        _react2.default.createElement(
	          'div',
	          { className: _InputLabel2.default.InputLabel__error },
	          error
	        )
	      ) : null
	    )
	  );
	};

	exports.default = InputLabel;

/***/ },

/***/ 573:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"InputLabel":"InputLabel__InputLabel___1CemI","InputLabel__label":"InputLabel__InputLabel__label___2Yy_P","InputLabel__error":"InputLabel__InputLabel__error___2MFNd","InputLabel_error":"InputLabel__InputLabel_error___3Ep5q"};

/***/ },

/***/ 574:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextInput":"TextInput__TextInput___1ACGY","TextInput__input":"TextInput__TextInput__input___1ryf3","TextInput__input_error":"TextInput__TextInput__input_error___3pTJz"};

/***/ },

/***/ 575:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _InputLabel = __webpack_require__(572);

	var _InputLabel2 = _interopRequireDefault(_InputLabel);

	var _TextArea = __webpack_require__(576);

	var _TextArea2 = _interopRequireDefault(_TextArea);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var baseline = 0.750;

	var TextArea = function (_React$Component) {
	  _inherits(TextArea, _React$Component);

	  function TextArea(props) {
	    _classCallCheck(this, TextArea);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextArea).call(this, props));

	    _this.onChange = _this.onChange.bind(_this);
	    return _this;
	  }

	  _createClass(TextArea, [{
	    key: 'onChange',
	    value: function onChange() {
	      var value = this._element.value;
	      var changeCallback = this.props.changeCallback;


	      changeCallback(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var label = _props.label;
	      var error = _props.error;
	      var value = _props.value;
	      var placeholder = _props.placeholder;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;
	      var _props$multipliers = this.props.multipliers;
	      var multipliers = _props$multipliers === undefined ? {
	        padding: {
	          vertical: 1,
	          horizontal: 2
	        }
	      } : _props$multipliers;


	      var style = {
	        padding: baseline * multipliers.padding.vertical + ' ' + baseline * multipliers.padding.horizontal
	      };

	      return _react2.default.createElement(
	        'label',
	        { className: _TextArea2.default.TextArea },
	        label ? _react2.default.createElement(_InputLabel2.default, { label: label, error: error }) : null,
	        _react2.default.createElement('textarea', { style: style,
	          ref: function ref(el) {
	            _this2._element = el;
	          },
	          value: value,
	          className: _TextArea2.default.TextArea__input + ' ' + (error ? _TextArea2.default.TextArea__input_error : null),
	          disabled: disabled,
	          rows: 5,
	          type: 'text',
	          onChange: this.onChange,
	          placeholder: placeholder })
	      );
	    }
	  }]);

	  return TextArea;
	}(_react2.default.Component);

		exports.default = TextArea;

/***/ },

/***/ 576:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TextArea":"TextArea__TextArea___19ip7","TextArea__input":"TextArea__TextArea__input___x5B4I","TextArea__input_error":"TextArea__TextArea__input_error___369gU"};

/***/ },

/***/ 577:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactAddonsCssTransitionGroup = __webpack_require__(578);

	var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

	var _Alert = __webpack_require__(585);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Layouts = __webpack_require__(492);

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

/***/ 585:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_default":"Alert__Alert__message_default___n_R9C","Alert__message_error":"Alert__Alert__message_error___2id4W","alert-enter":"Alert__alert-enter___K6JdL","alert-enter-active":"Alert__alert-enter-active___3vlCw","alert-leave":"Alert__alert-leave___2PpYT","alert-leave-active":"Alert__alert-leave-active___2ha_Q"};

/***/ },

/***/ 586:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(587);

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
	        labelEl = _react2.default.createElement(
	          'div',
	          { className: _Input2.default.Input__label },
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
	        _react2.default.createElement('input', { type: type,
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

/***/ 587:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___s67N0","Input__input":"Input__Input__input___wb1PD","Input__label":"Input__Input__label___9JDUu","Input__prefix":"Input__Input__prefix___3nvL9","Input__error":"Input__Input__error___fgkCD","Input_error":"Input__Input_error___2JYGy"};

/***/ },

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(589);

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
	      var _props$label = _props.label;
	      var label = _props$label === undefined ? false : _props$label;
	      var _props$disabled = _props.disabled;
	      var disabled = _props$disabled === undefined ? false : _props$disabled;


	      var labelEl = '';
	      if (label) {
	        labelEl = _react2.default.createElement(
	          'div',
	          { className: _Checkbox2.default.Checkbox__label },
	          label
	        );
	      }

	      return _react2.default.createElement(
	        'div',
	        { className: _Checkbox2.default.Checkbox },
	        labelEl,
	        _react2.default.createElement('input', { type: 'checkbox',
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

/***/ 589:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1JYQg","Checkbox__input":"Checkbox__Checkbox__input___1nDMV","Checkbox__label":"Checkbox__Checkbox__label___3OBUd"};

/***/ },

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Editor = function Editor() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    'I am editor!'
	  );
	};

	exports.default = Editor;

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(592);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(492);

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

/***/ 592:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 593:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.authenticate = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(594);

	var REQUEST_AUTH = exports.REQUEST_AUTH = 'REQUEST_AUTH';
	var LOGIN = exports.LOGIN = 'LOGIN';
	var LOGOUT = exports.LOGOUT = 'LOGOUT';

	var requestAuth = function requestAuth() {
	  return {
	    type: REQUEST_AUTH
	  };
	};

	var logOut = exports.logOut = function logOut() {
	  return {
	    type: LOGOUT
	  };
	};

	var logIn = function logIn(user, token) {
	  return {
	    type: LOGIN,
	    user: user,
	    token: token
	  };
	};

	var authenticate = exports.authenticate = function authenticate(email, password) {
	  return function (dispatch) {
	    dispatch(requestAuth());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/auth/authenticate', {
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
	        dispatch(logIn(json.data.user, json.data.token));
	      } else {
	        dispatch(logOut());
	      }
	    });
	  };
	};

/***/ },

/***/ 595:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _UI = __webpack_require__(504);

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

/***/ 596:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(508);

	var _Nav = __webpack_require__(597);

	var _Nav2 = _interopRequireDefault(_Nav);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Nav = function Nav(_ref) {
	  var items = _ref.items;

	  var navItems = items.map(function (i) {
	    return _react2.default.createElement(
	      _reactRouter.Link,
	      { key: i.id,
	        className: _Nav2.default.Nav__item,
	        activeClassName: _Nav2.default.Nav__item_active,
	        to: ("") + '/' + i.id },
	      i.label
	    );
	  });

	  return _react2.default.createElement(
	    'div',
	    { className: _Nav2.default.Nav },
	    navItems
	  );
	};

	exports.default = Nav;

/***/ },

/***/ 597:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Nav":"Nav__Nav___3Pyye","Nav__item":"Nav__Nav__item___5HbuE","Nav__item_active":"Nav__Nav__item_active___2q4tT"};

/***/ },

/***/ 598:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _authActions = __webpack_require__(593);

	var _flashActions = __webpack_require__(599);

	var _CurrentUser = __webpack_require__(600);

	var _CurrentUser2 = _interopRequireDefault(_CurrentUser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var CurrentUser = function (_React$Component) {
	  _inherits(CurrentUser, _React$Component);

	  function CurrentUser(props) {
	    _classCallCheck(this, CurrentUser);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentUser).call(this, props));

	    _this.logout = _this.logout.bind(_this);
	    return _this;
	  }

	  _createClass(CurrentUser, [{
	    key: 'logout',
	    value: function logout() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _authActions.logOut)());
	      dispatch((0, _flashActions.flashMessage)('You have been successfully logged out', 'log'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.user;


	      return _react2.default.createElement(
	        'aside',
	        { className: _CurrentUser2.default.CurrentUser },
	        _react2.default.createElement(
	          _Layouts.List,
	          { n: 2 },
	          _react2.default.createElement(
	            _Layouts.ListItem,
	            { n: 2 },
	            _react2.default.createElement(
	              _Layouts.Block,
	              null,
	              _react2.default.createElement(
	                'h1',
	                { className: _CurrentUser2.default.CurrentUser__title },
	                'Logged in as'
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: _CurrentUser2.default.CurrentUser__name },
	              user.name
	            )
	          ),
	          _react2.default.createElement(
	            _Layouts.ListItem,
	            { n: 2 },
	            _react2.default.createElement(
	              _UI.Button,
	              { fullWidth: true, theme: 'accent1', onClick: this.logout },
	              'Log out'
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return CurrentUser;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    user: state.auth.user ? state.auth.user : {}
	  };
		})(CurrentUser);

/***/ },

/***/ 599:
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

/***/ 600:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"CurrentUser":"CurrentUser__CurrentUser___1WaU6","CurrentUser__title":"CurrentUser__CurrentUser__title___1oSop","CurrentUser__name":"CurrentUser__CurrentUser__name___12hIZ"};

/***/ },

/***/ 601:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 602:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(475);

	var _reduxLogger = __webpack_require__(603);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(604);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(605);

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

/***/ 605:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(475);

	var _authReducer = __webpack_require__(606);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(608);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(609);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _faqsReducer = __webpack_require__(611);

	var _faqsReducer2 = _interopRequireDefault(_faqsReducer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var rootReducer = (0, _redux.combineReducers)({
	  auth: _authReducer2.default,
	  flash: _flashReducer2.default,
	  questions: _questionsReducer2.default,
	  faqs: _faqsReducer2.default
	});

		exports.default = rootReducer;

/***/ },

/***/ 606:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(593);

	var _initialState = __webpack_require__(607);

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
	        user: action.user,
	        token: action.token
	      };
	    case _authActions.LOGOUT:
	      return {
	        isFetching: false,
	        user: null,
	        token: null
	      };
	    default:
	      return state;
	  }
	};

	exports.default = auth;

/***/ },

/***/ 607:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  auth: {
	    isFetching: false,
	    user: {
	      id: 'velz',
	      name: 'Volodymyr Dziubak',
	      email: 'volodymyr.dzyubak@gmail.com',
	      admin: true
	    },
	    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InZlbHoiLCJuYW1lIjoiVm9sb2R5bXlyIER6aXViYWsiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNDY3OTkzMzgyLCJleHAiOjE0NjgwNzk3ODJ9.mz8WGnCa1WJDA4W9uiydJ43-5tdJ0lpU3bq0UvXIG7k'
	    // user: null,
	    // token: null
	    // token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXIiLCJuYW1lIjoiVXNlciIsImlhdCI6MTQ2Nzk5NTA5NSwiZXhwIjoxNDY4MDgxNDk1fQ.mX_1770_GlKiY_HHTAGCqrBafG6C1zRiN4ww02WGQf0' // user's token
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
	    isUpdating: true,
	    data: {}
	  },
	  faqs: {
	    isFetching: true,
	    items: []
	  },
	  faq: {
	    isDirty: false,
	    isUpdating: true,
	    data: {},
	    errors: {}
	  },
	  blogposts: {
	    isFetching: true,
	    items: []
	  },
	  sections: {
	    isFetching: true,
	    items: []
	  },
	  users: {
	    isFetching: true,
	    items: []
	  }
		};

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(599);

	var _initialState = __webpack_require__(607);

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

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(610);

	var _initialState = __webpack_require__(607);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var question = function question() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.question : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _questionsActions.RECEIVE_QUESTIONS:
	      return {
	        isUpdating: false,
	        data: state
	      };
	    case _questionsActions.REQUEST_QUESTION_UPDATE:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _questionsActions.RECEIVE_QUESTION_UPDATE:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          data: action.updatedQuestion,
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
	          return question(i, action);
	        })
	      };
	    case _questionsActions.REQUEST_QUESTION_UPDATE:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return question(i, action);
	        })
	      });
	    case _questionsActions.RECEIVE_QUESTION_UPDATE:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return question(i, action);
	        })
	      });
	    default:
	      return state;
	  }
	};

	exports.default = questions;

/***/ },

/***/ 610:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateQuestion = exports.fetchQuestions = exports.RECEIVE_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = exports.RECEIVE_QUESTIONS = exports.REQUEST_QUESTIONS = undefined;

	__webpack_require__(594);

	var _flashActions = __webpack_require__(599);

	var _authActions = __webpack_require__(593);

	var REQUEST_QUESTIONS = exports.REQUEST_QUESTIONS = 'REQUEST_QUESTIONS';
	var RECEIVE_QUESTIONS = exports.RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
	var REQUEST_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = 'REQUEST_QUESTION_UPDATE';
	var RECEIVE_QUESTION_UPDATE = exports.RECEIVE_QUESTION_UPDATE = 'RECEIVE_QUESTION_UPDATE';

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
	        'x-access-token': getState().auth.token
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
	        dispatch((0, _flashActions.flashMessage)(json.message));
	      }
	    }).catch(function (err) {
	      throw err;
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

	var updateQuestion = exports.updateQuestion = function updateQuestion(id, data) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/questions/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': getState().auth.token
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
	      } else {
	        dispatch((0, _flashActions.flashMessage)(json.message));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

/***/ },

/***/ 611:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _faqsActions = __webpack_require__(612);

	var _initialState = __webpack_require__(607);

	var _initialState2 = _interopRequireDefault(_initialState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var faq = function faq() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.faq : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _faqsActions.RECEIVE_FAQS:
	      return {
	        isUpdating: false,
	        data: state
	      };
	    case _faqsActions.REQUEST_FAQ_UPDATE:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          isUpdating: true
	        });
	      } else {
	        return state;
	      }
	    case _faqsActions.RECEIVE_FAQ_UPDATE:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          data: action.updatedFaq,
	          isDirty: false,
	          isUpdating: false,
	          errors: {}
	        });
	      } else {
	        return state;
	      }
	    case _faqsActions.RECEIVE_FAQ_ERRORS:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          isUpdating: false,
	          errors: action.errors
	        });
	      } else {
	        return state;
	      }
	    case _faqsActions.MARK_FAQ_DIRTY:
	      if (state.data.id === action.id) {
	        return _extends({}, state, {
	          isDirty: true
	        });
	      } else {
	        return state;
	      }
	    default:
	      return state;
	  }
	};

	var faqs = function faqs() {
	  var state = arguments.length <= 0 || arguments[0] === undefined ? _initialState2.default.faqs : arguments[0];
	  var action = arguments[1];

	  switch (action.type) {
	    case _faqsActions.REQUEST_FAQS:
	      return _extends({}, state, {
	        isFetching: true
	      });
	    case _faqsActions.RECEIVE_FAQS:
	      return {
	        isFetching: false,
	        items: action.items.map(function (i) {
	          return faq(i, action);
	        })
	      };
	    case _faqsActions.REQUEST_FAQ_UPDATE:
	    case _faqsActions.RECEIVE_FAQ_UPDATE:
	    case _faqsActions.RECEIVE_FAQ_ERRORS:
	    case _faqsActions.MARK_FAQ_DIRTY:
	      return _extends({}, state, {
	        items: state.items.map(function (i) {
	          return faq(i, action);
	        })
	      });
	    default:
	      return state;
	  }
	};

	exports.default = faqs;

/***/ },

/***/ 612:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.markFaqDirty = exports.updateFaq = exports.fetchFaqs = exports.MARK_FAQ_DIRTY = exports.RECEIVE_FAQ_ERRORS = exports.RECEIVE_FAQ_UPDATE = exports.REQUEST_FAQ_UPDATE = exports.RECEIVE_FAQS = exports.REQUEST_FAQS = undefined;

	__webpack_require__(594);

	var _flashActions = __webpack_require__(599);

	var _authActions = __webpack_require__(593);

	var REQUEST_FAQS = exports.REQUEST_FAQS = 'REQUEST_FAQS';
	var RECEIVE_FAQS = exports.RECEIVE_FAQS = 'RECEIVE_FAQS';
	var REQUEST_FAQ_UPDATE = exports.REQUEST_FAQ_UPDATE = 'REQUEST_FAQ_UPDATE';
	var RECEIVE_FAQ_UPDATE = exports.RECEIVE_FAQ_UPDATE = 'RECEIVE_FAQ_UPDATE';
	var RECEIVE_FAQ_ERRORS = exports.RECEIVE_FAQ_ERRORS = 'RECEIVE_FAQ_ERRORS';
	var MARK_FAQ_DIRTY = exports.MARK_FAQ_DIRTY = 'MARK_FAQ_DIRTY';

	var requestFaqs = function requestFaqs() {
	  return {
	    type: REQUEST_FAQS
	  };
	};

	var receiveFaqs = function receiveFaqs(items) {
	  return {
	    type: RECEIVE_FAQS,
	    items: items
	  };
	};

	var fetchFaqs = exports.fetchFaqs = function fetchFaqs() {
	  return function (dispatch, getState) {
	    dispatch(requestFaqs());

	    fetch(("https://vdziubak.com/antiVaxServer") + '/faqs/', {
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': getState().auth.token
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
	        dispatch(receiveFaqs(json.data.faqs));
	      } else {
	        dispatch((0, _flashActions.flashMessage)(json.message));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

	var requestUpdate = function requestUpdate(id) {
	  return {
	    type: REQUEST_FAQ_UPDATE,
	    id: id
	  };
	};

	var receiveUpdate = function receiveUpdate(id, updatedFaq) {
	  return {
	    type: RECEIVE_FAQ_UPDATE,
	    id: id,
	    updatedFaq: updatedFaq
	  };
	};

	var receiveErrors = function receiveErrors(id, errors) {
	  return {
	    type: RECEIVE_FAQ_ERRORS,
	    id: id,
	    errors: errors
	  };
	};

	var updateFaq = exports.updateFaq = function updateFaq(id, data) {
	  return function (dispatch, getState) {
	    dispatch(requestUpdate(id));

	    fetch(("https://vdziubak.com/antiVaxServer") + '/faqs/' + id, {
	      method: 'PUT',
	      mode: 'cors',
	      headers: {
	        'Content-Type': 'application/json',
	        'x-access-token': getState().auth.token
	      },
	      body: JSON.stringify({
	        faq: data
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
	        dispatch(receiveUpdate(id, json.data.faq));
	        dispatch((0, _flashActions.flashMessage)('Question updated successfully', 'log'));
	      } else {
	        dispatch(receiveErrors(id, json.data.errors));
	        dispatch((0, _flashActions.flashMessage)('Could not update question due to errors', 'error'));
	      }
	    }).catch(function (err) {
	      throw err;
	    });
	  };
	};

	var markFaqDirty = exports.markFaqDirty = function markFaqDirty(id) {
	  return {
	    type: MARK_FAQ_DIRTY,
	    id: id
	  };
		};

/***/ },

/***/ 613:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Section = __webpack_require__(614);

	var _Section2 = _interopRequireDefault(_Section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var QuestionsSection = function QuestionsSection(_ref) {
	  var children = _ref.children;

	  var navItems = [{
	    id: 'questions/inbox',
	    label: 'Inbox'
	  }, {
	    id: 'questions/frequent',
	    label: 'Frequent'
	  }];

	  return _react2.default.createElement(_Section2.default, { title: 'Questions', navItems: navItems, children: children });
	};

	exports.default = QuestionsSection;

/***/ },

/***/ 614:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Layouts = __webpack_require__(492);

	var _Nav = __webpack_require__(596);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Section = __webpack_require__(615);

	var _Section2 = _interopRequireDefault(_Section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Section = function Section(_ref) {
	  var title = _ref.title;
	  var children = _ref.children;
	  var navItems = _ref.navItems;

	  return _react2.default.createElement(
	    'div',
	    { className: _Section2.default.Section },
	    _react2.default.createElement(
	      'div',
	      { className: _Section2.default.Section__sidebar },
	      _react2.default.createElement(
	        _Layouts.Block,
	        { n: 2 },
	        _react2.default.createElement(
	          'div',
	          { className: _Section2.default.Section__title },
	          title
	        )
	      ),
	      _react2.default.createElement(_Nav2.default, { items: navItems })
	    ),
	    children
	  );
	};

	exports.default = Section;

/***/ },

/***/ 615:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Section":"Section__Section___35Bcb","Section__title":"Section__Section__title___2xGm_","Section__sidebar":"Section__Section__sidebar___1ftrW"};

/***/ },

/***/ 616:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _questionsActions = __webpack_require__(610);

	var _Directory = __webpack_require__(617);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _QuestionsInboxDirectoryEntry = __webpack_require__(619);

	var _QuestionsInboxDirectoryEntry2 = _interopRequireDefault(_QuestionsInboxDirectoryEntry);

	var _Loading = __webpack_require__(727);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsInboxDirectory = function (_React$Component) {
	  _inherits(QuestionsInboxDirectory, _React$Component);

	  function QuestionsInboxDirectory() {
	    _classCallCheck(this, QuestionsInboxDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsInboxDirectory).apply(this, arguments));
	  }

	  _createClass(QuestionsInboxDirectory, [{
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
	        var fileredItems = items.filter(function (i) {
	          return i.data.isDeleted === false;
	        });

	        var questions = fileredItems.map(function (i) {
	          return _react2.default.createElement(_QuestionsInboxDirectoryEntry2.default, { key: i.data.id, entry: i });
	        });

	        return _react2.default.createElement(_Directory2.default, { title: 'Inbox', items: questions, children: children });
	      }
	    }
	  }]);

	  return QuestionsInboxDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.questions.isFetching,
	    items: state.questions.items
	  };
		})(QuestionsInboxDirectory);

/***/ },

/***/ 617:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Directory = __webpack_require__(618);

	var _Directory2 = _interopRequireDefault(_Directory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Directory = function Directory(_ref) {
	  var title = _ref.title;
	  var items = _ref.items;
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
	          'div',
	          { className: _Directory2.default.Directory__title },
	          title
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

/***/ 618:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Directory":"Directory__Directory___3ZXQu","Directory__header":"Directory__Directory__header___1mJxL","Directory__body":"Directory__Directory__body___2uWhM","Directory__title":"Directory__Directory__title___3iONU"};

/***/ },

/***/ 619:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _reactTime = __webpack_require__(620);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _QuestionsInboxDirectoryEntry = __webpack_require__(726);

	var _QuestionsInboxDirectoryEntry2 = _interopRequireDefault(_QuestionsInboxDirectoryEntry);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _questionsActions = __webpack_require__(610);

	var _flashActions = __webpack_require__(599);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsInboxDirectoryEntry = function (_React$Component) {
	  _inherits(QuestionsInboxDirectoryEntry, _React$Component);

	  function QuestionsInboxDirectoryEntry(props) {
	    _classCallCheck(this, QuestionsInboxDirectoryEntry);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsInboxDirectoryEntry).call(this, props));

	    _this.markSeen = _this.markSeen.bind(_this);
	    _this.delete = _this.delete.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionsInboxDirectoryEntry, [{
	    key: 'markSeen',
	    value: function markSeen() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entry = _props.entry;

	      var payload = {
	        seen: !entry.data.seen
	      };

	      dispatch((0, _questionsActions.updateQuestion)(entry.data.id, payload));
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var entry = _props2.entry;

	      var payload = {
	        isDeleted: true
	      };

	      dispatch((0, _questionsActions.updateQuestion)(entry.data.id, payload));
	      dispatch((0, _flashActions.flashMessage)('question has been put into "trash"', 'log'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var entry = this.props.entry;


	      return _react2.default.createElement(
	        'div',
	        { className: _QuestionsInboxDirectoryEntry2.default.Entry + ' ' + (entry.data.seen ? '' : _QuestionsInboxDirectoryEntry2.default.Entry_new) },
	        entry.data.seen ? null : _react2.default.createElement(
	          'div',
	          { className: _QuestionsInboxDirectoryEntry2.default.Entry__badge },
	          'New'
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsInboxDirectoryEntry2.default.Entry__posted },
	              _react2.default.createElement(_reactTime2.default, { value: entry.data.postedAt, format: 'MMMM Do YYYY (h:mm a)' }),
	              ' by ',
	              entry.data.posterName,
	              ' (',
	              entry.data.posterEmail,
	              ')'
	            ),
	            entry.data.seen ? _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
	                    inverse: true,
	                    theme: 'accent1',
	                    onClick: this.markSeen },
	                  'mark as new'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
	                    inverse: true,
	                    theme: 'error',
	                    onClick: this.delete },
	                  'Delete'
	                )
	              )
	            ) : _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
	                    theme: 'accent1',
	                    href: 'mailto:' + entry.data.posterEmail + '?subject=Reply to your questions on antivax&body=Reply to your question:\n ' + entry.data.question },
	                  'respond via email'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
	                    inverse: true,
	                    theme: 'accent1',
	                    onClick: this.markSeen },
	                  'mark as seen'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
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
	          'div',
	          { className: _QuestionsInboxDirectoryEntry2.default.Entry__body },
	          entry.data.question
	        )
	      );
	    }
	  }]);

	  return QuestionsInboxDirectoryEntry;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(QuestionsInboxDirectoryEntry);

/***/ },

/***/ 726:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Entry":"QuestionsInboxDirectoryEntry__Entry___3p9jl","Entry__badge":"QuestionsInboxDirectoryEntry__Entry__badge___TAVaN","Entry__posted":"QuestionsInboxDirectoryEntry__Entry__posted___5I1bv","Entry__body":"QuestionsInboxDirectoryEntry__Entry__body___24lYm","Entry_new":"QuestionsInboxDirectoryEntry__Entry_new___3Tw6H"};

/***/ },

/***/ 727:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(728);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(504);

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

/***/ 728:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _faqsActions = __webpack_require__(612);

	var _Directory = __webpack_require__(617);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _QuestionsFrequentDirectoryEntry = __webpack_require__(730);

	var _QuestionsFrequentDirectoryEntry2 = _interopRequireDefault(_QuestionsFrequentDirectoryEntry);

	var _Loading = __webpack_require__(727);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsFrequentDirectory = function (_React$Component) {
	  _inherits(QuestionsFrequentDirectory, _React$Component);

	  function QuestionsFrequentDirectory() {
	    _classCallCheck(this, QuestionsFrequentDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsFrequentDirectory).apply(this, arguments));
	  }

	  _createClass(QuestionsFrequentDirectory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _faqsActions.fetchFaqs)());
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
	        var filteredItems = items.filter(function (i) {
	          return i.data.isDeleted === false;
	        });

	        var faqs = filteredItems.map(function (i) {
	          return _react2.default.createElement(_QuestionsFrequentDirectoryEntry2.default, { key: i.data.id, entry: i });
	        });

	        return _react2.default.createElement(_Directory2.default, { title: 'Frequent', items: faqs, children: children });
	      }
	    }
	  }]);

	  return QuestionsFrequentDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.faqs.isFetching,
	    items: state.faqs.items
	  };
		})(QuestionsFrequentDirectory);

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _reactRouter = __webpack_require__(508);

	var _reactTime = __webpack_require__(620);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _QuestionsFrequentDirectoryEntry = __webpack_require__(731);

	var _QuestionsFrequentDirectoryEntry2 = _interopRequireDefault(_QuestionsFrequentDirectoryEntry);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _faqsActions = __webpack_require__(612);

	var _flashActions = __webpack_require__(599);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsFrequentDirectoryEntry = function (_React$Component) {
	  _inherits(QuestionsFrequentDirectoryEntry, _React$Component);

	  function QuestionsFrequentDirectoryEntry(props) {
	    _classCallCheck(this, QuestionsFrequentDirectoryEntry);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsFrequentDirectoryEntry).call(this, props));

	    _this.publish = _this.publish.bind(_this);
	    _this.delete = _this.delete.bind(_this);
	    return _this;
	  }

	  _createClass(QuestionsFrequentDirectoryEntry, [{
	    key: 'publish',
	    value: function publish() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entry = _props.entry;

	      var payload = {
	        isPublished: !entry.data.isPublished
	      };

	      dispatch((0, _faqsActions.updateFaq)(entry.data.id, payload));
	      if (payload.isPublished) {
	        dispatch((0, _flashActions.flashMessage)('article has been published', 'log'));
	      } else {
	        dispatch((0, _flashActions.flashMessage)('article has been marked as a draft', 'log'));
	      }
	    }
	  }, {
	    key: 'delete',
	    value: function _delete() {
	      var _props2 = this.props;
	      var dispatch = _props2.dispatch;
	      var entry = _props2.entry;

	      var payload = {
	        isDeleted: true
	      };

	      dispatch((0, _faqsActions.updateFaq)(entry.data.id, payload));
	      dispatch((0, _flashActions.flashMessage)('article has been deleted', 'log'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var entry = this.props.entry;


	      return _react2.default.createElement(
	        'div',
	        { className: _QuestionsFrequentDirectoryEntry2.default.Entry + ' ' + (entry.data.isPublished ? '' : _QuestionsFrequentDirectoryEntry2.default.Entry_draft) },
	        entry.data.isPublished ? null : _react2.default.createElement(
	          'div',
	          { className: _QuestionsFrequentDirectoryEntry2.default.Entry__badge },
	          'Draft'
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(
	              'div',
	              { className: _QuestionsFrequentDirectoryEntry2.default.Entry__modified },
	              'Last modified by ',
	              entry.data.lastModifiedBy,
	              ' on ',
	              _react2.default.createElement(_reactTime2.default, { value: entry.data.lastModifiedAt, format: 'MMMM Do YYYY (h:mm a)' })
	            ),
	            entry.data.isPublished ? _react2.default.createElement(
	              _UI.Button,
	              { small: true,
	                disabled: entry.isUpdating,
	                inverse: true,
	                theme: 'error',
	                onClick: this.publish },
	              'Unpublish'
	            ) : _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
	                    theme: 'accent1',
	                    onClick: this.publish },
	                  'Publish'
	                )
	              ),
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    disabled: entry.isUpdating,
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
	          _reactRouter.Link,
	          { to: 'questions/frequent/' + entry.data.id, className: _QuestionsFrequentDirectoryEntry2.default.Entry__title },
	          entry.data.title
	        )
	      );
	    }
	  }]);

	  return QuestionsFrequentDirectoryEntry;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(QuestionsFrequentDirectoryEntry);

/***/ },

/***/ 731:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Entry":"QuestionsFrequentDirectoryEntry__Entry___2oqPt","Entry__badge":"QuestionsFrequentDirectoryEntry__Entry__badge___27Hwo","Entry__title":"QuestionsFrequentDirectoryEntry__Entry__title___3J71m","Entry__modified":"QuestionsFrequentDirectoryEntry__Entry__modified___lvQ1t","Entry_draft":"QuestionsFrequentDirectoryEntry__Entry_draft___2eQuW"};

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _QuestionsFrequentItem = __webpack_require__(747);

	var _QuestionsFrequentItem2 = _interopRequireDefault(_QuestionsFrequentItem);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _faqsActions = __webpack_require__(612);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QuestionsFrequentItem = function (_React$Component) {
	  _inherits(QuestionsFrequentItem, _React$Component);

	  function QuestionsFrequentItem(props) {
	    _classCallCheck(this, QuestionsFrequentItem);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(QuestionsFrequentItem).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.changeTitle = _this.changeTitle.bind(_this);
	    _this.changeContent = _this.changeContent.bind(_this);
	    _this.changePublished = _this.changePublished.bind(_this);

	    _this.state = {
	      isDirty: _this.props.item.data.isDirty,
	      isPublished: _this.props.item.data.isPublished,
	      title: _this.props.item.data.title,
	      titleError: null,
	      content: _this.props.item.data.content,
	      contentError: null
	    };
	    return _this;
	  }

	  _createClass(QuestionsFrequentItem, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      var _newProps$item = newProps.item;
	      var errors = _newProps$item.errors;
	      var isDirty = _newProps$item.isDirty;


	      var newState = {
	        isDirty: isDirty
	      };

	      if (errors) {
	        newState.titleError = errors.title;
	        newState.contentError = errors.content;
	      }

	      this.setState(newState);
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var dispatch = this.props.dispatch;

	      var payload = {
	        title: this.state.title,
	        isPublished: this.state.isPublished,
	        content: this.state.content
	      };

	      dispatch((0, _faqsActions.updateFaq)(this.props.item.data.id, payload));
	    }
	  }, {
	    key: 'changeTitle',
	    value: function changeTitle(value) {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _faqsActions.markFaqDirty)(this.props.item.data.id));

	      this.setState({
	        title: value,
	        titleError: null
	      });
	    }
	  }, {
	    key: 'changePublished',
	    value: function changePublished(value) {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _faqsActions.markFaqDirty)(this.props.item.data.id));

	      this.setState({
	        isPublished: value
	      });
	    }
	  }, {
	    key: 'changeContent',
	    value: function changeContent(value) {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _faqsActions.markFaqDirty)(this.props.item.data.id));

	      this.setState({
	        content: value,
	        contentError: null
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _state = this.state;
	      var isDirty = _state.isDirty;
	      var isPublished = _state.isPublished;
	      var title = _state.title;
	      var content = _state.content;
	      var titleError = _state.titleError;
	      var contentError = _state.contentError;
	      var isUpdating = this.props.item.isUpdating;


	      return _react2.default.createElement(
	        'div',
	        { className: _QuestionsFrequentItem2.default.ItemForm },
	        _react2.default.createElement(
	          'div',
	          { className: _QuestionsFrequentItem2.default.ItemForm__header },
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            isDirty ? _react2.default.createElement(_UI.Badge, { small: true, theme: 'error', label: 'Unsaved changes' }) : _react2.default.createElement(_UI.Badge, { small: true, label: 'All changes saved' }),
	            _react2.default.createElement(
	              _Layouts.ListInline,
	              null,
	              _react2.default.createElement(
	                _Layouts.ListInlineItem,
	                null,
	                _react2.default.createElement(
	                  _UI.Button,
	                  { small: true,
	                    theme: 'accent1',
	                    disabled: isUpdating || !isDirty,
	                    onClick: this.save },
	                  'Save'
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
	                    disabled: isUpdating,
	                    to: 'questions/frequent' },
	                  'Cancel'
	                )
	              )
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _QuestionsFrequentItem2.default.ItemForm__body },
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'Title',
	              value: title,
	              disabled: isUpdating,
	              error: titleError,
	              onChange: this.changeTitle })
	          ),
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Published',
	              checked: isPublished,
	              disabled: isUpdating,
	              onChange: this.changePublished })
	          ),
	          _react2.default.createElement(_UI.Editor, { label: 'Content',
	            value: content,
	            error: contentError,
	            disabled: isUpdating,
	            onChange: this.changeContent })
	        )
	      );
	    }
	  }]);

	  return QuestionsFrequentItem;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var itemId = ownProps.params.itemId;

	  return {
	    item: state.faqs.items ? state.faqs.items.filter(function (i) {
	      return i.data.id === itemId;
	    })[0] : {}
	  };
		})(QuestionsFrequentItem);

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Section = __webpack_require__(614);

	var _Section2 = _interopRequireDefault(_Section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TrashSection = function TrashSection(_ref) {
	  var children = _ref.children;

	  var navItems = [{
	    id: 'trash/questions',
	    label: 'Questions'
	  }, {
	    id: 'trash/frequent',
	    label: 'Frequent questions'
	  }, {
	    id: 'trash/blogposts',
	    label: 'Blogposts'
	  }, {
	    id: 'trash/content',
	    label: 'Content'
	  }];

	  return _react2.default.createElement(_Section2.default, { title: 'Trash', navItems: navItems, children: children });
	};

	exports.default = TrashSection;

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _questionsActions = __webpack_require__(610);

	var _Directory = __webpack_require__(617);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _TrashQuestionsDirectoryEntry = __webpack_require__(735);

	var _TrashQuestionsDirectoryEntry2 = _interopRequireDefault(_TrashQuestionsDirectoryEntry);

	var _Loading = __webpack_require__(727);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrashQuestionsDirectory = function (_React$Component) {
	  _inherits(TrashQuestionsDirectory, _React$Component);

	  function TrashQuestionsDirectory() {
	    _classCallCheck(this, TrashQuestionsDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TrashQuestionsDirectory).apply(this, arguments));
	  }

	  _createClass(TrashQuestionsDirectory, [{
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
	        var fileredItems = items.filter(function (i) {
	          return i.data.isDeleted === true;
	        });

	        var questions = fileredItems.map(function (i) {
	          return _react2.default.createElement(_TrashQuestionsDirectoryEntry2.default, { key: i.data.id, entry: i });
	        });

	        return _react2.default.createElement(_Directory2.default, { title: 'Questions', items: questions, children: children });
	      }
	    }
	  }]);

	  return TrashQuestionsDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.questions.isFetching,
	    items: state.questions.items
	  };
		})(TrashQuestionsDirectory);

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _reactTime = __webpack_require__(620);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _TrashQuestionsDirectoryEntry = __webpack_require__(736);

	var _TrashQuestionsDirectoryEntry2 = _interopRequireDefault(_TrashQuestionsDirectoryEntry);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _questionsActions = __webpack_require__(610);

	var _flashActions = __webpack_require__(599);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrashQuestionsDirectoryEntry = function (_React$Component) {
	  _inherits(TrashQuestionsDirectoryEntry, _React$Component);

	  function TrashQuestionsDirectoryEntry(props) {
	    _classCallCheck(this, TrashQuestionsDirectoryEntry);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrashQuestionsDirectoryEntry).call(this, props));

	    _this.putBack = _this.putBack.bind(_this);
	    return _this;
	  }

	  _createClass(TrashQuestionsDirectoryEntry, [{
	    key: 'putBack',
	    value: function putBack() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entry = _props.entry;

	      var payload = {
	        isDeleted: false
	      };

	      dispatch((0, _questionsActions.updateQuestion)(entry.data.id, payload));
	      dispatch((0, _flashActions.flashMessage)('question has been put back to "inbox"', 'log'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var entry = this.props.entry;


	      return _react2.default.createElement(
	        'div',
	        { className: _TrashQuestionsDirectoryEntry2.default.Entry + ' ' + (entry.data.seen ? '' : _TrashQuestionsDirectoryEntry2.default.Entry_new) },
	        entry.data.seen ? null : _react2.default.createElement(
	          'div',
	          { className: _TrashQuestionsDirectoryEntry2.default.Entry__badge },
	          'New'
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(
	              'div',
	              { className: _TrashQuestionsDirectoryEntry2.default.Entry__posted },
	              _react2.default.createElement(_reactTime2.default, { value: entry.data.postedAt, format: 'MMMM Do YYYY (h:mm a)' }),
	              ' by ',
	              entry.data.posterName,
	              ' (',
	              entry.data.posterEmail,
	              ')'
	            ),
	            _react2.default.createElement(
	              _UI.Button,
	              { small: true,
	                disabled: entry.isUpdating,
	                inverse: true,
	                theme: 'accent1',
	                onClick: this.putBack },
	              'Put back'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _TrashQuestionsDirectoryEntry2.default.Entry__body },
	          entry.data.question
	        )
	      );
	    }
	  }]);

	  return TrashQuestionsDirectoryEntry;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(TrashQuestionsDirectoryEntry);

/***/ },

/***/ 736:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Entry":"TrashQuestionsDirectoryEntry__Entry___23Kzk","Entry__badge":"TrashQuestionsDirectoryEntry__Entry__badge___1jSBv","Entry__posted":"TrashQuestionsDirectoryEntry__Entry__posted___1dfeW","Entry__body":"TrashQuestionsDirectoryEntry__Entry__body___CxNrs","Entry_new":"TrashQuestionsDirectoryEntry__Entry_new___1KWnZ"};

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _faqsActions = __webpack_require__(612);

	var _Directory = __webpack_require__(617);

	var _Directory2 = _interopRequireDefault(_Directory);

	var _TrashFrequentDirectoryEntry = __webpack_require__(738);

	var _TrashFrequentDirectoryEntry2 = _interopRequireDefault(_TrashFrequentDirectoryEntry);

	var _Loading = __webpack_require__(727);

	var _Loading2 = _interopRequireDefault(_Loading);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrashFrequentDirectory = function (_React$Component) {
	  _inherits(TrashFrequentDirectory, _React$Component);

	  function TrashFrequentDirectory() {
	    _classCallCheck(this, TrashFrequentDirectory);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TrashFrequentDirectory).apply(this, arguments));
	  }

	  _createClass(TrashFrequentDirectory, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var dispatch = this.props.dispatch;


	      dispatch((0, _faqsActions.fetchFaqs)());
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
	        var filteredItems = items.filter(function (i) {
	          return i.data.isDeleted === true;
	        });

	        var faqs = filteredItems.map(function (i) {
	          return _react2.default.createElement(_TrashFrequentDirectoryEntry2.default, { key: i.data.id, entry: i });
	        });

	        return _react2.default.createElement(_Directory2.default, { title: 'Frequent Questions', items: faqs, children: children });
	      }
	    }
	  }]);

	  return TrashFrequentDirectory;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state) {
	  return {
	    isFetching: state.faqs.isFetching,
	    items: state.faqs.items
	  };
		})(TrashFrequentDirectory);

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(468);

	var _reactTime = __webpack_require__(620);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _TrashFrequentDirectoryEntry = __webpack_require__(739);

	var _TrashFrequentDirectoryEntry2 = _interopRequireDefault(_TrashFrequentDirectoryEntry);

	var _Layouts = __webpack_require__(492);

	var _UI = __webpack_require__(504);

	var _faqsActions = __webpack_require__(612);

	var _flashActions = __webpack_require__(599);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TrashFrequentDirectoryEntry = function (_React$Component) {
	  _inherits(TrashFrequentDirectoryEntry, _React$Component);

	  function TrashFrequentDirectoryEntry(props) {
	    _classCallCheck(this, TrashFrequentDirectoryEntry);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TrashFrequentDirectoryEntry).call(this, props));

	    _this.putBack = _this.putBack.bind(_this);
	    return _this;
	  }

	  _createClass(TrashFrequentDirectoryEntry, [{
	    key: 'putBack',
	    value: function putBack() {
	      var _props = this.props;
	      var dispatch = _props.dispatch;
	      var entry = _props.entry;

	      var payload = {
	        isDeleted: false
	      };

	      dispatch((0, _faqsActions.updateFaq)(entry.data.id, payload));
	      dispatch((0, _flashActions.flashMessage)('article has been put back to "Frequent"', 'log'));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var entry = this.props.entry;


	      return _react2.default.createElement(
	        'div',
	        { className: _TrashFrequentDirectoryEntry2.default.Entry + ' ' + (entry.data.isPublished ? '' : _TrashFrequentDirectoryEntry2.default.Entry_draft) },
	        entry.data.isPublished ? null : _react2.default.createElement(
	          'div',
	          { className: _TrashFrequentDirectoryEntry2.default.Entry__badge },
	          'Draft'
	        ),
	        _react2.default.createElement(
	          _Layouts.Block,
	          null,
	          _react2.default.createElement(
	            _Layouts.Flex,
	            { justifyContent: 'space-between' },
	            _react2.default.createElement(
	              'div',
	              { className: _TrashFrequentDirectoryEntry2.default.Entry__modified },
	              'Last modified by ',
	              entry.data.lastModifiedBy,
	              ' on ',
	              _react2.default.createElement(_reactTime2.default, { value: entry.data.lastModifiedAt, format: 'MMMM Do YYYY (h:mm a)' })
	            ),
	            _react2.default.createElement(
	              _UI.Button,
	              { small: true,
	                disabled: entry.isUpdating,
	                inverse: true,
	                theme: 'error',
	                onClick: this.putBack },
	              'Put back'
	            )
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: _TrashFrequentDirectoryEntry2.default.Entry__title },
	          entry.data.title
	        )
	      );
	    }
	  }]);

	  return TrashFrequentDirectoryEntry;
	}(_react2.default.Component);

		exports.default = (0, _reactRedux.connect)()(TrashFrequentDirectoryEntry);

/***/ },

/***/ 739:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Entry":"TrashFrequentDirectoryEntry__Entry___17vxb","Entry__badge":"TrashFrequentDirectoryEntry__Entry__badge___10M4H","Entry__title":"TrashFrequentDirectoryEntry__Entry__title___2kZYU","Entry__modified":"TrashFrequentDirectoryEntry__Entry__modified___1oln3","Entry_draft":"TrashFrequentDirectoryEntry__Entry_draft___1zR3x"};

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Dummy = function Dummy() {
	  return _react2.default.createElement(
	    'div',
	    null,
	    ' Dummy! '
	  );
	};

	exports.default = Dummy;

/***/ },

/***/ 747:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"ItemForm":"QuestionsFrequentItem__ItemForm___2LXxe","ItemForm__header":"QuestionsFrequentItem__ItemForm__header___1aULa","ItemForm__body":"QuestionsFrequentItem__ItemForm__body___1NRyd"};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MYXlvdXRzLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0Jsb2NrL0Jsb2NrLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9GbGV4L0ZsZXguanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL1dyYXAvV3JhcC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvR3JpZC9HcmlkLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdC9MaXN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9NZWRpYS9NZWRpYS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvUGFnZS9QYWdlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVUkuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZVV0aWxzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9Qcm9wVHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL3JvdXRlcldhcm5pbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi93YXJuaW5nL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL0ludGVybmFsUHJvcFR5cGVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9QYXR0ZXJuVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL2NyZWF0ZUhhc2hIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL1BhdGhVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL0V4ZWN1dGlvbkVudmlyb25tZW50LmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvRE9NVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2RlZXAtZXF1YWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzIiwid2VicGFjazovLy8uL34vZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvQXN5bmNVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL2NyZWF0ZUxvY2F0aW9uLmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvcnVuVHJhbnNpdGlvbkhvb2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9oaXN0b3J5L2xpYi9kZXByZWNhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oaXN0b3J5L2xpYi91c2VRdWVyaWVzLmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9+L3F1ZXJ5LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvY29tcHV0ZUNoYW5nZWRSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL1RyYW5zaXRpb25VdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvQXN5bmNVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvaXNBY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL2dldENvbXBvbmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL21ha2VTdGF0ZVdpdGhMb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvbWF0Y2hSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlckNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL2dldFJvdXRlUGFyYW1zLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZXJVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvSW5kZXhMaW5rLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi93aXRoUm91dGVyLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9JbmRleFJlZGlyZWN0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9SZWRpcmVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvSW5kZXhSb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvUm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL0hpc3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL0xpZmVjeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvUm91dGVDb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi91c2VSb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRpbmdDb250ZXh0LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9tYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL3VzZUJhc2VuYW1lLmpzIiwid2VicGFjazovLy8uL34vaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvdXNlUm91dGVySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9saWIvYXBwbHlSb3V0ZXJNaWRkbGV3YXJlLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9icm93c2VySGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXJIaXN0b3J5LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtcm91dGVyL2xpYi9oYXNoSGlzdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvQmFkZ2UvQmFkZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0JhZGdlL0JhZGdlLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXRMYWJlbC9JbnB1dExhYmVsLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvQ2hlY2tib3gvQ2hlY2tib3guanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9DdXJyZW50VXNlci9DdXJyZW50VXNlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3N0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2luaXRpYWxTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2ZsYXNoUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvZmFxc1JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9mYXFzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zU2VjdGlvbi9RdWVzdGlvbnNTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi9TZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNJbmJveERpcmVjdG9yeS9RdWVzdGlvbnNJbmJveERpcmVjdG9yeS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeS9EaXJlY3RvcnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0RpcmVjdG9yeS9EaXJlY3RvcnkuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5L1F1ZXN0aW9uc0luYm94RGlyZWN0b3J5RW50cnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0luYm94RGlyZWN0b3J5RW50cnkvUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnkvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5L1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnkvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0ZyZXF1ZW50SXRlbS9RdWVzdGlvbnNGcmVxdWVudEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UcmFzaFNlY3Rpb24vVHJhc2hTZWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnkvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnkuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeUVudHJ5L1RyYXNoUXVlc3Rpb25zRGlyZWN0b3J5RW50cnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYXNoUXVlc3Rpb25zRGlyZWN0b3J5RW50cnkvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RyYXNoRnJlcXVlbnREaXJlY3RvcnkvVHJhc2hGcmVxdWVudERpcmVjdG9yeS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeS9UcmFzaEZyZXF1ZW50RGlyZWN0b3J5RW50cnkuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1RyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeS9UcmFzaEZyZXF1ZW50RGlyZWN0b3J5RW50cnkuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9EdW1teS9EdW1teS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zRnJlcXVlbnRJdGVtL1F1ZXN0aW9uc0ZyZXF1ZW50SXRlbS5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdiYWJlbC1wb2x5ZmlsbCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIEluZGV4UmVkaXJlY3QsIGhhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCBRdWVzdGlvbnNTZWN0aW9uIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNTZWN0aW9uJ1xuaW1wb3J0IFF1ZXN0aW9uc0luYm94RGlyZWN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNJbmJveERpcmVjdG9yeSdcbmltcG9ydCBRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnknXG5pbXBvcnQgUXVlc3Rpb25zRnJlcXVlbnRJdGVtIGZyb20gJy4vY29tcG9uZW50cy9RdWVzdGlvbnNGcmVxdWVudEl0ZW0nXG5cbmltcG9ydCBUcmFzaFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1RyYXNoU2VjdGlvbidcbmltcG9ydCBUcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnknXG5pbXBvcnQgVHJhc2hGcmVxdWVudERpcmVjdG9yeSBmcm9tICcuL2NvbXBvbmVudHMvVHJhc2hGcmVxdWVudERpcmVjdG9yeSdcblxuaW1wb3J0IER1bW15IGZyb20gJy4vY29tcG9uZW50cy9EdW1teSdcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpXG5cblJlYWN0RE9NLnJlbmRlcigoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXIgaGlzdG9yeT17aGFzaEhpc3Rvcnl9PlxuICAgICAgPFJvdXRlIHBhdGg9e2Ake0FOVElWQVhfQURNSU5fUFJFRklYfS9gfSBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPXtgJHtBTlRJVkFYX0FETUlOX1BSRUZJWH0vcXVlc3Rpb25zYH0gLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cInF1ZXN0aW9uc1wiIGNvbXBvbmVudD17UXVlc3Rpb25zU2VjdGlvbn0+XG4gICAgICAgICAgPEluZGV4UmVkaXJlY3QgdG89e2Ake0FOVElWQVhfQURNSU5fUFJFRklYfS9xdWVzdGlvbnMvaW5ib3hgfSAvPlxuXG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJpbmJveFwiIGNvbXBvbmVudD17UXVlc3Rpb25zSW5ib3hEaXJlY3Rvcnl9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJmcmVxdWVudFwiIGNvbXBvbmVudD17UXVlc3Rpb25zRnJlcXVlbnREaXJlY3Rvcnl9PlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCI6aXRlbUlkXCIgY29tcG9uZW50PXtRdWVzdGlvbnNGcmVxdWVudEl0ZW19IC8+XG4gICAgICAgICAgPC9Sb3V0ZT5cbiAgICAgICAgPC9Sb3V0ZT5cblxuICAgICAgICA8Um91dGUgcGF0aD1cImJsb2dcIiBjb21wb25lbnQ9e0R1bW15fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cImNvbnRlbnRcIiBjb21wb25lbnQ9e0R1bW15fSAvPlxuICAgICAgICA8Um91dGUgcGF0aD1cInVzZXJzXCIgY29tcG9uZW50PXtEdW1teX0gLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cInRyYXNoXCIgY29tcG9uZW50cz17VHJhc2hTZWN0aW9ufT5cbiAgICAgICAgICA8SW5kZXhSZWRpcmVjdCB0bz17YCR7QU5USVZBWF9BRE1JTl9QUkVGSVh9L3RyYXNoL3F1ZXN0aW9uc2B9IC8+XG5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cInF1ZXN0aW9uc1wiIGNvbXBvbmVudD17VHJhc2hRdWVzdGlvbnNEaXJlY3Rvcnl9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCJmcmVxdWVudFwiIGNvbXBvbmVudD17VHJhc2hGcmVxdWVudERpcmVjdG9yeX0gLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGU+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+XG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvaW5kZXguanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcC5jc3MnXG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vTG9naW4nXG5pbXBvcnQgRmxhc2hNZXNzYWdlIGZyb20gJy4uL0ZsYXNoTWVzc2FnZSdcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xuaW1wb3J0IEN1cnJlbnRVc2VyIGZyb20gJy4uL0N1cnJlbnRVc2VyJ1xuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcblxuY29uc3QgQXBwID0gKHtcbiAgdXNlcixcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgaWYgKHVzZXIpIHtcbiAgICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6ICdxdWVzdGlvbnMnLFxuICAgICAgICBsYWJlbDogJ1F1ZXN0aW9ucydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnYmxvZycsXG4gICAgICAgIGxhYmVsOiAnQmxvZydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnY29udGVudCcsXG4gICAgICAgIGxhYmVsOiAnQ29udGVudCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAndXNlcnMnLFxuICAgICAgICBsYWJlbDogJ1VzZXJzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6ICd0cmFzaCcsXG4gICAgICAgIGxhYmVsOiAnVHJhc2gnXG4gICAgICB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX3NpZGViYXJ9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5BcHBfX3RpdGxlfT5BbnRpdmF4IGFkbWluPC9oMT5cbiAgICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICAgIDxOYXYgaXRlbXM9e25hdkl0ZW1zfSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEN1cnJlbnRVc2VyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtjaGlsZHJlbn1cblxuICAgICAgICA8Rmxhc2hNZXNzYWdlIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwfT5cbiAgICAgICAgPExvZ2luIC8+XG5cbiAgICAgICAgPEZsYXNoTWVzc2FnZSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9XG4pKEFwcClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXBwXCI6XCJBcHBfX0FwcF9fX2xCRVhJXCIsXCJBcHBfX3RpdGxlXCI6XCJBcHBfX0FwcF9fdGl0bGVfX18xSTBCaFwiLFwiQXBwX19zaWRlYmFyXCI6XCJBcHBfX0FwcF9fc2lkZWJhcl9fX1ZUaGJlXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmNzc1xuICoqIG1vZHVsZSBpZCA9IDQ5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBUZXh0SW5wdXQsIEJ1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge2F1dGhlbnRpY2F0ZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN1Ym1pdEZvcm0gPSB0aGlzLnN1Ym1pdEZvcm0uYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlRW1haWwgPSB0aGlzLmNoYW5nZUVtYWlsLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZW1haWxFcnJvcjogJycsXG4gICAgICBwYXNzd29yZEVycm9yOiAnJyxcbiAgICAgIGVtYWlsOiAnJyxcbiAgICAgIHBhc3N3b3JkOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBsZXQgZW1haWxFcnJvciA9ICcnXG4gICAgbGV0IHBhc3N3b3JkRXJyb3IgPSAnJ1xuXG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGlmICh0aGlzLnN0YXRlLmVtYWlsID09PSAnJykge1xuICAgICAgZW1haWxFcnJvciA9ICdlbWFpbCBjYW5ub3QgYmUgZW1wdHknXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICcnKSB7XG4gICAgICBwYXNzd29yZEVycm9yID0gJ3Bhc3N3b3JkIGNhbm5vdCBiZSBibGFuaydcbiAgICB9XG5cbiAgICBpZiAoIWVtYWlsRXJyb3IgJiYgIXBhc3N3b3JkRXJyb3IpIHtcbiAgICAgIGRpc3BhdGNoKGF1dGhlbnRpY2F0ZSh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsRXJyb3IsXG4gICAgICAgIHBhc3N3b3JkRXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRW1haWwgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogdmFsdWUsXG4gICAgICBlbWFpbEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmd9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaW5wdXRTdHlsZSA9IHtcbiAgICAgIHdpZHRoOiAnMjByZW0nXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFdpbmRvdz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5Mb2dpbjwvRmxleD5cbiAgICAgICAgICA8L01vZGFsV2luZG93SGVhZGVyPlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgIDxMaXN0IG49ezAuNX0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXswLjV9PlxuICAgICAgICAgICAgICAgIDxUZXh0SW5wdXQgc3R5bGU9e2lucHV0U3R5bGV9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIGNhc2V5QGdtYWlsLmNvbVwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lbWFpbEVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlRW1haWx9IC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJdGVtIG49ezAuNX0+XG4gICAgICAgICAgICAgICAgPFRleHRJbnB1dCBzdHlsZT17aW5wdXRTdHlsZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gQmlnU2VjcmV0XCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLnBhc3N3b3JkRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0JvZHk+XG5cbiAgICAgICAgICA8TW9kYWxXaW5kb3dGb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc0ZldGNoaW5nfSB0aGVtZT1cInByaW1hcnlcIiBsYWJlbD1cIkxvZ2luXCI+TG9naW48L0J1dHRvbj5cbiAgICAgICAgICA8L01vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L01vZGFsV2luZG93PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlzRmV0Y2hpbmc6IHN0YXRlLmF1dGguaXNGZXRjaGluZ1xuICAgIH1cbiAgfVxuKShMb2dpbilcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeFxuICoqLyIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4J1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi9HcmlkJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi9MaXN0SW5saW5lJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX0gZnJvbSAnLi9NZWRpYSdcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4vUGFnZSdcblxuZXhwb3J0IHtCbG9jaywgRmxleCwgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sXG4gIExpc3QsIExpc3RJdGVtLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSxcbiAgTWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmUsXG4gIFBhZ2UsIFBhZ2VDb250ZW50XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXAgPSAoe1xuICB3aWR0aCA9ICc5MCUnLFxuICBtYXhXaWR0aCA9ICc4MHJlbScsIC8vIDEyODBweCBwcm92aWRlZCAxZW0gPT09IDE2cHhcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEdyaWQgPSAoe1xuICBndXR0ZXIgPSAwLFxuICBhbGlnbkl0ZW1zID0gJ3N0cmV0Y2gnLFxuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJScsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIG1hcmdpblJpZ2h0OiBgLSR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBHcmlkSXRlbSA9ICh7XG4gIHNwYW4gPSAwLFxuICBvdXRPZiA9IDEyLFxuICBndXR0ZXIgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gLFxuICAgIG1hcmdpblJpZ2h0OiBgJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2Z9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYC0ke2Jhc2VsaW5lICogbn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDUwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYV9fYm9keX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNTAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJ1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbidcbmltcG9ydCBCYWRnZSBmcm9tICcuL0JhZGdlJ1xuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuL1RleHRJbnB1dCdcbmltcG9ydCBUZXh0QXJlYSBmcm9tICcuL1RleHRBcmVhJ1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCdcbmltcG9ydCBDaGVja2JveCBmcm9tICcuL0NoZWNrYm94J1xuaW1wb3J0IEVkaXRvciBmcm9tICcuL0VkaXRvcidcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgVGV4dElucHV0LCBUZXh0QXJlYSwgQWxlcnQsIEJhZGdlLFxuICBNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dGb290ZXIsXG4gIElucHV0LCBDaGVja2JveCwgRWRpdG9yfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVUkuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGlubmVyLmNzcydcblxuY29uc3QgU3Bpbm5lciA9ICh7XG4gIG11bHRpcGxpZXJzID0ge1xuICAgIG1pbkhlaWdodDogMzAsXG4gICAgX19pbm5lcjoge1xuICAgICAgd2lkdGg6IDUsXG4gICAgICBoZWlnaHQ6IDVcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWluSGVpZ2h0OiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLm1pbkhlaWdodH1yZW1gXG4gIH1cblxuICBjb25zdCBfX2lubmVyU3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMuX19pbm5lci53aWR0aH1yZW1gLFxuICAgIGhlaWdodDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5fX2lubmVyLmhlaWdodH1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5TcGlubmVyfT5cbiAgICAgIDxkaXYgc3R5bGU9e19faW5uZXJTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcl9faW5uZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTJ9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUzfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNH1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTV9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU2fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlN31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTh9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU5fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTB9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEyfWB9PjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3Bpbm5lclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNwaW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX18xZml5a1wiLFwiU3Bpbm5lcl9faW5uZXJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2lubmVyX19fNTh2Y1RcIixcIlNwaW5uZXJfX2NpcmNsZVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlX19fMlp1Z09cIixcInNrLWNpcmNsZUZhZGVEZWxheVwiOlwiU3Bpbm5lcl9fc2stY2lyY2xlRmFkZURlbGF5X19fMUV0bjhcIixcIlNwaW5uZXJfX2NpcmNsZTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTFfX19CT0Q3blwiLFwiU3Bpbm5lcl9fY2lyY2xlMlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMl9fXzJhQnRyXCIsXCJTcGlubmVyX19jaXJjbGUzXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUzX19fMUJhWmZcIixcIlNwaW5uZXJfX2NpcmNsZTRcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTRfX18zVjVyN1wiLFwiU3Bpbm5lcl9fY2lyY2xlNVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNV9fXzNESjVYXCIsXCJTcGlubmVyX19jaXJjbGU2XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU2X19fWnBVNW1cIixcIlNwaW5uZXJfX2NpcmNsZTdcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTdfX19YcG5LNVwiLFwiU3Bpbm5lcl9fY2lyY2xlOFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOF9fXzFfUlJYXCIsXCJTcGlubmVyX19jaXJjbGU5XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU5X19fZk8wT0dcIixcIlNwaW5uZXJfX2NpcmNsZTEwXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMF9fX25pMzVBXCIsXCJTcGlubmVyX19jaXJjbGUxMVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTFfX18xaGF2OVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTEyX19fMmlwelRcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1MDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLmNzcydcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGZ1bGxXaWR0aCA9IGZhbHNlLFxuICBzbWFsbCA9IGZhbHNlLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBpbnZlcnNlID0gZmFsc2UsXG4gIHRoZW1lID0gJ2FjY2VudDEnLFxuICBleHRyYUNsYXNzTmFtZXNcbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke2Jhc2VsaW5lICogMC43NX1yZW0gJHtiYXNlbGluZSAqIDEuNX1yZW1gLFxuICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgZm9udFNpemU6IGAkezEuMDgzICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIDAuNX1yZW0gJHtiYXNlbGluZSAqIDF9cmVtYCxcbiAgICAgIGxpbmVIZWlnaHQ6IGAkezEuNSAqIGJhc2VsaW5lfXJlbWAsXG4gICAgICBmb250U2l6ZTogYCR7MC45MTcgKiBiYXNlbGluZX1yZW1gXG4gICAgfVxuICB9XG5cbiAgaWYgKGZ1bGxXaWR0aCkge1xuICAgIHN0eWxlLndpZHRoID0gJzEwMCUnXG4gIH1cblxuICBsZXQgY2xhc3NOYW1lID0gW11cblxuICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b24gOiBzdHlsZXMuQnV0dG9uKVxuXG4gIHN3aXRjaCAodGhlbWUpIHtcbiAgICBjYXNlICdhY2NlbnQyJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKGludmVyc2UgPyBzdHlsZXMuSW52ZXJzZUJ1dHRvbl9hY2NlbnQyIDogc3R5bGVzLkJ1dHRvbl9hY2NlbnQyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdlcnJvcic6XG4gICAgICBjbGFzc05hbWUucHVzaChpbnZlcnNlID8gc3R5bGVzLkludmVyc2VCdXR0b25fZXJyb3IgOiBzdHlsZXMuQnV0dG9uX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQxJzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lLnB1c2goaW52ZXJzZSA/IHN0eWxlcy5JbnZlcnNlQnV0dG9uX2FjY2VudDEgOiBzdHlsZXMuQnV0dG9uX2FjY2VudDEpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHN0eWxlPXtzdHlsZX0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZS5qb2luKCcgJyl9ICR7ZXh0cmFDbGFzc05hbWVzfWB9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBocmVmPXtocmVmfT57Y2hpbGRyZW59PC9hPlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGV9IGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUuam9pbignICcpfSAke2V4dHJhQ2xhc3NOYW1lc31gfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5qc3hcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNyZWF0ZU1lbW9yeUhpc3RvcnkgPSBleHBvcnRzLmhhc2hIaXN0b3J5ID0gZXhwb3J0cy5icm93c2VySGlzdG9yeSA9IGV4cG9ydHMuYXBwbHlSb3V0ZXJNaWRkbGV3YXJlID0gZXhwb3J0cy5mb3JtYXRQYXR0ZXJuID0gZXhwb3J0cy51c2VSb3V0ZXJIaXN0b3J5ID0gZXhwb3J0cy5tYXRjaCA9IGV4cG9ydHMucm91dGVyU2hhcGUgPSBleHBvcnRzLmxvY2F0aW9uU2hhcGUgPSBleHBvcnRzLlByb3BUeXBlcyA9IGV4cG9ydHMuUm91dGluZ0NvbnRleHQgPSBleHBvcnRzLlJvdXRlckNvbnRleHQgPSBleHBvcnRzLmNyZWF0ZVJvdXRlcyA9IGV4cG9ydHMudXNlUm91dGVzID0gZXhwb3J0cy5Sb3V0ZUNvbnRleHQgPSBleHBvcnRzLkxpZmVjeWNsZSA9IGV4cG9ydHMuSGlzdG9yeSA9IGV4cG9ydHMuUm91dGUgPSBleHBvcnRzLlJlZGlyZWN0ID0gZXhwb3J0cy5JbmRleFJvdXRlID0gZXhwb3J0cy5JbmRleFJlZGlyZWN0ID0gZXhwb3J0cy53aXRoUm91dGVyID0gZXhwb3J0cy5JbmRleExpbmsgPSBleHBvcnRzLkxpbmsgPSBleHBvcnRzLlJvdXRlciA9IHVuZGVmaW5lZDtcblxudmFyIF9Sb3V0ZVV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZVV0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlUm91dGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVzO1xuICB9XG59KTtcblxudmFyIF9Qcm9wVHlwZXMyID0gcmVxdWlyZSgnLi9Qcm9wVHlwZXMnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdsb2NhdGlvblNoYXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1Byb3BUeXBlczIubG9jYXRpb25TaGFwZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3JvdXRlclNoYXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX1Byb3BUeXBlczIucm91dGVyU2hhcGU7XG4gIH1cbn0pO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZm9ybWF0UGF0dGVybicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9QYXR0ZXJuVXRpbHMuZm9ybWF0UGF0dGVybjtcbiAgfVxufSk7XG5cbnZhciBfUm91dGVyMiA9IHJlcXVpcmUoJy4vUm91dGVyJyk7XG5cbnZhciBfUm91dGVyMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlcjIpO1xuXG52YXIgX0xpbmsyID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rMik7XG5cbnZhciBfSW5kZXhMaW5rMiA9IHJlcXVpcmUoJy4vSW5kZXhMaW5rJyk7XG5cbnZhciBfSW5kZXhMaW5rMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4TGluazIpO1xuXG52YXIgX3dpdGhSb3V0ZXIyID0gcmVxdWlyZSgnLi93aXRoUm91dGVyJyk7XG5cbnZhciBfd2l0aFJvdXRlcjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93aXRoUm91dGVyMik7XG5cbnZhciBfSW5kZXhSZWRpcmVjdDIgPSByZXF1aXJlKCcuL0luZGV4UmVkaXJlY3QnKTtcblxudmFyIF9JbmRleFJlZGlyZWN0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0luZGV4UmVkaXJlY3QyKTtcblxudmFyIF9JbmRleFJvdXRlMiA9IHJlcXVpcmUoJy4vSW5kZXhSb3V0ZScpO1xuXG52YXIgX0luZGV4Um91dGUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfSW5kZXhSb3V0ZTIpO1xuXG52YXIgX1JlZGlyZWN0MiA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxudmFyIF9SZWRpcmVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdDIpO1xuXG52YXIgX1JvdXRlMiA9IHJlcXVpcmUoJy4vUm91dGUnKTtcblxudmFyIF9Sb3V0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZTIpO1xuXG52YXIgX0hpc3RvcnkyID0gcmVxdWlyZSgnLi9IaXN0b3J5Jyk7XG5cbnZhciBfSGlzdG9yeTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9IaXN0b3J5Mik7XG5cbnZhciBfTGlmZWN5Y2xlMiA9IHJlcXVpcmUoJy4vTGlmZWN5Y2xlJyk7XG5cbnZhciBfTGlmZWN5Y2xlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0xpZmVjeWNsZTIpO1xuXG52YXIgX1JvdXRlQ29udGV4dDIgPSByZXF1aXJlKCcuL1JvdXRlQ29udGV4dCcpO1xuXG52YXIgX1JvdXRlQ29udGV4dDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9Sb3V0ZUNvbnRleHQyKTtcblxudmFyIF91c2VSb3V0ZXMyID0gcmVxdWlyZSgnLi91c2VSb3V0ZXMnKTtcblxudmFyIF91c2VSb3V0ZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUm91dGVzMik7XG5cbnZhciBfUm91dGVyQ29udGV4dDIgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQyKTtcblxudmFyIF9Sb3V0aW5nQ29udGV4dDIgPSByZXF1aXJlKCcuL1JvdXRpbmdDb250ZXh0Jyk7XG5cbnZhciBfUm91dGluZ0NvbnRleHQzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGluZ0NvbnRleHQyKTtcblxudmFyIF9Qcm9wVHlwZXMzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUHJvcFR5cGVzMik7XG5cbnZhciBfbWF0Y2gyID0gcmVxdWlyZSgnLi9tYXRjaCcpO1xuXG52YXIgX21hdGNoMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX21hdGNoMik7XG5cbnZhciBfdXNlUm91dGVySGlzdG9yeTIgPSByZXF1aXJlKCcuL3VzZVJvdXRlckhpc3RvcnknKTtcblxudmFyIF91c2VSb3V0ZXJIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVJvdXRlckhpc3RvcnkyKTtcblxudmFyIF9hcHBseVJvdXRlck1pZGRsZXdhcmUyID0gcmVxdWlyZSgnLi9hcHBseVJvdXRlck1pZGRsZXdhcmUnKTtcblxudmFyIF9hcHBseVJvdXRlck1pZGRsZXdhcmUzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXBwbHlSb3V0ZXJNaWRkbGV3YXJlMik7XG5cbnZhciBfYnJvd3Nlckhpc3RvcnkyID0gcmVxdWlyZSgnLi9icm93c2VySGlzdG9yeScpO1xuXG52YXIgX2Jyb3dzZXJIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Jyb3dzZXJIaXN0b3J5Mik7XG5cbnZhciBfaGFzaEhpc3RvcnkyID0gcmVxdWlyZSgnLi9oYXNoSGlzdG9yeScpO1xuXG52YXIgX2hhc2hIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hhc2hIaXN0b3J5Mik7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSByZXF1aXJlKCcuL2NyZWF0ZU1lbW9yeUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5MyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZU1lbW9yeUhpc3RvcnkyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5Sb3V0ZXIgPSBfUm91dGVyMy5kZWZhdWx0OyAvKiBjb21wb25lbnRzICovXG5cbmV4cG9ydHMuTGluayA9IF9MaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy5JbmRleExpbmsgPSBfSW5kZXhMaW5rMy5kZWZhdWx0O1xuZXhwb3J0cy53aXRoUm91dGVyID0gX3dpdGhSb3V0ZXIzLmRlZmF1bHQ7XG5cbi8qIGNvbXBvbmVudHMgKGNvbmZpZ3VyYXRpb24pICovXG5cbmV4cG9ydHMuSW5kZXhSZWRpcmVjdCA9IF9JbmRleFJlZGlyZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5JbmRleFJvdXRlID0gX0luZGV4Um91dGUzLmRlZmF1bHQ7XG5leHBvcnRzLlJlZGlyZWN0ID0gX1JlZGlyZWN0My5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZSA9IF9Sb3V0ZTMuZGVmYXVsdDtcblxuLyogbWl4aW5zICovXG5cbmV4cG9ydHMuSGlzdG9yeSA9IF9IaXN0b3J5My5kZWZhdWx0O1xuZXhwb3J0cy5MaWZlY3ljbGUgPSBfTGlmZWN5Y2xlMy5kZWZhdWx0O1xuZXhwb3J0cy5Sb3V0ZUNvbnRleHQgPSBfUm91dGVDb250ZXh0My5kZWZhdWx0O1xuXG4vKiB1dGlscyAqL1xuXG5leHBvcnRzLnVzZVJvdXRlcyA9IF91c2VSb3V0ZXMzLmRlZmF1bHQ7XG5leHBvcnRzLlJvdXRlckNvbnRleHQgPSBfUm91dGVyQ29udGV4dDMuZGVmYXVsdDtcbmV4cG9ydHMuUm91dGluZ0NvbnRleHQgPSBfUm91dGluZ0NvbnRleHQzLmRlZmF1bHQ7XG5leHBvcnRzLlByb3BUeXBlcyA9IF9Qcm9wVHlwZXMzLmRlZmF1bHQ7XG5leHBvcnRzLm1hdGNoID0gX21hdGNoMy5kZWZhdWx0O1xuZXhwb3J0cy51c2VSb3V0ZXJIaXN0b3J5ID0gX3VzZVJvdXRlckhpc3RvcnkzLmRlZmF1bHQ7XG5leHBvcnRzLmFwcGx5Um91dGVyTWlkZGxld2FyZSA9IF9hcHBseVJvdXRlck1pZGRsZXdhcmUzLmRlZmF1bHQ7XG5cbi8qIGhpc3RvcmllcyAqL1xuXG5leHBvcnRzLmJyb3dzZXJIaXN0b3J5ID0gX2Jyb3dzZXJIaXN0b3J5My5kZWZhdWx0O1xuZXhwb3J0cy5oYXNoSGlzdG9yeSA9IF9oYXNoSGlzdG9yeTMuZGVmYXVsdDtcbmV4cG9ydHMuY3JlYXRlTWVtb3J5SGlzdG9yeSA9IF9jcmVhdGVNZW1vcnlIaXN0b3J5My5kZWZhdWx0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZXhwb3J0cy5pc1JlYWN0Q2hpbGRyZW4gPSBpc1JlYWN0Q2hpbGRyZW47XG5leHBvcnRzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCA9IGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDtcbmV4cG9ydHMuY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4gPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbjtcbmV4cG9ydHMuY3JlYXRlUm91dGVzID0gY3JlYXRlUm91dGVzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzVmFsaWRDaGlsZChvYmplY3QpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsIHx8IF9yZWFjdDIuZGVmYXVsdC5pc1ZhbGlkRWxlbWVudChvYmplY3QpO1xufVxuXG5mdW5jdGlvbiBpc1JlYWN0Q2hpbGRyZW4ob2JqZWN0KSB7XG4gIHJldHVybiBpc1ZhbGlkQ2hpbGQob2JqZWN0KSB8fCBBcnJheS5pc0FycmF5KG9iamVjdCkgJiYgb2JqZWN0LmV2ZXJ5KGlzVmFsaWRDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlKGRlZmF1bHRQcm9wcywgcHJvcHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0UHJvcHMsIHByb3BzKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpIHtcbiAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG4gIHZhciByb3V0ZSA9IGNyZWF0ZVJvdXRlKHR5cGUuZGVmYXVsdFByb3BzLCBlbGVtZW50LnByb3BzKTtcblxuICBpZiAocm91dGUuY2hpbGRyZW4pIHtcbiAgICB2YXIgY2hpbGRSb3V0ZXMgPSBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbihyb3V0ZS5jaGlsZHJlbiwgcm91dGUpO1xuXG4gICAgaWYgKGNoaWxkUm91dGVzLmxlbmd0aCkgcm91dGUuY2hpbGRSb3V0ZXMgPSBjaGlsZFJvdXRlcztcblxuICAgIGRlbGV0ZSByb3V0ZS5jaGlsZHJlbjtcbiAgfVxuXG4gIHJldHVybiByb3V0ZTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgcm91dGVzIG9iamVjdCBmcm9tIHRoZSBnaXZlbiBSZWFjdENoaWxkcmVuLiBKU1hcbiAqIHByb3ZpZGVzIGEgY29udmVuaWVudCB3YXkgdG8gdmlzdWFsaXplIGhvdyByb3V0ZXMgaW4gdGhlIGhpZXJhcmNoeSBhcmVcbiAqIG5lc3RlZC5cbiAqXG4gKiAgIGltcG9ydCB7IFJvdXRlLCBjcmVhdGVSb3V0ZXNGcm9tUmVhY3RDaGlsZHJlbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbiAqXG4gKiAgIGNvbnN0IHJvdXRlcyA9IGNyZWF0ZVJvdXRlc0Zyb21SZWFjdENoaWxkcmVuKFxuICogICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gKiAgICAgICA8Um91dGUgcGF0aD1cImhvbWVcIiBjb21wb25lbnQ9e0Rhc2hib2FyZH0vPlxuICogICAgICAgPFJvdXRlIHBhdGg9XCJuZXdzXCIgY29tcG9uZW50PXtOZXdzRmVlZH0vPlxuICogICAgIDwvUm91dGU+XG4gKiAgIClcbiAqXG4gKiBOb3RlOiBUaGlzIG1ldGhvZCBpcyBhdXRvbWF0aWNhbGx5IHVzZWQgd2hlbiB5b3UgcHJvdmlkZSA8Um91dGU+IGNoaWxkcmVuXG4gKiB0byBhIDxSb3V0ZXI+IGNvbXBvbmVudC5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4oY2hpbGRyZW4sIHBhcmVudFJvdXRlKSB7XG4gIHZhciByb3V0ZXMgPSBbXTtcblxuICBfcmVhY3QyLmRlZmF1bHQuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICBpZiAoX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSB7XG4gICAgICAvLyBDb21wb25lbnQgY2xhc3NlcyBtYXkgaGF2ZSBhIHN0YXRpYyBjcmVhdGUqIG1ldGhvZC5cbiAgICAgIGlmIChlbGVtZW50LnR5cGUuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KSB7XG4gICAgICAgIHZhciByb3V0ZSA9IGVsZW1lbnQudHlwZS5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpO1xuXG4gICAgICAgIGlmIChyb3V0ZSkgcm91dGVzLnB1c2gocm91dGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm91dGVzLnB1c2goY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZXM7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiByb3V0ZXMgZnJvbSB0aGUgZ2l2ZW4gb2JqZWN0IHdoaWNoXG4gKiBtYXkgYmUgYSBKU1ggcm91dGUsIGEgcGxhaW4gb2JqZWN0IHJvdXRlLCBvciBhbiBhcnJheSBvZiBlaXRoZXIuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlcyhyb3V0ZXMpIHtcbiAgaWYgKGlzUmVhY3RDaGlsZHJlbihyb3V0ZXMpKSB7XG4gICAgcm91dGVzID0gY3JlYXRlUm91dGVzRnJvbVJlYWN0Q2hpbGRyZW4ocm91dGVzKTtcbiAgfSBlbHNlIGlmIChyb3V0ZXMgJiYgIUFycmF5LmlzQXJyYXkocm91dGVzKSkge1xuICAgIHJvdXRlcyA9IFtyb3V0ZXNdO1xuICB9XG5cbiAgcmV0dXJuIHJvdXRlcztcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMucm91dGVyID0gZXhwb3J0cy5yb3V0ZXMgPSBleHBvcnRzLnJvdXRlID0gZXhwb3J0cy5jb21wb25lbnRzID0gZXhwb3J0cy5jb21wb25lbnQgPSBleHBvcnRzLmxvY2F0aW9uID0gZXhwb3J0cy5oaXN0b3J5ID0gZXhwb3J0cy5mYWxzeSA9IGV4cG9ydHMubG9jYXRpb25TaGFwZSA9IGV4cG9ydHMucm91dGVyU2hhcGUgPSB1bmRlZmluZWQ7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMnKTtcblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG52YXIgSW50ZXJuYWxQcm9wVHlwZXMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfSW50ZXJuYWxQcm9wVHlwZXMpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZnVuYyA9IF9yZWFjdC5Qcm9wVHlwZXMuZnVuYztcbnZhciBvYmplY3QgPSBfcmVhY3QuUHJvcFR5cGVzLm9iamVjdDtcbnZhciBzaGFwZSA9IF9yZWFjdC5Qcm9wVHlwZXMuc2hhcGU7XG52YXIgc3RyaW5nID0gX3JlYWN0LlByb3BUeXBlcy5zdHJpbmc7XG52YXIgcm91dGVyU2hhcGUgPSBleHBvcnRzLnJvdXRlclNoYXBlID0gc2hhcGUoe1xuICBwdXNoOiBmdW5jLmlzUmVxdWlyZWQsXG4gIHJlcGxhY2U6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgZ286IGZ1bmMuaXNSZXF1aXJlZCxcbiAgZ29CYWNrOiBmdW5jLmlzUmVxdWlyZWQsXG4gIGdvRm9yd2FyZDogZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRSb3V0ZUxlYXZlSG9vazogZnVuYy5pc1JlcXVpcmVkLFxuICBpc0FjdGl2ZTogZnVuYy5pc1JlcXVpcmVkXG59KTtcblxudmFyIGxvY2F0aW9uU2hhcGUgPSBleHBvcnRzLmxvY2F0aW9uU2hhcGUgPSBzaGFwZSh7XG4gIHBhdGhuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VhcmNoOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc3RhdGU6IG9iamVjdCxcbiAgYWN0aW9uOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAga2V5OiBzdHJpbmdcbn0pO1xuXG4vLyBEZXByZWNhdGVkIHN0dWZmIGJlbG93OlxuXG52YXIgZmFsc3kgPSBleHBvcnRzLmZhbHN5ID0gSW50ZXJuYWxQcm9wVHlwZXMuZmFsc3k7XG52YXIgaGlzdG9yeSA9IGV4cG9ydHMuaGlzdG9yeSA9IEludGVybmFsUHJvcFR5cGVzLmhpc3Rvcnk7XG52YXIgbG9jYXRpb24gPSBleHBvcnRzLmxvY2F0aW9uID0gbG9jYXRpb25TaGFwZTtcbnZhciBjb21wb25lbnQgPSBleHBvcnRzLmNvbXBvbmVudCA9IEludGVybmFsUHJvcFR5cGVzLmNvbXBvbmVudDtcbnZhciBjb21wb25lbnRzID0gZXhwb3J0cy5jb21wb25lbnRzID0gSW50ZXJuYWxQcm9wVHlwZXMuY29tcG9uZW50cztcbnZhciByb3V0ZSA9IGV4cG9ydHMucm91dGUgPSBJbnRlcm5hbFByb3BUeXBlcy5yb3V0ZTtcbnZhciByb3V0ZXMgPSBleHBvcnRzLnJvdXRlcyA9IEludGVybmFsUHJvcFR5cGVzLnJvdXRlcztcbnZhciByb3V0ZXIgPSBleHBvcnRzLnJvdXRlciA9IHJvdXRlclNoYXBlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkZXByZWNhdGVQcm9wVHlwZSA9IGZ1bmN0aW9uIGRlcHJlY2F0ZVByb3BUeXBlKHByb3BUeXBlLCBtZXNzYWdlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBwcm9wVHlwZS5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICB2YXIgZGVwcmVjYXRlSW50ZXJuYWxQcm9wVHlwZSA9IGZ1bmN0aW9uIGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUocHJvcFR5cGUpIHtcbiAgICAgIHJldHVybiBkZXByZWNhdGVQcm9wVHlwZShwcm9wVHlwZSwgJ1RoaXMgcHJvcCB0eXBlIGlzIG5vdCBpbnRlbmRlZCBmb3IgZXh0ZXJuYWwgdXNlLCBhbmQgd2FzIHByZXZpb3VzbHkgZXhwb3J0ZWQgYnkgbWlzdGFrZS4gVGhlc2UgaW50ZXJuYWwgcHJvcCB0eXBlcyBhcmUgZGVwcmVjYXRlZCBmb3IgZXh0ZXJuYWwgdXNlLCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgbGF0ZXIgdmVyc2lvbi4nKTtcbiAgICB9O1xuXG4gICAgdmFyIGRlcHJlY2F0ZVJlbmFtZWRQcm9wVHlwZSA9IGZ1bmN0aW9uIGRlcHJlY2F0ZVJlbmFtZWRQcm9wVHlwZShwcm9wVHlwZSwgbmFtZSkge1xuICAgICAgcmV0dXJuIGRlcHJlY2F0ZVByb3BUeXBlKHByb3BUeXBlLCAnVGhlIGAnICsgbmFtZSArICdgIHByb3AgdHlwZSBpcyBub3cgZXhwb3J0ZWQgYXMgYCcgKyBuYW1lICsgJ1NoYXBlYCB0byBhdm9pZCBuYW1lIGNvbmZsaWN0cy4gVGhpcyBleHBvcnQgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgbGF0ZXIgdmVyc2lvbi4nKTtcbiAgICB9O1xuXG4gICAgZXhwb3J0cy5mYWxzeSA9IGZhbHN5ID0gZGVwcmVjYXRlSW50ZXJuYWxQcm9wVHlwZShmYWxzeSk7XG4gICAgZXhwb3J0cy5oaXN0b3J5ID0gaGlzdG9yeSA9IGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUoaGlzdG9yeSk7XG4gICAgZXhwb3J0cy5jb21wb25lbnQgPSBjb21wb25lbnQgPSBkZXByZWNhdGVJbnRlcm5hbFByb3BUeXBlKGNvbXBvbmVudCk7XG4gICAgZXhwb3J0cy5jb21wb25lbnRzID0gY29tcG9uZW50cyA9IGRlcHJlY2F0ZUludGVybmFsUHJvcFR5cGUoY29tcG9uZW50cyk7XG4gICAgZXhwb3J0cy5yb3V0ZSA9IHJvdXRlID0gZGVwcmVjYXRlSW50ZXJuYWxQcm9wVHlwZShyb3V0ZSk7XG4gICAgZXhwb3J0cy5yb3V0ZXMgPSByb3V0ZXMgPSBkZXByZWNhdGVJbnRlcm5hbFByb3BUeXBlKHJvdXRlcyk7XG5cbiAgICBleHBvcnRzLmxvY2F0aW9uID0gbG9jYXRpb24gPSBkZXByZWNhdGVSZW5hbWVkUHJvcFR5cGUobG9jYXRpb24sICdsb2NhdGlvbicpO1xuICAgIGV4cG9ydHMucm91dGVyID0gcm91dGVyID0gZGVwcmVjYXRlUmVuYW1lZFByb3BUeXBlKHJvdXRlciwgJ3JvdXRlcicpO1xuICB9KSgpO1xufVxuXG52YXIgZGVmYXVsdEV4cG9ydCA9IHtcbiAgZmFsc3k6IGZhbHN5LFxuICBoaXN0b3J5OiBoaXN0b3J5LFxuICBsb2NhdGlvbjogbG9jYXRpb24sXG4gIGNvbXBvbmVudDogY29tcG9uZW50LFxuICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICByb3V0ZTogcm91dGUsXG4gIC8vIEZvciBzb21lIHJlYXNvbiwgcm91dGVzIHdhcyBuZXZlciBoZXJlLlxuICByb3V0ZXI6IHJvdXRlclxufTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgZGVmYXVsdEV4cG9ydCA9ICgwLCBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIuZGVmYXVsdCkoZGVmYXVsdEV4cG9ydCwgJ1RoZSBkZWZhdWx0IGV4cG9ydCBmcm9tIGByZWFjdC1yb3V0ZXIvbGliL1Byb3BUeXBlc2AgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSB0aGUgbmFtZWQgZXhwb3J0cyBpbnN0ZWFkLicpO1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSBkZWZhdWx0RXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvUHJvcFR5cGVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmNhblVzZU1lbWJyYW5lID0gdW5kZWZpbmVkO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2FuVXNlTWVtYnJhbmUgPSBleHBvcnRzLmNhblVzZU1lbWJyYW5lID0gZmFsc2U7XG5cbi8vIE5vLW9wIGJ5IGRlZmF1bHQuXG52YXIgZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMob2JqZWN0KSB7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB0cnkge1xuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICd4Jywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pLngpIHtcbiAgICAgIGV4cG9ydHMuY2FuVXNlTWVtYnJhbmUgPSBjYW5Vc2VNZW1icmFuZSA9IHRydWU7XG4gICAgfVxuICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4gIH0gY2F0Y2ggKGUpIHt9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tZW1wdHkgKi9cblxuICBpZiAoY2FuVXNlTWVtYnJhbmUpIHtcbiAgICBkZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyhvYmplY3QsIG1lc3NhZ2UpIHtcbiAgICAgIC8vIFdyYXAgdGhlIGRlcHJlY2F0ZWQgb2JqZWN0IGluIGEgbWVtYnJhbmUgdG8gd2FybiBvbiBwcm9wZXJ0eSBhY2Nlc3MuXG4gICAgICB2YXIgbWVtYnJhbmUgPSB7fTtcblxuICAgICAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AocHJvcCkge1xuICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3ApKSB7XG4gICAgICAgICAgcmV0dXJuICdjb250aW51ZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIG9iamVjdFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIC8vIENhbid0IHVzZSBmYXQgYXJyb3cgaGVyZSBiZWNhdXNlIG9mIHVzZSBvZiBhcmd1bWVudHMgYmVsb3cuXG4gICAgICAgICAgbWVtYnJhbmVbcHJvcF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0W3Byb3BdLmFwcGx5KG9iamVjdCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiAnY29udGludWUnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVGhlc2UgcHJvcGVydGllcyBhcmUgbm9uLWVudW1lcmFibGUgdG8gcHJldmVudCBSZWFjdCBkZXYgdG9vbHMgZnJvbVxuICAgICAgICAvLyBzZWVpbmcgdGhlbSBhbmQgY2F1c2luZyBzcHVyaW91cyB3YXJuaW5ncyB3aGVuIGFjY2Vzc2luZyB0aGVtLiBJblxuICAgICAgICAvLyBwcmluY2lwbGUgdGhpcyBjb3VsZCBiZSBkb25lIHdpdGggYSBwcm94eSwgYnV0IHN1cHBvcnQgZm9yIHRoZVxuICAgICAgICAvLyBvd25LZXlzIHRyYXAgb24gcHJveGllcyBpcyBub3QgdW5pdmVyc2FsLCBldmVuIGFtb25nIGJyb3dzZXJzIHRoYXRcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHN1cHBvcnQgcHJveGllcy5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1lbWJyYW5lLCBwcm9wLCB7XG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgbWVzc2FnZSkgOiB2b2lkIDA7XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0W3Byb3BdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIG9iamVjdCkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKHByb3ApO1xuXG4gICAgICAgIGlmIChfcmV0ID09PSAnY29udGludWUnKSBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lbWJyYW5lO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHJvdXRlcldhcm5pbmc7XG5leHBvcnRzLl9yZXNldFdhcm5lZCA9IF9yZXNldFdhcm5lZDtcblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciB3YXJuZWQgPSB7fTtcblxuZnVuY3Rpb24gcm91dGVyV2FybmluZyhmYWxzZVRvV2FybiwgbWVzc2FnZSkge1xuICAvLyBPbmx5IGlzc3VlIGRlcHJlY2F0aW9uIHdhcm5pbmdzIG9uY2UuXG4gIGlmIChtZXNzYWdlLmluZGV4T2YoJ2RlcHJlY2F0ZWQnKSAhPT0gLTEpIHtcbiAgICBpZiAod2FybmVkW21lc3NhZ2VdKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgd2FybmVkW21lc3NhZ2VdID0gdHJ1ZTtcbiAgfVxuXG4gIG1lc3NhZ2UgPSAnW3JlYWN0LXJvdXRlcl0gJyArIG1lc3NhZ2U7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMiA/IF9sZW4gLSAyIDogMCksIF9rZXkgPSAyOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMl0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBfd2FybmluZzIuZGVmYXVsdC5hcHBseSh1bmRlZmluZWQsIFtmYWxzZVRvV2FybiwgbWVzc2FnZV0uY29uY2F0KGFyZ3MpKTtcbn1cblxuZnVuY3Rpb24gX3Jlc2V0V2FybmVkKCkge1xuICB3YXJuZWQgPSB7fTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL3JvdXRlcldhcm5pbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTQtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTaW1pbGFyIHRvIGludmFyaWFudCBidXQgb25seSBsb2dzIGEgd2FybmluZyBpZiB0aGUgY29uZGl0aW9uIGlzIG5vdCBtZXQuXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIGxvZyBpc3N1ZXMgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzIGluIGNyaXRpY2FsXG4gKiBwYXRocy4gUmVtb3ZpbmcgdGhlIGxvZ2dpbmcgY29kZSBmb3IgcHJvZHVjdGlvbiBlbnZpcm9ubWVudHMgd2lsbCBrZWVwIHRoZVxuICogc2FtZSBsb2dpYyBhbmQgZm9sbG93IHRoZSBzYW1lIGNvZGUgcGF0aHMuXG4gKi9cblxudmFyIHdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ2B3YXJuaW5nKGNvbmRpdGlvbiwgZm9ybWF0LCAuLi5hcmdzKWAgcmVxdWlyZXMgYSB3YXJuaW5nICcgK1xuICAgICAgICAnbWVzc2FnZSBhcmd1bWVudCdcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm1hdC5sZW5ndGggPCAxMCB8fCAoL15bc1xcV10qJC8pLnRlc3QoZm9ybWF0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIHdhcm5pbmcgZm9ybWF0IHNob3VsZCBiZSBhYmxlIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgJyArXG4gICAgICAgICd3YXJuaW5nLiBQbGVhc2UsIHVzZSBhIG1vcmUgZGVzY3JpcHRpdmUgZm9ybWF0IHRoYW46ICcgKyBmb3JtYXRcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICtcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmdzW2FyZ0luZGV4KytdO1xuICAgICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgfSBjYXRjaCh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2FybmluZy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnJvdXRlcyA9IGV4cG9ydHMucm91dGUgPSBleHBvcnRzLmNvbXBvbmVudHMgPSBleHBvcnRzLmNvbXBvbmVudCA9IGV4cG9ydHMuaGlzdG9yeSA9IHVuZGVmaW5lZDtcbmV4cG9ydHMuZmFsc3kgPSBmYWxzeTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBmdW5jID0gX3JlYWN0LlByb3BUeXBlcy5mdW5jO1xudmFyIG9iamVjdCA9IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0O1xudmFyIGFycmF5T2YgPSBfcmVhY3QuUHJvcFR5cGVzLmFycmF5T2Y7XG52YXIgb25lT2ZUeXBlID0gX3JlYWN0LlByb3BUeXBlcy5vbmVPZlR5cGU7XG52YXIgZWxlbWVudCA9IF9yZWFjdC5Qcm9wVHlwZXMuZWxlbWVudDtcbnZhciBzaGFwZSA9IF9yZWFjdC5Qcm9wVHlwZXMuc2hhcGU7XG52YXIgc3RyaW5nID0gX3JlYWN0LlByb3BUeXBlcy5zdHJpbmc7XG5mdW5jdGlvbiBmYWxzeShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgaWYgKHByb3BzW3Byb3BOYW1lXSkgcmV0dXJuIG5ldyBFcnJvcignPCcgKyBjb21wb25lbnROYW1lICsgJz4gc2hvdWxkIG5vdCBoYXZlIGEgXCInICsgcHJvcE5hbWUgKyAnXCIgcHJvcCcpO1xufVxuXG52YXIgaGlzdG9yeSA9IGV4cG9ydHMuaGlzdG9yeSA9IHNoYXBlKHtcbiAgbGlzdGVuOiBmdW5jLmlzUmVxdWlyZWQsXG4gIHB1c2g6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVwbGFjZTogZnVuYy5pc1JlcXVpcmVkLFxuICBnbzogZnVuYy5pc1JlcXVpcmVkLFxuICBnb0JhY2s6IGZ1bmMuaXNSZXF1aXJlZCxcbiAgZ29Gb3J3YXJkOiBmdW5jLmlzUmVxdWlyZWRcbn0pO1xuXG52YXIgY29tcG9uZW50ID0gZXhwb3J0cy5jb21wb25lbnQgPSBvbmVPZlR5cGUoW2Z1bmMsIHN0cmluZ10pO1xudmFyIGNvbXBvbmVudHMgPSBleHBvcnRzLmNvbXBvbmVudHMgPSBvbmVPZlR5cGUoW2NvbXBvbmVudCwgb2JqZWN0XSk7XG52YXIgcm91dGUgPSBleHBvcnRzLnJvdXRlID0gb25lT2ZUeXBlKFtvYmplY3QsIGVsZW1lbnRdKTtcbnZhciByb3V0ZXMgPSBleHBvcnRzLnJvdXRlcyA9IG9uZU9mVHlwZShbcm91dGUsIGFycmF5T2Yocm91dGUpXSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9JbnRlcm5hbFByb3BUeXBlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jb21waWxlUGF0dGVybiA9IGNvbXBpbGVQYXR0ZXJuO1xuZXhwb3J0cy5tYXRjaFBhdHRlcm4gPSBtYXRjaFBhdHRlcm47XG5leHBvcnRzLmdldFBhcmFtTmFtZXMgPSBnZXRQYXJhbU5hbWVzO1xuZXhwb3J0cy5nZXRQYXJhbXMgPSBnZXRQYXJhbXM7XG5leHBvcnRzLmZvcm1hdFBhdHRlcm4gPSBmb3JtYXRQYXR0ZXJuO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csICdcXFxcJCYnKTtcbn1cblxuZnVuY3Rpb24gX2NvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgdmFyIHJlZ2V4cFNvdXJjZSA9ICcnO1xuICB2YXIgcGFyYW1OYW1lcyA9IFtdO1xuICB2YXIgdG9rZW5zID0gW107XG5cbiAgdmFyIG1hdGNoID0gdm9pZCAwLFxuICAgICAgbGFzdEluZGV4ID0gMCxcbiAgICAgIG1hdGNoZXIgPSAvOihbYS16QS1aXyRdW2EtekEtWjAtOV8kXSopfFxcKlxcKnxcXCp8XFwofFxcKS9nO1xuICB3aGlsZSAobWF0Y2ggPSBtYXRjaGVyLmV4ZWMocGF0dGVybikpIHtcbiAgICBpZiAobWF0Y2guaW5kZXggIT09IGxhc3RJbmRleCkge1xuICAgICAgdG9rZW5zLnB1c2gocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSk7XG4gICAgICByZWdleHBTb3VyY2UgKz0gZXNjYXBlUmVnRXhwKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBtYXRjaC5pbmRleCkpO1xuICAgIH1cblxuICAgIGlmIChtYXRjaFsxXSkge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoW14vXSspJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaChtYXRjaFsxXSk7XG4gICAgfSBlbHNlIGlmIChtYXRjaFswXSA9PT0gJyoqJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoLiopJztcbiAgICAgIHBhcmFtTmFtZXMucHVzaCgnc3BsYXQnKTtcbiAgICB9IGVsc2UgaWYgKG1hdGNoWzBdID09PSAnKicpIHtcbiAgICAgIHJlZ2V4cFNvdXJjZSArPSAnKC4qPyknO1xuICAgICAgcGFyYW1OYW1lcy5wdXNoKCdzcGxhdCcpO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcoJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcoPzonO1xuICAgIH0gZWxzZSBpZiAobWF0Y2hbMF0gPT09ICcpJykge1xuICAgICAgcmVnZXhwU291cmNlICs9ICcpPyc7XG4gICAgfVxuXG4gICAgdG9rZW5zLnB1c2gobWF0Y2hbMF0pO1xuXG4gICAgbGFzdEluZGV4ID0gbWF0Y2hlci5sYXN0SW5kZXg7XG4gIH1cblxuICBpZiAobGFzdEluZGV4ICE9PSBwYXR0ZXJuLmxlbmd0aCkge1xuICAgIHRva2Vucy5wdXNoKHBhdHRlcm4uc2xpY2UobGFzdEluZGV4LCBwYXR0ZXJuLmxlbmd0aCkpO1xuICAgIHJlZ2V4cFNvdXJjZSArPSBlc2NhcGVSZWdFeHAocGF0dGVybi5zbGljZShsYXN0SW5kZXgsIHBhdHRlcm4ubGVuZ3RoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBhdHRlcm46IHBhdHRlcm4sXG4gICAgcmVnZXhwU291cmNlOiByZWdleHBTb3VyY2UsXG4gICAgcGFyYW1OYW1lczogcGFyYW1OYW1lcyxcbiAgICB0b2tlbnM6IHRva2Vuc1xuICB9O1xufVxuXG52YXIgQ29tcGlsZWRQYXR0ZXJuc0NhY2hlID0ge307XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pIHtcbiAgaWYgKCEocGF0dGVybiBpbiBDb21waWxlZFBhdHRlcm5zQ2FjaGUpKSBDb21waWxlZFBhdHRlcm5zQ2FjaGVbcGF0dGVybl0gPSBfY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgcmV0dXJuIENvbXBpbGVkUGF0dGVybnNDYWNoZVtwYXR0ZXJuXTtcbn1cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBtYXRjaCBhIHBhdHRlcm4gb24gdGhlIGdpdmVuIHBhdGhuYW1lLiBQYXR0ZXJucyBtYXkgdXNlXG4gKiB0aGUgZm9sbG93aW5nIHNwZWNpYWwgY2hhcmFjdGVyczpcbiAqXG4gKiAtIDpwYXJhbU5hbWUgICAgIE1hdGNoZXMgYSBVUkwgc2VnbWVudCB1cCB0byB0aGUgbmV4dCAvLCA/LCBvciAjLiBUaGVcbiAqICAgICAgICAgICAgICAgICAgY2FwdHVyZWQgc3RyaW5nIGlzIGNvbnNpZGVyZWQgYSBcInBhcmFtXCJcbiAqIC0gKCkgICAgICAgICAgICAgV3JhcHMgYSBzZWdtZW50IG9mIHRoZSBVUkwgdGhhdCBpcyBvcHRpb25hbFxuICogLSAqICAgICAgICAgICAgICBDb25zdW1lcyAobm9uLWdyZWVkeSkgYWxsIGNoYXJhY3RlcnMgdXAgdG8gdGhlIG5leHRcbiAqICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyIGluIHRoZSBwYXR0ZXJuLCBvciB0byB0aGUgZW5kIG9mIHRoZSBVUkwgaWZcbiAqICAgICAgICAgICAgICAgICAgdGhlcmUgaXMgbm9uZVxuICogLSAqKiAgICAgICAgICAgICBDb25zdW1lcyAoZ3JlZWR5KSBhbGwgY2hhcmFjdGVycyB1cCB0byB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICAgICAgICAgICAgICAgaW4gdGhlIHBhdHRlcm4sIG9yIHRvIHRoZSBlbmQgb2YgdGhlIFVSTCBpZiB0aGVyZSBpcyBub25lXG4gKlxuICogIFRoZSBmdW5jdGlvbiBjYWxscyBjYWxsYmFjayhlcnJvciwgbWF0Y2hlZCkgd2hlbiBmaW5pc2hlZC5cbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcmVtYWluaW5nUGF0aG5hbWVcbiAqIC0gcGFyYW1OYW1lc1xuICogLSBwYXJhbVZhbHVlc1xuICovXG5mdW5jdGlvbiBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpIHtcbiAgLy8gRW5zdXJlIHBhdHRlcm4gc3RhcnRzIHdpdGggbGVhZGluZyBzbGFzaCBmb3IgY29uc2lzdGVuY3kgd2l0aCBwYXRobmFtZS5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBwYXR0ZXJuID0gJy8nICsgcGF0dGVybjtcbiAgfVxuXG4gIHZhciBfY29tcGlsZVBhdHRlcm4yID0gY29tcGlsZVBhdHRlcm4ocGF0dGVybik7XG5cbiAgdmFyIHJlZ2V4cFNvdXJjZSA9IF9jb21waWxlUGF0dGVybjIucmVnZXhwU291cmNlO1xuICB2YXIgcGFyYW1OYW1lcyA9IF9jb21waWxlUGF0dGVybjIucGFyYW1OYW1lcztcbiAgdmFyIHRva2VucyA9IF9jb21waWxlUGF0dGVybjIudG9rZW5zO1xuXG5cbiAgaWYgKHBhdHRlcm4uY2hhckF0KHBhdHRlcm4ubGVuZ3RoIC0gMSkgIT09ICcvJykge1xuICAgIHJlZ2V4cFNvdXJjZSArPSAnLz8nOyAvLyBBbGxvdyBvcHRpb25hbCBwYXRoIHNlcGFyYXRvciBhdCBlbmQuXG4gIH1cblxuICAvLyBTcGVjaWFsLWNhc2UgcGF0dGVybnMgbGlrZSAnKicgZm9yIGNhdGNoLWFsbCByb3V0ZXMuXG4gIGlmICh0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdID09PSAnKicpIHtcbiAgICByZWdleHBTb3VyY2UgKz0gJyQnO1xuICB9XG5cbiAgdmFyIG1hdGNoID0gcGF0aG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgnXicgKyByZWdleHBTb3VyY2UsICdpJykpO1xuICBpZiAobWF0Y2ggPT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1hdGNoZWRQYXRoID0gbWF0Y2hbMF07XG4gIHZhciByZW1haW5pbmdQYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cihtYXRjaGVkUGF0aC5sZW5ndGgpO1xuXG4gIGlmIChyZW1haW5pbmdQYXRobmFtZSkge1xuICAgIC8vIFJlcXVpcmUgdGhhdCB0aGUgbWF0Y2ggZW5kcyBhdCBhIHBhdGggc2VwYXJhdG9yLCBpZiB3ZSBkaWRuJ3QgbWF0Y2hcbiAgICAvLyB0aGUgZnVsbCBwYXRoLCBzbyBhbnkgcmVtYWluaW5nIHBhdGhuYW1lIGlzIGEgbmV3IHBhdGggc2VnbWVudC5cbiAgICBpZiAobWF0Y2hlZFBhdGguY2hhckF0KG1hdGNoZWRQYXRoLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgcmVtYWluaW5nIHBhdGhuYW1lLCB0cmVhdCB0aGUgcGF0aCBzZXBhcmF0b3IgYXMgcGFydCBvZlxuICAgIC8vIHRoZSByZW1haW5pbmcgcGF0aG5hbWUgZm9yIHByb3Blcmx5IGNvbnRpbnVpbmcgdGhlIG1hdGNoLlxuICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gJy8nICsgcmVtYWluaW5nUGF0aG5hbWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlbWFpbmluZ1BhdGhuYW1lOiByZW1haW5pbmdQYXRobmFtZSxcbiAgICBwYXJhbU5hbWVzOiBwYXJhbU5hbWVzLFxuICAgIHBhcmFtVmFsdWVzOiBtYXRjaC5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiB2ICYmIGRlY29kZVVSSUNvbXBvbmVudCh2KTtcbiAgICB9KVxuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRQYXJhbU5hbWVzKHBhdHRlcm4pIHtcbiAgcmV0dXJuIGNvbXBpbGVQYXR0ZXJuKHBhdHRlcm4pLnBhcmFtTmFtZXM7XG59XG5cbmZ1bmN0aW9uIGdldFBhcmFtcyhwYXR0ZXJuLCBwYXRobmFtZSkge1xuICB2YXIgbWF0Y2ggPSBtYXRjaFBhdHRlcm4ocGF0dGVybiwgcGF0aG5hbWUpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcGFyYW1OYW1lcyA9IG1hdGNoLnBhcmFtTmFtZXM7XG4gIHZhciBwYXJhbVZhbHVlcyA9IG1hdGNoLnBhcmFtVmFsdWVzO1xuXG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBwYXJhbU5hbWVzLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtTmFtZSwgaW5kZXgpIHtcbiAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWVzW2luZGV4XTtcbiAgfSk7XG5cbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdmVyc2lvbiBvZiB0aGUgZ2l2ZW4gcGF0dGVybiB3aXRoIHBhcmFtcyBpbnRlcnBvbGF0ZWQuIFRocm93c1xuICogaWYgdGhlcmUgaXMgYSBkeW5hbWljIHNlZ21lbnQgb2YgdGhlIHBhdHRlcm4gZm9yIHdoaWNoIHRoZXJlIGlzIG5vIHBhcmFtLlxuICovXG5mdW5jdGlvbiBmb3JtYXRQYXR0ZXJuKHBhdHRlcm4sIHBhcmFtcykge1xuICBwYXJhbXMgPSBwYXJhbXMgfHwge307XG5cbiAgdmFyIF9jb21waWxlUGF0dGVybjMgPSBjb21waWxlUGF0dGVybihwYXR0ZXJuKTtcblxuICB2YXIgdG9rZW5zID0gX2NvbXBpbGVQYXR0ZXJuMy50b2tlbnM7XG5cbiAgdmFyIHBhcmVuQ291bnQgPSAwLFxuICAgICAgcGF0aG5hbWUgPSAnJyxcbiAgICAgIHNwbGF0SW5kZXggPSAwO1xuXG4gIHZhciB0b2tlbiA9IHZvaWQgMCxcbiAgICAgIHBhcmFtTmFtZSA9IHZvaWQgMCxcbiAgICAgIHBhcmFtVmFsdWUgPSB2b2lkIDA7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0b2tlbnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICB0b2tlbiA9IHRva2Vuc1tpXTtcblxuICAgIGlmICh0b2tlbiA9PT0gJyonIHx8IHRva2VuID09PSAnKionKSB7XG4gICAgICBwYXJhbVZhbHVlID0gQXJyYXkuaXNBcnJheShwYXJhbXMuc3BsYXQpID8gcGFyYW1zLnNwbGF0W3NwbGF0SW5kZXgrK10gOiBwYXJhbXMuc3BsYXQ7XG5cbiAgICAgICEocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdNaXNzaW5nIHNwbGF0ICMlcyBmb3IgcGF0aCBcIiVzXCInLCBzcGxhdEluZGV4LCBwYXR0ZXJuKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlICE9IG51bGwpIHBhdGhuYW1lICs9IGVuY29kZVVSSShwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKCcpIHtcbiAgICAgIHBhcmVuQ291bnQgKz0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuID09PSAnKScpIHtcbiAgICAgIHBhcmVuQ291bnQgLT0gMTtcbiAgICB9IGVsc2UgaWYgKHRva2VuLmNoYXJBdCgwKSA9PT0gJzonKSB7XG4gICAgICBwYXJhbU5hbWUgPSB0b2tlbi5zdWJzdHJpbmcoMSk7XG4gICAgICBwYXJhbVZhbHVlID0gcGFyYW1zW3BhcmFtTmFtZV07XG5cbiAgICAgICEocGFyYW1WYWx1ZSAhPSBudWxsIHx8IHBhcmVuQ291bnQgPiAwKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdNaXNzaW5nIFwiJXNcIiBwYXJhbWV0ZXIgZm9yIHBhdGggXCIlc1wiJywgcGFyYW1OYW1lLCBwYXR0ZXJuKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlICE9IG51bGwpIHBhdGhuYW1lICs9IGVuY29kZVVSSUNvbXBvbmVudChwYXJhbVZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aG5hbWUgKz0gdG9rZW47XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhdGhuYW1lLnJlcGxhY2UoL1xcLysvZywgJy8nKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1BhdHRlcm5VdGlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvY3JlYXRlSGFzaEhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIYXNoSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVIYXNoSGlzdG9yeSk7XG5cbnZhciBfdXNlUXVlcmllcyA9IHJlcXVpcmUoJ2hpc3RvcnkvbGliL3VzZVF1ZXJpZXMnKTtcblxudmFyIF91c2VRdWVyaWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVF1ZXJpZXMpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIgPSByZXF1aXJlKCcuL2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyJyk7XG5cbnZhciBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG52YXIgX1JvdXRlckNvbnRleHQgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQpO1xuXG52YXIgX1JvdXRlVXRpbHMgPSByZXF1aXJlKCcuL1JvdXRlVXRpbHMnKTtcblxudmFyIF9Sb3V0ZXJVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVyVXRpbHMnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBpc0RlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpIHtcbiAgcmV0dXJuICFoaXN0b3J5IHx8ICFoaXN0b3J5Ll9fdjJfY29tcGF0aWJsZV9fO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG5mdW5jdGlvbiBpc1Vuc3VwcG9ydGVkSGlzdG9yeShoaXN0b3J5KSB7XG4gIC8vIHYzIGhpc3RvcmllcyBleHBvc2UgZ2V0Q3VycmVudExvY2F0aW9uLCBidXQgYXJlbid0IGN1cnJlbnRseSBzdXBwb3J0ZWQuXG4gIHJldHVybiBoaXN0b3J5ICYmIGhpc3RvcnkuZ2V0Q3VycmVudExvY2F0aW9uO1xufVxuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXM7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBIDxSb3V0ZXI+IGlzIGEgaGlnaC1sZXZlbCBBUEkgZm9yIGF1dG9tYXRpY2FsbHkgc2V0dGluZyB1cFxuICogYSByb3V0ZXIgdGhhdCByZW5kZXJzIGEgPFJvdXRlckNvbnRleHQ+IHdpdGggYWxsIHRoZSBwcm9wc1xuICogaXQgbmVlZHMgZWFjaCB0aW1lIHRoZSBVUkwgY2hhbmdlcy5cbiAqL1xuXG52YXIgUm91dGVyID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdSb3V0ZXInLFxuXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGlzdG9yeTogb2JqZWN0LFxuICAgIGNoaWxkcmVuOiBfSW50ZXJuYWxQcm9wVHlwZXMucm91dGVzLFxuICAgIHJvdXRlczogX0ludGVybmFsUHJvcFR5cGVzLnJvdXRlcywgLy8gYWxpYXMgZm9yIGNoaWxkcmVuXG4gICAgcmVuZGVyOiBmdW5jLFxuICAgIGNyZWF0ZUVsZW1lbnQ6IGZ1bmMsXG4gICAgb25FcnJvcjogZnVuYyxcbiAgICBvblVwZGF0ZTogZnVuYyxcblxuICAgIC8vIFBSSVZBVEU6IEZvciBjbGllbnQtc2lkZSByZWh5ZHJhdGlvbiBvZiBzZXJ2ZXIgbWF0Y2guXG4gICAgbWF0Y2hDb250ZXh0OiBvYmplY3RcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXJDb250ZXh0Mi5kZWZhdWx0LCBwcm9wcyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvY2F0aW9uOiBudWxsLFxuICAgICAgcm91dGVzOiBudWxsLFxuICAgICAgcGFyYW1zOiBudWxsLFxuICAgICAgY29tcG9uZW50czogbnVsbFxuICAgIH07XG4gIH0sXG4gIGhhbmRsZUVycm9yOiBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRXJyb3IpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvci5jYWxsKHRoaXMsIGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhyb3cgZXJyb3JzIGJ5IGRlZmF1bHQgc28gd2UgZG9uJ3Qgc2lsZW50bHkgc3dhbGxvdyB0aGVtIVxuICAgICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgZXJyb3IgcHJvYmFibHkgb2NjdXJyZWQgaW4gZ2V0Q2hpbGRSb3V0ZXMgb3IgZ2V0Q29tcG9uZW50cy5cbiAgICB9XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxNb3VudDogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcGFyc2VRdWVyeVN0cmluZyA9IF9wcm9wcy5wYXJzZVF1ZXJ5U3RyaW5nO1xuICAgIHZhciBzdHJpbmdpZnlRdWVyeSA9IF9wcm9wcy5zdHJpbmdpZnlRdWVyeTtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKCEocGFyc2VRdWVyeVN0cmluZyB8fCBzdHJpbmdpZnlRdWVyeSksICdgcGFyc2VRdWVyeVN0cmluZ2AgYW5kIGBzdHJpbmdpZnlRdWVyeWAgYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSBjcmVhdGUgYSBjdXN0b20gaGlzdG9yeS4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWN1c3RvbXF1ZXJ5c3RyaW5nJykgOiB2b2lkIDA7XG5cbiAgICB2YXIgX2NyZWF0ZVJvdXRlck9iamVjdHMgPSB0aGlzLmNyZWF0ZVJvdXRlck9iamVjdHMoKTtcblxuICAgIHZhciBoaXN0b3J5ID0gX2NyZWF0ZVJvdXRlck9iamVjdHMuaGlzdG9yeTtcbiAgICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSBfY3JlYXRlUm91dGVyT2JqZWN0cy50cmFuc2l0aW9uTWFuYWdlcjtcbiAgICB2YXIgcm91dGVyID0gX2NyZWF0ZVJvdXRlck9iamVjdHMucm91dGVyO1xuXG5cbiAgICB0aGlzLl91bmxpc3RlbiA9IHRyYW5zaXRpb25NYW5hZ2VyLmxpc3RlbihmdW5jdGlvbiAoZXJyb3IsIHN0YXRlKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoc3RhdGUsIF90aGlzLnByb3BzLm9uVXBkYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuaGlzdG9yeSA9IGhpc3Rvcnk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH0sXG4gIGNyZWF0ZVJvdXRlck9iamVjdHM6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlck9iamVjdHMoKSB7XG4gICAgdmFyIG1hdGNoQ29udGV4dCA9IHRoaXMucHJvcHMubWF0Y2hDb250ZXh0O1xuXG4gICAgaWYgKG1hdGNoQ29udGV4dCkge1xuICAgICAgcmV0dXJuIG1hdGNoQ29udGV4dDtcbiAgICB9XG5cbiAgICB2YXIgaGlzdG9yeSA9IHRoaXMucHJvcHMuaGlzdG9yeTtcbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJvdXRlcyA9IF9wcm9wczIucm91dGVzO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wczIuY2hpbGRyZW47XG5cblxuICAgICEhaXNVbnN1cHBvcnRlZEhpc3RvcnkoaGlzdG9yeSkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlLCAnWW91IGhhdmUgcHJvdmlkZWQgYSBoaXN0b3J5IG9iamVjdCBjcmVhdGVkIHdpdGggaGlzdG9yeSB2My54LiAnICsgJ1RoaXMgdmVyc2lvbiBvZiBSZWFjdCBSb3V0ZXIgaXMgbm90IGNvbXBhdGlibGUgd2l0aCB2MyBoaXN0b3J5ICcgKyAnb2JqZWN0cy4gUGxlYXNlIHVzZSBoaXN0b3J5IHYyLnggaW5zdGVhZC4nKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICBpZiAoaXNEZXByZWNhdGVkSGlzdG9yeShoaXN0b3J5KSkge1xuICAgICAgaGlzdG9yeSA9IHRoaXMud3JhcERlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKGhpc3RvcnksICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMpKHJvdXRlcyB8fCBjaGlsZHJlbikpO1xuICAgIHZhciByb3V0ZXIgPSAoMCwgX1JvdXRlclV0aWxzLmNyZWF0ZVJvdXRlck9iamVjdCkoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuICAgIHZhciByb3V0aW5nSGlzdG9yeSA9ICgwLCBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGluZ0hpc3RvcnkpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcblxuICAgIHJldHVybiB7IGhpc3Rvcnk6IHJvdXRpbmdIaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcjogdHJhbnNpdGlvbk1hbmFnZXIsIHJvdXRlcjogcm91dGVyIH07XG4gIH0sXG4gIHdyYXBEZXByZWNhdGVkSGlzdG9yeTogZnVuY3Rpb24gd3JhcERlcHJlY2F0ZWRIaXN0b3J5KGhpc3RvcnkpIHtcbiAgICB2YXIgX3Byb3BzMyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHBhcnNlUXVlcnlTdHJpbmcgPSBfcHJvcHMzLnBhcnNlUXVlcnlTdHJpbmc7XG4gICAgdmFyIHN0cmluZ2lmeVF1ZXJ5ID0gX3Byb3BzMy5zdHJpbmdpZnlRdWVyeTtcblxuXG4gICAgdmFyIGNyZWF0ZUhpc3RvcnkgPSB2b2lkIDA7XG4gICAgaWYgKGhpc3RvcnkpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnSXQgYXBwZWFycyB5b3UgaGF2ZSBwcm92aWRlZCBhIGRlcHJlY2F0ZWQgaGlzdG9yeSBvYmplY3QgdG8gYDxSb3V0ZXIvPmAsIHBsZWFzZSB1c2UgYSBoaXN0b3J5IHByb3ZpZGVkIGJ5ICcgKyAnUmVhY3QgUm91dGVyIHdpdGggYGltcG9ydCB7IGJyb3dzZXJIaXN0b3J5IH0gZnJvbSBcXCdyZWFjdC1yb3V0ZXJcXCdgIG9yIGBpbXBvcnQgeyBoYXNoSGlzdG9yeSB9IGZyb20gXFwncmVhY3Qtcm91dGVyXFwnYC4gJyArICdJZiB5b3UgYXJlIHVzaW5nIGEgY3VzdG9tIGhpc3RvcnkgcGxlYXNlIGNyZWF0ZSBpdCB3aXRoIGB1c2VSb3V0ZXJIaXN0b3J5YCwgc2VlIGh0dHA6Ly90aW55LmNjL3JvdXRlci11c2luZ2hpc3RvcnkgZm9yIGRldGFpbHMuJykgOiB2b2lkIDA7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgICAgICAgcmV0dXJuIGhpc3Rvcnk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2BSb3V0ZXJgIG5vIGxvbmdlciBkZWZhdWx0cyB0aGUgaGlzdG9yeSBwcm9wIHRvIGhhc2ggaGlzdG9yeS4gUGxlYXNlIHVzZSB0aGUgYGhhc2hIaXN0b3J5YCBzaW5nbGV0b24gaW5zdGVhZC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWRlZmF1bHRoaXN0b3J5JykgOiB2b2lkIDA7XG4gICAgICBjcmVhdGVIaXN0b3J5ID0gX2NyZWF0ZUhhc2hIaXN0b3J5Mi5kZWZhdWx0O1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX3VzZVF1ZXJpZXMyLmRlZmF1bHQpKGNyZWF0ZUhpc3RvcnkpKHsgcGFyc2VRdWVyeVN0cmluZzogcGFyc2VRdWVyeVN0cmluZywgc3RyaW5naWZ5UXVlcnk6IHN0cmluZ2lmeVF1ZXJ5IH0pO1xuICB9LFxuXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHNhbml0eSBjaGVjayAqL1xuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKG5leHRQcm9wcy5oaXN0b3J5ID09PSB0aGlzLnByb3BzLmhpc3RvcnksICdZb3UgY2Fubm90IGNoYW5nZSA8Um91dGVyIGhpc3Rvcnk+OyBpdCB3aWxsIGJlIGlnbm9yZWQnKSA6IHZvaWQgMDtcblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKChuZXh0UHJvcHMucm91dGVzIHx8IG5leHRQcm9wcy5jaGlsZHJlbikgPT09ICh0aGlzLnByb3BzLnJvdXRlcyB8fCB0aGlzLnByb3BzLmNoaWxkcmVuKSwgJ1lvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgcm91dGVzPjsgaXQgd2lsbCBiZSBpZ25vcmVkJykgOiB2b2lkIDA7XG4gIH0sXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5fdW5saXN0ZW4pIHRoaXMuX3VubGlzdGVuKCk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHZhciBsb2NhdGlvbiA9IF9zdGF0ZS5sb2NhdGlvbjtcbiAgICB2YXIgcm91dGVzID0gX3N0YXRlLnJvdXRlcztcbiAgICB2YXIgcGFyYW1zID0gX3N0YXRlLnBhcmFtcztcbiAgICB2YXIgY29tcG9uZW50cyA9IF9zdGF0ZS5jb21wb25lbnRzO1xuICAgIHZhciBfcHJvcHM0ID0gdGhpcy5wcm9wcztcbiAgICB2YXIgY3JlYXRlRWxlbWVudCA9IF9wcm9wczQuY3JlYXRlRWxlbWVudDtcbiAgICB2YXIgcmVuZGVyID0gX3Byb3BzNC5yZW5kZXI7XG5cbiAgICB2YXIgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3Byb3BzNCwgWydjcmVhdGVFbGVtZW50JywgJ3JlbmRlciddKTtcblxuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSByZXR1cm4gbnVsbDsgLy8gQXN5bmMgbWF0Y2hcblxuICAgIC8vIE9ubHkgZm9yd2FyZCBub24tUm91dGVyLXNwZWNpZmljIHByb3BzIHRvIHJvdXRpbmcgY29udGV4dCwgYXMgdGhvc2UgYXJlXG4gICAgLy8gdGhlIG9ubHkgb25lcyB0aGF0IG1pZ2h0IGJlIGN1c3RvbSByb3V0aW5nIGNvbnRleHQgcHJvcHMuXG4gICAgT2JqZWN0LmtleXMoUm91dGVyLnByb3BUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcFR5cGUpIHtcbiAgICAgIHJldHVybiBkZWxldGUgcHJvcHNbcHJvcFR5cGVdO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlbmRlcihfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgIGhpc3Rvcnk6IHRoaXMuaGlzdG9yeSxcbiAgICAgIHJvdXRlcjogdGhpcy5yb3V0ZXIsXG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICByb3V0ZXM6IHJvdXRlcyxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRcbiAgICB9KSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDUxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX0RPTVN0YXRlU3RvcmFnZSA9IHJlcXVpcmUoJy4vRE9NU3RhdGVTdG9yYWdlJyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlRE9NSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlRE9NSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGlzQWJzb2x1dGVQYXRoKHBhdGgpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyAmJiBwYXRoLmNoYXJBdCgwKSA9PT0gJy8nO1xufVxuXG5mdW5jdGlvbiBlbnN1cmVTbGFzaCgpIHtcbiAgdmFyIHBhdGggPSBfRE9NVXRpbHMuZ2V0SGFzaFBhdGgoKTtcblxuICBpZiAoaXNBYnNvbHV0ZVBhdGgocGF0aCkpIHJldHVybiB0cnVlO1xuXG4gIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgoJy8nICsgcGF0aCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBhZGRRdWVyeVN0cmluZ1ZhbHVlVG9QYXRoKHBhdGgsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHBhdGggKyAocGF0aC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIChrZXkgKyAnPScgKyB2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHN0cmlwUXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIGtleSkge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKG5ldyBSZWdFeHAoJ1s/Jl0/JyArIGtleSArICc9W2EtekEtWjAtOV0rJyksICcnKTtcbn1cblxuZnVuY3Rpb24gZ2V0UXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIGtleSkge1xuICB2YXIgbWF0Y2ggPSBwYXRoLm1hdGNoKG5ldyBSZWdFeHAoJ1xcXFw/Lio/XFxcXGInICsga2V5ICsgJz0oLis/KVxcXFxiJykpO1xuICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2hbMV07XG59XG5cbnZhciBEZWZhdWx0UXVlcnlLZXkgPSAnX2snO1xuXG5mdW5jdGlvbiBjcmVhdGVIYXNoSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnSGFzaCBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgcXVlcnlLZXkgPSBvcHRpb25zLnF1ZXJ5S2V5O1xuXG4gIGlmIChxdWVyeUtleSA9PT0gdW5kZWZpbmVkIHx8ICEhcXVlcnlLZXkpIHF1ZXJ5S2V5ID0gdHlwZW9mIHF1ZXJ5S2V5ID09PSAnc3RyaW5nJyA/IHF1ZXJ5S2V5IDogRGVmYXVsdFF1ZXJ5S2V5O1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRIYXNoUGF0aCgpO1xuXG4gICAgdmFyIGtleSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHF1ZXJ5S2V5KSB7XG4gICAgICBrZXkgPSBnZXRRdWVyeVN0cmluZ1ZhbHVlRnJvbVBhdGgocGF0aCwgcXVlcnlLZXkpO1xuICAgICAgcGF0aCA9IHN0cmlwUXVlcnlTdHJpbmdWYWx1ZUZyb21QYXRoKHBhdGgsIHF1ZXJ5S2V5KTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBzdGF0ZSA9IF9ET01TdGF0ZVN0b3JhZ2UucmVhZFN0YXRlKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICAgIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG4gICAgICAgIF9ET01VdGlscy5yZXBsYWNlSGFzaFBhdGgoYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBxdWVyeUtleSwga2V5KSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGtleSA9IHN0YXRlID0gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0SGFzaENoYW5nZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBoYXNoQ2hhbmdlTGlzdGVuZXIoKSB7XG4gICAgICBpZiAoIWVuc3VyZVNsYXNoKCkpIHJldHVybjsgLy8gQWx3YXlzIG1ha2Ugc3VyZSBoYXNoZXMgYXJlIHByZWNlZWRlZCB3aXRoIGEgLy5cblxuICAgICAgdHJhbnNpdGlvblRvKGdldEN1cnJlbnRMb2NhdGlvbigpKTtcbiAgICB9XG5cbiAgICBlbnN1cmVTbGFzaCgpO1xuICAgIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBoYXNoQ2hhbmdlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoO1xuXG4gICAgaWYgKHF1ZXJ5S2V5KSB7XG4gICAgICBwYXRoID0gYWRkUXVlcnlTdHJpbmdWYWx1ZVRvUGF0aChwYXRoLCBxdWVyeUtleSwga2V5KTtcbiAgICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEcm9wIGtleSBhbmQgc3RhdGUuXG4gICAgICBsb2NhdGlvbi5rZXkgPSBsb2NhdGlvbi5zdGF0ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGN1cnJlbnRIYXNoID0gX0RPTVV0aWxzLmdldEhhc2hQYXRoKCk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBpZiAoY3VycmVudEhhc2ggIT09IHBhdGgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBwYXRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnWW91IGNhbm5vdCBQVVNIIHRoZSBzYW1lIHBhdGggdXNpbmcgaGFzaCBoaXN0b3J5JykgOiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjdXJyZW50SGFzaCAhPT0gcGF0aCkge1xuICAgICAgLy8gUkVQTEFDRVxuICAgICAgX0RPTVV0aWxzLnJlcGxhY2VIYXNoUGF0aChwYXRoKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wSGFzaENoYW5nZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BIYXNoQ2hhbmdlTGlzdGVuZXIgPSBzdGFydEhhc2hDaGFuZ2VMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BIYXNoQ2hhbmdlTGlzdGVuZXIgPSBzdGFydEhhc2hDaGFuZ2VMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wSGFzaENoYW5nZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocXVlcnlLZXkgfHwgbG9jYXRpb24uc3RhdGUgPT0gbnVsbCwgJ1lvdSBjYW5ub3QgdXNlIHN0YXRlIHdpdGhvdXQgYSBxdWVyeUtleSBpdCB3aWxsIGJlIGRyb3BwZWQnKSA6IHVuZGVmaW5lZDtcblxuICAgIGhpc3RvcnkucHVzaChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHF1ZXJ5S2V5IHx8IGxvY2F0aW9uLnN0YXRlID09IG51bGwsICdZb3UgY2Fubm90IHVzZSBzdGF0ZSB3aXRob3V0IGEgcXVlcnlLZXkgaXQgd2lsbCBiZSBkcm9wcGVkJykgOiB1bmRlZmluZWQ7XG5cbiAgICBoaXN0b3J5LnJlcGxhY2UobG9jYXRpb24pO1xuICB9XG5cbiAgdmFyIGdvSXNTdXBwb3J0ZWRXaXRob3V0UmVsb2FkID0gX0RPTVV0aWxzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCk7XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShnb0lzU3VwcG9ydGVkV2l0aG91dFJlbG9hZCwgJ0hhc2ggaGlzdG9yeSBnbyhuKSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkIGluIHRoaXMgYnJvd3NlcicpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5nbyhuKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYocGF0aCkge1xuICAgIHJldHVybiAnIycgKyBoaXN0b3J5LmNyZWF0ZUhyZWYocGF0aCk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BIYXNoQ2hhbmdlTGlzdGVuZXIgPSBzdGFydEhhc2hDaGFuZ2VMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIGhpc3RvcnkucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBoaXN0b3J5LnVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcblxuICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BIYXNoQ2hhbmdlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHF1ZXJ5S2V5IHx8IHN0YXRlID09IG51bGwsICdZb3UgY2Fubm90IHVzZSBzdGF0ZSB3aXRob3V0IGEgcXVlcnlLZXkgaXQgd2lsbCBiZSBkcm9wcGVkJykgOiB1bmRlZmluZWQ7XG5cbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgcGF0aCk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShxdWVyeUtleSB8fCBzdGF0ZSA9PSBudWxsLCAnWW91IGNhbm5vdCB1c2Ugc3RhdGUgd2l0aG91dCBhIHF1ZXJ5S2V5IGl0IHdpbGwgYmUgZHJvcHBlZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogcmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgLy8gZGVwcmVjYXRlZCAtIHdhcm5pbmcgaXMgaW4gY3JlYXRlSGlzdG9yeVxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rLCAvLyBkZXByZWNhdGVkIC0gd2FybmluZyBpcyBpbiBjcmVhdGVIaXN0b3J5XG4gICAgcHVzaFN0YXRlOiBwdXNoU3RhdGUsIC8vIGRlcHJlY2F0ZWQgLSB3YXJuaW5nIGlzIGluIGNyZWF0ZUhpc3RvcnlcbiAgICByZXBsYWNlU3RhdGU6IHJlcGxhY2VTdGF0ZSAvLyBkZXByZWNhdGVkIC0gd2FybmluZyBpcyBpbiBjcmVhdGVIaXN0b3J5XG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIYXNoSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hpc3RvcnkvbGliL2NyZWF0ZUhhc2hIaXN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gNTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9BY3Rpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmV4dHJhY3RQYXRoID0gZXh0cmFjdFBhdGg7XG5leHBvcnRzLnBhcnNlUGF0aCA9IHBhcnNlUGF0aDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gZXh0cmFjdFBhdGgocGF0aCk7XG4gIHZhciBzZWFyY2ggPSAnJztcbiAgdmFyIGhhc2ggPSAnJztcblxuICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocGF0aCA9PT0gcGF0aG5hbWUsICdBIHBhdGggbXVzdCBiZSBwYXRobmFtZSArIHNlYXJjaCArIGhhc2ggb25seSwgbm90IGEgZnVsbHkgcXVhbGlmaWVkIFVSTCBsaWtlIFwiJXNcIicsIHBhdGgpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBoYXNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCcjJyk7XG4gIGlmIChoYXNoSW5kZXggIT09IC0xKSB7XG4gICAgaGFzaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhoYXNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIGhhc2hJbmRleCk7XG4gIH1cblxuICB2YXIgc2VhcmNoSW5kZXggPSBwYXRobmFtZS5pbmRleE9mKCc/Jyk7XG4gIGlmIChzZWFyY2hJbmRleCAhPT0gLTEpIHtcbiAgICBzZWFyY2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoc2VhcmNoSW5kZXgpO1xuICAgIHBhdGhuYW1lID0gcGF0aG5hbWUuc3Vic3RyaW5nKDAsIHNlYXJjaEluZGV4KTtcbiAgfVxuXG4gIGlmIChwYXRobmFtZSA9PT0gJycpIHBhdGhuYW1lID0gJy8nO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2hcbiAgfTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9QYXRoVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBjYW5Vc2VET00gPSAhISh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQgJiYgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuZXhwb3J0cy5jYW5Vc2VET00gPSBjYW5Vc2VET007XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGlzdG9yeS9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuYWRkRXZlbnRMaXN0ZW5lciA9IGFkZEV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSByZW1vdmVFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5nZXRIYXNoUGF0aCA9IGdldEhhc2hQYXRoO1xuZXhwb3J0cy5yZXBsYWNlSGFzaFBhdGggPSByZXBsYWNlSGFzaFBhdGg7XG5leHBvcnRzLmdldFdpbmRvd1BhdGggPSBnZXRXaW5kb3dQYXRoO1xuZXhwb3J0cy5nbyA9IGdvO1xuZXhwb3J0cy5nZXRVc2VyQ29uZmlybWF0aW9uID0gZ2V0VXNlckNvbmZpcm1hdGlvbjtcbmV4cG9ydHMuc3VwcG9ydHNIaXN0b3J5ID0gc3VwcG9ydHNIaXN0b3J5O1xuZXhwb3J0cy5zdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCA9IHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoO1xuXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmRldGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEhhc2hQYXRoKCkge1xuICAvLyBXZSBjYW4ndCB1c2Ugd2luZG93LmxvY2F0aW9uLmhhc2ggaGVyZSBiZWNhdXNlIGl0J3Mgbm90XG4gIC8vIGNvbnNpc3RlbnQgYWNyb3NzIGJyb3dzZXJzIC0gRmlyZWZveCB3aWxsIHByZS1kZWNvZGUgaXQhXG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdCgnIycpWzFdIHx8ICcnO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlSGFzaFBhdGgocGF0aCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgJyMnICsgcGF0aCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1BhdGgoKSB7XG4gIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgd2luZG93LmxvY2F0aW9uLmhhc2g7XG59XG5cbmZ1bmN0aW9uIGdvKG4pIHtcbiAgaWYgKG4pIHdpbmRvdy5oaXN0b3J5LmdvKG4pO1xufVxuXG5mdW5jdGlvbiBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKHdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGlzIHN1cHBvcnRlZC4gVGFrZW4gZnJvbSBNb2Rlcm5penIuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICogaHR0cHM6Ly9naXRodWIuY29tL01vZGVybml6ci9Nb2Rlcm5penIvYmxvYi9tYXN0ZXIvZmVhdHVyZS1kZXRlY3RzL2hpc3RvcnkuanNcbiAqIGNoYW5nZWQgdG8gYXZvaWQgZmFsc2UgbmVnYXRpdmVzIGZvciBXaW5kb3dzIFBob25lczogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvNTg2XG4gKi9cblxuZnVuY3Rpb24gc3VwcG9ydHNIaXN0b3J5KCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICBpZiAoKHVhLmluZGV4T2YoJ0FuZHJvaWQgMi4nKSAhPT0gLTEgfHwgdWEuaW5kZXhPZignQW5kcm9pZCA0LjAnKSAhPT0gLTEpICYmIHVhLmluZGV4T2YoJ01vYmlsZSBTYWZhcmknKSAhPT0gLTEgJiYgdWEuaW5kZXhPZignQ2hyb21lJykgPT09IC0xICYmIHVhLmluZGV4T2YoJ1dpbmRvd3MgUGhvbmUnKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHVhLmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGlzdG9yeS9saWIvRE9NVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9ycyA9IFsnUXVvdGFFeGNlZWRlZEVycm9yJywgJ1FVT1RBX0VYQ0VFREVEX0VSUiddO1xuXG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIGlmIChzdGF0ZSA9PSBudWxsKSB7XG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoUXVvdGFFeGNlZWRlZEVycm9ycy5pbmRleE9mKGVycm9yLm5hbWUpID49IDAgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9ET01TdGF0ZVN0b3JhZ2UuanNcbiAqKiBtb2R1bGUgaWQgPSA1MjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdET00gaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gNTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfZGVlcEVxdWFsID0gcmVxdWlyZSgnZGVlcC1lcXVhbCcpO1xuXG52YXIgX2RlZXBFcXVhbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWVwRXF1YWwpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gY3JlYXRlUmFuZG9tS2V5KGxlbmd0aCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIGxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uc0FyZUVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEucGF0aG5hbWUgPT09IGIucGF0aG5hbWUgJiYgYS5zZWFyY2ggPT09IGIuc2VhcmNoICYmXG4gIC8vYS5hY3Rpb24gPT09IGIuYWN0aW9uICYmIC8vIERpZmZlcmVudCBhY3Rpb24gIT09IGxvY2F0aW9uIGNoYW5nZS5cbiAgYS5rZXkgPT09IGIua2V5ICYmIF9kZWVwRXF1YWwyWydkZWZhdWx0J10oYS5zdGF0ZSwgYi5zdGF0ZSk7XG59XG5cbnZhciBEZWZhdWx0S2V5TGVuZ3RoID0gNjtcblxuZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcbiAgdmFyIGdldEN1cnJlbnRMb2NhdGlvbiA9IG9wdGlvbnMuZ2V0Q3VycmVudExvY2F0aW9uO1xuICB2YXIgZmluaXNoVHJhbnNpdGlvbiA9IG9wdGlvbnMuZmluaXNoVHJhbnNpdGlvbjtcbiAgdmFyIHNhdmVTdGF0ZSA9IG9wdGlvbnMuc2F2ZVN0YXRlO1xuICB2YXIgZ28gPSBvcHRpb25zLmdvO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuXG4gIGlmICh0eXBlb2Yga2V5TGVuZ3RoICE9PSAnbnVtYmVyJykga2V5TGVuZ3RoID0gRGVmYXVsdEtleUxlbmd0aDtcblxuICB2YXIgdHJhbnNpdGlvbkhvb2tzID0gW107XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBob29rO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIHZhciBhbGxLZXlzID0gW107XG4gIHZhciBjaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIGxvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnQoKSB7XG4gICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAmJiBwZW5kaW5nTG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YocGVuZGluZ0xvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24obmV3TG9jYXRpb24pIHtcbiAgICB2YXIgY3VycmVudCA9IGdldEN1cnJlbnQoKTtcblxuICAgIGxvY2F0aW9uID0gbmV3TG9jYXRpb247XG5cbiAgICBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBhbGxLZXlzID0gW10uY29uY2F0KGFsbEtleXMuc2xpY2UoMCwgY3VycmVudCArIDEpLCBbbG9jYXRpb24ua2V5XSk7XG4gICAgfSBlbHNlIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlJFUExBQ0UpIHtcbiAgICAgIGFsbEtleXNbY3VycmVudF0gPSBsb2NhdGlvbi5rZXk7XG4gICAgfVxuXG4gICAgY2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBjaGFuZ2VMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICBpZiAobG9jYXRpb24pIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9sb2NhdGlvbiA9IGdldEN1cnJlbnRMb2NhdGlvbigpO1xuICAgICAgYWxsS2V5cyA9IFtfbG9jYXRpb24ua2V5XTtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uKF9sb2NhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoYW5nZUxpc3RlbmVycyA9IGNoYW5nZUxpc3RlbmVycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGxpc3RlbmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbmZpcm1UcmFuc2l0aW9uVG8obG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgX0FzeW5jVXRpbHMubG9vcEFzeW5jKHRyYW5zaXRpb25Ib29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgX3J1blRyYW5zaXRpb25Ib29rMlsnZGVmYXVsdCddKHRyYW5zaXRpb25Ib29rc1tpbmRleF0sIGxvY2F0aW9uLCBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAgIGRvbmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBpZiAoZ2V0VXNlckNvbmZpcm1hdGlvbiAmJiB0eXBlb2YgbWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBmdW5jdGlvbiAob2spIHtcbiAgICAgICAgICBjYWxsYmFjayhvayAhPT0gZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UgIT09IGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBwZW5kaW5nTG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiAmJiBsb2NhdGlvbnNBcmVFcXVhbChsb2NhdGlvbiwgbmV4dExvY2F0aW9uKSkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgcGVuZGluZ0xvY2F0aW9uID0gbmV4dExvY2F0aW9uO1xuXG4gICAgY29uZmlybVRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24sIGZ1bmN0aW9uIChvaykge1xuICAgICAgaWYgKHBlbmRpbmdMb2NhdGlvbiAhPT0gbmV4dExvY2F0aW9uKSByZXR1cm47IC8vIFRyYW5zaXRpb24gd2FzIGludGVycnVwdGVkLlxuXG4gICAgICBpZiAob2spIHtcbiAgICAgICAgLy8gdHJlYXQgUFVTSCB0byBjdXJyZW50IHBhdGggbGlrZSBSRVBMQUNFIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCBicm93c2Vyc1xuICAgICAgICBpZiAobmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgICAgIHZhciBwcmV2UGF0aCA9IGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICAgICAgICAgIHZhciBuZXh0UGF0aCA9IGNyZWF0ZVBhdGgobmV4dExvY2F0aW9uKTtcblxuICAgICAgICAgIGlmIChuZXh0UGF0aCA9PT0gcHJldlBhdGggJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShsb2NhdGlvbi5zdGF0ZSwgbmV4dExvY2F0aW9uLnN0YXRlKSkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24gaXMgZGVwcmVjYXRlZDsgdXNlIGEgJyArICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgobG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHB1c2goX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZXBsYWNlU3RhdGUoc3RhdGUsIHBhdGgpIHtcbiAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGlzdG9yeS9saWIvY3JlYXRlSGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDUyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2RlZXAtZXF1YWwvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSA1MjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9kZWVwLWVxdWFsL2xpYi9rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNTI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzXG4gKiogbW9kdWxlIGlkID0gNTI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBfc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG5leHBvcnRzLmxvb3BBc3luYyA9IGxvb3BBc3luYztcblxuZnVuY3Rpb24gbG9vcEFzeW5jKHR1cm5zLCB3b3JrLCBjYWxsYmFjaykge1xuICB2YXIgY3VycmVudFR1cm4gPSAwLFxuICAgICAgaXNEb25lID0gZmFsc2U7XG4gIHZhciBzeW5jID0gZmFsc2UsXG4gICAgICBoYXNOZXh0ID0gZmFsc2UsXG4gICAgICBkb25lQXJncyA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8vIEl0ZXJhdGUgaW5zdGVhZCBvZiByZWN1cnNpbmcgaWYgcG9zc2libGUuXG4gICAgICBkb25lQXJncyA9IFtdLmNvbmNhdChfc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaGFzTmV4dCA9IHRydWU7XG4gICAgaWYgKHN5bmMpIHtcbiAgICAgIC8vIEl0ZXJhdGUgaW5zdGVhZCBvZiByZWN1cnNpbmcgaWYgcG9zc2libGUuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3luYyA9IHRydWU7XG5cbiAgICB3aGlsZSAoIWlzRG9uZSAmJiBjdXJyZW50VHVybiA8IHR1cm5zICYmIGhhc05leHQpIHtcbiAgICAgIGhhc05leHQgPSBmYWxzZTtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9XG5cbiAgICBzeW5jID0gZmFsc2U7XG5cbiAgICBpZiAoaXNEb25lKSB7XG4gICAgICAvLyBUaGlzIG1lYW5zIHRoZSBsb29wIGZpbmlzaGVkIHN5bmNocm9ub3VzbHkuXG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBkb25lQXJncyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGN1cnJlbnRUdXJuID49IHR1cm5zICYmIGhhc05leHQpIHtcbiAgICAgIGlzRG9uZSA9IHRydWU7XG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9Bc3luY1V0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChsb2NhdGlvbik7XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgKyAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG5cbiAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgYWN0aW9uID0ga2V5IHx8IF9BY3Rpb25zLlBPUDtcbiAgICBrZXkgPSBfZm91cnRoQXJnO1xuICB9XG5cbiAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWUgfHwgJy8nO1xuICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoIHx8ICcnO1xuICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2ggfHwgJyc7XG4gIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlIHx8IG51bGw7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaCxcbiAgICBzdGF0ZTogc3RhdGUsXG4gICAgYWN0aW9uOiBhY3Rpb24sXG4gICAga2V5OiBrZXlcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlTG9jYXRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9jcmVhdGVMb2NhdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDUyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBydW5UcmFuc2l0aW9uSG9vayhob29rLCBsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGhvb2sobG9jYXRpb24sIGNhbGxiYWNrKTtcblxuICBpZiAoaG9vay5sZW5ndGggPCAyKSB7XG4gICAgLy8gQXNzdW1lIHRoZSBob29rIHJ1bnMgc3luY2hyb25vdXNseSBhbmQgYXV0b21hdGljYWxseVxuICAgIC8vIGNhbGwgdGhlIGNhbGxiYWNrIHdpdGggdGhlIHJldHVybiB2YWx1ZS5cbiAgICBjYWxsYmFjayhyZXN1bHQpO1xuICB9IGVsc2Uge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShyZXN1bHQgPT09IHVuZGVmaW5lZCwgJ1lvdSBzaG91bGQgbm90IFwicmV0dXJuXCIgaW4gYSB0cmFuc2l0aW9uIGhvb2sgd2l0aCBhIGNhbGxiYWNrIGFyZ3VtZW50OyBjYWxsIHRoZSBjYWxsYmFjayBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gcnVuVHJhbnNpdGlvbkhvb2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qc1xuICoqIG1vZHVsZSBpZCA9IDUzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG5mdW5jdGlvbiBkZXByZWNhdGUoZm4sIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9kZXByZWNhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9xdWVyeVN0cmluZyA9IHJlcXVpcmUoJ3F1ZXJ5LXN0cmluZycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9QYXRoVXRpbHMgPSByZXF1aXJlKCcuL1BhdGhVdGlscycpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbnZhciBTRUFSQ0hfQkFTRV9LRVkgPSAnJHNlYXJjaEJhc2UnO1xuXG5mdW5jdGlvbiBkZWZhdWx0U3RyaW5naWZ5UXVlcnkocXVlcnkpIHtcbiAgcmV0dXJuIF9xdWVyeVN0cmluZy5zdHJpbmdpZnkocXVlcnkpLnJlcGxhY2UoLyUyMC9nLCAnKycpO1xufVxuXG52YXIgZGVmYXVsdFBhcnNlUXVlcnlTdHJpbmcgPSBfcXVlcnlTdHJpbmcucGFyc2U7XG5cbmZ1bmN0aW9uIGlzTmVzdGVkT2JqZWN0KG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwKSAmJiB0eXBlb2Ygb2JqZWN0W3BdID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmplY3RbcF0pICYmIG9iamVjdFtwXSAhPT0gbnVsbCkgcmV0dXJuIHRydWU7XG4gIH1yZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBjcmVhdGVIaXN0b3J5IGZ1bmN0aW9uIHRoYXQgbWF5IGJlIHVzZWQgdG8gY3JlYXRlXG4gKiBoaXN0b3J5IG9iamVjdHMgdGhhdCBrbm93IGhvdyB0byBoYW5kbGUgVVJMIHF1ZXJpZXMuXG4gKi9cbmZ1bmN0aW9uIHVzZVF1ZXJpZXMoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkob3B0aW9ucyk7XG5cbiAgICB2YXIgc3RyaW5naWZ5UXVlcnkgPSBvcHRpb25zLnN0cmluZ2lmeVF1ZXJ5O1xuICAgIHZhciBwYXJzZVF1ZXJ5U3RyaW5nID0gb3B0aW9ucy5wYXJzZVF1ZXJ5U3RyaW5nO1xuXG4gICAgaWYgKHR5cGVvZiBzdHJpbmdpZnlRdWVyeSAhPT0gJ2Z1bmN0aW9uJykgc3RyaW5naWZ5UXVlcnkgPSBkZWZhdWx0U3RyaW5naWZ5UXVlcnk7XG5cbiAgICBpZiAodHlwZW9mIHBhcnNlUXVlcnlTdHJpbmcgIT09ICdmdW5jdGlvbicpIHBhcnNlUXVlcnlTdHJpbmcgPSBkZWZhdWx0UGFyc2VRdWVyeVN0cmluZztcblxuICAgIGZ1bmN0aW9uIGFkZFF1ZXJ5KGxvY2F0aW9uKSB7XG4gICAgICBpZiAobG9jYXRpb24ucXVlcnkgPT0gbnVsbCkge1xuICAgICAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXG4gICAgICAgIGxvY2F0aW9uLnF1ZXJ5ID0gcGFyc2VRdWVyeVN0cmluZyhzZWFyY2guc3Vic3RyaW5nKDEpKTtcbiAgICAgICAgbG9jYXRpb25bU0VBUkNIX0JBU0VfS0VZXSA9IHsgc2VhcmNoOiBzZWFyY2gsIHNlYXJjaEJhc2U6ICcnIH07XG4gICAgICB9XG5cbiAgICAgIC8vIFRPRE86IEluc3RlYWQgb2YgYWxsIHRoZSBib29rLWtlZXBpbmcgaGVyZSwgdGhpcyBzaG91bGQganVzdCBzdHJpcCB0aGVcbiAgICAgIC8vIHN0cmluZ2lmaWVkIHF1ZXJ5IGZyb20gdGhlIHNlYXJjaC5cblxuICAgICAgcmV0dXJuIGxvY2F0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBxdWVyeSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgdmFyIHNlYXJjaEJhc2VTcGVjID0gbG9jYXRpb25bU0VBUkNIX0JBU0VfS0VZXTtcbiAgICAgIHZhciBxdWVyeVN0cmluZyA9IHF1ZXJ5ID8gc3RyaW5naWZ5UXVlcnkocXVlcnkpIDogJyc7XG4gICAgICBpZiAoIXNlYXJjaEJhc2VTcGVjICYmICFxdWVyeVN0cmluZykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb247XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShzdHJpbmdpZnlRdWVyeSAhPT0gZGVmYXVsdFN0cmluZ2lmeVF1ZXJ5IHx8ICFpc05lc3RlZE9iamVjdChxdWVyeSksICd1c2VRdWVyaWVzIGRvZXMgbm90IHN0cmluZ2lmeSBuZXN0ZWQgcXVlcnkgb2JqZWN0cyBieSBkZWZhdWx0OyAnICsgJ3VzZSBhIGN1c3RvbSBzdHJpbmdpZnlRdWVyeSBmdW5jdGlvbicpIDogdW5kZWZpbmVkO1xuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChsb2NhdGlvbik7XG5cbiAgICAgIHZhciBzZWFyY2hCYXNlID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHNlYXJjaEJhc2VTcGVjICYmIGxvY2F0aW9uLnNlYXJjaCA9PT0gc2VhcmNoQmFzZVNwZWMuc2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaEJhc2UgPSBzZWFyY2hCYXNlU3BlYy5zZWFyY2hCYXNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoQmFzZSA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgICAgIH1cblxuICAgICAgdmFyIHNlYXJjaCA9IHNlYXJjaEJhc2U7XG4gICAgICBpZiAocXVlcnlTdHJpbmcpIHtcbiAgICAgICAgc2VhcmNoICs9IChzZWFyY2ggPyAnJicgOiAnPycpICsgcXVlcnlTdHJpbmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIChfZXh0ZW5kczIgPSB7XG4gICAgICAgIHNlYXJjaDogc2VhcmNoXG4gICAgICB9LCBfZXh0ZW5kczJbU0VBUkNIX0JBU0VfS0VZXSA9IHsgc2VhcmNoOiBzZWFyY2gsIHNlYXJjaEJhc2U6IHNlYXJjaEJhc2UgfSwgX2V4dGVuZHMyKSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHJlYWQgbWV0aG9kcyB3aXRoIHF1ZXJ5LWF3YXJlIHZlcnNpb25zLlxuICAgIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW5CZWZvcmUoZnVuY3Rpb24gKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBfcnVuVHJhbnNpdGlvbkhvb2syWydkZWZhdWx0J10oaG9vaywgYWRkUXVlcnkobG9jYXRpb24pLCBjYWxsYmFjayk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgbGlzdGVuZXIoYWRkUXVlcnkobG9jYXRpb24pKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIE92ZXJyaWRlIGFsbCB3cml0ZSBtZXRob2RzIHdpdGggcXVlcnktYXdhcmUgdmVyc2lvbnMuXG4gICAgZnVuY3Rpb24gcHVzaChsb2NhdGlvbikge1xuICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcGxhY2UobG9jYXRpb24pIHtcbiAgICAgIGhpc3RvcnkucmVwbGFjZShhcHBlbmRRdWVyeShsb2NhdGlvbiwgbG9jYXRpb24ucXVlcnkpKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uLCBxdWVyeSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKCFxdWVyeSwgJ3RoZSBxdWVyeSBhcmd1bWVudCB0byBjcmVhdGVQYXRoIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhIGxvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVQYXRoKGFwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBxdWVyeSB8fCBsb2NhdGlvbi5xdWVyeSkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24sIHF1ZXJ5KSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oIXF1ZXJ5LCAndGhlIHF1ZXJ5IGFyZ3VtZW50IHRvIGNyZWF0ZUhyZWYgaXMgZGVwcmVjYXRlZDsgdXNlIGEgbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUhyZWYoYXBwZW5kUXVlcnkobG9jYXRpb24sIHF1ZXJ5IHx8IGxvY2F0aW9uLnF1ZXJ5KSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24pIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZ1bGxMb2NhdGlvbiA9IGhpc3RvcnkuY3JlYXRlTG9jYXRpb24uYXBwbHkoaGlzdG9yeSwgW2FwcGVuZFF1ZXJ5KGxvY2F0aW9uLCBsb2NhdGlvbi5xdWVyeSldLmNvbmNhdChhcmdzKSk7XG4gICAgICBpZiAobG9jYXRpb24ucXVlcnkpIHtcbiAgICAgICAgZnVsbExvY2F0aW9uLnF1ZXJ5ID0gbG9jYXRpb24ucXVlcnk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWRkUXVlcnkoZnVsbExvY2F0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoLCBxdWVyeSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgsIHsgcXVlcnk6IHF1ZXJ5IH0pKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoLCBxdWVyeSkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgsIHsgcXVlcnk6IHF1ZXJ5IH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgICBwdXNoOiBwdXNoLFxuICAgICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICAgIGNyZWF0ZVBhdGg6IGNyZWF0ZVBhdGgsXG4gICAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICAgIHJlcGxhY2VTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShyZXBsYWNlU3RhdGUsICdyZXBsYWNlU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHJlcGxhY2UgaW5zdGVhZCcpXG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHVzZVF1ZXJpZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi91c2VRdWVyaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3RyaWN0VXJpRW5jb2RlID0gcmVxdWlyZSgnc3RyaWN0LXVyaS1lbmNvZGUnKTtcblxuZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gc3RyLnNwbGl0KCc/JylbMV0gfHwgJyc7XG59O1xuXG5leHBvcnRzLnBhcnNlID0gZnVuY3Rpb24gKHN0cikge1xuXHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cblx0aWYgKCFzdHIpIHtcblx0XHRyZXR1cm4ge307XG5cdH1cblxuXHRyZXR1cm4gc3RyLnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uIChyZXQsIHBhcmFtKSB7XG5cdFx0dmFyIHBhcnRzID0gcGFyYW0ucmVwbGFjZSgvXFwrL2csICcgJykuc3BsaXQoJz0nKTtcblx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9xdWVyeS1zdHJpbmcvcHVsbC8zN1xuXHRcdHZhciBrZXkgPSBwYXJ0cy5zaGlmdCgpO1xuXHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXG5cdFx0a2V5ID0gZGVjb2RlVVJJQ29tcG9uZW50KGtleSk7XG5cblx0XHQvLyBtaXNzaW5nIGA9YCBzaG91bGQgYmUgYG51bGxgOlxuXHRcdC8vIGh0dHA6Ly93My5vcmcvVFIvMjAxMi9XRC11cmwtMjAxMjA1MjQvI2NvbGxlY3QtdXJsLXBhcmFtZXRlcnNcblx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblxuXHRcdGlmICghcmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdHJldFtrZXldID0gdmFsO1xuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcblx0XHRcdHJldFtrZXldLnB1c2godmFsKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fSwge30pO1xufTtcblxuZXhwb3J0cy5zdHJpbmdpZnkgPSBmdW5jdGlvbiAob2JqKSB7XG5cdHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopLnNvcnQoKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuXHRcdHZhciB2YWwgPSBvYmpba2V5XTtcblxuXHRcdGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmICh2YWwgPT09IG51bGwpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0cmV0dXJuIHZhbC5zbGljZSgpLnNvcnQoKS5tYXAoZnVuY3Rpb24gKHZhbDIpIHtcblx0XHRcdFx0cmV0dXJuIHN0cmljdFVyaUVuY29kZShrZXkpICsgJz0nICsgc3RyaWN0VXJpRW5jb2RlKHZhbDIpO1xuXHRcdFx0fSkuam9pbignJicpO1xuXHRcdH1cblxuXHRcdHJldHVybiBzdHJpY3RVcmlFbmNvZGUoa2V5KSArICc9JyArIHN0cmljdFVyaUVuY29kZSh2YWwpO1xuXHR9KS5maWx0ZXIoZnVuY3Rpb24gKHgpIHtcblx0XHRyZXR1cm4geC5sZW5ndGggPiAwO1xuXHR9KS5qb2luKCcmJykgOiAnJztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L34vcXVlcnktc3RyaW5nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJygpKl0vZywgZnVuY3Rpb24gKGMpIHtcblx0XHRyZXR1cm4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KS50b1VwcGVyQ2FzZSgpO1xuXHR9KTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9zdHJpY3QtdXJpLWVuY29kZS9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDUzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvQWN0aW9ucycpO1xuXG52YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzMiA9IHJlcXVpcmUoJy4vY29tcHV0ZUNoYW5nZWRSb3V0ZXMnKTtcblxudmFyIF9jb21wdXRlQ2hhbmdlZFJvdXRlczMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jb21wdXRlQ2hhbmdlZFJvdXRlczIpO1xuXG52YXIgX1RyYW5zaXRpb25VdGlscyA9IHJlcXVpcmUoJy4vVHJhbnNpdGlvblV0aWxzJyk7XG5cbnZhciBfaXNBY3RpdmUyID0gcmVxdWlyZSgnLi9pc0FjdGl2ZScpO1xuXG52YXIgX2lzQWN0aXZlMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzQWN0aXZlMik7XG5cbnZhciBfZ2V0Q29tcG9uZW50cyA9IHJlcXVpcmUoJy4vZ2V0Q29tcG9uZW50cycpO1xuXG52YXIgX2dldENvbXBvbmVudHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ2V0Q29tcG9uZW50cyk7XG5cbnZhciBfbWF0Y2hSb3V0ZXMgPSByZXF1aXJlKCcuL21hdGNoUm91dGVzJyk7XG5cbnZhciBfbWF0Y2hSb3V0ZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWF0Y2hSb3V0ZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBoYXNBbnlQcm9wZXJ0aWVzKG9iamVjdCkge1xuICBmb3IgKHZhciBwIGluIG9iamVjdCkge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwKSkgcmV0dXJuIHRydWU7XG4gIH1yZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyKGhpc3RvcnksIHJvdXRlcykge1xuICB2YXIgc3RhdGUgPSB7fTtcblxuICAvLyBTaWduYXR1cmUgc2hvdWxkIGJlIChsb2NhdGlvbiwgaW5kZXhPbmx5KSwgYnV0IG5lZWRzIHRvIHN1cHBvcnQgKHBhdGgsXG4gIC8vIHF1ZXJ5LCBpbmRleE9ubHkpXG4gIGZ1bmN0aW9uIGlzQWN0aXZlKGxvY2F0aW9uKSB7XG4gICAgdmFyIGluZGV4T25seU9yRGVwcmVjYXRlZFF1ZXJ5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGRlcHJlY2F0ZWRJbmRleE9ubHkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gICAgdmFyIGluZGV4T25seSA9IHZvaWQgMDtcbiAgICBpZiAoaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgJiYgaW5kZXhPbmx5T3JEZXByZWNhdGVkUXVlcnkgIT09IHRydWUgfHwgZGVwcmVjYXRlZEluZGV4T25seSAhPT0gbnVsbCkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgaXNBY3RpdmUocGF0aG5hbWUsIHF1ZXJ5LCBpbmRleE9ubHkpIGlzIGRlcHJlY2F0ZWQ7IHVzZSBgaXNBY3RpdmUobG9jYXRpb24sIGluZGV4T25seSlgIHdpdGggYSBsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1pc0FjdGl2ZWRlcHJlY2F0ZWQnKSA6IHZvaWQgMDtcbiAgICAgIGxvY2F0aW9uID0geyBwYXRobmFtZTogbG9jYXRpb24sIHF1ZXJ5OiBpbmRleE9ubHlPckRlcHJlY2F0ZWRRdWVyeSB9O1xuICAgICAgaW5kZXhPbmx5ID0gZGVwcmVjYXRlZEluZGV4T25seSB8fCBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYXRpb24gPSBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgICAgIGluZGV4T25seSA9IGluZGV4T25seU9yRGVwcmVjYXRlZFF1ZXJ5O1xuICAgIH1cblxuICAgIHJldHVybiAoMCwgX2lzQWN0aXZlMy5kZWZhdWx0KShsb2NhdGlvbiwgaW5kZXhPbmx5LCBzdGF0ZS5sb2NhdGlvbiwgc3RhdGUucm91dGVzLCBzdGF0ZS5wYXJhbXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb25Gcm9tUmVkaXJlY3RJbmZvKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlJFUExBQ0UpO1xuICB9XG5cbiAgdmFyIHBhcnRpYWxOZXh0U3RhdGUgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gbWF0Y2gobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgaWYgKHBhcnRpYWxOZXh0U3RhdGUgJiYgcGFydGlhbE5leHRTdGF0ZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcbiAgICAgIC8vIENvbnRpbnVlIGZyb20gd2hlcmUgd2UgbGVmdCBvZmYuXG4gICAgICBmaW5pc2hNYXRjaChwYXJ0aWFsTmV4dFN0YXRlLCBjYWxsYmFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgICgwLCBfbWF0Y2hSb3V0ZXMyLmRlZmF1bHQpKHJvdXRlcywgbG9jYXRpb24sIGZ1bmN0aW9uIChlcnJvciwgbmV4dFN0YXRlKSB7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXh0U3RhdGUpIHtcbiAgICAgICAgICBmaW5pc2hNYXRjaChfZXh0ZW5kcyh7fSwgbmV4dFN0YXRlLCB7IGxvY2F0aW9uOiBsb2NhdGlvbiB9KSwgY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmlzaE1hdGNoKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgX2NvbXB1dGVDaGFuZ2VkUm91dGVzID0gKDAsIF9jb21wdXRlQ2hhbmdlZFJvdXRlczMuZGVmYXVsdCkoc3RhdGUsIG5leHRTdGF0ZSk7XG5cbiAgICB2YXIgbGVhdmVSb3V0ZXMgPSBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMubGVhdmVSb3V0ZXM7XG4gICAgdmFyIGNoYW5nZVJvdXRlcyA9IF9jb21wdXRlQ2hhbmdlZFJvdXRlcy5jaGFuZ2VSb3V0ZXM7XG4gICAgdmFyIGVudGVyUm91dGVzID0gX2NvbXB1dGVDaGFuZ2VkUm91dGVzLmVudGVyUm91dGVzO1xuXG5cbiAgICAoMCwgX1RyYW5zaXRpb25VdGlscy5ydW5MZWF2ZUhvb2tzKShsZWF2ZVJvdXRlcyk7XG5cbiAgICAvLyBUZWFyIGRvd24gY29uZmlybWF0aW9uIGhvb2tzIGZvciBsZWZ0IHJvdXRlc1xuICAgIGxlYXZlUm91dGVzLmZpbHRlcihmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgIHJldHVybiBlbnRlclJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTE7XG4gICAgfSkuZm9yRWFjaChyZW1vdmVMaXN0ZW5CZWZvcmVIb29rc0ZvclJvdXRlKTtcblxuICAgIC8vIGNoYW5nZSBhbmQgZW50ZXIgaG9va3MgYXJlIHJ1biBpbiBzZXJpZXNcbiAgICAoMCwgX1RyYW5zaXRpb25VdGlscy5ydW5DaGFuZ2VIb29rcykoY2hhbmdlUm91dGVzLCBzdGF0ZSwgbmV4dFN0YXRlLCBmdW5jdGlvbiAoZXJyb3IsIHJlZGlyZWN0SW5mbykge1xuICAgICAgaWYgKGVycm9yIHx8IHJlZGlyZWN0SW5mbykgcmV0dXJuIGhhbmRsZUVycm9yT3JSZWRpcmVjdChlcnJvciwgcmVkaXJlY3RJbmZvKTtcblxuICAgICAgKDAsIF9UcmFuc2l0aW9uVXRpbHMucnVuRW50ZXJIb29rcykoZW50ZXJSb3V0ZXMsIG5leHRTdGF0ZSwgZmluaXNoRW50ZXJIb29rcyk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBmaW5pc2hFbnRlckhvb2tzKGVycm9yLCByZWRpcmVjdEluZm8pIHtcbiAgICAgIGlmIChlcnJvciB8fCByZWRpcmVjdEluZm8pIHJldHVybiBoYW5kbGVFcnJvck9yUmVkaXJlY3QoZXJyb3IsIHJlZGlyZWN0SW5mbyk7XG5cbiAgICAgIC8vIFRPRE86IEZldGNoIGNvbXBvbmVudHMgYWZ0ZXIgc3RhdGUgaXMgdXBkYXRlZC5cbiAgICAgICgwLCBfZ2V0Q29tcG9uZW50czIuZGVmYXVsdCkobmV4dFN0YXRlLCBmdW5jdGlvbiAoZXJyb3IsIGNvbXBvbmVudHMpIHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRPRE86IE1ha2UgbWF0Y2ggYSBwdXJlIGZ1bmN0aW9uIGFuZCBoYXZlIHNvbWUgb3RoZXIgQVBJXG4gICAgICAgICAgLy8gZm9yIFwibWF0Y2ggYW5kIHVwZGF0ZSBzdGF0ZVwiLlxuICAgICAgICAgIGNhbGxiYWNrKG51bGwsIG51bGwsIHN0YXRlID0gX2V4dGVuZHMoe30sIG5leHRTdGF0ZSwgeyBjb21wb25lbnRzOiBjb21wb25lbnRzIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRXJyb3JPclJlZGlyZWN0KGVycm9yLCByZWRpcmVjdEluZm8pIHtcbiAgICAgIGlmIChlcnJvcikgY2FsbGJhY2soZXJyb3IpO2Vsc2UgY2FsbGJhY2sobnVsbCwgY3JlYXRlTG9jYXRpb25Gcm9tUmVkaXJlY3RJbmZvKHJlZGlyZWN0SW5mbykpO1xuICAgIH1cbiAgfVxuXG4gIHZhciBSb3V0ZUd1aWQgPSAxO1xuXG4gIGZ1bmN0aW9uIGdldFJvdXRlSUQocm91dGUpIHtcbiAgICB2YXIgY3JlYXRlID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiByb3V0ZS5fX2lkX18gfHwgY3JlYXRlICYmIChyb3V0ZS5fX2lkX18gPSBSb3V0ZUd1aWQrKyk7XG4gIH1cblxuICB2YXIgUm91dGVIb29rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZnVuY3Rpb24gZ2V0Um91dGVIb29rc0ZvclJvdXRlcyhyb3V0ZXMpIHtcbiAgICByZXR1cm4gcm91dGVzLnJlZHVjZShmdW5jdGlvbiAoaG9va3MsIHJvdXRlKSB7XG4gICAgICBob29rcy5wdXNoLmFwcGx5KGhvb2tzLCBSb3V0ZUhvb2tzW2dldFJvdXRlSUQocm91dGUpXSk7XG4gICAgICByZXR1cm4gaG9va3M7XG4gICAgfSwgW10pO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkhvb2sobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgKDAsIF9tYXRjaFJvdXRlczIuZGVmYXVsdCkocm91dGVzLCBsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBuZXh0U3RhdGUpIHtcbiAgICAgIGlmIChuZXh0U3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAvLyBUT0RPOiBXZSBkaWRuJ3QgYWN0dWFsbHkgbWF0Y2ggYW55dGhpbmcsIGJ1dCBoYW5nXG4gICAgICAgIC8vIG9udG8gZXJyb3IvbmV4dFN0YXRlIHNvIHdlIGRvbid0IGhhdmUgdG8gbWF0Y2hSb3V0ZXNcbiAgICAgICAgLy8gYWdhaW4gaW4gdGhlIGxpc3RlbiBjYWxsYmFjay5cbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBDYWNoZSBzb21lIHN0YXRlIGhlcmUgc28gd2UgZG9uJ3QgaGF2ZSB0b1xuICAgICAgLy8gbWF0Y2hSb3V0ZXMoKSBhZ2FpbiBpbiB0aGUgbGlzdGVuIGNhbGxiYWNrLlxuICAgICAgcGFydGlhbE5leHRTdGF0ZSA9IF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHsgbG9jYXRpb246IGxvY2F0aW9uIH0pO1xuXG4gICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKCgwLCBfY29tcHV0ZUNoYW5nZWRSb3V0ZXMzLmRlZmF1bHQpKHN0YXRlLCBwYXJ0aWFsTmV4dFN0YXRlKS5sZWF2ZVJvdXRlcyk7XG5cbiAgICAgIHZhciByZXN1bHQgPSB2b2lkIDA7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gaG9va3MubGVuZ3RoOyByZXN1bHQgPT0gbnVsbCAmJiBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgLy8gUGFzc2luZyB0aGUgbG9jYXRpb24gYXJnIGhlcmUgaW5kaWNhdGVzIHRvXG4gICAgICAgIC8vIHRoZSB1c2VyIHRoYXQgdGhpcyBpcyBhIHRyYW5zaXRpb24gaG9vay5cbiAgICAgICAgcmVzdWx0ID0gaG9va3NbaV0obG9jYXRpb24pO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhyZXN1bHQpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQ6IHVudGVzdGFibGUgd2l0aCBLYXJtYSAqL1xuICBmdW5jdGlvbiBiZWZvcmVVbmxvYWRIb29rKCkge1xuICAgIC8vIFN5bmNocm9ub3VzbHkgY2hlY2sgdG8gc2VlIGlmIGFueSByb3V0ZSBob29rcyB3YW50XG4gICAgLy8gdG8gcHJldmVudCB0aGUgY3VycmVudCB3aW5kb3cvdGFiIGZyb20gY2xvc2luZy5cbiAgICBpZiAoc3RhdGUucm91dGVzKSB7XG4gICAgICB2YXIgaG9va3MgPSBnZXRSb3V0ZUhvb2tzRm9yUm91dGVzKHN0YXRlLnJvdXRlcyk7XG5cbiAgICAgIHZhciBtZXNzYWdlID0gdm9pZCAwO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGhvb2tzLmxlbmd0aDsgdHlwZW9mIG1lc3NhZ2UgIT09ICdzdHJpbmcnICYmIGkgPCBsZW47ICsraSkge1xuICAgICAgICAvLyBQYXNzaW5nIG5vIGFyZ3MgaW5kaWNhdGVzIHRvIHRoZSB1c2VyIHRoYXQgdGhpcyBpcyBhXG4gICAgICAgIC8vIGJlZm9yZXVubG9hZCBob29rLiBXZSBkb24ndCBrbm93IHRoZSBuZXh0IGxvY2F0aW9uLlxuICAgICAgICBtZXNzYWdlID0gaG9va3NbaV0oKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIHVubGlzdGVuQmVmb3JlID0gdm9pZCAwLFxuICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQgPSB2b2lkIDA7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuQmVmb3JlSG9va3NGb3JSb3V0ZShyb3V0ZSkge1xuICAgIHZhciByb3V0ZUlEID0gZ2V0Um91dGVJRChyb3V0ZSwgZmFsc2UpO1xuICAgIGlmICghcm91dGVJRCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRlbGV0ZSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgaWYgKCFoYXNBbnlQcm9wZXJ0aWVzKFJvdXRlSG9va3MpKSB7XG4gICAgICAvLyB0ZWFyZG93biB0cmFuc2l0aW9uICYgYmVmb3JldW5sb2FkIGhvb2tzXG4gICAgICBpZiAodW5saXN0ZW5CZWZvcmUpIHtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUoKTtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAodW5saXN0ZW5CZWZvcmVVbmxvYWQpIHtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQoKTtcbiAgICAgICAgdW5saXN0ZW5CZWZvcmVVbmxvYWQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgdGhlIGdpdmVuIGhvb2sgZnVuY3Rpb24gdG8gcnVuIGJlZm9yZSBsZWF2aW5nIHRoZSBnaXZlbiByb3V0ZS5cbiAgICpcbiAgICogRHVyaW5nIGEgbm9ybWFsIHRyYW5zaXRpb24sIHRoZSBob29rIGZ1bmN0aW9uIHJlY2VpdmVzIHRoZSBuZXh0IGxvY2F0aW9uXG4gICAqIGFzIGl0cyBvbmx5IGFyZ3VtZW50IGFuZCBjYW4gcmV0dXJuIGVpdGhlciBhIHByb21wdCBtZXNzYWdlIChzdHJpbmcpIHRvIHNob3cgdGhlIHVzZXIsXG4gICAqIHRvIG1ha2Ugc3VyZSB0aGV5IHdhbnQgdG8gbGVhdmUgdGhlIHBhZ2U7IG9yIGBmYWxzZWAsIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24uXG4gICAqIEFueSBvdGhlciByZXR1cm4gdmFsdWUgd2lsbCBoYXZlIG5vIGVmZmVjdC5cbiAgICpcbiAgICogRHVyaW5nIHRoZSBiZWZvcmV1bmxvYWQgZXZlbnQgKGluIGJyb3dzZXJzKSB0aGUgaG9vayByZWNlaXZlcyBubyBhcmd1bWVudHMuXG4gICAqIEluIHRoaXMgY2FzZSBpdCBtdXN0IHJldHVybiBhIHByb21wdCBtZXNzYWdlIHRvIHByZXZlbnQgdGhlIHRyYW5zaXRpb24uXG4gICAqXG4gICAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IG1heSBiZSB1c2VkIHRvIHVuYmluZCB0aGUgbGlzdGVuZXIuXG4gICAqL1xuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIGhvb2spIHtcbiAgICAvLyBUT0RPOiBXYXJuIGlmIHRoZXkgcmVnaXN0ZXIgZm9yIGEgcm91dGUgdGhhdCBpc24ndCBjdXJyZW50bHlcbiAgICAvLyBhY3RpdmUuIFRoZXkncmUgcHJvYmFibHkgZG9pbmcgc29tZXRoaW5nIHdyb25nLCBsaWtlIHJlLWNyZWF0aW5nXG4gICAgLy8gcm91dGUgb2JqZWN0cyBvbiBldmVyeSBsb2NhdGlvbiBjaGFuZ2UuXG4gICAgdmFyIHJvdXRlSUQgPSBnZXRSb3V0ZUlEKHJvdXRlKTtcbiAgICB2YXIgaG9va3MgPSBSb3V0ZUhvb2tzW3JvdXRlSURdO1xuXG4gICAgaWYgKCFob29rcykge1xuICAgICAgdmFyIHRoZXJlV2VyZU5vUm91dGVIb29rcyA9ICFoYXNBbnlQcm9wZXJ0aWVzKFJvdXRlSG9va3MpO1xuXG4gICAgICBSb3V0ZUhvb2tzW3JvdXRlSURdID0gW2hvb2tdO1xuXG4gICAgICBpZiAodGhlcmVXZXJlTm9Sb3V0ZUhvb2tzKSB7XG4gICAgICAgIC8vIHNldHVwIHRyYW5zaXRpb24gJiBiZWZvcmV1bmxvYWQgaG9va3NcbiAgICAgICAgdW5saXN0ZW5CZWZvcmUgPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZSh0cmFuc2l0aW9uSG9vayk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKSB1bmxpc3RlbkJlZm9yZVVubG9hZCA9IGhpc3RvcnkubGlzdGVuQmVmb3JlVW5sb2FkKGJlZm9yZVVubG9hZEhvb2spO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaG9va3MuaW5kZXhPZihob29rKSA9PT0gLTEpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdhZGRpbmcgbXVsdGlwbGUgbGVhdmUgaG9va3MgZm9yIHRoZSBzYW1lIHJvdXRlIGlzIGRlcHJlY2F0ZWQ7IG1hbmFnZSBtdWx0aXBsZSBjb25maXJtYXRpb25zIGluIHlvdXIgb3duIGNvZGUgaW5zdGVhZCcpIDogdm9pZCAwO1xuXG4gICAgICAgIGhvb2tzLnB1c2goaG9vayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBob29rcyA9IFJvdXRlSG9va3Nbcm91dGVJRF07XG5cbiAgICAgIGlmIChob29rcykge1xuICAgICAgICB2YXIgbmV3SG9va3MgPSBob29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG5ld0hvb2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIHJlbW92ZUxpc3RlbkJlZm9yZUhvb2tzRm9yUm91dGUocm91dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFJvdXRlSG9va3Nbcm91dGVJRF0gPSBuZXdIb29rcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBpcyB0aGUgQVBJIGZvciBzdGF0ZWZ1bCBlbnZpcm9ubWVudHMuIEFzIHRoZSBsb2NhdGlvblxuICAgKiBjaGFuZ2VzLCB3ZSB1cGRhdGUgc3RhdGUgYW5kIGNhbGwgdGhlIGxpc3RlbmVyLiBXZSBjYW4gYWxzb1xuICAgKiBncmFjZWZ1bGx5IGhhbmRsZSBlcnJvcnMgYW5kIHJlZGlyZWN0cy5cbiAgICovXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIC8vIFRPRE86IE9ubHkgdXNlIGEgc2luZ2xlIGhpc3RvcnkgbGlzdGVuZXIuIE90aGVyd2lzZSB3ZSdsbFxuICAgIC8vIGVuZCB1cCB3aXRoIG11bHRpcGxlIGNvbmN1cnJlbnQgY2FsbHMgdG8gbWF0Y2guXG4gICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgaWYgKHN0YXRlLmxvY2F0aW9uID09PSBsb2NhdGlvbikge1xuICAgICAgICBsaXN0ZW5lcihudWxsLCBzdGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlZGlyZWN0TG9jYXRpb24pIHtcbiAgICAgICAgICAgIGhpc3RvcnkudHJhbnNpdGlvblRvKHJlZGlyZWN0TG9jYXRpb24pO1xuICAgICAgICAgIH0gZWxzZSBpZiAobmV4dFN0YXRlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihudWxsLCBuZXh0U3RhdGUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0xvY2F0aW9uIFwiJXNcIiBkaWQgbm90IG1hdGNoIGFueSByb3V0ZXMnLCBsb2NhdGlvbi5wYXRobmFtZSArIGxvY2F0aW9uLnNlYXJjaCArIGxvY2F0aW9uLmhhc2gpIDogdm9pZCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGlzQWN0aXZlOiBpc0FjdGl2ZSxcbiAgICBtYXRjaDogbWF0Y2gsXG4gICAgbGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlOiBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUsXG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfTtcbn1cblxuLy9leHBvcnQgZGVmYXVsdCB1c2VSb3V0ZXNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9QYXR0ZXJuVXRpbHMgPSByZXF1aXJlKCcuL1BhdHRlcm5VdGlscycpO1xuXG5mdW5jdGlvbiByb3V0ZVBhcmFtc0NoYW5nZWQocm91dGUsIHByZXZTdGF0ZSwgbmV4dFN0YXRlKSB7XG4gIGlmICghcm91dGUucGF0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBwYXJhbU5hbWVzID0gKDAsIF9QYXR0ZXJuVXRpbHMuZ2V0UGFyYW1OYW1lcykocm91dGUucGF0aCk7XG5cbiAgcmV0dXJuIHBhcmFtTmFtZXMuc29tZShmdW5jdGlvbiAocGFyYW1OYW1lKSB7XG4gICAgcmV0dXJuIHByZXZTdGF0ZS5wYXJhbXNbcGFyYW1OYW1lXSAhPT0gbmV4dFN0YXRlLnBhcmFtc1twYXJhbU5hbWVdO1xuICB9KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCBvZiB7IGxlYXZlUm91dGVzLCBjaGFuZ2VSb3V0ZXMsIGVudGVyUm91dGVzIH0gZGV0ZXJtaW5lZCBieVxuICogdGhlIGNoYW5nZSBmcm9tIHByZXZTdGF0ZSB0byBuZXh0U3RhdGUuIFdlIGxlYXZlIHJvdXRlcyBpZiBlaXRoZXJcbiAqIDEpIHRoZXkgYXJlIG5vdCBpbiB0aGUgbmV4dCBzdGF0ZSBvciAyKSB0aGV5IGFyZSBpbiB0aGUgbmV4dCBzdGF0ZVxuICogYnV0IHRoZWlyIHBhcmFtcyBoYXZlIGNoYW5nZWQgKGkuZS4gL3VzZXJzLzEyMyA9PiAvdXNlcnMvNDU2KS5cbiAqXG4gKiBsZWF2ZVJvdXRlcyBhcmUgb3JkZXJlZCBzdGFydGluZyBhdCB0aGUgbGVhZiByb3V0ZSBvZiB0aGUgdHJlZVxuICogd2UncmUgbGVhdmluZyB1cCB0byB0aGUgY29tbW9uIHBhcmVudCByb3V0ZS4gZW50ZXJSb3V0ZXMgYXJlIG9yZGVyZWRcbiAqIGZyb20gdGhlIHRvcCBvZiB0aGUgdHJlZSB3ZSdyZSBlbnRlcmluZyBkb3duIHRvIHRoZSBsZWFmIHJvdXRlLlxuICpcbiAqIGNoYW5nZVJvdXRlcyBhcmUgYW55IHJvdXRlcyB0aGF0IGRpZG4ndCBsZWF2ZSBvciBlbnRlciBkdXJpbmdcbiAqIHRoZSB0cmFuc2l0aW9uLlxuICovXG5mdW5jdGlvbiBjb21wdXRlQ2hhbmdlZFJvdXRlcyhwcmV2U3RhdGUsIG5leHRTdGF0ZSkge1xuICB2YXIgcHJldlJvdXRlcyA9IHByZXZTdGF0ZSAmJiBwcmV2U3RhdGUucm91dGVzO1xuICB2YXIgbmV4dFJvdXRlcyA9IG5leHRTdGF0ZS5yb3V0ZXM7XG5cbiAgdmFyIGxlYXZlUm91dGVzID0gdm9pZCAwLFxuICAgICAgY2hhbmdlUm91dGVzID0gdm9pZCAwLFxuICAgICAgZW50ZXJSb3V0ZXMgPSB2b2lkIDA7XG4gIGlmIChwcmV2Um91dGVzKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXJlbnRJc0xlYXZpbmcgPSBmYWxzZTtcbiAgICAgIGxlYXZlUm91dGVzID0gcHJldlJvdXRlcy5maWx0ZXIoZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIGlmIChwYXJlbnRJc0xlYXZpbmcpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgaXNMZWF2aW5nID0gbmV4dFJvdXRlcy5pbmRleE9mKHJvdXRlKSA9PT0gLTEgfHwgcm91dGVQYXJhbXNDaGFuZ2VkKHJvdXRlLCBwcmV2U3RhdGUsIG5leHRTdGF0ZSk7XG4gICAgICAgICAgaWYgKGlzTGVhdmluZykgcGFyZW50SXNMZWF2aW5nID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gaXNMZWF2aW5nO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gb25MZWF2ZSBob29rcyBzdGFydCBhdCB0aGUgbGVhZiByb3V0ZS5cbiAgICAgIGxlYXZlUm91dGVzLnJldmVyc2UoKTtcblxuICAgICAgZW50ZXJSb3V0ZXMgPSBbXTtcbiAgICAgIGNoYW5nZVJvdXRlcyA9IFtdO1xuXG4gICAgICBuZXh0Um91dGVzLmZvckVhY2goZnVuY3Rpb24gKHJvdXRlKSB7XG4gICAgICAgIHZhciBpc05ldyA9IHByZXZSb3V0ZXMuaW5kZXhPZihyb3V0ZSkgPT09IC0xO1xuICAgICAgICB2YXIgcGFyYW1zQ2hhbmdlZCA9IGxlYXZlUm91dGVzLmluZGV4T2Yocm91dGUpICE9PSAtMTtcblxuICAgICAgICBpZiAoaXNOZXcgfHwgcGFyYW1zQ2hhbmdlZCkgZW50ZXJSb3V0ZXMucHVzaChyb3V0ZSk7ZWxzZSBjaGFuZ2VSb3V0ZXMucHVzaChyb3V0ZSk7XG4gICAgICB9KTtcbiAgICB9KSgpO1xuICB9IGVsc2Uge1xuICAgIGxlYXZlUm91dGVzID0gW107XG4gICAgY2hhbmdlUm91dGVzID0gW107XG4gICAgZW50ZXJSb3V0ZXMgPSBuZXh0Um91dGVzO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZWF2ZVJvdXRlczogbGVhdmVSb3V0ZXMsXG4gICAgY2hhbmdlUm91dGVzOiBjaGFuZ2VSb3V0ZXMsXG4gICAgZW50ZXJSb3V0ZXM6IGVudGVyUm91dGVzXG4gIH07XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGNvbXB1dGVDaGFuZ2VkUm91dGVzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9jb21wdXRlQ2hhbmdlZFJvdXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5ydW5FbnRlckhvb2tzID0gcnVuRW50ZXJIb29rcztcbmV4cG9ydHMucnVuQ2hhbmdlSG9va3MgPSBydW5DaGFuZ2VIb29rcztcbmV4cG9ydHMucnVuTGVhdmVIb29rcyA9IHJ1bkxlYXZlSG9va3M7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uSG9vayhob29rLCByb3V0ZSwgYXN5bmNBcml0eSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGhvb2suYXBwbHkocm91dGUsIGFyZ3MpO1xuXG4gICAgaWYgKGhvb2subGVuZ3RoIDwgYXN5bmNBcml0eSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgLy8gQXNzdW1lIGhvb2sgZXhlY3V0ZXMgc3luY2hyb25vdXNseSBhbmRcbiAgICAgIC8vIGF1dG9tYXRpY2FsbHkgY2FsbCB0aGUgY2FsbGJhY2suXG4gICAgICBjYWxsYmFjaygpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RW50ZXJIb29rcyhyb3V0ZXMpIHtcbiAgcmV0dXJuIHJvdXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGhvb2tzLCByb3V0ZSkge1xuICAgIGlmIChyb3V0ZS5vbkVudGVyKSBob29rcy5wdXNoKGNyZWF0ZVRyYW5zaXRpb25Ib29rKHJvdXRlLm9uRW50ZXIsIHJvdXRlLCAzKSk7XG5cbiAgICByZXR1cm4gaG9va3M7XG4gIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2hhbmdlSG9va3Mocm91dGVzKSB7XG4gIHJldHVybiByb3V0ZXMucmVkdWNlKGZ1bmN0aW9uIChob29rcywgcm91dGUpIHtcbiAgICBpZiAocm91dGUub25DaGFuZ2UpIGhvb2tzLnB1c2goY3JlYXRlVHJhbnNpdGlvbkhvb2socm91dGUub25DaGFuZ2UsIHJvdXRlLCA0KSk7XG4gICAgcmV0dXJuIGhvb2tzO1xuICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rcyhsZW5ndGgsIGl0ZXIsIGNhbGxiYWNrKSB7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgY2FsbGJhY2soKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgcmVkaXJlY3RJbmZvID0gdm9pZCAwO1xuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uLCBkZXByZWNhdGVkUGF0aG5hbWUsIGRlcHJlY2F0ZWRRdWVyeSkge1xuICAgIGlmIChkZXByZWNhdGVkUGF0aG5hbWUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnYHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aG5hbWUsIHF1ZXJ5KSBpcyBkZXByZWNhdGVkOyB1c2UgYHJlcGxhY2UobG9jYXRpb24pYCB3aXRoIGEgbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaXNBY3RpdmVkZXByZWNhdGVkJykgOiB2b2lkIDA7XG4gICAgICByZWRpcmVjdEluZm8gPSB7XG4gICAgICAgIHBhdGhuYW1lOiBkZXByZWNhdGVkUGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5OiBkZXByZWNhdGVkUXVlcnksXG4gICAgICAgIHN0YXRlOiBsb2NhdGlvblxuICAgICAgfTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJlZGlyZWN0SW5mbyA9IGxvY2F0aW9uO1xuICB9XG5cbiAgKDAsIF9Bc3luY1V0aWxzLmxvb3BBc3luYykobGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICBpdGVyKGluZGV4LCByZXBsYWNlLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvciB8fCByZWRpcmVjdEluZm8pIHtcbiAgICAgICAgZG9uZShlcnJvciwgcmVkaXJlY3RJbmZvKTsgLy8gTm8gbmVlZCB0byBjb250aW51ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSdW5zIGFsbCBvbkVudGVyIGhvb2tzIGluIHRoZSBnaXZlbiBhcnJheSBvZiByb3V0ZXMgaW4gb3JkZXJcbiAqIHdpdGggb25FbnRlcihuZXh0U3RhdGUsIHJlcGxhY2UsIGNhbGxiYWNrKSBhbmQgY2FsbHNcbiAqIGNhbGxiYWNrKGVycm9yLCByZWRpcmVjdEluZm8pIHdoZW4gZmluaXNoZWQuIFRoZSBmaXJzdCBob29rXG4gKiB0byB1c2UgcmVwbGFjZSBzaG9ydC1jaXJjdWl0cyB0aGUgbG9vcC5cbiAqXG4gKiBJZiBhIGhvb2sgbmVlZHMgdG8gcnVuIGFzeW5jaHJvbm91c2x5LCBpdCBtYXkgdXNlIHRoZSBjYWxsYmFja1xuICogZnVuY3Rpb24uIEhvd2V2ZXIsIGRvaW5nIHNvIHdpbGwgY2F1c2UgdGhlIHRyYW5zaXRpb24gdG8gcGF1c2UsXG4gKiB3aGljaCBjb3VsZCBsZWFkIHRvIGEgbm9uLXJlc3BvbnNpdmUgVUkgaWYgdGhlIGhvb2sgaXMgc2xvdy5cbiAqL1xuZnVuY3Rpb24gcnVuRW50ZXJIb29rcyhyb3V0ZXMsIG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIGhvb2tzID0gZ2V0RW50ZXJIb29rcyhyb3V0ZXMpO1xuICByZXR1cm4gcnVuVHJhbnNpdGlvbkhvb2tzKGhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlLCBuZXh0KSB7XG4gICAgaG9va3NbaW5kZXhdKG5leHRTdGF0ZSwgcmVwbGFjZSwgbmV4dCk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBSdW5zIGFsbCBvbkNoYW5nZSBob29rcyBpbiB0aGUgZ2l2ZW4gYXJyYXkgb2Ygcm91dGVzIGluIG9yZGVyXG4gKiB3aXRoIG9uQ2hhbmdlKHByZXZTdGF0ZSwgbmV4dFN0YXRlLCByZXBsYWNlLCBjYWxsYmFjaykgYW5kIGNhbGxzXG4gKiBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RJbmZvKSB3aGVuIGZpbmlzaGVkLiBUaGUgZmlyc3QgaG9va1xuICogdG8gdXNlIHJlcGxhY2Ugc2hvcnQtY2lyY3VpdHMgdGhlIGxvb3AuXG4gKlxuICogSWYgYSBob29rIG5lZWRzIHRvIHJ1biBhc3luY2hyb25vdXNseSwgaXQgbWF5IHVzZSB0aGUgY2FsbGJhY2tcbiAqIGZ1bmN0aW9uLiBIb3dldmVyLCBkb2luZyBzbyB3aWxsIGNhdXNlIHRoZSB0cmFuc2l0aW9uIHRvIHBhdXNlLFxuICogd2hpY2ggY291bGQgbGVhZCB0byBhIG5vbi1yZXNwb25zaXZlIFVJIGlmIHRoZSBob29rIGlzIHNsb3cuXG4gKi9cbmZ1bmN0aW9uIHJ1bkNoYW5nZUhvb2tzKHJvdXRlcywgc3RhdGUsIG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgdmFyIGhvb2tzID0gZ2V0Q2hhbmdlSG9va3Mocm91dGVzKTtcbiAgcmV0dXJuIHJ1blRyYW5zaXRpb25Ib29rcyhob29rcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZSwgbmV4dCkge1xuICAgIGhvb2tzW2luZGV4XShzdGF0ZSwgbmV4dFN0YXRlLCByZXBsYWNlLCBuZXh0KTtcbiAgfSwgY2FsbGJhY2spO1xufVxuXG4vKipcbiAqIFJ1bnMgYWxsIG9uTGVhdmUgaG9va3MgaW4gdGhlIGdpdmVuIGFycmF5IG9mIHJvdXRlcyBpbiBvcmRlci5cbiAqL1xuZnVuY3Rpb24gcnVuTGVhdmVIb29rcyhyb3V0ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIGlmIChyb3V0ZXNbaV0ub25MZWF2ZSkgcm91dGVzW2ldLm9uTGVhdmUuY2FsbChyb3V0ZXNbaV0pO1xuICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9UcmFuc2l0aW9uVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5leHBvcnRzLm1hcEFzeW5jID0gbWFwQXN5bmM7XG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDAsXG4gICAgICBpc0RvbmUgPSBmYWxzZTtcbiAgdmFyIHN5bmMgPSBmYWxzZSxcbiAgICAgIGhhc05leHQgPSBmYWxzZSxcbiAgICAgIGRvbmVBcmdzID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBpZiAoc3luYykge1xuICAgICAgLy8gSXRlcmF0ZSBpbnN0ZWFkIG9mIHJlY3Vyc2luZyBpZiBwb3NzaWJsZS5cbiAgICAgIGRvbmVBcmdzID0gW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYXNOZXh0ID0gdHJ1ZTtcbiAgICBpZiAoc3luYykge1xuICAgICAgLy8gSXRlcmF0ZSBpbnN0ZWFkIG9mIHJlY3Vyc2luZyBpZiBwb3NzaWJsZS5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jID0gdHJ1ZTtcblxuICAgIHdoaWxlICghaXNEb25lICYmIGN1cnJlbnRUdXJuIDwgdHVybnMgJiYgaGFzTmV4dCkge1xuICAgICAgaGFzTmV4dCA9IGZhbHNlO1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcblxuICAgIGlmIChpc0RvbmUpIHtcbiAgICAgIC8vIFRoaXMgbWVhbnMgdGhlIGxvb3AgZmluaXNoZWQgc3luY2hyb25vdXNseS5cbiAgICAgIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGRvbmVBcmdzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPj0gdHVybnMgJiYgaGFzTmV4dCkge1xuICAgICAgaXNEb25lID0gdHJ1ZTtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufVxuXG5mdW5jdGlvbiBtYXBBc3luYyhhcnJheSwgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiBjYWxsYmFjayhudWxsLCB2YWx1ZXMpO1xuXG4gIHZhciBpc0RvbmUgPSBmYWxzZSxcbiAgICAgIGRvbmVDb3VudCA9IDA7XG5cbiAgZnVuY3Rpb24gZG9uZShpbmRleCwgZXJyb3IsIHZhbHVlKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBpc0RvbmUgPSB0cnVlO1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgIGlzRG9uZSA9ICsrZG9uZUNvdW50ID09PSBsZW5ndGg7XG5cbiAgICAgIGlmIChpc0RvbmUpIGNhbGxiYWNrKG51bGwsIHZhbHVlcyk7XG4gICAgfVxuICB9XG5cbiAgYXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICB3b3JrKGl0ZW0sIGluZGV4LCBmdW5jdGlvbiAoZXJyb3IsIHZhbHVlKSB7XG4gICAgICBkb25lKGluZGV4LCBlcnJvciwgdmFsdWUpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL0FzeW5jVXRpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSA1MzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGlzQWN0aXZlO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XG4gIGlmIChhID09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhID09IG51bGwgfHwgYiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShiKSAmJiBhLmxlbmd0aCA9PT0gYi5sZW5ndGggJiYgYS5ldmVyeShmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBkZWVwRXF1YWwoaXRlbSwgYltpbmRleF0pO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCh0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYSkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAodmFyIHAgaW4gYSkge1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSwgcCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChhW3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGJbcF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAoIWRlZXBFcXVhbChhW3BdLCBiW3BdKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICByZXR1cm4gU3RyaW5nKGEpID09PSBTdHJpbmcoYik7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHBhdGhuYW1lIG1hdGNoZXMgdGhlIHN1cHBsaWVkIG9uZSwgbmV0IG9mXG4gKiBsZWFkaW5nIGFuZCB0cmFpbGluZyBzbGFzaCBub3JtYWxpemF0aW9uLiBUaGlzIGlzIHN1ZmZpY2llbnQgZm9yIGFuXG4gKiBpbmRleE9ubHkgcm91dGUgbWF0Y2guXG4gKi9cbmZ1bmN0aW9uIHBhdGhJc0FjdGl2ZShwYXRobmFtZSwgY3VycmVudFBhdGhuYW1lKSB7XG4gIC8vIE5vcm1hbGl6ZSBsZWFkaW5nIHNsYXNoIGZvciBjb25zaXN0ZW5jeS4gTGVhZGluZyBzbGFzaCBvbiBwYXRobmFtZSBoYXNcbiAgLy8gYWxyZWFkeSBiZWVuIG5vcm1hbGl6ZWQgaW4gaXNBY3RpdmUuIFNlZSBjYXZlYXQgdGhlcmUuXG4gIGlmIChjdXJyZW50UGF0aG5hbWUuY2hhckF0KDApICE9PSAnLycpIHtcbiAgICBjdXJyZW50UGF0aG5hbWUgPSAnLycgKyBjdXJyZW50UGF0aG5hbWU7XG4gIH1cblxuICAvLyBOb3JtYWxpemUgdGhlIGVuZCBvZiBib3RoIHBhdGggbmFtZXMgdG9vLiBNYXliZSBgL2Zvby9gIHNob3VsZG4ndCBzaG93XG4gIC8vIGAvZm9vYCBhcyBhY3RpdmUsIGJ1dCBpbiB0aGlzIGNhc2UsIHdlIHdvdWxkIGFscmVhZHkgaGF2ZSBmYWlsZWQgdGhlXG4gIC8vIG1hdGNoLlxuICBpZiAocGF0aG5hbWUuY2hhckF0KHBhdGhuYW1lLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICBwYXRobmFtZSArPSAnLyc7XG4gIH1cbiAgaWYgKGN1cnJlbnRQYXRobmFtZS5jaGFyQXQoY3VycmVudFBhdGhuYW1lLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICBjdXJyZW50UGF0aG5hbWUgKz0gJy8nO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRQYXRobmFtZSA9PT0gcGF0aG5hbWU7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBwYXRobmFtZSBtYXRjaGVzIHRoZSBhY3RpdmUgcm91dGVzIGFuZCBwYXJhbXMuXG4gKi9cbmZ1bmN0aW9uIHJvdXRlSXNBY3RpdmUocGF0aG5hbWUsIHJvdXRlcywgcGFyYW1zKSB7XG4gIHZhciByZW1haW5pbmdQYXRobmFtZSA9IHBhdGhuYW1lLFxuICAgICAgcGFyYW1OYW1lcyA9IFtdLFxuICAgICAgcGFyYW1WYWx1ZXMgPSBbXTtcblxuICAvLyBmb3IuLi5vZiB3b3VsZCB3b3JrIGhlcmUgYnV0IGl0J3MgcHJvYmFibHkgc2xvd2VyIHBvc3QtdHJhbnNwaWxhdGlvbi5cbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHJvdXRlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciByb3V0ZSA9IHJvdXRlc1tpXTtcbiAgICB2YXIgcGF0dGVybiA9IHJvdXRlLnBhdGggfHwgJyc7XG5cbiAgICBpZiAocGF0dGVybi5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBwYXRobmFtZTtcbiAgICAgIHBhcmFtTmFtZXMgPSBbXTtcbiAgICAgIHBhcmFtVmFsdWVzID0gW107XG4gICAgfVxuXG4gICAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lICE9PSBudWxsICYmIHBhdHRlcm4pIHtcbiAgICAgIHZhciBtYXRjaGVkID0gKDAsIF9QYXR0ZXJuVXRpbHMubWF0Y2hQYXR0ZXJuKShwYXR0ZXJuLCByZW1haW5pbmdQYXRobmFtZSk7XG4gICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICByZW1haW5pbmdQYXRobmFtZSA9IG1hdGNoZWQucmVtYWluaW5nUGF0aG5hbWU7XG4gICAgICAgIHBhcmFtTmFtZXMgPSBbXS5jb25jYXQocGFyYW1OYW1lcywgbWF0Y2hlZC5wYXJhbU5hbWVzKTtcbiAgICAgICAgcGFyYW1WYWx1ZXMgPSBbXS5jb25jYXQocGFyYW1WYWx1ZXMsIG1hdGNoZWQucGFyYW1WYWx1ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtYWluaW5nUGF0aG5hbWUgPT09ICcnKSB7XG4gICAgICAgIC8vIFdlIGhhdmUgYW4gZXhhY3QgbWF0Y2ggb24gdGhlIHJvdXRlLiBKdXN0IGNoZWNrIHRoYXQgYWxsIHRoZSBwYXJhbXNcbiAgICAgICAgLy8gbWF0Y2guXG4gICAgICAgIC8vIEZJWE1FOiBUaGlzIGRvZXNuJ3Qgd29yayBvbiByZXBlYXRlZCBwYXJhbXMuXG4gICAgICAgIHJldHVybiBwYXJhbU5hbWVzLmV2ZXJ5KGZ1bmN0aW9uIChwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyhwYXJhbVZhbHVlc1tpbmRleF0pID09PSBTdHJpbmcocGFyYW1zW3BhcmFtTmFtZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGFsbCBrZXkvdmFsdWUgcGFpcnMgaW4gdGhlIGdpdmVuIHF1ZXJ5IGFyZVxuICogY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gcXVlcnlJc0FjdGl2ZShxdWVyeSwgYWN0aXZlUXVlcnkpIHtcbiAgaWYgKGFjdGl2ZVF1ZXJ5ID09IG51bGwpIHJldHVybiBxdWVyeSA9PSBudWxsO1xuXG4gIGlmIChxdWVyeSA9PSBudWxsKSByZXR1cm4gdHJ1ZTtcblxuICByZXR1cm4gZGVlcEVxdWFsKHF1ZXJ5LCBhY3RpdmVRdWVyeSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIGEgPExpbms+IHRvIHRoZSBnaXZlbiBwYXRobmFtZS9xdWVyeSBjb21iaW5hdGlvbiBpc1xuICogY3VycmVudGx5IGFjdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNBY3RpdmUoX3JlZiwgaW5kZXhPbmx5LCBjdXJyZW50TG9jYXRpb24sIHJvdXRlcywgcGFyYW1zKSB7XG4gIHZhciBwYXRobmFtZSA9IF9yZWYucGF0aG5hbWU7XG4gIHZhciBxdWVyeSA9IF9yZWYucXVlcnk7XG5cbiAgaWYgKGN1cnJlbnRMb2NhdGlvbiA9PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cbiAgLy8gVE9ETzogVGhpcyBpcyBhIGJpdCB1Z2x5LiBJdCBrZWVwcyBhcm91bmQgc3VwcG9ydCBmb3IgdHJlYXRpbmcgcGF0aG5hbWVzXG4gIC8vIHdpdGhvdXQgcHJlY2VkaW5nIHNsYXNoZXMgYXMgYWJzb2x1dGUgcGF0aHMsIGJ1dCBwb3NzaWJseSBhbHNvIHdvcmtzXG4gIC8vIGFyb3VuZCB0aGUgc2FtZSBxdWlya3Mgd2l0aCBiYXNlbmFtZXMgYXMgaW4gbWF0Y2hSb3V0ZXMuXG4gIGlmIChwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWU7XG4gIH1cblxuICBpZiAoIXBhdGhJc0FjdGl2ZShwYXRobmFtZSwgY3VycmVudExvY2F0aW9uLnBhdGhuYW1lKSkge1xuICAgIC8vIFRoZSBwYXRoIGNoZWNrIGlzIG5lY2Vzc2FyeSBhbmQgc3VmZmljaWVudCBmb3IgaW5kZXhPbmx5LCBidXQgb3RoZXJ3aXNlXG4gICAgLy8gd2Ugc3RpbGwgbmVlZCB0byBjaGVjayB0aGUgcm91dGVzLlxuICAgIGlmIChpbmRleE9ubHkgfHwgIXJvdXRlSXNBY3RpdmUocGF0aG5hbWUsIHJvdXRlcywgcGFyYW1zKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBxdWVyeUlzQWN0aXZlKHF1ZXJ5LCBjdXJyZW50TG9jYXRpb24ucXVlcnkpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9pc0FjdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9tYWtlU3RhdGVXaXRoTG9jYXRpb24gPSByZXF1aXJlKCcuL21ha2VTdGF0ZVdpdGhMb2NhdGlvbicpO1xuXG52YXIgX21ha2VTdGF0ZVdpdGhMb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWtlU3RhdGVXaXRoTG9jYXRpb24pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnRzRm9yUm91dGUobmV4dFN0YXRlLCByb3V0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHJvdXRlLmNvbXBvbmVudCB8fCByb3V0ZS5jb21wb25lbnRzKSB7XG4gICAgY2FsbGJhY2sobnVsbCwgcm91dGUuY29tcG9uZW50IHx8IHJvdXRlLmNvbXBvbmVudHMpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBnZXRDb21wb25lbnQgPSByb3V0ZS5nZXRDb21wb25lbnQgfHwgcm91dGUuZ2V0Q29tcG9uZW50cztcbiAgaWYgKCFnZXRDb21wb25lbnQpIHtcbiAgICBjYWxsYmFjaygpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBsb2NhdGlvbiA9IG5leHRTdGF0ZS5sb2NhdGlvbjtcblxuICB2YXIgbmV4dFN0YXRlV2l0aExvY2F0aW9uID0gKDAsIF9tYWtlU3RhdGVXaXRoTG9jYXRpb24yLmRlZmF1bHQpKG5leHRTdGF0ZSwgbG9jYXRpb24pO1xuXG4gIGdldENvbXBvbmVudC5jYWxsKHJvdXRlLCBuZXh0U3RhdGVXaXRoTG9jYXRpb24sIGNhbGxiYWNrKTtcbn1cblxuLyoqXG4gKiBBc3luY2hyb25vdXNseSBmZXRjaGVzIGFsbCBjb21wb25lbnRzIG5lZWRlZCBmb3IgdGhlIGdpdmVuIHJvdXRlclxuICogc3RhdGUgYW5kIGNhbGxzIGNhbGxiYWNrKGVycm9yLCBjb21wb25lbnRzKSB3aGVuIGZpbmlzaGVkLlxuICpcbiAqIE5vdGU6IFRoaXMgb3BlcmF0aW9uIG1heSBmaW5pc2ggc3luY2hyb25vdXNseSBpZiBubyByb3V0ZXMgaGF2ZSBhblxuICogYXN5bmNocm9ub3VzIGdldENvbXBvbmVudHMgbWV0aG9kLlxuICovXG5mdW5jdGlvbiBnZXRDb21wb25lbnRzKG5leHRTdGF0ZSwgY2FsbGJhY2spIHtcbiAgKDAsIF9Bc3luY1V0aWxzLm1hcEFzeW5jKShuZXh0U3RhdGUucm91dGVzLCBmdW5jdGlvbiAocm91dGUsIGluZGV4LCBjYWxsYmFjaykge1xuICAgIGdldENvbXBvbmVudHNGb3JSb3V0ZShuZXh0U3RhdGUsIHJvdXRlLCBjYWxsYmFjayk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Q29tcG9uZW50cztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvZ2V0Q29tcG9uZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDU0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBtYWtlU3RhdGVXaXRoTG9jYXRpb247XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcyA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllcycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBtYWtlU3RhdGVXaXRoTG9jYXRpb24oc3RhdGUsIGxvY2F0aW9uKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzLmNhblVzZU1lbWJyYW5lKSB7XG4gICAgdmFyIHN0YXRlV2l0aExvY2F0aW9uID0gX2V4dGVuZHMoe30sIHN0YXRlKTtcblxuICAgIC8vIEkgZG9uJ3QgdXNlIGRlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgaGVyZSBiZWNhdXNlIEkgd2FudCB0byBrZWVwIHRoZVxuICAgIC8vIHNhbWUgY29kZSBwYXRoIGJldHdlZW4gZGV2ZWxvcG1lbnQgYW5kIHByb2R1Y3Rpb24sIGluIHRoYXQgd2UganVzdFxuICAgIC8vIGFzc2lnbiBleHRyYSBwcm9wZXJ0aWVzIHRvIHRoZSBjb3B5IG9mIHRoZSBzdGF0ZSBvYmplY3QgaW4gYm90aCBjYXNlcy5cblxuICAgIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKHByb3ApIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGxvY2F0aW9uLCBwcm9wKSkge1xuICAgICAgICByZXR1cm4gJ2NvbnRpbnVlJztcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0YXRlV2l0aExvY2F0aW9uLCBwcm9wLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX3JvdXRlcldhcm5pbmcyLmRlZmF1bHQpKGZhbHNlLCAnQWNjZXNzaW5nIGxvY2F0aW9uIHByb3BlcnRpZXMgZGlyZWN0bHkgZnJvbSB0aGUgZmlyc3QgYXJndW1lbnQgdG8gYGdldENvbXBvbmVudGAsIGBnZXRDb21wb25lbnRzYCwgYGdldENoaWxkUm91dGVzYCwgYW5kIGBnZXRJbmRleFJvdXRlYCBpcyBkZXByZWNhdGVkLiBUaGF0IGFyZ3VtZW50IGlzIG5vdyB0aGUgcm91dGVyIHN0YXRlIChgbmV4dFN0YXRlYCBvciBgcGFydGlhbE5leHRTdGF0ZWApIHJhdGhlciB0aGFuIHRoZSBsb2NhdGlvbi4gVG8gYWNjZXNzIHRoZSBsb2NhdGlvbiwgdXNlIGBuZXh0U3RhdGUubG9jYXRpb25gIG9yIGBwYXJ0aWFsTmV4dFN0YXRlLmxvY2F0aW9uYC4nKSA6IHZvaWQgMDtcbiAgICAgICAgICByZXR1cm4gbG9jYXRpb25bcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIGxvY2F0aW9uKSB7XG4gICAgICB2YXIgX3JldCA9IF9sb29wKHByb3ApO1xuXG4gICAgICBpZiAoX3JldCA9PT0gJ2NvbnRpbnVlJykgY29udGludWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlV2l0aExvY2F0aW9uO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBzdGF0ZSwgbG9jYXRpb24pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9tYWtlU3RhdGVXaXRoTG9jYXRpb24uanNcbiAqKiBtb2R1bGUgaWQgPSA1NDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoUm91dGVzO1xuXG52YXIgX0FzeW5jVXRpbHMgPSByZXF1aXJlKCcuL0FzeW5jVXRpbHMnKTtcblxudmFyIF9tYWtlU3RhdGVXaXRoTG9jYXRpb24gPSByZXF1aXJlKCcuL21ha2VTdGF0ZVdpdGhMb2NhdGlvbicpO1xuXG52YXIgX21ha2VTdGF0ZVdpdGhMb2NhdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYWtlU3RhdGVXaXRoTG9jYXRpb24pO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBnZXRDaGlsZFJvdXRlcyhyb3V0ZSwgbG9jYXRpb24sIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBjYWxsYmFjaykge1xuICBpZiAocm91dGUuY2hpbGRSb3V0ZXMpIHtcbiAgICByZXR1cm4gW251bGwsIHJvdXRlLmNoaWxkUm91dGVzXTtcbiAgfVxuICBpZiAoIXJvdXRlLmdldENoaWxkUm91dGVzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgdmFyIHN5bmMgPSB0cnVlLFxuICAgICAgcmVzdWx0ID0gdm9pZCAwO1xuXG4gIHZhciBwYXJ0aWFsTmV4dFN0YXRlID0ge1xuICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICBwYXJhbXM6IGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcylcbiAgfTtcblxuICB2YXIgcGFydGlhbE5leHRTdGF0ZVdpdGhMb2NhdGlvbiA9ICgwLCBfbWFrZVN0YXRlV2l0aExvY2F0aW9uMi5kZWZhdWx0KShwYXJ0aWFsTmV4dFN0YXRlLCBsb2NhdGlvbik7XG5cbiAgcm91dGUuZ2V0Q2hpbGRSb3V0ZXMocGFydGlhbE5leHRTdGF0ZVdpdGhMb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCBjaGlsZFJvdXRlcykge1xuICAgIGNoaWxkUm91dGVzID0gIWVycm9yICYmICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMpKGNoaWxkUm91dGVzKTtcbiAgICBpZiAoc3luYykge1xuICAgICAgcmVzdWx0ID0gW2Vycm9yLCBjaGlsZFJvdXRlc107XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2FsbGJhY2soZXJyb3IsIGNoaWxkUm91dGVzKTtcbiAgfSk7XG5cbiAgc3luYyA9IGZhbHNlO1xuICByZXR1cm4gcmVzdWx0OyAvLyBNaWdodCBiZSB1bmRlZmluZWQuXG59XG5cbmZ1bmN0aW9uIGdldEluZGV4Um91dGUocm91dGUsIGxvY2F0aW9uLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgY2FsbGJhY2spIHtcbiAgaWYgKHJvdXRlLmluZGV4Um91dGUpIHtcbiAgICBjYWxsYmFjayhudWxsLCByb3V0ZS5pbmRleFJvdXRlKTtcbiAgfSBlbHNlIGlmIChyb3V0ZS5nZXRJbmRleFJvdXRlKSB7XG4gICAgdmFyIHBhcnRpYWxOZXh0U3RhdGUgPSB7XG4gICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICBwYXJhbXM6IGNyZWF0ZVBhcmFtcyhwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcylcbiAgICB9O1xuXG4gICAgdmFyIHBhcnRpYWxOZXh0U3RhdGVXaXRoTG9jYXRpb24gPSAoMCwgX21ha2VTdGF0ZVdpdGhMb2NhdGlvbjIuZGVmYXVsdCkocGFydGlhbE5leHRTdGF0ZSwgbG9jYXRpb24pO1xuXG4gICAgcm91dGUuZ2V0SW5kZXhSb3V0ZShwYXJ0aWFsTmV4dFN0YXRlV2l0aExvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIGluZGV4Um91dGUpIHtcbiAgICAgIGNhbGxiYWNrKGVycm9yLCAhZXJyb3IgJiYgKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlcykoaW5kZXhSb3V0ZSlbMF0pO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHJvdXRlLmNoaWxkUm91dGVzKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwYXRobGVzcyA9IHJvdXRlLmNoaWxkUm91dGVzLmZpbHRlcihmdW5jdGlvbiAoY2hpbGRSb3V0ZSkge1xuICAgICAgICByZXR1cm4gIWNoaWxkUm91dGUucGF0aDtcbiAgICAgIH0pO1xuXG4gICAgICAoMCwgX0FzeW5jVXRpbHMubG9vcEFzeW5jKShwYXRobGVzcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgICAgICBnZXRJbmRleFJvdXRlKHBhdGhsZXNzW2luZGV4XSwgbG9jYXRpb24sIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBmdW5jdGlvbiAoZXJyb3IsIGluZGV4Um91dGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IgfHwgaW5kZXhSb3V0ZSkge1xuICAgICAgICAgICAgdmFyIHJvdXRlcyA9IFtwYXRobGVzc1tpbmRleF1dLmNvbmNhdChBcnJheS5pc0FycmF5KGluZGV4Um91dGUpID8gaW5kZXhSb3V0ZSA6IFtpbmRleFJvdXRlXSk7XG4gICAgICAgICAgICBkb25lKGVycm9yLCByb3V0ZXMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIGZ1bmN0aW9uIChlcnIsIHJvdXRlcykge1xuICAgICAgICBjYWxsYmFjayhudWxsLCByb3V0ZXMpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnblBhcmFtcyhwYXJhbXMsIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzKSB7XG4gIHJldHVybiBwYXJhbU5hbWVzLnJlZHVjZShmdW5jdGlvbiAocGFyYW1zLCBwYXJhbU5hbWUsIGluZGV4KSB7XG4gICAgdmFyIHBhcmFtVmFsdWUgPSBwYXJhbVZhbHVlcyAmJiBwYXJhbVZhbHVlc1tpbmRleF07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbcGFyYW1OYW1lXSkpIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdLnB1c2gocGFyYW1WYWx1ZSk7XG4gICAgfSBlbHNlIGlmIChwYXJhbU5hbWUgaW4gcGFyYW1zKSB7XG4gICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IFtwYXJhbXNbcGFyYW1OYW1lXSwgcGFyYW1WYWx1ZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9LCBwYXJhbXMpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQYXJhbXMocGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpIHtcbiAgcmV0dXJuIGFzc2lnblBhcmFtcyh7fSwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpO1xufVxuXG5mdW5jdGlvbiBtYXRjaFJvdXRlRGVlcChyb3V0ZSwgbG9jYXRpb24sIHJlbWFpbmluZ1BhdGhuYW1lLCBwYXJhbU5hbWVzLCBwYXJhbVZhbHVlcywgY2FsbGJhY2spIHtcbiAgdmFyIHBhdHRlcm4gPSByb3V0ZS5wYXRoIHx8ICcnO1xuXG4gIGlmIChwYXR0ZXJuLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmVtYWluaW5nUGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBwYXJhbU5hbWVzID0gW107XG4gICAgcGFyYW1WYWx1ZXMgPSBbXTtcbiAgfVxuXG4gIC8vIE9ubHkgdHJ5IHRvIG1hdGNoIHRoZSBwYXRoIGlmIHRoZSByb3V0ZSBhY3R1YWxseSBoYXMgYSBwYXR0ZXJuLCBhbmQgaWZcbiAgLy8gd2UncmUgbm90IGp1c3Qgc2VhcmNoaW5nIGZvciBwb3RlbnRpYWwgbmVzdGVkIGFic29sdXRlIHBhdGhzLlxuICBpZiAocmVtYWluaW5nUGF0aG5hbWUgIT09IG51bGwgJiYgcGF0dGVybikge1xuICAgIHRyeSB7XG4gICAgICB2YXIgbWF0Y2hlZCA9ICgwLCBfUGF0dGVyblV0aWxzLm1hdGNoUGF0dGVybikocGF0dGVybiwgcmVtYWluaW5nUGF0aG5hbWUpO1xuICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgcmVtYWluaW5nUGF0aG5hbWUgPSBtYXRjaGVkLnJlbWFpbmluZ1BhdGhuYW1lO1xuICAgICAgICBwYXJhbU5hbWVzID0gW10uY29uY2F0KHBhcmFtTmFtZXMsIG1hdGNoZWQucGFyYW1OYW1lcyk7XG4gICAgICAgIHBhcmFtVmFsdWVzID0gW10uY29uY2F0KHBhcmFtVmFsdWVzLCBtYXRjaGVkLnBhcmFtVmFsdWVzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlbWFpbmluZ1BhdGhuYW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgIH1cblxuICAgIC8vIEJ5IGFzc3VtcHRpb24sIHBhdHRlcm4gaXMgbm9uLWVtcHR5IGhlcmUsIHdoaWNoIGlzIHRoZSBwcmVyZXF1aXNpdGUgZm9yXG4gICAgLy8gYWN0dWFsbHkgdGVybWluYXRpbmcgYSBtYXRjaC5cbiAgICBpZiAocmVtYWluaW5nUGF0aG5hbWUgPT09ICcnKSB7XG4gICAgICB2YXIgX3JldDIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHtcbiAgICAgICAgICByb3V0ZXM6IFtyb3V0ZV0sXG4gICAgICAgICAgcGFyYW1zOiBjcmVhdGVQYXJhbXMocGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpXG4gICAgICAgIH07XG5cbiAgICAgICAgZ2V0SW5kZXhSb3V0ZShyb3V0ZSwgbG9jYXRpb24sIHBhcmFtTmFtZXMsIHBhcmFtVmFsdWVzLCBmdW5jdGlvbiAoZXJyb3IsIGluZGV4Um91dGUpIHtcbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaW5kZXhSb3V0ZSkpIHtcbiAgICAgICAgICAgICAgdmFyIF9tYXRjaCRyb3V0ZXM7XG5cbiAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoaW5kZXhSb3V0ZS5ldmVyeShmdW5jdGlvbiAocm91dGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXJvdXRlLnBhdGg7XG4gICAgICAgICAgICAgIH0pLCAnSW5kZXggcm91dGVzIHNob3VsZCBub3QgaGF2ZSBwYXRocycpIDogdm9pZCAwO1xuICAgICAgICAgICAgICAoX21hdGNoJHJvdXRlcyA9IG1hdGNoLnJvdXRlcykucHVzaC5hcHBseShfbWF0Y2gkcm91dGVzLCBpbmRleFJvdXRlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5kZXhSb3V0ZSkge1xuICAgICAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KSghaW5kZXhSb3V0ZS5wYXRoLCAnSW5kZXggcm91dGVzIHNob3VsZCBub3QgaGF2ZSBwYXRocycpIDogdm9pZCAwO1xuICAgICAgICAgICAgICBtYXRjaC5yb3V0ZXMucHVzaChpbmRleFJvdXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB2OiB2b2lkIDBcbiAgICAgICAgfTtcbiAgICAgIH0oKTtcblxuICAgICAgaWYgKCh0eXBlb2YgX3JldDIgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKF9yZXQyKSkgPT09IFwib2JqZWN0XCIpIHJldHVybiBfcmV0Mi52O1xuICAgIH1cbiAgfVxuXG4gIGlmIChyZW1haW5pbmdQYXRobmFtZSAhPSBudWxsIHx8IHJvdXRlLmNoaWxkUm91dGVzKSB7XG4gICAgLy8gRWl0aGVyIGEpIHRoaXMgcm91dGUgbWF0Y2hlZCBhdCBsZWFzdCBzb21lIG9mIHRoZSBwYXRoIG9yIGIpXG4gICAgLy8gd2UgZG9uJ3QgaGF2ZSB0byBsb2FkIHRoaXMgcm91dGUncyBjaGlsZHJlbiBhc3luY2hyb25vdXNseS4gSW5cbiAgICAvLyBlaXRoZXIgY2FzZSBjb250aW51ZSBjaGVja2luZyBmb3IgbWF0Y2hlcyBpbiB0aGUgc3VidHJlZS5cbiAgICB2YXIgb25DaGlsZFJvdXRlcyA9IGZ1bmN0aW9uIG9uQ2hpbGRSb3V0ZXMoZXJyb3IsIGNoaWxkUm91dGVzKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChjaGlsZFJvdXRlcykge1xuICAgICAgICAvLyBDaGVjayB0aGUgY2hpbGQgcm91dGVzIHRvIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaC5cbiAgICAgICAgbWF0Y2hSb3V0ZXMoY2hpbGRSb3V0ZXMsIGxvY2F0aW9uLCBmdW5jdGlvbiAoZXJyb3IsIG1hdGNoKSB7XG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgLy8gQSBjaGlsZCByb3V0ZSBtYXRjaGVkISBBdWdtZW50IHRoZSBtYXRjaCBhbmQgcGFzcyBpdCB1cCB0aGUgc3RhY2suXG4gICAgICAgICAgICBtYXRjaC5yb3V0ZXMudW5zaGlmdChyb3V0ZSk7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBtYXRjaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCByZW1haW5pbmdQYXRobmFtZSwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc3VsdCA9IGdldENoaWxkUm91dGVzKHJvdXRlLCBsb2NhdGlvbiwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIG9uQ2hpbGRSb3V0ZXMpO1xuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIG9uQ2hpbGRSb3V0ZXMuYXBwbHkodW5kZWZpbmVkLCByZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWxsYmFjaygpO1xuICB9XG59XG5cbi8qKlxuICogQXN5bmNocm9ub3VzbHkgbWF0Y2hlcyB0aGUgZ2l2ZW4gbG9jYXRpb24gdG8gYSBzZXQgb2Ygcm91dGVzIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHN0YXRlKSB3aGVuIGZpbmlzaGVkLiBUaGUgc3RhdGUgb2JqZWN0IHdpbGwgaGF2ZSB0aGVcbiAqIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqIC0gcm91dGVzICAgICAgIEFuIGFycmF5IG9mIHJvdXRlcyB0aGF0IG1hdGNoZWQsIGluIGhpZXJhcmNoaWNhbCBvcmRlclxuICogLSBwYXJhbXMgICAgICAgQW4gb2JqZWN0IG9mIFVSTCBwYXJhbWV0ZXJzXG4gKlxuICogTm90ZTogVGhpcyBvcGVyYXRpb24gbWF5IGZpbmlzaCBzeW5jaHJvbm91c2x5IGlmIG5vIHJvdXRlcyBoYXZlIGFuXG4gKiBhc3luY2hyb25vdXMgZ2V0Q2hpbGRSb3V0ZXMgbWV0aG9kLlxuICovXG5mdW5jdGlvbiBtYXRjaFJvdXRlcyhyb3V0ZXMsIGxvY2F0aW9uLCBjYWxsYmFjaywgcmVtYWluaW5nUGF0aG5hbWUpIHtcbiAgdmFyIHBhcmFtTmFtZXMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDQgfHwgYXJndW1lbnRzWzRdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1s0XTtcbiAgdmFyIHBhcmFtVmFsdWVzID0gYXJndW1lbnRzLmxlbmd0aCA8PSA1IHx8IGFyZ3VtZW50c1s1XSA9PT0gdW5kZWZpbmVkID8gW10gOiBhcmd1bWVudHNbNV07XG5cbiAgaWYgKHJlbWFpbmluZ1BhdGhuYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAvLyBUT0RPOiBUaGlzIGlzIGEgbGl0dGxlIGJpdCB1Z2x5LCBidXQgaXQgd29ya3MgYXJvdW5kIGEgcXVpcmsgaW4gaGlzdG9yeVxuICAgIC8vIHRoYXQgc3RyaXBzIHRoZSBsZWFkaW5nIHNsYXNoIGZyb20gcGF0aG5hbWVzIHdoZW4gdXNpbmcgYmFzZW5hbWVzIHdpdGhcbiAgICAvLyB0cmFpbGluZyBzbGFzaGVzLlxuICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykge1xuICAgICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6ICcvJyArIGxvY2F0aW9uLnBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmVtYWluaW5nUGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgfVxuXG4gICgwLCBfQXN5bmNVdGlscy5sb29wQXN5bmMpKHJvdXRlcy5sZW5ndGgsIGZ1bmN0aW9uIChpbmRleCwgbmV4dCwgZG9uZSkge1xuICAgIG1hdGNoUm91dGVEZWVwKHJvdXRlc1tpbmRleF0sIGxvY2F0aW9uLCByZW1haW5pbmdQYXRobmFtZSwgcGFyYW1OYW1lcywgcGFyYW1WYWx1ZXMsIGZ1bmN0aW9uIChlcnJvciwgbWF0Y2gpIHtcbiAgICAgIGlmIChlcnJvciB8fCBtYXRjaCkge1xuICAgICAgICBkb25lKGVycm9yLCBtYXRjaCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGNhbGxiYWNrKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvbWF0Y2hSb3V0ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1NDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzJyk7XG5cbnZhciBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzKTtcblxudmFyIF9nZXRSb3V0ZVBhcmFtcyA9IHJlcXVpcmUoJy4vZ2V0Um91dGVQYXJhbXMnKTtcblxudmFyIF9nZXRSb3V0ZVBhcmFtczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9nZXRSb3V0ZVBhcmFtcyk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcgPSByZXF1aXJlKCcuL3JvdXRlcldhcm5pbmcnKTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JvdXRlcldhcm5pbmcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXM7XG52YXIgYXJyYXkgPSBfUmVhY3QkUHJvcFR5cGVzLmFycmF5O1xudmFyIGZ1bmMgPSBfUmVhY3QkUHJvcFR5cGVzLmZ1bmM7XG52YXIgb2JqZWN0ID0gX1JlYWN0JFByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogQSA8Um91dGVyQ29udGV4dD4gcmVuZGVycyB0aGUgY29tcG9uZW50IHRyZWUgZm9yIGEgZ2l2ZW4gcm91dGVyIHN0YXRlXG4gKiBhbmQgc2V0cyB0aGUgaGlzdG9yeSBvYmplY3QgYW5kIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIGNvbnRleHQuXG4gKi9cblxudmFyIFJvdXRlckNvbnRleHQgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JvdXRlckNvbnRleHQnLFxuXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgaGlzdG9yeTogb2JqZWN0LFxuICAgIHJvdXRlcjogb2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbG9jYXRpb246IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHJvdXRlczogYXJyYXkuaXNSZXF1aXJlZCxcbiAgICBwYXJhbXM6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbXBvbmVudHM6IGFycmF5LmlzUmVxdWlyZWQsXG4gICAgY3JlYXRlRWxlbWVudDogZnVuYy5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50XG4gICAgfTtcbiAgfSxcblxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgaGlzdG9yeTogb2JqZWN0LFxuICAgIGxvY2F0aW9uOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICByb3V0ZXI6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHJvdXRlciA9IF9wcm9wcy5yb3V0ZXI7XG4gICAgdmFyIGhpc3RvcnkgPSBfcHJvcHMuaGlzdG9yeTtcbiAgICB2YXIgbG9jYXRpb24gPSBfcHJvcHMubG9jYXRpb247XG5cbiAgICBpZiAoIXJvdXRlcikge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgPFJvdXRlckNvbnRleHQ+YCBleHBlY3RzIGEgYHJvdXRlcmAgcmF0aGVyIHRoYW4gYSBgaGlzdG9yeWAnKSA6IHZvaWQgMDtcblxuICAgICAgcm91dGVyID0gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICAgICAgc2V0Um91dGVMZWF2ZUhvb2s6IGhpc3RvcnkubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlXG4gICAgICB9KTtcbiAgICAgIGRlbGV0ZSByb3V0ZXIubGlzdGVuQmVmb3JlTGVhdmluZ1JvdXRlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBsb2NhdGlvbiA9ICgwLCBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIuZGVmYXVsdCkobG9jYXRpb24sICdgY29udGV4dC5sb2NhdGlvbmAgaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBhIHJvdXRlIGNvbXBvbmVudFxcJ3MgYHByb3BzLmxvY2F0aW9uYCBpbnN0ZWFkLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItYWNjZXNzaW5nbG9jYXRpb24nKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBoaXN0b3J5OiBoaXN0b3J5LCBsb2NhdGlvbjogbG9jYXRpb24sIHJvdXRlcjogcm91dGVyIH07XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcykge1xuICAgIHJldHVybiBjb21wb25lbnQgPT0gbnVsbCA/IG51bGwgOiB0aGlzLnByb3BzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50LCBwcm9wcyk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGhpc3RvcnkgPSBfcHJvcHMyLmhpc3Rvcnk7XG4gICAgdmFyIGxvY2F0aW9uID0gX3Byb3BzMi5sb2NhdGlvbjtcbiAgICB2YXIgcm91dGVzID0gX3Byb3BzMi5yb3V0ZXM7XG4gICAgdmFyIHBhcmFtcyA9IF9wcm9wczIucGFyYW1zO1xuICAgIHZhciBjb21wb25lbnRzID0gX3Byb3BzMi5jb21wb25lbnRzO1xuXG4gICAgdmFyIGVsZW1lbnQgPSBudWxsO1xuXG4gICAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICAgIGVsZW1lbnQgPSBjb21wb25lbnRzLnJlZHVjZVJpZ2h0KGZ1bmN0aW9uIChlbGVtZW50LCBjb21wb25lbnRzLCBpbmRleCkge1xuICAgICAgICBpZiAoY29tcG9uZW50cyA9PSBudWxsKSByZXR1cm4gZWxlbWVudDsgLy8gRG9uJ3QgY3JlYXRlIG5ldyBjaGlsZHJlbjsgdXNlIHRoZSBncmFuZGNoaWxkcmVuLlxuXG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlc1tpbmRleF07XG4gICAgICAgIHZhciByb3V0ZVBhcmFtcyA9ICgwLCBfZ2V0Um91dGVQYXJhbXMyLmRlZmF1bHQpKHJvdXRlLCBwYXJhbXMpO1xuICAgICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb24sXG4gICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgIHJvdXRlUGFyYW1zOiByb3V0ZVBhcmFtcyxcbiAgICAgICAgICByb3V0ZXM6IHJvdXRlc1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgoMCwgX1JvdXRlVXRpbHMuaXNSZWFjdENoaWxkcmVuKShlbGVtZW50KSkge1xuICAgICAgICAgIHByb3BzLmNoaWxkcmVuID0gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50KSB7XG4gICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVsZW1lbnQsIHByb3ApKSBwcm9wc1twcm9wXSA9IGVsZW1lbnRbcHJvcF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCh0eXBlb2YgY29tcG9uZW50cyA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY29tcG9uZW50cykpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBlbGVtZW50cyA9IHt9O1xuXG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoY29tcG9uZW50cywga2V5KSkge1xuICAgICAgICAgICAgICAvLyBQYXNzIHRocm91Z2ggdGhlIGtleSBhcyBhIHByb3AgdG8gY3JlYXRlRWxlbWVudCB0byBhbGxvd1xuICAgICAgICAgICAgICAvLyBjdXN0b20gY3JlYXRlRWxlbWVudCBmdW5jdGlvbnMgdG8ga25vdyB3aGljaCBuYW1lZCBjb21wb25lbnRcbiAgICAgICAgICAgICAgLy8gdGhleSdyZSByZW5kZXJpbmcsIGZvciBlLmcuIG1hdGNoaW5nIHVwIHRvIGZldGNoZWQgZGF0YS5cbiAgICAgICAgICAgICAgZWxlbWVudHNba2V5XSA9IF90aGlzLmNyZWF0ZUVsZW1lbnQoY29tcG9uZW50c1trZXldLCBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAga2V5OiBrZXkgfSwgcHJvcHMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlRWxlbWVudChjb21wb25lbnRzLCBwcm9wcyk7XG4gICAgICB9LCBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAhKGVsZW1lbnQgPT09IG51bGwgfHwgZWxlbWVudCA9PT0gZmFsc2UgfHwgX3JlYWN0Mi5kZWZhdWx0LmlzVmFsaWRFbGVtZW50KGVsZW1lbnQpKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdUaGUgcm9vdCByb3V0ZSBtdXN0IHJlbmRlciBhIHNpbmdsZSBlbGVtZW50JykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXJDb250ZXh0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9Sb3V0ZXJDb250ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gNTQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfUGF0dGVyblV0aWxzID0gcmVxdWlyZSgnLi9QYXR0ZXJuVXRpbHMnKTtcblxuLyoqXG4gKiBFeHRyYWN0cyBhbiBvYmplY3Qgb2YgcGFyYW1zIHRoZSBnaXZlbiByb3V0ZSBjYXJlcyBhYm91dCBmcm9tXG4gKiB0aGUgZ2l2ZW4gcGFyYW1zIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gZ2V0Um91dGVQYXJhbXMocm91dGUsIHBhcmFtcykge1xuICB2YXIgcm91dGVQYXJhbXMgPSB7fTtcblxuICBpZiAoIXJvdXRlLnBhdGgpIHJldHVybiByb3V0ZVBhcmFtcztcblxuICAoMCwgX1BhdHRlcm5VdGlscy5nZXRQYXJhbU5hbWVzKShyb3V0ZS5wYXRoKS5mb3JFYWNoKGZ1bmN0aW9uIChwKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHApKSB7XG4gICAgICByb3V0ZVBhcmFtc1twXSA9IHBhcmFtc1twXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByb3V0ZVBhcmFtcztcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gZ2V0Um91dGVQYXJhbXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL2dldFJvdXRlUGFyYW1zLmpzXG4gKiogbW9kdWxlIGlkID0gNTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuY3JlYXRlUm91dGVyT2JqZWN0ID0gY3JlYXRlUm91dGVyT2JqZWN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0aW5nSGlzdG9yeSA9IGNyZWF0ZVJvdXRpbmdIaXN0b3J5O1xuXG52YXIgX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMnKTtcblxudmFyIF9kZXByZWNhdGVPYmplY3RQcm9wZXJ0aWVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZU9iamVjdFByb3BlcnRpZXMpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXJPYmplY3QoaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgc2V0Um91dGVMZWF2ZUhvb2s6IHRyYW5zaXRpb25NYW5hZ2VyLmxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZSxcbiAgICBpc0FjdGl2ZTogdHJhbnNpdGlvbk1hbmFnZXIuaXNBY3RpdmVcbiAgfSk7XG59XG5cbi8vIGRlcHJlY2F0ZWRcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRpbmdIaXN0b3J5KGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKSB7XG4gIGhpc3RvcnkgPSBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaGlzdG9yeSA9ICgwLCBfZGVwcmVjYXRlT2JqZWN0UHJvcGVydGllczIuZGVmYXVsdCkoaGlzdG9yeSwgJ2Bwcm9wcy5oaXN0b3J5YCBhbmQgYGNvbnRleHQuaGlzdG9yeWAgYXJlIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgYGNvbnRleHQucm91dGVyYC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWNvbnRleHRjaGFuZ2VzJyk7XG4gIH1cblxuICByZXR1cm4gaGlzdG9yeTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlclV0aWxzLmpzXG4gKiogbW9kdWxlIGlkID0gNTQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcztcbnZhciBib29sID0gX1JlYWN0JFByb3BUeXBlcy5ib29sO1xudmFyIG9iamVjdCA9IF9SZWFjdCRQcm9wVHlwZXMub2JqZWN0O1xudmFyIHN0cmluZyA9IF9SZWFjdCRQcm9wVHlwZXMuc3RyaW5nO1xudmFyIGZ1bmMgPSBfUmVhY3QkUHJvcFR5cGVzLmZ1bmM7XG52YXIgb25lT2ZUeXBlID0gX1JlYWN0JFByb3BUeXBlcy5vbmVPZlR5cGU7XG5cblxuZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgcmV0dXJuICEhKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xufVxuXG4vLyBUT0RPOiBEZS1kdXBsaWNhdGUgYWdhaW5zdCBoYXNBbnlQcm9wZXJ0aWVzIGluIGNyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyLlxuZnVuY3Rpb24gaXNFbXB0eU9iamVjdChvYmplY3QpIHtcbiAgZm9yICh2YXIgcCBpbiBvYmplY3QpIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcCkpIHJldHVybiBmYWxzZTtcbiAgfXJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8sIF9yZWYpIHtcbiAgdmFyIHF1ZXJ5ID0gX3JlZi5xdWVyeTtcbiAgdmFyIGhhc2ggPSBfcmVmLmhhc2g7XG4gIHZhciBzdGF0ZSA9IF9yZWYuc3RhdGU7XG5cbiAgaWYgKHF1ZXJ5IHx8IGhhc2ggfHwgc3RhdGUpIHtcbiAgICByZXR1cm4geyBwYXRobmFtZTogdG8sIHF1ZXJ5OiBxdWVyeSwgaGFzaDogaGFzaCwgc3RhdGU6IHN0YXRlIH07XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cbi8qKlxuICogQSA8TGluaz4gaXMgdXNlZCB0byBjcmVhdGUgYW4gPGE+IGVsZW1lbnQgdGhhdCBsaW5rcyB0byBhIHJvdXRlLlxuICogV2hlbiB0aGF0IHJvdXRlIGlzIGFjdGl2ZSwgdGhlIGxpbmsgZ2V0cyB0aGUgdmFsdWUgb2YgaXRzXG4gKiBhY3RpdmVDbGFzc05hbWUgcHJvcC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgYXNzdW1pbmcgeW91IGhhdmUgdGhlIGZvbGxvd2luZyByb3V0ZTpcbiAqXG4gKiAgIDxSb3V0ZSBwYXRoPVwiL3Bvc3RzLzpwb3N0SURcIiBjb21wb25lbnQ9e1Bvc3R9IC8+XG4gKlxuICogWW91IGNvdWxkIHVzZSB0aGUgZm9sbG93aW5nIGNvbXBvbmVudCB0byBsaW5rIHRvIHRoYXQgcm91dGU6XG4gKlxuICogICA8TGluayB0bz17YC9wb3N0cy8ke3Bvc3QuaWR9YH0gLz5cbiAqXG4gKiBMaW5rcyBtYXkgcGFzcyBhbG9uZyBsb2NhdGlvbiBzdGF0ZSBhbmQvb3IgcXVlcnkgc3RyaW5nIHBhcmFtZXRlcnNcbiAqIGluIHRoZSBzdGF0ZS9xdWVyeSBwcm9wcywgcmVzcGVjdGl2ZWx5LlxuICpcbiAqICAgPExpbmsgLi4uIHF1ZXJ5PXt7IHNob3c6IHRydWUgfX0gc3RhdGU9e3sgdGhlOiAnc3RhdGUnIH19IC8+XG4gKi9cbnZhciBMaW5rID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdMaW5rJyxcblxuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIHJvdXRlcjogX1Byb3BUeXBlcy5yb3V0ZXJTaGFwZVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRvOiBvbmVPZlR5cGUoW3N0cmluZywgb2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogb2JqZWN0LFxuICAgIGhhc2g6IHN0cmluZyxcbiAgICBzdGF0ZTogb2JqZWN0LFxuICAgIGFjdGl2ZVN0eWxlOiBvYmplY3QsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgb25seUFjdGl2ZU9uSW5kZXg6IGJvb2wuaXNSZXF1aXJlZCxcbiAgICBvbkNsaWNrOiBmdW5jLFxuICAgIHRhcmdldDogc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9ubHlBY3RpdmVPbkluZGV4OiBmYWxzZSxcbiAgICAgIHN0eWxlOiB7fVxuICAgIH07XG4gIH0sXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbiBoYW5kbGVDbGljayhldmVudCkge1xuICAgICF0aGlzLmNvbnRleHQucm91dGVyID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJzxMaW5rPnMgcmVuZGVyZWQgb3V0c2lkZSBvZiBhIHJvdXRlciBjb250ZXh0IGNhbm5vdCBoYW5kbGUgY2xpY2tzLicpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcblxuICAgIHZhciBhbGxvd1RyYW5zaXRpb24gPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DbGljaykgdGhpcy5wcm9wcy5vbkNsaWNrKGV2ZW50KTtcblxuICAgIGlmIChpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHx8ICFpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkgcmV0dXJuO1xuXG4gICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQgPT09IHRydWUpIGFsbG93VHJhbnNpdGlvbiA9IGZhbHNlO1xuXG4gICAgLy8gSWYgdGFyZ2V0IHByb3AgaXMgc2V0IChlLmcuIHRvIFwiX2JsYW5rXCIpIGxldCBicm93c2VyIGhhbmRsZSBsaW5rLlxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZjogdW50ZXN0YWJsZSB3aXRoIEthcm1hICovXG4gICAgaWYgKHRoaXMucHJvcHMudGFyZ2V0KSB7XG4gICAgICBpZiAoIWFsbG93VHJhbnNpdGlvbikgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoYWxsb3dUcmFuc2l0aW9uKSB7XG4gICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIHZhciB0byA9IF9wcm9wcy50bztcbiAgICAgIHZhciBxdWVyeSA9IF9wcm9wcy5xdWVyeTtcbiAgICAgIHZhciBoYXNoID0gX3Byb3BzLmhhc2g7XG4gICAgICB2YXIgc3RhdGUgPSBfcHJvcHMuc3RhdGU7XG5cbiAgICAgIHZhciBsb2NhdGlvbiA9IGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bywgeyBxdWVyeTogcXVlcnksIGhhc2g6IGhhc2gsIHN0YXRlOiBzdGF0ZSB9KTtcblxuICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKGxvY2F0aW9uKTtcbiAgICB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdG8gPSBfcHJvcHMyLnRvO1xuICAgIHZhciBxdWVyeSA9IF9wcm9wczIucXVlcnk7XG4gICAgdmFyIGhhc2ggPSBfcHJvcHMyLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gX3Byb3BzMi5zdGF0ZTtcbiAgICB2YXIgYWN0aXZlQ2xhc3NOYW1lID0gX3Byb3BzMi5hY3RpdmVDbGFzc05hbWU7XG4gICAgdmFyIGFjdGl2ZVN0eWxlID0gX3Byb3BzMi5hY3RpdmVTdHlsZTtcbiAgICB2YXIgb25seUFjdGl2ZU9uSW5kZXggPSBfcHJvcHMyLm9ubHlBY3RpdmVPbkluZGV4O1xuXG4gICAgdmFyIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wczIsIFsndG8nLCAncXVlcnknLCAnaGFzaCcsICdzdGF0ZScsICdhY3RpdmVDbGFzc05hbWUnLCAnYWN0aXZlU3R5bGUnLCAnb25seUFjdGl2ZU9uSW5kZXgnXSk7XG5cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KSghKHF1ZXJ5IHx8IGhhc2ggfHwgc3RhdGUpLCAndGhlIGBxdWVyeWAsIGBoYXNoYCwgYW5kIGBzdGF0ZWAgcHJvcHMgb24gYDxMaW5rPmAgYXJlIGRlcHJlY2F0ZWQsIHVzZSBgPExpbmsgdG89e3sgcGF0aG5hbWUsIHF1ZXJ5LCBoYXNoLCBzdGF0ZSB9fS8+LiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaXNBY3RpdmVkZXByZWNhdGVkJykgOiB2b2lkIDA7XG5cbiAgICAvLyBJZ25vcmUgaWYgcmVuZGVyZWQgb3V0c2lkZSB0aGUgY29udGV4dCBvZiByb3V0ZXIsIHNpbXBsaWZpZXMgdW5pdCB0ZXN0aW5nLlxuICAgIHZhciByb3V0ZXIgPSB0aGlzLmNvbnRleHQucm91dGVyO1xuXG5cbiAgICBpZiAocm91dGVyKSB7XG4gICAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8sIHsgcXVlcnk6IHF1ZXJ5LCBoYXNoOiBoYXNoLCBzdGF0ZTogc3RhdGUgfSk7XG4gICAgICBwcm9wcy5ocmVmID0gcm91dGVyLmNyZWF0ZUhyZWYobG9jYXRpb24pO1xuXG4gICAgICBpZiAoYWN0aXZlQ2xhc3NOYW1lIHx8IGFjdGl2ZVN0eWxlICE9IG51bGwgJiYgIWlzRW1wdHlPYmplY3QoYWN0aXZlU3R5bGUpKSB7XG4gICAgICAgIGlmIChyb3V0ZXIuaXNBY3RpdmUobG9jYXRpb24sIG9ubHlBY3RpdmVPbkluZGV4KSkge1xuICAgICAgICAgIGlmIChhY3RpdmVDbGFzc05hbWUpIHtcbiAgICAgICAgICAgIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcHJvcHMuY2xhc3NOYW1lICs9ICcgJyArIGFjdGl2ZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IGFjdGl2ZUNsYXNzTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYWN0aXZlU3R5bGUpIHByb3BzLnN0eWxlID0gX2V4dGVuZHMoe30sIHByb3BzLnN0eWxlLCBhY3RpdmVTdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHsgb25DbGljazogdGhpcy5oYW5kbGVDbGljayB9KSk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBMaW5rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9MaW5rLmpzXG4gKiogbW9kdWxlIGlkID0gNTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9MaW5rID0gcmVxdWlyZSgnLi9MaW5rJyk7XG5cbnZhciBfTGluazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9MaW5rKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBBbiA8SW5kZXhMaW5rPiBpcyB1c2VkIHRvIGxpbmsgdG8gYW4gPEluZGV4Um91dGU+LlxuICovXG52YXIgSW5kZXhMaW5rID0gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdJbmRleExpbmsnLFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX0xpbmsyLmRlZmF1bHQsIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IG9ubHlBY3RpdmVPbkluZGV4OiB0cnVlIH0pKTtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEluZGV4TGluaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvSW5kZXhMaW5rLmpzXG4gKiogbW9kdWxlIGlkID0gNTQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9ob2lzdE5vblJlYWN0U3RhdGljcyA9IHJlcXVpcmUoJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJyk7XG5cbnZhciBfaG9pc3ROb25SZWFjdFN0YXRpY3MyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaG9pc3ROb25SZWFjdFN0YXRpY3MpO1xuXG52YXIgX1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxuXG5mdW5jdGlvbiB3aXRoUm91dGVyKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgdmFyIFdpdGhSb3V0ZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICAgIGRpc3BsYXlOYW1lOiAnV2l0aFJvdXRlcicsXG5cbiAgICBjb250ZXh0VHlwZXM6IHsgcm91dGVyOiBfUHJvcFR5cGVzLnJvdXRlclNoYXBlIH0sXG4gICAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgcm91dGVyOiB0aGlzLmNvbnRleHQucm91dGVyIH0pKTtcbiAgICB9XG4gIH0pO1xuXG4gIFdpdGhSb3V0ZXIuZGlzcGxheU5hbWUgPSAnd2l0aFJvdXRlcignICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyAnKSc7XG4gIFdpdGhSb3V0ZXIuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG5cbiAgcmV0dXJuICgwLCBfaG9pc3ROb25SZWFjdFN0YXRpY3MyLmRlZmF1bHQpKFdpdGhSb3V0ZXIsIFdyYXBwZWRDb21wb25lbnQpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi93aXRoUm91dGVyLmpzXG4gKiogbW9kdWxlIGlkID0gNTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9SZWRpcmVjdCA9IHJlcXVpcmUoJy4vUmVkaXJlY3QnKTtcblxudmFyIF9SZWRpcmVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9SZWRpcmVjdCk7XG5cbnZhciBfSW50ZXJuYWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL0ludGVybmFsUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcztcbnZhciBzdHJpbmcgPSBfUmVhY3QkUHJvcFR5cGVzLnN0cmluZztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBbiA8SW5kZXhSZWRpcmVjdD4gaXMgdXNlZCB0byByZWRpcmVjdCBmcm9tIGFuIGluZGV4Um91dGUuXG4gKi9cblxudmFyIEluZGV4UmVkaXJlY3QgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0luZGV4UmVkaXJlY3QnLFxuXG5cbiAgc3RhdGljczoge1xuICAgIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDogZnVuY3Rpb24gY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KGVsZW1lbnQsIHBhcmVudFJvdXRlKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZTogc2FuaXR5IGNoZWNrICovXG4gICAgICBpZiAocGFyZW50Um91dGUpIHtcbiAgICAgICAgcGFyZW50Um91dGUuaW5kZXhSb3V0ZSA9IF9SZWRpcmVjdDIuZGVmYXVsdC5jcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0FuIDxJbmRleFJlZGlyZWN0PiBkb2VzIG5vdCBtYWtlIHNlbnNlIGF0IHRoZSByb290IG9mIHlvdXIgcm91dGUgY29uZmlnJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRvOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogb2JqZWN0LFxuICAgIHN0YXRlOiBvYmplY3QsXG4gICAgb25FbnRlcjogX0ludGVybmFsUHJvcFR5cGVzLmZhbHN5LFxuICAgIGNoaWxkcmVuOiBfSW50ZXJuYWxQcm9wVHlwZXMuZmFsc3lcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICc8SW5kZXhSZWRpcmVjdD4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5kZXhSZWRpcmVjdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvSW5kZXhSZWRpcmVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDU0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1BhdHRlcm5VdGlscyA9IHJlcXVpcmUoJy4vUGF0dGVyblV0aWxzJyk7XG5cbnZhciBfSW50ZXJuYWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL0ludGVybmFsUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBfUmVhY3QkUHJvcFR5cGVzID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcztcbnZhciBzdHJpbmcgPSBfUmVhY3QkUHJvcFR5cGVzLnN0cmluZztcbnZhciBvYmplY3QgPSBfUmVhY3QkUHJvcFR5cGVzLm9iamVjdDtcblxuLyoqXG4gKiBBIDxSZWRpcmVjdD4gaXMgdXNlZCB0byBkZWNsYXJlIGFub3RoZXIgVVJMIHBhdGggYSBjbGllbnQgc2hvdWxkXG4gKiBiZSBzZW50IHRvIHdoZW4gdGhleSByZXF1ZXN0IGEgZ2l2ZW4gVVJMLlxuICpcbiAqIFJlZGlyZWN0cyBhcmUgcGxhY2VkIGFsb25nc2lkZSByb3V0ZXMgaW4gdGhlIHJvdXRlIGNvbmZpZ3VyYXRpb25cbiAqIGFuZCBhcmUgdHJhdmVyc2VkIGluIHRoZSBzYW1lIG1hbm5lci5cbiAqL1xuXG52YXIgUmVkaXJlY3QgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ1JlZGlyZWN0JyxcblxuXG4gIHN0YXRpY3M6IHtcbiAgICBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICB2YXIgcm91dGUgPSAoMCwgX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50KShlbGVtZW50KTtcblxuICAgICAgaWYgKHJvdXRlLmZyb20pIHJvdXRlLnBhdGggPSByb3V0ZS5mcm9tO1xuXG4gICAgICByb3V0ZS5vbkVudGVyID0gZnVuY3Rpb24gKG5leHRTdGF0ZSwgcmVwbGFjZSkge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBuZXh0U3RhdGUubG9jYXRpb247XG4gICAgICAgIHZhciBwYXJhbXMgPSBuZXh0U3RhdGUucGFyYW1zO1xuXG5cbiAgICAgICAgdmFyIHBhdGhuYW1lID0gdm9pZCAwO1xuICAgICAgICBpZiAocm91dGUudG8uY2hhckF0KDApID09PSAnLycpIHtcbiAgICAgICAgICBwYXRobmFtZSA9ICgwLCBfUGF0dGVyblV0aWxzLmZvcm1hdFBhdHRlcm4pKHJvdXRlLnRvLCBwYXJhbXMpO1xuICAgICAgICB9IGVsc2UgaWYgKCFyb3V0ZS50bykge1xuICAgICAgICAgIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHJvdXRlSW5kZXggPSBuZXh0U3RhdGUucm91dGVzLmluZGV4T2Yocm91dGUpO1xuICAgICAgICAgIHZhciBwYXJlbnRQYXR0ZXJuID0gUmVkaXJlY3QuZ2V0Um91dGVQYXR0ZXJuKG5leHRTdGF0ZS5yb3V0ZXMsIHJvdXRlSW5kZXggLSAxKTtcbiAgICAgICAgICB2YXIgcGF0dGVybiA9IHBhcmVudFBhdHRlcm4ucmVwbGFjZSgvXFwvKiQvLCAnLycpICsgcm91dGUudG87XG4gICAgICAgICAgcGF0aG5hbWUgPSAoMCwgX1BhdHRlcm5VdGlscy5mb3JtYXRQYXR0ZXJuKShwYXR0ZXJuLCBwYXJhbXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVwbGFjZSh7XG4gICAgICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgICAgICAgIHF1ZXJ5OiByb3V0ZS5xdWVyeSB8fCBsb2NhdGlvbi5xdWVyeSxcbiAgICAgICAgICBzdGF0ZTogcm91dGUuc3RhdGUgfHwgbG9jYXRpb24uc3RhdGVcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gcm91dGU7XG4gICAgfSxcbiAgICBnZXRSb3V0ZVBhdHRlcm46IGZ1bmN0aW9uIGdldFJvdXRlUGF0dGVybihyb3V0ZXMsIHJvdXRlSW5kZXgpIHtcbiAgICAgIHZhciBwYXJlbnRQYXR0ZXJuID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGkgPSByb3V0ZUluZGV4OyBpID49IDA7IGktLSkge1xuICAgICAgICB2YXIgcm91dGUgPSByb3V0ZXNbaV07XG4gICAgICAgIHZhciBwYXR0ZXJuID0gcm91dGUucGF0aCB8fCAnJztcblxuICAgICAgICBwYXJlbnRQYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC9cXC8qJC8sICcvJykgKyBwYXJlbnRQYXR0ZXJuO1xuXG4gICAgICAgIGlmIChwYXR0ZXJuLmluZGV4T2YoJy8nKSA9PT0gMCkgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAnLycgKyBwYXJlbnRQYXR0ZXJuO1xuICAgIH1cbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBwYXRoOiBzdHJpbmcsXG4gICAgZnJvbTogc3RyaW5nLCAvLyBBbGlhcyBmb3IgcGF0aFxuICAgIHRvOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBxdWVyeTogb2JqZWN0LFxuICAgIHN0YXRlOiBvYmplY3QsXG4gICAgb25FbnRlcjogX0ludGVybmFsUHJvcFR5cGVzLmZhbHN5LFxuICAgIGNoaWxkcmVuOiBfSW50ZXJuYWxQcm9wVHlwZXMuZmFsc3lcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICc8UmVkaXJlY3Q+IGVsZW1lbnRzIGFyZSBmb3Igcm91dGVyIGNvbmZpZ3VyYXRpb24gb25seSBhbmQgc2hvdWxkIG5vdCBiZSByZW5kZXJlZCcpIDogKDAsIF9pbnZhcmlhbnQyLmRlZmF1bHQpKGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IFJlZGlyZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9SZWRpcmVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgZnVuYyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBbiA8SW5kZXhSb3V0ZT4gaXMgdXNlZCB0byBzcGVjaWZ5IGl0cyBwYXJlbnQncyA8Um91dGUgaW5kZXhSb3V0ZT4gaW5cbiAqIGEgSlNYIHJvdXRlIGNvbmZpZy5cbiAqL1xuXG52YXIgSW5kZXhSb3V0ZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSW5kZXhSb3V0ZScsXG5cblxuICBzdGF0aWNzOiB7XG4gICAgY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50OiBmdW5jdGlvbiBjcmVhdGVSb3V0ZUZyb21SZWFjdEVsZW1lbnQoZWxlbWVudCwgcGFyZW50Um91dGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlOiBzYW5pdHkgY2hlY2sgKi9cbiAgICAgIGlmIChwYXJlbnRSb3V0ZSkge1xuICAgICAgICBwYXJlbnRSb3V0ZS5pbmRleFJvdXRlID0gKDAsIF9Sb3V0ZVV0aWxzLmNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudCkoZWxlbWVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ0FuIDxJbmRleFJvdXRlPiBkb2VzIG5vdCBtYWtlIHNlbnNlIGF0IHRoZSByb290IG9mIHlvdXIgcm91dGUgY29uZmlnJykgOiB2b2lkIDA7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIHByb3BUeXBlczoge1xuICAgIHBhdGg6IF9JbnRlcm5hbFByb3BUeXBlcy5mYWxzeSxcbiAgICBjb21wb25lbnQ6IF9JbnRlcm5hbFByb3BUeXBlcy5jb21wb25lbnQsXG4gICAgY29tcG9uZW50czogX0ludGVybmFsUHJvcFR5cGVzLmNvbXBvbmVudHMsXG4gICAgZ2V0Q29tcG9uZW50OiBmdW5jLFxuICAgIGdldENvbXBvbmVudHM6IGZ1bmNcbiAgfSxcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogc2FuaXR5IGNoZWNrICovXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICFmYWxzZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICc8SW5kZXhSb3V0ZT4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gSW5kZXhSb3V0ZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvSW5kZXhSb3V0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX0ludGVybmFsUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9JbnRlcm5hbFByb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgX1JlYWN0JFByb3BUeXBlcyA9IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXM7XG52YXIgc3RyaW5nID0gX1JlYWN0JFByb3BUeXBlcy5zdHJpbmc7XG52YXIgZnVuYyA9IF9SZWFjdCRQcm9wVHlwZXMuZnVuYztcblxuLyoqXG4gKiBBIDxSb3V0ZT4gaXMgdXNlZCB0byBkZWNsYXJlIHdoaWNoIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkIHRvIHRoZVxuICogcGFnZSB3aGVuIHRoZSBVUkwgbWF0Y2hlcyBhIGdpdmVuIHBhdHRlcm4uXG4gKlxuICogUm91dGVzIGFyZSBhcnJhbmdlZCBpbiBhIG5lc3RlZCB0cmVlIHN0cnVjdHVyZS4gV2hlbiBhIG5ldyBVUkwgaXNcbiAqIHJlcXVlc3RlZCwgdGhlIHRyZWUgaXMgc2VhcmNoZWQgZGVwdGgtZmlyc3QgdG8gZmluZCBhIHJvdXRlIHdob3NlXG4gKiBwYXRoIG1hdGNoZXMgdGhlIFVSTC4gIFdoZW4gb25lIGlzIGZvdW5kLCBhbGwgcm91dGVzIGluIHRoZSB0cmVlXG4gKiB0aGF0IGxlYWQgdG8gaXQgYXJlIGNvbnNpZGVyZWQgXCJhY3RpdmVcIiBhbmQgdGhlaXIgY29tcG9uZW50cyBhcmVcbiAqIHJlbmRlcmVkIGludG8gdGhlIERPTSwgbmVzdGVkIGluIHRoZSBzYW1lIG9yZGVyIGFzIGluIHRoZSB0cmVlLlxuICovXG5cbnZhciBSb3V0ZSA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUm91dGUnLFxuXG5cbiAgc3RhdGljczoge1xuICAgIGNyZWF0ZVJvdXRlRnJvbVJlYWN0RWxlbWVudDogX1JvdXRlVXRpbHMuY3JlYXRlUm91dGVGcm9tUmVhY3RFbGVtZW50XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgcGF0aDogc3RyaW5nLFxuICAgIGNvbXBvbmVudDogX0ludGVybmFsUHJvcFR5cGVzLmNvbXBvbmVudCxcbiAgICBjb21wb25lbnRzOiBfSW50ZXJuYWxQcm9wVHlwZXMuY29tcG9uZW50cyxcbiAgICBnZXRDb21wb25lbnQ6IGZ1bmMsXG4gICAgZ2V0Q29tcG9uZW50czogZnVuY1xuICB9LFxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0OiBzYW5pdHkgY2hlY2sgKi9cbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgIWZhbHNlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJzxSb3V0ZT4gZWxlbWVudHMgYXJlIGZvciByb3V0ZXIgY29uZmlndXJhdGlvbiBvbmx5IGFuZCBzaG91bGQgbm90IGJlIHJlbmRlcmVkJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuICB9XG59KTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gUm91dGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbnZhciBfSW50ZXJuYWxQcm9wVHlwZXMgPSByZXF1aXJlKCcuL0ludGVybmFsUHJvcFR5cGVzJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQSBtaXhpbiB0aGF0IGFkZHMgdGhlIFwiaGlzdG9yeVwiIGluc3RhbmNlIHZhcmlhYmxlIHRvIGNvbXBvbmVudHMuXG4gKi9cbnZhciBIaXN0b3J5ID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IF9JbnRlcm5hbFByb3BUeXBlcy5oaXN0b3J5XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICd0aGUgYEhpc3RvcnlgIG1peGluIGlzIGRlcHJlY2F0ZWQsIHBsZWFzZSBhY2Nlc3MgYGNvbnRleHQucm91dGVyYCB3aXRoIHlvdXIgb3duIGBjb250ZXh0VHlwZXNgLiBodHRwOi8vdGlueS5jYy9yb3V0ZXItaGlzdG9yeW1peGluJykgOiB2b2lkIDA7XG4gICAgdGhpcy5oaXN0b3J5ID0gdGhpcy5jb250ZXh0Lmhpc3Rvcnk7XG4gIH1cbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IEhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL0hpc3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1NTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb2JqZWN0ID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogVGhlIExpZmVjeWNsZSBtaXhpbiBhZGRzIHRoZSByb3V0ZXJXaWxsTGVhdmUgbGlmZWN5Y2xlIG1ldGhvZCB0byBhXG4gKiBjb21wb25lbnQgdGhhdCBtYXkgYmUgdXNlZCB0byBjYW5jZWwgYSB0cmFuc2l0aW9uIG9yIHByb21wdCB0aGUgdXNlclxuICogZm9yIGNvbmZpcm1hdGlvbi5cbiAqXG4gKiBPbiBzdGFuZGFyZCB0cmFuc2l0aW9ucywgcm91dGVyV2lsbExlYXZlIHJlY2VpdmVzIGEgc2luZ2xlIGFyZ3VtZW50OiB0aGVcbiAqIGxvY2F0aW9uIHdlJ3JlIHRyYW5zaXRpb25pbmcgdG8uIFRvIGNhbmNlbCB0aGUgdHJhbnNpdGlvbiwgcmV0dXJuIGZhbHNlLlxuICogVG8gcHJvbXB0IHRoZSB1c2VyIGZvciBjb25maXJtYXRpb24sIHJldHVybiBhIHByb21wdCBtZXNzYWdlIChzdHJpbmcpLlxuICpcbiAqIER1cmluZyB0aGUgYmVmb3JldW5sb2FkIGV2ZW50IChhc3N1bWluZyB5b3UncmUgdXNpbmcgdGhlIHVzZUJlZm9yZVVubG9hZFxuICogaGlzdG9yeSBlbmhhbmNlciksIHJvdXRlcldpbGxMZWF2ZSBkb2VzIG5vdCByZWNlaXZlIGEgbG9jYXRpb24gb2JqZWN0XG4gKiBiZWNhdXNlIGl0IGlzbid0IHBvc3NpYmxlIGZvciB1cyB0byBrbm93IHRoZSBsb2NhdGlvbiB3ZSdyZSB0cmFuc2l0aW9uaW5nXG4gKiB0by4gSW4gdGhpcyBjYXNlIHJvdXRlcldpbGxMZWF2ZSBtdXN0IHJldHVybiBhIHByb21wdCBtZXNzYWdlIHRvIHByZXZlbnRcbiAqIHRoZSB1c2VyIGZyb20gY2xvc2luZyB0aGUgd2luZG93L3RhYi5cbiAqL1xuXG52YXIgTGlmZWN5Y2xlID0ge1xuXG4gIGNvbnRleHRUeXBlczoge1xuICAgIGhpc3Rvcnk6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIC8vIE5lc3RlZCBjaGlsZHJlbiByZWNlaXZlIHRoZSByb3V0ZSBhcyBjb250ZXh0LCBlaXRoZXJcbiAgICAvLyBzZXQgYnkgdGhlIHJvdXRlIGNvbXBvbmVudCB1c2luZyB0aGUgUm91dGVDb250ZXh0IG1peGluXG4gICAgLy8gb3IgYnkgc29tZSBvdGhlciBhbmNlc3Rvci5cbiAgICByb3V0ZTogb2JqZWN0XG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgLy8gUm91dGUgY29tcG9uZW50cyByZWNlaXZlIHRoZSByb3V0ZSBvYmplY3QgYXMgYSBwcm9wLlxuICAgIHJvdXRlOiBvYmplY3RcbiAgfSxcblxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICd0aGUgYExpZmVjeWNsZWAgbWl4aW4gaXMgZGVwcmVjYXRlZCwgcGxlYXNlIHVzZSBgY29udGV4dC5yb3V0ZXIuc2V0Um91dGVMZWF2ZUhvb2socm91dGUsIGhvb2spYC4gaHR0cDovL3RpbnkuY2Mvcm91dGVyLWxpZmVjeWNsZW1peGluJykgOiB2b2lkIDA7XG4gICAgIXRoaXMucm91dGVyV2lsbExlYXZlID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ1RoZSBMaWZlY3ljbGUgbWl4aW4gcmVxdWlyZXMgeW91IHRvIGRlZmluZSBhIHJvdXRlcldpbGxMZWF2ZSBtZXRob2QnKSA6ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSkgOiB2b2lkIDA7XG5cbiAgICB2YXIgcm91dGUgPSB0aGlzLnByb3BzLnJvdXRlIHx8IHRoaXMuY29udGV4dC5yb3V0ZTtcblxuICAgICFyb3V0ZSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UsICdUaGUgTGlmZWN5Y2xlIG1peGluIG11c3QgYmUgdXNlZCBvbiBlaXRoZXIgYSkgYSA8Um91dGUgY29tcG9uZW50PiBvciAnICsgJ2IpIGEgZGVzY2VuZGFudCBvZiBhIDxSb3V0ZSBjb21wb25lbnQ+IHRoYXQgdXNlcyB0aGUgUm91dGVDb250ZXh0IG1peGluJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gICAgdGhpcy5fdW5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUgPSB0aGlzLmNvbnRleHQuaGlzdG9yeS5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIHRoaXMucm91dGVyV2lsbExlYXZlKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLl91bmxpc3RlbkJlZm9yZUxlYXZpbmdSb3V0ZSkgdGhpcy5fdW5saXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUoKTtcbiAgfVxufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTGlmZWN5Y2xlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9MaWZlY3ljbGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9yb3V0ZXJXYXJuaW5nID0gcmVxdWlyZSgnLi9yb3V0ZXJXYXJuaW5nJyk7XG5cbnZhciBfcm91dGVyV2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yb3V0ZXJXYXJuaW5nKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgb2JqZWN0ID0gX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5vYmplY3Q7XG5cbi8qKlxuICogVGhlIFJvdXRlQ29udGV4dCBtaXhpbiBwcm92aWRlcyBhIGNvbnZlbmllbnQgd2F5IGZvciByb3V0ZVxuICogY29tcG9uZW50cyB0byBzZXQgdGhlIHJvdXRlIGluIGNvbnRleHQuIFRoaXMgaXMgbmVlZGVkIGZvclxuICogcm91dGVzIHRoYXQgcmVuZGVyIGVsZW1lbnRzIHRoYXQgd2FudCB0byB1c2UgdGhlIExpZmVjeWNsZVxuICogbWl4aW4gdG8gcHJldmVudCB0cmFuc2l0aW9ucy5cbiAqL1xuXG52YXIgUm91dGVDb250ZXh0ID0ge1xuXG4gIHByb3BUeXBlczoge1xuICAgIHJvdXRlOiBvYmplY3QuaXNSZXF1aXJlZFxuICB9LFxuXG4gIGNoaWxkQ29udGV4dFR5cGVzOiB7XG4gICAgcm91dGU6IG9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgZ2V0Q2hpbGRDb250ZXh0OiBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRlOiB0aGlzLnByb3BzLnJvdXRlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdUaGUgYFJvdXRlQ29udGV4dGAgbWl4aW4gaXMgZGVwcmVjYXRlZC4gWW91IGNhbiBwcm92aWRlIGB0aGlzLnByb3BzLnJvdXRlYCBvbiBjb250ZXh0IHdpdGggeW91ciBvd24gYGNvbnRleHRUeXBlc2AuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1yb3V0ZWNvbnRleHRtaXhpbicpIDogdm9pZCAwO1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZUNvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL1JvdXRlQ29udGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX3VzZVF1ZXJpZXMgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VRdWVyaWVzJyk7XG5cbnZhciBfdXNlUXVlcmllczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91c2VRdWVyaWVzKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGNyZWF0ZUhpc3RvcnkgZnVuY3Rpb24gdGhhdCBtYXkgYmUgdXNlZCB0byBjcmVhdGVcbiAqIGhpc3Rvcnkgb2JqZWN0cyB0aGF0IGtub3cgYWJvdXQgcm91dGluZy5cbiAqXG4gKiBFbmhhbmNlcyBoaXN0b3J5IG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKlxuICogLSBsaXN0ZW4oKGVycm9yLCBuZXh0U3RhdGUpID0+IHt9KVxuICogLSBsaXN0ZW5CZWZvcmVMZWF2aW5nUm91dGUocm91dGUsIChuZXh0TG9jYXRpb24pID0+IHt9KVxuICogLSBtYXRjaChsb2NhdGlvbiwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpID0+IHt9KVxuICogLSBpc0FjdGl2ZShwYXRobmFtZSwgcXVlcnksIGluZGV4T25seT1mYWxzZSlcbiAqL1xuZnVuY3Rpb24gdXNlUm91dGVzKGNyZWF0ZUhpc3RvcnkpIHtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfcm91dGVyV2FybmluZzIuZGVmYXVsdCkoZmFsc2UsICdgdXNlUm91dGVzYCBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIGBjcmVhdGVUcmFuc2l0aW9uTWFuYWdlcmAgaW5zdGVhZC4nKSA6IHZvaWQgMDtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgcm91dGVzID0gX3JlZi5yb3V0ZXM7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ3JvdXRlcyddKTtcblxuICAgIHZhciBoaXN0b3J5ID0gKDAsIF91c2VRdWVyaWVzMi5kZWZhdWx0KShjcmVhdGVIaXN0b3J5KShvcHRpb25zKTtcbiAgICB2YXIgdHJhbnNpdGlvbk1hbmFnZXIgPSAoMCwgX2NyZWF0ZVRyYW5zaXRpb25NYW5hZ2VyMi5kZWZhdWx0KShoaXN0b3J5LCByb3V0ZXMpO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwgdHJhbnNpdGlvbk1hbmFnZXIpO1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB1c2VSb3V0ZXM7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL3VzZVJvdXRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDU1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfUm91dGVyQ29udGV4dCA9IHJlcXVpcmUoJy4vUm91dGVyQ29udGV4dCcpO1xuXG52YXIgX1JvdXRlckNvbnRleHQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfUm91dGVyQ29udGV4dCk7XG5cbnZhciBfcm91dGVyV2FybmluZyA9IHJlcXVpcmUoJy4vcm91dGVyV2FybmluZycpO1xuXG52YXIgX3JvdXRlcldhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcm91dGVyV2FybmluZyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBSb3V0aW5nQ29udGV4dCA9IF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnUm91dGluZ0NvbnRleHQnLFxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gKDAsIF9yb3V0ZXJXYXJuaW5nMi5kZWZhdWx0KShmYWxzZSwgJ2BSb3V0aW5nQ29udGV4dGAgaGFzIGJlZW4gcmVuYW1lZCB0byBgUm91dGVyQ29udGV4dGAuIFBsZWFzZSB1c2UgYGltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tIFxcJ3JlYWN0LXJvdXRlclxcJ2AuIGh0dHA6Ly90aW55LmNjL3JvdXRlci1yb3V0ZXJjb250ZXh0JykgOiB2b2lkIDA7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfUm91dGVyQ29udGV4dDIuZGVmYXVsdCwgdGhpcy5wcm9wcyk7XG4gIH1cbn0pO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0aW5nQ29udGV4dDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvUm91dGluZ0NvbnRleHQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVNZW1vcnlIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlTWVtb3J5SGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVNZW1vcnlIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlciA9IHJlcXVpcmUoJy4vY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXInKTtcblxudmFyIF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVUcmFuc2l0aW9uTWFuYWdlcik7XG5cbnZhciBfUm91dGVVdGlscyA9IHJlcXVpcmUoJy4vUm91dGVVdGlscycpO1xuXG52YXIgX1JvdXRlclV0aWxzID0gcmVxdWlyZSgnLi9Sb3V0ZXJVdGlscycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbi8qKlxuICogQSBoaWdoLWxldmVsIEFQSSB0byBiZSB1c2VkIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBtYXRjaGVzIGEgbG9jYXRpb24gdG8gYSBzZXQgb2Ygcm91dGVzIGFuZCBjYWxsc1xuICogY2FsbGJhY2soZXJyb3IsIHJlZGlyZWN0TG9jYXRpb24sIHJlbmRlclByb3BzKSB3aGVuIGZpbmlzaGVkLlxuICpcbiAqIE5vdGU6IFlvdSBwcm9iYWJseSBkb24ndCB3YW50IHRvIHVzZSB0aGlzIGluIGEgYnJvd3NlciB1bmxlc3MgeW91J3JlIHVzaW5nXG4gKiBzZXJ2ZXItc2lkZSByZW5kZXJpbmcgd2l0aCBhc3luYyByb3V0ZXMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKF9yZWYsIGNhbGxiYWNrKSB7XG4gIHZhciBoaXN0b3J5ID0gX3JlZi5oaXN0b3J5O1xuICB2YXIgcm91dGVzID0gX3JlZi5yb3V0ZXM7XG4gIHZhciBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb247XG5cbiAgdmFyIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgWydoaXN0b3J5JywgJ3JvdXRlcycsICdsb2NhdGlvbiddKTtcblxuICAhKGhpc3RvcnkgfHwgbG9jYXRpb24pID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/ICgwLCBfaW52YXJpYW50Mi5kZWZhdWx0KShmYWxzZSwgJ21hdGNoIG5lZWRzIGEgaGlzdG9yeSBvciBhIGxvY2F0aW9uJykgOiAoMCwgX2ludmFyaWFudDIuZGVmYXVsdCkoZmFsc2UpIDogdm9pZCAwO1xuXG4gIGhpc3RvcnkgPSBoaXN0b3J5ID8gaGlzdG9yeSA6ICgwLCBfY3JlYXRlTWVtb3J5SGlzdG9yeTIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHZhciB0cmFuc2l0aW9uTWFuYWdlciA9ICgwLCBfY3JlYXRlVHJhbnNpdGlvbk1hbmFnZXIyLmRlZmF1bHQpKGhpc3RvcnksICgwLCBfUm91dGVVdGlscy5jcmVhdGVSb3V0ZXMpKHJvdXRlcykpO1xuXG4gIHZhciB1bmxpc3RlbiA9IHZvaWQgMDtcblxuICBpZiAobG9jYXRpb24pIHtcbiAgICAvLyBBbGxvdyBtYXRjaCh7IGxvY2F0aW9uOiAnL3RoZS9wYXRoJywgLi4uIH0pXG4gICAgbG9jYXRpb24gPSBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBQaWNrIHVwIHRoZSBsb2NhdGlvbiBmcm9tIHRoZSBoaXN0b3J5IHZpYSBzeW5jaHJvbm91cyBoaXN0b3J5Lmxpc3RlblxuICAgIC8vIGNhbGwgaWYgbmVlZGVkLlxuICAgIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4oZnVuY3Rpb24gKGhpc3RvcnlMb2NhdGlvbikge1xuICAgICAgbG9jYXRpb24gPSBoaXN0b3J5TG9jYXRpb247XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcm91dGVyID0gKDAsIF9Sb3V0ZXJVdGlscy5jcmVhdGVSb3V0ZXJPYmplY3QpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcbiAgaGlzdG9yeSA9ICgwLCBfUm91dGVyVXRpbHMuY3JlYXRlUm91dGluZ0hpc3RvcnkpKGhpc3RvcnksIHRyYW5zaXRpb25NYW5hZ2VyKTtcblxuICB0cmFuc2l0aW9uTWFuYWdlci5tYXRjaChsb2NhdGlvbiwgZnVuY3Rpb24gKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCBuZXh0U3RhdGUpIHtcbiAgICBjYWxsYmFjayhlcnJvciwgcmVkaXJlY3RMb2NhdGlvbiwgbmV4dFN0YXRlICYmIF9leHRlbmRzKHt9LCBuZXh0U3RhdGUsIHtcbiAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXG4gICAgICByb3V0ZXI6IHJvdXRlcixcbiAgICAgIG1hdGNoQ29udGV4dDogeyBoaXN0b3J5OiBoaXN0b3J5LCB0cmFuc2l0aW9uTWFuYWdlcjogdHJhbnNpdGlvbk1hbmFnZXIsIHJvdXRlcjogcm91dGVyIH1cbiAgICB9KSk7XG5cbiAgICAvLyBEZWZlciByZW1vdmluZyB0aGUgbGlzdGVuZXIgdG8gaGVyZSB0byBwcmV2ZW50IERPTSBoaXN0b3JpZXMgZnJvbSBoYXZpbmdcbiAgICAvLyB0byB1bndpbmQgRE9NIGV2ZW50IGxpc3RlbmVycyB1bm5lY2Vzc2FyaWx5LCBpbiBjYXNlIGNhbGxiYWNrIHJlbmRlcnMgYVxuICAgIC8vIDxSb3V0ZXI+IGFuZCBhdHRhY2hlcyBhbm90aGVyIGhpc3RvcnkgbGlzdGVuZXIuXG4gICAgaWYgKHVubGlzdGVuKSB7XG4gICAgICB1bmxpc3RlbigpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydHMuZGVmYXVsdCA9IG1hdGNoO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9tYXRjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gY3JlYXRlTWVtb3J5SGlzdG9yeTtcblxudmFyIF91c2VRdWVyaWVzID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlUXVlcmllcycpO1xuXG52YXIgX3VzZVF1ZXJpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUXVlcmllcyk7XG5cbnZhciBfdXNlQmFzZW5hbWUgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VCYXNlbmFtZScpO1xuXG52YXIgX3VzZUJhc2VuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZUJhc2VuYW1lKTtcblxudmFyIF9jcmVhdGVNZW1vcnlIaXN0b3J5ID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZU1lbW9yeUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTWVtb3J5SGlzdG9yeSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbW9yeUhpc3Rvcnkob3B0aW9ucykge1xuICAvLyBzaWduYXR1cmVzIGFuZCB0eXBlIGNoZWNraW5nIGRpZmZlciBiZXR3ZWVuIGB1c2VSb3V0ZXNgIGFuZFxuICAvLyBgY3JlYXRlTWVtb3J5SGlzdG9yeWAsIGhhdmUgdG8gY3JlYXRlIGBtZW1vcnlIaXN0b3J5YCBmaXJzdCBiZWNhdXNlXG4gIC8vIGB1c2VRdWVyaWVzYCBkb2Vzbid0IHVuZGVyc3RhbmQgdGhlIHNpZ25hdHVyZVxuICB2YXIgbWVtb3J5SGlzdG9yeSA9ICgwLCBfY3JlYXRlTWVtb3J5SGlzdG9yeTIuZGVmYXVsdCkob3B0aW9ucyk7XG4gIHZhciBjcmVhdGVIaXN0b3J5ID0gZnVuY3Rpb24gY3JlYXRlSGlzdG9yeSgpIHtcbiAgICByZXR1cm4gbWVtb3J5SGlzdG9yeTtcbiAgfTtcbiAgdmFyIGhpc3RvcnkgPSAoMCwgX3VzZVF1ZXJpZXMyLmRlZmF1bHQpKCgwLCBfdXNlQmFzZW5hbWUyLmRlZmF1bHQpKGNyZWF0ZUhpc3RvcnkpKShvcHRpb25zKTtcbiAgaGlzdG9yeS5fX3YyX2NvbXBhdGlibGVfXyA9IHRydWU7XG4gIHJldHVybiBoaXN0b3J5O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVNZW1vcnlIaXN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gNTU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfUGF0aFV0aWxzID0gcmVxdWlyZSgnLi9QYXRoVXRpbHMnKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfZGVwcmVjYXRlID0gcmVxdWlyZSgnLi9kZXByZWNhdGUnKTtcblxudmFyIF9kZXByZWNhdGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVwcmVjYXRlKTtcblxuZnVuY3Rpb24gdXNlQmFzZW5hbWUoY3JlYXRlSGlzdG9yeSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgaGlzdG9yeSA9IGNyZWF0ZUhpc3Rvcnkob3B0aW9ucyk7XG5cbiAgICB2YXIgYmFzZW5hbWUgPSBvcHRpb25zLmJhc2VuYW1lO1xuXG4gICAgdmFyIGNoZWNrZWRCYXNlSHJlZiA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tCYXNlSHJlZigpIHtcbiAgICAgIGlmIChjaGVja2VkQmFzZUhyZWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBBdXRvbWF0aWNhbGx5IHVzZSB0aGUgdmFsdWUgb2YgPGJhc2UgaHJlZj4gaW4gSFRNTFxuICAgICAgLy8gZG9jdW1lbnRzIGFzIGJhc2VuYW1lIGlmIGl0J3Mgbm90IGV4cGxpY2l0bHkgZ2l2ZW4uXG4gICAgICBpZiAoYmFzZW5hbWUgPT0gbnVsbCAmJiBfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NKSB7XG4gICAgICAgIHZhciBiYXNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Jhc2UnKVswXTtcbiAgICAgICAgdmFyIGJhc2VIcmVmID0gYmFzZSAmJiBiYXNlLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG4gICAgICAgIGlmIChiYXNlSHJlZiAhPSBudWxsKSB7XG4gICAgICAgICAgYmFzZW5hbWUgPSBiYXNlSHJlZjtcblxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ0F1dG9tYXRpY2FsbHkgc2V0dGluZyBiYXNlbmFtZSB1c2luZyA8YmFzZSBocmVmPiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsICcgKyAnYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBUaGUgc2VtYW50aWNzIG9mIDxiYXNlIGhyZWY+IGFyZSAnICsgJ3N1YnRseSBkaWZmZXJlbnQgZnJvbSBiYXNlbmFtZS4gUGxlYXNlIHBhc3MgdGhlIGJhc2VuYW1lIGV4cGxpY2l0bHkgaW4gJyArICd0aGUgb3B0aW9ucyB0byBjcmVhdGVIaXN0b3J5JykgOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY2hlY2tlZEJhc2VIcmVmID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRCYXNlbmFtZShsb2NhdGlvbikge1xuICAgICAgY2hlY2tCYXNlSHJlZigpO1xuXG4gICAgICBpZiAoYmFzZW5hbWUgJiYgbG9jYXRpb24uYmFzZW5hbWUgPT0gbnVsbCkge1xuICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUuaW5kZXhPZihiYXNlbmFtZSkgPT09IDApIHtcbiAgICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZyhiYXNlbmFtZS5sZW5ndGgpO1xuICAgICAgICAgIGxvY2F0aW9uLmJhc2VuYW1lID0gYmFzZW5hbWU7XG5cbiAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUgPT09ICcnKSBsb2NhdGlvbi5wYXRobmFtZSA9ICcvJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhdGlvbi5iYXNlbmFtZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsb2NhdGlvbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pIHtcbiAgICAgIGNoZWNrQmFzZUhyZWYoKTtcblxuICAgICAgaWYgKCFiYXNlbmFtZSkgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChsb2NhdGlvbik7XG5cbiAgICAgIHZhciBwbmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgdmFyIG5vcm1hbGl6ZWRCYXNlbmFtZSA9IGJhc2VuYW1lLnNsaWNlKC0xKSA9PT0gJy8nID8gYmFzZW5hbWUgOiBiYXNlbmFtZSArICcvJztcbiAgICAgIHZhciBub3JtYWxpemVkUGF0aG5hbWUgPSBwbmFtZS5jaGFyQXQoMCkgPT09ICcvJyA/IHBuYW1lLnNsaWNlKDEpIDogcG5hbWU7XG4gICAgICB2YXIgcGF0aG5hbWUgPSBub3JtYWxpemVkQmFzZW5hbWUgKyBub3JtYWxpemVkUGF0aG5hbWU7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICAgICAgcGF0aG5hbWU6IHBhdGhuYW1lXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBhbGwgcmVhZCBtZXRob2RzIHdpdGggYmFzZW5hbWUtYXdhcmUgdmVyc2lvbnMuXG4gICAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGhvb2spIHtcbiAgICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbkJlZm9yZShmdW5jdGlvbiAobG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gICAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXShob29rLCBhZGRCYXNlbmFtZShsb2NhdGlvbiksIGNhbGxiYWNrKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkubGlzdGVuKGZ1bmN0aW9uIChsb2NhdGlvbikge1xuICAgICAgICBsaXN0ZW5lcihhZGRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcnJpZGUgYWxsIHdyaXRlIG1ldGhvZHMgd2l0aCBiYXNlbmFtZS1hd2FyZSB2ZXJzaW9ucy5cbiAgICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgICBoaXN0b3J5LnB1c2gocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlKHByZXBlbmRCYXNlbmFtZShsb2NhdGlvbikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBhdGgobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZVBhdGgocHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlSHJlZihsb2NhdGlvbikge1xuICAgICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlSHJlZihwcmVwZW5kQmFzZW5hbWUobG9jYXRpb24pKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWRkQmFzZW5hbWUoaGlzdG9yeS5jcmVhdGVMb2NhdGlvbi5hcHBseShoaXN0b3J5LCBbcHJlcGVuZEJhc2VuYW1lKGxvY2F0aW9uKV0uY29uY2F0KGFyZ3MpKSk7XG4gICAgfVxuXG4gICAgLy8gZGVwcmVjYXRlZFxuICAgIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9QYXRoVXRpbHMucGFyc2VQYXRoKHBhdGgpO1xuXG4gICAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgICB9XG5cbiAgICAvLyBkZXByZWNhdGVkXG4gICAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSBwYXRoID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICAgIHJlcGxhY2UoX2V4dGVuZHMoeyBzdGF0ZTogc3RhdGUgfSwgcGF0aCkpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgICBsaXN0ZW46IGxpc3RlbixcbiAgICAgIHB1c2g6IHB1c2gsXG4gICAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgICAgY3JlYXRlUGF0aDogY3JlYXRlUGF0aCxcbiAgICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgICBjcmVhdGVMb2NhdGlvbjogY3JlYXRlTG9jYXRpb24sXG5cbiAgICAgIHB1c2hTdGF0ZTogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXShwdXNoU3RhdGUsICdwdXNoU3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIHB1c2ggaW5zdGVhZCcpLFxuICAgICAgcmVwbGFjZVN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlcGxhY2VTdGF0ZSwgJ3JlcGxhY2VTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcmVwbGFjZSBpbnN0ZWFkJylcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gdXNlQmFzZW5hbWU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi91c2VCYXNlbmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdGF0ZVN0b3JhZ2UoZW50cmllcykge1xuICByZXR1cm4gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgcmV0dXJuIGVudHJ5LnN0YXRlO1xuICB9KS5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGVudHJ5KSB7XG4gICAgbWVtb1tlbnRyeS5rZXldID0gZW50cnkuc3RhdGU7XG4gICAgcmV0dXJuIG1lbW87XG4gIH0sIHt9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVtb3J5SGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShvcHRpb25zKSkge1xuICAgIG9wdGlvbnMgPSB7IGVudHJpZXM6IG9wdGlvbnMgfTtcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICBvcHRpb25zID0geyBlbnRyaWVzOiBbb3B0aW9uc10gfTtcbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogc2F2ZVN0YXRlLFxuICAgIGdvOiBnb1xuICB9KSk7XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucztcbiAgdmFyIGVudHJpZXMgPSBfb3B0aW9ucy5lbnRyaWVzO1xuICB2YXIgY3VycmVudCA9IF9vcHRpb25zLmN1cnJlbnQ7XG5cbiAgaWYgKHR5cGVvZiBlbnRyaWVzID09PSAnc3RyaW5nJykge1xuICAgIGVudHJpZXMgPSBbZW50cmllc107XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkoZW50cmllcykpIHtcbiAgICBlbnRyaWVzID0gWycvJ107XG4gIH1cblxuICBlbnRyaWVzID0gZW50cmllcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgdmFyIGtleSA9IGhpc3RvcnkuY3JlYXRlS2V5KCk7XG5cbiAgICBpZiAodHlwZW9mIGVudHJ5ID09PSAnc3RyaW5nJykgcmV0dXJuIHsgcGF0aG5hbWU6IGVudHJ5LCBrZXk6IGtleSB9O1xuXG4gICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gJ29iamVjdCcgJiYgZW50cnkpIHJldHVybiBfZXh0ZW5kcyh7fSwgZW50cnksIHsga2V5OiBrZXkgfSk7XG5cbiAgICAhZmFsc2UgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ1VuYWJsZSB0byBjcmVhdGUgaGlzdG9yeSBlbnRyeSBmcm9tICVzJywgZW50cnkpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG4gIH0pO1xuXG4gIGlmIChjdXJyZW50ID09IG51bGwpIHtcbiAgICBjdXJyZW50ID0gZW50cmllcy5sZW5ndGggLSAxO1xuICB9IGVsc2Uge1xuICAgICEoY3VycmVudCA+PSAwICYmIGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0N1cnJlbnQgaW5kZXggbXVzdCBiZSA+PSAwIGFuZCA8ICVzLCB3YXMgJXMnLCBlbnRyaWVzLmxlbmd0aCwgY3VycmVudCkgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBzdG9yYWdlID0gY3JlYXRlU3RhdGVTdG9yYWdlKGVudHJpZXMpO1xuXG4gIGZ1bmN0aW9uIHNhdmVTdGF0ZShrZXksIHN0YXRlKSB7XG4gICAgc3RvcmFnZVtrZXldID0gc3RhdGU7XG4gIH1cblxuICBmdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gICAgcmV0dXJuIHN0b3JhZ2Vba2V5XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbigpIHtcbiAgICB2YXIgZW50cnkgPSBlbnRyaWVzW2N1cnJlbnRdO1xuICAgIHZhciBiYXNlbmFtZSA9IGVudHJ5LmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGVudHJ5LnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBlbnRyeS5zZWFyY2g7XG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIChzZWFyY2ggfHwgJycpO1xuXG4gICAgdmFyIGtleSA9IHVuZGVmaW5lZCxcbiAgICAgICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGVudHJ5LmtleSkge1xuICAgICAga2V5ID0gZW50cnkua2V5O1xuICAgICAgc3RhdGUgPSByZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcbiAgICAgIHN0YXRlID0gbnVsbDtcbiAgICAgIGVudHJ5LmtleSA9IGtleTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfUGF0aFV0aWxzLnBhcnNlUGF0aChwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbkdvKG4pIHtcbiAgICB2YXIgaW5kZXggPSBjdXJyZW50ICsgbjtcbiAgICByZXR1cm4gaW5kZXggPj0gMCAmJiBpbmRleCA8IGVudHJpZXMubGVuZ3RoO1xuICB9XG5cbiAgZnVuY3Rpb24gZ28obikge1xuICAgIGlmIChuKSB7XG4gICAgICBpZiAoIWNhbkdvKG4pKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Nhbm5vdCBnbyglcykgdGhlcmUgaXMgbm90IGVub3VnaCBoaXN0b3J5JywgbikgOiB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY3VycmVudCArPSBuO1xuXG4gICAgICB2YXIgY3VycmVudExvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG5cbiAgICAgIC8vIGNoYW5nZSBhY3Rpb24gdG8gUE9QXG4gICAgICBoaXN0b3J5LnRyYW5zaXRpb25UbyhfZXh0ZW5kcyh7fSwgY3VycmVudExvY2F0aW9uLCB7IGFjdGlvbjogX0FjdGlvbnMuUE9QIH0pKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgc3dpdGNoIChsb2NhdGlvbi5hY3Rpb24pIHtcbiAgICAgIGNhc2UgX0FjdGlvbnMuUFVTSDpcbiAgICAgICAgY3VycmVudCArPSAxO1xuXG4gICAgICAgIC8vIGlmIHdlIGFyZSBub3Qgb24gdGhlIHRvcCBvZiBzdGFja1xuICAgICAgICAvLyByZW1vdmUgcmVzdCBhbmQgcHVzaCBuZXdcbiAgICAgICAgaWYgKGN1cnJlbnQgPCBlbnRyaWVzLmxlbmd0aCkgZW50cmllcy5zcGxpY2UoY3VycmVudCk7XG5cbiAgICAgICAgZW50cmllcy5wdXNoKGxvY2F0aW9uKTtcbiAgICAgICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgX0FjdGlvbnMuUkVQTEFDRTpcbiAgICAgICAgZW50cmllc1tjdXJyZW50XSA9IGxvY2F0aW9uO1xuICAgICAgICBzYXZlU3RhdGUobG9jYXRpb24ua2V5LCBsb2NhdGlvbi5zdGF0ZSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBoaXN0b3J5O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVNZW1vcnlIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGlzdG9yeS9saWIvY3JlYXRlTWVtb3J5SGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdXNlUm91dGVySGlzdG9yeTtcblxudmFyIF91c2VRdWVyaWVzID0gcmVxdWlyZSgnaGlzdG9yeS9saWIvdXNlUXVlcmllcycpO1xuXG52YXIgX3VzZVF1ZXJpZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXNlUXVlcmllcyk7XG5cbnZhciBfdXNlQmFzZW5hbWUgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi91c2VCYXNlbmFtZScpO1xuXG52YXIgX3VzZUJhc2VuYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZUJhc2VuYW1lKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gdXNlUm91dGVySGlzdG9yeShjcmVhdGVIaXN0b3J5KSB7XG4gIHJldHVybiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBoaXN0b3J5ID0gKDAsIF91c2VRdWVyaWVzMi5kZWZhdWx0KSgoMCwgX3VzZUJhc2VuYW1lMi5kZWZhdWx0KShjcmVhdGVIaXN0b3J5KSkob3B0aW9ucyk7XG4gICAgaGlzdG9yeS5fX3YyX2NvbXBhdGlibGVfXyA9IHRydWU7XG4gICAgcmV0dXJuIGhpc3Rvcnk7XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1yb3V0ZXIvbGliL3VzZVJvdXRlckhpc3RvcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA1NjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX1JvdXRlckNvbnRleHQgPSByZXF1aXJlKCcuL1JvdXRlckNvbnRleHQnKTtcblxudmFyIF9Sb3V0ZXJDb250ZXh0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1JvdXRlckNvbnRleHQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIHdpdGhDb250ZXh0ID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtKSB7XG4gICAgcmV0dXJuIG0ucmVuZGVyUm91dGVyQ29udGV4dDtcbiAgfSkuZmlsdGVyKGZ1bmN0aW9uIChmKSB7XG4gICAgcmV0dXJuIGY7XG4gIH0pO1xuICB2YXIgd2l0aENvbXBvbmVudCA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobSkge1xuICAgIHJldHVybiBtLnJlbmRlclJvdXRlQ29tcG9uZW50O1xuICB9KS5maWx0ZXIoZnVuY3Rpb24gKGYpIHtcbiAgICByZXR1cm4gZjtcbiAgfSk7XG4gIHZhciBtYWtlQ3JlYXRlRWxlbWVudCA9IGZ1bmN0aW9uIG1ha2VDcmVhdGVFbGVtZW50KCkge1xuICAgIHZhciBiYXNlQ3JlYXRlRWxlbWVudCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IF9yZWFjdC5jcmVhdGVFbGVtZW50IDogYXJndW1lbnRzWzBdO1xuICAgIHJldHVybiBmdW5jdGlvbiAoQ29tcG9uZW50LCBwcm9wcykge1xuICAgICAgcmV0dXJuIHdpdGhDb21wb25lbnQucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHByZXZpb3VzLCByZW5kZXJSb3V0ZUNvbXBvbmVudCkge1xuICAgICAgICByZXR1cm4gcmVuZGVyUm91dGVDb21wb25lbnQocHJldmlvdXMsIHByb3BzKTtcbiAgICAgIH0sIGJhc2VDcmVhdGVFbGVtZW50KENvbXBvbmVudCwgcHJvcHMpKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAocmVuZGVyUHJvcHMpIHtcbiAgICByZXR1cm4gd2l0aENvbnRleHQucmVkdWNlUmlnaHQoZnVuY3Rpb24gKHByZXZpb3VzLCByZW5kZXJSb3V0ZXJDb250ZXh0KSB7XG4gICAgICByZXR1cm4gcmVuZGVyUm91dGVyQ29udGV4dChwcmV2aW91cywgcmVuZGVyUHJvcHMpO1xuICAgIH0sIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9Sb3V0ZXJDb250ZXh0Mi5kZWZhdWx0LCBfZXh0ZW5kcyh7fSwgcmVuZGVyUHJvcHMsIHtcbiAgICAgIGNyZWF0ZUVsZW1lbnQ6IG1ha2VDcmVhdGVFbGVtZW50KHJlbmRlclByb3BzLmNyZWF0ZUVsZW1lbnQpXG4gICAgfSkpKTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXJvdXRlci9saWIvYXBwbHlSb3V0ZXJNaWRkbGV3YXJlLmpzXG4gKiogbW9kdWxlIGlkID0gNTYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlQnJvd3Nlckhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUJyb3dzZXJIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUJyb3dzZXJIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVSb3V0ZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlUm91dGVySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSb3V0ZXJIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVSb3V0ZXJIaXN0b3J5Mi5kZWZhdWx0KShfY3JlYXRlQnJvd3Nlckhpc3RvcnkyLmRlZmF1bHQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9icm93c2VySGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX1BhdGhVdGlscyA9IHJlcXVpcmUoJy4vUGF0aFV0aWxzJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVET01IaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVET01IaXN0b3J5KTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuZCByZXR1cm5zIGEgaGlzdG9yeSBvYmplY3QgdGhhdCB1c2VzIEhUTUw1J3MgaGlzdG9yeSBBUElcbiAqIChwdXNoU3RhdGUsIHJlcGxhY2VTdGF0ZSwgYW5kIHRoZSBwb3BzdGF0ZSBldmVudCkgdG8gbWFuYWdlIGhpc3RvcnkuXG4gKiBUaGlzIGlzIHRoZSByZWNvbW1lbmRlZCBtZXRob2Qgb2YgbWFuYWdpbmcgaGlzdG9yeSBpbiBicm93c2VycyBiZWNhdXNlXG4gKiBpdCBwcm92aWRlcyB0aGUgY2xlYW5lc3QgVVJMcy5cbiAqXG4gKiBOb3RlOiBJbiBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBmdWxsXG4gKiBwYWdlIHJlbG9hZHMgd2lsbCBiZSB1c2VkIHRvIHByZXNlcnZlIFVSTHMuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJyb3dzZXJIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdCcm93c2VyIGhpc3RvcnkgbmVlZHMgYSBET00nKSA6IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UpIDogdW5kZWZpbmVkO1xuXG4gIHZhciBmb3JjZVJlZnJlc2ggPSBvcHRpb25zLmZvcmNlUmVmcmVzaDtcblxuICB2YXIgaXNTdXBwb3J0ZWQgPSBfRE9NVXRpbHMuc3VwcG9ydHNIaXN0b3J5KCk7XG4gIHZhciB1c2VSZWZyZXNoID0gIWlzU3VwcG9ydGVkIHx8IGZvcmNlUmVmcmVzaDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oaGlzdG9yeVN0YXRlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBoaXN0b3J5U3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX1BhdGhVdGlscy5wYXJzZVBhdGgocGF0aCk7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbihfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IHN0YXRlIH0pLCB1bmRlZmluZWQsIGtleSk7XG4gIH1cblxuICBmdW5jdGlvbiBzdGFydFBvcFN0YXRlTGlzdGVuZXIoX3JlZikge1xuICAgIHZhciB0cmFuc2l0aW9uVG8gPSBfcmVmLnRyYW5zaXRpb25UbztcblxuICAgIGZ1bmN0aW9uIHBvcFN0YXRlTGlzdGVuZXIoZXZlbnQpIHtcbiAgICAgIGlmIChldmVudC5zdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47IC8vIElnbm9yZSBleHRyYW5lb3VzIHBvcHN0YXRlIGV2ZW50cyBpbiBXZWJLaXQuXG5cbiAgICAgIHRyYW5zaXRpb25UbyhnZXRDdXJyZW50TG9jYXRpb24oZXZlbnQuc3RhdGUpKTtcbiAgICB9XG5cbiAgICBfRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIF9ET01VdGlscy5yZW1vdmVFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpbmlzaFRyYW5zaXRpb24obG9jYXRpb24pIHtcbiAgICB2YXIgYmFzZW5hbWUgPSBsb2NhdGlvbi5iYXNlbmFtZTtcbiAgICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICB2YXIgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuICAgIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaDtcbiAgICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZTtcbiAgICB2YXIgYWN0aW9uID0gbG9jYXRpb24uYWN0aW9uO1xuICAgIHZhciBrZXkgPSBsb2NhdGlvbi5rZXk7XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlKGtleSwgc3RhdGUpO1xuXG4gICAgdmFyIHBhdGggPSAoYmFzZW5hbWUgfHwgJycpICsgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoO1xuICAgIHZhciBoaXN0b3J5U3RhdGUgPSB7XG4gICAgICBrZXk6IGtleVxuICAgIH07XG5cbiAgICBpZiAoYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGg7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJFUExBQ0VcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHBhdGgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBoaXN0b3J5ID0gX2NyZWF0ZURPTUhpc3RvcnkyWydkZWZhdWx0J10oX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb246IGdldEN1cnJlbnRMb2NhdGlvbixcbiAgICBmaW5pc2hUcmFuc2l0aW9uOiBmaW5pc2hUcmFuc2l0aW9uLFxuICAgIHNhdmVTdGF0ZTogX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGVcbiAgfSkpO1xuXG4gIHZhciBsaXN0ZW5lckNvdW50ID0gMCxcbiAgICAgIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW5CZWZvcmUobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgdmFyIHVubGlzdGVuID0gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVubGlzdGVuKCk7XG5cbiAgICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gICAgfTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICBoaXN0b3J5LnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaGlzdG9yeS51bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vayk7XG5cbiAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayxcbiAgICB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9va1xuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlQnJvd3Nlckhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAoY3JlYXRlSGlzdG9yeSkge1xuICB2YXIgaGlzdG9yeSA9IHZvaWQgMDtcbiAgaWYgKGNhblVzZURPTSkgaGlzdG9yeSA9ICgwLCBfdXNlUm91dGVySGlzdG9yeTIuZGVmYXVsdCkoY3JlYXRlSGlzdG9yeSkoKTtcbiAgcmV0dXJuIGhpc3Rvcnk7XG59O1xuXG52YXIgX3VzZVJvdXRlckhpc3RvcnkgPSByZXF1aXJlKCcuL3VzZVJvdXRlckhpc3RvcnknKTtcblxudmFyIF91c2VSb3V0ZXJIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VzZVJvdXRlckhpc3RvcnkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9jcmVhdGVSb3V0ZXJIaXN0b3J5LmpzXG4gKiogbW9kdWxlIGlkID0gNTY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfY3JlYXRlSGFzaEhpc3RvcnkgPSByZXF1aXJlKCdoaXN0b3J5L2xpYi9jcmVhdGVIYXNoSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhhc2hIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhhc2hIaXN0b3J5KTtcblxudmFyIF9jcmVhdGVSb3V0ZXJIaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVSb3V0ZXJIaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlUm91dGVySGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVSb3V0ZXJIaXN0b3J5KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gKDAsIF9jcmVhdGVSb3V0ZXJIaXN0b3J5Mi5kZWZhdWx0KShfY3JlYXRlSGFzaEhpc3RvcnkyLmRlZmF1bHQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtcm91dGVyL2xpYi9oYXNoSGlzdG9yeS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSW52ZXJzZUJ1dHRvblwiOlwiQnV0dG9uX19JbnZlcnNlQnV0dG9uX19fM09RWFVcIixcIkludmVyc2VCdXR0b25fYWNjZW50MVwiOlwiQnV0dG9uX19JbnZlcnNlQnV0dG9uX2FjY2VudDFfX19hVklXT1wiLFwiSW52ZXJzZUJ1dHRvbl9hY2NlbnQyXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fYWNjZW50Ml9fXzNBT202XCIsXCJJbnZlcnNlQnV0dG9uX2Vycm9yXCI6XCJCdXR0b25fX0ludmVyc2VCdXR0b25fZXJyb3JfX18zaWRCWlwiLFwiQnV0dG9uXCI6XCJCdXR0b25fX0J1dHRvbl9fX1FJN2IyXCIsXCJCdXR0b25fYWNjZW50MVwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50MV9fXzFkZmh3XCIsXCJCdXR0b25fYWNjZW50MlwiOlwiQnV0dG9uX19CdXR0b25fYWNjZW50Ml9fX1puOHo5XCIsXCJCdXR0b25fZXJyb3JcIjpcIkJ1dHRvbl9fQnV0dG9uX2Vycm9yX19fM1BTVVhcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0J1dHRvbi9CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWRnZS5jc3MnXG5cbmNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIHRoZW1lID0gJ2RlZmF1bHQnLFxuICBzbWFsbCA9IGZhbHNlXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBsaW5lSGVpZ2h0OiBgJHszICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgaWYgKHNtYWxsKSB7XG4gICAgc3R5bGUubGluZUhlaWdodCA9IGAkezIuNSAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5CYWRnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnYWNjZW50MSc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX2FjY2VudDEpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2FjY2VudDInOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9hY2NlbnQyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdhY2NlbnQzJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfYWNjZW50MylcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9lcnJvcilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnc3VjY2Vzcyc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX3N1Y2Nlc3MpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX2RlZmF1bHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT57bGFiZWx9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0JhZGdlL0JhZGdlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJhZGdlXCI6XCJCYWRnZV9fQmFkZ2VfX19Ncnc5blwiLFwiQmFkZ2VfZGVmYXVsdFwiOlwiQmFkZ2VfX0JhZGdlX2RlZmF1bHRfX18xUGJfaVwiLFwiQmFkZ2VfYWNjZW50MVwiOlwiQmFkZ2VfX0JhZGdlX2FjY2VudDFfX18zMDEwbFwiLFwiQmFkZ2VfYWNjZW50MlwiOlwiQmFkZ2VfX0JhZGdlX2FjY2VudDJfX18xc0hIY1wiLFwiQmFkZ2VfZXJyb3JcIjpcIkJhZGdlX19CYWRnZV9lcnJvcl9fX3hMT3hhXCIsXCJCYWRnZV9zdWNjZXNzXCI6XCJCYWRnZV9fQmFkZ2Vfc3VjY2Vzc19fXzNfdzlEXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9CYWRnZS9CYWRnZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCdcbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SW5wdXQuY3NzJ1xuXG5jbGFzcyBUZXh0SW5wdXQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuY2hhbmdlQ2FsbGJhY2sgPSB0aGlzLmNoYW5nZUNhbGxiYWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIGNoYW5nZUNhbGxiYWNrICgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2VsZW1lbnQudmFsdWVcbiAgICBjb25zdCB7b25DaGFuZ2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgb25DaGFuZ2UodmFsdWUpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtsYWJlbCwgZXJyb3IsIHZhbHVlLCBwbGFjZWhvbGRlciwgdHlwZSwgZGlzYWJsZWQgPSBmYWxzZX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3Qge211bHRpcGxpZXJzID0ge1xuICAgICAgcGFkZGluZzoge1xuICAgICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgICAgaG9yaXpvbnRhbDogMlxuICAgICAgfVxuICAgIH19ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWx9cmVtICR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWx9cmVtYFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMuVGV4dElucHV0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8SW5wdXRMYWJlbCBsYWJlbD17bGFiZWx9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlRleHRJbnB1dF9faW5wdXR9ICR7ZXJyb3IgPyBzdHlsZXMuVGV4dElucHV0X19pbnB1dF9lcnJvciA6IG51bGx9YH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlQ2FsbGJhY2t9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfSAvPlxuICAgICAgPC9sYWJlbD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9UZXh0SW5wdXQvVGV4dElucHV0LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0lucHV0TGFiZWwuY3NzJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgSW5wdXRMYWJlbCA9ICh7XG4gIGxhYmVsLFxuICBlcnJvclxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuSW5wdXRMYWJlbH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dExhYmVsX2Vycm9yIDogJyd9YH0+XG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRMYWJlbF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICB7ZXJyb3JcbiAgICAgICAgPyA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dExhYmVsX19lcnJvcn0+e2Vycm9yfTwvZGl2PlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0TGFiZWxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0lucHV0TGFiZWwvSW5wdXRMYWJlbC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dExhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19fMUNlbUlcIixcIklucHV0TGFiZWxfX2xhYmVsXCI6XCJJbnB1dExhYmVsX19JbnB1dExhYmVsX19sYWJlbF9fXzJZeV9QXCIsXCJJbnB1dExhYmVsX19lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9fZXJyb3JfX18yTUZOZFwiLFwiSW5wdXRMYWJlbF9lcnJvclwiOlwiSW5wdXRMYWJlbF9fSW5wdXRMYWJlbF9lcnJvcl9fXzNFcDVxXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dExhYmVsL0lucHV0TGFiZWwuY3NzXG4gKiogbW9kdWxlIGlkID0gNTczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJUZXh0SW5wdXRcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X19fMUFDR1lcIixcIlRleHRJbnB1dF9faW5wdXRcIjpcIlRleHRJbnB1dF9fVGV4dElucHV0X19pbnB1dF9fXzFyeWYzXCIsXCJUZXh0SW5wdXRfX2lucHV0X2Vycm9yXCI6XCJUZXh0SW5wdXRfX1RleHRJbnB1dF9faW5wdXRfZXJyb3JfX18zcFRKelwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvVGV4dElucHV0L1RleHRJbnB1dC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnLi4vSW5wdXRMYWJlbCdcbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0QXJlYS5jc3MnXG5cbmNsYXNzIFRleHRBcmVhIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNoYW5nZSAoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLl9lbGVtZW50LnZhbHVlXG4gICAgY29uc3Qge2NoYW5nZUNhbGxiYWNrfSA9IHRoaXMucHJvcHNcblxuICAgIGNoYW5nZUNhbGxiYWNrKHZhbHVlKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7bGFiZWwsIGVycm9yLCB2YWx1ZSwgcGxhY2Vob2xkZXIsIGRpc2FibGVkID0gZmFsc2V9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHttdWx0aXBsaWVycyA9IHtcbiAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgdmVydGljYWw6IDEsXG4gICAgICAgIGhvcml6b250YWw6IDJcbiAgICAgIH1cbiAgICB9fSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgcGFkZGluZzogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsfSAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsfWBcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLlRleHRBcmVhfT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8SW5wdXRMYWJlbCBsYWJlbD17bGFiZWx9IGVycm9yPXtlcnJvcn0gLz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIDx0ZXh0YXJlYSBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5UZXh0QXJlYV9faW5wdXR9ICR7ZXJyb3IgPyBzdHlsZXMuVGV4dEFyZWFfX2lucHV0X2Vycm9yIDogbnVsbH1gfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICByb3dzPXs1fVxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9PjwvdGV4dGFyZWE+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUZXh0QXJlYVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvVGV4dEFyZWEvVGV4dEFyZWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGV4dEFyZWFcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9fXzE5aXA3XCIsXCJUZXh0QXJlYV9faW5wdXRcIjpcIlRleHRBcmVhX19UZXh0QXJlYV9faW5wdXRfX194NUI0SVwiLFwiVGV4dEFyZWFfX2lucHV0X2Vycm9yXCI6XCJUZXh0QXJlYV9fVGV4dEFyZWFfX2lucHV0X2Vycm9yX19fMzY5Z1VcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1RleHRBcmVhL1RleHRBcmVhLmNzc1xuICoqIG1vZHVsZSBpZCA9IDU3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIGZyb20gJ3JlYWN0LWFkZG9ucy1jc3MtdHJhbnNpdGlvbi1ncm91cCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcbmltcG9ydCB7QmxvY2t9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IEFsZXJ0ID0gKHtcbiAgbWVzc2FnZSxcbiAgdGhlbWUgPSAnZGVmYXVsdCcsXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBtZXNzYWdlU3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VDbGFzc05hbWVzID0gW3N0eWxlcy5BbGVydF9fbWVzc2FnZV1cblxuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZXJyb3InOlxuICAgICAgbWVzc2FnZUNsYXNzTmFtZXMucHVzaChzdHlsZXMuQWxlcnRfX21lc3NhZ2VfZXJyb3IpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9kZWZhdWx0KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFsZXJ0fT5cbiAgICAgIDxSZWFjdENTU1RyYW5zaXRpb25Hcm91cCB0cmFuc2l0aW9uTmFtZT1cImFsZXJ0XCIgdHJhbnNpdGlvbkVudGVyVGltZW91dD17MjAwfSB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsyMDB9PlxuICAgICAgICB7bWVzc2FnZVxuICAgICAgICAgID8gPEJsb2NrPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17bWVzc2FnZVN0eWxlfSBjbGFzc05hbWU9e21lc3NhZ2VDbGFzc05hbWVzLmpvaW4oJyAnKX0+e21lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cbiAgICAgICAgICA6IG51bGxcbiAgICAgICAgfVxuICAgICAgPC9SZWFjdENTU1RyYW5zaXRpb25Hcm91cD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbGVydFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQWxlcnRcIjpcIkFsZXJ0X19BbGVydF9fXzM3X1FDXCIsXCJBbGVydF9fbWVzc2FnZVwiOlwiQWxlcnRfX0FsZXJ0X19tZXNzYWdlX19fMndDWkZcIixcIkFsZXJ0X19tZXNzYWdlX2RlZmF1bHRcIjpcIkFsZXJ0X19BbGVydF9fbWVzc2FnZV9kZWZhdWx0X19fbl9SOUNcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wiLFwiYWxlcnQtZW50ZXJcIjpcIkFsZXJ0X19hbGVydC1lbnRlcl9fX0s2SmRMXCIsXCJhbGVydC1lbnRlci1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1lbnRlci1hY3RpdmVfX18zdmxDd1wiLFwiYWxlcnQtbGVhdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZV9fXzJQcFlUXCIsXCJhbGVydC1sZWF2ZS1hY3RpdmVcIjpcIkFsZXJ0X19hbGVydC1sZWF2ZS1hY3RpdmVfX18yaGFfUVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dC5jc3MnXG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7dmFsdWUsIG9uQ2hhbmdlLCBsYWJlbCA9IG51bGwsIHBsYWNlaG9sZGVyID0gJycsXG4gICAgICBwcmVmaXggPSBudWxsLCB0eXBlID0gJ3RleHQnLCBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgZXJyb3IgPSBudWxsfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBsYWJlbEVsID0gJydcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGxhYmVsRWwgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2xhYmVsfT57bGFiZWx9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgbGV0IGVycm9yRWwgPSAnJ1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JFbCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICBsZXQgcHJlZml4RWwgPSAnJ1xuICAgIGlmIChwcmVmaXgpIHtcbiAgICAgIHByZWZpeEVsID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLklucHV0X19wcmVmaXh9PntwcmVmaXh9PC9kaXY+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlcy5JbnB1dH0gJHtlcnJvciA/IHN0eWxlcy5JbnB1dF9lcnJvciA6ICcnfWB9PlxuICAgICAgICB7bGFiZWxFbH1cbiAgICAgICAge3ByZWZpeEVsfVxuICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX1cbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQudmFsdWUpfSAvPlxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fczY3TjBcIixcIklucHV0X19pbnB1dFwiOlwiSW5wdXRfX0lucHV0X19pbnB1dF9fX3diMVBEXCIsXCJJbnB1dF9fbGFiZWxcIjpcIklucHV0X19JbnB1dF9fbGFiZWxfX185SkRVdVwiLFwiSW5wdXRfX3ByZWZpeFwiOlwiSW5wdXRfX0lucHV0X19wcmVmaXhfX18zbnZMOVwiLFwiSW5wdXRfX2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfX2Vycm9yX19fZmdrQ0RcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18ySllHeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hlY2tlZCwgb25DaGFuZ2UsIGxhYmVsID0gZmFsc2UsIGRpc2FibGVkID0gZmFsc2V9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGxhYmVsRWwgPSAnJ1xuICAgIGlmIChsYWJlbCkge1xuICAgICAgbGFiZWxFbCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveH0+XG4gICAgICAgIHtsYWJlbEVsfVxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQuY2hlY2tlZCl9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tib3hcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkNoZWNrYm94XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX18xSllRZ1wiLFwiQ2hlY2tib3hfX2lucHV0XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2lucHV0X19fMW5ETVZcIixcIkNoZWNrYm94X19sYWJlbFwiOlwiQ2hlY2tib3hfX0NoZWNrYm94X19sYWJlbF9fXzNPQlVkXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1ODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgRWRpdG9yID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+SSBhbSBlZGl0b3IhPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vZGFsV2luZG93LmNzcydcbmltcG9ydCB7RmxleH0gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuY29uc3QgTW9kYWxXaW5kb3cgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgd2lkdGg6IDQwXG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgd2lkdGg6IGAke211bHRpcGxpZXJzLndpZHRoICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsfT5cbiAgICAgIDxGbGV4IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiPlxuICAgICAgICA8c2VjdGlvbiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93fT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvRmxleD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0hlYWRlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMixcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19oZWFkZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvaGVhZGVyPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Qm9keSA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMyxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19fYm9keX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9tYWluPlxuICApXG59XG5cbmNvbnN0IE1vZGFsV2luZG93Rm9vdGVyID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHBhZGRpbmc6IHtcbiAgICAgIHZlcnRpY2FsOiAxLFxuICAgICAgaG9yaXpvbnRhbDogMlxuICAgIH1cbiAgfVxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nOiBgJHttdWx0aXBsaWVycy5wYWRkaW5nLnZlcnRpY2FsICogYmFzZWxpbmV9cmVtICR7bXVsdGlwbGllcnMucGFkZGluZy5ob3Jpem9udGFsICogYmFzZWxpbmV9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9mb290ZXI+XG4gIClcbn1cblxuZXhwb3J0IHtNb2RhbFdpbmRvdywgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dGb290ZXJ9XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJNb2RhbFwiOlwiTW9kYWxXaW5kb3dfX01vZGFsX19fMmtsY2dcIixcIk1vZGFsV2luZG93XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX18ydFZ5WlwiLFwiTW9kYWxXaW5kb3dfX2hlYWRlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19oZWFkZXJfX18xUXJXSFwiLFwiTW9kYWxXaW5kb3dfX2JvZHlcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19fYm9keV9fXzNRdVFoXCIsXCJNb2RhbFdpbmRvd19fZm9vdGVyXCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2Zvb3Rlcl9fXzJJMFRGXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbFdpbmRvdy9Nb2RhbFdpbmRvdy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1OTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IExPR09VVFxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyLFxuICB0b2tlblxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogTE9HSU4sXG4gICAgdXNlcixcbiAgICB0b2tlblxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAoXG4gIGVtYWlsLFxuICBwYXNzd29yZFxuKSA9PiB7XG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdEF1dGgoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXV0aC9hdXRoZW50aWNhdGVgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyLCBqc29uLmRhdGEudG9rZW4pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge0FsZXJ0fSBmcm9tICcuLi9VSSdcblxuY29uc3QgRmxhc2hNZXNzYWdlID0gKHtcbiAgbWVzc2FnZSxcbiAgdHlwZVxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxBbGVydCBtZXNzYWdlPXttZXNzYWdlfSB0aGVtZT17dHlwZX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmZsYXNoLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBzdGF0ZS5mbGFzaC50eXBlXG4gICAgfVxuICB9XG4pKEZsYXNoTWVzc2FnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2LmNzcydcblxuY29uc3QgTmF2ID0gKHtcbiAgaXRlbXNcbn0pID0+IHtcbiAgY29uc3QgbmF2SXRlbXMgPSBpdGVtcy5tYXAoaSA9PlxuICAgIDxMaW5rIGtleT17aS5pZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLk5hdl9faXRlbX1cbiAgICAgIGFjdGl2ZUNsYXNzTmFtZT17c3R5bGVzLk5hdl9faXRlbV9hY3RpdmV9XG4gICAgICB0bz17YCR7QU5USVZBWF9BRE1JTl9QUkVGSVh9LyR7aS5pZH1gfT57aS5sYWJlbH08L0xpbms+XG4gIClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cbiAgICAgIHtuYXZJdGVtc31cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05hdi9OYXYuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmF2XCI6XCJOYXZfX05hdl9fXzNQeXllXCIsXCJOYXZfX2l0ZW1cIjpcIk5hdl9fTmF2X19pdGVtX19fNUhidUVcIixcIk5hdl9faXRlbV9hY3RpdmVcIjpcIk5hdl9fTmF2X19pdGVtX2FjdGl2ZV9fXzJxNHRUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtCbG9jaywgTGlzdCwgTGlzdEl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge2xvZ091dH0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5pbXBvcnQge2ZsYXNoTWVzc2FnZX0gZnJvbSAnLi4vLi4vc3RvcmUvZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0N1cnJlbnRVc2VyLmNzcydcblxuY2xhc3MgQ3VycmVudFVzZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMubG9nb3V0ID0gdGhpcy5sb2dvdXQuYmluZCh0aGlzKVxuICB9XG5cbiAgbG9nb3V0ICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0JywgJ2xvZycpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7dXNlcn0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLkN1cnJlbnRVc2VyfT5cbiAgICAgICAgPExpc3Qgbj17Mn0+XG4gICAgICAgICAgPExpc3RJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuQ3VycmVudFVzZXJfX3RpdGxlfT5Mb2dnZWQgaW4gYXM8L2gxPlxuICAgICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DdXJyZW50VXNlcl9fbmFtZX0+XG4gICAgICAgICAgICAgIHt1c2VyLm5hbWV9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuXG4gICAgICAgICAgPExpc3RJdGVtIG49ezJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdGhlbWU9XCJhY2NlbnQxXCIgb25DbGljaz17dGhpcy5sb2dvdXR9PkxvZyBvdXQ8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L2FzaWRlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHN0YXRlLmF1dGgudXNlciA/IHN0YXRlLmF1dGgudXNlciA6IHt9XG4gICAgfVxuICB9XG4pKEN1cnJlbnRVc2VyKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuanN4XG4gKiovIiwiZXhwb3J0IGNvbnN0IFNFVF9NRVNTQUdFID0gJ1NFVF9NRVNTQUdFJ1xuZXhwb3J0IGNvbnN0IFVOU0VUX01FU1NBR0UgPSAnVU5TRVRfTUVTU0FHRSdcblxuY29uc3Qgc2V0TWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGUsXG4gIHRpbWVvdXRJZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX01FU1NBR0UsXG4gICAgbWVzc2FnZSxcbiAgICBtZXNzYWdlVHlwZSxcbiAgICB0aW1lb3V0SWRcbiAgfVxufVxuXG5jb25zdCB1bnNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBVTlNFVF9NRVNTQUdFXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZsYXNoTWVzc2FnZSA9IChcbiAgbWVzc2FnZSxcbiAgbWVzc2FnZVR5cGVcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRpc3BhdGNoKHVuc2V0TWVzc2FnZSgpKVxuICAgIH0sIDIwMDApXG5cbiAgICBkaXNwYXRjaChzZXRNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2VUeXBlLCB0KSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2ZsYXNoQWN0aW9ucy5qc1xuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkN1cnJlbnRVc2VyXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX18xV2FVNlwiLFwiQ3VycmVudFVzZXJfX3RpdGxlXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX3RpdGxlX19fMW9Tb3BcIixcIkN1cnJlbnRVc2VyX19uYW1lXCI6XCJDdXJyZW50VXNlcl9fQ3VycmVudFVzZXJfX25hbWVfX18xMmhJWlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQ3VycmVudFVzZXIvQ3VycmVudFVzZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNjAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua01pZGRsZXdhcmVdXG5cbmlmIChOT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3N0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGZsYXNoIGZyb20gJy4vZmxhc2hSZWR1Y2VyJ1xuaW1wb3J0IHF1ZXN0aW9ucyBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgZmFxcyBmcm9tICcuL2ZhcXNSZWR1Y2VyJ1xuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGF1dGgsXG4gIGZsYXNoLFxuICBxdWVzdGlvbnMsXG4gIGZhcXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcm9vdFJlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQge1JFUVVFU1RfQVVUSCwgTE9HSU4sIExPR09VVH0gZnJvbSAnLi9hdXRoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGF1dGggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmF1dGgsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfQVVUSDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuYXV0aCwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgTE9HSU46XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXIsXG4gICAgICAgIHRva2VuOiBhY3Rpb24udG9rZW5cbiAgICAgIH1cbiAgICBjYXNlIExPR09VVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBudWxsLFxuICAgICAgICB0b2tlbjogbnVsbFxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhdXRoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvYXV0aFJlZHVjZXIuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCB7XG4gIGF1dGg6IHtcbiAgICBpc0ZldGNoaW5nOiBmYWxzZSxcbiAgICB1c2VyOiB7XG4gICAgICBpZDogJ3ZlbHonLFxuICAgICAgbmFtZTogJ1ZvbG9keW15ciBEeml1YmFrJyxcbiAgICAgIGVtYWlsOiAndm9sb2R5bXlyLmR6eXViYWtAZ21haWwuY29tJyxcbiAgICAgIGFkbWluOiB0cnVlXG4gICAgfSxcbiAgICB0b2tlbjogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNkluWmxiSG9pTENKdVlXMWxJam9pVm05c2IyUjViWGx5SUVSNmFYVmlZV3NpTENKaFpHMXBiaUk2ZEhKMVpTd2lhV0YwSWpveE5EWTNPVGt6TXpneUxDSmxlSEFpT2pFME5qZ3dOemszT0RKOS5tejhXR25DYTFXSkRBNFc5dWl5ZEo0My01dGRKMGxwVTNicTBVdlhJRzdrJ1xuICAgIC8vIHVzZXI6IG51bGwsXG4gICAgLy8gdG9rZW46IG51bGxcbiAgICAvLyB0b2tlbjogJ2V5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpwWkNJNkluVnpaWElpTENKdVlXMWxJam9pVlhObGNpSXNJbWxoZENJNk1UUTJOems1TlRBNU5Td2laWGh3SWpveE5EWTRNRGd4TkRrMWZRLm1YXzE3NzBfR2xLaVlfSEhUQUdDcXJCYWZHNkMxelJpTjR3dzAyV0dRZjAnIC8vIHVzZXIncyB0b2tlblxuICB9LFxuICBmbGFzaDoge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0aW1lb3V0SWQ6IG51bGxcbiAgfSxcbiAgcXVlc3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgcXVlc3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiB0cnVlLFxuICAgIGRhdGE6IHt9XG4gIH0sXG4gIGZhcXM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICBmYXE6IHtcbiAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICBpc1VwZGF0aW5nOiB0cnVlLFxuICAgIGRhdGE6IHt9LFxuICAgIGVycm9yczoge31cbiAgfSxcbiAgYmxvZ3Bvc3RzOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgc2VjdGlvbnM6IHtcbiAgICBpc0ZldGNoaW5nOiB0cnVlLFxuICAgIGl0ZW1zOiBbXVxuICB9LFxuICB1c2Vyczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OUywgUkVDRUlWRV9RVUVTVElPTlMsXG4gIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLCBSRUNFSVZFX1FVRVNUSU9OX1VQREFURX0gZnJvbSAnLi9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgcXVlc3Rpb24gPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnF1ZXN0aW9uLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVDRUlWRV9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi51cGRhdGVkUXVlc3Rpb24sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBxdWVzdGlvbnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnF1ZXN0aW9ucyxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gcXVlc3Rpb24oaSwgYWN0aW9uKSlcbiAgICAgIH1cbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcXVlc3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTlMgPSAnUkVRVUVTVF9RVUVTVElPTlMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9RVUVTVElPTlMgPSAnUkVDRUlWRV9RVUVTVElPTlMnXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTl9VUERBVEUgPSAnUkVRVUVTVF9RVUVTVElPTl9VUERBVEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9RVUVTVElPTl9VUERBVEUgPSAnUkVDRUlWRV9RVUVTVElPTl9VUERBVEUnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0UXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05TXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVF1ZXN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RRdWVzdGlvbnMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogZ2V0U3RhdGUoKS5hdXRoLnRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlUXVlc3Rpb25zKGpzb24uZGF0YS5xdWVzdGlvbnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShqc29uLm1lc3NhZ2UpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKGlkKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9RVUVTVElPTl9VUERBVEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZFF1ZXN0aW9uXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX1FVRVNUSU9OX1VQREFURSxcbiAgICBpZCxcbiAgICB1cGRhdGVkUXVlc3Rpb25cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUXVlc3Rpb24gPSAoXG4gIGlkLFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0VXBkYXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogZ2V0U3RhdGUoKS5hdXRoLnRva2VuXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBxdWVzdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5xdWVzdGlvbikpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24ubWVzc2FnZSkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9GQVFTLCBSRUNFSVZFX0ZBUVMsXG4gIFJFUVVFU1RfRkFRX1VQREFURSwgUkVDRUlWRV9GQVFfVVBEQVRFLFxuICBSRUNFSVZFX0ZBUV9FUlJPUlMsIE1BUktfRkFRX0RJUlRZfSBmcm9tICcuL2ZhcXNBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgZmFxID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5mYXEsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfRkFRUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBkYXRhOiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9GQVFfVVBEQVRFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFQ0VJVkVfRkFRX1VQREFURTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRGYXEsXG4gICAgICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUNFSVZFX0ZBUV9FUlJPUlM6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBNQVJLX0ZBUV9ESVJUWTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLmlkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNEaXJ0eTogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGZhcXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmZhcXMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfRkFRUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc0ZldGNoaW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVDRUlWRV9GQVFTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gZmFxKGksIGFjdGlvbikpXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0ZBUV9VUERBVEU6XG4gICAgY2FzZSBSRUNFSVZFX0ZBUV9VUERBVEU6XG4gICAgY2FzZSBSRUNFSVZFX0ZBUV9FUlJPUlM6XG4gICAgY2FzZSBNQVJLX0ZBUV9ESVJUWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gZmFxKGksIGFjdGlvbikpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmYXFzXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmFxc1JlZHVjZXIuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfRkFRUyA9ICdSRVFVRVNUX0ZBUVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9GQVFTID0gJ1JFQ0VJVkVfRkFRUydcbmV4cG9ydCBjb25zdCBSRVFVRVNUX0ZBUV9VUERBVEUgPSAnUkVRVUVTVF9GQVFfVVBEQVRFJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfRkFRX1VQREFURSA9ICdSRUNFSVZFX0ZBUV9VUERBVEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9GQVFfRVJST1JTID0gJ1JFQ0VJVkVfRkFRX0VSUk9SUydcbmV4cG9ydCBjb25zdCBNQVJLX0ZBUV9ESVJUWSA9ICdNQVJLX0ZBUV9ESVJUWSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RGYXFzID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfRkFRU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVGYXFzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9GQVFTLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoRmFxcyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmFxcygpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9mYXFzL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogZ2V0U3RhdGUoKS5hdXRoLnRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlRmFxcyhqc29uLmRhdGEuZmFxcykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKGpzb24ubWVzc2FnZSkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RVcGRhdGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0ZBUV9VUERBVEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEZhcVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9GQVFfVVBEQVRFLFxuICAgIGlkLFxuICAgIHVwZGF0ZWRGYXFcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlRXJyb3JzID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUNFSVZFX0ZBUV9FUlJPUlMsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUZhcSA9IChcbiAgaWQsXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9mYXFzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogZ2V0U3RhdGUoKS5hdXRoLnRva2VuXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBmYXE6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlVXBkYXRlKGlkLCBqc29uLmRhdGEuZmFxKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1F1ZXN0aW9uIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVFcnJvcnMoaWQsIGpzb24uZGF0YS5lcnJvcnMpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSBxdWVzdGlvbiBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBtYXJrRmFxRGlydHkgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBNQVJLX0ZBUV9ESVJUWSxcbiAgICBpZFxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmFxc0FjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb24nXG5cbmNvbnN0IFF1ZXN0aW9uc1NlY3Rpb24gPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7XG4gICAgICBpZDogJ3F1ZXN0aW9ucy9pbmJveCcsXG4gICAgICBsYWJlbDogJ0luYm94J1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICdxdWVzdGlvbnMvZnJlcXVlbnQnLFxuICAgICAgbGFiZWw6ICdGcmVxdWVudCdcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIHRpdGxlPVwiUXVlc3Rpb25zXCIgbmF2SXRlbXM9e25hdkl0ZW1zfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUXVlc3Rpb25zU2VjdGlvblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zU2VjdGlvbi9RdWVzdGlvbnNTZWN0aW9uLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb24uY3NzJ1xuXG5jb25zdCBTZWN0aW9uID0gKHtcbiAgdGl0bGUsXG4gIGNoaWxkcmVuLFxuICBuYXZJdGVtc1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VjdGlvbn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlY3Rpb25fX3NpZGViYXJ9PlxuICAgICAgICA8QmxvY2sgbj17Mn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uX190aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxOYXYgaXRlbXM9e25hdkl0ZW1zfSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VjdGlvblwiOlwiU2VjdGlvbl9fU2VjdGlvbl9fXzM1QmNiXCIsXCJTZWN0aW9uX190aXRsZVwiOlwiU2VjdGlvbl9fU2VjdGlvbl9fdGl0bGVfX18yeEdtX1wiLFwiU2VjdGlvbl9fc2lkZWJhclwiOlwiU2VjdGlvbl9fU2VjdGlvbl9fc2lkZWJhcl9fXzFmdHJXXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uY3NzXG4gKiogbW9kdWxlIGlkID0gNjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2ZldGNoUXVlc3Rpb25zfSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICcuLi9EaXJlY3RvcnknXG5pbXBvcnQgUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeSBmcm9tICcuLi9RdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5J1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcblxuY2xhc3MgUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaChmZXRjaFF1ZXN0aW9ucygpKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGlzRmV0Y2hpbmcsIGl0ZW1zfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChpc0ZldGNoaW5nKSB7XG4gICAgICByZXR1cm4gPExvYWRpbmcgLz5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLmlzRGVsZXRlZCA9PT0gZmFsc2UpXG5cbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGZpbGVyZWRJdGVtcy5tYXAoaSA9PlxuICAgICAgICA8UXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeSBrZXk9e2kuZGF0YS5pZH0gZW50cnk9e2l9IC8+XG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJJbmJveFwiIGl0ZW1zPXtxdWVzdGlvbnN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5xdWVzdGlvbnMuaXNGZXRjaGluZyxcbiAgICAgIGl0ZW1zOiBzdGF0ZS5xdWVzdGlvbnMuaXRlbXNcbiAgICB9XG4gIH1cbikoUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnkpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNJbmJveERpcmVjdG9yeS9RdWVzdGlvbnNJbmJveERpcmVjdG9yeS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EaXJlY3RvcnkuY3NzJ1xuXG5jb25zdCBEaXJlY3RvcnkgPSAoe1xuICB0aXRsZSxcbiAgaXRlbXMsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGlmIChjaGlsZHJlbikge1xuICAgIHJldHVybiBjaGlsZHJlblxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkRpcmVjdG9yeX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRGlyZWN0b3J5X19oZWFkZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRGlyZWN0b3J5X190aXRsZX0+e3RpdGxlfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkRpcmVjdG9yeV9fYm9keX0+XG4gICAgICAgICAge2l0ZW1zfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaXJlY3RvcnlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0RpcmVjdG9yeS9EaXJlY3RvcnkuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRGlyZWN0b3J5XCI6XCJEaXJlY3RvcnlfX0RpcmVjdG9yeV9fXzNaWFF1XCIsXCJEaXJlY3RvcnlfX2hlYWRlclwiOlwiRGlyZWN0b3J5X19EaXJlY3RvcnlfX2hlYWRlcl9fXzFtSnhMXCIsXCJEaXJlY3RvcnlfX2JvZHlcIjpcIkRpcmVjdG9yeV9fRGlyZWN0b3J5X19ib2R5X19fMnVXaE1cIixcIkRpcmVjdG9yeV9fdGl0bGVcIjpcIkRpcmVjdG9yeV9fRGlyZWN0b3J5X190aXRsZV9fXzNpT05VXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9EaXJlY3RvcnkvRGlyZWN0b3J5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDYxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5LmNzcydcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHt1cGRhdGVRdWVzdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuLi8uLi9zdG9yZS9mbGFzaEFjdGlvbnMnXG5cbmNsYXNzIFF1ZXN0aW9uc0luYm94RGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMubWFya1NlZW4gPSB0aGlzLm1hcmtTZWVuLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIG1hcmtTZWVuICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIGVudHJ5fSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgc2VlbjogIWVudHJ5LmRhdGEuc2VlblxuICAgIH1cblxuICAgIGRpc3BhdGNoKHVwZGF0ZVF1ZXN0aW9uKGVudHJ5LmRhdGEuaWQsIHBheWxvYWQpKVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2gsIGVudHJ5fSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBwYXlsb2FkID0ge1xuICAgICAgaXNEZWxldGVkOiB0cnVlXG4gICAgfVxuXG4gICAgZGlzcGF0Y2godXBkYXRlUXVlc3Rpb24oZW50cnkuZGF0YS5pZCwgcGF5bG9hZCkpXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdxdWVzdGlvbiBoYXMgYmVlbiBwdXQgaW50byBcInRyYXNoXCInLCAnbG9nJykpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtlbnRyeX0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FbnRyeX0gJHtlbnRyeS5kYXRhLnNlZW4gPyAnJyA6IHN0eWxlcy5FbnRyeV9uZXd9YH0+XG4gICAgICAgIHtlbnRyeS5kYXRhLnNlZW5cbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX2JhZGdlfT5OZXc8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxCbG9jaz5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX3Bvc3RlZH0+XG4gICAgICAgICAgICAgIDxUaW1lIHZhbHVlPXtlbnRyeS5kYXRhLnBvc3RlZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPiBieSB7ZW50cnkuZGF0YS5wb3N0ZXJOYW1lfSAoe2VudHJ5LmRhdGEucG9zdGVyRW1haWx9KVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtlbnRyeS5kYXRhLnNlZW5cbiAgICAgICAgICAgICAgPyA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbnRyeS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWFya1NlZW59Pm1hcmsgYXMgbmV3PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VudHJ5LmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgICAgICAgIDogPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZW50cnkuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke2VudHJ5LmRhdGEucG9zdGVyRW1haWx9P3N1YmplY3Q9UmVwbHkgdG8geW91ciBxdWVzdGlvbnMgb24gYW50aXZheCZib2R5PVJlcGx5IHRvIHlvdXIgcXVlc3Rpb246XFxuICR7ZW50cnkuZGF0YS5xdWVzdGlvbn1gfT5yZXNwb25kIHZpYSBlbWFpbDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbnRyeS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubWFya1NlZW59Pm1hcmsgYXMgc2VlbjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtlbnRyeS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0+RGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVudHJ5X19ib2R5fT57ZW50cnkuZGF0YS5xdWVzdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0luYm94RGlyZWN0b3J5RW50cnkvUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFbnRyeVwiOlwiUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeV9fRW50cnlfX18zcDlqbFwiLFwiRW50cnlfX2JhZGdlXCI6XCJRdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5X19FbnRyeV9fYmFkZ2VfX19UQVZhTlwiLFwiRW50cnlfX3Bvc3RlZFwiOlwiUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeV9fRW50cnlfX3Bvc3RlZF9fXzVJMWJ2XCIsXCJFbnRyeV9fYm9keVwiOlwiUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeV9fRW50cnlfX2JvZHlfX18yNGxZbVwiLFwiRW50cnlfbmV3XCI6XCJRdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5X19FbnRyeV9uZXdfX18zVHc2SFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zSW5ib3hEaXJlY3RvcnlFbnRyeS9RdWVzdGlvbnNJbmJveERpcmVjdG9yeUVudHJ5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDcyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5jc3MnXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9hZGluZ30+XG4gICAgICA8U3Bpbm5lciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2FkaW5nXCI6XCJMb2FkaW5nX19Mb2FkaW5nX19fM3B5Y3pcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3MjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7ZmV0Y2hGYXFzfSBmcm9tICcuLi8uLi9zdG9yZS9mYXFzQWN0aW9ucydcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi4vRGlyZWN0b3J5J1xuaW1wb3J0IFF1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnkgZnJvbSAnLi4vUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFF1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2goZmV0Y2hGYXFzKCkpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtjaGlsZHJlbiwgaXNGZXRjaGluZywgaXRlbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLmlzRGVsZXRlZCA9PT0gZmFsc2UpXG5cbiAgICAgIGNvbnN0IGZhcXMgPSBmaWx0ZXJlZEl0ZW1zLm1hcChpID0+XG4gICAgICAgIDxRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5IGtleT17aS5kYXRhLmlkfSBlbnRyeT17aX0gLz5cbiAgICAgIClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERpcmVjdG9yeSB0aXRsZT1cIkZyZXF1ZW50XCIgaXRlbXM9e2ZhcXN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5mYXFzLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUuZmFxcy5pdGVtc1xuICAgIH1cbiAgfVxuKShRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5L1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5LmNzcydcbmltcG9ydCB7QmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHt1cGRhdGVGYXF9IGZyb20gJy4uLy4uL3N0b3JlL2ZhcXNBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcblxuY2xhc3MgUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5wdWJsaXNoID0gdGhpcy5wdWJsaXNoLmJpbmQodGhpcylcbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgfVxuXG4gIHB1Ymxpc2ggKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaCwgZW50cnl9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBpc1B1Ymxpc2hlZDogIWVudHJ5LmRhdGEuaXNQdWJsaXNoZWRcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVGYXEoZW50cnkuZGF0YS5pZCwgcGF5bG9hZCkpXG4gICAgaWYgKHBheWxvYWQuaXNQdWJsaXNoZWQpIHtcbiAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnYXJ0aWNsZSBoYXMgYmVlbiBwdWJsaXNoZWQnLCAnbG9nJykpXG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnYXJ0aWNsZSBoYXMgYmVlbiBtYXJrZWQgYXMgYSBkcmFmdCcsICdsb2cnKSlcbiAgICB9XG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaCwgZW50cnl9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBpc0RlbGV0ZWQ6IHRydWVcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVGYXEoZW50cnkuZGF0YS5pZCwgcGF5bG9hZCkpXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdhcnRpY2xlIGhhcyBiZWVuIGRlbGV0ZWQnLCAnbG9nJykpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtlbnRyeX0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FbnRyeX0gJHtlbnRyeS5kYXRhLmlzUHVibGlzaGVkID8gJycgOiBzdHlsZXMuRW50cnlfZHJhZnR9YH0+XG4gICAgICAgIHtlbnRyeS5kYXRhLmlzUHVibGlzaGVkXG4gICAgICAgICAgPyBudWxsXG4gICAgICAgICAgOiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVudHJ5X19iYWRnZX0+RHJhZnQ8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxCbG9jaz5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX21vZGlmaWVkfT5MYXN0IG1vZGlmaWVkIGJ5IHtlbnRyeS5kYXRhLmxhc3RNb2RpZmllZEJ5fSBvbiA8VGltZSB2YWx1ZT17ZW50cnkuZGF0YS5sYXN0TW9kaWZpZWRBdH0gZm9ybWF0PVwiTU1NTSBEbyBZWVlZIChoOm1tIGEpXCIgLz48L2Rpdj5cblxuICAgICAgICAgICAge2VudHJ5LmRhdGEuaXNQdWJsaXNoZWRcbiAgICAgICAgICAgICAgPyA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VudHJ5LmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgaW52ZXJzZVxuICAgICAgICAgICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHVibGlzaH0+VW5wdWJsaXNoPC9CdXR0b24+XG4gICAgICAgICAgICAgIDogPExpc3RJbmxpbmU+XG4gICAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzbWFsbFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZW50cnkuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wdWJsaXNofT5QdWJsaXNoPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VudHJ5LmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJlcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfT5EZWxldGU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxMaW5rIHRvPXtgcXVlc3Rpb25zL2ZyZXF1ZW50LyR7ZW50cnkuZGF0YS5pZH1gfSBjbGFzc05hbWU9e3N0eWxlcy5FbnRyeV9fdGl0bGV9PntlbnRyeS5kYXRhLnRpdGxlfTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnkvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFbnRyeVwiOlwiUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeV9fRW50cnlfX18yb3FQdFwiLFwiRW50cnlfX2JhZGdlXCI6XCJRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9fYmFkZ2VfX18yN0h3b1wiLFwiRW50cnlfX3RpdGxlXCI6XCJRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9fdGl0bGVfX18zSjcxbVwiLFwiRW50cnlfX21vZGlmaWVkXCI6XCJRdWVzdGlvbnNGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9fbW9kaWZpZWRfX19sdlExdFwiLFwiRW50cnlfZHJhZnRcIjpcIlF1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnlfX0VudHJ5X2RyYWZ0X19fMmVRdVdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0ZyZXF1ZW50RGlyZWN0b3J5RW50cnkvUXVlc3Rpb25zRnJlcXVlbnREaXJlY3RvcnlFbnRyeS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3MzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNGcmVxdWVudEl0ZW0uY3NzJ1xuaW1wb3J0IHtCbG9jaywgRmxleCwgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgQmFkZ2UsIElucHV0LCBDaGVja2JveCwgRWRpdG9yfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7dXBkYXRlRmFxLCBtYXJrRmFxRGlydHl9IGZyb20gJy4uLy4uL3N0b3JlL2ZhcXNBY3Rpb25zJ1xuXG5jbGFzcyBRdWVzdGlvbnNGcmVxdWVudEl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VUaXRsZSA9IHRoaXMuY2hhbmdlVGl0bGUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlQ29udGVudCA9IHRoaXMuY2hhbmdlQ29udGVudC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VQdWJsaXNoZWQgPSB0aGlzLmNoYW5nZVB1Ymxpc2hlZC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEaXJ0eTogdGhpcy5wcm9wcy5pdGVtLmRhdGEuaXNEaXJ0eSxcbiAgICAgIGlzUHVibGlzaGVkOiB0aGlzLnByb3BzLml0ZW0uZGF0YS5pc1B1Ymxpc2hlZCxcbiAgICAgIHRpdGxlOiB0aGlzLnByb3BzLml0ZW0uZGF0YS50aXRsZSxcbiAgICAgIHRpdGxlRXJyb3I6IG51bGwsXG4gICAgICBjb250ZW50OiB0aGlzLnByb3BzLml0ZW0uZGF0YS5jb250ZW50LFxuICAgICAgY29udGVudEVycm9yOiBudWxsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBpc0RpcnR5fSA9IG5ld1Byb3BzLml0ZW1cblxuICAgIGxldCBuZXdTdGF0ZSA9IHtcbiAgICAgIGlzRGlydHlcbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzKSB7XG4gICAgICBuZXdTdGF0ZS50aXRsZUVycm9yID0gZXJyb3JzLnRpdGxlXG4gICAgICBuZXdTdGF0ZS5jb250ZW50RXJyb3IgPSBlcnJvcnMuY29udGVudFxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICB0aXRsZTogdGhpcy5zdGF0ZS50aXRsZSxcbiAgICAgIGlzUHVibGlzaGVkOiB0aGlzLnN0YXRlLmlzUHVibGlzaGVkLFxuICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5jb250ZW50XG4gICAgfVxuXG4gICAgZGlzcGF0Y2godXBkYXRlRmFxKHRoaXMucHJvcHMuaXRlbS5kYXRhLmlkLCBwYXlsb2FkKSlcbiAgfVxuXG4gIGNoYW5nZVRpdGxlICh2YWx1ZSkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaChtYXJrRmFxRGlydHkodGhpcy5wcm9wcy5pdGVtLmRhdGEuaWQpKVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICB0aXRsZUVycm9yOiBudWxsXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVB1Ymxpc2hlZCAodmFsdWUpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2gobWFya0ZhcURpcnR5KHRoaXMucHJvcHMuaXRlbS5kYXRhLmlkKSlcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNQdWJsaXNoZWQ6IHZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZUNvbnRlbnQgKHZhbHVlKSB7XG4gICAgY29uc3Qge2Rpc3BhdGNofSA9IHRoaXMucHJvcHNcblxuICAgIGRpc3BhdGNoKG1hcmtGYXFEaXJ0eSh0aGlzLnByb3BzLml0ZW0uZGF0YS5pZCkpXG4gICAgXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb250ZW50OiB2YWx1ZSxcbiAgICAgIGNvbnRlbnRFcnJvcjogbnVsbFxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc0RpcnR5LCBpc1B1Ymxpc2hlZCwgdGl0bGUsIGNvbnRlbnQsIHRpdGxlRXJyb3IsIGNvbnRlbnRFcnJvcn0gPSB0aGlzLnN0YXRlXG4gICAgY29uc3Qge2lzVXBkYXRpbmd9ID0gdGhpcy5wcm9wcy5pdGVtXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JdGVtRm9ybX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSXRlbUZvcm1fX2hlYWRlcn0+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7aXNEaXJ0eVxuICAgICAgICAgICAgPyA8QmFkZ2Ugc21hbGwgdGhlbWU9XCJlcnJvclwiIGxhYmVsPVwiVW5zYXZlZCBjaGFuZ2VzXCIgLz5cbiAgICAgICAgICAgIDogPEJhZGdlIHNtYWxsIGxhYmVsPVwiQWxsIGNoYW5nZXMgc2F2ZWRcIiAvPlxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYWNjZW50MVwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZyB8fCAhaXNEaXJ0eX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgICAgICB0aGVtZT1cImFjY2VudDFcIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICB0bz1cInF1ZXN0aW9ucy9mcmVxdWVudFwiPkNhbmNlbDwvQnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JdGVtRm9ybV9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBlcnJvcj17dGl0bGVFcnJvcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlVGl0bGV9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIlB1Ymxpc2hlZFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e2lzUHVibGlzaGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUHVibGlzaGVkfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8RWRpdG9yIGxhYmVsPVwiQ29udGVudFwiXG4gICAgICAgICAgICB2YWx1ZT17Y29udGVudH1cbiAgICAgICAgICAgIGVycm9yPXtjb250ZW50RXJyb3J9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUNvbnRlbnR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCBpdGVtSWQgPSBvd25Qcm9wcy5wYXJhbXMuaXRlbUlkXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUuZmFxcy5pdGVtcyA/IHN0YXRlLmZhcXMuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLmlkID09PSBpdGVtSWQpWzBdIDoge31cbiAgICB9XG4gIH1cbikoUXVlc3Rpb25zRnJlcXVlbnRJdGVtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zRnJlcXVlbnRJdGVtL1F1ZXN0aW9uc0ZyZXF1ZW50SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uL1NlY3Rpb24nXG5cbmNvbnN0IFRyYXNoU2VjdGlvbiA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGlkOiAndHJhc2gvcXVlc3Rpb25zJyxcbiAgICAgIGxhYmVsOiAnUXVlc3Rpb25zJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0cmFzaC9mcmVxdWVudCcsXG4gICAgICBsYWJlbDogJ0ZyZXF1ZW50IHF1ZXN0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAndHJhc2gvYmxvZ3Bvc3RzJyxcbiAgICAgIGxhYmVsOiAnQmxvZ3Bvc3RzJ1xuICAgIH0sXG4gICAge1xuICAgICAgaWQ6ICd0cmFzaC9jb250ZW50JyxcbiAgICAgIGxhYmVsOiAnQ29udGVudCdcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIHRpdGxlPVwiVHJhc2hcIiBuYXZJdGVtcz17bmF2SXRlbXN9IGNoaWxkcmVuPXtjaGlsZHJlbn0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFzaFNlY3Rpb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RyYXNoU2VjdGlvbi9UcmFzaFNlY3Rpb24uanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaFF1ZXN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi4vRGlyZWN0b3J5J1xuaW1wb3J0IFRyYXNoUXVlc3Rpb25zRGlyZWN0b3J5RW50cnkgZnJvbSAnLi4vVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFRyYXNoUXVlc3Rpb25zRGlyZWN0b3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZGlzcGF0Y2h9ID0gdGhpcy5wcm9wc1xuXG4gICAgZGlzcGF0Y2goZmV0Y2hRdWVzdGlvbnMoKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBpc0ZldGNoaW5nLCBpdGVtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVyZWRJdGVtcyA9IGl0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5pc0RlbGV0ZWQgPT09IHRydWUpXG5cbiAgICAgIGNvbnN0IHF1ZXN0aW9ucyA9IGZpbGVyZWRJdGVtcy5tYXAoaSA9PlxuICAgICAgICA8VHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeSBrZXk9e2kuZGF0YS5pZH0gZW50cnk9e2l9IC8+XG4gICAgICApXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxEaXJlY3RvcnkgdGl0bGU9XCJRdWVzdGlvbnNcIiBpdGVtcz17cXVlc3Rpb25zfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUucXVlc3Rpb25zLmlzRmV0Y2hpbmcsXG4gICAgICBpdGVtczogc3RhdGUucXVlc3Rpb25zLml0ZW1zXG4gICAgfVxuICB9XG4pKFRyYXNoUXVlc3Rpb25zRGlyZWN0b3J5KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnkvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnkuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeUVudHJ5LmNzcydcbmltcG9ydCB7QmxvY2ssIEZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vVUknXG5pbXBvcnQge3VwZGF0ZVF1ZXN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcblxuY2xhc3MgVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5wdXRCYWNrID0gdGhpcy5wdXRCYWNrLmJpbmQodGhpcylcbiAgfVxuXG4gIHB1dEJhY2sgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaCwgZW50cnl9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBpc0RlbGV0ZWQ6IGZhbHNlXG4gICAgfVxuXG4gICAgZGlzcGF0Y2godXBkYXRlUXVlc3Rpb24oZW50cnkuZGF0YS5pZCwgcGF5bG9hZCkpXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdxdWVzdGlvbiBoYXMgYmVlbiBwdXQgYmFjayB0byBcImluYm94XCInLCAnbG9nJykpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtlbnRyeX0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FbnRyeX0gJHtlbnRyeS5kYXRhLnNlZW4gPyAnJyA6IHN0eWxlcy5FbnRyeV9uZXd9YH0+XG4gICAgICAgIHtlbnRyeS5kYXRhLnNlZW5cbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX2JhZGdlfT5OZXc8L2Rpdj5cbiAgICAgICAgfVxuXG4gICAgICAgIDxCbG9jaz5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX3Bvc3RlZH0+XG4gICAgICAgICAgICAgIDxUaW1lIHZhbHVlPXtlbnRyeS5kYXRhLnBvc3RlZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPiBieSB7ZW50cnkuZGF0YS5wb3N0ZXJOYW1lfSAoe2VudHJ5LmRhdGEucG9zdGVyRW1haWx9KVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxCdXR0b24gc21hbGxcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2VudHJ5LmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGludmVyc2VcbiAgICAgICAgICAgICAgdGhlbWU9XCJhY2NlbnQxXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wdXRCYWNrfT5QdXQgYmFjazwvQnV0dG9uPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVudHJ5X19ib2R5fT57ZW50cnkuZGF0YS5xdWVzdGlvbn08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RyYXNoUXVlc3Rpb25zRGlyZWN0b3J5RW50cnkvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFbnRyeVwiOlwiVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeV9fRW50cnlfX18yM0t6a1wiLFwiRW50cnlfX2JhZGdlXCI6XCJUcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeUVudHJ5X19FbnRyeV9fYmFkZ2VfX18xalNCdlwiLFwiRW50cnlfX3Bvc3RlZFwiOlwiVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeV9fRW50cnlfX3Bvc3RlZF9fXzFkZmVXXCIsXCJFbnRyeV9fYm9keVwiOlwiVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeV9fRW50cnlfX2JvZHlfX19DeE5yc1wiLFwiRW50cnlfbmV3XCI6XCJUcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeUVudHJ5X19FbnRyeV9uZXdfX18xS1duWlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVHJhc2hRdWVzdGlvbnNEaXJlY3RvcnlFbnRyeS9UcmFzaFF1ZXN0aW9uc0RpcmVjdG9yeUVudHJ5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDczNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtmZXRjaEZhcXN9IGZyb20gJy4uLy4uL3N0b3JlL2ZhcXNBY3Rpb25zJ1xuaW1wb3J0IERpcmVjdG9yeSBmcm9tICcuLi9EaXJlY3RvcnknXG5pbXBvcnQgVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5IGZyb20gJy4uL1RyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeSdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5cbmNsYXNzIFRyYXNoRnJlcXVlbnREaXJlY3RvcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBkaXNwYXRjaChmZXRjaEZhcXMoKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2NoaWxkcmVuLCBpc0ZldGNoaW5nLCBpdGVtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBpdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuaXNEZWxldGVkID09PSB0cnVlKVxuXG4gICAgICBjb25zdCBmYXFzID0gZmlsdGVyZWRJdGVtcy5tYXAoaSA9PlxuICAgICAgICA8VHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5IGtleT17aS5kYXRhLmlkfSBlbnRyeT17aX0gLz5cbiAgICAgIClcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERpcmVjdG9yeSB0aXRsZT1cIkZyZXF1ZW50IFF1ZXN0aW9uc1wiIGl0ZW1zPXtmYXFzfSBjaGlsZHJlbj17Y2hpbGRyZW59IC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuZmFxcy5pc0ZldGNoaW5nLFxuICAgICAgaXRlbXM6IHN0YXRlLmZhcXMuaXRlbXNcbiAgICB9XG4gIH1cbikoVHJhc2hGcmVxdWVudERpcmVjdG9yeSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RyYXNoRnJlcXVlbnREaXJlY3RvcnkvVHJhc2hGcmVxdWVudERpcmVjdG9yeS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeS5jc3MnXG5pbXBvcnQge0Jsb2NrLCBGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHt1cGRhdGVGYXF9IGZyb20gJy4uLy4uL3N0b3JlL2ZhcXNBY3Rpb25zJ1xuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4uLy4uL3N0b3JlL2ZsYXNoQWN0aW9ucydcblxuY2xhc3MgVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnB1dEJhY2sgPSB0aGlzLnB1dEJhY2suYmluZCh0aGlzKVxuICB9XG5cbiAgcHV0QmFjayAoKSB7XG4gICAgY29uc3Qge2Rpc3BhdGNoLCBlbnRyeX0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcGF5bG9hZCA9IHtcbiAgICAgIGlzRGVsZXRlZDogZmFsc2VcbiAgICB9XG5cbiAgICBkaXNwYXRjaCh1cGRhdGVGYXEoZW50cnkuZGF0YS5pZCwgcGF5bG9hZCkpXG4gICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdhcnRpY2xlIGhhcyBiZWVuIHB1dCBiYWNrIHRvIFwiRnJlcXVlbnRcIicsICdsb2cnKSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2VudHJ5fSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkVudHJ5fSAke2VudHJ5LmRhdGEuaXNQdWJsaXNoZWQgPyAnJyA6IHN0eWxlcy5FbnRyeV9kcmFmdH1gfT5cbiAgICAgICAge2VudHJ5LmRhdGEuaXNQdWJsaXNoZWRcbiAgICAgICAgICA/IG51bGxcbiAgICAgICAgICA6IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX2JhZGdlfT5EcmFmdDwvZGl2PlxuICAgICAgICB9XG5cbiAgICAgICAgPEJsb2NrPlxuICAgICAgICAgIDxGbGV4IGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbnRyeV9fbW9kaWZpZWR9Pkxhc3QgbW9kaWZpZWQgYnkge2VudHJ5LmRhdGEubGFzdE1vZGlmaWVkQnl9IG9uIDxUaW1lIHZhbHVlPXtlbnRyeS5kYXRhLmxhc3RNb2RpZmllZEF0fSBmb3JtYXQ9XCJNTU1NIERvIFlZWVkgKGg6bW0gYSlcIiAvPjwvZGl2PlxuXG4gICAgICAgICAgICA8QnV0dG9uIHNtYWxsXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtlbnRyeS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBpbnZlcnNlXG4gICAgICAgICAgICAgIHRoZW1lPVwiZXJyb3JcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnB1dEJhY2t9PlB1dCBiYWNrPC9CdXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRW50cnlfX3RpdGxlfT57ZW50cnkuZGF0YS50aXRsZX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCkoVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5L1RyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFbnRyeVwiOlwiVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9fXzE3dnhiXCIsXCJFbnRyeV9fYmFkZ2VcIjpcIlRyYXNoRnJlcXVlbnREaXJlY3RvcnlFbnRyeV9fRW50cnlfX2JhZGdlX19fMTBNNEhcIixcIkVudHJ5X190aXRsZVwiOlwiVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9fdGl0bGVfX18ya1pZVVwiLFwiRW50cnlfX21vZGlmaWVkXCI6XCJUcmFzaEZyZXF1ZW50RGlyZWN0b3J5RW50cnlfX0VudHJ5X19tb2RpZmllZF9fXzFvbG4zXCIsXCJFbnRyeV9kcmFmdFwiOlwiVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5X19FbnRyeV9kcmFmdF9fXzF6UjN4XCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UcmFzaEZyZXF1ZW50RGlyZWN0b3J5RW50cnkvVHJhc2hGcmVxdWVudERpcmVjdG9yeUVudHJ5LmNzc1xuICoqIG1vZHVsZSBpZCA9IDczOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBEdW1teSA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PiBEdW1teSEgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHVtbXlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0R1bW15L0R1bW15LmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkl0ZW1Gb3JtXCI6XCJRdWVzdGlvbnNGcmVxdWVudEl0ZW1fX0l0ZW1Gb3JtX19fMkxYeGVcIixcIkl0ZW1Gb3JtX19oZWFkZXJcIjpcIlF1ZXN0aW9uc0ZyZXF1ZW50SXRlbV9fSXRlbUZvcm1fX2hlYWRlcl9fXzFhVUxhXCIsXCJJdGVtRm9ybV9fYm9keVwiOlwiUXVlc3Rpb25zRnJlcXVlbnRJdGVtX19JdGVtRm9ybV9fYm9keV9fXzFOUnlkXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNGcmVxdWVudEl0ZW0vUXVlc3Rpb25zRnJlcXVlbnRJdGVtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFKQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBaEJBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUxBO0FBUUE7QUFUQTtBQVlBO0FBRUE7QUFmQTtBQWtCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7QUN6RUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBYUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVkE7QUFEQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQW1DQTs7OztBQWxHQTtBQUNBO0FBb0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7OztBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTs7Ozs7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQ3ZDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQURBO0FBaUJBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQ0E7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcE5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0UEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaFNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25UQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNwTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7QUM3Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFGQTtBQUNBO0FBRUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQWdCQTs7OztBQTVDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBTkE7QUFEQTtBQWVBO0FBQ0E7Ozs7Ozs7O0FDMUJBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUZBO0FBQ0E7QUFFQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBO0FBaUJBOzs7O0FBN0NBO0FBQ0E7QUErQ0E7Ozs7Ozs7QUN0REE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUZBO0FBREE7QUFXQTtBQUNBOzs7Ozs7OztBQzdDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVRBO0FBWUE7Ozs7QUF4Q0E7QUFDQTtBQTBDQTs7Ozs7OztBQy9DQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFTQTs7OztBQXJCQTtBQUNBO0FBdUJBOzs7Ozs7O0FDNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFEQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFYQTtBQURBO0FBa0JBOzs7O0FBcENBO0FBQ0E7QUFzQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7Ozs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFsQkE7QUFvQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTs7OztBQVJBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQTdDQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4QkE7QUEwQkE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNDQTtBQTZDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBbEJBO0FBb0JBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBTEE7QUFRQTtBQVRBO0FBWUE7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBOzs7O0FBdkJBO0FBQ0E7QUF5QkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBREE7QUFUQTtBQWlCQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBREE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQWhCQTtBQXZCQTtBQURBO0FBb0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUExREE7QUE2REE7Ozs7QUE1RkE7QUFDQTtBQThGQTs7Ozs7OztBQ3pHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUNaQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7Ozs7QUF2QkE7QUFDQTtBQXlCQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUtBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQVJBO0FBVEE7QUFEQTtBQThCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBcENBO0FBdUNBOzs7O0FBM0VBO0FBQ0E7QUE2RUE7Ozs7Ozs7QUN6RkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVJBO0FBZ0JBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFEQTtBQVJBO0FBTkE7QUFEQTtBQTBCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQTNCQTtBQW1EQTs7OztBQXJJQTtBQUNBO0FBdUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTs7Ozs7Ozs7Ozs7OztBQ3ZKQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFHQTtBQUNBOzs7O0FBdkJBO0FBQ0E7QUF5QkE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFMQTtBQURBO0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBCQTtBQXVCQTs7OztBQTVDQTtBQUNBO0FBOENBOzs7Ozs7O0FDekRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBR0E7QUFDQTs7OztBQXZCQTtBQUNBO0FBeUJBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQUE7QUFIQTtBQURBO0FBWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWxCQTtBQXFCQTs7OztBQTFDQTtBQUNBO0FBNENBOzs7Ozs7O0FDdkRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDUEE7QUFDQTs7OzsiLCJzb3VyY2VSb290IjoiIn0=