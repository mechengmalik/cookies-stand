'use strict';

let hour = ['6 am : ','7 am : ','8 am : ','9 am : ','10 am : ','11 am : ','12 pm : ','1 pm : ','2 pm : ','3 pm : ','4 pm : ','5 pm : ','6pm :  ','7 pm : '];
let t1 = document.getElementById('tabl');
let tabE = document.createElement('table');
t1.appendChild(tabE);


// Sales.all=[];
//     let Seattle = new Sales('Seattle', 23, 65, 6.3);
//     let Tokyo = new Sales('Tokyo', 3, 65, 1.2);
//     let Dubai = new Sales('Dubai', 11, 38, 3.7);
//     let paris = new Sales('paris', 20, 38, 2.3);
//     let lima = new Sales('lima', 2, 16, 4.6);
//     let place = [Seattle, Tokyo,Dubai,paris,lima];

function Sales(shopName,min,max,avg){
  this.shopName = shopName;
  this.minCust = min;
  this.maxCust = max ;
  this.avgCookies= avg;
  this.nOfCusts = [];
  this.avgCookiesH = [];
  this.total = 0;

}

Sales.prototype.cusPerH = function(){

  for (let i = 0; i < hour.length; i++) {

    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    let nOfCust = Math.floor(Math.random() * (max - min) + min);
    this.nOfCusts.push(nOfCust);

  }
};

Sales.prototype.fAvgCkiesPH = function(){
  for (let i = 0; i < hour.length; i++) {
    this.avgCookiesH [i]= Math.ceil (this.nOfCusts[i]*this.avgCookies);
    this.avgCookiesH.push(this.avgCookiesH);

    this.total+= this.avgCookiesH[i];
    console.log(this.total);


  }
};

Sales.prototype.render = function(){
  let trE =document.createElement('tr');
  let tdE = document.createElement('td');
  tdE.textContent = this.shopName;

  trE.appendChild(tdE);
  for (let i = 0; i < hour.length; i++) {
    let tdE = document.createElement('td');
    tdE.textContent = this.avgCookiesH[i];
    trE.appendChild(tdE);

  }
  // tabE.appendChild(tdE);

  let thDailyT = document.createElement('td');
  thDailyT.textContent = this.total;
  trE.appendChild(thDailyT);
  tabE.appendChild(trE);



};
function creatHead(){
  let trE = document.createElement('tr');

  let thShName = document.createElement('th');
  trE.appendChild(thShName) ;
  tabE.appendChild(thShName);
  thShName.textContent = 'shop name';
  for (let i = 0; i < hour.length; i++) {
    let thE = document.createElement('th');
    thE.textContent = hour[i];
    trE.appendChild(thE);
    tabE.appendChild(thE);

  }
  let thDailyT = document.createElement('th');
  trE.appendChild(thDailyT) ;
  thDailyT.textContent = 'Daily Location Total';
  tabE.appendChild(thDailyT);



}
let seattle = new Sales('Seattle',23,65,6.3);
let tokyo = new Sales('Tokyo',3,24,1.2);
let paris = new Sales('Paris',11,38,3.7);
let dubai = new Sales('Dubai',20,38,2.3);
let lama = new Sales('Lama',2,16,4.6);

let shops = [seattle,tokyo,paris,dubai,lama];
function creatFtr(){
  let tfootEl = document.createElement('tfoot');
  let tdEl = document.createElement('td');
  tdEl.textContent = 'Total';
  tfootEl.appendChild(tdEl);
  tabE.appendChild(tfootEl);

  let mega = 0;
  for (let i = 0; i < hour.length; i++) {
    let tdEl = document.createElement('td');
    let sum = 0;
    for (let l = 0; l < shops.length; l++) {

      sum=sum+ shops[l].avgCookiesH[i];

    }
    mega+=sum;

    tdEl.textContent = sum;
    tfootEl.appendChild(tdEl);
    // tabE.appendChild(tfootEl)

  }
  let totaltd = document.createElement('td');
  totaltd.textContent = mega;
  tfootEl.appendChild(totaltd);


}



