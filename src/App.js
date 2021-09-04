import './App.css';
import UserDirectory from "./pages/UserDirectory"
import {Helmet} from 'react-helmet';
import React, { useState, useEffect } from 'react';
import UserAPI from "./APIs/user.js";
import CountryAPI from "./APIs/countries.js";
import CatAPI from "./APIs/cats.js";  

function App() {
  
  const [userState, setUserState] = useState({
    userList: []
  });

  useEffect(function() {
    searchAPIs();
  }, []);

  function searchAPIs(){
    CountryAPI.getCountries().then(function(response){
      if(response){
        console.log("country");
        const data = response.data;
        const countryArray = [];
        for(let i = 0; i < data.length; i++){
          countryArray.push({ id: i, name: data[i].name, flag: data[i].flag});
        }

        CatAPI.get100Cats().then(function(response){
          if(response){
            console.log("cats");
            const data = response.data;
            let catArray = [];
            for(let i = 0; i < data.length; i++){
              catArray.push({ id: i, pic: data[i].url });
            }
            const shuffledCatArray = shuffleArray(catArray);

            UserAPI.getRandomUserNames().then(function(response){
              if(response){
                console.log("users");
                const data = response.data.results;
                const userArray = [];
                for(let i = 0; i < data.length; i++){
                  let userCountry = data[i].location.country;
                  let userFlag = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

                  for(let j = 0; j < countryArray.length; j++){
                    if(userCountry === countryArray[j].name.substring(0, userCountry.length)){
                      userFlag = countryArray[j].flag;
                      break;
                    }
                  }
                  userArray.push({ id: i, pic: data[i].picture.large, firstName: data[i].name.first, lastName: data[i].name.last, country: data[i].location.country, flag: userFlag, age: data[i].dob.age, cat: shuffledCatArray[i].pic});
                }
                setUserState({ ...userState, userList: userArray });
              }
            });
          }
        });
      }
    });
  }

  function shuffleArray(array){
    let newArray = array;
    let currentIndex = array.length;
    let randomIndex = 0;

    while(currentIndex !== 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return newArray;
  }

  return (
    <div className="container">
      <Helmet>
        <body className="bg-dark text-light"/>
      </Helmet>
      <UserDirectory userState={userState}/>
      <footer>
        <small> &copy; 2021 Virlym di Aunel</small>
      </footer>
    </div>
  )
}

export default App;