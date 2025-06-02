const username = 'alleappio';
const repoContainer = document.getElementById('repo-cards');

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const card = document.createElement('div');
      card.className = 'repo-card';

      const a = document.createElement('a');
      a.href = repo.html_url;
      let title = repo.name.replaceAll("_", " ");
      a.textContent = title;
      a.target = '_blank';
      card.appendChild(a);

      if (repo.description) {
        const desc = document.createElement('p');
        desc.textContent = repo.description;
        card.appendChild(desc);
      }

      repoContainer.appendChild(card);
    });
  })
  .catch(err => {
    console.error('Error fetching repos:', err);
    repoContainer.textContent = 'Could not load repositories.';
  });

function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
}
