const smallItems = document.querySelectorAll('.small');
const toDelete = document.querySelectorAll('.big');

// The Nodelist 'toDelete' put into an array //
const allBig = [];

for(let i = 0; i < toDelete.length; i++) {
    allBig.push(toDelete[i]);
    // Remove element from DOM //
    toDelete[i].remove();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

const makeCloseButton = document.createElement('i');
makeCloseButton.className = 'fas fa-times-circle sk';
makeCloseButton.addEventListener('click', closePopup);

function makePopup(num) {
    let popup = document.createElement('div');
    popup.id = 'popup';
    popup.addEventListener('click', closePopup);
    let popupContent = document.createElement('div');
    popupContent.className = 'popupContent';
    popupContent.innerHTML = allBig[num].innerHTML;
    popupContent.addEventListener('click', function(e){
        e.stopPropagation();
    })
    popupContent.prepend(makeCloseButton);
    popup.append(popupContent);
    document.body.append(popup);
}

function closePopup() {
    document.getElementById('popup').remove();
}


// onClick events on .small Divs
for(let i = 0; i < smallItems.length; i++) {
    smallItems[i].addEventListener('click', function(){
        makePopup(i);
    });
}
function makeButton() {
    const makeLoginPopupButton = document.createElement('i');
    makeLoginPopupButton.className = 'fas fa-sign-in-alt login-button';
    document.body.prepend(makeLoginPopupButton);
    makeLoginPopupButton.addEventListener('click', makeLoginPopup);
}

const loginPopup = document.querySelectorAll('.login-popup');
const loginPopupArray = [];

for(let i = 0; i < loginPopup.length; i++) {
    loginPopupArray.push(loginPopup[i]);
    // Remove element from DOM //
    loginPopup[i].remove();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

function makeLoginPopup() {
    console.log('opened');
    let loginPopup = document.createElement('div');
    loginPopup.id = 'login-popup';
    loginPopup.addEventListener('click', closeLoginPopup);
    document.body.append(loginPopup);

    let loginPopupContent = document.createElement('div');
    loginPopupContent.className = 'loginPopupContent';
    loginPopupContent.innerHTML = loginPopupArray[0].innerHTML;
    loginPopupContent.addEventListener('click', function(x){
        x.stopPropagation();
    })
    loginPopup.append(loginPopupContent);
}

function closeLoginPopup() {
    document.getElementById('login-popup').remove();
}