
const { readFileSync } = require('fs');
const { resolve } = require('path');
const distance = require('../utils/distance.util');
const partnersFile = readFileSync(resolve('./src/modules/partners/services/partners.json'));
const partners = JSON.parse(partnersFile.toString());
/**
 * Read the results,filter them out and return
 * @param {*} query 
 */
module.exports.list = async function (query) {
    const ramisLocation = {lat: 51.5144636,lon: -0.142571};

    const normalizedArray = []; // contains one entry for every partner office. Example, partner with multiple offices with have multiple entries
    // filter the data by distance
    for (const partner of partners) {
        for (const office of partner.offices) {
            const  [lat, lon] = office.coordinates.split(',');
            const dist = distance({
                origin: {
                    lat: ramisLocation.lat, 
                    lon: ramisLocation.lon
                },
                destination: {
                    lat: Number(lat),
                    lon: Number(lon)
                }
            });
            if (dist < query.distance) {
                normalizedArray.push({
                    ...partner, distance: dist, offices: {...office, coordinates: {
                        lat: Number(lat),
                        lon: Number(lon)
                    }}, 
                })
            }
        }
    }

    
    normalizedArray.sort((a, b) => a.organization.localeCompare(b.organization))
    
    return normalizedArray
}