export function customDelete(url) {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "DELETE",
    headers: {
      MyName: sessionStorage.getItem("username"),
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((s) => s.json());
}

export function customGet(url) {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "GET",
    headers: {
      MyName: sessionStorage.getItem("username"),
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((s) => s.json());
}

export function customPost(url, obj) {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      MyName: sessionStorage.getItem("username"),
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(obj),
  }).then((s) => s.json());
}

export function customPut(url, obj) {
  return fetch(import.meta.env.VITE_API_URL + url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      MyName: sessionStorage.getItem("username"),
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(obj),
  }).then((s) => s.json());
}
