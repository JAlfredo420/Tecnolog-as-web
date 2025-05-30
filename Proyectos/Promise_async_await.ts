//Promise, async, await
// Example of using async / await with Promise.all
interface User {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Network response was not ok for ${url}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data from ${url}`);
  }
};

export const fetchAllApis = async (): Promise<[User[], Post[], Comment[]]> => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchApi<User[]>("https://jsonplaceholder.typicode.com/users"),
      fetchApi<Post[]>("https://jsonplaceholder.typicode.com/posts"),
      fetchApi<Comment[]>("https://jsonplaceholder.typicode.com/comments"),
    ]);
    return [users, posts, comments];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from one or more APIs");
  }
};

//-------------------------------Parte que llevara el archivo index.ts------------------------------------------

import { fetchAllApis, fetchData, fetchDataWithAsyncAwait,} from "./29Mayo/promesa";
//------------------Parte del ejemplo Promise, async, await---------------------


  fetchAllApis()
  .then(([users, posts, comments]) => {
    console.log("Users: ", users);
    console.log("Posts: ", posts);
    console.log("Comments: ", comments);
  })
  .catch((error) => console.error(error));
  