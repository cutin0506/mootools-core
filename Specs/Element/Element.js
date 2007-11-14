/*
Script: Element.js
	Specs for Element.js

License:
	MIT-style license.
*/

var Local = {};

describe('Element constructor', {

	"should return an 'element' Element": function(){
		var type = $type(new Element('div'));
		value_of(type).should_be('element');
	},

	'should return an Element with the correct tag': function(){
		var myElement = new Element('div');
		value_of(myElement.tagName.toLowerCase()).should_be('div');
	},

	'should return an Element with for attribute': function(){
		var label = new Element('label', { 'for': 'myId' });
		value_of(label.htmlFor).should_be('myId');
	},

	'should return an Element with all class attributes': function(){
		var div1 = new Element('div', { 'class': 'myClass' });
		value_of(div1.className).should_be('myClass');

		var div2 = new Element('div', { 'class': 'myClass myOtherClass' });
		value_of(div2.className).should_be('myClass myOtherClass');
	},

	'should return an Element with various attributes': function(){
		var element1 = new Element('div', { 'id': 'myDiv', 'title': 'myDiv' });
		value_of(element1.id).should_be('myDiv');
		value_of(element1.title).should_be('myDiv');
	},

	'should return Element inputs with and type attributes': function(){
		var username = new Element('input', { type: 'text', name: 'username', value: 'username' });
		value_of(username.type).should_be('text');
		value_of(username.name).should_be('username');
		value_of(username.value).should_be('username');

		var password = new Element('input', { type: 'password', name: 'password', value: 'password' });
		value_of(password.type).should_be('password');
		value_of(password.name).should_be('password');
		value_of(password.value).should_be('password');
	}

});

describe('IFrame constructor', {

	'should return a new iframe': function(){

	},

	'should return the same iframe if passed': function(){

	},

	'should call onload once the iframe loads': function(){

	},

	"should extend the iframe's window and document with the same domain": function(){

	}

});

describe('Elements constructor', {

	'before all': function(){
		Local = {};
		Local.myElements = new Elements(['div', document.createElement('a')]);
	},

	'should return an array type': function(){
		value_of(Array.type(Local.myElements)).should_be_true();
	},

	'should return an array of Elements': function(){
		value_of(Local.myElements).should_have(2, 'items');
		value_of($type(Local.myElements[1])).should_be('element');
	},

	'should apply Element prototypes to the returned array': function(){
		value_of($defined(Local.myElements.addEvent)).should_be_true();
	}

});

describe('$', {
	'before all': function(){
		Local = {};
		Local.container = document.createElement('div');
		document.body.appendChild(Local.container);
	},

	'before each': function(){
		Local.container.innerHTML = '<div id="dollar-test"></div>';;
	},

	return_the_element_for_elements: function(){
		var type = $type(Local.container);
		value_of(type).should_be('element');
	},

	'should return the element by the string id': function(){
		var dt = document.getElementById('dollar-test');
		value_of($('dollar-test')).should_be(dt);
	},

	'should return an extended element': function(){
		var defined = $defined($('dollar-test').clone);
		value_of(defined).should_be_true();
	},

	'should return the window element if passed': function(){
		value_of($(window)).should_be(window);
	},

	'should return the document element if passed': function(){
		value_of($(document)).should_be(document);
	},

	'should return null if string not found or type mismatch': function(){
		value_of($(1)).should_be_null();
		value_of($('nonexistant')).should_be_null();
	}

});

describe('$$', {

	'should return all Elements of a specific tag': function(){

	},

	'should return multiple Elements for each specific tag': function(){

	},

	'should return an empty array if not is found': function(){
		value_of($$('not_found')).should_be([]);
	}

});

