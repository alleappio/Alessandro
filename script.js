const username = 'alleappio';
const repoList = document.getElementById('repo-list');

fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
  .then(response => response.json())
  .then(repos => {
    repos.forEach(repo => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = repo.html_url;
      a.textContent = repo.name;
      a.target = '_blank';
      li.appendChild(a);
      if (repo.description) {
        const desc = document.createElement('p');
        desc.textContent = repo.description;
        li.appendChild(desc);
      }
      repoList.appendChild(li);
    });
  })
  .catch(err => {
    console.error('Error fetching repos:', err);
    repoList.textContent = 'Could not load repositories.';
  });
