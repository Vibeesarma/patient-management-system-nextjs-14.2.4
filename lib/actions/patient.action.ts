"use server";
import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );
    console.log("🚀 ~ createUser ~ newUser:", newUser);

    return newUser;
  } catch (error: any) {
    console.log("🚀 ~ createUser ~ error:", error);

    if (error && error?.code === 409) {
      const docuements = await users.list([Query.equal("email", user.email)]);

      return docuements?.users[0];
    }
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.log("🚀 ~ getUser ~ error:", error);
  }
};
