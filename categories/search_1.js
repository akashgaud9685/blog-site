const blogData = [
  { title: "What is cloud computing?", url: "../categories/What-is-cloud-computing.html" },
  { title: "What is AI?", url: "../categories/what-is-ai.html" },
  { title: "What are the components of computer?", url: "../categories/What-are-the-components-of-a-computer.html" },
  { title: "time management tips for students.", url: "../categories/time-management-tips.html" },
  { title: "ahmedabad plane crash full details.", url: "../categories/ahmedabad-plane-crash.html" },
  { title: "what is the difference between college and university.", url: "../categories/difference-between-college-and-university.html" },
  { title: "sitare zameen par relesed", url: "../categories/sitare-zameen-par.html"},
  { title: "india's important freedom fighters.", url: "../categories/gk/important-freedom-fighters.html"},
];

const searchInput = document.querySelector('.search-form input');
const searchForm = document.querySelector('.search-form');
const resultsContainer = document.createElement('div');
resultsContainer.classList.add('search-results');
searchForm.appendChild(resultsContainer);

let currentResults = [];

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  resultsContainer.innerHTML = '';
  currentResults = [];

  if (!query) return;

  currentResults = blogData.filter(post => post.title.toLowerCase().includes(query));

  currentResults.forEach(post => {
    const link = document.createElement('a');
    link.href = post.url;
    link.textContent = post.title;
    resultsContainer.appendChild(link);
  });
});

// Hide suggestions if clicked outside
document.addEventListener('click', (e) => {
  if (!searchForm.contains(e.target)) {
    resultsContainer.innerHTML = '';
  }
});

// Redirect to first match on form submit
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (currentResults.length > 0) {
    window.location.href = currentResults[0].url;
  } else {
    alert("No matching blog found.");
  }
});
