// Exercise 3
// ----------

const doublesLater = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num *2), 2000);
  })  
};

const handleSum = async (num) => {
  try {
    let sum = 0;
    for (let i = 0; i < 3; i++)
      sum += await doublesLater(num);
    return sum;
  } catch (err) {
    console.log(err);
  }
}
handleSum(10).then((ans) => console.log(ans));
