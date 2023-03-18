type ActionType = {
    type: 'SET_THEME_ID'
    id: number,
}

export type ThemeStateType = {
    themeId: number
}

const initState: ThemeStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): ThemeStateType => {
    switch (action.type) {
        case 'SET_THEME_ID' :
            return {...state, themeId: action.id}
        default:
            return state
    }
}

export const changeThemeId = (id: number): ActionType => ({ type: 'SET_THEME_ID', id })