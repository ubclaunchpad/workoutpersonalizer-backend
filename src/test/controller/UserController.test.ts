import request from 'supertest';
import { Server } from 'http';
import { App } from '../../main/App';

describe('Unit tests for UserController', () => {
  let app: App;
  let expressApp: any;
  let server: Server;

  const testExistentUserId = 'b70820ae-d0a3-411b-9217-0bf2370e7139';
  const testNonExistentUserId = 'b70820ae-d0a3-411b-9217-0bf2370e7138';
  const testWorkoutId = 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae';

  beforeAll(async () => {
    app = new App();
    await app.init();
    expressApp = request(app.exposeExpressForTest().app);
    server = app.exposeExpressForTest().server;
  });

  afterAll(() => {
    server.close();
  });

  test('sanity', async () => {
    const res = await expressApp.get('/');
    expect(res.text).toEqual('Hello World');
  });

  test('GET /users/:userId', async () => {
    const res = await expressApp.get(
      '/users/b70820ae-d0a3-411b-9217-0bf2370e7139'
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      firstName: 'LP',
      lastName: 'Team',
      username: 'lp_team',
      email: 'lp_team@mail.com',
    });
  });

  test('GET /users/:userId/savedExercises', async () => {
    const res = await expressApp.get(
      '/users/b70820ae-d0a3-411b-9217-0bf2370e7139/savedExercises'
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 1,
        name: 'Side to Side Stretch',
        description: 'Stretch from side to side!',
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1.mp4',
        length: '30',
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
      },
      {
        id: 2,
        name: 'Arm Circles',
        description: 'Circular arms!',
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2.mp4',
        length: '30',
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
      },
    ]);
  });

  test('GET /users/:userId/workouts/detailed - user exists', async () => {
    const res = await expressApp.get(
      `/users/${testExistentUserId}/workouts/detailed`
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        id: 'a9af2b50-fc51-4d42-82d2-a65ad02c44ae',
        userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
        name: '8 Minutes to Intense Abs',
        imageUrl:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Exercise+1+Thumbnail.png',
        totalWorkoutTime: '510',
        creationDate: '2022-02-27T01:38:52.188Z',
        lastModificationDate: '2022-02-27T01:38:52.188Z',
        deletionDate: '2022-02-27T01:38:52.188Z',
      },
      {
        id: '5015cb45-bde5-40f4-b0b8-027d960f2e92',
        userId: 'b70820ae-d0a3-411b-9217-0bf2370e7139',
        name: '4 Minute Stretch',
        imageUrl:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+1+Thumbnail.png',
        totalWorkoutTime: '240',
        creationDate: '2022-02-27T01:38:52.188Z',
        lastModificationDate: '2022-02-27T01:38:52.188Z',
        deletionDate: '2022-02-27T01:38:52.188Z',
      },
    ]);
  });

  test('GET /users/:userId/workouts/detailed - user does not exist', async () => {
    const res = await expressApp.get(
      `/users/${testNonExistentUserId}/workouts/detailed`
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([]);
  });

  test('GET /users/:userId/workouts/basic - user exists', async () => {
    const res = await expressApp.get(
      `/users/${testExistentUserId}/workouts/basic`
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([
      {
        name: '8 Minutes to Intense Abs',
        totalWorkoutTime: '510',
        creationDate: '2022-02-27T01:38:52.188Z',
        lastModificationDate: '2022-02-27T01:38:52.188Z',
      },
      {
        name: '4 Minute Stretch',
        totalWorkoutTime: '240',
        creationDate: '2022-02-27T01:38:52.188Z',
        lastModificationDate: '2022-02-27T01:38:52.188Z',
      },
    ]);
  });

  test('GET /users/:userId/workouts/basic - user does not exist', async () => {
    const res = await expressApp.get(
      `/users/${testNonExistentUserId}/workouts/basic`
    );
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([]);
  });

  test('GET /users/:userId/workouts/basic/:workoutId', async () => {
    const res = await expressApp.get(
      `/users/${testExistentUserId}/workouts/basic/${testWorkoutId}`
    );

    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      name: '8 Minutes to Intense Abs',
      totalWorkoutTime: '510',
      creationDate: '2022-02-27T01:38:52.188Z',
      lastModificationDate: '2022-02-27T01:38:52.188Z',
    });
  });

  test('POST /users/:userId/workouts', async () => {
    const testNewWorkout = {
      id: 'a30820ae-d0a3-411b-9217-0bf2370e7139',
      name: '5 Minute Stretch',
      imageUrl: 'thisissampleimageurl',
      totalWorkoutTime: 240,
      creationDate: '2021-11-23 13:02:51.023-08',
      lastModificationDate: '2021-11-23 13:02:51.023-08',
      deletionDate: '2021-11-23 13:02:51.023-08',
    };
    const res = await expressApp
      .post(`/users/${testExistentUserId}/workouts`)
      .send(testNewWorkout);
    expect(res.status).toEqual(200);
  });

  test('DELETE /users/:userId/workouts/:workoutId', async () => {
    const res = await expressApp.delete(
      `/users/${testExistentUserId}/workouts/${testWorkoutId}`
    );
    expect(res.status).toEqual(200);
  });
});
