const navbarToggle = navbar.querySelector("#navbar-toggle");
const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

const reviews = [
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "This is an amazing product i personally used and found very effective for all type of skin in all weather.",
    name: "A*****",
    address: "Ghaziabad",
  },
  {
    rating: "4.7⭐",
    text: "I was using the Himalaya neem face wash since years and it was working for me. Sometime back I started getting a lot acne and my dermatologist suggested this face wash. This is my third tube and I really like the results. I don’t see a brightening effect as mentioned in the name but it does help keeping acne at bay.",
    name: "N*******",
    address: "Noida",
  },
  {
    rating: "4.9⭐",
    text: "Excellent results.......instant glow..",
    name: "A****",
    address: "Ghaziabad",
  },
  {
    rating: "4.2⭐",
    text: "Awesome product. After regular use ur skin will feel more even and cleaner. I will give bug thumsup to the product. Very useful in fighting with problems due to pollution etc.",
    name: "D*****",
    address: "Gurgaon",
  },
  {
    rating: "5⭐",
    text: "I would give 5 stars for this.very nice product",
    name: "N*****",
    address: "Jaipur",
  },
  {
    rating: "4.4⭐",
    text: "VIGA+ Whitening Cleansing Foam is a nice product with best efficacy and excellent results. With best tolerance and good texture....it make this high value for money..",
    name: "V****",
    address: "Faridabad",
  },

  {
    rating: "4.7⭐",
    text: "Facewash was very good.worth the price",
    name: "A****",
    address: "Noida",
  },
];

// Function to populate reviews
function populateReviews() {
  const reviewContainer = document.getElementById("reviewContainer");

  // Clear existing content
  reviewContainer.innerHTML = "";

  // Loop through reviews and create review cards
  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.classList.add("review-card");
    reviewCard.innerHTML = `
      <h2>${review.rating}</h2>
      <p class="review-text">${review.text}</p>
      <div class="review-info">
        <p class="reviewtextname">${review.name}</p>
        <p class="reviewtextaddress">${review.address}</p>
      </div>
    `;
    reviewContainer.appendChild(reviewCard);
  });
}

// Populate reviews on page load

setInterval(populateReviews, 2000);
