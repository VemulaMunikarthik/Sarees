// Sample sarees data
const sarees = [
  {
    id: 1,
    name: "Silk Saree",
    price: 1500,
    model: "SILK123",
    available: true,
    image: "https://images.unsplash.com/photo-1",
    description: "Beautiful red silk saree with golden border.",
  },
  {
    id: 2,
    name: "Cotton Saree",
    price: 1000,
    model: "COTTON456",
    available: false,
    image: "https://images.unsplash.com/photo-2",
    description: "Comfortable cotton saree, perfect for summer.",
  },
  {
    id: 3,
    name: "Designer Saree",
    price: 2000,
    model: "DESIGN789",
    available: true,
    image: "https://images.unsplash.com/photo-3",
    description: "Trendy designer saree for parties.",
  },
  {
    id: 4,
    name: "Kanjivaram Saree",
    price: 2500,
    model: "KANJI321",
    available: false,
    image: "https://images.unsplash.com/photo-4",
    description: "Traditional Kanjivaram silk saree.",
  },
   {
    id: 6,
    name: "Silk Saree",
    price: 1500,
    model: "SILK123",
    available: true,
    image: "https://images.unsplash.com/photo-1",
    description: "Beautiful red silk saree with golden border.",
  }
];

const sareeList = document.getElementById('saree-list');
const sareeDetail = document.getElementById('saree-detail');

// Display all sarees (cards)
sarees.forEach(saree => {
  const card = document.createElement('div');
  card.className = 'saree-card';
  card.innerHTML = `
    <img src="${saree.image}" alt="${saree.name}" class="saree-img" />
    <h3>${saree.name}</h3>
    <p>Model: ${saree.model}</p>
    <p>Price: ₹${saree.price}</p>
    <p class="${saree.available ? 'available':'not-available'}">${saree.available ? 'Available' : 'Not Available'}</p>
  `;
  card.onclick = () => showSareeDetail(saree);
  sareeList.appendChild(card);
});

// Show details for selected saree
function showSareeDetail(saree) {
  sareeDetail.innerHTML = `
    <button class="close-btn" onclick="closeSareeDetail()">Close</button>
    <img src="${saree.image}" alt="${saree.name}" class="saree-img" />
    <h2>${saree.name}</h2>
    <p>Model: ${saree.model}</p>
    <p>Price: ₹${saree.price}</p>
    <p class="${saree.available ? 'available':'not-available'}">${saree.available ? 'Available' : 'Not Available'}</p>
    <p>${saree.description}</p>
  `;
  sareeDetail.classList.add('show');
  window.scrollTo({ top: sareeDetail.offsetTop, behavior: 'smooth' });
}

function closeSareeDetail() {
  sareeDetail.classList.remove('show');
}

