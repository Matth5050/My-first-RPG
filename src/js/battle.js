export default class Battle {
  constructor(){
    this.Roll=0;
  }

  GetRoll(max) {
    this.Roll = Math.ceil(Math.random() * 6);
  }

//   battleCheck() {
//     if (this.Roll >= 4) {
//       return "Enemy Vanquished";
//     } else {
//       return "miss try again";
//     }
//   }
}