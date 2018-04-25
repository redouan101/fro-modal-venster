
//button 1 variabelen
var clsModal = document.getElementById('clsModal');
var fotocls = document.getElementById('fotocls');
var sluitcls = document.getElementsByClassName('sluitcls')[0];

//button 2 variabelen
var a7Modal = document.getElementById('a7Modal');
var fotoa7 = document.getElementById('fotoa7');
var sluita7 = document.getElementsByClassName('sluita7')[0];

//button 3 variabelen
var panaModal = document.getElementById('panaModal');
var fotopana = document.getElementById('fotopana');
var sluitpana = document.getElementsByClassName('sluitpana')[0];


//reageer op de klik button1
fotocls.addEventListener('click', opencls);
sluitcls.addEventListener('click', sluitclsModal);
window.addEventListener('click', outsideClickcls);

//reageer op de klik button2
fotoa7.addEventListener('click', opena7);
sluita7.addEventListener('click', sluita7Modal);
window.addEventListener('click', outsideClicka7);

//reageer op de klik button3
fotopana.addEventListener('click', openpana);
sluitpana.addEventListener('click', sluitpanaModal);
window.addEventListener('click', outsideClickpana);



// functies button1
function opencls(){
    clsModal.style.display = 'block';
}
function sluitclsModal(){
    clsModal.style.display = 'none';
}
function outsideClickcls(e){
    if(e.target == clsModal){
        clsModal.style.display = 'none';
    }
}

// functies button2
function opena7(){
    a7Modal.style.display = 'block';
}
function sluita7Modal(){
    a7Modal.style.display = 'none';
}
function outsideClicka7(e){
    if(e.target == a7Modal){
        a7Modal.style.display = 'none';
    }
}

// functies button3
function openpana(){
    panaModal.style.display = 'block';
}
function sluitpanaModal(){
    panaModal.style.display = 'none';
}
function outsideClickpana(e){
    if(e.target == panaModal){
        panaModal.style.display = 'none';
    }
}
