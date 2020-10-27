const PROTO_PATH = __dirname + '/../streaming.proto';
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });

const countService = grpc.loadPackageDefinition(packageDefinition).streaming

const server = new grpc.Server();
server.addService(countService.CounterService.service, {
    Count: countHandler,
})

function countHandler(call) {
    setInterval( () => {
        call.write({value: Date.now()})
    }, 1000)
}


server.bind("0.0.0.0:9000", grpc.ServerCredentials.createInsecure());
server.start();