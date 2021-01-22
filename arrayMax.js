var marks = [43,22,45,25,55,66,98,12,23,11,44,56];
var max = marks[0];
for(var i = 0;i<marks.length;i++){
    var element = marks[i];
    if(element>max){
        max = element;
    }
}
console.log(max);