import LavaJs from "./LavaJs";

if (localStorage && process.env.NODE_ENV === "development") {
  localStorage.debug = "LavaJs*";
} else {
  localStorage.debug = "";
}

window.LavaJs = LavaJs;
window.lava = new LavaJs();
