(function ($) {
  $('.form-guest-search').on('submit', function (event) {
    document.getElementById('defaultOpen').click();
    const $guestspotsContainer = $('.guestspots-container-js');
    const $guestspotsMessage = $('.guestspots-message');
    event.preventDefault();
    let data = {
      location: $('#location').val(),
      startDate: $('#start-date').val(),
      finishDate: $('#finish-date').val(),
    }
    let locationLow = data.location.toLowerCase();
    let startDateChoosen = new Date(data.startDate);
    let finishDateChoosen = new Date(data.finishDate);
    $.ajax({
        method: 'GET',
        url: api_vars.root_url + 'wp/v2/guestspots-api', // eslint-disable-line
        data: data,
        beforeSend: function (xhr) {
          xhr.setRequestHeader('X-WP-Nonce', api_vars.nonce); // eslint-disable-line
        }
      })
      .done(function (response) {
        event.preventDefault();
        $guestspotsContainer.empty();
        $guestspotsMessage.empty();
        let j = 0;
        for (let i = 0; i < response.length; i++) {
          let locationJson = response[i].location.toLowerCase();
          let startDateJson = new Date(response[i].start_date);
          let finishDateJson = new Date(response[i].finish_date);
          let image = response[i].image;
          let title = response[i].title.rendered;
          let link = response[i].link;
          let objectLocation = response[i].location
          if (locationJson.includes(locationLow)) {
            if (startDateChoosen >= startDateJson && finishDateChoosen <= finishDateJson) {
              $guestspotsMessage.html(`<div class='guestspot-after-search'>
                                            <div class='guest-container-search'>
                                            <img src='${image}' />
                                            <div class='studio-information'>
                                              <a href='${link}'>
                                              <h2>${title}</h2>
                                              </a>
                                              <p>${objectLocation}</p>
                                            </div>
                                            </div>
                                        </div>`)
            } else {
              $guestspotsMessage.html('<p class="sorry-msg">Sorry, no guestspots currently available for these dates..</p>');
            }
          } else {
            j++;

          }
          if (j == response.length) {
            $guestspotsMessage.html('<p class="sorry-msg">Sorry, no guestspots currently available in this location..</p>');
          }
        }
      })
      .fail(function () {
        $guestspotsContainer.empty();
        $guestspotsContainer.html('Something went wrong..')
      });
  })


  // Featured Artist Part
  const $widgetTitle = $('.widget-title');
  const $widgetTitleValue = $widgetTitle.text()
  const $formatWidgetTitle = $widgetTitleValue.toLowerCase();
  const $finalArtistName = $formatWidgetTitle.split(' ').join('-');
  const _href = $('.featured-artist-link').attr("href");
  $(".featured-artist-link").attr("href", _href + $finalArtistName);
})(jQuery);

// Global search - tabs 

function openSearch(evt, searchName) { // eslint-disable-line
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' active', '');
  }
  document.getElementById(searchName).style.display = 'block';
  evt.currentTarget.className += ' active';
}

document.getElementById('defaultOpen').click();