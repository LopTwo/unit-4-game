var random_result;
var lost;
var win;

random_result = Math.floor(Math.random() * 69 ) + 30;

    


$("#result").html('Random Result: ' + random_result);

for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
    console.log(random);

    
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": random
    });

    $(".crystals").append(crystal);



}