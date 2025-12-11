const defaultBlogPosts = [
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

// Get blog posts with localStorage overrides
function getBlogPostsWithUpdates() {
  if (typeof window === 'undefined') {
    return defaultBlogPosts;
  }

  const savedEdits = localStorage.getItem('blogPostEdits');
  if (!savedEdits) {
    return defaultBlogPosts;
  }

  try {
    const edits = JSON.parse(savedEdits);
    return defaultBlogPosts.map(post => {
      if (edits[post.id]) {
        return { ...post, ...edits[post.id] };
      }
      return post;
    });
  } catch (e) {
    console.error('Error loading saved edits:', e);
    return defaultBlogPosts;
  }
}

export const blogPosts = defaultBlogPosts;

export const tourGuides = [
  { name: "Wisata Kreatif", location: "Jombang, Jawa Timur", rating: 4.8, image: "/images/user1.png" },
  { name: "Wisata Moch", location: "Wonosobo, Jawa Tengah", rating: 4.9, image: "/images/user2.png" },
  { name: "Dang Hairun", location: "Bandung, Jawa Barat", rating: 4.9, image: "/images/user3.png" },
];

export const getAllBlogPosts = () => getBlogPostsWithUpdates();

export const getBlogPostBySlug = (slug) => {
  const posts = getBlogPostsWithUpdates();
  return posts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentSlug, limit = 4) => {
  const posts = getBlogPostsWithUpdates();
  return posts.filter(post => post.slug !== currentSlug).slice(0, limit);
};

// Update a blog post
export const updateBlogPost = (postId, updates) => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const savedEdits = localStorage.getItem('blogPostEdits');
    const edits = savedEdits ? JSON.parse(savedEdits) : {};
    
    edits[postId] = {
      ...(edits[postId] || {}),
      ...updates
    };
    
    localStorage.setItem('blogPostEdits', JSON.stringify(edits));
  } catch (e) {
    console.error('Error saving post edit:', e);
  }
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
