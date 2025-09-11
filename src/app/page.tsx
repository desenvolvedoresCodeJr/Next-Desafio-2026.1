// //Passo a passo
// //    Pegar URL da API, baixar e salvar o arquivo no src/api
// //    Use npm install -D openapi-typescript
// //    Adicione script no package.json 
// //      "scripts": { "generate-api-types": "openapi-typescript ./src/api/nome.json --output ./src/types/nome-api.ts", }
// //    Use npm run generate-api-types para gerar tipos com esse script criado


// // exemplo usando o petstore v3 https://petstore3.swagger.io/


// import { components, paths } from "../types/petstore-api";

// //Tipo pet que está em schemas/Pet no arquivo de tipo criado
// type Pet = components["schemas"]["Pet"];

// //representa o shape do conteúdo retornado pelo endpoint /pet/findByStatus para o status 200, é um Pet[]
// type FindByStatusResponse = paths["/pet/findByStatus"]["get"]["responses"]["200"]["content"]["application/json"];


// //Esse tipo pode ser tanto Pet[] ou FindByStatusResponse
// async function getPetsByStatus(): Promise<Pet[]>{
//   //Nesse fetch dependendo da aplicação teria que usar um cache, tipo {cache: "no-store"}
//   const res = await fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available");

//   if (!res.ok) {
//     throw new Error("Erro ao buscar API");
//   }

//   return res.json();
// }

// export default async function Home() {
//   const pets = await getPetsByStatus();
//   return (
//     <div className="flex flex-col items-center">
//       <h1 className="font-bold">Pets Disponíveis</h1>
//       <ul>
//         {pets.map((pet) => (
//           <li key={pet.id}>{pet.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default function Home() {
  return (
    <>Coisa nova no localhost:3000/swagger</>
  );
}