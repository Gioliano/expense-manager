import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`;
}

{/*cria função para filtro baseado em lista*/}

export const FilterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    //let dateSplit = date.split('-');
    //let year = dateSplit[0];
    //let month = dateSplit[1];
    //forma mais simples
    let [year, month] = date.split("-");

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth()+1 === parseInt(month)) 
        ) {
            newList.push(list[i]);
        }
    }

    return newList;
}

