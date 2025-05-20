<script lang="ts">
  import FeatureSteps_Image1 from "./FeatureSteps_Image1.svelte";
  import FeatureSteps_Image2 from "./FeatureSteps_Image2.svelte"
  import FeatureSteps_Image3 from "./FeatureSteps_Image3.svelte"
</script>
<section id="features" class="border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center">Features</h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
      </div>
      <div class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl font-bold leading-none mb-3">
            1st Feature Title
          </h3>
          <p class="mb-8">
            Feature Description
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa. Ipsum dolor sit amet consectetur. Nunc aliquet bibendum enim facilisis gravida neque convallis. Vitae justo eget magna fermentum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
            <br />
            <br />
  
            Images from:
  
            <a class="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <FeatureSteps_Image1/>
        </div>
      </div>
      <div class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <FeatureSteps_Image2/>
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl font-bold leading-none mb-3">
              2nd Feature Title
            </h3>
            <p class="text-gray-600 mb-8">
              Feature Description
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa.
              <br />
              <br />
              Images from:
  
              <a class="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-20">
          <div class="w-5/6 sm:w-1/2 p-6">
            <h3 class="text-3xl font-bold leading-none mb-3">
              3rd Feature Title
            </h3>
            <p class="mb-8">
              Feature Description
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris commodo quis imperdiet massa. Ipsum dolor sit amet consectetur. Nunc aliquet bibendum enim facilisis gravida neque convallis. Vitae justo eget magna fermentum. Facilisi morbi tempus iaculis urna id volutpat lacus laoreet non.
              <br />
              <br />
    
              Images from:
    
              <a class="text-orange-500 underline" href="https://undraw.co/">undraw.co</a>
            </p>
          </div>
          <div class="w-full sm:w-1/2 p-6">
            <FeatureSteps_Image3/>
          </div>
      </div>
    </div>
  </section>