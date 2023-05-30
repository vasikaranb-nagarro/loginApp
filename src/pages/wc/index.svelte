<script>
  import { folder, isDarkMode } from "../../store/store";
  import { goto } from "@roxi/routify";

  folder.set({ name: "root", type: "folder", children: [] });

  function toggleMode() {
    isDarkMode.set(!$isDarkMode);
  }

  function folderupdate(event) {
    folder.set(event.detail.folder);
  }

  function handleLogut() {
    $goto('/');
  }

  $: console.log($folder);
</script>


<div class="header">
  <button class="logout" on:click={handleLogut}>Logout</button>
</div>
<div class="container">
  <div class="theme">
    <label class="toggle-switch-label">
      <input type="checkbox" on:change={toggleMode} />
      <span class="toggle-switch" class:dark={$isDarkMode} />
      {#if $isDarkMode}
        Dark Mode
      {:else}
        Light Mode
      {/if}
    </label>
  </div>
  <add-file
    folder={$folder}
    darkmode={$isDarkMode}
    on:foldersave={folderupdate}
  />
</div>

<style>
  .theme {
    display: flex;
    justify-content: space-around;
    margin-right: -15rem;
    margin-bottom: 1rem;
  }
  .toggle-switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .toggle-switch::before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    top: 2px;
    left: 2px;
    background-color: #fff;
    border-radius: 50%;
    transition: transform 0.3s;
  }

  .toggle-switch.dark {
    background-color: #444;
  }

  .toggle-switch.dark::before {
    transform: translateX(20px);
  }

  .toggle-switch-label {
    display: flex;
    align-items: center;
    margin-left: 8px;
  }
  .toggle-switch-label input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .toggle-switch-label span {
    margin-right: 0.8rem;
  }
  .logout {
   border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    width: 96px;
    height: 37px;
    padding: 10px;
    background-color: #0c0a09;
    color: #fff;
  }
  .header {
    display: flex;
    padding: 15px;
    height: 70px;
    flex-direction: row-reverse;
  }
</style>
