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