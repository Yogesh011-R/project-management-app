import mongoose from 'mongoose';

const ClientSchema = new mongoose.Schema({
  name: {
    type: 'string',
  },
  email: {
    type: 'string',
  },
  phone: {
    type: 'string',
  },
});

export default mongoose.model('Client', ClientSchema);
