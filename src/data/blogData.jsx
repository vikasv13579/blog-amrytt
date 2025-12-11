export const blogPosts = [
  {
    id: "full-body-workout",
    slug: "full-body-workout",
    title: "The Ultimate Guide to Full-Body Workouts",
    date: "2025-01-23",
    image: "/images/blog.jpg",
    author_img: "/images/author.png",
    author_name: "Alex Carter",
    author_description: "With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable. His passion lies in helping clients build strength and confidence through personalized training routines. Outside the gym, Alex is an avid runner and enjoys outdoor adventures.",
    category: "Fitness",
    excerpt: "Discover exercises that target every muscle group, helping you build strength and endurance.",
    body: `<p>Discover exercises that target every muscle group, helping you build strength and endurance. Perfect for beginners and seasoned gym-goers alike.</p>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
      <blockquote>With over a decade of experience in the fitness industry, Alex specializes in strength training and functional fitness. Certified by NASM and known for his motivational style, Alex designs workout programs that are both challenging and achievable.</blockquote>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus.</p>`,
  },
  {
    id: "cardio-tips",
    slug: "cardio-tips",
    title: "5 Tips for Better Cardio Sessions",
    date: "2025-01-20",
    image: "/images/blog4.jpg",
    author_img: "/images/user1.png",
    author_name: "Maya Lee",
    author_description: "Personal trainer specializing in cardiovascular fitness.",
    category: "Travel",
    excerpt: "Improve your cardio performance with simple techniques.",
    body: `<p>Cardiovascular exercise is essential for health.</p>`,
  },
  {
    id: "meal-prep",
    slug: "meal-prep",
    title: "Meal Prep Basics for Gym Enthusiasts",
    date: "2025-01-18",
    image: "/images/blog5.jpg",
    author_img: "/images/user2.png",
    author_name: "Jordan Smith",
    author_description: "Registered dietitian specializing in sports nutrition.",
    category: "Travel",
    excerpt: "Fuel your workouts with balanced meals.",
    body: `<p>Proper nutrition is crucial for fitness goals.</p>`,
  },
  {
    id: "core-strength",
    slug: "core-strength",
    title: "Building Core Strength",
    date: "2025-01-15",
    image: "/images/blog6.jpg",
    author_img: "/images/user3.png",
    author_name: "Emma Rodriguez",
    author_description: "Pilates instructor focusing on core strength.",
    category: "Travel",
    excerpt: "A strong core is essential for stability.",
    body: `<p>Your core is the foundation of all movement.</p>`,
  },
];

export const tourGuides = [
  { name: "Wisata Kreatif", location: "Jombang, Jawa Timur", rating: 4.8, image: "/images/user1.png" },
  { name: "Wisata Moch", location: "Wonosobo, Jawa Tengah", rating: 4.9, image: "/images/user2.png" },
  { name: "Dang Hairun", location: "Bandung, Jawa Barat", rating: 4.9, image: "/images/user3.png" },
];

export const getAllBlogPosts = () => blogPosts;

export const getBlogPostBySlug = (slug) => blogPosts.find(post => post.slug === slug);

export const getRelatedPosts = (currentSlug, limit = 4) => {
  return blogPosts.filter(post => post.slug !== currentSlug).slice(0, limit);
};

export const getCommentsForPost = async (postId) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    {
      id: 1,
      name: "Kang Haerin",
      rating: 5.0,
      date: "22 Jul 2022",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
      image: "/images/user2.png",
    },
    {
      id: 2,
      name: "Kang Haerin",
      rating: 5.0,
      date: "22 Jul 2022",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
      image: "/images/user1.png",
    },
  ];
};
