import myData from './data/myData.js';
const allData = [myData];

document.addEventListener('DOMContentLoaded', init);

function init() {
  allData.forEach((data, i) => {
    setCareersUl(data);
    // setCardUl(data);
  });
}

function setCareersUl(data) {
  const careersArticle = document.querySelector('#career');
  const lists = data.lists;

  // console.dir(lists[0].year);

  lists.forEach((project, i) => {
    const ulContainer = document.createElement('div');
    const ulArea = document.createElement('ul');
    const ulAreaTitle = document.createElement('h3');
    careersArticle.appendChild(ulContainer);
    ulContainer.appendChild(ulAreaTitle);
    ulContainer.appendChild(ulArea);

    ulContainer.className = 'career_list_row';
    ulAreaTitle.className = 'career_year';
    ulAreaTitle.textContent = project.year; //년도별 프로젝트 구분

    const periodProject = project.list;
    periodProject.forEach((list, i) => {
      const ulAreaList = document.createElement('li'); //career_list 자식 li 생성
      const ulAreaFlex = document.createElement('div'); //career_list 기간 생성
      const ulAreaPeriod = document.createElement('strong'); //career_list 기간 생성
      const ulAreaProject = document.createElement('p'); //career_list 프로젝트명 생성
      const ulAreaTextName = document.createElement('span'); //career_list 프로젝트명 생성
      const ulAreaTexKind = document.createElement('span'); //career_list 유형 생성
      //const ulAreaTextRate = document.createElement('span'); //career_list 참여율 생성
      const ulAreaContent = document.createElement('div'); //career_list 기여 내용 생성

      ulContainer.appendChild(ulArea); //문서에 생성한 ul 추가
      ulArea.appendChild(ulAreaList); //career_list > li 추가
      ulAreaList.appendChild(ulAreaFlex); //career_list > li > div 추가
      ulAreaFlex.appendChild(ulAreaPeriod); //career_list > li > strong 추가
      ulAreaFlex.appendChild(ulAreaProject); //career_list > li > p 추가
      ulAreaProject.appendChild(ulAreaTextName); //career_list > li > p > span 추가
      ulAreaProject.appendChild(ulAreaTexKind); //career_list > li > p > span 추가
      //ulAreaProject.appendChild(ulAreaTextRate); //career_list > li > p > span 추가

      ulArea.className = 'career_list'; //생성한 ul에 career_list 클래스 부여
      ulAreaFlex.className = 'flex'; //생성한 div에 flex 클래스 부여
      ulAreaPeriod.className = 'li_title'; //생성한 strong에 li_title 클래스 부여
      ulAreaProject.className = 'li_text'; //생성한 p에 li_text 클래스 부여
      ulAreaTextName.className = 'name'; //생성한 span에 name 클래스 부여
      ulAreaTexKind.className = 'kind'; //생성한 span에 kind 클래스 부여
      //ulAreaTextRate.className = 'rate'; //생성한 span에 rate 클래스 부여

      ulAreaPeriod.textContent = list.period;
      ulAreaTextName.textContent = list.project;
      ulAreaTexKind.textContent = list.kind;

      if (list.content !== '') {
        ulAreaList.appendChild(ulAreaContent); //career_list > li > div
        ulAreaContent.className = 'li_content'; //생성한 div에 li_content 클래스 부여
        ulAreaContent.textContent = list.content;
      }
      //ulAreaTextRate.textContent = '참여율 : ' + list.rate + '%';
    });
  });
}

function setCardUl(data) {
  const careersArticle = document.querySelector('#list');
  const lists = data.lists;

  // console.dir(lists[0].year);

  lists.forEach((project, i) => {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'list_item';

    const periodProject = project.list;
    periodProject.forEach((list, i) => {
      const itemFront = document.createElement('div');
      const itemBack = document.createElement('div');
      const topArea = document.createElement('div');
      const middleArea = document.createElement('div');
      const bottomArea = document.createElement('div');
      const thumbImage = document.createElement('img');
      const itemTitle = document.createElement('a');
      const itemLabels = document.createElement('div');
      const itemLabelSpan = document.createElement('span');
      const itemWork = document.createElement('div');
      const itemProgram = document.createElement('div');
      const itemWorkSpan = document.createElement('span');
      const itemProgramSpan = document.createElement('span');

      itemFront.className = 'item_front';
      itemBack.className = 'item_back';
    });
  });
}

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

function hasJsObject(elem) {
  return elem.attributes.length > 0;
}

// 조건이 맞으면 Go!
hasJsObject(_appBody.querySelector(_listItem)) && app.listInit(_listItem);

// go to top!
const topButton = document.querySelector('.top');
if (topButton) {
  topButton.addEventListener('click', scrollTop);
}
function scrollTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}
