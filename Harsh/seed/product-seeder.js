/*var Product =require('../model/product');

var mongoose= require('mongoose');
mongoose.connect('localhost:27017/shopping');

var product=[
     new Product({
imagePath :'https://www.google.com.au/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Ffemale-model-walking-girl-legs-pants-shoes-path-road-depth-of-field-hair-coat-jacket-hands-pockets-ocean-horizon-coast-sky-brown-woodchips-tree-trail-soil-recreation-race-vehicle-adventure-cycling-plant-physical-exercise-grass-individual-sports-1418478.jpg&imgrefurl=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1418478&docid=QcdlB6Ipdzrw0M&tbnid=pUqkkYL7LkSsZM%3A&vet=10ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA..i&w=5760&h=3840&bih=816&biw=855&q=image%20path%20of%20girl%20picture&ved=0ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA&iact=mrc&uact=8',
title: 'Gothic Video Game',
description:'Awesome Game!!',
price:10
}),
new Product({
    imagePath :'https://www.google.com.au/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Ffemale-model-walking-girl-legs-pants-shoes-path-road-depth-of-field-hair-coat-jacket-hands-pockets-ocean-horizon-coast-sky-brown-woodchips-tree-trail-soil-recreation-race-vehicle-adventure-cycling-plant-physical-exercise-grass-individual-sports-1418478.jpg&imgrefurl=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1418478&docid=QcdlB6Ipdzrw0M&tbnid=pUqkkYL7LkSsZM%3A&vet=10ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA..i&w=5760&h=3840&bih=816&biw=855&q=image%20path%20of%20girl%20picture&ved=0ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA&iact=mrc&uact=8',
title: 'Gothic Video Game',
description:'Awesome Game!!',
price:10
}),
new Product({
    imagePath :'https://www.google.com.au/imgres?imgurl=https%3A%2F%2Fget.pxhere.com%2Fphoto%2Ffemale-model-walking-girl-legs-pants-shoes-path-road-depth-of-field-hair-coat-jacket-hands-pockets-ocean-horizon-coast-sky-brown-woodchips-tree-trail-soil-recreation-race-vehicle-adventure-cycling-plant-physical-exercise-grass-individual-sports-1418478.jpg&imgrefurl=https%3A%2F%2Fpxhere.com%2Fen%2Fphoto%2F1418478&docid=QcdlB6Ipdzrw0M&tbnid=pUqkkYL7LkSsZM%3A&vet=10ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA..i&w=5760&h=3840&bih=816&biw=855&q=image%20path%20of%20girl%20picture&ved=0ahUKEwjche6K667bAhWDNJQKHd7TCYgQMwhDKAQwBA&iact=mrc&uact=8',
title: 'Gothic Video Game',
description:'Awesome Game!!',
price:10
}),
];
var done=0; //helper variab;e
for (var i =0;i<products.length;i++){
    products[i].save(function(err,resuts){//start loop and then save then disconnect
    done++
    if(done==products.length){
        exit();
    }
    });
}
function exit(){
    mongoose.disconnect();

}
*/