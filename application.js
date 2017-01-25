var form = $('#search-film'),
    search_field = $('#search-film-input'),
    results = $('#results');

form.on('submit', function(e) {
  e.preventDefault();

  var url_search = 'http://www.omdbapi.com/?s=' + search_field.val();
  $.get(url_search, function(response) {
    results.empty();
    $.each(response.Search, function(index, item) {
      $('<div class="item" />')
        .append($('<img />').attr('src', item.Poster))
        .append($('<h4 />').html(item.Title))
        .append($('<h4 />').html(item.Year))
        .append($('<h4 />').html(item.Type))
        .append($('<h4 />').html(item.imdbID))
        .appendTo(results);
      $('#results').append("<br clear='all'>");
      $('body').addClass('search');
    });
  });
});
