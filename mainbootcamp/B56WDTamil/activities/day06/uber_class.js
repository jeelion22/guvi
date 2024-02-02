


class UberPrice {

    // amount in INR per km

    static baseFare = 60 ;
    static fareUpTo20Km = 12 ;
    static fareAfter20Km = 18 ;

     getPrice (distance) {

        const price = (distance <= UberPrice.fareUpTo20Km) ? (60 + (UberPrice.fareUpTo20Km * distance)) : (60 + (UberPrice.fareAfter20Km * distance))

        return `Available Services: UberX \nDistance: ${distance} km \nPrice: ${price} INR`
    }

}

const ride1 = new UberPrice() ;

// console.log(ride1.getPrice(10)) ;
console.log(ride1.getPrice(20)) ;