describe('Element Methods', {

	'before all': function(){
		Local = {};
	},

	'before each': function(){
		Local.element = new Element('div');
		Local.element.addClass('class1');
	},

	'should `getElement` that matches the tag, otherwise null': function(){

	},

	'should `getElements` that match the tag, otherwise null': function(){

	},

	'should `getElementById` that matches the id, otherwise null': function(){

	},

	"should `set` an Element's property according to the value": function(){

	},

	"should `set` an Element's styles": function(){

	},

	"should `set` an Element's events": function(){

	},

	"should `set` an Element's properties": function(){

	},

	'`set` should return the same Element': function(){
		var anElement = Local.element.set('opacity', 1);
		value_of(anElement === Local.element).should_be_true();
	},

	"should `get` an Element's property, otherwise returns an empty string": function(){

	},

	'should return true if the Element `has` the property, otherwise false': function(){

	},

	'should `inject` the Element inside an Element': function(){

	},

	'should `inject` the Element inside an Element at the top': function(){

	},

	'should `inject` the Element inside an Element at the bottom': function(){

	},

	'should `inject` the Element before an Element': function(){

	},

	'should `inject` the Element after an Element': function(){

	},

	'should `adopt` an Element by its id': function(){

	},

	'should `adopt` an Element': function(){

	},

	'should `adopt` any number of Elements or ids': function(){

	},

	'should `dispose` the Element from the DOM': function(){

	},

	'should `remove` the Element from the DOM': function(){

	},

	'should `clone` the Element and return the clone': function(){

	},

	'should `clone` the Element and remove all IDs': function(){

	},

	'should `clone` the Element and remove all custom attributes': function(){

	},

	'should `replaceWith` an Element with the Element': function(){

	},

	'should `appendText` to the Element': function(){

	},

	'should return true if an Element `hasClass`, otherwise false': function(){
		value_of(Local.element.hasClass('class1')).should_be_true();
		value_of(Local.element.hasClass('not found')).should_be_false();
	},

	'should `removeClass` from an Element': function(){
		Local.element.removeClass('class1');
		value_of(Local.element.hasClass('class1')).should_be_false();
	},

	'should `removeClass` from an Element but leave the other classes': function(){
		Local.element.addClass('class2');
		Local.element.removeClass('class1');
		value_of(Local.element.hasClass('class2')).should_be_true();
	},

	'should not `removeClass` if a class is not found': function(){
		Local.element.removeClass('not found');
		value_of(Local.element.className).should_be('class1');
	},

	'should `addClass` to an Element': function(){
		value_of(Local.element.className).should_be('class1');
	},

	'should append another class to an Element that has already `addClass`': function(){
		Local.element.addClass('class2');
		value_of(Local.element.className).should_be('class1 class2');
	},

	'should `toggleClass` add class if the Element does not have the class': function(){

	},

	'should `toggleClass` remove class if the Element does have the class': function(){

	},

	'should `getPrevious` Element relative to an Element, otherwise false': function(){

	},

	'should `getNext` Element relative to an Element, otherwise false': function(){

	},

	'should `getFirst` Element inside the Element, otherwise false': function(){

	},

	'should `getLast` Element inside the Element, otherwise false': function(){

	},

	'should `getParent` of the Element, otherwise false': function(){

	},

	'should `getChildren` of the Element': function(){

	},

	'should return true if the Element `hasChild` Element, otherwise false': function(){

	},

	'should `getProperty` from an Element': function(){
		var anchor1 = new Element('a');
		anchor1.href = 'http://mootools.net';
		value_of(anchor1.getProperty('href')).should_be('http://mootools.net');

		var anchor2 = new Element('a');
		anchor2.href = '#someLink';
		value_of(anchor2.getProperty('href')).should_be('#someLink');
	},

	'should `getProperty` type of an input Element': function(){
		var input1 = new Element('input');
		input1.type = 'text';
		value_of(input1.getProperty('type')).should_be('text');

		var input2 = new Element('input');
		input2.type = 'checkbox';
		value_of(input2.getProperty('type')).should_be('checkbox');
	},

	'should `getPropety` checked from an input Element': function(){
		var checked1 = new Element('input', { type: 'checkbox' });
		checked1.checked = 'checked';
		value_of(checked1.getProperty('checked')).should_be_true();

		var checked2 = new Element('input', { type: 'checkbox' });
		checked2.checked = true;
		value_of(checked2.getProperty('checked')).should_be_true();

		var checked3 = new Element('input', { type: 'checkbox' });
		checked3.checked = false;
		value_of(checked3.getProperty('checked')).should_be_false();
	},

	'should `getProperty` disabled from an input Element': function(){
		var disabled1 = new Element('input', { type: 'text' });
		disabled1.disabled = 'disabled';
		value_of(disabled1.getProperty('disabled')).should_be_true();

		var disabled2 = new Element('input', { type: 'text' });
		disabled2.disabled = true;
		value_of(disabled2.getProperty('disabled')).should_be_true();

		var disabled3 = new Element('input', { type: 'text' });
		disabled3.disabled = false;
		value_of(disabled3.getProperty('disabled')).should_be_false();
	},

	'should `getProperty` readonly from an input Element': function(){
		var readonly1 = new Element('input', { type: 'text' });
		readonly1.readOnly = 'readonly';
		value_of(readonly1.getProperty('readonly')).should_be_true();

		var readonly2 = new Element('input', { type: 'text' });
		readonly2.readOnly = true;
		value_of(readonly2.getProperty('readonly')).should_be_true();

		var readonly3 = new Element('input', { type: 'text' });
		readonly3.readOnly = false;
		value_of(readonly3.getProperty('readonly')).should_be_false();
	},

	'should `removeProperty` from an Element': function () {

	},

	'should `removeProperty` disabled of an input Element': function(){

	},

	'should `removeProperty` readonly of an input Element': function(){

	},

	'should `setProperty` from an Element': function(){
		var anchor1 = new Element('a').setProperty('href', 'http://mootools.net');
		value_of(anchor1.getProperty('href')).should_be('http://mootools.net');

		var anchor2 = new Element('a').setProperty('href', '#someLink');
		value_of(anchor2.getProperty('href')).should_be('#someLink');
	},

	'should `setProperty` type of an input Element': function(){
		var input1 = new Element('input').setProperty('type', 'text');
		value_of(input1.getProperty('type')).should_be('text');

		var input2 = new Element('input').setProperty('type', 'checkbox');
		value_of(input2.getProperty('type')).should_be('checkbox');
	},

	'should `setProperty` checked from an input Element': function(){
		var checked1 = new Element('input', { type: 'checkbox' }).setProperty('checked', 'checked');
		value_of(checked1.getProperty('checked')).should_be_true();

		var checked2 = new Element('input', { type: 'checkbox' }).setProperty('checked', true);
		value_of(checked2.getProperty('checked')).should_be_true();

		var checked3 = new Element('input', { type: 'checkbox' }).setProperty('checked', false);
		value_of(checked3.getProperty('checked')).should_be_false();
	},

	'should `setProperty` disabled of an input Element': function(){
		var disabled1 = new Element('input', { type: 'text' }).setProperty('disabled', 'disabled');
		value_of(disabled1.getProperty('disabled')).should_be_true();

		var disabled2 = new Element('input', { type: 'text' }).setProperty('disabled', true);
		value_of(disabled2.getProperty('disabled')).should_be_true();

		var disabled3 = new Element('input', { type: 'text' }).setProperty('disabled', false);
		value_of(disabled3.getProperty('disabled')).should_be_false();
	},

	'should `setProperty` readonly of an input Element': function(){
		var readonly1 = new Element('input', { type: 'text' }).setProperty('readonly', 'readonly');
		value_of(readonly1.getProperty('readonly')).should_be_true();

		var readonly2 = new Element('input', { type: 'text' }).setProperty('readonly', true);
		value_of(readonly2.getProperty('readonly')).should_be_true();

		var readonly3 = new Element('input', { type: 'text' }).setProperty('readonly', false);
		value_of(readonly3.getProperty('readonly')).should_be_false();
	},

	'should `getProperties` of an Element': function(){

	},

	'should `setProperties` of an Element': function(){

	},

	'should `setHTML` of an Element': function(){

	},

	'should `setText` of an Element': function(){

	},

	'should `setText` of a Script Element': function(){

	},

	'should `setText` of a Style Element': function(){

	},

	'should `getText` of an Element': function(){

	},

	'should `getText` of a Script Element': function(){

	},

	'should `getText` of a Style Element': function(){

	},

	'should `getTag` of an Element': function(){

	},

	'should `empty` an Element of all its children': function(){

	},

	'should `destroy` the Element and return null': function(){

	}

});