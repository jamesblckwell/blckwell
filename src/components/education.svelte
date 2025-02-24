<script lang="ts">
	export let title: string, startDate: string, endDate: string;
</script>

<h3 class="text-xl mb-1">
	<span class="font-semibold">{title}</span>
</h3>
<p class="mb-4">{startDate} &ndash; {endDate}</p>
<p class="mb-8"><slot /></p>
