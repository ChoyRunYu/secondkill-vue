const getters = {
  token: state => state.user.token,
  isShowLoginDialog: state => state.isShowLoginDialog,
  username: state => state.user.username,
  nickname: state => state.user.nickname
}
export default getters
