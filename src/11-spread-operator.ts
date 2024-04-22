//Spread operator

const section:string[] = ['Account','Money']
const departments:string[] = ['Program','Marketing','Graphic']

departments.push(...section)

console.log(departments)