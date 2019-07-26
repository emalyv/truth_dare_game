var arrayTruth = [
  "Tell me a secret you've never told anyone else.",
  "What is your biggest fear?",
  "What's your biggest pet peeve?",
  "What color do you hate and why?",
  "What is something you have always wanted to do but you never have?",
  "Who is your celebrity crush?",
  "What was the last tv show or movie that made you cry?",
  "What is a quote you live by?",
  "What is your all time favorite tv show?",
]

var arrayDare = [
  "Chug a cup of coffe.",
  "Show me a picture of your favorite person.",
  "Army crawl past one person.",
  "Walk up to a group of people and act like you're with their group.",
  "Chug an entire bottle of water in 30 seconds.",
  "Call the third to last contact in your phone and hold a conversation for one minute.",
]

var truthButton = $('.truthbutton');
truthButton.on('click', showTruth);
var truthContainer =$('.truthcontainer')

function showTruth(){
  // truthContainer.text(arrayTruth[2]);
  truthContainer.append(`<h1> ${arrayTruth[4]}</h1>`);
}

var dareButton = $('.darebutton');
dareButton.on('click', showDare);
var dareContainer = $('.darecontainer');

function showDare(){
  dareContainer.append(`<h1> ${arrayDare[4]}</h1>`)
}

var submit = $('.submit');
var secretContainer = $('.secretContainer');
var secretPasscode = $('.secretPasscode');


submit.on('click', checkCode);

function checkCode(){
  if (secretPasscode.val() === "tech,sis"){
  secretContainer.text(`You have cracked the code!`)
  }
  else {
    secretContainer.append(`<h3> Sorry dude, try again. </h3><img class="tryagain" src="https://media0.giphy.com/media/a5MbLFYonqYgg/giphy.gif">`)
  }


}
