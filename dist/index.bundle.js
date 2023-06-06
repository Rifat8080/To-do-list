(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["index"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

const list = [
  {
    index: 1,
    description: 'This is a description',
    checked: false,
  },
  {
    index: 2,
    description: 'This is another description',
    checked: true,
  },
];

const sect = document.getElementById('list');
list.forEach((item) => {
  const div = document.createElement('div');
  div.className = 'item';
  const input = document.createElement('input');
  input.classList.add('checkbox');
  input.type = 'checkbox';
  input.checked = item.checked;
  const p = document.createElement('p');
  p.innerText = item.description;
  div.appendChild(input);
  div.appendChild(p);

  const ellipse = document.createElement('i');
  ellipse.className = 'fa-solid fa-ellipsis-vertical';
  ellipse.classList.add('ellipse');
  div.appendChild(ellipse);

  sect.appendChild(div);
});

const clearSect = document.createElement('div');
clearSect.className = 'clearSect';
const clear = document.createElement('button');
clear.innerText = 'Clear all completed';
clear.className = 'clear';
clearSect.appendChild(clear);
sect.appendChild(clearSect);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGxpc3QgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBkZXNjcmlwdGlvbicsXHJcbiAgICBjaGVja2VkOiBmYWxzZSxcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAyLFxyXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGFub3RoZXIgZGVzY3JpcHRpb24nLFxyXG4gICAgY2hlY2tlZDogdHJ1ZSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc2VjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XHJcbmxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc05hbWUgPSAnaXRlbSc7XHJcbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgaW5wdXQuY2hlY2tlZCA9IGl0ZW0uY2hlY2tlZDtcclxuICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIHAuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuXHJcbiAgY29uc3QgZWxsaXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICBlbGxpcHNlLmNsYXNzTmFtZSA9ICdmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbCc7XHJcbiAgZWxsaXBzZS5jbGFzc0xpc3QuYWRkKCdlbGxpcHNlJyk7XHJcbiAgZGl2LmFwcGVuZENoaWxkKGVsbGlwc2UpO1xyXG5cclxuICBzZWN0LmFwcGVuZENoaWxkKGRpdik7XHJcbn0pO1xyXG5cclxuY29uc3QgY2xlYXJTZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNsZWFyU2VjdC5jbGFzc05hbWUgPSAnY2xlYXJTZWN0JztcclxuY29uc3QgY2xlYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuY2xlYXIuaW5uZXJUZXh0ID0gJ0NsZWFyIGFsbCBjb21wbGV0ZWQnO1xyXG5jbGVhci5jbGFzc05hbWUgPSAnY2xlYXInO1xyXG5jbGVhclNlY3QuYXBwZW5kQ2hpbGQoY2xlYXIpO1xyXG5zZWN0LmFwcGVuZENoaWxkKGNsZWFyU2VjdCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9