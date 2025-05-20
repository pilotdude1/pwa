<!-- ComparisonSection.svelte -->
<script lang="ts">
  import { onMount } from "svelte"

  let countdownValue = 120 // 2 minutes in seconds

  onMount(() => {
    const interval = setInterval(() => {
      if (countdownValue > 0) {
        countdownValue--
      }
    }, 1000)

    return () => clearInterval(interval)
  })
</script>

<section class="py-16 bg-base-100">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Comparison Section</h2>
      <p class="text-xl text-base-content/70 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt
      </p>
      <div class="divider max-w-md mx-auto"></div>
    </div>

    <div
      class="bg-base-100 carousel w-full max-w-5xl mx-auto rounded-lg shadow-xl flex justify-center bg-base-50"
    >
      <div class="carousel-item w-1/2 flex justify-center">
        <div
          class="bg-base-50 text-base-content p-4 md:p-8 h-full w-full max-w-xl"
        >
          <div class="flex flex-col h-full">
            <h3
              class="text-center text-xl md:text-2xl font-bold mb-4 md:mb-6 text-error"
            >
              Old Method
            </h3>

            <div class="divider divider-error"></div>

            <div class="space-y-4 md:space-y-6 grow">
              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-error/10 rounded-full flex items-center justify-center text-error"
                >
                  1
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Consectetur Adipiscing
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-error/10 rounded-full flex items-center justify-center text-error"
                >
                  2
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Sed Do Eiusmod
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-error/10 rounded-full flex items-center justify-center text-error"
                >
                  3
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Tempor Incididunt
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-error/10 rounded-full flex items-center justify-center text-error"
                >
                  4
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Labore Et Dolore
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Deserunt mollit anim id est laborum, nemo enim ipsam
                    voluptatem
                  </p>
                </div>
              </div>
            </div>

            <div class="divider divider-error"></div>

            <div class="mt-4 md:mt-6 p-3 md:p-4 bg-error/5 rounded-lg">
              <p class="text-error font-semibold text-sm md:text-base">
                Tempus: 2-3 horas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="carousel-item w-1/2 flex justify-center">
        <div
          class="bg-base-50 text-base-content p-4 md:p-8 h-full w-full max-w-xl"
        >
          <div class="flex flex-col h-full">
            <h3
              class="text-center text-xl md:text-2xl font-bold mb-4 md:mb-6 text-success"
            >
              Faster Method
            </h3>

            <div class="divider divider-success"></div>

            <div class="space-y-4 md:space-y-6 grow">
              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-success/10 rounded-full flex items-center justify-center text-success"
                >
                  1
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Magna Aliqua
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-success/10 rounded-full flex items-center justify-center text-success"
                >
                  2
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Quis Nostrud
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut fugit
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-success/10 rounded-full flex items-center justify-center text-success"
                >
                  3
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Exercitation
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 md:gap-4">
                <div
                  class="w-6 h-6 md:w-8 md:h-8 shrink-0 bg-success/10 rounded-full flex items-center justify-center text-success"
                >
                  4
                </div>
                <div>
                  <h4 class="font-semibold mb-1 md:mb-2 text-sm md:text-base">
                    Ullamco Laboris
                  </h4>
                  <p class="text-sm md:text-base text-base-content/70">
                    Et harum quidem rerum facilis est et expedita distinctio,
                    nam libero tempore
                  </p>
                </div>
              </div>
            </div>

            <div class="divider divider-success"></div>

            <div class="mt-4 md:mt-6 p-3 md:p-4 bg-success/5 rounded-lg">
              <p
                class="text-success font-semibold text-sm md:text-base flex items-center justify-between"
              >
                <span>Time spent:</span>
                <span class="flex items-center gap-1">
                  <span class="countdown font-mono">
                    <span style="--value:{Math.floor(countdownValue / 60)};"
                    ></span>
                  </span>
                  <span>m</span>
                  <span class="countdown font-mono">
                    <span style="--value:{countdownValue % 60};"></span>
                  </span>
                  <span>s</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="divider max-w-md mx-auto my-8"></div>

    <div class="flex justify-center">
      <a href="/auth/sign_up" class="btn btn-primary btn-lg"
        >Get Started With Better Method</a
      >
    </div>
  </div>
</section>
