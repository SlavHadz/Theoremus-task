const fs = require('fs');
const path = require('path');

exports.getTrucks = (req, res, next) => {
    fs.readFile(path.join(__dirname, '..', 'data', 'truckdata.json'), (err, content) => {
        if(err) {
            res.send([]);
        } else {
            let data = content.toString();
            res.send(data);
        }
    })
};