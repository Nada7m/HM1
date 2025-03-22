function tasbih (){
var count = parseInt(document.getElementById('num').innerHTML)+1;
document.getElementById('num').innerHTML = count;
}
function resit (){
document.getElementById('num').innerHTML = 0;
}
const duaa = [ "اللهم بلغنا رمضان", "اللهم انك عفو تحب العفو فاعفو عنا", 
 "اللهم اغفر لنا وتُب علينا",
 "اللهم ارزقني حبك وحب كل عملٍ يقربني إليك"];
 function nextDuaa() {
	 duaa.push(duaa[0]);
document.getElementById("duaad").innerHTML = duaa.shift();	
 }
 const idea = [ "صدقة سقيا الماء", "ختم القرآن الكريم", 
 "التبرع بوجبات الإفطار",
 "صلة الرّحم والإحسان للناس"];
 function nextidea() {
	 idea.push(idea[0]);
document.getElementById("idea").innerHTML = idea.shift();	
 }
const mealIdeas = [
  "تناول الشوفان مع الحليب والتمر",
  "سلطة الفواكه مع الزبادي",
  "شوربة العدس مع خبز القمح الكامل",
  "سمبوسة مشوية مع حشوة دجاج وخضار"
];

function nextMealIdea() {
  mealIdeas.push(mealIdeas[0]);
  document.getElementById("mealIdea").innerHTML = mealIdeas.shift();
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
