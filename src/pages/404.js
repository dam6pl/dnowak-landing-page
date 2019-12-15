const windowGlobal = typeof window !== "undefined" && window

const NotFoundPage = () => {
  windowGlobal.location = "/"
}

export default NotFoundPage
