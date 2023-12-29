// local reviews data
const reviews = [
    {
      id: 1,
      name: 'Himeko',
      job: 'Crew Recruiter',
      img: 'himeko.jpg',
      text: "An adventurous scientist who encountered and repaired a stranded train as a child, she now ventures across the universe with the Astral Express as its navigator.",
    },
    {
      id: 2,
      name: 'Welt Yang',
      job: 'Team Aid: Collaborative Support',
      img: 'welt yang.jpg',
      text: 'An animator by trade, Welt is a seasoned member of the Astral Express Crew and the former sovereign of Anti-Entropy who has saved Earth from annihilation time and time again. He inherited the name of the world, "Welt."',
    },
    {
      id: 3,
      name: 'March 7th',
      job: 'Guardian Sentinel: Defensive Champion',
      img: 'march7th.jpg',
      text: "As the self-proclaimed warrior of the Astral Express, the cheerful and enthusiastic March 7th has a duty to shield her team from harm. March 7th's reputation as a strong support unit revolves around her Skill, which provides a Shield to herself or an ally.",
    },
    {
      id: 4,
      name: 'Dan Heng',
      job: 'Supreme Battle Custodian: Formidable Guardian',
      img: 'dan heng.jpg',
      text: "A cold and reserved young man who wields a spear known as Cloud-Piercer. He acts as the Express' guard on its long trailblazing expedition. Dan Heng never talks much about his past. In fact, he joined the Express Crew to escape from a past of his own making.",
    },
    {
      id: 5,
      name: 'Pom-Pom',
      job: 'Train conductor',
      img: 'pompom.jpg',
      text: "Pom-Pom appears to be a small, rabbit-like creature with with large ears who happens to be the train's conductor and operator. They have dark gray and white fur, blue eyes, and wear a modified hog-head hat and large-collared coat that conceals their arms from view.",  
    },
  ];

    // MODIFICATION 1: Using unique images and adding character description (can be found in the code above).

  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  const stat = document.getElementById('stat');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  // show random person
  randomBtn.addEventListener('click', function () {
    console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });

  // queries to be added in order to make the code work below for their respective buttons...
const firstBtn = document.querySelector('.first');
const lastBtn = document.querySelector('.last');

// MODIFICATION 2: A button that goes to the start of the review section (the very first person).
firstBtn.addEventListener('click', function () {
    currentItem = 0;
    showPerson(currentItem);
  });
  
  // MODIFICATION 2: A button that goes to the end of the review section (the very last person).
  lastBtn.addEventListener('click', function () {
    currentItem = reviews.length - 1;
    showPerson(currentItem);
  });