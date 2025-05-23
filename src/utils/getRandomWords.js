export async function getRandomWords() {
  const response = await fetch(
    "https://random-word.ryanrk.com/api/en/word/random/6"
  );
  return response.json();
}
