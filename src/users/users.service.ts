import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './users.type';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async signUp(createUser: CreateUser<User>): Promise<User> {
    const { password, ...user } = createUser;
    const userExist = await this.prismaService.user.count({
      where: {
        nickname: user.nickname,
      },
    });

    if (userExist) {
      throw new ConflictException('Nickname already in use! Try another one.');
    }

    const password_hash = await hash(password, 10);

    return this.prismaService.user.create({
      data: {
        ...user,
        password: {
          create: {
            hash: password_hash,
          },
        },
      },
    });
  }

  async findAll(
    search: Partial<User>,
    orderBy: { column: string; direction: string },
  ): Promise<User[]> {
    const { roles, ...userWithoutRoles } = search;
    const searchQuery: Prisma.UserWhereInput = userWithoutRoles;

    if (roles) {
      const searchQueryRoles = {
        hasEvery: roles,
      };
      searchQuery.roles = searchQueryRoles;
    }

    const users = await this.prismaService.user.findMany({
      where: searchQuery,
      orderBy: {
        [orderBy?.column ?? 'nickname']: orderBy?.direction ?? 'asc',
      },
    });

    return users;
  }

  async findOne(id: string): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }

  async update(
    updateUserId: string,
    updateUser: Partial<User>,
  ): Promise<User | null> {
    const user = await this.prismaService.user.update({
      where: {
        id: updateUserId,
      },
      data: updateUser,
    });

    return user;
  }

  async remove(id: string): Promise<User> {
    const user = await this.prismaService.user.delete({
      where: {
        id: id,
      },
    });

    return user;
  }
}
