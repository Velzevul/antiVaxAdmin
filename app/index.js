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

	var _QuestionsList = __webpack_require__(544);

	var _QuestionsList2 = _interopRequireDefault(_QuestionsList);

	var _Question = __webpack_require__(749);

	var _Question2 = _interopRequireDefault(_Question);

	var _UsersList = __webpack_require__(751);

	var _UsersList2 = _interopRequireDefault(_UsersList);

	var _EditUserForm = __webpack_require__(756);

	var _EditUserForm2 = _interopRequireDefault(_EditUserForm);

	var _NewUserForm = __webpack_require__(758);

	var _NewUserForm2 = _interopRequireDefault(_NewUserForm);

	var _Section = __webpack_require__(763);

	var _Section2 = _interopRequireDefault(_Section);

	var _SectionsList = __webpack_require__(765);

	var _SectionsList2 = _interopRequireDefault(_SectionsList);

	var _NewSectionForm = __webpack_require__(783);

	var _NewSectionForm2 = _interopRequireDefault(_NewSectionForm);

	var _EditSectionForm = __webpack_require__(786);

	var _EditSectionForm2 = _interopRequireDefault(_EditSectionForm);

	var _NewArticle = __webpack_require__(792);

	var _NewArticle2 = _interopRequireDefault(_NewArticle);

	var _EditArticleForm = __webpack_require__(793);

	var _EditArticleForm2 = _interopRequireDefault(_EditArticleForm);

	var _SearchIndex = __webpack_require__(796);

	var _SearchIndex2 = _interopRequireDefault(_SearchIndex);

	__webpack_require__(799);

	var _App = __webpack_require__(800);

	var _App2 = _interopRequireDefault(_App);

	var _store = __webpack_require__(810);

	var _store2 = _interopRequireDefault(_store);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import CustomSectionForm from './components/CustomSectionForm'

	// import BlogpostsList from './components/BlogpostsList'
	// import NewBlogpostForm from './components/NewBlogpostForm'
	// import EditBlogpostForm from './components/EditBlogpostForm'

	// import ArticlesList from './components/ArticlesList'


	// import Sections from './components/Sections'


	var store = (0, _store2.default)();

	// import ArticleDirectory from './components/ArticleDirectory'
	// import ArticleCreate from './components/ArticleCreate'
	// import ArticleEdit from './components/ArticleEdit'
	//
	// import UsersList from './components/UsersList'
	// import UsersCreate from './components/UsersCreate'
	// import UsersEdit from './components/UsersEdit'
	//
	// import QuestionsList from './components/QuestionsList'

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
	        { path: 'sections', component: _SectionsList2.default },
	        _react2.default.createElement(_reactRouter.Route, { path: 'new', component: _NewSectionForm2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: ':sectionId/edit', component: _EditSectionForm2.default }),
	        _react2.default.createElement(
	          _reactRouter.Route,
	          { path: ':sectionId', component: _Section2.default },
	          _react2.default.createElement(_reactRouter.Route, { path: 'articles/new', component: _NewArticle2.default }),
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

	var _reactRouter = __webpack_require__(491);

	var _reactRedux = __webpack_require__(469);

	var _questionsActions = __webpack_require__(545);

	var _Loading = __webpack_require__(549);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _QuestionsListItem = __webpack_require__(638);

	var _QuestionsListItem2 = _interopRequireDefault(_QuestionsListItem);

	var _QuestionsList = __webpack_require__(748);

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

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteQuestion = exports.updateQuestion = exports.fetchQuestions = exports.REJECT_DELETE_QUESTION = exports.CONFIRM_DELETE_QUESTION = exports.REQUEST_DELETE_QUESTION = exports.RECEIVE_QUESTION_UPDATE = exports.REQUEST_QUESTION_UPDATE = exports.RECEIVE_QUESTIONS = exports.REQUEST_QUESTIONS = undefined;

	__webpack_require__(546);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(547);

	var _authActions = __webpack_require__(548);

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

/***/ 547:
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

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loginWithToken = exports.loginWithCredentials = exports.logOut = exports.LOGOUT = exports.LOGIN = exports.REQUEST_AUTH = undefined;

	__webpack_require__(546);

	var _flashActions = __webpack_require__(547);

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

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Loading = __webpack_require__(550);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(551);

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

/***/ 550:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Loading":"Loading__Loading___3pycz"};

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Select = exports.Editor = exports.Checkbox = exports.Input = exports.ModalWindowFooter = exports.ModalWindowBody = exports.ModalWindowHeader = exports.ModalWindow = exports.Alert = exports.LinkButton = exports.IconButton = exports.Button = exports.Spinner = undefined;

	var _Spinner = __webpack_require__(552);

	var _Spinner2 = _interopRequireDefault(_Spinner);

	var _Button = __webpack_require__(554);

	var _Button2 = _interopRequireDefault(_Button);

	var _IconButton = __webpack_require__(556);

	var _IconButton2 = _interopRequireDefault(_IconButton);

	var _LinkButton = __webpack_require__(558);

	var _LinkButton2 = _interopRequireDefault(_LinkButton);

	var _Alert = __webpack_require__(560);

	var _Alert2 = _interopRequireDefault(_Alert);

	var _Input = __webpack_require__(562);

	var _Input2 = _interopRequireDefault(_Input);

	var _Checkbox = __webpack_require__(564);

	var _Checkbox2 = _interopRequireDefault(_Checkbox);

	var _Editor = __webpack_require__(566);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _Select = __webpack_require__(634);

	var _Select2 = _interopRequireDefault(_Select);

	var _ModalWindow = __webpack_require__(636);

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

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Spinner = __webpack_require__(553);

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

/***/ 553:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Spinner":"Spinner__Spinner___1fiyk","Spinner__inner":"Spinner__Spinner__inner___58vcT","Spinner__circle":"Spinner__Spinner__circle___2ZugO","sk-circleFadeDelay":"Spinner__sk-circleFadeDelay___1Etn8","Spinner__circle1":"Spinner__Spinner__circle1___BOD7n","Spinner__circle2":"Spinner__Spinner__circle2___2aBtr","Spinner__circle3":"Spinner__Spinner__circle3___1BaZf","Spinner__circle4":"Spinner__Spinner__circle4___3V5r7","Spinner__circle5":"Spinner__Spinner__circle5___3DJ5X","Spinner__circle6":"Spinner__Spinner__circle6___ZpU5m","Spinner__circle7":"Spinner__Spinner__circle7___XpnK5","Spinner__circle8":"Spinner__Spinner__circle8___1_RRX","Spinner__circle9":"Spinner__Spinner__circle9___fO0OG","Spinner__circle10":"Spinner__Spinner__circle10___ni35A","Spinner__circle11":"Spinner__Spinner__circle11___1hav9","Spinner__circle12":"Spinner__Spinner__circle12___2ipzT"};

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _Button = __webpack_require__(555);

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

/***/ 555:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Button":"Button__Button___QI7b2","Button_blue":"Button__Button_blue___y-ov2","Button_red":"Button__Button_red___AvQYs","Button_green":"Button__Button_green___y_fe2"};

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _IconButton = __webpack_require__(557);

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

/***/ 557:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"IconButton":"IconButton__IconButton___GdV7i","IconButton_delete":"IconButton__IconButton_delete___gnNYO","IconButton_close":"IconButton__IconButton_close___29_Ga"};

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _LinkButton = __webpack_require__(559);

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

/***/ 559:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"LinkButton":"LinkButton__LinkButton___2Flim","LinkButton_blue":"LinkButton__LinkButton_blue___1W7sl","LinkButton_red":"LinkButton__LinkButton_red___3LuGc","LinkButton_green":"LinkButton__LinkButton_green___3uvrb"};

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Alert = __webpack_require__(561);

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

/***/ 561:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Alert":"Alert__Alert___37_QC","Alert__message":"Alert__Alert__message___2wCZF","Alert__message_log":"Alert__Alert__message_log___2n5DH","Alert__message_error":"Alert__Alert__message_error___2id4W"};

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Input = __webpack_require__(563);

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

/***/ 563:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Input":"Input__Input___s67N0","Input__label":"Input__Input__label___9JDUu","Input__input":"Input__Input__input___wb1PD","Input__error":"Input__Input__error___fgkCD","Input_error":"Input__Input_error___2JYGy"};

/***/ },

/***/ 564:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Checkbox = __webpack_require__(565);

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

/***/ 565:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Checkbox":"Checkbox__Checkbox___1JYQg","Checkbox__label":"Checkbox__Checkbox__label___3OBUd","Checkbox__input":"Checkbox__Checkbox__input___1nDMV"};

/***/ },

/***/ 566:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(330);

	var _scribeEditor = __webpack_require__(567);

	var _scribeEditor2 = _interopRequireDefault(_scribeEditor);

	var _scribePluginToolbar = __webpack_require__(613);

	var _scribePluginToolbar2 = _interopRequireDefault(_scribePluginToolbar);

	var _scribePluginHeadingCommand = __webpack_require__(614);

	var _scribePluginHeadingCommand2 = _interopRequireDefault(_scribePluginHeadingCommand);

	var _scribePluginLinkPromptCommand = __webpack_require__(615);

	var _scribePluginLinkPromptCommand2 = _interopRequireDefault(_scribePluginLinkPromptCommand);

	var _scribePluginIntelligentUnlinkCommand = __webpack_require__(620);

	var _scribePluginIntelligentUnlinkCommand2 = _interopRequireDefault(_scribePluginIntelligentUnlinkCommand);

	var _Layouts = __webpack_require__(621);

	var _Editor = __webpack_require__(633);

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

/***/ 621:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PageContent = exports.Page = exports.MediaFigure = exports.MediaBody = exports.Media = exports.ListInlineItem = exports.ListInline = exports.ListItem = exports.List = exports.GridItem = exports.Grid = exports.Wrap = exports.Flex = exports.Block = undefined;

	var _Block = __webpack_require__(622);

	var _Block2 = _interopRequireDefault(_Block);

	var _Flex = __webpack_require__(623);

	var _Flex2 = _interopRequireDefault(_Flex);

	var _Wrap = __webpack_require__(624);

	var _Wrap2 = _interopRequireDefault(_Wrap);

	var _Grid = __webpack_require__(625);

	var _List = __webpack_require__(626);

	var _ListInline = __webpack_require__(628);

	var _Media = __webpack_require__(630);

	var _Page = __webpack_require__(632);

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

/***/ 622:
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

/***/ 623:
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

/***/ 624:
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

/***/ 625:
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

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListItem = exports.List = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _List = __webpack_require__(627);

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

/***/ 627:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"list":"List__list___2kBUd","list__item":"List__list__item___1D2VF"};

/***/ },

/***/ 628:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ListInlineItem = exports.ListInline = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ListInline = __webpack_require__(629);

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

/***/ 629:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"listInline":"ListInline__listInline___3Gjhu","listInline__item":"ListInline__listInline__item___2K1kQ"};

/***/ },

/***/ 630:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.MediaFigure = exports.MediaBody = exports.Media = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Media = __webpack_require__(631);

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

/***/ 631:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"media":"Media__media___3a00G","media__figure":"Media__media__figure___24ZwA","media__body":"Media__media__body___3Vd2-"};

/***/ },

/***/ 632:
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

/***/ 633:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Editor":"Editor__Editor___3mG0x","Editor__label":"Editor__Editor__label___1hd-U","Editor__body":"Editor__Editor__body___3FufQ","Editor__toolbar":"Editor__Editor__toolbar___2cbgU","Editor__command":"Editor__Editor__command___15KXk","Editor__command_h1":"Editor__Editor__command_h1___2avrE","Editor__command_h2":"Editor__Editor__command_h2___5j-Nt","Editor__command_h3":"Editor__Editor__command_h3___2tAjL","Editor__command_bold":"Editor__Editor__command_bold___3YdJ3","Editor__command_italic":"Editor__Editor__command_italic___1UZA0","Editor__command_ol":"Editor__Editor__command_ol___2RQbn","Editor__command_ul":"Editor__Editor__command_ul___cs9Vd","Editor__command_link":"Editor__Editor__command_link___1_DRv","Editor__command_unlink":"Editor__Editor__command_unlink___3Dw7t","Editor__separator":"Editor__Editor__separator___bf0pe","Editor__editor":"Editor__Editor__editor___1_SxC","Editor__error":"Editor__Editor__error___1nMXd","Editor_error":"Editor__Editor_error___1G66C"};

/***/ },

/***/ 634:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Select = __webpack_require__(635);

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

/***/ 635:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Select":"Select__Select___1rPbL","Select__label":"Select__Select__label___1GWvW","Select__wrap":"Select__Select__wrap___wvRax","Select__fake":"Select__Select__fake___3wkdd","Select__input":"Select__Select__input___r7ey7"};

/***/ },

/***/ 636:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalWindowFooter = exports.ModalWindowHeader = exports.ModalWindowBody = exports.ModalWindow = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _ModalWindow = __webpack_require__(637);

	var _ModalWindow2 = _interopRequireDefault(_ModalWindow);

	var _Layouts = __webpack_require__(621);

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

/***/ 637:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Modal":"ModalWindow__Modal___2klcg","ModalWindow":"ModalWindow__ModalWindow___2tVyZ","ModalWindow__header":"ModalWindow__ModalWindow__header___1QrWH","ModalWindow__body":"ModalWindow__ModalWindow__body___3QuQh","ModalWindow__footer":"ModalWindow__ModalWindow__footer___2I0TF"};

/***/ },

/***/ 638:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _reactTime = __webpack_require__(639);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _Badge = __webpack_require__(745);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _QuestionsListItem = __webpack_require__(747);

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

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Badge = __webpack_require__(746);

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

/***/ 746:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Badge":"Badge__Badge___33eQR","Badge_blue":"Badge__Badge_blue___z33Rl","Badge_red":"Badge__Badge_red___3ZrSl","Badge_green":"Badge__Badge_green___o4HV6"};

/***/ },

/***/ 747:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"QuestionsListItem":"QuestionsListItem__QuestionsListItem___29rxy","QuestionsListItem__sender":"QuestionsListItem__QuestionsListItem__sender___1gm_J","QuestionsListItem__message":"QuestionsListItem__QuestionsListItem__message___2i7nk","QuestionsListItem__badges":"QuestionsListItem__QuestionsListItem__badges___PLxac","QuestionsListItem__timestamp":"QuestionsListItem__QuestionsListItem__timestamp___raaCd","QuestionsListItem_active":"QuestionsListItem__QuestionsListItem_active___2s595","Sender":"QuestionsListItem__Sender___3JTku","Message":"QuestionsListItem__Message___28a7V","Timestamp":"QuestionsListItem__Timestamp___2L3tQ"};

/***/ },

/***/ 748:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"QuestionsList__Wrapper___1Ighq","Wrapper_dimmed":"QuestionsList__Wrapper_dimmed___1tCSW","QuestionsList":"QuestionsList__QuestionsList___v1msO","Heading":"QuestionsList__Heading___8_nKm","Heading__name":"QuestionsList__Heading__name___21QEK","Heading__timestamp":"QuestionsList__Heading__timestamp___1CNFB","Name":"QuestionsList__Name___37vg-","Timestamp":"QuestionsList__Timestamp___3f4iB"};

/***/ },

/***/ 749:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(639);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _reactRedux = __webpack_require__(469);

	var _reactRouter = __webpack_require__(491);

	var _questionsActions = __webpack_require__(545);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Badge = __webpack_require__(745);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _Question = __webpack_require__(750);

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

/***/ 750:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Question":"Question__Question___1ibu6","Question__body":"Question__Question__body___2R4pe","Question__footer":"Question__Question__footer___4VWYy","Name":"Question__Name___14bOP","Email":"Question__Email___1D3Op","Timestamp":"Question__Timestamp___2rswh"};

/***/ },

/***/ 751:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _usersActions = __webpack_require__(752);

	var _Loading = __webpack_require__(549);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UsersListItem = __webpack_require__(753);

	var _UsersListItem2 = _interopRequireDefault(_UsersListItem);

	var _UI = __webpack_require__(551);

	var _Layouts = __webpack_require__(621);

	var _UsersList = __webpack_require__(755);

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

/***/ 752:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteUser = exports.createUser = exports.updateUser = exports.fetchUsers = exports.REJECT_DELETE_USER = exports.CONFIRM_DELETE_USER = exports.REQUEST_DELETE_USER = exports.REJECT_CREATE_USER = exports.CONFIRM_CREATE_USER = exports.REQUEST_CREATE_USER = exports.REJECT_UPDATE_USER = exports.CONFIRM_UPDATE_USER = exports.REQUEST_UPDATE_USER = exports.RECEIVE_USERS = exports.REQUEST_USERS = undefined;

	__webpack_require__(546);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(547);

	var _authActions = __webpack_require__(548);

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

/***/ 753:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactTime = __webpack_require__(639);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _UI = __webpack_require__(551);

	var _Layouts = __webpack_require__(621);

	var _Badge = __webpack_require__(745);

	var _Badge2 = _interopRequireDefault(_Badge);

	var _UsersListItem = __webpack_require__(754);

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

/***/ 754:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UsersListItem":"UsersListItem__UsersListItem___1joA7","UsersListItem__name":"UsersListItem__UsersListItem__name___1Az27","UsersListItem__email":"UsersListItem__UsersListItem__email___3kbUo","UsersListItem__badges":"UsersListItem__UsersListItem__badges___36ZiO","UsersListItem__timestamp":"UsersListItem__UsersListItem__timestamp___2EbZP","Name":"UsersListItem__Name___2JbEz","Email":"UsersListItem__Email___1rOZ0","Badge":"UsersListItem__Badge___1aEbU","Timestamp":"UsersListItem__Timestamp___iYfJl","Actions":"UsersListItem__Actions___256Cq"};

/***/ },

/***/ 755:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"UsersList__Wrapper___1bVYX","Wrapper_dimmed":"UsersList__Wrapper_dimmed___1ILl9","UsersList":"UsersList__UsersList___3207V","Heading":"UsersList__Heading___1aN8k","Heading__name":"UsersList__Heading__name___2MpQ7","Heading__email":"UsersList__Heading__email___3a0XK","Heading__timestamp":"UsersList__Heading__timestamp___1M4UY","Name":"UsersList__Name___XcDaq","Email":"UsersList__Email___lsO-f","Timestamp":"UsersList__Timestamp___1wTeQ"};

/***/ },

/***/ 756:
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

	var _usersActions = __webpack_require__(752);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _EditUserForm = __webpack_require__(757);

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

/***/ 757:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"EditUserForm":"EditUserForm__EditUserForm___34UyP","EditUserForm__body":"EditUserForm__EditUserForm__body___1Ujl7","EditUserForm__footer":"EditUserForm__EditUserForm__footer___3tJSw"};

/***/ },

/***/ 758:
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

	var _usersActions = __webpack_require__(752);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _NewUserForm = __webpack_require__(759);

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

/***/ 759:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"NewUserForm":"NewUserForm__NewUserForm___HKLQg","NewUserForm__body":"NewUserForm__NewUserForm__body___hYcMF","NewUserForm__footer":"NewUserForm__NewUserForm__footer___1vS6f"};

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteArticle = exports.createArticle = exports.updateArticle = exports.fetchArticles = exports.REJECT_DELETE_ARTICLE = exports.CONFIRM_DELETE_ARTICLE = exports.REQUEST_DELETE_ARTICLE = exports.REJECT_CREATE_ARTICLE = exports.CONFIRM_CREATE_ARTICLE = exports.REQUEST_CREATE_ARTICLE = exports.REJECT_UPDATE_ARTICLE = exports.CONFIRM_UPDATE_ARTICLE = exports.REQUEST_UPDATE_ARTICLE = exports.RECEIVE_ARTICLES = exports.REQUEST_ARTICLES = undefined;

	__webpack_require__(546);

	var _reactRouter = __webpack_require__(491);

	var _sectionsActions = __webpack_require__(762);

	var _flashActions = __webpack_require__(547);

	var _authActions = __webpack_require__(548);

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

/***/ 762:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.deleteSection = exports.createSection = exports.updateSection = exports.fetchSections = exports.REJECT_DELETE_SECTION = exports.CONFIRM_DELETE_SECTION = exports.REQUEST_DELETE_SECTION = exports.REJECT_CREATE_SECTION = exports.CONFIRM_CREATE_SECTION = exports.REQUEST_CREATE_SECTION = exports.REJECT_UPDATE_SECTION = exports.CONFIRM_UPDATE_SECTION = exports.REQUEST_UPDATE_SECTION = exports.RECEIVE_SECTIONS = exports.REQUEST_SECTIONS = undefined;

	__webpack_require__(546);

	var _reactRouter = __webpack_require__(491);

	var _flashActions = __webpack_require__(547);

	var _authActions = __webpack_require__(548);

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

/***/ 763:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Section = __webpack_require__(764);

	var _Section2 = _interopRequireDefault(_Section);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Section = function Section() {
	  return _react2.default.createElement(
	    'div',
	    { className: _Section2.default.Section },
	    'I am Section component!'
	  );
	};

	exports.default = Section;

/***/ },

/***/ 764:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Section":"Section__Section___35Bcb"};

/***/ },

/***/ 765:
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

	var _reactSortable = __webpack_require__(766);

	var _sectionsActions = __webpack_require__(762);

	var _articleActions = __webpack_require__(761);

	var _SectionsListItem = __webpack_require__(768);

	var _SectionsListItem2 = _interopRequireDefault(_SectionsListItem);

	var _Loading = __webpack_require__(549);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(551);

	var _SubSectionsList = __webpack_require__(778);

	var _SubSectionsList2 = _interopRequireDefault(_SubSectionsList);

	var _Wrapper = __webpack_require__(779);

	var _Wrapper2 = _interopRequireDefault(_Wrapper);

	var _Table = __webpack_require__(781);

	var _Table2 = _interopRequireDefault(_Table);

	var _TableRow = __webpack_require__(769);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(771);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(773);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(621);

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
	        items: props.metaSection ? props.metaSection.data.children : []
	      }
	    };
	    return _this;
	  }

	  _createClass(SectionsList, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var _props = this.props;
	      var fetchSections = _props.fetchSections;
	      var fetchArticles = _props.fetchArticles;


	      fetchSections();
	      fetchArticles();
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(newProps) {
	      if (newProps.metaSection) {
	        this.setState({
	          data: {
	            items: newProps.metaSection.data.children
	          }
	        });
	      }
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(obj) {
	      if (obj.draggingIndex === null) {
	        var _props2 = this.props;
	        var metaSection = _props2.metaSection;
	        var _updateSection = _props2.updateSection;


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

	      var _props3 = this.props;
	      var children = _props3.children;
	      var isFetching = _props3.isFetching;
	      var metaSection = _props3.metaSection;
	      var sections = _props3.sections;
	      var location = _props3.location;
	      var params = _props3.params;


	      if (isFetching) {
	        return _react2.default.createElement(_Loading2.default, null);
	      } else {
	        var _ret = function () {
	          var isNewSectionRoute = location.pathname === '/sections/new';
	          var isEditSectionRoute = location.pathname === '/sections/' + params.sectionId + '/edit';
	          var disableInteraction = isNewSectionRoute || isEditSectionRoute;

	          return {
	            v: _react2.default.createElement(
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
	                    { width: 'stretch' },
	                    _react2.default.createElement(
	                      _TableCell2.default,
	                      null,
	                      'url'
	                    )
	                  ),
	                  _react2.default.createElement(
	                    _TableColumn2.default,
	                    { last: true,
	                      width: '20' },
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
	                _this2.state.data.items.map(function (sectionId, i) {
	                  if (isEditSectionRoute && sectionId === params.sectionId) {
	                    return _react2.default.createElement(
	                      'div',
	                      { key: i },
	                      children
	                    );
	                  } else {
	                    var _ret2 = function () {
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

	                    if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	                  }
	                })
	              )
	            )
	          };
	        }();

	        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	      }
	    }
	  }]);

	  return SectionsList;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var metaSection = state.sections.items.find(function (s) {
	    return s.data.url === 'main-nav' && s.data.sectionType === 'meta';
	  });

	  return {
	    isFetching: state.sections.isFetching || state.articles.isFetching,
	    sections: state.sections.items,
	    metaSection: metaSection
	  };
	}, function (dispatch) {
	  return {
	    fetchSections: function fetchSections() {
	      dispatch((0, _sectionsActions.fetchSections)());
	    },
	    fetchArticles: function fetchArticles() {
	      dispatch((0, _articleActions.fetchArticles)());
	    },
	    updateSection: function updateSection(id, data) {
	      dispatch((0, _sectionsActions.updateSection)(id, data));
	    }
	  };
		})(SectionsList);

/***/ },

/***/ 768:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(769);

	var _TableRow2 = _interopRequireDefault(_TableRow);

	var _TableColumn = __webpack_require__(771);

	var _TableColumn2 = _interopRequireDefault(_TableColumn);

	var _TableCell = __webpack_require__(773);

	var _TableCell2 = _interopRequireDefault(_TableCell);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Icon = __webpack_require__(775);

	var _Icon2 = _interopRequireDefault(_Icon);

	var _SectionsListItem = __webpack_require__(777);

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
	        { width: 'stretch' },
	        _react2.default.createElement(
	          _TableCell2.default,
	          null,
	          url
	        )
	      ),
	      _react2.default.createElement(
	        _TableColumn2.default,
	        { width: '20',
	          last: true },
	        actions
	      )
	    )
	  );
	};

	exports.default = SectionsListItem;

/***/ },

/***/ 769:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableRow = __webpack_require__(770);

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

/***/ 770:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableRow":"TableRow__TableRow___2UBN9","TableRow_heading":"TableRow__TableRow_heading___1Z9eQ","TableRow_interactive":"TableRow__TableRow_interactive___i5JrV","TableRow_indented":"TableRow__TableRow_indented___28V76"};

/***/ },

/***/ 771:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _TableColumn = __webpack_require__(772);

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

/***/ 772:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableColumn":"TableColumn__TableColumn___1Tubs"};

/***/ },

/***/ 773:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _TableCell = __webpack_require__(774);

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

/***/ 774:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"TableCell":"TableCell__TableCell___3jCxo","TableCell_title":"TableCell__TableCell_title___OVykt","TableHeadingCell":"TableCell__TableHeadingCell___3CSTD","TableHeadingCell_title":"TableCell__TableHeadingCell_title___yOdW6"};

/***/ },

/***/ 775:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Icon = __webpack_require__(776);

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

/***/ 776:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Icon":"Icon__Icon___38Epv","Icon_envelope":"Icon__Icon_envelope___2tNQx","Icon_folder":"Icon__Icon_folder___1Y4nT","Icon_fileCode":"Icon__Icon_fileCode___LdmN-","Icon_fileText":"Icon__Icon_fileText___3SbW0","Icon_fileTextDraft":"Icon__Icon_fileTextDraft___3NSnR","Icon_fileBlogpost":"Icon__Icon_fileBlogpost___AsM8g","Icon_fileBlogpostDraft":"Icon__Icon_fileBlogpostDraft___2HSJ0","Icon_user":"Icon__Icon_user___360fJ","Icon_userAdmin":"Icon__Icon_userAdmin___2wgqB","Icon_userDisabled":"Icon__Icon_userDisabled___DcJp9","Icon_plus":"Icon__Icon_plus___10pTv"};

/***/ },

/***/ 777:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SectionsListItem":"SectionsListItem__SectionsListItem___1KZEQ","SectionsListItem__actions":"SectionsListItem__SectionsListItem__actions___xiBIG","SectionsListItem_interactive":"SectionsListItem__SectionsListItem_interactive___iEJJ_"};

/***/ },

/***/ 778:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _reactSortable = __webpack_require__(766);

	var _sectionsActions = __webpack_require__(762);

	var _SectionsListItem = __webpack_require__(768);

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

	      var isNewSectionRoute = location.pathname === '/sections/new' && location.query.parentId === section.data._id;
	      var isEditSectionRoute = location.pathname === '/sections/' + params.sectionId + '/edit';
	      var disableInteraction = isNewSectionRoute || isEditSectionRoute;

	      return _react2.default.createElement(
	        'div',
	        null,
	        isNewSectionRoute ? children : '',
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

/***/ 779:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Wrapper = __webpack_require__(780);

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

/***/ 780:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Wrapper":"Wrapper__Wrapper___1t_G-","Wrapper_dimmed":"Wrapper__Wrapper_dimmed___1iGtc"};

/***/ },

/***/ 781:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Table = __webpack_require__(782);

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

