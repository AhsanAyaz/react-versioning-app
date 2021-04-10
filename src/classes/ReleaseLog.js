import { REGEXES } from '../constants/regexes';
class ReleaseLog {
  app;
  version;
  message;
  constructor(app, version) {
    this.app = app;
    const validVersion = REGEXES.SEMANTIC_VERSION.test(version);
    if (!validVersion) {
      throw new Error(
        'Invalid version provided. Please provide a valid version as (major.minor.patch)'
      );
    }
    this.version = version;
    this.message = `Version ${this.version} released for app ${this.app}`;
  }
}

export default ReleaseLog;
