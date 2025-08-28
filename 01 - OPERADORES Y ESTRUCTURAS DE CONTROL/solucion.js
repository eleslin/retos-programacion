// 1- Asignacion
const x = 2
console.log("asignacion de x: ", x)

//2- Comparacion
const a = 2
const b = "2"
console.log("a es b? ", a == b)
console.log("a es profundamente igual a b? ", a === b)

// Dificultad extra
for (let i = 10; i < 56; i++) {
  if (i % 2 === 0 && (i !== 16 && i % 3 !== 0)) {
    console.log(i)
  }
}