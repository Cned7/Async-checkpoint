// Task one: Iterating with Async/Await

async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(value);
  }
}

// iterateWithAsyncAwait([10, 20, 30, 40, 50]);


// Task two: Awaiting a Call

async function awaitCall() {
  const fakeFetch = () =>
    new Promise((resolve) => setTimeout(() => resolve(" Successfully Fetched Data"), 1000)); 
 
  const data = await fakeFetch();
  console.log("Data:", data);
}
// awaitCall();


// Task three: Handling Errors with Async/Await

async function awaitCall() {
  try {
    const fakeFetch = () => Promise.reject("API fetch failed!");
    const data = await fakeFetch();
    console.log("Data fetched:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
// awaitCall();

async function delayMessage(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay);
  });
}

async function chainedAsyncFunctions() {
  await delayMessage("First function executed", 1000);
  await delayMessage("Second function executed", 1000);
  await delayMessage("Third function executed", 1000);
}
// chainedAsyncFunctions();


// Task four: Awaiting Concurrent Requests

async function concurrentRequests() {
  const fakeFetch1 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Data from API 1"), 1000)
    );
  const fakeFetch2 = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve("Data from API 2"), 1000)
    );

  const [result1, result2] = await Promise.all([fakeFetch1(), fakeFetch2()]);
  console.log("Combined Results:", result1, result2);
}
// concurrentRequests();


// Task five: Awaiting Parallel Calls

async function parallelCalls(urls) {
  try {
    const fetchData = (url) =>
      new Promise((resolve) =>
        setTimeout(() => resolve(`Data from ${url}`), 1000)
      );
    const results = await Promise.all(urls.map(fetchData));
    console.log("Responses:", results);
  } catch (error) {
    console.error("Error during parallel calls:", error);
  }
}

parallelCalls([
  "https://api.example.com/1",
  "https://api.example.com/2",
  "https://api.example.com/3",
]);
