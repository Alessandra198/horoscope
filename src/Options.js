import React, { useState } from "react";
import axios from "axios";

export default function Options() {
  let [sign, setSign] = useState(null);

  function handleResponse(response) {
    console.log(response);
  }

  function search() {
    alert(sign);
  }
  function handleSign(event) {
    setSign(event.target.value);
  }
  return (
    <div className="Options">
      <select onChange={handleSign}>
        <option value="">Choose your Sign</option>
        <option value="aries">Aries♈</option>
        <option value="taurus">Taurus♉</option>
        <option value="gemini">Gemini♊</option>
        <option value="cancer">Cancer♋</option>
        <option value="leo">Leo♌</option>
        <option value="virgo">Virgo♍</option>
        <option value="libra">Libra♎</option>
        <option value="scorpio">Scorpio♏</option>
        <option value="sagittarius">Sagittarius♐</option>
        <option value="capricorn">Capricorn♑</option>
        <option value="aqarius">Aquarius♒</option>
        <option value="pisces">Pisces♓</option>
      </select>
      <button onClick={search}>Search</button>
    </div>
  );
}
