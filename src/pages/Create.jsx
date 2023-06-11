import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const navigate = useNavigate()

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [state, setState] = useState("");
    const [gender, setGender] = useState("");

    const handlesubmit=(e)=>{
        e.preventDefault()

         const options = {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: `{
        "ism": "${name}",
        "tugilgan_yil": "${age}",
        "davlat": "${state}",
        "jins": "Erkak"
    }`,
        };

fetch("https://netflix1.pythonanywhere.com/aktyorlar/", options)
  .then((response) => response.json())
  .then((response) => {
    navigate("/")
  })
  .catch((err) => console.error(err));


    }

  return (
    <div className="container mx-auto">
      <form onSubmit={handlesubmit} action="">
        <label htmlFor="">
          Name
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            type="text"
          />
        </label>
        <label htmlFor="">
          year of birth
          <input
            onChange={(e) => {
              setAge(e.target.value);
            }}
            placeholder="year of birth"
            type="date"
          />
        </label>
        <label htmlFor="">
          state
          <input
            onChange={(e) => {
              setState(e.target.value);
            }}
            placeholder="state"
            type="text"
          />
        </label>
        <label htmlFor="">
          gender
          <select
            onChange={(e) => {
              setGender(e.target.value);
            }}
            name=""
            id=""
          >
            <option value="Erkak">Erkak</option>
            <option value="Erkak">Ayol</option>
          </select>
        </label>
        <button className="bg-[orange] text-white font-bold px-3 py-1 mt-8 rounded">
          ADD
        </button>
      </form>
    </div>
  );
}

export default Create