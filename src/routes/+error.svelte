<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="max-w-screen-lg xl:mx-auto pt-8 mx-8 pb-8">
	<h1>{$page.status}: {$page.error?.message}</h1>
</div>
