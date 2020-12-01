const movies = [
  {
    name: 'Poltergeist',
    imagesrc: 'https://thumbs.gfycat.com/FixedFriendlyBilby-small.gif',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Mad Max Fury Road',
    imagesrc:
      'https://laughingsquid.com/wp-content/uploads/2015/05/tumblr_nocnwrmOw81qzyw3co1_540.gif',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'TRON',
    imagesrc:
      'https://i.pinimg.com/originals/3a/56/37/3a56379eb602de952d1dc9923444e700.gif',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Drive',
    imagesrc:
      'https://i.pinimg.com/originals/96/47/54/96475449120cab915f4a6dde974d9cab.gif',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Pulp Fiction',
    imagesrc:
      'https://i.pinimg.com/originals/e4/5b/a2/e45ba221e747798e48e153836b2dbf5b.jpg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Wargames',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_.jpg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Kanto Showdown',
    imagesrc: 'https://i.imgur.com/r681w9w.png',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Return of the King',
    imagesrc: 'https://i.imgur.com/W52kzdD.jpeg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'A New Hope',
    imagesrc: 'https://i.imgur.com/lGA6z28.jpeg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Empire Strikes Back',
    imagesrc: 'https://i.imgur.com/72jbxZ5.gif',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Logan',
    imagesrc: 'https://i.imgur.com/3Mi1ary.jpeg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Batman Begins',
    imagesrc: 'https://i.imgur.com/5cAQzN6.jpeg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Avengers Infinity War',
    imagesrc: 'https://i.imgur.com/lweGxbJ.jpeg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
  {
    name: 'Deadpool',
    imagesrc: 'https://i.imgur.com/L68FtMA.jpg',
    released: '',
    tags: [''],
    cast: [''],
    description: '',
  },
];

function navigateToPage(page) {
  const pages = ['loginPage', 'browsePage', 'movieDetails'];
  pages
    .filter((value) => {
      return page !== value;
    })
    .forEach((elementId) => {
      document.getElementById(elementId).classList.add('hide');
    });
  var pageNode = document.getElementById(page);
  pageNode.classList.remove('hide');
}

function navigateToMoviePage(movie) {
  var movieDetails = document.getElementById('movieDetails');
  movieDetails.innerHTML = '';
  movieDetails.innerText = 'HELLO';
  //poster
  var movieImage = document.createElement('img');
  movieImage.loading = 'lazy';
  movieImage.alt = `${movie.name} poster`;
  movieImage.src = movie.imagesrc;
  movieDetails.appendChild(movieImage);
  //

  navigateToPage('movieDetailsPage');
}

function loadResources() {
  movies.forEach((movie) => {
    var movieElement = document.createElement('img');
    movieElement.src = movie.imagesrc;
    movieElement.loading = 'lazy';
    movieElement.alt = `${movie.name} poster`;
    movieElement.onclick = () => navigateToMoviePage(movie);
    document.getElementById('browsePage').appendChild(movieElement);
  });
}

console.log('Please enable javascript to run this webpage.');
