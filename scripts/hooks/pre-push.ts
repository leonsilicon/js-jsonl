import { execaCommandSync as exec } from 'execa';
import process from 'node:process';

try {
	exec('pnpm run tc', { stdio: 'inherit' });
} catch {
	process.exit(1);
}
