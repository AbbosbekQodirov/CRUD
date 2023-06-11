import React, { useEffect, useState } from "react";

function Main() {
  const [users, setUsers] = useState(null);

  // METHOD GET

  useEffect(() => {
    async function getAllTodos() {
      const res = await fetch("https://netflix1.pythonanywhere.com/aktyorlar/");
      const todos = await res.json();
      setUsers(todos);
    }
    getAllTodos();
  }, [users]);

  // METHOD DELETE

  const deleteEl = (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    };

    fetch(`https://netflix1.pythonanywhere.com/aktyor/${id}/`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  const updateEl = (id) => {
    const options = {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        id: 44,
        ism: "Teshavoy",
        tugilgan_yil: "2023-04-25",
        davlat: "uzb",
        jins: "Erkak",
      }),
    };

    fetch(`https://netflix1.pythonanywhere.com/aktyor/${id}/`, options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mx-auto">
      <table className="text-center">
        <thead>
          <th>
            <td>Name</td>
          </th>
          <th>
            <td>year of birth</td>
          </th>
          <th>
            <td>state</td>
          </th>
          <th>
            <td>gender</td>
          </th>
          <th>
            <td>change</td>
          </th>
          <th>
            <td>Delete</td>
          </th>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user.ism}</td>
                  <td>{user.tugilgan_yil}</td>
                  <td>{user.davlat}</td>
                  <td>{user.jins}</td>
                  <td
                    onClick={() => {
                      updateEl(user.id);
                    }}
                    className="change cursor-pointer"
                  >
                    🖋️
                  </td>
                  <td
                    onClick={() => {
                      deleteEl(user.id);
                    }}
                    className="delete cursor-pointer"
                  >
                    ❌
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;
