
let checkBal = document.getElementById('check-bal')
let savBal = document.getElementById('sav-bal')
let ccBal = document.getElementById('cc-bal');
let unList = document.getElementById('unList');
let tesBal = document.getElementById('testBal')

let newCheckBal = 82
let newSavBal = 922
let newCcBal = 327

checkBal.textContent = 'Regular Checking-0429: $' + newCheckBal;
savBal.textContent = 'Super Simple Savings-1081: $' + newSavBal;
ccBal.textContent = 'Silver Rewards Credit Card-2814: $' + newCcBal;

function tranButton() {
    let transferAmount = document.getElementById('tran-amnt').value;
    if (transferAmount < 1) {
    alert('Error, no amount entered');
} else {
    function getRadioValue()
{
    for (let i = 0; i < document.getElementsByName('tranTo').length; i++)
    {
        if (document.getElementsByName('tranTo')[i].checked && [i] == 2)
        {   
            for (let i = 0; i < document.getElementsByName('tranFrom').length; i++) {
                if (document.getElementsByName('tranFrom')[i].checked && [i] == 0) {
                    if (parseInt(transferAmount) > newCcBal) {
            alert('Error. You cannot transfer more than the balance due.')
        }   else if (parseInt(transferAmount) > newSavBal) {
            alert('Error. You cannot transfer more than your available balance.')
        }   else {
            newCcBal -= parseInt(transferAmount);
            ccBal.textContent = 'Silver Rewards Credit Card-2814: $' + newCcBal;
            newSavBal -= parseInt(transferAmount);
            savBal.textContent = 'Super Simple Savings-1081: $' + newSavBal;
            unList.innerHTML += '$(' + parseInt(transferAmount) + ')' + 'From Super Simple Savings-1081' + '---' + 'to' + '---' +'Silver Rewards Credit Card-2814' + '<br><br>'
        }
                } else if(document.getElementsByName('tranFrom')[i].checked && [i] == 1) {
                    if (parseInt(transferAmount) > newCcBal) {
            alert('Error. You cannot transfer more than the balance due.')
        }   else if (parseInt(transferAmount) > newCheckBal) {
            alert('Error. You cannot transfer more than your available balance.')
        }   else {
            newCcBal -= parseInt(transferAmount);
            ccBal.textContent = 'Silver Rewards Credit Card-2814: $' + newCcBal;
            newCheckBal -= parseInt(transferAmount);
            checkBal.textContent = 'Regular Checking-0429: $' + newCheckBal;
            unList.innerHTML += '$(' + parseInt(transferAmount) + ')' + 'From Regular Checking-0429' + '---' + 'to' + '---' +'Silver Rewards Credit Card-2814' + '<br><br>'
                }
            }
            }
        } else if (document.getElementsByName('tranTo')[i].checked && [i] == 0) {
            for (let i = 0; i < document.getElementsByName('tranFrom').length; i++) {
                if (document.getElementsByName('tranFrom')[i].checked && [i] == 0) {
                    if (parseInt(transferAmount) > newSavBal) {
            alert('Error. You cannot transfer more than your available balance.');
        }   else {
            newCheckBal += parseInt(transferAmount);
            checkBal.textContent = 'Regular Checking-0429: $' + newCheckBal;
            newSavBal -= parseInt(transferAmount); 
            savBal.textContent = 'Super Simple Savings-1081: $' + newSavBal;
            unList.innerHTML += '$(' + parseInt(transferAmount) + ')' + 'From Super Simple Savings-1081' + '---' + 'to' + '---' +'Regular Checking-0429' + '<br><br>'
        }
                } else if (document.getElementsByName('tranFrom')[i].checked && [i] == 1) {
                    alert('Error. You cannot transfer from and to the same account!')
                }
            }
        } else if (document.getElementsByName('tranTo')[i].checked && [i] == 1){
            for (let i = 0; i < document.getElementsByName('tranFrom').length; i++) {
                if (document.getElementsByName('tranFrom')[i].checked && [i] == 1) {
                    if (parseInt(transferAmount) > newCheckBal) {
            alert('Error. You cannot transfer more than your available balance.');
        }   else {
            newSavBal += parseInt(transferAmount);
            savBal.textContent = 'Super Simple Savings-1081: $' + newSavBal;
            newCheckBal -= parseInt(transferAmount);
            checkBal.textContent = 'Regular Checking-0429: $' + newCheckBal;
            unList.innerHTML += '$(' + parseInt(transferAmount) + ')' + 'From Regular Checking-0429' + '---' + 'to' + '---' +'Super Simple Savings-1081' + '<br><br>'
        }
                } else if (document.getElementsByName('tranFrom')[i].checked && [i] == 0) {
                    alert('Error. You cannot transfer from and to the same account!')
                }
            }
        } else if ([i] != 1 && [i] != 2 && [i] != 0) {
            alert('Something went wrong, please try again.')
        }
    }
}
    getRadioValue();
}  
}

