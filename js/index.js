var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function addRecipeDialogListener() {
	var addRecipeDialog = document.querySelector("#dialog-add-recipe");
	var showDialogAddRecipeButton = document.querySelector("#show-dialog-add-recipe");

	if (!addRecipeDialog.showModal) {
		dialogPolyfill.registerDialog(addRecipeDialog);
	}

	showDialogAddRecipeButton.addEventListener("click", function () {
		addRecipeDialog.showModal();
	});

	addRecipeDialog.querySelector("#add-recipe").addEventListener("click", function () {
		addRecipeDialog.close();
	});
}

function editRecipeDialogListeners() {
	var editRecipeDialog = document.querySelector(".dialog-edit-recipe");
	if (editRecipeDialog) {
		if (!editRecipeDialog.showModal) {
			dialogPolyfill.registerDialog(editRecipeDialog);
		}
		editRecipeDialog.querySelector("#edit-recipe").addEventListener("click", function () {
			editRecipeDialog.close();
		});
	}
}

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App() {
		_classCallCheck(this, App);

		return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));
	}

	_createClass(App, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "app" },
				React.createElement(RecipeHolder, { recipes: this.props.recipes }),
				React.createElement(AddRecipeDialogShow, null),
				React.createElement(AddRecipeDialog, null)
			);
		}
	}]);

	return App;
}(React.Component);

var AddRecipeDialogShow = function (_React$Component2) {
	_inherits(AddRecipeDialogShow, _React$Component2);

	function AddRecipeDialogShow() {
		_classCallCheck(this, AddRecipeDialogShow);

		return _possibleConstructorReturn(this, (AddRecipeDialogShow.__proto__ || Object.getPrototypeOf(AddRecipeDialogShow)).apply(this, arguments));
	}

	_createClass(AddRecipeDialogShow, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ className: "mdl-button mdl-js-button mdl-button--raised mdl-color--green-300 mdl-color-text--white mdl-js-ripple-effect", id: "show-dialog-add-recipe" },
				"ADD RECIPE"
			);
		}
	}]);

	return AddRecipeDialogShow;
}(React.Component);

//buttons

var RemoveRecipe = function (_React$Component3) {
	_inherits(RemoveRecipe, _React$Component3);

	function RemoveRecipe() {
		_classCallCheck(this, RemoveRecipe);

		return _possibleConstructorReturn(this, (RemoveRecipe.__proto__ || Object.getPrototypeOf(RemoveRecipe)).call(this));
	}

	_createClass(RemoveRecipe, [{
		key: "handleClick",
		value: function handleClick() {
			console.log(this.props);
			store.dispatch({ type: "REMOVE",
				id: this.props.id });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.handleClick.bind(this), className: "mdl-button mdl-js-button mdl-button--raised mdl-color--red mdl-color-text--white mdl-js-ripple-effect recipe-btn-delete" },
				"DELETE"
			);
		}
	}]);

	return RemoveRecipe;
}(React.Component);

var AddRecipe = function (_React$Component4) {
	_inherits(AddRecipe, _React$Component4);

	function AddRecipe() {
		_classCallCheck(this, AddRecipe);

		return _possibleConstructorReturn(this, (AddRecipe.__proto__ || Object.getPrototypeOf(AddRecipe)).apply(this, arguments));
	}

	_createClass(AddRecipe, [{
		key: "handleClick",
		value: function handleClick() {
			function parseInput(input) {
				return input.split(",").map(function (index) {
					return index.trim();
				});
			}
			var name = document.getElementById("recipeName").value;
			var ingredients = document.getElementById("recipeIngredients").value;
			if (name && ingredients) {
				store.dispatch({ type: "ADD",
					name: name,
					id: uuid.v4(),
					ingredients: parseInput(ingredients) });
			}
			document.getElementById("recipeName").value = "";
			document.getElementById("recipeIngredients").value = "";
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"button",
				{ onClick: this.handleClick.bind(this), type: "button", className: "mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-color--green-300 mdl-color-text--white", id: "add-recipe" },
				"ADD RECIPE"
			);
		}
	}]);

	return AddRecipe;
}(React.Component);

var AddRecipeDialog = function (_React$Component5) {
	_inherits(AddRecipeDialog, _React$Component5);

	function AddRecipeDialog() {
		_classCallCheck(this, AddRecipeDialog);

		return _possibleConstructorReturn(this, (AddRecipeDialog.__proto__ || Object.getPrototypeOf(AddRecipeDialog)).apply(this, arguments));
	}

	_createClass(AddRecipeDialog, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "dialogs" },
				React.createElement(
					"dialog",
					{ className: "mdl-dialog", id: "dialog-add-recipe" },
					React.createElement(
						"h4",
						{ className: "mdl-dialog__title" },
						"Recipe"
					),
					React.createElement(
						"div",
						{ className: "mdl-dialog__content" },
						React.createElement(
							"form",
							{ action: "#", id: "form-name" },
							React.createElement(
								"div",
								{ className: "mdl-textfield mdl-js-textfield" },
								React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "recipeName" }),
								React.createElement(
									"label",
									{ className: "mdl-textfield__label", "for": "recipe-name" },
									"Name"
								)
							)
						),
						React.createElement(
							"form",
							{ action: "#", id: "form-ingredients" },
							React.createElement(
								"div",
								{ className: "mdl-textfield mdl-js-textfield" },
								React.createElement("input", { className: "mdl-textfield__input", type: "text", id: "recipeIngredients" }),
								React.createElement(
									"label",
									{ className: "mdl-textfield__label", "for": "recipeIngredients" },
									"Separate with commas"
								)
							)
						)
					),
					React.createElement(
						"div",
						{ className: "mdl-dialog__actions" },
						React.createElement(AddRecipe, null)
					)
				)
			);
		}
	}]);

	return AddRecipeDialog;
}(React.Component);

