import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: any, action: any): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            let sorted = []
            if (action.payload === 'up') {
                sorted = [...state,
                ].sort((a, b) => {
                    if (a.name < b.name) {
                        return -1
                    }
                    if (a.name > b.name) {
                        return 1
                    }
                    return 0;
                })
            } else {
                sorted = [...state,
                ].sort((a, b) => {
                    if (b.name < a.name) {
                        return -1
                    }
                    if (b.name > a.name) {
                        return 1
                    }
                    return 0;
                })
            }
            return sorted
            //return state // need to fix
        }
        case 'check': {
            return [...state].filter(el => el.age >= action.payload)
            // return state // need to fix
        }
        default:
            return state
    }
}
