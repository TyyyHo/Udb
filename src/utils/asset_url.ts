const PUBLIC_URL = (process.env.PUBLIC_URL || "").replace(/\/+$/, "")

const ABSOLUTE_URL_PATTERN = /^[a-z][a-z\d+\-.]*:/i

const assetUrl = (path: string): string => {
  if (!path) {
    return path
  }

  if (
    ABSOLUTE_URL_PATTERN.test(path) ||
    path.startsWith("//") ||
    path.startsWith("data:") ||
    path.startsWith("blob:")
  ) {
    return path
  }

  if (path.startsWith("/")) {
    return PUBLIC_URL ? `${PUBLIC_URL}${path}` : path
  }

  return path
}

export { assetUrl }
