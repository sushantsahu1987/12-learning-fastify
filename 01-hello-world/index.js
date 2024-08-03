import Fastify from "fastify";

const fastify = Fastify({
    logger: true
})

fastify.get('/', async (req, reply)=>{
    return {hello: 'world again dudes!'}
})

try {
    await fastify.listen({port: 3000})
}catch(err) {
    fastify.log.error(err)
    process.exit(1)
}