seattle.cusPerH();
seattle.fAvgCkiesPH();

lama.cusPerH();
lama.fAvgCkiesPH();

tokyo.cusPerH();
tokyo.fAvgCkiesPH();

paris.cusPerH();
paris.fAvgCkiesPH();

dubai.cusPerH();
dubai.fAvgCkiesPH();

creatHead();

seattle.render();
tokyo.render();
paris.render();
dubai.render();
lama.render();
creatFtr();








// let seattle = {
//   shopName:'seattle',
//   minCust:23,
//   maxCust:65,
//   avgCookies :6.3,
//   nOfCust:[],
//   avgCookiesH:[],
//   total:0,
//   cusPerH: function(){

//     for (let i = 0; i < hour.length; i++) {

//       let min = Math.ceil(this.minCust);
//       let max = Math.floor(this.maxCust);
//       let nOfCust = Math.floor(Math.random() * (max - min) + min);
//       this.nOfCust.push(nOfCust);

//     }

//   },
//   fAvgCkiesPH : function(){
//     for (let i = 0; i < hour.length; i++) {
//       this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
//       this.avgCookiesH.push(this.avgCookiesH);

//       this.total+= this.avgCookiesH[i];
//       console.log(this.total);


//     }

//   },
//   render:function(){
//     let divlist = document.getElementById('list');
//     let hE1 = document.createElement('h2');
//     divlist.appendChild(hE1);
//     hE1.textContent = this.shopName;

//     let u1=document.createElement('ul');

//     divlist.appendChild(u1);
//     for (let i = 0; i < hour.length; i++) {
//       let liE = document.createElement('li');
//       liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

//       u1.appendChild(liE);

//     }
//     let totalE = document.createElement('li');
//     totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
//     u1.appendChild(totalE);


//   }
// };
// seattle.cusPerH();
// seattle.fAvgCkiesPH();
// seattle.render();


// let tokyo = {
//   shopName:'tokyo',
//   minCust:23,
//   maxCust:65,
//   avgCookies :6.3,
//   nOfCust:[],
//   avgCookiesH:[],
//   total:0,
//   cusPerH: function(){

//     for (let i = 0; i < hour.length; i++) {

//       let min = Math.ceil(this.minCust);
//       let max = Math.floor(this.maxCust);
//       let nOfCust = Math.floor(Math.random() * (max - min) + min);
//       this.nOfCust.push(nOfCust);

//     }

//   },
//   fAvgCkiesPH : function(){
//     for (let i = 0; i < hour.length; i++) {
//       this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
//       this.avgCookiesH.push(this.avgCookiesH);

//       this.total+= this.avgCookiesH[i];
//       console.log(this.total);


//     }

//   },
//   render:function(){
//     let divlist = document.getElementById('list');
//     let hE1 = document.createElement('h2');
//     divlist.appendChild(hE1);
//     hE1.textContent = this.shopName;

//     let u1=document.createElement('ul');

//     divlist.appendChild(u1);
//     for (let i = 0; i < hour.length; i++) {
//       let liE = document.createElement('li');
//       liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

//       u1.appendChild(liE);

//     }
//     let totalE = document.createElement('li');
//     totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
//     u1.appendChild(totalE);


//   }
// };
// tokyo.cusPerH();
// tokyo.fAvgCkiesPH();
// tokyo.render();

// let paris = {
//   shopName:'paris',
//   minCust:23,
//   maxCust:65,
//   avgCookies :6.3,
//   nOfCust:[],
//   avgCookiesH:[],
//   total:0,
//   cusPerH: function(){

//     for (let i = 0; i < hour.length; i++) {

//       let min = Math.ceil(this.minCust);
//       let max = Math.floor(this.maxCust);
//       let nOfCust = Math.floor(Math.random() * (max - min) + min);
//       this.nOfCust.push(nOfCust);

//     }

