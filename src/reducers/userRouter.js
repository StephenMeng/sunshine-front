function  userRouter(state={users:[]},action){
    switch (action.type){
        case "queryUser":
            return{users:action.users};
        case "deleteUser":
            return  {users:action.users}
        default:
            return state;
    }
}
export default  userRouter