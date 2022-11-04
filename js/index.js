const fibonacci = length => {
  let fiboSequence = [0, 1];
  for (let i = 0; i <= length - 3; i++) {
    let nextValue = fiboSequence[fiboSequence.length - 1] + fiboSequence[fiboSequence.length - 2];
    fiboSequence.push(nextValue);
  }
  console.log('fibbonacci', fiboSequence)
}

fibonacci(10);
