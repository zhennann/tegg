import { BackgroundTaskHelper } from '../src/BackgroundTaskHelper';
import sleep from 'mz-modules/sleep';
import assert from 'assert';

describe('test/BackgroundTaskHelper.test.ts', () => {
  let helper: BackgroundTaskHelper;

  beforeEach(() => {
    helper = new BackgroundTaskHelper();
    helper.logger = console as any;
  });

  describe('fn is ok', () => {
    it('should done', async () => {
      let run = false;
      helper.run(async () => {
        await sleep(10);
        run = true;
      });

      await helper.preDestroy();
      assert(run);
    });
  });

  describe('fn is timeout', () => {
    it('should done', async () => {
      let run = false;
      helper.timeout = 10;
      helper.run(async () => {
        await sleep(100);
        run = true;
      });

      await helper.preDestroy();
      assert(run === false);
    });
  });

  describe('fn reject', () => {
    it('should done', async () => {
      helper.run(async () => {
        await sleep(10);
        throw new Error('mock error');
      });

      await helper.preDestroy();
    });
  });

  describe('fn throw error', () => {
    it('should done', async () => {
      helper.run(() => {
        throw new Error('mock error');
      });

      await helper.preDestroy();
    });
  });
});
