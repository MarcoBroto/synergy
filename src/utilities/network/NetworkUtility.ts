/**
 * 
 */

async function fetchGoogleWebpage(): Promise<JSON> {
	const json = await fetch('https://www.google.com', {
		method: 'GET'
	})
		.then(res => res.json())
		.catch(err => console.log(err))
		?? ''
		
	return json
}
