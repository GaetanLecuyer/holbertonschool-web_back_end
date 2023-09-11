
export function taskBlock() {
  // Declare variables with let or const
  let task = 'I prefer const when I can.';

  if (true) {
    const task = 'But sometimes let';
    console.log(task); // This will log 'But sometimes let'
  }

  // task here refers to the outer variable, not the one inside the conditional block
  return task; // This will return 'I prefer const when I can.'
}
