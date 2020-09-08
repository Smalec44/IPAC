'use strict';

module.exports = function(Numberconvmodel) {

    Numberconvmodel.numberToWords = function (num, cb) {
        Numberconvmodel.NumberToWords( {ubiNum: num}, function(err, response) {
            var result = response;
            cb(err, result);
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

