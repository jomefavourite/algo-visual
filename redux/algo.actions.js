import AlgoActionsTypes from "./algo.types"

export const setCurrentSortedItems =   ( payload ) => {
    return {
        type:AlgoActionsTypes.SET_CURRENT_SORTED,
        payload
    }
}

export const setCurrentSwapItems = (payload) => {
    return {
        type:AlgoActionsTypes.SET_CURRENT_SWAPPERS,
        payload
    }
}
export const setArray = (payload) => {
    return {
        type:AlgoActionsTypes.SET_ARRAY,
        payload
    }
}


export const setRunning = (payload) => {
    return {
        type:AlgoActionsTypes.SET_RUNNING,
        payload
    }
}

export const setCurrentBubbleItems = (payload) => {
    return {
        type:AlgoActionsTypes.SET_CURRENT_BUBBLE_ITEMS,
        payload
    }
}
export const setAlgo = (payload) => {
    return {
        type:AlgoActionsTypes.SET_ALGO,
        payload
    }
}