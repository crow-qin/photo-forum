export default {
  currentUserList({ currentUser, userList }) {
    if (currentUser.length > 0) {
      return userList.find(item => item.uid == currentUser)
    }
    return ''
  }
}