export default async function handler(req, res) {
  const GROQ_API_KEY = process.env.GROQ_API_KEY;
  const { messages, model } = req.body;
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type":"application/json", "Authorization": `Bearer ${GROQ_API_KEY}` },
    body: JSON.stringify({ model, messages, temperature: 0.3 })
  });
  const data = await r.json();
  res.json(data);
}
