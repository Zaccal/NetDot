import { createRandomDate } from "./../utils/utilsFn";
import { FromApiPostType, PostType, FromApiUser, otherUser, } from "./../types/Interfaces";
import axios from "axios";

interface userFromAPI {
  username: string,
  email: string,
  image: string, 
}

interface PostFromAPI {
  id: number,
  title: string,
  body: string 
}

export class ApiService {
  private static URL_USERS = "https://dummyjson.com/users";
  private static URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

  static async getUsers(limit: number, page: number): Promise<otherUser[]> {
    const request = await axios.get(this.URL_USERS, {
      baseURL: this.URL_USERS,
      params: {
        _limit: limit,
        _page: page,
      }
    })

    const fromAPIUsers = request.data.users.map(
      (user: FromApiUser): Pick<otherUser, 'id' | 'login'> => {
        return {
          id: user.id,
          login: user.username,
        };
      }
    );

    return fromAPIUsers;
  }

  static async getPosts(limit: number, page: number): Promise<PostType[]> {
    const usersDatas = await this.getUsers(limit, page);
    const usersPosts = await axios.get(this.URL_POSTS, {
      baseURL: this.URL_POSTS,
      params: {
        _limit: 10,
        _page: page,
      }
    })

    let resultPosts: PostType[] = []
    usersPosts.data.forEach((post: FromApiPostType, index: number) => {      
      resultPosts.push({
        postId: post.id,
        postTitle: post.title,
        postBody: post.body,
        createdDate: createRandomDate(),
        authorLogin: usersDatas[index].login,
        userId: usersDatas[index].id,
      })
    })

    return resultPosts !== undefined ? resultPosts : [];
  }

  static async getUserById(id: number | string): Promise<userFromAPI> {
    return (await axios.get(this.URL_USERS + `/${id}`)).data
  }

  static async getPostById(id: number | string): Promise<PostFromAPI> {
    return (await axios.get(this.URL_POSTS + `/${id}`)).data
  }

  static async getTotalCountPosts(): Promise<number> {
    return (await axios.get(this.URL_POSTS)).data.length
  }

  static async getTotalCountUsers(): Promise<number> {
    return (await axios.get(this.URL_USERS)).data.length
  }
}
