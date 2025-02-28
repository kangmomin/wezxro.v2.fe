import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},

	compilerOptions: {
		// onwarn 핸들러를 통해 특정 경고를 무시합니다.
		onwarn: (warning, handler) => {
		  // 경고 메시지에 'is not a valid href attribute'가 포함된 경우 무시
		  if (warning.message && warning.message.includes("is not a valid href attribute")) {
			return;
		  }
		  // "A form label must be associated with a control" 경고도 무시 (필요시)
		  if (warning.message && warning.message.includes("A form label must be associated with a control")) {
			return;
		  }
		  // 그 외 경고는 기본 핸들러로 처리
		  handler(warning);
		}
	  }
};

export default config;
