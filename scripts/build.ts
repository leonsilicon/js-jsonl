import { execaCommandSync as exec } from 'execa';
import { copyPackageFiles, rmDist } from 'lionconfig';

rmDist();
exec('tsc');
exec('tsc-alias');
await copyPackageFiles();
