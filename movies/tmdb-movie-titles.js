// Each movie has title, date, rating, and link to your Letterboxd reviews.
const tmdbMovieData = [
    {
      title: "High and Low",
      date: "Feb 05, 2025",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/high-and-low/reviews/"
    },
    {
      title: "The Brutalist",
      date: "Jan 25, 2025",
      rating: "★★★",
      link: "https://letterboxd.com/rbadari/film/the-brutalist/reviews/"
    },
    {
      title: "Vertigo",
      date: "Dec 08, 2024",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/vertigo/reviews/"
    },
    {
      title: "Interstellar",
      date: "Dec 06, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/interstellar/reviews/"
    },
    {
      title: "Escape from Alcatraz",
      date: "Nov 25, 2024",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/escape-from-alcatraz/reviews/"
    },
    {
      title: "Metropolis",
      date: "Nov 14, 2024",
      rating: "",
      link: "https://letterboxd.com/rbadari/film/metropolis/reviews/"
    },
    {
      title: "Megalopolis",
      date: "Sep 29, 2024",
      rating: "★★",
      link: "https://letterboxd.com/rbadari/film/megalopolis-2024/reviews/"
    },
    {
      title: "Apocalypse Now",
      date: "Sep 21, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/apocalypse-now/reviews/"
    },
    {
      title: "The Graduate",
      date: "Sep 20, 2024",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/the-graduate/reviews/"
    },
    {
      title: "The Good, the Bad and the Ugly",
      date: "Aug 03, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/the-good-the-bad-and-the-ugly/reviews/"
    },
    {
      title: "For a Few Dollars More",
      date: "Jul 20, 2024",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/for-a-few-dollars-more/reviews/"
    },
    {
      title: "There Will Be Blood",
      date: "Jul 13, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/there-will-be-blood/reviews/"
    },
    {
      title: "The Lion King",
      date: "Jul 12, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/the-lion-king/reviews/"
    },
    {
      title: "Norm Macdonald: Hitler's Dog, Gossip & Trickery",
      date: "Jul 10, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/norm-macdonald-hitlers-dog-gossip-trickery/reviews/"
    },
    {
      title: "Rope",
      date: "Jul 07, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/rope/reviews/"
    },
    {
      title: "Seven Samurai",
      date: "Jul 07, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/seven-samurai/reviews/"
    },
    {
      title: "Tenet",
      date: "Jul 06, 2024",
      rating: "★★★",
      link: "https://letterboxd.com/rbadari/film/tenet/reviews/"
    },
    {
      title: "Inception",
      date: "Jul 06, 2024",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/inception/reviews/"
    },
    {
      title: "Django Unchained",
      date: "Jul 05, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/django-unchained/reviews/"
    },
    {
      title: "Blow Out",
      date: "Jul 04, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/blow-out/reviews/"
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      date: "Jun 17, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/the-lord-of-the-rings-the-return-of-the-king/reviews/"
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      date: "Jun 16, 2024",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/the-lord-of-the-rings-the-two-towers/reviews/"
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      date: "Jun 15, 2024",
      rating: "★★★",
      link: "https://letterboxd.com/rbadari/film/the-lord-of-the-rings-the-fellowship-of-the-ring/reviews/"
    },
    {
      title: "Andrei Rublev",
      date: "Apr 29, 2024",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/andrei-rublev/reviews/"
    },
    {
      title: "Mirror",
      date: "Apr 22, 2024",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/mirror/reviews/"
    },
    {
      title: "The Cotton Club",
      date: "Apr 07, 2024",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/the-cotton-club/reviews/"
    },
    {
      title: "Casino",
      date: "Feb 01, 2024",
      rating: "★★★",
      link: "https://letterboxd.com/rbadari/film/casino/reviews/"
    },
    {
      title: "The Shining",
      date: "Jan 13, 2024",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/the-shining/reviews/"
    },
    {
      title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      date: "Nov 22, 2023",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/dr-strangelove-or-how-i-learned-to-stop-worrying-and-love-the-bomb/reviews/"
    },
    {
      title: "Eve's Bayou",
      date: "Nov 13, 2023",
      rating: "★★½",
      link: "https://letterboxd.com/rbadari/film/eves-bayou/reviews/"
    },
    {
      title: "Chungking Express",
      date: "Nov 07, 2023",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/chungking-express/reviews/"
    },
    {
      title: "Sunset Boulevard",
      date: "Nov 01, 2023",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/sunset-boulevard/reviews/"
    },
    {
      title: "Cléo from 5 to 7",
      date: "Oct 25, 2023",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/cleo-from-5-to-7/reviews/"
    },
    {
      title: "Casablanca",
      date: "Oct 18, 2023",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/casablanca/reviews/"
    },
    {
      title: "Rear Window",
      date: "Oct 11, 2023",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/rear-window/reviews/"
    },
    {
      title: "Jackie Brown",
      date: "Oct 04, 2023",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/jackie-brown/reviews/"
    },
    {
      title: "Do the Right Thing",
      date: "Sep 27, 2023",
      rating: "★★★",
      link: "https://letterboxd.com/rbadari/film/do-the-right-thing/reviews/"
    },
    {
      title: "Amélie",
      date: "Sep 13, 2023",
      rating: "★★★★★",
      link: "https://letterboxd.com/rbadari/film/amelie/reviews/"
    },
    {
      title: "Citizen Kane",
      date: "Sep 06, 2023",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/citizen-kane/reviews/"
    },
    {
      title: "Run Lola Run",
      date: "Aug 23, 2023",
      rating: "★★★½",
      link: "https://letterboxd.com/rbadari/film/run-lola-run/reviews/"
    },
    {
      title: "Oppenheimer",
      date: "Jul 21, 2023",
      rating: "★★★★½",
      link: "https://letterboxd.com/rbadari/film/oppenheimer-2023/reviews/"
    },
    {
      title: "2001: A Space Odyssey",
      date: "Jul 05, 2023",
      rating: "★★★★",
      link: "https://letterboxd.com/rbadari/film/2001-a-space-odyssey/reviews/"
    }
  ];
  