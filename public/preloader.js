const preloader = document.createElement("div")
preloader.id = "preloader"

const theme =
  JSON.parse(localStorage.getItem("theme_store") || "{}")?.state?.theme ===
  "dark"
    ? "dark"
    : "light"

const shadow = preloader.attachShadow({ mode: "open" })

shadow.innerHTML = `
  <style>
    :host {
      all: initial;
      box-sizing: border-box;
      position: fixed;
      inset: 0;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-family: 'Inter', sans-serif;
      background-color: ${theme === "dark" ? "#252933" : "#ffffff"};
      color: ${theme === "dark" ? "#d1d5db" : "#1f2937"};
      transition: opacity 0.3s ease;
      width: 100vw;
    }

    .spinner {
      width: 64px;
      height: 64px;
      border: 6px solid ${theme === "dark" ? "#3f3f46" : "#e5e7eb"};
      border-top: 6px solid ${theme === "dark" ? "#5EDFFA" : "#0094D4"};
      border-radius: 50%;
      animation: spin 1s ease-in-out infinite;
      margin-bottom: 24px;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    .text {
      font-size: 18px;
      font-weight: 600;
      text-align: center;
      max-width: 90%;
      line-height: 1.5;
      color: inherit;
    }

    .sub {
      font-size: 14px;
      color: ${theme === "dark" ? "#9ca3af" : "#6b7280"};
      margin-top: 6px;
    }
  </style>
  <div class="spinner"></div>
  <div class="text">Loading product catalog...</div>
  <div class="sub">Please wait while we prepare the experience.</div>
`

document.body.appendChild(preloader)
