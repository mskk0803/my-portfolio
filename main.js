// top
window.onload = function () {
  const body = document.getElementById("indexpage");
  body.animate([{ opacity: 0 }, { opacity: 1 }], 2000);
  const linkBox = document.getElementById("link-box");
  linkBox.style.visibility = "hidden";
};
// aboutme
const myname = document.getElementById("myname");
const about = document.getElementById("about");
const hobby = document.getElementById("hobby");
const favorite = document.getElementById("favorite");
const skill = document.getElementById("skill");
const link = document.getElementById("link");

let nummyname = 0;
myname.onmouseover = function () {
  if (nummyname === 0) {
    const mynameBox = document.getElementById("myname-box");
    mynameBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    mynameBox.innerHTML = "<p>松浦早希子</p><p>Matsuura SAKIKO</p>";
    nummyname += 1;
  }
};

let numabout = false;
about.onmouseover = function () {
  if (numabout === false) {
    const aboutBox = document.getElementById("about-box");
    aboutBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    aboutBox.innerHTML = "<p>富山県富山市出身</p><p>東京農工大学大学院1年</p>";
    numabout = true;
  }
};

let numhobby = false;
hobby.onmouseover = function () {
  if (numhobby === false) {
    const hobbyBox = document.getElementById("hobby-box");
    hobbyBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    hobbyBox.innerHTML = "<p>居酒屋巡り</p><p>散歩</p>";
    numhobby = true;
  }
};

let numfavorite = false;
favorite.onmouseover = function () {
  if (numfavorite === false) {
    const favoriteBox = document.getElementById("favorite-box");
    favoriteBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    favoriteBox.innerHTML = "<p>酒類全般</p><p>奇麗な風景</p>";
    numfavorite = true;
  }
};

let numskill = false;
skill.onmouseover = function () {
  if (numskill === false) {
    const skillBox = document.getElementById("skill-box");
    skillBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    skillBox.innerHTML =
      "<p>普通自動車運転免許</p><p>秘書技能検定2級</p><p>Rails/HTML/CSS</p>";
    numskill = true;
  }
};

let numlink = false;
link.onmouseover = function () {
  if (numlink === false) {
    const linkBox = document.getElementById("link-box");
    linkBox.style.visibility = "visible";
    linkBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
    numlink = true;
  }
};

// gallrey
