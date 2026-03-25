function createAuthRateLimiter({ windowMs = 15 * 60 * 1000, max = 10 } = {}) {
  const buckets = new Map();

  return function authRateLimiter(req, res, next) {
    const now = Date.now();
    if (buckets.size > 2000) {
      for (const [bucketKey, bucket] of buckets.entries()) {
        if (now > bucket.expiresAt) {
          buckets.delete(bucketKey);
        }
      }
    }

    const ip = req.ip || req.headers["x-forwarded-for"] || req.connection?.remoteAddress || "unknown";
    const route = req.path || "auth";
    const key = `${ip}:${route}`;

    const current = buckets.get(key);
    if (!current || now > current.expiresAt) {
      buckets.set(key, { count: 1, expiresAt: now + windowMs });
      return next();
    }

    if (current.count >= max) {
      const retryAfter = Math.ceil((current.expiresAt - now) / 1000);
      res.setHeader("Retry-After", String(retryAfter > 0 ? retryAfter : 1));
      return res.status(429).json({
        message: "Muitas tentativas. Aguarde um pouco antes de tentar novamente."
      });
    }

    current.count += 1;
    buckets.set(key, current);
    return next();
  };
}

module.exports = {
  createAuthRateLimiter
};
