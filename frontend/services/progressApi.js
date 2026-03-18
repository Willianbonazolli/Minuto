import { getToken } from "./auth.js";
import { apiRequest } from "./api.js";

function getAuthHeaders() {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}

export async function fetchRemoteProgress() {
  return apiRequest("/api/progress", {
    headers: getAuthHeaders()
  });
}

export async function saveRemoteProgress(completedActivityIds) {
  return apiRequest("/api/progress", {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify({ completedActivityIds })
  });
}
