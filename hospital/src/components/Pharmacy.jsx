import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Pharmacy = () => {
  const [medicineData, setMedicineData] = useState(null);
  const [error, setError] = useState(null);

  const medicineName = 'prolyte'; // Replace with user input or dynamic value

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://medicine-name-and-details.p.rapidapi.com/',
          {
            params: {
                medicineName: 'prolyte'
                    
            },
            headers: {
              'X-RapidAPI-Key': 'e631bd5615mshcf1bd37db534356p1445d7jsnaa9c527a9988',
              'X-RapidAPI-Host': 'medicine-name-and-details.p.rapidapi.com',
            },
          }
        );
        setMedicineData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [medicineName]); // Dependency array to refetch on medicineName change

  if (error) {
    return <div>Error fetching medicine details: {error.message}</div>;
  }

  if (!medicineData) {
    return <div>Loading medicine details...</div>;
  }

  // Display medicine data here (replace with your component structure)
  return (
    <div>
      <h1>{medicineData.name}</h1>
      <p>{medicineData.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default Pharmacy;
