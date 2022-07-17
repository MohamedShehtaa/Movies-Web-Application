import axiosInstance from "../../network/moviseConfig"

export const getMovieList = () => (dispatch) => {
    return axiosInstance
        .get(`/movie/popular`) //res.data.results
        .then((res) => {
            dispatch({
                type: "GET_MOVIES_LIST",
                payload: res.data.results
            })
        })
        .catch((err) => console.log(err));
}
export const getMovieDetails = (id) => (dispatch) => {
    return axiosInstance
        .get(`/movie/${id}`)
        .then((res) => {
            dispatch({
                type: "GET_MOVIE_DETAILS",
                payload: res.data,
            })
        })
        .catch((err) => console.log(err))
}
