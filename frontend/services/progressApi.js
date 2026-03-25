import { apiRequest } from "./api.js";

export async function fetchRemoteProgress() {
  return apiRequest("/api/progress");
}

export async function saveRemoteProgress(completedActivityIds) {
  return apiRequest("/api/progress", {
    method: "PUT",
    body: JSON.stringify({ completedActivityIds })
  });
}


