import aiohttp_jinja2
import aiohttp
import asyncio
import jinja2

# Routes
# import routes.example as route_example
import routes.index as route_index

async def main():
    app = aiohttp.web.Application(client_max_size=67108864)

    # Load / use routes
    # app.add_routes(route_example.router)
    app.add_routes(route_index.router)

    aiohttp_jinja2.setup(app, loader=jinja2.FileSystemLoader('pages'))  # load templates/pages

    return app

if __name__ == '__main__':
    aiohttp.web.run_app(asyncio.get_event_loop().run_until_complete(main()))
