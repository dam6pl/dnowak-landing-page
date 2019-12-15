const windowGlobal = (typeof window !== "undefined" && window) || {
  location: { pathname: "" },
}

const NotFoundPage = () => {
  windowGlobal.location = "/"

  return null
}

export default NotFoundPage
