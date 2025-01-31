import { builder } from "~/builder";
import {
  userTicketsApprovalStatusEnum,
  puchaseOrderPaymentStatusEnum,
  userTicketsRedemptionStatusEnum,
  selectUsersSchema,
} from "~/datasources/db/schema";
import {
  PurchaseOrderLoadable,
  PurchaseOrderPaymentStatusEnum,
} from "~/schema/purchaseOrder/types";
import {
  UserRef,
  UserTicketRef,
  PublicUserTicketRef,
} from "~/schema/shared/refs";
import { TicketLoadable } from "~/schema/ticket/types";
import { UserLoadable } from "~/schema/user/types";
import { usersFetcher } from "~/schema/user/userFetcher";

export const TicketPaymentStatus = builder.enumType("TicketPaymentStatus", {
  values: puchaseOrderPaymentStatusEnum,
});

export const TicketApprovalStatus = builder.enumType("TicketApprovalStatus", {
  values: userTicketsApprovalStatusEnum,
});

export const TicketRedemptionStatus = builder.enumType(
  "TicketRedemptionStatus",
  {
    values: userTicketsRedemptionStatusEnum,
  },
);

builder.objectType(UserTicketRef, {
  description: "Representation of a User ticket",
  fields: (t) => ({
    id: t.exposeID("id"),
    paymentStatus: t.field({
      type: PurchaseOrderPaymentStatusEnum,
      nullable: true,
      resolve: async (root, arg, context) => {
        const lodaer = PurchaseOrderLoadable.getDataloader(context);
        const purchaseOrder = await lodaer.load(root.purchaseOrderId);

        if (!purchaseOrder) {
          return null;
        }

        return purchaseOrder.purchaseOrder.purchaseOrderPaymentStatus;
      },
    }),
    user: t.field({
      type: UserRef,
      nullable: true,
      resolve: async (root, arg, context) => {
        const canRequest =
          context.USER?.id === root.userId || context.USER?.isSuperAdmin;

        if (!canRequest) {
          return null;
        }

        if (!root.userId) {
          return null;
        }

        const users = await usersFetcher.searchUsers({
          DB: context.DB,
          search: {
            userIds: [root.userId],
          },
        });

        const user = users[0];

        if (!user) {
          return null;
        }

        return selectUsersSchema.parse(users[0]);
      },
    }),
    approvalStatus: t.field({
      type: TicketApprovalStatus,
      resolve: (root) => root.approvalStatus,
    }),
    redemptionStatus: t.field({
      type: TicketRedemptionStatus,
      resolve: (root) => root.redemptionStatus,
    }),
    ticketTemplate: t.field({
      type: TicketLoadable,
      resolve: (root) => root.ticketTemplateId,
    }),
    purchaseOrder: t.field({
      type: PurchaseOrderLoadable,
      nullable: true,
      resolve: (root) => root.purchaseOrderId,
    }),
    createdAt: t.field({
      type: "DateTime",
      nullable: false,
      resolve: (root) => new Date(root.createdAt),
    }),
  }),
});

builder.objectType(PublicUserTicketRef, {
  description: "Representation of the public information of a User ticket",
  fields: (t) => ({
    id: t.exposeID("publicId"),
    userImage: t.field({
      type: "String",
      nullable: true,
      resolve: async (root, arg, context) => {
        if (!root.userId) {
          return null;
        }

        const loader = UserLoadable.getDataloader(context);
        const user = await loader.load(root.userId);

        if (!user) {
          return null;
        }

        return user.imageUrl;
      },
    }),
    userName: t.field({
      type: "String",
      nullable: true,
      resolve: async (root, arg, context) => {
        if (!root.userId) {
          return null;
        }

        const loader = UserLoadable.getDataloader(context);
        const user = await loader.load(root.userId);

        if (!user) {
          return null;
        }

        return user.username;
      },
    }),
    ticket: t.field({
      type: TicketLoadable,
      resolve: (root) => root.ticketTemplateId,
    }),
  }),
});

export const RedeemUserTicketErrorRef = builder.objectRef<{
  error: true;
  errorMessage: string;
}>("RedeemUserTicketError");

export const RedeemUserTicketError = builder.objectType(
  RedeemUserTicketErrorRef,
  {
    fields: (t) => ({
      error: t.field({
        type: "Boolean",
        resolve: () => true,
      }),
      errorMessage: t.exposeString("errorMessage", {}),
    }),
  },
);
