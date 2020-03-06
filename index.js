"use strict";
var addClass = function (element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (element) {
        if (check.test(element.className)) {
            return 0;
        }
        else {
            element.className += " " + className;
        }
    }
};
var removeClass = function (element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (element) {
        element.className = element.className.replace(check, " ").trim();
    }
};
var removeAllClass = function (element) {
    element.className = " ";
};
var toggleClass = function (element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
        element.className = element.className.replace(check, " ").trim();
    }
    else {
        element.className += " " + className;
    }
};
var checkClass = function (element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
        return true;
    }
    else {
        return false;
    }
};
var get = function (element) {
    return document.getElementById(element);
};
var gets = function (element) {
    return document.getElementsByClassName(element);
};
console.log("hello");
module.exports = {
    addClass: addClass,
    removeClass: removeClass,
    removeAllClass: removeAllClass,
    toggleClass: toggleClass,
    checkClass: checkClass,
    get: get,
    gets: gets
};
