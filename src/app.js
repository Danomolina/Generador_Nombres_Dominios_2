/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extensions = ['.com'];

  let domains = [];

  for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
          for (let k = 0; k < noun.length; k++) {
              for (let l = 0; l < extensions.length; l++) {
                  domains.push(`${pronoun[i]}${adj[j]}${noun[k]}${extensions[l]}`);
              }
          }
      }
  }

  for (let n = 0; n < domains.length; n++) {
      console.log(domains[n]);
  }
};
