export async function GET() {
  const response = await fetch("https://random-d.uk/api/random");
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: { "Content-Type": "application/json" },
  });
}
