export default class Character {
    constructor() {
      this.str = 0;
      this.int = 0;
      this.agl = 0;
  }

  // strPotion() {
  //   this.str += 1;
  // }


  createWarrior () {
      this.str += 10;
      this.int += 2;
      this.agl += 5;
    }

    // createWarrior() {
    //    this.str += 10;
    //    this.int += 2;
    //    this.agl += 5;
    // }

  //   createWizard() {
  //     this.str += 2;
  //     this.int += 10;
  //     this.agl += 5;
  //  }

  //   createRogue() {
  //     this.str += 2;
  //     this.int += 5;
  //     this.agl += 10;
  // }
  
}