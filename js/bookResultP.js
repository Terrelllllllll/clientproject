$('.bookBtn').click(function(){ 
  
var searchTerm = $('input').val();
var result = "https://www.googleapis.com/books/v1/volumes?q="+ searchTerm;
  console.log(result);
fetch(result)
.then(function(response) {
return response.json();
})
.then(function(data) {
    var rand = Math.floor(Math.random() * 25);
  var book_url = data.data[rand].images.original.url;
  console.log(book_url);
  $('body').append('<img src=' + book_url + '>');
})
});