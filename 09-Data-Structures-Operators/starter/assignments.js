/* const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      year: 2000,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];


  // destructuring arrays
  const [firstBook, secondBook] = books;
  const[ , , thirdBook] = books;

  const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

  const [[, rating], [, ratingsCount]] = ratings;
  console.log(rating, ratingsCount);

  const ratingStars = [63405, 1808];

  const [fiveStarRatings, oneStarRatings, threeStarRatings=0] = ratingStars;

  // destructuring objects
  const [book1] = books;
  const {title, ISBN, author} = book1;
  console.log(title, ISBN, author);

  const {keywords: tags} = book1;
  console.log(tags);

  const {language, programmingLanguage = 'unknown'} = books[6];

  let bookTitle = 'unknown';
  let bookAuthor = 'unknown';
  ({title: bookTitle, author: bookAuthor} = books[0]);

  const { thirdParty: {goodreads: { rating: bookRating }}}  = books[0];
  console.log(bookRating);

  const printBookInfo = function ({title, author, year = 'unknown year'}) {
    console.log(`${title} by ${author}, ${year}`);
  };

  printBookInfo(books[0]);

  // spread operators
  const bookAuthors = [...books[0].author, ...books[1].author ]
  console.log(bookAuthors);

  const spellWord = function(str) {
    console.log(...str);
  };

  spellWord('Pascal');

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest);

const { publisher: bookPublisher, ...restOfTheBook} = books[1];
console.log(bookPublisher, restOfTheBook);

const printBookAuthorsCount = function(title, ...authors) {
   console.log(`The book ${title} has ${authors.length} authors.`);
};
printBookAuthorsCount(books[0].title, ...books[0].author);
console.log(books[0].author);

const hasExamplesInJava = function (book) {
  return book.programmingLanguage === 'Java' || 'no data available';
};

console.log(hasExamplesInJava(books[3]));


for (let i = 0; i < books.length; i++) {
   books[i].onlineContent && console.log(`${books[i].title}" provides online content`);
};

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ?? console.log(`${books[i].title}" provides no data about its online content`);
};

for (let i = 0; i < books.length; i++) {
  console.log(books[i].edition ||= 1);
};

for (let i = 0; i < books.length; i++) {
  console.log(books[i].thirdParty.goodreads.rating <= 4.2 ? false : true);
};

for (let i = 0; i < books.length; i++) {
  console.log(books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.1));
};

let pageSum = 0;
for (const item of books) {
    pageSum += item.pages;
};

console.log(pageSum);

const allAuthors = [];

for (const author of books) {
  if (typeof(author.author) === 'string') {
    allAuthors.push(author.author)
  } else {
    const authorArr = [...author.author];
    allAuthors.push(...authorArr);
  }

}

console.log(allAuthors);

for (const [index, author] of allAuthors.entries()) {
  // console.log(author, index);
  console.log(`${index +1}: ${author}`);
}

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
  // ...
};

console.log(newBook);

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
  // ...
}

console.log(newBook2);

const getFirstKeyword = function(obj) {
  console.log(obj?.keywords?.[0]);  
}

getFirstKeyword(books[4]) */