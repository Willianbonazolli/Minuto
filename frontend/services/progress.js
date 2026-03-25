export function getProgressKey(user) {
  const userId = user?.id || user?.username || user?.name || "guest";
  return `minuto_progress_${userId}`;
}

function getOrderedIds(trackListOrIds) {
  if (!trackListOrIds) {
    return [];
  }

  if (Array.isArray(trackListOrIds)) {
    if (trackListOrIds.length === 0) {
      return [];
    }

    if (typeof trackListOrIds[0] === "string") {
      return [trackListOrIds];
    }

    return trackListOrIds.map((track) => track.items.map((item) => item.id));
  }

  return Object.values(trackListOrIds).filter((group) => Array.isArray(group));
}

export function getCompletedActivityIds(user) {
  const rawValue = localStorage.getItem(getProgressKey(user));

  if (!rawValue) {
    return [];
  }

  try {
    const parsed = JSON.parse(rawValue);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    localStorage.removeItem(getProgressKey(user));
    return [];
  }
}

export function setCompletedActivityIds(user, completedActivityIds) {
  localStorage.setItem(getProgressKey(user), JSON.stringify(completedActivityIds));
}

export function getActivityStatusMap(trackList, user) {
  const completedIds = new Set(getCompletedActivityIds(user));
  const statusMap = {};
  const orderedGroups = getOrderedIds(trackList);

  orderedGroups.forEach((orderedIds) => {
    const nextUnlockedIndex = orderedIds.findIndex((id) => !completedIds.has(id));

    orderedIds.forEach((id, index) => {
      if (completedIds.has(id)) {
        statusMap[id] = "done";
        return;
      }

      if (nextUnlockedIndex === -1 || index === nextUnlockedIndex) {
        statusMap[id] = "pending";
        return;
      }

      statusMap[id] = "locked";
    });
  });

  return statusMap;
}

export function getTracksWithProgress(trackList, user) {
  const statusMap = getActivityStatusMap(trackList, user);

  return trackList.map((track) => ({
    ...track,
    items: track.items.map((item) => ({
      ...item,
      status: statusMap[item.id] || "locked"
    }))
  }));
}

export function completeActivity(trackList, user, activityId) {
  const statusMap = getActivityStatusMap(trackList, user);

  if (statusMap[activityId] === "locked") {
    return false;
  }

  const completedIds = new Set(getCompletedActivityIds(user));
  completedIds.add(activityId);
  localStorage.setItem(getProgressKey(user), JSON.stringify([...completedIds]));
  return true;
}


