let curBal = document.getElementById('currentBal')
let newAd = document.getElementById('adSpan');

function savingsTransactions() {
let recentList = document.getElementById('list');
let amount1 = (Math.floor(Math.random() * 10) + 1);
recentList.textContent = '';
let depNames = ['Interest Earnings', 'Transfer From---Regular Checking 0429', 'Deposit-Check', 'Deposit-Cash', 'Transfer From External Account'];
let amount2 = 0;
let newCurBal = 350;
for(let i = 0; i < amount1; i++){
recentList.innerHTML += `<li>Balance: $${newCurBal}---${depNames[(Math.floor(Math.random() * 5))]}-$${amount2 = (Math.floor(Math.random() * 30) + 100)}</li>`;

newCurBal += amount2;
curBal.textContent = `Current Balance: $${newCurBal}`
}
}

let updateButton = document.getElementById('chat');
let favDialog = document.getElementById('dialogBox');
let closeBtn = document.getElementById('close-btn')

function closeModal() {
    favDialog.display = none;
}

function chatModal() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}

function firstSelect() {
  for(let i = 0; i < document.getElementsByName('chatSelect').length; i++) {
      if(document.getElementsByName('chatSelect')[i].checked && [i] == 0) {
           newAccount();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 1) {
          helpTran();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 2) {
          closeAccount();
      }
  }
}

function newAccount() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>Which type of account would you like to open?<br></label><br><label><input type='radio' name='chatSelect'>Super Simple Savings</label>
    <label><input type='radio' name='chatSelect'>Regular Checking</label>
    <label><input type='radio' name='chatSelect'>Silver Rewards Credit Card</label><br><button type='button' onclick='newAccount2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}

function newAccount2() {
    document.getElementById('testForm').innerHTML = `Sorry, we no longer offer that type of account. Try a real bank!
    <button id='close-btn' onclick='closeModal()'>Close</button>`
}



function helpTran() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>Which type of transaction did you want to make?<br></label><br><label><input type='radio' name='chatSelect'>External Transfer</label>
    <label><input type='radio' name='chatSelect'>Wire Transfer</label>
    <label><input type='radio' name='chatSelect'>Bill Pay</label><br><button type='button' onclick='helpTran2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}

function helpTran2() {
  document.getElementById('testForm').innerHTML = `Sorry, we are not currently offering that service. Try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount() {
    document.getElementById('testForm').innerHTML =
    `<form id='testForm'><label for='chatSelect'>We're sorry to see you go. What is the main reason you are closing your accounts?<br></label><br><label><input type='radio' name='chatSelect'>Not enough account options</label>
    <label><input type='radio' name='chatSelect'>Terrible customer service</label>
    <label><input type='radio' name='chatSelect'>It's not a real bank</label><br><button type='button' onclick='closeAccount2()'>Select</button><br>
    <br><button id='close-btn' onclick='closeModal()'>Close</button>
    </form>`
}

function closeAccount3() {
  document.getElementById('testForm').innerHTML = `Your accounts have been closed. Maybe try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount4() {
  document.getElementById('testForm').innerHTML = `Your accounts have been closed. Maybe try a real bank!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount5() {
  document.getElementById('testForm').innerHTML = `You think the real banks are any better? Good luck!
  <button id='close-btn' onclick='closeModal()'>Close</button>`
}

function closeAccount2() {
    for(let i = 0; i < document.getElementsByName('chatSelect').length; i++) {
      if(document.getElementsByName('chatSelect')[i].checked && [i] == 0) {
           closeAccount3();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 1) {
          closeAccount4();
      } else if(document.getElementsByName('chatSelect')[i].checked && [i] == 2) {
          closeAccount5();
      }
  }
}

let myTime = 3000;
//let i = 0;

let newAd1 = `<section id='simSav4'><h2>Get your savings in gear with our new <br>Super Simple Savings Account!</h2><h4>Are you ready to:</h4><ul><li>Save for a home purchase</li><li>Buy a new car</li><li>Home Renovations</li><li>Get a new pet</li><li>Take that dream vacation</li></ul><br>
        <div id='helpYou4'><h4>Let us help you achieve your goals faster with the Super Simple Savings Account</h4><p>With no maintenance fee and generous interest, the Super Simple Savings Account will get you to your goal in no time! Talk to one of our representatives today and begin your savings journey.</p></div>
    </section>`;
let newAd2 = `<div id='adSpan2'><section id='simSav2'><h2>Getting ready to buy a home?<br>Talk to our home loan specialists today!</h2><h4>We can help you:</h4><ul><li>Create a customized plan</li><li>Find your price range</li><li>Get preapproved</li><li>Consider all of your loan options</li><li>Get a low rate</li></ul><br>
        <div id='helpYou2'><h4>We can get you in to the home of your dreams faster and easier</h4><p>Make home buying a breeze with our team of experts, call today and achieve your goals. Additional discounts are available for current customers.</p></div>
    </section></div>`;
let newAd3 = `<span id='adSpan3'><section id='simSav3'><h2>Get your money in check with our<br>Regular Checking Account!</h2><h4>Keep more of your hard-earned money. Regular Checking has:</h4><ul><li>High interest rate</li><li>No maintenance fee</li><li>Over 100 debit card designs</li><li>Easy transfer and bill pay</li><li>World-class online banking</li></ul><br>
        <div id='helpYou3'><h4>Simplify your money and your life with our Regular Checking Account</h4><p>With low fees and our amazing customer service, managing your money has never been easier. Open an account today and make your money work for you.</p></div>
    </section></span>`;

let countAds = 0;

function changeAd3() {
  setTimeout(function() {
  newAd.innerHTML = newAd1;
  changeAd();
  }, 5000)
}

function changeAd2() {
  setTimeout(function() {
  newAd.innerHTML = newAd3;
  changeAd3();
  }, 5000)
}

function changeAd() {
    if(countAds < 5) {
    setTimeout(function(){
    newAd.innerHTML = newAd2;
    countAds += 1;
    changeAd2();
  }, 5000);
}
}

window.onload = changeAd;
window.onload = savingsTransactions;
