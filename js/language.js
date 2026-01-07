function changeLanguage(lang){
  if(lang==="ta"){
    title.innerText="பெண்கள் பாதுகாப்பு சட்டங்கள்";
    rule1.innerText="எப்போதும் எச்சரிக்கையாக இருங்கள்";
    rule2.innerText="உங்கள் இருப்பிடத்தை பகிருங்கள்";
  } else if(lang==="hi"){
    title.innerText="महिला सुरक्षा नियम";
    rule1.innerText="हमेशा सतर्क रहें";
    rule2.innerText="अपना स्थान साझा करें";
  } else {
    title.innerText="Women Safety Rules";
    rule1.innerText="Always stay alert";
    rule2.innerText="Share your location";
  }
}
