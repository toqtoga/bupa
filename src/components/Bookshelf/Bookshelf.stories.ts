import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bookshelf } from "./Bookshelf";
import { bookshelfFixture } from "./Bookshelf.fixture";

const meta = {
  component: Bookshelf,
} satisfies Meta<typeof Bookshelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...bookshelfFixture },
};
