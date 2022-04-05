import request from 'supertest';
import { Server } from 'http';
import { App } from '../../main/App';
import { Route } from '../../main/constant/Route';

describe('Unit tests for ExerciseController', () => {
  let app: App;
  let express: any;
  let server: Server;

  beforeAll(async () => {
    app = new App();
    await app.init();
    express = request(app.getExpressForTest());
    server = app.getServerForTest();
  });

  afterAll(() => {
    server.close();
  });

  test('GET /exercises', async () => {
    const res = await express.get(`${Route.EXERCISES}`);
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
        length: 30,
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
        DifficultyLevels: [],
        ExerciseTypes: [],
        Equipment: [],
        MuscleGroups: [],
      },
      {
        id: 2,
        name: 'Arm Circles',
        description: 'Circular arms!',
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+2.mp4',
        length: 30,
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
        DifficultyLevels: [],
        ExerciseTypes: [],
        Equipment: [],
        MuscleGroups: [],
      },
      {
        id: 3,
        name: 'Neck Circles',
        description: 'Rotational neck circles',
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+3+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+3.mp4',
        length: 30,
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
        DifficultyLevels: [],
        ExerciseTypes: [],
        Equipment: [],
        MuscleGroups: [],
      },
      {
        id: 4,
        name: 'Hip Flexor Right',
        description: 'Stretch your right hip flexor!',
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+4+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+4.mp4',
        length: 30,
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
        DifficultyLevels: [],
        ExerciseTypes: [],
        Equipment: [],
        MuscleGroups: [],
      },
      {
        id: 5,
        name: 'Ham String Stretch',
        description: "Let's stretch those hamstrings!",
        thumbnailSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+5+Thumbnail.png',
        videoSrc:
          'https://teamworkoutplatform.s3.us-west-2.amazonaws.com/Clip+5.mp4',
        length: 30,
        createdAt: '2022-02-27T01:38:52.138Z',
        updatedAt: '2022-02-27T01:38:52.138Z',
        DifficultyLevels: [],
        ExerciseTypes: [],
        Equipment: [],
        MuscleGroups: [],
      },
    ]);
  });

  test('POST /exercises', async () => {
    const route = `${Route.EXERCISES}`;

    let res = await express.get(route);
    const beforePostTupleCount = res.body.length;

    const newExercise = {
      id: 6,
      name: 'Pigeon Stretch',
      description: 'desc6',
      thumbnailSrc: 's',
      videoSrc: 's',
      length: 30,
    };

    res = await express.post(route).send(newExercise);

    expect(res.status).toEqual(200);
    expect(res.body.id).toEqual(newExercise.id);
    expect(res.body.name).toEqual(newExercise.name);

    res = await express.get(route);

    const afterPostTupleCount = res.body.length;
    expect(afterPostTupleCount).toEqual(beforePostTupleCount + 1);
  });
});
