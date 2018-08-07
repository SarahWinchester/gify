$(document).ready(function () {
    var dibujarGif = function (data) {
        var gif= "";
        var url= "";
        data.forEach(function(element) {
            gif = element.images.downsized_large.url;
            url = element.bitly_gif_url;
            $("#elementos").append(armarTemplate(gif,url));
        });
    }

const armarTemplate = function(gif, url){
    let t = "<div class = 'elemento'><img src ='" + gif + '"/><a href = "' + url + '"> Ver más</a></div>"';
    return t;
}
let ajaxGif = function(gif){
    $.ajax({
        url: 'https://api.giphy.com/v1/gifs/search',
        type : 'GET',
        datatype: 'json',
        data :{
            q:gif,
            api_key: 'dc6zaTOxFJmzC'
        }
    }).done(function(response){
        console.log(response);
        dibujarGif(response.data);
    }).fail(function(){
        console.log("error");
    });
}
$("#buscar-gif").click(function(event){
    console.log("Entro");
    $("#elementos").empty();
    let gif = $("#gif-text").val();
    ajaxGif(gif);
});
});