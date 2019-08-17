import dva from '@util/dva';
import user from './user';

const models = [
    user
];

export default models;

export const dvaApp = dva.createApp({
    initialState: {},
    models: models,
});
