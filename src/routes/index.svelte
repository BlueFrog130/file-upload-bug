<script lang="ts">
  let files: string[] = [];
  let form: HTMLFormElement;
  const upload = async () => {
    const body = new FormData(form);
    const response = await fetch("/upload", {
      method: "POST",
      body,
    });
    const json = await response.json();
    files = [...files, ...json];
  };
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<p>Control image: <a target="__blank" href="/control.png">control.png</a></p>

<form bind:this={form} on:submit|preventDefault={upload}>
  <input name="files" type="file" accept="image/*" multiple />
  <input type="submit" value="Submit" />
</form>

<h2>Uploaded Files</h2>
<ul>
  {#each files as file}
    <li>
      <a target="__blank" href={`/${file}`}>{file}</a>
    </li>
  {/each}
</ul>

<style>
  form {
    display: grid;
    gap: 1rem;
    grid-template-columns: min-content;
  }
</style>
