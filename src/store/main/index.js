import mainState from "./main.state";
import mainActions from "./main.actions";
import navigationActions from "./navigation.actions";

const Main = {
    ...mainState,
    ...mainActions,
    ...navigationActions
};

export default Main;
