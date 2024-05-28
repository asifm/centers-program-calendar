<script lang="ts">
	export let data;
</script>
<div class="p-10 continer">

    <h1 class="text-3xl font-bold underline bg-slate-100">
        Hello world!
      </h1>
      
    {#each data.records as record }
        <ul>
            <p class="font-serif hover:underline">{record["Program Name"]}</p>
        </ul>
    {/each}
</div>
