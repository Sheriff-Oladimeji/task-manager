import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";



export const PATCH = async (request: Request, { params }) => {
  try {
    const body = await request.json();
    const { title, description } = body;
    const { id } = params;
    const updateTask = await prisma.task.update({
      where: {
        id,
      },
      data: {
        title,
        description,
      },
    });
    if (!updateTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json(updateTask, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Update  Error", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request, { params}) => {
  try {
    const { id } = params;
    await prisma.task.delete({
      where: {
        id,
      },
    });

    return NextResponse.json("Task has been deleted", { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Delete  Error", error },
      { status: 500 }
    );
  }
};
