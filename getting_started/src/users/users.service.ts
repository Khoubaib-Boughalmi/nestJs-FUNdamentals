import { Injectable } from '@nestjs/common';
import { User } from './dto/user.dto';

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'jane',
      password: 'newPass',
    },
  ];

  findOne = async (username: string): Promise<User | undefined> => {
    const user = this.users.find((user) => user.username === username);
    return user;
  };
}