/***/ 782:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Table":"Table__Table___3vKIR","Table_breadcrumbs":"Table__Table_breadcrumbs___3N73o"};

/***/ },

/***/ 783:
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

	var _sectionsActions = __webpack_require__(762);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Form = __webpack_require__(784);

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

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FormFooter = exports.FormBody = exports.FormHeader = exports.Form = undefined;

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _Form = __webpack_require__(785);

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

/***/ 785:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Form":"Form__Form___2zwZf","Form__header":"Form__Form__header___Llkaf","Form__body":"Form__Form__body___v6Ya2","Form__footer":"Form__Form__footer___UiRNW"};

/***/ },

/***/ 786:
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

	var _sectionsActions = __webpack_require__(762);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Form = __webpack_require__(784);

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

	var _articleActions = __webpack_require__(761);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Form = __webpack_require__(784);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var newArticle = function (_React$Component) {
	  _inherits(newArticle, _React$Component);

	  function newArticle(props) {
	    _classCallCheck(this, newArticle);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(newArticle).call(this, props));

	    _this.save = _this.save.bind(_this);
	    _this.change = _this.change.bind(_this);

	    var type = '';
	    if (props.parent.data.sectionType === 'blogposts') {
	      type = 'blogpost';
	    } else if (props.location.query.type === 'heading') {
	      type = 'heading';
	    } else {
	      type = 'article';
	    }

	    _this.state = {
	      data: {
	        title: '',
	        url: '',
	        snippet: '',
	        content: '',
	        articleType: type,
	        isPublished: false,
	        isFrequent: false,
	        parent: props.params.sectionId
	      },
	      errors: {}
	    };
	    return _this;
	  }

	  _createClass(newArticle, [{
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
	      var location = _props.location;
	      var parent = _props.parent;


	      var type = '';
	      if (parent.data.sectionType === 'blogposts') {
	        type = 'blogpost';
	      } else if (location.query.type === 'heading') {
	        type = 'heading';
	      } else {
	        type = 'article';
	      }

	      var title = '';
	      if (type === 'article') {
	        title = 'article';
	      } else if (type === 'blogpost') {
	        title = 'blog post';
	      } else if (type === 'heading') {
	        title = 'heading';
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
	          type !== 'heading' ? _react2.default.createElement(
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
	          type === 'article' ? _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Featured:',
	              checked: this.state.data.isFrequent,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isFrequent', value);
	              } })
	          ) : '',
	          type === 'blogpost' ? _react2.default.createElement(
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
	          type !== 'heading' ? _react2.default.createElement(_UI.Editor, {
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
	                  to: '/sections/' + params.navigationType + '/' + params.sectionId + '/articles/' },
	                'Cancel'
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return newArticle;
	}(_react2.default.Component);

	exports.default = (0, _reactRedux.connect)(function (state, ownProps) {
	  var sectionId = ownProps.params.sectionId;

	  var parent = state.sections.items.find(function (s) {
	    return s.data._id === sectionId;
	  });

	  return {
	    item: state.articles.newArticle,
	    parent: parent
	  };
	}, function (dispatch, ownProps) {
	  var params = ownProps.params;


	  return {
	    createArticle: function createArticle(data) {
	      dispatch((0, _articleActions.createArticle)(data, '/sections/' + params.navigationType + '/' + params.sectionId + '/articles/'));
	    }
	  };
		})(newArticle);

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

	var _reactRedux = __webpack_require__(469);

	var _articleActions = __webpack_require__(761);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _Form = __webpack_require__(784);

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
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props3 = this.props;
	      var isUpdating = _props3.params.isUpdating;
	      var params = _props3.params;

	      var articleTypes = [{
	        id: 'article',
	        label: 'Article'
	      }, {
	        id: 'heading',
	        label: 'Heading'
	      }];

	      var body = '';
	      if (this.state.data.articleType === 'article') {
	        body = _react2.default.createElement(
	          'div',
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
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Input, { label: 'url',
	              value: this.state.data.url,
	              error: this.state.errors.url,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('url', value);
	              } })
	          ),
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
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Checkbox, { label: 'Featured:',
	              checked: this.state.data.isFrequent,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('isFrequent', value);
	              } })
	          ),
	          _react2.default.createElement(_UI.Editor, {
	            label: 'Content:',
	            value: this.state.data.content,
	            error: this.state.errors.content,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('content', value);
	            } })
	        );
	      } else {
	        body = _react2.default.createElement(
	          'div',
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
	          _react2.default.createElement(_UI.Checkbox, { label: 'Published:',
	            checked: this.state.data.isPublished,
	            disabled: isUpdating,
	            onChange: function onChange(value) {
	              return _this2.change('isPublished', value);
	            } })
	        );
	      }

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
	              to: '/sections/' + params.navigationType + '/' + params.sectionId + '/articles/' },
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
	                to: '/sections/' + params.navigationType + '/' + params.sectionId + '/articles/' },
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
	          this.state.data.articleType === 'article' ? 'Edit article' : 'Edit heading'
	        ),
	        _react2.default.createElement(
	          _Form.FormBody,
	          null,
	          _react2.default.createElement(
	            _Layouts.Block,
	            null,
	            _react2.default.createElement(_UI.Select, { label: 'Type',
	              value: this.state.data.articleType,
	              options: articleTypes,
	              disabled: isUpdating,
	              onChange: function onChange(value) {
	                return _this2.change('articleType', value);
	              } })
	          ),
	          body
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

	  var backlink = '/sections/' + params.navigationType + '/' + params.sectionId + '/articles';

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

/***/ 796:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _reactTime = __webpack_require__(639);

	var _reactTime2 = _interopRequireDefault(_reactTime);

	var _searchIndexActions = __webpack_require__(797);

	var _Loading = __webpack_require__(549);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _UI = __webpack_require__(551);

	var _SearchIndex = __webpack_require__(798);

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

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.updateSearchIndex = exports.fetchSearchIndex = exports.CONFIRM_UPDATE_INDEX = exports.REQUEST_UPDATE_INDEX = exports.RECEIVE_INDEX = exports.REQUEST_INDEX = undefined;

	__webpack_require__(546);

	var _flashActions = __webpack_require__(547);

	var _authActions = __webpack_require__(548);

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

/***/ 798:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"SearchIndex":"SearchIndex__SearchIndex___PkDYb","SearchIndex__body":"SearchIndex__SearchIndex__body___3Rf_K","Heading":"SearchIndex__Heading___1qFG7","Name":"SearchIndex__Name___8JU4H"};

/***/ },

/***/ 799:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 800:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _FlashMessage = __webpack_require__(801);

	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);

	var _Loading = __webpack_require__(549);

	var _Loading2 = _interopRequireDefault(_Loading);

	var _Login = __webpack_require__(802);

	var _Login2 = _interopRequireDefault(_Login);

	var _AppHeader = __webpack_require__(803);

	var _AppHeader2 = _interopRequireDefault(_AppHeader);

	var _authActions = __webpack_require__(548);

	var _App = __webpack_require__(809);

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

/***/ 801:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _UI = __webpack_require__(551);

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

/***/ 802:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _authActions = __webpack_require__(548);

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

/***/ 803:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _UserInfo = __webpack_require__(804);

	var _UserInfo2 = _interopRequireDefault(_UserInfo);

	var _Nav = __webpack_require__(806);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _Layouts = __webpack_require__(621);

	var _AppHeader = __webpack_require__(808);

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

/***/ 804:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(469);

	var _authActions = __webpack_require__(548);

	var _flashActions = __webpack_require__(547);

	var _Layouts = __webpack_require__(621);

	var _UI = __webpack_require__(551);

	var _UserInfo = __webpack_require__(805);

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

/***/ 805:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"UserInfo":"UserInfo__UserInfo___2SMjJ","UserInfo__username":"UserInfo__UserInfo__username___2zypV"};

/***/ },

/***/ 806:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(299);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(491);

	var _Layouts = __webpack_require__(621);

	var _Nav = __webpack_require__(807);

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

/***/ 807:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"Nav":"Nav__Nav___3Pyye","Nav__item":"Nav__Nav__item___5HbuE","Nav__item_active":"Nav__Nav__item_active___2q4tT"};

/***/ },

/***/ 808:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"AppHeader":"AppHeader__AppHeader___2U4KO","AppHeader__sitename":"AppHeader__AppHeader__sitename___3cf-R"};

/***/ },

/***/ 809:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"App":"App__App___lBEXI"};

/***/ },

/***/ 810:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _reduxLogger = __webpack_require__(811);

	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

	var _reduxThunk = __webpack_require__(812);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _rootReducer = __webpack_require__(813);

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

/***/ 813:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _redux = __webpack_require__(476);

	var _authReducer = __webpack_require__(814);

	var _authReducer2 = _interopRequireDefault(_authReducer);

	var _flashReducer = __webpack_require__(816);

	var _flashReducer2 = _interopRequireDefault(_flashReducer);

	var _questionsReducer = __webpack_require__(817);

	var _questionsReducer2 = _interopRequireDefault(_questionsReducer);

	var _articleReducer = __webpack_require__(818);

	var _articleReducer2 = _interopRequireDefault(_articleReducer);

	var _usersReducer = __webpack_require__(819);

	var _usersReducer2 = _interopRequireDefault(_usersReducer);

	var _sectionsReducer = __webpack_require__(820);

	var _sectionsReducer2 = _interopRequireDefault(_sectionsReducer);

	var _searchIndexReducer = __webpack_require__(821);

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

/***/ 814:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _authActions = __webpack_require__(548);

	var _initialState = __webpack_require__(815);

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

/***/ 815:
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

/***/ 816:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _flashActions = __webpack_require__(547);

	var _initialState = __webpack_require__(815);

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

/***/ 817:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _questionsActions = __webpack_require__(545);

	var _initialState = __webpack_require__(815);

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

/***/ 818:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _articleActions = __webpack_require__(761);

	var _initialState = __webpack_require__(815);

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

/***/ 819:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _usersActions = __webpack_require__(752);

	var _initialState = __webpack_require__(815);

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

/***/ 820:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _sectionsActions = __webpack_require__(762);

	var _initialState = __webpack_require__(815);

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

