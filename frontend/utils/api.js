const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const fetchEmployees = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  return response.json();
};

export const fetchEmployee = async (id) => {
  const response = await fetch(`${BASE_URL}/users/${id}`);
  return response.json();
};
export const createEmployee = async (data) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data), 
  });
  return response.json();
};

export const updateEmployee = async (id, data) => {
  const response = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteEmployee = async (id) => {
  await fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' });
};
