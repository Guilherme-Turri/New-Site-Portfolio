const API_URL = 'http://restful-api-portfolio.herokuapp.com/';

export function USER_GET() {
  return {
    url: `${API_URL}user`,
    options: {
      method: 'GET',
    },
  };
}

export function CLASS_GET() {
  return {
    url: `${API_URL}class`,
    options: {
      method: 'GET',
    },
  };
}
export function PROJECTS_GET() {
  return {
    url: `${API_URL}projects`,
    options: {
      method: 'GET',
    },
  };
}

export function EXPERIENCE_GET() {
  return {
    url: `${API_URL}experience`,
    options: {
      method: 'GET',
    },
  };
}
