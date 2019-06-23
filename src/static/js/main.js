(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var body = document.querySelector('body');
var loginForm = document.getElementById('jsLogin');
var NICKNAME = 'nickname';
var LOGGED_OUT = 'loggedOut';
var LOGGED_IN = 'loggedIn';
var nickname = localStorage.getItem(NICKNAME);

if (nickname) {
  body.className = LOGGED_IN;
} else {
  body.className = LOGGED_OUT;
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector('input');
  var value = input.value;
  input.value = '';
  localStorage.setItem(NICKNAME, value);
};

if (loginForm) {
  loginForm.addEventListener('submit', handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYTJkNTE4YjguanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImxvZ2luRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiTklDS05BTUUiLCJMT0dHRURfT1VUIiwiTE9HR0VEX0lOIiwibmlja25hbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFFQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkwsUUFBckIsQ0FBakI7O0FBRUEsSUFBR0csUUFBSCxFQUFhO0FBQ1RSLEVBQUFBLElBQUksQ0FBQ1csU0FBTCxHQUFpQkosU0FBakI7QUFDSCxDQUZELE1BRU87QUFDSFAsRUFBQUEsSUFBSSxDQUFDVyxTQUFMLEdBQWlCTCxVQUFqQjtBQUNIOztBQUVELElBQU1NLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzFCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQSxNQUFNQyxLQUFLLEdBQUdaLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBSDBCLE1BSWxCYyxLQUprQixHQUlSRCxLQUpRLENBSWxCQyxLQUprQjtBQU0xQkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBUCxFQUFBQSxZQUFZLENBQUNRLE9BQWIsQ0FBcUJaLFFBQXJCLEVBQStCVyxLQUEvQjtBQUNILENBUkQ7O0FBVUEsSUFBR2IsU0FBSCxFQUFjO0FBQ1ZBLEVBQUFBLFNBQVMsQ0FBQ2UsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzTG9naW4nKTtcclxuXHJcbmNvbnN0IE5JQ0tOQU1FID0gJ25pY2tuYW1lJztcclxuY29uc3QgTE9HR0VEX09VVCA9ICdsb2dnZWRPdXQnO1xyXG5jb25zdCBMT0dHRURfSU4gPSAnbG9nZ2VkSW4nO1xyXG5cclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5pZihuaWNrbmFtZSkge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbn0gZWxzZSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XHJcblxyXG4gICAgaW5wdXQudmFsdWUgPSAnJztcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLCB2YWx1ZSk7XHJcbn1cclxuXHJcbmlmKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il19
},{}]},{},[1])