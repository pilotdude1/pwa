<script lang="ts">
    const steps = [
        {
            title: "Step One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
            </svg>`
        },
        {
            title: "Step Two",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>`
        },
        {
            title: "Step Three",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                <path d="M8 9h8"/>
                <path d="M8 13h6"/>
            </svg>`
        }
    ];
</script>

<section class="py-16">
    <div class="container mx-auto px-4 mt-6">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">How It Works</h2>
            <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {#each steps as step, index}
                <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div class="card-body items-center text-center">
                        <!-- Step number badge -->
                        <div class="badge badge-primary badge-lg mb-4">Step {index + 1}</div>
                        
                        <!-- Icon -->
                        <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                            {@html step.icon}
                        </div>
                        
                        <!-- Title -->
                        <h3 class="card-title text-xl mb-2">{step.title}</h3>
                        
                        <!-- Description -->
                        <p class="text-base-content/70">{step.description}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    .card {
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Hover effect */
    .card:hover {
        transform: translateY(-5px);
    }
</style> 