import '../public/global.css'
import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		something: 'Application'
	}
});

export default app;