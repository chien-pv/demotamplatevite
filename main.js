import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navigo from "navigo"; // When using ES modules.
import userLayout from "./views/layouts/user.html?raw";
import adminLayout from "./views/layouts/admin.html?raw";
import home from "./views/pages/home.html?raw";
import about from "./views/pages/about.html?raw";

const router = new Navigo("/");
function setLayoutUser() {
  document.getElementById("layout").innerHTML = userLayout;
}

function setLayoutAdmin() {
  document.getElementById("layout").innerHTML = adminLayout;
}

function setLayoutPage(content) {
  document.getElementById("app").innerHTML = content;
}
router
  .on("/", function () {
    setLayoutUser();
    setLayoutPage(home);
  })
  .on("/contact", function () {
    setLayoutUser();
    // do something
  })
  .on("/about", function () {
    setLayoutUser();
    setLayoutPage(about);
    // do something
  })
  .on("/admin", function () {
    setLayoutAdmin();
  })
  .on("/admin/users", function () {
    setLayoutAdmin();
    // do something
  })
  .on("/admin/products", function () {
    setLayoutAdmin();
    // do something
  });

router.resolve();
