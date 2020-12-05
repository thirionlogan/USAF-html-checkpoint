const movies = [
  {
    name: 'Poltergeist',
    imagesrc: 'https://thumbs.gfycat.com/FixedFriendlyBilby-small.gif',
    released: '4 June 1982',
    tags: ['Horror', 'Thriller'],
    cast: ['JoBeth Williams', "Heather O'Rourke", 'Craig T. Nelson'],
    description:
      'A young family are visited by ghosts in their home. At first the ghosts appear friendly, moving objects around the house to the amusement of everyone, then they turn nasty and start to terrorise the family before they "kidnap" the youngest daughter.',
  },
  {
    name: 'Mad Max Fury Road',
    imagesrc:
      'https://laughingsquid.com/wp-content/uploads/2015/05/tumblr_nocnwrmOw81qzyw3co1_540.gif',
    released: '15 May 2015',
    tags: ['Action', 'Adventure', 'Sci-Fi'],
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    description:
      'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
  },
  {
    name: 'TRON',
    imagesrc:
      'https://i.pinimg.com/originals/3a/56/37/3a56379eb602de952d1dc9923444e700.gif',
    released: '9 July 1982 ',
    tags: ['Action', 'Adventure', 'Sci-Fi'],
    cast: ['Jeff Bridges', 'Bruce Boxleitner', 'David Warner'],
    description:
      'A computer hacker is abducted into the digital world and forced to participate in gladiatorial games where his only chance of escape is with the help of a heroic security program.',
  },
  {
    name: 'Drive',
    imagesrc:
      'https://i.pinimg.com/originals/96/47/54/96475449120cab915f4a6dde974d9cab.gif',
    released: '16 September 2011',
    tags: ['Crime', 'Drama'],
    cast: ['Ryan Gosling', 'Carey Mulligan', 'Bryan Cranston'],
    description:
      'A mysterious Hollywood stuntman and mechanic moonlights as a getaway driver and finds himself in trouble when he helps out his neighbor.',
  },
  {
    name: 'Pulp Fiction',
    imagesrc:
      'https://i.pinimg.com/originals/e4/5b/a2/e45ba221e747798e48e153836b2dbf5b.jpg',
    released: '',
    tags: ['Crime', 'Drama'],
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    description:
      'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
  },
  {
    name: 'Wargames',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BMTMyMTE3OTk3NF5BMl5BanBnXkFtZTcwOTkwNDc3NA@@._V1_.jpg',
    released: '3 June 1983',
    tags: ['Action', 'Adventure', 'Drama'],
    cast: ['Matthew Broderick', 'Ally Sheedy', 'John Wood'],
    description:
      'A young man finds a back door into a military central computer in which reality is confused with game-playing, possibly starting World War III.',
  },
  {
    name: 'Pokémon: The First Movie - Mewtwo Strikes Back',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BN2NkZjA0OWUtZDgyMy00MjIxLWJhZTEtYjdmYzVjZTQ3YWRiL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_.jpg',
    released: '10 November 1999',
    tags: ['Animation', 'Action', 'Adventure'],
    cast: ['Veronica Taylor', 'Rachael Lillis', 'Eric Stuart'],
    description:
      'Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.',
  },
  {
    name: 'The Lord of the Rings: The Fellowship of the Ring',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg',
    released: '19 December 2001',
    tags: ['Action', 'Adventure', 'Drama'],
    cast: ['Elijah Wood', 'Orlando Bloom', 'Ian McKellen'],
    description:
      'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
  },
  {
    name: 'The Lord of the Rings: The Two Towers',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    released: '18 December 2002',
    tags: ['Action', 'Adventure', 'Drama'],
    cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
    description:
      "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
  },
  {
    name: 'The Lord of the Rings: The Return of the King',
    imagesrc: 'https://i.imgur.com/W52kzdD.jpeg',
    released: '17 December 2003',
    tags: ['Action', 'Adventure', 'Drama'],
    cast: ['Elijah Wood', 'Viggo Mortensen', 'Ian McKellen'],
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
  {
    name: 'Star Wars: Episode I - The Phantom Menace',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    released: '19 May 1999',
    tags: ['Action', 'Adventure', 'Fantasy'],
    cast: ['Ewan McGregor', 'Liam Neeson', 'Natalie Portman'],
    description:
      'Two Jedi escape a hostile blockade to find allies and come across a young boy who may bring balance to the Force, but the long dormant Sith resurface to claim their original glory.',
  },
  {
    name: 'Star Wars: Episode II - Attack of the Clones',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_.jpg',
    released: '16 May 2002',
    tags: ['Action', 'Adventure', 'Fantasy'],
    cast: [' Hayden Christensen', 'Natalie Portman', 'Ewan McGregor'],
    description:
      'Ten years after initially meeting, Anakin Skywalker shares a forbidden romance with Padmé Amidala, while Obi-Wan Kenobi investigates an assassination attempt on the senator and discovers a secret clone army crafted for the Jedi.',
  },
  {
    name: 'Star Wars: Episode III - Revenge of the Sith',
    imagesrc:
      'https://images.moviesanywhere.com/ae548928d15ceddbb6e1a6d16707fafd/8f079b10-aff5-4f2b-82f0-789ae7fedaea.jpg',
    released: '19 May 2005',
    tags: ['Action', 'Adventure', 'Fantasy'],
    cast: [' Hayden Christensen', 'Natalie Portman', 'Ewan McGregor'],
    description:
      'Three years into the Clone Wars, the Jedi rescue Palpatine from Count Dooku. As Obi-Wan pursues a new threat, Anakin acts as a double agent between the Jedi Council and Palpatine and is lured into a sinister plan to rule the galaxy.',
  },
  {
    name: 'Star Wars: Episode IV - A New Hope',
    imagesrc: 'https://i.imgur.com/lGA6z28.jpeg',
    released: '25 May 1977',
    tags: ['Action, Adventure, Fantasy'],
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },
  {
    name: 'Star Wars: Episode V - The Empire Strikes Back',
    imagesrc: 'https://i.imgur.com/72jbxZ5.gif',
    released: '20 June 1980',
    tags: ['Action', 'Adventure', 'Fantasy'],
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    description:
      'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.',
  },
  {
    name: 'Star Wars: Episode VI - Return of the Jedi',
    imagesrc:
      'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_UY1200_CR72,0,630,1200_AL_.jpg',
    released: '25 May 1983',
    tags: ['Action', 'Adventure', 'Fantasy'],
    cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
    description:
      "After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor's trap.",
  },
  {
    name: 'Logan',
    imagesrc: 'https://i.imgur.com/3Mi1ary.jpeg',
    released: '3 March 2017',
    tags: ['Action', 'Drama', 'Sci-Fi '],
    cast: ['Hugh Jackman', 'Patrick Stewart', 'Dafne Keen'],
    description:
      'In a future where mutants are nearly extinct, an elderly and weary Logan leads a quiet life. But when Laura, a mutant child pursued by scientists, comes to him for help, he must get her to safety.',
  },
  {
    name: 'Batman Begins',
    imagesrc: 'https://i.imgur.com/5cAQzN6.jpeg',
    released: '15 June 2005',
    tags: ['Action', 'Adventure'],
    cast: ['Christian Bale', 'Michael Caine', 'Ken Watanabe'],
    description:
      'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
  },
  {
    name: 'Avengers: Infinity War',
    imagesrc: 'https://i.imgur.com/lweGxbJ.jpeg',
    released: '27 April 2018',
    tags: ['Action', 'Adventure', 'Sci-Fi '],
    cast: ['Robert Downey Jr.', 'Chris Hemsworth', 'Mark Ruffalo'],
    description:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
  },
  {
    name: 'Deadpool',
    imagesrc: 'https://i.imgur.com/L68FtMA.jpg',
    released: '12 February 2016',
    tags: ['Action', 'Adventure', 'Comedy'],
    cast: ['Ryan Reynolds', 'Morena Baccarin', 'T.J. Miller'],
    description:
      'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.',
  },
  {
    name: 'American Psycho',
    imagesrc:
      'https://images-na.ssl-images-amazon.com/images/I/71LyK5CqyeL._AC_SL1424_.jpg',
    released: '14 April 2000',
    tags: ['Comedy', 'Crime', 'Drama '],
    cast: ['Christian Bale', 'Justin Theroux', 'Josh Lucas'],
    description:
      'A wealthy New York City investment banking executive, Patrick Bateman, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent, hedonistic fantasies.',
  },
];

function navigateToPage(page, buttonId) {
  const buttons = ['homeButton', 'loginButton'];
  const pages = ['loginPage', 'browsePage', 'movieDetailsPage'];

  pages
    .filter((value) => {
      return page !== value;
    })
    .forEach((elementId) => {
      document.getElementById(elementId).classList.add('hide');
    });

  buttons
    .filter((iD) => {
      return buttonId !== iD;
    })
    .forEach((elementId) => {
      document.getElementById(elementId).classList.remove('highlight');
    });

  var pageNode = document.getElementById(page);
  pageNode.classList.remove('hide');

  var buttonNode = document.getElementById(buttonId);
  buttonNode.classList.add('highlight');
}

function navigateToMoviePage(movie) {
  var movieDetails = document.getElementById('movieDetails');
  movieDetails.innerHTML = '';

  var movieImage = document.createElement('img');
  movieImage.loading = 'lazy';
  movieImage.alt = `${movie.name} poster`;
  movieImage.src = movie.imagesrc;
  movieDetails.appendChild(movieImage);

  var movieMeta = document.createElement('DIV');
  movieDetails.appendChild(movieMeta);

  var movieTitle = document.createElement('h1');
  movieTitle.innerText = movie.name;
  movieMeta.appendChild(movieTitle);

  var movieReleased = document.createElement('h2');
  movieReleased.innerText = `Released ${movie.released}`;
  movieMeta.appendChild(movieReleased);

  var movieTags = document.createElement('P');
  movieTags.innerText = `${movie.tags.join(', ')} | ${movie.cast.join(', ')}`;
  movieMeta.appendChild(movieTags);

  var movieDescription = document.createElement('P');
  movieDescription.innerText = movie.description;
  movieMeta.appendChild(movieDescription);

  navigateToPage('movieDetailsPage');
}

function loadResources() {
  const searchText = document.getElementById('search').value;
  var browsePage = document.getElementById('browsePage');
  browsePage.innerHTML = '';
  movies
    .filter((movie) => {
      if (!searchText) {
        return true;
      } else {
        return (
          movie.name.toLowerCase().includes(searchText.toLowerCase()) ||
          movie.description.toLowerCase().includes(searchText.toLowerCase())
        );
      }
    })
    .sort((movieA, movieB) => {
      return movieA.name.toLowerCase() > movieB.name.toLowerCase() ? 1 : -1;
    })
    .forEach((movie) => {
      var movieElement = document.createElement('img');
      movieElement.src = movie.imagesrc;
      movieElement.loading = 'lazy';
      movieElement.alt = `${movie.name} poster`;
      movieElement.onclick = () => navigateToMoviePage(movie);
      browsePage.appendChild(movieElement);
    });
}

console.log('Please enable javascript to run this webpage.');
