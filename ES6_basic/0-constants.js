// Cette fonction déclare une variable 'task' avec 'const' et lui attribue une valeur.
// Elle renvoie ensuite cette valeur.
export function taskFirst() {
  const task = 'I prefer const when I can.';
  return task;
}

// Cette fonction renvoie une chaîne de caractères.
export function getLast() {
  return ' is okay';
}

// Cette fonction déclare une variable 'combination' avec 'let', lui attribue une valeur,
// puis ajoute la valeur renvoyée par la fonction 'getLast' à 'combination'.
// Enfin, elle renvoie 'combination'.
export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
