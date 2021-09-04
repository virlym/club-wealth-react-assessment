import './App.css';
import UserDirectory from "./pages/UserDirectory"
import {Helmet} from 'react-helmet';
import React, { useState, useEffect } from 'react';
import UserAPI from "./APIs/user.js";
import CountryAPI from "./APIs/countries.js";
import CatAPI from "./APIs/cats.js";  
import ToTop from "./components/toTop.js";

function App() {
  //state for user list from the APIs
  const [userState, setUserState] = useState({
    userList: []
  });

  //on page load, populate from the APIs
  useEffect(function() {
    searchAPIs();
  }, []);

  function searchAPIs(){
    //get the static Country information first
    CountryAPI.getCountries().then(function(response){
      if(response){
        const data = response.data;
        const countryArray = [];
        //collect the country name and flag images
        for(let i = 0; i < data.length; i++){
          countryArray.push({ id: i, name: data[i].name, flag: data[i].flag});
        }

        //get the static Cat information second
        CatAPI.get100Cats().then(function(response){
          if(response){
            const data = response.data;
            let catArray = [];
            //collect the cat image
            for(let i = 0; i < data.length; i++){
              catArray.push({ id: i, pic: data[i].url });
            }
            //shuffle the images around
            const shuffledCatArray = shuffleArray(catArray);

            //get the random User information last
            UserAPI.getRandomUserNames().then(function(response){
              if(response){
                const data = response.data.results;
                const userArray = [];
                //go through the users and parse the information
                for(let i = 0; i < data.length; i++){
                  let userCountry = data[i].location.country;
                  let userFlag = "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png";

                  //get the country flag based on the current user's country
                  for(let j = 0; j < countryArray.length; j++){
                    if(userCountry === countryArray[j].name.substring(0, userCountry.length)){
                      userFlag = countryArray[j].flag;
                      break;
                    }
                  }
                  //add all the information together with a corresponding cat image
                  userArray.push({ id: i, pic: data[i].picture.large, firstName: data[i].name.first, lastName: data[i].name.last, country: data[i].location.country, flag: userFlag, age: data[i].dob.age, cat: shuffledCatArray[i].pic});
                }
                //save the information to state
                setUserState({ ...userState, userList: userArray });
              }
              else{
                console.log("no user data");
              }
            }).catch(err => console.log(err));
          }
          else{
            console.log("no cat data");
          }
        }).catch(err => console.log(err));
      }
      else{
        console.log("no country data");
      }
    }).catch(err => console.log(err));
    //there should be catches if the APIs don't respond with data, but there's just some console logs.
  }

  //shuffle the cat pics so they aren't always the same
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
      <ToTop />
      <footer>
        <small> &copy; 2021 Virlym di Aunel</small>
      </footer>
    </div>
  )
}

export default App;