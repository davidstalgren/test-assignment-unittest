/**
 * @jest-environment jsdom
 */

import { sendMessage } from "../ts/main";

test('should be what goes in', () => {
  let message = sendMessage('Hello World');
  expect(message).toBe('Hello World');
});