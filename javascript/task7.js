

/*let apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })

  .then(function(products) {

    console.log("------- ALL PRODUCTS --------");

   
    products.forEach(function(product) {
      console.log("Title:", product.title);
      console.log("Price: $" + product.price);
      console.log("Category:", product.category);
      console.log("----------------------");
    });


  
    let productDetails = products.map(function(product) {
      return {
        title: product.title,
        price: product.price
      };
    });

    console.log("------- PRODUCT DETAILS --------");
    console.log(productDetails);


    let expensiveProducts = products.filter(function(product) {
      return product.price > 100;
    });

    console.log("------- PRODUCTS ABOVE $100 -------");
    console.log(expensiveProducts);


    let electronicsProduct = products.find(function(product) {
      return product.category === "electronics";
    });

    console.log("------- FIRST ELECTRONICS PRODUCT -------");
    console.log(electronicsProduct);


    let totalPrice = products.reduce(function(total, product) {
      return total + product.price;
    }, 0);

    console.log("------- TOTAL PRICE -------");
    console.log("$" + totalPrice.toFixed(2));



    let sortedProducts = [...products].sort(function(a, b) {
      return b.price - a.price;
    });

    console.log("------- HIGHEST TO LOWEST --------");

    sortedProducts.forEach(function(product) {
      console.log(product.title + " - $" + product.price);
    });

  })

  .catch(function(error) {
    console.log("Error fetching products:", error);
  })

  .finally(function() {
    console.log("Hello");
  }); 

  // Task 2

  let apiUrl = "https://fakestoreapi.com/products";

function displayDashboard(products) {

  console.log("------- PRODUCT DASHBOARD ---------");
  console.log("");

  
  console.log("Total Products:", products.length);
  console.log("");


  
  let electronics = products.filter(function(product) {
    return product.category === "electronics";
  });

  console.log("Electronics:", electronics.length);


  
    let jewelery = products.filter(function(product) {
    return product.category === "jewelery";
  });

  console.log("Jewelery:", jewelery.length);


  
  let mensClothing = products.filter(function(product) {
    return product.category === "men's clothing";
  });

  console.log("Men's Clothing:", mensClothing.length);


  
  let womensClothing = products.filter(function(product) {
    return product.category === "women's clothing";
  });

  console.log("Women's Clothing:", womensClothing.length);

  console.log("");


  
  let sortedProducts = [...products].sort(function(a, b) {
    return b.price - a.price;
  });

  let highestPrice = sortedProducts[0].price;

  let lowestPrice = sortedProducts[sortedProducts.length - 1].price;

  console.log("Highest Price: $" + highestPrice);
  console.log("Lowest Price: $" + lowestPrice);


  
  let totalPrice = products.reduce(function(total, product) {
    return total + product.price;
  }, 0);


  
  let averagePrice = totalPrice / products.length;

  console.log("Average Price: $" + averagePrice.toFixed(2));
}


fetch(apiUrl)

  .then(function(response) {
    return response.json();
  })

  .then(function(products) {

    displayDashboard(products);

  })

  .catch(function(error) {

    console.log("Error:", error);

  }); 

  // Task 3

  let usersUrl = "https://jsonplaceholder.typicode.com/users";
let postsUrl = "https://jsonplaceholder.typicode.com/posts";



fetch(usersUrl)

  .then(function(response) {
    return response.json();
  })

  .then(function(users) {

    console.log("-------- ALL USER NAMES --------");

   
    users.forEach(function(user) {
      console.log(user.name);
    });


    console.log("");
    console.log("-------- USER NAME + EMAIL --------");

    users.forEach(function(user) {
      console.log(
        user.name + " - " + user.email
      );
    });


    let userFive = users.find(function(user) {
      return user.id === 5;
    });

    console.log("");
    console.log("-------- USER ID 5 --------");
    console.log(userFive);


    let cityUsers = users.filter(function(user) {
      return user.address.city === "South Christy";
    });

    console.log("");
    console.log("--------- USERS FROM SOUTH CHRISTY ----------");
    console.log(cityUsers);

  })

  .catch(function(error) {

    console.log("User API Error:", error);

  });


fetch(postsUrl)

  .then(function(response) {
    return response.json();
  })

  .then(function(posts) {

  
    let userOnePosts = posts.filter(function(post) {
      return post.userId === 1;
    });


    console.log("");
    console.log("-------- POSTS BY USER ID 1 ----------");

    userOnePosts.forEach(function(post) {
      console.log("Title:", post.title);
      console.log("Body:", post.body);
      console.log("--------------------");
    });


    
    let postCount = userOnePosts.length;

    console.log("Total Posts by User 1:", postCount);


    
    let longTitlePost = posts.find(function(post) {
      return post.title.length > 50;
    });

    console.log("");
    console.log("------- FIRST TITLE ABOVE 50 CHARACTERS --------");
    console.log(longTitlePost);

  })

  .catch(function(error) {

    console.log("Post API Error:", error);

  }); 

  // task 4

  let apiUrl = "https://fakestoreapi.com/products";

let category = prompt("Enter product category:");

let maxPrice = Number(
  prompt("Enter maximum price:")
);


function searchProducts(products, category, maxPrice) {

  let result = products.filter(function(product) {

    return product.category === category &&
           product.price <= maxPrice;

  });

  return result;
}


fetch(apiUrl)

  .then(function(response) {

    return response.json();

  })

  .then(function(products) {

    let result = searchProducts(
      products,
      category,
      maxPrice
    );


    console.log("------- SEARCH RESULTS ----------");

    if (result.length === 0) {

      console.log("No products found.");

    } else {

      result.forEach(function(product) {

        console.log("ID:", product.id);
        console.log("Title:", product.title);
        console.log("Category:", product.category);
        console.log("Price: $" + product.price);
        console.log("----------------------");

      });

    }

  })

  .catch(function(error) {

    console.log("Error:", error);

  }); 

  // Task 5

  let apiUrl = "https://fakestoreapi.com/products";

let cart = [];


fetch(apiUrl)

  .then(function(response) {

    return response.json();

  })

  .then(function(products) {


    console.log("-------- AVAILABLE PRODUCTS ---------");

    products.forEach(function(product) {

      console.log(
        "ID: " + product.id +
        " | " +
        product.title +
        " | $" +
        product.price
      );

    });



    let firstId = Number(
      prompt("Enter first product ID:")
    );

    let secondId = Number(
      prompt("Enter second product ID:")
    );


   

    let productOne = products.find(function(product) {
      return product.id === firstId;
    });

    let productTwo = products.find(function(product) {
      return product.id === secondId;
    });


 

    if (productOne) {
      cart.push(productOne);
    }

    if (productTwo) {
      cart.push(productTwo);
    }


    console.log("");
    console.log("-------- CART ---------");


    cart.forEach(function(product, index) {

      console.log(
        "Product " +
        (index + 1) +
        ": " +
        product.title
      );

      console.log(
        "Price: $" +
        product.price
      );

    });



    let total = cart.reduce(function(sum, product) {

      return sum + product.price;

    }, 0);



    let discount = 0;

    if (total > 200) {

      discount = 20;

    } else if (total > 100) {

      discount = 10;

    }


    let discountAmount =
      total * discount / 100;


    let finalAmount =
      total - discountAmount;



    console.log("");
    console.log("Total: $" + total.toFixed(2));

    console.log(
      "Discount: " +
      discount +
      "%"
    );

    console.log(
      "Discount Amount: $" +
      discountAmount.toFixed(2)
    );

    console.log(
      "Final Amount: $" +
      finalAmount.toFixed(2)
    );

  })

  .catch(function(error) {

    console.log("Error fetching products:", error);

  })

  .finally(function() {

    console.log("------- CART OPERATION COMPLETED -------");

  }); */

  // Task 6

  let apiUrl = "https://fakestoreapi.com/products";


