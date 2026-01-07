function sendSOS(){
 if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(pos=>{
   let lat = pos.coords.latitude;
   let lon = pos.coords.longitude;

   document.getElementById("location").innerHTML =
   "📍 Location: https://maps.google.com/?q="+lat+","+lon;

   alert("🚨 SOS SENT!\nLocation shared");
  });
 }else{
  alert("Location not supported");
 }
}
