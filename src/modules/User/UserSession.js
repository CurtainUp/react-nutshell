import clear from "./clear"
import welcomePage from "./login/welcome"

const userSession = {
  logInUser(id) {
    window.sessionStorage.setItem("id", id)
    document.querySelector(".main-nav").classList.remove("hide")
    clear()
    welcomePage()
  },

  getUser() {
    return Number(window.sessionStorage.getItem("id"))
  },

  logOutUser() {
    window.sessionStorage.clear()
    document.querySelector(".main-nav").classList.add("hide")
  }
}

export default userSession
