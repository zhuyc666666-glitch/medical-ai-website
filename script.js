const submitButton = document.querySelector("#mock-submit");
const queryInput = document.querySelector("#research-query");
const resultBox = document.querySelector("#assistant-result");

if (submitButton && queryInput && resultBox) {
  submitButton.addEventListener("click", () => {
    const query = queryInput.value.trim();
    const topic = query || "该医学问题";

    resultBox.innerHTML = `
      <strong>研究思路草稿</strong>
      <p>围绕“${topic}”，可优先整理：临床背景、核心问题、关键词、相关指南、可讨论病例和需要进一步查证的证据来源。</p>
    `;
  });
}