fetch(apiUrl)


  .then(function(response) {

    return response.json();

  })



  .then(function(products) {

    console.log("--------- PRODUCT REPORT -----------");
    console.log("");


    console.log(
      "Total Products: " +
      products.length
    );

    console.log("");



    console.log("---------- ALL PRODUCTS ----------");

    products.forEach(function(product) {

      console.log(
        product.title +
        " - $" +
        product.price
      );

    });


    console.log("");



    let productNames = products.map(function(product) {

      return product.title;

    });


    console.log("---------- PRODUCT NAMES ---------");

    productNames.forEach(function(name) {

      console.log("- " + name);

    });


    console.log("");


   

    let expensiveProducts = products.filter(function(product) {

      return product.price > 100;

    });


    console.log("-------- PRODUCTS ABOVE $100 ---------");

    expensiveProducts.forEach(function(product) {

      console.log(
        product.title +
        " - $" +
        product.price
      );

    });


    console.log("");



    let electronicsProduct = products.find(function(product) {

      return product.category === "electronics";

    });


    console.log("--------- ELECTRONICS PRODUCT ----------");

    console.log(
      electronicsProduct.title
    );

    console.log(
      "Price: $" +
      electronicsProduct.price
    );

    console.log("");


   

    let totalPrice = products.reduce(function(total, product) {

      return total + product.price;

    }, 0);


    console.log(
      "Total Product Value: $" +
      totalPrice.toFixed(2)
    );

    console.log("");


    let averageProduct = products.some(function(product) {

      return product.price > 500;

    });


    console.log(
      "Any Product Above $500: " +
      averageProduct
    );



    let allProducts = products.every(function(product) {

      return product.price > 1;

    });


    console.log(
      "All Products Above $1: " +
      allProducts
    );


    console.log("");



    let sortedProducts = [...products].sort(function(a, b) {

      return b.price - a.price;

    });


    console.log("------- HIGHEST → LOWEST --------");

    sortedProducts.forEach(function(product) {

      console.log(
        product.title +
        " - $" +
        product.price
      );

    });

  })



  .catch(function(error) {

    console.log(
      "Error fetching products:",
      error
    );

  })



  .finally(function() {

    console.log("");
    console.log(
      " REPORT COMPLETED "
    );

  }); 

  