import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

type ParamsType = {
  id: string;
};
export const PATCH = async (
  request: Request,
  { params }: { params: ParamsType }
) => {
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

export const GET = async (
  request: Request,
  { params }: { params: ParamsType }
) => {
  try {
    const body = await request.json();
    const { title, description } = body;
    const { id } = params;
    const findTask = await prisma.task.findUnique({
      where: {
        id,
      },
    });
    if (!findTask) {
      return NextResponse.json({ message: "Task not found" }, { status: 404 });
    }
    return NextResponse.json(findTask, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Update  Error", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  request: Request,
  { params }: { params: ParamsType }
) => {
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
