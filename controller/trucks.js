const fs = require('fs');
const path = require('path');

exports.getTrucks = (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'trucks.json'), (err, content) => {
        if(err) {
            res.send([]);
        } else {
            let trucks = content.toString();
            res.send({trucks});
        }
    })
};