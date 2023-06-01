import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Document } from 'mongoose';

export type NotificationsDocument = Notifications & Document;

@Schema({ timestamps: true, strict: false })
export class Notifications {
  @Prop({ type: MongooseSchema.Types.String, required: true })
  notificationId: string;

  @Prop({ type: MongooseSchema.Types.String })
  message: string;

  @Prop({ type: MongooseSchema.Types.Date })
  readAt: Date;
}
export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
