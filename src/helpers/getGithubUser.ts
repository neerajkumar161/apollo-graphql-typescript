import fetch from 'node-fetch';

export const githubUser = async (name: String): Promise<Object> => {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const user = await response.json();
  return user;
};
