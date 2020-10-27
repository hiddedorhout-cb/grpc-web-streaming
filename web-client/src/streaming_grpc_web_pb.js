/**
 * @fileoverview gRPC-Web generated client stub for streaming
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.streaming = require('./streaming_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.CounterServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.streaming.CounterServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.streaming.CountRequest,
 *   !proto.streaming.CountResponse>}
 */
const methodDescriptor_CounterService_Count = new grpc.web.MethodDescriptor(
  '/streaming.CounterService/Count',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.streaming.CountRequest,
  proto.streaming.CountResponse,
  /** @param {!proto.streaming.CountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.CountResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.streaming.CountRequest,
 *   !proto.streaming.CountResponse>}
 */
const methodInfo_CounterService_Count = new grpc.web.AbstractClientBase.MethodInfo(
  proto.streaming.CountResponse,
  /** @param {!proto.streaming.CountRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.streaming.CountResponse.deserializeBinary
);


/**
 * @param {!proto.streaming.CountRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.CountResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.CounterServiceClient.prototype.count =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.CounterService/Count',
      request,
      metadata || {},
      methodDescriptor_CounterService_Count);
};


/**
 * @param {!proto.streaming.CountRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.streaming.CountResponse>}
 *     The XHR Node Readable Stream
 */
proto.streaming.CounterServicePromiseClient.prototype.count =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/streaming.CounterService/Count',
      request,
      metadata || {},
      methodDescriptor_CounterService_Count);
};


module.exports = proto.streaming;

