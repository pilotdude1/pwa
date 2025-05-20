<script lang="ts">
  const testimonialsData = [
    {
      text: "I wanted a website that truly represented my creative work and personality. Web Design AI perfectly captured my vision and designed a website that is not only beautiful but also unique. They were a pleasure to work with, and I'm proud to showcase my portfolio on the site they created for me.",
      name: "Bob Johnson",
      profilePic:
        "https://images.unsplash.com/photo-1643746624529-0962b942e1ef?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      text: "Web Design AI completely transformed my small business with their innovative approach. The AI-powered design solutions they offered not only look amazing but are also highly effective in attracting customers. I'm thrilled with the results!",
      name: "Kevin Jordan",
      profilePic:
        "https://images.unsplash.com/photo-1707112244265-b14d638dd121?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      text: "Web Design AI has taken my e-commerce website to the next level. Their AI-driven design techniques have improved user experience and conversion rates. The team at Web Design AI is a game-changer in the web design industry",
      name: "Stuart Lang ",
      profilePic:
        "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=2334&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ]
</script>

<section id="testimonials">
  <div class="grid place-items-center w-full">
    <div class="max-w-6xl px-4 py-24 content-center justify-center">
      <h1 class="text-3xl text-center font-bold">Testimonials</h1>
      <div class="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
        {#each testimonialsData as data}
          <div class="card">
            <div class="card-body items-center text-center">
              <p>{data.text}</p>

              <div class="flex justify-center items-center gap-3 md:gap-4">
                <img
                  class="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={data.profilePic}
                  alt="XYZ feedback for SvelteShip"
                  width="48"
                  height="48"
                />
                <div>
                  <p class="font-semibold">{data.name}</p>
                  <p class="text-base-content/80 text-sm">
                    <a
                      href="https://www.producthunt.com/products/svelteship/reviews"
                      rel="nofollow noopener noreferrer"
                      target="_blank"
                      class="link">PH user</a
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .card {
    @apply w-full bg-base-100 shadow-xl;
  }
  .card-body {
    @apply items-center text-center;
  }
  .card img {
    @apply mask w-20 h-20 mask-circle object-cover;
  }
</style>
