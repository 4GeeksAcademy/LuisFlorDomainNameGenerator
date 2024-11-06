/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let articulo = ["the", "our", "my", "your", "his", "her", "their"];
  let adjective = [
    "green",
    "blue",
    "red",
    "yellow",
    "orange",
    "purple",
    "pink"
  ];
  let subject = ["box", "house", "fridge", "car", "window", "bed", "shower"];
  let domain = [".com", ".es", ".in", ".eu", ".uk", ".us", ".app"];
  let allDomains = articulo
    .map(a =>
      adjective
        .map(adj =>
          subject.map(sub => domain.map(dom => a + adj + sub + dom)).flat()
        )
        .flat()
    )
    .flat();
  console.log(allDomains);
};
