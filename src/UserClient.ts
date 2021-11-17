export interface UserListItem {
  id: number;
  name: string;
  email: string;
}

export type User = UserListItem & {
  phone: string;
  adres: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  website: string;
};

export class UserClient {
  async getUsers(): Promise<UserListItem[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  }
  async getUser(id: number): Promise<User> {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    return await response.json();
  }
}
