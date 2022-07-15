function bkgcolor(evt,tabsName) {
  var i,tabcontent,tablinks;
  tablinks=document.getElementsByClassName("btn-top1");
  for(i=0;i<tablinks.length;i++){
    tablinks[i].className = tablinks[i].className.replace(" active-btn2", "");
  }
  document.getElementById(tabsName).scrollIntoView();
  evt.currentTarget.className += " active-btn2";
  }
