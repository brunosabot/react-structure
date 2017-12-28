export const fetchGet = async (url, args) => {
  const res = await fetch(url, {
    method: 'GET',
    ...args,
  });

  if (res.status === 401) {
    throw new Error('Unauthorized');
  }

  return res;
};

export const fetchPost = async (url, body, args) => fetchGet(url, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
  ...args,
});

export const fetchGetAuth = (url, args) => fetchGet(url, {
  credentials: 'include',
  mode: 'cors',
  ...args,
});

export const fetchPostAuth = (url, body, args) => fetchPost(url, body, {
  credentials: 'include',
  mode: 'cors',
  ...args,
});
