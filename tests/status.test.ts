import { Status, STATUS_TEXT } from '../src';

test('Status', () => {
  // just spot check a few common codes
  expect(Status.OK).toEqual(200);
  expect(Status.NoContent).toEqual(204);
  expect(Status.NotFound).toEqual(404);
  expect(Status.InternalServerError).toEqual(500);
});

test('STATUS_TEXT', () => {
  // just spot check a few common codes
  expect(STATUS_TEXT[Status.OK]).toEqual('OK');
  expect(STATUS_TEXT[Status.NoContent]).toEqual('No Content');
  expect(STATUS_TEXT[Status.NotFound]).toEqual('Not Found');
  expect(STATUS_TEXT[Status.InternalServerError]).toEqual(
    'Internal Server Error',
  );
});
