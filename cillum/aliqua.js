const getAuthorizationToken = async () => {
  try {
    const response = await fetch('https://example.com/token', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const token = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};
