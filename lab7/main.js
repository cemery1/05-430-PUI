var picts = ["doge1.jpg", "doge2.jpg", "doge3.jpeg", "doge4.jpg"];
var names = ["SuperBoi", "CuddlyBoiz", "HappyBoi", "AngeryBoi"];
var ages = [1, 3, 5, 4, 6];

function Doge(pic, name, age) {
    this.pic = pic;
    this.name = name;
    this.age = age;
};

$(document).ready(() => {
    console.log("ready");

    var animal = new Doge(picts[Math.floor(Math.random()*picts.length)],
                          names[Math.floor(Math.random()*names.length)],
                          ages[Math.floor(Math.random()*ages.length)]);
    console.log(animal);
    $("#animal-img").attr("src", animal.pic);
    $("#animal-name").html(animal.name);
    $("#animal-age").html(animal.age);
});