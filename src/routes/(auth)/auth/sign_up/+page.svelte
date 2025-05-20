<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../socials_config"
  import logo from "$lib/images/logo.png"

  export let data
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<main>
  <div class="h-full">
    <div class="h-screen">
      <div class="flex h-full">
        <div
          class="flex flex-1 flex-row items-center justify-center px-8 sm:px-10 lg:px-36 pb-20"
        >
          <div class="mx-auto w-full max-w-sm lg:w-96">
            <h1 class="text-3xl">Sign Up</h1>
            <p>
              Or <a
                class="underline font-medium text-primary-500 transition-all duration-300 smarthover:hover:text-primary-300"
                href="/auth/sign_in">sign in to your account</a
              >
            </p>
            <div class="text-center">
              <Auth
                supabaseClient={data.supabase}
                view="sign_up"
                redirectTo={`${data.url}/auth/callback`}
                providers={oauthProviders}
                socialLayout="horizontal"
                showLinks={false}
                appearance={sharedAppearance}
                additionalData={undefined}
              />
            </div>
          </div>
        </div>
        <div class="relative hidden flex-1 lg:grid lg:grid-cols-1 pb-20">
          <div class="mx-auto flex flex-col space-y-7">
            <div class="h-full bg-base-200 w-[1px]"></div>
            <div class="-ml-10 flex h-8 shrink-0 items-center">
              <a href="/">
                <img class="h-20 shrink-0 dark:hidden" src={logo} alt="Logo" />
                <img
                  class="hidden h-20 shrink-0 dark:block"
                  src={logo}
                  alt="Logo"
                />
              </a>
            </div>
            <div class="h-full bg-base-200 w-[1px]"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
