const BASE_URL = `http://localhost:3000/api/v1`;

export const Auction = {
  index() {
    return fetch(`${BASE_URL}/auctions`,{
      headers: {
        'Cache-Control': 'no-cache'
      }})
      .then(res => {
        return res.json();
      })
  },

create(params) {
  return fetch(`${BASE_URL}/auctions`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => res.json());
},

show(id) {
  return fetch(`${BASE_URL}/auctions/${id}`)
    .then(res => res.json());
}
}

export const Bid = {
  create(params) {
   return fetch(`${BASE_URL}/auctions/${params.auction_id}/bids`,{
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
   }).then((res) => res.json());
  }
}

export const Session = {
create(params) {
  return fetch(`${BASE_URL}/sessions`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => {
    return res.json();
  })
},
currentUser() {
  return fetch(`${BASE_URL}/current_user`, {
    credentials: 'include'
  })
  .then((res) => res.json())
},
destroy() {
  return fetch(`${BASE_URL}/sign_out`, {
    method: 'DELETE',
    credentials: 'include'
  }).then((res) => res.json())
}
}

export const User = {

create(params) {
  return fetch(`${BASE_URL}/users`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => {
    return res.json();
  })
}
}
