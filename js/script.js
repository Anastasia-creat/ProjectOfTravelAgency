var modal = document.getElementById('myModal');

//var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];


// btn.onclick = function() {
// modal.style.display = "block";
// }

span.onclick = function() {
modal.style.display = "none";
}


window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

let bannerList=document.querySelector(".banner__list");
var imgCountries = document.querySelectorAll(".img-country");

for (let elem of imgCountries){
elem.addEventListener("click",(e)=>{
let numCountry = e.target.getAttribute('data-country');
console.log(numCountry);
bannerList.innerHTML = "";

let imgsCountry = imgs.filter((elem)=>{
if(elem.idCountry==numCountry) return true;
return false;
});
imgsCountry.forEach((elem)=>{
let itemBanner = document.createElement('a');
itemBanner.classList.add('banner__item');
itemBanner.setAttribute('href',elem.pathUrl);
itemBanner.innerHTML = '<img src="'+elem.pathImg +'" alt=""></img>';
bannerList.append(itemBanner);
});

modal.style.display = "block";

})



}

/* Массив для слайдера туров */

let imgs = [
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Аделаида/Аделаида.jpg",
pathUrl:"places/page__adelaida.html"
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Алис-Спринг/Алис-Спринг.jpg",
pathUrl:"places/Alis-Spring.html"
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Брисбен/Брисбен.jpg",
pathUrl:"places/Brisben.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Голд-Кост/Голд-Кост.jpg",
pathUrl:"places/Gold-Kost.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Канберра/Канберра.jpg",
pathUrl:"places/Kanbera.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Кэрнс/Кэрнс.jpg",
pathUrl:"places/Karns.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Мельбурн/Мельбурн.jpg",
pathUrl:"places/Melbyrn.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Перт/Перт.jpg",
pathUrl:"places/Pert.html",
},
{
idCountry:1,
nameCountry:"Австралия",
pathImg:"img/toursOfCountry/Австралия/Сидней/Сидней.jpg",
pathUrl:"places/Sidney.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Аликанте/Аликанте.jpg",
pathUrl:"places/Alikants.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Барселона/Барселона.jpg",
pathUrl:"places/Barselona.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Бильбао/Бильбао.jpg",
pathUrl:"places/Bilbao.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Валенсия/Валенсия.jpeg",
pathUrl:"places/Valensia.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Гранда/Гранада.jpg",
pathUrl:"places/Granada.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Мадрид/Мадрид.jpg",
pathUrl:"places/Madrid.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Малага/Малага.jpg",
pathUrl:"places/Malaga.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Севилья/Севилья.jpg",
pathUrl:"places/Sevilia.html",
},
{
idCountry:2,
nameCountry:"Испания",
pathImg:"img/toursOfCountry/Испания/Толедо/Толедо.jpg",
pathUrl:"places/Toledo.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Гуанчжоу/Гуанчжоу.jpg",
pathUrl:"places/Guanghou.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Гуйлинь/Гуйлинь.jpg",
pathUrl:"places/Guilin.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Лхаса/Лхаса.jpg",
pathUrl:"places/Lahasa.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Пекин/Пекин.jpg",
pathUrl:"places/Pekin.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Санья/Санья.jpg",
pathUrl:"places/Sania.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Сиань/Сиань.jpg",
pathUrl:"places/Sian.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Урумчи/Урумчи.jpg",
pathUrl:"places/Urumchi.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Ханчжоу/Ханчжоу.jpg",
pathUrl:"places/Hanchjou.html",
},
{
idCountry:3,
nameCountry:"Китай",
pathImg:"img/toursOfCountry/Китай/Шанхай/Шанхай.jpg",
pathUrl:"places/Hanhay.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Владивосток/Владивосток.jpg",
pathUrl:"places/Vladivostok.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Казань/Казань.jpg",
pathUrl:"places/Kazan.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Калининград/Калининград.jpg",
pathUrl:"places/Kaliningrad.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Москва/Москва.jpg",
pathUrl:"places/Moscow.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Нижний Новгород/Нижний Новгород.jpg",
pathUrl:"places/Nizhny-Novgorod.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Санкт-Петербург/Питер.jpg",
pathUrl:"places/Peterburg.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Сергиев Пасад/Сергиев Пасад.jpg",
pathUrl:"places/Sergiev Posad.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Сочи/Сочи.jpg",
pathUrl:"places/Sochi.html",
},
{
idCountry:4,
nameCountry:"Россия",
pathImg:"img/toursOfCountry/Россия/Ярославль/Ярославль.jpg",
pathUrl:"places/Yaroslavl.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Авиньон/Авиньон.jpg",
pathUrl:"places/Avinon.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Анси/Анси.jpg",
pathUrl:"places/Ansi.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Канны/Канны.jpg",
pathUrl:"places/Kanni.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Каркассон/Каркассон.jpg",
pathUrl:"places/Carcassonne.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Лион/Лион.jpg",
pathUrl:"places/Lyon.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Ницца/Ницца.jpg",
pathUrl:"places/Nizza.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Париж/Париж.jpg",
pathUrl:"places/Paris.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Сен-Мало/Сен-Мало.jpg",
pathUrl:"places/Saint-Malo.html",
},
{
idCountry:5,
nameCountry:"Франция",
pathImg:"img/toursOfCountry/Франция/Экс-Ан-Прованс/Экс-Ан-Прованс.jpg",
pathUrl:"places/Aix-en-provence.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Бусан/Бусан.jpg",
pathUrl:"places/Busan.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Инчхон/Инчхон.jpg",
pathUrl:"places/Incheon.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Кенджу/Кенджу.jpg",
pathUrl:"places/Gyeongju.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Сеул/Сеул.jpg",
pathUrl:"places/Seoul.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Сувон/Сувон.jpg",
pathUrl:"places/Suwon.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Тэгу/Тэгу.jpg",
pathUrl:"places/Daegu.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Тэджон/Тэджон.jpg",
pathUrl:"places/Daejeon.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Ульсан/Ульсан.jpg",
pathUrl:"places/Ulsan.html",
},
{
idCountry:6,
nameCountry:"Южная Корея",
pathImg:"img/toursOfCountry/Южная Корея/Чеджу/Чеджу.jpg",
pathUrl:"places/Cheju.html",
}
]