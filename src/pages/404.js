const NotFoundPage = () => {
  if (typeof window !== "undefined") {
    window.location = "/"
  }
}

export default NotFoundPage
