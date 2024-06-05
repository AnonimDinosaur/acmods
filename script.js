document.getElementById("Buyn").addEventListener("click", function() {
    // Mostrem o amaguem el nou apartat quan es fa clic al botó
    var nouApartat = document.getElementById("nou-apartat");
    if (nouApartat.style.display === "none") {
        nouApartat.style.display = "block";
    } else {
        nouApartat.style.display = "none";
    }
});


(function(d,h,s){
s=d.createElement('script');
s.async=1;s.src=h;
d.getElementsByTagName('head')[0].appendChild(s);
})(document,'https://script.extellio.com/heartfelt-wisp-1cce1f-netlify-app.min.js');
