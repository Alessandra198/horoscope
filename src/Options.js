import React from "react";
import axios from "axios";

export default function Options() {
    return (
      <div className="Options">
        <select>
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
      </div>
    );
}