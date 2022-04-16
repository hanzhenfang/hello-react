// 将用户登录信息保存在浏览器的localStorage

const USER_KEY = 'user_key'

export default {
    // 保存用户信息
    saveUser(user) {
        localStorage.setItem(USER_KEY, JSON.stringify(user))
    },
    //获取用户信息
    getUser() {
        return JSON.parse(localStorage.getItem(USER_KEY) || "{}")
    },
    //删除用户信息
    removeUser() {
        localStorage.removeItem(USER_KEY)
    }
}