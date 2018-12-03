var songs = [
    "24 Karat Magic",
    "Nice For What",
    "Universe"
];

var artists = [
    "Bruno Mars",
    "Drake",
    "EXO"
];

var images = [
    "https://consequenceofsound.files.wordpress.com/2016/10/screen-shot-2016-10-06-at-11-17-15-pm.png?w=380&h=380&crop=1;maxHeight=145;maxWidth=222",
    "https://i.ytimg.com/vi/KRaPykuwCiw/maxresdefault.jpg;maxHeight=145;maxWidth=222",
    "https://kpopcolorcodedlyrics.files.wordpress.com/2012/01/exo.jpg?w=809;maxHeight=145;maxWidth=222"
];

var links = [
    "https://www.youtube.com/watch?v=UqyT8IEBkvY",
    "https://www.youtube.com/watch?v=KRaPykuwCiw",
    "https://www.youtube.com/watch?v=leu-cTvMWTA"
];

var lengths = [
    227,
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
