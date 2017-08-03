import "./styles/main.scss";
import {axios_get} from "./js/axios_get.js"


axios_get("./src/js/ajax/ui.json")
.then(function (response) {        
  console.log(response);
  
  // let x = response.data.ui;
  // for (let i in x) {
  //   console.log(x[i].id);
  // }
});
