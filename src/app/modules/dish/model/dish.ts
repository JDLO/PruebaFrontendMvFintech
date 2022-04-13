import { Categorie } from "../model/categorie"

export class Dish {
    public readonly id: number;
    public name: string;
    public price: string;
    public available: boolean;
    public best_seller: boolean;
    public categories: Categorie[];
    public img: string;
    public description: string;
    
    public constructor(entity){
        this.id = entity.id;
        this.name = entity.name;
        this.price = entity.price;
        this.available = entity.available;
        this.best_seller = entity.best_seller;
        this.categories = entity.categories
        this.img = entity.img;
        this.description = entity.description;
    }

}
