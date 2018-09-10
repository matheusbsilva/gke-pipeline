const HOST = process.env.MONGO_HOST || "db";
const PORT = process.env.MONGO_PORT || 27017;
const DB_NAME = process.env.DB_NAME || "dashboard-db"; 

module.exports = {
  url: `mongodb://${HOST}:${PORT}/${DB_NAME}`
}
