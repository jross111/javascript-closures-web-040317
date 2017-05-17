const app = "I don't do much."

function fatBastard(meal){
  function whatsForDinner(){
    if (meal === 'mini-me'){
      console.log('The wee man is in my Belly!')
    } else {
      console.log(`I'm eatin a bit of ${meal}! Burp.`)
    }
  }
  return whatsForDinner

}

const whatsForDinner = fatBastard('kobe beef');


function raspyDoorGuy() {
  const password = 'yarr'; // password is a local variable created by raspyDoorGuy()

  function givePassword(givenPassword) { // givePassword() is the inner function, a closure
    if (givenPassword === password) { // givePassword() uses variable declared in the parent function
      console.log('Ye may enter.');
    } else {
      console.log('Begone, landlubber!');
    }
  }

  return {
    givePassword
  };
}
