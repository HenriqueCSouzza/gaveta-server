import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Account } from '../../models/Account';
import { Create, Update } from '../inputs/Account';

@Resolver()
class AccountResolver {
  @Query(() => [Account])
  accounts() {
    return Account.find();
  }

  @Query(() => Account)
  account(@Arg('uuid') uuid: string) {
    return Account.findOne({ where: { uuid } });
  }

  @Mutation(() => Account)
  async createAccount(@Arg('data') data: Create) {
    const account = Account.create(data);
    await account.save();
    return account;
  }

  @Mutation(() => Account)
  async updateAccount(@Arg('uuid') uuid: string, @Arg('data') data: Update) {
    const account = await Account.findOne({ where: { uuid } });
    if (!account) throw new Error('Account not found!');
    Object.assign(account, data);
    await account.save();
    return account;
  }

  @Mutation(() => Boolean)
  async deleteAccount(@Arg('uuid') uuid: string) {
    const account = await Account.findOne({ where: { uuid } });
    if (!account) throw new Error('Account not found!');
    await account.remove();
    return true;
  }
}

export default AccountResolver;
