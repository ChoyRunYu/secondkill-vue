const getters = {
  token: state => state.user.token,
  isShowLoginDialog: state => state.isShowLoginDialog,
  username: state => state.username,
  nickname: state => state.nickname
}
export default getters
