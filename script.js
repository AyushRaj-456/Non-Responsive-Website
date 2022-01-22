    
    function alertsub(){
        alert("Please! Check Your Internet Connection & Try again!!")
    }
    
    function showmore(){
        alert("For this facility, visit my profile!!")
    }
    
    
// Initialize and add the mapv
function initMap() {
  // The location of Uluru
  var uluru = {lat: 26.119, lng: 85.352};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
    
        const menubar = document.querySelector('.menubar');
        const menu = document.querySelector('.menu');
        const exitnav = document.querySelector('.exitnav');
        const home = document.querySelector('.homea');
        const conti = document.querySelector('.continfo');
        
        /* contact*/
       /* const namec = document.querySelector('.namec');
        const mailc = document.querySelector('.mailc');
        const subc = document.querySelector('.subc');
        const msgc = document.querySelector('.msgc');
        */
        
        /* nav */
        
        
        
    /* switchdiv */
        
        
        menubar.onclick = function(){
          menu.style.width="300px"
          menu.style.left = "5%"
          
        }
        exitnav.onclick = function(){
            menu.style.width="0px"
        }
        home.onclick = function(){
            menu.style.width="0px"
        }