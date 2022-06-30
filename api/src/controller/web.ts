import { Http } from '@symbux/turbo';
import { Inject } from '@symbux/injector';
import { ViteProvider } from '@symbux/turbo-vite';

@Http.Controller('/')
export default class WebController {
	@Inject() private vite!: ViteProvider;

	@Http.Get('/')
	public async homePage(context: Http.Context): Promise<Http.Response> {
		return await this.vite.handleRequest(context);
	}

	@Http.Get('/about')
	public async aboutPage(context: Http.Context): Promise<Http.Response> {
		return await this.vite.handleRequest(context);
	}
}
