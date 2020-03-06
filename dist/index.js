"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (element) {
        if (check.test(element.className)) {
            return 0;
        }
        else {
            element.className += " " + className;
        }
    }
}
exports.addClass = addClass;
function removeClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (element) {
        element.className = element.className.replace(check, " ").trim();
    }
}
exports.removeClass = removeClass;
function removeAllClass(element) {
    element.className = " ";
}
exports.removeAllClass = removeAllClass;
function toggleClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
        element.className = element.className.replace(check, " ").trim();
    }
    else {
        element.className += " " + className;
    }
}
exports.toggleClass = toggleClass;
function checkClass(element, className) {
    var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
    if (check.test(element.className)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkClass = checkClass;
function get(id) {
    return document.getElementById(id);
}
exports.get = get;
function gets(className) {
    return document.getElementsByClassName(className);
}
exports.gets = gets;
function height(element) {
    return element.getBoundingClientRect().height;
}
exports.height = height;
function width(element) {
    return element.getBoundingClientRect().width;
}
exports.width = width;
function screenHeight() {
    return window.innerHeight;
}
exports.screenHeight = screenHeight;
function screenWidth() {
    return window.innerWidth;
}
exports.screenWidth = screenWidth;
