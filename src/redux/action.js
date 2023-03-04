//ACTION TYPE CONSTANTS

export const SHOW = "SHOW"
export const HIDE ="HIDE"


//ACTION CREATORS
export function show(){
    return{
        type:SHOW
    }
}

export function hide(){
    return{
        type:HIDE
    }
}