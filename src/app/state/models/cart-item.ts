export class CartItem {
    // declare member variable directly in constructor
    constructor(public id: number,
                public name: string,
                public price: number,
                public qty: number) {}
}