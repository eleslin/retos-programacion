/**
 * Array
 */
let array = [1, 2, 3, 4, 5];
// console.log(array)
array.push(6)
// console.log(array)
array.shift()
// console.log(array)
array.pop()
// console.log(array)
array.unshift(0)
// console.log(array)

array.splice(1, 2)
// console.log(array)

/**
 * Set
 */
let set = new Set([1, 2, 3, 4, 5, 5, 5]);
// console.log(set)

/**
 * Map
 */

let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
])

// console.log(myMap)

myMap.set("key2", "value3");
// console.log(myMap)

// console.log(myMap.has("key2"))


/**
 * Ejercicio
 */

// 1- Create interface
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2-
let selectedOption;
let contacts = new Map()
rl.question(`
Agenda de contactos - Teclee Opcion:
	1- Buscar contacto
	2- Añadir contacto
	3- Actualizar contacto
	4- Eliminar contacto
            `,
     (choice) => {
			selectedOption = choice

			console.log('selected ', selectedOption)

			switch(selectedOption) {
				case '1':
					// Ask for contact
					rl.question(`
Inserte nombre del contacto:
							`,
					(name) => {
						console.log("name ", name)
						if (contacts.has(name.trim().toLowerCase())) {
							console.log(`El usuario ${name} existe con numero ${contacts.get(name.trim().toLowerCase())}`)
							rl.close()
						} else {
							console.log(`Contacto ${name} no existe actualmente`)
							rl.close()
						}
					});
					
					break

				case '2':
					// Ask for contact
					rl.question(`
Inserte nombre del contacto:
							`,
					(name) => {
						const formattedName = name.trim().toLowerCase()
						if (contacts.has(formattedName)) {
							console.log(`El usuario ${name} ya existe con numero ${contacts.get(formattedName)}`)
							rl.close()
						} else {
							rl.question(`
Inserte numero de telefono:	
							`,
						(number) => {
							contacts.set(formattedName, number)
							console.log(`Contacto ${name} añadido con numero ${contacts.get(formattedName)}`)
							rl.close()
							})
						}
					});
					break
					
					
			}
			
});

