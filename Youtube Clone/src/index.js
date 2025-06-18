export const API_KEY = "AIzaSyAPUlmM5JP7o6Yxu8GbtONdFkZDIWnD4_Y";

export const converter = (value) =>{
    if(value >= 1000000){
        return Math.floor(value/1000000) + "M";
    }else if (value >= 1000){
        return Math.floor(value/1000) + "K";
    }else{
        return value ;
    }
}