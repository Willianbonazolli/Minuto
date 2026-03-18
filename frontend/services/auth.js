const TOKEN_KEY = "minuto_token";
const USER_KEY = "minuto_user";
const PROGRESS_PREFIX = "minuto_progress_";

function getProgressStorageKey(user) {
  const userId = user?.id || user?.username || user?.name || "guest";
  return `${PROGRESS_PREFIX}${userId}`;
}

export function setSession(payload) {
  if (!payload?.token) {
    return;
  }

  localStorage.setItem(TOKEN_KEY, payload.token);

  if (payload.user) {
    localStorage.setItem(USER_KEY, JSON.stringify(payload.user));

    if (Array.isArray(payload.user.completedActivityIds)) {
      localStorage.setItem(
        getProgressStorageKey(payload.user),
        JSON.stringify(payload.user.completedActivityIds)
      );
    }
  }
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  const rawUser = localStorage.getItem(USER_KEY);
  if (!rawUser) {
    return null;
  }

  try {
    return JSON.parse(rawUser);
  } catch (error) {
    localStorage.removeItem(USER_KEY);
    return null;
  }
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
