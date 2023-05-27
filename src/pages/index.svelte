<script>
  import { goto } from "@roxi/routify";

  let username = "";
  let password = "";
  let error = "Please enter valid username and password.";
  let showError = false;

  function handleLogin() {
    if (username == "admin" && password == "password") {
      // Perform login logic here
      $goto("/wc");
    } else {
      showError = true;
    }
  }

  $: (username || password) && (showError = false);
</script>

<div class="container">
  <div class="left">
    <h1>File Explorer Web Component</h1>
  </div>
  <div class="right">
    <div class="login-form">
      <div class="login-field">
        <label for="username">Username</label>
        <input type="text" id="username" bind:value={username} />
      </div>
      <div class="login-field">
        <label for="password">Password</label>
        <input type="password" id="password" bind:value={password} />
      </div>
      {#if showError}
        <div>
          <p class="error">{error}</p>
        </div>
      {/if}
      <div class="login-field">
        <button on:click={handleLogin}>Login</button>
      </div>
    </div>
  </div>
</div>

<style>
  .container {
    display: flex;
    height: 100vh;
  }

  .left {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #003049;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 40px;
    box-sizing: border-box;
  }

  .left h1 {
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login-form {
    width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .error {
    color: red;
    font-size: 0.8rem;
  }

  .login-field {
    margin-bottom: 16px;
  }

  .login-field label {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .login-field input {
    border-radius: 4px;
    font-size: 14px;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
  }

  .login-field button {
    border: none;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
  }
</style>
