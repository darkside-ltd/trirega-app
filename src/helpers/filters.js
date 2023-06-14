export const formatDate = (value) => {
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(value).toLocaleDateString('en-UK', options);
  };
  