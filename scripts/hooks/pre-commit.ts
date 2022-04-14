import { execaCommandSync as exec } from 'execa';
import process from 'node:process';

try {
	exec('pnpm exec lint-staged', { stdio: 'inherit' });
} catch {
	process.exit(1);
}
