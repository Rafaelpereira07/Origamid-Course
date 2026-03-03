export default async function fetchData<T>(url: string): Promise<T | null> {
  try {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`Erro ${r.status}: ${r.statusText}`);
    const j = await r.json();
    return j;
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return null;
  }
}
