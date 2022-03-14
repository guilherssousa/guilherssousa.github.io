const sequence = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  "Enter",
];

var iterator = 0;

export function onKeydown(event: KeyboardEvent) {
  const { key } = event;

  if (iterator == sequence.length - 1) {
    window.alert("Você achou o easter egg!");
    return;
  }

  if (key == sequence[iterator]) {
    iterator++;
  } else {
    iterator = 0;
  }

  return;
}
