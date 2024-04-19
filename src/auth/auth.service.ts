import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser, PasswordWithUser } from 'src/users/users.type';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService, private readonly prismaService: PrismaService) {}

  async validateUser(username: string, userpassword: string): Promise<User> {
    const user = await this.findOneWithPassword(username);
    const passwordOk = await compare(userpassword, user?.password?.hash ?? "");

    if (!user || !passwordOk) {
      throw new NotFoundException('Nickname or password is incorrect.');
    }

    const { password, ...userWithoutPassword } = user;

    return userWithoutPassword;
  }

  async login(user: User) {
    const payload = user;

    return {
      token: this.jwtService.sign(payload),
    };
  }

  async findOneWithPassword(nickname: string): Promise<PasswordWithUser<User> | null> {
    const user = this.prismaService.user.findUnique({
      include: {
        password: {
          select: {
            hash: true,
          },
        },
      },
      where: {
        nickname,
      },
    });

    return user;
  }
}
