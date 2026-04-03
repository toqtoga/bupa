import type { Meta, StoryObj } from "@storybook/react-vite";
import { OwnerAndBooks } from "./OwnerAndBooks";
import { ownerAndBooksFixture } from "./OwnerAndBooks.fixture";

const meta = {
  component: OwnerAndBooks,
} satisfies Meta<typeof OwnerAndBooks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...ownerAndBooksFixture },
};
