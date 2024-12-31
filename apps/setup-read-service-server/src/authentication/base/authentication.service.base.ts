/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Authentication as PrismaAuthentication } from "@prisma/client";

export class AuthenticationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AuthenticationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.authentication.count(args);
  }

  async authentications(
    args: Prisma.AuthenticationFindManyArgs
  ): Promise<PrismaAuthentication[]> {
    return this.prisma.authentication.findMany(args);
  }
  async authentication(
    args: Prisma.AuthenticationFindUniqueArgs
  ): Promise<PrismaAuthentication | null> {
    return this.prisma.authentication.findUnique(args);
  }
  async createAuthentication(
    args: Prisma.AuthenticationCreateArgs
  ): Promise<PrismaAuthentication> {
    return this.prisma.authentication.create(args);
  }
  async updateAuthentication(
    args: Prisma.AuthenticationUpdateArgs
  ): Promise<PrismaAuthentication> {
    return this.prisma.authentication.update(args);
  }
  async deleteAuthentication(
    args: Prisma.AuthenticationDeleteArgs
  ): Promise<PrismaAuthentication> {
    return this.prisma.authentication.delete(args);
  }
}