function getParagraph1(){
    var inputs1 = [];
    for(var i = 1; i <=6; i++){
        inputs1.push(document.getElementById("para1_input_box_" + i).value);
        inputs1.join(".");
        document.getElementById("showParagraph1").innerHTML = inputs1.join(".");
    }
}

function getParagraph2(){
    var inputs2 = [];
    for(var i = 1; i <=6; i++){
        inputs2.push(document.getElementById("para2_input_box_" + i).value);
        inputs2.join(".");
        document.getElementById("showParagraph2").innerHTML = inputs2.join(".");
    }
}