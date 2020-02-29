export const filterMovieReducer = (state, action) => {
    switch(action.type) {        
        case "NOW_PLAYING":
            return {
                tag_name: "now_playing",
                tag_index: 0
            }
        break;
        case "POPULAR":
            return {
                tag_name: "popular",
                tag_index: 1
            }
        break;
        case "UPCOMING":
            return {
                tag_name: "upcoming",
                tag_index: 2
            }
        break;
        default:
            return state;
    }
}