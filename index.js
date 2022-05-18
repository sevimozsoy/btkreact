var kullanicilar = [
  { email: "sevimozsoy", sifre: "1234" },
  { email: "sevim", sifre: "1234" },
];

var tweetler = [
  { email: "sevimozsoy", tweet: "çok sıkıcı" },
  { email: "sevimozsoy", tweet: "çok sıkıcı2" },
  { email: "sevim", tweet: "sıkıcı" },
];

var email = prompt("Email?");
var sifre = prompt("sifre?");

function kullaniciVarMi(email, sifre) {
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email == email && kullanicilar[i].sifre == sifre){
            return true;
        }
    }
    return false;
}

function giris() {
  if (
    (email == kullanicilar[0].email && sifre == kullanicilar[0].sifre) ||
    (email == kullanicilar[1].email && sifre == kullanicilar[1].sifre)
  ) {
    console.log(tweetler);
  } else {
    console.log("Bilgiler yanlış.");
  }
}
