'use client';

import React from 'react';
import Post from './Post'; // Import the Post component

const Posts = () => {
  // Sample posts data with different posted times
  const posts = [
    {
      id: 1,
      name: "Sugar Cubes",
      userId: 1,
      profilePic: "/photos/sugar.jpg",
      desc: "People in your life have seasons, just like pizza 🍕 toppings. Some are there for the long haul, like classic pepperoni, while others are a limited-time offer, like that wild pineapple experiment. Either way, they all add flavor to your life, whether it's savory, bitter, or sweet #therapy",
      img: "/photos/pizza.jpg",
      likes: 10,
      timeAgo: "22 mins ago",
      comments: [
        {
          id: 1,
          desc: "I ❤️ this analogy! Sometimes you get the perfect mix of flavors, and other times, it's a bit of a surprise, but it all adds up to a memorable slice of life",
          name: "Coffee Addict",
          userId: 1,
          profilePicture: "/photos/tired.jpg",
          timeAgo: "8 mins ago",
        },
        {
          id: 2,
          desc: "Such a great perspective! Life is like a pizza, always changing, and every slice has its own unique taste",
          name: "Astra Quanta",
          userId: 2,
          profilePicture: "/photos/cake.jpg",
          timeAgo: "12 mins ago",
        },
      ],
    },
    {
      id: 2,
      name: "Hello You",
      userId: 2,
      profilePic: "/photos/hello.jpg",
      desc: "My therapist recommended some books that have been incredibly comforting. Each book I've read has helped me learn more about myself and the healing process, making me feel empowered and less alone in my journey as an SA survivor",
      img: "/photos/reading.jpg",
      likes: 12,
      timeAgo: "45 mins ago",
      comments: [
        {
          id: 1,
          desc: "Have you read The Body Keeps the Score by Bessel van der Kolk? I highly recommend it!",
          name: "Bat Man",
          userId: 1,
          profilePicture: "/photos/batman.png",
          timeAgo: "5 mins ago",
        },
        {
          id: 2,
          desc: "What's that second book?",
          name: "Ice cream",
          userId: 2,
          profilePicture: "/photos/rasp.jpeg",
          timeAgo: "27 mins ago",
        },
        {
          id: 3,
          desc: "Therapy and reading together can be such a profound way to process and grow. Wishing you continued strength and peace. 🙏📖 #PersonalGrowth",
          name: "Puff Puff",
          userId: 3,
          profilePicture: "/photos/puffpuff.png",
          timeAgo: "45 mins ago",
        },
      ],
    },
    {
      id: 3,
      name: "Astra Quanta",
      userId: 3,
      profilePic: "/photos/cake.jpg",
      desc: "After my husband of 12 years walked away, leaving me with just $24 to my name, I felt as if my heart was ripped open and anxiety took root in my soul. Through therapy, I discovered a profound truth: we don’t need to shout “fire” at every shadow of fear. God has shown me that the flames of anxiety are often just the enemy’s smoke screen. I’ve learned not to let rejection define me, for my identity is firmly set by Christ ✝️ In Him, I find my worth and purpose, and with His strength, I rise above the storms within",
      likes: 9,
      timeAgo: "53 mins ago",
      comments: [
        {
          id: 1,
          desc: "Your journey is truly inspiring. It’s amazing how faith and therapy can work together to heal the heart and soul. May Allah continue to guide and strengthen you through this🌟",
          name: "Pink Icing",
          userId: 1,
          profilePicture: "/photos/cupcake.jpeg",
          timeAgo: "39 mins ago",
        },
        {
          id: 2,
          desc: "Your story is a beautiful reminder of the importance of inner peace and self-compassion. In Buddhism, we often speak of overcoming suffering through mindfulness and understanding. May you continue to find strength and serenity 🧘‍♂️",
          name: "Puff Puff",
          userId: 2,
          profilePicture: "/photos/puffpuff.png",
          timeAgo: "42 mins ago",
        },
        {
          id: 3,
          desc: "Thank you for sharing your story. In Islam, we believe that Allah tests us to grow and become stronger. Your resilience and trust in God are powerful examples for us all",
          name: "Birdy Gideon",
          userId: 3,
          profilePicture: "/photos/bird.jpg",
          timeAgo: "45 mins ago",
        },
        {
          id: 4,
          desc: " It’s incredible how God can transform our pain into a source of strength and hope. Your story is a testament to His grace and love 🌱",
          name: "Ice Cream",
          userId: 4,
          profilePicture: "/photos/rasp.jpeg",
          timeAgo: "48 mins ago",
        },
        {
          id: 5,
          desc: "Turning to therapy and religion after a breakup sounds like you’re just trying to avoid dealing with your real problems. Maybe face the facts and stop with the excuses 😑",
          name: "Sugar Cubes",
          userId: 5,
          profilePicture: "/photos/sugar.jpg",
          timeAgo: "51 mins ago",
        },
      ],
    },
    {
      id: 4,
      name: "Pink Icing",
      userId: 4,
      profilePic: "/photos/cupcake.jpeg",
      desc: "I learned in therapy that what happened to you does not define you. Growing up in an abusive home where my father was a violent man left deep scars. I spent my youth as a rebellious and angry kid, struggling with a torrent of emotions. But through therapy, I discovered that my past does not dictate my future. I found solace and transformation in ballet, a discipline that has helped me heal and rediscover myself. Now, every time I dance, I’m not just performing steps—I’m reclaiming my strength and grace, proving to myself that my past does not define my worth",
      img: "/photos/dance.jpg",
      likes: 20,
      timeAgo: "1 hour ago",
      comments: [
        {
          id: 1,
          desc: "Ballet is really such a great exercise!",
          name: "Puff Puff",
          userId: 1,
          profilePicture: "/photos/puffpuff.png",
          timeAgo: "42 mins ago",
        },
        {
          id: 2,
          desc: "Great job!",
          name: "Bat Man",
          userId: 2,
          profilePicture: "/photos/batman.png",
          timeAgo: "50 mins ago",
        },
        {
          id: 3,
          desc: "As a fellow survivor, I can relate to your struggles. It’s incredible to see how you’ve turned your life around. Ballet must be a perfect outlet for your emotions",
          name: "Astra Quanta",
          userId: 3,
          profilePicture: "/photos/cake.jpg",
          timeAgo: "1 hour ago",
        },
      ],
    },
    {
      id: 5,
      name: "Bat Man",
      userId: 5,
      profilePic: "/photos/batman.png",
      desc: "As a former people-pleaser, I know firsthand how exhausting it can be to constantly try to meet everyone’s expectations. You can bend over backward, do everything they ask, and yet somehow, it never feels like it’s enough. Despite your best efforts, you may still find that they walk away, leaving you feeling unappreciated and hollow. It's a harsh lesson that no amount of self-sacrifice can guarantee acceptance or love. I've learned that true fulfillment comes from within, and it's essential to prioritize my own well-being and self-worth over trying to please others who may never truly value me",
      likes: 5,
      timeAgo: "3 hours ago",
      comments: [
        {
          id: 1,
          desc: "Same here!",
          name: "Hello You",
          userId: 1,
          profilePicture: "/photos/hello.jpg",
          timeAgo: "29 mins ago",
        },
        {
          id: 2,
          desc: "This hits home. I’ve seen so many people exhaust themselves trying to make others happy, only to be left empty. It’s crucial to remember that our worth isn’t determined by others’ opinions🌻",
          name: "Ice Cream",
          userId: 2,
          profilePicture: "/photos/rasp.jpeg",
          timeAgo: "1 hour ago",
        },
        {
          id: 3,
          desc: "Check out the video I posted yesterday, it talks more about people pleasing",
          name: "Astra Quanta",
          userId: 3,
          profilePicture: "/photos/cake.jpg",
          timeAgo: "2 hours ago",
        },
        {
          id: 3,
          desc: "What was the turning point for you?",
          name: "Sugar Cubes",
          userId: 3,
          profilePicture: "/photos/sugar.jpg",
          timeAgo: "2 hours ago",
        },   
      ],
    },
  ];

  return (
    <div className="posts space-y-4">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
