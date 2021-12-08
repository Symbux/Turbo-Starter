/**
 * The HTTP helper is a wrapper class around the Fetch API, for
 * sending HTTP requests, including, GET, POST, PUT, DELETE, PATCH.
 */
export class HttpProvider {

	/**
	 * This function will make a standard GET HTTP request, using the given
	 * URL for multiple resources or a single resource defined by an ID in
	 * the URL.
	 * 
	 * @param url The URL string to request.
	 * @param headers Optional headers for the request.
	 */
	public async get(url: string, headers?: {[key: string]: string}): Promise<Response> {
		const response = await fetch(this.resolveUrl(url), {
			method: 'GET',
			credentials: 'include',
			redirect: 'follow',
			headers: this.mergeHeaders({
				'Content-Type': 'application/json',
			}, headers),
		});
		return response;
	}

	/**
	 * This function will make a standard POST HTTP request, in which it will
	 * create a resource on the server, if the resource fails, it should respond
	 * with in kind.
	 * 
	 * @param url The URL string to request.
	 * @param body The object of data to send.
	 * @param headers Optional headers for the request.
	 */
	public async post(url: string, body: any = {}, headers?: {[key: string]: string}): Promise<Response> {
		const response = await fetch(this.resolveUrl(url), {
			method: 'POST',
			credentials: 'include',
			redirect: 'follow',
			headers: this.mergeHeaders({
				'Content-Type': 'application/json',
			}, headers),
			body: JSON.stringify(body),
		});
		return response;
	}

	/**
	 * This function will make a standard PUT HTTP request, in which it will
	 * create a resource if it does not exist, the given resource, should be an
	 * exact representation of what the server has or should expect, so do not
	 * use this method to push single key, value changes, it should be the whole
	 * object so if it was a user object, it should contain the whole user object
	 * not just an update on the name, for example.
	 * 
	 * @param url The URL string to request.
	 * @param body Optional object of data to send.
	 * @param headers Optional headers for the request.
	 */
	public async put(url: string, body: any = {}, headers?: {[key: string]: string}): Promise<Response> {
		const response = await fetch(this.resolveUrl(url), {
			method: 'PUT',
			credentials: 'include',
			redirect: 'follow',
			headers: this.mergeHeaders({
				'Content-Type': 'application/json',
			}, headers),
			body: JSON.stringify(body),
		});
		return response;
	}

	/**
	 * This function will send a PATCH request, the PATCH request is used to send a
	 * partial resource representation, so you would use this to update a few fields
	 * of an object instead of all the fields, this function is only for updating.
	 * 
	 * @param url The URL string to request.
	 * @param body Optional object of data to send.
	 * @param headers Optional headers for the request.
	 */
	public async patch(url: string, body: any = {}, headers?: {[key: string]: string}): Promise<Response> {
		const response = await fetch(this.resolveUrl(url), {
			method: 'PATCH',
			credentials: 'include',
			redirect: 'follow',
			headers: this.mergeHeaders({
				'Content-Type': 'application/json',
			}, headers),
			body: JSON.stringify(body),
		});
		return response;
	}

	/**
	 * This will send a delete request and tell the API to delete the resource with
	 * the given parameters, here you should never really send any kind of body data,
	 * but the option is there in case.
	 * 
	 * @param url The URL string to request.
	 * @param body Optional object of data to send.
	 * @param headers Optional headers for the request.
	 */
	public async delete(url: string, body: any = {}, headers?: {[key: string]: string}): Promise<Response> {
		const response = await fetch(this.resolveUrl(url), {
			method: 'DELETE',
			credentials: 'include',
			redirect: 'follow',
			headers: this.mergeHeaders({
				'Content-Type': 'application/json',
			}, headers),
			body: JSON.stringify(body),
		});
		return response;
	}

	/**
	 * This method uses the standard XHR request to send data to the server. The reason to
	 * use XHR over Fetch, is that Fetch is yet to support progress updates, it is in active
	 * development as seen here: https://www.chromestatus.com/features/5274139738767360 but
	 * until then we need to rely on XHR, hence why there is a new method for it, also note
	 * this method is used for POST only.
	 * 
	 * @param url The URL of where to post the files.
	 * @param files The FileList object of files.
	 * @param onProgress The callback to run on progress events.
	 * @param headers Optional headers for the request.
	 */
	public async upload(url: string, formdata: FormData, onProgress: (percentage: number) => void, headers?: Array<any>): Promise<ProgressEvent> {
		return new Promise((resolve, reject) => {

			// Create a new XHR request.
			const request = new XMLHttpRequest();
			request.open('POST', this.resolveUrl(url));

			// Set the headers if there are any.
			if (headers) {
				headers.forEach((value: any, key: any) => {
					request.setRequestHeader(key, value);
				});
			}

			// Define the progress event, to call the onProgress callback.
			request.upload.addEventListener('progress', (event: ProgressEvent) => {
				const percentage = Math.ceil((event.loaded / event.total) * 100);
				onProgress(percentage);
			});

			// Define the load event to resolve the promise.
			request.addEventListener('load', (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
				resolve(event);
			});

			// Define the error event to reject the promise.
			request.addEventListener('error', (event: ProgressEvent<XMLHttpRequestEventTarget>) => {
				reject(event);
			});

			// Send the request.
			request.send(formdata);
		});
	}

	/**
	 * Should return custom headers based on the original ones defined and
	 * merged with the custom ones, provided by the user.
	 * 
	 * @param original Original headers defined by the function.
	 * @param custom The user given headers.
	 */
	private mergeHeaders(original: any, custom: any): any {
		return Object.assign(original, custom);
	}

	/**
	 * This will take the URL and prefix the domain if required.
	 * Left in case you need to do any preprocessing on the URL.
	 * 
	 * @param url The user given URL.
	 */
	private resolveUrl(url: string): string {
		return url;
	}
}

export default new HttpProvider();
