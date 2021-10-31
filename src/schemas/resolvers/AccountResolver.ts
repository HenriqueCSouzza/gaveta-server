import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Account } from '../../models/Account';
import { Create, Update } from '../inputs/Account';

@Resolver()
export class AccountResolver {
  @Query(() => [Account])
  accounts() {
    return Account.find();
  }

  @Query(() => Account)
  account(@Arg('id') id: string) {
    return Account.findOne({ where: { id } });
  }

  @Mutation(() => Account)
  async createAccount(@Arg('data') data: Create) {
    console.log('[data]', data);
    const account = Account.create(data);
    await account.save();
    return account;
  }

  @Mutation(() => Account)
  async updateAccount(@Arg('id') id: string, @Arg('data') data: Update) {
    const account = await Account.findOne({ where: { id } });
    if (!account) throw new Error('Account not found!');
    Object.assign(account, data);
    await account.save();
    return account;
  }

  @Mutation(() => Boolean)
  async deleteAccount(@Arg('id') id: string) {
    const account = await Account.findOne({ where: { id } });
    if (!account) throw new Error('Account not found!');
    await account.remove();
    return true;
  }
}
