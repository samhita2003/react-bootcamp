import { useState } from "react";

function App() {

  const [friends, setFriends] = useState([
    {
      name: "Aarav",
      age: 22,
      city: "Hyderabad",
      profession: "Software Engineer",
      hobbies: ["coding", "cricket", "gaming"]
    },
    {
      name: "Meera",
      age: 21,
      city: "Chennai",
      profession: "UI/UX Designer",
      hobbies: ["drawing", "traveling", "music"]
    },
    {
      name: "Rohan",
      age: 23,
      city: "Bangalore",
      profession: "Data Analyst",
      hobbies: ["reading", "football", "movies"]
    },
    {
      name: "Sneha",
      age: 22,
      city: "Pune",
      profession: "Web Developer",
      hobbies: ["coding", "dance", "photography"]
    },
    {
      name: "Karthik",
      age: 24,
      city: "Mumbai",
      profession: "DevOps Engineer",
      hobbies: ["automation", "gym", "music"]
    },
    {
      name: "Ananya",
      age: 20,
      city: "Delhi",
      profession: "Student",
      hobbies: ["reading", "blogging", "art"]
    },
    {
      name: "Vikram",
      age: 25,
      city: "Kolkata",
      profession: "Backend Developer",
      hobbies: ["coding", "chess", "movies"]
    },
    {
      name: "Pooja",
      age: 22,
      city: "Jaipur",
      profession: "Frontend Developer",
      hobbies: ["designing", "travel", "music"]
    }
  ]);

  return (
    <>
      <table
        style={{
          border: "1px solid black",
          margin: "auto",
          marginTop: "20px",
          borderCollapse: "separate",
          borderSpacing: "10px 10px",
          padding: "10px"
        }}
      >
        <tbody>

          <tr>
            <th style={{ border: "1px solid black", padding: "5px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Age</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>City</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Profession</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Hobbies</th>
            <th style={{ border: "1px solid black", padding: "5px" }}>Remove Friend</th>
          </tr>

          {friends.length === 0 ? (
            <tr>
              <td
                colSpan="6"
                style={{
                  textAlign: "center",
                  border: "1px solid black",
                  padding: "10px"
                }}
              >
                No friends to display
              </td>
            </tr>
          ) : (
            friends.map((item, ind) => {
              return (
                <tr key={item.name}>
                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.name}
                  </td>

                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.age}
                  </td>

                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.city}
                  </td>

                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.profession}
                  </td>

                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    {item.hobbies.join(", ")}
                  </td>

                  <td style={{ border: "1px solid black", padding: "5px" }}>
                    <button
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        const newFriends = [...friends];
                        newFriends.splice(ind, 1);
                        setFriends(newFriends);
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })
          )}

        </tbody>
      </table>
    </>
  );
}

export default App;