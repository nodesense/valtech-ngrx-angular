// interface for type compatiblity, to match with js object

export interface Address {
    city: number;
    state: number;
    pincode?: number; // ? means optional
}