export const isTrue = (bool) => bool === true;

export const returnObj = () => ({
  unitTesting: "it's more likely than you think",
});

export const returnPromise = (shouldSucceed = true) =>
  new Promise((res, rej) =>
    setTimeout(() =>
      shouldSucceed
        ? res("👍 async is ok 👍", 100)
        : rej(new Error("oh, no 😭"))
    )
  );
