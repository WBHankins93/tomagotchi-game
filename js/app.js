//-----Name-------

//----Tamagotchi class
class tamagotchi {
  constructor(hunger, sleepiness, boredom, age) {
    this.hunger = 10;
    this.sleepiness = 10;
    this.boredom = 10;
    this.age = 0;
    this.name = name;
  }
};

//------BUTTON ACTIVITY------

//---HUNGER
$('#feed').on('click', () => {
  let $eat = $('#hunger').val();
  $eat++;
  $('#hunger').val($eat)
  console.log($eat);
})

//-----SLEEPINESS
$('#turnOff').on('click', () => {
  let $lights = $('#sleepiness').val();
  $lights++;
  $('#sleepiness').val($lights)
  console.log($lights);
})

//----BOREDOM
$('#play').on('click', () => {
  let $excercise = $('#boredom').val();
  $excercise++;
  $('#boredom').val($excercise)
  console.log($excercise);
})


//------Register name on screen after input box------
const submitButton = $(".button").click(function () {
	let userName = $('#userNameInput').val();
	$('#userDisplay').html(userName);
});


//----Lights function

const lightsOff = () => {
  $().css({
    'background-color': 'grey'
  })
}

//------Timer Function----

const setTimer = () => {
  const timer = setInterval(() => {
    time--;

    if(tamagotchi.age % 10 === 0) {
      age += 10;

      console.log(tomagotchi.age);
    }
  })
}

//------POSSIBLE DEATH-----