let subButton = document.getElementById('tran-btn');
subButton.addEventListener('click', tranButton, false); 

function extTranBut() {
    let extTransferAmount = document.getElementById('ext-tran-amnt').value;
    if (extTransferAmount < 1) {
    alert('Error, no amount entered');
} else {
    for (let i = 0; i < document.getElementsByName('tranFromExt').length; i++) {
        if (document.getElementsByName('tranFromExt')[i].checked && [i] == 0) {
            if (parseInt(extTransferAmount) > newSavBal) {
                alert('Error. You cannot transfer more than your available balance.')
            } else {
                newSavBal -= parseInt(extTransferAmount);
                savBal.textContent = 'Super Simple Savings-1081: $' + newSavBal;
                unList.innerHTML += '$(' + parseInt(extTransferAmount) + ') From Super Simple Savings-1081' + '---' + 'to' + '---' +'External Account' + '<br><br>';
            }
        } else if (document.getElementsByName('tranFromExt')[i].checked && [i] == 1) {
            if (parseInt(extTransferAmount) > newCheckBal) 
            {
                alert('Error. You cannot transfer more than your available balance.')
            }
            else {
                newCheckBal -= parseInt(extTransferAmount);
                checkBal.textContent = 'Regular Checking-0429: $' + newCheckBal;
                unList.innerHTML += '$(' + parseInt(extTransferAmount) + ') From Regular Checking-0429' + '---' + 'to' + '---' +'External Account' + '<br><br>';
            }
    } 
    }
}
}

function createTransactions() {
let recentList = document.getElementById('list');
let amount1 = (Math.floor(Math.random() * 15) + 1);
recentList.textContent = '';
let busNames = ['Burger King', 'Amazon', 'Plaid Pantry', 'Kroger', 'Ross', 'Taco Bell', 'Winco', 'Wine4Less', 'Kohls', 'Jamba Juice', 'Wingstop', 'Pizza Hut'];
let amount2 = 0;
let newCurBal = 920;
for(let i = 0; i < amount1; i++){
recentList.innerHTML += `<li>Balance: $${newCurBal}---${busNames[(Math.floor(Math.random() * 10))]}-$${amount2 = (Math.floor(Math.random() * 30) + 4)}</li>`;

newCurBal -= amount2;

}
tesBal.textContent = `Current Balance: $${newCurBal}`
}

window.onload = createTransactions
 
function createCreditTran() {
let recentList = document.getElementById('list');
let amount1 = (Math.floor(Math.random() * 15) + 1);
recentList.textContent = '';
let busNames = ['Burger King', 'Amazon', 'Plaid Pantry', 'Kroger', 'Ross', 'Taco Bell', 'Winco', 'Wine4Less', 'Kohls', 'Jamba Juice', 'Wingstop', 'Pizza Hut'];
let amount2 = 0;
let newCurBal = 0;
for(let i = 0; i < amount1; i++){
recentList.innerHTML += `<li>Balance: $${newCurBal}---${busNames[(Math.floor(Math.random() * 10))]}-$${amount2 = (Math.floor(Math.random() * 30) + 4)}</li>`;

newCurBal += amount2;

}
tesBal.textContent = `Current Balance: $${newCurBal}`
}

window.onload = createCreditTran
