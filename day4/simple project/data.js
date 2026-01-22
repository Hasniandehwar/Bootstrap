const users = [
  {
    name: "Lt Hasnain",
    image: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Computer Science student focused on real-world projects.",
    followers: 1280
  },
  {
    name: "Ali Khan",
    image: "https://images.unsplash.com/photo-1519456264917-42d0aa2e0625?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Frontend developer learning React and UI design.",
    followers: 860
  },
  {
    name: "Ahmed Raza",
    image: "https://plus.unsplash.com/premium_photo-1676736592730-bfd847c0c8c8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Backend enthusiast working with Python and Flask.",
    followers: 540
  },
  {
    name: "Sara Malik",
    image: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "UI/UX designer with a passion for clean interfaces.",
    followers: 2300
  },
  {
    name: "Hassan Ali",
    image: "https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "JavaScript learner building small daily projects.",
    followers: 410
  },
  {
    name: "Ayesha Noor",
    image: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
    bio: "CS student exploring data structures and algorithms.",
    followers: 970
  },
  {
    name: "Usman Tariq",
    image: " https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Full-stack developer in progress.",
    followers: 1500
  },
  {
    name: "Fatima Zahra",
    image: " https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Creative coder who loves animations and CSS.",
    followers: 680
  },
  {
    name: "Bilal Ahmed",
    image: " https://images.unsplash.com/photo-1618641986557-1ecd230959aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Python programmer working on automation scripts.",
    followers: 320
  },
  {
    name: "Zain Ul Abideen",
    image: " https://images.unsplash.com/photo-1627135345338-a2024b1aea9d?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Tech enthusiast learning web security basics.",
    followers: 890
  },
  {
    name: "Maryam Khan",
    image: " https://images.unsplash.com/photo-1586351012965-861624544334?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Beginner React developer building UI components.",
    followers: 760
  },
  {
    name: "Saad Hussain",
    image: " https://plus.unsplash.com/premium_photo-1682098022877-593355cd975a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Problem solver with interest in algorithms.",
    followers: 540
  },
  {
    name: "Hira Shah",
    image: " https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Web designer focusing on responsive layouts.",
    followers: 1020
  },
  {
    name: "Umar Farooq",
    image: " https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Learning Node.js and backend APIs.",
    followers: 610
  },
  {
    name: "Noor Fatima",
    image: " https://images.unsplash.com/photo-1604004555489-723a93d6ce74?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Passionate about clean code and best practices.",
    followers: 1340
  },
  {
    name: "Hamza Iqbal",
    image: " https://images.unsplash.com/photo-1519764622345-23439dd774f7?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "CS student aiming for remote developer jobs.",
    followers: 920
  },
  {
    name: "Sana Yousaf",
    image: " https://images.unsplash.com/photo-1635488640163-e5f6782cda6e?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Learning JavaScript by building small apps.",
    followers: 480
  },
  {
    name: "Arslan Mehmood",
    image: " https://images.unsplash.com/photo-1559386484-97dfc0e15539?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Interested in databases and SQL optimization.",
    followers: 700
  },
  {
    name: "Laiba Sheikh",
    image: " https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Frontend learner improving CSS skills daily.",
    followers: 560
  },
  {
    name: "Shahzaib Khan",
    image: "https://images.unsplash.com/photo-1611316185995-9624c94487d1?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Tech learner exploring full-stack development.",
    followers: 810
  },
  {
    name: "Maham Ali",
    image: " https://images.unsplash.com/photo-1514315384763-ba401779410f?q=80&w=383&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Design-oriented developer working on UI systems.",
    followers: 990
  },
  {
    name: "Danish Rauf",
    image: " https://plus.unsplash.com/premium_photo-1684953584873-322e113cd17a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Learning REST APIs and backend logic.",
    followers: 430
  },
  {
    name: "Iqra Hassan",
    image: " https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D ",
    bio: "CS student balancing theory and practice.",
    followers: 670
  },
  {
    name: "Talha Nadeem",
    image: " https://images.unsplash.com/photo-1502307100811-6bdc0981a85b?q=80&w=378&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Aspiring software engineer building projects.",
    followers: 1200
  },
  {
    name: "Anum Siddiqui",
    image: " https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D ",
    bio: "Creative frontend developer in progress.",
    followers: 880
  },
  {
    name: "Fahad Mirza",
    image: " https://images.unsplash.com/photo-1602546005687-372f3c6455ed?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Focused on mastering JavaScript fundamentals.",
    followers: 350
  },
  {
    name: "Komal Riaz",
    image: " https://plus.unsplash.com/premium_photo-1661293869113-4e4e5735b62d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXQlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D ",
    bio: "Learning modern web layouts and flexbox.",
    followers: 520
  },
  {
    name: "Adeel Qureshi",
    image: " https://images.unsplash.com/photo-1620228922597-cca58f177310?q=80&w=394&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Exploring backend development with Django.",
    followers: 760
  },
  {
    name: "Rabia Nawaz",
    image: " https://images.unsplash.com/photo-1690444963408-9573a17a8058?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Student developer aiming for clean UI/UX.",
    followers: 940
  },
  {
    name: "Shayan Abbas",
    image: " https://plus.unsplash.com/premium_photo-1673735186578-1a6cd08b8100?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
    bio: "Learning programming by building daily.",
    followers: 610
  }
];


export default users;