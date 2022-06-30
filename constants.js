// Test data
export const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2022-02-10T09:15:04.904Z',
    '2022-05-26T10:17:24.185Z',
    '2022-06-20T17:01:17.194Z',
    '2022-03-17T23:36:17.929Z',
    '2022-06-28T21:31:17.178Z',
    '2022-06-10T07:42:02.383Z',
    '2022-05-30T14:11:59.604Z',
    '2022-06-30T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

export const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2022-01-25T14:18:46.235Z',
    '2022-02-05T16:33:06.386Z',
    '2022-03-10T14:43:26.374Z',
    '2022-04-25T18:49:59.371Z',
    '2021-11-01T13:15:33.035Z',
    '2021-11-30T09:48:16.867Z',
    '2021-12-25T06:04:23.907Z',
    '2022-02-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

export const accounts = [account1, account2];