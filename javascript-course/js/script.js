function removeEggs(foods) {
  let count = 0;

  return foods.filter(value => {
    if (value === "egg" && count < 2) {
      count++
      return false
    } 

    return value;

  });
};

console.log(removeEggs(['egg', 'apple', 'egg', 'egg', 'ham']));