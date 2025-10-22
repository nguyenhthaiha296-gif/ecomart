// ====================== TỪ ĐIỂN XANH ======================
const plant = [
 const plants = [
  {
    name: "Cây Lưỡi Hổ",
    scientific: "Sansevieria trifasciata",
    img: "https://example.com/luoiho.jpg",
    desc: "Cây dễ trồng, lọc không khí cực tốt, đặc biệt hấp thụ CO₂ ban đêm.",
    use: "Thanh lọc không khí, trang trí phòng học, giúp tập trung.",
    care: "Tưới ít, ưa bóng bán phần.",
    reason: "Giúp giảm khí độc trong lớp học, cải thiện giấc ngủ."
  },
  {
    name: "Cây Trầu Bà",
    scientific: "Epipremnum aureum",
    img: "https://example.com/trauba.jpg",
    desc: "Cây dây leo dễ sống, mang ý nghĩa may mắn.",
    use: "Hấp thụ khí độc, dễ chăm sóc.",
    care: "Tưới 2–3 lần/tuần, tránh ánh nắng gắt.",
    reason: "Giúp học sinh làm quen với chăm sóc cây đơn giản."
  },
  {
    name: "Cây Lộc Vừng",
    scientific: "Barringtonia acutangula",
    img: "https://example.com/locvung.jpg",
    desc: "Loài cây thân gỗ nhỏ, thường trồng ở sân trường.",
    use: "Tạo bóng mát, hấp thụ bụi mịn.",
    care: "Cần đất ẩm, ánh sáng đầy đủ.",
    reason: "Góp phần làm không gian trường học xanh hơn."
  },
  {
    name: "Cây Xương Rồng Tai Thỏ",
    scientific: "Opuntia microdasys",
    img: "https://example.com/taitho.jpg",
    desc: "Cây mọng nước hình tai thỏ, tượng trưng cho sức sống mạnh mẽ.",
    use: "Trang trí bàn học, giảm stress khi nhìn vào màu xanh.",
    care: "Tưới rất ít, tránh ngập nước.",
    reason: "Nhắc học sinh về sự kiên trì và bền bỉ."
  },
  {
    name: "Cây Lan Ý",
    scientific: "Spathiphyllum wallisii",
    img: "https://example.com/lanyi.jpg",
    desc: "Cây có hoa trắng thanh khiết, dễ chăm.",
    use: "Hấp thụ các khí độc từ sơn, nhựa.",
    care: "Đất ẩm nhẹ, tránh ánh sáng mạnh.",
    reason: "Mang ý nghĩa hòa bình, cân bằng và học tập an lành."
  }
];
  },
  {
   const terms = [
  {
    term: "Carbon footprint",
    meaning: "Lượng khí CO₂ mà con người tạo ra từ hoạt động hàng ngày.",
    example: "Giảm đi xe máy, mang bình nước cá nhân để giảm carbon footprint."
  },
  {
    term: "Biodegradable",
    meaning: "Có thể phân hủy tự nhiên mà không gây hại cho môi trường.",
    example: "Ống hút giấy là sản phẩm biodegradable."
  },
  {
    term: "Phân loại rác",
    meaning: "Tách rác thành nhóm hữu cơ, tái chế, và rác thải nguy hại.",
    example: "Ở trường, bạn có thể phân loại rác bằng 3 thùng khác màu."
  },
  {
    term: "Đất trồng hữu cơ",
    meaning: "Đất không chứa hóa chất độc hại, an toàn cho cây và con người.",
    example: "Đất hữu cơ giúp cây phát triển bền vững, giữ ẩm tốt."
  },
  {
    term: "Tái chế (Recycle)",
    meaning: "Sử dụng lại vật liệu cũ để tạo sản phẩm mới.",
    example: "Làm chậu cây từ chai nhựa cũ là một cách tái chế."
  },
  {
    term: "Đa dạng sinh học",
    meaning: "Sự phong phú của các loài sinh vật trong một khu vực.",
    example: "Trường học có nhiều loại cây sẽ giúp tăng đa dạng sinh học."
  },
  {
    term: "Ô nhiễm không khí",
    meaning: "Không khí bị bẩn bởi khói bụi, khí độc từ xe cộ, nhà máy.",
    example: "Trồng nhiều cây xanh giúp giảm ô nhiễm không khí."
  }
];
const list = document.getElementById("list-tree");
const searchInput = document.getElementById("searchInput");

function renderTerms(filter = "") {
  list.innerHTML = "";
  const filtered = terms.filter((term) =>
    term.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((term) => {
    const card = document.createElement("div");
    card.className = "tree-card";
    card.innerHTML = `
      <img src="${term.image}" alt="${term.name}">
      <div class="tree-card-content">
        <h3>${term.name}</h3>
        <p><b>Tên khoa học:</b> ${term.science || "—"}</p>
        <p>${term.desc}</p>
        <p><b>Lợi ích:</b> ${term.benefit}</p>
      </div>
    `;
    list.appendChild(card);
  });
}

searchInput.addEventListener("input", (e) => renderTerms(e.target.value));
renderTerms();

// ====================== HÀNH ĐỘNG XANH ======================
const actionForm = document.getElementById("actionForm");
const actionList = document.getElementById("actionList");

let actions = JSON.parse(localStorage.getItem("greenActions")) || [];

function saveActions() {
  localStorage.setItem("greenActions", JSON.stringify(actions));
}

function renderActions() {
  actionList.innerHTML = "";
  actions.forEach((a, i) => {
    const div = document.createElement("div");
    div.className = "action-item";
    div.innerHTML = `
      <strong>${a.name}</strong> - ${a.desc}
      <span>Điểm: ${a.likes}</span>
      <button onclick="likeAction(${i})">Thích</button>
    `;
    actionList.appendChild(div);
  });
}

actionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("actionName").value.trim();
  const desc = document.getElementById("actionDesc").value.trim();
  if (!name || !desc) return alert("Vui lòng nhập đủ thông tin!");

  const points = detectGreenTerm(desc);
  actions.push({ name, desc, likes: points });
  saveActions();
  renderActions();
  renderLeaderboard();
  actionForm.reset();
});

function likeAction(i) {
  actions[i].likes++;
  saveActions();
  renderActions();
  renderLeaderboard();
}

function detectGreenTerm(text) {
  const keywords = ["trồng", "rác", "tái chế", "cây", "xanh", "nước"];
  let point = 1;
  keywords.forEach((k) => {
    if (text.toLowerCase().includes(k)) point += 2;
  });
  return point;
}

renderActions();

// ====================== BẢNG XẾP HẠNG ======================
const leaderboard = document.getElementById("leaderboardList");

function renderLeaderboard() {
  leaderboard.innerHTML = "";

  const grouped = {};
  actions.forEach((a) => {
    if (!grouped[a.name]) grouped[a.name] = 0;
    grouped[a.name] += a.likes;
  });

  const sorted = Object.entries(grouped)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (sorted.length === 0) {
    leaderboard.innerHTML = "<p>Chưa có ai trong bảng xếp hạng 🌱</p>";
    return;
  }

  sorted.forEach(([name, points], index) => {
    const div = document.createElement("div");
    div.className = "leader-item";
    div.innerHTML = `
      <span class="leader-rank">#${index + 1}</span>
      <span class="leader-name">${name}</span>
      <span class="leader-points">⭐ ${points} điểm</span>
    `;
    leaderboard.appendChild(div);
  });
}

renderLeaderboard();