/***/ 821:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _searchIndexActions = __webpack_require__(797);

	var _initialState = __webpack_require__(815);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdC9RdWVzdGlvbnNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3F1ZXN0aW9uc0FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9hdXRoQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTG9hZGluZy9Mb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2FkaW5nL0xvYWRpbmcuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9VSS5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvU3Bpbm5lci9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvSWNvbkJ1dHRvbi9JY29uQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9MaW5rQnV0dG9uL0xpbmtCdXR0b24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0lucHV0L0lucHV0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9DaGVja2JveC9DaGVja2JveC5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvQmxvY2svQmxvY2suanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xheW91dHMvV3JhcC9XcmFwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9HcmlkL0dyaWQuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3RJbmxpbmUvTGlzdElubGluZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXRzL01lZGlhL01lZGlhLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL0VkaXRvci9FZGl0b3IuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9VSS9TZWxlY3QvU2VsZWN0LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VJL01vZGFsV2luZG93L01vZGFsV2luZG93LmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9CYWRnZS9CYWRnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3RJdGVtL1F1ZXN0aW9uc0xpc3RJdGVtLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0L1F1ZXN0aW9uc0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3VzZXJzQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVXNlcnNMaXN0SXRlbS9Vc2Vyc0xpc3RJdGVtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3RJdGVtL1VzZXJzTGlzdEl0ZW0uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdC9Vc2Vyc0xpc3QuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FZGl0VXNlckZvcm0vRWRpdFVzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3VXNlckZvcm0vTmV3VXNlckZvcm0uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmNzcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2FydGljbGVBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24vU2VjdGlvbi5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdC9TZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3RJdGVtL1NlY3Rpb25zTGlzdEl0ZW0uanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZVJvdy9UYWJsZVJvdy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVSb3cvVGFibGVSb3cuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZUNlbGwvVGFibGVDZWxsLmNzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvSWNvbi9JY29uLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9JY29uL0ljb24uY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1N1YlNlY3Rpb25zTGlzdC9TdWJTZWN0aW9uc0xpc3QuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05ld1NlY3Rpb25Gb3JtL05ld1NlY3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtL0Zvcm0uY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0vRWRpdFNlY3Rpb25Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvTmV3QXJ0aWNsZS9OZXdBcnRpY2xlLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRWRpdEFydGljbGVGb3JtL0VkaXRBcnRpY2xlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1NlYXJjaEluZGV4L1NlYXJjaEluZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL3NlYXJjaEluZGV4QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2hJbmRleC9TZWFyY2hJbmRleC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlL0ZsYXNoTWVzc2FnZS5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL0xvZ2luL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby9Vc2VySW5mby5jc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL05hdi9OYXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdi9OYXYuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcEhlYWRlci9BcHBIZWFkZXIuY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC9BcHAuY3NzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9zdG9yZS9yb290UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2F1dGhSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvaW5pdGlhbFN0YXRlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvcXVlc3Rpb25zUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvdXNlcnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VjdGlvbnNSZWR1Y2VyLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvc2VhcmNoSW5kZXhSZWR1Y2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnYmFiZWwtcG9seWZpbGwnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7Um91dGVyLCBSb3V0ZSwgSW5kZXhSZWRpcmVjdCwgaGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IFF1ZXN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3QnXG5pbXBvcnQgUXVlc3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1F1ZXN0aW9uJ1xuXG5pbXBvcnQgVXNlcnNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Vc2Vyc0xpc3QnXG5pbXBvcnQgRWRpdFVzZXJGb3JtIGZyb20gJy4vY29tcG9uZW50cy9FZGl0VXNlckZvcm0nXG5pbXBvcnQgTmV3VXNlckZvcm0gZnJvbSAnLi9jb21wb25lbnRzL05ld1VzZXJGb3JtJ1xuXG4vLyBpbXBvcnQgU2VjdGlvbnMgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zJ1xuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb24nXG5cbmltcG9ydCBTZWN0aW9uc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL1NlY3Rpb25zTGlzdCdcbmltcG9ydCBOZXdTZWN0aW9uRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmV3U2VjdGlvbkZvcm0nXG5pbXBvcnQgRWRpdFNlY3Rpb25Gb3JtIGZyb20gJy4vY29tcG9uZW50cy9FZGl0U2VjdGlvbkZvcm0nXG5cbi8vIGltcG9ydCBCbG9ncG9zdHNMaXN0IGZyb20gJy4vY29tcG9uZW50cy9CbG9ncG9zdHNMaXN0J1xuLy8gaW1wb3J0IE5ld0Jsb2dwb3N0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvTmV3QmxvZ3Bvc3RGb3JtJ1xuLy8gaW1wb3J0IEVkaXRCbG9ncG9zdEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0VkaXRCbG9ncG9zdEZvcm0nXG5cbi8vIGltcG9ydCBBcnRpY2xlc0xpc3QgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVzTGlzdCdcbmltcG9ydCBOZXdBcnRpY2xlIGZyb20gJy4vY29tcG9uZW50cy9OZXdBcnRpY2xlJ1xuaW1wb3J0IEVkaXRBcnRpY2xlRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvRWRpdEFydGljbGVGb3JtJ1xuXG4vLyBpbXBvcnQgQ3VzdG9tU2VjdGlvbkZvcm0gZnJvbSAnLi9jb21wb25lbnRzL0N1c3RvbVNlY3Rpb25Gb3JtJ1xuXG5pbXBvcnQgU2VhcmNoSW5kZXggZnJvbSAnLi9jb21wb25lbnRzL1NlYXJjaEluZGV4J1xuXG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcblxuLy8gaW1wb3J0IEFydGljbGVEaXJlY3RvcnkgZnJvbSAnLi9jb21wb25lbnRzL0FydGljbGVEaXJlY3RvcnknXG4vLyBpbXBvcnQgQXJ0aWNsZUNyZWF0ZSBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZUNyZWF0ZSdcbi8vIGltcG9ydCBBcnRpY2xlRWRpdCBmcm9tICcuL2NvbXBvbmVudHMvQXJ0aWNsZUVkaXQnXG4vL1xuLy8gaW1wb3J0IFVzZXJzTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvVXNlcnNMaXN0J1xuLy8gaW1wb3J0IFVzZXJzQ3JlYXRlIGZyb20gJy4vY29tcG9uZW50cy9Vc2Vyc0NyZWF0ZSdcbi8vIGltcG9ydCBVc2Vyc0VkaXQgZnJvbSAnLi9jb21wb25lbnRzL1VzZXJzRWRpdCdcbi8vXG4vLyBpbXBvcnQgUXVlc3Rpb25zTGlzdCBmcm9tICcuL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdCdcblxuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUnXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKVxuXG5jb25zdCBEdW1teSA9ICgpID0+IDxkaXYgLz5cblxuUmVhY3RET00ucmVuZGVyKChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPFJvdXRlciBoaXN0b3J5PXtoYXNoSGlzdG9yeX0+XG4gICAgICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxJbmRleFJlZGlyZWN0IHRvPVwicXVlc3Rpb25zXCIgLz5cblxuICAgICAgICA8Um91dGUgcGF0aD1cInF1ZXN0aW9uc1wiIGNvbXBvbmVudD17UXVlc3Rpb25zTGlzdH0+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6cXVlc3Rpb25JZFwiIGNvbXBvbmVudD17UXVlc3Rpb259IC8+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJ1c2Vyc1wiIGNvbXBvbmVudD17VXNlcnNMaXN0fT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIm5ld1wiIGNvbXBvbmVudD17TmV3VXNlckZvcm19IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6dXNlcklkXCIgY29tcG9uZW50PXtFZGl0VXNlckZvcm19IC8+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJzZWN0aW9uc1wiIGNvbXBvbmVudD17U2VjdGlvbnNMaXN0fT5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIm5ld1wiIGNvbXBvbmVudD17TmV3U2VjdGlvbkZvcm19IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCI6c2VjdGlvbklkL2VkaXRcIiBjb21wb25lbnQ9e0VkaXRTZWN0aW9uRm9ybX0gLz5cblxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiOnNlY3Rpb25JZFwiIGNvbXBvbmVudD17U2VjdGlvbn0+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cImFydGljbGVzL25ld1wiIGNvbXBvbmVudD17TmV3QXJ0aWNsZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiYXJ0aWNsZXMvOmFydGljbGVJZFwiIGNvbXBvbmVudD17RWRpdEFydGljbGVGb3JtfSAvPlxuICAgICAgICAgIDwvUm91dGU+XG4gICAgICAgIDwvUm91dGU+XG5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCJzZWFyY2gtaW5kZXhcIiBjb21wb25lbnQ9e1NlYXJjaEluZGV4fSAvPlxuICAgICAgPC9Sb3V0ZT5cbiAgICA8L1JvdXRlcj5cbiAgPC9Qcm92aWRlcj5cbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2ZldGNoUXVlc3Rpb25zfSBmcm9tICcuLi8uLi9zdG9yZS9xdWVzdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBRdWVzdGlvbnNMaXN0SXRlbSBmcm9tICcuLi9RdWVzdGlvbnNMaXN0SXRlbSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1F1ZXN0aW9uc0xpc3QuY3NzJ1xuXG5jbGFzcyBRdWVzdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hRdWVzdGlvbnN9ID0gdGhpcy5wcm9wc1xuXG4gICAgZmV0Y2hRdWVzdGlvbnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXN9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyYXBwZXJ9ICR7cGFyYW1zLnF1ZXN0aW9uSWQgPyBzdHlsZXMuV3JhcHBlcl9kaW1tZWQgOiAnJ31gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nX19uYW1lfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5hbWV9PlF1ZXN0aW9uPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuSGVhZGluZ19fdGltZXN0YW1wfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpbWVzdGFtcH0+UG9zdGVkIG9uPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGksIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFF1ZXN0aW9uc0xpc3RJdGVtIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbj17aX1cbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17cGFyYW1zLnF1ZXN0aW9uSWR9IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUucXVlc3Rpb25zLml0ZW1zLFxuICAgICAgaXNGZXRjaGluZzogc3RhdGUucXVlc3Rpb25zLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmV0Y2hRdWVzdGlvbnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hRdWVzdGlvbnMoKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb25zTGlzdClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3QvUXVlc3Rpb25zTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfUVVFU1RJT05TID0gJ1JFUVVFU1RfUVVFU1RJT05TJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfUVVFU1RJT05TID0gJ1JFQ0VJVkVfUVVFU1RJT05TJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9RVUVTVElPTl9VUERBVEUgPSAnUkVRVUVTVF9RVUVTVElPTl9VUERBVEUnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9RVUVTVElPTl9VUERBVEUgPSAnUkVDRUlWRV9RVUVTVElPTl9VUERBVEUnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9RVUVTVElPTiA9ICdSRVFVRVNUX0RFTEVURV9RVUVTVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9RVUVTVElPTiA9ICdDT05GSVJNX0RFTEVURV9RVUVTVElPTidcbmV4cG9ydCBjb25zdCBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OID0gJ1JFSkVDVF9ERUxFVEVfUVVFU1RJT04nXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0UXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05TXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVF1ZXN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfUVVFU1RJT05TLFxuICAgIGl0ZW1zXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoUXVlc3Rpb25zID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RRdWVzdGlvbnMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vcXVlc3Rpb25zL2AsIHtcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWNlaXZlUXVlc3Rpb25zKGpzb24uZGF0YS5xdWVzdGlvbnMpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChpZCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZVVwZGF0ZSA9IChcbiAgaWQsXG4gIHVwZGF0ZWRRdWVzdGlvblxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9RVUVTVElPTl9VUERBVEUsXG4gICAgaWQsXG4gICAgdXBkYXRlZFF1ZXN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgc3VjY2Vzc01lc3NhZ2VcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9xdWVzdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHF1ZXN0aW9uOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLnF1ZXN0aW9uKSlcbiAgICAgICAgICBpZiAoc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZShzdWNjZXNzTWVzc2FnZSwgJ2xvZycpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRocm93IGVyclxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0RGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfUVVFU1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OLFxuICAgIGlkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVF1ZXN0aW9uID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3F1ZXN0aW9ucy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnL3F1ZXN0aW9ucy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnUXVlc3Rpb24gd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvcXVlc3Rpb25zQWN0aW9ucy5qc1xuICoqLyIsImV4cG9ydCBjb25zdCBTRVRfTUVTU0FHRSA9ICdTRVRfTUVTU0FHRSdcbmV4cG9ydCBjb25zdCBVTlNFVF9NRVNTQUdFID0gJ1VOU0VUX01FU1NBR0UnXG5cbmNvbnN0IHNldE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlLFxuICB0aW1lb3V0SWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9NRVNTQUdFLFxuICAgIG1lc3NhZ2UsXG4gICAgbWVzc2FnZVR5cGUsXG4gICAgdGltZW91dElkXG4gIH1cbn1cblxuY29uc3QgdW5zZXRNZXNzYWdlID0gKFxuICBtZXNzYWdlLFxuICBtZXNzYWdlVHlwZVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogVU5TRVRfTUVTU0FHRVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmbGFzaE1lc3NhZ2UgPSAoXG4gIG1lc3NhZ2UsXG4gIG1lc3NhZ2VUeXBlXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCB0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBkaXNwYXRjaCh1bnNldE1lc3NhZ2UoKSlcbiAgICB9LCAyMDAwKVxuXG4gICAgZGlzcGF0Y2goc2V0TWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlVHlwZSwgdCkpXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9mbGFzaEFjdGlvbnMuanNcbiAqKi8iLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9BVVRIID0gJ1JFUVVFU1RfQVVUSCdcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTidcbmV4cG9ydCBjb25zdCBMT0dPVVQgPSAnTE9HT1VUJ1xuXG5jb25zdCByZXF1ZXN0QXV0aCA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FVVEhcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9nT3V0ID0gKCkgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgIGRpc3BhdGNoKHt0eXBlOiBMT0dPVVR9KVxuICB9XG59XG5cbmNvbnN0IGxvZ0luID0gKFxuICB1c2VyXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBMT0dJTixcbiAgICB1c2VyXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luV2l0aENyZWRlbnRpYWxzID0gKFxuICBlbWFpbCxcbiAgcGFzc3dvcmRcbikgPT4ge1xuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBdXRoKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2F1dGgvYWRtaW4vYXV0aGVudGljYXRlLWNyZWRlbnRpYWxzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGVtYWlsLFxuICAgICAgICBwYXNzd29yZFxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5XaXRoVG9rZW4gPSAoXG4gIHRva2VuXG4pID0+IHtcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0QXV0aCgpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hdXRoL2FkbWluL2F1dGhlbnRpY2F0ZS10b2tlbmAsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICB0b2tlblxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJywganNvbi5kYXRhLnRva2VuKVxuICAgICAgICAgIGRpc3BhdGNoKGxvZ0luKGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoanNvbi5kYXRhLmVycm9yLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZGluZy5jc3MnXG5pbXBvcnQge1NwaW5uZXJ9IGZyb20gJy4uL1VJJ1xuXG5jb25zdCBMb2FkaW5nID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTG9hZGluZ30+XG4gICAgICA8U3Bpbm5lciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMb2FkaW5nXCI6XCJMb2FkaW5nX19Mb2FkaW5nX19fM3B5Y3pcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xvYWRpbmcvTG9hZGluZy5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcidcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICcuL0ljb25CdXR0b24nXG5pbXBvcnQgTGlua0J1dHRvbiBmcm9tICcuL0xpbmtCdXR0b24nXG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4vQ2hlY2tib3gnXG5pbXBvcnQgRWRpdG9yIGZyb20gJy4vRWRpdG9yJ1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL1NlbGVjdCdcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93SGVhZGVyLCBNb2RhbFdpbmRvd0JvZHksIE1vZGFsV2luZG93Rm9vdGVyfSBmcm9tICcuL01vZGFsV2luZG93J1xuXG5leHBvcnQge1NwaW5uZXIsIEJ1dHRvbiwgSWNvbkJ1dHRvbiwgTGlua0J1dHRvbiwgQWxlcnQsXG4gIE1vZGFsV2luZG93LCBNb2RhbFdpbmRvd0hlYWRlciwgTW9kYWxXaW5kb3dCb2R5LCBNb2RhbFdpbmRvd0Zvb3RlcixcbiAgSW5wdXQsIENoZWNrYm94LCBFZGl0b3IsIFNlbGVjdH1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1VJLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3Bpbm5lci5jc3MnXG5cbmNvbnN0IFNwaW5uZXIgPSAoe1xuICBtdWx0aXBsaWVycyA9IHtcbiAgICBtaW5IZWlnaHQ6IDMwLFxuICAgIF9faW5uZXI6IHtcbiAgICAgIHdpZHRoOiA1LFxuICAgICAgaGVpZ2h0OiA1XG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1pbkhlaWdodDogYCR7YmFzZWxpbmUgKiBtdWx0aXBsaWVycy5taW5IZWlnaHR9cmVtYFxuICB9XG5cbiAgY29uc3QgX19pbm5lclN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHtiYXNlbGluZSAqIG11bHRpcGxpZXJzLl9faW5uZXIud2lkdGh9cmVtYCxcbiAgICBoZWlnaHQ6IGAke2Jhc2VsaW5lICogbXVsdGlwbGllcnMuX19pbm5lci5oZWlnaHR9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuU3Bpbm5lcn0+XG4gICAgICA8ZGl2IHN0eWxlPXtfX2lubmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLlNwaW5uZXJfX2lubmVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUyfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlM31gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTR9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU1fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlNn1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTd9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGU4fWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlOX1gfT48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5TcGlubmVyX19jaXJjbGV9ICR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZTEwfWB9PjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNwaW5uZXJfX2NpcmNsZX0gJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlMTF9YH0+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuU3Bpbm5lcl9fY2lyY2xlfSAke3N0eWxlcy5TcGlubmVyX19jaXJjbGUxMn1gfT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNwaW5uZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL1NwaW5uZXIvU3Bpbm5lci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTcGlubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19fMWZpeWtcIixcIlNwaW5uZXJfX2lubmVyXCI6XCJTcGlubmVyX19TcGlubmVyX19pbm5lcl9fXzU4dmNUXCIsXCJTcGlubmVyX19jaXJjbGVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZV9fXzJadWdPXCIsXCJzay1jaXJjbGVGYWRlRGVsYXlcIjpcIlNwaW5uZXJfX3NrLWNpcmNsZUZhZGVEZWxheV9fXzFFdG44XCIsXCJTcGlubmVyX19jaXJjbGUxXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxX19fQk9EN25cIixcIlNwaW5uZXJfX2NpcmNsZTJcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTJfX18yYUJ0clwiLFwiU3Bpbm5lcl9fY2lyY2xlM1wiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlM19fXzFCYVpmXCIsXCJTcGlubmVyX19jaXJjbGU0XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU0X19fM1Y1cjdcIixcIlNwaW5uZXJfX2NpcmNsZTVcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTVfX18zREo1WFwiLFwiU3Bpbm5lcl9fY2lyY2xlNlwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlNl9fX1pwVTVtXCIsXCJTcGlubmVyX19jaXJjbGU3XCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGU3X19fWHBuSzVcIixcIlNwaW5uZXJfX2NpcmNsZThcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZThfX18xX1JSWFwiLFwiU3Bpbm5lcl9fY2lyY2xlOVwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlOV9fX2ZPME9HXCIsXCJTcGlubmVyX19jaXJjbGUxMFwiOlwiU3Bpbm5lcl9fU3Bpbm5lcl9fY2lyY2xlMTBfX19uaTM1QVwiLFwiU3Bpbm5lcl9fY2lyY2xlMTFcIjpcIlNwaW5uZXJfX1NwaW5uZXJfX2NpcmNsZTExX19fMWhhdjlcIixcIlNwaW5uZXJfX2NpcmNsZTEyXCI6XCJTcGlubmVyX19TcGlubmVyX19jaXJjbGUxMl9fXzJpcHpUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9TcGlubmVyL1NwaW5uZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNTUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbi5jc3MnXG5cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNoaWxkcmVuLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsLFxuICBjb2xvciA9ICdibHVlJ1xufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lID0gW3N0eWxlcy5CdXR0b25dXG5cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWUucHVzaChzdHlsZXMuQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkJ1dHRvbl9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5CdXR0b25fYmx1ZSlcbiAgICAgIGJyZWFrXG4gIH1cblxuICBpZiAodG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IHRvPXt0b30+e2NoaWxkcmVufTwvTGluaz5cbiAgICApXG4gIH0gZWxzZSBpZiAoaHJlZikge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBkaXNhYmxlZD17ZGlzYWJsZWR9IGNsYXNzTmFtZT17Y2xhc3NOYW1lLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9IG9uQ2xpY2s9e29uQ2xpY2t9PntjaGlsZHJlbn08L2J1dHRvbj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9CdXR0b24vQnV0dG9uLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJ1dHRvblwiOlwiQnV0dG9uX19CdXR0b25fX19RSTdiMlwiLFwiQnV0dG9uX2JsdWVcIjpcIkJ1dHRvbl9fQnV0dG9uX2JsdWVfX195LW92MlwiLFwiQnV0dG9uX3JlZFwiOlwiQnV0dG9uX19CdXR0b25fcmVkX19fQXZRWXNcIixcIkJ1dHRvbl9ncmVlblwiOlwiQnV0dG9uX19CdXR0b25fZ3JlZW5fX195X2ZlMlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uL0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSWNvbkJ1dHRvbi5jc3MnXG5cbmNvbnN0IEljb25CdXR0b24gPSAoe1xuICB0eXBlLFxuICBvbkNsaWNrLFxuICBkaXNhYmxlZCA9IGZhbHNlLFxuICB0byA9IG51bGwsXG4gIGhyZWYgPSBudWxsXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWUgPSBbc3R5bGVzLkljb25CdXR0b25dXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgIGNsYXNzTmFtZS5wdXNoKHN0eWxlcy5JY29uQnV0dG9uX2RlbGV0ZSlcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnY2xvc2UnOlxuICAgICAgY2xhc3NOYW1lLnB1c2goc3R5bGVzLkljb25CdXR0b25fY2xvc2UpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICB0bz17dG99IC8+XG4gICAgKVxuICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGEgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZS5qb2luKCcgJyl9XG4gICAgICAgIGhyZWY9e2hyZWZ9IC8+XG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWUuam9pbignICcpfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfSAvPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uQnV0dG9uXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiSWNvbkJ1dHRvblwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9fX0dkVjdpXCIsXCJJY29uQnV0dG9uX2RlbGV0ZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9kZWxldGVfX19nbk5ZT1wiLFwiSWNvbkJ1dHRvbl9jbG9zZVwiOlwiSWNvbkJ1dHRvbl9fSWNvbkJ1dHRvbl9jbG9zZV9fXzI5X0dhXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9VSS9JY29uQnV0dG9uL0ljb25CdXR0b24uY3NzXG4gKiogbW9kdWxlIGlkID0gNTU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpbmtCdXR0b24uY3NzJ1xuXG5jb25zdCBMaW5rQnV0dG9uID0gKHtcbiAgY2hpbGRyZW4sXG4gIG9uQ2xpY2ssXG4gIGRpc2FibGVkID0gZmFsc2UsXG4gIHRvID0gbnVsbCxcbiAgaHJlZiA9IG51bGwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5MaW5rQnV0dG9uXVxuXG4gIHN3aXRjaCAoY29sb3IpIHtcbiAgICBjYXNlICdyZWQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2dyZWVuKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdibHVlJzpcbiAgICBkZWZhdWx0OlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5MaW5rQnV0dG9uX2JsdWUpXG4gICAgICBicmVha1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gdG89e3RvfT57Y2hpbGRyZW59PC9MaW5rPlxuICAgIClcbiAgfSBlbHNlIGlmIChocmVmKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxhIGRpc2FibGVkPXtkaXNhYmxlZH0gY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvYT5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2Rpc2FibGVkfSBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSBvbkNsaWNrPXtvbkNsaWNrfT57Y2hpbGRyZW59PC9idXR0b24+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtCdXR0b25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJMaW5rQnV0dG9uXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX19fMkZsaW1cIixcIkxpbmtCdXR0b25fYmx1ZVwiOlwiTGlua0J1dHRvbl9fTGlua0J1dHRvbl9ibHVlX19fMVc3c2xcIixcIkxpbmtCdXR0b25fcmVkXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX3JlZF9fXzNMdUdjXCIsXCJMaW5rQnV0dG9uX2dyZWVuXCI6XCJMaW5rQnV0dG9uX19MaW5rQnV0dG9uX2dyZWVuX19fM3V2cmJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0xpbmtCdXR0b24vTGlua0J1dHRvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA1NTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FsZXJ0LmNzcydcblxuY29uc3QgQWxlcnQgPSAoe1xuICBtZXNzYWdlLFxuICB0eXBlID0gJ2xvZydcbn0pID0+IHtcbiAgY29uc3QgbWVzc2FnZUNsYXNzTmFtZXMgPSBbc3R5bGVzLkFsZXJ0X19tZXNzYWdlXVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgIG1lc3NhZ2VDbGFzc05hbWVzLnB1c2goc3R5bGVzLkFsZXJ0X19tZXNzYWdlX2Vycm9yKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdsb2cnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBtZXNzYWdlQ2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5BbGVydF9fbWVzc2FnZV9sb2cpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWxlcnR9PlxuICAgICAge21lc3NhZ2VcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17bWVzc2FnZUNsYXNzTmFtZXMuam9pbignICcpfT57bWVzc2FnZX08L2Rpdj5cbiAgICAgICAgOiAnJ1xuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9BbGVydC9BbGVydC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJBbGVydFwiOlwiQWxlcnRfX0FsZXJ0X19fMzdfUUNcIixcIkFsZXJ0X19tZXNzYWdlXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfX18yd0NaRlwiLFwiQWxlcnRfX21lc3NhZ2VfbG9nXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfbG9nX19fMm41REhcIixcIkFsZXJ0X19tZXNzYWdlX2Vycm9yXCI6XCJBbGVydF9fQWxlcnRfX21lc3NhZ2VfZXJyb3JfX18yaWQ0V1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvQWxlcnQvQWxlcnQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9JbnB1dC5jc3MnXG5cbmNsYXNzIElucHV0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICB2YWx1ZSxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgbGFiZWwgPSBudWxsLFxuICAgICAgbGFiZWxXaWR0aCA9IDgsXG4gICAgICBwbGFjZWhvbGRlciA9ICcnLFxuICAgICAgdHlwZSA9ICd0ZXh0JyxcbiAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICBlcnJvciA9IG51bGxcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGVycm9yRWwgPSAnJ1xuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3JFbCA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLklucHV0fSAke2Vycm9yID8gc3R5bGVzLklucHV0X2Vycm9yIDogJyd9YH0+XG4gICAgICAgIHtsYWJlbFxuICAgICAgICAgID8gPGRpdiBzdHlsZT17e3dpZHRoOiBgJHtsYWJlbFdpZHRofXJlbWB9fSBjbGFzc05hbWU9e3N0eWxlcy5JbnB1dF9fbGFiZWx9PntsYWJlbH08L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuSW5wdXRfX2lucHV0fVxuICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgcmVmPXtlbCA9PiB7IHRoaXMuX2VsZW1lbnQgPSBlbCB9fVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZSh0aGlzLl9lbGVtZW50LnZhbHVlKX0gLz5cblxuICAgICAgICB7ZXJyb3JFbH1cbiAgICAgIDwvbGFiZWw+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9JbnB1dC9JbnB1dC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJbnB1dFwiOlwiSW5wdXRfX0lucHV0X19fczY3TjBcIixcIklucHV0X19sYWJlbFwiOlwiSW5wdXRfX0lucHV0X19sYWJlbF9fXzlKRFV1XCIsXCJJbnB1dF9faW5wdXRcIjpcIklucHV0X19JbnB1dF9faW5wdXRfX193YjFQRFwiLFwiSW5wdXRfX2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfX2Vycm9yX19fZmdrQ0RcIixcIklucHV0X2Vycm9yXCI6XCJJbnB1dF9fSW5wdXRfZXJyb3JfX18ySllHeVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvSW5wdXQvSW5wdXQuY3NzXG4gKiogbW9kdWxlIGlkID0gNTYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5jc3MnXG5cbmNsYXNzIENoZWNrYm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7XG4gICAgICBjaGVja2VkLFxuICAgICAgb25DaGFuZ2UsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWQgPSBmYWxzZVxuICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17c3R5bGVzLkNoZWNrYm94X19sYWJlbH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9e3N0eWxlcy5DaGVja2JveF9faW5wdXR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlKHRoaXMuX2VsZW1lbnQuY2hlY2tlZCl9IC8+XG4gICAgICA8L2xhYmVsPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvQ2hlY2tib3gvQ2hlY2tib3guanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQ2hlY2tib3hcIjpcIkNoZWNrYm94X19DaGVja2JveF9fXzFKWVFnXCIsXCJDaGVja2JveF9fbGFiZWxcIjpcIkNoZWNrYm94X19DaGVja2JveF9fbGFiZWxfX18zT0JVZFwiLFwiQ2hlY2tib3hfX2lucHV0XCI6XCJDaGVja2JveF9fQ2hlY2tib3hfX2lucHV0X19fMW5ETVZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL0NoZWNrYm94L0NoZWNrYm94LmNzc1xuICoqIG1vZHVsZSBpZCA9IDU2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgU2NyaWJlIGZyb20gJ3NjcmliZS1lZGl0b3InXG5pbXBvcnQgVG9vbGJhciBmcm9tICdzY3JpYmUtcGx1Z2luLXRvb2xiYXInXG5pbXBvcnQgSGVhZGluZ0NtZCBmcm9tICdzY3JpYmUtcGx1Z2luLWhlYWRpbmctY29tbWFuZCdcbmltcG9ydCBMaW5rUHJvbXB0Q21kIGZyb20gJ3NjcmliZS1wbHVnaW4tbGluay1wcm9tcHQtY29tbWFuZCdcbmltcG9ydCBVbmxpbmtDbWQgZnJvbSAnc2NyaWJlLXBsdWdpbi1pbnRlbGxpZ2VudC11bmxpbmstY29tbWFuZCdcblxuY29uc3QgYmFzZWxpbmUgPSAwLjc1MFxuaW1wb3J0IHtGbGV4LCBCbG9ja30gZnJvbSAnLi4vLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0VkaXRvci5jc3MnXG5cbmNsYXNzIEVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGNvbnN0IGVkaXRvciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy5lZGl0b3IpXG4gICAgY29uc3QgdG9vbGJhciA9IGZpbmRET01Ob2RlKHRoaXMucmVmcy50b29sYmFyKVxuXG4gICAgY29uc3Qgc2NyaWJlID0gbmV3IFNjcmliZShlZGl0b3IpXG4gICAgc2NyaWJlLnVzZShIZWFkaW5nQ21kKDEpKVxuICAgIHNjcmliZS51c2UoSGVhZGluZ0NtZCgyKSlcbiAgICBzY3JpYmUudXNlKExpbmtQcm9tcHRDbWQoKSlcbiAgICBzY3JpYmUudXNlKFVubGlua0NtZCgpKVxuICAgIHNjcmliZS51c2UoVG9vbGJhcih0b29sYmFyKSlcblxuICAgIHNjcmliZS5zZXRDb250ZW50KHRoaXMuc3RhdGUudmFsdWUpXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNjcmliZS5vbignY29udGVudC1jaGFuZ2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt2YWx1ZTogc2NyaWJlLmdldEhUTUwoKX0pXG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2Uoc2NyaWJlLmdldEhUTUwoKSlcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIHRoaXMuc2NyaWJlID0gc2NyaWJlXG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGlmIChuZXdQcm9wcy52YWx1ZSAhPT0gdGhpcy5zdGF0ZS52YWx1ZSkge1xuICAgICAgdGhpcy5zY3JpYmUuc2V0Q29udGVudChuZXdQcm9wcy52YWx1ZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBuZXdQcm9wcy52YWx1ZX0pXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7ZXJyb3IsIGxhYmVsfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcn0gJHtlcnJvciA/IHN0eWxlcy5FZGl0b3JfZXJyb3IgOiAnJ31gfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2xhYmVsfWB9PntsYWJlbH08L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fYm9keX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0b3JfX3Rvb2xiYXJ9IHJlZj1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gxfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMVwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX2gyfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJoMlwiPlxuICAgICAgICAgICAgICAgIEhlYWRpbmcgMVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfYm9sZH1gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwiYm9sZFwiPlxuICAgICAgICAgICAgICAgIGJvbGRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF9pdGFsaWN9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cIml0YWxpY1wiPlxuICAgICAgICAgICAgICAgIGl0YWxpY1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZH0gJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kX29sfWB9XG4gICAgICAgICAgICAgICAgZGF0YS1jb21tYW5kLW5hbWU9XCJpbnNlcnRPcmRlcmVkTGlzdFwiPlxuICAgICAgICAgICAgICAgIE9sXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfdWx9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cImluc2VydFVuT3JkZXJlZExpc3RcIj5cbiAgICAgICAgICAgICAgICBVbFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fc2VwYXJhdG9yfSAvPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMuRWRpdG9yX19jb21tYW5kfSAke3N0eWxlcy5FZGl0b3JfX2NvbW1hbmRfbGlua31gfVxuICAgICAgICAgICAgICAgIGRhdGEtY29tbWFuZC1uYW1lPVwibGlua1Byb21wdFwiPlxuICAgICAgICAgICAgICAgIExpbmtcbiAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5FZGl0b3JfX2NvbW1hbmR9ICR7c3R5bGVzLkVkaXRvcl9fY29tbWFuZF91bmxpbmt9YH1cbiAgICAgICAgICAgICAgICBkYXRhLWNvbW1hbmQtbmFtZT1cInVubGlua1wiPlxuICAgICAgICAgICAgICAgIFVubGlua1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRWRpdG9yX19lZGl0b3J9IHJlZj1cImVkaXRvclwiIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRvcl9fZXJyb3J9PntlcnJvcn08L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9VSS9FZGl0b3IvRWRpdG9yLmpzeFxuICoqLyIsImltcG9ydCBCbG9jayBmcm9tICcuL0Jsb2NrJ1xuaW1wb3J0IEZsZXggZnJvbSAnLi9GbGV4J1xuaW1wb3J0IFdyYXAgZnJvbSAnLi9XcmFwJ1xuaW1wb3J0IHtHcmlkLCBHcmlkSXRlbX0gZnJvbSAnLi9HcmlkJ1xuaW1wb3J0IHtMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi9MaXN0J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi9MaXN0SW5saW5lJ1xuaW1wb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX0gZnJvbSAnLi9NZWRpYSdcbmltcG9ydCB7UGFnZSwgUGFnZUNvbnRlbnR9IGZyb20gJy4vUGFnZSdcblxuZXhwb3J0IHtCbG9jaywgRmxleCwgV3JhcCwgR3JpZCwgR3JpZEl0ZW0sXG4gIExpc3QsIExpc3RJdGVtLCBMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSxcbiAgTWVkaWEsIE1lZGlhQm9keSwgTWVkaWFGaWd1cmUsXG4gIFBhZ2UsIFBhZ2VDb250ZW50XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xheW91dHMuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcblxuY29uc3QgQmxvY2sgPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9ja1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9CbG9jay9CbG9jay5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEZsZXggPSAoe1xuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgYWxpZ25JdGVtcyA9ICdjZW50ZXInLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgZmxleERpcmVjdGlvbiA9ICdyb3cnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBmbGV4RGlyZWN0aW9uLFxuICAgIGFsaWduSXRlbXMsXG4gICAganVzdGlmeUNvbnRlbnQsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHdpZHRoOiAnMTAwJScsXG4gICAgaGVpZ2h0OiAnMTAwJSdcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17ZXh0cmFDbGFzc05hbWVzfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGV4XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0ZsZXgvRmxleC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdyYXAgPSAoe1xuICB3aWR0aCA9ICc5MCUnLFxuICBtYXhXaWR0aCA9ICc4MHJlbScsIC8vIDEyODBweCBwcm92aWRlZCAxZW0gPT09IDE2cHhcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoLFxuICAgIG1heFdpZHRoLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICBtYXJnaW5SaWdodDogJ2F1dG8nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV3JhcFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9XcmFwL1dyYXAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5cbmNvbnN0IEdyaWQgPSAoe1xuICBndXR0ZXIgPSAwLFxuICBhbGlnbkl0ZW1zID0gJ3N0cmV0Y2gnLFxuICBqdXN0aWZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0JyxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogJzEwMCUnLFxuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zLFxuICAgIGp1c3RpZnlDb250ZW50LFxuICAgIG1hcmdpbkxlZnQ6IGAtJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBtYXJnaW5SaWdodDogYC0ke2Jhc2VsaW5lICogZ3V0dGVyIC8gMn1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2V4dHJhQ2xhc3NOYW1lc30+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgR3JpZEl0ZW0gPSAoe1xuICBzcGFuID0gMCxcbiAgb3V0T2YgPSAxMixcbiAgZ3V0dGVyID0gMCxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGxldCBzdHlsZSA9IHtcbiAgICBwYWRkaW5nTGVmdDogYCR7YmFzZWxpbmUgKiBndXR0ZXIgLyAyfXJlbWAsXG4gICAgcGFkZGluZ1JpZ2h0OiBgJHtiYXNlbGluZSAqIGd1dHRlciAvIDJ9cmVtYCxcbiAgICBmbGV4OiAnMSdcbiAgfVxuXG4gIGlmIChzcGFuICYmIG91dE9mKSB7XG4gICAgc3R5bGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdHlsZSwge1xuICAgICAgZmxleDogJzAgMCBhdXRvJyxcbiAgICAgIHdpZHRoOiBgJHsxMDAgKiBzcGFuIC8gb3V0T2Z9JWBcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtleHRyYUNsYXNzTmFtZXN9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCB7R3JpZCwgR3JpZEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0dyaWQvR3JpZC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0LmNzcydcblxuY29uc3QgTGlzdCA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgLSR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHVsIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdH0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBMaXN0SXRlbSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBgJHtiYXNlbGluZSAqIG59cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5saXN0X19pdGVtfSAke2V4dHJhQ2xhc3NOYW1lc31gfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCB7TGlzdCwgTGlzdEl0ZW19XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9MYXlvdXRzL0xpc3QvTGlzdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJsaXN0XCI6XCJMaXN0X19saXN0X19fMmtCVWRcIixcImxpc3RfX2l0ZW1cIjpcIkxpc3RfX2xpc3RfX2l0ZW1fX18xRDJWRlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0L0xpc3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaXN0SW5saW5lLmNzcydcblxuY29uc3QgTGlzdElubGluZSA9ICh7XG4gIG4gPSAxLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW4sXG4gIGFsaWduSXRlbXMgPSAnY2VudGVyJyxcbiAganVzdGZ5Q29udGVudCA9ICdmbGV4LXN0YXJ0J1xufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBtYXJnaW5Cb3R0b206IGAtJHtiYXNlbGluZSAqIG59cmVtYCxcbiAgICBtYXJnaW5MZWZ0OiBgLSR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgYWxpZ25JdGVtcyxcbiAgICBqdXN0ZnlDb250ZW50XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDx1bCBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YCR7c3R5bGVzLmxpc3RJbmxpbmV9ICR7ZXh0cmFDbGFzc05hbWVzfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdWw+XG4gIClcbn1cblxuY29uc3QgTGlzdElubGluZUl0ZW0gPSAoe1xuICBuID0gMSxcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogYCR7YmFzZWxpbmUgKiBufXJlbWAsXG4gICAgbWFyZ2luTGVmdDogYCR7YmFzZWxpbmUgKiBufXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGxpIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubGlzdElubGluZV9faXRlbX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9MaXN0SW5saW5lL0xpc3RJbmxpbmUuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibGlzdElubGluZVwiOlwiTGlzdElubGluZV9fbGlzdElubGluZV9fXzNHamh1XCIsXCJsaXN0SW5saW5lX19pdGVtXCI6XCJMaXN0SW5saW5lX19saXN0SW5saW5lX19pdGVtX19fMksxa1FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTGlzdElubGluZS9MaXN0SW5saW5lLmNzc1xuICoqIG1vZHVsZSBpZCA9IDYyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBiYXNlbGluZSA9IDAuNzUwXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVkaWEuY3NzJ1xuXG5jb25zdCBNZWRpYSA9ICh7XG4gIGFsaWduSXRlbXMgPSAnZmxleC1zdGFydCcsXG4gIGV4dHJhQ2xhc3NOYW1lcyA9ICcnLFxuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBhbGlnbkl0ZW1zXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFCb2R5ID0gKHtcbiAgZXh0cmFDbGFzc05hbWVzID0gJycsXG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5tZWRpYV9fYm9keX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTWVkaWFGaWd1cmUgPSAoe1xuICBuID0gMSxcbiAgbmwgPSAwLFxuICBleHRyYUNsYXNzTmFtZXMgPSAnJyxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgbWFyZ2luUmlnaHQ6IGAke2Jhc2VsaW5lICogbn1yZW1gLFxuICAgIG1hcmdpbkxlZnQ6IGAke2Jhc2VsaW5lICogbmx9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtgJHtzdHlsZXMubWVkaWFfX2ZpZ3VyZX0gJHtleHRyYUNsYXNzTmFtZXN9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtNZWRpYSwgTWVkaWFCb2R5LCBNZWRpYUZpZ3VyZX1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wibWVkaWFcIjpcIk1lZGlhX19tZWRpYV9fXzNhMDBHXCIsXCJtZWRpYV9fZmlndXJlXCI6XCJNZWRpYV9fbWVkaWFfX2ZpZ3VyZV9fXzI0WndBXCIsXCJtZWRpYV9fYm9keVwiOlwiTWVkaWFfX21lZGlhX19ib2R5X19fM1ZkMi1cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0xheW91dHMvTWVkaWEvTWVkaWEuY3NzXG4gKiogbW9kdWxlIGlkID0gNjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFBhZ2UgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICBjb25zdCBzdHlsZSA9IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwdmgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBQYWdlQ29udGVudCA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIGZsZXg6ICcxJ1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBzdHlsZT17c3R5bGV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5leHBvcnQge1BhZ2UsIFBhZ2VDb250ZW50fVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTGF5b3V0cy9QYWdlL1BhZ2UuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiRWRpdG9yXCI6XCJFZGl0b3JfX0VkaXRvcl9fXzNtRzB4XCIsXCJFZGl0b3JfX2xhYmVsXCI6XCJFZGl0b3JfX0VkaXRvcl9fbGFiZWxfX18xaGQtVVwiLFwiRWRpdG9yX19ib2R5XCI6XCJFZGl0b3JfX0VkaXRvcl9fYm9keV9fXzNGdWZRXCIsXCJFZGl0b3JfX3Rvb2xiYXJcIjpcIkVkaXRvcl9fRWRpdG9yX190b29sYmFyX19fMmNiZ1VcIixcIkVkaXRvcl9fY29tbWFuZFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfX18xNUtYa1wiLFwiRWRpdG9yX19jb21tYW5kX2gxXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF9oMV9fXzJhdnJFXCIsXCJFZGl0b3JfX2NvbW1hbmRfaDJcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2gyX19fNWotTnRcIixcIkVkaXRvcl9fY29tbWFuZF9oM1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaDNfX18ydEFqTFwiLFwiRWRpdG9yX19jb21tYW5kX2JvbGRcIjpcIkVkaXRvcl9fRWRpdG9yX19jb21tYW5kX2JvbGRfX18zWWRKM1wiLFwiRWRpdG9yX19jb21tYW5kX2l0YWxpY1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfaXRhbGljX19fMVVaQTBcIixcIkVkaXRvcl9fY29tbWFuZF9vbFwiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfb2xfX18yUlFiblwiLFwiRWRpdG9yX19jb21tYW5kX3VsXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bF9fX2NzOVZkXCIsXCJFZGl0b3JfX2NvbW1hbmRfbGlua1wiOlwiRWRpdG9yX19FZGl0b3JfX2NvbW1hbmRfbGlua19fXzFfRFJ2XCIsXCJFZGl0b3JfX2NvbW1hbmRfdW5saW5rXCI6XCJFZGl0b3JfX0VkaXRvcl9fY29tbWFuZF91bmxpbmtfX18zRHc3dFwiLFwiRWRpdG9yX19zZXBhcmF0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19zZXBhcmF0b3JfX19iZjBwZVwiLFwiRWRpdG9yX19lZGl0b3JcIjpcIkVkaXRvcl9fRWRpdG9yX19lZGl0b3JfX18xX1N4Q1wiLFwiRWRpdG9yX19lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfX2Vycm9yX19fMW5NWGRcIixcIkVkaXRvcl9lcnJvclwiOlwiRWRpdG9yX19FZGl0b3JfZXJyb3JfX18xRzY2Q1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvRWRpdG9yL0VkaXRvci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA2MzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5jc3MnXG5cbmNsYXNzIFNlbGVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgb3B0aW9ucyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGxhYmVsV2lkdGggPSA4LFxuICAgICAgZGlzYWJsZWRcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBvcHRpb25zLmZpbmQobyA9PiBvLmlkID09PSB2YWx1ZSlcbiAgICBjb25zdCBpbnB1dExhYmVsID0gc2VsZWN0ZWRPcHRpb24gPyBzZWxlY3RlZE9wdGlvbi5sYWJlbCA6ICdOb25lJ1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0fT5cbiAgICAgICAge2xhYmVsXG4gICAgICAgICAgPyA8ZGl2IHN0eWxlPXt7d2lkdGg6IGAke2xhYmVsV2lkdGh9cmVtYH19IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlbGVjdF9fbGFiZWx9YH0+e2xhYmVsfTwvZGl2PlxuICAgICAgICAgIDogJydcbiAgICAgICAgfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VsZWN0X193cmFwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9fZmFrZX0+e2lucHV0TGFiZWx9PC9kaXY+XG5cbiAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT17c3R5bGVzLlNlbGVjdF9faW5wdXR9XG4gICAgICAgICAgICByZWY9e2VsID0+IHsgdGhpcy5fZWxlbWVudCA9IGVsIH19XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KHYpID0+IG9uQ2hhbmdlKHYudGFyZ2V0LnZhbHVlKX0+XG4gICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG8sIGluZGV4KSA9PlxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtvLmlkfT57by5sYWJlbH08L29wdGlvbj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvU2VsZWN0L1NlbGVjdC5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWxlY3RcIjpcIlNlbGVjdF9fU2VsZWN0X19fMXJQYkxcIixcIlNlbGVjdF9fbGFiZWxcIjpcIlNlbGVjdF9fU2VsZWN0X19sYWJlbF9fXzFHV3ZXXCIsXCJTZWxlY3RfX3dyYXBcIjpcIlNlbGVjdF9fU2VsZWN0X193cmFwX19fd3ZSYXhcIixcIlNlbGVjdF9fZmFrZVwiOlwiU2VsZWN0X19TZWxlY3RfX2Zha2VfX18zd2tkZFwiLFwiU2VsZWN0X19pbnB1dFwiOlwiU2VsZWN0X19TZWxlY3RfX2lucHV0X19fcjdleTdcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VJL1NlbGVjdC9TZWxlY3QuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJhc2VsaW5lID0gMC43NTBcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Nb2RhbFdpbmRvdy5jc3MnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uLy4uL0xheW91dHMnXG5cbmNvbnN0IE1vZGFsV2luZG93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIG11bHRpcGxpZXJzID0ge1xuICAgIHdpZHRoOiA0MFxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHdpZHRoOiBgJHttdWx0aXBsaWVycy53aWR0aCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbH0+XG4gICAgICA8RmxleCBhbGlnbkl0ZW1zPVwiY2VudGVyXCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPHNlY3Rpb24gc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9kYWxXaW5kb3dIZWFkZXIgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDIsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e3N0eWxlcy5Nb2RhbFdpbmRvd19faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0JvZHkgPSAoe1xuICBjaGlsZHJlbixcbiAgbXVsdGlwbGllcnMgPSB7XG4gICAgcGFkZGluZzoge1xuICAgICAgdmVydGljYWw6IDMsXG4gICAgICBob3Jpem9udGFsOiAyXG4gICAgfVxuICB9XG59KSA9PiB7XG4gIGNvbnN0IHN0eWxlID0ge1xuICAgIHBhZGRpbmc6IGAke211bHRpcGxpZXJzLnBhZGRpbmcudmVydGljYWwgKiBiYXNlbGluZX1yZW0gJHttdWx0aXBsaWVycy5wYWRkaW5nLmhvcml6b250YWwgKiBiYXNlbGluZX1yZW1gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxtYWluIHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMuTW9kYWxXaW5kb3dfX2JvZHl9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvbWFpbj5cbiAgKVxufVxuXG5jb25zdCBNb2RhbFdpbmRvd0Zvb3RlciA9ICh7XG4gIGNoaWxkcmVuLFxuICBtdWx0aXBsaWVycyA9IHtcbiAgICBwYWRkaW5nOiB7XG4gICAgICB2ZXJ0aWNhbDogMSxcbiAgICAgIGhvcml6b250YWw6IDJcbiAgICB9XG4gIH1cbn0pID0+IHtcbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcGFkZGluZzogYCR7bXVsdGlwbGllcnMucGFkZGluZy52ZXJ0aWNhbCAqIGJhc2VsaW5lfXJlbSAke211bHRpcGxpZXJzLnBhZGRpbmcuaG9yaXpvbnRhbCAqIGJhc2VsaW5lfXJlbWBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLk1vZGFsV2luZG93X19mb290ZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyfVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTW9kYWxcIjpcIk1vZGFsV2luZG93X19Nb2RhbF9fXzJrbGNnXCIsXCJNb2RhbFdpbmRvd1wiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19fMnRWeVpcIixcIk1vZGFsV2luZG93X19oZWFkZXJcIjpcIk1vZGFsV2luZG93X19Nb2RhbFdpbmRvd19faGVhZGVyX19fMVFyV0hcIixcIk1vZGFsV2luZG93X19ib2R5XCI6XCJNb2RhbFdpbmRvd19fTW9kYWxXaW5kb3dfX2JvZHlfX18zUXVRaFwiLFwiTW9kYWxXaW5kb3dfX2Zvb3RlclwiOlwiTW9kYWxXaW5kb3dfX01vZGFsV2luZG93X19mb290ZXJfX18ySTBURlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVUkvTW9kYWxXaW5kb3cvTW9kYWxXaW5kb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNjM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVGltZSBmcm9tICdyZWFjdC10aW1lJ1xuXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9RdWVzdGlvbnNMaXN0SXRlbS5jc3MnXG5cbmNsYXNzIFF1ZXN0aW9uc0xpc3RJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLm5hdmlnYXRlID0gdGhpcy5uYXZpZ2F0ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBuYXZpZ2F0ZSAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9uLCBjdXJyZW50SWR9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKCFjdXJyZW50SWQpIHtcbiAgICAgIGhhc2hIaXN0b3J5LnB1c2goYC9xdWVzdGlvbnMvJHtxdWVzdGlvbi5kYXRhLl9pZH1gKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9uLCBjdXJyZW50SWQsIGNoaWxkcmVufSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChjdXJyZW50SWQgJiYgY3VycmVudElkID09PSBxdWVzdGlvbi5kYXRhLl9pZCkge1xuICAgICAgcmV0dXJuIGNoaWxkcmVuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRydW5jYXRlZFRleHQgPSBgJHtxdWVzdGlvbi5kYXRhLnF1ZXN0aW9uLnNsaWNlKDMsIE1hdGgubWluKHF1ZXN0aW9uLmRhdGEucXVlc3Rpb24ubGVuZ3RoIC0gNCwgNzApKX0uLmBcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBvbkNsaWNrPXt0aGlzLm5hdmlnYXRlfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtfSAke2N1cnJlbnRJZCA/ICcnIDogc3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX2FjdGl2ZX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19zZW5kZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZW5kZXJ9PntxdWVzdGlvbi5kYXRhLnBvc3Rlck5hbWV9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19tZXNzYWdlfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTWVzc2FnZX0+e3RydW5jYXRlZFRleHR9PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uc0xpc3RJdGVtX19iYWRnZXN9PlxuICAgICAgICAgICAge3F1ZXN0aW9uLmRhdGEuaXNTZWVuXG4gICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJOb3QgQW5zd2VyZWRcIiBjb2xvcj1cInJlZFwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb25zTGlzdEl0ZW1fX3RpbWVzdGFtcH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpbWVzdGFtcH0+XG4gICAgICAgICAgICAgIDxUaW1lIHZhbHVlPXtxdWVzdGlvbi5kYXRhLmNyZWF0ZWRBdH0gZm9ybWF0PVwiaDptbSBBIG9uIE1NTSBEb1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uc0xpc3RJdGVtXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbnNMaXN0SXRlbS9RdWVzdGlvbnNMaXN0SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWRnZS5jc3MnXG5cbmNvbnN0IEJhZGdlID0gKHtcbiAgbGFiZWwsXG4gIGNvbG9yID0gJ2JsdWUnXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW3N0eWxlcy5CYWRnZV1cbiAgc3dpdGNoIChjb2xvcikge1xuICAgIGNhc2UgJ3JlZCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkJhZGdlX3JlZClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZ3JlZW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5CYWRnZV9ncmVlbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnYmx1ZSc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuQmFkZ2VfYmx1ZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT57bGFiZWx9PC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFkZ2VcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0JhZGdlL0JhZGdlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkJhZGdlXCI6XCJCYWRnZV9fQmFkZ2VfX18zM2VRUlwiLFwiQmFkZ2VfYmx1ZVwiOlwiQmFkZ2VfX0JhZGdlX2JsdWVfX196MzNSbFwiLFwiQmFkZ2VfcmVkXCI6XCJCYWRnZV9fQmFkZ2VfcmVkX19fM1pyU2xcIixcIkJhZGdlX2dyZWVuXCI6XCJCYWRnZV9fQmFkZ2VfZ3JlZW5fX19vNEhWNlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQmFkZ2UvQmFkZ2UuY3NzXG4gKiogbW9kdWxlIGlkID0gNzQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJRdWVzdGlvbnNMaXN0SXRlbVwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX19fMjlyeHlcIixcIlF1ZXN0aW9uc0xpc3RJdGVtX19zZW5kZXJcIjpcIlF1ZXN0aW9uc0xpc3RJdGVtX19RdWVzdGlvbnNMaXN0SXRlbV9fc2VuZGVyX19fMWdtX0pcIixcIlF1ZXN0aW9uc0xpc3RJdGVtX19tZXNzYWdlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fUXVlc3Rpb25zTGlzdEl0ZW1fX21lc3NhZ2VfX18yaTdua1wiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fX2JhZGdlc1wiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX19iYWRnZXNfX19QTHhhY1wiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fX3RpbWVzdGFtcFwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1F1ZXN0aW9uc0xpc3RJdGVtX190aW1lc3RhbXBfX19yYWFDZFwiLFwiUXVlc3Rpb25zTGlzdEl0ZW1fYWN0aXZlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fUXVlc3Rpb25zTGlzdEl0ZW1fYWN0aXZlX19fMnM1OTVcIixcIlNlbmRlclwiOlwiUXVlc3Rpb25zTGlzdEl0ZW1fX1NlbmRlcl9fXzNKVGt1XCIsXCJNZXNzYWdlXCI6XCJRdWVzdGlvbnNMaXN0SXRlbV9fTWVzc2FnZV9fXzI4YTdWXCIsXCJUaW1lc3RhbXBcIjpcIlF1ZXN0aW9uc0xpc3RJdGVtX19UaW1lc3RhbXBfX18yTDN0UVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb25zTGlzdEl0ZW0vUXVlc3Rpb25zTGlzdEl0ZW0uY3NzXG4gKiogbW9kdWxlIGlkID0gNzQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJXcmFwcGVyXCI6XCJRdWVzdGlvbnNMaXN0X19XcmFwcGVyX19fMUlnaHFcIixcIldyYXBwZXJfZGltbWVkXCI6XCJRdWVzdGlvbnNMaXN0X19XcmFwcGVyX2RpbW1lZF9fXzF0Q1NXXCIsXCJRdWVzdGlvbnNMaXN0XCI6XCJRdWVzdGlvbnNMaXN0X19RdWVzdGlvbnNMaXN0X19fdjFtc09cIixcIkhlYWRpbmdcIjpcIlF1ZXN0aW9uc0xpc3RfX0hlYWRpbmdfX184X25LbVwiLFwiSGVhZGluZ19fbmFtZVwiOlwiUXVlc3Rpb25zTGlzdF9fSGVhZGluZ19fbmFtZV9fXzIxUUVLXCIsXCJIZWFkaW5nX190aW1lc3RhbXBcIjpcIlF1ZXN0aW9uc0xpc3RfX0hlYWRpbmdfX3RpbWVzdGFtcF9fXzFDTkZCXCIsXCJOYW1lXCI6XCJRdWVzdGlvbnNMaXN0X19OYW1lX19fMzd2Zy1cIixcIlRpbWVzdGFtcFwiOlwiUXVlc3Rpb25zTGlzdF9fVGltZXN0YW1wX19fM2Y0aUJcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1F1ZXN0aW9uc0xpc3QvUXVlc3Rpb25zTGlzdC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaW1lIGZyb20gJ3JlYWN0LXRpbWUnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQge3VwZGF0ZVF1ZXN0aW9uLCBkZWxldGVRdWVzdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvcXVlc3Rpb25zQWN0aW9ucydcbmltcG9ydCB7RmxleCwgQmxvY2ssIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b24sIEljb25CdXR0b24sIExpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IEJhZGdlIGZyb20gJy4uL0JhZGdlJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUXVlc3Rpb24uY3NzJ1xuXG5jbGFzcyBRdWVzdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy50b2dnbGVBbnN3ZXJlZCA9IHRoaXMudG9nZ2xlQW5zd2VyZWQuYmluZCh0aGlzKVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlUXVlc3Rpb24sIHF1ZXN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGRlbGV0ZVF1ZXN0aW9uKHF1ZXN0aW9uLmRhdGEuX2lkKVxuICB9XG5cbiAgdG9nZ2xlQW5zd2VyZWQgKCkge1xuICAgIGNvbnN0IHt1cGRhdGVRdWVzdGlvbiwgcXVlc3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlUXVlc3Rpb24ocXVlc3Rpb24uZGF0YS5faWQsIHtcbiAgICAgIGlzU2VlbjogIXF1ZXN0aW9uLmRhdGEuaXNTZWVuXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3F1ZXN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgaHJlZj17YG1haWx0bzoke3F1ZXN0aW9uLmRhdGEucG9zdGVyRW1haWx9P3N1YmplY3Q9UmVwbHkgdG8geW91ciBxdWVzdGlvbnMgb24gVmFjY2luZSBBbnN3ZXJzYH0+UmVwbHkgdmlhIGVtYWlsPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtxdWVzdGlvbi5kYXRhLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFuc3dlcmVkfT5NYXJrIGFzIGFuc3dlcmVkPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgdG89XCIvcXVlc3Rpb25zXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICA8L0xpc3RJbmxpbmU+XG4gICAgKVxuICAgIGlmIChxdWVzdGlvbi5kYXRhLmlzU2Vlbikge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFuc3dlcmVkfT5NYXJrIGFzIG5vdCBhbnN3ZXJlZDwvTGlua0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e3F1ZXN0aW9uLmRhdGEuaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgdG89XCIvcXVlc3Rpb25zXCI+Q2xvc2U8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHJlZj17ZWwgPT4geyB0aGlzLl9lbGVtZW50ID0gZWwgfX1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuUXVlc3Rpb259PlxuICAgICAgICA8ZGl2IHJlZj17ZWwgPT4geyB0aGlzLl9ib2R5ID0gZWwgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5RdWVzdGlvbl9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmFtZX0+e3F1ZXN0aW9uLmRhdGEucG9zdGVyTmFtZX08L2Rpdj5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb24uZGF0YS5pc1NlZW4gPyAnJyA6IDxCYWRnZSBsYWJlbD1cIk5vdCBBbnN3ZXJlZFwiIGNvbG9yPVwicmVkXCIgLz59XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGltZXN0YW1wfT5cbiAgICAgICAgICAgICAgICAgICAgPFRpbWUgdmFsdWU9e3F1ZXN0aW9uLmRhdGEuY3JlYXRlZEF0fSBmb3JtYXQ9XCJoOm1tIEEgb24gTU1NIERvXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICAgIDwvRmxleD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbWFpbH0+e3F1ZXN0aW9uLmRhdGEucG9zdGVyRW1haWx9PC9kaXY+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHF1ZXN0aW9uLmRhdGEucXVlc3Rpb259fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlF1ZXN0aW9uX19mb290ZXJ9PlxuICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHR5cGU9XCJkZWxldGVcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cXVlc3Rpb24uZGF0YS5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtxdWVzdGlvbklkfX0gPSBvd25Qcm9wc1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXN0aW9uOiBzdGF0ZS5xdWVzdGlvbnNcbiAgICAgICAgPyBzdGF0ZS5xdWVzdGlvbnMuaXRlbXMuZmluZChpID0+IGkuZGF0YS5faWQgPT09IHF1ZXN0aW9uSWQpXG4gICAgICAgIDoge2RhdGE6IHt9fVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVRdWVzdGlvbjogKGlkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVF1ZXN0aW9uKGlkKSlcbiAgICAgIH0sXG4gICAgICB1cGRhdGVRdWVzdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVF1ZXN0aW9uKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoUXVlc3Rpb24pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9RdWVzdGlvbi9RdWVzdGlvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJRdWVzdGlvblwiOlwiUXVlc3Rpb25fX1F1ZXN0aW9uX19fMWlidTZcIixcIlF1ZXN0aW9uX19ib2R5XCI6XCJRdWVzdGlvbl9fUXVlc3Rpb25fX2JvZHlfX18yUjRwZVwiLFwiUXVlc3Rpb25fX2Zvb3RlclwiOlwiUXVlc3Rpb25fX1F1ZXN0aW9uX19mb290ZXJfX180VldZeVwiLFwiTmFtZVwiOlwiUXVlc3Rpb25fX05hbWVfX18xNGJPUFwiLFwiRW1haWxcIjpcIlF1ZXN0aW9uX19FbWFpbF9fXzFEM09wXCIsXCJUaW1lc3RhbXBcIjpcIlF1ZXN0aW9uX19UaW1lc3RhbXBfX18ycnN3aFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvUXVlc3Rpb24vUXVlc3Rpb24uY3NzXG4gKiogbW9kdWxlIGlkID0gNzUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2ZldGNoVXNlcnN9IGZyb20gJy4uLy4uL3N0b3JlL3VzZXJzQWN0aW9ucydcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL0xvYWRpbmcnXG5pbXBvcnQgVXNlcnNMaXN0SXRlbSBmcm9tICcuLi9Vc2Vyc0xpc3RJdGVtJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2Vyc0xpc3QuY3NzJ1xuXG5jbGFzcyBVc2Vyc0xpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHtmZXRjaFVzZXJzfSA9IHRoaXMucHJvcHNcblxuICAgIGZldGNoVXNlcnMoKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGl0ZW1zLCBpc0ZldGNoaW5nLCBwYXJhbXMsIGxvY2F0aW9ufSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBpc05ld1VzZXJGb3JtID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvdXNlcnMvbmV3J1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyYXBwZXJ9ICR7cGFyYW1zLnVzZXJJZCB8fCBpc05ld1VzZXJGb3JtID8gc3R5bGVzLldyYXBwZXJfZGltbWVkIDogJyd9YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3R9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nfT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5IZWFkaW5nX19uYW1lfT5cbiAgICAgICAgICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT5Vc2VyczwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICAgICAge3BhcmFtcy51c2VySWQgfHwgaXNOZXdVc2VyRm9ybVxuICAgICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICAgIDogKFxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPVwiL3VzZXJzL25ld1wiPmFkZCBuZXcgdXNlcjwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdfX2VtYWlsfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVtYWlsfT5lbWFpbDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmdfX3RpbWVzdGFtcH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5UaW1lc3RhbXB9Pmxhc3QgbG9nIGluPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtpc05ld1VzZXJGb3JtID8gY2hpbGRyZW4gOiAnJ31cblxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8VXNlcnNMaXN0SXRlbSBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgdXNlcj17aX1cbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRJZD17cGFyYW1zLnVzZXJJZH1cbiAgICAgICAgICAgICAgICAgIGlzTmV3VXNlckZvcm09e2lzTmV3VXNlckZvcm19IC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpdGVtczogc3RhdGUudXNlcnMuaXRlbXMsXG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS51c2Vycy5pc0ZldGNoaW5nXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoVXNlcnM6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hVc2VycygpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2Vyc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmpzeFxuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VU0VSUyA9ICdSRVFVRVNUX1VTRVJTJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfVVNFUlMgPSAnUkVDRUlWRV9VU0VSUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1VTRVIgPSAnUkVRVUVTVF9VUERBVEVfVVNFUidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9VU0VSID0gJ0NPTkZJUk1fVVBEQVRFX1VTRVInXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9VU0VSID0gJ1JFSkVDVF9VUERBVEVfVVNFUidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1VTRVIgPSAnQ1JFQVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfVVNFUiA9ICdDT05GSVJNX0NSRUFURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfVVNFUiA9ICdSRUpFQ1RfQ1JFQVRFX1VTRVInXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9VU0VSID0gJ1JFUVVFU1RfREVMRVRFX1VTRVInXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfVVNFUiA9ICdDT05GSVJNX0RFTEVURV9VU0VSJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfVVNFUiA9ICdSRUpFQ1RfREVMRVRFX1VTRVInXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0RmV0Y2ggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VU0VSU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVGZXRjaCA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfVVNFUlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hVc2VycyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RmV0Y2goKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vdXNlcnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlRmV0Y2goanNvbi5kYXRhLnVzZXJzKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtVXBkYXRlID0gKFxuICBpZCxcbiAgdXBkYXRlZEl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1VTRVIsXG4gICAgaWQsXG4gICAgdXBkYXRlZEl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RVcGRhdGUgPSAoXG4gIGlkLFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9VUERBVEVfVVNFUixcbiAgICBpZCxcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChcbiAgaWQsXG4gIGRhdGFcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy91c2Vycy8nKVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoaWQsIGpzb24uZGF0YS51c2VyKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgdXBkYXRlZCBzdWNjZXNzZnVsbHknLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0VXBkYXRlKGlkLCBwYXlsb2FkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0NvdWxkIG5vdCB1cGRhdGUgdXNlciBkdWUgdG8gZXJyb3JzJywgJ2Vycm9yJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0Q3JlYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfQ1JFQVRFX1VTRVJcbiAgfVxufVxuXG5jb25zdCBjb25maXJtQ3JlYXRlID0gKFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX0NSRUFURV9VU0VSLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWplY3RDcmVhdGUgPSAoXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX0NSRUFURV9VU0VSLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gKFxuICBkYXRhXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnVzZXIpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnVXNlciBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgfSBlbHNlIGlmIChqc29uLmRhdGEubmFtZSA9PT0gJ1ZhbGlkYXRpb25FcnJvcicpIHtcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHVzZXIgZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1VTRVIsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfVVNFUixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdERlbGV0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9XG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvdXNlcnMvJylcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtRGVsZXRlKGlkKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1VzZXIgd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvdXNlcnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQgQmFkZ2UgZnJvbSAnLi4vQmFkZ2UnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2Vyc0xpc3RJdGVtLmNzcydcblxuY2xhc3MgVXNlcnNMaXN0SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3VzZXIsIGN1cnJlbnRJZCwgaXNOZXdVc2VyRm9ybSwgY2hpbGRyZW59ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHRpbWVzdGFtcCA9IChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVGltZXN0YW1wfT5cbiAgICAgICAgbmV2ZXIgbG9nZ2VkIGluXG4gICAgICA8L2Rpdj5cbiAgICApXG4gICAgaWYgKHVzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdCkge1xuICAgICAgdGltZXN0YW1wID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlRpbWVzdGFtcH0+XG4gICAgICAgICAgPFRpbWUgdmFsdWU9e3VzZXIuZGF0YS5sYXN0TG9nZ2VkSW5BdH0gZm9ybWF0PVwiTU1NIERvIGg6bW0gQVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChjdXJyZW50SWQgPT09IHVzZXIuZGF0YS5faWQpIHtcbiAgICAgIHJldHVybiBjaGlsZHJlblxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlVzZXJzTGlzdEl0ZW19YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX19uYW1lfT5cbiAgICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT57dXNlci5kYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQWN0aW9uc30+XG4gICAgICAgICAgICAgICAgICB7Y3VycmVudElkIHx8IGlzTmV3VXNlckZvcm0gPyAnJyA6IDxMaW5rQnV0dG9uIHRvPXtgL3VzZXJzLyR7dXNlci5kYXRhLl9pZH1gfT5FZGl0PC9MaW5rQnV0dG9uPn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuVXNlcnNMaXN0SXRlbV9fZW1haWx9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FbWFpbH0+KHt1c2VyLmRhdGEuZW1haWx9KTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX19iYWRnZXN9PlxuICAgICAgICAgICAge3VzZXIuZGF0YS5hZG1pblxuICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQmFkZ2V9PlxuICAgICAgICAgICAgICAgICAgICA8QmFkZ2UgbGFiZWw9XCJBZG1pblwiIGNvbG9yPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyF1c2VyLmRhdGEuaXNFbmFibGVkXG4gICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5CYWRnZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCYWRnZSBsYWJlbD1cIkRpc2FibGVkXCIgY29sb3I9XCJyZWRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Vc2Vyc0xpc3RJdGVtX190aW1lc3RhbXB9PlxuICAgICAgICAgICAge3RpbWVzdGFtcH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJzTGlzdEl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJVc2Vyc0xpc3RJdGVtXCI6XCJVc2Vyc0xpc3RJdGVtX19Vc2Vyc0xpc3RJdGVtX19fMWpvQTdcIixcIlVzZXJzTGlzdEl0ZW1fX25hbWVcIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX25hbWVfX18xQXoyN1wiLFwiVXNlcnNMaXN0SXRlbV9fZW1haWxcIjpcIlVzZXJzTGlzdEl0ZW1fX1VzZXJzTGlzdEl0ZW1fX2VtYWlsX19fM2tiVW9cIixcIlVzZXJzTGlzdEl0ZW1fX2JhZGdlc1wiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fYmFkZ2VzX19fMzZaaU9cIixcIlVzZXJzTGlzdEl0ZW1fX3RpbWVzdGFtcFwiOlwiVXNlcnNMaXN0SXRlbV9fVXNlcnNMaXN0SXRlbV9fdGltZXN0YW1wX19fMkViWlBcIixcIk5hbWVcIjpcIlVzZXJzTGlzdEl0ZW1fX05hbWVfX18ySmJFelwiLFwiRW1haWxcIjpcIlVzZXJzTGlzdEl0ZW1fX0VtYWlsX19fMXJPWjBcIixcIkJhZGdlXCI6XCJVc2Vyc0xpc3RJdGVtX19CYWRnZV9fXzFhRWJVXCIsXCJUaW1lc3RhbXBcIjpcIlVzZXJzTGlzdEl0ZW1fX1RpbWVzdGFtcF9fX2lZZkpsXCIsXCJBY3Rpb25zXCI6XCJVc2Vyc0xpc3RJdGVtX19BY3Rpb25zX19fMjU2Q3FcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJzTGlzdEl0ZW0vVXNlcnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIldyYXBwZXJcIjpcIlVzZXJzTGlzdF9fV3JhcHBlcl9fXzFiVllYXCIsXCJXcmFwcGVyX2RpbW1lZFwiOlwiVXNlcnNMaXN0X19XcmFwcGVyX2RpbW1lZF9fXzFJTGw5XCIsXCJVc2Vyc0xpc3RcIjpcIlVzZXJzTGlzdF9fVXNlcnNMaXN0X19fMzIwN1ZcIixcIkhlYWRpbmdcIjpcIlVzZXJzTGlzdF9fSGVhZGluZ19fXzFhTjhrXCIsXCJIZWFkaW5nX19uYW1lXCI6XCJVc2Vyc0xpc3RfX0hlYWRpbmdfX25hbWVfX18yTXBRN1wiLFwiSGVhZGluZ19fZW1haWxcIjpcIlVzZXJzTGlzdF9fSGVhZGluZ19fZW1haWxfX18zYTBYS1wiLFwiSGVhZGluZ19fdGltZXN0YW1wXCI6XCJVc2Vyc0xpc3RfX0hlYWRpbmdfX3RpbWVzdGFtcF9fXzFNNFVZXCIsXCJOYW1lXCI6XCJVc2Vyc0xpc3RfX05hbWVfX19YY0RhcVwiLFwiRW1haWxcIjpcIlVzZXJzTGlzdF9fRW1haWxfX19sc08tZlwiLFwiVGltZXN0YW1wXCI6XCJVc2Vyc0xpc3RfX1RpbWVzdGFtcF9fXzF3VGVRXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9Vc2Vyc0xpc3QvVXNlcnNMaXN0LmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVVc2VyLCBkZWxldGVVc2VyfSBmcm9tICcuLi8uLi9zdG9yZS91c2Vyc0FjdGlvbnMnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgQ2hlY2tib3h9IGZyb20gJy4uL1VJJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRWRpdFVzZXJGb3JtLmNzcydcblxuY2xhc3MgRWRpdFVzZXJGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmRlbGV0ZSA9IHRoaXMuZGVsZXRlLmJpbmQodGhpcylcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKVxuICAgIHRoaXMuY2hhbmdlID0gdGhpcy5jaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuY2FuY2VsID0gdGhpcy5jYW5jZWwuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMudXNlci5kYXRhLCB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7ZXJyb3JzLCBkYXRhLCBpc1VwZGF0aW5nfSA9IG5ld1Byb3BzLnVzZXJcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEsIHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7dXNlcjoge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZVVzZXJ9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIGlmICghcGF5bG9hZC5wYXNzd29yZCkge1xuICAgICAgZGVsZXRlIHBheWxvYWQucGFzc3dvcmRcbiAgICB9XG5cbiAgICB1cGRhdGVVc2VyKGlkLCBwYXlsb2FkKVxuICB9XG5cbiAgY2FuY2VsICgpIHtcbiAgICBjb25zdCB7dXNlcjoge2RhdGE6IHVzZXJ9fSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNEaXJ0eTogZmFsc2UsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB1c2VyLCB7XG4gICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgfSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZSAocHJvcCwgdmFsdWUpIHtcbiAgICBjb25zdCBuZXdEYXRhID0ge1xuICAgICAgW3Byb3BdOiB2YWx1ZVxuICAgIH1cbiAgICBjb25zdCBuZXdFcnJvcnMgPSB7XG4gICAgICBbcHJvcF06IG51bGxcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGlzRGlydHk6IHRydWUsXG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICBkZWxldGUgKCkge1xuICAgIGNvbnN0IHtkZWxldGVVc2VyLCB1c2VyOiB7ZGF0YToge19pZDogaWR9fX0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVVc2VyKGlkKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7aXNVcGRhdGluZ30gPSB0aGlzLnByb3BzLnVzZXJcblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFsbCBTYXZlZDwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIGNvbG9yPVwiYmx1ZVwiXG4gICAgICAgICAgICB0bz1cIi91c2Vycy9cIj5DbG9zZTwvTGlua0J1dHRvbj5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICApXG4gICAgaWYgKHRoaXMuc3RhdGUuaXNEaXJ0eSkge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgU2F2ZSBDaGFuZ2VzXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpbmtCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+RGlzY2FyZCBDaGFuZ2VzPC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkVkaXRVc2VyRm9ybV9fYm9keX0+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRnVsbCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5uYW1lfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMubmFtZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnbmFtZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLmVtYWlsfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2VtYWlsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEucGFzc3dvcmR9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgncGFzc3dvcmQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkVuYWJsZWRcIlxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNFbmFibGVkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0VuYWJsZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkFkbWluXCJcbiAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5hZG1pbn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdhZG1pbicsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5FZGl0VXNlckZvcm1fX2Zvb3Rlcn0+XG4gICAgICAgICAge2FjdGlvbnN9XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXM6IHt1c2VySWR9fSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUudXNlcnNcbiAgICAgICAgPyBzdGF0ZS51c2Vycy5pdGVtcy5maW5kKGkgPT4gaS5kYXRhLl9pZCA9PT0gdXNlcklkKVxuICAgICAgICA6IHtkYXRhOiB7fSwgaXNVcGRhdGluZzogdHJ1ZX1cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVsZXRlVXNlcjogKGlkKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXIoaWQpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVVzZXI6IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVVc2VyKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdFVzZXJGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJFZGl0VXNlckZvcm1cIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19fMzRVeVBcIixcIkVkaXRVc2VyRm9ybV9fYm9keVwiOlwiRWRpdFVzZXJGb3JtX19FZGl0VXNlckZvcm1fX2JvZHlfX18xVWpsN1wiLFwiRWRpdFVzZXJGb3JtX19mb290ZXJcIjpcIkVkaXRVc2VyRm9ybV9fRWRpdFVzZXJGb3JtX19mb290ZXJfX18zdEpTd1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRWRpdFVzZXJGb3JtL0VkaXRVc2VyRm9ybS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y3JlYXRlVXNlcn0gZnJvbSAnLi4vLi4vc3RvcmUvdXNlcnNBY3Rpb25zJ1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbSwgQmxvY2t9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94fSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05ld1VzZXJGb3JtLmNzcydcblxuY2xhc3MgTmV3VXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2UgPSB0aGlzLmNoYW5nZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgIGFkbWluOiAnJyxcbiAgICAgICAgaXNFbmFibGVkOiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZVVzZXJ9ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlVXNlcih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpc1VwZGF0aW5nfSA9IHRoaXMucHJvcHMuaXRlbVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmV3VXNlckZvcm19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtX19ib2R5fT5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJGdWxsIE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLm5hbWV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5uYW1lfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCduYW1lJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuZW1haWx9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnZW1haWwnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jayBuPXsxfT5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdwYXNzd29yZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRW5hYmxlZFwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0VuYWJsZWR9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRW5hYmxlZCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiQWRtaW5cIlxuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5zdGF0ZS5kYXRhLmFkbWlufVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2FkbWluJywgdmFsdWUpfSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLk5ld1VzZXJGb3JtX19mb290ZXJ9PlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89XCIvdXNlcnMvXCI+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUudXNlcnNcbiAgICAgICAgPyBzdGF0ZS51c2Vycy5uZXdVc2VyXG4gICAgICAgIDoge2RhdGE6IHt9LCBpc1VwZGF0aW5nOiB0cnVlLCBlcnJvcnM6IHt9fVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBjcmVhdGVVc2VyOiAoaWQsIGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlVXNlcihpZCwgZGF0YSkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKE5ld1VzZXJGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmV3VXNlckZvcm0vTmV3VXNlckZvcm0uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmV3VXNlckZvcm1cIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fX0hLTFFnXCIsXCJOZXdVc2VyRm9ybV9fYm9keVwiOlwiTmV3VXNlckZvcm1fX05ld1VzZXJGb3JtX19ib2R5X19faFljTUZcIixcIk5ld1VzZXJGb3JtX19mb290ZXJcIjpcIk5ld1VzZXJGb3JtX19OZXdVc2VyRm9ybV9fZm9vdGVyX19fMXZTNmZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL05ld1VzZXJGb3JtL05ld1VzZXJGb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7Q09ORklSTV9VUERBVEVfU0VDVElPTn0gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0FSVElDTEVTID0gJ1JFUVVFU1RfQVJUSUNMRVMnXG5leHBvcnQgY29uc3QgUkVDRUlWRV9BUlRJQ0xFUyA9ICdSRUNFSVZFX0FSVElDTEVTJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9VUERBVEVfQVJUSUNMRSA9ICdSRVFVRVNUX1VQREFURV9BUlRJQ0xFJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX0FSVElDTEUgPSAnQ09ORklSTV9VUERBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBSRUpFQ1RfVVBEQVRFX0FSVElDTEUgPSAnUkVKRUNUX1VQREFURV9BUlRJQ0xFJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRSA9ICdDUkVBVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0NSRUFURV9BUlRJQ0xFID0gJ0NPTkZJUk1fQ1JFQVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0NSRUFURV9BUlRJQ0xFID0gJ1JFSkVDVF9DUkVBVEVfQVJUSUNMRSdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfREVMRVRFX0FSVElDTEUgPSAnUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSdcbmV4cG9ydCBjb25zdCBDT05GSVJNX0RFTEVURV9BUlRJQ0xFID0gJ0NPTkZJUk1fREVMRVRFX0FSVElDTEUnXG5leHBvcnQgY29uc3QgUkVKRUNUX0RFTEVURV9BUlRJQ0xFID0gJ1JFSkVDVF9ERUxFVEVfQVJUSUNMRSdcblxuaW1wb3J0IHtmbGFzaE1lc3NhZ2V9IGZyb20gJy4vZmxhc2hBY3Rpb25zJ1xuaW1wb3J0IHtsb2dPdXR9IGZyb20gJy4vYXV0aEFjdGlvbnMnXG5cbmNvbnN0IHJlcXVlc3RBcnRpY2xlcyA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0FSVElDTEVTXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUFydGljbGVzID0gKFxuICBpdGVtc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9BUlRJQ0xFUyxcbiAgICBpdGVtc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaEFydGljbGVzID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RBcnRpY2xlcygpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9hcnRpY2xlcy9gLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgIGRpc3BhdGNoKHJlY2VpdmVBcnRpY2xlcyhqc29uLmRhdGEuYXJ0aWNsZXMpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9VUERBVEVfQVJUSUNMRSxcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVVcGRhdGUgPSAoXG4gIGlkLFxuICBpdGVtXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBDT05GSVJNX1VQREFURV9BUlRJQ0xFLFxuICAgIGlkLFxuICAgIGl0ZW1cbiAgfVxufVxuXG5jb25zdCByZWNlaXZlRXJyb3JzID0gKFxuICBpZCxcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfVVBEQVRFX0FSVElDTEUsXG4gICAgaWQsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUFydGljbGUgPSAoXG4gIGlkLFxuICBkYXRhLFxuICBiYWNrbGlua1xuKSA9PiB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgZGlzcGF0Y2gocmVxdWVzdFVwZGF0ZShpZCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgJ3gtYWNjZXNzLXRva2VuJzogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBhcnRpY2xlOiBkYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVVwZGF0ZShpZCwganNvbi5kYXRhLmFydGljbGUpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSBoYXMgYmVlbiBzYXZlZCcsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIGxldCBwYXlsb2FkID0ge31cblxuICAgICAgICAgIGZvciAobGV0IHByb3AgaW4ganNvbi5kYXRhLmVycm9ycykge1xuICAgICAgICAgICAgcGF5bG9hZFtwcm9wXSA9IGpzb24uZGF0YS5lcnJvcnNbcHJvcF0ubWVzc2FnZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVFcnJvcnMoaWQsIHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IHVwZGF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3RDcmVhdGUgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9DUkVBVEVfQVJUSUNMRVxuICB9XG59XG5cbmNvbnN0IGNvbmZpcm1DcmVhdGUgPSAoXG4gIGl0ZW1cbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fQ1JFQVRFX0FSVElDTEUsXG4gICAgaXRlbVxuICB9XG59XG5cbmNvbnN0IHJlamVjdENyZWF0ZSA9IChcbiAgZXJyb3JzXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfQ1JFQVRFX0FSVElDTEUsXG4gICAgZXJyb3JzXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUFydGljbGUgPSAoXG4gIGRhdGEsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0Q3JlYXRlKCkpXG5cbiAgICBmZXRjaChgJHtBTlRJVkFYX0FETUlOX1NFUlZFUl9VUkx9L2FydGljbGVzL2AsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGFydGljbGU6IGRhdGFcbiAgICAgIH0pXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgICAgZGlzcGF0Y2gobG9nT3V0KCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYXV0aG9yaXplZCBhY3Rpb24nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oanNvbiA9PiB7XG4gICAgICAgIGlmIChqc29uLnN1Y2Nlc3MpIHtcbiAgICAgICAgICBkaXNwYXRjaChjb25maXJtQ3JlYXRlKGpzb24uZGF0YS5hcnRpY2xlKSlcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBDT05GSVJNX1VQREFURV9TRUNUSU9OLFxuICAgICAgICAgICAgaWQ6IGpzb24uZGF0YS5wYXJlbnQuX2lkLFxuICAgICAgICAgICAgaXRlbToganNvbi5kYXRhLnBhcmVudFxuICAgICAgICAgIH0pXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBcnRpY2xlIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0Q3JlYXRlKHBheWxvYWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQ291bGQgbm90IGNyZWF0ZSBhcnRpY2xlIGR1ZSB0byBlcnJvcnMnLCAnZXJyb3InKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cbmNvbnN0IHJlcXVlc3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0RFTEVURV9BUlRJQ0xFLFxuICAgIGlkXG4gIH1cbn1cblxuY29uc3QgY29uZmlybURlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IENPTkZJUk1fREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWplY3REZWxldGUgPSAoXG4gIGlkXG4pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRUpFQ1RfREVMRVRFX0FSVElDTEUsXG4gICAgaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVsZXRlQXJ0aWNsZSA9IChcbiAgaWQsXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vYXJ0aWNsZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IENPTkZJUk1fVVBEQVRFX1NFQ1RJT04sXG4gICAgICAgICAgICBpZDoganNvbi5kYXRhLnBhcmVudC5faWQsXG4gICAgICAgICAgICBpdGVtOiBqc29uLmRhdGEucGFyZW50XG4gICAgICAgICAgfSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1EZWxldGUoaWQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXJ0aWNsZSB3YXMgZGVsZXRlZCcsICdsb2cnKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaXNwYXRjaChyZWplY3REZWxldGUoaWQpKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9hcnRpY2xlQWN0aW9ucy5qc1xuICoqLyIsImltcG9ydCAnd2hhdHdnLWZldGNoJ1xuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9TRUNUSU9OUyA9ICdSRVFVRVNUX1NFQ1RJT05TJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfU0VDVElPTlMgPSAnUkVDRUlWRV9TRUNUSU9OUydcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX1NFQ1RJT04gPSAnUkVRVUVTVF9VUERBVEVfU0VDVElPTidcbmV4cG9ydCBjb25zdCBDT05GSVJNX1VQREFURV9TRUNUSU9OID0gJ0NPTkZJUk1fVVBEQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgUkVKRUNUX1VQREFURV9TRUNUSU9OID0gJ1JFSkVDVF9VUERBVEVfU0VDVElPTidcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT04gPSAnQ1JFQVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9DUkVBVEVfU0VDVElPTiA9ICdDT05GSVJNX0NSRUFURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9DUkVBVEVfU0VDVElPTiA9ICdSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04nXG5cbmV4cG9ydCBjb25zdCBSRVFVRVNUX0RFTEVURV9TRUNUSU9OID0gJ1JFUVVFU1RfREVMRVRFX1NFQ1RJT04nXG5leHBvcnQgY29uc3QgQ09ORklSTV9ERUxFVEVfU0VDVElPTiA9ICdDT05GSVJNX0RFTEVURV9TRUNUSU9OJ1xuZXhwb3J0IGNvbnN0IFJFSkVDVF9ERUxFVEVfU0VDVElPTiA9ICdSRUpFQ1RfREVMRVRFX1NFQ1RJT04nXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5jb25zdCByZXF1ZXN0U2VjdGlvbnMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9TRUNUSU9OU1xuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWN0aW9ucyA9IChcbiAgaXRlbXNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFQ0VJVkVfU0VDVElPTlMsXG4gICAgaXRlbXNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWN0aW9ucyA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VjdGlvbnMoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvYCwge1xuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdBdXRob3JpemF0aW9uIGZhaWxlZC4gUGxlYXNlLCBsb2cgaW4gYWdhaW4nLCAnZXJyb3InKSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVxuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICBkaXNwYXRjaChyZWNlaXZlU2VjdGlvbnMoanNvbi5kYXRhLml0ZW1zKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdFVwZGF0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCByZWNlaXZlVXBkYXRlID0gKFxuICBpZCxcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfU0VDVElPTixcbiAgICBpZCxcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVjZWl2ZUVycm9ycyA9IChcbiAgaWQsXG4gIGVycm9yc1xuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVKRUNUX1VQREFURV9TRUNUSU9OLFxuICAgIGlkLFxuICAgIGVycm9yc1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVTZWN0aW9uID0gKFxuICBpZCxcbiAgZGF0YSxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoaWQpKVxuXG4gICAgZmV0Y2goYCR7QU5USVZBWF9BRE1JTl9TRVJWRVJfVVJMfS9zZWN0aW9ucy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VjdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoaWQsIGpzb24uZGF0YS5zZWN0aW9uKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlY3Rpb24gd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ2xvZycpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoanNvbi5kYXRhLm5hbWUgPT09ICdWYWxpZGF0aW9uRXJyb3InKSB7XG4gICAgICAgICAgbGV0IHBheWxvYWQgPSB7fVxuXG4gICAgICAgICAgZm9yIChsZXQgcHJvcCBpbiBqc29uLmRhdGEuZXJyb3JzKSB7XG4gICAgICAgICAgICBwYXlsb2FkW3Byb3BdID0ganNvbi5kYXRhLmVycm9yc1twcm9wXS5tZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZUVycm9ycyhpZCwgcGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgdXBkYXRlIHNlY3Rpb24gZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdENyZWF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBSRVFVRVNUX0NSRUFURV9TRUNUSU9OXG4gIH1cbn1cblxuY29uc3QgY29uZmlybUNyZWF0ZSA9IChcbiAgaXRlbVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9DUkVBVEVfU0VDVElPTixcbiAgICBpdGVtXG4gIH1cbn1cblxuY29uc3QgcmVqZWN0Q3JlYXRlID0gKFxuICBlcnJvcnNcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9DUkVBVEVfU0VDVElPTixcbiAgICBlcnJvcnNcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU2VjdGlvbiA9IChcbiAgZGF0YSxcbiAgYmFja2xpbmtcbikgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RDcmVhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgc2VjdGlvbjogZGF0YVxuICAgICAgfSlcbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1DcmVhdGUoanNvbi5kYXRhLnNlY3Rpb24pKVxuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoanNvbi5kYXRhLnBhcmVudC5faWQsIGpzb24uZGF0YS5wYXJlbnQpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnU2VjdGlvbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseScsICdsb2cnKSlcbiAgICAgICAgICBpZiAoYmFja2xpbmspIHtcbiAgICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goYmFja2xpbmspXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGpzb24uZGF0YS5uYW1lID09PSAnVmFsaWRhdGlvbkVycm9yJykge1xuICAgICAgICAgIC8vIFRPRE86IHRlc3QgdmFsaWRhdGlvbiBlcnJvcnNcbiAgICAgICAgICBsZXQgcGF5bG9hZCA9IHt9XG5cbiAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGpzb24uZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgIHBheWxvYWRbcHJvcF0gPSBqc29uLmRhdGEuZXJyb3JzW3Byb3BdLm1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwYXRjaChyZWplY3RDcmVhdGUocGF5bG9hZCkpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdDb3VsZCBub3QgY3JlYXRlIHNlY3Rpb24gZHVlIHRvIGVycm9ycycsICdlcnJvcicpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuY29uc3QgcmVxdWVzdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfREVMRVRFX1NFQ1RJT04sXG4gICAgaWRcbiAgfVxufVxuXG5jb25zdCBjb25maXJtRGVsZXRlID0gKFxuICBpZFxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9ERUxFVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmNvbnN0IHJlamVjdERlbGV0ZSA9IChcbiAgaWRcbikgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFSkVDVF9ERUxFVEVfU0VDVElPTixcbiAgICBpZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVTZWN0aW9uID0gKFxuICBpZCxcbiAgY2hpbGRyZW4sXG4gIGJhY2tsaW5rXG4pID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0RGVsZXRlKGlkKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VjdGlvbnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKHJlY2VpdmVVcGRhdGUoanNvbi5kYXRhLnBhcmVudC5faWQsIGpzb24uZGF0YS5wYXJlbnQpKVxuICAgICAgICAgIGlmIChiYWNrbGluaykge1xuICAgICAgICAgICAgaGFzaEhpc3RvcnkucHVzaChiYWNrbGluaylcbiAgICAgICAgICB9XG4gICAgICAgICAgZGlzcGF0Y2goY29uZmlybURlbGV0ZShpZCkpXG4gICAgICAgICAgY2hpbGRyZW4ubWFwKGMgPT4gY29uZmlybURlbGV0ZShjKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlY3Rpb24gd2FzIGRlbGV0ZWQnLCAnbG9nJykpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVqZWN0RGVsZXRlKGlkKSlcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGpzb24uZGF0YSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ09vcHMsIHNvbWV0aGluZyB3ZW50IHdyb25nIDooKScsICdlcnJvcicpKVxuICAgICAgICB9XG4gICAgICB9KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNBY3Rpb25zLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VjdGlvbi5jc3MnXG5cbmNvbnN0IFNlY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9ufT5cbiAgICAgIEkgYW0gU2VjdGlvbiBjb21wb25lbnQhXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiU2VjdGlvblwiOlwiU2VjdGlvbl9fU2VjdGlvbl9fXzM1QmNiXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uL1NlY3Rpb24uY3NzXG4gKiogbW9kdWxlIGlkID0gNzY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHtzb3J0YWJsZX0gZnJvbSAncmVhY3Qtc29ydGFibGUnXG5cbmltcG9ydCB7dXBkYXRlU2VjdGlvbiwgZmV0Y2hTZWN0aW9uc30gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtmZXRjaEFydGljbGVzfSBmcm9tICcuLi8uLi9zdG9yZS9hcnRpY2xlQWN0aW9ucydcbmltcG9ydCBTZWN0aW9uc0xpc3RJdGVtIGZyb20gJy4uL1NlY3Rpb25zTGlzdEl0ZW0nXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9Mb2FkaW5nJ1xuaW1wb3J0IHtMaW5rQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCBTdWJTZWN0aW9uc0xpc3QgZnJvbSAnLi4vU3ViU2VjdGlvbnNMaXN0J1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi4vV3JhcHBlcidcbmltcG9ydCBUYWJsZSBmcm9tICcuLi9UYWJsZSdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9UYWJsZVJvdydcbmltcG9ydCBUYWJsZUNvbHVtbiBmcm9tICcuLi9UYWJsZUNvbHVtbidcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSAnLi4vVGFibGVDZWxsJ1xuaW1wb3J0IHtGbGV4fSBmcm9tICcuLi9MYXlvdXRzJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgU2VjdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLm1ldGFTZWN0aW9uID8gcHJvcHMubWV0YVNlY3Rpb24uZGF0YS5jaGlsZHJlbiA6IFtdXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hTZWN0aW9ucywgZmV0Y2hBcnRpY2xlc30gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaFNlY3Rpb25zKClcbiAgICBmZXRjaEFydGljbGVzKClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgaWYgKG5ld1Byb3BzLm1ldGFTZWN0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGl0ZW1zOiBuZXdQcm9wcy5tZXRhU2VjdGlvbi5kYXRhLmNoaWxkcmVuXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgdXBkYXRlU3RhdGUgKG9iaikge1xuICAgIGlmIChvYmouZHJhZ2dpbmdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qge21ldGFTZWN0aW9uLCB1cGRhdGVTZWN0aW9ufSA9IHRoaXMucHJvcHNcblxuICAgICAgdXBkYXRlU2VjdGlvbihtZXRhU2VjdGlvbi5kYXRhLl9pZCwge1xuICAgICAgICBjaGlsZHJlbjogdGhpcy5zdGF0ZS5kYXRhLml0ZW1zXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUob2JqKVxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7Y2hpbGRyZW4sIGlzRmV0Y2hpbmcsIG1ldGFTZWN0aW9uLCBzZWN0aW9ucywgbG9jYXRpb24sIHBhcmFtc30gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoaXNGZXRjaGluZykge1xuICAgICAgcmV0dXJuIDxMb2FkaW5nIC8+XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzTmV3U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09ICcvc2VjdGlvbnMvbmV3J1xuICAgICAgY29uc3QgaXNFZGl0U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgICAgY29uc3QgZGlzYWJsZUludGVyYWN0aW9uID0gaXNOZXdTZWN0aW9uUm91dGUgfHwgaXNFZGl0U2VjdGlvblJvdXRlXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyIGRpbW1lZD17ZGlzYWJsZUludGVyYWN0aW9ufT5cbiAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICA8VGFibGVSb3cgaGVhZGluZz5cbiAgICAgICAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgaGVhZGluZyB0aXRsZT57bWV0YVNlY3Rpb24uZGF0YS50aXRsZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gd2lkdGg9XCJzdHJldGNoXCI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD51cmw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cblxuICAgICAgICAgICAgICA8VGFibGVDb2x1bW4gbGFzdFxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjBcIj5cbiAgICAgICAgICAgICAgICB7ZGlzYWJsZUludGVyYWN0aW9uXG4gICAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zL25ldz9wYXJlbnRJZD0ke21ldGFTZWN0aW9uLmRhdGEuX2lkfWB9PmFkZCBuZXcgc2VjdGlvbjwvTGlua0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9UYWJsZUNvbHVtbj5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG5cbiAgICAgICAgICAgIHtpc05ld1NlY3Rpb25Sb3V0ZSAmJiBsb2NhdGlvbi5xdWVyeS5wYXJlbnRJZCA9PT0gbWV0YVNlY3Rpb24uZGF0YS5faWRcbiAgICAgICAgICAgICAgPyBjaGlsZHJlblxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmRhdGEuaXRlbXMubWFwKChzZWN0aW9uSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGlzRWRpdFNlY3Rpb25Sb3V0ZSAmJiBzZWN0aW9uSWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zLmZpbmQocyA9PiBzLmRhdGEuX2lkID09PSBzZWN0aW9uSWQpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbnMgPSBzZWN0aW9ucy5maWx0ZXIocyA9PiBzZWN0aW9uLmRhdGEuY2hpbGRyZW4uaW5kZXhPZihzLmRhdGEuX2lkKSAhPT0gLTEpXG5cbiAgICAgICAgICAgICAgICBsZXQgc3Vic2VjdGlvbnNMaXN0ID0gKFxuICAgICAgICAgICAgICAgICAgPFN1YlNlY3Rpb25zTGlzdCBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBzdWJzZWN0aW9ucz17c3Vic2VjdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zPXtwYXJhbXN9XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn0gLz5cbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb249e3NlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ9e21ldGFTZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUludGVyYWN0aW9uPXtkaXNhYmxlSW50ZXJhY3Rpb24gfHwgdGhpcy5zdGF0ZS5kcmFnZ2luZ0luZGV4ICE9PSBudWxsfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAge3N1YnNlY3Rpb25zTGlzdH1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxTb3J0YWJsZUxpc3RJdGVtIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhpcy5zdGF0ZS5kYXRhLml0ZW1zfVxuICAgICAgICAgICAgICAgICAgICAgIGRyYWdnaW5nSW5kZXg9e3RoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgb3V0bGluZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VjdGlvbnNMaXN0SXRlbSBzZWN0aW9uPXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50PXttZXRhU2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgIHtzdWJzZWN0aW9uc0xpc3R9XG4gICAgICAgICAgICAgICAgICAgIDwvU29ydGFibGVMaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IG1ldGFTZWN0aW9uID0gc3RhdGUuc2VjdGlvbnMuaXRlbXMuZmluZChzID0+IHMuZGF0YS51cmwgPT09ICdtYWluLW5hdicgJiYgcy5kYXRhLnNlY3Rpb25UeXBlID09PSAnbWV0YScpXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VjdGlvbnMuaXNGZXRjaGluZyB8fCBzdGF0ZS5hcnRpY2xlcy5pc0ZldGNoaW5nLFxuICAgICAgc2VjdGlvbnM6IHN0YXRlLnNlY3Rpb25zLml0ZW1zLFxuICAgICAgbWV0YVNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZmV0Y2hTZWN0aW9uczogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaFNlY3Rpb25zKCkpXG4gICAgICB9LFxuICAgICAgZmV0Y2hBcnRpY2xlczogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChmZXRjaEFydGljbGVzKCkpXG4gICAgICB9LFxuICAgICAgdXBkYXRlU2VjdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlY3Rpb24oaWQsIGRhdGEpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShTZWN0aW9uc0xpc3QpXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9TZWN0aW9uc0xpc3QvU2VjdGlvbnNMaXN0LmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IFRhYmxlUm93IGZyb20gJy4uL1RhYmxlUm93J1xuaW1wb3J0IFRhYmxlQ29sdW1uIGZyb20gJy4uL1RhYmxlQ29sdW1uJ1xuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tICcuLi9UYWJsZUNlbGwnXG5pbXBvcnQge0ZsZXh9IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0xpbmtCdXR0b259IGZyb20gJy4uL1VJJ1xuaW1wb3J0IEljb24gZnJvbSAnLi4vSWNvbidcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlY3Rpb25zTGlzdEl0ZW0uY3NzJ1xuXG5jb25zdCBTZWN0aW9uc0xpc3RJdGVtID0gKHtcbiAgc2VjdGlvbixcbiAgcGFyZW50LFxuICBkaXNhYmxlSW50ZXJhY3Rpb25cbn0pID0+IHtcbiAgbGV0IGljb24gPSBudWxsXG4gIGlmIChzZWN0aW9uLmRhdGEuc2VjdGlvblR5cGUgPT09ICdwYXJlbnQnKSB7XG4gICAgaWNvbiA9ICdmb2xkZXInXG4gIH0gZWxzZSBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAnY3VzdG9tJykge1xuICAgIGljb24gPSAnZmlsZS1jb2RlJ1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2FydGljbGVzJykge1xuICAgIGljb24gPSAnZmlsZS10ZXh0J1xuICB9IGVsc2UgaWYgKHNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ2Jsb2dwb3N0cycpIHtcbiAgICBpY29uID0gJ2ZpbGUtYmxvZ3Bvc3QnXG4gIH1cblxuICBsZXQgdXJsID0gJydcbiAgaWYgKHBhcmVudC5kYXRhLnNlY3Rpb25UeXBlID09PSAnbWV0YScpIHtcbiAgICB1cmwgPSBgLyR7c2VjdGlvbi5kYXRhLnVybH1gXG4gIH0gZWxzZSB7XG4gICAgdXJsID0gYC8ke3BhcmVudC5kYXRhLnVybH0vJHtzZWN0aW9uLmRhdGEudXJsfWBcbiAgfVxuXG4gIGxldCBhY3Rpb25zID0gJydcbiAgaWYgKCFkaXNhYmxlSW50ZXJhY3Rpb24pIHtcbiAgICBpZiAoc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlID09PSAncGFyZW50Jykge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy9uZXc/cGFyZW50SWQ9JHtzZWN0aW9uLmRhdGEuX2lkfWB9PmFkZCBuZXcgc3ViLXNlY3Rpb248L0xpbmtCdXR0b24+XG5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIHRvPXtgL3NlY3Rpb25zLyR7c2VjdGlvbi5kYXRhLl9pZH0vZWRpdGB9PmVkaXQ8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aW9ucyA9IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5TZWN0aW9uc0xpc3RJdGVtX19hY3Rpb25zfT5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCI+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiB0bz17YC9zZWN0aW9ucy8ke3NlY3Rpb24uZGF0YS5faWR9L2VkaXRgfT5lZGl0PC9MaW5rQnV0dG9uPlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IHNlY3Rpb25MaW5rID0gJydcbiAgaWYgKCFkaXNhYmxlSW50ZXJhY3Rpb24gJiYgc2VjdGlvbi5kYXRhLnNlY3Rpb25UeXBlICE9PSAncGFyZW50Jykge1xuICAgIHNlY3Rpb25MaW5rID0gYC9zZWN0aW9ucy8ke3NlY3Rpb24uZGF0YS5faWR9YFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlNlY3Rpb25zTGlzdEl0ZW19XG4gICAgICAke2Rpc2FibGVJbnRlcmFjdGlvbiA/ICcnIDogc3R5bGVzLlNlY3Rpb25zTGlzdEl0ZW1faW50ZXJhY3RpdmV9YH0+XG4gICAgICA8VGFibGVSb3cgaW50ZXJhY3RpdmU9eyFkaXNhYmxlSW50ZXJhY3Rpb259XG4gICAgICAgIGluZGVudGVkPXtwYXJlbnQuZGF0YS5zZWN0aW9uVHlwZSAhPT0gJ21ldGEnfT5cbiAgICAgICAgPFRhYmxlQ29sdW1uPlxuICAgICAgICAgIDxJY29uIHR5cGU9e2ljb259IC8+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwic3RyZXRjaFwiPlxuICAgICAgICAgIDxUYWJsZUNlbGwgdGl0bGVcbiAgICAgICAgICAgIHRvPXtzZWN0aW9uTGlua30+XG4gICAgICAgICAgICB7c2VjdGlvbi5kYXRhLnRpdGxlfVxuICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICA8L1RhYmxlQ29sdW1uPlxuXG4gICAgICAgIDxUYWJsZUNvbHVtbiB3aWR0aD1cInN0cmV0Y2hcIj5cbiAgICAgICAgICA8VGFibGVDZWxsPnt1cmx9PC9UYWJsZUNlbGw+XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG5cbiAgICAgICAgPFRhYmxlQ29sdW1uIHdpZHRoPVwiMjBcIlxuICAgICAgICAgIGxhc3Q+XG4gICAgICAgICAge2FjdGlvbnN9XG4gICAgICAgIDwvVGFibGVDb2x1bW4+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25zTGlzdEl0ZW1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZVJvdy5jc3MnXG5cbmNvbnN0IFRhYmxlUm93ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGludGVyYWN0aXZlID0gZmFsc2UsXG4gIGhlYWRpbmcgPSBmYWxzZSxcbiAgaW5kZW50ZWQgPSBmYWxzZVxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuVGFibGVSb3ddXG4gIGlmIChoZWFkaW5nKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZVJvd19oZWFkaW5nKVxuICB9XG4gIGlmIChpbnRlcmFjdGl2ZSkge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVSb3dfaW50ZXJhY3RpdmUpXG4gIH1cbiAgaWYgKGluZGVudGVkKSB7XG4gICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZVJvd19pbmRlbnRlZClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZVJvd1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGVSb3cvVGFibGVSb3cuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVSb3dcIjpcIlRhYmxlUm93X19UYWJsZVJvd19fXzJVQk45XCIsXCJUYWJsZVJvd19oZWFkaW5nXCI6XCJUYWJsZVJvd19fVGFibGVSb3dfaGVhZGluZ19fXzFaOWVRXCIsXCJUYWJsZVJvd19pbnRlcmFjdGl2ZVwiOlwiVGFibGVSb3dfX1RhYmxlUm93X2ludGVyYWN0aXZlX19faTVKclZcIixcIlRhYmxlUm93X2luZGVudGVkXCI6XCJUYWJsZVJvd19fVGFibGVSb3dfaW5kZW50ZWRfX18yOFY3NlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGVSb3cvVGFibGVSb3cuY3NzXG4gKiogbW9kdWxlIGlkID0gNzcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZUNvbHVtbi5jc3MnXG5cbmNvbnN0IFRhYmxlQ29sdW1uID0gKHtcbiAgY2hpbGRyZW4sXG4gIHdpZHRoLFxuICBsYXN0ID0gZmFsc2Vcbn0pID0+IHtcbiAgbGV0IHN0eWxlID0ge1xuICAgIHBhZGRpbmdSaWdodDogbGFzdCA/IDAgOiAnMC43NTByZW0nXG4gIH1cbiAgaWYgKHdpZHRoID09PSAnc3RyZXRjaCcpIHtcbiAgICBzdHlsZS5mbGV4ID0gMVxuICB9IGVsc2Uge1xuICAgIHN0eWxlLndpZHRoID0gYCR7d2lkdGh9cmVtYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtzdHlsZX1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLlRhYmxlQ29sdW1ufT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbHVtblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvVGFibGVDb2x1bW4vVGFibGVDb2x1bW4uanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVDb2x1bW5cIjpcIlRhYmxlQ29sdW1uX19UYWJsZUNvbHVtbl9fXzFUdWJzXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZUNvbHVtbi9UYWJsZUNvbHVtbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFibGVDZWxsLmNzcydcblxuY29uc3QgVGFibGVDZWxsID0gKHtcbiAgY2hpbGRyZW4sXG4gIHRpdGxlID0gZmFsc2UsXG4gIGhlYWRpbmcgPSBmYWxzZSxcbiAgdG8gPSBudWxsXG59KSA9PiB7XG4gIGxldCBjbGFzc05hbWVzID0gW11cblxuICBpZiAoaGVhZGluZykge1xuICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuVGFibGVIZWFkaW5nQ2VsbClcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUhlYWRpbmdDZWxsX3RpdGxlKVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLlRhYmxlQ2VsbClcblxuICAgIGlmICh0aXRsZSkge1xuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5UYWJsZUNlbGxfdGl0bGUpXG4gICAgfVxuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPXt0b31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvTGluaz5cbiAgICApXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzLmpvaW4oJyAnKX0+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNlbGxcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlQ2VsbC9UYWJsZUNlbGwuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiVGFibGVDZWxsXCI6XCJUYWJsZUNlbGxfX1RhYmxlQ2VsbF9fXzNqQ3hvXCIsXCJUYWJsZUNlbGxfdGl0bGVcIjpcIlRhYmxlQ2VsbF9fVGFibGVDZWxsX3RpdGxlX19fT1Z5a3RcIixcIlRhYmxlSGVhZGluZ0NlbGxcIjpcIlRhYmxlQ2VsbF9fVGFibGVIZWFkaW5nQ2VsbF9fXzNDU1REXCIsXCJUYWJsZUhlYWRpbmdDZWxsX3RpdGxlXCI6XCJUYWJsZUNlbGxfX1RhYmxlSGVhZGluZ0NlbGxfdGl0bGVfX195T2RXNlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvVGFibGVDZWxsL1RhYmxlQ2VsbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0ljb24uY3NzJ1xuXG5jb25zdCBJY29uID0gKHtcbiAgdHlwZVxufSkgPT4ge1xuICBsZXQgY2xhc3NOYW1lcyA9IFtzdHlsZXMuSWNvbl1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdlbnZlbG9wZSc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZW52ZWxvcGUpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZvbGRlcic6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZm9sZGVyKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLWNvZGUnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVDb2RlKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLXRleHQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVUZXh0KVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdmaWxlLXRleHQtZHJhZnQnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVUZXh0RHJhZnQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ2ZpbGUtYmxvZ3Bvc3QnOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX2ZpbGVCbG9ncG9zdClcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAnZmlsZS1ibG9ncG9zdC1kcmFmdCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fZmlsZUJsb2dwb3N0RHJhZnQpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VzZXInOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3VzZXIpXG4gICAgICBicmVha1xuICAgIGNhc2UgJ3VzZXItYWRtaW4nOlxuICAgICAgY2xhc3NOYW1lcy5wdXNoKHN0eWxlcy5JY29uX3VzZXJBZG1pbilcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAndXNlci1kaXNhYmxlZCc6XG4gICAgICBjbGFzc05hbWVzLnB1c2goc3R5bGVzLkljb25fdXNlckRpc2FibGVkKVxuICAgICAgYnJlYWtcbiAgICBjYXNlICdwbHVzJzpcbiAgICAgIGNsYXNzTmFtZXMucHVzaChzdHlsZXMuSWNvbl9wbHVzKVxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXMuam9pbignICcpfSAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ljb24vSWNvbi5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJJY29uXCI6XCJJY29uX19JY29uX19fMzhFcHZcIixcIkljb25fZW52ZWxvcGVcIjpcIkljb25fX0ljb25fZW52ZWxvcGVfX18ydE5ReFwiLFwiSWNvbl9mb2xkZXJcIjpcIkljb25fX0ljb25fZm9sZGVyX19fMVk0blRcIixcIkljb25fZmlsZUNvZGVcIjpcIkljb25fX0ljb25fZmlsZUNvZGVfX19MZG1OLVwiLFwiSWNvbl9maWxlVGV4dFwiOlwiSWNvbl9fSWNvbl9maWxlVGV4dF9fXzNTYlcwXCIsXCJJY29uX2ZpbGVUZXh0RHJhZnRcIjpcIkljb25fX0ljb25fZmlsZVRleHREcmFmdF9fXzNOU25SXCIsXCJJY29uX2ZpbGVCbG9ncG9zdFwiOlwiSWNvbl9fSWNvbl9maWxlQmxvZ3Bvc3RfX19Bc004Z1wiLFwiSWNvbl9maWxlQmxvZ3Bvc3REcmFmdFwiOlwiSWNvbl9fSWNvbl9maWxlQmxvZ3Bvc3REcmFmdF9fXzJIU0owXCIsXCJJY29uX3VzZXJcIjpcIkljb25fX0ljb25fdXNlcl9fXzM2MGZKXCIsXCJJY29uX3VzZXJBZG1pblwiOlwiSWNvbl9fSWNvbl91c2VyQWRtaW5fX18yd2dxQlwiLFwiSWNvbl91c2VyRGlzYWJsZWRcIjpcIkljb25fX0ljb25fdXNlckRpc2FibGVkX19fRGNKcDlcIixcIkljb25fcGx1c1wiOlwiSWNvbl9fSWNvbl9wbHVzX19fMTBwVHZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL0ljb24vSWNvbi5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlNlY3Rpb25zTGlzdEl0ZW1cIjpcIlNlY3Rpb25zTGlzdEl0ZW1fX1NlY3Rpb25zTGlzdEl0ZW1fX18xS1pFUVwiLFwiU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc1wiOlwiU2VjdGlvbnNMaXN0SXRlbV9fU2VjdGlvbnNMaXN0SXRlbV9fYWN0aW9uc19fX3hpQklHXCIsXCJTZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlXCI6XCJTZWN0aW9uc0xpc3RJdGVtX19TZWN0aW9uc0xpc3RJdGVtX2ludGVyYWN0aXZlX19faUVKSl9cIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1NlY3Rpb25zTGlzdEl0ZW0vU2VjdGlvbnNMaXN0SXRlbS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3NzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQge3NvcnRhYmxlfSBmcm9tICdyZWFjdC1zb3J0YWJsZSdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgU2VjdGlvbnNMaXN0SXRlbSBmcm9tICcuLi9TZWN0aW9uc0xpc3RJdGVtJ1xuXG5jb25zdCBTb3J0YWJsZUxpc3RJdGVtID0gc29ydGFibGUoKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiB7Li4ucHJvcHN9Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgKVxufSlcblxuY2xhc3MgU3ViU2VjdGlvbnNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlID0gdGhpcy51cGRhdGVTdGF0ZS5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZHJhZ2dpbmdJbmRleDogbnVsbCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbXM6IHByb3BzLnNlY3Rpb24uZGF0YS5jaGlsZHJlblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgKG5ld1Byb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGl0ZW1zOiBuZXdQcm9wcy5zZWN0aW9uLmRhdGEuY2hpbGRyZW5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgdXBkYXRlU3RhdGUgKG9iaikge1xuICAgIGlmIChvYmouZHJhZ2dpbmdJbmRleCA9PT0gbnVsbCkge1xuICAgICAgY29uc3Qge3NlY3Rpb24sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgICB1cGRhdGVTZWN0aW9uKHNlY3Rpb24uZGF0YS5faWQsIHtcbiAgICAgICAgY2hpbGRyZW46IHRoaXMuc3RhdGUuZGF0YS5pdGVtc1xuICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKG9iailcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb24sIHN1YnNlY3Rpb25zLCBjaGlsZHJlbiwgbG9jYXRpb24sIHBhcmFtc30gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgaXNOZXdTZWN0aW9uUm91dGUgPSBsb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zZWN0aW9ucy9uZXcnICYmIGxvY2F0aW9uLnF1ZXJ5LnBhcmVudElkID09PSBzZWN0aW9uLmRhdGEuX2lkXG4gICAgY29uc3QgaXNFZGl0U2VjdGlvblJvdXRlID0gbG9jYXRpb24ucGF0aG5hbWUgPT09IGAvc2VjdGlvbnMvJHtwYXJhbXMuc2VjdGlvbklkfS9lZGl0YFxuICAgIGNvbnN0IGRpc2FibGVJbnRlcmFjdGlvbiA9IGlzTmV3U2VjdGlvblJvdXRlIHx8IGlzRWRpdFNlY3Rpb25Sb3V0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtpc05ld1NlY3Rpb25Sb3V0ZVxuICAgICAgICAgID8gY2hpbGRyZW5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH1cblxuICAgICAgICB7c2VjdGlvbi5kYXRhLmNoaWxkcmVuLm1hcCgoc3Vic2VjdGlvbklkLCBpKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3Vic2VjdGlvbiA9IHN1YnNlY3Rpb25zLmZpbmQoc3ViID0+IHN1Yi5kYXRhLl9pZCA9PT0gc3Vic2VjdGlvbklkKVxuXG4gICAgICAgICAgaWYgKGlzRWRpdFNlY3Rpb25Sb3V0ZSAmJiBzdWJzZWN0aW9uSWQgPT09IHBhcmFtcy5zZWN0aW9uSWQpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZGlzYWJsZUludGVyYWN0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW0ga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgc2VjdGlvbj17c3Vic2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIHBhcmVudD17c2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVJbnRlcmFjdGlvbj17ZGlzYWJsZUludGVyYWN0aW9uIHx8IHRoaXMuc3RhdGUuZHJhZ2dpbmdJbmRleCAhPT0gbnVsbH0gLz5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8U29ydGFibGVMaXN0SXRlbSBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZT17dGhpcy51cGRhdGVTdGF0ZX1cbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXt0aGlzLnN0YXRlLmRhdGEuaXRlbXN9XG4gICAgICAgICAgICAgICAgICBkcmFnZ2luZ0luZGV4PXt0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXh9XG4gICAgICAgICAgICAgICAgICBzb3J0SWQ9e2l9XG4gICAgICAgICAgICAgICAgICBvdXRsaW5lPVwibGlzdFwiPlxuICAgICAgICAgICAgICAgICAgPFNlY3Rpb25zTGlzdEl0ZW0gc2VjdGlvbj17c3Vic2VjdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50PXtzZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlSW50ZXJhY3Rpb249e2Rpc2FibGVJbnRlcmFjdGlvbiB8fCB0aGlzLnN0YXRlLmRyYWdnaW5nSW5kZXggIT09IG51bGx9IC8+XG4gICAgICAgICAgICAgICAgPC9Tb3J0YWJsZUxpc3RJdGVtPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBudWxsLFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZVNlY3Rpb246IChpZCwgZGF0YSkgPT4ge1xuICAgICAgICBkaXNwYXRjaCh1cGRhdGVTZWN0aW9uKGlkLCBkYXRhKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoU3ViU2VjdGlvbnNMaXN0KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU3ViU2VjdGlvbnNMaXN0L1N1YlNlY3Rpb25zTGlzdC5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XcmFwcGVyLmNzcydcblxuY29uc3QgV3JhcHBlciA9ICh7XG4gIGRpbW1lZCxcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLldyYXBwZXJ9XG4gICAgICAke2RpbW1lZCA/IHN0eWxlcy5XcmFwcGVyX2RpbW1lZCA6ICcnfWB9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1dyYXBwZXIvV3JhcHBlci5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJXcmFwcGVyXCI6XCJXcmFwcGVyX19XcmFwcGVyX19fMXRfRy1cIixcIldyYXBwZXJfZGltbWVkXCI6XCJXcmFwcGVyX19XcmFwcGVyX2RpbW1lZF9fXzFpR3RjXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9XcmFwcGVyL1dyYXBwZXIuY3NzXG4gKiogbW9kdWxlIGlkID0gNzgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWJsZS5jc3MnXG5cbmNvbnN0IFRhYmxlID0gKHtcbiAgY2hpbGRyZW4sXG4gIGJyZWFkY3J1bWJzID0gZmFsc2Vcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLlRhYmxlfSAke2JyZWFkY3J1bWJzID8gc3R5bGVzLlRhYmxlX2JyZWFkY3J1bWJzIDogJyd9YH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1RhYmxlL1RhYmxlLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlRhYmxlXCI6XCJUYWJsZV9fVGFibGVfX18zdktJUlwiLFwiVGFibGVfYnJlYWRjcnVtYnNcIjpcIlRhYmxlX19UYWJsZV9icmVhZGNydW1ic19fXzNONzNvXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9UYWJsZS9UYWJsZS5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3ODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7Y3JlYXRlU2VjdGlvbn0gZnJvbSAnLi4vLi4vc3RvcmUvc2VjdGlvbnNBY3Rpb25zJ1xuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIFNlbGVjdH0gZnJvbSAnLi4vVUknXG5pbXBvcnQge0Zvcm0sIEZvcm1Cb2R5LCBGb3JtSGVhZGVyLCBGb3JtRm9vdGVyfSBmcm9tICcuLi9Gb3JtJ1xuXG5jbGFzcyBOZXdTZWN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgc2VjdGlvblR5cGU6ICdhcnRpY2xlcycsXG4gICAgICAgIHBhcmVudDogcHJvcHMucGFyZW50U2VjdGlvbi5kYXRhLl9pZFxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlU2VjdGlvbih0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtOiB7aXNVcGRhdGluZ30sIHBhcmVudFNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IHNlY3Rpb25UeXBlcyA9IFtdXG4gICAgaWYgKHBhcmVudFNlY3Rpb24uZGF0YS5zZWN0aW9uVHlwZSA9PT0gJ21ldGEnKSB7XG4gICAgICBzZWN0aW9uVHlwZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2FydGljbGVzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYXJ0aWNsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ3BhcmVudCcsXG4gICAgICAgICAgbGFiZWw6ICdQYXJlbnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2N1c3RvbScsXG4gICAgICAgICAgbGFiZWw6ICdDdXN0b20gcGFnZSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAnYmxvZ3Bvc3RzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYmxvZyBwb3N0cydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0gZWxzZSB7XG4gICAgICBzZWN0aW9uVHlwZXMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2FydGljbGVzJyxcbiAgICAgICAgICBsYWJlbDogJ0xpc3Qgb2YgYXJ0aWNsZXMnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogJ2Jsb2dwb3N0cycsXG4gICAgICAgICAgbGFiZWw6ICdsaXN0IG9mIGJsb2cgcG9zdHMnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm0+XG4gICAgICAgIDxGb3JtSGVhZGVyPkFkZCBuZXcgc2VjdGlvbjwvRm9ybUhlYWRlcj5cblxuICAgICAgICA8Rm9ybUJvZHk+XG4gICAgICAgICAgPEJsb2NrIG49ezF9PlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnRpdGxlfVxuICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMudGl0bGV9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3RpdGxlJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJ1cmxcIlxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnVybH1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndXJsJywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8U2VsZWN0IGxhYmVsPVwiVHlwZVwiXG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNlY3Rpb25UeXBlfVxuICAgICAgICAgICAgb3B0aW9ucz17c2VjdGlvblR5cGVzfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3NlY3Rpb25UeXBlJywgdmFsdWUpfSAvPlxuICAgICAgICA8L0Zvcm1Cb2R5PlxuXG4gICAgICAgIDxGb3JtRm9vdGVyPlxuICAgICAgICAgIDxMaXN0SW5saW5lPlxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgICAgQ3JlYXRlXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgICBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgICAgdG89e2Avc2VjdGlvbnMvYH0+Q2FuY2VsPC9MaW5rQnV0dG9uPlxuICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmU+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtsb2NhdGlvbjoge3F1ZXJ5OiB7cGFyZW50SWR9fX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gcGFyZW50SWQpXG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogc3RhdGUuc2VjdGlvbnMubmV3U2VjdGlvbixcbiAgICAgIHBhcmVudFNlY3Rpb25cbiAgICB9XG4gIH0sXG4gIGRpc3BhdGNoID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlU2VjdGlvbjogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlU2VjdGlvbihkYXRhLCBgL3NlY3Rpb25zL2ApKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShOZXdTZWN0aW9uRm9ybSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05ld1NlY3Rpb25Gb3JtL05ld1NlY3Rpb25Gb3JtLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvcm0uY3NzJ1xuXG5jb25zdCBGb3JtID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IEZvcm1IZWFkZXIgPSAoe1xuICBjaGlsZHJlblxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuRm9ybV9faGVhZGVyfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtQm9keSA9ICh7XG4gIGNoaWxkcmVuXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Gb3JtX19ib2R5fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5jb25zdCBGb3JtRm9vdGVyID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkZvcm1fX2Zvb3Rlcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IHtGb3JtLCBGb3JtSGVhZGVyLCBGb3JtQm9keSwgRm9ybUZvb3Rlcn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3hcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJGb3JtXCI6XCJGb3JtX19Gb3JtX19fMnp3WmZcIixcIkZvcm1fX2hlYWRlclwiOlwiRm9ybV9fRm9ybV9faGVhZGVyX19fTGxrYWZcIixcIkZvcm1fX2JvZHlcIjpcIkZvcm1fX0Zvcm1fX2JvZHlfX192NllhMlwiLFwiRm9ybV9fZm9vdGVyXCI6XCJGb3JtX19Gb3JtX19mb290ZXJfX19VaVJOV1wifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmNzc1xuICoqIG1vZHVsZSBpZCA9IDc4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHt1cGRhdGVTZWN0aW9uLCBkZWxldGVTZWN0aW9ufSBmcm9tICcuLi8uLi9zdG9yZS9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgU2VsZWN0fSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5cbmNsYXNzIEVkaXRTZWN0aW9uRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLnNlY3Rpb24uZGF0YSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7c2VjdGlvbjoge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ319ID0gbmV3UHJvcHNcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7c2VjdGlvbjoge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZVNlY3Rpb259ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIHVwZGF0ZVNlY3Rpb24oaWQsIHBheWxvYWQpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlU2VjdGlvbiwgc2VjdGlvbn0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVTZWN0aW9uKHNlY3Rpb24uZGF0YS5faWQsIHNlY3Rpb24uZGF0YS5jaGlsZHJlbilcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge3NlY3Rpb24sIHBhcmVudFNlY3Rpb259ID0gdGhpcy5wcm9wc1xuXG4gICAgbGV0IGFjdGlvbnMgPSAoXG4gICAgICA8TGlzdElubGluZT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ+QWxsIFNhdmVkPC9CdXR0b24+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICB0bz1cIi9zZWN0aW9uc1wiPkNsb3NlPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgICAgIFNhdmUgQ2hhbmdlc1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgdG89XCIvc2VjdGlvbnNcIj5EaXNjYXJkIENoYW5nZXM8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+RWRpdCBzZWN0aW9uPC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2sgbj17MX0+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NlY3Rpb24uaXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudXJsfVxuICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzZWN0aW9uLmlzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgPC9Gb3JtQm9keT5cblxuICAgICAgICA8Rm9ybUZvb3Rlcj5cbiAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIj5cbiAgICAgICAgICAgIHthY3Rpb25zfVxuXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiB0eXBlPVwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2VjdGlvbi5pc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0Zvcm1Gb290ZXI+XG4gICAgICA8L0Zvcm0+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIChzdGF0ZSwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zOiB7c2VjdGlvbklkfX0gPSBvd25Qcm9wc1xuICAgIGNvbnN0IHNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbklkKVxuICAgIGNvbnN0IHBhcmVudFNlY3Rpb24gPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbi5kYXRhLnBhcmVudClcblxuICAgIHJldHVybiB7XG4gICAgICBzZWN0aW9uLFxuICAgICAgcGFyZW50U2VjdGlvblxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IGJhY2tsaW5rID0gJy9zZWN0aW9ucydcblxuICAgIHJldHVybiB7XG4gICAgICBkZWxldGVTZWN0aW9uOiAoaWQsIGNoaWxkcmVuKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVNlY3Rpb24oaWQsIGNoaWxkcmVuLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlU2VjdGlvbjogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlY3Rpb24oaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdFNlY3Rpb25Gb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdFNlY3Rpb25Gb3JtL0VkaXRTZWN0aW9uRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQge2NyZWF0ZUFydGljbGV9IGZyb20gJy4uLy4uL3N0b3JlL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IHtCbG9jaywgTGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5pbXBvcnQge0J1dHRvbiwgTGlua0J1dHRvbiwgSW5wdXQsIENoZWNrYm94LCBFZGl0b3J9IGZyb20gJy4uL1VJJ1xuaW1wb3J0IHtGb3JtLCBGb3JtQm9keSwgRm9ybUhlYWRlciwgRm9ybUZvb3Rlcn0gZnJvbSAnLi4vRm9ybSdcblxuY2xhc3MgbmV3QXJ0aWNsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIGxldCB0eXBlID0gJydcbiAgICBpZiAocHJvcHMucGFyZW50LmRhdGEuc2VjdGlvblR5cGUgPT09ICdibG9ncG9zdHMnKSB7XG4gICAgICB0eXBlID0gJ2Jsb2dwb3N0J1xuICAgIH0gZWxzZSBpZiAocHJvcHMubG9jYXRpb24ucXVlcnkudHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgICB0eXBlID0gJ2hlYWRpbmcnXG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGUgPSAnYXJ0aWNsZSdcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGF0YToge1xuICAgICAgICB0aXRsZTogJycsXG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHNuaXBwZXQ6ICcnLFxuICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgYXJ0aWNsZVR5cGU6IHR5cGUsXG4gICAgICAgIGlzUHVibGlzaGVkOiBmYWxzZSxcbiAgICAgICAgaXNGcmVxdWVudDogZmFsc2UsXG4gICAgICAgIHBhcmVudDogcHJvcHMucGFyYW1zLnNlY3Rpb25JZFxuICAgICAgfSxcbiAgICAgIGVycm9yczoge31cbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXdQcm9wcykge1xuICAgIGNvbnN0IHtlcnJvcnN9ID0gbmV3UHJvcHMuaXRlbVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlcnJvcnM6IE9iamVjdC5hc3NpZ24oe30sIGVycm9ycylcbiAgICB9KVxuICB9XG5cbiAgc2F2ZSAoKSB7XG4gICAgY29uc3Qge2NyZWF0ZUFydGljbGV9ID0gdGhpcy5wcm9wc1xuXG4gICAgY3JlYXRlQXJ0aWNsZSh0aGlzLnN0YXRlLmRhdGEpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRhOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmRhdGEsIG5ld0RhdGEpLFxuICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmVycm9ycywgbmV3RXJyb3JzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtpdGVtOiB7aXNVcGRhdGluZ30sIHBhcmFtcywgbG9jYXRpb24sIHBhcmVudH0gPSB0aGlzLnByb3BzXG5cbiAgICBsZXQgdHlwZSA9ICcnXG4gICAgaWYgKHBhcmVudC5kYXRhLnNlY3Rpb25UeXBlID09PSAnYmxvZ3Bvc3RzJykge1xuICAgICAgdHlwZSA9ICdibG9ncG9zdCdcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLnF1ZXJ5LnR5cGUgPT09ICdoZWFkaW5nJykge1xuICAgICAgdHlwZSA9ICdoZWFkaW5nJ1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gJ2FydGljbGUnXG4gICAgfVxuXG4gICAgbGV0IHRpdGxlID0gJydcbiAgICBpZiAodHlwZSA9PT0gJ2FydGljbGUnKSB7XG4gICAgICB0aXRsZSA9ICdhcnRpY2xlJ1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2Jsb2dwb3N0Jykge1xuICAgICAgdGl0bGUgPSAnYmxvZyBwb3N0J1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2hlYWRpbmcnKSB7XG4gICAgICB0aXRsZSA9ICdoZWFkaW5nJ1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+QWRkIG5ldyB7dGl0bGV9PC9Gb3JtSGVhZGVyPlxuXG4gICAgICAgIDxGb3JtQm9keT5cbiAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaXRsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudGl0bGV9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy50aXRsZX1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgndGl0bGUnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0eXBlICE9PSAnaGVhZGluZydcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEudXJsfVxuICAgICAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnVybH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd1cmwnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiUHVibGlzaGVkOlwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNQdWJsaXNoZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIHt0eXBlID09PSAnYXJ0aWNsZSdcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiRmVhdHVyZWQ6XCJcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0ZyZXF1ZW50fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2lzRnJlcXVlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgICAgIDwvQmxvY2s+XG4gICAgICAgICAgICApXG4gICAgICAgICAgICA6ICcnXG4gICAgICAgICAgfVxuXG4gICAgICAgICAge3R5cGUgPT09ICdibG9ncG9zdCdcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8QmxvY2s+XG4gICAgICAgICAgICAgICAgPEVkaXRvclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQcmV2aWV3OlwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRhLnNuaXBwZXR9XG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuc25pcHBldH1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdzbmlwcGV0JywgdmFsdWUpfSAvPlxuICAgICAgICAgICAgICA8L0Jsb2NrPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHt0eXBlICE9PSAnaGVhZGluZydcbiAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250ZW50OlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5jb250ZW50fVxuICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnY29udGVudCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogJydcbiAgICAgICAgICB9XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxCdXR0b24gZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zYXZlfT5cbiAgICAgICAgICAgICAgICBDcmVhdGVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICAgIDxMaW5rQnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgICAgICB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5uYXZpZ2F0aW9uVHlwZX0vJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy9gfT5DYW5jZWw8L0xpbmtCdXR0b24+XG4gICAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgPC9Gb3JtRm9vdGVyPlxuICAgICAgPC9Gb3JtPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICAoc3RhdGUsIG93blByb3BzKSA9PiB7XG4gICAgY29uc3Qge3BhcmFtczoge3NlY3Rpb25JZH19ID0gb3duUHJvcHNcbiAgICBjb25zdCBwYXJlbnQgPSBzdGF0ZS5zZWN0aW9ucy5pdGVtcy5maW5kKHMgPT4gcy5kYXRhLl9pZCA9PT0gc2VjdGlvbklkKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW06IHN0YXRlLmFydGljbGVzLm5ld0FydGljbGUsXG4gICAgICBwYXJlbnRcbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG5cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlQXJ0aWNsZTogKGRhdGEpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goY3JlYXRlQXJ0aWNsZShkYXRhLCBgL3NlY3Rpb25zLyR7cGFyYW1zLm5hdmlnYXRpb25UeXBlfS8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL2ApKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShuZXdBcnRpY2xlKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvTmV3QXJ0aWNsZS9OZXdBcnRpY2xlLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7dXBkYXRlQXJ0aWNsZSwgZGVsZXRlQXJ0aWNsZX0gZnJvbSAnLi4vLi4vc3RvcmUvYXJ0aWNsZUFjdGlvbnMnXG5pbXBvcnQge0ZsZXgsIExpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtLCBCbG9ja30gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7QnV0dG9uLCBJY29uQnV0dG9uLCBMaW5rQnV0dG9uLCBJbnB1dCwgU2VsZWN0LCBDaGVja2JveCwgRWRpdG9yfSBmcm9tICcuLi9VSSdcbmltcG9ydCB7Rm9ybSwgRm9ybUJvZHksIEZvcm1IZWFkZXIsIEZvcm1Gb290ZXJ9IGZyb20gJy4uL0Zvcm0nXG5cbmNsYXNzIEVkaXRBcnRpY2xlRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5kZWxldGUgPSB0aGlzLmRlbGV0ZS5iaW5kKHRoaXMpXG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZSA9IHRoaXMuY2hhbmdlLmJpbmQodGhpcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0RpcnR5OiBmYWxzZSxcbiAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIHByb3BzLmFydGljbGUuZGF0YSksXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyAobmV3UHJvcHMpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge2Vycm9ycywgZGF0YSwgaXNVcGRhdGluZ319ID0gbmV3UHJvcHNcblxuICAgIGlmICghaXNVcGRhdGluZykge1xuICAgICAgbGV0IG5ld1N0YXRlID0ge31cblxuICAgICAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID09PSAwICYmIGVycm9ycy5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgIG5ld1N0YXRlID0ge1xuICAgICAgICAgIGlzRGlydHk6IGZhbHNlLFxuICAgICAgICAgIGRhdGE6IE9iamVjdC5hc3NpZ24oe30sIGRhdGEpLFxuICAgICAgICAgIGVycm9yczoge31cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U3RhdGUgPSB7XG4gICAgICAgICAgZXJyb3JzOiBPYmplY3QuYXNzaWduKHt9LCBlcnJvcnMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRTdGF0ZShuZXdTdGF0ZSlcbiAgICB9XG4gIH1cblxuICBzYXZlICgpIHtcbiAgICBjb25zdCB7YXJ0aWNsZToge2RhdGE6IHtfaWQ6IGlkfX0sIHVwZGF0ZUFydGljbGV9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHBheWxvYWQgPSBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUuZGF0YSlcblxuICAgIHVwZGF0ZUFydGljbGUoaWQsIHBheWxvYWQpXG4gIH1cblxuICBjaGFuZ2UgKHByb3AsIHZhbHVlKSB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIFtwcm9wXTogdmFsdWVcbiAgICB9XG4gICAgY29uc3QgbmV3RXJyb3JzID0ge1xuICAgICAgW3Byb3BdOiBudWxsXG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpc0RpcnR5OiB0cnVlLFxuICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5kYXRhLCBuZXdEYXRhKSxcbiAgICAgIGVycm9yczogT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5lcnJvcnMsIG5ld0Vycm9ycylcbiAgICB9KVxuICB9XG5cbiAgZGVsZXRlICgpIHtcbiAgICBjb25zdCB7ZGVsZXRlQXJ0aWNsZSwgYXJ0aWNsZX0gPSB0aGlzLnByb3BzXG5cbiAgICBkZWxldGVBcnRpY2xlKGFydGljbGUuZGF0YS5faWQpXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHtwYXJhbXM6IHtpc1VwZGF0aW5nfSwgcGFyYW1zfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBhcnRpY2xlVHlwZXMgPSBbXG4gICAgICB7XG4gICAgICAgIGlkOiAnYXJ0aWNsZScsXG4gICAgICAgIGxhYmVsOiAnQXJ0aWNsZSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAnaGVhZGluZycsXG4gICAgICAgIGxhYmVsOiAnSGVhZGluZydcbiAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgYm9keSA9ICcnXG4gICAgaWYgKHRoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2FydGljbGUnKSB7XG4gICAgICBib2R5ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPElucHV0IGxhYmVsPVwidXJsXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS51cmx9XG4gICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy51cmx9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ3VybCcsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPEJsb2NrPlxuICAgICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiUHVibGlzaGVkOlwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc1B1Ymxpc2hlZH1cbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNQdWJsaXNoZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgICAgPC9CbG9jaz5cblxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxDaGVja2JveCBsYWJlbD1cIkZlYXR1cmVkOlwiXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZGF0YS5pc0ZyZXF1ZW50fVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdpc0ZyZXF1ZW50JywgdmFsdWUpfSAvPlxuICAgICAgICAgIDwvQmxvY2s+XG5cbiAgICAgICAgICA8RWRpdG9yXG4gICAgICAgICAgICBsYWJlbD1cIkNvbnRlbnQ6XCJcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGEuY29udGVudH1cbiAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5jb250ZW50fVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gdGhpcy5jaGFuZ2UoJ2NvbnRlbnQnLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICBib2R5ID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxJbnB1dCBsYWJlbD1cIlRpdGxlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS50aXRsZX1cbiAgICAgICAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnRpdGxlfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCd0aXRsZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAgPENoZWNrYm94IGxhYmVsPVwiUHVibGlzaGVkOlwiXG4gICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLmRhdGEuaXNQdWJsaXNoZWR9XG4gICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiB0aGlzLmNoYW5nZSgnaXNQdWJsaXNoZWQnLCB2YWx1ZSl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH1cblxuICAgIGxldCBhY3Rpb25zID0gKFxuICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPkFsbCBTYXZlZDwvQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgIDxMaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgIHRvPXtgL3NlY3Rpb25zLyR7cGFyYW1zLm5hdmlnYXRpb25UeXBlfS8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzL2B9PkNsb3NlPC9MaW5rQnV0dG9uPlxuICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuICAgICAgPC9MaXN0SW5saW5lPlxuICAgIClcbiAgICBpZiAodGhpcy5zdGF0ZS5pc0RpcnR5KSB7XG4gICAgICBhY3Rpb25zID0gKFxuICAgICAgICA8TGlzdElubGluZT5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8QnV0dG9uIGRpc2FibGVkPXtpc1VwZGF0aW5nfVxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNhdmV9PlxuICAgICAgICAgICAgICBTYXZlIENoYW5nZXNcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgICA8TGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgICA8TGlua0J1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgICB0bz17YC9zZWN0aW9ucy8ke3BhcmFtcy5uYXZpZ2F0aW9uVHlwZX0vJHtwYXJhbXMuc2VjdGlvbklkfS9hcnRpY2xlcy9gfT5EaXNjYXJkIENoYW5nZXM8L0xpbmtCdXR0b24+XG4gICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgPC9MaXN0SW5saW5lPlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybT5cbiAgICAgICAgPEZvcm1IZWFkZXI+XG4gICAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZSA9PT0gJ2FydGljbGUnXG4gICAgICAgICAgICA/ICdFZGl0IGFydGljbGUnXG4gICAgICAgICAgICA6ICdFZGl0IGhlYWRpbmcnXG4gICAgICAgICAgfVxuICAgICAgICA8L0Zvcm1IZWFkZXI+XG5cbiAgICAgICAgPEZvcm1Cb2R5PlxuICAgICAgICAgIDxCbG9jaz5cbiAgICAgICAgICAgIDxTZWxlY3QgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0YS5hcnRpY2xlVHlwZX1cbiAgICAgICAgICAgICAgb3B0aW9ucz17YXJ0aWNsZVR5cGVzfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHRoaXMuY2hhbmdlKCdhcnRpY2xlVHlwZScsIHZhbHVlKX0gLz5cbiAgICAgICAgICA8L0Jsb2NrPlxuXG4gICAgICAgICAge2JvZHl9XG4gICAgICAgIDwvRm9ybUJvZHk+XG5cbiAgICAgICAgPEZvcm1Gb290ZXI+XG4gICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICB7YWN0aW9uc31cblxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPEljb25CdXR0b24gdHlwZT1cImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzVXBkYXRpbmd9XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGV9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIDwvRm9ybUZvb3Rlcj5cbiAgICAgIDwvRm9ybT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICAgIGNvbnN0IHtwYXJhbXN9ID0gb3duUHJvcHNcblxuICAgIHJldHVybiB7XG4gICAgICBhcnRpY2xlOiBzdGF0ZS5hcnRpY2xlcy5pdGVtcy5maW5kKGEgPT4gYS5kYXRhLl9pZCA9PT0gcGFyYW1zLmFydGljbGVJZClcbiAgICB9XG4gIH0sXG4gIChkaXNwYXRjaCwgb3duUHJvcHMpID0+IHtcbiAgICBjb25zdCB7cGFyYW1zfSA9IG93blByb3BzXG4gICAgY29uc3QgYmFja2xpbmsgPSBgL3NlY3Rpb25zLyR7cGFyYW1zLm5hdmlnYXRpb25UeXBlfS8ke3BhcmFtcy5zZWN0aW9uSWR9L2FydGljbGVzYFxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGRlbGV0ZUFydGljbGU6IChpZCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChkZWxldGVBcnRpY2xlKGlkLCBiYWNrbGluaykpXG4gICAgICB9LFxuICAgICAgdXBkYXRlQXJ0aWNsZTogKGlkLCBkYXRhKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZUFydGljbGUoaWQsIGRhdGEsIGJhY2tsaW5rKSlcbiAgICAgIH1cbiAgICB9XG4gIH1cbikoRWRpdEFydGljbGVGb3JtKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvRWRpdEFydGljbGVGb3JtL0VkaXRBcnRpY2xlRm9ybS5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFRpbWUgZnJvbSAncmVhY3QtdGltZSdcblxuaW1wb3J0IHtmZXRjaFNlYXJjaEluZGV4LCB1cGRhdGVTZWFyY2hJbmRleH0gZnJvbSAnLi4vLi4vc3RvcmUvc2VhcmNoSW5kZXhBY3Rpb25zLmpzJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9VSSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlYXJjaEluZGV4LmNzcydcblxuY2xhc3MgU2VhcmNoSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKVxuICB9XG5cbiAgdXBkYXRlICgpIHtcbiAgICBjb25zdCB7dXBkYXRlSW5kZXh9ID0gdGhpcy5wcm9wc1xuXG4gICAgdXBkYXRlSW5kZXgoKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50ICgpIHtcbiAgICBjb25zdCB7ZmV0Y2hJbmRleH0gPSB0aGlzLnByb3BzXG5cbiAgICBmZXRjaEluZGV4KClcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmcsIGlzVXBkYXRpbmcsIGxhc3RVcGRhdGVkT24sIGxhc3RVcGRhdGVkQnl9ID0gdGhpcy5wcm9wc1xuXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcbiAgICAgIHJldHVybiA8TG9hZGluZyAvPlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlNlYXJjaEluZGV4fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkhlYWRpbmd9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5OYW1lfT5TZWFyY2ggSW5kZXg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuU2VhcmNoSW5kZXhfX2JvZHl9PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgTGFzdCB1cGRhdGVkIG9uIDxUaW1lIHZhbHVlPXtsYXN0VXBkYXRlZE9ufSBmb3JtYXQ9XCJoOm1tIEEgb24gTU1NIERvXCIgLz4gYnkge2xhc3RVcGRhdGVkQnl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPEJ1dHRvbiBkaXNhYmxlZD17aXNVcGRhdGluZ31cbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy51cGRhdGV9PlVwZGF0ZTwvQnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5zZWFyY2hJbmRleC5pc0ZldGNoaW5nLFxuICAgICAgaXNVcGRhdGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNVcGRhdGluZyxcbiAgICAgIGxhc3RVcGRhdGVkT246IHN0YXRlLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sXG4gICAgICBsYXN0VXBkYXRlZEJ5OiBzdGF0ZS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5XG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGZldGNoSW5kZXg6ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goZmV0Y2hTZWFyY2hJbmRleCgpKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZUluZGV4OiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHVwZGF0ZVNlYXJjaEluZGV4KCkpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKFNlYXJjaEluZGV4KVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguanN4XG4gKiovIiwiaW1wb3J0ICd3aGF0d2ctZmV0Y2gnXG5cbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuXG5leHBvcnQgY29uc3QgUkVRVUVTVF9JTkRFWCA9ICdSRVFVRVNUX0lOREVYJ1xuZXhwb3J0IGNvbnN0IFJFQ0VJVkVfSU5ERVggPSAnUkVDRUlWRV9JTkRFWCdcblxuZXhwb3J0IGNvbnN0IFJFUVVFU1RfVVBEQVRFX0lOREVYID0gJ1JFUVVFU1RfVVBEQVRFX0lOREVYJ1xuZXhwb3J0IGNvbnN0IENPTkZJUk1fVVBEQVRFX0lOREVYID0gJ0NPTkZJUk1fVVBEQVRFX0lOREVYJ1xuXG5jb25zdCByZXF1ZXN0U2VhcmNoSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVRVUVTVF9JTkRFWFxuICB9XG59XG5cbmNvbnN0IHJlY2VpdmVTZWFyY2hJbmRleCA9IChcbiAgbGFzdFVwZGF0ZWRPbixcbiAgbGFzdFVwZGF0ZWRCeVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogUkVDRUlWRV9JTkRFWCxcbiAgICBsYXN0VXBkYXRlZE9uLFxuICAgIGxhc3RVcGRhdGVkQnlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZmV0Y2hTZWFyY2hJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBkaXNwYXRjaChyZXF1ZXN0U2VhcmNoSW5kZXgoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VhcmNoSW5kZXhgLCB7XG4gICAgICBtb2RlOiAnY29ycycsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICd4LWFjY2Vzcy10b2tlbic6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbnRpVmF4X2F1dGhfdG9rZW4nKVxuICAgICAgfVxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAgIGRpc3BhdGNoKGxvZ091dCgpKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnQXV0aG9yaXphdGlvbiBmYWlsZWQuIFBsZWFzZSwgbG9nIGluIGFnYWluJywgJ2Vycm9yJykpXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmF1dGhvcml6ZWQgYWN0aW9uJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5zdWNjZXNzKSB7XG4gICAgICAgICAgZGlzcGF0Y2gocmVjZWl2ZVNlYXJjaEluZGV4KGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZE9uLCBqc29uLmRhdGEuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeSkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihqc29uLmRhdGEpXG4gICAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZyA6KCknLCAnZXJyb3InKSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0VXBkYXRlID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFJFUVVFU1RfVVBEQVRFX0lOREVYXG4gIH1cbn1cblxuY29uc3QgY29uZmlybVVwZGF0ZSA9IChcbiAgbGFzdFVwZGF0ZWRPbixcbiAgbGFzdFVwZGF0ZWRCeVxuKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQ09ORklSTV9VUERBVEVfSU5ERVgsXG4gICAgbGFzdFVwZGF0ZWRPbixcbiAgICBsYXN0VXBkYXRlZEJ5XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVNlYXJjaEluZGV4ID0gKCkgPT4ge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGRpc3BhdGNoKHJlcXVlc3RVcGRhdGUoKSlcblxuICAgIGZldGNoKGAke0FOVElWQVhfQURNSU5fU0VSVkVSX1VSTH0vc2VhcmNoSW5kZXhgLCB7XG4gICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAneC1hY2Nlc3MtdG9rZW4nOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYW50aVZheF9hdXRoX3Rva2VuJylcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ0F1dGhvcml6YXRpb24gZmFpbGVkLiBQbGVhc2UsIGxvZyBpbiBhZ2FpbicsICdlcnJvcicpKVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hdXRob3JpemVkIGFjdGlvbicpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihqc29uID0+IHtcbiAgICAgICAgaWYgKGpzb24uc3VjY2Vzcykge1xuICAgICAgICAgIGRpc3BhdGNoKGNvbmZpcm1VcGRhdGUoanNvbi5kYXRhLnNlYXJjaEluZGV4Lmxhc3RVcGRhdGVkT24sIGpzb24uZGF0YS5zZWFyY2hJbmRleC5sYXN0VXBkYXRlZEJ5KSlcbiAgICAgICAgICBkaXNwYXRjaChmbGFzaE1lc3NhZ2UoJ1NlYXJjaCBpbmRleCB1cGRhdGVkJywgJ2xvZycpKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoanNvbi5kYXRhKVxuICAgICAgICAgIGRpc3BhdGNoKGZsYXNoTWVzc2FnZSgnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcgOigpJywgJ2Vycm9yJykpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hJbmRleEFjdGlvbnMuanNcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJTZWFyY2hJbmRleFwiOlwiU2VhcmNoSW5kZXhfX1NlYXJjaEluZGV4X19fUGtEWWJcIixcIlNlYXJjaEluZGV4X19ib2R5XCI6XCJTZWFyY2hJbmRleF9fU2VhcmNoSW5kZXhfX2JvZHlfX18zUmZfS1wiLFwiSGVhZGluZ1wiOlwiU2VhcmNoSW5kZXhfX0hlYWRpbmdfX18xcUZHN1wiLFwiTmFtZVwiOlwiU2VhcmNoSW5kZXhfX05hbWVfX184SlU0SFwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvU2VhcmNoSW5kZXgvU2VhcmNoSW5kZXguY3NzXG4gKiogbW9kdWxlIGlkID0gNzk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA3OTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBGbGFzaE1lc3NhZ2UgZnJvbSAnLi4vRmxhc2hNZXNzYWdlJ1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vTG9hZGluZydcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbidcbmltcG9ydCBBcHBIZWFkZXIgZnJvbSAnLi4vQXBwSGVhZGVyJ1xuaW1wb3J0IHtsb2dpbldpdGhUb2tlbn0gZnJvbSAnLi4vLi4vc3RvcmUvYXV0aEFjdGlvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BcHAuY3NzJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsTW91bnQgKCkge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FudGlWYXhfYXV0aF90b2tlbicpXG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHRoaXMucHJvcHMuYXR0ZW1wdFRva2VuKHRva2VuKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdXNlcixcbiAgICAgIGNoaWxkcmVuLFxuICAgICAgYXR0ZW1wdGluZ0xvZ2luXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGlmIChhdHRlbXB0aW5nTG9naW4pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5BcHB9PlxuICAgICAgICAgICAgPEFwcEhlYWRlciAvPlxuXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExvZ2luIC8+XG5cbiAgICAgICAgICAgIDxGbGFzaE1lc3NhZ2UgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGF0dGVtcHRpbmdMb2dpbjogc3RhdGUuYXV0aC5pc0ZldGNoaW5nLFxuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyLFxuICAgICAgc2VhcmNoSW5kZXg6IHtcbiAgICAgICAgaXNGZXRjaGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNGZXRjaGluZyxcbiAgICAgICAgaXNVcGRhdGluZzogc3RhdGUuc2VhcmNoSW5kZXguaXNVcGRhdGluZyxcbiAgICAgICAgbGFzdFVwZGF0ZWRPbjogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRPbixcbiAgICAgICAgbGFzdFVwZGF0ZWRCeTogc3RhdGUuc2VhcmNoSW5kZXgubGFzdFVwZGF0ZWRCeVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGlzcGF0Y2ggPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBhdHRlbXB0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dpbldpdGhUb2tlbih0b2tlbikpXG4gICAgICB9XG4gICAgfVxuICB9XG4pKEFwcClcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0FwcC9BcHAuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtBbGVydH0gZnJvbSAnLi4vVUknXG5cbmNvbnN0IEZsYXNoTWVzc2FnZSA9ICh7XG4gIG1lc3NhZ2UsXG4gIHR5cGVcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8QWxlcnQgbWVzc2FnZT17bWVzc2FnZX0gdHlwZT17dHlwZX0gLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBzdGF0ZSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6IHN0YXRlLmZsYXNoLm1lc3NhZ2UsXG4gICAgICB0eXBlOiBzdGF0ZS5mbGFzaC50eXBlXG4gICAgfVxuICB9XG4pKEZsYXNoTWVzc2FnZSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZS9GbGFzaE1lc3NhZ2UuanN4XG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHtGbGV4LCBMaXN0LCBMaXN0SXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcbmltcG9ydCB7TW9kYWxXaW5kb3csIE1vZGFsV2luZG93Qm9keSwgTW9kYWxXaW5kb3dIZWFkZXIsIE1vZGFsV2luZG93Rm9vdGVyLCBJbnB1dCwgQnV0dG9ufSBmcm9tICcuLi9VSSdcbmltcG9ydCB7bG9naW5XaXRoQ3JlZGVudGlhbHN9IGZyb20gJy4uLy4uL3N0b3JlL2F1dGhBY3Rpb25zJ1xuXG5jbGFzcyBMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdWJtaXRGb3JtID0gdGhpcy5zdWJtaXRGb3JtLmJpbmQodGhpcylcbiAgICB0aGlzLmNoYW5nZUVtYWlsID0gdGhpcy5jaGFuZ2VFbWFpbC5iaW5kKHRoaXMpXG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVtYWlsRXJyb3I6ICcnLFxuICAgICAgcGFzc3dvcmRFcnJvcjogJycsXG4gICAgICBlbWFpbDogJycsXG4gICAgICBwYXNzd29yZDogJydcbiAgICB9XG4gIH1cblxuICBzdWJtaXRGb3JtIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgbGV0IGVtYWlsRXJyb3IgPSAnJ1xuICAgIGxldCBwYXNzd29yZEVycm9yID0gJydcblxuICAgIGNvbnN0IHtkaXNwYXRjaH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAodGhpcy5zdGF0ZS5lbWFpbCA9PT0gJycpIHtcbiAgICAgIGVtYWlsRXJyb3IgPSAnZW1haWwgY2Fubm90IGJlIGVtcHR5J1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkID09PSAnJykge1xuICAgICAgcGFzc3dvcmRFcnJvciA9ICdwYXNzd29yZCBjYW5ub3QgYmUgYmxhbmsnXG4gICAgfVxuXG4gICAgaWYgKCFlbWFpbEVycm9yICYmICFwYXNzd29yZEVycm9yKSB7XG4gICAgICBkaXNwYXRjaChsb2dpbldpdGhDcmVkZW50aWFscyh0aGlzLnN0YXRlLmVtYWlsLCB0aGlzLnN0YXRlLnBhc3N3b3JkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGVtYWlsRXJyb3IsXG4gICAgICAgIHBhc3N3b3JkRXJyb3JcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlRW1haWwgKHZhbHVlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBlbWFpbDogdmFsdWUsXG4gICAgICBlbWFpbEVycm9yOiAnJ1xuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCAodmFsdWUpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHBhc3N3b3JkOiB2YWx1ZSxcbiAgICAgIHBhc3N3b3JkRXJyb3I6ICcnXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3Qge2lzRmV0Y2hpbmd9ID0gdGhpcy5wcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNb2RhbFdpbmRvdz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc3VibWl0Rm9ybX0+XG4gICAgICAgICAgPE1vZGFsV2luZG93SGVhZGVyPlxuICAgICAgICAgICAgPEZsZXgganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIj5Mb2dpbjwvRmxleD5cbiAgICAgICAgICA8L01vZGFsV2luZG93SGVhZGVyPlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Qm9keT5cbiAgICAgICAgICAgIDxMaXN0IG49ezEuNX0+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbSBuPXsxLjV9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsOlwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImUuZy4gY2FzZXlAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVtYWlsRXJyb3J9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5jaGFuZ2VFbWFpbH0gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdEl0ZW0gbj17MS41fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZDpcIlxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEJpZ1NlY3JldFwiXG4gICAgICAgICAgICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5wYXNzd29yZEVycm9yfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvTW9kYWxXaW5kb3dCb2R5PlxuXG4gICAgICAgICAgPE1vZGFsV2luZG93Rm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBkaXNhYmxlZD17aXNGZXRjaGluZ31cbiAgICAgICAgICAgICAgbGFiZWw9XCJMb2dpblwiPkxvZ2luPC9CdXR0b24+XG4gICAgICAgICAgPC9Nb2RhbFdpbmRvd0Zvb3Rlcj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Nb2RhbFdpbmRvdz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgc3RhdGUgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICBpc0ZldGNoaW5nOiBzdGF0ZS5hdXRoLmlzRmV0Y2hpbmdcbiAgICB9XG4gIH1cbikoTG9naW4pXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9Mb2dpbi9Mb2dpbi5qc3hcbiAqKi8iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9Vc2VySW5mbydcbmltcG9ydCBOYXYgZnJvbSAnLi4vTmF2J1xuaW1wb3J0IHtMaXN0SW5saW5lLCBMaXN0SW5saW5lSXRlbX0gZnJvbSAnLi4vTGF5b3V0cydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0FwcEhlYWRlci5jc3MnXG5cbmNvbnN0IEFwcEhlYWRlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkFwcEhlYWRlcn0+XG4gICAgICA8TGlzdElubGluZSBuPXsyfT5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQXBwSGVhZGVyX19zaXRlbmFtZX0+VmFjY2luZSBBbnN3ZXJzIEFkbWluPC9kaXY+XG4gICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG5cbiAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezJ9PlxuICAgICAgICAgIDxOYXYgLz5cbiAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgIDwvTGlzdElubGluZT5cblxuICAgICAgPFVzZXJJbmZvIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwSGVhZGVyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvY29tcG9uZW50cy9BcHBIZWFkZXIvQXBwSGVhZGVyLmpzeFxuICoqLyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7bG9nT3V0fSBmcm9tICcuLi8uLi9zdG9yZS9hdXRoQWN0aW9ucydcbmltcG9ydCB7Zmxhc2hNZXNzYWdlfSBmcm9tICcuLi8uLi9zdG9yZS9mbGFzaEFjdGlvbnMnXG5pbXBvcnQge0xpc3RJbmxpbmUsIExpc3RJbmxpbmVJdGVtfSBmcm9tICcuLi9MYXlvdXRzJ1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL1VJJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXNlckluZm8uY3NzJ1xuXG5jb25zdCBVc2VySW5mbyA9ICh7XG4gIHVzZXIsXG4gIGxvZ091dFxufSkgPT4ge1xuICBpZiAodXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvfT5cbiAgICAgICAgPExpc3RJbmxpbmU+XG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPExpc3RJbmxpbmUgbj17MC41fT5cbiAgICAgICAgICAgICAgPExpc3RJbmxpbmVJdGVtIG49ezAuNX0+TG9nZ2VkIGluIGFzPC9MaXN0SW5saW5lSXRlbT5cblxuICAgICAgICAgICAgICA8TGlzdElubGluZUl0ZW0gbj17MC41fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLlVzZXJJbmZvX191c2VybmFtZX0+e3VzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaXN0SW5saW5lSXRlbT5cbiAgICAgICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgICAgICA8L0xpc3RJbmxpbmVJdGVtPlxuXG4gICAgICAgICAgPExpc3RJbmxpbmVJdGVtPlxuICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInJlZFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ091dH0+TG9nIG91dDwvQnV0dG9uPlxuICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgIDwvTGlzdElubGluZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gPGRpdiAvPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIHN0YXRlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcjogc3RhdGUuYXV0aC51c2VyXG4gICAgfVxuICB9LFxuICBkaXNwYXRjaCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxvZ091dDogKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChsb2dPdXQoKSlcbiAgICAgICAgZGlzcGF0Y2goZmxhc2hNZXNzYWdlKCdZb3UgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0JywgJ2xvZycpKVxuICAgICAgfVxuICAgIH1cbiAgfVxuKShVc2VySW5mbylcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmpzeFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlVzZXJJbmZvXCI6XCJVc2VySW5mb19fVXNlckluZm9fX18yU01qSlwiLFwiVXNlckluZm9fX3VzZXJuYW1lXCI6XCJVc2VySW5mb19fVXNlckluZm9fX3VzZXJuYW1lX19fMnp5cFZcIn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvL1VzZXJJbmZvLmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7TGlzdElubGluZSwgTGlzdElubGluZUl0ZW19IGZyb20gJy4uL0xheW91dHMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXYuY3NzJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGxhYmVsOiAnUXVlc3Rpb25zJyxcbiAgICAgIHVybDogJy9xdWVzdGlvbnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogJ1NlY3Rpb25zJyxcbiAgICAgIHVybDogJy9zZWN0aW9ucydcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhYmVsOiAnVXNlcnMnLFxuICAgICAgdXJsOiAnL3VzZXJzJ1xuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6ICdTZWFyY2ggSW5kZXgnLFxuICAgICAgdXJsOiAnL3NlYXJjaC1pbmRleCdcbiAgICB9XG4gIF1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuTmF2fT5cbiAgICAgIDxMaXN0SW5saW5lIG49ezAuNX0+XG4gICAgICAgIHtpdGVtcy5tYXAoaSA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaXN0SW5saW5lSXRlbSBuPXswLjV9IGtleT17aS51cmx9PlxuICAgICAgICAgICAgICA8TGluayBjbGFzc05hbWU9e3N0eWxlcy5OYXZfX2l0ZW19XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2xhc3NOYW1lPXtzdHlsZXMuTmF2X19pdGVtX2FjdGl2ZX1cbiAgICAgICAgICAgICAgICB0bz17aS51cmx9PntpLmxhYmVsfTwvTGluaz5cbiAgICAgICAgICAgIDwvTGlzdElubGluZUl0ZW0+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvTGlzdElubGluZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9jb21wb25lbnRzL05hdi9OYXYuanN4XG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiTmF2XCI6XCJOYXZfX05hdl9fXzNQeXllXCIsXCJOYXZfX2l0ZW1cIjpcIk5hdl9fTmF2X19pdGVtX19fNUhidUVcIixcIk5hdl9faXRlbV9hY3RpdmVcIjpcIk5hdl9fTmF2X19pdGVtX2FjdGl2ZV9fXzJxNHRUXCJ9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvY29tcG9uZW50cy9OYXYvTmF2LmNzc1xuICoqIG1vZHVsZSBpZCA9IDgwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiQXBwSGVhZGVyXCI6XCJBcHBIZWFkZXJfX0FwcEhlYWRlcl9fXzJVNEtPXCIsXCJBcHBIZWFkZXJfX3NpdGVuYW1lXCI6XCJBcHBIZWFkZXJfX0FwcEhlYWRlcl9fc2l0ZW5hbWVfX18zY2YtUlwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwSGVhZGVyL0FwcEhlYWRlci5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIkFwcFwiOlwiQXBwX19BcHBfX19sQkVYSVwifTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5jc3NcbiAqKiBtb2R1bGUgaWQgPSA4MDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCB7Y3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZX0gZnJvbSAncmVkdXgnXG5pbXBvcnQgY3JlYXRlTG9nZ2VyIGZyb20gJ3JlZHV4LWxvZ2dlcidcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yb290UmVkdWNlcidcblxuY29uc3QgbWlkZGxld2FyZSA9IFt0aHVua01pZGRsZXdhcmVdXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoKVxuICBtaWRkbGV3YXJlLnB1c2gobG9nZ2VyKVxufVxuXG5jb25zdCBjb25maWd1cmVTdG9yZSA9IChpbml0aWFsU3RhdGUpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25maWd1cmVTdG9yZVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3N0b3JlLmpzXG4gKiovIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgYXV0aCBmcm9tICcuL2F1dGhSZWR1Y2VyJ1xuaW1wb3J0IGZsYXNoIGZyb20gJy4vZmxhc2hSZWR1Y2VyJ1xuaW1wb3J0IHF1ZXN0aW9ucyBmcm9tICcuL3F1ZXN0aW9uc1JlZHVjZXInXG5pbXBvcnQgYXJ0aWNsZXMgZnJvbSAnLi9hcnRpY2xlUmVkdWNlcidcbmltcG9ydCB1c2VycyBmcm9tICcuL3VzZXJzUmVkdWNlcidcbmltcG9ydCBzZWN0aW9ucyBmcm9tICcuL3NlY3Rpb25zUmVkdWNlcidcbmltcG9ydCBzZWFyY2hJbmRleCBmcm9tICcuL3NlYXJjaEluZGV4UmVkdWNlcidcblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBhdXRoLFxuICBmbGFzaCxcbiAgcXVlc3Rpb25zLFxuICBhcnRpY2xlcyxcbiAgdXNlcnMsXG4gIHNlY3Rpb25zLFxuICBzZWFyY2hJbmRleFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9yb290UmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9BVVRILCBMT0dJTiwgTE9HT1VUfSBmcm9tICcuL2F1dGhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXV0aCA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXV0aCxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9BVVRIOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hdXRoLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBMT0dJTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxuICAgICAgfVxuICAgIGNhc2UgTE9HT1VUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIHVzZXI6IG51bGxcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXV0aFxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2F1dGhSZWR1Y2VyLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQge1xuICBhdXRoOiB7XG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgdXNlcjogbnVsbFxuICB9LFxuICBmbGFzaDoge1xuICAgIG1lc3NhZ2U6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0aW1lb3V0SWQ6IG51bGxcbiAgfSxcbiAgcXVlc3Rpb25zOiB7XG4gICAgaXNGZXRjaGluZzogdHJ1ZSxcbiAgICBpdGVtczogW11cbiAgfSxcbiAgcXVlc3Rpb246IHtcbiAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICBkYXRhOiB7fVxuICB9LFxuICBhcnRpY2xlczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld0FydGljbGU6IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICBhcnRpY2xlOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWN0aW9uczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld1NlY3Rpb246IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICBzZWN0aW9uOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICB1c2Vyczoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXRlbXM6IFtdLFxuICAgIG5ld1VzZXI6IHtcbiAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgZGF0YToge30sXG4gICAgICBlcnJvcnM6IHt9XG4gICAgfVxuICB9LFxuICB1c2VyOiB7XG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgZGF0YToge30sXG4gICAgZXJyb3JzOiB7fVxuICB9LFxuICBzZWFyY2hJbmRleDoge1xuICAgIGlzRmV0Y2hpbmc6IHRydWUsXG4gICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgbGFzdFVwZGF0ZWRPbjogbnVsbCxcbiAgICBsYXN0VXBkYXRlZEJ5OiBudWxsXG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9pbml0aWFsU3RhdGUuanNcbiAqKi8iLCJpbXBvcnQge1NFVF9NRVNTQUdFLCBVTlNFVF9NRVNTQUdFfSBmcm9tICcuL2ZsYXNoQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IGZsYXNoID0gKFxuICBzdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5mbGFzaCksXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NRVNTQUdFOlxuICAgICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVvdXRJZClcblxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHtcbiAgICAgICAgbWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlVHlwZSxcbiAgICAgICAgdGltZW91dElkOiBhY3Rpb24udGltZW91dElkXG4gICAgICB9KVxuICAgIGNhc2UgVU5TRVRfTUVTU0FHRTpcbiAgICAgIGNsZWFyVGltZW91dChzdGF0ZS50aW1lb3V0SWQpXG5cbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUuZmxhc2gpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZsYXNoXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvZmxhc2hSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1FVRVNUSU9OUywgUkVDRUlWRV9RVUVTVElPTlMsXG4gIFJFUVVFU1RfUVVFU1RJT05fVVBEQVRFLCBSRUNFSVZFX1FVRVNUSU9OX1VQREFURSxcbiAgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT04sIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OLCBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OfSBmcm9tICcuL3F1ZXN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBxdWVzdGlvbiA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUucXVlc3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9RVUVTVElPTl9VUERBVEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLnVwZGF0ZWRRdWVzdGlvbixcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9RVUVTVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcXVlc3Rpb25zID0gKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZS5xdWVzdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfUVVFU1RJT05TOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1FVRVNUSU9OUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHF1ZXN0aW9uKHVuZGVmaW5lZCwge1xuICAgICAgICAgIHR5cGU6IGFjdGlvbi50eXBlLFxuICAgICAgICAgIGl0ZW06IGlcbiAgICAgICAgfSkpXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX1FVRVNUSU9OX1VQREFURTpcbiAgICBjYXNlIFJFQ0VJVkVfUVVFU1RJT05fVVBEQVRFOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfUVVFU1RJT046XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoaSA9PiBxdWVzdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1FVRVNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWVzdGlvbnNcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9xdWVzdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0FSVElDTEVTLCBSRUNFSVZFX0FSVElDTEVTLFxuICBSRVFVRVNUX1VQREFURV9BUlRJQ0xFLCBDT05GSVJNX1VQREFURV9BUlRJQ0xFLCBSRUpFQ1RfVVBEQVRFX0FSVElDTEUsXG4gIFJFUVVFU1RfQ1JFQVRFX0FSVElDTEUsIENPTkZJUk1fQ1JFQVRFX0FSVElDTEUsIFJFSkVDVF9DUkVBVEVfQVJUSUNMRSxcbiAgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRSwgQ09ORklSTV9ERUxFVEVfQVJUSUNMRSwgUkVKRUNUX0RFTEVURV9BUlRJQ0xFfSBmcm9tICcuL2FydGljbGVBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3QgYXJ0aWNsZXMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLmFydGljbGVzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0FSVElDTEVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IGFydGljbGUodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9BUlRJQ0xFOlxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfQVJUSUNMRTpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX0FSVElDTEU6XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IGFydGljbGUoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9BUlRJQ0xFOlxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld0FydGljbGU6IG5ld0FydGljbGUoc3RhdGUubmV3QXJ0aWNsZSwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3QXJ0aWNsZTogbmV3QXJ0aWNsZShzdGF0ZS5uZXdBcnRpY2xlLCBhY3Rpb24pLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIGFydGljbGUobnVsbCwgYWN0aW9uKSxcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtc1xuICAgICAgICBdXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKGkgPT4gaS5kYXRhLl9pZCAhPT0gYWN0aW9uLmlkKVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYXJ0aWNsZSA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuYXJ0aWNsZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVDRUlWRV9BUlRJQ0xFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX0FSVElDTEU6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgZGF0YTogYWN0aW9uLml0ZW0sXG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgZXJyb3JzOiB7fVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfVVBEQVRFX0FSVElDTEU6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfQVJUSUNMRTpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgUkVKRUNUX0RFTEVURV9BUlRJQ0xFOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBuZXdBcnRpY2xlID0gKFxuICBzdGF0ZSxcbiAgYWN0aW9uXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgUkVRVUVTVF9DUkVBVEVfQVJUSUNMRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcnM6IGFjdGlvbi5lcnJvcnNcbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9BUlRJQ0xFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIGluaXRpYWxTdGF0ZS5hcnRpY2xlcy5uZXdBcnRpY2xlKVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnRpY2xlc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL2FydGljbGVSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX1VTRVJTLCBSRUNFSVZFX1VTRVJTLFxuICBSRVFVRVNUX1VQREFURV9VU0VSLCBDT05GSVJNX1VQREFURV9VU0VSLCBSRUpFQ1RfVVBEQVRFX1VTRVIsXG4gIFJFUVVFU1RfQ1JFQVRFX1VTRVIsIENPTkZJUk1fQ1JFQVRFX1VTRVIsIFJFSkVDVF9DUkVBVEVfVVNFUixcbiAgUkVRVUVTVF9ERUxFVEVfVVNFUiwgQ09ORklSTV9ERUxFVEVfVVNFUiwgUkVKRUNUX0RFTEVURV9VU0VSfSBmcm9tICcuL3VzZXJzQWN0aW9ucydcbmltcG9ydCBpbml0aWFsU3RhdGUgZnJvbSAnLi9pbml0aWFsU3RhdGUnXG5cbmNvbnN0IHVzZXIgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXIsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfVVNFUlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgfVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGRhdGE6IGFjdGlvbi51cGRhdGVkSXRlbSxcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRVFVRVNUX0RFTEVURV9VU0VSOlxuICAgICAgaWYgKHN0YXRlLmRhdGEuX2lkID09PSBhY3Rpb24uaWQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgICAgaXNVcGRhdGluZzogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1VTRVI6XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1VzZXIgPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgdXNlcnMgPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnVzZXJzLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX1VTRVJTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX1VTRVJTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLm1hcChpID0+IHVzZXIodW5kZWZpbmVkLCB7XG4gICAgICAgICAgdHlwZTogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgaXRlbTogaVxuICAgICAgICB9KSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9VU0VSOlxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfVVNFUjpcbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfVVNFUjpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1VTRVI6XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLm1hcChpID0+IHVzZXIoaSwgYWN0aW9uKSlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9VU0VSOlxuICAgIGNhc2UgUkVKRUNUX0NSRUFURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG5ld1VzZXI6IG5ld1VzZXIoc3RhdGUubmV3VXNlciwgYWN0aW9uKVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1VTRVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3VXNlcjogaW5pdGlhbFN0YXRlLnVzZXJzLm5ld1VzZXIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgdXNlcihudWxsLCBhY3Rpb24pLFxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zXG4gICAgICAgIF1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0RFTEVURV9VU0VSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5maWx0ZXIoaSA9PiBpLmRhdGEuX2lkICE9PSBhY3Rpb24uaWQpXG4gICAgICB9KVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2Vyc1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogc3JjL3N0b3JlL3VzZXJzUmVkdWNlci5qc1xuICoqLyIsImltcG9ydCB7UkVRVUVTVF9TRUNUSU9OUywgUkVDRUlWRV9TRUNUSU9OUyxcbiAgUkVRVUVTVF9VUERBVEVfU0VDVElPTiwgQ09ORklSTV9VUERBVEVfU0VDVElPTiwgUkVKRUNUX1VQREFURV9TRUNUSU9OLFxuICBSRVFVRVNUX0NSRUFURV9TRUNUSU9OLCBDT05GSVJNX0NSRUFURV9TRUNUSU9OLCBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT04sXG4gIFJFUVVFU1RfREVMRVRFX1NFQ1RJT04sIENPTkZJUk1fREVMRVRFX1NFQ1RJT04sIFJFSkVDVF9ERUxFVEVfU0VDVElPTn0gZnJvbSAnLi9zZWN0aW9uc0FjdGlvbnMnXG5pbXBvcnQgaW5pdGlhbFN0YXRlIGZyb20gJy4vaW5pdGlhbFN0YXRlJ1xuXG5jb25zdCBzZWN0aW9ucyA9IChcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUuc2VjdGlvbnMsXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFUVVFU1RfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogdHJ1ZVxuICAgICAgfSlcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMubWFwKGkgPT4gc2VjdGlvbih1bmRlZmluZWQsIHtcbiAgICAgICAgICB0eXBlOiBhY3Rpb24udHlwZSxcbiAgICAgICAgICBpdGVtOiBpXG4gICAgICAgIH0pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfVVBEQVRFX1NFQ1RJT046XG4gICAgY2FzZSBDT05GSVJNX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVKRUNUX1VQREFURV9TRUNUSU9OOlxuICAgIGNhc2UgUkVRVUVTVF9ERUxFVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFSkVDVF9ERUxFVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGkgPT4gc2VjdGlvbihpLCBhY3Rpb24pKVxuICAgICAgfSlcbiAgICBjYXNlIFJFUVVFU1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbmV3U2VjdGlvbjogbmV3U2VjdGlvbihzdGF0ZS5uZXdTZWN0aW9uLCBhY3Rpb24pXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9DUkVBVEVfU0VDVElPTjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBuZXdTZWN0aW9uOiBuZXdTZWN0aW9uKHN0YXRlLm5ld1NlY3Rpb24sIGFjdGlvbiksXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXMsXG4gICAgICAgICAgc2VjdGlvbih1bmRlZmluZWQsIGFjdGlvbilcbiAgICAgICAgXVxuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fREVMRVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcihpID0+IGkuZGF0YS5faWQgIT09IGFjdGlvbi5pZClcbiAgICAgIH0pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHNlY3Rpb24gPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlY3Rpb24sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFJFQ0VJVkVfU0VDVElPTlM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGF0YTogYWN0aW9uLml0ZW1cbiAgICAgIH0pXG4gICAgY2FzZSBDT05GSVJNX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRhdGE6IGFjdGlvbi5pdGVtXG4gICAgICB9KVxuICAgIGNhc2UgUkVRVUVTVF9VUERBVEVfU0VDVElPTjpcbiAgICBjYXNlIFJFUVVFU1RfREVMRVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIENPTkZJUk1fVVBEQVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBkYXRhOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICBlcnJvcnM6IHt9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RhdGVcbiAgICAgIH1cbiAgICBjYXNlIFJFSkVDVF9VUERBVEVfU0VDVElPTjpcbiAgICAgIGlmIChzdGF0ZS5kYXRhLl9pZCA9PT0gYWN0aW9uLmlkKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIGlzVXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgY2FzZSBSRUpFQ1RfREVMRVRFX1NFQ1RJT046XG4gICAgICBpZiAoc3RhdGUuZGF0YS5faWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgICBpc1VwZGF0aW5nOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IG5ld1NlY3Rpb24gPSAoXG4gIHN0YXRlLFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0NSRUFURV9TRUNUSU9OOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzVXBkYXRpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUpFQ1RfQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGVycm9yczogYWN0aW9uLmVycm9yc1xuICAgICAgfSlcbiAgICBjYXNlIENPTkZJUk1fQ1JFQVRFX1NFQ1RJT046XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgaW5pdGlhbFN0YXRlLnNlY3Rpb25zLm5ld1NlY3Rpb24pXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHNlY3Rpb25zXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvc3RvcmUvc2VjdGlvbnNSZWR1Y2VyLmpzXG4gKiovIiwiaW1wb3J0IHtSRVFVRVNUX0lOREVYLCBSRUNFSVZFX0lOREVYLFxuICBSRVFVRVNUX1VQREFURV9JTkRFWCwgQ09ORklSTV9VUERBVEVfSU5ERVh9IGZyb20gJy4vc2VhcmNoSW5kZXhBY3Rpb25zJ1xuaW1wb3J0IGluaXRpYWxTdGF0ZSBmcm9tICcuL2luaXRpYWxTdGF0ZSdcblxuY29uc3Qgc2VhcmNoSW5kZXggPSAoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLnNlYXJjaEluZGV4LFxuICBhY3Rpb25cbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBSRVFVRVNUX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IHRydWVcbiAgICAgIH0pXG4gICAgY2FzZSBSRUNFSVZFX0lOREVYOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0VXBkYXRlZE9uOiBhY3Rpb24ubGFzdFVwZGF0ZWRPbixcbiAgICAgICAgbGFzdFVwZGF0ZWRCeTogYWN0aW9uLmxhc3RVcGRhdGVkQnlcbiAgICAgIH0pXG4gICAgY2FzZSBSRVFVRVNUX1VQREFURV9JTkRFWDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBpc1VwZGF0aW5nOiB0cnVlXG4gICAgICB9KVxuICAgIGNhc2UgQ09ORklSTV9VUERBVEVfSU5ERVg6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgaXNVcGRhdGluZzogZmFsc2UsXG4gICAgICAgIGxhc3RVcGRhdGVkT246IGFjdGlvbi5sYXN0VXBkYXRlZE9uLFxuICAgICAgICBsYXN0VXBkYXRlZEJ5OiBhY3Rpb24ubGFzdFVwZGF0ZWRCeVxuICAgICAgfSlcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgc2VhcmNoSW5kZXhcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9zdG9yZS9zZWFyY2hJbmRleFJlZHVjZXIuanNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFFQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFNQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFDQTs7Ozs7QUFuQkE7QUFDQTtBQVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQUNBO0FBaUNBO0FBQ0E7QUFiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBVUE7QUF0QkE7QUFEQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQWxCQTtBQURBO0FBdUJBO0FBQ0E7Ozs7QUF0Q0E7QUFDQTtBQXdDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFBQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdMQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBTkE7QUFXQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBTkE7QUFVQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUZBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFBQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQUNBO0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFEQTtBQWlCQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7OztBQzFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU9BO0FBQ0E7Ozs7Ozs7O0FDNUJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFkQTtBQWlCQTs7OztBQXRDQTtBQUNBO0FBd0NBOzs7Ozs7O0FDN0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFYQTtBQWNBOzs7O0FBekJBO0FBQ0E7QUEyQkE7Ozs7Ozs7QUNoQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBeENBO0FBREE7QUFnREE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbkRBO0FBSEE7QUEwREE7Ozs7QUFyR0E7QUFDQTtBQXVHQTs7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7Ozs7O0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDckNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7QUFGQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7Ozs7O0FBRkE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBOzs7Ozs7O0FDbERBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7O0FDaENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQUhBO0FBTkE7QUFxQkE7Ozs7QUFwQ0E7QUFDQTtBQXNDQTs7Ozs7OztBQzNDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUhBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFBQTtBQUFBO0FBRkE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQVFBO0FBQUE7QUFBQTtBQUxBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQ3ZGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBSkE7QUFXQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFyQkE7QUE0QkE7QUFDQTs7OztBQXJEQTtBQUNBO0FBdURBOzs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7O0FDekJBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7O0FDREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUpBO0FBS0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBWkE7QUFrQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFQQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUxBO0FBSEE7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCQTtBQW9CQTtBQXRCQTtBQXlCQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUEzQkE7QUFzQ0E7Ozs7QUFwR0E7QUFDQTtBQXNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTs7Ozs7OztBQ3RJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUkE7QUFEQTtBQWlCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUF0QkE7QUEyQkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXRDQTtBQURBO0FBMkNBO0FBQ0E7Ozs7QUEzREE7QUFDQTtBQTZEQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFBQTtBQUNBO0FBakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1UkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQURBO0FBTEE7QUFEQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQVhBO0FBbUJBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUF0Q0E7QUEyQ0E7QUFDQTs7OztBQWpFQTtBQUNBO0FBbUVBOzs7Ozs7O0FDN0VBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFSQTtBQWVBO0FBQ0E7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTs7O0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUFMQTtBQVlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFuQ0E7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBdkNBO0FBa0RBOzs7O0FBNUtBO0FBQ0E7QUE4S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7QUMzTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFOQTtBQWdCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFuQ0E7QUFzQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFEQTtBQXZDQTtBQXlEQTs7OztBQTVHQTtBQUNBO0FBOEdBO0FBRUE7QUFDQTtBQURBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7QUN0SUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqVEE7QUFDQTtBQUFBO0FBQ0E7QUFnQkE7QUFDQTtBQUFBO0FBQ0E7QUFqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBUEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxU0E7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTEE7QUFXQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFMQTtBQVRBO0FBc0JBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBREE7QUFVQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBVkE7QUFEQTtBQWNBO0FBdENBO0FBQ0E7QUFEQTtBQXVDQTtBQUNBO0FBM0VBO0FBREE7QUFEQTtBQUxBO0FBQ0E7QUFEQTtBQXNGQTtBQUNBOzs7O0FBdklBO0FBQ0E7QUF5SUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTs7Ozs7Ozs7Ozs7OztBQ3ZMQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBREE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUFGQTtBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTs7Ozs7Ozs7QUN6QkE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDMUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDQTtBQUNBO0FBbUNBO0FBR0E7QUFDQTs7Ozs7Ozs7QUNqREE7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQUxBO0FBV0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7OztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQTtBQXRDQTtBQXlDQTs7OztBQWxGQTtBQUNBO0FBb0ZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBS0E7QUFDQTs7Ozs7Ozs7QUNmQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFQQTtBQU5BO0FBZUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBckJBO0FBd0JBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQVJBO0FBREE7QUEzQkE7QUE2Q0E7Ozs7QUFoSUE7QUFDQTtBQWtJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7O0FDM0pBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQzVDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQVJBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFiQTtBQWdCQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFEQTtBQW5CQTtBQWdDQTs7OztBQXBJQTtBQUNBO0FBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcktBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBWEE7QUFmQTtBQTRCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBT0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFVQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTkE7QUFZQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBOURBO0FBb0VBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFEQTtBQVJBO0FBREE7QUF2RUE7QUF5RkE7Ozs7QUExS0E7QUFDQTtBQTRLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk1BO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFZQTtBQUNBOzs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFwQ0E7QUF1Q0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBWkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFMQTtBQVdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQURBO0FBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQVRBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBREE7QUFwQkE7QUFpQ0E7Ozs7QUE1TUE7QUFDQTtBQThNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7QUMzT0E7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBSEE7QUFJQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFMQTtBQUxBO0FBZUE7QUFDQTs7OztBQTFDQTtBQUNBO0FBNENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1R0E7QUFDQTs7Ozs7OztBQ0RBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7O0FBekNBO0FBQ0E7QUEyQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFIQTtBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFQQTtBQWFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFWQTtBQURBO0FBdUJBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBREE7QUE1QkE7QUFEQTtBQXFDQTs7OztBQWhHQTtBQUNBO0FBa0dBO0FBRUE7QUFDQTtBQURBO0FBR0E7Ozs7Ozs7Ozs7Ozs7QUMvR0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTEE7QUFVQTtBQVhBO0FBY0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSEE7QUFEQTtBQVVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQURBO0FBWEE7QUFEQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BOzs7Ozs7O0FDckRBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQURBO0FBTUE7QUFUQTtBQURBO0FBY0E7QUFDQTs7Ozs7Ozs7QUMzQ0E7QUFDQTs7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWhCQTtBQWtCQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQTVEQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWdCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFFQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXpCQTtBQTJCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7O0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBRkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQXZDQTtBQXlDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyREE7QUF1REE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWJBO0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBR0E7QUFDQTs7Ozs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckRBO0FBdURBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUNBO0FBR0E7QUFDQTs7Ozs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUZBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUF2Q0E7QUF5Q0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQWdEQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQXRCQTtBQXdCQTtBQUNBOzs7OzsiLCJzb3VyY2VSb290IjoiIn0=