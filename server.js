var net = require('net');

var server = net.createServer(function(client) {
    console.log('Client Connected..');

    client.on('end', () => {
        console.log('Client Disconnected..');
        server.close();
    })

    client.on('error', (err) => {
        console.log('Server encountered error');
        server.close();
    });

    client.on('data', (data) => {
        console.log('Received: ' + data);
        client.write('Hi Client! I received data: ' + data);
        client.pipe(client);
    });

});

server.listen(1337, '127.0.0.1', () => {
    console.log('Server is running on port 1337');
});