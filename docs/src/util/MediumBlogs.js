export default async function MediumBlogs() {

  return fetch('/medium.json')
    .then(response => response.json())
    .then(data => {
      const posts = Object.values(data?.payload?.references?.Post);
      const authors = data.payload.references.User;

      // Sort posts by "firstPublishedAt" in descending order (latest first)
      posts.sort((a, b) => b.firstPublishedAt - a.firstPublishedAt);

      const latestPosts = posts.slice(0, 3).map(post => {
        const author = authors[post.creatorId];

        return {
          id: post.id,
          title: post.title,
          firstPublishedAt: post.firstPublishedAt,
          uniqueSlug: post.uniqueSlug,
          author: {
            name: author.name,
            imageId: author.imageId
          }
        };
      });
      return latestPosts;
    })
    .catch(error => {
      console.error('Error fetching Medium data:', error)
      return [];
    });
}
