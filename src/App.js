import {useEffect} from 'react'
import './App.css';

function App() {
  useEffect(function mount() {
    function onScroll() {
      scrollFunction();
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });
  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("element1").style.top = "0";
      document.getElementById("element2").style.top = "320px";
    } else {
      document.getElementById("element1").style.top = "1000px";
      document.getElementById("element2").style.top = "1000px";
    }
    if (
      document.body.scrollTop > 1800 ||
      document.documentElement.scrollTop > 1800
    ) {
      document.getElementById("element3").style.top = "320px";
    } else {
      document.getElementById("element3").style.top = "1500px";
    }
    if (
      document.body.scrollTop > 3000 ||
      document.documentElement.scrollTop > 3000
    ) {
      document.getElementById("element4").style.top = "640px";
    } else {
      document.getElementById("element4").style.top = "2500px";
    }
  }
  return (
    <div className="App">
      <div class="container">
        <div class="content1">
          <div class="card card1">
            <p class="pcard1">Alvyl</p>
          </div>
          <div class="card card2">
            <p class="pcard2">===</p>
          </div>
        </div>

        <div class="content2">
          <div class="card card3" id="element1">
            <p class="pcard3">
              Amazing products are coming up everyday, but often they lack right
              builders to build functional and beautiful products
            </p>
          </div>
          <div class="card card4" id="element2">
            <p class="pcard4">Great products need great builders</p>
          </div>
        </div>

        <div class="content3">
          <div class="card card5" id="element3">
            <p class="pcard5">
              We are a new-age people first tech agency. Your own team of
              builders.
            </p>
          </div>
        </div>

        <div class="content4">
          <div id='element4'>
            <div class="card card6">
              <p class="pcard6">What our builders are capable of ?</p>
            </div>
            <div class="card card7">
              <p class="pcard7">Design & Branding</p>
            </div>
            <div class="card card8">
              <p class="pcard8">Mobile & Web App Development</p>
            </div>
            <div class="card card9">
              <p class="pcard9">IoT, Data & Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
