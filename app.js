const lugar = require('./Lugar/Lugar');
const clima = require('./Clima/Clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Descripción de la ciudad para obtener el clima',
        demand: true
    }
}).argv


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `La temperatura de ${coords.direccion} es de ${temp}ºC.`;
    } catch (e) {
        return `No se pudo deteminar el clima de ${direccion} debido al error ${e}.`
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);


//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);


//clima.getClima(40, 75, -74)
//    .then(console.log)
//    .catch(console.log);