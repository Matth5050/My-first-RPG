import Character from '../src/js/character';

describe('Character', () => {

  test('Should return a warrior character with 10 str, 2 int, and 5 agl', () => {
    const newWarrior = new Character();
    newWarrior.createWarrior();
    expect(newWarrior.str).toEqual(10);
    expect(newWarrior.int).toEqual(2);
    expect(newWarrior.agl).toEqual(5);
  });

  test('Should return a wizard character with 2 str, 10 int, and 5 agl', () => {
    const newWizard = new Character();
    newWizard.createWizard();
    expect(newWizard.str).toEqual(2);
    expect(newWizard.int).toEqual(10);
    expect(newWizard.agl).toEqual(5);
  });

  test('Should return a rogue character with 2 str, 5 int, and 10 agl', () => {
    const newRogue = new Character();
    newRogue.createRogue();
    expect(newRogue.str).toEqual(2);
    expect(newRogue.int).toEqual(5);
    expect(newRogue.agl).toEqual(10);
  });

  test('should return Warrior with 2 str, 0 int, 1 agl', () => {
    const warUp = new Character();
    warUp.warLvl();
    expect(warUp.str).toEqual(2);
    expect(warUp.int).toEqual(0);
    expect(warUp.agl).toEqual(1);
  })
  test('should return Wizard with 0 str, 2 int, 1 agl', () => {
    const wizUp = new Character();
    wizUp.wizLvl();
    expect(wizUp.str).toEqual(0);
    expect(wizUp.int).toEqual(2);
    expect(wizUp.agl).toEqual(1);
  })
  
  test('should return Rogue with 1 str, 0 int, 2 agl', () => {
    const rogUp = new Character();
    rogUp.rogLvl();
    expect(rogUp.str).toEqual(1);
    expect(rogUp.int).toEqual(0);
    expect(rogUp.agl).toEqual(2);
  })

  test('Should increase str,int, and agl stat by 1 each', () => {
    const testChar = new Character();
    let testArray = ['Sharp Dagger', 'Battle Axe', 'Wizard Staff'];
    testChar.inventoryCheck(testArray);
    expect(testChar.str).toEqual(1);
    expect(testChar.int).toEqual(1);
    expect(testChar.agl).toEqual(1);
  })

  test('Should not increase str,int, and agl stat by 1 each', () => {
    const testChar = new Character();
    let testArray = ['', '', ''];
    testChar.inventoryCheck(testArray);
    expect(testChar.str).toEqual(0);
    expect(testChar.int).toEqual(0);
    expect(testChar.agl).toEqual(0);
  })
})
