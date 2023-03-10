function rangeOfNumbers(startNum, endNum) {
    if (startNum === endNum) return [endNum]
    else {
        const myValue = rangeOfNumbers(startNum + 1, endNum)
        myValue.unshift(startNum)
        return myValue
    }
  };

  console.log(rangeOfNumbers(4, 4));
