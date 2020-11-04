import axios from "axios";

//ACTION TYPE
const GET_ROBOTS = "GET_ROBOTS";

//ACTION CREATOR
export const getRobots = (robots) => ({
  type: GET_ROBOTS,
  robots,
});

//THUNK
export const fetchRobots = () => async (dispatch) => {
  try {
    const { data: robots } = await axios.get("/api/robots");
    dispatch(getRobots(robots));
  } catch (err) {
    console.log("There was an error fetching robots from api!");
    console.log(err);
  }
};

//REDUCER
let initialState = {
  robots: [],
};

export default function dummyReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ROBOTS:
      return { ...state, robots: action.robots };
    default:
      return state;
  }
}
