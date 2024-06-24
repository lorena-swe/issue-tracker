"use client";

import { AlertDialog, Button, Flex } from "@radix-ui/themes";

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="crimson">Delete Issue</Button>
        </AlertDialog.Trigger>

        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Confirm Deletion</AlertDialog.Title>

          <AlertDialog.Description size="2">
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialog.Description>

          <Flex mt="4" gap="3" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button color="crimson">Delete Issue</Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
