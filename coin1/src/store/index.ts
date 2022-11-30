
import {  configureStore } from "@reduxjs/toolkit"
import AmmountReducer from "../store/slices/ammountSlice"
import ScrollsReducer from "../store/slices/scrollSlice"
import ChestReducer from "./slices/chestSlice"
import StepTwoReducer from "./slices/steptwoSlice"
import StepReducer from "./slices/stepSlice"
import GiftReducer from "./slices/giftSlice"
import CoinReducer from "./slices/coinSlice" 
import Step3Reducer from "./slices/stepthreeSlice"
export const store = configureStore({
  reducer: {
    ammounts: AmmountReducer,
    scrolls: ScrollsReducer,
    chests : ChestReducer,
    steptwo: StepTwoReducer,
    step: StepReducer,
    gift: GiftReducer,
    coins: CoinReducer,
    step3: Step3Reducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


















// import { combineReducers, configureStore } from "@reduxjs/toolkit"
// import AmmountReducer from "../store/slices/ammountSlice"
// import ScrollsReducer from "../store/slices/scrollSlice"


// const rootReducer = combineReducers({
//     ammounts: AmmountReducer,
//     scrolls : ScrollsReducer,
// })

// export function setupStore() {
//     return configureStore({
//         reducer: rootReducer
//     })
// }

// export type RootState = ReturnType<typeof rootReducer>
// export type AppStore = ReturnType<typeof setupStore>
// export type AppDispatch = AppStore['dispatch']

