import { test, expect } from '@playwright/test';
import { getFormattedDate } from '../utils/dateHelper';

test('Дата возвращается в нужном формате', () => {
  const date = getFormattedDate();
  expect(date).toMatch(/^\d{2}-\d{2}-\d{4}$/);
});
