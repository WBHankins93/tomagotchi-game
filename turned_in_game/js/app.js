//-----Name-------
let time = 10;
//----Tamagotchi class
class tamagotchi {
  constructor(hunger, sleepiness, boredom, age, name) {
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
	const userName = $('#userNameInput').val();
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
  const timer = setInterval(function() {
    console.log(time);
    time--;

    let $excercise = $('#boredom').val();
    $excercise--;
    $('#boredom').val($excercise)

    let $eat = $('#hunger').val();
    $eat--;
    $('#hunger').val($eat)

    let $lights = $('#sleepiness').val();
    $lights--;
    $('#sleepiness').val($lights)

    let $age = $('#oldie').val();
    $age+=10;
    $('#oldie').val($age)

    if ($age === 100) {
      console.log('YOU DIED OF OLD AGE')
    }



    if(time === 0) {
      clearInterval(timer);
      console.log('GAME OVER');
    }
  }, 1000);
};


$('.startBtn').on('click', () => {
  setTimer();
})
//------POSSIBLE DEATH-----
