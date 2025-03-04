import { Test } from '@nestjs/testing';
import { FlowersController } from './flowers.controller';
import { FlowersService } from './flowers.service';

describe('FlowersController', () => {
  let controller: FlowersController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [FlowersController],
      providers: [
         {
            provide: FlowersService,
            useValue: {
               findAll: jest.fn().mockResolvedValue([
                  {
                     id: 1,
                     name: 'Rose',
                     color: 'Red',
                     price: 10,
                  },
               ]),
               create: jest.fn().mockResolvedValue({
                  id: 1,
                  name: 'Rose',
                  color: 'Red',
                  price: 10,
               })
            },
         },
      ],
    }).compile();

    controller = module.get<FlowersController>(FlowersController);
  });

  it('should return an array of flowers', async () => {
    expect(await controller.findAll()).toEqual([
      {
        id: 1,
        name: 'Rose',
        color: 'Red',
        price: 10,
      },
    ]);
  });

  it('should create a flower', async () => {
    expect(
      await controller.create({
        name: 'Rose',
        color: 'Red',
        price: 10,
      }),
    ).toEqual({
      id: 1,
      name: 'Rose',
      color: 'Red',
      price: 10,
    });
  });
});