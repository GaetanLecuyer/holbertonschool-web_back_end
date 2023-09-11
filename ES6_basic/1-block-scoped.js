export default function taskBlock(trueOrFalse) {
  const task = false;  // Use let instead of var
  const task2 = true;  // Use let instead of var

  if (trueOrFalse) {
    const task = true;      // No need to redeclare with let, just assign the new value
    const task2 = false;
    return [task2, task];     // No need to redeclare with let, just assign the new value
  }

  return [task, task2];
}
