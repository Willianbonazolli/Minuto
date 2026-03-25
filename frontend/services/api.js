const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4001";

export async function apiRequest(path, options = {}) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {})
      },
      ...options
    });

    const isJson = res.headers.get("content-type")?.includes("application/json");
    const data = isJson ? await res.json() : null;

    if (!res.ok) {
      throw new Error(data?.message || "Nao foi possivel concluir a solicitacao.");
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Falha de conexao com o servidor.");
  }
}


