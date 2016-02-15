$(".popup, .overlay").click(function(){
    $(".overlay, .popup").fadeOut();
});

var cards = null;
var homeOfCard = null;
var currentDeck = null;
var startTimeout = null;
var reloadTimeout = null;

var homesArr = [
    [21, 1, 2, 35, 32, 22, 50, 36, 64],
    [3, 4, 60, 23, 51, 37, 65],
    [5, 6, 46, 24, 52, 38, 66],
    [7, 74, 75, 25, 53, 39, 67],
    [8, 33, 26, 54, 40, 68],
    [9, 10, 61, 27, 55, 41, 69],
    [70, 42, 56, 28, 48, 47, 12, 11],
    [71, 43, 57, 29, 76, 14, 13],
    [72, 44, 58, 30, 34, 15],
    [73, 45, 59, 31, 63, 62, 16],
    [49, 18, 17],
    [77, 0, 20, 19]
];

function load(deck){

    $("#main-card, .small-card").removeClass(currentDeck);
    $("#main-card").removeClass("flip");

    currentDeck = deck;
    cards = cardsRiderWaite;

    clearTimeout(startTimeout);
    clearTimeout(reloadTimeout);

    $("#main-card, .small-card").addClass(deck);
    $(".front-img").attr("src", "img/" + deck + "/back.jpg");

    if(homeOfCard){
        $("#" + homeOfCard).removeClass('active-home');
    }

    $("#card-name").empty();
    $(".spinner").fadeOut();
    $("#main-card").removeClass("reload");
    $(".small-card").empty();
    $(".card-description p").empty();

    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"].forEach(function(home, index){
        var imgContainer = $("<div></div>");
        homesArr[index].forEach(function(card){

            $("<img>").attr("src", "img/" + deck + "/" + card + ".jpg").appendTo(imgContainer);

        });

        $("#" + home + " div").empty();
        $("#" + home).append(imgContainer);
    });

}

load("rider-waite");

$(".cover-img").click(function(){
    clearTimeout(reloadTimeout);

    $(".spinner").fadeIn();
    $("#" + homeOfCard).removeClass('active-home');

    reloadTimeout =
    setTimeout(function(){
        $("#card-name").empty();
        $(".spinner").fadeOut();
        $("#main-card").removeClass("flip");
        $(".front-img").attr("src", "img/" + currentDeck + "/back.jpg");
        $("#main-card").toggleClass("reload");
        $(".small-card").empty();
        $(".card-description p").empty();
    }, 300);
});

$(".front-img").click(function(){
    clearTimeout(startTimeout);

    var card = cards[getRandom()];
    homeOfCard = card.home;

    $(".spinner").fadeIn();

    startTimeout =
    setTimeout(function(){
        $(".spinner").fadeOut();
        $("#card-name").empty().append(card.name);
        if(currentDeck === "rider-waite" && Math.floor(Math.random()*2)) {
            $("#main-card").toggleClass("flip");
        }
        $("#main-card").addClass("reload");
        $(".front-img").attr("src", "img/" + currentDeck + "/" + card.fileName);
        $("#card-name").fadeIn();
        $("#" + homeOfCard).toggleClass('active-home');
        $("<img>").attr("src", "img/" + currentDeck + "/" + card.fileName).appendTo($(".small-card"));
        $(".card-description").append(card.descr);

    }, 2500);
});

function getRandom(){
    // return 63;
    // return Math.floor(Math.random()*22);
    return Math.floor(Math.random()*78);
}
