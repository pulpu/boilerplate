export default (state = {}, action) => {
    switch (action.type) {
     case 'LOGIN_USER_SUCCESS':
      return {
       result: action.payload
      }
     default:
      return state
    }
}