var RecipeHolder = function (_React$Component6) {
	_inherits(RecipeHolder, _React$Component6);

	function RecipeHolder() {
		_classCallCheck(this, RecipeHolder);

		return _possibleConstructorReturn(this, (RecipeHolder.__proto__ || Object.getPrototypeOf(RecipeHolder)).call(this));
	}

	_createClass(RecipeHolder, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "recipes demo-card-wide mdl-card mdl-shadow--2dp" },
				this.props.recipes.map(function (recipe) {
					return React.createElement(Recipe, { name: recipe[1].name, id: recipe[0], ingredients: recipe[1].ingredients });
				})
			);
		}
	}]);

	return RecipeHolder;
}(React.Component);

var Recipe = function (_React$Component7) {
	_inherits(Recipe, _React$Component7);

	function Recipe() {
		_classCallCheck(this, Recipe);

		return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this));
	}

	_createClass(Recipe, [{
		key: "render",
		value: function render() {
			var id = this.props.id;
			return React.createElement(
				"div",
				{ className: "recipe", tabindex: "0" },
				React.createElement(
					"div",
					{ className: "recipe-header" },
					React.createElement(
						"div",
						{ className: "recipe-header-name" },
						React.createElement(
							"a",
							{ href: "#" },
							this.props.name
						)
					)
				),
				React.createElement("div", { className: "recipe-hr" }),
				React.createElement(
					"div",
					{ className: "recipe-ingredient-wrapper" },
					React.createElement(
						"div",
						{ className: "recipe-ingredient-header" },
						React.createElement(
							"div",
							{ className: "recipe-ingredient-header-text" },
							"Ingredients"
						),
						React.createElement("div", { className: "recipe-ingredient-header-hr" })
					),
					React.createElement(
						"ul",
						{ className: "mdl-list ingredient-list" },
						this.props.ingredients.map(function (ingredient, index) {
							return React.createElement(Ingredient, { ingredient: ingredient, id: id, index: index });
						})
					)
				),
				React.createElement(
					"div",
					{ className: "recipe-btn-wrapper" },
					React.createElement(RemoveRecipe, { id: this.props.id })
				)
			);
		}
	}]);

	return Recipe;
}(React.Component);

var Ingredient = function (_React$Component8) {
	_inherits(Ingredient, _React$Component8);

	function Ingredient() {
		_classCallCheck(this, Ingredient);

		return _possibleConstructorReturn(this, (Ingredient.__proto__ || Object.getPrototypeOf(Ingredient)).call(this));
	}

	_createClass(Ingredient, [{
		key: "handleInput",
		value: function handleInput(e) {
			console.log(store.getState());
			store.dispatch({ type: "EDIT",
				id: this.props.id,
				ingredient: e.target.value,
				index: this.props.index });
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement("input", { "class": "ingredient", onChange: this.handleInput.bind(this), contentEditable: "true", placeholder: this.props.ingredient });
		}
	}]);

	return Ingredient;
}(React.Component);

function RecipeApp() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	var action = arguments[1];

	switch (action.type) {
		case "EDIT":
			var stateObj = _extends({}, state);
			stateObj[action.id].ingredients[action.index] = action.ingredient;
			return stateObj;

		case "ADD":
			return _extends({}, state, _defineProperty({}, action.id, {
				name: action.name,
				ingredients: action.ingredients
			}));
		case "REMOVE":
			var newState = _extends({}, state);
			return Object.keys(newState).filter(function (recipe) {
				return recipe != action.id;
			}).reduce(function (obj, key) {
				obj[key] = newState[key];
				return obj;
			}, {});
		default:
			return state;
	}
}
function mapStateToProps(state) {
	return { recipes: Object.entries(state) };
}

function loadState() {
	try {
		var state = localStorage.getItem('state');
		if (state === null) {
			return undefined;
		}
		return JSON.parse(state);
	} catch (err) {
		return undefined;
	}
}

function saveState(store) {
	try {
		var state = JSON.stringify(store);
		localStorage.setItem('state', state);
	} catch (err) {}
}

var localState = loadState();
var _ReactRedux = ReactRedux,
    Provider = _ReactRedux.Provider,
    connect = _ReactRedux.connect;

var store = Redux.createStore(RecipeApp, localState);
var AppContainer = connect(mapStateToProps)(App);
function render() {
	ReactDOM.render(React.createElement(
		Provider,
		{ store: store },
		React.createElement(AppContainer, null)
	), document.getElementById("root"));
}

render();
store.subscribe(function () {
	saveState(store);
});
addRecipeDialogListener();