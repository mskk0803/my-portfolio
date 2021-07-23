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

myname.onmouseover = function () {
  const mynameBox = document.getElementById("myname-box");
  mynameBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  mynameBox.innerHTML = "<p>松浦早希子</p><p>Matsuura SAKIKO</p>";
};

about.onmouseover = function () {
  const aboutBox = document.getElementById("about-box");
  aboutBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  aboutBox.innerHTML = "<p>富山県富山市出身</p><p>東京農工大学大学院1年</p>";
};

hobby.onmouseover = function () {
  const hobbyBox = document.getElementById("hobby-box");
  hobbyBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  hobbyBox.innerHTML = "<p>居酒屋巡り</p><p>散歩</p>";
};

favorite.onmouseover = function () {
  const favoriteBox = document.getElementById("favorite-box");
  favoriteBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  favoriteBox.innerHTML = "<p>酒類全般</p><p>奇麗な風景</p>";
};

skill.onmouseover = function () {
  const skillBox = document.getElementById("skill-box");
  skillBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
  skillBox.innerHTML =
    "<p>普通自動車運転免許</p><p>秘書技能検定2級</p><p>Rails/HTML/CSS</p>";
};

link.onmouseover = function () {
  const linkBox = document.getElementById("link-box");
  linkBox.style.visibility = "visible";
  linkBox.animate([{ opacity: 0 }, { opacity: 1 }], 1000);
};

// gallrey
