const distance = require("../src/modules/partners/utils/distance.util")

describe(`Distance Formula`, () => {

    let origin, destination;
    beforeEach(() => {
        origin = {lat: 55.397296, lon: 25.148437 }

        destination = { lat: 55.406176, lon: 25.144879 }
    })

    it(`Should calculate nearly accurate distance`, () => {
        expect(distance({origin, destination})).toBeCloseTo(1,1)
    });

    it(`Should calculate nearly accurate distance`, () => {
        origin.lon = 55.397296;
        origin.lat = 25.148437;

        destination.lon = 55.413473;
        destination.lat = 25.174107;

        expect(distance({origin, destination})).toBeCloseTo(3.289,1)
    });


    it(`Should throw an error in case origin is missing`, () => {
        expect(() => distance({destination})).toThrow('"origin" is required')
    })

    it(`Should throw an error in case origin is invalid`, () => {
        origin.lat = 9689;
        expect(() => distance({origin, destination})).toThrow()
    });

    
    
})