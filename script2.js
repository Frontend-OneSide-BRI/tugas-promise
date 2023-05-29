const user = [
  {
    id: 1,
    username: "hehe",
    address: "jakarta",
  },
  {
    id: 2,
    username: "huhu",
    address: "jogja",
  },
];

const transactions = [
  {
    user_id: 1,
    transaction: [
      {
        id: 1,
        status: "terkirim",
      },
      {
        id: 2,
        status: "sedang dikirim",
      },
    ],
  },
  {
    user_id: 2,
    transaction: [
      {
        id: 1,
        status: "selesai",
      },
      {
        id: 2,
        status: "dibatalkan",
      },
    ],
  },
];

const detailTransaction = [
  { id: 1, productName: "kopi", qty: 100 },
  { id: 2, productName: "teh", qty: 200 },
];


function login(username, callback) {
  setTimeout(() => {
    let response = user.filter((e) => e.username === username);
    callback(response[0]);
  }, 1000);
}

function getTransaction(userId, callback) {
  setTimeout(() => {
    let response = transactions.filter((e) => e.user_id === userId);
    return callback(response[0]);
  }, 1000);
}

function getDetailTransaction(transactionId, callback) {
  setTimeout(() => {
    let response = detailTransaction.filter((e) => e.id === transactionId);
    console.log(response);
    // return callback(response)
  }, 1000);
}

login("hehe", (user) => {
  console.log(user);
  getTransaction(user.id, (transaction) => {
    console.log(transaction);
    getDetailTransaction(transaction = transaction.transaction[0].id, function(detail) {
      console.log(detail);
    });
  });
});



// promise
function login(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(user.filter((e) => e.username === username));
    }, 1000);
  });
}

function getTransaction(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transactions.filter((e) => e.user_id === userId));
    }, 1000);
  });
}

function getDetailTransaction(transactionId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(detailTransaction.filter((e) => e.id === transactionId));
    }, 1000);
  });
}

login("hehe")
  .then((user) => {
    console.log(user);
    return getTransaction(user.id);
  })
  .then((transaction) => {
    console.log(transaction);
    return getDetailTransaction(transaction.transaction[0].id);
  })
  .then((detail) => {
    console.log(detail);
  })
  .catch((error) => {
    console.log(error);
  });