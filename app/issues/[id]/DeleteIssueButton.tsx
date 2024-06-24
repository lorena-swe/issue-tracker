import { Button } from "@radix-ui/themes";

interface Props {
  issueId: number;
}

const DeleteIssueButton = ({ issueId }: Props) => {
  return <Button color="crimson">Delete Issue</Button>;
};

export default DeleteIssueButton;
