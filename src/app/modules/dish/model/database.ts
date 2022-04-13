import { Categorie } from "./categorie";
import { Dish } from "./dish";

export class DataBase {
    public products: Dish[];
    public categories: Categorie[];

    constructor(entity){
        this.products = entity.products;
        this.categories = entity.categories;
    }
}