//   },
//   fAvgCkiesPH : function(){
//     for (let i = 0; i < hour.length; i++) {
//       this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
//       this.avgCookiesH.push(this.avgCookiesH);

//       this.total+= this.avgCookiesH[i];
//       console.log(this.total);


//     }

//   },
//   render:function(){
//     let divlist = document.getElementById('list');
//     let hE1 = document.createElement('h2');
//     divlist.appendChild(hE1);
//     hE1.textContent = this.shopName;

//     let u1=document.createElement('ul');

//     divlist.appendChild(u1);
//     for (let i = 0; i < hour.length; i++) {
//       let liE = document.createElement('li');
//       liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

//       u1.appendChild(liE);

//     }
//     let totalE = document.createElement('li');
//     totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
//     u1.appendChild(totalE);


//   }
// };
// paris.cusPerH();
// paris.fAvgCkiesPH();
// paris.render();


// let dubai = {
//   shopName:'dubai',
//   minCust:23,
//   maxCust:65,
//   avgCookies :6.3,
//   nOfCust:[],
//   avgCookiesH:[],
//   total:0,
//   cusPerH: function(){

//     for (let i = 0; i < hour.length; i++) {

//       let min = Math.ceil(this.minCust);
//       let max = Math.floor(this.maxCust);
//       let nOfCust = Math.floor(Math.random() * (max - min) + min);
//       this.nOfCust.push(nOfCust);

//     }

//   },
//   fAvgCkiesPH : function(){
//     for (let i = 0; i < hour.length; i++) {
//       this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
//       this.avgCookiesH.push(this.avgCookiesH);

//       this.total+= this.avgCookiesH[i];
//       console.log(this.total);


//     }

//   },
//   render:function(){
//     let divlist = document.getElementById('list');
//     let hE1 = document.createElement('h2');
//     divlist.appendChild(hE1);
//     hE1.textContent = this.shopName;

//     let u1=document.createElement('ul');

//     divlist.appendChild(u1);
//     for (let i = 0; i < hour.length; i++) {
//       let liE = document.createElement('li');
//       liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

//       u1.appendChild(liE);

//     }
//     let totalE = document.createElement('li');
//     totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
//     u1.appendChild(totalE);


//   }
// };
// dubai.cusPerH();
// dubai.fAvgCkiesPH();
// dubai.render();

// let lama = {
//   shopName:'lama',
//   minCust:23,
//   maxCust:65,
//   avgCookies :6.3,
//   nOfCust:[],
//   avgCookiesH:[],
//   total:0,
//   cusPerH: function(){

//     for (let i = 0; i < hour.length; i++) {

//       let min = Math.ceil(this.minCust);
//       let max = Math.floor(this.maxCust);
//       let nOfCust = Math.floor(Math.random() * (max - min) + min);
//       this.nOfCust.push(nOfCust);

//     }

//   },
//   fAvgCkiesPH : function(){
//     for (let i = 0; i < hour.length; i++) {
//       this.avgCookiesH [i]= Math.ceil (this.nOfCust[i]*this.avgCookies);
//       this.avgCookiesH.push(this.avgCookiesH);

//       this.total+= this.avgCookiesH[i];
//       console.log(this.total);


//     }

//   },
//   render:function(){
//     let divlist = document.getElementById('list');
//     let hE1 = document.createElement('h2');
//     divlist.appendChild(hE1);
//     hE1.textContent = this.shopName;

//     let u1=document.createElement('ul');

//     divlist.appendChild(u1);
//     for (let i = 0; i < hour.length; i++) {
//       let liE = document.createElement('li');
//       liE.textContent =`${hour[i]}  ${this.avgCookiesH[i]} cookies`;

//       u1.appendChild(liE);

//     }
//     let totalE = document.createElement('li');
//     totalE.textContent= 'Total : ' +this.total +''+ 'Cookies';
//     u1.appendChild(totalE);


//   }
// };
// lama.cusPerH();
// lama.fAvgCkiesPH();
// lama.render();
