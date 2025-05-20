export const blogInfo = {
  name: "SvelteShip Blog",
  description: "Exploring modern web development with SvelteKit",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "Building a Real-time Collaborative Editor with SvelteKit and WebSocket",
    description: "Learn how to create a collaborative text editor with real-time updates using SvelteKit's WebSocket integration and operational transformation.",
    link: "/blog/real-time-collaborative-editor",
    date: "2024-03-15",
  },
  {
    title: "Building a Progressive Web App with SvelteKit and Service Workers",
    description: "Step-by-step guide to implementing offline capabilities and push notifications in your SvelteKit application.",
    link: "/blog/sveltekit-pwa-implementation",
    date: "2024-03-10",
  },
  {
    title: "Building a Multi-language Blog with SvelteKit and i18n",
    description: "Implement internationalization in your SvelteKit blog with dynamic routing, content translation, and SEO optimization.",
    link: "/blog/multilingual-sveltekit-blog",
    date: "2024-03-05",
  }
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
