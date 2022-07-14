import { ConfigService } from '@nestjs/config'
import { TypegooseModuleOptions } from 'nestjs-typegoose'

export const getMongoDbConfig = async (
  configService: ConfigService
): Promise<TypegooseModuleOptions> => {
  return { uri: configService.get('MONGO_URI') }
}
