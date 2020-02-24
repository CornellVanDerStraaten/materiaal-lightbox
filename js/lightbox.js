const smallItems = document.querySelectorAll('.small');
const toDelete = document.querySelectorAll('.big');

// The Nodelist 'toDelete' put into an array //
const allBig = [];

for(let i = 0; i < toDelete.length; i++) {
    allBig.push(toDelete[i]);
}