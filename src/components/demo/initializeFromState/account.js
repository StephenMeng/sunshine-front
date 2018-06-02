// Quack! This is a duck. https://github.com/erikras/ducks-modular-redux
const LOAD = 'redux-form-examples/account/LOAD'
const SHOWUER='showusers'
const ADD_USER_MODAL='add_user_modal'



const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      };
    case SHOWUER:
      return{
        ...state,
        users:action.users,
      };
    case ADD_USER_MODAL:
      return{
        ...state,
        users_add_modal:action.users_add_modal
      };
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data })

export  const SHOW_USERS=(users)=>({type:SHOWUER,users:users});
export const SHOW_USERS_ADD_MODAL=(status)=>({type:ADD_USER_MODAL,users_add_modal:status})
export default reducer
