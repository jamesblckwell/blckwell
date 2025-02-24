<script lang="ts">
	export let title: string,
		company: string,
		startDate: string,
		endDate: string,
		duration: string,
		responsibilities: string[];
</script>

<h3 class="text-xl mb-1">
	<span class="font-semibold">{title}</span> @ {company}
</h3>
<p class="mb-4">{startDate} &ndash; {endDate} {duration}</p>
<ol class="list-disc ml-6 mb-8">
	{#each responsibilities as responsibility}
		<li>{responsibility}</li>
	{/each}
</ol>
