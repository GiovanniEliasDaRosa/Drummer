var Kick1 = document.getElementById('Kick1');
var Kick2 = document.getElementById('Kick2');
var Snare1 = document.getElementById('Snare1');
var Snare2 = document.getElementById('Snare2');
var Hit = document.getElementById('Hit');
var OpenHit = document.getElementById('OpenHit');

var KeyPressedTemplate = document.getElementById('KeyPressedTemplate');
var KeyPressed = document.getElementById('KeyPressed');

Changed(Kick1);
Changed(Kick2);
Changed(Snare1);
Changed(Snare2);
Changed(Hit);
Changed(OpenHit);

document.onkeydown = (e) => {
  // console.log(e);
  const Template = KeyPressedTemplate.content.cloneNode(true);
  const KeyElement = Template.querySelector('.Key');

  console.log(Template);
  console.log(KeyElement);
  console.log(e.key);
  
  // e.getModifierState("CapsLock");
  // console.log(e.getModifierState("CapsLock"));
  
  let = EventKey = e.key.toLowerCase();

  if(e.key == 'a' || e.key == 's' || e.key == 'd' || e.key == 'f' || e.key == 'g' || e.key == 'h'){
    KeyElement.innerText = e.key.toUpperCase();

    KeyPressed.appendChild(KeyElement);
  
    KeyPressed.insertBefore(KeyElement, KeyPressed.childNodes[0])
  }

  setTimeout(() => {
    KeyElement.remove();
  }, 2000);

  if(EventKey == 'a'){
    Animate(Kick1);
    Kick1.currentTime = 0;
    Kick1.play();
  }
  if(EventKey == 's'){
    Animate(Kick2);
    Kick2.currentTime = 0;
    Kick2.play();
  }
  if(EventKey == 'd'){
    Animate(Snare1);
    Snare1.currentTime = 0;
    Snare1.play();
  }
  if(EventKey == 'f'){
    Animate(Snare2);
    Snare2.currentTime = 0;
    Snare2.play();
  }
  if(EventKey == 'g'){
    Animate(Hit);
    Hit.currentTime = 0;
    Hit.play();
  }
  if(EventKey == 'h'){
    Animate(OpenHit);
    OpenHit.currentTime = 0;
    OpenHit.play();
  }
}

function Changed(element){
  let BeforeElement = element.previousElementSibling;

  let Volume = Math.round((element.volume * 100));

  BeforeElement.innerText = `${element.id} | ${Volume}%`;
  element.style.opacity = element.volume + 0.1;
}

function Animate(What){
  What.style = 'animation: none';
  setTimeout(() => {
    What.style = 'animation: Fade 1s ease-out';
    What.style.opacity = What.volume + 0.1;
  }, 100);
}