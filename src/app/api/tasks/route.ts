import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
export const POST = async (request: Request) => {
  try {
    const newTask = await request.json();
    const createTask = await prisma.task.create({
      data: newTask,
    });
      return NextResponse.json(createTask,{status: 200})
  } catch (error) {
      return NextResponse.json({message: "Failed to create task", error, status: 500})
  }
};
export const GET = async (request: Request) => {
  try {
   
    const tasks = await prisma.task.findMany()
      return NextResponse.json(tasks,{status: 200})
  } catch (error) {
      return NextResponse.json({message: "Failed to fetch tasks", error, status: 500})
  }
};
