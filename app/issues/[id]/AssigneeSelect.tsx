"use client";

import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface Props {
  issue: Issue;
}

const AssigneeSelect = ({ issue }: Props) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const assignIssue = (userId: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId === "unassigned" ? null : userId,
      })
      .catch(() => {
        toast.error("Changes could not be saved.");
      })
      .then(() => {
        toast.success("Assigned user updated successfully.");
      });
  };

  return (
    <>
      <Select.Root
        defaultValue={issue.assignedToUserId || "unassigned"}
        onValueChange={assignIssue}
      >
        <Select.Trigger placeholder="Assign to" />
        <Select.Content>
          <Select.Group>
            <Select.Label>Suggestions</Select.Label>
            <Select.Item value="unassigned">Unassigned</Select.Item>
            <Select.Separator />
            {users?.map((user) => (
              <Select.Item key={user.id} value={user.id}>
                {user.name}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Toaster></Toaster>
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((response) => response.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

export default AssigneeSelect;
