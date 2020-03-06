export function addClass(element: Element, className: string) {
  let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    if (check.test(element.className)) {
      return 0;
    } else {
      element.className += " " + className;
    }
  }
}

export function removeClass(element: Element, className: string) {
  let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (element) {
    element.className = element.className.replace(check, " ").trim();
  }
}

export function removeAllClass(element: Element) {
  element.className = " ";
}

export function toggleClass(element: Element, className: string) {
  let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (check.test(element.className)) {
    element.className = element.className.replace(check, " ").trim();
  } else {
    element.className += " " + className;
  }
}

export function checkClass(element: Element, className: string) {
  let check = new RegExp("(\\s|^)" + className + "(\\s|$)");
  if (check.test(element.className)) {
    return true;
  } else {
    return false;
  }
}

export function get(id: string) {
  return document.getElementById(id);
}

export function gets(className: string) {
  return document.getElementsByClassName(className);
}

export function height(element: Element) {
  return element.getBoundingClientRect().height;
}

export function width(element: Element) {
  return element.getBoundingClientRect().width;
}

export function screenHeight() {
  return window.innerHeight;
}

export function screenWidth() {
  return window.innerWidth;
}
