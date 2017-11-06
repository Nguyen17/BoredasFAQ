/*global fetch*/
/*global $*/
// API CALL CODE HERE

var img = document.querySelector("#comic_img");

/* Functions*/
function random_() {
    return Math.floor(Math.random() * 1900);
}




$(".hero button").click(function() {

    var url = "https://cors-anywhere.herokuapp.com/http://xkcd.com/"+ random_() + "/info.0.json";
    fetch(url)
        .then(function(res) {
            console.log(res);
            return res.json()
                .then(function(data) {

                    console.log(data)
                    img.src = data.img;
                })
        })

})


