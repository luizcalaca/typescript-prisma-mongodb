import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const author = await prisma.author.create({
        data: {
            name: 'Calaça'
        }
    })
    const post = await prisma.post.create({
        data: {
            title: 'New Title',
            body: 'Hello, body!',
            author: {
                connect: {
                    id: author.id
                }
            }
        }
    })

    const posts = await prisma.post.findMany({
        include: {
            author: true
        }
    })
    console.log(posts)
}

main()