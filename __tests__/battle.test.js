import Battle from '../src/js/battle';

describe('Battle', () => {
  
  test('should return a number between 1 and 6', () => {
    const newRoll = new Battle();
    newRoll.GetRoll();
    console.log(newRoll.Roll);
    expect(newRoll.Roll).toBeGreaterThanOrEqual(1);
    expect(newRoll.Roll).toBeLessThanOrEqual(6);
  })

//   test('should return miss if roll 3 or less', () => {
//     const newRoll2 = new Battle();
//     newRoll2.Roll = 2;
//     // newRoll2.GetRoll();
//     expect(newRoll2.Roll).toBeLessThan(4);

//   })
})