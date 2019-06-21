$(document).ready(function () {
  $('.menu-icon').on('click', function () {
    $('nav ul').toggleClass('showing')
  })
})

// Scrolling Effect
/*
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black')
    }

    else {
        $('nav').removeClass('black')
    }
})

$('#myCarousel').carousel({
    interval: 3000,
});*/

http: // themeinnovation.com/demo2/html/build-up/img/home1/service-banner.png
$(document).ready(function () {
  $('.thumbHolder a').click(function (e) {
    e.preventDefault()
    $('#big-image-modal div.spinicon').show()
    $('#big-image-modal .big-image-div').empty()
    $('#big-image-modal div.big-image-div').hide()
    var title = $(this).attr('title')
    $('#big-image-modal .modal-title').html(title)

    var imgSrc = $(this).attr('href')
    var img = $('<img />', {
      src: imgSrc,
      class: 'img-responsive',
      width: '100%',
      onload: 'loadedBigImg()'
    })
    img.appendTo($('#big-image-modal .big-image-div'))
    $('#big-image-modal').modal({show: true})
  })
})

function loadedBigImg () {
  $('#big-image-modal div.spinicon').hide()
  $('#big-image-modal div.big-image-div').fadeIn('slow')
}
