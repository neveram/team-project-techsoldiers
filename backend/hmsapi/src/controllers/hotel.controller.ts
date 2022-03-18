import { Controller, Get, Param } from '@nestjs/common';
import { HotelService } from 'src/services/hotel.service';
import { Hotel as HotelModel } from '.prisma/client';
@Controller('api/hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get()
  getAllHotels(): Promise<HotelModel[]> {
    return this.hotelService.hotels();
  } 

  @Get('/:id')
  async getHotelById(@Param('id') id: string): Promise<HotelModel> {
    return {"id":2,"name":"Hyatt","locationid":1,"description":"New Hotel added"};
  }

}