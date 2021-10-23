import { Router } from 'express';
// import { getCustomRepository } from 'typeorm';
// import { parseISO } from 'date-fns';
const AccountsRouter = Router();

AccountsRouter.get('/', async (request, response) => {
  const { query } = request;
  try {

    return response.json({message:"teste"});
  } catch (err) {
    return response.json(err);
  }
});


export default AccountsRouter;
