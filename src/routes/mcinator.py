import aiohttp_jinja2
import aiohttp

router = aiohttp.web.RouteTableDef()

@router.get('/mcinator')
@aiohttp_jinja2.template('mcinator.html')
async def mcinator(req: aiohttp.web.Request):
    return {}
