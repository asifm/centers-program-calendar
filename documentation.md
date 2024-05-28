Gather ideas here for the documentation of the project. This can be a list of topics, a list of questions, or a list of resources.

env variable: airtable_api_key (token)


# netlify functions
https://kit.svelte.dev/docs/adapter-netlify#netlify-alternatives-to-sveltekit-functionality-netlify-functions
>> With netlify adapter, SvelteKit endpoints are hosted as Netlify Functions. Netlify function handlers have additional context, including Netlify Identity information. You can access this context via the event.platform.context field inside your hooks and +page.server or +layout.server endpoints. These are serverless functions when the edge property is false in the adapter config or edge functions when it is true.

```js
// +page.server.js
export const load = async (event) => {
	const context = event.platform.context;
	console.log(context); // shows up in your functions log in the Netlify app
};
```
