import { combineReducers } from "redux";
import todos from "./todos";

const rootReducer = combineReducers({ todos });

export default rootReducer;

// 나중에 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야하므로 내보내준다 !!
export type RootState = ReturnType<typeof rootReducer>