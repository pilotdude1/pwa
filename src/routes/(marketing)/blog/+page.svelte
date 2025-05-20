<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content="Our blog posts." />
</svelte:head>

<div class="py-12 lg:py-16 px-6 max-w-4xl mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center mb-4"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
    >
      {blogInfo.name}
    </div>
  </div>

  <div class="grid gap-8 md:grid-cols-2">
    {#each sortedBlogPosts as post}
      <a href={post.link} class="block group">
        <div
          class="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-base-200 hover:border-primary/20 hover:scale-[1.02] active:scale-[0.98]"
        >
          <div class="p-6 md:p-8 flex flex-col flex-grow">
            <div
              class="flex items-center gap-2 text-sm font-medium text-accent mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
              {post.parsedDate?.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <div
              class="text-xl font-semibold text-base-content group-hover:text-primary transition-colors mb-3 line-clamp-2"
            >
              {post.title}
            </div>
            <div class="text-base-content/70 leading-relaxed line-clamp-3 mb-4">
              {post.description}
            </div>
            <div class="mt-auto pt-4 border-t border-base-200">
              <div
                class="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 hover:gap-2"
              >
                Read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>
