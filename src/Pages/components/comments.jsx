import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyCsa8Tj_5kj5ugy2PLwowp6Z0u-T6RRhJs",
    authDomain: "personal-portfolio-websi-b804f.firebaseapp.com",
    projectId: "personal-portfolio-websi-b804f",
    storageBucket: "personal-portfolio-websi-b804f.appspot.com",
    messagingSenderId: "430090594611",
    databaseURL: "https://personal-portfolio-websi-b804f-default-rtdb.firebaseio.com/",
    appId: "1:430090594611:web:e99a41451558fbd4107646"
};

firebase.initializeApp(firebaseConfig);

// Create a reference to the database
const database = firebase.database();
const dataRef = database.ref('path/to/data');

const Comments = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from Firebase
    dataRef.once('users')
      .then((snapshot) => {
        const data = snapshot.val();
        console.log(data);
        // Update the component state with the retrieved data
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {/* Use the data in component */}
      {data && (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>{value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

// export default Comments;
