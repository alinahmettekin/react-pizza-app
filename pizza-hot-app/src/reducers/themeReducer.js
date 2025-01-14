export default function themeReducer(state, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}
