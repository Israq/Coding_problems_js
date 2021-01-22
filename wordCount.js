var speech = "Israq";
var count = 0 ;
for(var i = 0;i<speech.length; i++){
    var char = speech[i];
    if(char=" "){
        count++
    }
}

console.log(count);