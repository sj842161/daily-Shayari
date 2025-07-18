async function loadCategory(category) {
  const response = await fetch('shayari.json');
  const data = await response.json();
  const shayariList = data[category];
  const todayIndex = new Date().getDate() % shayariList.length;
  document.getElementById('shayari').innerText = shayariList[todayIndex];
}

// Default category on load
loadCategory('love');
