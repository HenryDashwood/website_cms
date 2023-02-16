module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        post: {
          field: "slug",
          references: "title",
        },
        thing: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
