import firebase from 'firebase/app';
import 'firebase/Firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCqklWDWC-LCfh075luUWdeClyeGqXfZhI",
    authDomain: "traveladvisor1-390015.firebaseapp.com",
    databaseURL: "https://traveladvisor1-390015-default-rtdb.firebaseio.com",
    projectId: "traveladvisor1-390015",
    storageBucket: "traveladvisor1-390015.appspot.com",
    messagingSenderId: "56884172459",
    appId: "1:56884172459:web:51c8cc97d7d73bbf05c9ee",
    measurementId: "G-Y7P09Z5MS1"
  };

  firebase.initializeApp(firebaseConfig);
const Firestore = firebase.firestore();

const restaurantsData = [
  {
     
        
          "restaurant_name": "Delicious Bites",
          "id": 1,
          "description": "Experience delightful flavors and a cozy ambiance at this restaurant.",
          "genre": "Italian Cuisine",
          "bl_latitude": 41.012345,
          "tr_latitude": 41.023456,
          "bl_longitude": 28.987654,
          "tr_longitude": 28.998765
        },
        {
          "restaurant_name": "Spice Fusion",
          "id": 2,
          "description": "Discover the perfect blend of spices and exotic flavors at this fusion restaurant.",
          "genre": "Asian Fusion",
          "bl_latitude": 41.034567,
          "tr_latitude": 41.045678,
          "bl_longitude": 28.976543,
          "tr_longitude": 28.987654
        },
        {
          "restaurant_name": "Mediterranean Delights",
          "id": 3,
          "description": "Indulge in the taste of the Mediterranean with fresh ingredients and authentic recipes.",
          "genre": "Mediterranean Cuisine",
          "bl_latitude": 41.056789,
          "tr_latitude": 41.067890,
          "bl_longitude": 28.965432,
          "tr_longitude": 28.976543
        },
        {
          "restaurant_name": "Sizzling Steaks",
          "id": 4,
          "description": "Experience the juiciest and most flavorful steaks in town at this steakhouse.",
          "genre": "Steakhouse",
          "bl_latitude": 41.078901,
          "tr_latitude": 41.090123,
          "bl_longitude": 28.954321,
          "tr_longitude": 28.965432
        },
        {
          "restaurant_name": "Fresh Catch Seafood",
          "id": 5,
          "description": "Savor the taste of the ocean with the freshest seafood dishes at this seafood restaurant.",
          "genre": "Seafood",
          "bl_latitude": 41.101234,
          "tr_latitude": 41.112345,
          "bl_longitude": 28.943210,
          "tr_longitude": 28.954321
        },
        {
          "restaurant_name": "Taste of India",
          "id": 6,
          "description": "Embark on a culinary journey to India with authentic flavors and spices.",
          "genre": "Indian Cuisine",
          "bl_latitude": 41.123456,
          "tr_latitude": 41.134567,
          "bl_longitude": 28.932109,
          "tr_longitude": 28.943210
        },
        {
          "restaurant_name": "Cozy Cafeteria",
          "id": 7,
          "description": "Relax and unwind at this cozy café with a variety of beverages and light bites.",
          "genre": "Café",
          "bl_latitude": 41.145678,
          "tr_latitude": 41.156789,
          "bl_longitude": 28.921098,
          "tr_longitude": 28.932109
        },
        {
          "restaurant_name": "Sushi Sensation",
          "id": 8,
          "description": "Experience the art of sushi-making and enjoy fresh, delectable sushi rolls.",
          "genre": "Japanese Cuisine",
          "bl_latitude": 41.167890,
          "tr_latitude": 41.179012,
          "bl_longitude": 28.909987,
          "tr_longitude": 28.921098
        },
        {
          "restaurant_name": "The Gourmet Grill",
          "id": 9,
          "description": "Indulge in gourmet flavors with perfectly grilled dishes and exquisite sides.",
          "genre": "Fine Dining",
          "bl_latitude": 41.190123,
          "tr_latitude": 41.201234,
          "bl_longitude": 28.898876,
          "tr_longitude": 28.909987
        },
        {
          "restaurant_name": "Veggie Delight",
          "id": 10,
          "description": "Enjoy a wide selection of vegetarian and vegan dishes bursting with flavor.",
          "genre": "Vegetarian Cuisine",
          "bl_latitude": 41.212345,
          "tr_latitude": 41.223456,
          "bl_longitude": 28.887765,
          "tr_longitude": 28.898876
        },
        {
          "restaurant_name": "BBQ Bonanza",
          "id": 11,
          "description": "Satisfy your cravings with a feast of smoky and succulent barbecue dishes.",
          "genre": "Barbecue",
          "bl_latitude": 41.234567,
          "tr_latitude": 41.245678,
          "bl_longitude": 28.876654,
          "tr_longitude": 28.887765
        },
        {
          "restaurant_name": "Crispy Pizzas",
          "id": 12,
          "description": "Relish the perfect combination of crispy crusts, gooey cheese, and flavorful toppings.",
          "genre": "Pizza",
          "bl_latitude": 41.256789,
          "tr_latitude": 41.267890,
          "bl_longitude": 28.865543,
          "tr_longitude": 28.876654
        },
        {
          "restaurant_name": "Tropical Paradise",
          "id": 13,
          "description": "Transport yourself to a tropical paradise with refreshing drinks and exotic dishes.",
          "genre": "Tropical Cuisine",
          "bl_latitude": 41.279012,
          "tr_latitude": 41.290123,
          "bl_longitude": 28.854432,
          "tr_longitude": 28.865543
        },
        {
          "restaurant_name": "Gourmet Burgers",
          "id": 14,
          "description": "Indulge in gourmet burgers crafted with premium ingredients and unique flavors.",
          "genre": "Burgers",
          "bl_latitude": 41.301234,
          "tr_latitude": 41.312345,
          "bl_longitude": 28.843321,
          "tr_longitude": 28.854432
        },
        {
          "restaurant_name": "Homestyle Comforts",
          "id": 15,
          "description": "Savor homestyle dishes that bring warmth and comfort with every bite.",
          "genre": "Comfort Food",
          "bl_latitude": 41.323456,
          "tr_latitude": 41.334567,
          "bl_longitude": 28.832210,
          "tr_longitude": 28.843321
        }
      
      ];

      restaurantsData.forEach((restaurant) => {
        Firestore.collection('restaurants').add(restaurant)
          .then((docRef) => {
            console.log('Restoran belgesi başarıyla eklendi:', docRef.id);
          })
          .catch((error) => {
            console.error('Restoran belgesi eklenirken hata oluştu:', error);
          });
      });
  
  export default firebaseConfig;