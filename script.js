i = 0;
all_pets = document.getElementById('all_pets');
function leftBut() {
    if (i>0) {
        i--;
        all_pets.style.transform = `translateX(${-i*1160}px)`;
    }
}
function rightBut() {
    if (i<2) {
        i++;
        all_pets.style.transform = `translateX(${-i*1160}px)`;
    }
}