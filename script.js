let images = [
    "school.jpg",
    "school.jpg",
    "school.jpg"
];

let i = 0;

setInterval(function(){

    i++;

    if(i==images.length){
        i=0;
    }

    document.getElementById("slide").src=images[i];

},3000);
alert("Welcome to Mithila Public School");