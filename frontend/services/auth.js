const TOKEN_KEY = "minuto_token";
const USER_KEY = "minuto_user";
const PROGRESS_PREFIX = "minuto_progress_";
const WELCOME_PREFIX = "minuto_welcome_";

function getProgressStorageKey(user) {
  const userId = user?.id || user?.username || user?.name || "guest";
  return `${PROGRESS_PREFIX}${userId}`;
}

function getWelcomeStorageKey(user) {
  const userId = user?.id || user?.username || user?.name || "guest";
  return `${WELCOME_PREFIX}${userId}`;
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

export function markWelcomeForUser(user) {
  localStorage.setItem(getWelcomeStorageKey(user), "true");
}

export function consumeWelcomeForUser(user) {
  const key = getWelcomeStorageKey(user);
  const shouldShow = localStorage.getItem(key) === "true";

  if (shouldShow) {
    localStorage.removeItem(key);
  }

  return shouldShow;
}

export function isAuthenticated() {
  return Boolean(getToken());
}

export function clearSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}
