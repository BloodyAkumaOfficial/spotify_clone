import {combineReducers} from "redux";
import {playerReducer} from "@/store/reducers/playerReducer";
import {HYDRATE} from "next-redux-wrapper";
import {trackReducer} from "@/store/reducers/trackReducer";

const rootReducer = combineReducers({
    player: playerReducer,
    track: trackReducer
});
// @ts-ignore
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>