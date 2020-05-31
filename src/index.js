class Mashine {
  setWater(water) {
    this.water = water;
  }
  start() {
    if (this.water) {
      this.waterId = setTimeout(this.stop, 4000);
      this.water = 0;
      console.log('start');
    }
  }
  stop() {
    console.log('end');
    clearTimeout(this.waterId);
  }

}
class CodeMachine extends Mashine {
  constructor() {
    super();
  }
  setIngridient(ingridient, qount) {
    this.qount = qount;
    this.ingridient = ingridient;
  }
  start() {
    if (this.ingridient && qount) {
      super.start();
    }
  }
}
let codeMachine = new CodeMachine;