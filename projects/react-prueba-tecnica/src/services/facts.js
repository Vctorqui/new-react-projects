const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

// using Fetch
export const getRandomFact = async () => {
  // facts
  const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  console.log(data)
  const { fact } = data
  return fact
}

// return fetch(CAT_ENDPOINT_RANDOM_FACT) // > el fetch devuelve una Promise
// .then((res) => res.json()) // => con then resolvemos la promise
// .then((data) => {     // => concatenar
//   console.log(data)
//   const { fact } = data
//   return fact
// })

//   this is a way to consume the api using async
// useEffect(() => {
//   const getRandomFact = async () => {
//     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
//     const json = await res.json()
//     try {
//       if (res.ok) {
//         setFact(json.fact)
//       }
//     } catch (error) {
//       console.log('error')
//     }
//   }
//   getRandomFact()
// }, [])
