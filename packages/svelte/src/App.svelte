<script lang="ts">
  import { onMount } from 'svelte';

  const currentYear: number = new Date().getFullYear();

  onMount(() => {
    console.log('App mounted');
  });
</script>

<header class="preset-filled-primary-300-700">
  <h1 class="h1 text-4xl p-4 text-center">Desk Calendar</h1>
</header>

<main class="grow m-8 p-8 bg-emerald-800 rounded-3xl">
  <div class="p-4 lg:p-8">When I grow up, I will be a calendar</div>
</main>

<footer class="bg-primary-600-400 ">
  <p class="p-4 text-center text-sm text-white">
    &copy; {currentYear} Eric McIntyre. All rights reserved.
  </p>
</footer>

<style>
</style>
