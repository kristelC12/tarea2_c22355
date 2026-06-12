const { z } = require("zod");

const SearchSchema = z.object({
  text: z.string().min(3)
});

module.exports = SearchSchema;