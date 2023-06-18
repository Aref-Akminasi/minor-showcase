// Hover state on Thijs' building
document.getElementById('thijsBuilding').onmouseenter = function() {
    document.getElementById('thijsPlein').style.opacity = "1.0";
    document.getElementById('thijsGloed').style.opacity = "1.0";
}

document.getElementById('thijsBuilding').onmouseleave = function() {
    document.getElementById('thijsPlein').style.opacity = "0.0";
    document.getElementById('thijsGloed').style.opacity = "0.0";
}

//Hover state on Aref's building
document.getElementById('arefBuilding').onmouseenter = function() {
    document.getElementById('arefHof').style.opacity = "1.0";
    document.getElementById('arefGloed').style.opacity = "1.0";
}

document.getElementById('arefBuilding').onmouseleave = function() {
    document.getElementById('arefHof').style.opacity = "0.0";
    document.getElementById('arefGloed').style.opacity = "0.0";
}

//Hover state on Maartje's building
document.getElementById('maartjeBuilding').onmouseenter = function() {
    document.getElementById('maartjeLaan').style.opacity = "1.0";
    document.getElementById('maartjeGloed').style.opacity = "1.0";
}

document.getElementById('maartjeBuilding').onmouseleave = function() {
    document.getElementById('maartjeLaan').style.opacity = "0.0";
    document.getElementById('maartjeGloed').style.opacity = "0.0";
}

//Hover state on Tom's building
document.getElementById('tomBuilding').onmouseenter = function() {
    document.getElementById('tomStraat').style.opacity = "1.0";
    document.getElementById('tomGloed').style.opacity = "1.0";
}

document.getElementById('tomBuilding').onmouseleave = function() {
    document.getElementById('tomStraat').style.opacity = "0.0";
    document.getElementById('tomGloed').style.opacity = "0.0";
}

//Hover state on Maud's building
document.getElementById('maudBuilding').onmouseenter = function() {
    document.getElementById('maudGracht').style.opacity = "1.0";
    document.getElementById('maudGloed').style.opacity = "1.0";
}

document.getElementById('maudBuilding').onmouseleave = function() {
    document.getElementById('maudGracht').style.opacity = "0.0";
    document.getElementById('maudGloed').style.opacity = "0.0";
}

// Cloud function
  /*setInterval(function () {
      let random = Math.random();
        if (0.1 > random > 0) {
            document.getElementById('townCloud1').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud1').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.2 > random > 0.1) {
            document.getElementById('townCloud2').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud2').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.3 > random > 0.2) {
            document.getElementById('townCloud3').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud3').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.4 > random > 0.3) {
            document.getElementById('townCloud4').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud4').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.5 > random > 0.4) {
            document.getElementById('townCloud5').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud5').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.6 > random > 0.5) {
            document.getElementById('townCloud6').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud6').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.7 > random > 0.6) {
            document.getElementById('townCloud7').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud7').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.8 > random > 0.7) {
            document.getElementById('townCloud8').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud8').classList.remove('cloudAnimation');
            }, 60000);
        } else if (0.9 > random > 0.8) {
            document.getElementById('townCloud9').classList.add('cloudAnimation');
            setInterval(function() {
                document.getElementById('townCloud9').classList.remove('cloudAnimation');
            }, 60000);
        }
    
    
}, 12000);*/

let cloudArray = ['townCloud1', 'townCloud2', 'townCloud3', 'townCloud4', 'townCloud5', 'townCloud6', 'townCloud7', 'townCloud8', 'townCloud9'];

setInterval(function() {
    let random = Math.floor(Math.random() * cloudArray.length);
    let currentCloud = cloudArray[random];
    if(cloudArray.length > 1) {
        document.getElementById(currentCloud).classList.add('cloudAnimation');
    }
    cloudArray.splice(random, 1);
}, 10000)

