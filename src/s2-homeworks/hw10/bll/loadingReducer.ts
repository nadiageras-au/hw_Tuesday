const initState = {
    isLoading: false,
}

export type LoadingStateType = {
    isLoading: boolean
}

type ActionsType = LoadingActionType

export const loadingReducer = (state: LoadingStateType = initState, action: ActionsType): LoadingStateType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {
                ...state,
                isLoading:action.isLoading
            }
        }
        // пишет студент  // need to fix

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
