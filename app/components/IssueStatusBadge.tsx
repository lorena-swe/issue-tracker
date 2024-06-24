import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "blue" | "orange" | "lime" }
> = {
  OPEN: { label: "Open", color: "blue" },
  IN_PROGRESS: { label: "In Progress", color: "orange" },
  CLOSED: { label: "Closed", color: "lime" },
};

const IssueStatusBadge = ({ status }: Props) => {
  return (
    <Badge color={statusMap[status].color} radius="full">
      {statusMap[status].label}
    </Badge>
  );
};

export default IssueStatusBadge;
