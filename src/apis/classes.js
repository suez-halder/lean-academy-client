


// add a class
export const addClass = async classData => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
}

// update a room
export const updateClass = async (classData, id) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/classes/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      // authorization: `Bearer ${localStorage.getItem('access-token')}`,
    },
    body: JSON.stringify(classData),
  })

  const data = await response.json()
  return data
}

// get top 6 popular classes
export const popularClasses = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/selected/popular`)
  const data = await response.json()
  // console.log(data);
  return data
}
