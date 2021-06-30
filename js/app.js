'use strict';
// ddss
let hour = ['6 am : ','7 am : ','8 am : ','9 am : ','10 am : ','11 am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6pm :  ','7 pm : '];

let seattle = {
  shopName:'seattle',
  minCust:23,
  maxCust:65,
  avgCookies :6.3,
  nOfCust:[],
  avgCookiesH:[],
  total:0,
  cusPerH: function(){

    for (let i = 0; i < hour.length; i++) {

      let min = Math.ceil(this.minCust);
      let max = Math.floor(this.maxCust);
      let nOfCust = Math.floor(Math.random() * (max - min) + min);
      this.nOfCust.push(nOfCust);

    }

  },
  fAvgCkiesPH : function(){
    for (let i = 0; i < hour.length; i++) {
      this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
      this.avgCookiesH.push(this.avgCookiesH);

      this.total+= this.avgCookiesH[i];
      console.log(this.total);


    }

  },
  render:function(){
    let divlist = document.getElementById('list');
    let hE1 = document.createElement('h2');
    divlist.appendChild(hE1);
    hE1.textContent = this.shopName;

    let u1=document.createElement('ul');

    divlist.appendChild(u1);
    for (let i = 0; i < hour.length; i++) {
      let liE = document.createElement('li');
      liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

      u1.appendChild(liE);

    }
    let totalE = document.createElement('li');
    totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
    u1.appendChild(totalE);


  }
};
seattle.cusPerH();
seattle.fAvgCkiesPH();
seattle.render();


let tokyo = {
  shopName:'seattle',
  minCust:23,
  maxCust:65,
  avgCookies :6.3,
  nOfCust:[],
  avgCookiesH:[],
  total:0,
  cusPerH: function(){

    for (let i = 0; i < hour.length; i++) {

      let min = Math.ceil(this.minCust);
      let max = Math.floor(this.maxCust);
      let nOfCust = Math.floor(Math.random() * (max - min) + min);
      this.nOfCust.push(nOfCust);

    }

  },
  fAvgCkiesPH : function(){
    for (let i = 0; i < hour.length; i++) {
      this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
      this.avgCookiesH.push(this.avgCookiesH);

      this.total+= this.avgCookiesH[i];
      console.log(this.total);


    }

  },
  render:function(){
    let divlist = document.getElementById('list');
    let hE1 = document.createElement('h2');
    divlist.appendChild(hE1);
    hE1.textContent = this.shopName;

    let u1=document.createElement('ul');

    divlist.appendChild(u1);
    for (let i = 0; i < hour.length; i++) {
      let liE = document.createElement('li');
      liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

      u1.appendChild(liE);

    }
    let totalE = document.createElement('li');
    totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
    u1.appendChild(totalE);


  }
};
tokyo.cusPerH();
tokyo.fAvgCkiesPH();
tokyo.render();

let paris = {
  shopName:'seattle',
  minCust:23,
  maxCust:65,
  avgCookies :6.3,
  nOfCust:[],
  avgCookiesH:[],
  total:0,
  cusPerH: function(){

    for (let i = 0; i < hour.length; i++) {

      let min = Math.ceil(this.minCust);
      let max = Math.floor(this.maxCust);
      let nOfCust = Math.floor(Math.random() * (max - min) + min);
      this.nOfCust.push(nOfCust);

    }

  },
  fAvgCkiesPH : function(){
    for (let i = 0; i < hour.length; i++) {
      this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
      this.avgCookiesH.push(this.avgCookiesH);

      this.total+= this.avgCookiesH[i];
      console.log(this.total);


    }

  },
  render:function(){
    let divlist = document.getElementById('list');
    let hE1 = document.createElement('h2');
    divlist.appendChild(hE1);
    hE1.textContent = this.shopName;

    let u1=document.createElement('ul');

    divlist.appendChild(u1);
    for (let i = 0; i < hour.length; i++) {
      let liE = document.createElement('li');
      liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

      u1.appendChild(liE);

    }
    let totalE = document.createElement('li');
    totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
    u1.appendChild(totalE);


  }
};
paris.cusPerH();
paris.fAvgCkiesPH();
paris.render();


let dubai = {
  shopName:'seattle',
  minCust:23,
  maxCust:65,
  avgCookies :6.3,
  nOfCust:[],
  avgCookiesH:[],
  total:0,
  cusPerH: function(){

    for (let i = 0; i < hour.length; i++) {

      let min = Math.ceil(this.minCust);
      let max = Math.floor(this.maxCust);
      let nOfCust = Math.floor(Math.random() * (max - min) + min);
      this.nOfCust.push(nOfCust);

    }

  },
  fAvgCkiesPH : function(){
    for (let i = 0; i < hour.length; i++) {
      this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
      this.avgCookiesH.push(this.avgCookiesH);

      this.total+= this.avgCookiesH[i];
      console.log(this.total);


    }

  },
  render:function(){
    let divlist = document.getElementById('list');
    let hE1 = document.createElement('h2');
    divlist.appendChild(hE1);
    hE1.textContent = this.shopName;

    let u1=document.createElement('ul');

    divlist.appendChild(u1);
    for (let i = 0; i < hour.length; i++) {
      let liE = document.createElement('li');
      liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

      u1.appendChild(liE);

    }
    let totalE = document.createElement('li');
    totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
    u1.appendChild(totalE);


  }
};
dubai.cusPerH();
dubai.fAvgCkiesPH();
dubai.render();

let lama = {
  shopName:'seattle',
  minCust:23,
  maxCust:65,
  avgCookies :6.3,
  nOfCust:[],
  avgCookiesH:[],
  total:0,
  cusPerH: function(){

    for (let i = 0; i < hour.length; i++) {

      let min = Math.ceil(this.minCust);
      let max = Math.floor(this.maxCust);
      let nOfCust = Math.floor(Math.random() * (max - min) + min);
      this.nOfCust.push(nOfCust);

    }

  },
  fAvgCkiesPH : function(){
    for (let i = 0; i < hour.length; i++) {
      this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
      this.avgCookiesH.push(this.avgCookiesH);

      this.total+= this.avgCookiesH[i];
      console.log(this.total);


    }

  },
  render:function(){
    let divlist = document.getElementById('list');
    let hE1 = document.createElement('h2');
    divlist.appendChild(hE1);
    hE1.textContent = this.shopName;

    let u1=document.createElement('ul');

    divlist.appendChild(u1);
    for (let i = 0; i < hour.length; i++) {
      let liE = document.createElement('li');
      liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

      u1.appendChild(liE);

    }
    let totalE = document.createElement('li');
    totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
    u1.appendChild(totalE);


  }
};
lama.cusPerH();
lama.fAvgCkiesPH();
lama.render();




