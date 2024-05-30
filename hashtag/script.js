function hashtag(){
  var metin=document.getElementById("metin").value;
  
  var kelimeler=metin.split(" ")

  var sonuc=document.getElementById("sonuc")

  sonuc.innerHTML=""
 for(kelime of kelimeler){
    if(kelime.startsWith("#")){
        var h=document.createElement("a")
        h.className="btn btn-sm btn-light mx-1"
        h.innerHTML=kelime
        sonuc.appendChild(h)

    }
 }
  
  
}