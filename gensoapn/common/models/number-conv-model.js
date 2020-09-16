'use strict';

module.exports = function (Numberconvmodel) {
    let app = require('../../server/server');

    Numberconvmodel.numberToWords = function (num, cb) {
        Numberconvmodel.NumberToWords({ ubiNum: num }, function (err, response) {
            var result = response;
            cb(err, result);
            const numStore = app.models.numStore;
            
            numStore.create({num:"testtwo"}, () => {
                console.log("creation completed ")
            })



        });

    };

    Numberconvmodel.remoteMethod(
        'numberToWords', {
        accepts: [
            {
                arg: 'num', type: 'number', required: true,
                http: { source: 'query' }
            }
        ],
        returns: { arg: 'result', type: 'object', root: true },
        http: { verb: 'get', path: '/read' }
    });
};

