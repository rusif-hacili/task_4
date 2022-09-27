
var dogru = 0;
var yanlish = 0;
var cehd = 5;
var uduzdu = 0;
var uddu = 0;

const qalib = document.querySelector('#wins');
const meglub = document.querySelector('#losses');
const shans = document.querySelector('#cehd');
const random = document.querySelector('#random');

var obj = {
    cehdlerinSayi: function () {
        cehd--
        shans.innerHTML = cehd


    },

    dogruNetice: function () {
        console.log('dogru cavab');
        dogru++;
        qalib.innerHTML = uddu;


    },
    yanlishNetice: function () {
        console.log('yanlis cavab');
        yanlish++;
        meglub.innerHTML = uduzdu;

    }
}

window.onkeyup = function (e) {
    if (cehd <= 0) {
        alert('oyun bitdi!!!');
        if (dogru > yanlish) {
            var a = 0;
            alert('qalibsiniz!!');
            uddu++
        } else {
            alert('Meglub oldunuz!!');
            uduzdu++;

        }

        dogru = 0;
        yanlish = 0;
        cehd = 5;
    }
    obj.cehdlerinSayi();
    var reqem = Math.ceil((Math.random() * 3));
    console.log('random:', reqem)
    random.innerHTML = e.key

    if (parseInt(e.key) === reqem) {
        obj.dogruNetice();
    } else {
        obj.yanlishNetice();
    }

}

