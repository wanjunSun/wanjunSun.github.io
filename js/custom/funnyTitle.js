const OriginTitle = document.title
let titleTime
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "😶‍🌫️你快回来~别让我一人等待"
    clearTimeout(titleTime)
  } else {
    document.title = "😎嗨~嗨~嗨"
    titleTime = setTimeout(function () {
      document.title = OriginTitle
    }, 2000)
  }
})
