const path = require('path');

module.exports = {
    //...
    resolve: {
        alias: {
            '@com': path.resolve(__dirname, 'src/components'),
            '@util': path.resolve(__dirname, 'src/utils'),
            '@router': path.resolve(__dirname, 'src/router'),
            '@config': path.resolve(__dirname, 'src/config')
        }
    }
};
