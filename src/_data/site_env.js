module.exports = function () {
  return {
    algolia_app_id: process.env.ALGOLIA_APP_ID,
    algolia_api_key: process.env.ALGOLIA_API_KEY,
    algolia_index_name: process.env.ALGOLIA_INDEX_NAME,
  };
};