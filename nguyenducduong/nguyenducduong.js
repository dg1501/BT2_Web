// nguyenducduong.js
const API_URL = "http://localhost:1880/timkiem";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("searchForm");
  const qInput = document.getElementById("q");
  const statusEl = document.getElementById("status");
  const resultEl = document.getElementById("result");
  const clearBtn = document.getElementById("clearBtn");

  clearBtn.addEventListener("click", () => {
    qInput.value = "";
    statusEl.textContent = "Đã xóa form.";
    resultEl.innerHTML = "";
  });

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    const q = qInput.value.trim();

    if (!q) {
      statusEl.textContent = "Vui lòng nhập từ khóa.";
      return;
    }

    statusEl.textContent = "Đang gửi truy vấn...";
    resultEl.innerHTML = "";

    try {
      const url = new URL(API_URL);
      url.searchParams.set("q", q); // chỉ gửi từ khóa thôi

      const resp = await fetch(url.toString(), {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }

      const data = await resp.json();
      statusEl.textContent = "Nhận kết quả thành công.";
      renderResult(data, resultEl);
    } catch (err) {
      console.error(err);
      statusEl.textContent = `Lỗi: ${err.message}`;
      resultEl.innerHTML = `<div class="result-item">Không thể gọi API.</div>`;
    }
  });

  qInput.focus();
});

function renderResult(data, container) {
  container.innerHTML = "";
  const makeItem = (title, content) => {
    const el = document.createElement("div");
    el.className = "result-item";
    el.innerHTML = `<strong>${escapeHtml(title)}</strong><pre>${escapeHtml(
      content
    )}</pre>`;
    return el;
  };

  if (Array.isArray(data)) {
    if (!data.length) {
      container.innerHTML = `<div class="result-item">Không tìm thấy kết quả.</div>`;
      return;
    }
    data.forEach((item, i) =>
      container.appendChild(
        makeItem(`Kết quả #${i + 1}`, JSON.stringify(item, null, 2))
      )
    );
  } else if (typeof data === "object") {
    container.appendChild(makeItem("Dữ liệu", JSON.stringify(data, null, 2)));
  } else {
    container.appendChild(makeItem("Kết quả", String(data)));
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
