/*
 * Version   : ver 0.1.0
 * File      : js/index.js
 * Author    : KIM SO YOUNG
 *
 * SUMMARY:
 * 1) LIST EVENT - listInit, listEvent
 */

const appBody = document.body;
const list_item = '.list_item';
const listTit = '.item_title';
const listInfo = '.item_back';
const ACTIVE_CLASS = 'on';

let app = {
  listInit: function () {
    this.thisitem = appBody.querySelectorAll(list_item);
    app.listEvent();
  },
  listEvent: function () {
    const items = this.thisitem;
    for (const item of items) {
      item.addEventListener('mouseenter', app.enterFunc);
      item.addEventListener('mouseleave', app.leaveFunc);
    }
  },
  enterFunc: function () {
    this.classList.add(ACTIVE_CLASS);
    const itemHeight = this.querySelector(listTit).clientHeight;
    this.querySelector(listInfo).style.height = itemHeight + 80 + 'px';
  },
  leaveFunc: function () {
    this.classList.remove(ACTIVE_CLASS);
    this.querySelector(listInfo).style.height = '';
  },
};

function hasJqueryObject(elem) {
  return elem.attributes.length > 0;
}

// 조건이 맞으면 Go!
hasJqueryObject(appBody.querySelector(list_item)) && app.listInit(list_item);
