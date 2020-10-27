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

const client = new countService.CounterService('localhost:9000', grpc.credentials.createInsecure());

const call = client.count({})

call.on('data', (r) => {
    console.log(r)
})