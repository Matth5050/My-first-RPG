export default class Character {
  constructor(){
      this.str = 0;
      this.int = 0;
      this.agl = 0;
      // this.inventory = ['Sharp Dagger', 'Battle Axe', 'Wizard Staff'];
  }

  createWarrior() {
      this.str += 10;
      this.int += 2;
      this.agl += 5;
    }
  
    createWizard() {
      this.str += 2;
      this.int += 10;
      this.agl += 5;
   }

    createRogue() {
      this.str += 2;
      this.int += 5;
      this.agl += 10;
  }

    warLvl() {
      this.str += 2;
      this.agl += 1;
    }

    wizLvl() {
      this.int += 2;
      this.agl += 1;
    }

    rogLvl() {
      this.agl += 2;
      this.str += 1;
    }

    inventoryCheck(arry) {
    if (arry.includes('Battle Axe')) {
      this.str += 1;
    } else {
      this.str += 0;
    }

    if (arry.includes('Wizard Staff')) {
      this.int += 1;
    } else {
      this.int += 0;
    }

    if (arry.includes('Sharp Dagger')) {
      this.agl += 1;
    } else {
      this.agl += 0;
    }
  }
}



// weaponCheck() {
    
    
//   let warInv = new Map(
//     [
//       [1, "Battle Axe"],
//       [2, "Wizard Staff"],
//       [3, "Sharp Dagger"]
//     ]
//   );
  
//   const mapIter = warInv.values();
  
  
//   if (mapIter.next().value === "Battle Axe") {
//     this.str += 1;
//       console.log('added str');
//   } else {console.log('no additin');
// }
  
//   if (mapIter.next().value === "Wizard Staff") {
//     this.int += 1;
//       console.log('added int');
//   } else {console.log('no additin');
// }
  
//   if (mapIter.next().value === "Sharp Dagger") {
//     this.agl += 1;
//       console.log('added agl');
//   } else {console.log('no additin');
// }
// }