const languages = [
  {
    title: 'HTML',
    description:
      'HTML is the standard markup language for Web pages. With HTML you can create your own Website. HTML is easy to learn - You will enjoy it!',
    cardImage: './Images/Html.png',
  },
  {
    title: 'CSS',
    description: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.',
    cardImage: './Images/Css.webp',
  },
  {
    title: 'JAVASCRIPT',
    description: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.',
    cardImage: './Images/Js.png',
  },
  {
    title: 'REACT',
    description: 'React is a free open-source front-end JS library for building user interfaces based on UI components. It is maintained by Meta and a individual developers.',
    cardImage: './Images/React.jpg',
  },
  {
    title: 'C++',
    description: 'C++ is a high-level general-purpose programming language created by Danish computer scientist Bjarne Stroustrup as an extension of the C programming language,',
    cardImage: './Images/C++.jpg',
  },
  {
    title: 'C',
    description: 'C is a general-purpose computer programming language. It was created in the 1970s by Dennis Ritchie, and remains very widely used and influential.',
    cardImage: './Images/C.png',
  },
  {
    title: 'PYTHON',
    description: 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use ofindentation.',
    cardImage: './Images/Python.png',
  },
  {
    title: 'JAVA',
    description: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.',
    cardImage: './Images/Java.png',
  },
];

const cardData = document.querySelector('.language-card');
languages.forEach((project) => {
  cardData.innerHTML += `<div class="col-lg-3 col-md-4 col-sm-6 my-3 mx-0 course-cards">
  <div class="card dynamic-card">
    <img src="${project.cardImage}" class="card-img-top" style="height:180px;" alt="card Images">
    <div class="card-body">
      <h5 class="card-title course-card-title">${project.title}</h5>
      <p class="card-text course-card-description">${project.description}</p>
      
    </div>
  </div>
</div>`;
});
