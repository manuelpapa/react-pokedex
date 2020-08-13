export default async function fetchPokemons() {
  const response = await fetch(
    "https://unpkg.com/pokemons@1.1.0/pokemons.json"
  );
  if (!response.ok) {
    throw new Error(response);
  }
  const data = await response.json();
  const pokemons = data.results.map((pokemon) => ({
    name: pokemon.name,
    imgSrc: pokemon.sprites.large,
    link: pokemon.href,
    id: `# ${pokemon.name}`,
  }));
  return pokemons;
}
