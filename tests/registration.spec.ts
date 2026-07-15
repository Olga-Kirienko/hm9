import { test } from '@playwright/test';
import { getFormattedDate } from '../utils/dateHelper';
import { createRandomUser } from '../factories/userFactory';

test('Generate random user and formatted date', async () => {
  const newUser = createRandomUser();
  const formattedDate = getFormattedDate();
  console.log(newUser);
  console.log(formattedDate);
});
