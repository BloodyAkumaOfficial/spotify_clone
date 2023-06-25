import {Context, createWrapper, MakeStore} from "next-redux-wrapper";
import {AnyAction, applyMiddleware, createStore} from "redux";
import {reducer, RootState} from "@/store/reducers";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";


// @ts-ignore
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, applyMiddleware(thunk));

// @ts-ignore
export const wrapper = createWrapper<RootState> (makeStore, {debug: true})

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>