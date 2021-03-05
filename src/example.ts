export const isTrue = (bool: boolean) => bool === true;

export const returnObj = () => ({
  unitTesting: "it's more likely than you think",
});

export const returnPromise = (shouldSucceed = true): Promise<string> =>
  new Promise((res, rej) =>
    setTimeout(
      () =>
        shouldSucceed ? res("👍 async is ok 👍") : rej(new Error("oh, no 😭")),
      100
    )
  );
