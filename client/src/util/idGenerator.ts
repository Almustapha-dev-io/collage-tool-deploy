import { randomBytes } from 'crypto';

const idGenerator = () => randomBytes(16).toString('hex');
export default idGenerator;