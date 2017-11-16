				
					function init(){
					 var info_window = new google.maps.InfoWindow();

					 // menentukan level zoom
					 var zoom = 16;

					 // menentikan latitude dan longitude
					 var pos = new google.maps.LatLng(-7.608775, 112.488554);

					 // menentukan opsi peta
					 var options = {
					  'center': pos,
					  'zoom': zoom,
					  'mapTypeId': google.maps.MapTypeId.ROADMAP
					 };

					 // membuat peta
					 var map = new google.maps.Map(document.getElementById('maps'), options);
					 info_window = new google.maps.InfoWindow({
					  'content': 'loading...'
					 });

					 // membuat marker
					 var marker = new google.maps.Marker({
					  position: pos,
					  title: 'You are here',
					  animation: google.maps.Animation.BOUNCE
					 });

					 // set marker di peta
					 marker.setMap(map);

					 // membuat event ketika marker di click
					 google.maps.event.addListener(marker, 'click', function(){
					  info_window.setContent('<b>'+ this.title +'</b>');
					  info_window.open(map, this);
					 });
					}
					google.maps.event.addDomListener(window, 'load', init);