import { Test, TestingModule } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UserController } from './user.controller';
import { UserService } from './user.service';

class UserServiceMock {
  createUser() {
    return {};
  }
}

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock,
        },
      ],
    }).compile();

    userController = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('createUser', () => {
    it('Deve chamar o createUser de service e retornar um objeto', () => {
      userService.createUser = jest.fn().mockReturnValue({});

      const user = userController.createUser({} as CreateUserDto);

      expect(user).toStrictEqual({});
      expect(userService.createUser).toBeCalledTimes(1);
    });
  });
});
