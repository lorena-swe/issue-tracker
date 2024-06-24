"use client";

import { AlertDialog, Button, Flex, Spinner } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  const router = useRouter();
  const [error, setError] = useState(false);
  const [isDeleting, setDeleting] = useState(false);

  const deleteIssue = async () => {
    try {
      setDeleting(true);
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues/list");
      router.refresh();
    } catch (error) {
      setDeleting(false);
      setError(true);
    }
  };

  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button color="crimson" disabled={isDeleting}>
            Delete Issue
            {isDeleting && <Spinner />}
          </Button>
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
              <Button color="crimson" onClick={deleteIssue}>
                Delete Issue
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>

      <AlertDialog.Root open={error}>
        <AlertDialog.Content maxWidth="450px">
          <AlertDialog.Title>Error</AlertDialog.Title>
          <AlertDialog.Description size="2">
            This issue could not be deleted.
          </AlertDialog.Description>

          <Flex mt="4" gap="3" justify="end">
            <Button color="gray" variant="soft" onClick={() => setError(false)}>
              Close
            </Button>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>
  );
};

export default DeleteIssueButton;
