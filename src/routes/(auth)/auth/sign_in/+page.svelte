<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../socials_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"
  import logo from "$lib/images/logo.png"

  export let data
  let { supabase } = data

  onMount(() => {
    supabase.auth.onAuthStateChange(async (event: string) => {
      // Redirect to dashboard after sucessful login
      if (event == "SIGNED_IN") {
        // Verify user is authenticated with server
        const {
          data: { user },
        } = await supabase.auth.getUser()
        if (user) {
          // Delay needed because order of callback not guaranteed.
          // Give the layout callback priority to update state or
          // we'll just bounch back to login when /dashboard tries to load
          setTimeout(() => {
            goto("/dashboard")
          }, 1)
        }
      }
    })
  })
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verified! Please sign in.</span>
  </div>
{/if}

<main>
  <div class="h-full">
    <div class="h-screen">
      <div class="flex h-full">
        <div
          class="flex flex-1 flex-row items-center justify-center px-8 sm:px-10 lg:px-36 pb-20"
        >
          <div class="mx-auto w-full max-w-sm lg:w-96">
            <h1 class="text-3xl">Sign In</h1>
            <p>
              Or <a
                class="underline font-medium text-primary-500 transition-all duration-300 smarthover:hover:text-primary-300"
                href="/auth/sign_up">create a new account</a
              >
            </p>
            <Auth
              supabaseClient={data.supabase}
              view="sign_in"
              redirectTo={`${data.url}/auth/callback`}
              providers={oauthProviders}
              socialLayout="horizontal"
              showLinks={false}
              appearance={sharedAppearance}
              additionalData={undefined}
            />

            <div class="flex flex-col mt-8">
              <span class="text-center justify-center px-2">Or</span>
              <div class="inset-0 flex justify-center text-sm border-t"></div>
              <div class="flex justify-center pt-5">
                <div class="col-6 form-widget">
                  <Auth
                    supabaseClient={data.supabase}
                    view="magic_link"
                    redirectTo={`${data.url}/auth/callback`}
                    showLinks={false}
                    appearance={sharedAppearance}
                  />
                </div>
              </div>
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
