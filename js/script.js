var songs = [
    "Boo'd Up",
    "Nice For What",
    "Universe"
];

var artists = [
    "Ella Mai",
    "Drake",
    "EXO"
];

var images = [
    "https://rnbmain-thisisrnb.netdna-ssl.com/wp-content/uploads/2018/04/Ella-Mai-Bood-Up-Vid.jpg;maxWidth=222",
    "https://i.ytimg.com/vi/KRaPykuwCiw/maxresdefault.jpg;maxHeight=145;maxWidth=222",
    "https://kpopcolorcodedlyrics.files.wordpress.com/2012/01/exo.jpg?w=809;maxHeight=145;maxWidth=222"
];

var links = [
    "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
    "https://www.youtube.com/watch?v=KRaPykuwCiw",
    "https://www.youtube.com/watch?v=leu-cTvMWTA"
];

var lengths = [
    241,
    201,
    289
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();
