// Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dynamic year
document.getElementById('year').textContent = new Date().getFullYear();


//books
const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", image: "https://covers.openlibrary.org/b/id/8226191-L.jpg" },
    { title: "A Brief History of Time", author: "Stephen Hawking", category: "science", image: "https://covers.openlibrary.org/b/id/240726-L.jpg" },
    { title: "Clean Code", author: "Robert C. Martin", category: "technology", image: "https://covers.openlibrary.org/b/id/8091016-L.jpg" },
    { title: "The Art of War", author: "Sun Tzu", category: "history", image: "https://covers.openlibrary.org/b/id/9647485-L.jpg" },
    { title: "The Selfish Gene", author: "Richard Dawkins", category: "science", image: "https://covers.openlibrary.org/b/id/8114156-L.jpg" },
    { title: "1984", author: "George Orwell", category: "fiction", image: "https://covers.openlibrary.org/b/id/7222246-L.jpg" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "non-fiction", image: "https://covers.openlibrary.org/b/id/8378773-L.jpg" },
    { title: "Artificial Intelligence Basics", author: "Tom Taulli", category: "technology", image: "https://covers.openlibrary.org/b/id/10915397-L.jpg" }
  ];
  
  const booksContainer = document.getElementById("booksContainer");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  
  // Render Books
  function displayBooks(filteredBooks) {
    booksContainer.innerHTML = "";
  
    if (filteredBooks.length === 0) {
      booksContainer.innerHTML = `<p class="no-results">No books found.</p>`;
      return;
    }
  
    filteredBooks.forEach(book => {
      const card = document.createElement("div");
      card.classList.add("book-card");
      card.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h4>${book.title}</h4>
        <p>by ${book.author}</p>
        <p><strong>${book.category.toUpperCase()}</strong></p>
      `;
      booksContainer.appendChild(card);
    });
  }
  
  // Search + Filter
  function filterBooks() {
    const query = searchInput.value.toLowerCase();
    const category = categoryFilter.value;
  
    const filtered = books.filter(book => {
      const matchesCategory = category === "all" || book.category === category;
      const matchesSearch =
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.category.toLowerCase().includes(query);
  
      return matchesCategory && matchesSearch;
    });
  
    displayBooks(filtered);
  }
  
  // Event listeners
  searchInput.addEventListener("input", filterBooks);
  categoryFilter.addEventListener("change", filterBooks);
  
  // Initial load
  displayBooks(books);
  document.getElementById("year").textContent = new Date().getFullYear();
  