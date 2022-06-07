import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  name: {
    type: 'string',
  },
  description: {
    type: 'string',
  },
  status: {
    type: 'string',
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
  },
});

export default mongoose.model('Project', ProjectSchema);
