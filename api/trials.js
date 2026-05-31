export default async function handler(req, res) {
  const params = new URLSearchParams(req.query).toString();
  const url = `https://clinicaltrials.gov/api/v2/studies${params ? '?' + params : ''}`;
  try {
    const r = await fetch(url, { headers: { 'Accept': 'application/json' } });
    const data = await r.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(r.status).json(data);
  } catch (e) {
    res.status(500).json({ error: String(e) });
  }
}
