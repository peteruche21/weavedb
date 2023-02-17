module.exports = {
  contractTxId: "vglKtaOpP5FQoEGp26KwXVZ-vTnEEqNqU_g51nGwNkw",
  arweave: {
    host: "arweave.net",
    port: 443,
    protocol: "https",
  },
  subscribe: true,
  // s3: {
  //   bucket: 'BUCKET_NAME',
  //   prefix: 'PREFIX/',
  //   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  //   region: process.env.AWS_REGION,
  // },
  // ratelimit: {
  //   every: 5,
  //   limit: 300
  // },
  cache: "lmdb", // or "leveldb"
  // redis: {
  //   url: `redis://${process.env.REDISPORT}:${process.env.REDISPORT}`,
  // }
}
