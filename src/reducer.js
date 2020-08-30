export const initialState ={
    user:null,
    playList:[],
    playing:false,
    item:null,
    // token:"BQATipdQcgEJ-2awSp0dCL0SxBcyya-FvK8F1maypYMmUBSfDouuIbiDhoiiGvs59ye9Xn2kuJBLLhZnOJUgbKzlmin3yU7dAzIgfqFGvXwhx0pXWQ6OVFoD5mJZds_wwPzOerLnxptPZnRwuU4k0pLQ3LWrHZkY06FXx8WuFefYG6GB"
};

const reducer =(state,action)=>{
    console.log(action);
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists:action.playlists
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}

export default reducer;