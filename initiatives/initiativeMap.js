/**
 * Created by jared on 2017-04-12.
 */
function initMap() {
  // initialize the map in the selected div
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: { lat: 49.781670, lng: -124.997490 }
  });
  
  // array of objects to create markers from
  var data = [
    {
      "img":"http://68.media.tumblr.com/70d97069808f5f6e7044c38fb38c4f6a/tumblr_nhzgxmOlxp1sj4tvyo1_1280.jpg",
      "marker_id":"38",
      "lat":"49.781670",
      "lng":"-124.997490",
      "init_id":"1",
      "user_id":"1",
      "init_name":"home of hope",
      "init_date_joined":"1490333344"
    },
    {
      "img":"http://68.media.tumblr.com/70d97069808f5f6e7044c38fb38c4f6a/tumblr_nhzgxmOlxp1sj4tvyo1_1280.jpg",
      "marker_id":"36",
      "lat":"45.781670",
      "lng":"-10.997490",
      "init_id":"2",
      "user_id":"1",
      "init_name":"codenry",
      "init_date_joined":"1490333344"
    }
  ];

  // loop through each of the objects and create a marker for each one
  data.forEach(function(element) {
    
    // html string to populate the info window with
    var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">' + element['init_name'] +'</h1>' +
      '<img src=' + element['img'] + ' style="width:200px;height:228px;">' +
      '<div id="bodyContent">'+
      '<p>Desciption Desciption Desciption Desciption Desciption Desciption Desciption Desciption Desciption</p>'+
      '</div>'+
      '</div>';

    // create info window using the content string
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    
    // create marker
    var marker = new google.maps.Marker({
      position: { lat: parseInt(element['lat']), lng: parseInt(element['lng']) },
      map: map,
      title: element['init_name']
    });
    
    // open infowindow when the given marker is clicked
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

  });
}