import React, { useState } from "react";
import logo from "./img/logo.png";

const Article = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const [Articles, setArticles] = useState([
    // Your list of articles here...

    {
      id: "1",
      articleimg:
        "https://images.unsplash.com/photo-1713791234907-0daa87dfd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Sophia Johnson",
      articleTitle: "The Rise of Artificial Intelligence",
      description:
        "Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial Artificial intelligence is rapidly transforming industries such as hArtificialrtificial intelligence is rapidly transforming industries such as hArtificialrtificial intelligence is rapidly transforming industries such as hArtificialrtificial intelligence is rapidly transforming industries such as hArtificial intelligence is rapidly transforming industries such as healthcare, finance, and transportation, with applications ranging from virtual assistants to autonomous vehicles.",
    },
    {
      id: "2",
      articleimg:
        "https://plus.unsplash.com/premium_photo-1666788167999-c8a60357d8ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Oliver Smith",
      articleTitle: "The Future of Renewable Energy",
      description:
        "Renewable energy sources such as solar and wind power are gaining prominence as alternatives to fossil fuels, offering sustainable solutions to address climate change.",
    },
    {
      id: "3",
      articleimg:
        "https://images.unsplash.com/photo-1708261432863-41fdab7b5de9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Charlotte Brown",
      articleTitle: "The Impact of Climate Change on Biodiversity",
      description:
        "Climate change is threatening biodiversity worldwide, leading to habitat loss, species extinction, and disruptions in ecosystems.",
    },
    {
      id: "4",
      articleimg:
        "https://images.unsplash.com/photo-1713252579588-641976f56ff5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Aiden Wilson",
      articleTitle: "The Future of Work in a Post-Pandemic World",
      description:
        "The COVID-19 pandemic has accelerated the adoption of remote work, leading to a reevaluation of traditional work practices and office spaces.",
    },
    {
      id: "5",
      articleimg:
        "https://plus.unsplash.com/premium_photo-1689247409203-8002a974e018?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Harper Johnson",
      articleTitle: "The Future of Space Exploration",
      description:
        "Advancements in technology and international collaborations are paving the way for ambitious space exploration missions to Mars and beyond.",
    },
    {
      id: "6",
      articleimg:
        "https://images.unsplash.com/photo-1706378886599-41ecb840e43d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Evelyn Martinez",
      articleTitle: "The Future of Artificial Intelligence in Healthcare",
      description:
        "Artificial intelligence is revolutionizing healthcare by enhancing diagnostics, personalized treatment plans, and predictive analytics.",
    },
    {
      id: "7",
      articleimg:
        "https://images.unsplash.com/photo-1713152761072-10f4007a12a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Liam Wilson",
      articleTitle: "The Future of Sustainable Agriculture",
      description:
        "Sustainable agriculture practices are essential for addressing food security, environmental conservation, and climate change mitigation.",
    },
    {
      id: "8",
      articleimg:
        "https://images.unsplash.com/photo-1713679438335-466c7a9eb54b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Ella Taylor",
      articleTitle: "The Future of Electric Vehicles",
      description:
        "Electric vehicles are becoming increasingly popular as governments and automakers invest in sustainable transportation solutions to reduce emissions and combat climate change.",
    },
    {
      id: "9",
      articleimg:
        "https://images.unsplash.com/photo-1713481544074-20f1338ddccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "William Brown",
      articleTitle: "The Future of Blockchain Technology",
      description:
        "Blockchain technology is revolutionizing industries such as finance, supply chain management, and healthcare, offering enhanced security, transparency, and efficiency.",
    },
    {
      id: "10",
      articleimg:
        "https://images.unsplash.com/photo-1713475783718-71e1230d9d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Mia Rodriguez",
      articleTitle: "The Future of Artificial Intelligence in Education",
      description:
        "Artificial intelligence is reshaping education by personalizing learning experiences, automating administrative tasks, and facilitating adaptive assessments.",
    },
    {
      id: "11",
      articleimg:
        "https://images.unsplash.com/photo-1713481544074-20f1338ddccd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8TThqVmJMYlRSd3N8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Ava Taylor",
      articleTitle: "The Future of Artificial Intelligence in Finance",
      description:
        "Artificial intelligence is transforming the finance industry by automating processes, detecting fraud, and providing personalized financial services.",
    },
    {
      id: "12",
      articleimg:
        "https://images.unsplash.com/photo-1686854015487-5e9793520174?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Lucas Wilson",
      articleTitle: "The Future of Augmented Reality",
      description:
        "Augmented reality is poised to revolutionize various industries such as gaming, retail, and education, offering immersive experiences and innovative applications.",
    },
    {
      id: "13",
      articleimg:
        "https://plus.unsplash.com/premium_photo-1705705601503-9a39e3cd4604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "Emma Jones",
      articleTitle: "The Future of Artificial Intelligence in Marketing",
      description:
        "Artificial intelligence is revolutionizing marketing strategies by analyzing consumer behavior, personalizing content, and optimizing advertising campaigns.",
    },
    {
      id: "14",
      articleimg:
        "https://images.unsplash.com/photo-1706362723628-60e8f1929ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://plus.unsplash.com/premium_photo-1711438464037-ffc4f358fc23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
      authorName: "James Brown",
      articleTitle: "The Future of Cybersecurity",
      description:
        "Cybersecurity measures are evolving to combat increasingly sophisticated cyber threats, with advancements in technologies such as artificial intelligence and blockchain.",
    },
    {
      id: "15",
      articleimg:
        "https://images.unsplash.com/photo-1706468237584-dbdb1ddfe4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://images.unsplash.com/photo-1517320191146-6d1c75fcbffd?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHw4fHx8fHx8fHx8fDE2MTc5MzE3MDc&ixlib=rb-1.2.1",
      authorName: "Noah Wilson",
      articleTitle: "The Future of Artificial Intelligence in Transportation",
      description:
        "Artificial intelligence is revolutionizing transportation systems with innovations such as autonomous vehicles, traffic management systems, and predictive maintenance.",
    },
    {
      id: "16",
      articleimg:
        "https://images.unsplash.com/photo-1713664064373-2ef2683191b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://images.unsplash.com/photo-1553706071-8f3bd6fb8e25?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHw2fHx8fHx8fHx8fDE2MTc5MzE3MDg&ixlib=rb-1.2.1",
      authorName: "Ethan Johnson",
      articleTitle: "The Future of Artificial Intelligence in Manufacturing",
      description:
        "Artificial intelligence is transforming manufacturing processes with advancements in robotics, predictive maintenance, and quality control.",
    },
    {
      id: "17",
      articleimg:
        "https://images.unsplash.com/photo-1713664063749-d7f1cb3761a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://images.unsplash.com/photo-1560263133-e9f8e57f66d2?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHwxfHx8fHx8fHx8fDE2MTc5MzE3MDk&ixlib=rb-1.2.1",
      authorName: "Daniel Brown",
      articleTitle: "The Future of Artificial Intelligence in Entertainment",
      description:
        "Artificial intelligence is revolutionizing the entertainment industry with applications such as content recommendation systems, virtual reality experiences, and deepfake technology.",
    },
    {
      id: "18",
      articleimg:
        "https://images.unsplash.com/photo-1713664063749-d7f1cb3761a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D",
      authorImg:
        "https://images.unsplash.com/photo-1524083156346-f5e2a646340f?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHwxfHx8fHx8fHx8fDE2MTc5MzE3MTA&ixlib=rb-1.2.1",
      authorName: "Matthew Wilson",
      articleTitle: "The Future of Artificial Intelligence in Retail",
      description:
        "Artificial intelligence is reshaping the retail industry with innovations such as personalized shopping experiences, inventory management systems, and cashier-less stores.",
    },
    {
      id: "19",
      articleimg:
        "https://images.unsplash.com/photo-1713791234907-0daa87dfd658?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://images.unsplash.com/photo-1584705818763-72d9d6dc8f18?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHw2fHx8fHx8fHx8fDE2MTc5MzE3MTE&ixlib=rb-1.2.1",
      authorName: "Harper Wilson",
      articleTitle: "The Future of Artificial Intelligence in Cybersecurity",
      description:
        "Artificial intelligence is playing a crucial role in cybersecurity by identifying and mitigating cyber threats, enhancing threat detection capabilities, and automating incident response.",
    },
    {
      id: "20",
      articleimg:
        "https://images.unsplash.com/photo-1708489693404-c1d41fdbe04c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
      authorImg:
        "https://images.unsplash.com/photo-1560263133-e9f8e57f66d2?w=500&auto=format&fit=crop&q=60&ixid=MnwyNzIxNzN8MHwxfGFsbHwxfHx8fHx8fHx8fDE2MTc5MzE3MTI&ixlib=rb-1.2.1",
      authorName: "Olivia Brown",
      articleTitle: "The Future of Artificial Intelligence in Entertainment",
      description:
        "Artificial intelligence is revolutionizing the entertainment industry with applications such as content recommendation systems, virtual reality experiences, and deepfake technology.",
    },
  ]);

  const handleReadMore = (index) => {
    const updatedArticles = currentItems.map((article, i) => {
      if (i === index) {
        return { ...article, showFullDescription: true };
      } else {
        return article;
      }
    });
    setArticles(updatedArticles);
  };
  
  const handleReadLess = (index) => {
    const updatedArticles = currentItems.map((article, i) => {
      if (i === index) {
        return { ...article, showFullDescription: false };
      } else {
        return article;
      }
    });
    setArticles(updatedArticles);
  };

  // Calculate the index of the last and first item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the Articles array to get the current items for the page
  const currentItems = Articles.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const [likes, setLikes] = useState(Array(currentItems.length).fill(0));
  const [isLiked, setIsLiked] = useState(Array(currentItems.length).fill(false));

  // Function to handle like button click for a specific article
  const handleLike = (articleId) => {
    const newLikes = { ...likes }; // Create a new object based on the previous likes state
    const newIsLiked = { ...isLiked }; // Create a new object based on the previous isLiked state
  
    if (!newIsLiked[articleId]) {
      newLikes[articleId] = (newLikes[articleId] || 0) + 1; // Increment like count
      newIsLiked[articleId] = true; // Set isLiked to true
    } else {
      newLikes[articleId] -= 1; // Decrement like count if unliking
      newIsLiked[articleId] = false; // Set isLiked to false
    }
  
    setLikes(newLikes); // Update likes state
    setIsLiked(newIsLiked); // Update isLiked state
  };
  
  
  const [comments, setComments] = useState(Array(currentItems.length).fill());
  const [commentText, setCommentText] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(Array(currentItems.length).fill(false));
  const handleComment = (index) => {
    // Toggle the visibility of comment input
    const newShowCommentInput = [...showCommentInput];
    newShowCommentInput[index] = !newShowCommentInput[index];
    setShowCommentInput(newShowCommentInput);
  };

  // Function to handle submitting a comment for a specific article
  const handleSubmitComment = (articleId, commentText) => {
    if (!commentText.trim()) {
      // Alert user if comment input is empty
      alert("Please write something before submitting.");
      return;
    }
    
    // Create a new comment object
    const newComment = {
      id: comments[articleId] ? comments[articleId].length + 1 : 1, // Generate a unique ID for the comment
      text: commentText
    };
  
    // Add the new comment to the comments array for the specified article ID
    setComments(prevComments => ({
      ...prevComments,
      [articleId]: prevComments[articleId] ? [...prevComments[articleId], newComment] : [newComment]
    }));
  
    // Clear the input field after submission
    setCommentText("");
  
    // Hide the comment input field after submission
    const newShowCommentInput = [...showCommentInput];
    newShowCommentInput[articleId] = false;
    setShowCommentInput(newShowCommentInput);
  };
  //  const [showSocialMedia, setShowSocialMedia] = useState(false);

  // Toggle function for showing/hiding social media icons
  const share = (articleId) => {
    setShowSocialMedia((prevState) => ({
      ...prevState,
      [articleId]: !prevState[articleId]
    }));
  };
  
  // Define state to manage visibility of social media icons for each article
  const [showSocialMedia, setShowSocialMedia] = useState({});
  
