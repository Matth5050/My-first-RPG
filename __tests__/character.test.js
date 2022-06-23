import  Character  from '../src/js/character.js';

describe('Warrior', () => {

  // test('SHould return a character with 10 str, 2 int, and 5 agl', () => {
  //   const newWarrior = new Warrior();
  //   expect(newWarrior.str).toEqual(10);
  //   expect(newWarrior.int).toEqual(2);
  //   expect(newWarrior.agl).toEqual(5);
  // });

  // test('Should add 1 str to warror', () => {
  //   const newWarrior = new Warrior();
  //   expect(newWarrior.str).toEqual(10);
  //   expect(newWarrior.int).toEqual(2);
  //   expect(newWarrior.agl).toEqual(5);
  // });




  test('Should return a character with 10 str, 2 int, and 5 agl', () => {
    const newWarrior = new Character();
    console.log(newWarrior);
    let warClass = newWarrior.createWarrior();
    console.log(warClass);
    expect(warClass.str).toEqual(10);
    expect(warClass.int).toEqual(2);
    expect(warClass.agl).toEqual(5);
  });

});
