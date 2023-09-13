/*
 * Version   : ver 0.1.2
 * File      : js/index.js
 * Author    : KIM SO YOUNG
 *
 * SUMMARY:
 * 1) LIST EVENT - listInit, listEvent
 */

const _appBody = document.body;
const _listItem = '.list_item';
const _listInfo = '.item_back';
const ACTIVE_CLASS = 'on';

let app = {
  listInit: function () {
    this.thisitem = _appBody.querySelectorAll(_listItem);
    app.init();
  },
  init: function () {
    if (window.navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)) {
      app.moEvent();
    } else {
      app.pcEvent();
    }
  },
  moEvent: function () {
    const items = this.thisitem;
    for (const item of items) {
      item.addEventListener('click', app.clickFunc);
    }
  },
  pcEvent: function () {
    const items = this.thisitem;
    for (const item of items) {
      item.addEventListener('mouseleave', app.leaveFunc);
      item.addEventListener('mouseenter', app.enterFunc);
    }
  },
  leaveFunc: function () {
    app.reset(this);
  },
  enterFunc: function () {
    app.set(this);
  },
  clickFunc: function () {
    if (this.classList.contains(ACTIVE_CLASS)) {
      app.reset(this);
    } else {
      app.set(this);
    }
  },
  reset: function (e) {
    e.classList.remove(ACTIVE_CLASS);
    e.querySelector(_listInfo).style.height = '';
  },
  set: function (e) {
    e.classList.add(ACTIVE_CLASS);
    const itemHeight = e.clientHeight;
    e.querySelector(_listInfo).style.height = itemHeight + 'px';
  },
};

function hasJqueryObject(elem) {
  return elem.attributes.length > 0;
}

// 조건이 맞으면 Go!
hasJqueryObject(_appBody.querySelector(_listItem)) && app.listInit(_listItem);

// go to top!
const topButton = document.querySelector('.top');
if (topButton) {
  topButton.addEventListener('click', scrollTop);
}
function scrollTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}
