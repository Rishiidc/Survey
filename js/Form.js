class Form {

  constructor() {
    this.input1 = createInput("");
    this.question1=createElement('h3')
    this.question2=createElement('h3')
    this.question3=createElement('h3')
    this.question4=createElement('h3')
    this.input2 = createInput("");
    this.input3 = createInput("");
    this.input4 = createInput("");
    this.button = createButton('Submit');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Corona awareness");
    this.title.position(displayWidth/2 - 50, 0);
    this.question1.html("Name");
    this.question1.position(displayWidth/2 - 40,displayHeight/4-150);
    this.question2.html("Are you following social distancing?");
    this.question2.position(displayWidth/2 - 40,displayHeight/4);
    this.question3.html("When did uou travel last?");
    this.question3.position(displayWidth/2 - 40,displayHeight/4+150);
    this.question4.html("Are u home these days?");
    this.question4.position(displayWidth/2 - 40,displayHeight/4+250);
    this.input1.position(displayWidth/2 - 40 , displayHeight/4-100);
    this.input2.position(displayWidth/2 - 40 , displayHeight/4 +100);
    this.input3.position(displayWidth/2 - 40 , displayHeight/4+200);
    this.input4.position(displayWidth/2 - 40 , displayHeight/4+300);
    this.button.position(displayWidth/2 + 30, displayHeight/4+500);
2
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.button.hide();
      player.name = this.input1.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
