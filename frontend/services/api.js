const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4001";

export async function apiRequest(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const message = data.message || "Request failed";
    throw new Error(message);
  }
  return data;
}
