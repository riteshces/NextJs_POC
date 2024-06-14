export async function getData(url) {
  try {
    const res = await fetch(url, {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postData(url, postData) {
  try {
    const res = await fetch(url, {
      method: "Post",
      data: postData,
    });
    if (!res.ok) {
      throw new Error("Failed to post data");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
