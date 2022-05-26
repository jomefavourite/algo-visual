
import AlgoActionsTypes  from "./algo.types";

const INITIAL_STATE = {
    currentSortedItems : [],
    currentSwapItems : [],
    currentBubbleItems : [],
    isRunning:false,
    arr:[],
    sortingAlgos:{
        bubbleSort:"bubbleSort",
        selectionSort:"selectionSort",
        insertionSort:"insertionSort",
        quickSort:"quickSort",
    },
    currentAlgo:""
}


const algoReducer = (state = INITIAL_STATE,action) => {
    switch(action.type){

        case AlgoActionsTypes.SET_CURRENT_SORTED:
            let items = [];
            if(action.payload.length > 0){
                items.concat(action.payload)
            }
            return {
                ...state,
                currentSortedItems:items
            }
        case AlgoActionsTypes.SET_CURRENT_SWAPPERS:
            let swapItems = []
            if(action.payload.length > 0){
                swapItems.concat(action.payload)
            }
            return {
                ...state,
                currentSwapItems:swapItems
            }
        case AlgoActionsTypes.SET_CURRENT_BUBBLE_ITEMS:
            let bubbleItems = [];
            if(action.payload.length > 0){
                bubbleItems.concat(action.payload)
            }
            return {
                ...state,
                currentBubbleItems:bubbleItems
            }

        case AlgoActionsTypes.SET_RUNNING:
            return {
                ...state,
                isRunning:action.payload
            }
        case AlgoActionsTypes.SET_ARRAY:
            return {
                ...state,
                arr:action.payload
            }
        default:
            return state;
    }
}

export default algoReducer;