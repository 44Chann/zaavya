import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const getAllBoards = async () => {
    const allBoards = await prisma.board.findMany({
        include: {
            tasks: true
        }
    })

    console.log(allBoards)
}


const CreateNewBoard = async (name) => {
    const newBoard = await prisma.board.create({
        data: {
            name: name,
        }
    })

    console.log(newBoard)
}



const addTask = async (boardID, tasKName, tag = "TODO") => {
    const newTask = await prisma.task.create({
        data: {
            boardId: boardID,
            name: tasKName,
            tag: tag
        }
    })
}



const updateTag = async (taskid, tagtoBeupdated) => {
    const updateTask = await prisma.task.update({
        where: {
            id: taskid
        },
        data: {
            tag: tagtoBeupdated
        }
    })
}


const deleteTask = async (boardId, taskId) => {
    const delteTask = await prisma.task.delete({
        where: {
            id: taskId
        }
    })
}

const getAllTodos = async (boardid) => {
    const allTodos = await prisma.task.findMany({
        where: {
            id: boardid
        }
    })
    console.log(allTodos)
}

