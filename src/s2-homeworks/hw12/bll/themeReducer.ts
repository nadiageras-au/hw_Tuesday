const initState: ThemeStateType = {
    themeId: 1,
}

export type ThemeStateType = {
    themeId: number
}

export const themeReducer = (state: ThemeStateType = initState, action: changeThemeIdType):ThemeStateType  => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
           return  {...state, themeId: action.id}
        }// дописать

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any
 type changeThemeIdType = ReturnType<typeof changeThemeId>