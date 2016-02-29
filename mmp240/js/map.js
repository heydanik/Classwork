function init(){

var mapYNOptions = {
	center: new google.maps.LatLng(46.482526, 30.72331),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    zoom: 10,
    //Changing controls
        zoomControlOptions:{
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions:{
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: google.maps.ControlPosition.TOP_RIGHT
        }, 
        scaleControl: true,
        streetViewControl:true,
        //Styling
        styles:[
            {
                stylers:[
                    {hue: '#5C0B2D'},
                    {saturation: -50}
            ]
            }, {
                featureType: 'neighborhood', 
                elementType: 'labels', 
                stylers:[
                    {visibility: 'on'}
                ]
            },{
                featureType: 'water', 
                elementType: 'geometry',
                stylers: [
                    {hue: '#5aa2D5'},
                    {saturation: 100}
                ]
            },{
                featureType: 'transit', 
                elementType: 'labels',
                stylers: [
                    {visibility: 'off'},
                    {hue: '#B4c54A'},
                    {saturation: 50}
                ]
            }
        ]

};



 var YN;
 YN = new google.maps.Map(document.getElementById('mapYN'),mapYNOptions);
/*
 var LI;
 LI = new google.maps.Map(document.getElementById('mapYN'),mapYNOptions);
*/


//Marker
    var pinLocation = new google.maps.LatLng(40.729444, -73.988137);
    var liPosition = new google.maps.Marker({
        position: pinLocation,                        
        map: YN,
        icon: 'images/mapIcon.png',                                                           
        });
 


    //Info box
    var infoContentLI = '<p>Cha An<br>230 E. 9th St.</p>';
    var infoBoxLI = new google.maps.InfoWindow({
      content: infoContentLI
    });
    google.maps.event.addListener(liPosition, 'click', function() {
        infoBoxLI.open(YN,liPosition);
    });
    
    var infoContentXG = '<p>Whole Foods<br>95 Houston St.</p>';
    var infoBoxXG = new google.maps.InfoWindow({
      content: infoContentXG
    });
    google.maps.event.addListener(xgPosition, 'click', function() {
        infoBoxXG.open(YN,xgPosition);
    });

    var infoContentDL = '<p>The Puck Building<br>295 Lafayette St.</p>';
    var infoBoxDL = new google.maps.InfoWindow({
      content: infoContentDL
    });
    google.maps.event.addListener(dlPosition, 'click', function() {
        infoBoxDL.open(YN,dlPosition);
    });

    var infoContentPE = '<p>Tasting Table Test Kitchen<br>450 Broome St.</p>';
    var infoBoxPE = new google.maps.InfoWindow({
      content: infoContentPE
    });
    google.maps.event.addListener(pePosition, 'click', function() {
        infoBoxPE.open(YN,pePosition);
    });






}

function loadScript () {
var script = document.createElement('script');
script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
document.body.appendChild(script);
}

window.onload = loadScript();