// Function to handle sharing on Twitter
const handleTwitterShare = (articleId) => {
  const twitterShareUrl = `twitter://post?message=Your%20message%20here`;
  window.open(twitterShareUrl, "_blank");
};

// Function to handle sharing on WhatsApp
const handleWhatsAppShare = (articleId) => {
  const whatsAppShareUrl = `whatsapp://send?text=Your%20message%20here&source=yourapp`;
  window.open(whatsAppShareUrl, "_blank");
};

// Function to handle sharing on Instagram
const handleInstagramShare = (articleId) => {
  const instagramShareUrl = `instagram://app?openDirectShare=true`;
  window.open(instagramShareUrl, "_blank");
};

// Function to handle sharing on Telegram
const handleTelegramShare = (articleId) => {
  const telegramShareUrl = `tg://msg?text=Your%20message%20here`;
  window.open(telegramShareUrl, "_blank");
};

  const [showCommentInputField, setShowCommentInputField] = useState({});

  // Function to handle the comment icon click
  const handleCommentClick = (articleId) => {
    // Toggle the state variable to show/hide the comment input field
    setShowCommentInputField((prevState) => ({
      ...prevState,
      [articleId]: !prevState[articleId],
    }));
  };
  
  const calculateTimeElapsed = (timestamp) => {
    const currentTime = new Date();
    const commentTime = new Date(timestamp);
    const timeDifference = currentTime - commentTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  };
  
  return (
    <div className="articlee" style={{height:"auto",textAlign:"justify"}}>
      <>
        {/* About Sidebar */}
        <div className="about-sidebar">
          <div className="gradient-layer" />
          {/* Close Button */}
          <div className="close-sidebar-widget close-button">
            <span className="flaticon-multiply" />
          </div>
          <div className="sidebar-inner">
            <div className="upper-box">
              <div className="image">
                <img src="./assets/images/resource/about-1.jpg" alt="" />
              </div>
            </div>
            {/* Social Box */}


          </div>
        </div>
        {/* End About Sidebar */}
        {/* Page Title */}
        <section
          className="page-title_two"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFydGljbGV8ZW58MHwwfDB8fHww)",
            backgroundPosition: "left",
            backgroundPositionY: "bottom",
          }}
        >
          <div
            className="page-title_two-gradient"
            style={{
              backgroundImage: "url(./assets/images/background/pattern-6.png)",
            }}
          />
          <div className="auto-container" id="top">
            <h2>Latest Article</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/">Home</a>
              </li>
              <li> Article </li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Sidebar Page Container */}
        <div className="sidebar-page-container">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Side */}
              <div className="content-side col-lg-8 col-md-12 col-sm-12">
                <div className="blog-classic">
                  {/* News Block */}
                  <div>
                    {/* Article blocks */}
                    {currentItems.map((Article, index) => (
  <div className="news-block_one" key={Article.id} style={{ paddingTop: "30px" }}>
    <div className="news-block_one-inner" style={{ marginBottom: "90px" }}>
      <div className="news-block_one-image">
        <div className="news-block_one-date">
          26 <span>oct</span>
        </div>
        <a href="blog-detail.html">
          <img
            src={Article.articleimg}
            alt=""
            style={{ objectFit: "cover", height:"600px"}}
          />
        </a>
        <div className="news-block_one-author">
          <div className="news-block_one-author_image">
            <img src={Article.authorImg} alt="" />
          </div>
          <h6 style={{color:"black"}}>{Article.authorName}</h6>
        </div>
      </div>
      <div className="news-block_one-content">
        <h4 className="news-block_one-heading">
          <a href="">{Article.articleTitle}</a>
        </h4>
        <div className="news-block_one-text">
          {Article.showFullDescription || Article.description.length <= 300 ? (
            Article.description
          ) : (
            <>
              {`${Article.description.slice(0, 300)}... `}
              <button
                style={{
                  margin: "5px 5px",
                  padding: "5px 5px",
                  backgroundColor: "#d7a222",textAlign:"justify"
                }}
                onClick={() => handleReadMore(index)}
              >
                Read More...
              </button>
            </>
          )}
          {Article.showFullDescription && (
            <button
              style={{
                margin: "5px 5px",
                padding: "5px 5px",
                backgroundColor: "#d7a222"
                ,textAlign:"justify"
              }}
              onClick={() => handleReadLess(index)}
            >
              Read Less
            </button>
          )}
        </div>
      
    <div style={{ marginTop: "30px", display: "flex", alignItems: "center", justifyContent: "space-between",textAlign:"justify" }}>
  {/* Like button with like count */}
  <div style={{ display: "flex", alignItems: "center" }}>
  <div className="mb10"  style={{ display: "flex", alignItems: "center", marginRight: "30px", marginBottom:"19px" }}>
  <span style={{ fontSize: "20px", marginRight: "5px" }}>{likes[Article.id]}</span>
  <i
    onClick={() => handleLike(Article.id)}
    className="fa-regular fa-heart"
    style={{
      fontSize: "24px",
      cursor: "pointer",
      color: isLiked[Article.id] ? "red" : "black", // Change color based on like status
      borderRadius: "100%",
    }}
  ></i>
</div>
  {/* <div className="commentt" style={{display:"block"}}> */}
    {/* Comment button with comment count */}
    {/* Comment button with comment count */}
    <div className="mb10" style={{ display: "flex", alignItems: "center", marginRight: "10px", marginBottom:"19px" }}>
  <span style={{ fontSize: "20px", marginRight: "6px",textAlign:"justify" }}>
    {comments[Article.id] ? comments[Article.id].length : 0} 
  </span>
  <i
    onClick={() => handleComment(Article.id)}
    className="fa-regular fa-comment"
    style={{ fontSize: "24px", cursor: "pointer" }}
  ></i>
</div>

{/* Input field and submit button for writing a comment */}




<div  style={{paddingBottom:"15px"}}> 
{showCommentInput[Article.id] && (
   <div className="comment-input-container">
   <input
     type="text"
     value={commentText}
     onChange={(e) => setCommentText(e.target.value)}
     placeholder="Write a comment..."
     style={{ padding: "5px", marginRight: "10px", backgroundColor: "white", color: "black" }}
   />
   {/* Submit button for submitting the comment */}
   <button
     onClick={() => handleSubmitComment(Article.id, commentText)}
     style={{ padding: "5px 10px", backgroundColor: "#d7a222", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
   >
     Submit
   </button>
 </div>
)}</div>




</div>
  {/* </div> */}


{/* Share button */}
  <div className="mb10"  style={{ display: "flex", alignItems: "center", marginBottom:"19px" }}>
    {/* Social media options */}   <i
      className="fa-solid fa-share-nodes"
      onClick={() => share(Article.id)} // Pass the article ID to the share function
      style={{
        fontSize: "24px",
        cursor: "pointer",
        marginLeft: "auto", // Push the share button to the right end
      }}
    ></i>
    {showSocialMedia[Article.id] && (
      <ul className="footer-contact_list" style={{ display: "flex", listStyleType: "none", marginRight: "10px", marginBottom: "-20px" }}>
     
        <li className="">
          <a href="#" onClick={() => handleTwitterShare(Article.id)}>
            <i className="fa-brands fa-twitter" style={{ fontSize: "25px", color: "#1DA1F2" }} />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleWhatsAppShare(Article.id)}>
            <i className="fa-brands fa-whatsapp" style={{ fontSize: "25px", color: "#25D366" }} />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleInstagramShare(Article.id)}>
            <i className="fa-brands fa-instagram" style={{ fontSize: "25px", color: "#C13584" }} />
          </a>
        </li>
        <li>
          <a href="#" onClick={() => handleTelegramShare(Article.id)}>
            <i className="fa-brands fa-telegram" style={{ fontSize: "25px", color: "#0088cc" }} />
          </a>
        </li>
      </ul>
    )}
   
  </div>
 
</div>
{showCommentInput[Article.id] && (
  <div className="comment-input-containerr">
    <input
      type="text"
      value={commentText}
      onChange={(e) => setCommentText(e.target.value)}
      placeholder="Write a comment..."
      style={{ padding: "5px", marginRight: "10px", backgroundColor: "white", color: "black",marginBottom:"20px" }}
    />
    {/* Submit button for submitting the comment */}
    <button
      onClick={() => handleSubmitComment(Article.id, commentText)}
      style={{ padding: "5px 10px", backgroundColor: "#d7a222", color: "white", border: "none", borderRadius: "5px", cursor: "pointer",marginBottom:"20px" }}
    >
      Submit
    </button>
    
  </div>
  
)}
<div className="commentdiv">
  {comments[Article.id] && comments[Article.id].map((comment) => (
    <div key={comment.id} style={{ display: "flex" }}>
      <img src={Article.authorImg} alt="" style={{ width: "50px", height: "50px", borderRadius: "25px" }} />
      <div style={{ marginLeft: "14px" }}>
        <h6 style={{ color: "black", marginTop: "10px", marginRight: "10px" }}> @{Article.authorName}</h6>
         <p style={{ fontSize: "16px"}}>{comment.text}</p>
      </div>
      <div>
      <p>{calculateTimeElapsed(comment.timestamp)}</p>

      </div>
    </div>
  ))}
</div>
      </div>
    </div>
  </div>
))}





























        
    






                    {/* Pagination */}
                    <ul className="styled-pagination text-center">
                      {/* First button */}
                      <li className="page-item" style={{ display: "none" }}>
                        <a href="#top" style={{ marginTop: "-120px" }}>
                          <button
                            className="page-link"
                            onClick={() => paginate(1)}
                            disabled={currentPage === 1}
                            style={{
                              cursor: "pointer",
                              padding: "10px 18px",
                              backgroundColor: "#d7a222", // Blue color
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                            }}
                          >
                            First <br />
                            page
                          </button>
                        </a>
                      </li>
                      <li
                        className="page-item"
                        style={{ margin: " 0px  10px 0px 15px" }}
                      >
                        <a href="#top">
                          <button
                            className="page-link"
                            onClick={() => paginate(1)}
                            disabled={currentPage === 1}
                            style={{
                              padding: "18px 18px",
                              fontSize: "14px",
                              backgroundColor: "#d7a222", // Blue color
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                            }}
                          >
                            {" "}
                            1st
                          </button>
                        </a>
                      </li>
                      {/* Previous button */}
                      <li
                        className="page-item"
                        style={{ margin: " 0px  10px 0px 15px" }}
                      >
                        <a href="#top">
                          <button
                            className="page-link"
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                            style={{
                              padding: "18px 18px",
                              fontSize: "14px",
                              backgroundColor: "#d7a222", // Blue color
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                            }}
                          >
                            <span className="fa fa-angle-double-left" />
                          </button>
                        </a>
                      </li>
                      {/* Next button */}
                      <li className="page-item">
                        <a href="#top">
                          <button
                            className="page-link"
                            onClick={() => paginate(currentPage + 1)}
                            disabled={
                              currentPage ===
                              Math.ceil(Articles.length / itemsPerPage)
                            }
                            style={{
                              padding: "18px 18px",
                              fontSize: "14px",
                              backgroundColor: "#d7a222", // Blue color
                              color: "white",
                              border: "none",
                              borderRadius: "5px",
                            }}
                          >
                            <span className="fa fa-angle-double-right" />
                          </button>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Styled Pagination */}

                {/* End Styled Pagination */}
              </div>
              {/* Sidebar Side */}
              <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                <aside
                  className="sidebar padding-left"
                  
                >
                  {/* Search Widget */}
                  <div className="sidebar-widget_two search-box">
                    <div className="widget-content">
                      <h4
                        className="sidebar-widget_title"
                        style={{ color: "#d7a222" }}
                      >
                        Search Here
                      </h4>
                      <form
                      // method="post"
                      // action="https://themerange.net/html/monic/contact.html"
                      >
                        <div className="form-group">
                          <input
                            type="search"
                            name="search-field"
                            defaultValue=""
                            placeholder="Search..."
                            required=""
                          />
                          <button type="submit">
                            <span className="icon fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <div className="sidebar-widget_two category-widget">
              <div className="widget-content">
                <h4 className="sidebar-widget_title" style={{color:"#d7a222"}}>Categories</h4>
                <ul className="service-list_two">
                  <li>
                    <a href="#">Black Lives Matter</a>
                  </li>
                  <li>
                    <a href="#">Black African Wommen</a>
                  </li>
                  <li>
                    <a href="#">Black Music</a>
                  </li>
                  <li>
                    <a href="#">Black Rights</a>
                  </li>
                  <li>
                    <a href="#">Africa &amp; Youth</a>
                  </li>
                </ul>
              </div>
            </div> */}
                  {/* Post Widget */}
                  {/* <div className="sidebar-widget_two post-widget">
              <div className="widget-content">
                <h4 className="sidebar-widget_title" style={{color:"#d7a222"}}>Latest Post</h4>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/533247/original/file-20230621-22-uh7sna.jpg?ixlib=rb-1.1.0&rect=790%2C0%2C1998%2C1998&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>
                    <a href="blog-detail.html">
                    Ja Morant shows how a ‘good guy with a gun’ can never be Black{" "}
                    </a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/402972/original/file-20210526-21-117ljvx.jpg?ixlib=rb-1.1.0&rect=137%2C0%2C3543%2C3543&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>


<a href="blog-detail.html">Here’s what I tell teachers about how to teach young students about slavery</a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
                <div className="post">
                  <div className="thumb">
                    <a href="blog-detail.html">
                      <img src="https://images.theconversation.com/files/473312/original/file-20220711-21-gukdpa.jpg?ixlib=rb-1.1.0&rect=874%2C228%2C3268%2C3268&q=45&auto=format&w=240&h=240&fit=crop" alt="" />
                    </a>
                  </div>
                  <h6>
                    <a href="blog-detail.html">
                    Climate change is white colonisation of the atmosphere. It’s time to tackle this entrenched racism
                    </a>
                  </h6>
                  <div className="post-date">April 20, 2022</div>
                </div>
              </div>
            </div> */}
                  {/* Service Widget */}

                  {/* Popular Tags */}
                  {/* <div className="sidebar-widget_two popular-tags">
              <div className="widget-content">
                <h4 className="sidebar-widget_title">Tag</h4>
                <a href="#">Business</a>
                <a href="#">Africa</a>
                <a href="#">Wommens</a>
                <a href="#">BLM</a>
                <a href="#">Sport</a>
                <a href="#">Jobs</a>
              </div>
            </div> */}
                  {/* Contact Widget */}
                  <div
                    className="sidebar-widget_two contact-widget"
                  >
                    <div
                      className="widget-content"
                      style={{
                        backgroundImage:
                          "url(./assets/images/background/pattern-7.png)", position: "sticky ", top: 0 
                      }}
                    >
                      <div className="logo">
                        <img src={logo} alt="" style={{ height: "120px" }} />
                      </div>
                      <div className="text">
                        Share your thought's here and lets discuss{" "}
                      </div>
                      {/* Button Box */}
                      <div className="contact-widget_button">
                        <a
                          className="btn-style-two theme-btn"
                          href="about.html"
                        >
                          <div className="btn-wrap">
                            <span className="text-one">Post Article</span>
                            <span className="text-two">Post Article</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* CTA Three */}

        {/* End CTA Three */}
      </>
    </div>
  );
};

export default Article;
