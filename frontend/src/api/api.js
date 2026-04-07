const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://backendnew-y8tg.onrender.com/api';

export const sendContactMessage = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to send message');
  }

  return response.json();
};
